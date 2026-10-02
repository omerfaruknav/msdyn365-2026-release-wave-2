/**
 * Step 02 - extract (LLM)
 *
 * Per video: summary, chapters, features, quotes, disclaimers, presenters, audience, area.
 * Input: data/transcripts/full/<id>.json. Output: pipeline/out/02-extract/<id>.json plus a
 * log of what the validator changed or dropped. Long videos are chunked into overlapping
 * windows and consolidated with a second call. Every call is cached (pipeline/.cache).
 */
import { resolve } from "node:path";
import { DATA, OUT, parseArgs } from "../lib/config.js";
import { readJson, writeJson, existsSync } from "../lib/fsx.js";
import { complete, defaultModel, pMap } from "../lib/llm.js";
import { checkQuote, type Seg } from "../lib/quotes.js";
import { windowSchema, consolidateSchema } from "./schema.js";
import { SYSTEM, PROMPT_VERSION, windowPrompt, consolidatePrompt } from "./prompts.js";

const WINDOW_THRESHOLD = 20 * 60;   // chunk videos longer than this
const WINDOW_SIZE = 15 * 60;
const WINDOW_OVERLAP = 2 * 60;

export interface ExtractedFeature {
  name: string; description: string; status: string; status_evidence_t: number | null; status_evidence_quote: string | null;
  status_evidence_verified: boolean; t_start: number; t_end: number; is_demoed: boolean; demo_t_start: number | null; demo_t_end: number | null;
  caveats: string[]; prerequisites: string[]; tags: string[]; dev_relevance: "high" | "medium" | "low"; area: string;
}
export interface Extracted {
  id: string; title: string; wave: string; duration_seconds: number; summary: string; area: string; audience: string[];
  presenters: { name: string; confidence: string }[]; chapters: { t_start: number; t_end: number; title: string }[];
  features: ExtractedFeature[]; quotes: { t: number; text: string; why_it_matters: string; check: string; truncated?: boolean }[];
  disclaimers: { t: number; kind: string; text: string }[]; windows: number; llm: { backend: string; model: string; prompt_version: string; cached: boolean }[];
  extracted_at: string;
}

