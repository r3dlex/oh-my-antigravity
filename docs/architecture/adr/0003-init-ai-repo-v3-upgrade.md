# ADR 0003: init-ai-repo v3 governance upgrade

## Status
Accepted.

## Context
`oh-my-antigravity` adopted an early AI-SDLC scaffold with a minimal `.ai/` layer
(`matrix.json`, `drift/`) plus `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `prek.toml`,
`.rules.ts`, and `docs/adr/ADR-0001`. The current init-ai-repo v3 standard adds
governance layers that were missing: workflow manifests, traceability graph,
eval-coverage scaffold, MCP/A2A surface, provider-neutral model-routing policy,
observability conventions, an AI-failure-mode review checklist, command surfaces,
phased status files, and the init/repo-profile evidence.

## Decision
Additively generate the missing v3 governance layers, adapted to a standalone
node CLI tool and Gemini/Antigravity extension (`topology_type: standalone`,
depth 0). Refresh `AGENTS.md` as the single source of truth (with a Harness Map
and workflow links) and make `CLAUDE.md` a thin pointer to `AGENTS.md` (ADR-0004).
`GEMINI.md` remains content-bearing because it is the Gemini/Antigravity extension
`contextFileName` product surface (documented exception, ADR-0004).

Skills-catalog-specific artifacts are intentionally excluded — this repo is not a
skills catalog. Cascade is a no-op for standalone topology. No example evalsets
are shipped; the eval-coverage gate remains offline-structural. New v3 ADRs live
in `docs/architecture/adr/` using numbers 0003–0005; the legacy
`docs/adr/ADR-0001` is preserved unchanged (no numeric collision).

## Consequences
- The repo now exposes the full v3 surface map: `Instructions`, `Knowledge`,
  `Memory`, `Examples`, `Tools`, and `Guardrails`.
- Existing governance content (`.ai/matrix.json`, `.ai/drift/`, `docs/adr/ADR-0001`,
  `prek.toml`, `.rules.ts`) is preserved unchanged.
- The upgrade is documentation/governance only: no application source code,
  package version, or runtime behavior changed.
