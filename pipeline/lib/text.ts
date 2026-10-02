import { createHash } from "node:crypto";

/** Normalize a title for matching file names against videos.json titles. */
export function normalizeTitle(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/：/g, ":")
    .replace(/\(\s*preview\s*\)/g, "(preview)")
    .replace(/\s*\(20\d\d release wave \d\)\s*$/i, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

/** Normalize spoken text for fuzzy containment checks (quotes vs segments). */
export function normalizeSpeech(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function words(s: string): string[] {
  return normalizeSpeech(s).split(" ").filter(Boolean);
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’']/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 80);
}

export function sha256(s: string): string {
  return createHash("sha256").update(s).digest("hex");
}

export function fmtTime(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  const mm = h ? String(m).padStart(2, "0") : String(m);
  return (h ? `${h}:` : "") + `${mm}:${String(sec).padStart(2, "0")}`;
}

export function fmtMinutes(seconds: number): string {
  const m = Math.round(seconds / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)}h${String(m % 60).padStart(2, "0")}`;
}

export function parseLength(len: string): number {
  const parts = len.split(":").map(Number);
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}

export function ytUrl(id: string, t?: number): string {
  return t !== undefined ? `https://www.youtube.com/watch?v=${id}&t=${Math.max(0, Math.floor(t))}s` : `https://www.youtube.com/watch?v=${id}`;
}

export function ytThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

/** Token Jaccard similarity between two strings. */
export function jaccard(a: string, b: string): number {
  const A = new Set(words(a)), B = new Set(words(b));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / (A.size + B.size - inter);
}

const STOP = new Set("the a an and or of to in for with on at by from is are be this that it as new what's whats business central bc now can you your we our".split(" "));
export function keywords(s: string): string[] {
  return words(s).filter((w) => w.length > 2 && !STOP.has(w));
}
