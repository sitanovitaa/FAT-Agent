# Closing Checklist

Status: Draft
Confidence: High
Source: `fat-workspace/imports/checklists/demo-closing-checklist.csv`
Last updated from source: 2026-05-04

## Purpose

This file translates the source close checklist into step-based operational items for recurring monthly close coordination.

## Source File Mapping

| Source File | Target Context File | Rows Used | Source Structure |
| --- | --- | ---: | --- |
| `fat-workspace/imports/checklists/demo-closing-checklist.csv` | `fat-workspace/context/closing-checklist.md` | 8 | `step_id`, `function`, `task`, `owner`, `dependency`, `evidence_required`, `due_timing`, `notes` |

## Status Values

Use only these status values when tracking period close progress:

| Status | Meaning | Required Action |
| --- | --- | --- |
| `not_started` | Step has not begun. | Confirm dependency readiness and owner. |
| `in_progress` | Step is being worked on. | Track evidence collection and blockers. |
| `blocked` | Step cannot proceed or finish. | Add blocker to issue log and assign follow-up owner. |
| `done` | Step is complete. | Confirm required evidence is archived or linked. |

## Checklist Table

| Step ID | Function | Task | Owner | Dependency | Evidence Required | Due Timing | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CL-001 | Accounting | Lock prior month transaction posting | Accounting Lead | None | System lock confirmation | D-1 | Do before close journals are prepared. |
| CL-002 | Finance | Download and archive bank statements | Finance Officer | None | Bank statements PDF and bank balance summary | D0 morning | Required for bank reconciliation. |
| CL-003 | Accounting | Prepare bank reconciliation | Accounting Officer | CL-002 | Signed reconciliation workbook | D0 afternoon | Escalate unexplained reconciling items. |
| CL-004 | Accounting | Post recurring accruals | Accounting Lead | CL-001 | Accrual support schedule | D1 | Utilities, rent, and professional fees. |
| CL-005 | Tax | Review VAT input and output support | Tax Officer | CL-004 | VAT recap and tax invoice support | D1 | Flag missing tax invoices immediately. |
| CL-006 | Accounting | Review prepaid amortization and depreciation | Accounting Officer | CL-004 | Prepaid schedule and asset register | D1 | Use approved schedules only. |
| CL-007 | Reporting | Prepare draft P&L and balance sheet variance analysis | Reporting Analyst | CL-003 | Draft management pack | D2 | Coordinate with accounting for unusual movements. |
| CL-008 | Coordinator | Update issue log and blocked items | FAT Coordinator | CL-003 | Updated issue log | D2 | Track blockers for management follow-up. |

## Dependency Map

| Step ID | Must Wait For | Operational Gate |
| --- | --- | --- |
| CL-001 | None | Complete before close journals are prepared. |
| CL-002 | None | Complete before bank reconciliation starts. |
| CL-003 | CL-002 | Bank statements and bank balance summary must be downloaded and archived. |
| CL-004 | CL-001 | Prior month posting must be locked before recurring accruals are posted. |
| CL-005 | CL-004 | Accruals should be posted before VAT support review. |
| CL-006 | CL-004 | Accruals should be posted before prepaid amortization and depreciation review. |
| CL-007 | CL-003 | Bank reconciliation must be ready before draft P&L and balance sheet variance analysis. |
| CL-008 | CL-003 | Bank reconciliation status should be known before updating issue log and blockers. |

## Evidence Gates

- CL-001 is not `done` without system lock confirmation.
- CL-002 is not `done` without bank statements PDF and bank balance summary.
- CL-003 is not `done` without a signed reconciliation workbook.
- CL-004 is not `done` without an accrual support schedule.
- CL-005 is not `done` without VAT recap and tax invoice support.
- CL-006 is not `done` without prepaid schedule and asset register.
- CL-007 is not `done` without a draft management pack.
- CL-008 is not `done` without an updated issue log.

## Function Responsibilities

| Function | Responsible Steps | Primary Close Responsibility |
| --- | --- | --- |
| Accounting | CL-001, CL-003, CL-004, CL-006 | Lock posting, reconcile bank, post recurring accruals, and review schedules for prepaids/depreciation. |
| Finance | CL-002 | Download and archive bank statements and bank balance summary. |
| Tax | CL-005 | Review VAT input and output support and flag missing tax invoices. |
| Reporting | CL-007 | Prepare draft P&L and balance sheet variance analysis. |
| Coordinator | CL-008 | Maintain issue log and track blocked items for management follow-up. |

## Review Triggers

- Review Needed: Any step marked `done` without the listed evidence should be reopened or moved back to `in_progress`.
- Review Needed: Any dependency mismatch should be corrected before downstream steps are finalized.
- Review Needed: Missing tax invoices in CL-005 must be flagged immediately.
- Escalate: Unexplained reconciling items in CL-003 require escalation before bank reconciliation is finalized.
- Escalate: Blocked items in CL-008 that affect close completion should be tracked for management follow-up.

## Operational Close Sequence

1. D-1: CL-001 locks prior month posting before close journals are prepared.
2. D0 morning: CL-002 downloads and archives bank evidence.
3. D0 afternoon: CL-003 prepares bank reconciliation using CL-002 evidence.
4. D1: CL-004 posts recurring accruals after CL-001 lock.
5. D1: CL-005 reviews VAT support after CL-004.
6. D1: CL-006 reviews prepaid amortization and depreciation after CL-004.
7. D2: CL-007 prepares draft management pack after CL-003.
8. D2: CL-008 updates issue log and blocked items after CL-003.

## Known Ambiguities and Gaps

- The source checklist does not define the calendar meaning of D-1, D0, D1, or D2.
- The source checklist does not provide archive paths, file naming conventions, or evidence retention rules.
- The source checklist does not name backup owners or approvers.
- The source checklist does not define sign-off criteria beyond the evidence required column.
- The source checklist does not specify how blocked items should be prioritized or aged in the issue log.
