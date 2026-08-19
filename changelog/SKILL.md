---
name: changelog
description: Use when creating, updating, reviewing, or validating a changelog for a project. Bundles the full changelog convention including format rules, categories (Added, Changed, Deprecated, Removed, Fixed, Security), section ordering, date and versioning conventions, templates, and examples. Don't use for generating commit messages, release notes, or git history summaries.
---

# Changelog

Apply the Keep a Changelog v1.1.0 convention to any changelog task. A changelog is a curated, human-readable record of notable changes per version — not a raw git history dump.

## Procedures

**Step 1: Determine the Task**
1. Identify the task type: create (new CHANGELOG.md), update (add a release or Unreleased entries), review (audit an existing changelog), or validate (check format compliance).
2. If reviewing or validating, read the target CHANGELOG.md in full before making judgments.

**Step 2: Load the Convention Rules**
1. Read `references/format-spec.md` to confirm the structural rules, template, and versioning guidance.
2. Read `references/categories.md` to map each change to the correct category with the correct wording.
3. If drafting or editing real content, read `references/examples.md` to mirror the tone and structure of good changelogs.

**Step 3: Apply the Format**
1. Follow the template in `references/format-spec.md` exactly: `Unreleased` section first, then released versions in reverse chronological order.
2. Order categories within every section as: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`. Omit empty categories rather than leaving blank headers.
3. Use ISO dates (`YYYY-MM-DD`) for every released version.
4. Write each entry as a short, specific, user-impacting sentence fragment. Start with a past-tense verb. Do not restate the version number in the bullet.
5. When creating or updating, if the repository uses git tags, consult `git log` between tags to capture the changes; otherwise work from the provided summary or request one.
6. Produce the resulting changelog section or file as the final output. Do not create the file on disk unless the user explicitly asks.

**Step 4: Review for Compliance**
1. Verify category ordering, date format, and reverse-chronological version order.
2. Check that no entries leak implementation details, internal references, or version numbers into bullets.
3. Confirm the `Unreleased` section is present at the top of any changelog that is still in development.

## Error Handling
* If a change does not fit a single category (e.g., a fix that is also a feature), place it in the category that best describes the user-visible outcome and use the most specific verb.
* If the user asks for release notes instead of a changelog, note the difference described in `references/format-spec.md` and ask which one is intended.
* If a project uses CalVer or a custom versioning scheme, apply it consistently and document it in the header as described in `references/format-spec.md`.