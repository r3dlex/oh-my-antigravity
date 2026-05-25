[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | 한국어 | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **자매 프로젝트:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Gemini CLI를 위한 멀티 에이전트 오케스트레이션. 학습 곡선 없음.**

_Gemini CLI를 새로 익히지 마세요. 그냥 omg를 쓰세요._

[시작하기](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## 왜 omg인가?

모든 소프트웨어 팀은 구현, 아키텍처, 보안 리뷰, 테스트, DevOps를 동시에 처리합니다. omg는 전문 에이전트를 오케스트레이션하여 각 영역이 병렬로 전문가의 주의를 받도록 합니다.

Gemini CLI는 Google Gemini의 긴 컨텍스트 추론을 터미널로 가져오지만, 프로덕션 작업에는 여전히 역할 분리, 지속 상태, 검증 규율이 필요합니다. omg는 이러한 workflow를 Gemini CLI 위에 얹어 계획, 실행, 리뷰, QA를 일회성 프롬프트가 아닌 반복 가능한 에이전트 모드로 실행합니다.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

설정 후 `/` 명령이 보이도록 CLI를 다시 시작하세요.

```bash
omg doctor              # 필수 조건 확인
omg team run --task "..." --workers 2   # 병렬 작업
omg hud --watch         # 실시간 상태
```

---

## 기능

| 기능 | 설명 |
|---------|-------------|
| **전문 에이전트** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **병렬 Team Mode** | 공유 작업 상태를 사용하는 tmux 기반 멀티 워커 오케스트레이션 |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **지속 Hook** | 도구 추적, 프로젝트 메모리, 세션 관리 자동화 |
| **실시간 HUD** | 에이전트, 비용, 진행 상황을 보여주는 실시간 상태 오버레이 |
| **CI/CD Ready** | 검증 게이트, 테스트 통합, 릴리스 workflow |
| **다국어** | 글로벌 팀을 위한 README 번역 |

---

## CLI Reference

| 명령 | 설명 |
|---------|-------------|
| `omg` | 대화형 세션 시작 |
| `omg setup` | Gemini CLI 통합 구성 |
| `omg doctor` | 필수 조건을 확인하고 문제 수정 |
| `omg team run` | 병렬 팀 실행 시작 |
| `omg team status` | 팀 진행 상황 확인 |
| `omg hud --watch` | 실시간 상태 오버레이 표시 |
| `omg trace` | 실행 trace 표시 |

모든 명령은 [전체 문서](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)를 참고하세요.

---

## Workflows

omg는 실행 모드와 계획 모드 workflow를 내장 skill로 제공합니다.

### 실행 모드

| Skill | 목적 |
|-------|---------|
| `$autopilot` | 아이디어에서 동작하는 코드까지 end-to-end |
| `$team` | 공유 작업을 수행하는 N개의 조율된 에이전트 |
| `$ralph` | 검증될 때까지 지속되는 completion 루프 |
| `$ultrawork` | 최대 병렬 처리량 실행 |
| `$ultraqa` | 목표가 충족될 때까지 QA 사이클 |

### 계획 모드

| Skill | 목적 |
|-------|---------|
| `$plan` | 선택적 인터뷰가 포함된 전략 계획 |
| `$deep-interview` | 실행 전 소크라테스식 명확화 |
| `$ralplan` | Architect + Critic 리뷰가 포함된 합의 계획 |

### 유틸리티 모드

| Skill | 목적 |
|-------|---------|
| `$code-review` | 종합 코드 리뷰 |
| `$security-review` | 보안 감사 |
| `$doctor` | 설치 문제 진단 및 수정 |
| `$trace` | 에이전트 흐름 trace 및 요약 |
| `$note` | 세션 노트 저장 |
| `$wiki` | 지속 프로젝트 wiki |

---

## Team Mode

지속 상태와 lifecycle 제어를 갖춘 tmux-first 멀티 워커 오케스트레이션.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg는 tmux 아래 실제 Gemini CLI worker pane을 실행하고 `.omg/`에 내구성 있는 lifecycle 상태를 기록하며 각 worker를 claim-safe 작업 파일에 연결합니다. Gemini 기반 구현, 리뷰, 검증 lane을 병렬로 진행하면서 터미널에서 재개와 감사가 가능해야 할 때 사용하세요.

---

## 문서

- [전체 문서](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [명령 레퍼런스](docs/omg/commands.md)
- [설정 가이드](docs/setup/quickstart.md)
- [기여하기](CONTRIBUTING.md)

---

## 라이선스

omg는 [MIT License](LICENSE)로 공개된 오픈 소스입니다.

---

## 스폰서

omg가 시간을 절약해 준다면 [프로젝트 후원](https://github.com/sponsors/r3dlex)을 고려해 주세요 ❤️
