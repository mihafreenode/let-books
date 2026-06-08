# Versioning

## Why Skills Have Versions

These skill definitions are being treated as portable engineering assets.

Versioning helps future users understand:

- whether the skill changed structurally
- whether adoption guidance changed
- whether metadata or packaging changed
- whether two repositories are using the same skill revision

## Compatibility Expectations

- Minor wording clarifications that do not change meaning are non-breaking.
- New optional sections or examples are usually non-breaking.
- Structural changes to required metadata or required sections are potentially breaking.
- Changes to parent-skill relationships should be treated carefully because they affect packaging and installation assumptions.

## Versioning Strategy

Use:

```text
MAJOR.MINOR.PATCH
```

Examples:

- `1.0.0` initial extracted version
- `1.1.0` new guidance, examples, or optional metadata
- `1.0.1` typo fixes or packaging corrections
- `2.0.0` breaking structural change to the skill definition

## Current Version

Initial extracted skills package version:

```text
1.0.0
```

## Scope Of Versioning

Versioning applies to the portable skill definitions and their package metadata.

It does not imply that the underlying Let Books implementation changed to match every revision automatically.
