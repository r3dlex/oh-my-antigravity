English | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-antigravity (`omg`)

Extension-first multi-agent orchestration for Gemini CLI, with tmux-backed team execution, persistent local state, and verification-oriented workflows.

- Repository: [`r3dlex/oh-my-antigravity`](https://github.com/r3dlex/oh-my-antigravity)
- npm package name: `@r3dlex/oh-my-antigravity`
- CLI commands: `omg`, `omg-cli`, and `oh-my-antigravity`

> **Package status:** the scoped package has not completed its first npmjs.com publish. Until that one-time maintainer action is complete, use the source installation below rather than a registry install.

## Prerequisites

- Node.js `>=20.10.0` and npm
- [Google Gemini CLI](https://www.npmjs.com/package/@google/gemini-cli), which provides the `gemini` command
- `tmux` for the default team backend
- Git for the current source installation
- Docker or Podman only when using container sandbox mode

Check the required tools:

```bash
node --version
npm --version
gemini --version
tmux -V
git --version
```

## Quick Start

This is the recommended path until the first npm publish is complete:

```bash
git clone https://github.com/r3dlex/oh-my-antigravity.git
cd oh-my-antigravity
npm ci
npm run build
npm install -g .

# Run these from the project where you want to use omg.
cd /path/to/your-project
omg setup --scope project --dry-run
omg setup --scope project
omg doctor
```

`--dry-run` previews managed project-file changes; it does not link the extension or clean legacy user-skill conflicts. An applied setup reports `Setup scope: project`, per-action statuses, and a successful extension link (or a manual link command). A healthy installation ends the doctor report with:

```text
Overall: healthy
```

Launch an interactive Gemini CLI session with the extension loaded:

```bash
omg
```

Or verify team planning without starting workers:

```bash
omg team run --task "inspect this repository" --dry-run --json
```

## What setup manages

Project scope is the supported default. `--scope user` currently falls back to project scope.

`omg setup` creates or updates:

| Path | Ownership |
| --- | --- |
| `.omg/setup-scope.json` | Persisted setup scope |
| `.omg/state/`, `.omg/logs/`, `.omg/plans/` | Generated runtime state and logs |
| `.gemini/settings.json` | Required OMG-managed values are merged or refreshed; unrelated settings are preserved |
| `.gemini/GEMINI.md` | Only the `oh-my-antigravity (managed)` marker block is replaced |
| `.gemini/sandbox.Dockerfile` | Created only when absent |

Generated `.omg/` state and local `.gemini/` configuration are gitignored in this repository. Do not hand-edit generated runtime state. Preserve these managed markers in `.gemini/GEMINI.md`:

```text
# >>> oh-my-antigravity (managed) >>>
# <<< oh-my-antigravity (managed) <<<
```

Safety notes:

- Run `omg setup --scope project --dry-run` before applying managed project-file changes in an existing project. Extension linking and legacy user-skill cleanup occur only during the applied setup and are not included in the preview.
- Repeated setup runs are idempotent for managed project files. The managed `.gemini/GEMINI.md` update preserves content outside its marker block.
- Setup removes same-named legacy skill directories from `~/.agents/skills/` when they conflict with skills bundled by this extension. Back up intentional local customizations before setup.
- `omg doctor --fix` only repairs supported managed state, such as an invalid setup-scope file or missing `.omg/state` directory.

## Health checks

```bash
omg doctor
omg doctor --json
omg extension path
```

`doctor` checks Node.js, npm, the `gemini` command, tmux, setup scope, extension assets, and state-directory writeability. Docker or Podman and a globally available `oh-my-antigravity` binary are reported as optional checks.

Contributors can run the repository verification harness from the oh-my-antigravity source checkout only:

```bash
npm run verify
```

## Updating and uninstalling

For the current source installation:

```bash
cd /path/to/oh-my-antigravity
git pull --ff-only
npm ci
npm run build
npm install -g .
omg setup --scope project
omg doctor
```

After the scoped package is first-published, `omg update` will update the global npm package. `omg uninstall` removes the global npm package, but intentionally leaves project-local `.omg/` and `.gemini/` files for manual review or removal.

## Troubleshooting

| Symptom | Check or recovery |
| --- | --- |
| `omg: command not found` | Re-run `npm install -g .` from the built checkout and ensure npm's global bin directory is on `PATH`. |
| `gemini command not found` | Install Google Gemini CLI with `npm install -g @google/gemini-cli`, then rerun `omg doctor`. |
| tmux is missing | Install tmux, then rerun `omg doctor`; tmux is required by the default team backend. |
| Extension auto-link fails or stalls | Run `omg extension path`, then `gemini extensions link <reported-path>` and inspect `gemini extensions list`. |
| Setup scope or state directory is invalid | Inspect with `omg doctor --json`, then run `omg doctor --fix` and rerun `omg doctor`. |
| Sandbox check is unavailable | Install Docker or Podman, or run Gemini CLI without container sandbox mode. |

If the diagnostic output does not identify the problem, [open an issue](https://github.com/r3dlex/oh-my-antigravity/issues) with `omg doctor --json` output after removing sensitive paths or values.

## Documentation

- [CLI command reference](docs/omg/commands.md)
- [Setup scopes and idempotency](docs/setup/install-scopes.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Runtime backends](docs/architecture/runtime-backend.md)
- [Verification gates](docs/testing/gates.md)
- [Examples](docs/examples/)
- [Changelog](CHANGELOG.md)

## Contributing and community

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the development setup, branch conventions, and validation sequence. Use [GitHub Issues](https://github.com/r3dlex/oh-my-antigravity/issues) for bugs, onboarding problems, and focused proposals.

## License

[MIT](LICENSE)
