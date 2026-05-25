English | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Sister projects:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Multi-agent orchestration for Gemini CLI. Zero learning curve.**

_Don't learn Gemini CLI. Just use omg._

[Get Started](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Why omg?

Every software team juggles implementation, architecture, security review, testing, and DevOps — all simultaneously. omg orchestrates specialized agents so every dimension gets expert attention, in parallel, without you herding cats.

Gemini CLI gives you long-context Google Gemini reasoning at the terminal, but production work still needs role separation, persistent state, and verification discipline. omg layers those workflows onto Gemini CLI so planning, execution, review, and QA can run as repeatable agent modes instead of one-off prompts.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

After setup, restart your CLI for the `/` commands to appear.

```bash
omg doctor              # check prerequisites
omg team run --task "..." --workers 2   # parallel work
omg hud --watch         # live status
```

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

---

## Team Mode

tmux-first multi-worker orchestration with persistent state and lifecycle controls.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg launches real Gemini CLI worker panes under tmux, records durable lifecycle state under `.omg/`, and keeps each worker tied to claim-safe task files. Use it when you want Gemini-backed implementation, review, and verification lanes to make progress in parallel while still being resumable and auditable from the terminal.

---

## Documentation

- [Full Documentation](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Command Reference](docs/omg/commands.md)
- [Setup Guide](docs/setup/quickstart.md)
- [Contributing](CONTRIBUTING.md)

---

## License

omg is open source under the [MIT License](LICENSE).

---

## Sponsors

If omg saves you time, consider [sponsoring the project](https://github.com/sponsors/r3dlex) ❤️
