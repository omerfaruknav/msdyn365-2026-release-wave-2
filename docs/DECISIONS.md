# Decisions

Running log of choices made while building, newest at the bottom. The brief says: when
something is ambiguous, pick the option that keeps the data layer honest and write it
here. waldo asked for an unattended run, so nothing below was confirmed with him.

## D01 - Private repo first, public fallback

`gh api user --jq .plan.name` returns nothing: the token has no `user` scope, so the plan
is unknown. No existing private repo of waldo1001 has Pages enabled either. I create the
repo private and try to enable Pages with the Actions source. If GitHub refuses
(paid-plan message), I run `scripts/strip-for-public.sh` logic in the build and flip the
repo to public, as the brief's default (a).

## D02 - One repository per wave

The repo is named after the wave and the runbook's step 9 creates a new repo with
`scripts/setup-github.sh`. So the data layout stays exactly the flat layout of the brief
(`data/index/features.json`, not `data/index/2026w2/features.json`) and the wave id lives
in `config/waves.json` and in every frontmatter. Transcripts of other waves (2025w2, for
the word diff only) can sit in `data/transcripts/full/` with their own `wave:` value.

## D03 - Raw VTT files are committed

"Rebuildable from scratch" needs the input. The raw captions go into
`data/transcripts/raw/` while the repo is private; `scripts/strip-for-public.sh` deletes
them together with `data/transcripts/full/`, `pipeline/.cache/` (the cache holds
transcript text in the prompts) and the full-text search passages.

## D04 - Models

Default `sonnet` for step 02 (per-video extraction) and `opus` for steps 03 and 04
(cross-video merge, docs matching). Fable is the CLI default and costs twice opus; the
extraction task is constrained enough for sonnet. Every cache file records the model that
produced it, so a later re-run with a bigger model is a config change plus a cache miss.

## D05 - Quotes are capped at 30 words everywhere

The public rule is "max 30 words per quote". Rather than having two quote lengths, the
extraction asks for 8 to 25 word quotes and the validator trims anything longer to its
first 30 words (still a verbatim substring of the transcript, marked `truncated: true`).
Private and public builds therefore share the same quote data.

## D06 - Quote timestamps are snapped to the transcript

A quote must exist in the segments within 20 seconds of its `t`. If it does not but
exists elsewhere in the same video, `t` is corrected to the segment where it is found and
the correction is logged in `pipeline/out/02-extract/<id>.log.json`. If the text exists
nowhere (fuzzy match under threshold), the quote is dropped. Timestamps therefore always
come from the transcript, never from the model.

## D07 - Branch protection on main: not now

waldo pushes straight to main while the repo is private. To add protection later:

```bash
# gh api -X PUT repos/waldo1001/msdyn365-2026-release-wave-2/branches/main/protection \
#   --input - <<'JSON'
# {
#   "required_status_checks": { "strict": true, "contexts": ["build"] },
#   "enforce_admins": false,
#   "required_pull_request_reviews": null,
#   "restrictions": null,
#   "allow_force_pushes": false,
#   "allow_deletions": false
# }
# JSON
```

## D08 - Site generator: hand-rolled TypeScript, not Vite or Astro

Every page is prerendered HTML with inline SVG for the timeline strips and the airtime
charts; D3 is only loaded on the home page (the zoomable map) and MiniSearch only on the
Ask page. That keeps Lighthouse performance at 100 on the home page and makes the other
pages work without JavaScript. The generator is `site/build.ts`, helpers in `site/lib/`,
client scripts in `site/assets/`. A redesign (runbook step 7) touches `site/assets/site.css`,
`site/assets/map.js` and the templates in `site/build.ts`, never `data/`.

## D09 - Airtime: feature ranges may overlap, and that is reported, not hidden

A feature's airtime is the union of its discussion ranges per video. Different features
can still overlap inside one video (a demo that shows three features counts for all three),
so feature minutes per area exceed the footage minutes. `airtime.json` therefore carries
both `feature_seconds` and `video_seconds` per area, the map ring sizes use feature
seconds, the headline numbers use video seconds, and `coverage` shows how much of each
video got a feature label. The developer digest's "N minutes that matter" is the union of
the high-relevance ranges, so it never exceeds the footage.

## D10 - Status is resolved from evidence, never by the merge model

In step 03 the model only decides which candidates are the same feature and how to name
them. The status comes from the per-video statements: a verified GA statement wins over a
verified preview statement (recorded as a conflict when both exist), anything unverified
ranks below verified, and no statement means `unclear`. This is why most features are
"not stated": presenters rarely say the word. The docs status is shown next to it.

## D11 - Previous wave transcripts: fetched without browser cookies

