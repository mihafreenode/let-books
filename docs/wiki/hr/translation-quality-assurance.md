---
title: "Osiguranje kvalitete prijevoda"
summary: >-
  Translation QA kombinira automatiziranu provjeru valjanosti, provjeru pravopisa, terminološki pregled, provjere pristupačnosti i ljudsku prosudbu.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvalitete prijevoda

## Sažetak

Translation QA kombinira automatiziranu provjeru valjanosti, provjeru pravopisa, terminološki pregled, provjere pristupačnosti i ljudsku prosudbu.

## Uobičajene provjere

- nedostaju prijevodi
- engleski leakage
- potpunost lokalizacije okrenuta čitatelju
- neslaganja rezerviranog mjesta
- neispravne veze
- glosary drift
- pokrivenost teksta dostupnosti
- paritet snimke zaslona i dijagrama

## Validator lokalizacije okrenut čitatelju

Jedna klasa validatora trebala bi izričito baciti CI kada se stranica čini lokaliziranom, ali još uvijek izlaže sadržaj na izvornom jeziku koji je okrenut čitatelju.

Primjeri koji bi trebali propasti:

- lokalizirani naslov s engleskim sažetkom
- lokalizirani članak s engleskim oznakama
- lokalizirani članak s engleskim naslovima ili popisima
- lokalizirani članak s engleskim oblačićima ili opisima
- lokalizirani članak s engleskim dijagramima ili alternativnim tekstom
- kartice povezanog sadržaja na različitim jezicima

Ovo je stanje greške, a ne samo upozorenje, jer čitatelji takve stranice doživljavaju kao vidljivo nedovršene.

## Revizija klase grešaka

QA prijevoda treba održavati eksplicitne klase nedostataka sa:

- opis
- broj pojavljivanja
- temeljni uzrok
- pokrivenost validatora
- rizik od ponavljanja
- plan zatvaranja

Obavezne kategorije uključuju:

- neprevedeni sažeci
- neprevedena tijela
- mjesto za objavljivanje nacrta
- neprevedeni metapodaci
- mješovito jezično izdavaštvo
- buduće otkrivene klase

Klasa je zatvorena samo kada njezin broj dosegne nulu i CI je spriječi da se vrati bez greške.

## Dokazi ljudskog pregleda

QA prijevoda također bi trebao sačuvati kratke zapise pregleda od strane ljudi za reprezentativne ispravke potpomognute umjetnom inteligencijom.

Minimum polja:

- izvorni tekst
- ispravljen tekst
- kategorija pogreške
- hipoteza temeljnog uzroka
- obrazloženje recenzenta

Nalazi pregleda izvornih govornika trebali bi se sačuvati kao rastući korpus, a ne kao izolirane jednokratne bilješke. Ponovljeni nalazi trebali bi se vratiti u dizajn validatora, smjernice suradnika i buduće upute AI-agenta.

To je važno jer čak i kada je cjelokupno značenje sačuvano, prijevodi generirani umjetnom inteligencijom mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalitetu, terminologiji i registru specifičnom za domenu. Te probleme često je teško otkriti samo pomoću automatiziranih metrika kvalitete.

## Uobičajena taksonomija pogrešaka prijevoda umjetne inteligencije

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

## Lagano referentno bodovanje

Za ponovljivu procjenu prijevoda umjetne inteligencije upotrijebite laganu rubriku 0-3 umjesto da se oslanjate samo na procjenu prošao/nije prošao.

Preporučene dimenzije:

- što znači točnost
- gramatika i tečnost
- usklađenost terminologije i domene
- registar i stil
- pregled truda

Preporučene oznake izdanja:

- blokator
- velika revizija
- manja revizija
- spremno s potpisom pregleda

To stvara podatke prilagođene tablici rezultata bez potrebe za teškim okvirom za lokalizaciju i mjerenje.

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/hr/how-to-run-localization-qa-in-ci.md`