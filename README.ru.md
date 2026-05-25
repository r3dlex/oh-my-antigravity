[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | Русский | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Родственные проекты:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Мультиагентная оркестрация для Gemini CLI. Без кривой обучения.**

_Не изучайте Gemini CLI. Просто используйте omg._

[Начать](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Почему omg?

Каждая команда разработки одновременно ведёт реализацию, архитектуру, security review, тестирование и DevOps. omg оркестрирует специализированных агентов, чтобы каждое направление получало экспертное внимание параллельно.

Gemini CLI приносит long-context рассуждение Google Gemini в терминал, но production-работа всё равно требует разделения ролей, персистентного состояния и дисциплины проверки. omg добавляет эти workflows поверх Gemini CLI, чтобы планирование, исполнение, review и QA работали как повторяемые агентные режимы, а не одиночные prompts.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

После setup перезапустите CLI, чтобы появились команды `/`.

```bash
omg doctor              # проверить требования
omg team run --task "..." --workers 2   # параллельная работа
omg hud --watch         # живой статус
```

---

## Возможности

| Возможность | Описание |
|---------|-------------|
| **Специализированные агенты** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **Параллельный Team Mode** | tmux-based multi-worker оркестрация с общим состоянием задач |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **Персистентные hooks** | Автоматический tool tracking, память проекта, управление сессиями |
| **HUD в реальном времени** | Live status overlay с агентами, стоимостью и прогрессом |
| **CI/CD Ready** | Verification gates, интеграция тестов, release workflows |
| **Многоязычность** | Переводы README для глобальных команд |

---

## CLI Reference

| Команда | Описание |
|---------|-------------|
| `omg` | Запускает интерактивную сессию |
| `omg setup` | Настраивает интеграцию Gemini CLI |
| `omg doctor` | Проверяет требования и исправляет проблемы |
| `omg team run` | Запускает параллельное выполнение командой |
| `omg team status` | Показывает прогресс команды |
| `omg hud --watch` | Показывает live status overlay |
| `omg trace` | Показывает trace выполнения |

Все команды описаны в [полной документации](https://github.com/r3dlex/oh-my-gemini/tree/main/docs).

---

## Workflows

omg поставляет execution- и planning-workflows как встроенные skills.

### Режимы выполнения

| Skill | Назначение |
|-------|---------|
| `$autopilot` | От идеи до рабочего кода end-to-end |
| `$team` | N скоординированных агентов на общей задаче |
| `$ralph` | Персистентный completion loop до проверки |
| `$ultrawork` | Максимально параллельное выполнение |
| `$ultraqa` | QA-циклы до достижения целей |

### Режимы планирования

| Skill | Назначение |
|-------|---------|
| `$plan` | Стратегическое планирование с опциональными интервью |
| `$deep-interview` | Сократическое уточнение перед выполнением |
| `$ralplan` | Consensus planning с review Architect + Critic |

### Утилитарные режимы

| Skill | Назначение |
|-------|---------|
| `$code-review` | Комплексное code review |
| `$security-review` | Security audit |
| `$doctor` | Диагностика и исправление установки |
| `$trace` | Trace и summary потока агентов |
| `$note` | Сохранить заметки сессии |
| `$wiki` | Персистентная wiki проекта |

---

## Team Mode

tmux-first multi-worker оркестрация с персистентным состоянием и lifecycle controls.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg запускает реальные Gemini CLI worker panes в tmux, пишет durable lifecycle state в `.omg/` и привязывает каждого worker к claim-safe task files. Используйте, когда Gemini-backed implementation, review и verification lanes должны продвигаться параллельно, оставаясь возобновляемыми и audit-friendly из терминала.

---

## Документация

- [Полная документация](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Справочник команд](docs/omg/commands.md)
- [Setup guide](docs/setup/quickstart.md)
- [Участие](CONTRIBUTING.md)

---

## Лицензия

omg — open source под [MIT License](LICENSE).

---

## Спонсоры

Если omg экономит вам время, рассмотрите [спонсирование проекта](https://github.com/sponsors/r3dlex) ❤️
