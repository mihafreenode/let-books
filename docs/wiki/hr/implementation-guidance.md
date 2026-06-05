---
title: "Smjernice za provedbu"
summary: >-
  Smjernice za implementaciju određuju kako tim treba obavljati posao unutar trenutačnog repozitorija ili okruženja isporuke, a da pritom ne zamijeni samu specifikaciju proizvoda.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Smjernice za provedbu

## Sažetak

Smjernice za implementaciju određuju kako tim treba obavljati posao unutar trenutačnog repozitorija ili okruženja isporuke, a da pritom ne zamijeni samu specifikaciju proizvoda.

## Uloga

Smjernice za implementaciju nalaze se ispod specifikacije proizvoda.

Pomažu odgovoriti na pitanja kao što su:

- kako bi javno imenovanje trebalo funkcionirati
- kako bi dokumenti trebali biti strukturirani
- koja se očekivanja provjere trenutačno primjenjuju
- koja bi pravila specifična za repozitorij suradnici trebali slijediti
- gdje bi taktička pravila trebala živjeti kako se projekt razvija

## Razlika od specifikacije proizvoda

Specifikacija proizvoda definira što je proizvod i što mora postići.

Smjernice za implementaciju definiraju kako bi suradnici trebali obavljati posao unutar trenutnog konteksta isporuke.

Ova je razlika korisna jer nije svako pravilo repozitorija istina o proizvodu i ne treba svaka istina o proizvodu biti zakopana u taktičke bilješke.

## Uobičajeni primjeri

Smjernice za implementaciju često uključuju:

- pravila imenovanja i brendiranja
- pravila provedbe dokumentacije
- statička web-mjesta ili demo ograničenja
- očekivanja verifikacije
- pravila za uređivanje ili generiranje koda
- politike dokaza za javno pisanje

Takva pravila često najbolje funkcioniraju u Markdownu jer moraju ostati pregledna, laka za ažuriranje i bliska ostatku konteksta repozitorija.

## Zašto je to važno u radu uz pomoć umjetne inteligencije

AI pomoćnici često slijede najbliže konkretne upute. Ako su pravila specifična za repozitorij implicitna, izlaz brzo postaje nedosljedan.

Smjernice za implementaciju čine ta pravila vidljivima bez zagađivanja specifikacije proizvoda taktičkim detaljima.

U praksi to znači da datoteka s uputama Markdown može obavljati dva posla odjednom:

- objasniti tijek rada ljudskom suradniku
- usmjeriti AI agenta prema željenim alatima, redoslijedu i ograničenjima

## Let Books kontekst

U Let Books, `AGENTS-Implementation.md` je sloj taktičkog navođenja.

Pokriva područja kao što su:

- javno imenovanje
- pravila dokumentacije
- javna stranica i dokumenti podijeljeni
- metapodaci i SEO pravila za statične stranice
- statička demo ograničenja
- pravila lokalizacije i dostupnosti
- pravila provjere
- politika dokaza bloga

To ga čini operativnim pratiocem `AGENTS.md`, a ne njegovom zamjenom.

Druge smjernice Markdown u repo-u pojačavaju isti obrazac. Na primjer:

- `docs/android-debugging.md` usmjerava izbore tijeka rada za otklanjanje pogrešaka kao što je CDP prilaganje u odnosu na tijekove rada zakrpa izvora
- `docs/style-guide/publishing/ubuntu-tooling.md` dokumentira očekivane alate za objavljivanje, provjeru, snimke zaslona, provjeru pravopisa i otklanjanje pogrešaka uređaja

Ti su dokumenti čitljivi kao ljudske smjernice, ali također pomažu agentima da odaberu bolje akcije umjesto nagađanja iz generičkih zadanih vrijednosti.

## Povezane stranice

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/hr/how-to-turn-a-product-spec-into-an-implementation-plan.md`
