[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | Türkçe | [Tiếng Việt](README.vi.md) | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Kardeş projeler:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Gemini CLI için çok ajanlı orkestrasyon. Öğrenme eğrisi yok.**

_Gemini CLI öğrenme. Sadece omg kullan._

[Başla](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Neden omg?

Her yazılım ekibi uygulama, mimari, güvenlik incelemesi, test ve DevOps işlerini aynı anda yürütür. omg, uzman ajanları orkestre ederek her boyutun paralel şekilde uzman ilgisi görmesini sağlar.

Gemini CLI, Google Gemini’nin uzun bağlamlı akıl yürütmesini terminale getirir; ancak üretim işi hâlâ rol ayrımı, kalıcı durum ve doğrulama disiplini gerektirir. omg bu workflow’ları Gemini CLI üzerine ekler; planlama, yürütme, inceleme ve QA tek seferlik promptlar yerine tekrarlanabilir ajan modları olarak çalışır.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Kurulumdan sonra `/` komutlarının görünmesi için CLI’ni yeniden başlat.

```bash
omg doctor              # ön koşulları kontrol et
omg team run --task "..." --workers 2   # paralel çalışma
omg hud --watch         # canlı durum
```

---

## Özellikler

| Özellik | Açıklama |
|---------|-------------|
| **Uzman ajanlar** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **Paralel Team Mode** | Paylaşılan görev durumuyla tmux tabanlı çok-worker orkestrasyonu |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **Kalıcı Hook’lar** | Otomatik araç takibi, proje belleği, oturum yönetimi |
| **Gerçek zamanlı HUD** | Ajanları, maliyetleri ve ilerlemeyi gösteren canlı durum katmanı |
| **CI/CD Ready** | Doğrulama kapıları, test entegrasyonu, release workflow’ları |
| **Çok dilli** | Küresel ekipler için README çevirileri |

---

## CLI Reference

| Komut | Açıklama |
|---------|-------------|
| `omg` | Etkileşimli oturum başlatır |
| `omg setup` | Gemini CLI entegrasyonunu yapılandırır |
| `omg doctor` | Ön koşulları kontrol eder ve sorunları düzeltir |
| `omg team run` | Paralel ekip yürütmesini başlatır |
| `omg team status` | Ekip ilerlemesini kontrol eder |
| `omg hud --watch` | Canlı durum katmanını gösterir |
| `omg trace` | Yürütme izini gösterir |

Tüm komutlar için [tam dokümantasyona](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) bak.

---

## Workflows

omg, yürütme ve planlama workflow’larını yerleşik skill olarak sunar.

### Yürütme modları

| Skill | Amaç |
|-------|---------|
| `$autopilot` | Fikirden çalışan koda uçtan uca |
| `$team` | Ortak görevde N koordine ajan |
| `$ralph` | Doğrulanana kadar kalıcı tamamlama döngüsü |
| `$ultrawork` | Maksimum paralel throughput yürütmesi |
| `$ultraqa` | Hedefler karşılanana kadar QA döngüsü |

### Planlama modları

| Skill | Amaç |
|-------|---------|
| `$plan` | İsteğe bağlı görüşmelerle stratejik planlama |
| `$deep-interview` | Yürütmeden önce Sokratik netleştirme |
| `$ralplan` | Architect + Critic incelemeli uzlaşı planlaması |

### Yardımcı modlar

| Skill | Amaç |
|-------|---------|
| `$code-review` | Kapsamlı kod incelemesi |
| `$security-review` | Güvenlik denetimi |
| `$doctor` | Kurulum sorunlarını tanılar ve düzeltir |
| `$trace` | Ajan akışı izi ve özeti |
| `$note` | Oturum notlarını kaydeder |
| `$wiki` | Kalıcı proje wiki’si |

---

## Team Mode

Kalıcı durum ve lifecycle kontrolleriyle tmux-first çok-worker orkestrasyonu.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg, tmux altında gerçek Gemini CLI worker pane’leri başlatır, `.omg/` altında dayanıklı lifecycle durumu kaydeder ve her worker’ı claim-safe görev dosyalarına bağlar. Gemini destekli uygulama, inceleme ve doğrulama hatlarının paralel ilerlemesini, terminalden sürdürülebilir ve denetlenebilir kalmasını istediğinde kullan.

---

## Dokümantasyon

- [Tam dokümantasyon](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Komut referansı](docs/omg/commands.md)
- [Setup rehberi](docs/setup/quickstart.md)
- [Katkıda bulun](CONTRIBUTING.md)

---

## Lisans

omg, [MIT License](LICENSE) altında açık kaynaktır.

---

## Sponsorlar

omg sana zaman kazandırıyorsa [projeye sponsor olmayı](https://github.com/sponsors/r3dlex) düşün ❤️
