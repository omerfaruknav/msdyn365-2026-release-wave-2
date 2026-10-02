/**
 * Step 01 - clean VTT
 *
 * Reads the raw YouTube auto-caption files in data/transcripts/raw/, matches them to
 * data/videos.json by normalized title, and writes per video:
 *   data/transcripts/full/<id>.json   segments [{ t, end, text }] of roughly 10-20 seconds
 *   data/transcripts/full/<id>.md     paragraphs of roughly 30 seconds, each [mm:ss] deep-linked
 * It also recomputes has_transcript in data/videos.json from what is on disk.
 *
 * Auto-caption quirks handled: word level <c> timing tags, each cue repeated as a rolling
 * line and as a full line, [music] markers, align/position attributes, HTML entities.
 */
import { resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { DATA, parseArgs } from "../lib/config.js";
import { listFiles, readText, writeJson, writeText, readJson } from "../lib/fsx.js";
import { normalizeTitle, fmtTime, ytUrl, parseLength } from "../lib/text.js";
import { withFrontmatter } from "../lib/frontmatter.js";

interface Word { t: number; w: string }
export interface Segment { t: number; end: number; text: string }

const TS = /(\d{2}):(\d{2}):(\d{2})\.(\d{3})/;
function parseTs(s: string): number {
  const m = s.match(TS);
  if (!m) return NaN;
  return +m[1] * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000;
}
function decodeEntities(s: string): string {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}
function stripTags(s: string): string {
  return decodeEntities(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

/** Parse a VTT file into a stream of timed words, de-duplicating YouTube's rolling repeats. */
export function vttToWords(vtt: string): { words: Word[]; markers: { t: number; text: string }[] } {
  const blocks = vtt.replace(/\r/g, "").split(/\n\n+/);
  const out: Word[] = [];
  const markers: { t: number; text: string }[] = [];
  const recent: string[] = [];
  const seen = (plain: string) => recent.includes(plain);
  const remember = (plain: string) => { recent.push(plain); if (recent.length > 4) recent.shift(); };

  for (const block of blocks) {
    const lines = block.split("\n");
    const ti = lines.findIndex((l) => l.includes("-->"));
    if (ti < 0) continue;
    const [startRaw] = lines[ti].split("-->");
    const start = parseTs(startRaw.trim());
    if (Number.isNaN(start)) continue;
    for (const raw of lines.slice(ti + 1)) {
      const line = raw.trim();
      if (!line) continue;
      const hasTags = /<\d{2}:\d{2}:\d{2}\.\d{3}>/.test(line);
      const plain = stripTags(line);
      if (!plain) continue;
      // [Music] style markers
      if (/^\[[^\]]+\]$/.test(plain)) { markers.push({ t: start, text: plain }); remember(plain); continue; }
      if (!hasTags) {
        if (seen(plain)) continue; // rolling repeat of a line we already emitted
        // untagged new line (first cue of a file or single-line cues): spread words evenly
        const ws = plain.split(" ").filter(Boolean);
        ws.forEach((w, i) => out.push({ t: start + i * 0.3, w }));
        remember(plain);
        continue;
      }
      // tagged line: "Hello<00:00:07.279><c> and</c><00:00:07.600><c> welcome</c>"
      const parts = line.split(/<(\d{2}:\d{2}:\d{2}\.\d{3})>/);
      // parts: [text0, ts1, text1, ts2, text2, ...]
      let t = start;
      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 1) { t = parseTs(parts[i]); continue; }
        const txt = stripTags(parts[i]);
        if (!txt) continue;
        for (const w of txt.split(" ").filter(Boolean)) {
          if (/^\[[^\]]+\]$/.test(w)) { markers.push({ t, text: w }); continue; }
          out.push({ t, w });
        }
      }
      remember(plain);
    }
  }
  // guard against tiny out-of-order timestamps
  for (let i = 1; i < out.length; i++) if (out[i].t < out[i - 1].t) out[i].t = out[i - 1].t;
  return { words: out, markers };
}

/** Group timed words into segments of roughly 10-20 seconds. */
export function wordsToSegments(words: Word[], durationHint?: number): Segment[] {
  const segs: Segment[] = [];
  let cur: Word[] = [];
  const flush = (nextT?: number) => {
    if (!cur.length) return;
    const t = cur[0].t;
    const last = cur[cur.length - 1].t;
    const end = Math.min(nextT ?? last + 2, last + 4);
    segs.push({ t: round1(t), end: round1(Math.max(end, t + 0.5)), text: cur.map((w) => w.w).join(" ") });
    cur = [];
  };
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const prev = cur.length ? cur[cur.length - 1] : null;
    if (prev) {
      const dur = w.t - cur[0].t;
      const gap = w.t - prev.t;
      const sentenceEnd = /[.!?]$/.test(prev.w);
      if (gap > 3 || dur >= 20 || (dur >= 10 && (sentenceEnd || gap > 1.2)) || (dur >= 14 && /[,;:]$/.test(prev.w))) flush(w.t);
    }
    cur.push(w);
  }
  flush(durationHint);
  return segs;
}
const round1 = (n: number) => Math.round(n * 10) / 10;

