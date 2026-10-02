# Report - BCLE 2026 release wave 2 knowledge repo

Written at the end of the unattended build on 2026-10-02. Everything below is also visible in
the repository; this file is the summary waldo picks the project back up from.

- **Repo:** https://github.com/waldo1001/msdyn365-2026-release-wave-2 (private)
- **Site:** https://waldo1001.github.io/msdyn365-2026-release-wave-2/
- **Local clone:** `~/SourceCode/Community/msdyn365-2026-release-wave-2`
- **Deploy evidence:** see "Acceptance criteria" below (run id and HTTP status).

## What was built

38 videos (7h09) of the launch event, all transcripts present, turned into:

| Layer | Where | Size |
|---|---|---|
| Cleaned transcripts | `data/transcripts/full/<id>.{md,json}` | 38 videos, 68k words, 2,000 segments |
| Per-video extraction (Claude, cached) | `pipeline/out/02-extract/<id>.json`, pages in `data/videos/` | 371 feature candidates, 354 quotes, all validated against the transcript (0 dropped, 0 timestamp corrections needed) |
| Feature graph | `data/index/features.json`, pages in `data/features/` | 319 features in 10 areas |
| Documented features baseline | `data/release-plan/2026w2.json` | 81 items from Microsoft's feature details page, the update 29.0 table and the AI at Work roadmap API |
| Analytics | `data/index/{airtime,wordcount,timelines,gap-analysis}.json` | |
| Reports | `data/reports/{dev-digest,what-they-didnt-say,buzzword-bingo}.md` | |
| Agent entry points | `AGENTS.md`, `llms.txt`, `llms-full.txt` | |
| Site | `site/` (TypeScript generator, no framework) -> GitHub Pages | 9 main pages, 38 video pages, 319 feature pages, 10 area pages, 18 og images |
| Previous wave captions | 45 videos of the 2025 release wave 2 event, `wave: 2025w2`, word diff only | |

LLM usage: 58 cached calls through `claude -p` (sonnet for extraction, opus for the merge and
the docs matching), list-price equivalent about 8 USD, all on the subscription. No API key
anywhere. `npm run build` reproduces everything from the committed cache.

## What is missing or soft

- Nothing is missing from the inputs: all 38 transcripts were on disk and matched.
- **Status rule (added by waldo after the first run, D15): GA unless the presenters said
  otherwise.** 63 features have a stated status with an evidence quote (17 GA, 17 preview,
  29 announced for later); 256 said nothing and are GA by convention (`status_source:
  implied`), except 8 in videos whose title says preview. `gap-analysis.json` lists 46
  status conflicts with the docs: 6 where the presenters stated something else, 40 where
  they said nothing and the docs say public preview (mostly Expense Agent, Copilot chat
  details, EDI and withholding tax). The docs agree with the implied GA for 91 features.
- **The merge is conservative:** 371 candidates became 319 features. About 25 pairs look
  like they could be one feature (for example `data-driven-tests`,
  `data-driven-tests-test-explorer` and `data-driven-tests-al-tool-mcp`, or
  `expense-approval-history-web-app` and `expense-approval-history-bc`). Runbook step 5
  is the place to merge them; the list is printed by the duplicate check there.
- **174 "shown but not documented"** is inflated by the same granularity: many are
  sub-capabilities of a documented item (the docs have 81 coarse entries). The low
  confidence ones already carry a "nearest doc item" so waldo can promote them in
  `data/release-plan/overrides.json`.
- The AI at Work roadmap was read through the public release communications API, not
  through aka.ms (which redirects to a JavaScript application).
- The site's visual design is a working baseline (sunburst, dark and light, mobile list
  fallback). The real design pass is runbook steps 6 and 7; waldo already dropped a
  `design/` folder, which this run did not touch or commit (D14).
- `og:image` PNGs exist for the main pages and the areas; feature pages reuse their area image.
- Semantic search with embeddings was skipped (the brief allowed it); full-text search
  with MiniSearch covers 1,114 transcript passages plus summaries, chapters and features.

