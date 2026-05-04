# Excel Add-in MVP Development Workflow

## Purpose

This document explains how to run the Excel Add-in MVP and the FAT bridge locally for development and testing.

## Project Paths

- Add-in frontend: `excel-addin/`
- Bridge backend: `fat-bridge/`
- FAT workspace output: `fat-workspace/`

## Prerequisites

- Node.js installed
- npm installed
- Excel desktop with add-in sideload support

## Install Dependencies

### Add-in frontend

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/excel-addin
npm install
```

### Bridge backend

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge
npm install
```

## Run the Bridge Backend

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge
npm run start
```

Expected:
- server listens on port `8787`
- `GET http://localhost:8787/health` returns `{"status":"ok"}`

### Optional: Enable AI Provider

The bridge supports an OpenAI-compatible provider. If these variables are not set, it falls back to the deterministic provider.

```bash
export FAT_AI_PROVIDER=openai-compatible
export FAT_AI_API_KEY=your_api_key
export FAT_AI_BASE_URL=https://your-provider.example/v1
export FAT_AI_MODEL=your_model_name
```

Detailed guide:
- `docs/fat-bridge-env-setup.md`

## Run the Add-in Frontend

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/excel-addin
npm run dev
```

Expected:
- Vite serves local frontend for the task pane
- the frontend URL should match what you use for the Excel manifest during local development

### If Excel blocks the add-in certificate on macOS

Excel on macOS may reject the default self-signed dev certificate. In that case, create a trusted localhost certificate with `mkcert`:

```bash
brew install mkcert
zsh /Users/sitanovita/SILIWANGI/fat-agent-suite/excel-addin/scripts/setup-local-https.sh
```

Then restart the frontend:

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/excel-addin
npm run dev
```

After that, open `https://localhost:3000/` in Safari once and confirm it loads without certificate warnings before retrying the add-in in Excel.

## Excel Local Testing

1. Start the backend bridge.
2. Start the add-in frontend.
3. Load or sideload the add-in manifest in Excel.
4. Open a workbook with a simple test table.
5. Open the FAT Assistant task pane.
6. Select a range and click `Analyze Selection`.
7. Confirm the result appears in the task pane.
8. Click `Write Result to New Sheet` and confirm a new worksheet is created.
9. Confirm a markdown output file is written into `fat-workspace/periods/YYYY-MM/...`.

## Test Commands

### Frontend

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/excel-addin
npm test
```

### Backend

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge
npm test
```

## Current Limitation

- Office.js runtime adapters are implemented, but they still rely on Excel desktop runtime availability during manual testing.
- Backend can now call an OpenAI-compatible provider if configured, but it still does not invoke Codex FAT skills directly as an execution engine.
