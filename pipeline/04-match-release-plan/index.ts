/**
 * Step 04 - match the feature graph against the documented features baseline.
 *
 * 1. Fetch (or reuse with --no-fetch) data/release-plan/<wave>.json.
 * 2. Score every feature against every doc item deterministically (keyword overlap).
 * 3. One Claude call confirms matches and gives a confidence per feature.
 * 4. Apply data/release-plan/overrides.json (waldo's manual corrections).
 * 5. Write release_plan into every feature of data/index/features.json.
 */
import { resolve } from "node:path";
import { DATA, OUT, parseArgs } from "../lib/config.js";
import { readJson, writeJson, existsSync, readJsonIf } from "../lib/fsx.js";
import { complete, defaultModel } from "../lib/llm.js";
import { keywords } from "../lib/text.js";
import { fetchBaseline, type DocItem } from "./fetch.js";

const PROMPT_VERSION = "v1";

const SYSTEM = `You match features extracted from launch event video transcripts to features in Microsoft's official documentation of the same release wave.
Rules:
- A match means the documented item describes the same capability or change as the transcript feature, not merely the same product area.
- confidence: high = clearly the same feature; medium = probably the same, wording differs or the transcript feature covers a part of it; low = related but you are not sure; none = no documented item fits.
- Several transcript features may map to the same documented item (the docs are coarser than a demo). A transcript feature maps to at most one documented item.
- Use only the texts given. No outside knowledge.
- No em-dashes anywhere. Use a plain hyphen.`;

const schema = {
  type: "object", additionalProperties: false, required: ["matches"],
  properties: {
    matches: {
      type: "array",
      items: { type: "object", additionalProperties: false, required: ["feature", "doc_id", "confidence", "note"], properties: {
        feature: { type: "string" }, doc_id: { type: ["string", "null"] }, confidence: { type: "string", enum: ["high", "medium", "low", "none"] }, note: { type: "string" },
      } },
    },
  },
};

function score(f: any, d: DocItem): number {
  const fk = new Set<string>(f.keywords?.length ? f.keywords : keywords(`${f.name} ${f.summary}`));
  const dk = new Set(keywords(`${d.title} ${d.title} ${d.text.slice(0, 400)}`));
  let inter = 0;
  for (const w of fk) if (dk.has(w)) inter++;
  const nameHit = keywords(f.name).filter((w) => keywords(d.title).includes(w)).length;
  const sameArea = f.area === d.area ? 0.5 : 0;
  return inter / Math.sqrt(fk.size * dk.size || 1) * 10 + nameHit * 2 + sameArea;
}

