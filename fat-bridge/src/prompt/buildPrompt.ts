import type { AnalyzeRequest, FatAction } from '../types/contracts'

interface BuildAgentPromptArgs {
  agent: string
  action: FatAction
  request: AnalyzeRequest
  contextFiles: string[]
}

export function buildAgentPrompt({ agent, action, request, contextFiles }: BuildAgentPromptArgs): string {
  return [
    `Agent: ${agent}`,
    `Action: ${action}`,
    `Period: ${request.period}`,
    `Workbook: ${request.workbook.name}`,
    `Worksheet: ${request.workbook.worksheet}`,
    `Range: ${request.workbook.range}`,
    `Context Files: ${contextFiles.join(', ')}`,
    `Headers: ${request.table.headers.join(', ')}`,
    `Row Count: ${request.table.rows.length}`,
    request.userNote ? `User Note: ${request.userNote}` : ''
  ]
    .filter(Boolean)
    .join('\n')
}
