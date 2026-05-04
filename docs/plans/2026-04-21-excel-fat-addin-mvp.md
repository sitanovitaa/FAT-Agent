# Excel FAT Add-in MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Build an Excel Add-in MVP plus backend bridge that lets FAT users analyze a selected Excel range with the existing FAT agent suite and save reusable outputs to `fat-workspace`.

**Architecture:** The implementation is split into two deliverables: an `excel-addin/` frontend using Office.js + React/TypeScript, and a `fat-bridge/` backend using Node.js/TypeScript. The add-in is intentionally thin: it only reads workbook context, selected range data, and user intent. All routing, guardrails, and workspace writes happen in the backend bridge, which maps actions to FAT specialists and persists outputs into `fat-workspace`.

**Tech Stack:** TypeScript, React, Office.js, Vite, Node.js, Express, Zod, Vitest, Testing Library, markdown file output.

---

## Implementation Principles

- Keep v1 read-only against Excel source sheets.
- Never write back into the original selected range.
- Write reusable outputs into `fat-workspace/` and optionally to a new worksheet.
- Start with 3 actions only: `review_journal`, `check_tax`, `draft_commentary`.
- Use static routers first; do not attempt dynamic LLM orchestration in the first code pass.

## Target Project Structure

```text
/Users/sitanovita/SILIWANGI/fat-agent-suite/
├── docs/
├── fat-workspace/
├── codex-skills/
├── excel-addin/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── manifest.xml
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── components/
│       ├── office/
│       ├── lib/
│       └── types/
└── fat-bridge/
    ├── package.json
    ├── tsconfig.json
    ├── vitest.config.ts
    └── src/
        ├── server.ts
        ├── app.ts
        ├── routes/
        ├── router/
        ├── formatters/
        ├── workspace/
        ├── types/
        └── validators/
```

### Task 1: Create Excel Add-in project skeleton

**Files:**
- Create: `excel-addin/package.json`
- Create: `excel-addin/tsconfig.json`
- Create: `excel-addin/vite.config.ts`
- Create: `excel-addin/manifest.xml`
- Create: `excel-addin/src/main.tsx`
- Create: `excel-addin/src/App.tsx`

**Step 1: Write the failing test**

Create a basic app render test.

```tsx
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders FAT Assistant heading', () => {
  render(<App />)
  expect(screen.getByText('FAT Assistant')).toBeInTheDocument()
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- App.test.tsx`
Expected: FAIL because project files do not exist yet

**Step 3: Write minimal implementation**

Create a React/Vite app with `App.tsx` rendering:

```tsx
export default function App() {
  return <h1>FAT Assistant</h1>
}
```

**Step 4: Run test to verify it passes**

Run: `npm test -- App.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin
git commit -m "feat: scaffold excel add-in app"
```

### Task 2: Create backend bridge project skeleton

**Files:**
- Create: `fat-bridge/package.json`
- Create: `fat-bridge/tsconfig.json`
- Create: `fat-bridge/vitest.config.ts`
- Create: `fat-bridge/src/app.ts`
- Create: `fat-bridge/src/server.ts`
- Test: `fat-bridge/src/app.test.ts`

**Step 1: Write the failing test**

```ts
import request from 'supertest'
import { app } from './app'

test('GET /health returns ok', async () => {
  const response = await request(app).get('/health')
  expect(response.status).toBe(200)
  expect(response.body).toEqual({ status: 'ok' })
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- app.test.ts`
Expected: FAIL because Express app does not exist

**Step 3: Write minimal implementation**

Create Express app:

```ts
import express from 'express'

export const app = express()
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})
```

**Step 4: Run test to verify it passes**

Run: `npm test -- app.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge
git commit -m "feat: scaffold fat bridge server"
```

### Task 3: Define shared request and response types

**Files:**
- Create: `excel-addin/src/types/fat.ts`
- Create: `fat-bridge/src/types/contracts.ts`
- Test: `fat-bridge/src/types/contracts.test.ts`

**Step 1: Write the failing test**

```ts
import { fatActionSchema } from './contracts'

test('accepts review_journal action', () => {
  expect(fatActionSchema.parse('review_journal')).toBe('review_journal')
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- contracts.test.ts`
Expected: FAIL because schema is missing

**Step 3: Write minimal implementation**

Use Zod to define:
- `review_journal`
- `check_tax`
- `draft_commentary`

Also define request types for:
- workbook name
- worksheet name
- range address
- headers
- rows
- period
- userNote

**Step 4: Run test to verify it passes**

