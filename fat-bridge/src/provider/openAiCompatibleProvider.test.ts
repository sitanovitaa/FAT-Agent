import { generateOpenAiCompatibleAnalysis } from './openAiCompatibleProvider'

test('parses structured JSON response from OpenAI-compatible endpoint', async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      choices: [
        {
          message: {
            content: JSON.stringify({
              summary: 'AI summary',
              assessment: 'AI assessment',
              assumptions: ['A1'],
              risks: ['R1'],
              nextActions: ['N1']
            })
          }
        }
      ]
    })
  })

  const result = await generateOpenAiCompatibleAnalysis(
    {
      agent: 'fat-accounting',
      action: 'review_journal',
      prompt: 'prompt',
      rowCount: 1,
      contextFiles: ['chart-of-accounts.md'],
      source: 'Workbook: a / Sheet: b / Range: C1'
    },
    {
      apiKey: 'test-key',
      baseUrl: 'https://example.com/v1',
      model: 'gpt-test',
      fetchImpl: fetchMock as typeof fetch
    }
  )

  expect(fetchMock).toHaveBeenCalled()
  expect(result.summary).toBe('AI summary')
  expect(result.filesReviewed).toEqual(['chart-of-accounts.md'])
})
