[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | Français | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Projets frères:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Orchestration multi-agent pour Gemini CLI. Aucune courbe d’apprentissage.**

_N’apprends pas Gemini CLI. Utilise simplement omg._

[Démarrer](#quick-start) • [Referencia CLI](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Pourquoi omg?

Chaque équipe logicielle jongle avec l’implémentation, l’architecture, la revue de sécurité, les tests et le DevOps en même temps. omg orchestre des agents spécialisés pour que chaque dimension reçoive une attention experte en parallèle, sans te transformer en berger de chats.

Gemini CLI apporte le raisonnement longue fenêtre de Google Gemini au terminal, mais le travail de production exige toujours séparation des rôles, état persistant et discipline de vérification. omg ajoute ces workflows à Gemini CLI afin que planification, exécution, revue et QA s’exécutent comme des modes agent répétables plutôt que comme des prompts isolés.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Après le setup, redémarre ta CLI pour faire apparaître les commandes `/`.

```bash
omg doctor              # vérifier les prérequis
omg team run --task "..." --workers 2   # travail parallèle
omg hud --watch         # statut en direct
```

---

## Fonctionnalités

| Fonction | Description |
|---------|-------------|
| **Agents spécialisés** | 33+ agentes (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer y más) |
| **Mode Team parallèle** | Orquestación multi-worker basada en tmux con estado de tareas compartido |
| **Skills de workflow** | 26+ skills integradas — plan, deep-interview, ralph, autopilot, ultrawork, code-review y más |
| **Hooks persistentes** | Seguimiento automático de herramientas, memoria de proyecto, gestión de sesiones |
| **HUD en tiempo real** | Overlay de statut en direct con agentes, costes y progreso |
| **Listo para CI/CD** | Gates de verificación, integración de pruebas y workflows de release |
| **Multilingue** | Traductions du README pour les équipes globales |

---

## CLI Reference

| Commande | Description |
|---------|-------------|
| `omg` | Lance une session interactive |
| `omg setup` | Configure l’intégration Gemini CLI |
| `omg doctor` | Vérifie les prérequis et corrige les problèmes |
| `omg team run` | Démarre l’exécution d’équipe parallèle |
| `omg team status` | Vérifie la progression de l’équipe |
| `omg hud --watch` | Muestra el overlay de statut en direct |
| `omg trace` | Affiche la trace d’exécution |

Consulte la [documentation complète](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) pour toutes les commandes.

---

## Workflows

omg fournit des workflows d’exécution et de planification comme skills intégrées.

### Modes d’exécution

| Skill | Objectif |
|-------|---------|
| `$autopilot` | De l’idée au code fonctionnel de bout en bout |
| `$team` | N agents coordonnés sur une tâche partagée |
| `$ralph` | Boucle persistante jusqu’à complétion vérifiée |
| `$ultrawork` | Exécution à débit parallèle maximal |
| `$ultraqa` | Cycles QA jusqu’à atteinte des objectifs |

### Modes de planification

| Skill | Objectif |
|-------|---------|
| `$plan` | Planification stratégique avec entretiens optionnels |
| `$deep-interview` | Clarification socratique avant l’exécution |
| `$ralplan` | Planification par consensus avec revue Architect + Critic |

### Modes utilitaires

| Skill | Objectif |
|-------|---------|
| `$code-review` | Revue de code complète |
| `$security-review` | Audit de sécurité |
| `$doctor` | Diagnostique et corrige les problèmes d’installation |
| `$trace` | Trace et résumé du flux d’agents |
| `$note` | Enregistre des notes de session |
| `$wiki` | Wiki projet persistant |

---

## Team Mode

Orchestration multi-worker tmux-first avec état persistant et contrôles de cycle de vie.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg lanza paneles reales de trabajadores Gemini CLI bajo tmux, registra estado de ciclo de vida duradero en `.omg/` y mantiene cada worker vinculado a archivos de tarea con claims seguros. Úsalo cuando quieras carriles de implementación, revisión y verificación respaldados por Gemini avanzando en paralelo sin perder capacidad de reanudación ni auditoría desde la terminal.

---

## Documentation

- [Documentation completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Référence des commandes](docs/omg/commands.md)
- [Guide de setup](docs/setup/quickstart.md)
- [Contribuer](CONTRIBUTING.md)

---

## Licence

omg es open source bajo la [Licence MIT](LICENSE).

---

## Sponsors

Si omg te fait gagner du temps, pense à [sponsoriser le projet](https://github.com/sponsors/r3dlex) ❤️
