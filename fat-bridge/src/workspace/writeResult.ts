import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { FatAction } from '../types/contracts'

interface WriteAnalyzeResultArgs {
  workspaceRoot?: string
  action: FatAction
  period: string
  workbookName: string
  summary: string
  body: string
}

function getDefaultWorkspaceRoot(): string {
  const currentFile = fileURLToPath(import.meta.url)
  return resolve(dirname(currentFile), '../../../fat-workspace')
}

function getAreaForAction(action: FatAction): string {
  switch (action) {
    case 'review_journal':
      return 'accounting'
    case 'check_tax':
      return 'tax'
    case 'draft_commentary':
      return 'reporting'
  }
}

function sanitizeBaseName(value: string): string {
  return value.replace(/[^a-zA-Z0-9-_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'output'
}

export function writeAnalyzeResult({
  workspaceRoot = getDefaultWorkspaceRoot(),
  action,
  period,
  workbookName,
  summary,
  body
}: WriteAnalyzeResultArgs): string {
  const area = getAreaForAction(action)
  const directory = join(workspaceRoot, 'periods', period, area)
  mkdirSync(directory, { recursive: true })

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const fileName = `${sanitizeBaseName(workbookName)}-${timestamp}.md`
  const outputFile = join(directory, fileName)

  const content = `# Analysis Result\n\n- Summary: ${summary}\n- Workbook: ${workbookName}\n\n${body}`
  writeFileSync(outputFile, content, 'utf8')

  return outputFile
}
