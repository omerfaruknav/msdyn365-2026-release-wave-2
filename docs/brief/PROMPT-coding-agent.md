# Mega-prompt: BCLE 2026 release wave 2 knowledge repo

> Paste everything below this line into the coding agent (Claude Code or similar), started in an empty folder. The agent should have `gh`, `git`, `node` (20+), `python3` and `yt-dlp` available, and the `claude` CLI itself logged in to waldo's subscription, which is what the extraction step uses (no API key anywhere).

---

## Who you are working for

You are building a side project for waldo (Eric Wauters), Microsoft MVP for Dynamics 365 Business Central, GitHub user `waldo1001`. He writes AL, builds open-source dev tooling for BC, blogs at waldo.be, and will show this project to the BC community. Tone of everything user-facing (README, site copy): informal, a bit of humor, no corporate fluff. Never use em-dashes anywhere, in code comments, docs or UI text. Use a plain hyphen.

## The one-sentence goal

Turn the transcripts of all 38 videos of the "Business Central Launch Event - 2026 release wave 2" (BCLE, published 2026-10-01 on the Microsoft Dynamics 365 Business Central YouTube channel) into a GitHub repository that (1) any LLM agent can be pointed at and navigate on its own, and (2) ships a static GitHub Pages site with a visual, zoomable overview of the wave, airtime analytics, per-video timelines, a developer digest, a "what they didn't say" diff against the official release plan, a search page, and some fun stuff nobody asked for.

Repo: `waldo1001/msdyn365-2026-release-wave-2`. You create it and you configure it; see "GitHub setup" below. Default branch `main`.

Nothing is to be hosted anywhere except GitHub (repo + Pages + Actions). No servers, no databases, no third-party SaaS. No MCP server (explicitly out of scope).

## GitHub setup (you do all of this, with `gh`, not by telling waldo to click)

Do this first, before writing code, so the first push already deploys.

1. Confirm who you are: `gh auth status` and `gh api user --jq .login` must say `waldo1001`. If not, stop and ask.
2. **Plan check.** GitHub Pages on a private repo needs a paid plan. Run `gh api user --jq .plan.name`. If it is `free`, you cannot deploy a private repo to Pages, so tell waldo and offer the two options: (a) create the repo public right away and run `scripts/strip-for-public.sh` as part of the build so no full transcripts ever get committed (full transcripts then live only locally and in the pipeline cache, which is gitignored), or (b) stay private and skip the deploy until he decides. Default to (a) unless he says otherwise; the honest data layer works either way.
3. Create the repo: from `~/SourceCode/Community/` (the folder you were started in), run `gh repo create waldo1001/msdyn365-2026-release-wave-2 --private --description "Unofficial, LLM-navigable map of the Business Central 2026 release wave 2 launch event" --clone` (or `--public`, see step 2). The local repo must end up at `/Users/waldo/SourceCode/Community/msdyn365-2026-release-wave-2`; do all further work inside it. Add topics: `business-central`, `dynamics-365`, `al`, `release-wave`, `llms-txt`, `github-pages`.
4. Push an initial commit with README, `.gitignore`, LICENSE (MIT for the code; the content notice covers Microsoft's material), the two workflow files, and a `docs/brief/` folder containing, unchanged, every file from the brief folder (`~/Dropbox/MVP/2026w2-launch-event/` unless waldo's first message says otherwise): `PROMPT-coding-agent.md` (this file), `PROMPT-claude-design.md`, `RUNBOOK.md`, `videos.json`. The repo must be self-contained: someone cloning it should find the original brief, the design brief and the operator runbook without needing waldo's Dropbox. Link `docs/brief/` from the README. `docs/PLAN.md` and `docs/DECISIONS.md` live next to it, not inside it.
5. Enable Pages with the Actions source:
   `gh api -X POST repos/waldo1001/msdyn365-2026-release-wave-2/pages -f build_type=workflow` (if it already exists, `-X PUT` with the same field). Verify with `gh api repos/.../pages --jq '.build_type, .html_url'` and record the URL; it becomes the `base` for the site build.
