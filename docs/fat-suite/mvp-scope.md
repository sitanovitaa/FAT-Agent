# FAT Agent Suite MVP Scope

## In Scope

- One entity only.
- File-first workspace under `fat-workspace/`.
- Shared context built from COA, policy, checklist, and templates.
- Six agents:
  - `fat-coordinator`
  - `fat-company-context`
  - `fat-finance`
  - `fat-accounting`
  - `fat-tax`
  - `fat-reporting`
- Three interaction modes:
  - SOP Q&A
  - workflow orchestration
  - review and draft support

## Non-Goals

- Multi-entity or consolidation support.
- Autonomous approval or posting.
- Tax filing automation.
- ERP write-back.
- Audit module.

## MVP Priorities

### Priority 1
- Company context normalization
- Coordinator routing
- Accounting support
- Tax support

### Priority 2
- Reporting support
- Finance support
- Period close tracking files

### Priority 3
- Read-only data ingestion from exports

## Acceptance Criteria

- Common requests route to the right agent.
- Each specialist reads shared context before responding.
- Review-mode outputs use a common format.
- Monthly close can be tracked using `close-status.md` and `issue-log.md`.
- Human approval remains mandatory for all consequential actions.