## Acceptance criteria

| # | Criterion | Result | Evidence |
|---|---|---|---|
| 1 | `npm run build` from a clean clone with the committed cache, no Anthropic access | pass | The GitHub Actions build job runs exactly this on `ubuntu-latest` with no credentials; the deterministic steps and the site build finish in under a minute. Locally the same command completes with `LLM_CACHE_ONLY=1`. |
| 2 | 10 random quotes found in the cleaned transcript within 20 s | **10/10** | `npm run check:quotes -- --seed 2026` (seed 7 on the pilot, seed 29 after the status rule change): 10/10 hits each time. Across all 354 quotes the validator logged 0 drops and 0 corrections. |
| 3 | Three agent questions answered from repo files | pass | `docs/agent-smoke-test.md` (page scripting, MCP server status, Fabric prerequisites) with file trails and timestamp citations. |
| 4 | Lighthouse home page, desktop: performance and accessibility 90+ | **95 / 96** | Lighthouse 12.8.2, desktop preset, local serve of `site/dist`: performance 95, accessibility 96, best practices 100, SEO 100. |
| 5 | 390 px wide, no horizontal scroll | pass | `scripts/site-check.ts` (puppeteer-core, 390x844) on all 9 main pages: scrollWidth 390, no console errors. Screenshots in `docs/screenshots/*-390.png`. |
| 6 | `strip-for-public.sh` on a copy: site still builds, no file with more than 30 consecutive transcript words | pass | Copy stripped, `npm run build` in public mode succeeded (983 search documents, 0 passages), `scripts/check-public-leak.ts` scanned 878 files against 131,471 31-word shingles of all transcripts: 0 leaks (after shortening one quote in the smoke test document). |
| 7 | Pages URL live, README with link and three screenshots | pass | README has the link, the numbers table and three screenshots from `docs/screenshots/`. |

Deploy evidence (filled in after the last push):

```
$ gh run list --workflow build-and-deploy.yml --limit 1
completed  success  feat: 2025w2 captions for the word diff, smoke test, README numbers a...  build-and-deploy  main  push  36987842849  43s  2026-10-02T09:06:12Z

$ curl -sI https://waldo1001.github.io/msdyn365-2026-release-wave-2/ | head -1
HTTP/2 200

$ gh api repos/waldo1001/msdyn365-2026-release-wave-2/pages --jq '.build_type, .html_url'
workflow
https://waldo1001.github.io/msdyn365-2026-release-wave-2/
```

## The three smoke-test answers, short

