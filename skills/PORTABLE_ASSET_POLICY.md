# Portable Asset Policy

## What Makes A Skill Portable

A portable skill is more than repository documentation.

It should:

- describe a reusable engineering capability
- remain understandable outside the originating repository
- separate portable practice from current implementation
- carry enough metadata to survive copying or redistribution

## Core Skill Vs Repository Adaptation

- Core Skill: reusable capability another repository could adopt
- Repository Adaptation: how Let Books currently implements that capability

The adaptation is evidence. It is not the portable asset itself.

## Required Metadata

Each portable skill should contain:

- `skill`
- `version`
- `status`
- `license`
- `origin`
- `parent_skill`

Optional but recommended:

- `related_skills`
- `minimum_adoption`
- `maturity_level`

## Licensing Requirements

- portable skill definitions use `Apache-2.0`
- canonical license text lives in `skills/LICENSE`
- skill files should reference the canonical license instead of embedding full license text

## Provenance Requirements

Each skill should explain that it was extracted from repository evidence including:

- guidance
- validators
- tests
- workflows
- review procedures

## Versioning Requirements

- portable skills use `MAJOR.MINOR.PATCH`
- package-level guidance lives in `skills/VERSIONING.md`
- the manifest should summarize current versions and parent relationships

## Adoption Requirements

Portable skills should include enough guidance that a future repository can adopt them through:

- governance docs
- templates
- validator packs
- CI integrations
- onboarding material

without inheriting Let Books specific structure by accident.
