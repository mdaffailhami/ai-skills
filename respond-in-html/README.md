# respond-in-html

A skill that lets AI agents **respond in rich HTML instead of Markdown** — easier to read, visually scannable, with dark/light theme support. The HTML file is just the transport; the point is choosing HTML as your response format.

## What it does

When activated, the agent responds with a single `.html` file (auto-opened in your browser) — a visual, scannable document instead of a wall of Markdown.

## Features

- **Dark/light/system theme toggle** — floating button, design-token approach, memory-only state
- **Self-contained** — one file, zero npm, Tailwind v4 via CDN
- **Scannable layout** — TL;DR boxes, collapsible sections, tabbed content, severity badges, inline SVG diagrams
- **Responsive** — readable on desktop and mobile
- **Auto-open** — file opens in your default browser after generation

## How it works

HTML can't be rendered inline in the chat interface. The agent produces a single `.html` file as transport and auto-opens it in your browser.

Output location:

- Linux: `~/.cache/respond-in-html/outputs/`
- macOS: `~/Library/Caches/respond-in-html/outputs/`
- Windows: `%localappdata%\respond-in-html\outputs\`

## Usage

Ask for an HTML response or mention the `respond-in-html` skill directly:

```
Explain how photosynthesis works step by step.
Respond in HTML.
```

```
Create an implementation plan for adding real-time notifications.
Use the `html-rich-output` skill.
```