async function main() {
  const { wave, waveDef, flags } = parseArgs();
  const planPath = resolve(DATA, "release-plan", `${wave}.json`);
  let plan: any;
  if (flags["no-fetch"] === true || (process.env.LLM_CACHE_ONLY === "1" && existsSync(planPath)) || (flags.fetch !== true && existsSync(planPath))) {
    plan = readJson(planPath);
    console.log(`04-match: reusing ${planPath} (${plan.items?.length ?? 0} items, fetched ${plan.fetched_at})`);
  } else {
    plan = await fetchBaseline(wave, waveDef.docs_baseline);
    writeJson(planPath, plan);
    console.log(`04-match: fetched baseline, ${plan.items.length} items; sources: ${plan.sources.map((s: any) => `${s.kind}=${s.status}${s.items !== undefined ? `(${s.items})` : ""}`).join(", ")}`);
  }
  const fjPath = resolve(DATA, "index", "features.json");
  const fj = readJson<any>(fjPath);
  const items: DocItem[] = plan.items ?? [];
  const overrides = readJsonIf<any>(resolve(DATA, "release-plan", "overrides.json"), { overrides: [], ignore_doc_items: [] });
  const ignored = new Set<string>(overrides.ignore_doc_items ?? []);
  const usable = items.filter((d) => !ignored.has(d.id));
  const log: any = { wave, features: fj.features.length, doc_items: usable.length, llm: null, applied_overrides: [], unknown_overrides: [] };

  const byFeature = new Map<string, { doc_id: string | null; confidence: string; note: string; method: string }>();
  if (usable.length && fj.features.length) {
    const cands = fj.features.map((f: any) => {
      const top = usable.map((d) => ({ d, s: score(f, d) })).sort((a, b) => b.s - a.s).slice(0, 5).filter((x) => x.s > 1.5);
      return { slug: f.slug, name: f.name, area: f.area, summary: f.summary, status: f.status, candidates: top.map((x) => x.d.id) };
    });
    const prompt = `Wave ${wave}. Documented items (${usable.length}):\n` +
      usable.map((d) => `- ${d.id} | ${d.title} | area ${d.area} | ${d.doc_status} | ${d.text.slice(0, 220)}`).join("\n") +
      `\n\nTranscript features (${cands.length}). "candidates" are keyword-based hints, not decisions; you may pick any documented item or none.\n` +
      cands.map((c: any) => `- ${c.slug} | ${c.name} | area ${c.area} | ${c.status} | ${c.summary} | candidates: ${c.candidates.join(", ") || "(none)"}`).join("\n") +
      `\n\nReturn one entry per transcript feature slug (all ${cands.length} of them) with doc_id (an id from the documented items or null), confidence and a short note on why.`;
    const res = await complete<{ matches: any[] }>({ tag: "04-match-release-plan", promptVersion: PROMPT_VERSION, system: SYSTEM, prompt, schema, model: defaultModel("match"), label: `match ${wave}`, maxBudgetUsd: 15 });
    log.llm = res.meta;
    const docIds = new Set(usable.map((d) => d.id));
    for (const m of res.output.matches) {
      if (!fj.features.some((f: any) => f.slug === m.feature)) continue;
      const doc = m.doc_id && docIds.has(m.doc_id) ? m.doc_id : null;
      byFeature.set(m.feature, { doc_id: doc, confidence: doc ? m.confidence : "none", note: m.note, method: "llm" });
    }
  }
  for (const o of overrides.overrides ?? []) {
    if (!fj.features.some((f: any) => f.slug === o.feature)) { log.unknown_overrides.push(o); continue; }
    byFeature.set(o.feature, { doc_id: o.doc_id ?? null, confidence: o.doc_id ? (o.confidence ?? "high") : "none", note: o.note ?? "manual override", method: "override" });
    log.applied_overrides.push(o.feature);
  }
  for (const f of fj.features) {
    const m = byFeature.get(f.slug) ?? { doc_id: null, confidence: "none", note: usable.length ? "no match returned" : "baseline unavailable", method: usable.length ? "llm" : "none" };
    const d = m.doc_id ? usable.find((x) => x.id === m.doc_id)! : null;
    f.release_plan = d ? {
      matched: m.confidence !== "none", id: d.id, title: d.title, confidence: m.confidence, url: d.url, source_kind: d.source_kind,
      doc_status: d.doc_status, availability: d.availability, roadmap_id: d.roadmap_id, note: m.note, method: m.method,
    } : { matched: false, id: null, title: null, confidence: "none", url: null, source_kind: null, doc_status: null, availability: null, roadmap_id: null, note: m.note, method: m.method };
  }
  fj.release_plan = { status: plan.status, fetched_at: plan.fetched_at, items: usable.length, sources: plan.sources };
  fj.generated_at = new Date().toISOString();
  writeJson(fjPath, fj);
  const conf: Record<string, number> = {};
  for (const f of fj.features) conf[f.release_plan.confidence] = (conf[f.release_plan.confidence] ?? 0) + 1;
  log.confidence = conf;
  writeJson(resolve(OUT, "04-match.log.json"), log);
  console.log(`04-match: ${JSON.stringify(conf)}${log.applied_overrides.length ? `, overrides ${log.applied_overrides.length}` : ""}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
