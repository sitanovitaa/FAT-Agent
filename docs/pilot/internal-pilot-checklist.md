# Internal Pilot Checklist

## Goal

Validate that the FAT skill suite is useful, safe, and consistent before loading real company documents.

## Pre-Pilot Setup

- [ ] Install or symlink the FAT skills into `~/.codex/skills/`.
- [ ] Confirm all six FAT skills appear in the Codex skills directory.
- [ ] Review `docs/fat-suite/guardrails.md`.
- [ ] Review `docs/fat-suite/routing-rules.md`.
- [ ] Confirm `fat-workspace/` structure exists.

## Prompt Smoke Tests

- [ ] Run at least 2 prompts from `sample-prompts/fat-coordinator.md`.
- [ ] Run at least 2 prompts from `sample-prompts/fat-accounting.md`.
- [ ] Run at least 2 prompts from `sample-prompts/fat-tax.md`.
- [ ] Run at least 1 prompt from `sample-prompts/fat-finance.md`.
- [ ] Run at least 1 prompt from `sample-prompts/fat-reporting.md`.

## Behavior Checks

- [ ] Agent identifies missing evidence instead of inventing it.
- [ ] Agent refuses approval or posting requests.
- [ ] Agent separates assumptions from facts.
- [ ] Agent routes cross-functional prompts correctly.
- [ ] Agent output follows the shared output contract.

## Readiness to Load Real Documents

- [ ] Packaging works in Codex.
- [ ] Prompt behavior is coherent without real docs.
- [ ] No unsafe autonomous behavior observed.
- [ ] Team agrees on next step for ingesting COA, policy, and checklist files.
