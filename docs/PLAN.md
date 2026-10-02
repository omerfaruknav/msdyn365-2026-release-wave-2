# Plan

Written before the first line of pipeline code, as the brief asks. The brief itself is in
`docs/brief/PROMPT-coding-agent.md`; this file is my reading of it plus the choices I made
up front. Decisions taken while building are in `docs/DECISIONS.md`.

## Interpretation in one paragraph

Take the 38 auto-caption VTT files of the BCLE 2026 release wave 2, clean them into
timestamped segments, have Claude (through the `claude` CLI on waldo's subscription, no
API key) extract summaries, chapters, features, quotes and disclaimers per video, merge
the features across videos into one graph, match that graph against Microsoft's
"feature details" documentation page (there are no per-feature release plans any more),
compute airtime, buzzwords, timelines and the gap analysis, render everything as
frontmatter markdown that an LLM can grep, and build a static site on GitHub Pages with
a zoomable map, per-video timelines, a developer digest, the gap lists, bingo and a
client-side search. Everything is traceable to a video id and a second.

## Language and tooling

- **One language: TypeScript**, run with `tsx` (no compile step), Node 20. The site
  generator is TypeScript too, producing plain HTML, CSS and a few small JS files.
- Runtime libraries kept to a minimum: `d3` (vendored into the site for the map and the
  charts), `minisearch` (client-side search), `ajv` (schema validation of LLM output),
  `yaml` (frontmatter), `marked` (reports to HTML), `@resvg/resvg-js` (og:image PNGs,
  with an SVG fallback when it cannot load).
- No framework, no SSR, no server. Pages are prerendered; interactivity is progressive.

## Pipeline

| Step | Folder | Deterministic | What it does |
|---|---|---|---|
| 01 | `pipeline/01-clean-vtt` | yes | VTT to `data/transcripts/full/<id>.json` (segments ~10-20s) and `<id>.md` (paragraphs ~30s, each `[mm:ss]` linked). Matches files to `data/videos.json` by normalized title, recomputes `has_transcript`. |
| 02 | `pipeline/02-extract` | LLM, cached | Per video: summary, chapters, features (with time ranges), quotes (validated against the segments), disclaimers, presenters, audience, area. Videos over 20 minutes are chunked into overlapping windows and consolidated. |
| 03 | `pipeline/03-merge-features` | LLM assisted, cached | Deterministic pre-clustering by normalized name, then one Claude call that confirms merges, picks canonical names, slugs, areas, tags and developer relevance. Output `data/index/features.json`. |
| 04 | `pipeline/04-match-release-plan` | fetch + LLM, cached | Fetch the docs baseline into `data/release-plan/2026w2.json`, score candidates, let Claude confirm, apply `data/release-plan/overrides.json`. |
| 05 | `pipeline/05-analytics` | yes (+1 cached LLM call for extra buzzwords) | `airtime.json`, `wordcount.json`, `timelines.json`, `gap-analysis.json`. |
| 06 | `pipeline/06-render-markdown` | yes (+cached LLM narrative for the two prose reports) | `data/videos/`, `data/features/`, `data/areas/`, `data/reports/`, `llms.txt`, `llms-full.txt`. |
| 07 | `pipeline/07-build-search-index` | yes | `data/index/search.json` passages (~40 words). |

`npm run build` runs 01 to 07 with `LLM_CACHE_ONLY=1` (a cache miss is an error, not a
network call) and then the site build. `npm run wave -- <wave>` is the same with LLM
calls allowed. The `claude -p` call is wrapped in `pipeline/lib/llm.ts` with two
backends, `cli` (default) and `api` (only when `ANTHROPIC_API_KEY` is set).

Models: `sonnet` for the per-video extraction (constrained task, transcript in context),
`opus` for the cross-video merge and the docs matching (judgement calls). Both can be
overridden with `LLM_MODEL`. Every cache entry records backend and model.

## Data layout

Exactly the layout in the brief. The wave id is in `config/waves.json` (`default`) and in
every frontmatter. A next wave is a new repository created with
`scripts/setup-github.sh` (that is what the repo name and the runbook imply); the code
never hardcodes `2026w2`. Raw VTT files are committed under `data/transcripts/raw/` so a
clean clone can rebuild from step 01; `scripts/strip-for-public.sh` removes them.

## Pilot first

Steps 01 to 07 and the site are built and deployed on three videos first: "What's new in
AL and Tools" (`D_Lur52IrIg`), "What's new: MCP Server" (`qs1cg-GoDeQ`) and "What's new in
Page Scripting" (`Aqi8Uq2bQyI`). Then all 38.

## Acceptance criteria

Copied from the brief so they are in the repo:

1. `npm run build` from a clean clone with the committed cache produces `site/dist`
   without network access to Anthropic.
2. 10 random quotes from `data/features/*.md` are found in the cleaned transcript within
   20 seconds of their timestamp, 10/10.
3. Three questions answered from repo files only, trail in `docs/agent-smoke-test.md`.
4. Lighthouse home page: performance and accessibility 90+ on desktop.
5. Site renders at 390px without horizontal scroll.
6. `scripts/strip-for-public.sh` on a copy leaves a site that builds and no file with
   more than 30 consecutive transcript words.
7. Pages URL live, README has the link and three screenshots.

## Open questions (answered by myself, see DECISIONS.md)

- Private Pages depends on the GitHub plan, which the token cannot read. Try private,
  fall back to public with the strip step.
- The AI at Work roadmap redirects to a JavaScript application; probably not scrapeable.
- 2025w2 transcripts for "new words this wave" are optional; attempted only if yt-dlp
  works from this machine within a few minutes, otherwise that section says so.
- The per-feature airtime comes from the discussion range the model returns per feature
  (start to end of the part of the video about it), not from the demo range alone.
