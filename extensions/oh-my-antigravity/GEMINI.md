# oh-my-antigravity Extension Context

This is the canonical Gemini CLI extension surface for **oh-my-antigravity (OMG)**.

## Available commands
- `/setup` and `/doctor` — install and diagnose the project integration
- `/team:*` — run, verify, or inspect orchestrated work

## Extension assets
- `commands/` provides the packaged command prompts
- `agents/` and `skills/` reuse the shared repo catalogs

Prefer the `omg` and `oh-my-antigravity` command surfaces for new workflows.

## Agy / Antigravity lifecycle hooks

This package includes an agy-native hook bridge at `hooks/hooks.json`. The bridge delegates lifecycle events to `oh-my-antigravity hooks exec` so the CLI owns policy and state behavior while the extension remains a thin public UX surface.

- `BeforeAgent` runs before each agent turn and may return `hookSpecificOutput.additionalContext` for prompt routing, project memory, and learned-pattern reminders.
- `AfterTool` runs after tool execution and may return follow-up recovery or verification guidance.
- Keep `gemini-extension.json`, `GEMINI.md`, and `hooks/hooks.json` synchronized between the repo root and this packaged extension surface.

Hooks are advisory and fail-open; they should not be used to override explicit user or system instructions.
