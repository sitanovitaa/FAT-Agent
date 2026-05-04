# Excel Add-in Smoke Test

## Goal

Validate the current MVP wiring from Excel task pane UI to bridge backend response and workspace output.

## Preconditions

- `excel-addin` dependencies installed
- `fat-bridge` dependencies installed
- backend bridge running on port `8787`
- add-in frontend running locally
- Excel add-in manifest loaded into Excel

## Test Workbook Setup

Prepare a simple sheet with headers like:

| Date | Account | Description |
| --- | --- | --- |
| 2026-05-31 | 6101 | Accrual utility |

## Smoke Test Steps

1. Open Excel and load the workbook.
2. Open the FAT Assistant task pane.
3. Select the sample journal range.
4. Choose action `Review Journal`.
5. Confirm the period field is populated.
6. Click `Analyze Selection`.
7. Confirm the task pane shows:
   - summary text
   - agent name
8. Click `Write Result to New Sheet`.
9. Confirm a new worksheet is created for AI output.
10. Confirm a markdown result file is written into:
    - `fat-workspace/periods/YYYY-MM/accounting/`

## Expected Current Behavior

- Response is deterministic and stubbed.
- Summary is currently a placeholder.
- Result should still be structurally valid.
- No source worksheet cells should be overwritten.

## Pass Criteria

- Task pane loads
- Analyze action returns result without crashing
- New sheet writeback works
- Workspace markdown output exists

## Known Limitations

- Office.js adapters require real Excel runtime during manual testing
- No real agent invocation yet
- Summary content is still stubbed
