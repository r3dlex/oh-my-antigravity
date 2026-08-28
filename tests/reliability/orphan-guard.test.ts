/**
 * Orphan guard for the deleted orphaned module cluster.
 *
 * The module cluster src/{providers,plugins,agents,shared,features,openclaw},
 * src/lib/shared-memory.ts, src/state/shared-memory.ts, their dead-code test
 * files, and the openclaw e2e smoke scripts were deleted after a full import
 * graph verification showed zero production importers
 * (goal: .ai/handoff/autobahn-goals/antigravity-delete-orphan-cluster.json).
 *
 * This guard fails if any deleted path reappears, so the cluster cannot
 * silently return. It also pins the kept surface: wrapUntrustedFileContent
 * must remain available from src/design/security.ts, and the native
 * agents/*.md subagent prompts (extension surface, kept) must stay in place.
 */
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { wrapDesignSection } from '../../src/design/security.js';
import { repoRoot } from '../utils/runtime.js';

const DELETED_ORPHAN_PATHS = [
  // Orphaned src module cluster (zero production importers).
  'src/providers',
  'src/plugins',
  'src/agents',
  'src/shared',
  'src/features',
  'src/openclaw',
  'src/lib/shared-memory.ts',
  'src/state/shared-memory.ts',
  // Orphaned scripts exercising the cluster.
  'scripts/openclaw-e2e-smoke.ts',
  'scripts/openclaw-e2e-sink.mjs',
  // Orphaned test files that exercised the dead code.
  'tests/reliability/providers-api-client.test.ts',
  'tests/reliability/providers-model-config.test.ts',
  'tests/reliability/providers-management.test.ts',
  'tests/reliability/api-client-timeout.test.ts',
  'tests/reliability/api-client-retry.test.ts',
  'tests/reliability/shared-memory-state-manager.test.ts',
  'tests/reliability/design-agents.test.ts',
  'tests/reliability/openclaw-index-fail-open.test.ts',
  'tests/reliability/openclaw-dispatcher.test.ts',
  'tests/reliability/feature-system-index.test.ts',
];

describe('reliability: orphan guard for deleted module cluster', () => {
  test.each(DELETED_ORPHAN_PATHS)('deleted orphan path stays deleted: %s', (relativePath) => {
    const absolutePath = path.join(repoRoot, ...relativePath.split('/'));
    expect(
      existsSync(absolutePath),
      `orphaned path reappeared: ${relativePath}`,
    ).toBe(false);
  });

  test('wrapUntrustedFileContent survives relocated into src/design/security.ts', () => {
    const wrapped = wrapDesignSection('DESIGN.md', 'token: value');
    expect(wrapped).toContain('--- UNTRUSTED FILE CONTENT (DESIGN.md) ---');
    expect(wrapped).toContain('token: value');
    expect(wrapped).toContain('--- END UNTRUSTED FILE CONTENT ---');
  });

  test('native agents/*.md prompt surface (kept extension surface) stays in place', () => {
    const agentsDir = path.join(repoRoot, 'agents');
    expect(existsSync(agentsDir), 'agents/ prompt surface must stay in place').toBe(true);
    const prompts = readdirSync(agentsDir).filter((name) => name.endsWith('.md'));
    expect(prompts.length).toBeGreaterThanOrEqual(30);
  });
});