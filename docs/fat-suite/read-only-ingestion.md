# Read-Only Ingestion

## Purpose

These helpers prepare real company documents for the FAT suite without modifying the source files. The default pattern is:

1. keep the original file unchanged
2. copy it into `fat-workspace/imports/`
3. record metadata in a manifest
4. normalize the content into `fat-workspace/context/` only after review

## Source Categories

- COA exports -> `fat-workspace/imports/coa/`
- close checklist exports -> `fat-workspace/imports/checklists/`
- accounting policy files -> `fat-workspace/imports/policies/accounting/`
- tax policy files -> `fat-workspace/imports/policies/tax/`
- finance operational files -> `fat-workspace/imports/finance/`
- tax working files -> `fat-workspace/imports/tax/`
- reporting source files -> `fat-workspace/imports/reporting/`

## Ingestion Rules

- Never edit original company files in place.
- Preserve original filenames when practical.
- Store ingestion metadata in `manifest.csv` in the target import folder.
- Normalize into context files only after the copied source is available.
- Treat imports as read-only evidence, not as working files.

## Suggested Flow

### COA

1. Register the source file into `imports/coa/`.
2. Review account structure and naming.
3. Build `context/chart-of-accounts.md` from the copied source.

### Closing Checklist

1. Register the source file into `imports/checklists/`.
2. Convert checklist rows into step-based close tasks.
3. Update `context/closing-checklist.md`.

### Policies

1. Register accounting and tax policy files separately.
2. Extract operational rules.
3. Update `accounting-policy.md` and `tax-policy.md`.

## Validation Expectations

Before using a new source file in production prompts:
- verify the copied file exists in the correct import folder
- verify the manifest row exists
- verify the normalized context file states what source it was derived from
