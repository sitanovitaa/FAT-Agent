interface SheetWritebackPayload {
  title: string
  rows: string[][]
}

interface OfficeSheetWriterAdapter {
  addWorksheet: (title: string) => Promise<void> | void
  writeRows: (title: string, rows: string[][]) => Promise<void> | void
}

export async function writeResultSheet(
  adapter: OfficeSheetWriterAdapter,
  payload: SheetWritebackPayload
): Promise<void> {
  await adapter.addWorksheet(payload.title)
  await adapter.writeRows(payload.title, payload.rows)
}
