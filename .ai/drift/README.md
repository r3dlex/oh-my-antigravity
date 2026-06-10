# Drift Directory
`physical-copy` sync writes backups under `backups/<timestamp>/` and audit entries. See `r3dlex/skills/ai-sdlc-init/modules/sync.md`.

`last-drift.json` lists only `.rules.ts`, `prek.toml`, and `AGENTS.md` in `checked_paths` because `.ai/matrix.json` declares this repository standalone with no inherited assets; only the locally governed foundation files are drift-checked.
