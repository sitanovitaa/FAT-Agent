#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="${0:A:h}"
PROJECT_ROOT="${SCRIPT_DIR:h}"
SOURCE_DIR="$PROJECT_ROOT/codex-skills"
TARGET_DIR="$HOME/.codex/skills"

SKILLS=(
  fat-coordinator
  fat-company-context
  fat-finance
  fat-accounting
  fat-tax
  fat-reporting
)

mkdir -p "$TARGET_DIR"

for skill in "${SKILLS[@]}"; do
  rm -rf "$TARGET_DIR/$skill"
  cp -R "$SOURCE_DIR/$skill" "$TARGET_DIR/$skill"
done

echo "Installed FAT skills into $TARGET_DIR"
