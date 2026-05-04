import { generateAnalysis, resolveProviderMode } from './index'
import * as deterministic from './deterministicProvider'
import * as openai from './openAiCompatibleProvider'

test('uses deterministic provider by default', async () => {
  const spy = vi.spyOn(deterministic, 'generateDeterministicAnalysis')

  await generateAnalysis(
    {
      agent: 'fat-accounting',
      action: 'review_journal',
      prompt: 'prompt',
      rowCount: 1,
      contextFiles: ['chart-of-accounts.md'],
      source: 'Workbook: a / Sheet: b / Range: C1'
    },
    {}
  )

  expect(resolveProviderMode({})).toBe('deterministic')
  expect(spy).toHaveBeenCalled()
})

test('uses openai-compatible provider when env is configured', async () => {
  const spy = vi.spyOn(openai, 'generateOpenAiCompatibleAnalysis').mockResolvedValue({
    summary: 'ok',
    assessment: 'ok',
    assumptions: [],
    risks: [],
    nextActions: [],
    filesReviewed: ['chart-of-accounts.md'],
    sourceFilesProvidedInSession: ['Workbook: a / Sheet: b / Range: C1']
  })

  await generateAnalysis(
    {
      agent: 'fat-accounting',
      action: 'review_journal',
      prompt: 'prompt',
      rowCount: 1,
      contextFiles: ['chart-of-accounts.md'],
      source: 'Workbook: a / Sheet: b / Range: C1'
    },
    {
      FAT_AI_PROVIDER: 'openai-compatible',
      FAT_AI_API_KEY: 'test-key',
      FAT_AI_BASE_URL: 'https://example.com/v1',
      FAT_AI_MODEL: 'gpt-test'
    }
  )

  expect(resolveProviderMode({
    FAT_AI_PROVIDER: 'openai-compatible',
    FAT_AI_API_KEY: 'test-key',
    FAT_AI_BASE_URL: 'https://example.com/v1',
    FAT_AI_MODEL: 'gpt-test'
  })).toBe('openai-compatible')
  expect(spy).toHaveBeenCalled()
})
