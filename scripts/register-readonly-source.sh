#!/bin/zsh
set -euo pipefail

if [[ $# -lt 2 || $# -gt 3 ]]; then
  echo "Usage: zsh register-readonly-source.sh <source-file> <target-category-dir> [notes]"
  exit 1
fi

SOURCE_FILE="$1"
TARGET_DIR="$2"
NOTES="${3:-}"

if [[ ! -f "$SOURCE_FILE" ]]; then
  echo "Source file not found: $SOURCE_FILE"
  exit 1
fi

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Target directory not found: $TARGET_DIR"
  exit 1
fi

MANIFEST="$TARGET_DIR/manifest.csv"
if [[ ! -f "$MANIFEST" ]]; then
  echo "Manifest not found: $MANIFEST"
  exit 1
fi

STAMP="$(date +%Y%m%d-%H%M%S)"
BASE_NAME="$(basename "$SOURCE_FILE")"
COPIED_FILE="$TARGET_DIR/${STAMP}-${BASE_NAME}"

cp "$SOURCE_FILE" "$COPIED_FILE"

CATEGORY="$(basename "$TARGET_DIR")"
printf '"%s","%s","%s","%s","%s"\n' "$SOURCE_FILE" "$COPIED_FILE" "$STAMP" "$CATEGORY" "$NOTES" >> "$MANIFEST"

echo "Registered read-only source: $COPIED_FILE"
