import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { FatAction } from '../types/contracts'

interface ContextFile {
  name: string
  content: string
}

interface LoadedContext {
  files: ContextFile[]
}

function getContextRoot(workspaceRoot?: string): string {
  return resolve(workspaceRoot ?? resolve(process.cwd(), '../fat-workspace'), 'context')
}

function getContextFileNames(action: FatAction): string[] {
  switch (action) {
    case 'review_journal':
      return ['chart-of-accounts.md', 'accounting-policy.md']
    case 'check_tax':
      return ['tax-policy.md', 'chart-of-accounts.md']
    case 'draft_commentary':
      return ['company-profile.md', 'templates-index.md']
  }
}

export function loadRelevantContext(action: FatAction, workspaceRoot?: string): LoadedContext {
  const contextRoot = getContextRoot(workspaceRoot)
  const files = getContextFileNames(action)
    .filter((name) => existsSync(resolve(contextRoot, name)))
    .map((name) => ({
      name,
      content: readFileSync(resolve(contextRoot, name), 'utf8')
    }))

  return { files }
}
