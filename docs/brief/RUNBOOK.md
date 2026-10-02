# Runbook: BCLE 2026 release wave 2 knowledge repo

Everything you type, in order. Blocks are copy-paste ready for macOS (zsh). Lines starting with `#` are comments.

Files that are already in place (nothing to download):

- `~/Dropbox/MVP/2026w2-launch-event/PROMPT-coding-agent.md`
- `~/Dropbox/MVP/2026w2-launch-event/PROMPT-claude-design.md`
- `~/Dropbox/MVP/2026w2-launch-event/videos.json`
- `~/Dropbox/MVP/scripts/get-bcle-transcripts.sh`
- `~/Dropbox/MVP/transcripts/*.vtt`

Files you download in this runbook:

| What | URL | Lands in |
|---|---|---|
| Official Dynamics 365 icon pack (contains the Business Central SVG) | https://download.microsoft.com/download/498606aa-6d27-4f13-aa5c-1401078c153b/Dynamics-365-icons-scalable.zip | `~/Dropbox/MVP/Logos/` |
| Claude Code (if not installed) | https://claude.ai/install.sh | system |
| GitHub CLI, yt-dlp, deno, node | via Homebrew | system |

Reference pages the coding agent will fetch itself (you do not need to download these, but good to have open):

- Feature details, 29.0 preview (the "documented features" baseline): https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/preview-feature-details
- What's new 29.0 overview: https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/whatsnew/whatsnew-update-29-0
- AI at Work roadmap (replaces release plans): https://aka.ms/AIatWorkRoadmap
- The YouTube channel: https://www.youtube.com/@MicrosoftDynamics365BC/videos

---

## Step 1 - Complete the transcripts (15 min)

```bash
# 1.1 tools (skip what you already have)
brew install yt-dlp deno
yt-dlp -U

# 1.2 raise the per-tab cap in your script (20 -> 60)
sed -i '' 's/--playlist-end 20/--playlist-end 60/' ~/Dropbox/MVP/scripts/get-bcle-transcripts.sh
grep -n "playlist-end" ~/Dropbox/MVP/scripts/get-bcle-transcripts.sh

# 1.3 fetch; run for both days (one video was published hours after the rest, UTC may put it on the 2nd)
cd ~/Dropbox/MVP/scripts
./get-bcle-transcripts.sh 2026-10-01
./get-bcle-transcripts.sh 2026-10-02

# 1.4 count: should be 38
ls ~/Dropbox/MVP/transcripts/*BCLE*.vtt | wc -l
```

If the count is below 38, find which ones are missing and fetch them one by one:

```bash
# 1.5 list what you have vs videos.json (needs jq: brew install jq)
cd ~/Dropbox/MVP/transcripts
jq -r '.videos[] | "\(.id)\t\(.title)"' ../2026w2-launch-event/videos.json | while IFS=$'\t' read -r id title; do
  key=$(echo "$title" | sed 's/[：:]//g; s/  */ /g' | tr -d "’'" )
  if ! ls *BCLE*.vtt | sed 's/[：:]//g; s/  */ /g' | tr -d "’'" | grep -qF "$key"; then echo "MISSING  $id  $title"; fi
done

# 1.6 fetch a single missing one (replace VIDEO_ID; run once per missing id)
cd ~/Dropbox/MVP/transcripts
yt-dlp --cookies-from-browser chrome --skip-download --write-subs --write-auto-subs \
  --sub-langs "en-orig,en" --sub-format vtt \
  -o "2026-10-01 - BCLE - %(title)s.%(ext)s" "https://www.youtube.com/watch?v=VIDEO_ID"
# then normalize the suffix like the script does:
for f in *.en-orig.vtt; do mv -n "$f" "${f%.en-orig.vtt}.vtt"; done
for f in *.en.vtt;      do [ -e "${f%.en.vtt}.vtt" ] && rm -f "$f" || mv -n "$f" "${f%.en.vtt}.vtt"; done
ls *BCLE*.vtt | wc -l
```

