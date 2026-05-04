import type { AnalyzeRequest, AnalyzeResponse } from '../types/fat'

const BRIDGE_URL = 'http://localhost:8787/analyze'

export async function analyzeSelection(payload: AnalyzeRequest): Promise<AnalyzeResponse> {
  const response = await fetch(BRIDGE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Backend request failed')
  }

  return response.json() as Promise<AnalyzeResponse>
}
