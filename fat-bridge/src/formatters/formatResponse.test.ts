import { formatAnalyzeResponse } from './formatResponse'

test('formats structured analyze response', () => {
  const response = formatAnalyzeResponse({
    agent: 'fat-accounting',
    summary: 'Support is incomplete.',
    outputFile: 'fat-workspace/periods/2026-05/accounting/review.md',
    source: 'Workbook: close-may.xlsx / Sheet: JE Upload / Range: A1:C3'
  })

  expect(response).toMatchObject({
    status: 'review_needed',
    agent: 'fat-accounting',
    summary: 'Support is incomplete.'
  })
  expect(response.structuredResult.suggestedOutputFile).toBe(
    'fat-workspace/periods/2026-05/accounting/review.md'
  )
})
