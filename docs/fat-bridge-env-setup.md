# FAT Bridge Environment Setup

## Purpose

This guide explains how to configure the FAT bridge so it can call a real AI provider through the OpenAI-compatible interface.

## Supported Modes

### 1. Deterministic mode

Use when:
- you want safe local testing
- you do not want to spend API credits yet
- you are validating frontend and backend flow only

Behavior:
- no external AI call
- backend returns deterministic analysis

### 2. OpenAI-compatible mode

Use when:
- you want real AI analysis
- your provider exposes an OpenAI-compatible `/chat/completions` API

Examples of possible providers:
- OpenAI
- OpenRouter
- compatible self-hosted gateway
- other OpenAI-compatible vendor endpoints

## Setup Steps

### Step 1: Copy the example file

```bash
cd /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge
cp .env.example .env
```

### Step 2: Edit the values

Set the following variables in `.env`:

```bash
FAT_AI_PROVIDER=openai-compatible
FAT_AI_API_KEY=your_real_api_key
FAT_AI_BASE_URL=https://your-provider.example/v1
FAT_AI_MODEL=your_model_name
PORT=8787
```

## Recommended Configurations

### OpenAI example

```bash
FAT_AI_PROVIDER=openai-compatible
FAT_AI_API_KEY=sk-...
FAT_AI_BASE_URL=https://api.openai.com/v1
FAT_AI_MODEL=gpt-4.1-mini
PORT=8787
```

### OpenRouter example

```bash
FAT_AI_PROVIDER=openai-compatible
FAT_AI_API_KEY=sk-or-...
FAT_AI_BASE_URL=https://openrouter.ai/api/v1
FAT_AI_MODEL=openai/gpt-4.1-mini
PORT=8787
```

## Running the Bridge with Env Vars

### Option 1: Export in shell

```bash
export FAT_AI_PROVIDER=openai-compatible
export FAT_AI_API_KEY=your_real_api_key
export FAT_AI_BASE_URL=https://api.openai.com/v1
export FAT_AI_MODEL=gpt-4.1-mini
export PORT=8787

cd /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge
npm run start
```

### Option 2: Source the .env file manually

If you prefer a simple local workflow:

```bash
set -a
source /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge/.env
set +a

cd /Users/sitanovita/SILIWANGI/fat-agent-suite/fat-bridge
npm run start
```

## Safe Practices

- Never commit `.env` with real keys.
- Keep `.env.example` as the only committed template.
- Use deterministic mode for UI or wiring tests when possible.
- Use a lower-cost model first for smoke testing.

## Quick Verification

After starting the backend, test:

```bash
curl http://localhost:8787/health
```

Expected:

```json
{"status":"ok"}
```

Then run your Excel add-in flow or backend request flow.

## Current Limitation

- The bridge uses an OpenAI-compatible text interface, not direct Codex skill runtime execution.
- You still control output and review through `fat-workspace` and the FAT workflow.
