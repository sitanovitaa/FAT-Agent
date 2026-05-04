# Demo Tax Policy

## Purpose

This demo policy provides basic recurring tax rules for VAT and withholding review.

## 1. VAT / PPN Input

- Input VAT may be recognized only when supported by a valid tax invoice and underlying commercial invoice.
- Missing tax invoice means the item must be flagged as `Review Needed` or `Escalate` depending on materiality.

## 2. VAT / PPN Output

- Output VAT must be recognized for taxable sales according to invoicing and tax rules in force.
- Reconcile output VAT monthly to customer billing summary.

## 3. Withholding Tax

- Professional services and certain rentals must be checked for withholding tax applicability.
- Minimum support:
  - vendor invoice
  - vendor tax status if relevant
  - contract or service description

## 4. Escalation Rules

Escalate when:
- policy does not clearly cover the transaction type
- supporting tax documents are missing
- treatment could materially affect monthly tax compliance

## 5. Review Labels

- `Pass`: treatment and support are complete
- `Review Needed`: follow-up required before filing
- `Escalate`: supervisor or tax reviewer decision required
