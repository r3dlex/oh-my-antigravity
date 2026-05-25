[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | Italiano | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Progetti fratelli:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Orchestrazione multi-agente per Gemini CLI. Nessuna curva di apprendimento.**

_Non imparare Gemini CLI. Usa semplicemente omg._

[Inizia](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Perché omg?

Ogni team software gestisce implementazione, architettura, revisione di sicurezza, test e DevOps contemporaneamente. omg orchestra agenti specializzati così ogni dimensione riceve attenzione esperta in parallelo, senza dover radunare gatti.

Gemini CLI porta nel terminale il ragionamento a contesto lungo di Google Gemini, ma il lavoro di produzione richiede comunque separazione dei ruoli, stato persistente e disciplina di verifica. omg aggiunge questi workflow a Gemini CLI, così pianificazione, esecuzione, revisione e QA diventano modalità agente ripetibili invece di prompt isolati.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Dopo il setup, riavvia la CLI affinché compaiano i comandi `/`.

```bash
omg doctor              # controlla i prerequisiti
omg team run --task "..." --workers 2   # lavoro parallelo
omg hud --watch         # stato live
```

---

## Funzionalità

| Funzionalità | Descrizione |
|---------|-------------|
| **Agenti specializzati** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **Team Mode parallela** | Orchestrazione multi-worker basata su tmux con stato attività condiviso |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **Hook persistenti** | Tracciamento automatico degli strumenti, memoria di progetto, gestione sessioni |
| **HUD in tempo reale** | Overlay live con agenti, costi e avanzamento |
| **CI/CD Ready** | Gate di verifica, integrazione test, workflow di rilascio |
| **Multilingua** | Traduzioni README per team globali |

---

## CLI Reference

| Comando | Descrizione |
|---------|-------------|
| `omg` | Avvia una sessione interattiva |
| `omg setup` | Configura l’integrazione Gemini CLI |
| `omg doctor` | Controlla i prerequisiti e corregge problemi |
| `omg team run` | Avvia l’esecuzione parallela del team |
| `omg team status` | Controlla l’avanzamento del team |
| `omg hud --watch` | Mostra l’overlay di stato live |
| `omg trace` | Mostra la traccia di esecuzione |

Consulta la [documentazione completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) per tutti i comandi.

---

## Workflows

omg include workflow di esecuzione e pianificazione come skill integrate.

### Modalità di esecuzione

| Skill | Scopo |
|-------|---------|
| `$autopilot` | Da idea a codice funzionante end-to-end |
| `$team` | N agenti coordinati su un’attività condivisa |
| `$ralph` | Ciclo persistente fino alla verifica |
| `$ultrawork` | Massimo throughput di esecuzione parallela |
| `$ultraqa` | Cicli QA fino al raggiungimento degli obiettivi |

### Modalità di pianificazione

| Skill | Scopo |
|-------|---------|
| `$plan` | Pianificazione strategica con interviste opzionali |
| `$deep-interview` | Chiarimento socratico prima dell’esecuzione |
| `$ralplan` | Pianificazione a consenso con review Architect + Critic |

### Modalità utility

| Skill | Scopo |
|-------|---------|
| `$code-review` | Revisione codice completa |
| `$security-review` | Audit di sicurezza |
| `$doctor` | Diagnostica e corregge problemi di installazione |
| `$trace` | Traccia e riepilogo del flusso agenti |
| `$note` | Salva note di sessione |
| `$wiki` | Wiki persistente del progetto |

---

## Team Mode

Orchestrazione multi-worker tmux-first con stato persistente e controlli lifecycle.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg avvia veri pannelli worker Gemini CLI sotto tmux, registra stato lifecycle durevole in `.omg/` e mantiene ogni worker collegato a file attività con claim sicuri. Usalo quando vuoi corsie di implementazione, revisione e verifica basate su Gemini che avanzano in parallelo restando riprendibili e auditabili dal terminale.

---

## Documentazione

- [Documentazione completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Riferimento comandi](docs/omg/commands.md)
- [Guida setup](docs/setup/quickstart.md)
- [Contribuire](CONTRIBUTING.md)

---

## Licenza

omg è open source sotto [Licenza MIT](LICENSE).

---

## Sponsor

Se omg ti fa risparmiare tempo, considera di [sponsorizzare il progetto](https://github.com/sponsors/r3dlex) ❤️
