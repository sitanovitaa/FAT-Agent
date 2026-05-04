import { Router } from 'express'
import { loadRelevantContext } from '../context/loadContext'
import { formatAnalyzeResponse } from '../formatters/formatResponse'
import { buildAgentPrompt } from '../prompt/buildPrompt'
import { generateAnalysis } from '../provider'
import { routeAction } from '../router/actionRouter'
import { writeAnalyzeResult } from '../workspace/writeResult'
import { strictAnalyzeRequestSchema } from '../validators/requestSchema'

export const analyzeRouter = Router()

analyzeRouter.post('/', async (req, res) => {
  const parsed = strictAnalyzeRequestSchema.safeParse(req.body)

  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid analyze payload' })
    return
  }

  const request = parsed.data
  const agent = routeAction(request.action)
  const source = `Workbook: ${request.workbook.name} / Sheet: ${request.workbook.worksheet} / Range: ${request.workbook.range}`
  const loadedContext = loadRelevantContext(request.action)
  const prompt = buildAgentPrompt({
    agent,
    action: request.action,
    request,
    contextFiles: loadedContext.files.map((file) => file.name)
  })
  const analysis = await generateAnalysis({
    agent,
    action: request.action,
    prompt,
    rowCount: request.table.rows.length,
    contextFiles: loadedContext.files.map((file) => file.name),
    source
  })
  const summary = analysis.summary
  const outputFile = writeAnalyzeResult({
    action: request.action,
    period: request.period,
    workbookName: request.workbook.name,
    summary,
    body: `${prompt}\n\n${analysis.assessment}`
  })

  const response = formatAnalyzeResponse({
    agent,
    summary,
    outputFile,
    source,
    filesReviewed: analysis.filesReviewed,
    assessment: analysis.assessment,
    assumptions: analysis.assumptions,
    risks: analysis.risks,
    nextActions: analysis.nextActions,
    sourceFilesProvidedInSession: analysis.sourceFilesProvidedInSession
  })

  res.json(response)
})
