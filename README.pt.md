[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | Português | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Projetos irmãos:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Orquestração multiagente para Gemini CLI. Sem curva de aprendizado.**

_Não aprenda Gemini CLI. Apenas use omg._

[Comece](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Por que omg?

Toda equipe de software lida com implementação, arquitetura, revisão de segurança, testes e DevOps ao mesmo tempo. omg orquestra agentes especializados para que cada dimensão receba atenção especializada em paralelo, sem você precisar pastorear gatos.

Gemini CLI traz o raciocínio de contexto longo do Google Gemini para o terminal, mas trabalho de produção ainda precisa de separação de papéis, estado persistente e disciplina de verificação. omg adiciona esses workflows ao Gemini CLI para que planejamento, execução, revisão e QA rodem como modos de agente repetíveis em vez de prompts isolados.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Após o setup, reinicie sua CLI para os comandos `/` aparecerem.

```bash
omg doctor              # verificar pré-requisitos
omg team run --task "..." --workers 2   # trabalho paralelo
omg hud --watch         # status ao vivo
```

---

## Recursos

| Recurso | Descrição |
|---------|-------------|
| **Agentes especializados** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **Team Mode paralelo** | Orquestração multi-worker baseada em tmux com estado de tarefas compartilhado |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **Hooks persistentes** | Rastreamento automático de ferramentas, memória de projeto, gerenciamento de sessão |
| **HUD em tempo real** | Overlay de status ao vivo mostrando agentes, custos e progresso |
| **CI/CD Ready** | Gates de verificação, integração de testes, workflows de release |
| **Multilíngue** | Traduções do README para equipes globais |

---

## CLI Reference

| Comando | Descrição |
|---------|-------------|
| `omg` | Inicia uma sessão interativa |
| `omg setup` | Configura a integração com Gemini CLI |
| `omg doctor` | Verifica pré-requisitos e corrige problemas |
| `omg team run` | Inicia execução paralela de equipe |
| `omg team status` | Verifica o progresso da equipe |
| `omg hud --watch` | Mostra overlay de status ao vivo |
| `omg trace` | Mostra trace de execução |

Veja a [documentação completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) para todos os comandos.

---

## Workflows

omg inclui workflows de execução e planejamento como skills embutidas.

### Modos de execução

| Skill | Objetivo |
|-------|---------|
| `$autopilot` | Da ideia ao código funcionando de ponta a ponta |
| `$team` | N agentes coordenados em uma tarefa compartilhada |
| `$ralph` | Loop persistente de conclusão até verificar |
| `$ultrawork` | Execução com máxima vazão paralela |
| `$ultraqa` | Ciclos de QA até as metas serem atendidas |

### Modos de planejamento

| Skill | Objetivo |
|-------|---------|
| `$plan` | Planejamento estratégico com entrevistas opcionais |
| `$deep-interview` | Esclarecimento socrático antes da execução |
| `$ralplan` | Planejamento por consenso com revisão Architect + Critic |

### Modos utilitários

| Skill | Objetivo |
|-------|---------|
| `$code-review` | Revisão de código abrangente |
| `$security-review` | Auditoria de segurança |
| `$doctor` | Diagnostica e corrige problemas de instalação |
| `$trace` | Trace e resumo do fluxo de agentes |
| `$note` | Salva notas de sessão |
| `$wiki` | Wiki persistente do projeto |

---

## Team Mode

Orquestração multi-worker tmux-first com estado persistente e controles de ciclo de vida.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg inicia painéis reais de workers Gemini CLI sob tmux, registra estado durável de ciclo de vida em `.omg/` e mantém cada worker ligado a arquivos de tarefa com claims seguros. Use quando quiser lanes de implementação, revisão e verificação com Gemini avançando em paralelo sem perder retomada e auditoria pelo terminal.

---

## Documentação

- [Documentação completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Referência de comandos](docs/omg/commands.md)
- [Guia de setup](docs/setup/quickstart.md)
- [Contribuir](CONTRIBUTING.md)

---

## Licença

omg é open source sob a [Licença MIT](LICENSE).

---

## Patrocinadores

Se omg economiza seu tempo, considere [patrocinar o projeto](https://github.com/sponsors/r3dlex) ❤️
