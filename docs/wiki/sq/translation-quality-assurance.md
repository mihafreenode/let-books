---
title: "Sigurimi i cilësisë së përkthimit"
summary: >-
  Përkthimi QA kombinon vërtetimin e automatizuar, kontrollin e drejtshkrimit, rishikimin e terminologjisë, kontrollet e aksesueshmërisë dhe gjykimin njerëzor.
topics:
  - translation-quality
  - qa
  - localization
---
# Sigurimi i cilësisë së përkthimit

## Përmbledhje

Përkthimi QA kombinon vërtetimin e automatizuar, kontrollin e drejtshkrimit, rishikimin e terminologjisë, kontrollet e aksesueshmërisë dhe gjykimin njerëzor.

## Kontrollet e zakonshme

- Mungojnë përkthimet
- Rrjedhje angleze
- mospërputhjet e mbajtësve të vendeve
- lidhje të prishura
- rrëshqitje e fjalorit
- Mbulimi i tekstit të aksesueshmërisë
- pamje e ekranit dhe barazia e diagramit

## Provat e rishikimit njerëzor

Përkthimi QA duhet gjithashtu të ruajë të dhëna të shkurtra të rishikimit njerëzor për korrigjimet përfaqësuese të ndihmuara nga AI.

Fushat minimale:

- teksti origjinal
- teksti i korrigjuar
- kategori gabimi
- hipoteza e shkakut rrënjësor
[[20]]]
- arsyetimi recensues

[[21]]]
Kjo ka rëndësi sepse edhe kur kuptimi i përgjithshëm ruhet, përkthimet e krijuara nga AI mund të kërkojnë rishikim nga folësi amtare për të korrigjuar çështjet delikate në gramatikë, modalitet, terminologji dhe regjistër specifik të domenit. Këto çështje shpesh janë të vështira për t'u zbuluar vetëm nëpërmjet matjeve të automatizuara të cilësisë.

## [[22]]]
Taksonomia e zakonshme e gabimeve të përkthimit AI

- gramatikë
[[24]]]
- modaliteti
[[25]]]
- terminologjia
[[26]]]
- regjistrohuni
[[27]]]
- rrjedhshmëri
[[28]]]
- përkthim fjalë për fjalë
[[29]]]
- paqartësi
[[30]]]
- humbje e kontekstit
[[31]]]
- renditja e fjalëve
[[32]]]
- bashkëvendosje
[[33]]]
- shkrimi ose drejtshkrimi
[[34]]]
- formulimi i politikave të domenit
[[35]]]
- formulimi i aksesueshmërisë

## Lightweight benchmark scoring

For repeatable AI-translation evaluation, use a lightweight 0-3 rubric instead of relying only on pass/fail judgment.

Recommended dimensions:

- meaning accuracy
- grammar and fluency
- terminology and domain fit
- register and style
- review effort

Recommended release labels:

- blocker
- major revision
- minor revision
- ready with review signoff

This creates scorecard-friendly data without requiring a heavyweight localization-measurement framework.

## [[36]]]
Faqe të ngjashme

[[37]]]
- `localization-ci-cd.md`
[[38]]]
- `translation-memory-and-glossaries.md`
[[39]]]
- `../style-guide/localization/ai-translation-review-records.md`
[[40]]]
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
