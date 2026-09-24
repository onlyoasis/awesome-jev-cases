#!/bin/zsh
set -euo pipefail

repo=/Users/lzc/Projects/research/awesome-jev-cases
private_volume=/Volumes/ExternalPrivate
runtime_root="$private_volume/Runtime/awesome-jev-cases"
prompt="$repo/docs/codex-daily-curation.md"
codex_bin=/Users/lzc/.local/bin/codex

# Do not let an absent external volume turn /Volumes into an internal-disk fallback.
if ! /sbin/mount | /usr/bin/awk '$3 == "/Volumes/ExternalPrivate" && $1 ~ /^\/dev\// { found=1 } END { exit !found }'; then
  exit 72
fi
if [[ ! -w "$private_volume" || ! -r "$prompt" || ! -x "$codex_bin" ]]; then
  exit 73
fi

/bin/mkdir -p "$runtime_root/logs"
run_date=$(/bin/date '+%Y-%m-%dT%H-%M-%S%z')
log="$runtime_root/logs/$run_date.log"
export PATH="/Users/lzc/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
exec >> "$log" 2>&1
print -- "Codex Jev curation started: $run_date"

if /usr/bin/lockf -t 0 "$runtime_root/run.lock" "$codex_bin" exec \
  -C "$repo" \
  --add-dir /Users/lzc/Projects/web/typesafe-jev \
  --add-dir /Users/lzc/Projects/project-registry \
  --add-dir /Volumes/ExternalPrivate/Workspaces/codex \
  --add-dir /Volumes/ExternalProjects/DevCaches \
  -m gpt-6-sol \
  -s workspace-write \
  -c approval_policy=never \
  -c sandbox_workspace_write.network_access=true \
  -c model_reasoning_effort=medium \
  - < "$prompt"; then
  print -- "Codex Jev curation completed: $(/bin/date '+%Y-%m-%dT%H-%M-%S%z')"
else
  result=$?
  print -- "Codex Jev curation failed with exit $result"
  exit "$result"
fi
