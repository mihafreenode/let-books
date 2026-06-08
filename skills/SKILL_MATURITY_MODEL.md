# Skill Maturity Model

## Levels

### Level 0 - Informal

Practice exists mainly as convention.

### Level 1 - Documented

Guidance exists.

### Level 2 - Repeatable

Examples and procedures exist.

### Level 3 - Validated

Automated checks exist.

### Level 4 - Enforced

CI or workflow enforcement exists.

### Level 5 - Self-Improving

Findings, audits, reviews, or accumulated lessons systematically improve the skill.

## Skill Assessments

### Engineering Governance

- Maturity level: 2
- Rationale: the repository strongly documents authority chains, evidence policy, rationale preservation, validator expectations, and traceability across docs, tools, tests, and workflows. Some of it is enforced indirectly, but the skill itself is mostly a documented and repeatable governance template rather than a single automated gate.

### Localization Governance

- Maturity level: 5
- Rationale: guidance, procedures, validators, tests, CI enforcement, audit reporting, defect classes, and a native-speaker findings corpus all exist. The repository explicitly learns from prior findings and closes defect classes through system changes.

### Documentation as Product

- Maturity level: 4
- Rationale: the repository treats docs as a product surface with generation, validation, browser checks, and deployment enforcement. The feedback loop exists, but it is less explicit than the localization findings system.

### CI/CD Governance

- Maturity level: 4
- Rationale: CI and deployment workflows rebuild, revalidate, and self-check before publish. Fresh-artifact review and workflow self-validation are enforced in automation.

## Notes

- A lower maturity level does not mean a skill is weak. `engineering-governance.md` is foundational even though it is less directly automated.
- Specialized skills may mature faster than the parent governance template because they can be enforced through concrete validators and workflows.
