# Localization at Scale Program

## Summary

This handbook defines Localization at Scale in Let Books as a long-term operating model for multilingual publishing, review, validation, maintenance, and continuous learning.

Its central thesis is simple:

> Localization at Scale is not primarily a translation problem.
>
> It is a feedback-system design problem and a multilingual knowledge-system problem.

The goal is not only to translate words.

The goal is to help people learn, participate, contribute, teach, preserve knowledge, and access information in the language they understand best while keeping that multilingual system maintainable over time.

## Program Layers

- `docs/blog/` explains why localization matters in practice.
- `docs/wiki/` defines evergreen rules, models, and governance.
- `docs/learning/` turns the topic into operational workflows.
- `docs/style-guide/` defines contributor, terminology, review, and publishing rules.
- `docs/sources/` keeps flagship claims traceable.
- `docs/localization-audit-report.md` tracks debt, defect classes, and closure status.

## Part 1 - Why Localization Matters

Localization matters because language accessibility is part of real access.

If a reader cannot comfortably understand the content, then access exists only in a narrow technical sense.

For Let Books, multilingual publishing matters for practical reasons:

- educational accessibility
- cultural participation
- knowledge equality
- digital inclusion
- public-interest technology
- multilingual governance
- preservation of smaller languages
- support for official and regional languages
- European multilingualism in practice
- the principle of "United in Diversity" applied to working software and knowledge systems

This is not an argument for symbolic translation.

It is an argument for usable multilingual participation.

Readers do not encounter only titles and menus. They encounter explanations, cautions, diagrams, review workflows, examples, accessibility text, metadata, and educational framing. If those remain English-only, the system still privileges English readers even when localized shells exist.

## Part 2 - Localization Is a System, Not a Project

Many localization efforts are managed as if they were finite projects:

```text
Translate
Publish
Finish
```

That model breaks down quickly.

Content changes.

Terminology evolves.

Languages evolve.

Contributors change.

AI systems improve.

Native speakers discover new issues after publication.

Localization at Scale therefore treats localization as an operating system:

```text
Create
Translate
Validate
Improve
Maintain
Update
Prevent Drift
Repeat
```

The hard problem is not creating translations once.

The hard problem is operating a multilingual knowledge system over time without losing coverage, parity, quality, freshness, or reviewer trust.

## Part 3 - AI Works Best Inside Feedback Loops

AI is useful in localization, but its usefulness depends on the quality of the surrounding feedback system.

Kent Beck summarized the engineering version of this principle clearly:

> "Optimism is an occupational hazard of programming; feedback is the treatment."

Norbert Wiener described the systems version:

> "Feedback is a method of controlling a system by reinserting into it the results of its past performance."

This is the right model for multilingual publishing too.

AI works best when its output is immediately exposed to feedback such as:

- CI checks
- structural validators
- spellcheckers
- terminology checks
- semantic-parity checks
- accessibility checks
- browser and rendering checks
- link validation
- native-speaker review

Fast feedback beats perfect first attempts.

The goal is not to demand perfect drafts from humans or AI.

The goal is to shorten the loop between:

- creating content
- discovering defects
- correcting defects
- preventing recurrence

## Part 3A - Bidirectional Review

English remains the canonical source language for publication and synchronization purposes.

However, useful insights can originate in any language.

Examples:

- a native-speaker review identifies awkward source phrasing
- a translator discovers ambiguity
- a reviewer finds missing context
- a localized article gains a better example
- terminology improves in a non-English language
- cultural review reveals an accessibility issue

These findings may justify changes to the canonical source itself.

### Bidirectional Review Principle

Localization should not be treated as a one-way process:

```text
English
↓
Translations
```

Instead:

```text
English
↕
Translations
```

English remains canonical.

Knowledge can flow in both directions.

### Cross-Language Review Event

Any substantial content change should trigger review of related languages.

If English changes, review:

- all localized versions
- semantic parity
- metadata
- summaries
- diagrams and screenshots where relevant

If a localized version changes, review:

- whether the finding improves the canonical source
- whether other languages should benefit
- whether terminology guidance should change
- whether review guidance should change
- whether validators should change

### Source Improvement Through Localization

Localization review may reveal:

