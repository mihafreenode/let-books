---
title: "Uputstvo za implementaciju"
summary: >-
  Smernice za implementaciju definišu kako tim treba da isporuči rad unutar trenutnog spremišta ili okruženja isporuke bez zamene same specifikacije proizvoda.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Uputstvo za implementaciju

## Rezime

Smernice za implementaciju definišu kako tim treba da isporuči rad unutar trenutnog spremišta ili okruženja isporuke bez zamene same specifikacije proizvoda.

## Uloga

Smernice za primenu nalaze se ispod specifikacije proizvoda.

Pomaže u odgovoru na pitanja kao što su:

- kako treba da funkcioniše javno imenovanje
- kako dokumenti treba da budu strukturirani
- koja očekivanja verifikacije sada važe
- koja pravila specifična za spremište saradnici treba da poštuju
- gde taktička pravila treba da žive kako se projekat razvija

## Razlika od specifikacije proizvoda

Specifikacija proizvoda definiše šta je proizvod i šta mora da postigne.

Smernice za implementaciju definišu kako bi saradnici trebalo da obavljaju posao u okviru trenutnog konteksta isporuke.

Ova razlika je korisna jer nije svako pravilo o skladištu istina o proizvodu i ne treba svaku istinu o proizvodu zakopavati u taktičke beleške.

## Uobičajeni primeri

Uputstvo za primenu često uključuje:

- pravila imenovanja i brendiranja
- pravila implementacije dokumentacije
- statičke lokacije ili demo ograničenja
- očekivanja verifikacije
- pravila za uređivanje ili generisanje koda
- politike dokaza za javno pisanje

Ova pravila često dobro žive u Markdown jer moraju da ostanu pregledna, laka za ažuriranje i bliska ostatku konteksta spremišta.

## Zašto je to važno u radu uz pomoć veštačke inteligencije

AI asistenti često prate najbliža konkretna uputstva. Ako su pravila specifična za spremište implicitna, izlaz brzo postaje nedosledan.

Smernice za primenu čine ta pravila vidljivima bez zagađivanja specifikacije proizvoda taktičkim detaljima.

U praksi, to znači da datoteka sa uputstvima iz Markdown može obavljati dva posla odjednom:

- objasnite tok posla ljudskom saradniku
- usmerite AI agenta prema željenim alatima, sekvenci i ograničenjima

## Let Books kontekst

U Let Books, `AGENTS-Implementation.md` je sloj taktičkog navođenja.

Pokriva oblasti kao što su:

- javno imenovanje
- pravila dokumentacije
- javni sajt i podela dokumenata
- metapodaci i SEO pravila za statične stranice
- statička demo ograničenja
- pravila o lokalizaciji i pristupačnosti
- pravila verifikacije
- politika o dokazima na blogu

To ga čini operativnim pratiocem `AGENTS.md`, a ne njegovom zamenom.

Ostala uputstva Markdown u repo-u pojačavaju isti obrazac. na primer:

- `docs/android-debugging.md` usmerava izbore toka posla za otklanjanje grešaka kao što je CDP prilaganje u odnosu na tokove posla zakrpe izvora
- `docs/style-guide/publishing/ubuntu-tooling.md` dokumentuje očekivane alate za objavljivanje, verifikaciju, snimke ekrana, proveru pravopisa i otklanjanje grešaka na uređaju

Ovi dokumenti su čitljivi kao uputstva za ljude, ali takođe pomažu agentima da izaberu bolje akcije umesto da nagađaju na osnovu opštih podrazumevanih vrednosti.

## Povezane stranice

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/sr-Latn/how-to-turn-a-product-spec-into-an-implementation-plan.md`