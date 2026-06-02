---
title: "Kako održavati usklađenost specifikacije, dokumentacije, demonstracije i koda"
summary: >-
  Ovaj vodič opisuje praktičan tok rada za dugoročno održavanje usklađenosti specifikacije proizvoda, dokumentacije, ponašanja demonstracije i implementacionog rada.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Kako održavati usklađenost specifikacije, dokumentacije, demonstracije i koda

## Sažetak

Ovaj vodič opisuje praktičan tok rada za dugoročno održavanje usklađenosti specifikacije proizvoda, dokumentacije, ponašanja demonstracije i implementacionog rada.

## Osnovni problem

Odstupanje proizvoda retko počinje dramatičnom greškom. Obično počinje malim neusklađenostima.

Primeri:

- demonstracija doda novi tok rada, ali se specifikacija nikada ne ažurira
- dokumentacija opisuje funkcionalnost koja se više ne ponaša tako
- kod implementira zgodnu prečicu koja krši pravilo proizvoda
- validacione provere sprovode samo sintaksu, a ne nameru proizvoda

AI može ubrzati sve ovo ako je tok usklađivanja slab.

## Model usklađivanja

Koristite ovaj redosled autoriteta:

1. specifikacija proizvoda
2. implementacione smernice
3. dokumentacija trenutnog stanja
4. ponašanje demonstracije ili aplikacije
5. testovi i validaciona pravila

Niži slojevi treba da podržavaju više slojeve. Ako su u sukobu, ažurirajte lanac namerno umesto da podrazumevano pobedi najvidljiviji artefakt.

## Preporučeni tok rada

### 1. Počnite od promene u specifikaciji

Ako se menja korisniku vidljiv tok rada ili pravilo proizvoda, prvo ažurirajte odgovarajuću specifikaciju ili smernice.

Koristite:

- `AGENTS.md` za pravila i tokove rada na nivou proizvoda
- `AGENTS-Implementation.md` za taktička pravila repozitorijuma i isporuke

### 2. Ažurirajte dokumentaciju trenutnog stanja

Ako promena utiče na ono što trenutno postoji, ažurirajte dokumentaciju koja opisuje trenutno stanje.

Tipični primeri:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- novi ili revidirani sadržaj u learning/wiki/blog sekcijama gde je relevantno

### 3. Ažurirajte demonstraciju ili implementaciju

Tek kada je namera jasna, treba menjati demonstraciju ili aplikaciju.

To pomaže da se spreči čest obrazac u kome prototip tiho postaje izvor istine.

### 4. Dodajte ili ažurirajte validaciju

Zatim pitajte šta može automatski da se proveri.

Primeri:

- potpunost lokalizacionih ključeva
- prisustvo obaveznih fajlova
- generisanje metapodataka
- validacija linkova
- testovi specifični za tok rada

Ne može svako pravilo odmah da se automatizuje, ali važna pravila ne bi trebalo da ostanu zavisna samo od pamćenja.

### 5. Pregledajte u odnosu na specifikaciju, ne samo na izlaz

Kada pregledate promene, nemojte stati na pitanjima:

- da li se pokreće
- da li izgleda dobro
- da li testovi prolaze

Pitajte i:

- da li se poklapa sa dokumentovanim tokom rada
- da li čuva traženu granicu proizvoda
- da li su dokumentacija i opis trenutnog stanja ostali pošteni

## Kako postupati sa otkrićima iz demonstracije

Ponekad demonstracija nauči tim nečemu boljem od originalne specifikacije.

To je korisno. Ispravan odgovor je:

1. dokumentovati otkriće
2. odlučiti da li je promena toka rada namerna
3. ažurirati specifikaciju i dokumentaciju
4. održati implementaciju usklađenom sa ažuriranom odlukom

Pogrešan odgovor je pustiti da demonstracija tiho pobedi samo zato što već postoji.

## Kako postupati sa implementacijom uz pomoć AI

Sa AI-jem ovaj tok rada postaje još važniji, jer asistenti često optimizuju lokalnu verovatnost.

Dobra petlja usklađivanja je:

1. napišite ili ažurirajte specifikaciju
2. generišite implementaciju
3. uporedite izlaz sa specifikacijom
4. ažurirajte dokumentaciju ako se trenutno ponašanje promenilo
5. dodajte validaciju gde je to praktično

## Primer Let Books

Repozitorijum već sadrži koristan lanac usklađivanja:

- `AGENTS.md` za pravac proizvoda
- `AGENTS-Implementation.md` za taktička pravila
- `README.md` za prikaz trenutnog stanja
- `docs/` za pravila znanja i objavljivanja
- dokumentaciju o razvoju i objavljivanju za smernice validacije

Tu strukturu treba namerno koristiti kad god se dodaju nove funkcionalnosti, dokumentacija ili javna objašnjenja.

## Kontrolna lista

Pre spajanja značajne promene proverite:

1. Da li je pravilo proizvoda ili tok rada jasno dokumentovan?
2. Da li se dokumentacija trenutnog stanja i dalje poklapa sa stvarnošću?
3. Da li demonstracija ili implementacija odražava nameravano pravilo?
4. Da li postoji bar jedan validacioni ili pregledni mehanizam koji štiti promenu?
5. Da li bi novi saradnik kasnije mogao da razume tu odluku?

## Dalje čitanje

- `../spec-driven-content-program.md`
- `../wiki/sr-Latn/demo-spec-alignment.md`
- `../wiki/sr-Latn/spec-driven-development.md`
- `../blog/sr-Latn/spec-driven-development-in-let-books.md`
