import { existsSync, lstatSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, test } from 'vitest';

type ExtensionHookRule = {
  matcher?: string;
  hooks?: Array<{ command?: string; type?: string }>;
};

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
);

describe('smoke: native Gemini extension package layout', () => {
  test('publishes installable extension assets at the canonical oh-my-antigravity extension root', () => {
    const extensionRoot = path.join(packageRoot, 'extensions', 'oh-my-antigravity');
    const manifestPath = path.join(extensionRoot, 'gemini-extension.json');
    const rootManifestPath = path.join(packageRoot, 'gemini-extension.json');
    const contextFilePath = path.join(extensionRoot, 'GEMINI.md');
    const hooksFilePath = path.join(extensionRoot, 'hooks', 'hooks.json');
    const commandFiles = [
      path.join(extensionRoot, 'commands', 'omg', 'doctor.toml'),
      path.join(extensionRoot, 'commands', 'omg', 'setup.toml'),
      path.join(extensionRoot, 'commands', 'omg', 'team', 'run.toml'),
      path.join(extensionRoot, 'commands', 'omg', 'doctor.toml'),
      path.join(extensionRoot, 'commands', 'omg', 'team', 'run.toml'),
    ];

    expect(existsSync(manifestPath)).toBe(true);
    expect(existsSync(contextFilePath)).toBe(true);
    expect(existsSync(hooksFilePath)).toBe(true);
    expect(lstatSync(path.dirname(hooksFilePath)).isSymbolicLink()).toBe(false);

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
      contextFileName?: string;
      settings?: Array<{ envVar?: string }>;
      mcpServers?: Record<string, { command?: string; args?: string[]; cwd?: string }>;
    };
    const hooksConfig = JSON.parse(readFileSync(hooksFilePath, 'utf8')) as {
      hooks?: Record<string, ExtensionHookRule[]>;
    };
    const rootManifest = JSON.parse(readFileSync(rootManifestPath, 'utf8')) as {
      settings?: Array<{ envVar?: string }>;
      mcpServers?: Record<string, { command?: string; args?: string[]; cwd?: string }>;
    };

    expect(manifest.contextFileName).toBe('GEMINI.md');
    expect(manifest.mcpServers?.omg_cli_tools?.command).toBe('oh-my-antigravity');
    expect(manifest.mcpServers?.omg_cli_tools?.args).toStrictEqual(['tools', 'serve']);
    expect(manifest.mcpServers?.omp_cli_tools?.command).toBe('oh-my-antigravity');
    expect(manifest.mcpServers?.omp_cli_tools?.args).toStrictEqual(['tools', 'serve']);
    expect(rootManifest.mcpServers?.omg_cli_tools?.command).toBe('oh-my-antigravity');
    expect(rootManifest.mcpServers?.omg_cli_tools?.args).toStrictEqual(['tools', 'serve']);
    expect(rootManifest.mcpServers?.omp_cli_tools?.command).toBe('oh-my-antigravity');
    expect(rootManifest.mcpServers?.omp_cli_tools?.args).toStrictEqual(['tools', 'serve']);
    expect(rootManifest.mcpServers?.omp_cli_tools?.cwd).toBe('${extensionPath}');
    expect(hooksConfig.hooks?.BeforeAgent?.[0]?.matcher).toBe('.*');
    expect(hooksConfig.hooks?.BeforeAgent?.[0]?.hooks?.[0]?.command).toBe('oh-my-gemini hooks exec');
    expect(hooksConfig.hooks?.AfterTool?.[0]?.matcher).toBe('.*');
    expect(hooksConfig.hooks?.AfterTool?.[0]?.hooks?.[0]?.command).toBe('oh-my-gemini hooks exec');

    for (const commandFile of commandFiles) {
      expect(existsSync(commandFile)).toBe(true);
    }

    expect(existsSync(path.join(extensionRoot, 'agents'))).toBe(true);
    expect(existsSync(path.join(extensionRoot, 'hooks'))).toBe(true);
    expect(existsSync(path.join(extensionRoot, 'skills'))).toBe(true);
    expect(existsSync(path.join(extensionRoot, 'hooks', 'hooks.json'))).toBe(true);
  });
});
