# Engineering Governance Pilot Report

## What Was Created

Created the first reusable agent skill pilot under:

- `.agents/skills/engineering-governance/`

Contents:

- `SKILL.md` - short operational agent skill
- `references/knowledge-close-to-artifact.md`
- `references/validator-first-governance.md`
- `references/layered-validation.md`
- `references/let-books-adapter.md`

## What This Pilot Covers

Portable pilot scope:

- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-003` Validator-First Governance
- `EG-004` Layered Validation Model

Out of pilot scope:

- `EG-001`
- `EG-005`
- `EG-006`
- `EG-007`

## Portability Review

The generic skill remains understandable without Let Books because:

- `SKILL.md` is repository-agnostic
- the three reference files explain portable rules, not repo conventions
- Let Books-specific file bindings and local meanings are isolated in `references/let-books-adapter.md`

## What Should Be Tested Next

1. Use the skill in another repository with tools/tests/workflows but no Let Books structure.
2. Check whether the generic skill still gives enough action guidance without the adapter.
3. Check whether the adapter is sufficient for repository-local usage without duplicating the generic rule definitions.
4. Evaluate whether the pilot needs an additional short reference on artifact ownership or governance drift before expanding scope.
