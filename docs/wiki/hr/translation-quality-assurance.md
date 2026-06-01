---
title: "Osiguranje kvalitete prijevoda"
summary: >-
  Prijevod QA kombinira automatiziranu provjeru valjanosti, provjeru pravopisa, terminološki pregled, provjere pristupačnosti i ljudsku prosudbu.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvalitete prijevoda

## Sažetak

Prijevod QA kombinira automatiziranu provjeru valjanosti, provjeru pravopisa, terminološki pregled, provjere pristupačnosti i ljudsku prosudbu.

## Uobičajene provjere

- nedostaju prijevodi
- engleski leakage
- neslaganja rezerviranog mjesta
- neispravne veze
- glosary drift
- pokrivenost teksta dostupnosti
- paritet snimke zaslona i dijagrama

## Dokazi ljudskog pregleda

Prijevod QA također bi trebao sačuvati kratke zapise ljudskog pregleda za reprezentativne ispravke potpomognute AI.

Minimum polja:

- izvorni tekst
- ispravljen tekst
- kategorija pogreške
- hipoteza temeljnog uzroka
- obrazloženje recenzenta

Ovo je važno jer čak i kada je cjelokupno značenje sačuvano, prijevodi generirani AI mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalitetu, terminologiji i registru specifičnom za domenu. Te probleme često je teško otkriti samo pomoću automatiziranih metrika kvalitete.

## Uobičajena taksonomija pogreške prijevoda AI

- gramatika
- modalitet
- terminologija
- registrirati se
- tečnost
- doslovan prijevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacija
- pismo ili pravopis
- formuliranje pravila domene
- formulacija pristupačnosti

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

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
