# AI Skills

Daffa Ilhami's personal collection of skills for AI agents (OpenCode, Claude Code, Codex, etc). Each skill extends the agent with specialized instructions and patterns for a specific type of task.

## Skills

| Skill | Description |
|-------|-------------|
| [planning](./planning) | Generate concrete implementation plans — exact files, code, commands, and verification steps |
| [executing](./executing) | Execute implementation plans with one fresh subagent per task and two-stage review |
| [respond-in-html](./respond-in-html) | Respond in rich HTML instead of Markdown — the `.html` file is transport, the format is the point |

## Structure

Each skill follows the standard layout:

```
skill-name/
  SKILL.md         # skill instructions (loaded by the agent)
  README.md        # documentation for the skill
  templates/       # optional reference templates
```

