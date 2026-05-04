export type CellValue = string | number | boolean | null

export interface SelectionSnapshot {
  workbookName: string
  worksheetName: string
  rangeAddress: string
  values: CellValue[][]
}

export interface OfficeSelectionAdapter {
  getSelection: () => Promise<SelectionSnapshot>
}

export interface ParsedSelection {
  workbookName: string
  worksheetName: string
  rangeAddress: string
  headers: string[]
  rows: CellValue[][]
}

export interface OfficeSheetWriterAdapter {
  addWorksheet: (title: string) => Promise<void> | void
  writeRows: (title: string, rows: string[][]) => Promise<void> | void
}
