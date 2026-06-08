---
skill: Documentation as Product
version: 1.0.0
status: Experimental
license: Apache-2.0
origin: Let Books Skills Package
parent_skill: Engineering Governance
related_skills:
  - CI/CD Governance
  - Localization Governance
minimum_adoption: Declare docs a maintained delivery surface and review rendered output
maturity_level: 4
---

# Documentation as Product

## Purpose

Treat documentation and public knowledge surfaces as maintained product artifacts rather than passive repository text.

## Problem Being Solved

Documentation often degrades because teams treat it as commentary after the real work. That causes:

- weak publication quality
- broken navigation or metadata
- generated output drift
- user-facing docs that pass file checks but fail in a browser

## Core Skill

Documentation as product is the capability of giving docs the same seriousness as other delivery surfaces by defining:

- content structure rules
- generated-output expectations
- rendered-output review requirements
- navigation and metadata integrity
- publication readiness checks

Another repository would want this when documentation affects adoption, operations, education, compliance, or public credibility.

### Evidence-Backed Publication

Public documentation should distinguish clearly between:

- verified evidence
- interpretation
- future plans

High-impact claims should remain traceable to supporting evidence through references, evidence notes, source maps, or equivalent repository-specific approaches.

Why this rule exists:

- user-facing documentation often mixes facts, interpretation, and aspiration unless publication rules make the distinction explicit

Risks prevented:

- overstated claims
- brittle public explanations tied to unstable implementation detail
- documentation that sounds authoritative without being reviewable

Relationship to existing guidance:

- strengthens the existing documentation-as-product expectation that public writing must remain maintainable and evidence-backed

## Repository Adaptation

Let Books currently implements this skill through:

- explicit rules for blog and source-map publishing under `docs/blog/README.md` and `docs/sources/README.md`
- docs development and deployment guidance in `docs/Development.md` and `docs/Deployment.md`
- generators for docs HTML, indexes, search index, sitemap, topic navigation, and SEO metadata under `tools/`
- validators for blog structure and generated site structure
- browser-facing validation in `tests/docs/`
- workflow enforcement that regenerates and validates the docs site before publish

## Current Repository Evidence

- `PRINCIPLES.md`
- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- `tools/generate_docs_content.py`
- `tools/generate-static-seo.mjs`
- `tools/generate-index-pages.mjs`
- `tools/generate-search-index.mjs`
- `tools/generate-sitemap.mjs`
- `tools/generate-articles-json.mjs`
- `tools/generate-topic-nav.mjs`
- `tools/validate-blog.mjs`
- `tools/validate-generated-site-structure.mjs`
- `tests/docs/layout-validation.cjs`
- `tests/docs/print-validation.cjs`
- `tests/docs/language-selector-smoke.js`
- `tests/docs/blog-language-selector.js`
- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`

## Inputs

- documentation source content
- publication structure and navigation rules
- generated-output contracts
- user-facing quality expectations

## Expected Actions

- define documentation structure and publication rules
- generate derived docs artifacts consistently
- validate both source and generated output
- keep high-impact published claims traceable to supporting evidence
- review rendered docs behavior in a browser when required
- treat docs failures as product failures where appropriate

## Expected Artifacts

- docs structure guidance
- generated docs assets and indexes
- evidence notes, source maps, or equivalent traceability artifacts for substantial public claims where needed
- publication validators
- browser-facing tests
- deployment workflow that treats docs as publishable output

## Validation

### Manual Review

- review article structure and claims
- review whether claims, interpretation, and future plans are clearly distinguished
- review generated HTML where needed
- review rendered layout, print, and navigation behavior

### Automated Validation

- blog and generated-site validators
- generation success checks
- navigation and language-selector smoke tests
- browser-facing layout and print checks

### CI Enforcement

- regeneration and validation of docs artifacts before merge and publish

### Existing Gaps

- some documentation quality still depends on human editorial judgment
- specialized docs validators are naturally tied to the repository's publishing model

## Success Criteria

- docs remain navigable, structured, and publishable
- generated output matches intended contracts
- browser-visible docs behavior stays usable after generator changes
- public writing remains maintainable and evidence-backed

## Failure Modes

- docs generators succeed but produce poor browser behavior
- navigation contracts drift after generator changes
- docs appear complete in source but fail in rendered output
- documentation is treated as secondary and loses product quality expectations

## Maturity Assessment

- Mature

The repository documents docs as a product surface, generates substantial derived output, validates the generated tree, runs browser-facing checks, and enforces publication readiness in workflows.

## Portability Assessment

### Would I Install This In A New Repository?

- Yes, when documentation is an important delivery surface.

### ERP

- Yes.

### Web Application

- Yes.

### Documentation Repository

- Yes.

### Internal Business Application

- Yes.

### Repository-Specific Parts

- current docs generator stack
- current blog and source-map model
- current static-site publishing targets

### Reusable Parts

- docs as product framing
- generated-output validation
- rendered docs review
- navigation and metadata expectations
- browser-facing docs testing patterns

### Adaptation Requirements

- adapt validators to the target publishing system
- choose which docs surfaces count as product-critical
- adapt browser checks to the target runtime

### Confidence Level

- High

## Future Installation Concept

A future repository could adopt this skill through:

- documentation quality rules in `README.md` or `CONTRIBUTING.md`
- structure and publishing templates
- generator and validator starter pack
- browser-facing docs smoke tests
- CI rules that treat docs generation as a first-class build step

## Open Questions

- where is the boundary between general documentation governance and docs-as-product specialization?
- which parts remain useful in repositories without generated sites?
- should future packages include a browser test starter by default?

## License

This skill definition is licensed under the Apache License 2.0.

See `skills/LICENSE` for the full license text.

## Provenance

Originally extracted from repository evidence including documentation guidance, generators, validators, tests, workflows, and review procedures.

See repository adaptation documentation for implementation-specific details.
