import { readSelection } from './readSelection'

test('reads selection into workbook context and table data', async () => {
  const result = await readSelection({
    getSelection: async () => ({
      workbookName: 'close-may.xlsx',
      worksheetName: 'JE Upload',
      rangeAddress: 'A1:F3',
      values: [
        ['Date', 'Account', 'Description'],
        ['2026-05-31', '6101', 'Accrual utility'],
        ['2026-05-31', '2101', 'Accrued expense']
      ]
    })
  })

  expect(result).toEqual({
    workbookName: 'close-may.xlsx',
    worksheetName: 'JE Upload',
    rangeAddress: 'A1:F3',
    headers: ['Date', 'Account', 'Description'],
    rows: [
      ['2026-05-31', '6101', 'Accrual utility'],
      ['2026-05-31', '2101', 'Accrued expense']
    ]
  })
})
