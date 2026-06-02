---
title: "Specifikacija proizvoda"
summary: >-
  Specifikacija proizvoda definiše čemu služi proizvod, šta mora da radi, koje granice mora da poštuje i koji se rezultati računaju kao uspeh.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifikacija proizvoda

## Rezime

Specifikacija proizvoda definiše čemu služi proizvod, šta mora da radi, koje granice mora da poštuje i koji se rezultati računaju kao uspeh.

## Uloga

Specifikacija proizvoda je najviši praktičan opis planiranog ponašanja proizvoda.

Trebalo bi da odgovori na pitanja kao što su:

- zašto proizvod postoji
- za koga je
- koji su tokovi rada prvoklasni
- šta mora da radi čak i pod uslovima kvara
- ono što je izričito van okvira
- koji kriterijumi prihvatanja definišu smislen demo ili izdanje

## Šta spada u specifikaciju proizvoda

Tipičan sadržaj specifikacije uključuje:

- namena proizvoda
- osnovna filozofija
- model domena
- definicije toka posla
- privatnost i bezbednosna očekivanja
- ne-ciljevi
- uputstvo za redosled implementacije gde utiče na obim ili redosled isporuke
- kriterijumi prihvatanja

Specifikacija treba da se fokusira na istinu o proizvodu, a ne na svaki detalj lokalne implementacije.

## Ono što obično ne pripada tamo

Ove stavke često pripadaju drugom mestu osim ako direktno ne utiču na obaveze prema proizvodu:

- konvencije o privremenom spremištu
- lokalno podešavanje alata
- uske odluke za poliranje korisničkog interfejsa
- jednokratno uputstvo za otklanjanje grešaka
- uređivačke ili izdavačke mehanike koje ne menjaju model proizvoda

## Zašto je to važno u radu uz pomoć veštačke inteligencije

AI može veoma brzo da generiše verodostojnu implementaciju. Bez jasne specifikacije proizvoda, ta primena može da optimizuje pogodnost umesto namere.

Specifikacija daje recenzentima i saradnicima stabilan standard za odlučivanje da li generisani rezultat i dalje pripada predviđenom proizvodu.

## Let Books kontekst

U Let Books, `AGENTS.md` je osnovna specifikacija proizvoda.

On definiše:

- svrha projekta
- model domena i toka posla
- višezakupni i lokalizacioni pravac
- ručni tok rada i AI-opcioni principi
- kriterijumi prihvatanja za prvi demo

To ga čini više od pregleda. To je glavni autoritet proizvoda u spremištu.

## Povezane stranice

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/sr-Latn/how-to-write-a-spec-that-ai-can-follow.md`