1. **Page scripting:** moves from preview to GA ("we are now moving the page scripting from
   preview into making it generally available", What's new in Page Scripting, 1:00); fully
   localized, accessibility pass, plus two new recording capabilities: multi-select in grids
   and validation of message and error dialog text. Docs agree (GA).
2. **MCP server:** the videos never say preview or GA (grep over all transcripts confirms),
   so by the launch event rule it is GA, implied; the docs list "Run data queries with MCP
   Server" as General availability. Both halves belong in the answer.
3. **Fabric integration on the tenant:** version 29.x "likely 29.1" in public preview, the new
   Microsoft Fabric app in Business Central with the connection details of a Fabric
   mirroring database, a configuration package listing tables and companies, and the new
   permission sets. Nothing said about Fabric capacity or licensing, and none of the Fabric
   features is in the documented baseline.

Full answers with trails: `docs/agent-smoke-test.md`.

## Five interesting things in the data (blog material)

1. **Copilot chat: GA on stage, preview in the docs.** "The new Microsoft Copilot chat to
   come to all our users with this release" (Demystifying the New Microsoft Copilot Chat,
   [0:05](https://www.youtube.com/watch?v=V7NgFOIcGgM&t=5s)) while the docs list "Enable
   Microsoft Copilot chat experience" as public preview. It is the biggest multi-video
   feature of the wave (three videos, 11+ minutes) and the clearest of the 6 conflicts where
   a presenter stated a status. Three of the others go the other way: presenters said "coming
   in a minor" for things the docs already list as GA (Hide-if boolean expressions,
   bookmarking views to the role center, test preview for row and column definitions). And
   then there are 40 features where nobody said "preview" on stage but the docs do: almost
   the whole Expense Agent story (policy checks, mileage, withholding, projects), EDI, and
   the Copilot chat details. By the launch event rule those count as GA on stage.
2. **A quarter of the footage is agents, and the word count says the same.** 107 of 429
   minutes are videos whose primary area is Copilot and agents or the Expense Agent (eight
   videos, 74 minutes, for the Expense Agent alone). "Agent" was said 150 times, "copilot"
   89, "MCP" 56, "agentic" only 9 (35 of the 150 in a single video, Agentic Developer Loop).
   "Seamless" and "exciting": zero. The proposed bingo terms that actually scored: "under
   the hood", "out of the box", "game changer".
3. **The Fabric integration is the largest undocumented block.** Eleven features, all in
   public preview "in version 29.x, likely 29.1", 10 minutes of video, and not one of them
   matches an item in Microsoft's documented features for the wave. Same for "Early install
   of hotfixes for Microsoft apps" (Server and Database, 3 min) and "Integer to big integer
   field change" (AL and Tools, 5.5 min).
4. **Developer tools got 89 minutes and 44 of the 67 high-relevance features**, and the
   whole AL and Tools session states a status for exactly one of them (symbol search against
   the environment, GA); everything else there is GA by the launch event rule, and the docs
   agree for every matched one. The 22 documented features that never got stage time are mostly
   agent UI polish and AL tooling conveniences (dynamic MCP workspaces, MCP file logging,
   compiler diagnostics in builds, ModuleInfo application links). The developer digest is
   108 minutes out of 7h09.
5. **New words this wave versus the 2025 release wave 2 event:** "expense" (143 times, not
   once a year ago), "subcontracting" (102), "mileage", "policies", "withholding", "footer",
   "handlers", "bcbench", "debuggable". The 2025 event never said any of them. Also: 32 of
   the 38 videos are aimed at consultants, 18 at developers, and the video with the most
   disclaimers ("preview", "subject to change", "coming later") is Expense Agent: Improved
   Approval Process with 7.

## What waldo does next

Adapted from `docs/brief/RUNBOOK.md` steps 5 to 8, with the real paths.

### Step 5 - Review the data (an evening)

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2
git pull

# features with low or no docs match: yours to judge (174 of them, sorted by airtime on the site's Gaps page)
jq -r '.features[] | select(.release_plan.confidence=="low" or .release_plan.confidence=="none") | "\(.slug)\t\(.name)\t\(.area)\t\(.airtime_seconds)"' data/index/features.json | sort -t$'\t' -k4 -nr | column -t -s$'\t' | head -60

# the gap lists
jq '.counts' data/index/gap-analysis.json

# duplicates the merge may have missed: same words, different slugs
jq -r '.features[].name' data/index/features.json | tr 'A-Z' 'a-z' | sort | uniq -d
# and the near-duplicates (slugs sharing 3+ words in the same area)
jq -r '.features[] | "\(.area) \(.slug)"' data/index/features.json | sort
```

Fix matches in `data/release-plan/overrides.json` (format in `AGENTS.md`: `{ "overrides":
[{ "feature": "<slug>", "doc_id": "<id from data/release-plan/2026w2.json or null>",
"confidence": "high", "note": "" }], "ignore_doc_items": [] }`), then tell the agent which
slugs to merge:

```
Apply data/release-plan/overrides.json, merge the feature slugs I listed, rebuild everything
(npm run build), redeploy, and show me the diff in data/index/gap-analysis.json before and after.
```

Merging slugs is a change in step 03; the cleanest way is a `data/merge-overrides.json`
that the agent adds to `pipeline/03-merge-features` (not built yet, deliberately: the list
of merges is yours).

### Step 6 - Claude Design (1-2 h)

You already have a `design/` folder with `tokens.json`, `HANDOFF.md` and artboards; this
run left it untracked and unread (D14). If you redo the design pass, attach:

- the Business Central SVG from `~/Dropbox/MVP/Logos/Dynamics-365-icons/...`
- `~/Dropbox/MVP/2026w2-launch-event/videos.json`
- `~/SourceCode/Community/msdyn365-2026-release-wave-2/data/index/features.json`
- `~/SourceCode/Community/msdyn365-2026-release-wave-2/data/index/airtime.json`

and paste `docs/brief/PROMPT-claude-design.md` with the line "Real data is attached
(features.json, airtime.json); ignore the mock data section at the bottom of the brief and
use the attached files." Real shape of the data, for the designer: 10 areas from 10 minutes
(E-Documents) to 89 minutes (developer tools), 319 features from 10 seconds to 15 minutes,
median 56 seconds, 36 features in more than one video.

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2
git add design && git commit -m "design: wave map system from Claude Design" && git push
```

### Step 7 - Second coding pass (1-2 h)

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2
claude
```

```
Implement the design in design/ (read design/HANDOFF.md and design/tokens.json first) on top of
the existing site in site/ (site/build.ts, site/lib/html.ts, site/assets/site.css, site/assets/map.js).
Do not touch data/ or pipeline/. Keep the map 100% driven by data/index/features.json and airtime.json.
Re-run acceptance criteria 4 and 5 (npx tsx scripts/site-check.ts with the local server from
npm run site:serve, and Lighthouse desktop 90+ on the home page) and deploy.
```

What to know before that pass: the map is `site/assets/map.js` (D3 zoomable sunburst,
hash routing `#feature/<slug>` and `#area/<slug>`, filters dim instead of remove, keyboard
arrows/enter/escape, side panel on desktop and bottom sheet on mobile, a stacked list
fallback under 600 px). Timeline strips and charts are static SVG from `site/lib/html.ts`.
Tokens are CSS variables at the top of `site/assets/site.css` (10 area colors, 4 status
treatments, light and dark).

