# Agent prompts for the docs re-check

Replace `<IN>` and `<OUT>` with the batch input file and the output path under `tmp/recheck/out/`.
Run one agent per batch file (sonnet is enough), all in parallel, in the background.

## Area batch agent

```
You re-check documentation claims for features extracted from the Business Central <wave name> launch event videos. Read-only on the repository: do NOT modify any file under <repo root>. Do not ask questions; decide and report.

INPUT: <IN>
OUTPUT (write it as a file): <OUT>

The input has: `features` (each with slug, name, summary, quotes, current_match = the current docs match with confidence high|medium|low|none and any Learn article already recorded), `doc_items_same_area_full_text` (the FULL text of Microsoft's "what's new" items for this area; the matching step only ever saw the first 220 characters, which is why it misses things), and `all_doc_items_titles` (titles of all what's new items, all areas).

For EVERY feature do two checks.

A. What's new check (use only the given texts):
- If current_match.confidence is high or medium: verdict "confirmed" when the matched doc item (look it up by doc_id in the full texts; if it is from another area you only have its title, then say "confirmed_title_only") really describes this specific capability; verdict "doubtful" with a reason when it does not (same area is not enough), and suggest a better doc_id or null.
- If current_match.confidence is low or none: verdict "should_match" with doc_id, confidence (high = clearly the same feature; medium = the doc text explicitly describes this capability, even as a part of a bigger item) and a verbatim evidence snippet of at most 25 words from the doc text; otherwise verdict "no_item".

B. Microsoft Learn check, only for features whose A verdict is "no_item", "should_match" at medium, or "doubtful": search the wider Microsoft Learn documentation with the tool mcp__microsoft-learn-mcp__microsoft_docs_search (if it is not loaded, load it first with ToolSearch query "select:mcp__microsoft-learn-mcp__microsoft_docs_search,mcp__microsoft-learn-mcp__microsoft_docs_fetch"). Query with the feature's distinctive terms plus "Business Central"; at most 2 searches per feature, plus at most one microsoft_docs_fetch when you need to confirm. Verdict `documented`: "yes" when an article describes this specific capability (a how-to, a dev-itpro article, an admin article), "partial" when an article only mentions it in passing or describes the broader feature, "no" when nothing fits. Record url, title, an evidence sentence of at most 25 words, and a note when the article is clearly about an earlier release. Learn pages under /dynamics365/release-plan/ are release plans of earlier waves: record them as "partial" with that note, never "yes".

Write ONE JSON file:
{"batch": "<name>", "checked_at": "<ISO date>", "results": [{"slug": "...", "whatsnew": {"verdict": "confirmed|confirmed_title_only|doubtful|should_match|no_item", "doc_id": "... or null", "confidence": "high|medium|null", "evidence": "...", "reason": "..."}, "learn": {"documented": "yes|partial|no|not_checked", "url": "...", "title": "...", "evidence": "...", "note": "..."}}]}
One entry per feature, all of them. Plain hyphens only, no em-dashes. Be strict: "yes" and "should_match" need evidence that names the capability, not the product area.

Final message: at most 5 lines: counts of should_match, doubtful, learn yes / partial / no, and the output path.
```

## Transcript check agent

```
You verify two kinds of claims made by an index of the Business Central <wave name> launch event videos, against the video transcripts. Read-only on the repository <repo root>: do NOT modify any file there. Do not ask questions; decide and report.

INPUT: <IN>/transcript-check.json
OUTPUT (write it as a file): <OUT>/transcript-check.json

Transcripts: <repo root>/data/transcripts/full/<videoId>.json (segments {t, end, text}, seconds) and <videoId>.md (paragraphs prefixed with [mm:ss]). Only the video ids listed in the input's `videos` belong to this wave; ignore other transcript files. Use grep -i (auto-captions: expect misspellings such as "co-pilot", "EL" for AL, "shop a fight" for Shopify; try 2 to 4 keyword variants per item).

Part 1, `documented_not_shown`: Microsoft what's new items that the index claims were never shown or discussed in any video. For each, search the transcripts for the item's distinctive terms. Verdict: "not_mentioned", "mentioned_in_passing" (a sentence or two; give video_id, t in seconds and a quote of at most 25 words), or "discussed" (60 seconds or more about this capability; give video_id, t_start, t_end and a quote). Be strict: a hit must be about the capability, not the product area.

Part 2, `stated_status_conflicts`: features where a presenter is claimed to have stated a status (ga or preview) that differs from the docs. For each, open the transcript of evidence.video_id around evidence.t (60 seconds before to 90 seconds after) and judge whether the words really state that status for that feature. Verdict: "supports", "does_not_support", or "ambiguous". Give the exact transcript words (at most 30 words) and t.

Write ONE JSON file: {"checked_at": "<ISO date>", "documented_not_shown": [{"id": "...", "verdict": "...", "video_id": "... or null", "t": <seconds or null>, "t_end": <or null>, "quote": "...", "search_terms": ["..."], "note": "..."}], "stated_status_conflicts": [{"slug": "...", "verdict": "...", "t": <seconds>, "words": "...", "reason": "..."}]}. One entry per input item. Plain hyphens only, no em-dashes.

Final message: at most 5 lines: counts per verdict for both parts, and the output path.
```
