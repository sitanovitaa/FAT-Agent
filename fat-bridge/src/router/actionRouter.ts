import type { FatAction } from '../types/contracts'

export function routeAction(action: FatAction): string {
  switch (action) {
    case 'review_journal':
      return 'fat-accounting'
    case 'check_tax':
      return 'fat-tax'
    case 'draft_commentary':
      return 'fat-reporting'
  }
}
