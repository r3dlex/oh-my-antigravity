# oh-my-antigravity Repository Structure

## Overview
oh-my-antigravity is a multi-agent orchestration system with team lifecycle management, control-plane hardening, and runtime state commands. The project is organized into source code, tests, documentation, extensions, and scripts.

## Directory Tree

```
oh-my-antigravity/
│
├── .claude/
│   ├── AGENTS.md
│   └── settings.local.json
│
├── .gemini/
│   ├── AGENTS.md
│   ├── GEMINI.md
│   ├── agents/
│   │   └── catalog.json
│   ├── sandbox.Dockerfile
│   └── settings.json
│
├── .github/
│   ├── AGENTS.md
│   └── workflows/
│       ├── ci.yml
│       └── release.yml
│
├── .omc/
│   ├── state/ (OMC execution state)
│   │   ├── checkpoints/
│   │   ├── sessions/
│   │   └── team/ (multiple team run states)
│   └── sessions/
│
├── .omx/
│   ├── drafts/
│   └── logs/
│
├── docs/
│   ├── AGENTS.md
│   ├── analysis/ (recent findings & decisions)
│   ├── architecture/ (design documentation)
│   ├── archive/ (historical docs)
│   ├── assets/ (images: omg_logo.png)
│   ├── omg/ (OMG adoption docs)
│   ├── planning/ (planning docs)
│   ├── setup/ (setup guides)
│   └── testing/ (testing guidelines)
│
├── extensions/
│   ├── AGENTS.md
│   └── oh-my-antigravity/
│       ├── AGENTS.md
│       ├── commands/
│       │   ├── doctor.toml
│       │   ├── setup.toml
│       │   └── team/
│       │       ├── live.toml
│       │       ├── run.toml
│       │       ├── subagents.toml
│       │       └── verify.toml
│       └── gemini-extension.json
│
├── scripts/
│   ├── AGENTS.md
│   ├── bootstrap-dev.sh
│   ├── consumer-contract-smoke.sh
│   ├── docker-ci-full.sh
│   ├── docker-ci-keep.sh
│   ├── docker-ci-smoke.sh
│   ├── e2e-omx-team.sh
│   ├── global-install-contract-smoke.sh
│   ├── integration-team-run.sh
│   ├── legacy-bypass-policy.sh
│   ├── sandbox-smoke.sh
│   ├── setup-subagents.sh
│   └── smoke-install.sh
│
├── src/
│   ├── AGENTS.md
│   ├── constants.ts
│   │
│   ├── cli/
│   │   ├── AGENTS.md
│   │   ├── index.ts
│   │   ├── types.ts
│   │   └── commands/
│   │       ├── AGENTS.md
│   │       ├── arg-utils.ts
│   │       ├── doctor.ts
│   │       ├── extension-path.ts
│   │       ├── setup.ts
│   │       ├── team-command-shared.ts
│   │       ├── team-lifecycle-state.ts
│   │       ├── team-resume.ts
│   │       ├── team-run.ts
│   │       ├── team-shutdown.ts
│   │       ├── team-status.ts
│   │       └── verify.ts
│   │
│   ├── common/
│   │   ├── AGENTS.md
│   │   └── team-name.ts
│   │
│   ├── installer/
│   │   ├── AGENTS.md
│   │   ├── index.ts
│   │   ├── merge-markers.ts
│   │   └── scopes.ts
│   │
│   ├── state/
│   │   ├── AGENTS.md
│   │   ├── filesystem.ts
│   │   ├── index.ts
│   │   ├── team-state-store.ts
│   │   └── types.ts
│   │
│   └── team/
│       ├── AGENTS.md
│       ├── constants.ts
│       ├── index.ts
│       ├── monitor.ts
│       ├── role-output-contract.ts
│       ├── role-skill-mapping.ts
│       ├── subagents-blueprint.ts
│       ├── subagents-catalog.ts
│       ├── team-orchestrator.ts
│       ├── types.ts
│       │
│       ├── control-plane/
│       │   ├── AGENTS.md
│       │   ├── failure-taxonomy.ts
│       │   ├── identifiers.ts
│       │   ├── index.ts
│       │   ├── mailbox-lifecycle.ts
│       │   └── task-lifecycle.ts
│       │
│       └── runtime/
│           ├── AGENTS.md
│           ├── backend-registry.ts
│           ├── index.ts
│           ├── process-utils.ts
│           ├── runtime-backend.ts
│           ├── subagents-backend.ts
│           └── tmux-backend.ts
│
├── tests/
│   ├── AGENTS.md
│   │
│   ├── integration/ (end-to-end workflows)
│   │   ├── AGENTS.md
│   │   ├── consumer-contract-gates.test.ts
│   │   ├── docker-ci-smoke.test.ts
│   │   ├── extension-path-command.test.ts
│   │   ├── subagents-team-run.test.ts
│   │   ├── team-lifecycle-commands.test.ts
│   │   └── team-lifecycle.test.ts
│   │
│   ├── reliability/ (robustness & edge cases)
│   │   ├── AGENTS.md
│   │   ├── dead-worker-watchdog.test.ts
│   │   ├── doctor-command.test.ts
│   │   ├── orchestrator-failure-paths.test.ts
│   │   ├── role-output-contract.test.ts
│   │   ├── role-skill-mapping.test.ts
│   │   ├── state-store-durability.test.ts
│   │   ├── subagents-backend.test.ts
│   │   ├── subagents-catalog-role-skill.test.ts
│   │   ├── subagents-catalog.test.ts
│   │   ├── subagents-orchestrator.test.ts
│   │   ├── team-control-plane.test.ts
│   │   ├── team-lifecycle-commands.test.ts
│   │   ├── team-resume-command.test.ts
│   │   ├── team-run-subagents-options.test.ts
│   │   ├── team-shutdown-command.test.ts
│   │   ├── team-state-store-contract.test.ts
│   │   ├── team-status-command.test.ts
│   │   ├── tmux-backend.test.ts
│   │   └── verify-command-package-manager.test.ts
│   │
│   ├── smoke/ (quick validation)
│   │   ├── AGENTS.md
│   │   ├── cli-entrypoint-symlink.test.ts
│   │   ├── sandbox-smoke.test.ts
│   │   ├── setup-contract-help.test.ts
│   │   └── setup-idempotency.test.ts
│   │
│   └── utils/
│       └── runtime.ts
│
├── .gitignore
├── .npmrc
├── CLAUDE.md (Claude Code instructions)
├── CONTRIBUTING.md
├── GEMINI.md (Gemini documentation)
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json

[dist/ and node_modules/ excluded from above]
```

