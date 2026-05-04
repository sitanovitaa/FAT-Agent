import type { AnalysisResult, ProviderInput } from './types'

interface OpenAiCompatibleConfig {
  apiKey: string
  baseUrl: string
  model: string
  fetchImpl?: typeof fetch
}

interface OpenAiMessage {
  role: 'system' | 'user'
  content: string
}

function buildMessages(input: ProviderInput): OpenAiMessage[] {
  return [
    {
      role: 'system',
      content:
        'You are a FAT analysis engine. Return strict JSON with keys summary, assessment, assumptions, risks, nextActions.'
    },
    {
      role: 'user',
      content: input.prompt
    }
  ]
}

function extractJson(content: string): Pick<AnalysisResult, 'summary' | 'assessment' | 'assumptions' | 'risks' | 'nextActions'> {
  const parsed = JSON.parse(content) as {
    summary: string
    assessment: string
    assumptions?: string[]
    risks?: string[]
    nextActions?: string[]
  }

  return {
    summary: parsed.summary,
    assessment: parsed.assessment,
    assumptions: parsed.assumptions ?? [],
    risks: parsed.risks ?? [],
    nextActions: parsed.nextActions ?? []
  }
}

export async function generateOpenAiCompatibleAnalysis(
  input: ProviderInput,
  config: OpenAiCompatibleConfig
): Promise<AnalysisResult> {
  const fetchImpl = config.fetchImpl ?? fetch
  const response = await fetchImpl(`${config.baseUrl.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`
    },
    body: JSON.stringify({
      model: config.model,
      messages: buildMessages(input),
      response_format: { type: 'json_object' }
    })
  })

  if (!response.ok) {
    throw new Error(`OpenAI-compatible provider failed with status ${response.status}`)
  }

  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>
  }

  const content = payload.choices?.[0]?.message?.content
  if (!content) {
    throw new Error('OpenAI-compatible provider returned no content')
  }

  const parsed = extractJson(content)

  return {
    ...parsed,
    filesReviewed: input.contextFiles,
    sourceFilesProvidedInSession: [input.source]
  }
}
