import express from 'express'
import { analyzeRouter } from './routes/analyze'

export const app = express()

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/analyze', analyzeRouter)
