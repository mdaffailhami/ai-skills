# Categories — Definitions and Usage

Six standard categories, always in this order within a version section: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`. Omit categories that have no entries.

## Added
New features and functionality.

| Good | Bad |
|------|-----|
| Added pagination to the search results view. | Added pagination logic to the search service layer. |
| Added support for dark mode. | Added a `darkMode` boolean to config. |

Write about the feature a user sees or uses, not the code behind it.

## Changed
Changes to existing functionality — behavior changes, performance improvements, UI updates, breaking changes to features (not security).

| Good | Bad |
|------|-----|
| Changed the dashboard layout to a two-column grid. | Changed `getUser()` to return an object instead of a string. |
| Improved startup time by 40%. | Refactored the event loop. |

Reformatting/refactoring without user-visible change usually does not belong here — the changelog is for humans.

## Deprecated
Functionality that is soon to be removed. Used to warn users ahead of a future `Removed` entry.

| Good | Bad |
|------|-----|
| Deprecated the legacy export endpoint; use `/api/v2/export` instead. | Removed the old export endpoint. |

A deprecated feature still works but is discouraged. Always point to the replacement when one exists.

## Removed
Functionality that has been removed in this version.

| Good | Bad |
|------|-----|
| Removed support for the legacy v1 API. | Killed the old auth flow. |
| Removed the unused "beta" badge. | Deleted `legacy.js`. |

Only list removals that affect users or other consumers. Internal dead-code deletion is usually not notable.

## Fixed
Bug fixes.

| Good | Bad |
|------|-----|
| Fixed a crash when uploading files with names longer than 255 characters. | Fixed bugs. |
| Fixed incorrect currency conversion on the checkout page. | Various fixes. |

Be specific about the bug and, when useful, the scenario that triggered it.

## Security
Vulnerability fixes. Always placed last in the section.

| Good | Bad |
|------|-----|
| Fixed a path traversal vulnerability in the file download handler. | Patched a security issue. |
| Hardened session tokens against token-replay attacks. | Fixed an XSS. |

Security entries matter even for versions that also contain feature work — users must know to upgrade. Name the affected area clearly.