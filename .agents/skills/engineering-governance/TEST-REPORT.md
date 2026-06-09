# Engineering Governance Pilot Test Report

## Scope

Tested the pilot skill against the current Let Books repository state after Phase 2.1 extraction.

Reviewed:

- `.agents/skills/engineering-governance/SKILL.md`
- `references/knowledge-close-to-artifact.md`
- `references/validator-first-governance.md`
- `references/layered-validation.md`
- `references/let-books-adapter.md`
- `AGENTS-Implementation.md`
- `tools/README.md`
- `tests/README.md`
- `docs/wiki/validation-layers.md`
- `skills/adoption-audit/engineering-governance-phase-2-1-report.md`

## Verdict

Pass with minor changes.

The generic skill works in practice, the references remain portable, and the local adapter is mostly sufficient. One small adapter improvement was applied during this test: adding `.github/workflows/README.md` as an adjacent local consumer of the layered-validation rule.

## Evaluation

### 1. Does `SKILL.md` provide enough operational guidance?

Yes.

Why:

- it tells an agent when to use the skill
- it clearly restricts scope to `EG-002`, `EG-003`, and `EG-004`
- it tells the agent how to act when moving portable rule ownership into the skill layer
- it explicitly protects local examples, commands, workflow names, file names, and procedures

Minor limitation:

- it assumes the user already understands the difference between a portable rule and a repository adaptation, but the decision tests are still sufficient for a first pilot

### 2. Are the three generic references portable and not Let Books-specific?

Yes.

Assessment by file:

- `references/knowledge-close-to-artifact.md`: portable
- `references/validator-first-governance.md`: portable
- `references/layered-validation.md`: portable

Why:

- none of the three files depend on Let Books paths, tools, or conventions
- examples are generic enough to transfer to another repository
- the wording stays at the rule level, not the implementation level

### 3. Does `references/let-books-adapter.md` contain enough local binding detail?

Mostly yes.

Before this test:

- it covered the four Phase 2.1 migration targets well
- it explained the local meaning of the three pilot rules
- it separated local boundaries from the generic skill correctly

Small fix applied:

- added `.github/workflows/README.md` as an adjacent local consumer of layered validation
- added a note that workflow orchestration remains outside this pilot and belongs with local workflow documentation plus `CI/CD Governance`

Why the fix matters:

- without it, the adapter under-described one important local surface that still uses the pilot rules without owning them

### 4. Did Phase 2.1 leave local docs readable and actionable?

Yes.

Findings:

- `AGENTS-Implementation.md` still tells contributors what local validator/test/comment expectations apply
- `tools/README.md` still explains the local toolchain and tool catalog
- `tests/README.md` still explains test families, guarantees, and commands
- `docs/wiki/validation-layers.md` still explains why layered validation matters in Let Books

The local docs now read as applications of the portable rule rather than silent competitors for ownership.

### 5. Are there places where local docs became too link-heavy?

No severe cases found.

Closest risk:

- `docs/wiki/validation-layers.md` now opens with a reference to `skills/engineering-governance.md`, but it still contains enough explanatory content to stand on its own

Why this still passes:

- no reviewed file collapsed into a stub or link farm
- the bridge text is short and useful rather than evasive

### 6. Is any generic governance still duplicated in local docs?

Yes, but at an acceptable level for this pilot.

Remaining duplication:

- `tools/README.md` still contains a short local standard list that mirrors the portable ideas
- `tests/README.md` still contains a local ordering model that partially mirrors layered validation
- `docs/wiki/validation-layers.md` still contains the fullest generic explanation of the layered model

Assessment:

- this duplication is now framed as local application rather than canonical ownership
- removing more in this pilot would likely reduce readability more than it would reduce maintenance burden

### 7. Is any missing reference needed?

Possibly, but not urgently.

Most likely future reference candidates:

- artifact ownership and stewardship
- governance drift or stale-duplicate detection

Why they are not blockers now:

- the current pilot scope is intentionally narrow
- the reviewed materials still function without those references

## Concrete Recommended Edits

Applied during this test:

1. Updated `references/let-books-adapter.md`
   - added `.github/workflows/README.md` to local source files
   - added a note clarifying that workflow orchestration remains outside this pilot

Recommended but not applied:

1. If the pilot expands later, add a short reference on artifact ownership or governance drift.
2. If duplication reduction continues later, revisit `docs/wiki/validation-layers.md` first because it still carries the strongest generic explanation of layered validation.

## Basic Checks Run

- `git diff --check`
- file existence checks for all pilot skill files and referenced local files
- manual read-through for portability and local readability

## Final Assessment

The pilot succeeds as a first real reusable agent skill.

Why:

- the generic skill remains generic
- the adapter remains local
- the current Let Books documentation remains readable after Phase 2.1
- the pilot is narrow enough to test the model without overcommitting to broader Engineering Governance extraction
