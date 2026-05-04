# Codex FAT Skills

This folder contains a portable Codex Desktop skill package for the FAT agent suite.

## Skills

- `fat-coordinator`
- `fat-company-context`
- `fat-finance`
- `fat-accounting`
- `fat-tax`
- `fat-reporting`

## Packaging Notes

- Shared references live in `shared/`.
- Each skill is self-contained enough to be copied into `~/.codex/skills/` later.
- Fill the `fat-workspace/context/` files before using the skills with real work.

## Suggested Install Path

For local testing, copy a skill directory into `~/.codex/skills/` or symlink the whole folder if your Codex setup supports it.
