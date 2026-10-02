/**
 * Step 05 - analytics
 *   data/index/airtime.json       seconds per area / feature / status / audience / dev relevance
 *   data/index/wordcount.json     buzzword counts per video and total, new words vs the previous wave
 *   data/index/timelines.json     per video: chapters, demo ranges, disclaimer ticks, feature ranges
 *   data/index/gap-analysis.json  documented features vs transcript features
 * One cached LLM call proposes 10 extra buzzwords after seeing the frequency list.
 */
import { resolve } from "node:path";
import { DATA, OUT, parseArgs, loadWaves, ROOT } from "../lib/config.js";
import { readJson, writeJson, listFiles, readJsonIf, existsSync } from "../lib/fsx.js";
import { complete, defaultModel } from "../lib/llm.js";
import { normalizeSpeech } from "../lib/text.js";
import type { Extracted } from "../02-extract/index.js";

const cfg = loadWaves();

function union(ranges: [number, number][]): number {
  const r = ranges.filter(([a, b]) => b > a).sort((x, y) => x[0] - y[0]);
  let total = 0, cur: [number, number] | null = null;
  for (const [a, b] of r) {
    if (!cur || a > cur[1]) { if (cur) total += cur[1] - cur[0]; cur = [a, b]; } else cur[1] = Math.max(cur[1], b);
  }
  if (cur) total += cur[1] - cur[0];
  return Math.round(total);
}

