/**
 * Step 03 - merge features across videos (LLM assisted)
 *
 * Input: pipeline/out/02-extract/<id>.json for every video of the wave.
 * Deterministic pre-clustering by normalized name, then one Claude call confirms the
 * groups and picks canonical name, slug, area, tags and developer relevance. Status is
 * resolved deterministically from the per-video evidence (never by the model).
 * Output: data/index/features.json (the feature graph), pipeline/out/03-merge.log.json.
 */
import { resolve } from "node:path";
import { DATA, OUT, parseArgs, loadWaves } from "../lib/config.js";
import { readJson, writeJson, listFiles } from "../lib/fsx.js";
import { complete, defaultModel } from "../lib/llm.js";
import { slugify, jaccard, keywords } from "../lib/text.js";
import type { Extracted, ExtractedFeature } from "../02-extract/index.js";

const PROMPT_VERSION = "v1";
const cfg = loadWaves();
const AREAS = cfg.areas.map((a) => a.slug);

interface Candidate extends ExtractedFeature { cid: string; video_id: string; video_title: string; cluster: number }

const SYSTEM = `You merge feature candidates extracted from the videos of a Microsoft Business Central launch event into one de-duplicated feature list.
Rules:
- Two candidates are the same feature when they describe the same capability or change, even under different names (e.g. "Copilot chat" and "Microsoft Copilot Chat in Business Central"). A product (the Expense Agent, the MCP server) is not one feature; its individual capabilities are. Keep features at the granularity a developer or consultant would search for.
- Do not invent features, do not drop candidates. Every candidate id appears in exactly one group.
- Use only the candidate texts. No outside product knowledge.
- Names: short, product-like, as the presenters say them, no marketing adjectives. Slugs: lowercase, hyphenated, stable, 2 to 6 words.
- No em-dashes anywhere. Use a plain hyphen.`;

