# Close State Schema

## Purpose

This document defines the minimum structure for period-close status tracking so `fat-coordinator` can reason about current progress, blockers, and next actions.

## Files

- `fat-workspace/periods/YYYY-MM/close-status.md`
- `fat-workspace/periods/YYYY-MM/issue-log.md`

## `close-status.md`

### Required Columns

| Column | Description | Example |
| --- | --- | --- |
| `Step ID` | Unique close task identifier | `CL-001` |
| `Function` | Owning function | `Accounting` |
| `Task` | Actionable task description | `Review bank reconciliation` |
| `Owner` | Person responsible | `Accounting Lead` |
| `Status` | `not_started`, `in_progress`, `blocked`, `done` | `blocked` |
| `Due Date` | Planned completion date | `2026-05-03` |
| `Dependency` | Prior task or input needed | `Bank statement upload` |
| `Evidence` | Required support or output | `Signed recon file` |
| `Notes` | Current remarks or follow-up | `Waiting for treasury support` |

### Interpretation Rules

- `blocked` means the task cannot move without external input, evidence, or dependency completion.
- `in_progress` means active work is underway, not merely assigned.
- `done` requires evidence to exist or be explicitly referenced.
- If evidence is blank for a completed step, agents should flag a review issue.

## `issue-log.md`

### Required Columns

| Column | Description | Example |
| --- | --- | --- |
| `Issue ID` | Unique issue identifier | `ISS-003` |
| `Function` | Primary impacted function | `Tax` |
| `Severity` | `low`, `medium`, `high`, `critical` | `high` |
| `Issue` | Short issue description | `Missing withholding support` |
| `Owner` | Person accountable for resolution | `Tax Officer` |
| `Blocker` | `yes` or `no` | `yes` |
| `Next Action` | Immediate next step | `Request vendor document` |
| `Due Date` | Target resolution date | `2026-05-02` |
| `Status` | `open`, `monitoring`, `resolved` | `open` |

### Interpretation Rules

- `Blocker = yes` means the issue affects close progress or period reporting quality.
- `critical` severity should always be surfaced by `fat-coordinator` in the summary.
- `resolved` issues should retain the original record for audit trail.

## Coordinator Expectations

`fat-coordinator` should be able to answer:
- What steps are blocked?
- Which issues are preventing completion?
- What is the next logical action by function?
- Which owners need follow-up today?

## Data Quality Rules

- Use one row per task or issue.
- Avoid merged cells or freeform layouts.
- Keep statuses normalized to the allowed values.
- Prefer explicit due dates over relative text.
