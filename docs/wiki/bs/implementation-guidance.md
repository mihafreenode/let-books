---
title: "Smjernice za implementaciju"
summary: >-
  Smjernice za implementaciju definiraju kako bi tim trebao isporučiti rad unutar trenutnog spremišta ili okruženja isporuke bez zamjene same specifikacije proizvoda.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Smjernice za implementaciju

## Sažetak

Smjernice za implementaciju definiraju kako bi tim trebao isporučiti rad unutar trenutnog spremišta ili okruženja isporuke bez zamjene same specifikacije proizvoda.

## Uloga

Smjernice za implementaciju nalaze se ispod specifikacije proizvoda.

Pomaže u odgovoru na pitanja kao što su:

- kako bi javno imenovanje trebalo funkcionirati
- kako bi dokumenti trebali biti strukturirani
- koja očekivanja verifikacije sada važe
- koja pravila specifična za spremište saradnici treba da poštuju
- gdje bi taktička pravila trebala živjeti kako se projekat razvija

## Razlika od specifikacije proizvoda

Specifikacija proizvoda definira šta je proizvod i šta mora postići.

Smjernice za implementaciju definiraju kako bi saradnici trebali obavljati posao u okviru trenutnog konteksta isporuke.

Ova razlika je korisna jer nije svako pravilo repozitorija istina o proizvodu, i ne bi svaka istina o proizvodu trebala biti zakopana u taktičke napomene.

## Uobičajeni primjeri

Smjernice za implementaciju često uključuju:

- pravila imenovanja i brendiranja
- pravila implementacije dokumentacije
- statička lokacija ili demo ograničenja
- očekivanja verifikacije
- pravila za uređivanje ili generiranje koda
- politike dokaza za javno pisanje

Ova pravila često dobro žive u Markdown jer treba da ostanu pregledna, laka za ažuriranje i bliska ostatku konteksta spremišta.

## Zašto je to važno u radu uz pomoć umjetne inteligencije

AI asistenti često slijede najbliže konkretne upute. Ako su pravila specifična za spremište implicitna, izlaz brzo postaje nedosljedan.

Smjernice za implementaciju čine ta pravila vidljivima bez zagađivanja specifikacije proizvoda taktičkim detaljima.

U praksi, to znači da fajl sa uputstvima iz Markdown može obavljati dva posla odjednom:

- objasniti tok posla ljudskom saradniku
- usmjeriti AI agenta prema željenim alatima, redoslijedu i ograničenjima

## Let Books kontekst

U Let Books, `AGENTS-Implementation.md` je sloj taktičkog navođenja.

Pokriva oblasti kao što su:

- javno imenovanje
- pravila dokumentacije
- javna stranica i podjela dokumenata
- metapodaci i SEO pravila za statične stranice
- statička demo ograničenja
- pravila o lokalizaciji i pristupačnosti
- pravila verifikacije
- blog politika dokaza

To ga čini operativnim pratiocem `AGENTS.md`, a ne njegovom zamjenom.

Ostala uputstva Markdown u repo-u jačaju isti obrazac. na primjer:

- `docs/android-debugging.md` usmjerava izbore toka rada za otklanjanje grešaka kao što je CDP prilaganje u odnosu na tokove posla zakrpe izvora
- `docs/style-guide/publishing/ubuntu-tooling.md` dokumentuje očekivane alate za objavljivanje, verifikaciju, snimke ekrana, provjeru pravopisa i otklanjanje grešaka na uređaju

Ovi dokumenti su čitljivi kao smjernice za ljude, ali također pomažu agentima da izaberu bolje akcije umjesto da nagađaju na osnovu generičkih zadanih postavki.

## Povezane stranice

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/bs/how-to-turn-a-product-spec-into-an-implementation-plan.md`