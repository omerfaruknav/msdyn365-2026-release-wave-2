/**
 * Acceptance check 2: pick N random quotes from data/features/*.md and confirm each text is
 * found in the cleaned transcript within 20 seconds of its timestamp link.
 *   tsx scripts/check-quotes.ts [--n 10] [--seed 42]
 */
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { quoteNearT } from "../pipeline/lib/quotes.js";

const args = process.argv.slice(2);
const opt = (k: string, d: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const n = Number(opt("n", "10"));
let seed = Number(opt("seed", String(Date.now() % 100000)));
const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
const dir = resolve("data/features");
const quotes: { file: string; id: string; t: number; text: string }[] = [];
for (const f of readdirSync(dir).filter((x) => x.endsWith(".md"))) {
  const md = readFileSync(resolve(dir, f), "utf8");
  const sec = md.split("\n## Quotes\n")[1]?.split("\n## ")[0] ?? "";
  for (const m of sec.matchAll(/^- \[[^\]]+\]\(https:\/\/www\.youtube\.com\/watch\?v=([^&]+)&t=(\d+)s\) "([^"]+)"/gm)) quotes.push({ file: f, id: m[1], t: +m[2], text: m[3] });
}
console.log(`check-quotes: ${quotes.length} quotes in ${dir}, sampling ${n} (seed ${opt("seed", "time")})`);
const sample = [...quotes].sort(() => rnd() - 0.5).slice(0, n);
let hits = 0;
for (const q of sample) {
  const segs = JSON.parse(readFileSync(resolve("data/transcripts/full", `${q.id}.json`), "utf8")).segments;
  const ok = quoteNearT(segs, q.text, q.t, 20);
  if (ok) hits++;
  console.log(`${ok ? "HIT " : "MISS"} ${q.id}@${q.t}s ${q.file}: "${q.text.slice(0, 70)}${q.text.length > 70 ? "…" : ""}"`);
}
console.log(`check-quotes: ${hits}/${sample.length} found within 20 seconds of the linked timestamp`);
process.exit(hits === sample.length ? 0 : 1);
