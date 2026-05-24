<p align="center">
  <img src="assets/omg-banner.png" alt="oh-my-gemini" width="600" />
</p>

# oh-my-gemini

[![npm version](https://img.shields.io/npm/v/oh-my-gemini?color=cb3837)](https://www.npmjs.com/package/oh-my-gemini)
[![GitHub stars](https://img.shields.io/github/stars/r3dlex/oh-my-gemini?style=flat&color=yellow)](https://github.com/r3dlex/oh-my-gemini/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Sponsor](https://img.shields.io/badge/Sponsor-%E2%9D%A4%EF%B8%8F-red?style=flat&logo=github)](https://github.com/sponsors/r3dlex)

> **Sister projects:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex)

**Multi-agent orchestration for Google Antigravity (agy) CLI with OMG branding.**

> **Transition complete (2026-04-13):** this repo uses `oh-my-gemini` / `omg` as the canonical user-facing surface. The legacy `omg` / `oh-my-gemini` bin entries have been removed. See [`docs/analysis/2026-04-13-oh-my-gemini-phase-1-doc-and-quality-review.md`](docs/analysis/2026-04-13-oh-my-gemini-phase-1-doc-and-quality-review.md) for the migration history.

[Quick Start](#quick-start) | [Team Mode](#team-mode) | [Commands](#commands) | [Docs](docs/)

---

## Quick Start

```bash
npm install -g oh-my-gemini
omg setup --scope project
omg
```

After setup, restart agy CLI for `/omg:*` commands to appear (`/omg:*` remains compatible during migration).

The packaged extension now ships a agy-native `hooks/hooks.json` bridge and exposes `omg_cli_tools` as the canonical MCP server id.

```bash
omg doctor                                    # check prerequisites
omg team run --task "..." --workers 2         # parallel work
omg hud --watch                               # live status
```

Primary CLI launches (`omg` / `omg launch`) perform a throttled TTY-only update check (12h cache) and can prompt to run `npm install -g oh-my-gemini@latest`.  
Disable the prompt with `OMG_AUTO_UPDATE=0` (compatibility alias: `OMG_AUTO_UPDATE=0`).

---

## Team Mode

tmux-first multi-worker orchestration with persistent state and lifecycle controls.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team oh-my-gemini --json
omg team resume --team oh-my-gemini
omg team shutdown --team oh-my-gemini --force
```

Default backend: `tmux` | Optional: `subagents` for role-tagged runs

<p align="center">
  <img src="assets/omg-boxers.png" alt="Parallel agents fighting for your codebase" width="480" />
  <br/>
  <em>Two workers enter, clean code leaves — parallel agents that never pull punches.</em>
</p>

---

## Commands

### CLI

| Command | Description |
|---------|-------------|
| `omg` | Launch agy CLI with the oh-my-gemini extension |
| `omg update` | Update the globally installed package immediately |
| `omg team run` | Start orchestrated team run |
| `omg team status/resume/shutdown/cancel` | Team lifecycle |
| `omg doctor` | Diagnose prerequisites |
| `omg verify` | Run validation suites |
| `omg hud` | Live team status overlay |
| `omg skill` | List/print reusable skill prompts |

### Slash Commands (inside agy CLI)

| Command | Description |
|---------|-------------|
| `/omg:autopilot` | End-to-end autonomous execution |
| `/omg:plan` | Phased execution plan with gates |
| `/omg:execute` | Immediate task implementation |
| `/omg:review` | Structured code review |
| `/omg:verify` | Acceptance validation |
| `/omg:debug` | Root cause investigation |
| `/omg:status` | Progress summary |
| `/omg:cancel` | Graceful stop |
| `/omg:handoff` | Context transfer document |

Full command reference: [`docs/omg/commands.md`](docs/omg/commands.md)

<p align="center">
  <img src="assets/omg-knights.png" alt="Agents standing guard over your codebase" width="480" />
  <br/>
  <em>Every command, a sworn knight — your codebase defended on all fronts.</em>
</p>

---

## VS Code Extension

**vscode-omg** provides real-time workflow and agent visualization directly in VS Code.

### Features

- **Activity bar panels**: Workflows, Agents, and Tasks views update live as omg executes
- **StateReader / OmgStateAdapter**: reads `.omc/state/subagent-tracker.json` — no polling server required
- **200ms debounced FileSystemWatcher**: prevents UI thrashing during heavy multi-agent runs
- **Status bar**: shows active workflow count and running agent count at a glance
- **MCP server provider**: registers `omg_cli_tools` so VS Code extensions can call omg MCP tools directly

### Installation

```bash
# From the repo root
cd vscode-omg
npm install
npm run build
# Then install the generated .vsix via VS Code Extensions panel → "Install from VSIX…"
```

---

## Compatibility Note

User-facing command and documentation surfaces use `omg` / `oh-my-gemini`. The legacy `omg` / `oh-my-gemini` bin entries have been removed from the package.

Some internal identifiers intentionally remain unchanged for now:

- legacy hidden state and artifact paths (`.omg/`)
- legacy `OMG_*` compatibility aliases for selected environment variables
- legacy internal interop identifiers
- legacy internal type/class names
- the temporary `omp_cli_tools` MCP server alias (`omg_cli_tools` is now the canonical id used by setup and extension manifests)

Those internal names are deferred to a later migration to avoid breaking state, protocol, and compatibility contracts.

---

## Requirements

- **Node.js 20+**
- **[agy CLI](https://antigravity.google/docs/cli-overview)**
- **[tmux](https://github.com/tmux/tmux)** (`brew install tmux` / `apt install tmux`)

---

## Available Models

agy CLI (Google Antigravity) supports the following primary models (from [Google AI Docs](https://ai.google.dev/gemini-api/docs/models)):

| Model | Tier (agy) | Capabilities | Context Window |
|-------|------------|--------------|----------------|
| `gemini-3.5-flash` | Medium, High | Fast reasoning, multi-step coding (current default) | 1M tokens |
| `gemini-3.1-pro` | Low, High | Structural thinking, planning, debugging, daily execution | 1M tokens |
| `gemini-3-flash` | Standard | Efficient multi-modal tasks | 1M tokens |
| `gemini-3.1-flash-lite` | Fast | Lightweight, low-latency tasks | 1M tokens |
| `gemini-2.5-flash` | Standard | Fast reasoning, multimodal | 1M tokens |
| `gemini-2.5-flash-lite` | Fast | Lightweight, low latency | 1M tokens |
| `gemini-2.5-pro` | Standard | Legacy high-tier reasoning, agentic coding | 1M tokens |

### Third-Party Models (via agy)

| Model | Tier (agy) | Capabilities |
|-------|------------|--------------|
| `claude-sonnet-4.6` | Thinking | Full agentic coding, multi-step plans |
| `claude-opus-4.6` | Thinking | Deep reasoning, complex agentic tasks |
| `gpt-oss-120b` | Medium | General coding and reasoning |

Default model on `omg` launch is `gemini-3.5-flash`. Use `-m <model>` to override. Set `OMG_MODEL_HIGH`, `OMG_MODEL_MEDIUM`, `OMG_MODEL_LOW` env vars to override tiers.

All defaults work without a paid agy CLI coding plan — just log in via OAuth (Google Account) or use an API key. Override with `OMG_MODEL_HIGH`, `OMG_MODEL_MEDIUM`, `OMG_MODEL_LOW` env vars. All Gemini models and third-party models are available via `-m` flag.

### Emergency Model Override

If a default model becomes unavailable, override immediately without code changes:

```bash
export OMG_MODEL_HIGH=<working-model>
export OMG_MODEL_MEDIUM=<working-model>
export OMG_MODEL_LOW=<working-model>
```

---

## License

MIT

---

<div align="center">

**[oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)**

</div>

[![Star History Chart](https://api.star-history.com/svg?repos=r3dlex/oh-my-gemini&type=date&legend=top-left)](https://www.star-history.com/#r3dlex/oh-my-gemini&type=date&legend=top-left)

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge&logo=github)](https://github.com/sponsors/r3dlex)
