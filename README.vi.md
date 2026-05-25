[English](README.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | Tiếng Việt | [中文](README.zh.md)

# oh-my-Gemini (omg)

> **Dự án chị em:** [oh-my-claudecode (OMC)](https://github.com/Yeachan-Heo/oh-my-claudecode) | [oh-my-codex (OMX)](https://github.com/Yeachan-Heo/oh-my-codex) | [oh-my-githubcopilot (OMP)](https://github.com/r3dlex/oh-my-githubcopilot) | [oh-my-gemini (OMG)](https://github.com/r3dlex/oh-my-gemini) | [oh-my-auggie (OMA)](https://github.com/r3dlex/oh-my-auggie)

**Điều phối đa tác nhân cho Gemini CLI. Không cần học lại.**

_Đừng học Gemini CLI. Chỉ cần dùng omg._

[Bắt đầu](#quick-start) • [CLI Reference](#cli-reference) • [Workflows](#workflows) • [Discord](https://discord.gg/PUwSMR9XNk)

---

## Vì sao dùng omg?

Mọi đội phần mềm đều xử lý triển khai, kiến trúc, rà soát bảo mật, kiểm thử và DevOps cùng lúc. omg điều phối các tác nhân chuyên biệt để mỗi mảng nhận được sự chú ý chuyên môn song song.

Gemini CLI đưa khả năng suy luận ngữ cảnh dài của Google Gemini vào terminal, nhưng công việc production vẫn cần phân tách vai trò, trạng thái bền vững và kỷ luật xác minh. omg đặt các workflow đó lên Gemini CLI để lập kế hoạch, thực thi, review và QA chạy như các chế độ tác nhân lặp lại thay vì prompt một lần.

---

## Quick Start

```bash
npm install -g @r3dlex/oh-my-gemini
omg setup --scope project
omg
```

Sau khi setup, hãy khởi động lại CLI để các lệnh `/` xuất hiện.

```bash
omg doctor              # kiểm tra điều kiện tiên quyết
omg team run --task "..." --workers 2   # làm việc song song
omg hud --watch         # trạng thái trực tiếp
```

---

## Tính năng

| Tính năng | Mô tả |
|---------|-------------|
| **Tác nhân chuyên biệt** | 33+ agents (analyst, architect, executor, debugger, critic, verifier, test-engineer, writer, and more) |
| **Team Mode song song** | Điều phối multi-worker dựa trên tmux với trạng thái tác vụ dùng chung |
| **Workflow Skills** | 26+ built-in skills — plan, deep-interview, ralph, autopilot, ultrawork, code-review, and more |
| **Hook bền vững** | Theo dõi công cụ tự động, bộ nhớ dự án, quản lý phiên |
| **HUD thời gian thực** | Overlay trạng thái trực tiếp hiển thị tác nhân, chi phí và tiến độ |
| **CI/CD Ready** | Cổng xác minh, tích hợp kiểm thử, workflow phát hành |
| **Đa ngôn ngữ** | Bản dịch README cho đội toàn cầu |

---

## CLI Reference

| Lệnh | Mô tả |
|---------|-------------|
| `omg` | Khởi chạy phiên tương tác |
| `omg setup` | Cấu hình tích hợp Gemini CLI |
| `omg doctor` | Kiểm tra điều kiện tiên quyết và sửa lỗi |
| `omg team run` | Bắt đầu thực thi team song song |
| `omg team status` | Kiểm tra tiến độ team |
| `omg hud --watch` | Hiển thị overlay trạng thái trực tiếp |
| `omg trace` | Hiển thị trace thực thi |

Xem [tài liệu đầy đủ](https://github.com/r3dlex/oh-my-gemini/tree/main/docs) cho tất cả lệnh.

---

## Workflows

omg cung cấp workflow thực thi và lập kế hoạch dưới dạng skill tích hợp.

### Chế độ thực thi

| Skill | Mục đích |
|-------|---------|
| `$autopilot` | Từ ý tưởng đến mã chạy được end-to-end |
| `$team` | N tác nhân phối hợp trên một tác vụ chung |
| `$ralph` | Vòng lặp hoàn thành bền vững đến khi xác minh |
| `$ultrawork` | Thực thi thông lượng song song tối đa |
| `$ultraqa` | Chu kỳ QA đến khi đạt mục tiêu |

### Chế độ lập kế hoạch

| Skill | Mục đích |
|-------|---------|
| `$plan` | Lập kế hoạch chiến lược với phỏng vấn tùy chọn |
| `$deep-interview` | Làm rõ kiểu Socrates trước khi thực thi |
| `$ralplan` | Lập kế hoạch đồng thuận với review Architect + Critic |

### Chế độ tiện ích

| Skill | Mục đích |
|-------|---------|
| `$code-review` | Review mã toàn diện |
| `$security-review` | Kiểm toán bảo mật |
| `$doctor` | Chẩn đoán và sửa lỗi cài đặt |
| `$trace` | Trace và tóm tắt luồng tác nhân |
| `$note` | Lưu ghi chú phiên |
| `$wiki` | Wiki dự án bền vững |

---

## Team Mode

Điều phối multi-worker ưu tiên tmux với trạng thái bền vững và kiểm soát lifecycle.

```bash
omg team run --task "review src/ for reliability gaps" --workers 4
omg team status --team omg --json
omg team resume --team omg
omg team shutdown --team omg --force
```

omg khởi chạy các pane worker Gemini CLI thật trong tmux, ghi trạng thái lifecycle bền vững dưới `.omg/` và giữ mỗi worker gắn với file tác vụ claim-safe. Dùng khi bạn muốn các lane triển khai, review và xác minh dựa trên Gemini tiến triển song song nhưng vẫn có thể resume và audit từ terminal.

---

## Tài liệu

- [Tài liệu đầy đủ](https://github.com/r3dlex/oh-my-gemini/tree/main/docs)
- [Tham chiếu lệnh](docs/omg/commands.md)
- [Hướng dẫn setup](docs/setup/quickstart.md)
- [Đóng góp](CONTRIBUTING.md)

---

## Giấy phép

omg là mã nguồn mở theo [MIT License](LICENSE).

---

## Nhà tài trợ

Nếu omg giúp bạn tiết kiệm thời gian, hãy cân nhắc [tài trợ dự án](https://github.com/sponsors/r3dlex) ❤️
