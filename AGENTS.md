<!-- Generated: 2026-02-25T05:26:01Z | Updated: 2026-06-10 -->

# oh-my-antigravity

> Formerly known as oh-my-gemini (renamed 2026).

## Purpose
`oh-my-antigravity` is an extension-first orchestration layer for Gemini CLI / Antigravity CLI workflows. It provides a TypeScript CLI (`omg`) with setup/doctor/team-run/verify commands, runtime backends (tmux default + experimental subagents), reliability-focused state persistence, and verification harnesses for smoke/integration/reliability gates.

The package publishes to npm as `@r3dlex/oh-my-antigravity` (currently v1.5.0). Releases are managed by **release-please** via `.github/workflows/release.yml` (see Release Flow below). The scoped package has never been published to the npm registry; the first publish requires a one-time manual `npm publish --access public` by a maintainer (OIDC/trusted-publishing cannot first-publish a scoped package that does not yet exist on npmjs.com).

## Key Files

| File | Description |
|------|-------------|
| `README.md` | Project overview, quickstart, command surface, and roadmap status. |
| `GEMINI.md` | Gemini CLI extension entry point and surface documentation. |
| `PRD.md` | Product Requirements Document for the project. |
| `REPOSITORY_STRUCTURE.md` | Canonical map of the repository layout. |
| `package.json` | npm package name (`@r3dlex/oh-my-antigravity`), version (`1.5.0`), scripts, CLI bins, and dev dependency definitions. Version is managed by release-please. |
| `tsconfig.json` | Strict typechecking config for source + tests. |
| `tsconfig.build.json` | Build-specific emit config for `dist/`. |
| `vitest.config.ts` | Node-based test runner configuration and timeouts. |
| `prek.toml` | Pre-commit hook definitions run by prek in CI via ci-prek.yml. |
| `.rules.ts` | Archgate quality rules across five domains (backend, frontend, data, architecture, general). |
| `.release-please-config.json` | release-please package config (`@r3dlex/oh-my-antigravity`, node release type). |
| `.release-please-manifest.json` | release-please version manifest (current: `1.5.0`). |
| `release.json` | AI SDLC release manifest: strategy, guardrail states, and tag-creation status. |
| `.gitignore` | Ignores generated artifacts (`dist/`, `.omg/`, `.omx/`, etc.). |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | Core implementation (CLI, installer, team orchestration, state). See `src/AGENTS.md`. |
| `src/common/` | Shared utilities used across `src/` modules. Contains `team-name.ts` (shared team naming helpers). |
| `tests/` | Smoke, integration, reliability suites + shared helpers. See `tests/AGENTS.md`. |
| `scripts/` | Bootstrap and automation scripts for setup and verification flows. See `scripts/AGENTS.md`. |
| `docs/` | Architecture, setup, and gate documentation. See `docs/AGENTS.md`. |
| `extensions/` | Gemini/Antigravity extension package and prompt surfaces. See `extensions/AGENTS.md`. |
| `.gemini/` | Managed Gemini local configuration (settings, sandbox baseline, subagent catalog). See `.gemini/AGENTS.md`. |
| `.github/` | CI/CD workflow definitions. See `.github/AGENTS.md`. |
| `.claude/` | Local Claude/MCP settings used by contributors. See `.claude/AGENTS.md`. |

## For AI Agents

### Working In This Directory
- Treat `extensions/oh-my-antigravity/` as canonical public UX and `src/` as implementation internals.
- Keep runtime defaults aligned with roadmap intent: tmux default backend, subagents opt-in.
- Do **not** hand-edit generated artifacts in `dist/`, `.omg/`, or `.omx/` unless the task is explicitly about generated state behavior.
- Keep code ESM-compatible (`type: module`, NodeNext imports).
- The npm package name is `@r3dlex/oh-my-antigravity`; the CLI bin names are `omg`, `omg-cli`, and `oh-my-antigravity`.
- Releases are managed by release-please; do not manually bump `version` in `package.json`. Merge conventional-commits PRs to `main`; release-please opens a release PR automatically.

### Release Flow
The `.github/workflows/release.yml` workflow triggers on push to `main` and `workflow_dispatch`. It runs three jobs:

1. **Release Please** - Runs `googleapis/release-please-action@v4` using `.release-please-config.json` and `.release-please-manifest.json`. On push to main it either creates/updates a release PR or (if the release PR was just merged) emits `release_created=true`.
2. **Publish pre-release** - Runs on push events when no release was created. Computes a pre-release version (`<base>-pre.<run-number>`), then publishes to both npmjs.com (`--tag pre --provenance`) and GitHub Packages. **Currently failing**: the scoped package `@r3dlex/oh-my-antigravity` has never been published to npmjs.com; OIDC/trusted-publishing cannot first-publish. A one-time manual `npm publish --access public` by a maintainer is required.
3. **Publish stable release** - Runs only when `release_created=true`. Publishes to npmjs.com (`--tag latest --provenance`) and GitHub Packages, then creates a floating major tag (`v<MAJOR>`).

### CI/CD
- `NPM_TOKEN` or OIDC `id-token: write` permission is required for npm publishing; `packages: write` for GitHub Packages.
- `GITHUB_TOKEN` is sufficient for release-please to create PRs and tags.

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
- Gemini/Antigravity CLI, tmux, Docker/Podman (runtime prerequisites)

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

<!-- v3-ai-sdlc-init:start -->
## AI SDLC v3

This repo follows the v3 AI-SDLC layout (`topology_type: standalone`, depth 0). It is the single source of truth for the cross-tool agent operating contract; `CLAUDE.md` is a thin pointer to this file (ADR-0004). `GEMINI.md` remains the content-bearing Gemini/Antigravity extension `contextFileName` product surface (documented exception, ADR-0004).

### Workflow

- Workflow doc: [`.ai/workflows/repo-workflow.md`](.ai/workflows/repo-workflow.md)
- Workflow manifest: [`.ai/workflows/repo-workflow.json`](.ai/workflows/repo-workflow.json)
- Handoff index: [`.ai/handoff/init-ai-repo-handoff.md`](.ai/handoff/init-ai-repo-handoff.md)

Continue through the mandatory phases and record status in `.ai/phases/<phase>/status.json`. See `.ai/matrix.json`, `docs/architecture/adr/`, and the legacy `docs/adr/`. Modules at `r3dlex/skills/init-ai-repo/modules/`.

### Harness Map

The six context types this harness assembles, and where each lives (ADR-0005):

| Context type | Canonical source | Static or dynamic |
| --- | --- | --- |
| `Instructions` | `AGENTS.md`, `GEMINI.md`, `extensions/oh-my-antigravity/` | Static |
| `Knowledge` | `docs/architecture/`, `docs/setup/`, `docs/testing/` | Static |
| `Memory` | `.omg/state/`, project memory entries | Dynamic |
| `Examples` | `.ai/evals/<set>/`, `docs/examples/` | Static |
| `Tools` | `.ai/mcp/registry.json` (`omg_cli_tools` server), `src/` CLI surface | Dynamic |
| `Guardrails` | `.rules.ts`, `prek.toml`, `.ai/policies/` | Static |

**Static-vs-dynamic boundary.** Static context is fixed at the start of a task and is reviewed and versioned in-repo; dynamic context is assembled per-run (memory written by local agents, tool/MCP results resolved at call time). This boundary is a reviewed, versioned decision (ADR-0005); moving a context type across it requires an ADR update.
<!-- v3-ai-sdlc-init:end -->
