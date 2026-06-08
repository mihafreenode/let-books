# Skill Merges

## Merge: Repository Knowledge Preservation + Spec-Driven Traceability -> Engineering Governance

Reason:
- the same principles appeared across `PRINCIPLES.md`, `AGENTS-Implementation.md`, `docs/wiki/spec-driven-development.md`, `docs/wiki/documentation-traceability.md`, and the README layers for tools, tests, scripts, and workflows
- another repository would almost always install these practices together

Evidence:
- `PRINCIPLES.md`
- `AGENTS.md`
- `AGENTS-Implementation.md`
- `docs/wiki/spec-driven-development.md`
- `docs/wiki/documentation-traceability.md`
- `tools/README.md`
- `tests/README.md`
- `.github/workflows/README.md`

## Merge: Validator Engineering -> absorbed by Engineering Governance

Reason:
- validator headers, validator tests, and validator docs are real practices, but they follow the same broader pattern of traceable, explainable, policy-aware engineering artifacts
- the repository does not treat validators as an isolated discipline

Evidence:
- `AGENTS-Implementation.md`
- `tools/README.md`
- `docs/wiki/validation-layers.md`
- validator headers in `tools/validate_translation_parity.py`, `tools/validate_language_quality.py`, and `tools/validate_layout_structure.py`

## Non-Merge: Localization Governance stays separate

Reason:
- it applies the governance pattern to a distinct multilingual problem space with its own defect classes, review processes, and maturity model

## Non-Merge: Documentation as Product stays separate

Reason:
- it governs a specific delivery surface and remains installable even in repositories that are not multilingual

## Non-Merge: CI/CD Governance stays separate

Reason:
- it is the automation trust-boundary specialization and remains portable outside the docs and localization domains
