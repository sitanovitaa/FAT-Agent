import type { CellValue, OfficeSelectionAdapter } from './office.types'

interface ExcelRangeLike {
  address: string
  values: CellValue[][]
  worksheet: { name: string }
  load: (properties: string | string[]) => void
}

interface ExcelWorkbookLike {
  name: string
  getSelectedRange: () => ExcelRangeLike
  load: (properties: string | string[]) => void
}

interface ExcelContextLike {
  workbook: ExcelWorkbookLike
  sync: () => Promise<void>
}

interface ExcelRuntimeLike {
  run: <T>(callback: (context: ExcelContextLike) => Promise<T>) => Promise<T>
}

function getExcelRuntime(): ExcelRuntimeLike {
  const runtime = globalThis.Excel as ExcelRuntimeLike | undefined

  if (!runtime) {
    throw new Error('Excel runtime is not available')
  }

  return runtime
}

export function getRuntimeSelectionAdapter(): OfficeSelectionAdapter {
  return {
    async getSelection() {
      const excel = getExcelRuntime()

      return excel.run(async (context) => {
        const workbook = context.workbook
        const range = workbook.getSelectedRange()

        workbook.load('name')
        range.load(['address', 'values', 'worksheet/name'])
        await context.sync()

        return {
          workbookName: workbook.name,
          worksheetName: range.worksheet.name,
          rangeAddress: range.address,
          values: range.values
        }
      })
    }
  }
}
