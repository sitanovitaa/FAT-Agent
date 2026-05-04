import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'

const { readSelectionMock, analyzeSelectionMock } = vi.hoisted(() => ({
  readSelectionMock: vi.fn(),
  analyzeSelectionMock: vi.fn()
}))

vi.mock('./office/readSelection', () => ({
  readSelection: readSelectionMock
}))

vi.mock('./lib/api', () => ({
  analyzeSelection: analyzeSelectionMock
}))

test('shows error for empty selection', async () => {
  readSelectionMock.mockResolvedValueOnce({
    workbookName: 'close-may.xlsx',
    worksheetName: 'JE Upload',
    rangeAddress: 'A1:A1',
    headers: [],
    rows: []
  })

  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: 'Analyze Selection' }))

  await waitFor(() => {
    expect(screen.getByText('Please select a non-empty table or range')).toBeInTheDocument()
  })
})

test('shows error when backend request fails', async () => {
  readSelectionMock.mockResolvedValueOnce({
    workbookName: 'close-may.xlsx',
    worksheetName: 'JE Upload',
    rangeAddress: 'A1:C3',
    headers: ['Date', 'Account', 'Description'],
    rows: [['2026-05-31', '6101', 'Accrual utility']]
  })
  analyzeSelectionMock.mockRejectedValueOnce(new Error('Backend request failed'))

  render(<App />)

  fireEvent.click(screen.getByRole('button', { name: 'Analyze Selection' }))

  await waitFor(() => {
    expect(screen.getByText('Backend request failed')).toBeInTheDocument()
  })
})
