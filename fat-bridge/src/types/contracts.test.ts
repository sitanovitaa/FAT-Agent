import { fatActionSchema } from './contracts'

test('accepts review_journal action', () => {
  expect(fatActionSchema.parse('review_journal')).toBe('review_journal')
})
