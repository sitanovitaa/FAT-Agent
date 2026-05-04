import { writeResultSheet } from './writeResultSheet'

test('writes result rows to a new worksheet', async () => {
  const addWorksheet = vi.fn()
  const writeRows = vi.fn()

  await writeResultSheet(
    {
      addWorksheet,
      writeRows
    },
    {
      title: 'AI_Review_Journal',
      rows: [
        ['Status', 'Review Needed'],
        ['Summary', 'Support is incomplete.']
      ]
    }
  )

  expect(addWorksheet).toHaveBeenCalledWith('AI_Review_Journal')
  expect(writeRows).toHaveBeenCalledWith('AI_Review_Journal', [
    ['Status', 'Review Needed'],
    ['Summary', 'Support is incomplete.']
  ])
})
