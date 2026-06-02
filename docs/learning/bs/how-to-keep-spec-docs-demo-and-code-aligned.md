---
title: "Kako održati usklađenost specifikacije, dokumentacije, demoa i koda"
summary: >-
  Ovaj vodič opisuje praktičan tok rada za održavanje usklađenosti između specifikacije proizvoda, dokumentacije, ponašanja demoa i implementacije kroz vrijeme.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Kako održati usklađenost specifikacije, dokumentacije, demoa i koda

## Sažetak

Ovaj vodič opisuje praktičan tok rada za održavanje usklađenosti između specifikacije proizvoda, dokumentacije, ponašanja demoa i implementacije kroz vrijeme.

## Suština problema

Odstupanje proizvoda rijetko počinje dramatičnom greškom. Obično počinje malim neusklađenostima.

Primjeri:

- demo doda novi tok rada, ali se specifikacija nikada ne ažurira
- dokumentacija opisuje funkcionalnost koja se više tako ne ponaša
- kod implementira zgodan prečac koji krši pravilo proizvoda
- validacijske provjere sprovode samo sintaksu, a ne namjeru proizvoda

AI može ubrzati sve to ako je tok usklađivanja slab.

## Model usklađivanja

Koristite ovaj redoslijed autoriteta:

1. specifikacija proizvoda
2. smjernice za implementaciju
3. dokumentacija trenutnog stanja
4. ponašanje demoa ili aplikacije
5. testovi i validacijska pravila

Niži slojevi trebaju podržavati više slojeve. Ako su u sukobu, namjerno ažurirajte lanac umjesto da podrazumijevano pobijedi artefakt koji je samo najvidljiviji.

## Preporučeni tok rada

### 1. Počnite promjenom u specifikaciji

Ako se promijeni korisniku vidljiv tok rada ili pravilo proizvoda, prvo ažurirajte relevantnu specifikaciju ili smjernice.

Koristite:

- `AGENTS.md` za pravila i tokove rada na nivou proizvoda
- `AGENTS-Implementation.md` za taktička pravila repozitorija i isporuke

### 2. Ažurirajte dokumentaciju trenutnog stanja

Ako promjena utiče na ono što sada postoji, ažurirajte dokumente koji opisuju trenutno stanje.

Tipični primjeri:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- novi ili revidirani learning/wiki/blog sadržaj gdje je relevantno

### 3. Ažurirajte demo ili implementaciju

Tek nakon što je namjera jasna, treba mijenjati demo ili aplikaciju.

To pomaže spriječiti čest obrazac u kojem prototip tiho postane izvor istine.

### 4. Dodajte ili ažurirajte validaciju

Zatim pitajte šta se može automatski provjeriti.

Primjeri:

- potpunost ključeva lokalizacije
- prisustvo obaveznih datoteka
- generisanje metapodataka
- validacija linkova
- testovi specifični za tok rada

Ne može se svako pravilo odmah automatizirati, ali važna pravila ne bi trebala ostati zavisna samo od pamćenja.

### 5. Pregledajte u odnosu na specifikaciju, a ne samo na rezultat

Pri pregledu promjena nemojte stati na pitanju:

- pokreće li se
- izgleda li dobro
- prolaze li testovi

Također pitajte:

- odgovara li dokumentovanom toku rada
- čuva li potrebnu granicu proizvoda
- jesu li dokumentacija i prikaz trenutnog stanja ostali pošteni

## Postupanje s otkrićima iz demoa

Ponekad demo nauči tim nečemu boljem od izvorne specifikacije.

To je korisno. Ispravan odgovor je:

1. dokumentovati otkriće
2. odlučiti je li promjena toka rada namjerna
3. ažurirati specifikaciju i dokumentaciju
4. održati implementaciju usklađenom s ažuriranom odlukom

Pogrešan odgovor je dopustiti da demo tiho pobijedi samo zato što već postoji.

## Postupanje s implementacijom uz podršku AI-ja

S AI-jem ovaj tok rada postaje još važniji jer asistenti često optimizuju lokalnu uvjerljivost.

Dobra petlja usklađivanja izgleda ovako:

1. napišite ili ažurirajte specifikaciju
2. generišite implementaciju
3. uporedite rezultat sa specifikacijom
4. ažurirajte dokumentaciju ako se promijenilo trenutno ponašanje
5. dodajte validaciju gdje je to praktično

## Primjer iz Let Books

Repozitorij već sadrži koristan lanac usklađivanja:

- `AGENTS.md` za smjer proizvoda
- `AGENTS-Implementation.md` za taktička pravila
- `README.md` za prikaz trenutnog stanja
- `docs/` za pravila znanja i objavljivanja
- dokumentacija za razvoj i objavu za smjernice validacije

Tu strukturu treba koristiti namjerno kad god se dodaju nove funkcionalnosti, dokumenti ili javna objašnjenja.

## Kontrolna lista

Prije spajanja značajne promjene provjerite:

1. Je li pravilo proizvoda ili tok rada jasno dokumentovan?
2. Odgovara li dokumentacija trenutnog stanja još uvijek stvarnosti?
3. Odražava li demo ili implementacija namjeravano pravilo?
4. Postoji li barem jedan mehanizam validacije ili pregleda koji štiti promjenu?
5. Može li novi saradnik kasnije razumjeti odluku?

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `../wiki/bs/demo-spec-alignment.md`
- `../wiki/bs/spec-driven-development.md`
- `../blog/bs/spec-driven-development-in-let-books.md`
