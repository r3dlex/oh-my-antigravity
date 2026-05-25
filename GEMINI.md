# oh-my-antigravity Extension Context

This extension is the canonical public entry point for the `oh-my-antigravity` workflow.

> **Shared context**: See `docs/architecture/omg-core.md` for the full agent catalog, workflow stages, quality gates, and state conventions.

> **Transition status (2026-04-13):** the canonical target for this repo is `oh-my-antigravity` / `omg`, with extension assets under `extensions/oh-my-antigravity/` and runtime state under `.omg/`. Legacy `oh-my-antigravity` / `omg` / `.omg` references remain in some implementation and compatibility paths during the migration.

## Context Layers (priority order)
1. **System/Runtime** — Antigravity CLI constraints (immutable)
2. **Project Standards** — This file (`GEMINI.md`) + `docs/architecture/omg-core.md`
3. **Session Memory** — `.omg/state/` (preferred) or `.omg/state/` (compatibility), memory entries
4. **Active Task** — Current plan, taskboard, PRD
5. **Execution Traces** — Recent iteration results

## Product intent
- Keep orchestration incremental (MVP-first).
- Default runtime backend is **tmux**.
- Subagents are **experimental opt-in** only.
- Setup defaults to **project scope**.

## Preferred command flow
1. `oh-my-antigravity setup --scope project` (aliases: `omg setup --scope project`, `omg setup --scope project`)
2. ensure `.gemini/agents/catalog.json` exists (repo contributor fallback: `npm run setup:subagents`)
3. `oh-my-antigravity doctor`
4. `oh-my-antigravity team run --task "..."`
5. `oh-my-antigravity verify`
6. Optional MCP server surface: `oh-my-antigravity mcp serve --dry-run --json`
7. Optional live team bridge: `omx team 3:executor "..."`

## Discoverability notes
- Gemini's extension install preview may expose skills more visibly than command prompts.
- Preview is not the full feature list: extension command TOML assets can still be installed even when they are not explicitly enumerated during install.
- If preview output looks sparse, verify availability with direct CLI commands instead of relying on the preview screen alone.

Primary command families:
- `setup`
- `doctor`
- `team run` / `team assemble` / `team plan` / `team prd` / `team exec`
- `team subagents`
- `team verify`
- `tools`
- `hud`
- `intent` / `mode` / `approval` / `reasoning`
- `workspace` / `taskboard` / `checkpoint`
- `ralph` / `ultrawork` / `loop`
- `consensus` / `optimize` / `memory` / `rules`
- `launch` / `stop`

## Guardrails
- Do not skip sandbox checks when a task requires shell execution.
- Prefer actionable failure output (what failed + how to fix it).
- Keep state transitions observable under `.omg/state/` while preserving `.omg/state/` compatibility when required.

## Handoff expectations
When executing team tasks, include:
- command(s) run,
- final exit status,
- key state/log paths for follow-up.
