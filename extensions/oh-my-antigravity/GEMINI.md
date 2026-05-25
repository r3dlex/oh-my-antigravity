# oh-my-antigravity Extension Context

This is the canonical Gemini CLI extension surface for **oh-my-antigravity (OMG)**.

## Available namespaces
- `/omg:*` — preferred OMG command namespace
- `/omg:*` — legacy compatibility namespace

## Extension assets
- `commands/omg` re-exports the current OMG command set
- `commands/omg` keeps legacy command aliases available
- `agents/` and `skills/` reuse the shared repo catalogs

Prefer OMG-branded surfaces for new workflows while legacy OMG paths remain available during migration.
