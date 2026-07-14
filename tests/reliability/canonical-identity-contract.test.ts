import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { describe, expect, test } from 'vitest';

const repositoryRoot = process.cwd();

async function readJson(relativePath: string): Promise<Record<string, unknown>> {
  return JSON.parse(await readFile(join(repositoryRoot, relativePath), 'utf8')) as Record<
    string,
    unknown
  >;
}

async function listFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return listFiles(path);
      return entry.isFile() ? [path] : [];
    }),
  );
  return nested.flat();
}

describe('reliability: canonical package and extension identity', () => {
  test('uses the canonical CLI package and project identity in current onboarding docs', async () => {
    const contractFiles = [
      'README.md',
      'docs/setup/quickstart.md',
      'docs/omg/README.md',
      'docs/omg/project-map.md',
      'src/cli/commands/doctor.ts',
      'src/installer/index.ts',
    ];
    const contract = (
      await Promise.all(
        contractFiles.map((path) => readFile(join(repositoryRoot, path), 'utf8')),
      )
    ).join('\n');

    expect(contract).toContain('@google/gemini-cli');
    expect(contract).not.toContain('@antigravity/cli');
    expect(contract).not.toContain('oh-my-gemini');
    expect(contract).not.toContain('r3dlex/oh-my-gemini');
  });

  test('keeps root, lockfile, and packaged extension identities synchronized', async () => {
    const packageJson = await readJson('package.json');
    const packageLock = await readJson('package-lock.json');
    const rootManifest = await readJson('gemini-extension.json');
    const packagedManifest = await readJson(
      'extensions/oh-my-antigravity/gemini-extension.json',
    );
    const lockRoot = (packageLock.packages as Record<string, Record<string, unknown>>)[''];
    if (!lockRoot) throw new Error('package-lock.json is missing the root package entry');

    expect(lockRoot.name).toBe(packageJson.name);
    expect(lockRoot.version).toBe(packageJson.version);
    expect(lockRoot.bin).toStrictEqual(packageJson.bin);
    expect(packagedManifest).toStrictEqual(rootManifest);
    expect(packagedManifest.version).toBe(packageJson.version);

    const extensionRoot = join(repositoryRoot, 'extensions', 'oh-my-antigravity');
    const extensionFiles = await listFiles(extensionRoot);
    const extensionContent = (
      await Promise.all(extensionFiles.map((path) => readFile(path, 'utf8')))
    ).join('\n');

    expect(extensionContent).not.toContain('oh-my-gemini');
    expect(extensionContent).not.toContain('r3dlex/oh-my-gemini');
    expect(extensionContent).not.toContain('oh-my-antigravity-sisyphus');
  });
});
