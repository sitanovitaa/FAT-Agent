# Demo Sample Documents

These sample documents are included so the FAT suite can be demonstrated in Codex before real company files are available.

## Sample Files

- `fat-workspace/imports/coa/demo-coa.csv`
- `fat-workspace/imports/checklists/demo-closing-checklist.csv`
- `fat-workspace/imports/policies/accounting/demo-accounting-policy.md`
- `fat-workspace/imports/policies/tax/demo-tax-policy.md`

## Suggested Demo Prompts

### Build context from sample files

```text
Use fat-company-context. Read fat-workspace/imports/coa/demo-coa.csv and build fat-workspace/context/chart-of-accounts.md.
```

```text
Use fat-company-context. Read fat-workspace/imports/policies/accounting/demo-accounting-policy.md and build fat-workspace/context/accounting-policy.md.
```

```text
Use fat-company-context. Read fat-workspace/imports/policies/tax/demo-tax-policy.md and build fat-workspace/context/tax-policy.md.
```

```text
Use fat-company-context. Read fat-workspace/imports/checklists/demo-closing-checklist.csv and build fat-workspace/context/closing-checklist.md.
```

### Demo specialist skills

```text
Use fat-accounting. Based on the current COA and accounting policy, where should monthly electricity accrual be posted?
```

```text
Use fat-tax. Based on the current tax policy, what documents are required before confirming input VAT recognition?
```

```text
Use fat-coordinator. Based on the current closing checklist, what are the likely blockers for monthly close?
```
