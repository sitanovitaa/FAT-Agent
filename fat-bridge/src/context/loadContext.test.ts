import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { loadRelevantContext } from './loadContext'

test('loads accounting context files for review_journal', () => {
  const root = mkdtempSync(join(tmpdir(), 'fat-context-'))
  const contextDir = join(root, 'context')
  mkdirSync(contextDir, { recursive: true })

  writeFileSync(join(contextDir, 'chart-of-accounts.md'), '# COA\naccounting context\n')
  writeFileSync(join(contextDir, 'accounting-policy.md'), '# Policy\naccounting policy\n')
  writeFileSync(join(contextDir, 'tax-policy.md'), '# Tax\ntax policy\n')

  const result = loadRelevantContext('review_journal', root)

  expect(result.files.map((file) => file.name)).toEqual([
    'chart-of-accounts.md',
    'accounting-policy.md'
  ])
})
