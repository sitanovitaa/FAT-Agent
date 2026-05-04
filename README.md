# FAT Agent Suite

FAT Agent Suite is a file-first AI copilot for Finance, Accounting, Tax, and Reporting teams using Codex Desktop. It provides specialist skills, a shared workspace, guardrails, templates, and demo/sample documents so teams can work safely from company context rather than free-form chat alone.

## What This Project Includes

- Codex-ready FAT skills for:
  - `fat-coordinator`
  - `fat-company-context`
  - `fat-finance`
  - `fat-accounting`
  - `fat-tax`
  - `fat-reporting`
- `fat-workspace/` for context files, period files, imports, and outputs
- sample prompts and pilot runbooks
- read-only import helpers
- Excel Add-in MVP and backend bridge

## Key Folders

- `codex-skills/` for installable Codex skills
- `fat-workspace/` for operational context and period files
- `docs/fat-suite/` for architecture, guardrails, and install docs
- `docs/pilot/` for SOPs, smoke tests, and demo guidance
- `sample-prompts/` for starter prompts by agent
- `scripts/` for install, sync, scaffold, and import helpers
- `excel-addin/` for the Excel Add-in MVP frontend
- `fat-bridge/` for the backend bridge and AI provider integration

## Install for Codex Desktop

### macOS / Linux

Clone the repository, then choose one install mode.

#### Option 1: Symlink mode

Use when you want edits in the repo to reflect immediately in Codex.

```bash
git clone <YOUR_GITHUB_REPO_URL> ~/fat-agent-suite
zsh ~/fat-agent-suite/scripts/symlink-fat-skills.sh
```

#### Option 2: Copy mode

Use when you want a stable snapshot in `~/.codex/skills`.

```bash
git clone <YOUR_GITHUB_REPO_URL> ~/fat-agent-suite
zsh ~/fat-agent-suite/scripts/install-fat-skills.sh
```

### Windows

Open PowerShell and choose one install mode.

#### Option 1: Symlink mode

Use when you want repo changes to reflect immediately in Codex.

```powershell
git clone <YOUR_GITHUB_REPO_URL> $HOME\fat-agent-suite
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\symlink-fat-skills.ps1
```

Note:
- You may need Developer Mode enabled or administrator rights for symlinks.

#### Option 2: Copy mode

Use when you want a stable snapshot in `%USERPROFILE%\.codex\skills`.

```powershell
git clone <YOUR_GITHUB_REPO_URL> $HOME\fat-agent-suite
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\install-fat-skills.ps1
```

## First-Time Usage

1. Install the skills into Codex.
2. Build company context using:
   - COA
   - accounting policy
   - tax policy
   - closing checklist
3. Create or update a working period folder.
4. Start from `fat-coordinator` for ambiguous or close-related tasks.
5. Route into specialists for deeper work.

## Demo / Pilot Shortcuts

- Team SOP: `docs/pilot/team-usage-sop.md`
- Pilot checklist: `docs/pilot/internal-pilot-checklist.md`
- Codex UI smoke test: `docs/pilot/codex-ui-smoke-test.md`
- Sample source docs: `docs/pilot/demo-sample-docs.md`

## Sample Documents Included

This repository already includes demo source files you can use before real company files are ready:

- `fat-workspace/imports/coa/demo-coa.csv`
- `fat-workspace/imports/checklists/demo-closing-checklist.csv`
- `fat-workspace/imports/policies/accounting/demo-accounting-policy.md`
- `fat-workspace/imports/policies/tax/demo-tax-policy.md`

## Safety Model

The suite is intentionally safe-by-default:

- no autonomous approval
- no autonomous posting
- no fabricated numbers
- explicit assumptions and escalation
- reusable outputs written into `fat-workspace`

## Excel Add-in Status

The repository also contains an Excel Add-in MVP plus backend bridge. The Codex-only workflow is stable now; Excel integration is available as a separate demo/workstream.

Relevant docs:

- `docs/excel-addin-mvp-dev.md`
- `docs/fat-bridge-env-setup.md`

## Recommended Next Step After Clone

If you want the fastest path to value, start with these documents:

1. COA
2. Accounting policy
3. Tax policy
4. Closing checklist

Then use `fat-company-context` to build the shared context files under `fat-workspace/context/`.
