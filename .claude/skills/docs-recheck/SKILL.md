---
name: docs-recheck
description: Re-check every documentation claim of this repository against Microsoft's current docs. Use when the user asks to "re-check the docs", "verify the gap analysis", "has Microsoft filled the docs since", "update the documented features", "is X really not documented", or after Microsoft updates the what's new pages for the wave. Refreshes the baseline, has agents compare all features against the full what's new text and the wider Microsoft Learn docs, checks the reverse claims against the transcripts, records the reviewed results in data/release-plan/overrides.json and rebuilds everything with the new check date.
---

# Docs re-check

This repository claims, per feature, whether Microsoft documented it. Those claims age: Microsoft
keeps filling learn.microsoft.com after the launch event, and the pipeline's matcher only sees the
first 220 characters of each what's new item. This skill re-checks all of it and stamps the date.

Decision log: `docs/DECISIONS.md` D16 and D17 (the first run, 2026-10-02).

## What "documented" means here

- **What's new baseline**: `data/release-plan/<wave>.json`, fetched by step 04 from the feature
  details page, the update overview table and the AI at Work roadmap. A feature "matches" when a
  what's new item describes the same capability (high) or explicitly describes it as part of a
  bigger item (medium). Sub-features of a documented umbrella item (Copilot chat answers, test
  handlers, EDI pieces, report themes) are medium matches by design: the docs are coarser than a
  demo. Do not downgrade them because the item does not spell out the sub-feature.
- **Product documentation**: a how-to, dev-itpro or admin article on learn.microsoft.com that
  describes the capability without a what's new item. Recorded in `learn_docs` with
  `documented: yes` (describes this capability) or `partial` (broader feature or in passing).
  Release plan pages (`/dynamics365/release-plan/`) document earlier waves: never `yes`.
- **Check date**: `fetched_at` of the baseline. Every "not documented" on the site carries it.

## Steps

1. **Refresh the baseline and diff it.**
   ```bash
   cp data/release-plan/<wave>.json /tmp/baseline-before.json
   npm run step:04 -- --fetch
   ```
   Compare items by title, status and text with the copy. Identical items keep the matching
   cache valid; new or changed items mean the LLM match runs again for the whole wave (opus,
   budget in step 04). Note what changed; it goes in the decision log.
2. **Build the agent inputs.** `npx tsx scripts/docs-recheck.ts batches --out tmp/recheck`
   writes one JSON per area batch (max 40 features, full what's new text of the area, all doc
   titles) plus `transcript-check.json` (documented-but-not-shown items, stated status conflicts).
3. **Run the agents in parallel**, one per batch file, with
   [prompt-template.md](prompt-template.md) (fill in the input and output paths; sonnet is
   enough) and one transcript-check agent with the second template. The agents read only, and
   write `tmp/recheck/out/<batch>.json`. They need the Microsoft Learn MCP tools
   (`mcp__microsoft-learn-mcp__microsoft_docs_search`, `microsoft_docs_fetch`); tell them to load
   those with ToolSearch if missing.
4. **Aggregate and review.**
   ```bash
   npx tsx scripts/docs-recheck.ts aggregate --in tmp/recheck/out            # counts, unknown slugs or doc ids
   npx tsx scripts/docs-recheck.ts aggregate --in tmp/recheck/out --mode should
   npx tsx scripts/docs-recheck.ts aggregate --in tmp/recheck/out --mode doubt
   npx tsx scripts/docs-recheck.ts aggregate --in tmp/recheck/out --mode learn
   npx tsx scripts/docs-recheck.ts aggregate --in tmp/recheck/out --mode transcript
   ```
   Review rules:
   - `should_match`: accept when the evidence snippet names the capability (a field, an action, a
     page, a behaviour), reject when it only names the area or demo data. When the evidence is
     thin, grep the full section in the live page (the baseline keeps up to 6,000 characters).
   - `doubtful`: keep umbrella matches (see above). Act only when the matched item is a different
     feature (then override to the right id or `null`) or never mentions the capability at all
     (then `confidence: low` with a note).
   - `learn yes/partial`: accept Business Central Learn pages; the script drops release plan and
     non-BC URLs. Spot-check the weakest evidence lines.
   - transcript: a documented item found in a video becomes a `doc_mentions` entry; a stated
     status that the words do not support gets a note in the decision log (the status itself comes
     from step 03 and is not overridden here).
5. **Propose and apply.**
   ```bash
   npx tsx scripts/docs-recheck.ts propose --in tmp/recheck/out --out tmp/recheck/proposed.json --accept slug1,slug2
   # edit tmp/recheck/proposed.json by hand where the review above says so
   npx tsx scripts/docs-recheck.ts apply --from tmp/recheck/proposed.json
   ```
   `--accept` limits the should_match overrides to the slugs you accepted; without it all are
   proposed. `apply` merges by feature slug, so re-running is safe. Downgrades and nulls are
   written by hand into `overrides.json` (`doc_id` + `confidence`, or `doc_id: null`).
6. **Rebuild.** `npm run pipeline:deterministic && npm run site:build`. The gap commentary is a
   cached LLM call keyed on the lists; a changed list means one new call through `claude -p`
   (check the model it reports: the page labels it). Commit the new `pipeline/.cache` entries.
7. **Update the numbers and the log.** README "By the numbers" (documented, shown but not
   documented, in product docs, status conflicts, stated), a new D-entry in `docs/DECISIONS.md`
   with what changed and why, and the check date in README if the wording mentions it.
8. **Verify.** `npm run typecheck`, `npm run check:quotes`, open
   `site/dist/what-they-didnt-say/index.html` and one feature page with a Learn article.

## Data model touched

- `data/release-plan/overrides.json`: `overrides[]` (feature, doc_id, confidence, note),
  `learn_docs[]` (feature, url, title, documented, checked_at, note), `doc_mentions[]` (doc_id,
  video_id, t, quote, note), `ignore_doc_items[]`.
- Step 04 copies `learn_docs` to `release_plan.learn` per feature; step 05 adds `learn` to
  `shown_not_documented`, `mentions` to `documented_not_shown`, and the counts
  `shown_not_documented_in_product_docs` and `documented_not_shown_mentioned`; step 06 renders
  the split gem list and the per-feature "Product documentation" line; the site shows the
  Learn link in the feature header and the check date everywhere a feature is "not documented".

## Known weak spots

- The matcher sees 220 characters per doc item. Raising that re-runs the whole match and churns
  results; the re-check plus overrides is the cheaper correction.
- Agents judge "describes the capability" differently; the review step exists for that reason.
- Many Learn hits for subcontracting and Expense Agent predate the wave (the Subcontracting app
  shipped in 2026 release wave 1). The note on each `learn_docs` entry says so when known.
