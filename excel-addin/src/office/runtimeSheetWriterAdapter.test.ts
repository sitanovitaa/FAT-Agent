import { getRuntimeSheetWriterAdapter } from './runtimeSheetWriterAdapter'

test('writes rows to a new worksheet through Excel runtime', async () => {
  const syncMock = vi.fn().mockResolvedValue(undefined)
  const range = {
    values: [] as string[][]
  }
  const worksheet = {
    getRangeByIndexes: vi.fn(() => range)
  }
  const workbook = {
    worksheets: {
      add: vi.fn(() => worksheet)
    }
  }

  vi.stubGlobal('Excel', {
    run: async (callback: (context: { workbook: typeof workbook; sync: typeof syncMock }) => Promise<unknown>) =>
      callback({ workbook, sync: syncMock })
  })

  const adapter = getRuntimeSheetWriterAdapter()
  await adapter.addWorksheet('AI_Review_Journal')
  await adapter.writeRows('AI_Review_Journal', [
    ['Status', 'Review Needed'],
    ['Summary', 'Support is incomplete.']
  ])

  expect(workbook.worksheets.add).toHaveBeenCalledWith('AI_Review_Journal')
  expect(worksheet.getRangeByIndexes).toHaveBeenCalledWith(0, 0, 2, 2)
  expect(range.values).toEqual([
    ['Status', 'Review Needed'],
    ['Summary', 'Support is incomplete.']
  ])
  expect(syncMock).toHaveBeenCalled()
})
