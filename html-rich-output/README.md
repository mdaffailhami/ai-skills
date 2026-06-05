# html-rich-output

A skill for AI agents that generates rich, self-contained HTML artifacts instead of Markdown walls.

## What it does

When activated, the agent produces a single `.html` file — no build step. The output is a visual, scannable document you open in your browser.

## Features

- **Dark/light/system theme toggle** — floating button, design-token approach, memory-only state
- **Domain-agnostic** — works for coding (PR reviews, implementation plans) and non-coding (science explainers, history timelines, business reports, etc)
- **Self-contained** — one file, zero npm, Tailwind v4 via CDN
- **Scannable layout** — TL;DR boxes, collapsible sections, tabbed content, severity badges, inline SVG diagrams
- **Responsive** — readable on desktop and mobile
- **Auto-open** — file opens in your default browser after generation

## Use cases

- Exploration & planning (side-by-side comparisons, milestone timelines)
- Reports, research & learning (sticky nav, collapsible steps, FAQ)
- Code review (annotated diffs, risk maps, severity tags)
- Design & prototyping (visual comparisons, variant grids)
- Slide decks (arrow-key navigation)
- Diagrams & visualizations (inline SVG for any domain)

## HTML output location

| Platform | Path |
|----------|------|
| Linux | `~/.cache/html-rich-outputs/` |
| macOS | `~/Library/Caches/html-rich-outputs/` |
| Windows | `%localappdata%\html-rich-outputs\` |

## Usage

Start a prompt with the skill name or ask explicitly:

```
use the html-rich-output skill and explain how photosynthesis works step by step
```

```
use the html-rich-output skill and review this PR focusing on the auth logic
```

```
use the html-rich-output skill and create an implementation plan for adding real-time notifications
```
