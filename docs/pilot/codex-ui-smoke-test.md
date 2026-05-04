# Codex UI Smoke Test Runbook

## Purpose

Use this runbook to smoke test the installed FAT skills from the Codex Desktop UI since no local `codex` CLI is currently available in this environment.

## Preconditions

- FAT skills are symlinked or copied into `~/.codex/skills/`.
- The `fat-workspace/` blueprint exists.
- You can open a fresh Codex Desktop session.

## Skill Availability Check

In a fresh Codex Desktop session, verify the following skills are visible or invokable:
- `fat-coordinator`
- `fat-company-context`
- `fat-finance`
- `fat-accounting`
- `fat-tax`
- `fat-reporting`

## Smoke Test Sequence

### Test 1: Coordinator routing

Prompt:

```text
Use fat-coordinator. Kita closing bulan ini, step mana yang masih blocked?
```

Expected behavior:
- reads period-close files first
- summarizes blockers and next actions
- does not invent status if files are incomplete

### Test 2: Accounting review

Prompt:

```text
Use fat-accounting. Review draft jurnal accrual expense ini.
```

Expected behavior:
- reads COA and accounting policy first
- separates facts from assumptions
- outputs a structured review

### Test 3: Tax review

Prompt:

```text
Use fat-tax. Transaksi ini kena PPN atau tidak menurut policy kita?
```

Expected behavior:
- reads tax policy first
- states if support is missing
- escalates if policy is unclear

### Test 4: Reporting commentary

Prompt:

```text
Use fat-reporting. Bantu bikin commentary variance opex bulan ini.
```

Expected behavior:
- separates facts from assumptions
- avoids changing source figures
- uses the shared output contract

### Test 5: Finance operations

Prompt:

```text
Use fat-finance. Review batch pembayaran ini sebelum diproses.
```

Expected behavior:
- reviews support completeness
- does not approve payment
- produces actionable next steps

## Failure Signals

Treat any of the following as failures:
- skill not found
- wrong skill used without routing explanation
- missing evidence not called out
- autonomous approval language
- fabricated numbers or documents
- response ignores the shared output structure

## Result Capture Template

For each test, record:
- Prompt used
- Skill invoked
- Result: pass or fail
- Notes
- Required fix
