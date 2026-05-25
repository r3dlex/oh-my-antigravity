import { describe, expect, test } from 'vitest';

import { getAgentDefinitions } from '../../src/agents/definitions.js';
import { createDefaultSubagentCatalog } from '../../src/team/subagents-blueprint.js';

describe('reliability: design agents registration', () => {
  test('design-architect in getAgentDefinitions', () => {
    const result = getAgentDefinitions();
    const entry = result['design-architect'];
    expect(entry).toBeDefined();
    expect(entry!.description.length).toBeGreaterThan(0);
    expect(entry!.prompt.length).toBeGreaterThan(0);
  });

  test('design-validator in getAgentDefinitions', () => {
    const result = getAgentDefinitions();
    const entry = result['design-validator'];
    expect(entry).toBeDefined();
    expect(entry!.description.length).toBeGreaterThan(0);
    expect(entry!.prompt.length).toBeGreaterThan(0);
  });

  test('design-architect NOT in default subagent blueprints (retired as redundant)', () => {
    const catalog = createDefaultSubagentCatalog();
    const entry = catalog.subagents.find((s) => s.id === 'design-architect');
    expect(entry).toBeUndefined();
  });

  test('design-validator NOT in default subagent blueprints (retired as redundant)', () => {
    const catalog = createDefaultSubagentCatalog();
    const entry = catalog.subagents.find((s) => s.id === 'design-validator');
    expect(entry).toBeUndefined();
  });
});
