import type { FatAction } from '../types/contracts'

export interface AnalysisResult {
  summary: string
  assessment: string
  assumptions: string[]
  risks: string[]
  nextActions: string[]
  filesReviewed: string[]
  sourceFilesProvidedInSession: string[]
}

export interface ProviderInput {
  agent: string
  action: FatAction
  prompt: string
  rowCount: number
  contextFiles: string[]
  source: string
}