Run: `npm test -- contracts.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src/types fat-bridge/src/types
git commit -m "feat: add add-in bridge contracts"
```

### Task 4: Build add-in UI skeleton

**Files:**
- Modify: `excel-addin/src/App.tsx`
- Create: `excel-addin/src/components/ActionSelector.tsx`
- Create: `excel-addin/src/components/PeriodInput.tsx`
- Create: `excel-addin/src/components/ResultPanel.tsx`
- Test: `excel-addin/src/App.test.tsx`

**Step 1: Write the failing test**

Add expectations for:
- action selector label
- period input
- analyze button

**Step 2: Run test to verify it fails**

Run: `npm test -- App.test.tsx`
Expected: FAIL because controls are missing

**Step 3: Write minimal implementation**

Render a panel with:
- heading
- action selector
- period field
- note textarea
- analyze buttons
- result section placeholder

**Step 4: Run test to verify it passes**

Run: `npm test -- App.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src
git commit -m "feat: add task pane ui skeleton"
```

### Task 5: Add Office.js selection reader wrapper

**Files:**
- Create: `excel-addin/src/office/readSelection.ts`
- Create: `excel-addin/src/office/readActiveSheet.ts`
- Create: `excel-addin/src/office/office.types.ts`
- Test: `excel-addin/src/office/readSelection.test.ts`

**Step 1: Write the failing test**

Mock Office workbook selection and expect returned shape:

```ts
expect(result).toEqual({
  workbookName: 'close-may.xlsx',
  worksheetName: 'JE Upload',
  rangeAddress: 'A1:F4',
  headers: ['Date', 'Account'],
  rows: expect.any(Array)
})
```

**Step 2: Run test to verify it fails**

Run: `npm test -- readSelection.test.ts`
Expected: FAIL because wrapper does not exist

**Step 3: Write minimal implementation**

Create a wrapper that:
- reads active workbook name
- reads selected range address
- splits first row into headers
- returns remaining rows as data

**Step 4: Run test to verify it passes**

Run: `npm test -- readSelection.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src/office
git commit -m "feat: add office selection reader"
```

### Task 6: Add bridge API client in add-in

**Files:**
- Create: `excel-addin/src/lib/api.ts`
- Test: `excel-addin/src/lib/api.test.ts`
- Modify: `excel-addin/src/App.tsx`

**Step 1: Write the failing test**

Test that client posts JSON request to `/analyze` and parses structured response.

**Step 2: Run test to verify it fails**

Run: `npm test -- api.test.ts`
Expected: FAIL because client is missing

**Step 3: Write minimal implementation**

Create `analyzeSelection(payload)` using `fetch`.

**Step 4: Run test to verify it passes**

Run: `npm test -- api.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src/lib excel-addin/src/App.tsx
git commit -m "feat: add bridge api client"
```

### Task 7: Add `/analyze` route to bridge

**Files:**
- Create: `fat-bridge/src/routes/analyze.ts`
- Modify: `fat-bridge/src/app.ts`
- Test: `fat-bridge/src/routes/analyze.test.ts`

**Step 1: Write the failing test**

Post a valid payload and expect `200` with `status`, `agent`, and `structuredResult` keys.

**Step 2: Run test to verify it fails**

Run: `npm test -- analyze.test.ts`
Expected: FAIL because route is missing

**Step 3: Write minimal implementation**

Add `/analyze` route that:
- validates payload
- returns placeholder structured result

**Step 4: Run test to verify it passes**

Run: `npm test -- analyze.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge/src/routes fat-bridge/src/app.ts
git commit -m "feat: add analyze route"
```

### Task 8: Build action router in backend

**Files:**
- Create: `fat-bridge/src/router/actionRouter.ts`
- Test: `fat-bridge/src/router/actionRouter.test.ts`

**Step 1: Write the failing test**

```ts
expect(routeAction('review_journal')).toEqual('fat-accounting')
expect(routeAction('check_tax')).toEqual('fat-tax')
expect(routeAction('draft_commentary')).toEqual('fat-reporting')
```

**Step 2: Run test to verify it fails**

Run: `npm test -- actionRouter.test.ts`
Expected: FAIL because router is missing

**Step 3: Write minimal implementation**

Create a deterministic mapping function.

**Step 4: Run test to verify it passes**

Run: `npm test -- actionRouter.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge/src/router
git commit -m "feat: add action router"
```

### Task 9: Build structured response formatter

**Files:**
- Create: `fat-bridge/src/formatters/formatResponse.ts`
- Test: `fat-bridge/src/formatters/formatResponse.test.ts`

