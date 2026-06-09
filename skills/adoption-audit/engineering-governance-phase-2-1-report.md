# Engineering Governance Phase 2.1 Report

## Scope

This extraction pass covered only:

- `EG-002` Knowledge Stays Close To Governed Artifacts
- `EG-003` Validator-First Governance
- `EG-004` Layered Validation Model

No ownership changes were made for:

- `EG-001`
- `EG-005`
- `EG-006`
- `EG-007`

## Files Changed

- `AGENTS-Implementation.md`
- `tools/README.md`
- `tests/README.md`
- `docs/wiki/validation-layers.md`

## What Changed

### `AGENTS-Implementation.md`

Changes made:

- added an explicit statement that `Engineering Governance` is the authoritative owner of the portable rules behind the engineering-knowledge-preservation section
- changed validator, test, comment, and validator-first sections from generic repository-governance wording to Let Books-specific adaptation wording
- retained the local minimum documentation expectations for validators and tests

Wording removed or demoted from local authority:

- generic ownership of knowledge-preservation, validator-first, and layered-validation rules

Wording retained locally:

- local minimum validator documentation fields
- local test documentation expectations
- local comment expectations
- local pattern-graduation and reusable-pattern examples
- local default graduation order for recurring failures

Reference introduced:

- `skills/engineering-governance.md`

### `tools/README.md`

Changes made:

- added an explicit statement that `Engineering Governance` owns the portable rules for knowledge placement, validator-first governance, and layered validation
- reframed the top-level tooling standard as the Let Books tooling adaptation rather than the authoritative generic rule
- reframed the layered toolchain description as a local application of the layered-validation model

Wording removed or demoted from local authority:

- implied ownership of the generic principles behind keeping knowledge close, preferring validators, and using layered validation

Wording retained locally:

- tool-specific preservation hierarchy
- local toolchain order
- tool catalog entries
- generator and validator-specific guidance

Reference introduced:

- `skills/engineering-governance.md`

### `tests/README.md`

Changes made:

- added an explicit statement that `Engineering Governance` owns the portable rules behind tests-as-governed-artifacts and layered validation
- reframed the knowledge-preservation hierarchy as the Let Books test-layer adaptation
- reframed the validator/test/documentation order as a local interpretation rather than the canonical general rule

Wording removed or demoted from local authority:

- implied ownership of the generic layered-validation model
- implied ownership of the generic knowledge-placement rule

Wording retained locally:

- test-family descriptions
- runtime/browser examples
- repository guarantees protected through testing
- commands and local workflow ordering notes

Reference introduced:

- `skills/engineering-governance.md`

### `docs/wiki/validation-layers.md`

Changes made:

- added an explicit statement that `Engineering Governance` owns the portable layered-validation rule
- reframed the page as a Let Books application of that rule

Wording removed or demoted from local authority:

- implied ownership of the layered-validation rule by this wiki page itself

Wording retained locally:

- concise explanation of why multiple validation layers matter
- layer descriptions
- Let Books-specific context and related pages

Reference introduced:

- `skills/engineering-governance.md`

## Duplication Reduction Achieved

Portable-rule ownership is now explicitly centralized in `skills/engineering-governance.md` for all four changed documents.

Reduction achieved:

- removed local-authority ambiguity for `EG-002`, `EG-003`, and `EG-004`
- converted four documents from parallel rule owners into local adaptation or application documents
- reduced future maintenance risk by making the skill the named authoritative source

Practical result:

- the repository still contains local explanations and examples
- but those explanations no longer implicitly compete with the skill for ownership of the portable rule

## Ownership Consistency Review

### Confirmed

- `Engineering Governance` is now explicitly named as the owner of the portable rules in all four changed files
- no changed file claims to be the canonical owner of `EG-002`, `EG-003`, or `EG-004`
- local docs still explain what contributors must do within Let Books

### Boundary checks

- CI/CD orchestration details remain in workflow documentation and were not moved into Engineering Governance ownership language
- validator names, tool catalogs, commands, and workflow names remain local
- the validation wiki still explains local application rather than becoming a link-only redirect

## Readability Risks

Low-to-moderate risk areas:

- `docs/wiki/validation-layers.md` still contains portable-sounding explanatory text even though ownership is clarified; readers may still experience it as a detailed companion rather than a strict adaptation note
- `tests/README.md` and `tools/README.md` still repeat short local standard lists, but they are now framed as local application rather than canonical ownership

Why the risk is acceptable:

- removing more text in this phase would likely hurt local readability
- the current bridge text preserves contributor usability while resolving ownership ambiguity

## Boundary Concerns Discovered During Migration

### Engineering Governance vs CI/CD Governance

Concern:

- workflow documentation naturally wants to restate validator-first and layered-validation rules

Resolution in this phase:

- kept workflow details out of scope and avoided moving orchestration wording into the Engineering Governance extraction target files

### Engineering Governance vs Documentation as Product

Concern:

- `docs/wiki/validation-layers.md` can read partly like documentation-product guidance

Resolution in this phase:

- limited the change to ownership clarification and kept the page framed as a Let Books application of the layered-validation model

## Validation Performed

Automated checks run:

- `git diff --check`
- ownership-reference search confirming `Engineering Governance` is explicitly named in all four changed files

Manual review performed:

- reviewed diffs for readability
- checked that no file became a thin shell of references
- checked that local examples, commands, and file-specific instructions remained intact

No dedicated prose-governance validator currently exists for this extraction layer.

## Final Assessment

### Extraction outcome

- Successful for Phase 2.1 scope.

### EG-002, EG-003, EG-004 ownership status

- `Engineering Governance` is now the sole clearly named authoritative owner.

### Local documentation status

- local docs remain usable on their own
- local examples and operating context remain intact
- no changed file became a link farm

### Follow-up consideration

- if later phases reduce duplication further, `docs/wiki/validation-layers.md` is the most likely candidate for another small wording pass because it still carries the fullest generic explanation of layered validation even though ownership is now explicit