async function main() {
  const { wave, flags } = parseArgs();
  const fj = readJson<any>(resolve(DATA, "index", "features.json"));
  const videosAll = readJson<any>(resolve(DATA, "videos.json")).videos.filter((v: any) => v.wave === wave);
  const exDir = resolve(OUT, "02-extract");
  const only = typeof flags.only === "string" ? new Set(String(flags.only).split(",")) : null;
  const extracted: Extracted[] = listFiles(exDir, ".json").filter((f) => !f.endsWith(".log.json")).map((f) => readJson<Extracted>(resolve(exDir, f))).filter((e) => e.wave === wave && (!only || only.has(e.id)));
  const exById = new Map(extracted.map((e) => [e.id, e]));
  const videos = videosAll.filter((v: any) => exById.has(v.id));
  const features: any[] = fj.features;
  const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
  const totalVideo = sum(videos.map((v: any) => v.duration_seconds));

  // ---- airtime
  const byStatus: Record<string, number> = {}, byDev: Record<string, number> = {}, byAud: Record<string, number> = {}, byAudVideos: Record<string, number> = {};
  for (const f of features) { byStatus[f.status] = (byStatus[f.status] ?? 0) + f.airtime_seconds; byDev[f.dev_relevance] = (byDev[f.dev_relevance] ?? 0) + f.airtime_seconds; }
  for (const v of videos) { const ex = exById.get(v.id)!; for (const a of ex.audience) { byAud[a] = (byAud[a] ?? 0) + v.duration_seconds; byAudVideos[a] = (byAudVideos[a] ?? 0) + 1; } }
  const areas = cfg.areas.map((a) => {
    const fs = features.filter((f) => f.area === a.slug);
    const vids = videos.filter((v: any) => exById.get(v.id)!.area === a.slug);
    const st: Record<string, number> = {};
    for (const f of fs) st[f.status] = (st[f.status] ?? 0) + f.airtime_seconds;
    return { slug: a.slug, name: a.name, feature_seconds: sum(fs.map((f) => f.airtime_seconds)), video_seconds: sum(vids.map((v: any) => v.duration_seconds)), videos: vids.length, video_ids: vids.map((v: any) => v.id), features: fs.length, by_status: st };
  });
  const isCopilot = (f: any) => ["copilot-and-agents", "expense-agent"].includes(f.area) || f.tags.some((t: string) => ["copilot", "agents", "agent", "mcp", "ai"].includes(t));
  const copilotFeatureSeconds = sum(features.filter(isCopilot).map((f) => f.airtime_seconds));
  const copilotVideoSeconds = sum(videos.filter((v: any) => ["copilot-and-agents", "expense-agent"].includes(exById.get(v.id)!.area)).map((v: any) => v.duration_seconds));
  const coverage = videos.map((v: any) => {
    const ranges: [number, number][] = features.flatMap((f) => f.videos.filter((x: any) => x.id === v.id).map((x: any) => [x.t_start, x.t_end] as [number, number]));
    const covered = union(ranges);
    return { id: v.id, title: v.title, duration_seconds: v.duration_seconds, covered_seconds: covered, coverage: v.duration_seconds ? Math.round((covered / v.duration_seconds) * 100) / 100 : 0, features: ranges.length };
  });
  const airtime = {
    wave, generated_at: new Date().toISOString(), video_count: videos.length, total_video_seconds: totalVideo,
    total_feature_seconds: sum(features.map((f) => f.airtime_seconds)),
    note: "feature_seconds = sum of the per-feature discussion ranges (t_start to t_end per video, may overlap within a video). video_seconds = full length of the videos whose primary area this is. by_audience counts a video for every audience it targets.",
    areas: areas.sort((a, b) => b.feature_seconds - a.feature_seconds),
    by_status: byStatus, by_dev_relevance: byDev, by_audience: byAud, by_audience_videos: byAudVideos,
    copilot_and_agents: { feature_seconds: copilotFeatureSeconds, feature_share: round2(copilotFeatureSeconds / Math.max(1, sum(features.map((f) => f.airtime_seconds)))), video_seconds: copilotVideoSeconds, video_share: round2(copilotVideoSeconds / Math.max(1, totalVideo)), definition: "features in the copilot-and-agents or expense-agent area, or tagged copilot/agents/mcp/ai; video share = videos whose primary area is copilot-and-agents or expense-agent" },
    top_features: [...features].sort((a, b) => b.airtime_seconds - a.airtime_seconds).slice(0, 15).map((f) => ({ slug: f.slug, name: f.name, area: f.area, status: f.status, seconds: f.airtime_seconds, dev_relevance: f.dev_relevance })),
    features: features.map((f) => ({ slug: f.slug, name: f.name, area: f.area, status: f.status, seconds: f.airtime_seconds, dev_relevance: f.dev_relevance, videos: f.videos.length })),
    coverage,
  };
  writeJson(resolve(DATA, "index", "airtime.json"), airtime);

  // ---- wordcount
  const bw = readJson<any>(resolve(ROOT, "config", "buzzwords.json"));
  const texts = new Map<string, string>();
  const wcPath = resolve(DATA, "index", "wordcount.json");
  const haveTranscripts = videos.every((v: any) => existsSync(resolve(DATA, "transcripts", "full", `${v.id}.json`)));
  if (!haveTranscripts) {
    // public build: the transcripts are gone, keep the committed word counts
    console.log(`05-analytics: transcripts not available, keeping ${existsSync(wcPath) ? "the committed" : "no"} wordcount.json`);
    if (!existsSync(wcPath)) writeJson(wcPath, { wave, generated_at: new Date().toISOString(), terms: [], base_terms: bw.base, proposed_terms: bw.proposed ?? [], total_words: 0, totals: {}, top: [], videos: [], new_words: { status: "unavailable", reason: "transcripts not available in this build" } });
  }
  for (const v of videos) { if (!haveTranscripts) break; const tr = readJson<any>(resolve(DATA, "transcripts", "full", `${v.id}.json`)); texts.set(v.id, normalizeSpeech(tr.segments.map((s: any) => s.text).join(" "))); }
  if (haveTranscripts && !bw.proposed?.length && process.env.LLM_CACHE_ONLY !== "1") {
    const freq = new Map<string, number>();
    const stop = new Set("the a an and or of to in for with on at by from is are be this that it as we you your our so if can will have has what how when now then there here just like also very about into which these those them they their more some any all one two not no do does did was were been being i me my us its it's that's we're you're going go get got let's lets see here's".split(" "));
    for (const t of texts.values()) { const ws = t.split(" "); for (let i = 0; i < ws.length; i++) { const w = ws[i]; if (w.length > 3 && !stop.has(w)) freq.set(w, (freq.get(w) ?? 0) + 1); if (i + 1 < ws.length && !stop.has(w) && !stop.has(ws[i + 1])) { const bg = `${w} ${ws[i + 1]}`; freq.set(bg, (freq.get(bg) ?? 0) + 1); } } }
    const top = [...freq.entries()].filter(([, n]) => n >= 8).sort((a, b) => b[1] - a[1]).slice(0, 400);
    const res = await complete<{ terms: string[] }>({
      tag: "05-analytics", promptVersion: "v1", model: defaultModel("misc"), label: "buzzwords",
      system: "You pick buzzwords for a bingo card. Answer with JSON only. No em-dashes.",
      prompt: `These are the most frequent words and two-word phrases in the transcripts of the Business Central ${cfg.waves[wave].name} launch event videos (term: count). The bingo card already has: ${bw.base.join(", ")}.\nPropose exactly 10 more terms that are typical launch-event or Microsoft-presenter vocabulary (hype words, filler, product jargon, catch phrases) and are NOT already in the list. Prefer terms a Business Central developer would smile at. Lowercase. Return { "terms": [10 strings] }.\n\n${top.map(([t, n]) => `${t}: ${n}`).join("\n")}`,
      schema: { type: "object", additionalProperties: false, required: ["terms"], properties: { terms: { type: "array", minItems: 10, maxItems: 10, items: { type: "string" } } } },
    });
    bw.proposed = res.output.terms.map((t) => t.toLowerCase().trim()).filter((t) => !bw.base.map((b: string) => b.toLowerCase()).includes(t));
    bw.proposed_by = { model: res.meta.model, backend: res.meta.backend, at: res.meta.created_at };
    writeJson(resolve(ROOT, "config", "buzzwords.json"), bw);
  }
  const terms: string[] = [...bw.base, ...(bw.proposed ?? [])];
  // a term matches its plural and its spelled variants (captions write "co-pilot", "bc bench"); aliases come from config
  const aliases: Record<string, string[]> = bw.aliases ?? {};
  const termRegex = (term: string) => {
    const forms = [term, ...(aliases[term] ?? [])].map((f) => normalizeSpeech(f).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, " ?"));
    return new RegExp(`(?<![a-z0-9])(?:${forms.join("|")})(?:s|es)?(?![a-z0-9])`, "g");
  };
  const regexes = new Map(terms.map((t) => [t, termRegex(t)]));
  const countTerm = (text: string, term: string) => (text.match(regexes.get(term)!) ?? []).length;
  const perVideo = videos.filter((v: any) => texts.has(v.id)).map((v: any) => { const text = texts.get(v.id)!; const counts: Record<string, number> = {}; for (const t of terms) counts[t] = countTerm(text, t); return { id: v.id, title: v.title, words: text.split(" ").length, counts, per_1000_words: Object.fromEntries(terms.map((t) => [t, round2((counts[t] / Math.max(1, text.split(" ").length)) * 1000)])) }; });
  const totals: Record<string, number> = {};
  for (const t of terms) totals[t] = sum(perVideo.map((p: any) => p.counts[t]));
  // new words this wave
  const prevWave = cfg.waves[wave].compare_with_wave;
  const prevFiles = listFiles(resolve(DATA, "transcripts", "full"), ".json").map((f) => readJson<any>(resolve(DATA, "transcripts", "full", f))).filter((t) => t.wave === prevWave);
  let newWords: any = { status: "unavailable", reason: `no transcripts with wave ${prevWave} in data/transcripts/full/ (fetching them is optional, see README)`, compared_with: prevWave };
  if (prevFiles.length) {
    const prevVocab = new Set<string>();
    for (const t of prevFiles) for (const w of normalizeSpeech(t.segments.map((s: any) => s.text).join(" ")).split(" ")) prevVocab.add(w);
    const cur = new Map<string, number>();
    for (const t of texts.values()) for (const w of t.split(" ")) if (w.length > 3 && !prevVocab.has(w)) cur.set(w, (cur.get(w) ?? 0) + 1);
    newWords = { status: "ok", compared_with: prevWave, previous_videos: prevFiles.length, words: [...cur.entries()].filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1]).slice(0, 60).map(([word, count]) => ({ word, count })) };
  }
  if (haveTranscripts) writeJson(wcPath, { wave, generated_at: new Date().toISOString(), terms, base_terms: bw.base, proposed_terms: bw.proposed ?? [], total_words: sum(perVideo.map((p: any) => p.words)), totals, top: Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([term, count]) => ({ term, count })), videos: perVideo, new_words: newWords });

  // ---- timelines
  const timelines = videos.map((v: any) => {
    const ex = exById.get(v.id)!;
    const fr = features.flatMap((f) => f.videos.filter((x: any) => x.id === v.id).map((x: any) => ({ slug: f.slug, name: f.name, t_start: x.t_start, t_end: x.t_end, status: f.status, area: f.area, demo: x.demo })));
    return {
      id: v.id, title: v.title, duration_seconds: v.duration_seconds, area: ex.area, audience: ex.audience,
      chapters: ex.chapters, demos: fr.filter((x) => x.demo).map((x) => ({ slug: x.slug, name: x.name, t_start: x.demo.t_start, t_end: x.demo.t_end })),
      features: fr.map(({ demo, ...rest }) => rest).sort((a, b) => a.t_start - b.t_start),
      disclaimers: ex.disclaimers, quotes: ex.quotes.map((q) => ({ t: q.t, text: q.text })), status_mentions: countStatus(ex),
    };
  });
  writeJson(resolve(DATA, "index", "timelines.json"), { wave, generated_at: new Date().toISOString(), videos: timelines });

  // ---- gap analysis
  const plan = readJsonIf<any>(resolve(DATA, "release-plan", `${wave}.json`), { status: "unavailable", items: [] });
  const overrides = readJsonIf<any>(resolve(DATA, "release-plan", "overrides.json"), { ignore_doc_items: [], doc_mentions: [] });
  const mentionsByDoc = new Map<string, any[]>();
  for (const m of overrides.doc_mentions ?? []) mentionsByDoc.set(m.doc_id, [...(mentionsByDoc.get(m.doc_id) ?? []), { video_id: m.video_id, t: m.t, quote: m.quote ?? "", note: m.note ?? "" }]);
  const ignored = new Set<string>(overrides.ignore_doc_items ?? []);
  const items = (plan.items ?? []).filter((d: any) => !ignored.has(d.id));
  const matchedIds = new Map<string, any[]>();
  for (const f of features) if (f.release_plan?.matched && ["high", "medium"].includes(f.release_plan.confidence)) matchedIds.set(f.release_plan.id, [...(matchedIds.get(f.release_plan.id) ?? []), f]);
  const lowIds = new Map<string, any[]>();
  for (const f of features) if (f.release_plan?.id && f.release_plan.confidence === "low") lowIds.set(f.release_plan.id, [...(lowIds.get(f.release_plan.id) ?? []), f]);
  const documented_not_shown = items.filter((d: any) => !matchedIds.has(d.id)).map((d: any) => ({ id: d.id, title: d.title, area: d.area, area_raw: d.area_raw, doc_status: d.doc_status, availability: d.availability, url: d.url, roadmap_id: d.roadmap_id, source_kind: d.source_kind, low_confidence_candidates: (lowIds.get(d.id) ?? []).map((f) => ({ slug: f.slug, name: f.name })), mentions: mentionsByDoc.get(d.id) ?? [], text: d.text.slice(0, 300) }));
  const shown_not_documented = features.filter((f) => !f.release_plan?.matched || !["high", "medium"].includes(f.release_plan.confidence)).map((f) => ({ slug: f.slug, name: f.name, area: f.area, status: f.status, airtime_seconds: f.airtime_seconds, dev_relevance: f.dev_relevance, confidence: f.release_plan?.confidence ?? "none", nearest_doc: f.release_plan?.id ? { id: f.release_plan.id, title: f.release_plan.title, url: f.release_plan.url } : null, note: f.release_plan?.note ?? "", learn: f.release_plan?.learn ?? null, videos: f.videos.map((v: any) => ({ id: v.id, title: v.title, t: v.t_start })), summary: f.summary }));
  // video status vs docs status. video_status_source "implied" = nothing was said, GA by launch event convention
  const status_conflicts = features.filter((f) => f.release_plan?.matched && ["high", "medium"].includes(f.release_plan.confidence) && f.release_plan.doc_status && f.release_plan.doc_status !== "unclear" && f.status !== "unclear" && f.status !== f.release_plan.doc_status)
    .map((f) => ({ slug: f.slug, name: f.name, area: f.area, video_status: f.status, video_status_source: f.status_source ?? "stated", doc_status: f.release_plan.doc_status, confidence: f.release_plan.confidence, doc: { id: f.release_plan.id, title: f.release_plan.title, url: f.release_plan.url }, evidence: f.status_evidence, videos: f.videos.map((v: any) => ({ id: v.id, title: v.title, t: v.t_start })) }))
    .sort((a, b) => (a.video_status_source === "stated" ? 0 : 1) - (b.video_status_source === "stated" ? 0 : 1));
  const silent_on_status = features.filter((f) => f.release_plan?.matched && ["high", "medium"].includes(f.release_plan.confidence) && f.status_source === "implied" && f.release_plan.doc_status && f.release_plan.doc_status !== "unclear")
    .map((f) => ({ slug: f.slug, name: f.name, area: f.area, video_status: f.status, doc_status: f.release_plan.doc_status, agrees: f.status === f.release_plan.doc_status, doc: { id: f.release_plan.id, title: f.release_plan.title, url: f.release_plan.url } }));
  writeJson(resolve(DATA, "index", "gap-analysis.json"), {
    wave, generated_at: new Date().toISOString(), baseline: { status: plan.status, fetched_at: plan.fetched_at, items: items.length, sources: plan.sources ?? [], note: plan.note },
    counts: { documented: items.length, documented_and_shown: matchedIds.size, documented_not_shown: documented_not_shown.length, shown_not_documented: shown_not_documented.length, status_conflicts: status_conflicts.length, status_conflicts_stated: status_conflicts.filter((c) => c.video_status_source === "stated").length, silent_on_status: silent_on_status.length, silent_and_docs_agree: silent_on_status.filter((s) => s.agrees).length, shown_not_documented_in_product_docs: shown_not_documented.filter((f) => f.learn?.documented === "yes").length, documented_not_shown_mentioned: documented_not_shown.filter((d: any) => d.mentions.length).length },
    status_rule: "Video status follows the launch event convention: GA unless the presenters state otherwise. A conflict with video_status_source 'implied' means the presenters said nothing while the docs say preview.",
    documented_not_shown, shown_not_documented, status_conflicts, silent_on_status,
    documented_and_shown: items.filter((d: any) => matchedIds.has(d.id)).map((d: any) => ({ id: d.id, title: d.title, area: d.area, doc_status: d.doc_status, url: d.url, features: matchedIds.get(d.id)!.map((f) => ({ slug: f.slug, name: f.name, status: f.status, confidence: f.release_plan.confidence })) })),
  });
  console.log(`05-analytics: airtime ${Math.round(airtime.total_feature_seconds / 60)} feature-min over ${Math.round(totalVideo / 60)} video-min; buzzwords ${terms.length} terms; gaps: ${documented_not_shown.length} documented-not-shown, ${shown_not_documented.length} shown-not-documented, ${status_conflicts.length} status conflicts`);
}
function countStatus(ex: Extracted) { const c: Record<string, number> = { preview: 0, ga: 0, announced: 0, unclear: 0 }; for (const f of ex.features) c[f.status] = (c[f.status] ?? 0) + 1; return c; }
const round2 = (n: number) => Math.round(n * 100) / 100;
main().catch((e) => { console.error(e); process.exit(1); });