**Step 1: Write the failing test**

Test that the formatter returns:
- `status`
- `summary`
- `structuredResult`
- `sheetWriteback`

**Step 2: Run test to verify it fails**

Run: `npm test -- formatResponse.test.ts`
Expected: FAIL because formatter is missing

**Step 3: Write minimal implementation**

Build a formatter that returns stubbed-but-valid response objects using the FAT output contract.

**Step 4: Run test to verify it passes**

Run: `npm test -- formatResponse.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge/src/formatters
git commit -m "feat: add response formatter"
```

### Task 10: Build workspace writer

**Files:**
- Create: `fat-bridge/src/workspace/writeResult.ts`
- Test: `fat-bridge/src/workspace/writeResult.test.ts`

**Step 1: Write the failing test**

Test that a result for `review_journal` writes to:

```text
fat-workspace/periods/2026-05/accounting/
```

and returns the output file path.

**Step 2: Run test to verify it fails**

Run: `npm test -- writeResult.test.ts`
Expected: FAIL because writer is missing

**Step 3: Write minimal implementation**

Create a file writer that:
- resolves action -> folder
- builds timestamped markdown filename
- writes markdown body

**Step 4: Run test to verify it passes**

Run: `npm test -- writeResult.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge/src/workspace
git commit -m "feat: add workspace result writer"
```

### Task 11: Connect `/analyze` route to router, formatter, and writer

**Files:**
- Modify: `fat-bridge/src/routes/analyze.ts`
- Test: `fat-bridge/src/routes/analyze.integration.test.ts`

**Step 1: Write the failing test**

Submit each action payload and verify:
- correct `agent`
- response contains `suggestedOutputFile`
- output file exists

**Step 2: Run test to verify it fails**

Run: `npm test -- analyze.integration.test.ts`
Expected: FAIL because route is still stubbed

**Step 3: Write minimal implementation**

Wire the route to:
- validate payload
- map action
- format result
- write workspace file
- return JSON

**Step 4: Run test to verify it passes**

Run: `npm test -- analyze.integration.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge/src/routes
git commit -m "feat: connect analyze route to backend workflow"
```

### Task 12: Connect add-in buttons to selection reader and API

**Files:**
- Modify: `excel-addin/src/App.tsx`
- Test: `excel-addin/src/App.integration.test.tsx`

**Step 1: Write the failing test**

Simulate clicking `Analyze Selection` and assert:
- selection reader is called
- API client is called
- result panel renders backend summary

**Step 2: Run test to verify it fails**

Run: `npm test -- App.integration.test.tsx`
Expected: FAIL because buttons are not wired

**Step 3: Write minimal implementation**

Wire UI state to:
- read selection
- build request payload
- call API
- render result

**Step 4: Run test to verify it passes**

Run: `npm test -- App.integration.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src/App.tsx
git commit -m "feat: wire add-in analysis flow"
```

### Task 13: Add write-to-new-sheet support

**Files:**
- Create: `excel-addin/src/office/writeResultSheet.ts`
- Modify: `excel-addin/src/App.tsx`
- Test: `excel-addin/src/office/writeResultSheet.test.ts`

**Step 1: Write the failing test**

Test that `sheetWriteback` response data becomes a new worksheet with title and row values.

**Step 2: Run test to verify it fails**

Run: `npm test -- writeResultSheet.test.ts`
Expected: FAIL because writer is missing

**Step 3: Write minimal implementation**

Create a wrapper that:
- creates a new worksheet
- writes a simple 2D array
- never modifies source selection

**Step 4: Run test to verify it passes**

Run: `npm test -- writeResultSheet.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src/office excel-addin/src/App.tsx
git commit -m "feat: add write to new sheet support"
```

### Task 14: Add error handling and empty-selection safeguards

**Files:**
- Modify: `excel-addin/src/App.tsx`
- Modify: `excel-addin/src/office/readSelection.ts`
- Test: `excel-addin/src/App.errors.test.tsx`

**Step 1: Write the failing test**

Test cases:
- no selected data
- missing headers
- backend error

**Step 2: Run test to verify it fails**

Run: `npm test -- App.errors.test.tsx`
Expected: FAIL because states are not handled

**Step 3: Write minimal implementation**

Show user-friendly errors:
- `Please select a non-empty table or range`
- `Unable to analyze selection`
- `Backend request failed`

**Step 4: Run test to verify it passes**

Run: `npm test -- App.errors.test.tsx`
Expected: PASS

**Step 5: Commit**

```bash
git add excel-addin/src
git commit -m "feat: add add-in error handling"
```

