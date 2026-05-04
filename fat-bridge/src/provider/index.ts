import { generateDeterministicAnalysis } from './deterministicProvider'
import { generateOpenAiCompatibleAnalysis } from './openAiCompatibleProvider'
import type { AnalysisResult, ProviderInput } from './types'

interface ProviderConfig {
  mode: 'deterministic' | 'openai-compatible'
  apiKey?: string
  baseUrl?: string
  model?: string
}

function getProviderConfig(env: NodeJS.ProcessEnv = process.env): ProviderConfig {
  if (env.FAT_AI_PROVIDER === 'openai-compatible' && env.FAT_AI_API_KEY && env.FAT_AI_BASE_URL && env.FAT_AI_MODEL) {
    return {
      mode: 'openai-compatible',
      apiKey: env.FAT_AI_API_KEY,
      baseUrl: env.FAT_AI_BASE_URL,
      model: env.FAT_AI_MODEL
    }
  }

  return { mode: 'deterministic' }
}

export async function generateAnalysis(input: ProviderInput, env: NodeJS.ProcessEnv = process.env): Promise<AnalysisResult> {
  const config = getProviderConfig(env)

  if (config.mode === 'openai-compatible' && config.apiKey && config.baseUrl && config.model) {
    return generateOpenAiCompatibleAnalysis(input, {
      apiKey: config.apiKey,
      baseUrl: config.baseUrl,
      model: config.model
    })
  }

  return generateDeterministicAnalysis({
    action: input.action,
    rowCount: input.rowCount,
    contextFiles: input.contextFiles,
    source: input.source
  })
}

export function resolveProviderMode(env: NodeJS.ProcessEnv = process.env): ProviderConfig['mode'] {
  return getProviderConfig(env).mode
}
