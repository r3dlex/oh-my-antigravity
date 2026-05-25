[English](README.md) | Deutsch | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Schwesterprojekte:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Multi-Agent-Orchestrierung für Gemini CLI. Keine Lernkurve.**

_Lerne nicht Gemini CLI. Nutze einfach omg._

[Loslegen](#quick-start) • [CLI-Referenz](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Warum omg?

Jedes Softwareteam jongliert gleichzeitig mit Implementierung, Architektur, Security-Review, Tests und DevOps. omg orchestriert spezialisierte Agenten, damit jede Dimension parallel fachkundige Aufmerksamkeit bekommt, ohne dass du Katzen hüten musst.

Gemini CLI bringt Long-Context-Reasoning von Google Gemini ins Terminal, aber Produktionsarbeit braucht weiterhin Rollentrennung, persistenten Zustand und Verifikationsdisziplin. omg legt diese Workflows über Gemini CLI, sodass Planung, Ausführung, Review und QA als wiederholbare Agentenmodi statt als einmalige Prompts laufen.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Starte deine CLI nach dem Setup neu, damit die `/`-Befehle erscheinen.

```bash
omg doctor              # Voraussetzungen prüfen
omg team run --task "..." --workers 2   # parallele Arbeit
omg hud --watch         # Live-Status
```

---

## Funktionen

| Funktion | Beschreibung |
|---------|-------------|
| **Spezialisierte Agenten** | 33+ Agenten (Analyst, Architekt, Executor, Debugger, Critic, Verifier, Test-Engineer, Writer und mehr) |
| **Paralleler Team-Modus** | tmux-basierte Multi-Worker-Orchestrierung mit gemeinsamem Task-Status |
| **Workflow-Skills** | 26+ integrierte Skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review und mehr |
| **Persistente Hooks** | Automatisches Tool-Tracking, Projektgedächtnis, Sitzungsverwaltung |
| **Echtzeit-HUD** | Live-Status-Overlay für Agenten, Kosten und Fortschritt |
| **CI/CD-fähig** | Verifikations-Gates, Testintegration, Release-Workflows |
| **Mehrsprachig** | README-Übersetzungen für globale Teams |

---

## CLI Reference

| Befehl | Beschreibung |
|---------|-------------|
| `omg` | Interaktive Sitzung starten |
| `omg setup` | Gemini-CLI-Integration konfigurieren |
| `omg doctor` | Voraussetzungen prüfen und Probleme beheben |
| `omg team run` | Parallele Team-Ausführung starten |
| `omg team status` | Team-Fortschritt prüfen |
| `omg hud --watch` | Live-Status-Overlay anzeigen |
| `omg trace` | Ausführungs-Trace anzeigen |

Alle Befehle findest du in der [vollständigen Dokumentation](https://github.com/r3dlex/oh-my-gemini/tree/main/docs).

---

## Workflows

omg liefert Ausführungs- und Planungs-Workflows als integrierte Skills.

### Ausführungsmodi

| Skill | Zweck |
|-------|---------|
| `$autopilot` | Von der Idee bis zu funktionierendem Code |
| `$team` | N koordinierte Agenten an einer gemeinsamen Aufgabe |
| `$ralph` | Persistente Completion-Schleife bis zur Verifikation |
| `$ultrawork` | Maximale parallele Durchsatz-Ausführung |
| `$ultraqa` | QA-Zyklen bis alle Ziele erfüllt sind |

### Planungsmodi

| Skill | Zweck |
|-------|---------|
| `$plan` | Strategische Planung mit optionalen Interviews |
| `$deep-interview` | Sokratische Klärung vor der Umsetzung |
| `$ralplan` | Konsensplanung mit Architect- und Critic-Review |

### Utility-Modi

| Skill | Zweck |
|-------|---------|
| `$code-review` | Umfassendes Code-Review |
| `$security-review` | Sicherheitsaudit |
| `$doctor` | Installation diagnostizieren und reparieren |
| `$trace` | Agentenfluss-Trace und Zusammenfassung |
| `$note` | Sitzungsnotizen speichern |
| `$wiki` | Persistentes Projekt-Wiki |

---

## Team Mode

tmux-first Multi-Worker-Orchestrierung mit persistentem Zustand und Lifecycle-Steuerung.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg startet echte Gemini-CLI-Worker-Panes unter tmux, schreibt dauerhaften Lifecycle-Status unter `.omg/` und bindet jeden Worker an claim-sichere Task-Dateien. Nutze es, wenn Gemini-gestützte Implementierungs-, Review- und Verifikations-Lanes parallel Fortschritt machen sollen und dennoch im Terminal fortsetzbar und auditierbar bleiben.

---

## Dokumentation

- [Vollständige Dokumentation](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Befehlsreferenz](docs/omg/commands.md)
- [Setup-Anleitung](docs/setup/quickstart.md)
- [Mitwirken](CONTRIBUTING.md)

---

## Lizenz

omg ist Open Source unter der [MIT License](LICENSE).

---

## Sponsoren

Wenn omg dir Zeit spart, unterstütze das Projekt gern über [Sponsoring](https://github.com/sponsors/r3dlex) ❤️
