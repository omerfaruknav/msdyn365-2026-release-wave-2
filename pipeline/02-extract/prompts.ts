import { loadWaves } from "../lib/config.js";

export const PROMPT_VERSION = "v1";

const cfg = loadWaves();
const areaList = cfg.areas.map((a) => `${a.slug} (${a.name})`).join(", ");

export const SYSTEM = `You are an extraction engine for transcripts of the Microsoft Dynamics 365 Business Central launch event videos.
You read machine-generated captions that carry a timestamp (seconds) per segment and you return structured JSON.

Hard rules:
- Use only what the transcript says. Do not add product knowledge, context or guesses from outside the transcript.
- Every timestamp you return must be a segment start time "t" that exists in the input, or lie inside a segment's range. Never invent timestamps.
- Quotes must be verbatim substrings of a segment text (same words, same order; you may trim the start and end). 8 to 25 words each. No paraphrasing, no fixing grammar, no stitching segments.
- Status is only what is said or shown in this video: "preview" if they say preview, public preview, beta or similar; "ga" if they say generally available, GA, out of preview, released; "announced" if it is mentioned as coming later, not in this release, roadmap; "unclear" if nothing is said. Always give the quote that proves the status, or null.
- Names of presenters are "as heard"; mark confidence low when the captions could have mangled them.
- No em-dashes anywhere in your text. Use a plain hyphen.
- Write summaries in plain language, no hype words copied from the video (no "exciting", "powerful", "seamless").`;

export function windowPrompt(opts: {
  title: string; videoId: string; wave: string; duration: number; windowIndex: number; windowCount: number; segments: { t: number; text: string }[];
}): string {
  const { title, videoId, wave, duration, windowIndex, windowCount, segments } = opts;
  const windowNote = windowCount > 1
    ? `This is window ${windowIndex + 1} of ${windowCount} of a long video (segments ${segments[0].t}s to ${segments.at(-1)!.t}s). Only describe what is in this window; chapters and feature ranges must stay within it. The windows overlap a little, that is expected.`
    : `This is the whole video.`;
  return `Video: "${title}" (YouTube id ${videoId}, ${Math.round(duration)} seconds, wave ${wave}).
${windowNote}

Area taxonomy (pick exactly one slug per feature and one for the video): ${areaList}.
Audience values: ${cfg.audiences.join(", ")}.

Return:
- summary: 3 to 5 plain sentences about what this ${windowCount > 1 ? "window" : "video"} covers.
- area: the taxonomy slug that fits the video best.
- audience: who this video is for (one or more).
- presenters: names as heard, with confidence.
- chapters: 3 to 10 chapters that cover the ${windowCount > 1 ? "window" : "whole video"} without gaps, each with t_start, t_end (seconds) and a short title.
- features: every distinct capability, change or announcement discussed. For each: a short product-like name (as the speakers name it), a 1-2 sentence description from the transcript only, status with evidence (status_evidence_t = segment t where the evidence quote is said, status_evidence_quote verbatim), t_start/t_end of the part of the video that is about this feature, whether it is demoed and the demo range, caveats and prerequisites mentioned, 2-6 tags (lowercase, e.g. copilot, agents, al, admin, performance, api, reporting, mcp, testing, vs-code, telemetry, finance, manufacturing, warehouse, shopify, fabric, e-documents, sustainability, expense, mobile, ux), dev_relevance (does a Business Central AL developer need to care: high, medium, low) and the area slug.
- quotes: 5 to 10 memorable verbatim quotes with t (segment start) and one sentence on why it matters. Prefer sentences that state a status, a limitation, a number, a date, a design decision or a surprise.
- disclaimers: every moment where they say preview, subject to change, not in this release, coming later, future release, roadmap, no commitment, or similar, with the kind and the short verbatim text.

Transcript segments (JSON, one per line, t in seconds):
${segments.map((s) => JSON.stringify({ t: s.t, text: s.text })).join("\n")}`;
}

export function consolidatePrompt(opts: { title: string; videoId: string; duration: number; windows: any[] }): string {
  const { title, videoId, duration, windows } = opts;
  const slim = windows.map((w, i) => ({
    window: i + 1, summary: w.summary, area: w.area, audience: w.audience, presenters: w.presenters,
    chapters: w.chapters, features: w.features,
  }));
  return `Video: "${title}" (YouTube id ${videoId}, ${Math.round(duration)} seconds) was extracted in ${windows.length} overlapping windows. Consolidate the window results into one result for the whole video.

Rules:
- summary: 3 to 5 plain sentences for the whole video.
- area, audience, presenters: resolve across windows (presenters deduplicated).
- chapters: one non-overlapping list covering 0 to ${Math.round(duration)} seconds, 5 to 14 chapters, built from the window chapters (merge the ones that overlap at window boundaries, keep their timestamps).
- features: merge features that are the same thing across windows (same capability under slightly different names). Keep the earliest t_start and the latest t_end, the strongest status evidence (keep the evidence quote and its t verbatim from one window), union of caveats, prerequisites and tags. Do not drop features, do not invent new ones, keep timestamps exactly as given in the windows.

Window results (JSON):
${JSON.stringify(slim, null, 0)}`;
}
