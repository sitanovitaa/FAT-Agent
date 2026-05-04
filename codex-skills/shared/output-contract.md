# FAT Output Contract

Standard sections:
- `Objective`
- `Files Reviewed`
- `Source Files Provided In Session`
- `Assessment / Recommendation`
- `Assumptions`
- `Risks`
- `Need Human Review`
- `Next Actions`
- `Suggested Output File`

Review mode additions:
- `Status: Pass | Review Needed | Escalate`
- `Findings`
- `Missing Evidence`
- `Policy / COA References`

Orchestration mode additions:
- `Current Step`
- `Dependencies`
- `Blockers`
- `Today / This Week Actions`

Workspace rule:
- If the output is reusable, write it into `fat-workspace` instead of leaving it only in chat.
- If the user provided a file directly in Codex, name it explicitly in `Source Files Provided In Session`.
