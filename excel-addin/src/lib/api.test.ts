import { analyzeSelection } from './api'
import type { AnalyzeRequest, AnalyzeResponse } from '../types/fat'

test('posts analyze payload to bridge and returns parsed response', async () => {
  const payload: AnalyzeRequest = {
    action: 'review_journal',
    period: '2026-05',
    workbook: {
      name: 'close-may.xlsx',
      worksheet: 'JE Upload',
      range: 'A1:C3'
    },
    table: {
      headers: ['Date', 'Account', 'Description'],
      rows: [['2026-05-31', '6101', 'Accrual utility']]
    }
  }

  const response: AnalyzeResponse = {
    status: 'review_needed',
    agent: 'fat-accounting',
    summary: 'Support is incomplete.',
    structuredResult: {
      objective: 'Review journal',
      filesReviewed: ['fat-workspace/context/chart-of-accounts.md'],
      sourceFilesProvidedInSession: ['Workbook: close-may.xlsx / Sheet: JE Upload / Range: A1:C3'],
      assessment: 'Review needed',
      assumptions: ['Selected range is complete'],
      risks: ['Missing support'],
      needHumanReview: true,
      nextActions: ['Request support'],
      suggestedOutputFile: 'fat-workspace/periods/2026-05/accounting/review.md'
    }
  }

  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => response
  })

  vi.stubGlobal('fetch', fetchMock)

  const result = await analyzeSelection(payload)

  expect(fetchMock).toHaveBeenCalledWith('http://localhost:8787/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  expect(result).toEqual(response)
})