/** Paragraphs of ~30 seconds for the markdown rendering. */
export function segmentsToParagraphs(segs: Segment[]): { t: number; text: string }[] {
  const paras: { t: number; text: string }[] = [];
  let cur: Segment[] = [];
  for (const s of segs) {
    if (cur.length && s.t - cur[0].t >= 30) { paras.push({ t: cur[0].t, text: cur.map((x) => x.text).join(" ") }); cur = []; }
    cur.push(s);
  }
  if (cur.length) paras.push({ t: cur[0].t, text: cur.map((x) => x.text).join(" ") });
  return paras;
}

function main() {
  const { wave, waveDef, only } = parseArgs();
  const rawDir = resolve(DATA, "transcripts", "raw");
  const fullDir = resolve(DATA, "transcripts", "full");
  const videosPath = resolve(DATA, "videos.json");
  const videos = readJson<any>(videosPath);
  const files = listFiles(rawDir, ".vtt");
  const prefix = waveDef.transcript_prefix;
  const byNorm = new Map<string, string>();
  for (const f of files) {
    if (!f.startsWith(prefix)) continue;
    const title = f.slice(prefix.length).replace(/\.vtt$/, "");
    byNorm.set(normalizeTitle(title), f);
  }
  const report: any[] = [];
  let matched = 0;
  const now = new Date().toISOString();
  for (const v of videos.videos) {
    v.wave = v.wave ?? wave;
    v.url = ytUrl(v.id);
    v.duration_seconds = v.duration_seconds ?? parseLength(v.length);
    const file = byNorm.get(normalizeTitle(v.title));
    if (!file) { v.has_transcript = false; v.transcript_file = null; report.push({ id: v.id, title: v.title, status: "missing" }); continue; }
    v.has_transcript = true;
    v.transcript_file = `data/transcripts/raw/${file}`;
    byNorm.delete(normalizeTitle(v.title));
    matched++;
    if (only && !only.includes(v.id)) continue;
    const vtt = readText(resolve(rawDir, file));
    const { words, markers } = vttToWords(vtt);
    const segs = wordsToSegments(words, v.duration_seconds);
    const wordCount = words.length;
    writeJson(resolve(fullDir, `${v.id}.json`), {
      id: v.id, title: v.title, wave: v.wave, url: v.url, duration_seconds: v.duration_seconds,
      kind: "captions", language: "en", source_file: basename(file), word_count: wordCount,
      segment_count: segs.length, markers, segments: segs,
    });
    const paras = segmentsToParagraphs(segs);
    const body = paras.map((p) => `[${fmtTime(p.t)}](${ytUrl(v.id, p.t)}) ${p.text}`).join("\n\n");
    const md = withFrontmatter({
      id: v.id, title: v.title, wave: v.wave, url: v.url, duration_seconds: v.duration_seconds,
      kind: "captions", language: "en", word_count: wordCount, segment_count: segs.length,
      note: "YouTube auto-captions, cleaned by pipeline step 01. Expect transcription errors. Each paragraph links to the second it starts.",
    }, `# ${v.title}\n\n${body}`);
    writeText(resolve(fullDir, `${v.id}.md`), md);
    report.push({ id: v.id, title: v.title, status: "ok", words: wordCount, segments: segs.length, markers: markers.length, last_t: segs.at(-1)?.end });
  }
  videos.updated = now;
  videos.transcript_count = matched;
  videos.note = `has_transcript recomputed by pipeline step 01 on ${now.slice(0, 10)} from data/transcripts/raw/.`;
  writeJson(videosPath, videos);
  const unmatched = [...byNorm.values()];
  writeJson(resolve("pipeline", "out", "01-clean-vtt.json"), { wave, generated_at: now, matched, total: videos.videos.length, unmatched_files: unmatched, videos: report });
  const missing = report.filter((r) => r.status === "missing");
  console.log(`01-clean-vtt: ${matched}/${videos.videos.length} transcripts matched` + (missing.length ? `, missing: ${missing.map((m) => m.id).join(", ")}` : ""));
  if (unmatched.length) console.log(`  unmatched files: ${unmatched.join(" | ")}`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
