# Codex Install and Sync

## Options

### Option 1: Copy skills into Codex

Use when you want a stable snapshot:

```bash
zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/scripts/install-fat-skills.sh
```

On Windows:

```powershell
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\install-fat-skills.ps1
```

### Option 2: Symlink skills into Codex

Use when you want edits in the blueprint to reflect immediately in Codex:

```bash
zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/scripts/symlink-fat-skills.sh
```

On Windows:

```powershell
powershell -ExecutionPolicy Bypass -File $HOME\fat-agent-suite\scripts\symlink-fat-skills.ps1
```

## Notes

- The scripts replace existing `fat-*` skill directories under `~/.codex/skills/`.
- Shared references stay inside the blueprint package and are expected to resolve through relative paths from each skill.
- Re-run the chosen script after major packaging changes if you are using copy mode.
- Windows symlink mode may require Developer Mode or administrator rights.

## Suggested Workflow

1. Use symlink mode during development.
2. Test prompts from `sample-prompts/`.
3. Switch to copy mode if you want a frozen version for pilot use.
