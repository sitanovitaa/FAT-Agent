import type { OfficeSelectionAdapter, ParsedSelection } from './office.types'

function normalizeHeaders(values: Array<string | number | boolean | null> | undefined): string[] {
  return (values ?? []).map((value) => String(value ?? ''))
}

export async function readSelection(adapter: OfficeSelectionAdapter): Promise<ParsedSelection> {
  const selection = await adapter.getSelection()
  const [headerRow, ...rows] = selection.values

  return {
    workbookName: selection.workbookName,
    worksheetName: selection.worksheetName,
    rangeAddress: selection.rangeAddress,
    headers: normalizeHeaders(headerRow),
    rows
  }
}
