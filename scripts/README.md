# Scripts README

## Purpose

`scripts/` holds repository-level operational helpers that are meant to be run directly by contributors or workflows.

Unlike `tools/`, which focuses on validators, generators, and maintenance utilities, `scripts/` is for small entry-point automation that prepares or coordinates the environment those tools depend on.

## Why It Exists

Some repository guarantees depend on a predictable local toolchain, not just on source files.

This directory exists to preserve that operational knowledge close to the executable entry points rather than leaving it implicit in CI logs or old setup discussions.

## Knowledge Preservation Standard

For `scripts/`, prefer:

1. `scripts/README.md`
2. file headers
3. high-value inline comments
4. additional documentation only when necessary

Scripts should explain:

- what they prepare or coordinate
- why they exist
- what workflows or validators depend on them
- what failures they prevent
- what assumptions they make about the environment

## Script Catalog

### `bootstrap-localization-tools.sh`

Purpose:
- Bootstraps the project-local Python environment required by localization validators and localization maintenance tools.

Why It Exists:
- Localization checks rely on Python packages that are not part of the default system environment.
- CI and local development both need a repeatable setup path so localization tooling behaves the same way in both places.

Protects:
- reproducible localization toolchain setup
- consistent local and CI behavior for localization validators
- avoidance of ad-hoc global Python package installs

Failure Impact:
- localization validators may fail for environment reasons rather than repository reasons
- contributors may run a different toolchain than CI
- optional translation backends may be misunderstood or silently unavailable

Related Tools:
- `tools/validate_translation_parity.py`
- `tools/audit_translation_parity.py`
- `tools/audit_translation_warnings.py`
- `tools/localization_mt_draft.py`
- `tools/localization_patch_assist.py`
- `tools/generate_translation_sidecars.py`

Related Workflows:
- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

Reuse Potential:
- High. Repository-local environment bootstrapping for a specialized validator/toolchain stack is a reusable operational pattern.

## Relationship To Tools And Workflows

This directory sits between repository tooling and CI/CD orchestration.

- `tools/` contains the validators and generators
- `scripts/` prepares the runtime environment they need
- `.github/workflows/` decides when that preparation must happen automatically

## Pattern Graduation

A script pattern should be treated as reusable only when it:

- solves a recurring operational problem
- applies beyond one narrow task
- reduces maintenance effort
- remains understandable without heavy project-specific context

Prefer proven operational patterns over speculative shell frameworks.

## Engineering Knowledge Preservation

Scripts are part of repository memory.

A well-documented script should function as both:

- an executable operational helper
- a permanent record of why that operational step exists
