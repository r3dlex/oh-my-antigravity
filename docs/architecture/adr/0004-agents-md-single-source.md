# ADR 0004: AGENTS.md as single source of truth; CLAUDE.md as thin pointer; GEMINI.md exception

## Status
Accepted.

## Context
`AGENTS.md`, `CLAUDE.md`, and `GEMINI.md` are static-context rule files;
portability across tools and vendors is a core goal of the AI-SDLC scaffold.
Having a tool-specific rule file carry independent content-bearing sections causes
it to drift from `AGENTS.md` and breaks tool-agnostic discovery.

The init-ai-repo v3 standard requires `AGENTS.md` to be the single source of truth
and that tool-specific rule files be thin pointers with no content-bearing
sections. In `oh-my-antigravity`, however, `GEMINI.md` is not a generic rule file:
`gemini-extension.json` declares `"contextFileName": "GEMINI.md"`, and `GEMINI.md`
is shipped in the published npm package `files` list. It is the Gemini/Antigravity
extension's primary, product-facing agent-context surface. Reducing it to a thin
pointer would degrade the published extension.

## Decision
- `AGENTS.md` is the **single source of truth** for the cross-tool operating
  contract, including the Harness Map, workflow links, and AI SDLC methodology.
- `CLAUDE.md` is a **thin pointer** to `AGENTS.md` — a short header and a link, no
  content-bearing sections (per `modules/documentation-blueprint.md`).
- `GEMINI.md` is a **documented exception**: it remains the content-bearing
  Gemini/Antigravity extension `contextFileName` product surface. It links to the
  shared context (`AGENTS.md`) but retains the
  extension-specific context required by the published extension. Moving its
  content into a thin pointer would require also re-pointing
  `gemini-extension.json` and is out of scope for this additive upgrade.
- Every tool that ingests `CLAUDE.md` receives a deterministic pointer to
  `AGENTS.md` and the full operating contract therein.

## Consequences
- One canonical cross-tool rule file (`AGENTS.md`); `CLAUDE.md` never drifts from it.
- The published Gemini/Antigravity extension keeps its required context surface
  intact; CI and the extension contract stay green.
- The `GEMINI.md`-as-product-surface exception is recorded as a reviewed,
  versioned decision rather than an implicit one; revisiting it (e.g. pointing
  `contextFileName` elsewhere) requires an ADR update.
