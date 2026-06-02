---
title: "Specifikacija proizvoda"
summary: >-
  Specifikacija proizvoda definira čemu proizvod služi, što mora činiti, koje granice mora poštovati i koji se rezultati smatraju uspjehom.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifikacija proizvoda

## Sažetak

Specifikacija proizvoda definira čemu proizvod služi, što mora činiti, koje granice mora poštovati i koji se rezultati smatraju uspjehom.

## Uloga

Specifikacija proizvoda najviša je razina praktičnog opisa namjeravanog ponašanja proizvoda.

Treba odgovoriti na pitanja kao što su:

- zašto proizvod postoji
- za koga je
- koji su tijekovi rada prvorazredni
- što mora raditi čak iu uvjetima kvara
- ono što je izričito izvan opsega
- koji kriteriji prihvaćanja definiraju smislenu demo verziju ili izdanje

## Što spada u specifikaciju proizvoda

Tipični sadržaj specifikacije uključuje:

- namjena proizvoda
- temeljna filozofija
- model domene
- definicije tijeka rada
- očekivanja privatnosti i sigurnosti
- bez golova
- smjernice slijeda implementacije gdje to utječe na opseg ili redoslijed isporuke
- kriteriji prihvatljivosti

Specifikacija bi se trebala usredotočiti na istinitost proizvoda, a ne na svaki detalj lokalne implementacije.

## Ono što tamo obično ne pripada

Ove stavke često pripadaju negdje drugdje osim ako izravno ne utječu na obveze proizvoda:

- konvencije o privremenom spremištu
- lokalna postavka alata
- odluke za usko sučelje
- jednokratne upute za otklanjanje pogrešaka
- uredničke ili izdavačke mehanike koje ne mijenjaju model proizvoda

## Zašto je to važno u radu uz pomoć umjetne inteligencije

AI može vrlo brzo generirati uvjerljivu implementaciju. Bez jasne specifikacije proizvoda, ta implementacija može optimizirati za praktičnost umjesto za namjeru.

Specifikacija daje recenzentima i suradnicima stabilan standard za odlučivanje pripada li generirani rezultat još uvijek namjeravanom proizvodu.

## Let Books kontekst

U Let Books, `AGENTS.md` je osnovna specifikacija proizvoda.

Definira:

- svrha projekta
- model domene i tijeka rada
- multi-stanar i smjer lokalizacije
- ručni tijek rada i AI-opcijski principi
- kriteriji prihvaćanja za prvi demo

To ga čini više od pregleda. To je glavni autoritet proizvoda u repozitoriju.

## Povezane stranice

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/hr/how-to-write-a-spec-that-ai-can-follow.md`