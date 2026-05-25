[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | 日本語 | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **姉妹プロジェクト:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Gemini CLI のためのマルチエージェント・オーケストレーション。学習コストはゼロ。**

_Gemini CLI を学び込む必要はありません。omg を使うだけです。_

[はじめる](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## なぜ omg?

ソフトウェアチームは、実装、アーキテクチャ、セキュリティレビュー、テスト、DevOps を同時に扱っています。omg は専門エージェントをオーケストレーションし、各領域に並列で専門的な注意を届けます。

Gemini CLI は Google Gemini の長文コンテキスト推論をターミナルにもたらしますが、本番開発には役割分担、永続状態、検証の規律が必要です。omg はそれらの workflow を Gemini CLI に重ね、計画、実行、レビュー、QA を単発プロンプトではなく再現可能なエージェントモードとして実行します。

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

セットアップ後、`/` コマンドを表示するために CLI を再起動してください。

```bash
omg doctor              # 前提条件を確認
omg team run --task "..." --workers 2   # 並列作業
omg hud --watch         # ライブ状態
```

---

## 機能

| 機能 | 説明 |
|---------|-------------|
| **専門エージェント** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **並列 Team Mode** | 共有タスク状態を持つ tmux ベースのマルチワーカー・オーケストレーション |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **永続フック** | ツール追跡、プロジェクトメモリ、セッション管理を自動化 |
| **リアルタイム HUD** | エージェント、コスト、進捗を示すライブ状態オーバーレイ |
| **CI/CD Ready** | 検証ゲート、テスト統合、リリース workflow |
| **多言語** | グローバルチーム向け README 翻訳 |

---

## CLI Reference

| コマンド | 説明 |
|---------|-------------|
| `omg` | インタラクティブセッションを起動 |
| `omg setup` | Gemini CLI 連携を設定 |
| `omg doctor` | 前提条件を確認して問題を修正 |
| `omg team run` | 並列チーム実行を開始 |
| `omg team status` | チーム進捗を確認 |
| `omg hud --watch` | ライブ状態オーバーレイを表示 |
| `omg trace` | 実行トレースを表示 |

すべてのコマンドは[完全なドキュメント](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)を参照してください。

---

## Workflows

omg は実行モードと計画モードの workflow を組み込み skill として提供します。

### 実行モード

| Skill | 目的 |
|-------|---------|
| `$autopilot` | アイデアから動くコードまで end-to-end |
| `$team` | 共有タスクに取り組む N 個の協調エージェント |
| `$ralph` | 検証されるまで続く永続 completion ループ |
| `$ultrawork` | 最大並列スループットの実行 |
| `$ultraqa` | 目標達成まで QA サイクルを実行 |

### 計画モード

| Skill | 目的 |
|-------|---------|
| `$plan` | 任意のインタビュー付き戦略計画 |
| `$deep-interview` | 実行前のソクラテス式明確化 |
| `$ralplan` | Architect + Critic レビュー付き合意形成計画 |

### ユーティリティモード

| Skill | 目的 |
|-------|---------|
| `$code-review` | 包括的なコードレビュー |
| `$security-review` | セキュリティ監査 |
| `$doctor` | インストール問題の診断と修復 |
| `$trace` | エージェントフローのトレースと要約 |
| `$note` | セッションノートを保存 |
| `$wiki` | 永続プロジェクト Wiki |

---

## Team Mode

永続状態とライフサイクル制御を備えた tmux-first マルチワーカー・オーケストレーション。

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg は tmux 上で実際の Gemini CLI worker pane を起動し、`.omg/` 配下に耐久的なライフサイクル状態を記録し、各 worker を claim-safe なタスクファイルに結び付けます。Gemini による実装、レビュー、検証レーンを並列に進めつつ、ターミナルから再開と監査を可能にしたい場合に使います。

---

## ドキュメント

- [完全なドキュメント](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [コマンドリファレンス](docs/omg/commands.md)
- [セットアップガイド](docs/setup/quickstart.md)
- [コントリビューション](CONTRIBUTING.md)

---

## ライセンス

omg は [MIT License](LICENSE) の下で公開されています。

---

## スポンサー

omg が時間を節約してくれたなら、[スポンサー](https://github.com/sponsors/r3dlex)を検討してください ❤️
