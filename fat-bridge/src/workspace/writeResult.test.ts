import { existsSync, mkdtempSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { writeAnalyzeResult } from './writeResult'

test('writes review_journal result into accounting period folder', () => {
  const workspaceRoot = mkdtempSync(join(tmpdir(), 'fat-workspace-'))

  const outputFile = writeAnalyzeResult({
    workspaceRoot,
    action: 'review_journal',
    period: '2026-05',
    workbookName: 'close-may.xlsx',
    summary: 'Support is incomplete.',
    body: '# Review\n\nSupport is incomplete.\n'
  })

  expect(outputFile).toContain('periods/2026-05/accounting/')
  expect(existsSync(outputFile)).toBe(true)
  expect(readFileSync(outputFile, 'utf8')).toContain('Support is incomplete.')
})
