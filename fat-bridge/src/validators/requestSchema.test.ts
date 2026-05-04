import { strictAnalyzeRequestSchema } from './requestSchema'

test('rejects unknown action', () => {
  const result = strictAnalyzeRequestSchema.safeParse({
    action: 'unknown_action',
    period: '2026-05',
    workbook: { name: 'a.xlsx', worksheet: 'Sheet1', range: 'A1:B2' },
    table: { headers: ['A'], rows: [['x']] }
  })

  expect(result.success).toBe(false)
})

test('rejects empty rows', () => {
  const result = strictAnalyzeRequestSchema.safeParse({
    action: 'review_journal',
    period: '2026-05',
    workbook: { name: 'a.xlsx', worksheet: 'Sheet1', range: 'A1:B2' },
    table: { headers: ['A'], rows: [] }
  })

  expect(result.success).toBe(false)
})

test('rejects missing workbook metadata', () => {
  const result = strictAnalyzeRequestSchema.safeParse({
    action: 'review_journal',
    period: '2026-05',
    workbook: { name: '', worksheet: '', range: '' },
    table: { headers: ['A'], rows: [['x']] }
  })

  expect(result.success).toBe(false)
})