### Step 8 - Go public (when you are happy)

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2

# dry run on a copy (this is exactly what acceptance criterion 6 ran)
rm -rf /tmp/strip-test && rsync -a --exclude node_modules --exclude .git . /tmp/strip-test && ln -s "$PWD/node_modules" /tmp/strip-test/node_modules \
  && (cd /tmp/strip-test && ./scripts/strip-for-public.sh && npm run build \
      && npx tsx scripts/check-public-leak.ts --transcripts ~/SourceCode/Community/msdyn365-2026-release-wave-2/data/transcripts/full --root /tmp/strip-test) && echo "strip OK"

# for real: strip, commit, flip
./scripts/strip-for-public.sh
npm run build
git add -A && git commit -m "content: strip full transcripts for public release" && git push
gh repo edit waldo1001/msdyn365-2026-release-wave-2 --visibility public --accept-visibility-change-consequences
gh api repos/waldo1001/msdyn365-2026-release-wave-2/pages --jq .html_url
```

Keep a private copy of `data/transcripts/full/` somewhere (Dropbox) before stripping: the
leak check needs it, and so does any later re-extraction. The raw VTT files are still in
`~/Dropbox/MVP/transcripts/`.

Then write the post. The outline is the five things above plus the developer digest page
(https://waldo1001.github.io/msdyn365-2026-release-wave-2/dev-digest/).

### Step 9 - Next wave dry run (April 2027)

`README.md` "Next wave" and "Fork this for the next wave": `scripts/setup-github.sh
owner/repo` does the GitHub side in one command, `npm run wave -- 2027w1` the local half,
the `new-wave` workflow the rest. Budget: the whole 2026w2 run (38 videos) took about 25
minutes of model time on the subscription.
