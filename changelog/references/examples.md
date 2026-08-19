# Examples

## Good Changelog

A realistic, compliant changelog for a small web application:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Add a "recently viewed" section on the home page.

### Changed
- Speed up initial page load by lazy-loading images.

### Deprecated
- Deprecate the JSON export format; use CSV instead.

## [1.2.0] - 2024-06-10

### Added
- Add team workspaces with role-based permissions.
- Add keyboard shortcuts for navigation.

### Changed
- Redesign the settings page layout.

### Removed
- Remove the standalone "Reports" page; it moved into Analytics.

### Fixed
- Fix dates being off by one day in timezones ahead of UTC.
- Fix duplicate notifications when two tabs were open.

### Security
- Fix a stored cross-site scripting issue in the comment widget.

## [1.1.0] - 2024-03-14

### Added
- Add two-factor authentication.

### Fixed
- Fix sign-in failing on Safari 15.

## [1.0.0] - 2024-01-20

### Added
- Initial release: accounts, projects, tasks, and comments.

[Unreleased]: https://github.com/acme/tracker/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/acme/tracker/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/acme/tracker/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/acme/tracker/releases/tag/v1.0.0
```

## What Makes It Good

- Every version has a date in `YYYY-MM-DD` format.
- Categories appear in the required order; empty categories are omitted.
- Bullets start with past-tense verbs and describe user-visible outcomes.
- `Unreleased` sits at the top; released versions are reverse-chronological.
- Compare links close the file.

## Bad Changelog — and Why

```markdown
# Changelog

## Version 2.0
- fixed stuff
- 3/14/24: refactored user service to use repository pattern
- added dark mode
- performance improvements to the graph
- security patch
- oops, fixed the thing from last week
- updated dependencies
```

Problems:

1. **No date convention** — mixed formats ("3/14/24") instead of `YYYY-MM-DD`.
2. **No categories** — everything is one flat, unlabeled list.
3. **Vague bullets** — "fixed stuff", "security patch" say nothing specific.
4. **Internal detail** — "refactored user service to use repository pattern" is invisible to users.
5. **Missing versions** — jumps straight from 1.0 to 2.0 with no intermediate versions or dates.
6. **Unreleased section missing** — no place for in-progress work.
7. **Commit-message style** — reads like squashed git history, not curated notes.

## Category Assignment Practice

Given these changes, the correct categories are:

| Change | Category |
|--------|----------|
| New settings panel | `Added` |
| Buttons restyled across the app | `Changed` |
| Old `/legacy` route marked for removal | `Deprecated` |
| `/legacy` route deleted | `Removed` |
| Login form crash on empty email | `Fixed` |
| SQL injection in search fixed | `Security` |
| Home page load time improved | `Changed` |