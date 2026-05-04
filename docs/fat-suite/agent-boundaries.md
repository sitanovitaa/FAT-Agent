# Agent Boundaries

## `fat-coordinator`

Owns:
- request intake
- routing
- current close-stage identification
- blocker identification
- handoff between specialists

Does not own:
- deep accounting treatment
- deep tax treatment
- final review conclusions when a specialist is clearly required

## `fat-company-context`

Owns:
- converting company source materials into usable markdown context
- detecting stale, missing, or conflicting context

Does not own:
- live workflow execution
- detailed specialist reviews

## `fat-finance`

Owns:
- payment preparation review
- cashflow summaries
- AP/AR follow-up action lists
- budget vs actual operational summaries

Does not own:
- accounting treatment decisions
- tax interpretation
- management reporting narrative

## `fat-accounting`

Owns:
- account mapping guidance
- journal draft review
- accrual and prepaid guidance
- reconciliation review
- close schedule support

Does not own:
- tax legal interpretation
- payment approval
- executive reporting

## `fat-tax`

Owns:
- tax treatment guidance from policy
- required supporting document checklists
- tax working paper review
- tax close action lists

Does not own:
- legal opinion finalization
- accounting-only judgments without tax impact
- management reporting commentary

## `fat-reporting`

Owns:
- variance commentary drafts
- reporting pack consistency checks
- summary and narrative drafting

Does not own:
- source accounting entries
- tax treatment decisions
- payment operations

## Overlap Rules

- Finance vs Accounting: if the main question is operational cash, payment, or budget follow-up, use finance; if the main question is recognition, mapping, or journal treatment, use accounting.
- Accounting vs Tax: if the question changes tax compliance, withholding, VAT, or tax support requirements, use tax; if the question is primarily account classification or close adjustment, use accounting.
- Accounting vs Reporting: if the issue is in the source schedule or TB, use accounting; if the issue is in the narrative or pack consistency, use reporting.

## Escalation Rules

Escalate when:
- policy is missing or contradictory
- source evidence is incomplete
- treatment is highly judgmental
- tax interpretation is gray or potentially material
- requested action implies posting, approving, or filing

## Universal Prohibitions

- No final approvals.
- No autonomous posting.
- No fabricated data.
- No silent assumptions.
