import request from 'supertest'
import { app } from '../app'

test('POST /analyze returns structured response', async () => {
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
  expect(response.body).toMatchObject({
    status: 'review_needed',
    agent: 'fat-accounting'
  })
  expect(response.body.structuredResult).toBeDefined()
})
