#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="${0:A:h}"
PROJECT_ROOT="${SCRIPT_DIR:h}"
ROOT="$PROJECT_ROOT/codex-skills"
SKILLS=(
  fat-coordinator
  fat-company-context
  fat-finance
  fat-accounting
  fat-tax
  fat-reporting
)

echo "Validating FAT skill package in $ROOT"

for skill in "${SKILLS[@]}"; do
  skill_dir="$ROOT/$skill"
  if [[ ! -d "$skill_dir" ]]; then
    echo "[FAIL] Missing skill directory: $skill"
    exit 1
  fi

  if [[ ! -f "$skill_dir/SKILL.md" ]]; then
    echo "[FAIL] Missing SKILL.md for: $skill"
    exit 1
  fi

  if ! grep -q '^name:' "$skill_dir/SKILL.md"; then
    echo "[FAIL] Missing frontmatter name in: $skill"
    exit 1
  fi

  if ! grep -q '^description:' "$skill_dir/SKILL.md"; then
    echo "[FAIL] Missing frontmatter description in: $skill"
    exit 1
  fi

  echo "[OK] $skill"
done

SHARED=(
  guardrails.md
  output-contract.md
  workspace-map.md
  close-state.md
  routing-overview.md
)

for file in "${SHARED[@]}"; do
  if [[ ! -f "$ROOT/shared/$file" ]]; then
    echo "[FAIL] Missing shared reference: $file"
    exit 1
  fi
done

echo "[OK] Shared references present"
echo "Validation complete"
