---
name: respond-in-html
description: Use ONLY when the user asks to respond in HTML instead of Markdown — e.g. "respond in HTML", "answer in HTML", "explain this in HTML".
---

# respond-in-html

## When to activate

Only use this skill when the user explicitly asks to respond in HTML instead of Markdown:  
"explain this in HTML", "respond in HTML", "answer in HTML", "use the respond-in-html skill"

Do NOT use for normal conversation, short answers, or standard text output.

## How it works

HTML can't be rendered inline. Deliver response as `.html` file.

**Delegation pattern:**
- Main agent is **FORBIDDEN** to read `subagent.md` or the templates directory.
- Main agent describes **CONTENT ONLY** — sections, concepts, takeaways.
- Subagent reads `subagent.md` and owns the layout decision: reads the templates directory and picks matching components for each content section, and generates the HTML.
- Main agent **MUST** READ the generated HTML file from disk to understand the content context.

> **IMPORTANT:** Main agent **MUST** REUSE the same subagent session across requests.

### File paths
- Linux: `~/.cache/respond-in-html/outputs/`
- macOS: `~/Library/Caches/respond-in-html/outputs/`
- Windows: `%localappdata%\respond-in-html\outputs\`

Use descriptive lowercase-hyphenated filename (e.g. `plan-comment-threads.html`).

**After generation,** **MAIN AGENT** prints the file path link (`file://...`) and auto-open: `xdg-open` (Linux), `open` (macOS), `start` (Windows).
