#!/usr/bin/env bash
# Configure a wave repository on GitHub exactly like waldo1001/msdyn365-2026-release-wave-2.
# Idempotent: safe to run again. Needs the gh CLI logged in as the repo owner.
#
# Usage:
#   ./scripts/setup-github.sh owner/repo [--public]
#
# What it does (see docs/brief/PROMPT-coding-agent.md, "GitHub setup"):
#   1. checks gh auth and that you are the owner
#   2. creates the repo if it does not exist (private by default) and sets topics
#   3. enables GitHub Pages with the Actions source
#   4. sets Actions permissions (all actions, write default token, no PR approvals)
#   5. repo hygiene: issues on, wiki off, squash only, delete branch on merge, homepage
#   No secrets are created: the LLM steps run locally on a Claude subscription.
#   No branch protection: see docs/DECISIONS.md for the call to add it later.

set -euo pipefail

REPO="${1:-}"
VISIBILITY="private"
[ "${2:-}" = "--public" ] && VISIBILITY="public"
if [ -z "$REPO" ] || [[ "$REPO" != */* ]]; then
  echo "Usage: $0 owner/repo [--public]" >&2; exit 1
fi
OWNER="${REPO%%/*}"
NAME="${REPO##*/}"

command -v gh >/dev/null || { echo "gh CLI not found (brew install gh)" >&2; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "gh is not logged in (gh auth login)" >&2; exit 1; }
LOGIN="$(gh api user --jq .login)"
if [ "$LOGIN" != "$OWNER" ]; then
  echo "Logged in as $LOGIN, but the repo owner is $OWNER. Stop." >&2; exit 1
fi
echo "Logged in as $LOGIN"

PLAN="$(gh api user --jq '.plan.name // "unknown"' 2>/dev/null || echo unknown)"
echo "GitHub plan: $PLAN (free = Pages only on public repos)"
if [ "$PLAN" = "free" ] && [ "$VISIBILITY" = "private" ]; then
  echo "Warning: plan is free and the repo is private, Pages will not deploy until it is public." >&2
fi

if gh repo view "$REPO" >/dev/null 2>&1; then
  echo "Repo $REPO exists"
else
  echo "Creating $REPO ($VISIBILITY)"
  gh repo create "$REPO" "--$VISIBILITY" \
    --description "Unofficial, LLM-navigable map of a Business Central release wave launch event"
fi

gh repo edit "$REPO" \
  --add-topic business-central --add-topic dynamics-365 --add-topic al \
  --add-topic release-wave --add-topic llms-txt --add-topic github-pages >/dev/null
echo "Topics set"

# Pages with the Actions source. POST creates, PUT updates.
if gh api "repos/$REPO/pages" >/dev/null 2>&1; then
  gh api -X PUT "repos/$REPO/pages" -f build_type=workflow >/dev/null && echo "Pages updated (workflow source)"
else
  if gh api -X POST "repos/$REPO/pages" -f build_type=workflow >/dev/null 2>/tmp/pages-err.txt; then
    echo "Pages enabled (workflow source)"
  else
    echo "Could not enable Pages:"; cat /tmp/pages-err.txt
    echo "If the message mentions upgrading, the plan does not allow Pages on private repos. Make the repo public (after scripts/strip-for-public.sh) and run this script again."
  fi
fi
PAGES_URL="$(gh api "repos/$REPO/pages" --jq .html_url 2>/dev/null || true)"
[ -n "$PAGES_URL" ] && echo "Pages URL: $PAGES_URL"

# Actions permissions
gh api -X PUT "repos/$REPO/actions/permissions" -F enabled=true -f allowed_actions=all >/dev/null
gh api -X PUT "repos/$REPO/actions/permissions/workflow" \
  -f default_workflow_permissions=write -F can_approve_pull_request_reviews=false >/dev/null
echo "Actions permissions set (all actions, write default, no PR approvals)"

# Hygiene
gh repo edit "$REPO" --enable-issues --enable-wiki=false --delete-branch-on-merge \
  --enable-squash-merge --enable-merge-commit=false --enable-rebase-merge=false >/dev/null
[ -n "$PAGES_URL" ] && gh repo edit "$REPO" --homepage "$PAGES_URL" >/dev/null
echo "Repo settings applied"

echo
echo "Done. Verify:"
echo "  gh api repos/$REPO/pages --jq '.build_type, .html_url'"
echo "  gh run list --repo $REPO --workflow build-and-deploy.yml"
