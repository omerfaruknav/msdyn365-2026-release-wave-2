/**
 * Docs re-check helper. Prepares the inputs for the review agents, summarizes their outputs and
 * turns the reviewed results into entries for data/release-plan/overrides.json.
 * The judgment calls (does this article describe that feature?) are made by agents and a human,
 * not here. See .claude/skills/docs-recheck/SKILL.md for the whole workflow.
 *
 *   tsx scripts/docs-recheck.ts batches   --out tmp/recheck            build one input JSON per area batch + transcript-check.json
 *   tsx scripts/docs-recheck.ts aggregate --in tmp/recheck/out [--mode summary|should|doubt|learn|transcript]
 *   tsx scripts/docs-recheck.ts propose   --in tmp/recheck/out --out tmp/recheck/proposed.json [--accept slug,slug]
 *   tsx scripts/docs-recheck.ts apply     --from tmp/recheck/proposed.json
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (k: string, d?: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const ROOT = resolve(import.meta.dirname ?? ".", "..");
const read = (p: string) => JSON.parse(readFileSync(p, "utf8"));
const waves = read(resolve(ROOT, "config", "waves.json"));
const wave = opt("wave", process.env.WAVE ?? waves.default);
const featuresPath = resolve(ROOT, "data", "index", "features.json");
const planPath = resolve(ROOT, "data", "release-plan", `${wave}.json`);
const overridesPath = resolve(ROOT, "data", "release-plan", "overrides.json");
const today = new Date().toISOString().slice(0, 10);
const BATCH_MAX = 40;

function batches() {
  const out = resolve(ROOT, opt("out", "tmp/recheck")!);
  mkdirSync(resolve(out, "in"), { recursive: true }); mkdirSync(resolve(out, "out"), { recursive: true });
  const fj = read(featuresPath); const plan = read(planPath); const docs: any[] = plan.items;
  const gaps = read(resolve(ROOT, "data", "index", "gap-analysis.json"));
  const byArea = new Map<string, any[]>();
  for (const f of fj.features) byArea.set(f.area, [...(byArea.get(f.area) ?? []), {
    slug: f.slug, name: f.name, summary: f.summary, status: f.status, airtime_seconds: f.airtime_seconds, tags: f.tags ?? [],
    quotes: (f.quotes ?? []).slice(0, 3).map((q: any) => q.text),
    videos: f.videos.map((v: any) => ({ id: v.id, title: v.title, t_start: v.t_start })),
    current_match: { matched: f.release_plan.matched, doc_id: f.release_plan.id, confidence: f.release_plan.confidence, note: f.release_plan.note ?? null, learn: f.release_plan.learn ?? null },
  }]);
  const titles = docs.map((d) => ({ id: d.id, title: d.title, area: d.area, doc_status: d.doc_status }));
  const names: string[] = [];
  for (const [area, fs] of byArea) {
    fs.sort((a, b) => b.airtime_seconds - a.airtime_seconds);
    const n = Math.max(1, Math.ceil(fs.length / BATCH_MAX));
    for (let i = 0; i < n; i++) {
      const name = n > 1 ? `${area}-${i + 1}` : area;
      writeFileSync(resolve(out, "in", `${name}.json`), JSON.stringify({ batch: name, area, wave, features: fs.filter((_, k) => k % n === i), doc_items_same_area_full_text: docs.filter((d) => d.area === area), all_doc_items_titles: titles }, null, 1));
      names.push(name);
    }
  }
  const planById = new Map(docs.map((d) => [d.id, d]));
  const tc = {
    wave,
    documented_not_shown: gaps.documented_not_shown.map((d: any) => ({ ...d, text: (planById.get(d.id)?.text ?? "").slice(0, 900) })),
    stated_status_conflicts: gaps.status_conflicts.filter((c: any) => c.video_status_source !== "implied"),
    videos: read(resolve(ROOT, "data", "videos.json")),
  };
  writeFileSync(resolve(out, "in", "transcript-check.json"), JSON.stringify(tc, null, 1));
  console.log(`docs-recheck: ${names.length} batches in ${out}/in (${names.join(", ")}) + transcript-check.json (${tc.documented_not_shown.length} documented-not-shown, ${tc.stated_status_conflicts.length} stated conflicts)`);
  console.log(`docs-recheck: agents write their results to ${out}/out/<batch>.json`);
}

function loadResults(dir: string) {
  const rows: any[] = []; const checked = new Map<string, string>(); let transcript: any = null;
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("proposed"))) {
    const b = read(resolve(dir, f));
    if (f === "transcript-check.json") { transcript = b; continue; }
    for (const r of b.results ?? []) { rows.push(r); checked.set(r.slug, String(b.checked_at ?? today).slice(0, 10)); }
  }
  return { rows, checked, transcript };
}

function aggregate() {
  const dir = resolve(ROOT, opt("in", "tmp/recheck/out")!); const mode = opt("mode", "summary");
  const { rows, transcript } = loadResults(dir);
  const fj = read(featuresPath); const bySlug = new Map<string, any>(fj.features.map((f: any) => [f.slug, f]));
  const docs = new Set<string>(read(planPath).items.map((d: any) => d.id));
  const count = (xs: string[]) => Object.fromEntries([...new Set(xs)].map((k) => [k, xs.filter((x) => x === k).length]));
  console.log(`rows ${rows.length} of ${fj.features.length} features; whatsnew ${JSON.stringify(count(rows.map((r) => r.whatsnew?.verdict ?? "missing")))}; learn ${JSON.stringify(count(rows.map((r) => r.learn?.documented ?? "not_checked")))}`);
  const unknown = rows.filter((r) => !bySlug.has(r.slug)).map((r) => r.slug); if (unknown.length) console.log(`unknown slugs: ${unknown.join(", ")}`);
  const badDoc = rows.filter((r) => r.whatsnew?.doc_id && !docs.has(r.whatsnew.doc_id)).map((r) => `${r.slug}->${r.whatsnew.doc_id}`); if (badDoc.length) console.log(`unknown doc ids: ${badDoc.join(", ")}`);
  for (const r of rows) {
    const f = bySlug.get(r.slug); if (!f) continue; const w = r.whatsnew ?? {}; const l = r.learn ?? {};
    if (mode === "should" && w.verdict === "should_match") console.log(`\n[${r.slug}] ${f.name} (now ${f.release_plan.confidence})\n  -> ${w.doc_id} (${w.confidence})\n  evidence: ${w.evidence}`);
    if (mode === "doubt" && w.verdict === "doubtful") console.log(`\n[${r.slug}] ${f.name} now=${f.release_plan.id} (${f.release_plan.confidence})\n  suggest: ${w.doc_id} (${w.confidence})\n  reason: ${w.reason}`);
    if (mode === "learn" && (l.documented === "yes" || l.documented === "partial")) console.log(`${r.slug.padEnd(44)} | ${l.documented.padEnd(7)} | ${(l.title ?? "").slice(0, 55).padEnd(55)} | ${l.url}${/\/release-plan\//.test(l.url ?? "") ? "  <-- release plan, earlier wave" : ""}${!/\/business-central/.test(l.url ?? "") ? "  <-- not a Business Central page" : ""}`);
  }
  if (mode === "transcript" && transcript) {
    for (const d of transcript.documented_not_shown ?? []) if (d.verdict !== "not_mentioned") console.log(`${d.id}: ${d.verdict} ${d.video_id}@${d.t}s "${d.quote}" - ${d.note ?? ""}`);
    for (const c of transcript.stated_status_conflicts ?? []) console.log(`${c.slug}: ${c.verdict} @${c.t}s "${c.words}" - ${c.reason ?? ""}`);
  }
}

function propose() {
  const dir = resolve(ROOT, opt("in", "tmp/recheck/out")!); const out = resolve(ROOT, opt("out", "tmp/recheck/proposed.json")!);
  const accept = new Set((opt("accept", "") ?? "").split(",").map((s) => s.trim()).filter(Boolean));
  const { rows, checked, transcript } = loadResults(dir);
  const docs = new Set<string>(read(planPath).items.map((d: any) => d.id));
  const overrides: any[] = [], learn_docs: any[] = [], doc_mentions: any[] = [], review: string[] = [];
  for (const r of rows) {
    const w = r.whatsnew ?? {}; const l = r.learn ?? {};
    if (w.verdict === "should_match" && docs.has(w.doc_id)) {
      const entry = { feature: r.slug, doc_id: w.doc_id, confidence: w.confidence ?? "medium", note: `Re-check of ${checked.get(r.slug)} against the full what's new text (the matching step only sees the first 220 characters): "${String(w.evidence ?? "").trim()}"` };
      if (accept.size === 0 || accept.has(r.slug)) overrides.push(entry); else review.push(`should_match not accepted: ${r.slug} -> ${w.doc_id}`);
    }
    if (w.verdict === "doubtful") review.push(`doubtful (kept unless you add an override by hand): ${r.slug} - ${w.reason ?? ""}`);
    const u = String(l.url ?? "");
    if ((l.documented === "yes" || l.documented === "partial") && u.includes("learn.microsoft.com") && u.includes("/business-central") && !u.includes("/release-plan/")) {
      const note = `${String(l.evidence ?? "").trim()}${l.note ? ` Note: ${String(l.note).trim()}` : ""}`.slice(0, 600);
      learn_docs.push({ feature: r.slug, url: u, title: String(l.title ?? "").trim(), documented: l.documented, checked_at: checked.get(r.slug), note });
    }
  }
  for (const d of transcript?.documented_not_shown ?? []) if (d.verdict === "mentioned_in_passing" || d.verdict === "discussed") doc_mentions.push({
    doc_id: d.id, video_id: d.video_id, t: Math.round(d.t), quote: String(d.quote ?? "").slice(0, 200),
    note: `${d.verdict === "discussed" ? "Discussed inside the demo of a broader feature; the extraction did not cut it out as a feature of its own. " : "Mentioned in passing, not demoed. "}${d.note ?? ""} (transcript check ${String(transcript.checked_at ?? today).slice(0, 10)})`,
  });
  for (const c of transcript?.stated_status_conflicts ?? []) if (c.verdict !== "supports") review.push(`stated status ${c.verdict}: ${c.slug} @${c.t}s "${c.words}"`);
  mkdirSync(resolve(out, ".."), { recursive: true });
  writeFileSync(out, JSON.stringify({ wave, proposed_at: new Date().toISOString(), overrides, learn_docs, doc_mentions, review }, null, 2));
  console.log(`docs-recheck: proposed ${overrides.length} overrides, ${learn_docs.length} learn_docs, ${doc_mentions.length} doc_mentions, ${review.length} items to review by hand -> ${out}`);
}

function apply() {
  const from = resolve(ROOT, opt("from", "tmp/recheck/proposed.json")!);
  const p = read(from); const o = existsSync(overridesPath) ? read(overridesPath) : { overrides: [], ignore_doc_items: [], learn_docs: [], doc_mentions: [] };
  const merge = (list: any[], add: any[], key: (x: any) => string) => { const m = new Map(list.map((x) => [key(x), x])); for (const a of add) m.set(key(a), a); return [...m.values()]; };
  o.overrides = merge(o.overrides ?? [], p.overrides ?? [], (x) => x.feature);
  o.learn_docs = merge(o.learn_docs ?? [], p.learn_docs ?? [], (x) => x.feature);
  o.doc_mentions = merge(o.doc_mentions ?? [], p.doc_mentions ?? [], (x) => `${x.doc_id}|${x.video_id}`);
  writeFileSync(overridesPath, JSON.stringify(o, null, 2) + "\n");
  console.log(`docs-recheck: overrides.json now has ${o.overrides.length} overrides, ${o.learn_docs.length} learn_docs, ${o.doc_mentions.length} doc_mentions. Rerun: npm run pipeline:deterministic && npm run site:build`);
}

if (cmd === "batches") batches();
else if (cmd === "aggregate") aggregate();
else if (cmd === "propose") propose();
else if (cmd === "apply") apply();
else { console.error("usage: docs-recheck.ts batches|aggregate|propose|apply [--out dir] [--in dir] [--from file] [--mode m] [--accept slugs]"); process.exit(2); }
