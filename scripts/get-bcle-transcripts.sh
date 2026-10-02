#!/usr/bin/env bash
# Download English transcripts (VTT) of all videos a YouTube channel published on a given day.
#
# Usage:
#   ./get-bcle-transcripts.sh                        # today's videos (local date)
#   ./get-bcle-transcripts.sh 2026-10-01             # a specific day
#   ./get-bcle-transcripts.sh 2026-10-01 "ALGraph"   # only titles containing this text (case-insensitive)
#
# This copy lives in the msdyn365 wave repo (scripts/) as the documented way to fetch
# the transcripts of a launch event. The original stopped at 20 videos per tab, which
# is why videos were missing; MAX_VIDEOS now defaults to 300 and the day filter stops
# scanning at the first older video anyway.
#
# Env overrides:
#   CHANNEL_URL  channel to scan (default: resolved from the BCLE Fabric video)
#   SOURCE       label used in the file name (default: BCLE)
#   OUT_DIR      target folder (default: ~/Dropbox/MVP/transcripts)
#   BROWSER      browser to borrow YouTube cookies from (default: chrome)
#   MAX_VIDEOS   how many of the newest videos per tab to inspect (default: 300).
#                Scanning stops at the first video older than the requested day anyway,
#                so a high value only costs time on very busy days.
#
# Files are named "YYYY-MM-DD - <SOURCE> - <title>.vtt".
# Needs: yt-dlp[default] + deno (brew install deno).

set -uo pipefail

SEED_VIDEO="https://www.youtube.com/watch?v=kOCiyVql0go"
SOURCE="${SOURCE:-BCLE}"
OUT_DIR="${OUT_DIR:-$HOME/Dropbox/MVP/transcripts}"
BROWSER="${BROWSER:-chrome}"
MAX_VIDEOS="${MAX_VIDEOS:-300}"
ARCHIVE="$OUT_DIR/.yt-dlp-archive.txt"

if [ $# -ge 1 ] && [ -n "$1" ]; then
  DAY="${1//-/}"
else
  DAY="$(date +%Y%m%d)"
fi
TITLE_FILTER="${2:-}"
if ! [[ "$DAY" =~ ^[0-9]{8}$ ]]; then
  echo "Date must be YYYY-MM-DD" >&2; exit 1
fi

command -v yt-dlp >/dev/null || { echo "yt-dlp not found (python -m pip install -U 'yt-dlp[default]')" >&2; exit 1; }
command -v deno   >/dev/null || echo "Warning: deno not found, YouTube extraction may fail (brew install deno)" >&2

COMMON=(--cookies-from-browser "$BROWSER" --ignore-no-formats-error --no-warnings)

if [ -z "${CHANNEL_URL:-}" ]; then
  echo "Resolving channel from seed video..."
  CHANNEL_URL="$(yt-dlp "${COMMON[@]}" --skip-download --print channel_url "$SEED_VIDEO" | head -1)"
  [ -n "$CHANNEL_URL" ] || { echo "Could not resolve channel URL" >&2; exit 1; }
fi

mkdir -p "$OUT_DIR"
echo "Channel: $CHANNEL_URL"
echo "Day:     ${DAY:0:4}-${DAY:4:2}-${DAY:6:2}"
echo "Target:  $OUT_DIR"
[ -n "$TITLE_FILTER" ] && echo "Filter:  title contains '$TITLE_FILTER'"

# Optional title filter, combined with the live-status filter below.
MATCH="live_status!=is_upcoming & live_status!=is_live"
if [ -n "$TITLE_FILTER" ]; then
  MATCH="$MATCH & title~='(?i)$TITLE_FILTER'"
fi

# Regular uploads and livestreams/premieres live on separate tabs.
for TAB in videos streams; do
  echo "--- Scanning /$TAB"
  yt-dlp "${COMMON[@]}" \
    --skip-download \
    --write-subs --write-auto-subs \
    --sub-langs "en-orig,en" --sub-format vtt \
    --sleep-requests 1 --sleep-subtitles 5 \
    --playlist-end "$MAX_VIDEOS" \
    --match-filters "$MATCH" \
    --break-match-filters "upload_date>=$DAY" \
    --download-archive "$ARCHIVE" \
    -P "$OUT_DIR" \
    -o "%(upload_date>%Y-%m-%d)s - $SOURCE - %(title)s.%(ext)s" \
    "$CHANNEL_URL/$TAB" || true   # a "break" or empty tab is not an error
done

# Normalize names: drop the language suffix, prefer en-orig over en.
shopt -s nullglob
cd "$OUT_DIR" || exit 1
for f in *.en-orig.vtt; do
  base="${f%.en-orig.vtt}"
  if [ ! -e "$base.vtt" ]; then
    mv -n "$f" "$base.vtt" && echo "Saved: $base.vtt"
  else
    rm -f "$f"
  fi
  rm -f "$base.en.vtt"
done
for f in *.en.vtt; do
  base="${f%.en.vtt}"
  if [ ! -e "$base.vtt" ]; then
    mv -n "$f" "$base.vtt" && echo "Saved: $base.vtt"
  else
    rm -f "$f"
  fi
done

echo "Done. $(ls -1 "$OUT_DIR" | grep -c "^${DAY:0:4}-${DAY:4:2}-${DAY:6:2} - $SOURCE - ") transcript(s) for that day in $OUT_DIR"
