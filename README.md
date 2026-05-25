<<<<<<< HEAD
<p align="center">
  <img src="assets/omg-banner.png" alt="oh-my-antigravity" width="600" />
</p>

# oh-my-antigravity

[![npm version](https://img.shields.io/npm/v/oh-my-antigravity?color=cb3837)](https://www.npmjs.com/package/oh-my-antigravity)
[![GitHub stars](https://img.shields.io/github/stars/r3dlex/oh-my-antigravity?style=flat&color=yellow)](https://github.com/r3dlex/oh-my-antigravity/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Sponsor](https://img.shields.io/badge/Sponsor-%E2%9D%A4%EF%B8%8F-red?style=flat&logo=github)](https://github.com/sponsors/r3dlex)
=======
English | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Sister projects:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)
>>>>>>> merge-tmp

**Multi-agent orchestration for Gemini CLI. Zero learning curve.**

<<<<<<< HEAD
**Multi-agent orchestration for Google Antigravity (agy) CLI with OMG branding.**

> **Transition complete (2026-04-13):** this repo uses `oh-my-antigravity` / `omg` as the canonical user-facing surface. The legacy `omg` / `oh-my-antigravity` bin entries have been removed. See [`docs/analysis/2026-04-13-oh-my-antigravity-phase-1-doc-and-quality-review.md`](docs/analysis/2026-04-13-oh-my-antigravity-phase-1-doc-and-quality-review.md) for the migration history.
=======
_Don't learn Gemini CLI. Just use omg._

[Get Started](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)
>>>>>>> merge-tmp

---

## Why omg?

Every software team juggles implementation, architecture, security review, testing, and DevOps — all simultaneously. omg orchestrates specialized agents so every dimension gets expert attention, in parallel, without you herding cats.

Gemini CLI gives you long-context Google Gemini reasoning at the terminal, but production work still needs role separation, persistent state, and verification discipline. omg layers those workflows onto Gemini CLI so planning, execution, review, and QA can run as repeatable agent modes instead of one-off prompts.

---

## Quick Start

```bash
<<<<<<< HEAD
npm install -g oh-my-antigravity
=======
npm install -g @r3dlex/oh-my-gemini
>>>>>>> merge-tmp
omg setup --scope project
omg
```

<<<<<<< HEAD
After setup, restart agy CLI for `/omg:*` commands to appear (`/omg:*` remains compatible during migration).

The packaged extension now ships a agy-native `hooks/hooks.json` bridge and exposes `omg_cli_tools` as the canonical MCP server id.
=======
After setup, restart your CLI for the `/` commands to appear.
>>>>>>> merge-tmp

```bash
omg doctor              # check prerequisites
omg team run --task "..." --workers 2   # parallel work
omg hud --watch         # live status
```

<<<<<<< HEAD
Primary CLI launches (`omg` / `omg launch`) perform a throttled TTY-only update check (12h cache) and can prompt to run `npm install -g oh-my-antigravity@latest`.  
Disable the prompt with `OMG_AUTO_UPDATE=0` (compatibility alias: `OMG_AUTO_UPDATE=0`).
=======
---

## Features

| Feature | Description |
|---------|-------------|
| **Specialized Agents** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **Parallel Team Mode** | tmux-based multi-worker orchestration with shared task state |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **Persistent Hooks** | Automatic tool tracking, project memory, session management |
| **Real-time HUD** | Live status overlay showing agents, costs, and progress |
| **CI/CD Ready** | Verification gates, test integration, release workflows |
| **Multilingual** | README translations for global teams |

---

## CLI Reference

| Command | Description |
|---------|-------------|
| `omg` | Launch interactive session |
| `omg setup` | Configure Gemini CLI integration |
| `omg doctor` | Check prerequisites and fix issues |
| `omg team run` | Start parallel team execution |
| `omg team status` | Check team progress |
| `omg hud --watch` | Show live status overlay |
| `omg trace` | Show execution trace |

See the [full documentation](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) for all commands.

---

## Workflows

omg ships execution-mode and planning-mode workflows as built-in skills.

### Execution Modes

| Skill | Purpose |
|-------|---------|
| `$autopilot` | Idea → working code end-to-end |
| `$team` | N coordinated agents on a shared task |
| `$ralph` | Persistent completion loop until verified |
| `$ultrawork` | Maximum parallel throughput execution |
| `$ultraqa` | QA cycling until goals are met |

### Planning Modes

| Skill | Purpose |
|-------|---------|
| `$plan` | Strategic planning with optional interviews |
| `$deep-interview` | Socratic clarification before execution |
| `$ralplan` | Consensus planning with Architect + Critic review |

### Utility Modes

| Skill | Purpose |
|-------|---------|
| `$code-review` | Comprehensive code review |
| `$security-review` | Security audit |
| `$doctor` | Diagnose and fix installation issues |
| `$trace` | Agent flow trace and summary |
| `$note` | Save session notes |
| `$wiki` | Persistent project wiki |
>>>>>>> merge-tmp

---

## Team Mode

tmux-first multi-worker orchestration with persistent state and lifecycle controls.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
<<<<<<< HEAD
omg team status --team oh-my-antigravity --json
omg team resume --team oh-my-antigravity
omg team shutdown --team oh-my-antigravity --force
=======
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
>>>>>>> merge-tmp
```

omg launches real Gemini CLI worker panes under tmux, records durable lifecycle state under `.omg/`, and keeps each worker tied to claim-safe task files. Use it when you want Gemini-backed implementation, review, and verification lanes to make progress in parallel while still being resumable and auditable from the terminal.

---

## Documentation

<<<<<<< HEAD
### CLI

| Command | Description |
|---------|-------------|
| `omg` | Launch agy CLI with the oh-my-antigravity extension |
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

User-facing command and documentation surfaces use `omg` / `oh-my-antigravity`. The legacy `omg` / `oh-my-antigravity` bin entries have been removed from the package.

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
=======
- [Full Documentation](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Command Reference](docs/omg/commands.md)
- [Setup Guide](docs/setup/quickstart.md)
- [Contributing](CONTRIBUTING.md)
>>>>>>> merge-tmp

---

## License

omg is open source under the [MIT License](LICENSE).

---

## Sponsors

If omg saves you time, consider [sponsoring the project](https://github.com/sponsors/r3dlex) ❤️

---

<<<<<<< HEAD
[![Star History Chart](https://api.star-history.com/svg?repos=r3dlex/oh-my-antigravity&type=date&legend=top-left)](https://www.star-history.com/#r3dlex/oh-my-antigravity&type=date&legend=top-left)

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge&logo=github)](https://github.com/sponsors/r3dlex)
=======
## Star History

[![Star History Chart](https://api.star-history.com/chart?repos=r3dlex/oh-my-gemini&type=date&legend=top-left)](https://www.star-history.com/?repos=r3dlex%2Foh-my-gemini&type=date&legend=top-left)
>>>>>>> merge-tmp
