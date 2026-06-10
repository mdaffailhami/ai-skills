---
name: respond-in-html
description: Use ONLY when the user asks to respond in HTML instead of Markdown — e.g. "respond in HTML", "answer in HTML", "explain this in HTML".
---

# Respond in HTML

## When to use

Only use this skill when the user explicitly asks to respond in HTML instead of Markdown:  
"explain this in HTML", "respond in HTML", "answer in HTML", "use the respond-in-html skill"

Do NOT use for normal conversation, short answers, or standard text output.

## How it works

HTML can't be rendered inline in the conversation window. Thus, deliver the response as an HTML file.

> **IMPORTANT:** REUSE existing subagent session (when available) across requests.

### Output location
- Linux: `~/.cache/respond-in-html/outputs/`
- macOS: `~/Library/Caches/respond-in-html/outputs/`
- Windows: `%localappdata%\respond-in-html\outputs\`

Use descriptive lowercase-hyphenated filename (e.g. `plan-comment-threads.html`).

## Delegation via general subagent

Your task is to describe **CONTENT ONLY** to the subagent.

> **IMPORTANT**: NEVER read `html-generation.md` or anything under `templates/`.

Use this prompt template when prompting the subagent (fill the `< >` placeholders):

```
You are a senior UI/UX Designer and Senior Frontend Developer. Your task is to generate a single self-contained HTML file.

Content brief:
<Describe content: sections, concepts, key takeaways, etc.>

---

> IMPORTANT: NEVER read any `SKILL.md`

1. Read <`html-generation.md`'s absolute path>.
2. Browse `templates/components/` and `templates/scripts/`. READ ONLY needed components/scripts for each content section.
3. Generate the output <absolute path of the expected HTML file output>.
```

**After generation,** prints the file path link (`file://...`) and auto-open with:
- Linux: `xdg-open "<file-path>"`
- macOS: `open "<file-path>"`
- Windows: `start "<file-path>"`
