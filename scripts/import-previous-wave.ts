/**
 * Import the captions of a previous wave for the "new words this wave" diff only.
 *   tsx scripts/import-previous-wave.ts --wave 2025w2 [--src data/transcripts/raw]
 * Expects VTT files named "<date> - BCLE - <title> [<youtube id>].vtt" (yt-dlp -o with [%(id)s]).
 * Writes data/transcripts/full/<id>.json with wave set to the previous wave. No md, no extraction.
 */
import { resolve, basename } from "node:path";
import { readFileSync, readdirSync } from "node:fs";
import { writeJson } from "../pipeline/lib/fsx.js";
import { loadWaves, DATA } from "../pipeline/lib/config.js";
import { vttToWords, wordsToSegments } from "../pipeline/01-clean-vtt/index.js";

const args = process.argv.slice(2);
const opt = (k: string, d: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const wave = opt("wave", "2025w2");
const src = resolve(opt("src", resolve(DATA, "transcripts", "raw")));
const cfg = loadWaves();
const prefix = cfg.waves[wave]?.transcript_prefix ?? "";
let n = 0;
for (const f of readdirSync(src).filter((x) => x.endsWith(".vtt") && (!prefix || x.startsWith(prefix)))) {
  const m = f.match(/\[([A-Za-z0-9_-]{11})\]\.vtt$/);
  if (!m) { console.log(`skip (no [id] in name): ${f}`); continue; }
  const id = m[1];
  const title = f.slice(prefix.length).replace(/\s*\[[A-Za-z0-9_-]{11}\]\.vtt$/, "");
  const { words, markers } = vttToWords(readFileSync(resolve(src, f), "utf8"));
  const segs = wordsToSegments(words);
  writeJson(resolve(DATA, "transcripts", "full", `${id}.json`), { id, title, wave, url: `https://www.youtube.com/watch?v=${id}`, duration_seconds: Math.round(segs.at(-1)?.end ?? 0), kind: "captions", language: "en", source_file: basename(f), word_count: words.length, segment_count: segs.length, markers, segments: segs, note: "previous wave, imported for the vocabulary diff only" });
  n++;
}
console.log(`import-previous-wave: ${n} transcripts imported as wave ${wave}`);