If the file names contain `/` from a title, yt-dlp already replaced them; do not rename anything else, the pipeline matches by normalized title.

## Step 2 - Download the BC icon (2 min)

```bash
cd ~/Dropbox/MVP/Logos
curl -L -o Dynamics-365-icons-scalable.zip \
  "https://download.microsoft.com/download/498606aa-6d27-4f13-aa5c-1401078c153b/Dynamics-365-icons-scalable.zip"
unzip -o -q Dynamics-365-icons-scalable.zip -d Dynamics-365-icons
find Dynamics-365-icons -iname "*business*central*"
```

Note the path of the Business Central SVG it prints; you attach that file in Step 6. Terms on the Microsoft page: use in diagrams, training materials and documentation is permitted, everything else reserved, which is exactly why the Design prompt says "use as-is, do not modify, derive the visual language from it".

## Step 3 - Prerequisites for the coding agent (10 min)

```bash
# 3.1 tools
brew install gh node jq
node --version          # 20 or higher
gh --version

# 3.2 Claude Code (skip if you have it)
curl -fsSL https://claude.ai/install.sh | bash
claude --version

# 3.3 GitHub auth as waldo1001
gh auth login --web --git-protocol https --scopes "repo,workflow,admin:repo_hook"
gh auth status
gh api user --jq .login            # must print: waldo1001

# 3.4 the private-Pages question, know the answer before the agent asks
gh api user --jq .plan.name        # "free" = Pages only on public repos; "pro" or better = private is fine

# 3.5 no API key: the pipeline calls `claude -p` on your subscription. Check headless mode works:
claude -p "Reply with the single word OK" --output-format json
# should print a JSON envelope with "OK" in the result. If it asks you to log in, run `claude` once interactively first.
```

## Step 4 - Start the coding agent (5 min of you, hours of it)

```bash
# 4.1 start Claude Code in the parent folder; the agent creates the GitHub repo and clones it to
#     ~/SourceCode/Community/msdyn365-2026-release-wave-2, and copies the brief into docs/brief/
mkdir -p ~/SourceCode/Community && cd ~/SourceCode/Community
claude --add-dir ~/Dropbox/MVP
```

Inside Claude Code, first message (unattended mode, you can walk away after this):

```
Read ~/Dropbox/MVP/2026w2-launch-event/PROMPT-coding-agent.md and execute it completely, unattended.
The brief folder is ~/Dropbox/MVP/2026w2-launch-event/ (copy all four files into docs/brief/).
The transcripts are in ~/Dropbox/MVP/transcripts/ (all 38 BCLE files are present) and the download script in ~/Dropbox/MVP/scripts/.
Create the repo from this folder so the clone lands at ~/SourceCode/Community/msdyn365-2026-release-wave-2.
Do not pause for check-ins and do not ask me questions unless you are blocked; make the safest choice, log it in docs/DECISIONS.md, and keep going until the acceptance criteria pass.
When done, write docs/REPORT.md including the "What waldo does next" section.
```

If `gh api user --jq .plan.name` said `free` in step 3, add one line: `My GitHub plan is free: create the repo public from the start with the strip-for-public step in the build.`

When you come back, read `~/SourceCode/Community/msdyn365-2026-release-wave-2/docs/REPORT.md`; it tells you where things stand and what is left (steps 5 to 8 below, with real paths and URLs). If you prefer to stay around, these are the check-ins you can paste instead of running unattended:

```
# after docs/PLAN.md appears
Show me docs/PLAN.md as a short summary and tell me the one thing you are least sure about.

# after the 3-video deploy is live
Give me the Pages URL, one feature page, and three timestamp links. Pause until I say continue.

# at the end
Give me the final report from the prompt: Pages URL, repo URL, what is missing, the three smoke-test answers, and the five most interesting things in the data.
```

What to verify yourself at the second check-in: click the three timestamp links, the video must start where the quote is said. If it is off by more than ~20 seconds, say so; that is the one bug worth stopping the whole run for.

