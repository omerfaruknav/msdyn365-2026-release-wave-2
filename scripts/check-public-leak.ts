/**
 * Acceptance check 6: after strip-for-public.sh, no file in the repo (or in site/dist) may
 * contain more than 30 consecutive words from any transcript.
 *   tsx scripts/check-public-leak.ts --transcripts <dir with the private full/*.json> [--root <stripped repo>]
 * Builds 31-word shingles of every transcript and scans every text file of the stripped tree.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { resolve, join, extname } from "node:path";
import { normalizeSpeech } from "../pipeline/lib/text.js";

const args = process.argv.slice(2);
const opt = (k: string, d: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const trDir = resolve(opt("transcripts", "data/transcripts/full"));
const root = resolve(opt("root", "."));
const N = 31;
const shingles = new Map<string, string>();
for (const f of readdirSync(trDir).filter((x) => x.endsWith(".json"))) {
  const d = JSON.parse(readFileSync(join(trDir, f), "utf8"));
  const w = normalizeSpeech(d.segments.map((s: any) => s.text).join(" ")).split(" ").filter(Boolean);
  for (let i = 0; i + N <= w.length; i++) { const k = w.slice(i, i + N).join(" "); if (!shingles.has(k)) shingles.set(k, d.id); }
}
console.log(`check-public: ${shingles.size} transcript shingles of ${N} words from ${trDir}`);
const skipDirs = new Set(["node_modules", ".git"]);
const exts = new Set([".md", ".json", ".txt", ".html", ".js", ".ts", ".yml", ".yaml", ".css", ".svg"]);
let files = 0, leaks = 0;
function walk(dir: string) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (resolve(p) === trDir) continue;
    const st = statSync(p);
    if (st.isDirectory()) { if (!skipDirs.has(e)) walk(p); continue; }
    if (!exts.has(extname(e))) continue;
    files++;
    const w = normalizeSpeech(readFileSync(p, "utf8")).split(" ").filter(Boolean);
    for (let i = 0; i + N <= w.length; i++) {
      const k = w.slice(i, i + N).join(" ");
      if (shingles.has(k)) { leaks++; console.log(`LEAK ${p.replace(root + "/", "")} (video ${shingles.get(k)}): "${w.slice(i, i + 12).join(" ")}…"`); break; }
    }
  }
}
walk(root);
console.log(leaks ? `check-public: ${leaks} file(s) contain more than 30 consecutive transcript words` : `check-public: ${files} files scanned, no run of more than 30 transcript words found`);
process.exit(leaks ? 1 : 0);
