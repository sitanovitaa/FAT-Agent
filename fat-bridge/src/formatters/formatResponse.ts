import type { AnalyzeResponse } from '../types/contracts'

interface FormatAnalyzeResponseArgs {
  agent: string
  summary: string
  outputFile: string
  source: string
  filesReviewed?: string[]
  assessment?: string
  assumptions?: string[]
  risks?: string[]
  nextActions?: string[]
  sourceFilesProvidedInSession?: string[]
}

export function formatAnalyzeResponse({
  agent,
  summary,
  outputFile,
  source,
  filesReviewed = [],
  assessment = summary,
  assumptions = ['Selected data is the intended scope of review'],
  risks = [],
  nextActions = ['Review findings and confirm supporting evidence'],
  sourceFilesProvidedInSession = [source]
}: FormatAnalyzeResponseArgs): AnalyzeResponse {
  return {
    status: 'review_needed',
    agent,
    summary,
    structuredResult: {
      objective: 'Analyze Excel selection',
      filesReviewed,
      sourceFilesProvidedInSession,
      assessment,
      assumptions,
      risks,
      needHumanReview: true,
      nextActions,
      suggestedOutputFile: outputFile
    }
  }
}
