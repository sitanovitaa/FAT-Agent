# Tax Policy

Status: Draft
Confidence: High
Source: `fat-workspace/imports/policies/tax/demo-tax-policy.md`
Last updated from source: 2026-05-04

## Purpose

This file translates the source tax policy into operational guidance for recurring VAT/PPN, withholding tax, and monthly compliance review.

## Source File Mapping

| Source File | Target Context File | Source Purpose |
| --- | --- | --- |
| `fat-workspace/imports/policies/tax/demo-tax-policy.md` | `fat-workspace/context/tax-policy.md` | Basic recurring tax rules for VAT and withholding review. |

## Tax Types in Scope

| Tax Type | In Scope Rule | Primary Evidence | Review Label Guidance |
| --- | --- | --- | --- |
| VAT / PPN Input | Input VAT may be recognized only when supported by a valid tax invoice and the underlying commercial invoice. | Valid tax invoice and commercial invoice. | `Pass` only when both tax invoice and commercial invoice are complete. |
| VAT / PPN Output | Output VAT must be recognized for taxable sales according to invoicing and tax rules in force. | Customer billing summary, sales invoice, and output VAT reconciliation. | `Review Needed` when billing and output VAT records do not reconcile. |
| Withholding Tax | Professional services and certain rentals must be checked for withholding tax applicability. | Vendor invoice, vendor tax status if relevant, and contract or service description. | `Review Needed` or `Escalate` when applicability cannot be determined from support. |

## Treatment Rules

### VAT / PPN Input

Tax treatment:
- Recognize input VAT only when there is a valid tax invoice and an underlying commercial invoice.
- If the tax invoice is missing, do not treat input VAT as ready for final compliance use.

Required support:
- Valid tax invoice.
- Underlying commercial invoice.
- Evidence that the purchase relates to the transaction being reviewed.

Common risks:
- Input VAT is claimed from a commercial invoice without a valid tax invoice.
- Tax invoice details do not match the underlying commercial invoice.
- Material input VAT is left unresolved near filing.

Escalate when:
- Supporting tax documents are missing and the amount is material.
- The policy does not clearly cover the transaction type.
- Treatment could materially affect monthly tax compliance.

Review label guidance:
- `Pass`: valid tax invoice and commercial invoice are complete and consistent.
- `Review Needed`: tax invoice or invoice matching needs follow-up before filing.
- `Escalate`: missing or conflicting support could materially affect compliance.

### VAT / PPN Output

Tax treatment:
- Recognize output VAT for taxable sales according to invoicing and tax rules in force.
- Reconcile output VAT monthly to the customer billing summary.

Required support:
- Customer billing summary.
- Sales invoice or taxable sales support.
- Output VAT reconciliation for the month.

Common risks:
- Taxable sales are billed but output VAT is not recognized.
- Output VAT ledger does not reconcile to customer billing summary.
- Billing corrections or credit notes are not reflected in the monthly reconciliation.

Escalate when:
- Output VAT reconciliation does not tie to customer billing and the difference is material.
- Taxable status of sales is unclear.
- Treatment could materially affect monthly tax compliance.

Review label guidance:
- `Pass`: taxable sales support and output VAT reconciliation are complete.
- `Review Needed`: billing summary, sales support, or reconciliation needs follow-up before filing.
- `Escalate`: material discrepancy or unclear taxable status requires supervisor or tax reviewer decision.

### Withholding Tax

Tax treatment:
- Check professional services and certain rentals for withholding tax applicability.
- Do not assume no withholding tax applies when support is incomplete.

Minimum support:
- Vendor invoice.
- Vendor tax status if relevant.
- Contract or service description.

Common risks:
- Professional service invoices are processed without WHT review.
- Rental transactions are posted without checking withholding tax applicability.
- Vendor tax status or service description is missing.

Escalate when:
- The policy does not clearly cover the transaction type.
- Supporting tax documents are missing.
- Treatment could materially affect monthly tax compliance.

Review label guidance:
- `Pass`: treatment and support are complete.
- `Review Needed`: follow-up is required before filing.
- `Escalate`: supervisor or tax reviewer decision is required.

## Documentation Rules

Minimum invoice support:
- Commercial invoice for underlying transaction support.
- Valid tax invoice when recognizing input VAT.
- Customer billing summary and sales invoice support for output VAT.
- Vendor invoice for withholding tax review.

Vendor/customer tax documentation:
- Vendor tax status when relevant to withholding tax.
- Contract or service description for professional services and rentals.
- Customer billing summary for output VAT reconciliation.

Archive expectation:
- The source policy does not specify an archive path or system.
- Keep tax support traceable to the reviewed transaction, period, and tax treatment until a formal archive method is documented.

## Compliance Timing and Review

Monthly review rules:
- Reconcile output VAT monthly to customer billing summary.
- Resolve missing input VAT tax invoices before treating input VAT as ready for filing.
- Check professional services and relevant rentals for withholding tax applicability before filing.

Reviewer / approver:
- The source policy refers to supervisor or tax reviewer decision for escalations.
- Specific reviewer and approver names are not provided in the source policy.

## Review Labels

| Label | When to Use | Required Action |
| --- | --- | --- |
| `Pass` | Treatment and support are complete. | Proceed with tax review conclusion or filing support. |
| `Review Needed` | Follow-up is required before filing. | Identify missing support, owner, and required resolution. |
| `Escalate` | Supervisor or tax reviewer decision is required. | Escalate before finalizing treatment or compliance position. |

## Escalation Rules

- Escalate when policy does not clearly cover the transaction type.
- Escalate when supporting tax documents are missing and the item is material.
- Escalate when treatment could materially affect monthly tax compliance.
- Escalate when VAT or WHT support conflicts with invoice, billing, contract, or service description evidence.

## Known Ambiguities and Gaps

- The source policy does not provide VAT rates, WHT rates, tax article references, or filing deadlines.
- The source policy does not define materiality thresholds for choosing between `Review Needed` and `Escalate`.
- The source policy does not provide a tax document archive path or retention method.
- The source policy does not name the supervisor, tax reviewer, reviewer, or approver.
- The source policy does not define detailed taxable/non-taxable sales criteria beyond requiring output VAT for taxable sales.
- The source policy does not list all rental categories or professional services subject to withholding tax.
