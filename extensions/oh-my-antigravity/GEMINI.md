<<<<<<< HEAD
# oh-my-antigravity Extension Context

This is the canonical Gemini CLI extension surface for **oh-my-antigravity (OMG)**.
=======
# oh-my-gemini Extension Context

This is the canonical Gemini CLI extension surface for **oh-my-gemini (OMG)**.
>>>>>>> merge-tmp

## Available namespaces
- `/omg:*` — preferred OMG command namespace
- `/omg:*` — legacy compatibility namespace

## Extension assets
- `commands/omg` re-exports the current OMG command set
- `commands/omg` keeps legacy command aliases available
- `agents/` and `skills/` reuse the shared repo catalogs

Prefer OMG-branded surfaces for new workflows while legacy OMG paths remain available during migration.
<<<<<<< HEAD
=======

## Agy / Antigravity lifecycle hooks

This package includes an agy-native hook bridge at `hooks/hooks.json`. The bridge delegates lifecycle events to `oh-my-gemini hooks exec` so the CLI owns policy and state behavior while the extension remains a thin public UX surface.

- `BeforeAgent` runs before each agent turn and may return `hookSpecificOutput.additionalContext` for prompt routing, project memory, and learned-pattern reminders.
- `AfterTool` runs after tool execution and may return follow-up recovery or verification guidance.
- Keep `gemini-extension.json`, `GEMINI.md`, and `hooks/hooks.json` synchronized between the repo root and this packaged extension surface.

Hooks are advisory and fail-open; they should not be used to override explicit user or system instructions.
>>>>>>> merge-tmp