yt-dlp reaches YouTube from this machine without cookies, so the 2025 release wave 2
launch videos were fetched for the "new words this wave" diff (title filter
"2025 release wave 2", upload date around 2025-10-01, file names carry the YouTube id).
They are imported with `scripts/import-previous-wave.ts` as `wave: 2025w2` JSON only, no
markdown, no extraction, and they are removed by `scripts/strip-for-public.sh` like all
transcripts. If the fetch is rate limited the bingo page says the diff is unavailable.

## D12 - Developer dependency for the acceptance checks

`puppeteer-core` (no bundled browser, uses the installed Chrome) drives
`scripts/site-check.ts`: overflow check at 390px, console errors, screenshots for the
README. Lighthouse runs through `npx lighthouse`. Neither is needed for `npm run build`.

## D13 - The 2026w2 baseline has three sources, all fetched

Microsoft's feature details page (80 features with narrative), the update 29.0 overview
table (availability and roadmap id per feature) and the release communications API behind
the AI at Work roadmap (81 Business Central items) all answered. They are merged by title
and roadmap id into `data/release-plan/2026w2.json`; the table gives each item its
`doc_status` (GA or public preview), which is what the gap analysis compares against.

## D14 - design/ is waldo's, untouched and uncommitted by this run

While the build was running waldo dropped a `design/` folder (tokens.json, HANDOFF.md,
artboards) into the repo and said the design pass comes in a separate prompt. This run does
not read it, does not implement it and does not commit it; every commit from here on adds
files explicitly instead of `git add -A`, so `design/` stays untracked until waldo decides.
The site keeps the working baseline design described in D08.

## D15 - Status rule: GA unless stated otherwise (waldo, 2026-10-02)

After the first full run waldo added the launch event convention: everything shown is
generally available unless the presenters say otherwise. Step 03 now resolves a feature with
no stated status to `ga` with `status_source: implied` (or `preview` when the video title says
preview, e.g. "Expense Agent: Mobile App (Preview)"), and keeps the raw per-video values in
`status_by_video`. Stated statuses with evidence quotes are untouched. The gap analysis splits
status conflicts into stated and implied ones, and lists where the implied GA agrees with the
docs. The merge model call itself is unchanged, so the cache still hits.

## D16 - The docs baseline carries its check date; overrides when the docs do describe it (waldo, 2026-10-02)

The most watched feature of the event, Transfer WIP item and WIP ledger entry (15 min), showed
as "not documented". A re-check of the three baseline pages on 2026-10-02 gave the same 81
items as the morning fetch, so the baseline was current. The claim was still wrong in a narrow
way: Microsoft Learn has a dedicated how-to article for WIP transfers (subcontract-wip-transfers,
ms.date 2026-09-04) and two what's new items describe WIP transfer orders and WIP entries in
their text; the Subcontracting app itself shipped in 2026 release wave 1. The matcher only sees
what's new items, so this is now an override (medium confidence, with the evidence in the note).
Every place that says "not documented" now carries the check date (`release_plan.fetched_at`)
and the caveat that Microsoft keeps filling the docs after the event. Refresh with
`npm run step:04 -- --fetch`; identical items keep the matching cache valid.

## D17 - Full re-check of every docs claim, and a place for product documentation (waldo, 2026-10-02)

After D16 waldo asked for every claim to be re-checked, not just the WIP one. Fourteen
subagents did it the same afternoon: one per area batch re-read all 319 features against the
FULL what's new text (the matching prompt only passes the first 220 characters of each item,
which is how the WIP transfer was missed) and searched learn.microsoft.com for every feature
without a high or medium match; one more checked the reverse claims against the transcripts.
Outcome: 9 more features matched to a what's new item that explicitly names them (overrides,
mostly subcontracting setup items and two Shopify toggles), 1 downgraded to low (previous/next
operation visibility; the manufacturing item never mentions it), and 137 Learn articles recorded
in a new `learn_docs` list in `overrides.json` (78 "yes", 59 "partial"). Sub-features of a
documented umbrella item (Copilot chat answers, test handlers, EDI pieces, report themes) stay
medium by design: the docs are coarser than a demo. The data model now carries
`release_plan.learn` per feature, the gap report splits the undocumented list into "the product
docs describe it" and "not found", and `doc_mentions` can record a documented item that was
mentioned in passing. Many Learn hits are Subcontracting app or Expense Agent articles that
predate this wave; the note on each entry says so when the agent could tell. The transcript check found 5 of the 22 "documented but not shown" items in a video after all (4 in passing, the service management carbon footprint demoed for 90 seconds inside a broader feature); they are recorded as `doc_mentions` and the list says so. It also found one stated status conflict resting on a wrong match (the financial report test preview was paired with G/L account tracing); that match is now null, leaving 5 stated conflicts, 2 of which rest on soft wording ("with this release", "we will enable").
