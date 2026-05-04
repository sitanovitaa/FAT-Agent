#!/bin/zsh
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: zsh scaffold-period.sh <YYYY-MM>"
  exit 1
fi

SCRIPT_DIR="${0:A:h}"
PROJECT_ROOT="${SCRIPT_DIR:h}"
PERIOD="$1"
ROOT="$PROJECT_ROOT/fat-workspace/periods/$PERIOD"

mkdir -p "$ROOT/finance" "$ROOT/accounting" "$ROOT/tax" "$ROOT/reporting"

if [[ ! -f "$ROOT/close-status.md" ]]; then
  cat > "$ROOT/close-status.md" <<'EOF'
# Close Status

| Step ID | Function | Task | Owner | Status | Due Date | Dependency | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
EOF
fi

if [[ ! -f "$ROOT/issue-log.md" ]]; then
  cat > "$ROOT/issue-log.md" <<'EOF'
# Issue Log

| Issue ID | Function | Severity | Issue | Owner | Blocker | Next Action | Due Date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
EOF
fi

for area in finance accounting tax reporting; do
  if [[ ! -f "$ROOT/$area/README.md" ]]; then
    printf '# %s - %s\n\nStore %s working files here.\n' "${area:u}" "$PERIOD" "$area" > "$ROOT/$area/README.md"
  fi
done

echo "Scaffolded period workspace: $ROOT"
