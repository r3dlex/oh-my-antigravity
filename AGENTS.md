<!-- Generated: 2026-02-25T05:26:01Z | Updated: 2026-03-03T07:46:00Z -->

# oh-my-gemini

## Purpose
`oh-my-gemini` is an extension-first orchestration layer for Gemini CLI workflows. It provides a TypeScript CLI (`omg`) with setup/doctor/team-run/verify commands, runtime backends (tmux default + experimental subagents), reliability-focused state persistence, and verification harnesses for smoke/integration/reliability gates.

The package publishes to npm as `oh-my-gemini-sisyphus` (currently v0.1.0). Releasing a new version requires bumping `package.json` version and pushing to `main`; the `release.yml` workflow auto-publishes when the local version differs from the npm registry version.

## Key Files

| File | Description |
|------|-------------|
| `README.md` | Project overview, quickstart, command surface, and roadmap status. |
| `package.json` | npm package name (`oh-my-gemini-sisyphus`), version, scripts, CLI bins, and dev dependency definitions. Bump version here to trigger a new npm release. |
| `tsconfig.json` | Strict typechecking config for source + tests. |
| `tsconfig.build.json` | Build-specific emit config for `dist/`. |
| `vitest.config.ts` | Node-based test runner configuration and timeouts. |
| `.gitignore` | Ignores generated artifacts (`dist/`, `.omg/`, `.omx/`, etc.). |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | Core implementation (CLI, installer, team orchestration, state). See `src/AGENTS.md`. |
| `src/common/` | Shared utilities used across `src/` modules. Contains `team-name.ts` (shared team naming helpers). |
| `tests/` | Smoke, integration, reliability suites + shared helpers. See `tests/AGENTS.md`. |
| `scripts/` | Bootstrap and automation scripts for setup and verification flows. See `scripts/AGENTS.md`. |
| `docs/` | Architecture, setup, and gate documentation. See `docs/AGENTS.md`. |
| `extensions/` | Gemini extension package and prompt surfaces. See `extensions/AGENTS.md`. |
| `.gemini/` | Managed Gemini local configuration (settings, sandbox baseline, subagent catalog). See `.gemini/AGENTS.md`. |
| `.github/` | CI/CD workflow definitions. See `.github/AGENTS.md`. |
| `.claude/` | Local Claude/MCP settings used by contributors. See `.claude/AGENTS.md`. |

## For AI Agents

### Working In This Directory
- Treat `extensions/oh-my-gemini/` as canonical public UX and `src/` as implementation internals.
- Keep runtime defaults aligned with roadmap intent: tmux default backend, subagents opt-in.
- Do **not** hand-edit generated artifacts in `dist/`, `.omg/`, or `.omx/` unless the task is explicitly about generated state behavior.
- Keep code ESM-compatible (`type: module`, NodeNext imports).
- The npm package name is `oh-my-gemini-sisyphus`; the CLI bin names remain `omg` and `oh-my-gemini`.
- To trigger a new npm release: bump `version` in `package.json` and push to `main`. The `release.yml` workflow detects the version difference and publishes automatically.

### Testing Requirements
- Preferred validation sequence for code changes:
  1. `npm run typecheck`
  2. `npm run test` (or targeted suite)
  3. `npm run verify` for command-level gate checks
- For orchestration runtime changes, additionally run `npm run test:reliability`.

### Common Patterns
- Command handlers parse args via shared helpers (`parseCliArgs`, option readers).
- State writes are deterministic and persisted under `.omg/state` using JSON/NDJSON helpers.
- Runtime behavior is backend-driven through the `RuntimeBackend` contract.
- Shared utilities (e.g., team naming) live in `src/common/` and are imported by other `src/` modules.

## Dependencies

### Internal
- `src/cli` orchestrates CLI command dispatch to installer/team/state modules.
- `src/team` depends on `src/state` persistence and runtime backend adapters.
- `src/common` provides shared utilities (team naming, etc.) consumed by `src/team` and other modules.
- Scripts and tests exercise the same CLI entrypoints rather than duplicating orchestration logic.

### External
- Node.js 20+ runtime
- TypeScript + tsx (build/dev execution)
- Vitest (test harness)
- Gemini CLI, tmux, Docker/Podman (runtime prerequisites)

### CI/CD
- `NPM_TOKEN` GitHub secret must be set in repository settings to enable npm publishing via `release.yml`.

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->

<!-- ai-sdlc-init:start -->

## AI SDLC Methodology

This repository uses the AI SDLC methodology scaffolded by `ai-sdlc-init`.

### Architecture Decision Records

Significant architectural decisions are recorded in [`docs/adr/`](docs/adr/).
Before making a change that affects module boundaries, API contracts, data
schemas, or dependency direction, check whether a relevant ADR exists.
If your change contradicts an existing ADR, either update the ADR or open a
discussion before proceeding.

### Archgate Rules

Code quality rules are defined in [`.rules.ts`](.rules.ts) across five domains:
`backend`, `frontend`, `data`, `architecture`, `general`. Rules carry a severity
(`error`, `warn`, `info`). Structural validation of `.rules.ts` runs in CI via
the `validate-rules` prek hook. Semantic enforcement (did the PR violate a rule?)
is an agent behavior at PR review time.

### Karpathy Baseline

All agents operating in this repository load
[`.agents/skills/karpathy-guidelines/SKILL.md`](.agents/skills/karpathy-guidelines/SKILL.md)
as a baseline. Four rules apply to every task: Think Before Coding, Simplicity
First, Surgical Changes, Goal-Driven Execution. See the SKILL.md for violation
and correction examples.

### Drift Verification Protocol

At PR review time, the reviewing agent:
1. Loads the PR diff alongside the BRD, PRD, acceptance criteria, and any ADRs
   whose scope overlaps with the changed files.
2. Produces a drift report identifying whether changes match ACs, conflict with
   ADRs, or violate architectural constraints from `.rules.ts`.
3. Leaves the drift report as a PR comment or review summary.

This is a documented agent behavior. It is not enforced as a CI gate in this
iteration.

### Circuit Breaker Protocol

Before starting work on an issue:
1. Check whether ≥ 3 prior attempts exist without resolution (look for
   `attempts:N` labels or a comment history showing repeated failures).
2. If the circuit is tripped (≥ 3 attempts, no resolution), escalate to a
   human with a written summary of what was tried and what blocked each attempt.
3. Do not make a fourth attempt without human acknowledgement.

<!-- ai-sdlc-init:end -->
