# Install Scopes and Precedence

`oh-my-antigravity setup` supports scope-aware installation behavior. The default scope is **project**.

## Scope precedence

The resolved setup scope is determined in this strict order:

1. CLI flag (`--scope <value>`)
2. Persisted value (`.omg/setup-scope.json`)
3. Default value (`project`)

## Supported scopes

- `project`: writes configuration within the current repository (recommended default)
- `user`: persisted values remain valid and use repository-local managed files;
  an explicit `--scope user` is accepted for compatibility but the CLI warns and
  normalizes it to `project`.

> Note: both resolved scopes currently use repository-local managed files. The
> persisted-scope precedence contract still applies to supported values.

## Idempotency requirement

Running setup repeatedly with the same resolved scope must keep managed project
files stable:

- no duplicate marker blocks
- no overwrite outside the managed `.gemini/GEMINI.md` marker block
- no unexpected drift in managed files

`--dry-run` previews those managed project-file changes. Applied setup also links
the extension and removes same-named legacy skill directories from
`~/.agents/skills/` when they conflict with bundled extension skills; those
side effects are not part of the dry-run preview.

## Setup action status reporting

`omg setup` prints explicit per-action statuses and a status summary line:

- `created`: setup created a missing managed file/value
- `updated`: setup changed an existing managed file/value
- `unchanged`: setup validated a managed target and found no drift
- `skipped`: setup intentionally skipped writes (for example `--dry-run`)

The plain-text output includes:

- `Changes applied: yes|no`
- `Action statuses: created=<n>, updated=<n>, unchanged=<n>, skipped=<n>`
- one line per managed action (scope persistence, `.gemini/settings.json`, managed
  `.gemini/GEMINI.md` block, `.gemini/sandbox.Dockerfile`, and the deprecated
  `.gemini/agents/catalog.json` action, which setup reports as skipped)

Use the smoke script to validate:

```bash
scripts/smoke-install.sh
```

If `.omg/setup-scope.json` becomes invalid JSON or has an invalid `scope` value,
`omg doctor --fix` rewrites the file back to a managed default (`project`).
