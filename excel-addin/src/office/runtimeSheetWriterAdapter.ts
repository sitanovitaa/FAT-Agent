import type { OfficeSheetWriterAdapter } from './office.types'

interface ExcelRangeLike {
  values: string[][]
}

interface ExcelWorksheetLike {
  getRangeByIndexes: (row: number, column: number, rowCount: number, columnCount: number) => ExcelRangeLike
}

interface ExcelWorkbookLike {
  worksheets: {
    add: (title: string) => ExcelWorksheetLike
  }
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

export function getRuntimeSheetWriterAdapter(): OfficeSheetWriterAdapter {
  const worksheetCache = new Map<string, ExcelWorksheetLike>()

  return {
    async addWorksheet(title) {
      const excel = getExcelRuntime()

      await excel.run(async (context) => {
        const worksheet = context.workbook.worksheets.add(title)
        worksheetCache.set(title, worksheet)
        await context.sync()
      })
    },

    async writeRows(title, rows) {
      const excel = getExcelRuntime()

      await excel.run(async (context) => {
        const worksheet = worksheetCache.get(title) ?? context.workbook.worksheets.add(title)
        worksheetCache.set(title, worksheet)
        const columnCount = rows[0]?.length ?? 0
        const range = worksheet.getRangeByIndexes(0, 0, rows.length, columnCount)
        range.values = rows
        await context.sync()
      })
    }
  }
}