### Task 15: Add bridge request validation hardening

**Files:**
- Create: `fat-bridge/src/validators/requestSchema.ts`
- Modify: `fat-bridge/src/routes/analyze.ts`
- Test: `fat-bridge/src/validators/requestSchema.test.ts`

**Step 1: Write the failing test**

Test invalid payloads:
- unknown action
- empty rows
- missing workbook metadata

**Step 2: Run test to verify it fails**

Run: `npm test -- requestSchema.test.ts`
Expected: FAIL because schema is not enforced at route level

**Step 3: Write minimal implementation**

Use Zod to reject malformed payloads with `400` responses.

**Step 4: Run test to verify it passes**

Run: `npm test -- requestSchema.test.ts`
Expected: PASS

**Step 5: Commit**

```bash
git add fat-bridge/src/validators fat-bridge/src/routes
git commit -m "feat: validate add-in payloads"
```

### Task 16: Document local development workflow

**Files:**
- Create: `docs/excel-addin-mvp-dev.md`

**Step 1: Write the failing test**

No code test. Verification is documentation completeness.

**Step 2: Run verification to identify missing guidance**

Check that the doc includes:
- how to run bridge
- how to run add-in
- how to point add-in to backend
- how to test with Excel

Expected: Missing because doc does not exist yet

**Step 3: Write minimal implementation**

Document:
- install commands
- dev server commands
- expected ports
- manual smoke test steps

**Step 4: Verify it passes**

Read the file and confirm all 4 topics exist.

**Step 5: Commit**

```bash
git add docs/excel-addin-mvp-dev.md
git commit -m "docs: add excel add-in dev workflow"
```

### Task 17: Run frontend test suite

**Files:**
- Test: `excel-addin/src/**/*.test.tsx`

**Step 1: Run tests**

Run: `npm test`
Workdir: `excel-addin`
Expected: PASS

**Step 2: If failing, fix only the smallest failing issue**

**Step 3: Re-run full frontend test suite**

Run: `npm test`
Expected: PASS

**Step 4: Commit**

```bash
git add excel-addin
git commit -m "test: verify add-in frontend"
```

### Task 18: Run backend test suite

**Files:**
- Test: `fat-bridge/src/**/*.test.ts`

**Step 1: Run tests**

Run: `npm test`
Workdir: `fat-bridge`
Expected: PASS

**Step 2: If failing, fix only the smallest failing issue**

**Step 3: Re-run full backend suite**

Run: `npm test`
Expected: PASS

**Step 4: Commit**

```bash
git add fat-bridge
git commit -m "test: verify bridge backend"
```

### Task 19: Manual MVP smoke test

**Files:**
- Create: `docs/pilot/excel-addin-smoke-test.md`

**Step 1: Write the smoke test checklist**

Include:
- open add-in
- select journal range
- run `Review Journal`
- confirm side panel result
- write to new sheet
- confirm workspace file created

**Step 2: Execute manual smoke test**

Run the add-in locally in Excel.
Expected: End-to-end flow works for at least one selected journal sample.

**Step 3: Record actual results**

Document pass/fail and gaps.

**Step 4: Commit**

```bash
git add docs/pilot/excel-addin-smoke-test.md
git commit -m "docs: add excel add-in smoke test"
```

### Task 20: Re-sync FAT skills after bridge integration assumptions change

**Files:**
- Modify only if needed: `codex-skills/**`

**Step 1: Review whether bridge output contract changed FAT assumptions**

Check alignment with:
- `codex-skills/shared/output-contract.md`
- `docs/pilot/team-usage-sop.md`

**Step 2: If changes are needed, update the minimal docs**

**Step 3: Validate FAT skills again**

Run: `zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/scripts/validate-fat-skills.sh`
Expected: PASS

**Step 4: Commit**

```bash
git add codex-skills docs
git commit -m "docs: align fat skills with excel add-in workflow"
```

## Verification Commands Summary

Frontend:

```bash
npm install
npm test
```

Workdir: `excel-addin`

Backend:

```bash
npm install
npm test
```

Workdir: `fat-bridge`

FAT skill package:

```bash
zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/scripts/validate-fat-skills.sh
```

## Notes for the Implementer

- Keep all bridge outputs conservative and template-friendly.
- Do not implement real LLM calls in the first pass unless the environment contract is already defined.
- Stub router behavior first, then add actual agent invocation behind the same request shape later.
- Prefer deterministic behavior over magical automation.
- If Excel dev setup becomes a blocker, complete backend first and use a mock frontend payload to keep momentum.
