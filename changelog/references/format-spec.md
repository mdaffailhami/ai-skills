# Keep a Changelog — Format Specification (v1.1.0)

The canonical rules for changelogs, based on the Keep a Changelog convention (keepachangelog.com, format version 1.1.0).

## Guiding Principles

1. Changelogs are for humans, not machines. Write for a person who wants to know what changed and why it matters.
2. There should be an entry for every single version of the project. No gaps.
3. The same types of changes should be grouped together.
4. Versions and sections should be linkable (anchors).
5. The latest version comes first in the file.
6. The release date of each version is displayed.
7. State explicitly whether Semantic Versioning is followed.
8. A changelog is a curated record of notable changes — not a dump of the commit history.

## Changelog vs. Release Notes

- A **changelog** is scoped to a project and its versioned releases; it documents what changed between versions.
- **Release notes** are typically broader, written for end users, and often accompany distribution channels or marketing.
- The same underlying changes can appear in both, but the changelog stays closer to the codebase and uses technical-adjacent, versioned structure.

## Template

Copy this structure exactly when creating a changelog from scratch:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security

## [1.1.0] - 2024-03-14

### Added
- Entry A
- Entry B

### Fixed
- Entry C

## [1.0.0] - 2024-01-20

### Added
- Initial release
```

## Structural Rules

- **Newest first:** Released versions appear in reverse chronological order, newest at the top.
- **Unreleased section:** The `[Unreleased]` section sits at the very top, above all released versions, while the project is still in development.
- **Category order:** Within every section, categories appear in this exact order:
  1. `Added`
  2. `Changed`
  3. `Deprecated`
  4. `Removed`
  5. `Fixed`
  6. `Security`
- **Omit empty categories:** Do not leave blank category headers. Only include categories that have entries.
- **Dates:** ISO 8601 format `YYYY-MM-DD`, no leading zeros, right after the version heading.
- **Linkable versions:** Provide an anchor for each version heading so sections are linkable. Anchors use the GitHub-style slug of the version (e.g., `## [1.1.0]` → `#110`).
- **Compare links:** At the bottom of the file, include comparison links between consecutive versions when the hosting platform supports them (e.g., GitHub diff links), plus a link for the Unreleased section:

```markdown
[Unreleased]: https://github.com/user/repo/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/user/repo/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/user/repo/releases/tag/v1.0.0
```

- **Versioning statement:** In the header, state which versioning scheme is used. Default recommendation is Semantic Versioning (SemVer). CalVer may be used for projects where time-based versioning makes more sense (e.g., date-based releases like `2024.03`).

## Entry Writing Rules

- Each entry is a single concise bullet that describes the **user-visible change**.
- Start with a past-tense verb: "Added", "Fixed", "Removed", "Renamed", "Improved", etc.
- Be specific about the change; avoid vague phrasing like "various fixes".
- Do not paste commit messages or raw git output.
- Do not include version numbers inside bullets.
- Group related changes; if unsure where a change fits, use the category that best describes the user-facing outcome.
- Aim for a summary that takes at most a few minutes to read for the whole project history.

## Semantic Versioning Reference

Given a version `MAJOR.MINOR.PATCH`:

- **MAJOR:** incompatible API changes.
- **MINOR:** backward-compatible new functionality.
- **PATCH:** backward-compatible bug fixes.

Pre-release and build metadata are optional and appended with `-` and `+` respectively (e.g., `1.2.0-beta.1`, `1.2.0+build.5`).

## What NOT to Do

- Do not use `git log` output verbatim as changelog entries.
- Do not list every internal refactor or code-level change that has no user-visible impact.
- Do not reorder categories or invent new ones.
- Do not use natural-language dates like "March 14, 2024".
- Do not skip versions or omit the date.
- Do not leave a stale, empty `Unreleased` section with no entries when the project is released and archived.