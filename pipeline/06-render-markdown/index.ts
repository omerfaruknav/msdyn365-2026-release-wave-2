/**
 * Step 06 - render markdown
 *   data/videos/<id>.md, data/features/<slug>.md, data/areas/<slug>.md,
 *   data/reports/{dev-digest,what-they-didnt-say,buzzword-bingo}.md, llms.txt, llms-full.txt
 * Everything is derived from data/index/*.json and pipeline/out/02-extract. Two short
 * narrative paragraphs (dev digest intro, gap commentary) come from a cached LLM call and
 * are labeled as such; all lists and numbers are deterministic.
 */
import { resolve } from "node:path";
import { rmSync } from "node:fs";
import * as fsMod from "node:fs";
import { DATA, OUT, ROOT, parseArgs, loadWaves, isPublicBuild } from "../lib/config.js";
import { readJson, writeText, listFiles, readJsonIf } from "../lib/fsx.js";
import { withFrontmatter } from "../lib/frontmatter.js";
import { complete, defaultModel } from "../lib/llm.js";
import { fmtTime, fmtMinutes, ytUrl, ytThumb } from "../lib/text.js";
import type { Extracted } from "../02-extract/index.js";

const cfg = loadWaves();
const REPO = "waldo1001/msdyn365-2026-release-wave-2";
const RAW = `https://raw.githubusercontent.com/${REPO}/main`;
const areaName = (slug: string) => cfg.areas.find((a) => a.slug === slug)?.name ?? slug;
const link = (id: string, t: number, label?: string) => `[${label ?? fmtTime(t)}](${ytUrl(id, t)})`;
const statusLabel: Record<string, string> = { ga: "GA", preview: "preview", announced: "announced", unclear: "status not stated" };
const statusText = (f: any) => `${statusLabel[f.status]}${f.status_source === "implied" ? " (implied)" : ""}`;
const q = (s: string) => `"${s.replace(/"/g, "'")}"`;

