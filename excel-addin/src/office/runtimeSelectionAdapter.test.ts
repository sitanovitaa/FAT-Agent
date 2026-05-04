import { getRuntimeSelectionAdapter } from './runtimeSelectionAdapter'

test('reads active workbook selection through Excel runtime', async () => {
  const loadMock = vi.fn()
  const syncMock = vi.fn().mockResolvedValue(undefined)

  const range = {
    address: 'Sheet1!A1:C3',
    values: [
      ['Date', 'Account', 'Description'],
      ['2026-05-31', '6101', 'Accrual utility']
    ],
    worksheet: {
      name: 'JE Upload'
    },
    load: loadMock
  }

  const workbook = {
    name: 'close-may.xlsx',
    getSelectedRange: vi.fn(() => range),
    load: loadMock
  }

  vi.stubGlobal('Excel', {
    run: async (callback: (context: { workbook: typeof workbook; sync: typeof syncMock }) => Promise<unknown>) =>
      callback({ workbook, sync: syncMock })
  })

  const adapter = getRuntimeSelectionAdapter()
  const result = await adapter.getSelection()

  expect(workbook.getSelectedRange).toHaveBeenCalled()
  expect(loadMock).toHaveBeenCalled()
  expect(syncMock).toHaveBeenCalled()
  expect(result).toEqual({
    workbookName: 'close-may.xlsx',
    worksheetName: 'JE Upload',
    rangeAddress: 'Sheet1!A1:C3',
    values: [
      ['Date', 'Account', 'Description'],
      ['2026-05-31', '6101', 'Accrual utility']
    ]
  })
})
