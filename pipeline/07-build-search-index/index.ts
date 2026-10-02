/**
 * Step 07 - search index
 * data/index/search.json: passages for client-side full-text search. In the private build a
 * passage is a group of transcript segments of about 40 words with video id and t. In the
 * public build (no data/transcripts/full) only summaries, chapter titles, feature texts and
 * the short quotes are indexed, so no transcript text leaks.
 */
import { resolve } from "node:path";
import { DATA, OUT, parseArgs, isPublicBuild } from "../lib/config.js";
import { readJson, writeJson, listFiles, existsSync } from "../lib/fsx.js";
import type { Extracted } from "../02-extract/index.js";

const TARGET_WORDS = 40;

function main() {
  const { wave, flags } = parseArgs();
  const pub = isPublicBuild();
  const only = typeof flags.only === "string" ? new Set(String(flags.only).split(",")) : null;
  const exDir = resolve(OUT, "02-extract");
  const extracted: Extracted[] = listFiles(exDir, ".json").filter((f) => !f.endsWith(".log.json")).map((f) => readJson<Extracted>(resolve(exDir, f))).filter((e) => e.wave === wave && (!only || only.has(e.id)));
  const fj = readJson<any>(resolve(DATA, "index", "features.json"));
  const docs: any[] = [];
  const videos: Record<string, { title: string; area: string; duration: number }> = {};
  let n = 0;
  for (const ex of extracted) {
    videos[ex.id] = { title: ex.title, area: ex.area, duration: ex.duration_seconds };
    const trPath = resolve(DATA, "transcripts", "full", `${ex.id}.json`);
    if (!pub && existsSync(trPath)) {
      const segs: { t: number; text: string }[] = readJson<any>(trPath).segments;
      let buf: { t: number; text: string }[] = [], words = 0;
      const flush = () => { if (!buf.length) return; docs.push({ id: n++, k: "p", v: ex.id, t: buf[0].t, text: buf.map((s) => s.text).join(" ") }); buf = []; words = 0; };
      for (const s of segs) { buf.push(s); words += s.text.split(/\s+/).length; if (words >= TARGET_WORDS) flush(); }
      flush();
    }
    docs.push({ id: n++, k: "s", v: ex.id, t: 0, text: ex.summary });
    for (const c of ex.chapters) docs.push({ id: n++, k: "c", v: ex.id, t: c.t_start, text: c.title });
    if (pub) for (const q of ex.quotes) docs.push({ id: n++, k: "q", v: ex.id, t: q.t, text: q.text });
  }
  for (const f of fj.features) {
    const v = f.videos[0];
    docs.push({ id: n++, k: "f", v: v?.id, t: v?.t_start ?? 0, slug: f.slug, text: `${f.name}. ${f.summary} ${f.tags.join(" ")}` });
  }
  const out = { wave, generated_at: new Date().toISOString(), mode: pub ? "public" : "full", kinds: { p: "transcript passage", s: "video summary", c: "chapter title", q: "quote", f: "feature" }, videos, docs };
  writeJson(resolve(DATA, "index", "search.json"), out, false);
  console.log(`07-search: ${docs.length} documents (${out.mode} mode), ${docs.filter((d) => d.k === "p").length} passages`);
}
main();