- ambiguity
- unnecessary complexity
- translation-hostile wording
- hidden assumptions
- culturally specific phrasing
- inaccessible terminology

When this happens, improving the source may be better than compensating separately in every translation.

```text
Problem discovered in Slovenian
↓
Root cause found in English
↓
English improved
↓
All languages benefit
```

### AI-Agent Review Prompt

When modifying any language version, ask:

```text
Does this change reveal a source-language issue?
Does this change improve other language versions?
Should terminology guidance change?
Should review guidance change?
Should validators change?
```

The answer may be:

```text
No action needed
```

or:

```text
Open cross-language review task
```

### Core Principle

Canonical source does not mean canonical wisdom.

English may be the synchronization source.

Knowledge, improvements, review findings, and quality insights may originate from any supported language.

A multilingual project should let improvements discovered in one language benefit all languages.

## Part 4 - Localization Quality Model

Localization quality should be tracked across four dimensions.

### Coverage

Coverage asks whether the reader can access the content in their language at all.

Examples:

- Does the article exist in Slovenian?
- Does the learning guide exist in Macedonian?
- Does the policy page exist in Serbian Cyrillic?

Coverage is binary at the publication level.

Either the content exists for that audience or it does not.

### Completeness

Completeness asks whether all reader-facing parts of that page are localized.

Examples:

- localized title but English summary
- localized body but English tags
- localized article but untranslated diagram labels
- localized page shell but English related-content cards

Coverage without completeness produces mixed-language publishing.

### Quality

Quality asks whether the localized text reads naturally, accurately, and appropriately for its audience.

Examples:

- technically correct but translationese phrasing
- meaning preserved but unnatural rhetoric
- policy text that is accurate but not publication-quality
- educational explanation that is correct but hard to learn from

Quality is where native-speaker review adds the most unique value.

### Freshness

Freshness asks whether the localized version still reflects the current source.

Examples:

- new warning added in English but missing in translations
- source conclusion changed but translated pages still use the old framing
- updated diagram or screenshot not yet localized

Freshness is the operational face of localization drift.

## Part 5 - Localization Completeness

### Reader-Facing Localization Rule

A page is not complete merely because any of the following are localized:

- URL
- title
- navigation
- page shell
- article stub

All reader-facing content must be localized before a page is considered complete.

Reader-facing content includes:

- titles
- subtitles
- summaries
- descriptions
- tags and category labels
- headings
- article bodies
- lists
- callouts
- captions
- diagrams
- alt text
- related-content text
- metadata shown to readers
- localized breadcrumbs where variants exist

Allowed exceptions are narrow:

- quotations
- clearly marked source-language material under discussion
- proper nouns
- technical identifiers
- explicitly intentional non-translation

### Mixed-Language Publishing Failure Pattern

One of the most important lessons from this initiative is that mixed-language publishing often looks superficially successful.

The page may have:

- a localized path
- a localized title
- a localized opening paragraph

and still fail readers because summaries, tags, headings, or body sections remain in English.

That is why completeness is tracked separately from coverage.

## Part 6 - Native-Speaker Review Findings

This section is a first-class deliverable.

It should grow over time.

It should not be condensed into short conclusions.

Its purpose is to document real-world cases where:

- the translation was technically correct
- the translation preserved intended meaning
- the translation passed automated validation
- the translation passed spellchecking
- the translation likely passed semantic-parity checks
- a native speaker still found an opportunity to improve it

This is where the educational value lives.

It shows what remains after modern localization tooling has already done its work.

### Corpus Record Format

Every record should capture:

- id
- source article
- language
- original English text
- original localized text
- improved localized text
- explanation
- category
- status
- validator possible
- related files
- date added
- whether automated QA would likely detect the issue
- lessons learned

Recommended machine-readable corpus path:

- `docs/style-guide/localization/native-speaker-findings-corpus.json`

The corpus is not only an archive.

It is a reusable control surface for:

- review guidance
- terminology guidance
- AI prompt improvements
- validator rules
- regression coverage
- cross-language knowledge transfer

### Category Index

Current and expected categories include:

- parallel structure
- English rhetorical transfer
- hidden-agent constructions
- anthropomorphic abstractions
- translationese
- educational-style mismatch
- public-sector style mismatch
- unnatural terminology
- discourse-pattern transfer
- cultural adaptation
- audience expectation mismatch
- readability improvement
- tone improvement
- semantic preservation with fluency loss
- mixed-language publishing
- unnecessary English terminology
- unlocalized professional jargon
- source text optimization for localization
- technical terminology false friend

