import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'

const { writeResultSheetMock } = vi.hoisted(() => ({
  writeResultSheetMock: vi.fn().mockResolvedValue(undefined)
}))

vi.mock('./office/readSelection', () => ({
  readSelection: vi.fn().mockResolvedValue({
    workbookName: 'close-may.xlsx',
    worksheetName: 'JE Upload',
    rangeAddress: 'A1:C3',
    headers: ['Date', 'Account', 'Description'],
    rows: [['2026-05-31', '6101', 'Accrual utility']]
  })
}))

vi.mock('./lib/api', () => ({
  analyzeSelection: vi.fn().mockResolvedValue({
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
    },
    sheetWriteback: {
      title: 'AI_Review_Journal',
      rows: [['Status', 'Review Needed']]
    }
  })
}))

vi.mock('./office/writeResultSheet', () => ({
  writeResultSheet: writeResultSheetMock
}))

test('analyzes selection and renders backend summary', async () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: 'Analyze Selection' }))

  await waitFor(() => {
    expect(screen.getByText('Support is incomplete.')).toBeInTheDocument()
    expect(screen.getByText('fat-accounting')).toBeInTheDocument()
  })
})

test('writes backend result to new sheet when requested', async () => {
  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: 'Analyze Selection' }))

  await waitFor(() => {
    expect(screen.getByText('Support is incomplete.')).toBeInTheDocument()
  })

  fireEvent.click(screen.getByRole('button', { name: 'Write Result to New Sheet' }))

  await waitFor(() => {
    expect(writeResultSheetMock).toHaveBeenCalled()
  })
})