## Detailed Module Breakdown

### `/src` - Source Code (Core Implementation)

#### `/src/cli` - Command-Line Interface
Provides user-facing commands for team management and system operations.

**Files:**
- `index.ts` - CLI entry point and dispatcher
- `types.ts` - CLI type definitions and interfaces
- `/commands` - Individual command implementations
  - `setup.ts` - Initial setup and installation
  - `doctor.ts` - System diagnostics
  - `extension-path.ts` - Extension path resolution
  - `team-run.ts` - Start/run a team
  - `team-lifecycle-state.ts` - Query lifecycle state
  - `team-resume.ts` - Resume a paused team
  - `team-shutdown.ts` - Graceful team shutdown
  - `team-status.ts` - Query team status
  - `verify.ts` - Verification checks
  - `team-command-shared.ts` - Shared utilities for team commands
  - `arg-utils.ts` - Argument parsing helpers

**Responsibility:** User interaction, command parsing, error handling

#### `/src/team` - Team Orchestration Engine
Core orchestration logic for multi-agent team execution.

**Main Files:**
- `team-orchestrator.ts` - Main orchestrator, coordinates execution
- `types.ts` - Team type definitions (Task, Worker, Message, etc.)
- `constants.ts` - Team-specific constants
- `monitor.ts` - Team monitoring and health tracking
- `subagents-blueprint.ts` - Defines subagent configurations
- `subagents-catalog.ts` - Manages available subagent roles
- `role-output-contract.ts` - Validates role output formats
- `role-skill-mapping.ts` - Maps roles to capabilities

**Control Plane** (`/control-plane/`):
- `index.ts` - Control plane entry point
- `task-lifecycle.ts` - Task state machine and lifecycle
- `mailbox-lifecycle.ts` - Message queue and lifecycle
- `failure-taxonomy.ts` - Classifies and categorizes failures
- `identifiers.ts` - ID generation and tracking

**Runtime** (`/runtime/`):
- `index.ts` - Runtime entry point
- `runtime-backend.ts` - Abstract interface for process execution
- `tmux-backend.ts` - Tmux-based backend (process management via tmux)
- `subagents-backend.ts` - Subagent-based backend
- `backend-registry.ts` - Selects and manages backends
- `process-utils.ts` - Process creation and management utilities

**Responsibility:** Team lifecycle, agent coordination, failure handling, process execution

#### `/src/state` - State Management
Persistent state storage and retrieval for team execution.

**Files:**
- `team-state-store.ts` - State persistence layer
- `filesystem.ts` - Filesystem-based storage implementation
- `types.ts` - State type definitions
- `index.ts` - State module exports

**Responsibility:** Durability contracts, state recovery, checkpointing

#### `/src/installer` - Installation System
Handles installation and integration of oh-my-antigravity.

**Files:**
- `index.ts` - Main installer logic
- `scopes.ts` - Installation scope definitions
- `merge-markers.ts` - Handles merge conflicts during installation

**Responsibility:** Global installation, configuration merging, setup contracts

#### `/src/common` - Shared Utilities
Common utilities shared across modules.

**Files:**
- `team-name.ts` - Team naming and validation utilities

#### `/src/constants.ts`
Global constants and configuration values.

### `/tests` - Test Suite (~29 test files)

#### `/tests/integration` - Integration Tests (6 files)
End-to-end workflows validating full system behavior.

