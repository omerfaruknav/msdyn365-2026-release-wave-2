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
