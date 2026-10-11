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

## Antigravity

Paket yang sama dapat dipasang dengan `python3 scripts/install-fat-antigravity.py` dari root repository. Installer menyertakan salinan referensi bersama di dalam setiap skill dan membuat custom agent untuk Antigravity 2.0. Lihat `docs/fat-suite/antigravity-install.md`.