### Source Text Optimization For Localization

Definition:

A source sentence can be technically correct while still being unnecessarily difficult to translate naturally into multiple languages.

Guideline:

When repeated translation problems originate from the source wording itself, improve the source text instead of repeatedly compensating in each target language.

Working principle:

> Better source text often produces better translations in every language.

### Technical Terminology False Friend

Definition:

A technical term is translated using the wrong professional domain meaning even though the surface dictionary meaning appears plausible.

Guideline:

Translate technical vocabulary according to the active domain context. In software localization, testing, QA, benchmarking, and evaluation terms should be resolved using those domains first, not using unrelated physical or everyday meanings.

### Finding 1 - Parallel Structure

- Source article: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Language: Slovenian
- Original English text: `what the project is trying to achieve and what it is explicitly not trying to become`
- Original localized text: `kaj projekt skuša doseči in česa ne sme postati`
- Improved localized text: `kaj projekt skuša doseči in kaj ne sme postati`
- Explanation: The original Slovenian sentence is grammatically correct and understandable. It preserves the intended meaning. It would likely pass spelling, semantic-parity, and general QA checks. The issue is stylistic and structural. The phrasing mirrors English contrast structure too closely and loses the cleaner parallel form a native Slovenian writer would normally choose.
- Category: parallel structure; native-language fluency; translationese
- Would automated QA likely detect it?: No.
- Lessons learned: Meaning preservation is not enough for publication-quality prose. Parallel structures often survive machine translation in technically acceptable but slightly foreign-sounding forms.

### Finding 2 - English Rhetorical Transfer

- Source article: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Language: Slovenian
- Original English text: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Original localized text: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Improved localized text: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Explanation: The original Slovenian version is understandable and semantically aligned, but it transfers English rhetorical habits too directly. `Bi morale to zanimati` is not wrong, but it sounds more like a translated argument than naturally authored Slovenian explanatory prose. The improved version uses a more idiomatic construction for institutional prose.
- Category: English rhetorical pattern transfer; discourse-pattern transfer; public-sector style mismatch
- Would automated QA likely detect it?: No.
- Lessons learned: Native-language quality often depends on preferred rhetorical patterns, not only on lexical correctness. Institutional and public-interest writing may require different sentence habits than English originals suggest.

### Finding 3 - Hidden-Agent Construction

- Source article: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Language: Slovenian
- Original English text: `Why documentation cannot wait until later`
- Original localized text: `Zakaj dokumentacija ne sme čakati`
- Improved localized text: `Zakaj se z dokumentacijo ne sme čakati`
- Explanation: The English heading implies a hidden human agent: people should not postpone documentation. The literal Slovenian version transfers the action to the abstract noun itself, as if documentation were the actor that should not wait. The result is understandable but rhetorically off. The improved version restores the implied human agency while keeping the heading compact.
- Category: hidden-agent construction; anthropomorphic abstraction; literal subject transfer
- Would automated QA likely detect it?: No.
- Lessons learned: Headings are especially vulnerable to hidden-agent errors because English tolerates compressed abstractions that do not always transfer naturally into other languages.

### Finding 4 - Semantic Preservation Without Native Fluency

- Source article: `docs/blog/sl/ai-will-not-replace-translators.md`
- Language: Slovenian
- Original English text: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Original localized text: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Improved localized text: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Explanation: This is one of the clearest examples in the repository of why native-speaker review remains necessary after automated QA. The draft preserves broad meaning. It communicates the policy direction. It would likely pass many non-native checks. Yet it still contains three distinct native-language problems: ungrammatical modality in `morajo moči`, awkward word order in `po potrebi tudi izklopiti`, and domain-inappropriate policy phrasing in `morajo biti izrecne`. The improved version is not merely prettier. It changes the text from an understandable draft into natural policy language.
- Category: semantic preservation with fluency loss; modality; domain-policy phrasing; register; readability improvement
- Would automated QA likely detect it?: Partially at best. Grammar tooling might flag `morajo moči`, but automated QA would likely miss the policy-register problem and the domain-specific improvement from `izrecne` to `izrecno omogočene`.
- Lessons learned: A translation can preserve meaning and still be unpublishable. This is one of the strongest arguments for storing native-speaker corrections as reusable evidence rather than treating them as disposable copy edits.

