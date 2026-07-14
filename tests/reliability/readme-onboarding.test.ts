import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { describe, expect, test } from 'vitest';

const repositoryRoot = process.cwd();

describe('reliability: canonical README onboarding', () => {
  test('documents the verified onboarding contract without legacy identity drift', async () => {
    const readme = await readFile(join(repositoryRoot, 'README.md'), 'utf8');

    expect(readme).toContain('# oh-my-antigravity (`omg`)');
    expect(readme).toContain('`@r3dlex/oh-my-antigravity`');
    expect(readme).toContain('Node.js `>=20.10.0`');
    expect(readme).toContain('## Quick Start');
    expect(readme).toContain('omg setup --scope project --dry-run');
    expect(readme).toContain('Overall: healthy');
    expect(readme).toContain('## What setup manages');
    expect(readme).toContain('# >>> oh-my-antigravity (managed) >>>');
    expect(readme).toContain('## Updating and uninstalling');
    expect(readme).toContain('## Troubleshooting');
    expect(readme).toContain('## Documentation');
    expect(readme).toContain('## Contributing and community');
    expect(readme).toContain('## License');

    expect(readme).not.toMatch(/oh-my-gemini/i);
    expect(readme).not.toContain('omg trace');
    expect(readme).not.toMatch(/\b\d+\+\s+(agents|skills|commands|tools)\b/i);
  });

  test('root translations defer to the canonical README and use the current identity', async () => {
    const filenames = (await readdir(repositoryRoot))
      .filter((filename) => /^README\.[a-z]{2}\.md$/.test(filename))
      .sort();

    expect(filenames).toStrictEqual([
      'README.de.md',
      'README.es.md',
      'README.fr.md',
      'README.it.md',
      'README.ja.md',
      'README.ko.md',
      'README.pt.md',
      'README.ru.md',
      'README.tr.md',
      'README.vi.md',
      'README.zh.md',
    ]);

    for (const filename of filenames) {
      const translation = await readFile(join(repositoryRoot, filename), 'utf8');
      expect(translation, filename).toContain('# oh-my-antigravity (`omg`)');
      expect(translation, filename).toContain('(README.md)');
      expect(translation, filename).toContain('`@r3dlex/oh-my-antigravity`');
      expect(translation, filename).not.toMatch(/oh-my-gemini/i);
      expect(translation, filename).not.toContain('omg trace');
    }
  });

  test('legacy docs translations also defer to the canonical README', async () => {
    for (const filename of ['README.ja.md', 'README.ko.md', 'README.zh.md']) {
      const translation = await readFile(
        join(repositoryRoot, 'docs', 'i18n', filename),
        'utf8',
      );
      expect(translation, filename).toContain('# oh-my-antigravity (`omg`)');
      expect(translation, filename).toContain('(../../README.md)');
      expect(translation, filename).not.toMatch(/oh-my-gemini/i);
    }
  });
});