6. Actions permissions: `gh api -X PUT repos/.../actions/permissions -f enabled=true -f allowed_actions=all`, and `gh api -X PUT repos/.../actions/permissions/workflow -f default_workflow_permissions=write -f can_approve_pull_request_reviews=false`. The `new-wave` workflow opens PRs, so it needs the write default; the deploy workflow declares its own `permissions: { pages: write, id-token: write, contents: read }` at job level.
7. Secrets: none. The LLM steps run locally on waldo's Claude subscription via the `claude` CLI (see extraction section); no API key is stored in the repo or in GitHub. Do not create any secret.
8. Environment: the `github-pages` environment is created automatically on first deploy; do not add protection rules to it (they break `workflow_dispatch` deploys from branches).
9. Repo hygiene: `gh repo edit --enable-issues --enable-wiki=false --delete-branch-on-merge --enable-squash-merge --enable-merge-commit=false --enable-rebase-merge=false`. Set the homepage to the Pages URL with `gh repo edit --homepage <url>`.
10. Branch protection on `main`: none for now (waldo wants to push straight to main while it is private). Leave a commented block in `docs/DECISIONS.md` with the `gh api` call to add it later.
11. After the first successful deploy, `gh run list --workflow build-and-deploy.yml` must show a green run, and `curl -sI <pages-url>` must return 200. Put both in the final report.
12. Everything in this section must also be captured in `scripts/setup-github.sh` (idempotent, uses `gh`, takes the repo name as argument) so a future wave repo is one command. The README gets a "Fork this for the next wave" section pointing at it.

## Inputs you get