### Finding 5 - Mixed-Language Publishing

- Source article: `docs/blog/sl/the-cost-of-english-only-software.md`
- Language: Slovenian
- Original English text: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Rendered English topic labels such as `digital-inclusion`, `education`, and `public-sector-software` also remained visible in publication surfaces.
- Original localized text: The Slovenian page used the localized title `Cena programske opreme samo v angleščini`, but English summary text, English rendered topic labels, and English body sections were still visible to readers.
- Improved localized text: The published Slovenian article now uses the localized summary `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` It also uses localized body content and localized rendered topic labels with no English placeholder or mixed-language leakage.
- Explanation: This is a repository-level example rather than a single sentence example, but it is essential. The page looked translated at first glance. A localized path and title existed. That superficial success could easily have passed casual review. A native speaker, however, would still experience the page as visibly incomplete because English remained in reader-facing publication surfaces. This is also where unlocalized professional jargon and unnecessary English terminology often surface first: taxonomy labels, summaries, metadata, and helper text leak through before core paragraphs are fixed.
- Category: mixed-language publishing; localization completeness; unnecessary English terminology; unlocalized professional jargon
- Would automated QA likely detect it?: Yes, if source markdown and generated HTML completeness validators are enabled. No, if the workflow checks only file existence and not reader-facing output.
- Lessons learned: Coverage without completeness is a production defect. Mixed-language publishing should be treated as a blocking quality failure, not as a cosmetic issue.

### Finding 6 - Educational And Institutional Audience Fit

- Source article: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Language: Slovenian
- Original English text: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Original localized text: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Improved localized text: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Explanation: The original localized sentence is meaningful and understandable, but it again carries English rhetorical habits and a slightly heavy nominal style. The improved version reads more naturally for an educational audience, reduces unnecessary abstraction, and better matches Slovenian explanatory prose.
- Category: educational-style mismatch; audience expectation mismatch; tone improvement
- Would automated QA likely detect it?: No.
- Lessons learned: Reader education is part of localization quality. A sentence can be correct and still miss the natural teaching voice expected by its target audience.

### Finding 7 - Source Text Optimization For Localization

- Source article: `docs/blog/en/why-every-language-matters.md` and localized variants in the same article family
- Language: English source with cross-locale localization impact; review trigger observed in Slovenian
- Original English text: `The hidden exclusion of English-only systems`
- Original localized text: Slovenian: `Skrita izključitev angleško-izključnih sistemov`
- Improved localized text: English: `Why English-only systems exclude people` Slovenian: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Explanation: The original English heading is technically correct, but it compresses too much into an English-specific nominal pattern. It relies on the abstract noun `exclusion` and on the compact modifier `English-only systems`. That combination is efficient in English but awkward across many target languages. In Slovenian it produced a grammatically possible but unnatural phrase, `angleško-izključnih sistemov`, which requires extra decoding effort from the reader. This is not mainly a target-language failure. It is a source-text design problem. Rewriting the English heading into a more explicit clause improves readability in English and makes natural translation easier across the entire article family.
- Category: source text optimization for localization; translationese prevention; source-friendly writing
- Would automated QA likely detect it?: No. Structural QA, spellcheck, semantic-parity checks, and completeness checks would all likely pass. The problem appears when native speakers assess naturalness and translatability across languages.
- Lessons learned: Some localization problems should be solved at the source level, not separately in every locale. If multiple languages struggle with the same compressed English construction, the source wording should be reviewed for localization friendliness.

### Finding 8 - Technical Terminology False Friend

