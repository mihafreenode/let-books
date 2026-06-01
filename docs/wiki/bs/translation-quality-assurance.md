---
title: "Osiguranje kvalitete prijevoda"
summary: >-
  Prevod QA kombinuje automatizovanu provjeru valjanosti, provjeru pravopisa, pregled terminologije, provjere pristupačnosti i ljudsko prosuđivanje.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvalitete prijevoda

## Rezime

Prevod QA kombinuje automatizovanu provjeru valjanosti, provjeru pravopisa, pregled terminologije, provjere pristupačnosti i ljudsko prosuđivanje.

## Uobičajene provjere

- nedostaju prijevodi
- Englesko curenje
- nepodudaranja čuvara mjesta
- pokvarene veze
- glosar drift
- pokrivenost teksta pristupačnosti
- paritet snimka ekrana i dijagrama

## Ljudski pregled dokaza

Prevod QA takođe treba da sačuva kratke zapise o ljudskim pregledima za reprezentativne ispravke uz pomoć AI.

Minimalni broj polja:

- originalni tekst
- ispravljen tekst
- kategorija greške
- hipoteza o osnovnom uzroku
- obrazloženje recenzenta

Ovo je važno jer čak i kada je cjelokupno značenje očuvano, prijevodi generirani AI mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalitetu, terminologiji i registru specifičnom za domenu. Ove probleme je često teško otkriti samo pomoću automatiziranih metrika kvaliteta.

## Taksonomija uobičajenih grešaka u prijevodu AI

- gramatika
- modalitet
- terminologija
- registar
- tečnost
- doslovan prevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacija
- pismo ili pravopis
- fraziranje politike domena
- formulacije pristupačnosti

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