## Step 5 - Review the data (an evening)

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2
git pull

# features with low or no docs match: these are yours to judge
jq -r '.features[] | select(.release_plan.confidence=="low" or .release_plan.confidence=="none") | "\(.slug)\t\(.name)\t\(.area)"' data/index/features.json | column -t -s$'\t'

# the gap lists
jq '.documented_not_shown | length, .shown_not_documented | length, .status_conflicts | length' data/index/gap-analysis.json

# duplicates the merge may have missed (same words, different slugs)
jq -r '.features[].name' data/index/features.json | tr 'A-Z' 'a-z' | sort | uniq -d
```

Fix matches in `data/release-plan/overrides.json` (the agent documents the format in `AGENTS.md`), rename or merge duplicate features by telling the agent which slugs to merge, then:

```
Apply data/release-plan/overrides.json, merge the feature slugs I listed, rebuild everything, redeploy, and show me the diff in gap-analysis.json before and after.
```

## Step 6 - Claude Design (1-2 h)

Open Claude Design. Attach these four files:

- `~/Dropbox/MVP/Logos/Dynamics-365-icons/<path from step 2>/…Business Central….svg`
- `~/Dropbox/MVP/2026w2-launch-event/videos.json`
- `~/SourceCode/Community/msdyn365-2026-release-wave-2/data/index/features.json`
- `~/SourceCode/Community/msdyn365-2026-release-wave-2/data/index/airtime.json`

Paste the contents of `~/Dropbox/MVP/2026w2-launch-event/PROMPT-claude-design.md` as the message, and add one line on top:

```
Real data is attached (features.json, airtime.json); ignore the mock data section at the bottom of the brief and use the attached files.
```

Pick one of the three directions when it asks. Export what it hands back into the repo:

```bash
mkdir -p ~/SourceCode/Community/msdyn365-2026-release-wave-2/design
# move the exported files (tokens.json, HANDOFF.md, images/prototype) into that folder, then:
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2
git add design && git commit -m "design: wave map system from Claude Design" && git push
```

## Step 7 - Second coding pass (1-2 h)

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2
claude
```

```
Implement the design in design/ (read design/HANDOFF.md and design/tokens.json first) on top of the existing site.
Do not touch data/ or pipeline/. Keep the map 100% driven by data/index/features.json and airtime.json.
Re-run the acceptance criteria 4 and 5 from docs/PLAN.md (Lighthouse 90+, 390px no horizontal scroll) and deploy.
```

## Step 8 - Go public (when you are happy)

```bash
cd ~/SourceCode/Community/msdyn365-2026-release-wave-2

# dry run on a copy
rm -rf /tmp/strip-test && cp -R . /tmp/strip-test && (cd /tmp/strip-test && ./scripts/strip-for-public.sh && npm run build) && echo "strip OK"

# for real: strip, commit, flip
./scripts/strip-for-public.sh
git add -A && git commit -m "content: strip full transcripts for public release" && git push
gh repo edit waldo1001/msdyn365-2026-release-wave-2 --visibility public --accept-visibility-change-consequences
gh api repos/waldo1001/msdyn365-2026-release-wave-2/pages --jq .html_url
```

Then write the post. The outline is the agent's "five most interesting things" plus the dev digest page.

## Step 9 - Next wave dry run (April 2027, 1 h)

```bash
# transcripts
~/Dropbox/MVP/scripts/get-bcle-transcripts.sh 2027-04-DD        # the launch event date
# new repo from the setup script, or a new wave folder in this one, your call at the time
gh repo create waldo1001/msdyn365-2027-release-wave-1 --private --clone
cd msdyn365-2027-release-wave-1
# copy pipeline/, site/, scripts/, .github/ from the 2026w2 repo, run:
./scripts/setup-github.sh waldo1001/msdyn365-2027-release-wave-1
```

If that step takes longer than an hour, tell the agent in Step 7 to fix whatever made it slow while it still has context.
