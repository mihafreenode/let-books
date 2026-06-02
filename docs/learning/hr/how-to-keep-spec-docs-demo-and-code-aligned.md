---
title: "Kako održati usklađenost specifikacije, dokumentacije, demoa i koda"
summary: >-
  Ovaj vodič opisuje praktičan tijek rada za održavanje usklađenosti između specifikacije proizvoda, dokumentacije, ponašanja demoa i implementacije kroz vrijeme.
topics:
  - demo-alignment
  - documentation
  - spec-driven-development
---
# Kako održati usklađenost specifikacije, dokumentacije, demoa i koda

## Sažetak

Ovaj vodič opisuje praktičan tijek rada za održavanje usklađenosti između specifikacije proizvoda, dokumentacije, ponašanja demoa i implementacije kroz vrijeme.

## Srž problema

Odstupanje proizvoda rijetko počinje dramatičnom pogreškom. Obično počinje malim neusklađenostima.

Primjeri:

- demo doda novi tijek rada, ali se specifikacija nikada ne ažurira
- dokumentacija opisuje značajku koja se više tako ne ponaša
- kod implementira zgodan prečac koji krši pravilo proizvoda
- validacijske provjere provode samo sintaksu, a ne namjeru proizvoda

AI može ubrzati sve to ako je tijek usklađivanja slab.

## Model usklađivanja

Koristite ovaj redoslijed autoriteta:

1. specifikacija proizvoda
2. smjernice za implementaciju
3. dokumentacija trenutačnog stanja
4. ponašanje demoa ili aplikacije
5. testovi i validacijska pravila

Niže razine trebaju podržavati više razine. Ako su u sukobu, namjerno ažurirajte lanac umjesto da zadani pobjednik postane artefakt koji je samo najvidljiviji.

## Preporučeni tijek rada

### 1. Počnite promjenom u specifikaciji

Ako se promijeni korisniku vidljiv tijek rada ili pravilo proizvoda, prvo ažurirajte relevantnu specifikaciju ili smjernice.

Koristite:

- `AGENTS.md` za pravila i tijekove rada na razini proizvoda
- `AGENTS-Implementation.md` za taktička pravila repozitorija i isporuke

### 2. Ažurirajte dokumentaciju trenutačnog stanja

Ako promjena utječe na ono što sada postoji, ažurirajte dokumente koji opisuju trenutačno stanje.

Tipični primjeri:

- `README.md`
- `docs/Development.md`
- `docs/Deployment.md`
- novi ili revidirani learning/wiki/blog sadržaj gdje je relevantno

### 3. Ažurirajte demo ili implementaciju

Tek nakon što je namjera jasna, treba mijenjati demo ili aplikaciju.

To pomaže spriječiti čest obrazac u kojem prototip tiho postane izvor istine.

### 4. Dodajte ili ažurirajte validaciju

Zatim pitajte što se može automatski provjeriti.

Primjeri:

- potpunost ključeva lokalizacije
- prisutnost obaveznih datoteka
- generiranje metapodataka
- validacija poveznica
- testovi specifični za tijek rada

Ne može se svako pravilo odmah automatizirati, ali važna pravila ne bi trebala ostati ovisna samo o pamćenju.

### 5. Pregledavajte u odnosu na specifikaciju, a ne samo na rezultat

Pri pregledavanju promjena nemojte stati na pitanju:

- pokreće li se
- izgleda li dobro
- prolaze li testovi

Također pitajte:

- odgovara li dokumentiranom tijeku rada
- čuva li potrebnu granicu proizvoda
- jesu li dokumentacija i prikaz trenutačnog stanja ostali pošteni

## Rukovanje otkrićima iz demoa

Ponekad demo nauči tim nečemu boljem od izvorne specifikacije.

To je korisno. Ispravan odgovor je:

1. dokumentirati otkriće
2. odlučiti je li promjena tijeka rada namjerna
3. ažurirati specifikaciju i dokumentaciju
4. održati implementaciju usklađenom s ažuriranom odlukom

Pogrešan odgovor je dopustiti da demo tiho pobijedi samo zato što već postoji.

## Rukovanje implementacijom uz podršku AI-ja

S AI-jem ovaj tijek rada postaje još važniji jer pomoćnici često optimiziraju lokalnu uvjerljivost.

Dobra petlja usklađivanja izgleda ovako:

1. napišite ili ažurirajte specifikaciju
2. generirajte implementaciju
3. usporedite rezultat sa specifikacijom
4. ažurirajte dokumentaciju ako se promijenilo trenutačno ponašanje
5. dodajte validaciju gdje je to praktično

## Primjer iz Let Books

Repozitorij već sadrži koristan lanac usklađivanja:

- `AGENTS.md` za smjer proizvoda
- `AGENTS-Implementation.md` za taktička pravila
- `README.md` za prikaz trenutačnog stanja
- `docs/` za pravila znanja i objavljivanja
- dokumentacija za razvoj i objavu za smjernice validacije

Tu strukturu treba koristiti namjerno kad god se dodaju nove značajke, dokumenti ili javna objašnjenja.

## Kontrolni popis

Prije spajanja značajne promjene provjerite:

1. Je li pravilo proizvoda ili tijek rada jasno dokumentiran?
2. Odgovara li dokumentacija trenutačnog stanja još uvijek stvarnosti?
3. Odražava li demo ili implementacija namjeravano pravilo?
4. Postoji li barem jedan mehanizam validacije ili pregleda koji štiti promjenu?
5. Može li novi suradnik kasnije razumjeti odluku?

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `../wiki/hr/demo-spec-alignment.md`
- `../wiki/hr/spec-driven-development.md`
- `../blog/hr/spec-driven-development-in-let-books.md`
