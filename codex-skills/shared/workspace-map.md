# FAT Workspace Map

Read from these files when available:

- `fat-workspace/context/company-profile.md`
- `fat-workspace/context/chart-of-accounts.md`
- `fat-workspace/context/accounting-policy.md`
- `fat-workspace/context/tax-policy.md`
- `fat-workspace/context/closing-checklist.md`
- `fat-workspace/context/templates-index.md`
- `fat-workspace/context/systems-and-integrations.md`

Period files live in:
- `fat-workspace/periods/YYYY-MM/close-status.md`
- `fat-workspace/periods/YYYY-MM/issue-log.md`
- `fat-workspace/periods/YYYY-MM/{finance,accounting,tax,reporting}/`

## Direct Codex File Input

When the user provides a file directly in Codex or references a local file path in the session:

1. Read that file first for the current request.
2. Treat it as the immediate working source for the task.
3. Keep the original source file unchanged.
4. If the result is reusable, write the output into the correct `fat-workspace` location.
