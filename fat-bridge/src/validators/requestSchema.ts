import { z } from 'zod'
import { analyzeRequestSchema } from '../types/contracts'

export const strictAnalyzeRequestSchema = analyzeRequestSchema.superRefine((value, ctx) => {
  if (value.table.headers.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Headers must not be empty',
      path: ['table', 'headers']
    })
  }

  if (value.table.rows.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Rows must not be empty',
      path: ['table', 'rows']
    })
  }
})
