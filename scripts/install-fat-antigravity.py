#!/usr/bin/env python3
"""Install portable FAT skills and Antigravity 2.0 custom agents."""
import argparse
from datetime import datetime
from pathlib import Path
import shutil
import tempfile

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ('fat-coordinator', 'fat-company-context', 'fat-finance',
          'fat-accounting', 'fat-tax', 'fat-reporting')
TOOLS = ('view_file', 'grep_search', 'run_command')


def install(destination, native_agents):
    source = ROOT / 'codex-skills'
    # Validate all source entrypoints before changing an installation.
    for name in SKILLS:
        text = (source / name / 'SKILL.md').read_text()
        if not text.startswith('---\n') or '\ndescription: ' not in text:
            raise ValueError(f'Invalid skill manifest: {name}')
    for filename in ('guardrails.md', 'output-contract.md', 'workspace-map.md',
                     'close-state.md', 'routing-overview.md'):
        if not (source / 'shared' / filename).is_file():
            raise ValueError(f'Missing shared reference: {filename}')
    destination.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='fat-install-') as temp:
        staging = Path(temp)
        for name in SKILLS:
            skill = staging / 'skills' / name
            shutil.copytree(source / name, skill)
            shutil.copytree(source / 'shared', skill / 'references' / 'shared')
            entry = skill / 'SKILL.md'
            entry.write_text(entry.read_text().replace('../shared/', './references/shared/'))
            if native_agents:
                description = entry.read_text().split('\ndescription: ', 1)[1].split('\n', 1)[0]
                agent = staging / 'agents' / f'{name}.md'
                agent.parent.mkdir(exist_ok=True)
                skill_path = destination / 'skills' / name / 'SKILL.md'
                agent.write_text(
                    f'---\nname: {name}\ndescription: {description}\n'
                    'mainAgent: true\nsubagent: true\nmodel: inherit\n'
                    'commandExecutionPolicy: sandbox\ntools:\n'
                    + ''.join(f'  - {tool}\n' for tool in TOOLS)
                    + f'---\n\n# {name}\n\n'
                    + f'Read the FAT skill at `{skill_path}` before performing the task. '
                    'Resolve its reference paths relative to that skill directory. '
                    'Follow its workflow, boundaries, and output contract.\n\n'
                    'Resolve `fat-workspace/` relative to the active company project, '
                    'never relative to the installation directory. If it is missing, '
                    'identify the company workspace before writing outputs. '
                    'Do not invent company facts, amounts, or close status.\n\n'
                    'For a specialist handoff, use the matching FAT custom subagent '
                    'when the runtime exposes delegation; otherwise explicitly identify '
                    'the matching FAT skill and let the user continue with that specialist.\n')
        backup = destination / 'fat-install-backups' / datetime.now().strftime('%Y%m%d-%H%M%S-%f')
        for category in ('skills', 'agents') if native_agents else ('skills',):
            for staged in (staging / category).iterdir():
                target = destination / category / staged.name
                target.parent.mkdir(parents=True, exist_ok=True)
                if target.exists() or target.is_symlink():
                    saved = backup / category / staged.name
                    saved.parent.mkdir(parents=True, exist_ok=True)
                    shutil.move(str(target), str(saved))
                shutil.move(str(staged), str(target))
        print(f'Installed 6 FAT skills' + (' and 6 custom agents' if native_agents else '')
              + f' into {destination}')
        if backup.exists():
            print(f'Previous FAT installation saved in {backup}')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--target', choices=('all', 'antigravity', 'antigravity-ide'), default='all')
    parser.add_argument('--workspace', type=Path, help='Install into this project’s .agents folder instead of globally')
    parser.add_argument('--user-home', type=Path, default=Path.home(), help='Home directory for global installation (also useful for isolated validation)')
    args = parser.parse_args()
    if args.workspace:
        workspace = args.workspace.expanduser().resolve()
        if not workspace.is_dir():
            parser.error('--workspace must be an existing project directory')
        install(workspace / '.agents', args.target != 'antigravity-ide')
    else:
        home = args.user_home.expanduser().resolve()
        # Both current applications discover global skills in the shared config.
        install(home / '.gemini' / 'config', args.target != 'antigravity-ide')


if __name__ == '__main__':
    main()
