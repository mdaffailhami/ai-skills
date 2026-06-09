# respond-in-html

A skill that lets AI agents **respond in rich HTML instead of Markdown** — easier to read, visually scannable, with dark/light theme support. The HTML file is just the transport; the point is choosing HTML as your response format.

## What it does

When activated, the agent responds with a single `.html` file (auto-opened in your browser) — a visual, scannable document instead of a wall of Markdown.

## Features

- **Subagent delegation** — main agent describes content; subagent reads `subagent.md`, picks components from `templates/components/`, assembles the HTML. Same subagent session reused across requests.
- **Dark/light/system theme toggle** — floating button, design-token approach, `sessionStorage`-persisted preference
- **Lucide Icons** — 1000+ consistent icons via CDN (pinned `@1.17.0`). Used in all structured UI components
- **Mermaid.js** — theme-reactive flowcharts, sequence diagrams, ERDs, Gantt charts, timelines
- **Component catalog** — 12 components: TL;DR, admonitions (5 variants), badges, collapsible, code block, tab pane, mermaid, KPI cards, feature cards, comparison cards, step timeline, data table
- **Self-contained** — one file, zero npm, Tailwind v4 + Lucide + Mermaid via CDN
- **Responsive** — readable on desktop and mobile
- **Auto-open** — file opens in your default browser after generation

## How it works

HTML can't be rendered inline in the chat interface. The agent produces a single `.html` file as transport and auto-opens it in your browser.

**Delegation pattern:** The main agent describes what to render. The subagent reads `subagent.md` and `templates/` to pick components and assemble the HTML. The same subagent session is reused across requests for efficiency.

Output location:

- Linux: `~/.cache/respond-in-html/outputs/`
- macOS: `~/Library/Caches/respond-in-html/outputs/`
- Windows: `%localappdata%\respond-in-html\outputs\`

## Usage

Ask for an HTML response directly:

```
Explain how photosynthesis works step by step.
Respond in HTML.
```

```
Create an implementation plan for adding real-time notifications.
Use the `respond-in-html` skill.
```

## File structure

| Path | Purpose |
|------|---------|
| `SKILL.md` | Main agent instructions — activation, delegation, file paths |
| `subagent.md` | Subagent reference — tokens, components, scripts, patterns |
| `templates/component-showcase.html` | Worked example using all components |
| `templates/components/` | 12 HTML component files (admonition, code-block, tldr, etc.) |
| `templates/scripts/` | 3 JS files (tab-pane, theme-toggle, mermaid-init) |
