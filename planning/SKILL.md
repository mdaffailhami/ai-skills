---
name: planning
description: Create planning pack files (spec + tasks) for approval-gated implementation with scoped phases and verification gates.
---

# Planning

## Workflow

### 1. Create Plan Folder

- Linux: `~/.cache/planning/outputs/<plan-name>/`
- macOS: `~/Library/Caches/planning/outputs/<plan-name>/`
- Windows: `%localappdata%\planning\outputs\<plan-name>`

### 2. Fill spec.md

- Objective, scope (in/out), architecture decisions, contracts, behavior rules, edge cases, risks, acceptance criteria, verification gates.

### 3. Fill tasks.md

- Allowed files, constraints, implementation checklist, phase breakdown, escalation triggers, definition of done.

### 4. Phases

Keep phases small for review.

### 5. Gates

Specify verification (e.g. `npm run format && npm run lint && npm run check && npm test && npm run build`, or any verification method that suits the implementation).

### 6. Approval

Pause for user approval before implementation.

### 7. Execute & Update

Keep `tasks.md` updated. Escalate if contracts change or blocker fails >2x.

## Done

Acceptance criteria satisfied, verification passes, tasks.md updated, deviations documented.
