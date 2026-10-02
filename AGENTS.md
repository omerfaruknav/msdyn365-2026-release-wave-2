# AGENTS.md

Instructions for an LLM agent (or a human in a hurry) that has to answer questions from this
repository. Read this file first; it tells you where things are and how to cite them.

## What this is, and what it is not

This repository indexes the 38 videos of the "Business Central Launch Event - 2026 release
wave 2" that Microsoft published on 2026-10-01 (7 hours 9 minutes). Every page is derived
from the YouTube auto-captions and links back to the video at the exact second.

It is **not** official. The captions are machine generated, so expect transcription errors;
presenter names, product names and numbers may be wrong (the captions write "co-pilot",
"EL query", "shop a fight"). Summaries and feature boundaries were produced by a language
model reading those captions. Status follows the launch event rule: a feature is generally
available unless the presenters said otherwise; `status_source` tells you whether that was
stated (with an evidence quote) or implied. When in doubt, the video is the source, this
repository is the index.

## How to answer a question (the recipe)

1. **Start structured.** Load `data/index/features.json`. It holds every feature with
   `slug`, `name`, `area`, `status`, `status_evidence` (video id, second, quote),
   `summary`, `videos` (id, title, t_start, t_end, demo range), `quotes` (video id, t,
   text), `tags`, `dev_relevance`, `airtime_seconds` and `release_plan` (the match with
   Microsoft's documentation, with a confidence). Filter on `name`, `tags`, `keywords`,
   `area`. For most questions this one file is enough.
2. **Need prose?** Read `data/features/<slug>.md` (same data, readable, with the quotes
   and links) or `data/areas/<area-slug>.md` for an overview of an area. Reports live in
   `data/reports/`: four digests, one per audience (`dev-digest.md` for AL developers,
   `consultant-digest.md`, `admin-digest.md`, `decision-maker-digest.md`; the selection
   rules are in `config/audiences.json` and repeated at the bottom of each digest),
   `what-they-didnt-say.md` (docs versus videos), `buzzword-bingo.md`.
3. **Need the context of one video?** Read `data/videos/<video-id>.md`: summary,
   chapters, features, quotes, disclaimers. Ids are in `data/videos.json`.
4. **Need exact wording?** Only then open `data/transcripts/full/<video-id>.md` (paragraphs
   of about 30 seconds, each prefixed with a linked `[mm:ss]`) or `<video-id>.json`
   (segments `{ t, end, text }` of 10 to 20 seconds). These exist only in the private
   build of the repository; the public build keeps summaries and short quotes.
5. **Numbers?** `data/index/airtime.json` (seconds per area, feature, status, audience),
   `data/index/wordcount.json` (buzzwords), `data/index/timelines.json` (per video
   chapters, demos, disclaimer moments), `data/index/gap-analysis.json` (documented but
   not shown, shown but not documented, status conflicts).
6. **The documentation baseline** is `data/release-plan/2026w2.json`: Microsoft's "feature
   details" page for the wave plus the update overview table and the AI at Work roadmap
   entries. Microsoft no longer publishes per-feature release plans; call this
   "documented features", not "release plan", when you talk to people.

Three file reads answer most questions: `features.json`, one feature page, one video page.

## How to cite

Always cite the video title and a timestamp link, like this:

> "So whatever you can express in an AL query is now available to agents." - What's new:
> MCP Server, [5:25](https://www.youtube.com/watch?v=qs1cg-GoDeQ&t=325s)

Deep links are `https://www.youtube.com/watch?v=<id>&t=<seconds>s`. Take the seconds from
the data (`t`, `t_start`, `status_evidence.t`), never from memory. Quotes in the data
were validated against the transcript within 20 seconds of their timestamp; quotes longer
than 30 words were cut to 30 (`truncated: true`).

## File naming and slug rules

- Video files are named by YouTube id: `data/videos/D_Lur52IrIg.md`,
  `data/transcripts/full/D_Lur52IrIg.{md,json}`.
- Feature files are named by slug: lowercase, hyphens, 2 to 6 words, stable across
  rebuilds unless the merge step changes (`data/features/al-language-server-lsp.md`).
- Area slugs are fixed for the wave: `finance`, `supply-chain`, `e-documents`,
  `sustainability`, `expense-agent`, `copilot-and-agents`, `reporting-and-analytics`,
  `developer-tools`, `admin-and-platform`, `integration`.
- Status values: `preview`, `ga`, `announced`. `status_source` is `stated` (a presenter said
  it, `status_evidence` has the quote) or `implied` (nothing was said: GA by launch event
  convention, or preview when the video title says preview). The raw per-video values in
  `status_by_video` still use `unclear` for "nothing said in that video".
- Developer relevance: `high` (an AL developer must act or will use it), `medium`
  (changes what they can build or test), `low`.
- Docs match confidence: `high`, `medium`, `low`, `none`. Treat `low` as "not matched".
- The wave id is `2026w2` and appears in every frontmatter as `wave:`.

## Frontmatter schemas (grep-able)

Video page (`data/videos/<id>.md`):

```yaml
id: D_Lur52IrIg
title: "What's new in AL and Tools"
wave: 2026w2
url: https://www.youtube.com/watch?v=D_Lur52IrIg
duration_seconds: 2104
area: developer-tools
audience: [developer, partner]
presenters: ["Peter?", "Stefan?"]        # as heard; a trailing ? means low or medium confidence
features: [slug, slug]
status_mentions: { ga: 1, unclear: 20 }
chapters: 14
quotes: 24
docs_matched: 15
transcript: data/transcripts/full/D_Lur52IrIg.md   # null in the public build
```

Feature page (`data/features/<slug>.md`):

```yaml
slug: al-language-server-lsp
name: "AL language server (LSP)"
wave: 2026w2
area: developer-tools
status: ga                               # preview | ga | announced
status_source: implied                   # stated | implied (GA unless stated otherwise)
status_conflict: false
videos: [{ id: D_Lur52IrIg, t_start: 74.2, t_end: 409 }]
airtime_seconds: 335
demoed: true
release_plan: { matched: true, id: "...", title: "...", confidence: high, url: "...", doc_status: ga }
tags: [al, lsp, agents]
dev_relevance: high
quotes: 3
```

Area page (`data/areas/<slug>.md`): `slug`, `name`, `wave`, `feature_count`,
`video_count`, `feature_seconds`, `video_seconds`, `by_status`.

Transcript (`data/transcripts/full/<id>.md`): `id`, `title`, `wave`, `url`,
`duration_seconds`, `kind: captions`, `language: en`, `word_count`, `segment_count`.

## Known limitations

- Missing transcripts: none for 2026w2 at the time of writing. `data/videos.json` has
  `has_transcript` per video; a video without one has no page and shows as a ghost on the
  site.
- Presenters rarely say "preview" or "GA", so most features are `ga` with
  `status_source: implied`. The rendered pages and the site just say "GA" for both and
  carry the rule as a footnote; use `status_source` when the distinction matters. The docs
  column (`release_plan.doc_status`) tells you what Microsoft wrote; `gap-analysis.json`
  lists the conflicts, split by whether the video status was stated or implied.
- The documentation baseline is a snapshot. `release_plan.fetched_at` in `features.json` (and
  `docs_checked_at` in the gap report frontmatter) is the date the Microsoft pages were checked.
  "Not documented" means "not on the what's new pages for the wave on that date". Microsoft keeps
  filling the documentation after the launch event, and a feature can be described in the product
  documentation (a how-to article) without having its own what's new item. For those,
  `release_plan.learn` (from `learn_docs` in `data/release-plan/overrides.json`) holds the article
  found by hand: `url`, `title`, `documented` (`yes` = the article describes this capability,
  `partial` = it covers the broader feature or mentions it in passing), `checked_at`. The gap
  report lists "no what's new item, but the product docs describe it" separately from "not found
  in the docs we checked". Say the date when you report a gap, and prefer a live check of
  learn.microsoft.com when the answer matters.
- The docs matching is done by a language model from keyword candidates. `low` and `none`
  are reviewed by hand over time in `data/release-plan/overrides.json`
  (`{ "overrides": [{ "feature": "<slug>", "doc_id": "<id or null>", "confidence": "high", "note": "" }], "ignore_doc_items": [] }`).
- Airtime is the sum of per-feature discussion ranges; ranges of different features can
  overlap inside a video, so feature minutes exceed footage minutes.
- Chapters and feature boundaries are approximations by a model, usually within 10 to 20
  seconds.
- "New words this wave" needs the 2025w2 transcripts; if `wordcount.json` says
  `unavailable`, they were not fetched.

## Example questions and the file that answers each

| Question | Look in |
|---|---|
| What changed for page scripting? | `data/index/features.json` filter `tags` contains `page-scripting`, then `data/features/page-scripting-ga.md` and `data/videos/Aqi8Uq2bQyI.md` |
| Is the MCP server in preview or GA? | `data/features/mcp-data-tools.md` (status, status_source, evidence) and its `release_plan.doc_status`; `data/index/gap-analysis.json` `status_conflicts` and `silent_on_status` |
| What does the Fabric integration need on the tenant? | `data/videos/kOCiyVql0go.md` (prerequisites in the features list) and the Fabric feature pages under `data/features/` with tag `fabric` |
| Which videos are about the Expense Agent? | `data/areas/expense-agent.md` |
| What was shown but is not in the docs? | `data/reports/what-they-didnt-say.md` or `gap-analysis.json` `shown_not_documented` |
| How much of the event was about agents? | `data/index/airtime.json` `copilot_and_agents` |
| Who presented the AL and Tools session? | `data/videos/D_Lur52IrIg.md` frontmatter `presenters` (as heard, may be misspelled) |
| What exactly did they say about big integer fields? | `data/features/integer-to-biginteger-field-change.md` quotes, then `data/transcripts/full/D_Lur52IrIg.md` around 10:06 |

## Rebuilding

`npm run build` regenerates everything from the committed inputs and the committed LLM cache
without calling a model. See README.md for the pipeline and `docs/brief/` for the original
brief. Do not edit files under `data/` by hand except `data/release-plan/overrides.json`.
