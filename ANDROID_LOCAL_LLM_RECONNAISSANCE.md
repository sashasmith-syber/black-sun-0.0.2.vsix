# 🔍 Android Local LLM Reconnaissance Report

**Requested:** Reconnaissance on "Pocket Pall" (PocketPal AI) and similar Android local-LLM apps with customisation potential  
**Compiled:** 2026-02-26  
**Scope:** GitHub repositories, architecture analysis, customisation opportunities, integration relevance for Black Sun / Hikaru AI  

---

## 🎯 PRIMARY TARGET — PocketPal AI

| Field | Detail |
|-------|--------|
| **Repository** | [a-ghorbani/pocketpal-ai](https://github.com/a-ghorbani/pocketpal-ai) |
| **Stars** | ⭐ 5 757 |
| **Forks** | 🍴 560 |
| **Open Issues** | 111 |
| **Language** | TypeScript (React Native) |
| **License** | MIT |
| **Latest Release** | v1.11.21 (2026-02-17) |
| **APK Download Count** | 2 459 (latest release) |
| **Platforms** | Android + iOS (unified React Native codebase) |

### App Description

PocketPal AI is a pocket-sized AI assistant that runs **small language models (SLMs) entirely on-device** — no cloud required. All conversation data stays on the phone; only opt-in benchmark results or voluntary feedback may leave the device.

### Repository Structure
```
pocketpal-ai/
├── src/                    # React Native source (screens, stores, components)
├── android/                # Android-specific native code
├── ios/                    # iOS-specific native code
├── patches/                # Dependency patches
├── scripts/                # Build / release automation
├── jest/                   # Test helpers
├── .env.example            # Environment variable template
├── package.json            # JS dependencies (yarn)
├── metro.config.js         # Metro bundler config
└── tsconfig.json           # TypeScript config
```

### Feature Inventory

| Feature | Status |
|---------|--------|
| Offline AI chat (no internet) | ✅ |
| Multiple SLM support (Llama, Qwen, Phi, Gemma, Danube, DeepSeek-R1…) | ✅ |
| GGUF model format support | ✅ |
| Hugging Face Hub integration (public + gated models with HF token) | ✅ |
| Sideload local `.gguf` files from device storage | ✅ |
| **Pals** — create AI personas (assistant or roleplay) | ✅ v1.8.0 |
| Custom system prompt, temperature, BOS token, chat templates | ✅ |
| Real-time performance metrics (tokens/sec, ms/token) | ✅ |
| Built-in benchmarking tool + community leaderboard | ✅ v1.6.1 |
| Message editing + retry with same or different model | ✅ |
| Auto offload/load (memory management on background) | ✅ |
| Background downloads (iOS) | ✅ |
| iPad / landscape support | ✅ v1.8.12 |
| Localisation (EN, JA, ZH) | ✅ v1.8.16 |
| HF Token auth for gated models | ✅ v1.9.0 |

### Architecture Deep-Dive

```
┌─────────────────────────────────────────────────┐
│               PocketPal AI (React Native)         │
├─────────────────────────────────────────────────┤
│                                                   │
│  ┌──────────────┐   ┌───────────────────────┐    │
│  │   MobX Store  │◄──│  React Native UI        │   │
│  │  (state mgmt) │   │  (React Navigation)    │   │
│  └──────┬───────┘   └───────────────────────┘    │
│         │                                         │
│         ▼                                         │
│  ┌──────────────────────────────────────────┐    │
│  │            llama.rn bindings              │    │
│  │   (React Native ↔ llama.cpp bridge)       │    │
│  └──────────────────┬───────────────────────┘    │
│                     │                             │
│         ┌───────────▼────────────┐               │
│         │      llama.cpp core    │               │
│         │  (native C++ inference)│               │
│         └────────────────────────┘               │
│                                                   │
│  External: Hugging Face Model Hub (optional)      │
└─────────────────────────────────────────────────┘
```

**Key Libraries:**
- [`llama.rn`](https://github.com/mybigday/llama.rn) — llama.cpp React Native bindings
- [`llama.cpp`](https://github.com/ggerganov/llama.cpp) — on-device LLM inference engine
- **MobX** — reactive state management
- **React Native Paper** — Material Design UI components
- **React Navigation** — in-app routing
- **@dr.pogodin/react-native-fs** — file system (model download/management)
- **Gorhom Bottom Sheet** — sheet-based UX patterns

### Customisation Pathways

| Level | Method | Requires Code? |
|-------|--------|---------------|
| 🟢 Easy | Create custom **Pals** (persona, system prompt, model binding) | ❌ In-app UI |
| 🟢 Easy | Adjust temperature, chat template, BOS token per chat | ❌ In-app settings |
| 🟡 Medium | Sideload any compatible `.gguf` model from HF or local storage | ❌ File transfer |
| 🔴 Advanced | Modify `src/` (TypeScript) to add screens, features, themes | ✅ React Native |
| 🔴 Advanced | Patch `llama.rn` / `llama.cpp` for new model architectures | ✅ C++ / Native |

### Integration Opportunity — Hikaru AI (Black Sun Ecosystem)

The Hikaru AI stack (Next.js + Grok AI) could be augmented to serve as a **companion web dashboard** for users running PocketPal AI on their phones:

```
Black Sun Hikaru AI Web (Next.js)
         │
         │  REST / WebSocket
         ▼
   Local OpenAI-compatible server  ←── e.g. llama.cpp --server mode
   (running on device or same LAN)
         │
         ▼
  PocketPal / GGUF model on Android
```

Concretely, the existing `lib/grok.ts` client only needs a `baseURL` swap to point at a local llama.cpp server (which exposes an OpenAI-compatible `/v1/chat/completions` endpoint):

```typescript
// hikaru-nextjs/lib/local-llm.ts  (new file — see LOCAL_LLM_INTEGRATION section below)
const openai = new OpenAI({
  apiKey: 'not-needed',           // local servers don't need a key
  baseURL: process.env.LOCAL_LLM_BASE_URL || 'http://localhost:8080/v1',
});
```

---

## 🗺️ COMPARABLE PROJECTS

### 1. IRIS Android
| Field | Detail |
|-------|--------|
| **Repository** | [nerve-sparks/iris_android](https://github.com/nerve-sparks/iris_android) |
| **Stars** | ⭐ 265 |
| **Language** | Kotlin |
| **Engine** | llama.cpp (native Kotlin bindings) |
| **Format** | GGUF |
| **Differentiator** | Native Kotlin; lighter weight than RN; integrates with Hugging Face |

### 2. ChatterUI
- Mobile-first LLM frontend supporting multiple backends (local llama.rn **and** remote KoboldAI / OpenAI)
- Highly customisable chat personas, memory, prompt scripting
- Good reference for multi-backend architecture

### 3. LLM Hub (timmyy123)
- MIT-licensed; supports GGUF + ONNX; CPU / GPU / NPU acceleration
- Additional features: TTS, offline translation, image generation (Stable Diffusion)
- Broader scope than PocketPal — more complex but more extensible

### 4. MLC LLM (ml-explore)
- Universal LLM deployment framework; Android, iOS, Web, desktop
- Model compilation pipeline (TVM-based) — supports adding any compatible model
- More developer-facing; no polished consumer UI out of the box

### 5. CloverPal
| Field | Detail |
|-------|--------|
| **Repository** | [Spike8086/CloverPal](https://github.com/Spike8086/CloverPal) |
| **Language** | C++ |
| **Models** | GGUF (Gemma, Qwen, llama.cpp port) |
| **Differentiator** | Very new (2026-02-20); minimal but direct C++ approach |

### 6. ApexCore (PocketPal AI fork)
| Field | Detail |
|-------|--------|
| **Repository** | [THE-AAV/ApexCore](https://github.com/THE-AAV/ApexCore) |
| **Base** | PocketPal AI fork |
| **Additions** | Telemetry-grade benchmarking, custom personas, modern UI redesign |
| **Interest** | Shows what a "Black Sun cyberpunk" reskin of PocketPal could look like |

---

## 📊 COMPARISON MATRIX

| App | Platform | Engine | Offline | Custom Models | Custom UI/Personas | Open Source | Stars |
|-----|----------|--------|---------|---------------|--------------------|-------------|-------|
| **PocketPal AI** | Android + iOS | llama.cpp (via llama.rn) | ✅ | ✅ (GGUF + HF) | ✅ (Pals feature) | MIT | 5 757 |
| IRIS Android | Android | llama.cpp (Kotlin) | ✅ | ✅ (GGUF + HF) | ⚠️ Limited | MIT | 265 |
| ChatterUI | Android + iOS | llama.rn + remote | ✅ | ✅ | ✅ (personas + scripts) | MIT | — |
| LLM Hub | Android | GGUF + ONNX (NPU) | ✅ | ✅ | ⚠️ Limited | MIT | — |
| MLC LLM | Multi | TVM compiled | ✅ | ✅ (any TVM model) | ❌ Dev-only | Apache-2 | — |
| CloverPal | Android | llama.cpp (C++) | ✅ | ✅ (GGUF) | ❌ Minimal | — | 3 |
| ApexCore | Android | llama.cpp (via llama.rn) | ✅ | ✅ | ✅ | MIT | 0 (fork) |

---

## 🛠️ LOCAL LLM INTEGRATION PLAN (Hikaru AI Extension)

### Goal
Enable the Hikaru AI Next.js web app to optionally connect to a locally running LLM server (llama.cpp `--server` mode or any OpenAI-compatible endpoint) instead of — or alongside — Grok.

### Required Changes

#### 1. New environment variable
```env
# hikaru-nextjs/.env.local
LOCAL_LLM_BASE_URL=http://localhost:8080/v1   # llama.cpp server default
LOCAL_LLM_MODEL=your-model-name               # model name reported by server
LOCAL_LLM_ENABLED=true
```

#### 2. New lib file: `hikaru-nextjs/lib/local-llm.ts`
```typescript
import OpenAI from 'openai';
import { Message } from './grok';

// llama.cpp --server exposes an OpenAI-compatible API
const client = new OpenAI({
  apiKey: 'local',                           // required by SDK but ignored by server
  baseURL: process.env.LOCAL_LLM_BASE_URL || 'http://localhost:8080/v1',
});

const MODEL = process.env.LOCAL_LLM_MODEL || 'local-model';

export async function chatLocal(
  messages: Message[],
  temperature = 0.7,
  maxTokens = 1024
): Promise<string> {
  const completion = await client.chat.completions.create({
    model: MODEL,
    messages,
    temperature,
    max_tokens: maxTokens,
  });
  return completion.choices[0]?.message?.content ?? '';
}

export async function* streamLocal(
  messages: Message[],
  temperature = 0.7
): AsyncGenerator<string, void, unknown> {
  const stream = await client.chat.completions.create({
    model: MODEL,
    messages,
    temperature,
    stream: true,
  });
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content ?? '';
    if (content) yield content;
  }
}
```

#### 3. New API route: `hikaru-nextjs/app/api/local-llm/route.ts`
This mirrors `app/api/grok/route.ts` but delegates to `lib/local-llm.ts`, allowing the frontend to switch providers via a single query param (`?provider=local`).

---

## 🔒 SECURITY NOTES

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Local LLM server exposed on LAN | 🟡 Medium | Bind to `127.0.0.1` only; never `0.0.0.0` in production |
| No auth on llama.cpp `--server` by default | 🟡 Medium | Add `--api-key` flag; validate in Next.js API route |
| GGUF model from untrusted source | 🟡 Medium | Use models from Hugging Face or official sources only |
| Prompt injection via custom system prompts | 🟡 Medium | Sanitise user-supplied prompts in the API layer |

---

## ✅ RECOMMENDATIONS

1. **PocketPal AI is the best starting target** for an Android local-LLM companion to Hikaru AI:
   - MIT licensed, 5 700+ stars, actively maintained (v1.11.21 released 2026-02-17)
   - React Native codebase shares TypeScript language with Black Sun's stack
   - "Pals" feature already supports cyberpunk persona concepts

2. **For a Black Sun branded fork** (like ApexCore), clone PocketPal AI and:
   - Replace colour scheme with `#080808` background + `#00ffff` cyan accents
   - Add a "Black Sun" default Pal persona powered by Grok (when online) or a local GGUF (when offline)
   - Extend the benchmarking UI with the Black Sun cyberpunk aesthetic

3. **For Hikaru AI web integration**, add `lib/local-llm.ts` (see above) to allow the web dashboard to route prompts to a local llama.cpp server running on the same machine or LAN device — giving users a completely offline, private experience that matches the Black Sun privacy ethos.

4. **Reference the awesome-mobile-llm curated list** ([stevelaskaridis/awesome-mobile-llm](https://github.com/stevelaskaridis/awesome-mobile-llm)) for ongoing discovery of new projects, benchmarks, and deployment tools.

---

## 📎 APPENDIX — Key Links

| Resource | URL |
|----------|-----|
| PocketPal AI repo | https://github.com/a-ghorbani/pocketpal-ai |
| PocketPal AI (Google Play) | https://play.google.com/store/apps/details?id=com.pocketpalai |
| PocketPal AI (App Store) | https://apps.apple.com/us/app/pocketpal-ai/id6502579498 |
| IRIS Android | https://github.com/nerve-sparks/iris_android |
| ApexCore (PocketPal fork) | https://github.com/THE-AAV/ApexCore |
| llama.cpp | https://github.com/ggerganov/llama.cpp |
| llama.rn bindings | https://github.com/mybigday/llama.rn |
| awesome-mobile-llm | https://github.com/stevelaskaridis/awesome-mobile-llm |
| GGUF model format spec | https://github.com/ggerganov/ggml/blob/master/docs/gguf.md |

---

*Report compiled by GitHub Copilot for the Black Sun project.*