async function main() {
  const { wave, flags } = parseArgs();
  const pub = isPublicBuild();
  const fj = readJson<any>(resolve(DATA, "index", "features.json"));
  const airtime = readJson<any>(resolve(DATA, "index", "airtime.json"));
  const gaps = readJson<any>(resolve(DATA, "index", "gap-analysis.json"));
  const wc = readJson<any>(resolve(DATA, "index", "wordcount.json"));
  const videosAll = readJson<any>(resolve(DATA, "videos.json")).videos.filter((v: any) => v.wave === wave);
  const exDir = resolve(OUT, "02-extract");
  const only = typeof flags.only === "string" ? new Set(String(flags.only).split(",")) : null;
  const extracted: Extracted[] = listFiles(exDir, ".json").filter((f) => !f.endsWith(".log.json")).map((f) => readJson<Extracted>(resolve(exDir, f))).filter((e) => e.wave === wave && (!only || only.has(e.id)));
  const exById = new Map(extracted.map((e) => [e.id, e]));
  const features: any[] = fj.features;
  const featBySlug = new Map(features.map((f) => [f.slug, f]));
  const videoTitle = (id: string) => videosAll.find((v: any) => v.id === id)?.title ?? id;
  for (const d of ["videos", "features", "areas", "reports"]) rmSync(resolve(DATA, d), { recursive: true, force: true });

  // ---------- video pages
  for (const ex of extracted) {
    const v = videosAll.find((x: any) => x.id === ex.id);
    const feats = features.filter((f) => f.videos.some((x: any) => x.id === ex.id));
    const matched = feats.filter((f) => f.release_plan?.matched && ["high", "medium"].includes(f.release_plan.confidence));
    const meta = {
      id: ex.id, title: ex.title, wave, url: ytUrl(ex.id), thumbnail: ytThumb(ex.id), duration_seconds: ex.duration_seconds, area: ex.area,
      audience: ex.audience, presenters: ex.presenters.map((p) => p.confidence === "high" ? p.name : `${p.name}?`),
      features: feats.map((f) => f.slug), status_mentions: countBy(ex.features.map((f) => f.status)), chapters: ex.chapters.length, quotes: ex.quotes.length,
      disclaimers: ex.disclaimers.length, docs_matched: matched.length, transcript: pub ? null : `data/transcripts/full/${ex.id}.md`,
    };
    const lines: string[] = [];
    lines.push(`# ${ex.title}`, "", `> ${ex.summary}`, "", `Watch: ${ytUrl(ex.id)} (${fmtTime(ex.duration_seconds)}). Area: ${areaName(ex.area)}. Audience: ${ex.audience.join(", ") || "not stated"}. Presenters as heard: ${ex.presenters.length ? ex.presenters.map((p) => `${p.name} (${p.confidence} confidence)`).join(", ") : "not introduced by name"}.`, "");
    lines.push("## Chapters", "", ...ex.chapters.map((c) => `- ${link(ex.id, c.t_start)} ${c.title} (${fmtMinutes(c.t_end - c.t_start)})`), "");
    lines.push("## Features in this video", "");
    for (const f of feats.sort((a, b) => a.videos.find((x: any) => x.id === ex.id).t_start - b.videos.find((x: any) => x.id === ex.id).t_start)) {
      const x = f.videos.find((y: any) => y.id === ex.id);
      lines.push(`- [${f.name}](../features/${f.slug}.md) - ${statusText(f)} - ${link(ex.id, x.t_start, `${fmtTime(x.t_start)} to ${fmtTime(x.t_end)}`)}${x.demo ? `, demo ${link(ex.id, x.demo.t_start, `${fmtTime(x.demo.t_start)} to ${fmtTime(x.demo.t_end)}`)}` : ""} - ${f.summary.split(/(?<=\.)\s/)[0]}`);
    }
    lines.push("", "## Quotes", "", ...ex.quotes.map((qq) => `- ${link(ex.id, qq.t)} ${q(qq.text)}${qq.truncated ? " (cut at 30 words)" : ""} - ${qq.why_it_matters}`), "");
    if (ex.disclaimers.length) lines.push("## Disclaimers and status moments", "", ...ex.disclaimers.map((d) => `- ${link(ex.id, d.t)} ${d.kind}: ${q(d.text)}`), "");
    lines.push("## Documented features matched", "");
    lines.push(...(matched.length ? matched.map((f) => `- ${f.name} -> [${f.release_plan.title}](${f.release_plan.url}) (${f.release_plan.confidence} confidence, docs say ${statusLabel[f.release_plan.doc_status] ?? "nothing about status"})`) : ["- none of the features in this video matched an item in the documented features baseline"]), "");
    lines.push("## Transcript", "", pub ? "The full transcript is not part of the public repository. The video is the source: use the links above." : `Cleaned transcript with timestamps: [data/transcripts/full/${ex.id}.md](../transcripts/full/${ex.id}.md) (JSON segments: [${ex.id}.json](../transcripts/full/${ex.id}.json)).`, "");
    lines.push(`_Generated by pipeline step 06 from YouTube auto-captions. Not official. Presenter names and product names may be transcribed wrongly. Video thumbnail: ${ytThumb(ex.id)}_`);
    writeText(resolve(DATA, "videos", `${ex.id}.md`), withFrontmatter(meta, lines.join("\n")));
    void v;
  }

  // ---------- feature pages
  for (const f of features) {
    const meta = {
      slug: f.slug, name: f.name, wave, area: f.area, status: f.status, status_source: f.status_source ?? "stated", status_conflict: f.status_conflict,
      videos: f.videos.map((v: any) => ({ id: v.id, t_start: v.t_start, t_end: v.t_end })), airtime_seconds: f.airtime_seconds, demoed: f.demoed,
      release_plan: { matched: f.release_plan.matched, id: f.release_plan.id, title: f.release_plan.title, confidence: f.release_plan.confidence, url: f.release_plan.url, doc_status: f.release_plan.doc_status },
      tags: f.tags, dev_relevance: f.dev_relevance, quotes: f.quotes.length,
    };
    const l: string[] = [`# ${f.name}`, "", `> ${f.summary}`, ""];
    l.push(`Area: [${areaName(f.area)}](../areas/${f.area}.md). Status: **${statusText(f)}**${f.status_conflict ? " (conflicting statements across videos, see below)" : ""}. Developer relevance: ${f.dev_relevance}. Airtime: ${fmtMinutes(f.airtime_seconds)} across ${f.videos.length} video${f.videos.length === 1 ? "" : "s"}${f.demoed ? ", demoed" : ""}.`, "");
    l.push("## Status evidence", "");
    if (f.status_evidence?.quote) l.push(`- ${link(f.status_evidence.video_id, f.status_evidence.t ?? 0)} in "${videoTitle(f.status_evidence.video_id)}": ${q(f.status_evidence.quote)}${f.status_evidence.verified ? "" : " (quote not verified against the transcript)"}`);
    else l.push(`- ${f.status_note ?? "The videos do not state whether this is preview or generally available."}`);
    if (f.status_conflict) l.push(...f.status_by_video.map((s: any) => `- ${videoTitle(s.video_id)}: ${statusLabel[s.status]}${s.t !== null && s.t !== undefined ? ` (${link(s.video_id, s.t)})` : ""}`));
    l.push("", "## Where they talk about it", "");
    for (const v of f.videos) l.push(`- [${v.title}](../videos/${v.id}.md): ${link(v.id, v.t_start, `${fmtTime(v.t_start)} to ${fmtTime(v.t_end)}`)}${v.demo ? `, demo at ${link(v.id, v.demo.t_start)}` : ""}${v.names_in_video?.length && !(v.names_in_video.length === 1 && v.names_in_video[0] === f.name) ? ` (called ${v.names_in_video.map((n: string) => `"${n}"`).join(" and ")} there)` : ""}`);
    l.push("", "## Quotes", "");
    l.push(...(f.quotes.length ? f.quotes.map((qq: any) => `- ${link(qq.video_id, qq.t)} ${q(qq.text)} - ${qq.why_it_matters}`) : ["- no validated quote falls inside this feature's time range"]));
    if (f.caveats.length) l.push("", "## Caveats mentioned", "", ...f.caveats.map((c: string) => `- ${c}`));
    if (f.prerequisites.length) l.push("", "## Prerequisites mentioned", "", ...f.prerequisites.map((c: string) => `- ${c}`));
    l.push("", "## Documented features match", "");
    const rp = f.release_plan;
    if (rp.matched) l.push(`- [${rp.title}](${rp.url}) - ${rp.confidence} confidence (${rp.method}). Docs say: ${rp.availability ?? statusLabel[rp.doc_status] ?? "no status"}${rp.roadmap_id ? `, roadmap id ${rp.roadmap_id}` : ""}. ${rp.note ?? ""}`);
    else l.push(`- No documented item matched${rp.id ? ` (nearest, low confidence: [${rp.title}](${rp.url}))` : ""}. ${rp.note ?? ""}`);
    l.push("", `Tags: ${f.tags.join(", ")}`, "", "_Generated by pipeline step 06. Source: YouTube auto-captions of the launch event videos, see the deep links. Not official._");
    writeText(resolve(DATA, "features", `${f.slug}.md`), withFrontmatter(meta, l.join("\n")));
  }

  // ---------- area pages
  for (const a of cfg.areas) {
    const fs = features.filter((f) => f.area === a.slug).sort((x, y) => y.airtime_seconds - x.airtime_seconds);
    const at = airtime.areas.find((x: any) => x.slug === a.slug);
    const vids = extracted.filter((e) => e.area === a.slug);
    const meta = { slug: a.slug, name: a.name, wave, feature_count: fs.length, video_count: vids.length, feature_seconds: at?.feature_seconds ?? 0, video_seconds: at?.video_seconds ?? 0, by_status: at?.by_status ?? {} };
    const l = [`# ${a.name}`, "", `${fs.length} features, ${vids.length} video${vids.length === 1 ? "" : "s"} with this as primary area (${fmtMinutes(at?.video_seconds ?? 0)} of footage, ${fmtMinutes(at?.feature_seconds ?? 0)} of feature airtime).`, "", "## Features", ""];
    l.push(...(fs.length ? fs.map((f) => `- [${f.name}](../features/${f.slug}.md) - ${statusText(f)} - ${fmtMinutes(f.airtime_seconds)} - dev relevance ${f.dev_relevance}${f.release_plan.matched ? "" : " - not in the docs baseline"}`) : ["- no features extracted for this area"]));
    l.push("", "## Videos", "", ...(vids.length ? vids.map((e) => `- [${e.title}](../videos/${e.id}.md) (${fmtTime(e.duration_seconds)})`) : ["- no video has this as its primary area"]));
    const gapsHere = gaps.documented_not_shown.filter((d: any) => d.area === a.slug);
    if (gapsHere.length) l.push("", "## Documented but not shown in the videos", "", ...gapsHere.map((d: any) => `- [${d.title}](${d.url}) (docs: ${d.availability ?? d.doc_status})`));
    writeText(resolve(DATA, "areas", `${a.slug}.md`), withFrontmatter(meta, l.join("\n")));
  }

  // ---------- reports
  const high = features.filter((f) => f.dev_relevance === "high").sort((a, b) => b.airtime_seconds - a.airtime_seconds);
  const medium = features.filter((f) => f.dev_relevance === "medium").sort((a, b) => b.airtime_seconds - a.airtime_seconds);
  const digestMinutes = Math.round(unionByVideo(high) / 60);
  const digestInput = high.map((f) => `- ${f.name} (${statusText(f)}, ${fmtMinutes(f.airtime_seconds)}, ${areaName(f.area)}): ${f.summary}`).join("\n");
  const intro = await narrative("dev-digest-intro", `Write the introduction (3 short paragraphs, 120 to 180 words total) of a "developer digest" for Business Central AL developers about the ${cfg.waves[wave].name} launch event. Tone: direct, a bit of humor, no corporate fluff, no hype adjectives, no em-dashes. Say what themes dominate for developers and what to watch first. Use only the feature list below; do not add facts. Status rule for this event: a feature is generally available unless the presenters said otherwise; "(implied)" means nothing was said, so do not call those "unclear". Do not list features one by one, the list follows your text. Do not use headings.\n\nFeatures with high developer relevance (${high.length}, about ${digestMinutes} minutes of video):\n${digestInput}`);
  const byAreaHigh = groupBy(high, (f) => f.area);
  const dl: string[] = [`# Developer digest - ${cfg.waves[wave].name}`, "", `If you are a BC developer, here are the ${digestMinutes} minutes that matter, out of ${fmtMinutes(airtime.total_video_seconds)} of launch event video. ${high.length} features with high developer relevance, ${medium.length} more worth a look, every item deep-linked to the second where they explain it.`, "", intro, "", `_The three paragraphs above were written by Claude from the feature list below (${narrativeModel}). Everything else on this page is generated from the data._`, "", "## The playlist", ""];
  for (const [area, fs] of byAreaHigh) {
    dl.push(`### ${areaName(area)} (${fmtMinutes(fs.reduce((s, f) => s + f.airtime_seconds, 0))})`, "");
    for (const f of fs) { const v = f.videos[0]; dl.push(`- ${link(v.id, v.t_start, `${fmtTime(v.t_start)} ${v.title}`)} - **[${f.name}](../features/${f.slug}.md)** (${statusText(f)}, ${fmtMinutes(f.airtime_seconds)}) - ${f.summary.split(/(?<=\.)\s/)[0]}${f.videos.length > 1 ? ` Also in ${f.videos.slice(1).map((x: any) => link(x.id, x.t_start, x.title)).join(", ")}.` : ""}`); }
    dl.push("");
  }
  dl.push("## Also worth a look (medium relevance)", "", ...medium.map((f) => { const v = f.videos[0]; return `- ${link(v.id, v.t_start)} [${f.name}](../features/${f.slug}.md) in ${v.title} (${statusText(f)}, ${fmtMinutes(f.airtime_seconds)})`; }), "");
  dl.push("## Status at a glance", "", `| Status | High relevance features | Minutes |`, `|---|---|---|`, ...[["ga", "stated"], ["ga", "implied"], ["preview", "stated"], ["preview", "implied"], ["announced", "stated"]].map(([s, src]) => { const fs = high.filter((f) => f.status === s && (f.status_source ?? "stated") === src); return `| ${statusLabel[s]}${src === "implied" ? " (implied)" : ""} | ${fs.length} | ${Math.round(fs.reduce((x, f) => x + f.airtime_seconds, 0) / 60)} |`; }), "");
  dl.push("_Generated by pipeline step 06. Status rule: generally available unless the presenters said otherwise; \"implied\" means nothing was said. See each feature page for the evidence quote. Not official._");
  writeText(resolve(DATA, "reports", "dev-digest.md"), withFrontmatter({ wave, kind: "dev-digest", minutes: digestMinutes, high_relevance_features: high.length, medium_relevance_features: medium.length, generated_at: new Date().toISOString() }, dl.join("\n")));

  const gl: string[] = [`# What they didn't say - ${cfg.waves[wave].name}`, "", `Microsoft no longer publishes per-feature release plans. The baseline here is the official documentation: ${gaps.baseline.items} documented features (${gaps.baseline.sources.filter((s: any) => s.status === "ok").map((s: any) => s.kind).join(", ")}, fetched ${String(gaps.baseline.fetched_at).slice(0, 10)}). Against that: ${gaps.counts.documented_and_shown} documented features were shown or discussed in the videos, ${gaps.counts.documented_not_shown} were not, ${gaps.counts.shown_not_documented} things from the videos have no documented counterpart, and ${gaps.counts.status_conflicts} features have a status conflict between docs and video (${gaps.counts.status_conflicts_stated} where the presenters stated the status, the rest where they said nothing and GA is implied by launch event convention while the docs say preview).`, ""];
  const gapInput = `Status rule: a feature is GA unless the presenters said otherwise; "(implied)" means nothing was said.\nShown but not documented:\n${gaps.shown_not_documented.slice(0, 40).map((f: any) => `- ${f.name} (${f.area}, ${statusText(f)}, ${fmtMinutes(f.airtime_seconds)}): ${f.summary}`).join("\n")}\n\nDocumented but not shown (titles):\n${gaps.documented_not_shown.map((d: any) => `- ${d.title} (${d.area}, ${d.availability ?? d.doc_status})`).join("\n")}\n\nStatus conflicts:\n${gaps.status_conflicts.map((c: any) => `- ${c.name}: video ${c.video_status_source === "implied" ? "implies" : "says"} ${c.video_status}, docs say ${c.doc_status}`).join("\n") || "- none"}`;
  const commentary = await narrative("gap-commentary", `Write 2 short paragraphs (100 to 150 words total) of commentary on the gap between what Microsoft documented for Business Central ${cfg.waves[wave].name} and what the launch event videos actually covered. Tone: direct, a bit of humor, no em-dashes, no hype. Point at patterns (which areas got stage time, which did not, what the undocumented items have in common). Use only the lists below; do not add facts; do not enumerate everything. No headings.\n\n${gapInput}`);
  gl.push(commentary, "", `_The commentary above was written by Claude from the lists below (${narrativeModel}). The lists are generated from the data; confidence levels come from the matching step and from data/release-plan/overrides.json._`, "");
  gl.push("## Shown but not documented (the gems)", "", ...(gaps.shown_not_documented.length ? gaps.shown_not_documented.map((f: any) => `- **[${f.name}](../features/${f.slug}.md)** (${areaName(f.area)}, ${statusText(f)}, ${fmtMinutes(f.airtime_seconds)}, match confidence ${f.confidence}) - ${f.videos.map((v: any) => link(v.id, v.t, `${fmtTime(v.t)} ${v.title}`)).join("; ")}${f.nearest_doc ? ` - nearest doc item: [${f.nearest_doc.title}](${f.nearest_doc.url})` : ""}`) : ["- everything in the videos matched a documented item"]), "");
  gl.push("## Documented but not shown", "");
  for (const [area, ds] of groupBy(gaps.documented_not_shown, (d: any) => d.area)) gl.push(`### ${areaName(area)} (${ds.length})`, "", ...ds.map((d: any) => `- [${d.title}](${d.url}) - docs: ${d.availability ?? d.doc_status}${d.low_confidence_candidates?.length ? ` - possibly touched by: ${d.low_confidence_candidates.map((c: any) => `[${c.name}](../features/${c.slug}.md)`).join(", ")}` : ""}`), "");
  const stated = gaps.status_conflicts.filter((c: any) => c.video_status_source !== "implied"), implied = gaps.status_conflicts.filter((c: any) => c.video_status_source === "implied");
  gl.push("## Status conflicts", "", "Where the presenters stated a status and the docs say something else:", "", ...(stated.length ? stated.map((c: any) => `- **[${c.name}](../features/${c.slug}.md)**: the video says ${statusLabel[c.video_status]}${c.evidence?.quote ? ` (${link(c.evidence.video_id, c.evidence.t ?? 0)} ${q(c.evidence.quote)})` : ""}, the docs say ${statusLabel[c.doc_status]} ([${c.doc.title}](${c.doc.url}), ${c.confidence} confidence match)`) : ["- none found: where both sides state a status, they agree"]), "");
  gl.push("Where the presenters said nothing (GA by launch event convention) but the docs say preview:", "", ...(implied.length ? implied.map((c: any) => `- **[${c.name}](../features/${c.slug}.md)**: nothing said, the docs say ${statusLabel[c.doc_status]} ([${c.doc.title}](${c.doc.url}), ${c.confidence} confidence match)`) : ["- none"]), "");
  gl.push("## Status implied, docs agree", "", `${gaps.silent_on_status.filter((s: any) => s.agrees).length} matched features where the presenters never said preview or GA, GA was implied, and the docs indeed say GA:`, "", ...gaps.silent_on_status.filter((s: any) => s.agrees).map((s: any) => `- [${s.name}](../features/${s.slug}.md) ([${s.doc.title}](${s.doc.url}))`), "");
  gl.push("_Generated by pipeline step 06 from data/index/gap-analysis.json. Not official. Matching is done by a language model with keyword candidates; waldo corrects it in data/release-plan/overrides.json._");
  writeText(resolve(DATA, "reports", "what-they-didnt-say.md"), withFrontmatter({ wave, kind: "gap-analysis", ...gaps.counts, baseline_status: gaps.baseline.status, generated_at: new Date().toISOString() }, gl.join("\n")));

  const bl: string[] = [`# Buzzword bingo - ${cfg.waves[wave].name}`, "", `${wc.total_words.toLocaleString("en-US")} words of auto-captions across ${wc.videos.length} videos. Counts are case-insensitive, plurals included.`, "", "## Totals", "", "| Term | Count | Per 1000 words | Videos using it |", "|---|---|---|---|"];
  for (const t of wc.top) bl.push(`| ${t.term} | ${t.count} | ${round2((t.count / wc.total_words) * 1000)} | ${wc.videos.filter((v: any) => v.counts[t.term] > 0).length} |`);
  bl.push("", `Base terms from the brief: ${wc.base_terms.join(", ")}. Proposed by Claude after reading the frequency list: ${wc.proposed_terms.join(", ")}.`, "", "## Per video", "", "| Video | Words | Top term | Count | agent | copilot | AI | MCP | preview |", "|---|---|---|---|---|---|---|---|---|");
  for (const v of [...wc.videos].sort((a: any, b: any) => b.words - a.words)) { const top = Object.entries(v.counts).sort((a: any, b: any) => b[1] - a[1])[0] as [string, number]; bl.push(`| [${v.title}](../videos/${v.id}.md) | ${v.words} | ${top[1] ? top[0] : "-"} | ${top[1]} | ${v.counts["agent"]} | ${v.counts["copilot"]} | ${v.counts["AI"]} | ${v.counts["MCP"]} | ${v.counts["preview"]} |`); }
  bl.push("", "## New words this wave", "");
  if (wc.new_words.status === "ok") bl.push(`Words that appear in the ${wave} transcripts but in none of the ${wc.new_words.previous_videos} ${wc.new_words.compared_with} videos:`, "", wc.new_words.words.map((w: any) => `${w.word} (${w.count})`).join(", "));
  else bl.push(`Not available: ${wc.new_words.reason}.`);
  bl.push("", "## Bingo card", "", "The site generates a printable 5x5 card from the 24 most frequent terms (free square in the middle). On paper: write the terms below in any order.", "", wc.top.filter((t: any) => t.count > 0).slice(0, 24).map((t: any) => t.term).join(" | "), "", "_Generated by pipeline step 06 from data/index/wordcount.json._");
  writeText(resolve(DATA, "reports", "buzzword-bingo.md"), withFrontmatter({ wave, kind: "buzzword-bingo", total_words: wc.total_words, terms: wc.terms.length, generated_at: new Date().toISOString() }, bl.join("\n")));

  // ---------- llms.txt and llms-full.txt
  const areaLines = (base: string) => cfg.areas.map((a) => `- [${a.name}](${base}/data/areas/${a.slug}.md): ${features.filter((f) => f.area === a.slug).length} features, ${fmtMinutes(airtime.areas.find((x: any) => x.slug === a.slug)?.video_seconds ?? 0)} of video`).join("\n");
  const core = (base: string) => `- [AGENTS.md](${base}/AGENTS.md): how to navigate and cite this repository, file schemas, example questions
- [features.json](${base}/data/index/features.json): the merged feature graph (${features.length} features, status, airtime, videos, quotes, docs match)
- [videos.json](${base}/data/videos.json): the ${videosAll.length} videos with ids, titles, lengths
- [airtime.json](${base}/data/index/airtime.json): seconds per area, feature, status, audience
- [gap-analysis.json](${base}/data/index/gap-analysis.json): documented features vs what the videos covered
- [timelines.json](${base}/data/index/timelines.json): per video chapters, demo ranges, disclaimer moments
- [wordcount.json](${base}/data/index/wordcount.json): buzzword counts`;
  const reports = (base: string) => `- [Developer digest](${base}/data/reports/dev-digest.md): the ${digestMinutes} minutes that matter to AL developers, deep-linked
- [What they didn't say](${base}/data/reports/what-they-didnt-say.md): documented but not shown, shown but not documented, status conflicts
- [Buzzword bingo](${base}/data/reports/buzzword-bingo.md): counts per video and total
- [llms-full.txt](${base}/llms-full.txt): all feature pages and video pages concatenated (no raw transcripts)`;
  const llms = `# ${cfg.waves[wave].event}

> Unofficial, LLM-navigable index of the ${videosAll.length} launch event videos (${fmtMinutes(airtime.total_video_seconds)}) that Microsoft published on ${cfg.waves[wave].event_date} for Dynamics 365 Business Central ${cfg.waves[wave].name}. Built from YouTube auto-captions; every claim links to a video and a second. Made by waldo (Eric Wauters), not by Microsoft.

Start with AGENTS.md, then data/index/features.json for structured answers or data/features/<slug>.md for prose. Per-video pages are in data/videos/<id>.md. Full transcripts (private build only) are in data/transcripts/full/<id>.md.

## Core files (raw GitHub URLs)

${core(RAW)}

## Areas

${areaLines(RAW)}

## Reports

${reports(RAW)}

## Same files, relative paths (for a cloned repository)

${core(".")}

${areaLines(".")}

${reports(".")}

## Optional

- [CONTENT-NOTICE.md](${RAW}/CONTENT-NOTICE.md): what the transcripts are and who owns what
- [docs/brief/](${RAW}/docs/brief/PROMPT-coding-agent.md): the brief this repository was built from
- [Site](https://waldo1001.github.io/msdyn365-2026-release-wave-2/): the human-friendly version of the same data
`;
  writeText(resolve(ROOT, "llms.txt"), llms);
  const stripFm = (s: string) => s.replace(/^---\n[\s\S]*?\n---\n\n?/, "");
  const full = [`# ${cfg.waves[wave].event} - full text for LLMs`, "", "Generated from the per-feature and per-video pages. No raw transcripts. Every timestamp links to the video.", "", "# Reports", "", stripFm(readText(resolve(DATA, "reports", "dev-digest.md"))), "", stripFm(readText(resolve(DATA, "reports", "what-they-didnt-say.md"))), "", "# Features", ""];
  for (const f of features) full.push(stripFm(readText(resolve(DATA, "features", `${f.slug}.md`))), "");
  full.push("# Videos", "");
  for (const ex of extracted) full.push(stripFm(readText(resolve(DATA, "videos", `${ex.id}.md`))), "");
  writeText(resolve(ROOT, "llms-full.txt"), full.join("\n"));
  console.log(`06-render: ${extracted.length} video pages, ${features.length} feature pages, ${cfg.areas.length} area pages, 3 reports, llms.txt, llms-full.txt${pub ? " (public mode)" : ""}`);

  // helpers needing closure
  async function narrative(label: string, prompt: string): Promise<string> {
    try {
      const res = await complete<{ text: string }>({ tag: "06-render-markdown", promptVersion: "v1", model: defaultModel("narrative"), label, system: "You write short, plain, honest prose for a developer audience about the Business Central launch event. Use only the facts given. No em-dashes, no bullet lists, no headings, no hype words. Return JSON { \"text\": \"...\" } with paragraphs separated by blank lines.", prompt, schema: { type: "object", additionalProperties: false, required: ["text"], properties: { text: { type: "string" } } } });
      narrativeModel = res.meta.model;
      return res.output.text.replace(/—/g, "-").trim();
    } catch (e: any) {
      console.error(`  narrative ${label} unavailable: ${String(e.message).slice(0, 120)}`);
      return "_(narrative not generated: LLM unavailable in this build)_";
    }
  }
}
let narrativeModel = "n/a";
function readText(p: string) { return fsMod.readFileSync(p, "utf8"); }
function unionByVideo(fs: any[]): number {
  const byVideo = new Map<string, [number, number][]>();
  for (const f of fs) for (const v of f.videos) byVideo.set(v.id, [...(byVideo.get(v.id) ?? []), ...(v.ranges ?? [[v.t_start, v.t_end]])]);
  let total = 0;
  for (const ranges of byVideo.values()) {
    const r = ranges.filter(([a, b]) => b > a).sort((x, y) => x[0] - y[0]);
    let cur: [number, number] | null = null;
    for (const [a, b] of r) { if (!cur || a > cur[1]) { if (cur) total += cur[1] - cur[0]; cur = [a, b]; } else cur[1] = Math.max(cur[1], b); }
    if (cur) total += cur[1] - cur[0];
  }
  return total;
}
function countBy(xs: string[]) { const c: Record<string, number> = {}; for (const x of xs) c[x] = (c[x] ?? 0) + 1; return c; }
function groupBy<T>(xs: T[], key: (x: T) => string): Map<string, T[]> { const m = new Map<string, T[]>(); for (const x of xs) { const k = key(x); m.set(k, [...(m.get(k) ?? []), x]); } return m; }
const round2 = (n: number) => Math.round(n * 100) / 100;
void readJsonIf;
main().catch((e) => { console.error(e); process.exit(1); });
