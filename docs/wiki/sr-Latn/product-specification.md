---
title: "Specifikacija proizvoda"
summary: >-
  Specifikacija proizvoda određuje čemu proizvod služi, šta mora da radi, koje granice mora da poštuje i koji se rezultati smatraju uspehom.
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Specifikacija proizvoda

## Rezime

Specifikacija proizvoda određuje čemu proizvod služi, šta mora da radi, koje granice mora da poštuje i koji se rezultati smatraju uspehom.

## Uloga

Specifikacija proizvoda je najviši praktičan opis planiranog ponašanja proizvoda.

Trebalo bi da odgovori na pitanja kao što su:

- zašto proizvod postoji
- za koga je
- koji su tokovi rada najvažniji
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
- ono što nije cilj
- uputstvo za redosled implementacije gde utiče na obim ili redosled isporuke
- kriterijumi prihvatanja

Specifikacija treba da ostane usmerena na suštinu proizvoda, a ne na svaki detalj lokalne implementacije.

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
- smer za rad sa više zakupaca i lokalizaciju
- ručni tok rada i AI-opcioni principi
- kriterijumi prihvatanja za prvi demo

Zato je to više od pregleda. To je glavni izvor autoriteta za proizvod u spremištu.

## Povezane stranice

- `implementation-guidance.md`
- `documentation-traceability.md`
- `spec-driven-development.md`
- `../../learning/sr-Latn/how-to-write-a-spec-that-ai-can-follow.md`