**Test Coverage:**
- Team lifecycle (creation, execution, completion)
- Team lifecycle commands (run, resume, shutdown)
- Subagent team execution
- Consumer contract validation
- Docker CI workflows
- Extension path resolution

#### `/tests/reliability` - Reliability Tests (19 files)
Robustness, edge cases, failure scenarios, and contract validation.

**Test Coverage:**
- Control plane reliability and task lifecycle
- State store durability and contracts
- Orchestrator failure paths and recovery
- Dead worker detection and handling
- Subagent orchestration and backends
- Role output and skill mapping contracts
- CLI command reliability (doctor, lifecycle, status, verify)
- Tmux backend process management

#### `/tests/smoke` - Smoke Tests (4 files)
Quick validation checks for critical functionality.

**Test Coverage:**
- CLI entrypoint symlink verification
- Setup command idempotency
- Setup help contract
- Sandbox functionality

#### `/tests/utils`
Test utilities and helpers for test execution.

### `/docs` - Documentation

**Key Sections:**
- `/architecture` - System design documents (control-plane, runtime, state, orchestration)
- `/analysis` - Recent findings and decision records
- `/setup` - Installation and setup guides
- `/testing` - Testing strategies and guidelines
- `/omg` - OMG (oh-my-claudecode) integration docs
- `/planning` - Project planning documents
- `/archive` - Historical documentation
- `/assets` - Images and media

### `/extensions` - Extension System

**Structure:**
- `/oh-my-antigravity/` - Main extension
  - `gemini-extension.json` - Extension manifest
  - `/commands/` - TOML command definitions
    - `setup.toml`, `doctor.toml` - Top-level commands
    - `/team/` - Team subcommands (run, live, subagents, verify)

**Purpose:** Integration with oh-my-antigravity environment

### `/scripts` - Automation Scripts

**Categories:**
- **Development:** `bootstrap-dev.sh`, `setup-subagents.sh`
- **Testing:** `smoke-install.sh`, `sandbox-smoke.sh`
- **CI/CD:** `docker-ci-*.sh`, `integration-team-run.sh`
- **Validation:** `consumer-contract-smoke.sh`, `global-install-contract-smoke.sh`
- **Integration:** `e2e-omx-team.sh`, `legacy-bypass-policy.sh`

### `/.github` - GitHub Integration

**Workflows:**
- `ci.yml` - Continuous integration pipeline
- `release.yml` - Release automation

### `/.gemini` - Gemini Configuration

**Contents:**
- `gemini-extension.json` - Extension registration
- `settings.json` - Gemini settings
- `sandbox.Dockerfile` - Isolated execution environment
- `/agents/catalog.json` - Agent catalog
- `GEMINI.md` - Gemini-specific docs

### `/.claude` - Claude Code Configuration

**Contents:**
- `settings.local.json` - Local Claude Code settings

### `/.omc` - OMC Execution State

**Structure:**
- `/state/checkpoints/` - Execution checkpoints
- `/state/sessions/` - Session state
- `/state/team/` - Team execution states (multiple team runs with tasks/mailbox/workers/events)

### `/.omx` - OMX State

**Structure:**
- `/drafts/` - Draft artifacts
- `/logs/` - Execution logs

## Key Architectural Concepts

### Control Plane
- Manages task and mailbox (message) lifecycles
- Classifies failures with detailed taxonomy
- Generates unique identifiers for tracking
- Coordinates state transitions for reliable execution

### Runtime Backends
Pluggable execution backends supporting multiple runtime strategies:
- **TmuxBackend** - Process execution via tmux (session/window management)
- **SubagentsBackend** - Integration with subagent infrastructure
- **BackendRegistry** - Selects appropriate backend based on configuration

### State Management
- Filesystem-based persistent storage
- Durability contracts ensure data integrity
- Supports state recovery and resumption
- Team state includes tasks, workers, messages, and lifecycle info

### Team Orchestration
- Multi-agent coordination with defined lifecycle (run → execute → shutdown)
- Role-to-skill mapping for capability assignment
- Output contracts for consistent role outputs
- Monitoring and health tracking

### CLI Interface
Command-driven user interface with subcommands for:
- Setup and installation
- Team lifecycle (run, resume, shutdown, status)
- System diagnostics (doctor, verify)
- Extension management

## AGENTS.md Documentation

Each major directory contains an `AGENTS.md` file documenting specialist agent roles:
- **Source modules:** cli, team, state, installer
- **Test suites:** integration, reliability, smoke
- **Configuration:** github, gemini, claude
- **Infrastructure:** docs, extensions, scripts

These files guide agent specialization for implementation, review, and maintenance tasks.

## Build & Dependencies

- **Package Manager:** npm (see `package.json`)
- **Language:** TypeScript (see `tsconfig.json`)
- **Configuration:** `.npmrc` for registry settings

## Git Configuration

- **Ignore File:** `.gitignore` - Excludes build artifacts, dependencies, etc.
- **Workflows:** GitHub Actions for CI/CD in `/.github/workflows/`

---

**Last Updated:** 2026-03-03
**Structure:** Hierarchical with clear module boundaries and AGENTS.md documentation at each level
