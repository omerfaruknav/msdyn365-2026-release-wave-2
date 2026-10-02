/**
 * Quote validation against the cleaned transcript segments.
 * A quote is accepted when its normalized text is found in the segments within
 * `windowSec` of its timestamp. If it is found elsewhere, the timestamp is snapped to
 * that segment. If only a fuzzy match exists, the quote text is replaced by the verbatim
 * transcript span. Otherwise the quote is dropped. Quotes are capped at `maxWords`.
 */
import { normalizeSpeech } from "./text.js";

export interface Seg { t: number; end: number; text: string }
export interface QuoteCheck {
  ok: boolean;
  t: number;
  text: string;
  reason: "exact" | "snapped" | "fuzzy" | "fuzzy-snapped" | "not-found" | "too-short";
  original_t?: number;
  truncated?: boolean;
}

interface Tok { w: string; t: number }

function tokenize(segs: Seg[]): Tok[] {
  const toks: Tok[] = [];
  for (const s of segs) for (const w of normalizeSpeech(s.text).split(" ")) if (w) toks.push({ w, t: s.t });
  return toks;
}

/** Find all start indexes where `q` occurs in `toks` as a contiguous word sequence. */
function findExact(toks: Tok[], q: string[]): number[] {
  const hits: number[] = [];
  if (!q.length) return hits;
  outer: for (let i = 0; i + q.length <= toks.length; i++) {
    for (let j = 0; j < q.length; j++) if (toks[i + j].w !== q[j]) continue outer;
    hits.push(i);
  }
  return hits;
}

/** Longest common contiguous word run between the quote and a token window. */
function longestCommonRun(toks: Tok[], from: number, to: number, q: string[]): { start: number; len: number } {
  let best = { start: -1, len: 0 };
  const n = to - from;
  const prev = new Array(q.length + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const cur = new Array(q.length + 1).fill(0);
    for (let j = 1; j <= q.length; j++) {
      if (toks[from + i - 1].w === q[j - 1]) {
        cur[j] = prev[j - 1] + 1;
        if (cur[j] > best.len) best = { start: from + i - cur[j], len: cur[j] };
      }
    }
    prev.splice(0, prev.length, ...cur);
  }
  return best;
}

export function checkQuote(segs: Seg[], text: string, t: number, opts: { windowSec?: number; maxWords?: number; minWords?: number } = {}): QuoteCheck {
  const windowSec = opts.windowSec ?? 20, maxWords = opts.maxWords ?? 30, minWords = opts.minWords ?? 4;
  const toks = tokenize(segs);
  let q = normalizeSpeech(text).split(" ").filter(Boolean);
  let truncated = false;
  if (q.length > maxWords) { q = q.slice(0, maxWords); truncated = true; }
  if (q.length < minWords) return { ok: false, t, text, reason: "too-short" };
  const originalWords = text.trim().split(/\s+/);
  const presented = truncated ? originalWords.slice(0, maxWords).join(" ") : text.trim();

  const hits = findExact(toks, q);
  if (hits.length) {
    const near = hits.find((i) => Math.abs(toks[i].t - t) <= windowSec);
    if (near !== undefined) return { ok: true, t: toks[near].t, text: presented, reason: "exact", truncated };
    const closest = hits.reduce((a, b) => (Math.abs(toks[a].t - t) < Math.abs(toks[b].t - t) ? a : b));
    return { ok: true, t: toks[closest].t, text: presented, reason: "snapped", original_t: t, truncated };
  }
  // fuzzy: longest common run near t first, then anywhere
  const tryWindow = (from: number, to: number, reason: "fuzzy" | "fuzzy-snapped"): QuoteCheck | null => {
    const run = longestCommonRun(toks, from, to, q);
    if (run.len >= Math.max(minWords + 2, Math.ceil(q.length * 0.6))) {
      const span = toks.slice(run.start, run.start + run.len);
      return { ok: true, t: span[0].t, text: span.map((x) => x.w).join(" "), reason, original_t: t, truncated: truncated || run.len < q.length };
    }
    return null;
  };
  const lo = toks.findIndex((x) => x.t >= t - windowSec - 10);
  const hi = toks.findIndex((x) => x.t > t + windowSec + 10);
  if (lo >= 0) {
    const r = tryWindow(lo, hi < 0 ? toks.length : hi, "fuzzy");
    if (r) return r;
  }
  const r = tryWindow(0, toks.length, "fuzzy-snapped");
  if (r) return r;
  return { ok: false, t, text, reason: "not-found" };
}

/** Does a text occur (normalized) in the transcript within windowSec of t? Used for acceptance checks. */
export function quoteNearT(segs: Seg[], text: string, t: number, windowSec = 20): boolean {
  const toks = tokenize(segs);
  const q = normalizeSpeech(text).split(" ").filter(Boolean);
  return findExact(toks, q).some((i) => Math.abs(toks[i].t - t) <= windowSec);
}
