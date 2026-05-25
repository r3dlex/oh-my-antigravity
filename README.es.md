[English](README.md) | [Deutsch](README.de.md) | Español | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Proyectos hermanos:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Orquestación multiagente para Gemini CLI. Sin curva de aprendizaje.**

_No aprendas Gemini CLI. Solo usa omg._

[Comenzar](#quick-start) • [Referencia CLI](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## ¿Por qué omg?

Todo equipo de software maneja implementación, arquitectura, revisión de seguridad, pruebas y DevOps al mismo tiempo. omg orquesta agentes especializados para que cada dimensión reciba atención experta en paralelo, sin que tengas que arrear gatos.

Gemini CLI lleva el razonamiento de contexto largo de Google Gemini a la terminal, pero el trabajo de producción aún necesita separación de roles, estado persistente y disciplina de verificación. omg añade esos workflows sobre Gemini CLI para que planificación, ejecución, revisión y QA se ejecuten como modos de agente repetibles en vez de prompts aislados.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Después del setup, reinicia tu CLI para que aparezcan los comandos `/`.

```bash
omg doctor              # comprobar requisitos
omg team run --task "..." --workers 2   # trabajo paralelo
omg hud --watch         # estado en vivo
```

---

## Funciones

| Función | Descripción |
|---------|-------------|
| **Agentes especializados** | 33+ agentes (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer y más) |
| **Modo Team paralelo** | Orquestación multi-worker basada en tmux con estado de tareas compartido |
| **Skills de workflow** | 26+ skills integradas — plan, deep-interview, ralph, autopilot, ultrawork, code-review y más |
| **Hooks persistentes** | Seguimiento automático de herramientas, memoria de proyecto, gestión de sesiones |
| **HUD en tiempo real** | Overlay de estado en vivo con agentes, costes y progreso |
| **Listo para CI/CD** | Gates de verificación, integración de pruebas y workflows de release |
| **Multilingüe** | Traducciones del README para equipos globales |

---

## CLI Reference

| Comando | Descripción |
|---------|-------------|
| `omg` | Inicia una sesión interactiva |
| `omg setup` | Configura la integración con Gemini CLI |
| `omg doctor` | Comprueba requisitos y corrige problemas |
| `omg team run` | Inicia ejecución paralela de equipo |
| `omg team status` | Comprueba el progreso del equipo |
| `omg hud --watch` | Muestra el overlay de estado en vivo |
| `omg trace` | Muestra la traza de ejecución |

Consulta la [documentación completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) para todos los comandos.

---

## Workflows

omg incluye workflows de ejecución y planificación como skills integradas.

### Modos de ejecución

| Skill | Propósito |
|-------|---------|
| `$autopilot` | De idea a código funcional de extremo a extremo |
| `$team` | N agentes coordinados en una tarea compartida |
| `$ralph` | Bucle persistente hasta completar y verificar |
| `$ultrawork` | Ejecución con máximo rendimiento paralelo |
| `$ultraqa` | Ciclos de QA hasta cumplir los objetivos |

### Modos de planificación

| Skill | Propósito |
|-------|---------|
| `$plan` | Planificación estratégica con entrevistas opcionales |
| `$deep-interview` | Aclaración socrática antes de ejecutar |
| `$ralplan` | Planificación por consenso con revisión de Architect + Critic |

### Modos utilitarios

| Skill | Propósito |
|-------|---------|
| `$code-review` | Revisión de código completa |
| `$security-review` | Auditoría de seguridad |
| `$doctor` | Diagnostica y corrige problemas de instalación |
| `$trace` | Traza y resumen del flujo de agentes |
| `$note` | Guarda notas de sesión |
| `$wiki` | Wiki persistente del proyecto |

---

## Team Mode

Orquestación multi-worker tmux-first con estado persistente y controles de ciclo de vida.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg lanza paneles reales de trabajadores Gemini CLI bajo tmux, registra estado de ciclo de vida duradero en `.omg/` y mantiene cada worker vinculado a archivos de tarea con claims seguros. Úsalo cuando quieras carriles de implementación, revisión y verificación respaldados por Gemini avanzando en paralelo sin perder capacidad de reanudación ni auditoría desde la terminal.

---

## Documentación

- [Documentación completa](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Referencia de comandos](docs/omg/commands.md)
- [Guía de setup](docs/setup/quickstart.md)
- [Contribuir](CONTRIBUTING.md)

---

## Licencia

omg es open source bajo la [Licencia MIT](LICENSE).

---

## Patrocinadores

Si omg te ahorra tiempo, considera [patrocinar el proyecto](https://github.com/sponsors/r3dlex) ❤️
