import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'

const certPath = resolve(__dirname, 'certs/localhost.pem')
const keyPath = resolve(__dirname, 'certs/localhost-key.pem')

const httpsConfig =
  existsSync(certPath) && existsSync(keyPath)
    ? {
        cert: readFileSync(certPath),
        key: readFileSync(keyPath)
      }
    : true

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    https: httpsConfig,
    port: 3000,
    host: 'localhost'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
})
