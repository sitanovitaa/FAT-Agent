import { existsSync } from 'node:fs'
import request from 'supertest'
import { app } from '../app'

test('POST /analyze returns output file path that exists', async () => {
  const response = await request(app)
    .post('/analyze')
    .send({
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
    })

  expect(response.status).toBe(200)
  expect(response.body.agent).toBe('fat-accounting')
  expect(response.body.structuredResult.suggestedOutputFile).toBeTruthy()
  expect(response.body.structuredResult.filesReviewed.length).toBeGreaterThan(0)
  expect(existsSync(response.body.structuredResult.suggestedOutputFile)).toBe(true)
})
