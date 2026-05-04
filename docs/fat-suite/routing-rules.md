# Routing Rules

## Read-First Order

Before any specialist work, read in this order when available:
1. `fat-workspace/context/company-profile.md`
2. `fat-workspace/context/chart-of-accounts.md`
3. `fat-workspace/context/accounting-policy.md`
4. `fat-workspace/context/tax-policy.md`
5. `fat-workspace/context/closing-checklist.md`
6. Current period files under `fat-workspace/periods/YYYY-MM/`

## Routing Map

- `fat-accounting`
  - account mapping
  - journal draft
  - accrual
  - prepaid
  - reconciliation
  - close adjustment

- `fat-tax`
  - VAT or PPN
  - withholding tax
  - tax support documents
  - tax working paper
  - tax treatment

- `fat-finance`
  - payment preparation
  - cashflow summary
  - AP or AR follow-up
  - budget vs actual operational review

- `fat-reporting`
  - variance commentary
  - management pack summary
  - consistency check across schedules and reports

- `fat-coordinator`
  - close status
  - blockers
  - next step planning
  - ambiguous requests
  - cross-functional requests

## Ambiguous Request Rule

If the request mixes domains, `fat-coordinator` should:
1. identify the primary goal
2. identify the dependent domains
3. route sequentially or recommend a handoff order

## Handoff Examples

- Payment issue with tax implication: finance first, then tax.
- Journal for tax-sensitive transaction: accounting first, then tax review.
- Variance caused by incorrect accrual: accounting first, then reporting.
