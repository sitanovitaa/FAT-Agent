import { buildAgentPrompt } from './buildPrompt'

test('builds accounting prompt with workbook and context references', () => {
  const prompt = buildAgentPrompt({
    agent: 'fat-accounting',
    action: 'review_journal',
    request: {
      action: 'review_journal',
      period: '2026-05',
      workbook: { name: 'close-may.xlsx', worksheet: 'JE Upload', range: 'A1:C3' },
      table: {
        headers: ['Date', 'Account', 'Description'],
        rows: [['2026-05-31', '6101', 'Accrual utility']]
      }
    },
    contextFiles: ['chart-of-accounts.md', 'accounting-policy.md']
  })

  expect(prompt).toContain('fat-accounting')
  expect(prompt).toContain('close-may.xlsx')
  expect(prompt).toContain('chart-of-accounts.md')
})
