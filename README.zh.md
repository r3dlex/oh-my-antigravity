[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | 中文

# oh-my-Gemini (omg)

> **姊妹项目:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**面向 Gemini CLI 的多智能体编排。零学习成本。**

_不要重新学习 Gemini CLI。直接使用 omg。_

[开始使用](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## 为什么选择 omg？

每个软件团队都在同时处理实现、架构、安全审查、测试和 DevOps。omg 编排专业智能体，让每个维度都能并行获得专家级关注，而不需要你手动协调一切。

Gemini CLI 将 Google Gemini 的长上下文推理带到终端，但生产工作仍然需要角色分离、持久状态和验证纪律。omg 将这些 workflow 叠加到 Gemini CLI 上，让规划、执行、审查和 QA 以可重复的智能体模式运行，而不是一次性 prompt。

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

设置完成后，重启 CLI 以显示 `/` 命令。

```bash
omg doctor              # 检查先决条件
omg team run --task "..." --workers 2   # 并行工作
omg hud --watch         # 实时状态
```

---

## 功能

| 功能 | 说明 |
|---------|-------------|
| **专业智能体** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **并行 Team Mode** | 基于 tmux 的多 worker 编排，共享任务状态 |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **持久 Hook** | 自动工具跟踪、项目记忆、会话管理 |
| **实时 HUD** | 显示智能体、成本和进度的实时状态覆盖层 |
| **CI/CD Ready** | 验证门禁、测试集成、发布 workflow |
| **多语言** | 面向全球团队的 README 翻译 |

---

## CLI Reference

| 命令 | 说明 |
|---------|-------------|
| `omg` | 启动交互式会话 |
| `omg setup` | 配置 Gemini CLI 集成 |
| `omg doctor` | 检查先决条件并修复问题 |
| `omg team run` | 启动并行团队执行 |
| `omg team status` | 检查团队进度 |
| `omg hud --watch` | 显示实时状态覆盖层 |
| `omg trace` | 显示执行 trace |

所有命令请参阅[完整文档](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)。

---

## Workflows

omg 将执行模式和规划模式 workflow 作为内置 skill 提供。

### 执行模式

| Skill | 用途 |
|-------|---------|
| `$autopilot` | 从想法到可运行代码的端到端流程 |
| `$team` | N 个智能体协同处理共享任务 |
| `$ralph` | 持续 completion 循环直到验证通过 |
| `$ultrawork` | 最大并行吞吐执行 |
| `$ultraqa` | QA 循环直到目标达成 |

### 规划模式

| Skill | 用途 |
|-------|---------|
| `$plan` | 带可选访谈的战略规划 |
| `$deep-interview` | 执行前的苏格拉底式澄清 |
| `$ralplan` | 带 Architect + Critic 审查的共识规划 |

### 实用模式

| Skill | 用途 |
|-------|---------|
| `$code-review` | 全面代码审查 |
| `$security-review` | 安全审计 |
| `$doctor` | 诊断并修复安装问题 |
| `$trace` | 智能体流程 trace 与总结 |
| `$note` | 保存会话笔记 |
| `$wiki` | 持久项目 wiki |

---

## Team Mode

以 tmux 为先的多 worker 编排，具备持久状态和生命周期控制。

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg 在 tmux 下启动真实的 Gemini CLI worker pane，将耐久生命周期状态记录到 `.omg/`，并让每个 worker 绑定 claim-safe 任务文件。当你希望 Gemini 支持的实现、审查和验证通道并行推进，同时仍可在终端恢复和审计时，请使用它。

---

## 文档

- [完整文档](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [命令参考](docs/omg/commands.md)
- [设置指南](docs/setup/quickstart.md)
- [参与贡献](CONTRIBUTING.md)

---

## 许可证

omg 基于 [MIT License](LICENSE) 开源。

---

## 赞助

如果 omg 为你节省了时间，请考虑[赞助本项目](https://github.com/sponsors/r3dlex) ❤️
