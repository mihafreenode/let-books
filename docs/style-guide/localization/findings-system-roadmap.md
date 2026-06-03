# Findings System Roadmap

## Summary

This roadmap describes the current native-speaker findings system, the protections already implemented, the remaining gaps, and the next practical phases for preventing recurrence and measuring localization learning.

## Current State

The repository already has these implemented protections:

- a structured native-speaker findings corpus at `native-speaker-findings-corpus.json`
- mandatory findings review in contributor, review, and AI-agent localization workflows
- targeted parity validation for documented regressions where practical
- CI-failing regression checks for known fixed wording that reappears
- required justification for intentionally unresolved findings
- AI review packets that ask agents to record findings considered, defect classes considered, and decision influences
- source-first remediation guidance

The system is intentionally scoped to practical recurrence prevention.

It does not try to re-review all translations or perform full-language audits.

## Implemented Metrics

The findings summary script `tools/summarize_native_speaker_findings.py` now reports:

- total findings
- fixed findings
- open findings
- intentionally unresolved findings
- validator-backed findings
- findings converted into terminology guidance
- findings converted into review guidance
- findings linked to content changes
- source-English review recommendations

These metrics are corpus-driven and cheap to compute.

They are suitable for CI summaries, review dashboards, and periodic quality snapshots.

## Content-Linking Model

The corpus now supports `content_change_refs` so a finding can point to the source files that were changed to fix it.

This is the most practical first-level learning trace because it:

- links findings to actual repository changes
- avoids expensive git-history mining
- keeps the evidence stable when files move slowly
- allows future summary scripts to report how many findings are tied to concrete remediations

Recommended future extension:

- add optional `fix_commit_refs` when the team wants commit-level reporting

That should remain optional because commit references are useful for reporting but should not block content remediation.

## Current Recurrence Detection

Current recurrence protection is strongest for concrete, already observed defects with low-false-positive matching.

The corpus now tags and reports coverage for:

- known rejected terminology
- known false friends
- known literal translations
- known translationese patterns
- previously reported native-speaker defects

Current validator design is intentionally conservative:

- exact or near-exact documented bad wording
- locale-scoped checks
- file-scoped checks when the finding is file-specific
- exemptions for intentional quoted examples and review records

This keeps false positives low.

## Recommended Validator Designs

Use these in order of safety.

### Phase 1 - Exact Regression Rules

Best for:

- previously reported wording defects
- known bad technical terms
- specific false friends
- exact heading regressions

Implementation pattern:

- substring or exact-match checks
- locale-scoped
- file-scoped when possible

False-positive risk: low

### Phase 2 - Controlled Pattern Families

Best for:

- repeated literal-translation constructions
- repeated modal phrasing failures
- repeated translationese connectors or syntax patterns

Implementation pattern:

- regex or token-pattern checks
- only after the pattern is observed in multiple documented findings
- keep the scope narrow to locale and content type
- require example-based tests before turning blocking

False-positive risk: medium

Recommendation:

- start as warning-level checks
- promote to blocking only after multiple clean iterations

### Phase 3 - Terminology Conflict Checks

Best for:

- rejected terminology that has a preferred replacement
- false-friend terminology in domain-specific contexts

Implementation pattern:

- glossary-style bad-term to preferred-term maps
- check only in relevant locales and domains
- optionally require nearby context keywords to reduce noise

False-positive risk: low to medium depending on context handling

### Phase 4 - Source-English Review Recommendations

Best for:

- repeated cross-locale failures caused by compressed English source wording
- patterns where multiple locales need unnatural compensation

Implementation pattern:

- do not auto-fail translation validation
- create recommendation records in the findings corpus
- require a reason and affected source files
- surface in summaries and roadmap reports

False-positive risk: low when recommendation-only

## When To Recommend English Source Review

Repeated findings across multiple languages should trigger source-English review recommendations when:

- the same English source phrase causes awkwardness in multiple locales
- multiple locales need different compensating rewrites for the same source compression
- the problem is primarily structural or rhetorical in English rather than lexical in the target language
- reviewers repeatedly note that the better fix is to rewrite the source once

Recommended threshold:

- two or more locales with the same source-rooted defect class
- or one clearly documented source-optimization finding plus at least one related recurrence

This should begin as a recommendation workflow, not a blocking validator.

## Remaining Gaps

The current system still has these gaps:

- very small findings corpus size
- only a few validator-backed regressions
- no automatic trend snapshots committed over time
- no commit-level fix linkage yet
- no multi-locale clustering logic for source-English recommendations
- limited pattern-family detection for translationese and literal translation
- no dedicated terminology-regression validator beyond documented exact cases

These are acceptable gaps at the current maturity stage.

The next steps should prefer reliability over breadth.

## Recommended Future Phases

### Phase A - Reporting Maturity

- keep enriching the corpus with `content_change_refs`
- run the summary script in CI and publish its JSON artifact
- optionally keep a lightweight historical snapshot for trend graphs

Expected gain:

- measurable learning progress without broad new audits

### Phase B - Terminology Regression Maps

- add a bad-term and preferred-term map only for documented findings
- validate them only in the affected locale/domain
- add tests for every new map entry

Expected gain:

- stronger prevention for rejected terminology and false friends

### Phase C - Pattern-Family Warnings

- add warning-level validators for documented repeated literal-translation or translationese patterns
- promote to blocking only when precision is proven

Expected gain:

- broader recurrence detection without immediate CI noise

### Phase D - Source-English Recommendation Tracking

- add optional clustering logic that groups findings by shared English source phrase or source file
- surface recommendation counts in the summary script

Expected gain:

- better upstream fixes when localization pain is actually caused by English source wording

## Practical Rule

Do not add broad validators first.

Add the smallest validator that prevents a documented recurrence with acceptable precision.

This keeps the system explainable, reviewable, and cheap to maintain.