const schema = {
  type: "object", additionalProperties: false, required: ["groups"],
  properties: {
    groups: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["slug", "name", "area", "dev_relevance", "tags", "summary", "members"],
        properties: {
          slug: { type: "string" }, name: { type: "string" }, area: { type: "string", enum: AREAS },
          dev_relevance: { type: "string", enum: ["high", "medium", "low"] },
          tags: { type: "array", items: { type: "string" } },
          summary: { type: "string" },
          members: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
};

function preCluster(cands: Candidate[]): number {
  const parent = cands.map((_, i) => i);
  const find = (i: number): number => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a: number, b: number) => { parent[find(a)] = find(b); };
  for (let i = 0; i < cands.length; i++) for (let j = i + 1; j < cands.length; j++) {
    const a = cands[i], b = cands[j];
    if (a.video_id === b.video_id) continue; // same video: step 02 already merged within a video
    if (slugify(a.name) === slugify(b.name) || jaccard(a.name, b.name) >= 0.6) union(i, j);
  }
  const ids = new Map<number, number>();
  for (let i = 0; i < cands.length; i++) { const r = find(i); if (!ids.has(r)) ids.set(r, ids.size); cands[i].cluster = ids.get(r)!; }
  return ids.size;
}

function resolveStatus(members: Candidate[]) {
  const order = ["ga", "preview", "announced", "unclear"];
  const verified = members.filter((m) => m.status_evidence_verified && m.status !== "unclear");
  const pool = verified.length ? verified : members.filter((m) => m.status !== "unclear");
  const statuses = new Set(pool.map((m) => m.status));
  let status = "unclear";
  for (const s of order) if (statuses.has(s)) { status = s; break; }
  const conflict = statuses.has("ga") && statuses.has("preview");
  const ev = pool.find((m) => m.status === status && m.status_evidence_quote) ?? pool.find((m) => m.status === status);
  return {
    status,
    status_conflict: conflict,
    status_evidence: ev ? { video_id: ev.video_id, t: ev.status_evidence_t, quote: ev.status_evidence_quote, verified: ev.status_evidence_verified } : null,
    status_by_video: members.map((m) => ({ video_id: m.video_id, status: m.status, verified: m.status_evidence_verified, t: m.status_evidence_t })),
  };
}

async function main() {
  const { wave, flags } = parseArgs();
  const exDir = resolve(OUT, "02-extract");
  const videosAll = readJson<any>(resolve(DATA, "videos.json")).videos;
  const extracted: Extracted[] = listFiles(exDir, ".json").filter((f) => !f.endsWith(".log.json")).map((f) => readJson<Extracted>(resolve(exDir, f))).filter((e) => e.wave === wave);
  const only = typeof flags.only === "string" ? new Set(String(flags.only).split(",")) : null;
  const use = only ? extracted.filter((e) => only.has(e.id)) : extracted;
  const cands: Candidate[] = [];
  for (const e of use) e.features.forEach((f, i) => cands.push({ ...f, cid: `${e.id}#${i}`, video_id: e.id, video_title: e.title, cluster: 0 }));
  const nClusters = preCluster(cands);
  console.log(`03-merge: ${cands.length} candidates from ${use.length} videos, ${nClusters} pre-clusters`);

  const byCluster = new Map<number, Candidate[]>();
  for (const c of cands) byCluster.set(c.cluster, [...(byCluster.get(c.cluster) ?? []), c]);
  const clusterText = [...byCluster.values()].map((ms, i) =>
    `Cluster ${i + 1}:\n` + ms.map((m) => `  - id ${m.cid} | ${m.name} | area ${m.area} | ${m.status} | dev ${m.dev_relevance} | tags ${m.tags.join(",")} | video "${m.video_title}" | ${m.description}`).join("\n")).join("\n");
  const prompt = `Wave: ${wave}. Area taxonomy: ${AREAS.join(", ")}.
Below are ${cands.length} feature candidates, pre-grouped into ${nClusters} clusters by name similarity. A cluster is a hint, not a decision: split a cluster whose members are different things, merge clusters that are the same thing.
For each final group return: slug, name, area (one slug), dev_relevance (high if an AL developer must act or will use it, medium if it changes what they can build or test, low otherwise), 2 to 6 tags (lowercase), a 2 to 3 sentence summary written from the member descriptions only, and members (all candidate ids in the group).

${clusterText}`;

  const res = await complete<{ groups: any[] }>({
    tag: "03-merge-features", promptVersion: PROMPT_VERSION, system: SYSTEM, prompt, schema, model: defaultModel("merge"), label: `merge ${wave}`, maxBudgetUsd: 15,
  });
  const log: any = { wave, candidates: cands.length, pre_clusters: nClusters, groups: res.output.groups.length, llm: res.meta, fixes: [] };

  // validate membership
  const byCid = new Map(cands.map((c) => [c.cid, c]));
  const assigned = new Set<string>();
  const groups: any[] = [];
  for (const g of res.output.groups) {
    const members = g.members.filter((id: string) => { if (!byCid.has(id)) { log.fixes.push({ unknown_member: id, group: g.slug }); return false; } if (assigned.has(id)) { log.fixes.push({ duplicate_member: id, group: g.slug }); return false; } assigned.add(id); return true; });
    if (members.length) groups.push({ ...g, members });
  }
  for (const c of cands) if (!assigned.has(c.cid)) {
    log.fixes.push({ unassigned_candidate: c.cid, name: c.name });
    groups.push({ slug: slugify(c.name), name: c.name, area: c.area, dev_relevance: c.dev_relevance, tags: c.tags, summary: c.description, members: [c.cid] });
  }
  // unique slugs
  const slugs = new Set<string>();
  for (const g of groups) {
    let s = slugify(g.slug) || slugify(g.name) || "feature";
    let base = s, n = 2;
    while (slugs.has(s)) s = `${base}-${n++}`;
    slugs.add(s); g.slug = s;
    if (!AREAS.includes(g.area)) { log.fixes.push({ bad_area: g.area, slug: s }); g.area = byCid.get(g.members[0])!.area; }
  }

  const videoTitle = (id: string) => videosAll.find((v: any) => v.id === id)?.title ?? id;
  const count = (xs: string[]) => { const c: Record<string, number> = {}; for (const x of xs) c[x] = (c[x] ?? 0) + 1; return c; };
  const features = groups.map((g) => {
    const members = g.members.map((id: string) => byCid.get(id)!);
    const st = resolveStatus(members);
    // one entry per video: ranges of several candidates from the same video are merged
    const perVideo = new Map<string, any>();
    for (const m of members) {
      const cur = perVideo.get(m.video_id);
      const demo = m.is_demoed && m.demo_t_start !== null ? { t_start: m.demo_t_start, t_end: m.demo_t_end } : null;
      if (!cur) perVideo.set(m.video_id, { id: m.video_id, title: m.video_title, t_start: m.t_start, t_end: m.t_end, ranges: [[m.t_start, m.t_end]], demo, status: m.status, dev_relevance: m.dev_relevance, name_in_video: m.name, names_in_video: [m.name] });
      else {
        cur.t_start = Math.min(cur.t_start, m.t_start); cur.t_end = Math.max(cur.t_end, m.t_end); cur.ranges.push([m.t_start, m.t_end]);
        if (demo) cur.demo = cur.demo ? { t_start: Math.min(cur.demo.t_start, demo.t_start), t_end: Math.max(cur.demo.t_end, demo.t_end) } : demo;
        if (!cur.names_in_video.includes(m.name)) cur.names_in_video.push(m.name);
        if (m.status !== "unclear" && cur.status === "unclear") cur.status = m.status;
      }
    }
    const videos = [...perVideo.values()].map((v) => ({ ...v, seconds: unionSeconds(v.ranges) })).sort((a: any, b: any) => b.seconds - a.seconds);
    const airtime = videos.reduce((s: number, v: any) => s + v.seconds, 0);
    const quotes: any[] = [];
    for (const m of members) {
      const ex = use.find((e) => e.id === m.video_id)!;
      for (const q of ex.quotes) if (q.t >= m.t_start - 5 && q.t <= m.t_end + 5) quotes.push({ video_id: m.video_id, t: q.t, text: q.text, why_it_matters: q.why_it_matters });
    }
    const uniq = new Map<string, any>();
    for (const q of quotes) uniq.set(`${q.video_id}|${q.t}`, q);
    const caveats = [...new Set(members.flatMap((m: Candidate) => m.caveats))];
    const prerequisites = [...new Set(members.flatMap((m: Candidate) => m.prerequisites))];
    const tags = [...new Set([...(g.tags ?? []).map((t: string) => t.toLowerCase()), ...members.flatMap((m: Candidate) => m.tags)])].slice(0, 10);
    return {
      slug: g.slug, name: g.name, area: g.area, status: st.status, status_conflict: st.status_conflict, status_evidence: st.status_evidence,
      status_by_video: st.status_by_video, summary: g.summary, dev_relevance: g.dev_relevance, tags, caveats, prerequisites,
      videos, airtime_seconds: Math.round(airtime), demoed: videos.some((v: any) => v.demo), quotes: [...uniq.values()].sort((a, b) => a.t - b.t).slice(0, 8),
      release_plan: { matched: false, confidence: "none" }, provenance: g.members,
      keywords: keywords(`${g.name} ${g.summary}`).slice(0, 30),
    };
  }).sort((a, b) => b.airtime_seconds - a.airtime_seconds);

  const areas = cfg.areas.map((a) => {
    const fs = features.filter((f) => f.area === a.slug);
    const vids = [...new Set(fs.flatMap((f) => f.videos.map((v: any) => v.id)))];
    return { slug: a.slug, name: a.name, feature_count: fs.length, video_ids: vids, feature_seconds: fs.reduce((s, f) => s + f.airtime_seconds, 0) };
  });
  const out = {
    wave, name: cfg.waves[wave].name, generated_at: new Date().toISOString(), video_count: use.length,
    counts: { features: features.length, candidates: cands.length, by_status: count(features.map((f) => f.status)), by_area: count(features.map((f) => f.area)), by_dev_relevance: count(features.map((f) => f.dev_relevance)) },
    videos: use.map((e) => ({ id: e.id, title: e.title, area: e.area, duration_seconds: e.duration_seconds, feature_slugs: features.filter((f) => f.videos.some((v: any) => v.id === e.id)).map((f) => f.slug) })),
    areas, features,
  };
  writeJson(resolve(DATA, "index", "features.json"), out);
  writeJson(resolve(OUT, "03-merge.log.json"), log);
  console.log(`03-merge: ${features.length} features (${JSON.stringify(out.counts.by_status)}), ${log.fixes.length} fixes${res.cached ? ", cached" : ""}`);
  function unionSeconds(ranges: [number, number][]): number {
  const r = ranges.filter(([a, b]) => b > a).sort((x, y) => x[0] - y[0]);
  let total = 0, cur: [number, number] | null = null;
  for (const [a, b] of r) { if (!cur || a > cur[1]) { if (cur) total += cur[1] - cur[0]; cur = [a, b]; } else cur[1] = Math.max(cur[1], b); }
  if (cur) total += cur[1] - cur[0];
  return total;
}
  void videoTitle;
}
main().catch((e) => { console.error(e); process.exit(1); });
