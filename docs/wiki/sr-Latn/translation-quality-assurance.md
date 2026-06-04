---
title: "Osiguranje kvaliteta prevoda"
summary: >-
  Prevod KA kombinuje automatizovanu validaciju, proveru pravopisa, pregled terminologije, proveru pristupačnosti i ljudsko rasuđivanje.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvaliteta prevoda

## Rezime

Prevod KA kombinuje automatizovanu validaciju, proveru pravopisa, pregled terminologije, proveru pristupačnosti i ljudsko rasuđivanje.

## Uobičajene provere

- nedostaju prevodi
- Englesko curenje
- potpunost lokalizacije okrenute čitaocu
- nepodudaranja čuvara mesta
- pokvarene veze
- glosar drift
- pokrivenost teksta pristupačnosti
- paritet snimaka ekrana i dijagrama

## Zahtev za sveže generisani izlaz

Pre pregleda strukturnog pariteta, semantičkog pregleda ili ručnog poređenja članaka:

1. ponovo generišite sajt iz trenutnog stanja repozitorijuma
2. pokrenite validatore nad trenutno generisanim izlazom
3. pregledajte generisane HTML artefakte
4. tek tada uradite ručnu procenu pariteta

Ovo pravilo postoji zato što izvorni Markdown i generisani izlaz mogu privremeno da se raziđu tokom razvoja, a nalazi KA treba da se zasnivaju na aktuelnim artefaktima, a ne na zastarelim generisanim datotekama.

## Pregled strukturnog pariteta

Pregled strukturnog pariteta treba da traži gubitak vrednosti za čitaoca čak i kada lokalizovani članak i dalje uopšteno zadržava značenje.

Tipični signali uključuju:

- nedostajuće glavne odeljke
- urušenu hijerarhiju naslova
- nedostajuće primere
- sažete praktične smernice
- smanjenu raspravu o upravljanju
- skraćene smernice za pregled ili validaciju

Upozorenja validatora strukturnog pariteta su podsticaji za pregled, a ne automatski dokaz lošeg prevoda. Treba ih tumačiti zajedno sa generisanim HTML-om i, gde je potrebno, izlazom prikazanim u pregledaču.

## Validator lokalizacije okrenut čitaocu

Jedna klasa validatora bi trebalo eksplicitno da pokvari CI kada se stranica čini lokalizovanom, ali i dalje izlaže sadržaj na izvornom jeziku okrenut čitaocu.

Primeri koji bi trebalo da propadnu:

- lokalizovani naslov sa rezimeom na engleskom
- lokalizovani članak sa engleskim oznakama
- lokalizovani članak sa naslovima ili listama na engleskom
- lokalizovani članak sa engleskim oblačićima ili natpisima
- lokalizovani članak sa engleskim oznakama dijagrama ili alternativnim tekstom
- kartice povezanog sa mešovitim jezicima

Ovo je uslov neispravnosti, a ne samo upozorenje, jer čitaoci doživljavaju takve stranice kao vidljivo nedovršene.

## Revizija klase defekata

KA prevoda treba da održava eksplicitne klase defekata sa:

- opis
- broj pojavljivanja
- osnovni uzrok
- pokrivenost validatorom
- rizik od recidiva
- plan zatvaranja

Obavezne kategorije uključuju:

- neprevedeni rezimei
- neprevedena tela
- objavljivanje nacrta za čuvare mesta
- neprevedeni metapodaci
- izdavaštvo na mešovitom jeziku
- buduće otkrivene klase

Klasa se zatvara samo kada njen broj dostigne nulu i CI je spreči da se vrati bez greške.

## Dokazi o ljudskim pregledima

KA prevoda takođe treba da sačuva kratke zapise o ljudskim pregledima za reprezentativne ispravke uz pomoć veštačke inteligencije.

Minimalni broj polja:

- originalni tekst
- ispravljen tekst
- kategorija greške
- hipoteza o osnovnom uzroku
- obrazloženje recenzenta

Nalazi pregleda izvornih govornika treba da budu sačuvani kao rastući korpus, a ne kao izolovane jednokratne beleške. Ponovljeni nalazi bi trebalo da se vrate u dizajn validatora, uputstva za saradnike i buduća uputstva za AI agente.

Pre odobrenja pregleda AI-potpomognutog prevoda, recenzenti bi trebalo da:

- pregledaju relevantne zapise u strukturiranom korpusu nalaza za taj jezik ili temu
- provere ponavljajuće obrasce grešaka iz ljudskih pregleda
- potvrde da trenutni nacrt pre odobrenja ponovo ne uvodi poznate probleme

Svaku prijavljenu grešku koju je uočio izvorni govornik treba takođe proceniti s obzirom na:

- ispravku sadržaja
- ažuriranje smernica za pregled
- ažuriranje terminoloških smernica
- poboljšanje prompta
- priliku za validator
- priliku za regresioni test

Ovo je važno jer čak i kada je opšte značenje sačuvano, prevodi generisani od veštačke inteligencije mogu zahtevati pregled izvornog govornika da bi se ispravili suptilni problemi u gramatici, modalitetu, terminologiji i registru specifičnom za domen. Ove probleme je često teško otkriti samo pomoću automatizovanih metrika kvaliteta.

Konkretno prijavljene greške izvornih govornika nisu samo savetodavne. Svaka od njih treba da završi ispravljena, sistematizovana, namerno nerešena uz obrazloženje ili i dalje izričito praćena u korpusu nalaza.

## Uobičajena taksonomija grešaka u prevodu AI

- gramatika
- modalitet
- terminologija
- registar
- tečnost
- doslovan prevod
- dvosmislenost
- gubitak konteksta
- red reči
- kolokacija
- pismo ili pravopis
- fraziranje politike domena
- formulacije pristupačnosti

## Lagano benchmark bodovanje

Za ponovljivu evaluaciju AI-prevoda, koristite laganu rubriku 0-3 umesto da se oslanjate samo na procenu „prošao/neuspeo“.

Preporučene dimenzije:

- tačnost značenja
- gramatika i tečnost
- terminologija i uklapanje domena
- registar i stil
- pregled napora

Preporučene oznake izdanja:

- bloker
- velika revizija
- manja revizija
- spreman sa potpisom pregleda

Ovo stvara podatke pogodne za kartice bez potrebe za teškim okvirom za merenje lokalizacije.

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/sr-Latn/how-to-run-localization-qa-in-ci.md`
