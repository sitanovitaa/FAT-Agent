import { useState } from 'react'
import { ActionSelector } from './components/ActionSelector'
import { PeriodInput } from './components/PeriodInput'
import { ResultPanel } from './components/ResultPanel'
import { readSelection } from './office/readSelection'
import { writeResultSheet } from './office/writeResultSheet'
import { getRuntimeSelectionAdapter } from './office/runtimeSelectionAdapter'
import { getRuntimeSheetWriterAdapter } from './office/runtimeSheetWriterAdapter'
import { analyzeSelection } from './lib/api'
import type { FatAction } from './types/fat'
import type { AnalyzeResponse } from './types/fat'

export default function App() {
  const [action, setAction] = useState<FatAction>('review_journal')
  const [period, setPeriod] = useState('2026-05')
  const [note, setNote] = useState('')
  const [result, setResult] = useState<AnalyzeResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleAnalyzeSelection() {
    try {
      setError(null)
      const selection = await readSelection(getRuntimeSelectionAdapter())

      if (selection.headers.length === 0 || selection.rows.length === 0) {
        setResult(null)
        setError('Please select a non-empty table or range')
        return
      }

      const response = await analyzeSelection({
        action,
        period,
        userNote: note || undefined,
        workbook: {
          name: selection.workbookName,
          worksheet: selection.worksheetName,
          range: selection.rangeAddress
        },
        table: {
          headers: selection.headers,
          rows: selection.rows
        }
      })

      setResult(response)
    } catch (caughtError) {
      setResult(null)
      setError(caughtError instanceof Error ? caughtError.message : 'Unable to analyze selection')
    }
  }

  async function handleWriteResultToSheet() {
    if (!result?.sheetWriteback) {
      return
    }

    await writeResultSheet(
      getRuntimeSheetWriterAdapter(),
      result.sheetWriteback
    )
  }

  return (
    <main>
      <h1>FAT Assistant</h1>
      <ActionSelector value={action} onChange={setAction} />
      <PeriodInput value={period} onChange={setPeriod} />
      <label>
        Note
        <textarea value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
      <div>
        <button type="button" onClick={() => void handleAnalyzeSelection()}>
          Analyze Selection
        </button>
        <button type="button">Analyze Active Sheet</button>
        <button type="button" onClick={() => void handleWriteResultToSheet()} disabled={!result?.sheetWriteback}>
          Write Result to New Sheet
        </button>
      </div>
      {error ? <p role="alert">{error}</p> : null}
      <ResultPanel summary={result?.summary} agent={result?.agent} />
    </main>
  )
}
