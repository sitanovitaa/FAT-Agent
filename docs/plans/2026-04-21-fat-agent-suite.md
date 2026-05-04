# FAT Agent Suite for Codex Desktop Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Build a Codex Desktop-compatible FAT agent suite for one entity that supports Finance, Accounting, Tax, and Reporting through SOP Q&A, workflow orchestration, and review of work.

**Architecture:** Start with a file-first workspace and shared company context, then add a coordinator plus specialist agents. Keep v1 read-heavy and draft-producing, with strong guardrails and no autonomous posting or approval; add controlled integrations only after the workflow is stable.

**Tech Stack:** Markdown context files, Excel templates, Codex Desktop custom agents/skills, local file system, optional helper scripts for Excel/CSV transformation, later ERP/export integration.

---

## Scope

In scope for v1:
- Shared company context
- `fat-coordinator`
- `fat-company-context`
- `fat-finance`
- `fat-accounting`
- `fat-tax`
- `fat-reporting`
- Monthly close orchestration
- SOP/policy Q&A
- Review-mode outputs
- Draft deliverables written to workspace

Out of scope for v1:
- Auto-posting journals
- Auto-filing taxes
- Final approval decisions
- Full ERP write-back
- Multi-entity support
- Audit module

## Recommended Build Order

1. `fat-company-context`
2. `fat-coordinator`
3. `fat-accounting`
4. `fat-tax`
5. `fat-reporting`
6. `fat-finance`
7. Period-close orchestration enhancements
8. Read-only integrations

## Milestones

### Milestone 1: Strategy Complete
- scope
- boundaries
- guardrails
- routing
- workspace design

### Milestone 2: Context Complete
- context files normalized from company docs
- templates indexed
- close checklist transformed

### Milestone 3: Core Agents Live
- coordinator
- accounting
- tax
- reporting
- finance

### Milestone 4: Workflow Usable
- monthly close orchestration works from period files
- standard outputs and reviews available

### Milestone 5: Pilot Passed
- real cases tested
- unsafe behavior reduced
- team gets value

### Milestone 6: Read-Only Integration
- data ingestion from exports
- no direct write-back yet
