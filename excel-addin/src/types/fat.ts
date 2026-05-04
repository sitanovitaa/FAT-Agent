export type FatAction = 'review_journal' | 'check_tax' | 'draft_commentary'

export interface WorkbookContext {
  name: string
  worksheet: string
  range: string
}

export interface TableData {
  headers: string[]
  rows: Array<Array<string | number | boolean | null>>
}

export interface AnalyzeRequest {
  action: FatAction
  period: string
  workbook: WorkbookContext
  userNote?: string
  table: TableData
}

export interface StructuredResult {
  objective: string
  filesReviewed: string[]
  sourceFilesProvidedInSession: string[]
  assessment: string
  assumptions: string[]
  risks: string[]
  needHumanReview: boolean
  nextActions: string[]
  suggestedOutputFile: string
}

export interface AnalyzeResponse {
  status: 'pass' | 'review_needed' | 'escalate'
  agent: string
  summary: string
  structuredResult: StructuredResult
  sheetWriteback?: {
    title: string
    rows: string[][]
  }
}
