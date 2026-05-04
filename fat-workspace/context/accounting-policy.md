# Accounting Policy

Status: Draft
Confidence: High
Source: `fat-workspace/imports/policies/accounting/demo-accounting-policy.md`
Last updated from source: 2026-05-04

## Purpose

This file translates the source accounting policy into operational rules for FAT review, drafting, and monthly close support.

## Source File Mapping

| Source File | Target Context File | Source Purpose |
| --- | --- | --- |
| `fat-workspace/imports/policies/accounting/demo-accounting-policy.md` | `fat-workspace/context/accounting-policy.md` | Practical accounting rules for recurring monthly close activities. |

## Core Policies

### Account Mapping

Recognition rule:
- Classify every transaction using the approved chart of accounts.
- When two accounts appear similar, select the account whose purpose best matches the underlying transaction substance.
- If the transaction substance is unclear, do not force a final mapping.

Required evidence:
- Transaction description or business substance.
- Approved chart of accounts reference.
- Supporting document that shows the transaction nature, counterparty, period, and amount.

Operational rule:
- Use `Pass` only when the support is complete and the account treatment is clear.
- Use `Review Needed` when support is incomplete or the treatment needs follow-up.
- Use `Escalate` when the mapping has material ambiguity or a policy conflict.

Escalate when:
- The source evidence does not explain the business substance.
- Two or more accounts remain plausible after reviewing the COA purpose.
- The account selection could materially affect revenue, expense, asset, liability, equity, tax, or reporting classification.

### Accruals

Recognition rule:
- Record an accrual when an expense has been incurred in the current period but the invoice has not yet been received.

Minimum support:
- Service period evidence.
- Basis of estimate.
- Reviewer approval.

Reversal expectation:
- Reverse the accrual on the first day of the following month unless another policy states otherwise.

Common risks:
- Accrual recorded without evidence that the service was consumed in the current period.
- Estimate basis is missing or unsupported.
- Reversal is not tracked, causing duplicate expense when the invoice arrives.

Review label guidance:
- `Pass`: service period, estimate basis, reviewer approval, and reversal timing are clear.
- `Review Needed`: one or more required support items are missing or need clarification.
- `Escalate`: estimate is material, unusual, disputed, or conflicts with another policy.

### Prepaids

Recognition rule:
- Record a payment as prepaid when payment is made before the economic benefit period starts or when the benefit period extends beyond the current month.

Amortization basis:
- Amortize evenly over the coverage period unless the contract requires a different basis.

Minimum support:
- Payment evidence.
- Contract, invoice, policy, or other document showing the coverage or benefit period.
- Amortization schedule.

Common risks:
- Expense is recognized immediately even though the benefit extends beyond the current month.
- Coverage period is unknown.
- Contract requires a different amortization basis but the schedule uses straight-line amortization.

Review label guidance:
- `Pass`: payment timing, coverage period, and amortization basis are clear.
- `Review Needed`: coverage period or amortization schedule is incomplete.
- `Escalate`: contract basis conflicts with proposed accounting treatment.

### Fixed Assets and Capitalization

Capitalization rule:
- Capitalize office and IT equipment only when useful life exceeds 12 months and unit cost is materially above the small-expense threshold.
- Expense directly to the relevant operating expense account when those capitalization criteria are not met.

Required support:
- Invoice or purchase evidence.
- Description of the asset.
- Useful life assessment.
- Unit cost assessment against the small-expense threshold.
- Relevant operating expense account when not capitalized.

Common risks:
- Small equipment is capitalized without meeting the threshold.
- Long-lived equipment is expensed without review.
- The small-expense threshold amount is not documented in the source policy.

Review label guidance:
- `Pass`: useful life exceeds 12 months, unit cost threshold is clearly met, and support is complete.
- `Review Needed`: useful life or threshold assessment is incomplete.
- `Escalate`: material asset treatment is unclear or conflicts with policy.

### Cutoff

Period cutoff rule:
- Recognize expenses and revenue in the period they relate to.
- When invoice date and service period differ, use service period as the primary accounting basis.

Required evidence:
- Invoice date.
- Service or benefit period.
- Delivery, acceptance, contract, usage, or other period evidence.

Escalate when:
- Service period cannot be determined.
- Invoice date and service period indicate different accounting periods and the amount is material.
- Revenue or expense recognition conflicts with another policy or contract term.

Review label guidance:
- `Pass`: service period is clear and treatment follows that period.
- `Review Needed`: period evidence is incomplete or needs follow-up.
- `Escalate`: cutoff ambiguity is material or conflicts with policy.

## Approval and Review Rules

| Label | When to Use | Required Action |
| --- | --- | --- |
| `Pass` | Support is complete and accounting treatment is clear. | Proceed with draft treatment or review conclusion. |
| `Review Needed` | Support or treatment needs follow-up. | Identify missing support, open question, and owner before final conclusion. |
| `Escalate` | There is material ambiguity or policy conflict. | Escalate to Accounting Lead or appropriate reviewer before finalizing. |

## Operational Checklist

- Confirm the approved chart of accounts before mapping a transaction.
- Confirm transaction substance before choosing between similar accounts.
- For accruals, confirm service period evidence, estimate basis, reviewer approval, and next-month reversal.
- For prepaids, confirm payment timing, coverage period, contract basis, and amortization schedule.
- For fixed assets, confirm useful life, unit cost threshold assessment, and support for capitalizing or expensing.
- For cutoff, prioritize service period over invoice date when they differ.
- Apply `Review Needed` or `Escalate` when evidence is missing, unclear, material, or conflicting.

## Known Ambiguities and Gaps

- The source policy refers to the approved chart of accounts but does not identify the specific COA version or effective date.
- The source policy references an Accounting Lead but does not name the reviewer, approver, or approval workflow.
- The capitalization policy says unit cost must be materially above the small-expense threshold, but the threshold amount is not provided.
- The source policy does not define materiality thresholds for escalation.
- The source policy does not provide detailed revenue recognition rules beyond period cutoff.
- The source policy does not define exceptions to standard first-day-next-month accrual reversal.
