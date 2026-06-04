# Workflows README

## Purpose

`.github/workflows/` is the repository's executable policy layer for CI
and deployment.

These workflows do more than run automation. They preserve repository
guarantees around:

- workflow correctness
- docs generation reproducibility
- localization completeness
- semantic parity
- generated artifact freshness
- link and metadata integrity
- deployment readiness
- GitHub Pages publishing safety

The long-term standard is to keep workflow knowledge close to the
workflow itself:

1. `.github/workflows/README.md`
2. workflow file headers
3. job-level comments
4. step-level comments for non-obvious logic
5. additional documentation only when necessary

## Engineering Knowledge Preservation Standard

Treat workflows as repository memory.

Each non-trivial workflow should make it easy for a future contributor
or AI agent to answer:

- what workflow exists
- why it exists
- what guarantee it protects
- what validators and generators it coordinates
- what risks appear if it is bypassed or removed

Workflows orchestrate enforcement.
Validators enforce guarantees.
Tests demonstrate behavior.
Documentation explains guarantees.
Comments explain implementation choices.

When a guarantee can be checked automatically, prefer a validator or
workflow gate over prose-only guidance.

## Workflow System Overview

The repository currently has two top-level workflows:

1. `ci.yml`
2. `docs.yml`

They share a deliberate pattern:

1. provision the full docs and localization toolchain
2. validate workflow correctness first
3. regenerate derived docs artifacts
4. run source-level and rendered-output validators
5. verify special generated outputs and browser-facing behavior
6. deploy only after the build job proves the site is publishable

This duplication is intentional. Deployment does not assume CI artifacts
are still fresh or trustworthy. The deployment workflow rebuilds and
revalidates the site from the checked-out repository state before
publishing.

## Fresh Artifact Review Rule

Localization and documentation review must distinguish between:

- source Markdown
- generated HTML
- deployed site output
- browser-rendered output

Parity findings should be based on freshly generated artifacts, not on
stale generated files committed from an earlier state.

Required review order:

1. regenerate the site from the current repository state
2. run validators against the current generated output
3. review generated HTML artifacts
4. review rendered output where the workflow requires it

This rule applies to structural parity review, semantic review, manual
localization comparison, and publication readiness assessment.

## Workflow Catalog

### `ci.yml`

Purpose:
- Run the main repository validation pipeline on pushes and pull requests.

Why It Exists:
- Documentation, localization, and static-site changes can regress
  without changing application code.
- The repo needs one blocking workflow that proves the documentation
  toolchain, validators, generated outputs, and workflow files
  themselves are still coherent.

Repository Guarantees:
- GitHub Actions workflow syntax stays valid.
- Required local tooling assumptions remain reproducible in CI.
- Docs generation still succeeds from source.
- Generated artifacts remain structurally valid.
- Localization coverage, semantic review, parity, and rendered-output
  completeness remain enforced.
- Critical generated pages, section indexes, topic nav, search index,
  and JSON artifacts exist and are well-formed.
- Browser-print and layout validation still pass for generated docs.

Failure Impact:
- Broken generators or validators can merge unnoticed.
- Localization drift may reach main.
- Required generated files may stop updating.
- GitHub Actions workflows themselves may silently decay.

Related Tools:
- `tools/validate_environment.py`
- `tools/generate_docs_content.py`
- `tools/generate-static-seo.mjs`
- `tools/validate-generated-site-structure.mjs`
- `tools/validate-content-parity.mjs`
- `tools/validate-localized-articles.mjs`
- `tools/validate_translation_parity.py`
- `tools/validate-localization-completeness.mjs`
- `tools/validate-blog.mjs`
- `tests/docs/print-validation.cjs`
- `tests/static-demo/localization-smoke.js`

Reuse Potential:
- High. This is a reusable pattern for documentation-heavy
  repositories where generated content is part of the product surface.

### `docs.yml`

Purpose:
- Rebuild, validate, and deploy the documentation site to GitHub Pages
  from `main`.

Why It Exists:
- Publishing should not depend on assumptions from earlier CI runs.
  Deployment needs its own trusted build and validation pass before it
  uploads a Pages artifact.

Repository Guarantees:
- The published docs site is regenerated from current `main`.
- Pages deployment only happens after workflow validation, docs
  generation, localization checks, browser validation, and docs-tree
  validation all pass.
- GitHub Pages publishing remains tied to a reproducible build, not a
  hand-prepared artifact.

Failure Impact:
- A broken or partially generated site could be published.
- Localization or layout regressions could reach production even if
  source files look correct.
- Deployment knowledge could drift away from actual repository requirements.

Related Tools:
- Same generation and validation tools as `ci.yml`
- `actions/upload-pages-artifact`
- `actions/deploy-pages`

Reuse Potential:
- High. Rebuild-and-revalidate before publish is a strong
  deployment-safety pattern.

## Reusable Engineering Patterns

### Rebuild before deploy

Problem solved:
- Deployment pipelines can publish stale or locally generated artifacts
  that no longer match repository state.

Solution adopted:
- Re-run generation and validators inside the deployment workflow
  before uploading the Pages artifact.

Lessons learned:
- Deployment safety is stronger when publication depends on a fresh,
  validated build from source.

Reuse potential:
- High.

### Workflow self-validation

Problem solved:
- CI systems can silently rot when workflow syntax or YAML structure drifts.

Solution adopted:
- Run `actionlint` and `yamllint` inside both CI and deployment workflows.

Lessons learned:
- Repositories should validate the automation layer, not just the product layer.

Reuse potential:
- High.

### Generated-artifact freshness gates

Problem solved:
- Source and generated docs can drift apart while still looking
  plausible in review.

Solution adopted:
- Regenerate SEO, docs HTML, indexes, sitemap, search index, and
  article registry in CI and validate the outputs.

Lessons learned:
- Freshness is a repository guarantee, not just a build side effect.

Reuse potential:
- High.

### Layered localization validation pipeline

Problem solved:
- File presence alone does not protect against semantic drift or
  rendered English leakage.

Solution adopted:
- Run coverage, semantic, parity, source-audit, and rendered-output
  checks as a coordinated workflow chain.

Lessons learned:
- Localization quality needs multiple validators aimed at different
  failure surfaces.

Reuse potential:
- High.

### Browser-facing docs validation in CI

Problem solved:
- Generated docs can pass file-level checks while failing print,
  layout, or browser rendering expectations.

Solution adopted:
- Serve the generated site locally in CI and run layout and print
  validation against the served output.

Lessons learned:
- Static-site repositories still need browser-oriented validation.

Reuse potential:
- High.

## Pattern Graduation

Treat a workflow pattern as reusable only when it:

- solves a recurring problem
- applies beyond a single feature
- reduces maintenance effort
- remains understandable without heavy project-specific context

Prefer proven patterns over speculative frameworks.
