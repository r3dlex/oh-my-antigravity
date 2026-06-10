---
type: release-versioning-checklist
project: oh-my-antigravity
host: github
repository: r3dlex/oh-my-antigravity
strategy: semver
enforcement: checklist-only
last_updated: 2026-06-10
---

# Release Versioning Checklist - oh-my-antigravity

Per the AI SDLC release-versioning module. Strategy is **semver** via release-please. The current base version is `1.5.0` (in `package.json` and `.release-please-manifest.json`). Release-please manages version bumps automatically from conventional commits; do not manually edit the version field.

## Known blocker: npm first-publish required

> **Action required before any publish succeeds.**

The scoped package `@r3dlex/oh-my-antigravity` does not exist on npmjs.com. OIDC/trusted-publishing (used by the `Publish pre-release` and `Publish stable release` jobs in `release.yml`) cannot first-publish a package that has never been registered on the registry. As a result, the `Publish pre-release` job has been failing on main since at least 2026-05-25.

- [ ] A maintainer must run `npm publish --access public` once from a local machine with a valid npm token. After that single run, subsequent CI publishes via OIDC will succeed.

## Release configuration files

- `.release-please-config.json` - package config: `release-type: node`, `package-name: @r3dlex/oh-my-antigravity`, `changelog-path: CHANGELOG.md`, `include-v-in-tag: true`.
- `.release-please-manifest.json` - version manifest: current version `1.5.0` for path `.`.

## How a release happens

1. Merge one or more conventional-commit PRs to `main`. Release-please reads the commit history and opens a release PR with a bumped version and updated `CHANGELOG.md`.
2. Review and merge the release PR. Release-please detects `release_created=true` and triggers the `Publish stable release` job.
3. The stable job: checks out the release tag, runs `sync-extension-version.sh`, publishes to npmjs.com (`--tag latest --provenance`) and GitHub Packages, then creates a floating major tag (`v<MAJOR>`).
4. On every non-release push to `main`, the `Publish pre-release` job computes a pre-release version (`<base>-pre.<run-number>`) and publishes to both registries with `--tag pre`.

## Tag guardrails (checklist mapped onto existing release-please flow)

- [ ] **Green CI**: required checks from ci.yml and ci-prek.yml must pass on the candidate SHA before release-please opens or merges the release PR. Release-please does not enforce this automatically; maintainer verifies required checks are green before merging.
- [ ] **Conventional commits**: release-please parses conventional commit types (`feat`, `fix`, `chore`, etc.) to determine the version bump. Non-conventional commits are ignored for versioning purposes. Enforced by PR Validation check on PRs (see branch policy).
- [ ] **Secrets/permissions preflight**: `release.yml` uses OIDC (`id-token: write`) and `packages: write`. No secret values are logged. Note: the first publish requires a manual step (see blocker above).
- [ ] **No dirty generated state**: release-please checks out the release tag for the stable publish; the working tree is clean by construction in the CI job.
- [ ] **Protected tag policy**: apply a GitHub ruleset protecting tag pattern `v*` so only CI can create release tags. Until the ruleset is applied this guardrail is `skipped` with that reason recorded in `release.json`.

## Tag protection ruleset (admin checklist, not automated)

- [ ] Ruleset target: tags matching `v*`
- [ ] Restrict creation to the GitHub Actions identity
- [ ] Block deletion and non-fast-forward updates (a bad tag is retired forward with a new tag, never deleted)

Note: `release.yml` currently uses `git push origin "v$MAJOR" --force` for the floating major tag. Once the tag protection ruleset is applied, the force-push step must be updated (or the ruleset must exempt floating major tags from the non-FF restriction).

## Out of scope

- No production deploys, no database migrations, no cloud provisioning.
- No tag deletion or force-push on immutable version tags (floating major tags are a known exception).

## References

- GitHub rulesets (tag protection): <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets>
- release-please: <https://github.com/googleapis/release-please>
- release-please-action: <https://github.com/googleapis/release-please-action>
