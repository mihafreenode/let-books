---
skill: Localization Governance
version: 1.0.0
status: Experimental
license: Apache-2.0
origin: Let Books Skills Package
parent_skill: Engineering Governance
related_skills:
  - Documentation as Product
  - CI/CD Governance
minimum_adoption: Define locales, parity expectations, and review workflow
maturity_level: 5
---

# Localization Governance

## Purpose

Govern multilingual content as an engineering quality system rather than a loose translation task.

## Problem Being Solved

Multilingual repositories often fail through:

- missing or partial localization
- English leakage inside localized content
- semantic drift from the canonical source
- repeated translation defects that are fixed once but not systematized

## Core Skill

Localization governance is the capability of running multilingual work with:

- clear coverage expectations
- semantic and structural parity rules
- explicit review workflow
- preserved findings from native-speaker review
- defect classes and recurrence control
- layered validation across source, generated, and rendered output

Another repository would want this because file presence alone does not create trustworthy multilingual delivery.

### Content Family Completeness

Related content should be treated as a unit.

A localization effort is not complete when newly introduced:

- examples
- arguments
- sections
- supporting material

remain untranslated or semantically unavailable in related localized variants that are expected to stay aligned.

Why this rule exists:

- localization drift often appears through adjacent content that is technically present but no longer complete as a family

Risks prevented:

- partially updated localized article families
- silent omission of new substantive source content
- misleading impressions of parity based only on file presence

Relationship to existing guidance:

- extends this skill's parity and coverage expectations from single files to related content sets

## Repository Adaptation

Let Books currently implements this skill through:

- localization operating guides and style guidance under `docs/style-guide/localization/`
- program-level docs such as `docs/localization-at-scale-program.md` and `docs/localization-maintenance-system.md`
- an operational audit companion in `docs/localization-audit-report.md`
- a structured native-speaker findings corpus at `docs/style-guide/localization/native-speaker-findings-corpus.json`
- parity, completeness, language-quality, structural, and reporting validators under `tools/`
- tests that protect validator behavior and findings-corpus shape
- CI enforcement for closed defect classes and reader-facing localization completeness

## Current Repository Evidence

- `docs/localization-at-scale-program.md`
- `docs/localization-maintenance-system.md`
- `docs/localization-audit-report.md`
- `docs/wiki/localization-ci-cd.md`
- `docs/wiki/translation-quality-assurance.md`
- `docs/style-guide/localization/README.md`
- `docs/style-guide/localization/review-workflow.md`
- `docs/style-guide/localization/semantic-parity.md`
- `docs/style-guide/localization/ai-translation-review-records.md`
- `docs/style-guide/localization/language-maintainers.md`
- `docs/style-guide/localization/contributor-workflow.md`
- `docs/style-guide/localization/native-speaker-findings-corpus.json`
- `tools/validate_translation_parity.py`
- `tools/validate_language_quality.py`
- `tools/validate-localized-articles.mjs`
- `tools/validate-structural-localization-parity.mjs`
- `tools/validate-localization-completeness.mjs`
- `tools/audit-localized-markdown-sources.mjs`
- `tools/summarize_native_speaker_findings.py`
- `tools/tests/test_validate_translation_parity.py`
- `tools/tests/test_validate_language_quality.py`
- `tools/tests/test_native_speaker_findings_corpus.py`
- `tools/tests/test_summarize_native_speaker_findings.py`
- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

## Inputs

- canonical source content
- supported locales
- review standards for parity and quality
- terminology guidance
- findings from prior human review

## Expected Actions

- publish localization rules
- review localized content against canonical sources
- treat related content updates as family-level review candidates when they are expected to stay aligned
- preserve representative findings
- classify repeated failures into defect classes
- automate objective checks
- move stable defect classes into CI blocking when practical

## Expected Artifacts

- localized content
- localization style guides and workflows
- findings corpus
- audit reports
- parity and completeness validators
- regression tests for critical localization rules

## Validation

### Manual Review

- semantic parity review
- native-language quality review
- rendered-output review for diagrams, navigation, and labels

### Automated Validation

- content parity checks
- structural parity checks
- suspicious-English detection
- language-quality warnings
- rendered-output completeness checks

### CI Enforcement

- blocking source and rendered-output checks for closed defect classes
- regeneration before parity review and publish

### Existing Gaps

- native-language expression still depends on human review
- some structural and semantic checks remain heuristic rather than definitive

## Success Criteria

- every supported locale has reader-usable content
- localized readers retain the same core understanding as source readers
- related localized content stays substantively complete when canonical content families evolve
- repeated defect patterns are preserved and reduced over time
- defect classes close only when recurrence is actually prevented

## Failure Modes

- locale files exist but meaning is lost
- generated or rendered output leaks source language text
- review findings are not preserved as reusable guidance
- teams optimize for file count rather than reader value

## Maturity Assessment

- Mature

The repository has guidance, workflows, validators, tests, CI enforcement, audit reporting, and an explicit learning loop through native-speaker findings and defect classes.

## Portability Assessment

### Would I Install This In A New Repository?

- Yes, when multilingual delivery matters.

### ERP

- Yes.

### Web Application

- Yes.

### Documentation Repository

- Yes.

### Internal Business Application

- Yes when multilingual.

### Repository-Specific Parts

- current locale set
- current docs tree and article families
- current findings taxonomy details

### Reusable Parts

- layered localization validation
- semantic and structural parity review
- findings corpus model
- defect-class closure model
- fresh-artifact review rule

### Adaptation Requirements

- define supported locales and content types
- tune validators for repository formats
- choose which defect classes become blocking

### Confidence Level

- High

## Future Installation Concept

A future repository could adopt this skill through:

- localization governance section in `AGENTS.md` or `CONTRIBUTING.md`
- style-guide and review-workflow templates
- starter findings corpus schema
- starter parity and completeness validators
- CI integration for regenerated-output localization checks

## Open Questions

- how much of this skill should be content-format agnostic versus Markdown-specific?
- what is the minimum findings-corpus schema that remains useful across repositories?
- should future packages separate coverage enforcement from semantic review tooling?

## License

This skill definition is licensed under the Apache License 2.0.

See `skills/LICENSE` for the full license text.

## Provenance

Originally extracted from repository evidence including localization guidance, validators, tests, workflows, and review procedures.

See repository adaptation documentation for implementation-specific details.