function makeWindows(segs: Seg[], duration: number): Seg[][] {
  if (duration <= WINDOW_THRESHOLD) return [segs];
  const windows: Seg[][] = [];
  let start = 0;
  while (start < duration) {
    const end = start + WINDOW_SIZE;
    const w = segs.filter((s) => s.t >= start && s.t < end);
    if (w.length) windows.push(w);
    if (end >= duration) break;
    start = end - WINDOW_OVERLAP;
  }
  return windows;
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

function dedupeByTime<T extends { t: number; text: string }>(items: T[], sec = 15): T[] {
  const out: T[] = [];
  for (const it of items.sort((a, b) => a.t - b.t)) {
    const dup = out.find((o) => Math.abs(o.t - it.t) <= sec && (o.text === it.text || o.text.includes(it.text) || it.text.includes(o.text)));
    if (!dup) out.push(it);
  }
  return out;
}

async function extractVideo(v: any, wave: string, model: string): Promise<Extracted> {
  const tr = readJson<any>(resolve(DATA, "transcripts", "full", `${v.id}.json`));
  const segs: Seg[] = tr.segments;
  const duration = v.duration_seconds;
  const windows = makeWindows(segs, duration);
  const llmMeta: Extracted["llm"] = [];
  const results = await pMap(windows, async (w, i) => {
    const res = await complete<any>({
      tag: "02-extract", promptVersion: PROMPT_VERSION, system: SYSTEM, model,
      prompt: windowPrompt({ title: v.title, videoId: v.id, wave, duration, windowIndex: i, windowCount: windows.length, segments: w }),
      schema: windowSchema, label: `${v.id} window ${i + 1}/${windows.length}`,
    });
    llmMeta.push({ backend: res.meta.backend, model: res.meta.model, prompt_version: res.meta.prompt_version, cached: res.cached });
    return res.output;
  }, 2);

  let core: any;
  if (results.length === 1) core = results[0];
  else {
    const res = await complete<any>({
      tag: "02-extract", promptVersion: PROMPT_VERSION, system: SYSTEM, model,
      prompt: consolidatePrompt({ title: v.title, videoId: v.id, duration, windows: results }),
      schema: consolidateSchema, label: `${v.id} consolidate`,
    });
    llmMeta.push({ backend: res.meta.backend, model: res.meta.model, prompt_version: res.meta.prompt_version, cached: res.cached });
    core = res.output;
  }
  const log: any = { id: v.id, quotes: [], evidence: [], chapters: [] };

  // quotes: validate against segments
  const rawQuotes = results.flatMap((r) => r.quotes ?? []);
  const quotes: Extracted["quotes"] = [];
  for (const q of rawQuotes) {
    const c = checkQuote(segs, q.text, q.t);
    if (!c.ok) { log.quotes.push({ dropped: true, reason: c.reason, t: q.t, text: q.text.split(/\s+/).slice(0, 12).join(" ") }); continue; }
    if (c.reason !== "exact") log.quotes.push({ dropped: false, reason: c.reason, from_t: q.t, to_t: c.t });
    quotes.push({ t: c.t, text: c.text, why_it_matters: q.why_it_matters, check: c.reason, ...(c.truncated ? { truncated: true } : {}) });
  }
  const seenQ = new Set<string>();
  const uniqueQuotes = quotes.filter((q) => { const k = `${Math.round(q.t)}|${q.text.toLowerCase()}`; if (seenQ.has(k)) return false; seenQ.add(k); return true; }).sort((a, b) => a.t - b.t);

  // disclaimers: merge windows, validate text loosely (keep even if not verbatim, but clamp t)
  const disclaimers = dedupeByTime(results.flatMap((r) => r.disclaimers ?? []).map((d: any) => ({ ...d, t: clamp(d.t, 0, duration) })));

  // features: clamp ranges, validate status evidence quote
  const features: ExtractedFeature[] = (core.features ?? []).map((f: any) => {
    let evT = f.status_evidence_t, evQ = f.status_evidence_quote, verified = false;
    if (evQ && typeof evT === "number") {
      const c = checkQuote(segs, evQ, evT, { minWords: 3 });
      if (c.ok) { evT = c.t; evQ = c.text; verified = true; if (c.reason !== "exact") log.evidence.push({ feature: f.name, reason: c.reason, from_t: f.status_evidence_t, to_t: c.t }); }
      else log.evidence.push({ feature: f.name, reason: c.reason, t: evT });
    }
    const t_start = clamp(f.t_start, 0, duration), t_end = clamp(Math.max(f.t_end, f.t_start + 5), 0, duration);
    const demo = f.is_demoed && typeof f.demo_t_start === "number" && typeof f.demo_t_end === "number";
    return {
      name: f.name.trim(), description: f.description.trim(), status: f.status, status_evidence_t: evT, status_evidence_quote: evQ,
      status_evidence_verified: verified, t_start, t_end, is_demoed: !!f.is_demoed,
      demo_t_start: demo ? clamp(f.demo_t_start, 0, duration) : null, demo_t_end: demo ? clamp(f.demo_t_end, 0, duration) : null,
      caveats: f.caveats ?? [], prerequisites: f.prerequisites ?? [], tags: (f.tags ?? []).map((t: string) => t.toLowerCase().trim()),
      dev_relevance: f.dev_relevance, area: f.area,
    };
  });

  // chapters: sort, clamp, close gaps
  const chapters = (core.chapters ?? []).map((c: any) => ({ ...c, t_start: clamp(c.t_start, 0, duration), t_end: clamp(c.t_end, 0, duration) }))
    .filter((c: any) => c.t_end > c.t_start).sort((a: any, b: any) => a.t_start - b.t_start);
  for (let i = 0; i < chapters.length; i++) {
    if (i > 0 && chapters[i].t_start < chapters[i - 1].t_end) { log.chapters.push({ overlap_fixed: chapters[i].title }); chapters[i].t_start = chapters[i - 1].t_end; }
    if (i < chapters.length - 1 && chapters[i].t_end < chapters[i + 1].t_start) chapters[i].t_end = chapters[i + 1].t_start;
  }
  if (chapters.length) { chapters[0].t_start = 0; chapters[chapters.length - 1].t_end = duration; }

  const out: Extracted = {
    id: v.id, title: v.title, wave, duration_seconds: duration, summary: core.summary, area: core.area, audience: core.audience ?? [],
    presenters: core.presenters ?? [], chapters, features, quotes: uniqueQuotes, disclaimers, windows: windows.length, llm: llmMeta,
    extracted_at: new Date().toISOString(),
  };
  writeJson(resolve(OUT, "02-extract", `${v.id}.log.json`), log);
  return out;
}

async function main() {
  const { wave, only, flags } = parseArgs();
  const videos = readJson<any>(resolve(DATA, "videos.json")).videos.filter((v: any) => v.wave === wave && v.has_transcript);
  const todo = only ? videos.filter((v: any) => only.includes(v.id)) : videos;
  const model = defaultModel("extract");
  const force = flags.force === true;
  const outDir = resolve(OUT, "02-extract");
  console.log(`02-extract: ${todo.length} video(s), model ${model}${process.env.LLM_CACHE_ONLY === "1" ? " (cache only)" : ""}`);
  let done = 0;
  await pMap(todo, async (v: any) => {
    const outPath = resolve(outDir, `${v.id}.json`);
    if (!force && existsSync(outPath)) {
      const prev = readJson<Extracted>(outPath);
      if (prev.llm?.every((m) => m.prompt_version === PROMPT_VERSION)) { done++; return; }
    }
    const t0 = Date.now();
    const ex = await extractVideo(v, wave, model);
    writeJson(outPath, ex);
    done++;
    const cached = ex.llm.every((m) => m.cached);
    console.log(`  ${v.id} ${ex.features.length} features, ${ex.chapters.length} chapters, ${ex.quotes.length} quotes, ${ex.windows} window(s)${cached ? ", cached" : ""} (${Math.round((Date.now() - t0) / 1000)}s) - ${v.title}`);
  }, Number(flags.concurrency ?? 3));
  console.log(`02-extract: done (${done}/${todo.length})`);
}
main().catch((e) => { console.error(e); process.exit(1); });