- Source article: `docs/wiki/let-books-localization-case-study.md` and `docs/wiki/sl/let-books-localization-case-study.md`
- Language: Slovenian review finding triggered by English technical terminology
- Original English text: `Benchmark fixture direction` and `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Original localized text: `Primerjalna smer napeljave` and `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Improved localized text: `Referenčni primeri za primerjalno vrednotenje` and `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Explanation: The problem is not grammar. It is domain interpretation. In testing, benchmarking, and evaluation contexts, `fixture` usually means a reusable reference example, test case, or evaluation artifact. The Slovenian translation interpreted the term using a physical-infrastructure meaning related to wiring or installation. That produced text that is semantically misleading even though the translator may have selected a dictionary-valid sense. This is a classic technical terminology false friend: the wrong domain won.
- Category: technical terminology false friend; domain terminology; testing and evaluation vocabulary
- Would automated QA likely detect it?: No. Spelling, grammar, and broad semantic checks may all pass because the sentence remains superficially coherent. The failure appears when domain-aware human review checks whether the technical term belongs to the right professional context.
- Lessons learned: Technical terminology should be translated by domain meaning, not by default dictionary meaning. Reusable benchmark examples, benchmark test cases, or reference evaluation examples are appropriate interpretations here; infrastructure-related meanings are not.

### Operating Rule For The Corpus

Whenever a new category is discovered:

1. fix the content
2. add a corpus entry
3. classify the issue
4. add or refine guidance
5. add validator coverage if practical
6. add regression coverage if practical
7. cross-reference the new finding from workflow and QA docs

### Hard Rule For Reported Errors

Concrete reported native-speaker errors are not optional suggestions.

Every reported localization defect must eventually be:

- fixed
- converted into guidance
- converted into a validator when practical
- documented as intentionally unresolved with justification
- or explicitly tracked in the findings corpus until one of the above happens

The repository should never silently forget reported localization defects.

Native speakers are most valuable here not because they fix obvious mistakes.

They are most valuable because they transform correct content into natural, culturally appropriate, publication-quality communication.

## Part 7 - Continuous Learning

Every localization issue should improve the system.

Preferred principle:

> Every localization defect should improve the system.
>
> A discovered issue should not only fix the current text. It should also reduce the probability of similar defects appearing in future translations.

The preferred loop is:

```text
Find issue
↓
Fix issue
↓
Document issue
↓
Classify issue
↓
Improve workflow
↓
Add validation where practical
↓
Prevent recurrence
```

The ideal outcome is that a localization problem gets fixed:

- once in content
- once in the system

When practical, each finding should be converted into one or more of:

- review guidance
- terminology guidance
- prompt improvements
- validator rules
- regression tests
- native-speaker corpus entries

## Part 8 - Validator Evolution

For every significant issue, ask:

> Can this be detected automatically?

### Fully Automatable

Examples:

- missing article variant
- untranslated summary
- untranslated metadata
- mixed-language page
- broken language switch
- missing generated navigation

### Partially Automatable

Examples:

- suspicious shortening
- likely semantic drift
- missing audience explanation
- missing related-content parity
- suspicious diagram mismatch

### Human Review

Examples:

- rhetorical naturalness
- fluency
- cultural appropriateness
- educational effectiveness
- native-language register
- public-sector style fitness

The right question is not whether humans or validators are better.

The right question is which class of defect belongs to which feedback layer.

## When Quality Becomes Measurable

At the beginning, confidence comes mainly from manual inspection.

Developers read pages.

Reviewers compare translations.

Contributors search for problems one by one.

As the repository matures, confidence begins to come from accumulated feedback mechanisms:

- documentation
- review guidelines
- validators
- CI checks
- accessibility checks
- semantic-parity checks
- localization completeness checks
- native-speaker review findings
- regression tests

At that point the main question changes.

Instead of asking:

> Did we manually check everything?

the project starts asking:

> Which feedback systems would allow a problem to survive unnoticed?

That is the transition from content verification to system verification.

A mature localization system is not one that never contains defects.

A mature localization system is one where known defect classes are:

- documented
- detectable
- reproducible
- tracked
- continuously monitored
- difficult to reintroduce accidentally

## Part 9 - Localization Debt

Track `Localization Debt` as the remaining content backlog.

Typical debt includes:

- untranslated summaries
- untranslated metadata
- untranslated bodies
- placeholders
- untranslated diagrams
- untranslated tags
- stale language-variant links

Debt measures remaining remediation work.

Debt does not tell you whether the system is learning.

## Part 10 - Open Defect Classes

Track `Open Defect Classes` as the number of problem categories not yet fully prevented by policy, workflow, validators, and CI.

Examples:

- untranslated summaries
- untranslated bodies
- placeholder publishing
- untranslated metadata
- mixed-language publishing
- future discovered classes

Debt measures work left to do.

Defect classes measure system maturity.

## Part 11 - Fix Classes Before Files

Do not optimize primarily around:

```text
47 files remaining
```

Optimize around:

```text
3 defect classes remaining
```

Preferred process:

1. identify the class
2. determine the root cause
3. fix the highest-level source
4. update the validator
5. update the workflow
6. then fix remaining content

The same error repeated across many files is usually a systems problem before it is a file problem.

## Part 12 - Defect-Class Closure

When a defect class reaches zero occurrences:

1. add validator coverage if missing
2. make validation blocking when practical
3. add regression checks
4. update contributor guidance
5. update AI-agent guidance
6. mark the class as closed

The objective is not:

> No occurrences today.

The objective is:

> The issue cannot silently return tomorrow.

## Part 13 - Source-First Remediation

Default investigation order:

1. source markdown
2. localization source files
3. metadata
4. registries
5. generators
6. generated artifacts
7. generated HTML

Fix the highest-level source possible.

Avoid patching generated HTML when the source content is wrong.

That prevents repeated downstream repair work and keeps the repository explainable.

## Part 14 - AI-Agent Workflow

The standard troubleshooting workflow is:

```text
Find issue
↓
Find source of truth
↓
Fix source
↓
Regenerate
↓
Validate
↓
Repeat
```

When the same issue appears repeatedly:

```text
Create defect class
↓
Create validator
↓
Create guidance
↓
Continue remediation
```

The fourth occurrence of the same issue should usually trigger system improvement rather than another isolated manual fix.

Before declaring a translation complete, the agent should:

1. read relevant native-speaker findings from the corpus
2. check whether known defect categories appear in the current translation
3. re-evaluate terminology choices against previous findings
4. re-evaluate wording patterns previously rejected by native speakers
5. apply corrections where appropriate
6. briefly document which findings were considered

## Part 15 - Localization Drift

Localization drift means that localized content exists but no longer reflects the source.

Typical drift cases include:

- new source sections
- new examples
- new warnings
- changed conclusions
- changed diagrams
- updated screenshots
- changed contributor guidance

Freshness is how drift becomes measurable.

Drift management should use:

- source revision awareness
- semantic comparison where practical
- warning-based CI first
- blocking CI where confidence is high
- explicit reviewer attention during major updates

## Part 16 - Repository Maturity Model

The repository should move through these stages:

1. Translate content.
2. Detect problems.
3. Create validators.
4. Automate validation.
5. Prevent recurrence.
6. Manage localization drift.
7. Teach future contributors and AI systems.

This is how institutional knowledge accumulates.

Earlier work stops being disposable because later systems inherit it.

## Part 17 - Content Roadmap

The program should maintain coherent multilingual coverage across:

- blog articles that explain why localization matters
- wiki pages that define policies and reference rules
- learning guides that teach workflows
- style guides that teach writing, terminology, and review practice
- audit and governance documents that track maturity and defects
- case studies that preserve practical evidence

The roadmap should prioritize:

1. English canonical completeness
2. full language coverage across supported locales
3. reader-facing completeness in every locale
4. high-value validator coverage
5. native-speaker corpus growth
6. drift monitoring for flagship content

All major documents should cross-link aggressively so readers can move from principle to workflow to policy to evidence.

## Part 18 - Success Criteria

A reader switching between supported languages should encounter:

- the same core concepts
- the same examples
- the same cautions
- the same educational value
- the same practical guidance

At the same time, each language should feel naturally written for its audience.

The highest goal of Localization at Scale is:

**full language coverage, localization completeness, semantic parity, native-language readability, cultural appropriateness, educational effectiveness, continuous improvement, defect prevention, drift management, and sustainable multilingual publishing through strong feedback loops.**

## Operational Metrics

Track these numbers continuously:

```text
Localization Debt = X
Open Defect Classes = Y
```

The long-term target is:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Related Documents

- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `wiki/localization-governance.md`
- `wiki/localization-maturity-model.md`
- `wiki/let-books-localization-case-study.md`
- `style-guide/localization/README.md`
- `style-guide/localization/ai-translation-review-records.md`
- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `localization-audit-report.md`
