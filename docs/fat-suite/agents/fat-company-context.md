# fat-company-context

## Overview

Builds and maintains the shared company context from COA, policy files, templates, and close checklists.

## Inputs

- COA files
- accounting policy
- tax policy
- closing checklist
- Excel templates

## Outputs

- normalized markdown context files under `fat-workspace/context/`
- stale or missing-context notes

## Core Behaviors

- extract structure from source files
- summarize into decision-ready rules
- identify missing details and contradictions

## Boundaries

- does not execute specialist workflows
- does not approve final policy interpretation

## Sample Prompts

- "Bangun context perusahaan dari file COA dan policy ini."
- "Update tax policy context dari file terbaru."
