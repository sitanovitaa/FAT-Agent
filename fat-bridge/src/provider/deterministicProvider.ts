import type { FatAction } from '../types/contracts'
import type { AnalysisResult } from './types'

interface DeterministicAnalysisArgs {
  action: FatAction
  rowCount: number
  contextFiles: string[]
  source: string
}

function getSummary(action: FatAction, rowCount: number): string {
  switch (action) {
    case 'review_journal':
      return `Accounting review completed for ${rowCount} row(s); verify support completeness before final posting.`
    case 'check_tax':
      return `Tax review completed for ${rowCount} row(s); confirm treatment against current tax support.`
    case 'draft_commentary':
      return `Reporting commentary draft prepared from ${rowCount} row(s); validate business drivers before final use.`
  }
}

function getNextActions(action: FatAction): string[] {
  switch (action) {
    case 'review_journal':
      return ['Check supporting documents', 'Confirm account mapping with policy']
    case 'check_tax':
      return ['Verify tax support documents', 'Escalate unclear treatment if policy is silent']
    case 'draft_commentary':
      return ['Validate drivers with accounting source', 'Refine commentary before circulation']
  }
}

export function generateDeterministicAnalysis({ action, rowCount, contextFiles, source }: DeterministicAnalysisArgs): AnalysisResult {
  const summary = getSummary(action, rowCount)

  return {
    summary,
    assessment: summary,
    assumptions: ['Selected range is the intended scope for this request'],
    risks: ['Output is draft-only and requires human review'],
    nextActions: getNextActions(action),
    filesReviewed: contextFiles,
    sourceFilesProvidedInSession: [source]
  }
}
