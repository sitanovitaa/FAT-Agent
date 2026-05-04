import { generateDeterministicAnalysis } from './deterministicProvider'

test('generates accounting-focused analysis for review_journal', () => {
  const result = generateDeterministicAnalysis({
    action: 'review_journal',
    rowCount: 2,
    contextFiles: ['chart-of-accounts.md', 'accounting-policy.md'],
    source: 'Workbook: close-may.xlsx / Sheet: JE Upload / Range: A1:C3'
  })

  expect(result.summary).toContain('Accounting review')
  expect(result.filesReviewed).toEqual(['chart-of-accounts.md', 'accounting-policy.md'])
  expect(result.nextActions.length).toBeGreaterThan(0)
})
