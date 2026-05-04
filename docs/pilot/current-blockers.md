# Current Blockers

## Codex CLI unavailable in this environment

Status: open

Evidence:

```text
$ which codex
codex not found

$ codex --help
zsh:1: command not found: codex
```

Impact:
- cannot execute automated skill smoke tests via CLI from this environment
- smoke testing must currently be done through Codex Desktop UI

Workaround:
- use `docs/pilot/codex-ui-smoke-test.md`
- use `scripts/validate-fat-skills.sh` for package validation

Next step:
- if a Codex CLI becomes available later, add a CLI-driven smoke test script
