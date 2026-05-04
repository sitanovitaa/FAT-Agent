import { z } from 'zod'

export const fatActionSchema = z.enum([
  'review_journal',
  'check_tax',
  'draft_commentary'
])

export const workbookContextSchema = z.object({
  name: z.string().min(1),
  worksheet: z.string().min(1),
  range: z.string().min(1)
})

export const tableDataSchema = z.object({
  headers: z.array(z.string()),
  rows: z.array(z.array(z.union([z.string(), z.number(), z.boolean(), z.null()])))
})

export const analyzeRequestSchema = z.object({
  action: fatActionSchema,
  period: z.string().min(1),
  workbook: workbookContextSchema,
  userNote: z.string().optional(),
  table: tableDataSchema
})

export const structuredResultSchema = z.object({
  objective: z.string(),
  filesReviewed: z.array(z.string()),
  sourceFilesProvidedInSession: z.array(z.string()),
  assessment: z.string(),
  assumptions: z.array(z.string()),
  risks: z.array(z.string()),
  needHumanReview: z.boolean(),
  nextActions: z.array(z.string()),
  suggestedOutputFile: z.string()
})

export const analyzeResponseSchema = z.object({
  status: z.enum(['pass', 'review_needed', 'escalate']),
  agent: z.string().min(1),
  summary: z.string(),
  structuredResult: structuredResultSchema
})

export type FatAction = z.infer<typeof fatActionSchema>
export type AnalyzeRequest = z.infer<typeof analyzeRequestSchema>
export type AnalyzeResponse = z.infer<typeof analyzeResponseSchema>