1. `videos.json` (next to this prompt, together with `PROMPT-claude-design.md` and `RUNBOOK.md`, all of which end up in `docs/brief/`): the authoritative list of the 38 videos with YouTube IDs, titles, lengths and whether a transcript is already downloaded. Copy it into the repo as `data/videos.json` and extend it (never lose the IDs).
2. Transcripts: `.vtt` files in `~/Dropbox/MVP/transcripts/`, named `2026-10-01 - BCLE - <title>.vtt` (ignore files in that folder that are not `BCLE`). waldo is downloading the missing ones himself, so expect up to 38; the pipeline must match files to `videos.json` by normalized title (YouTube titles vs. file names differ in punctuation: `:` becomes `：` in file names, double spaces, curly apostrophes) and flag any video without a transcript rather than crash. Note that `videos.json` says 21 had transcripts on 2026-10-02; recompute `has_transcript` from what is actually on disk and update the file. These are YouTube auto-captions (`Kind: captions`, `Language: en`) with the usual quirks: word-level `<c>` timing tags, every cue repeated once as a "rolling" line and once as a full line, `[music]` markers, `align:start position:0%` attributes, no speaker labels, no punctuation worth trusting.
3. `~/Dropbox/MVP/scripts/get-bcle-transcripts.sh`: waldo's yt-dlp download script. Copy it into `scripts/` as the documented way to fetch transcripts for a wave, raise its `--playlist-end` cap (it was 20, which is why videos were missing) and add an optional title filter argument. Do not run it yourself unless a transcript is still missing when you get to step 01, and if YouTube refuses from your environment, print the exact command for waldo to run on his Mac and continue without blocking.
4. The official "what's planned" baseline. Important: starting with this wave Microsoft no longer publishes per-feature release plans (the 29.0 what's-new page says "Features are no longer linked to release plans" and points to the AI at Work roadmap). So the baseline for the gap analysis is the official documentation instead, in this order of preference:
   - `https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details` ("Feature details for Business Central 2026 release wave 2 public preview", roughly 35-40 features as H2/H3 headings grouped by area, narrative text under each). Parse headings into features: `area` is the prefix before the colon ("Copilot and agents: ...", "Country/region: ...").
   - `https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/whatsnew-update-29-0` (the update overview, links to the feature details).
   - The AI at Work roadmap at `https://aka.ms/AIatWorkRoadmap` (filter Business Central) if it is scrapeable without login; otherwise skip and note it.
   Store what you fetched as `data/release-plan/2026w2.json` with a `fetched_at` timestamp, the source URL per item, and a `source_kind` field (`docs-preview-features`, `ai-at-work-roadmap`). Keep the folder name `release-plan` for continuity with future waves, but call it "documented features" in the UI, not "release plan". If a page cannot be fetched, write an empty structure with `status: "unavailable"` and keep going; everything that depends on it must degrade gracefully. Everywhere else in this prompt where it says "release plan", read "documented features baseline".

## Non-negotiable principles

- **Transcripts are the source of truth.** Every claim on every page must be traceable to a video + timestamp. Never let the LLM "know things" about BC that are not in the transcripts; if it adds context, it must be labeled as such and kept out of the data layer.
- **Every quote deep-links.** Format `https://www.youtube.com/watch?v=<id>&t=<seconds>s`. Timestamps come from the cleaned transcript, not from the LLM's imagination.
- **Rebuildable from scratch.** `npm run build` (or `make all`) goes from raw VTT to deployed site. Intermediate artifacts are committed too (so the repo is useful without running anything), but they must be reproducible.
- **Versioned per wave.** Everything data lives under `data/` keyed by wave `2026w2`. The code must not hardcode the wave; a future `2027w1` is a new folder plus a config line.
- **Agent-navigable first, human-pretty second.** An LLM with nothing but `raw.githubusercontent.com` access (or a cloned folder) must be able to answer "what did they say about X" correctly within three file reads. Design the folder layout and index files for that.
- **Microsoft's content.** Full transcripts stay in the repo while it is private. Add a `CONTENT-NOTICE.md` explaining that transcripts are auto-captions of Microsoft's public videos, and a `scripts/strip-for-public.sh` that removes `data/transcripts/full/` and leaves only summaries, feature pages and short quotes (max 30 words each) so the repo can be flipped public later with one command.

## Target repository layout

```
.
├── README.md                  human intro, screenshots, how to run, how to re-run for a new wave
├── AGENTS.md                  instructions for coding/answering agents (see "Agent entry points")
├── CLAUDE.md                  one line: "Read AGENTS.md"
├── llms.txt                   llmstxt.org format: what this is + curated links to the key files
├── llms-full.txt              generated: all feature pages + video summaries concatenated (no raw transcripts)
├── CONTENT-NOTICE.md
├── config/
│   └── waves.json             { "2026w2": { "name": "...", "channel": "...", "event_date": "2026-10-01" } }
├── data/
│   ├── videos.json            extended from the input file
│   ├── release-plan/2026w2.json
│   ├── transcripts/
│   │   ├── full/<video-id>.md       cleaned transcript, one paragraph per ~30s, each paragraph prefixed [mm:ss] and linked
│   │   └── full/<video-id>.json     [{ "t": seconds, "text": "..." }, ...] segments (~10-20s granularity)
│   ├── videos/<video-id>.md         per-video page: frontmatter + summary + chapters + features + quotes
│   ├── features/<slug>.md           per-feature page (cross-video), frontmatter + narrative + quotes + release-plan match
│   ├── areas/<area-slug>.md         per-area overview linking its features and videos
│   ├── index/
│   │   ├── features.json            the merged feature graph (see data model)
│   │   ├── search.json              passages for client-side search (see search)
│   │   ├── embeddings.json          optional, see search
│   │   ├── airtime.json             seconds per area / per feature / per status
│   │   ├── wordcount.json           buzzword counts per video and total
│   │   ├── timelines.json           per video: chapters, demo ranges, disclaimer moments
│   │   └── gap-analysis.json        release plan vs transcripts diff
│   └── reports/
│       ├── dev-digest.md            the developer-focused read
│       ├── what-they-didnt-say.md   the gap analysis as prose
│       └── buzzword-bingo.md
├── pipeline/                  node (TypeScript preferred) or python, your call, but one language
│   ├── 01-clean-vtt
│   ├── 02-extract            LLM extraction per video (Claude, structured output)
│   ├── 03-merge-features     dedupe + merge features across videos (LLM assisted, deterministic where possible)
│   ├── 04-match-release-plan
│   ├── 05-analytics          airtime, wordcount, timelines, gap analysis
│   ├── 06-render-markdown    videos/, features/, areas/, reports/, llms-full.txt
│   └── 07-build-search-index
├── site/                      static site, builds to dist/, deployed to Pages
├── scripts/
│   ├── get-bcle-transcripts.sh
│   └── strip-for-public.sh
└── .github/workflows/
    ├── build-and-deploy.yml   on push to main: build site, deploy to Pages
    └── new-wave.yml           workflow_dispatch(date, wave): fetch transcripts, run pipeline, open PR
```

## Agent entry points (this is the part waldo cares most about)

`AGENTS.md` must let an agent that knows nothing find its way. Write it as instructions, not as marketing. It must contain:

- What the repo is, in two sentences, and what it is not (not official, auto-captions, may contain transcription errors, names of presenters may be misspelled).
- A "how to answer a question" recipe: start at `data/index/features.json` (or `data/features/` for prose), fall back to `data/videos/<id>.md`, and only go to `data/transcripts/full/` for exact wording. Explain the frontmatter schema of each file type so the agent can grep.
- The file naming rules and slug rules.
- How to cite: always video title + timestamp link.
- Known limitations (missing transcripts, release-plan matching confidence levels).
- A short list of example questions with the file path that answers each one.

`llms.txt` follows llmstxt.org: H1, blockquote summary, then sections with `- [name](url): description` lines, URLs pointing to raw GitHub paths (use the `raw.githubusercontent.com/waldo1001/msdyn365-2026-release-wave-2/main/...` form so they work once public, and relative paths in a second block for cloned use). Link `AGENTS.md`, `data/index/features.json`, each area page, the reports, and `llms-full.txt`.

Every markdown file in `data/` gets YAML frontmatter so it is greppable and parseable. Minimum schema:

Video page:
```yaml
id: D_Lur52IrIg
title: "What's new in AL and Tools"
wave: 2026w2
url: https://www.youtube.com/watch?v=D_Lur52IrIg
duration_seconds: 2104
area: developer-tools
presenters: ["<as heard, mark uncertain with ?>"]
features: [slug, slug]
status_mentions: { preview: 3, ga: 2, announced: 1 }
```

Feature page:
```yaml
slug: al-graph
name: "ALGraph"
area: developer-tools
status: preview | ga | announced | unclear     # as stated in the videos, with the quote that proves it
videos: [{ id, t_start, t_end }]
airtime_seconds: 402
release_plan: { matched: true, id: "...", title: "...", confidence: high|medium|low|none, url: "..." }
tags: [copilot, agents, al, admin, performance, ...]
dev_relevance: high | medium | low              # does a BC developer need to care
```

## Data model for extraction (step 02)

**No API key. All LLM work runs on waldo's Claude subscription through the Claude Code CLI.** Step 02 (and the LLM parts of 03 and 05) call `claude -p` in headless mode from the pipeline script, something like `claude -p --output-format json --json-schema <schema> < prompt.txt` (check `claude --help` for the exact flags of the installed version; if `--json-schema` is not available, ask for JSON in the prompt and validate with a schema library, retrying once on invalid output). Keep the backend pluggable behind one module (`pipeline/lib/llm.*`) with two implementations: `cli` (default, uses `claude -p`, no secrets) and `api` (Anthropic SDK, only if `ANTHROPIC_API_KEY` is set, never required). Record which backend and model produced each cached result. Determinism comes from the committed cache, not from temperature settings, so be strict about caching and about the validation step below.

Per video, ask Claude for:

- `summary` (3-5 sentences, plain, no hype words copied from the video)
- `chapters`: list of `{ t_start, t_end, title }` covering the whole video
- `features`: list of `{ name, description, status, status_evidence_t, is_demoed, demo_t_start, demo_t_end, caveats[], prerequisites[], tags[] }`
- `quotes`: 5-10 `{ t, text, why_it_matters }`, verbatim from the transcript segments (validate that `text` exists in the segment at `t` ± 20s; drop quotes that fail validation and log them)
- `disclaimers`: timestamps where they say things like "preview", "subject to change", "not in this release", "coming later"
- `presenters`: names as heard, with a confidence flag
- `audience`: who this video is for (developer / consultant / admin / end user / partner), multiple allowed

Feed the transcript as the JSON segments (with timestamps), not as a blob, so the model can return real timestamps. Chunk videos longer than ~20 minutes into overlapping windows and merge. Cache every LLM call on disk keyed by a hash of (prompt version, model, input) under `pipeline/.cache/`, commit the cache, so re-runs are free and deterministic.

Step 03 merges features across videos: normalize names, embed or LLM-compare candidates, merge duplicates (Copilot Chat is discussed in at least three videos), keep provenance per video. Area taxonomy, fixed for the wave, adjust only if a video clearly does not fit:

`finance`, `supply-chain`, `e-documents`, `sustainability`, `expense-agent`, `copilot-and-agents`, `reporting-and-analytics`, `developer-tools`, `admin-and-platform`, `integration` (Fabric, Shopify, MDM).

## Analytics (step 05)

- **Airtime**: seconds per area, per feature, per status (preview vs GA), per audience. Derived from chapters and feature time ranges, not from video count.
- **Word count / buzzword bingo**: count occurrences per video and total for a configurable list: agent, agentic, copilot, AI, seamless, exciting, powerful, super, MCP, preview, in the future, stay tuned, telemetry, performance, extensibility, BC-Bench, and let Claude propose 10 more after seeing the texts. Also "new words this wave": tokens that appear in 2026w2 transcripts but in none of the 2025w2 videos (the channel has those too; fetching those transcripts is optional, if you do it put them under `data/transcripts/full/` with `wave: 2025w2` and only use them for the diff, no feature extraction).
- **Timelines**: per video, chapter blocks, demo ranges, disclaimer markers, feature mentions, as a list of ranges suitable for drawing a horizontal strip.
- **Gap analysis**: documented features with zero transcript coverage ("documented but not shown"), transcript features with no documentation match ("shown but not documented", these are the gems), and status conflicts (docs say GA, video says preview, or vice versa). Confidence scoring on the match, and a manual override file `data/release-plan/overrides.json` that waldo can edit.

## Static site (`site/`)

Plain HTML/CSS/JS or a tiny static generator (Astro or Vite+vanilla are fine; no heavy framework, no SSR). Must work under a sub-path (`/msdyn365-2026-release-wave-2/`) so set the base path from config. Everything reads the JSON in `data/index/` at build time or fetch time. Dark and light theme. Mobile usable. No external requests at runtime except YouTube links and YouTube thumbnails (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`). No analytics, no cookies.

Pages:

1. **Home / Release map**: the zoomable overview. A separate Claude Design brief exists for the visual language; until that lands, implement a working version: center node = the wave, ring 1 = areas sized by airtime, ring 2 = features sized by airtime and colored by status, click to zoom (D3 zoomable sunburst or circle packing is the right primitive). Side panel on click: feature summary, quotes with deep links, videos, release plan match. The visual must be driven 100% by `features.json` + `airtime.json` so a redesign only touches CSS/SVG.
2. **Videos**: grid of all 38 with thumbnail, duration, area, feature count; per-video page with the timeline strip (clickable, jumps to YouTube at that second), chapters, features, quotes, and the cleaned transcript folded underneath (keep this one out of the public build via a flag).
3. **Features**: filterable table (area, status, dev relevance, release-plan match) and per-feature pages.
4. **Airtime**: charts. Stacked bar per area, preview vs GA split, audience split, top 15 features by minutes, and a "minutes of Copilot/agents vs everything else" headline number.
5. **Developer digest**: renders `data/reports/dev-digest.md`. This is the page waldo will link from his blog, so make it tight: "if you are a BC dev, here is the ~N minutes that matter" with a playlist-like list of deep links.
6. **What they didn't say**: the gap analysis, three lists, with confidence badges and links to both the plan item and the video moment.
7. **Bingo**: buzzword counts with a sortable table, a per-video heatmap, "new words this wave", and a printable 5x5 bingo card generated from the top terms (yes, really).
8. **Ask the event**: client-side search over `search.json`. Default implementation: lunr/minisearch full-text over passages (each passage = a transcript segment group of ~40 words with video id and `t`), results show the passage, the video, and a deep link. Optional upgrade behind a toggle: precomputed embeddings (`embeddings.json`, small model, quantized, keep it under ~5 MB or skip) for semantic ranking, and a "bring your own Anthropic key" box (key stored in `localStorage` only, called directly from the browser) that answers the question using the top passages as context and cites them. No key, no LLM, search still works.
9. **About**: what, why, limitations, content notice, link to the repo and to waldo.be.

Add an `og:image` per main page generated at build time (simple SVG to PNG with the page title and the headline number) so links look good on LinkedIn and Bluesky.

## Workflows

`build-and-deploy.yml`: on push to `main` and on `workflow_dispatch`: install, run `site` build, upload artifact, deploy to Pages with `actions/deploy-pages`. Do not run the LLM pipeline here.

`new-wave.yml`: `workflow_dispatch` with input `wave` (e.g. 2027w1). Because transcripts need browser cookies and the LLM steps run on waldo's subscription, the LLM-heavy part is local: `npm run wave -- 2027w1` on his Mac runs steps 01-03 (clean, extract, merge) and commits the results plus cache. The workflow then runs the deterministic rest (04-07 and the site build) from the committed data and opens a PR with the new wave folder. Must be a no-op for already-processed videos (cache). Document the two halves clearly in the README under "Next wave".

## Quality bar and acceptance criteria

Before you report done, verify and show evidence for each of these:

1. `npm run build` (or equivalent) from a clean clone with the committed cache produces `site/dist` without network access to Anthropic.
2. Pick 10 random quotes from `data/features/*.md`, open the deep link timestamp in the cleaned transcript, and confirm the text is there within 20 seconds. Report the hit rate; it must be 10/10, otherwise fix the validation.
3. Pick 3 questions ("what changed for page scripting", "is the MCP server in preview or GA", "what does the Fabric integration need on the tenant") and answer each using only files from the repo as an agent would, following `AGENTS.md`. Write the answers plus the file path trail into `docs/agent-smoke-test.md`.
4. Lighthouse on the home page: performance and accessibility both 90+ on desktop.
5. The site renders at 390px width without horizontal scroll.
6. `scripts/strip-for-public.sh` on a copy of the repo leaves a site that still builds and has no file containing more than 30 consecutive words from any transcript.
7. Pages URL is live and the README has the link and three screenshots.

## Working style

- Start by writing `docs/PLAN.md` with your interpretation, the pipeline language choice, and open questions. Then build end to end on 3 videos first (pick the AL and Tools one, the MCP Server one and the Page Scripting one), get the whole chain to deploy, then scale to all videos.
- Commit small, descriptive, conventional commits. Push to `main` as you go; this is a private repo and waldo wants to watch it grow.
- When something is ambiguous, pick the option that keeps the data layer honest and leave a note in `docs/DECISIONS.md`. Do not stop to ask unless you are truly blocked (YouTube access, `claude -p` not working headless).
- Report at the end with: Pages URL, repo URL, what is missing (e.g. which transcripts could not be fetched), the three smoke-test answers, and the five most interesting things the data shows (waldo will want blog material).
- Also write that report to `docs/REPORT.md`, and end it with a "What waldo does next" section copied and adapted from `docs/brief/RUNBOOK.md` steps 5 to 8 (data review, Claude Design with the real `features.json` and `airtime.json`, second coding pass, go public), with the real paths and URLs filled in. waldo may not be watching while you run; that section is how he picks the project back up.
- If waldo's first message says to run unattended, do not pause for the check-ins; make the safest choice yourself, write it in `docs/DECISIONS.md`, and keep going until the acceptance criteria are met or you are blocked.

## Appendix: the 38 videos

See `videos.json`. Total runtime 7 hours 9 minutes (25,741 seconds). Longest: AL and Tools (35:04), SCM Subcontracting (27:23), Shopify Connector Overview (22:17). Eight videos are about the Expense Agent alone, which is already a story.
