---
name: planning
description: Use when the user wants to plan an implementation.
---

# Planning

## Workflow

### 1. Create Plan Folder

- Linux: `~/.cache/planning/outputs/<plan-name>/`
- macOS: `~/Library/Caches/planning/outputs/<plan-name>/`
- Windows: `%localappdata%\planning\outputs\<plan-name>`

### 2. Fill spec.md

- Objective, scope (in/out), architecture decisions, contracts, behavior rules, edge cases, risks, acceptance criteria, verification gates.
- Specify verification (e.g. `npm run format && npm run lint && npm run check && npm test && npm run build`, or any verification method that suits the implementation).

### 3. Fill tasks.md

- Allowed files, constraints, implementation checklist, phase breakdown, escalation triggers, definition of done.
- Keep phases small for review.
- Use checkboxes (`[ ]`, `[x]`) to track progress.

## 4. Open both spec.md & tasks.md files

- Linux: `xdg-open ~/.cache/planning/outputs/<plan-name>/<spec_or_tasks>.md`
- macOS: `open ~/Library/Caches/planning/outputs/<plan-name>/<spec_or_tasks>.md`
- Windows: `start %localappdata%\planning\outputs\<plan-name>\<spec_or_tasks>.md`

### 5. Approval

Pause for user approval before implementation.

### 6. Execute & Update

Keep `tasks.md` updated. Escalate if contracts change or blocker fails >2x.

## Done

Acceptance criteria satisfied, verification passes, tasks.md updated, deviations documented.
