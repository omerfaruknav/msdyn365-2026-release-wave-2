#!/usr/bin/env bash
# Prepare the repository for a public flip: remove every file that contains full transcript
# text and leave summaries, feature pages and short quotes (max 30 words, deep-linked).
#
# Removes:  data/transcripts/full/          cleaned transcripts (md + json)
#           data/transcripts/raw/           the original VTT captions
#           pipeline/.cache/02-extract/     LLM cache entries whose prompts contain transcript text
#           pipeline/out/02-extract/*.log.json  validator logs (may quote dropped lines)
#           data/index/search.json          full-text passages (rebuilt in public mode by npm run build)
# Keeps:    pipeline/out/02-extract/<id>.json (summaries, chapters, quotes <= 30 words) so the
#           deterministic steps and the site still build; the other cache folders hold no transcript text.
# After this, `npm run build` runs in public mode automatically (no data/transcripts/full).
#
# Usage: ./scripts/strip-for-public.sh [--dry-run]
set -euo pipefail
cd "$(dirname "$0")/.."
DRY="${1:-}"
targets=(data/transcripts/full data/transcripts/raw pipeline/.cache/02-extract data/index/search.json)
for t in "${targets[@]}"; do
  if [ -e "$t" ]; then
    if [ "$DRY" = "--dry-run" ]; then echo "would remove $t"; else rm -rf "$t"; echo "removed $t"; fi
  fi
done
shopt -s nullglob
for f in pipeline/out/02-extract/*.log.json; do
  if [ "$DRY" = "--dry-run" ]; then echo "would remove $f"; else rm -f "$f"; fi
done
mkdir -p data/transcripts
cat > data/transcripts/README.md <<'MD'
# Transcripts

The full transcripts were removed from this public repository with `scripts/strip-for-public.sh`.
They were YouTube auto-captions of Microsoft's public launch event videos (see CONTENT-NOTICE.md).
Everything that remains (summaries, feature pages, quotes of at most 30 words) links to the
second in the video where it is said; the video is the source.

To rebuild with full transcripts locally: run `scripts/get-bcle-transcripts.sh <event-date>`,
copy the `.vtt` files into `data/transcripts/raw/`, then `npm run wave -- <wave>`.
MD
if [ "$DRY" = "--dry-run" ]; then echo "dry run, nothing removed"; else
  echo "Stripped. Now: npm run build && npm run check:public -- --transcripts <path to a private copy of data/transcripts/full>"
fi
