import { routeAction } from './actionRouter'

test('routes review_journal to fat-accounting', () => {
  expect(routeAction('review_journal')).toBe('fat-accounting')
  expect(routeAction('check_tax')).toBe('fat-tax')
  expect(routeAction('draft_commentary')).toBe('fat-reporting')
})
