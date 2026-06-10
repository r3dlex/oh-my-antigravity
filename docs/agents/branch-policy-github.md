---
type: branch-policy-checklist
project: oh-my-antigravity
host: github
repository: r3dlex/oh-my-antigravity
enforcement: checklist-only
owner: andre.burgstahler
last_updated: 2026-06-10
---

# GitHub Branch Policy Checklist - oh-my-antigravity

This is a checklist artifact per the AI SDLC ci-policy module. It documents the intended branch protection for `main`. Nothing here mutates GitHub settings; applying a ruleset is a deliberate admin action by the owner.

## Target

- Protected branch: `main`
- Enforcement state: checklist-only (no ruleset or classic protection applied yet)
- Owner: repository admin (andre.burgstahler)

## Required before merge

- [ ] Pull request required before merging (no direct pushes to `main`)
- [ ] Required status checks (ci.yml and ci-prek.yml legs):
  - [ ] `Pre-commit Hooks` (ci-prek.yml)
  - [ ] `Lint & Type Check` (ci.yml)
  - [ ] `Global Install Contract` (ci.yml)
  - [ ] `Test (Node 20)` (ci.yml)
  - [ ] `Security Audit` (ci.yml)
  - [ ] `PR Validation` (ci.yml, `pull_request` events only; validates conventional commit title and branch policy)
- [ ] Required approvals: 1 (single-maintainer repo; the AI review loop below substitutes for a second human)
- [ ] Dismiss stale approvals on new commits: enabled

## Branch policy note

`PR Validation` in ci.yml enforces that PRs to `main` must come from the `dev` branch. Feature branches should target `dev`; only `dev` PRs target `main`. This is a soft policy currently documented here; it is not enforced at the GitHub ruleset level yet.

## Recorded deviations

- 2026-06-10: PR #12 (`chore/ai-sdlc-gapfill`) was admin-merged to `main` with the `PR Validation` check red. That check fails by design for any head branch other than `dev`; the owner approved bypassing it for this gap-fill because `dev` was 61 commits behind `main` and routing the gap-fill through `dev` would have forced an unrelated dev/main reconciliation first. Enforcement is checklist-only, so no GitHub ruleset was bypassed. Precedent: release-please PRs to `main` have previously merged with this check red.
- Follow-up required: reconcile `dev` with `main`. `dev` carries a richer `.ai/` scaffold from PR #10 that overlaps the `.ai/` files added by PR #12; expect merge conflicts in `.ai/` when `dev` is next synced, and resolve in favor of the richer PR #10 content where the two disagree.

## Explicitly NOT required

- `Release Please` (release.yml): release flow job; gates releases, not merges.
- `Publish pre-release` (release.yml): currently failing due to the npm first-publish constraint (see `docs/agents/release-versioning-github.md`). Must never be a required merge check while this blocker exists.
- `Publish stable release` (release.yml): only runs when a release PR is merged; not a merge gate.

## auto-merge.yml

`auto-merge.yml` enables auto-merge for PRs targeting the `dev` branch. Required checks for `dev` should be configured so that auto-merge only fires when CI is green. The `main` branch policy described here is independent of that flow.

## Optional hardening (decide later)

- [ ] Require linear history (squash-merge enforces this in practice)
- [ ] Require signed commits
- [ ] Merge queue (overkill for a single-maintainer repo)
- [ ] Tag protection ruleset for `v*` (see `docs/agents/release-versioning-github.md`)

## PR merge gate (AI SDLC)

Merge is allowed only when all of these are true:

1. The **architect** confirms the PR still matches ADRs (`docs/architecture/adr/`), module boundaries, branch policy, and acceptance criteria.
2. The **reviewer** confirms code quality, safety, documentation, and drift checks have no blocking findings.
3. The **executor** confirms the requested change is complete, cleanup is done, and the required hosted checks are green.
4. The architect, reviewer, and executor loop reaches explicit agreement. If any role disagrees or required checks are not green, do not merge.

## References

- GitHub rulesets: <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets>
- GitHub branch protection: <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches>
