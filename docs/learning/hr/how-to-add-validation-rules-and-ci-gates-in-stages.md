---
title: "Kako postupno dodavati validacijska pravila i CI vrata"
summary: >-
  Ovaj vodič objašnjava kako postupno dodavati validacijska pravila i CI provjere kako bi projekt mogao poboljšavati dosljednost i smanjivati odstupanje bez pokušaja da sve automatizira odjednom.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Kako postupno dodavati validacijska pravila i CI vrata

## Sažetak

Ovaj vodič objašnjava kako postupno dodavati validacijska pravila i CI provjere kako bi projekt mogao poboljšavati dosljednost i smanjivati odstupanje bez pokušaja da sve automatizira odjednom.

## Zašto je postupno uvođenje važno

Timovi često znaju da im treba snažnija validacija, ali naprave jednu od dvije pogreške.

Ili predugo ostave provjere kvalitete neformalnima, ili pokušaju odjednom uvesti velik i krut CI sustav pa izazovu frustraciju.

Postupan pristup radi bolje.

On projektu omogućuje da ponavljana očekivanja iz pregleda s vremenom pretvara u ponovljive provjere.

## Počnite od ponavljanih pogrešaka

Najbolja validacijska pravila obično počinju kao ponavljani nalazi u ljudskim pregledima.

Zapitajte se:

- koje se pogreške stalno događaju
- koja je pravila lako zaboraviti
- koja struktura mora ostati dosljedna kroz cijeli repozitorij
- koje bi provjere kvalitete uštedjele vrijeme recenzentima

Ako se ista poteškoća pojavi više puta, dobar je kandidat za automatizaciju.

## Validacija treba slijediti lanac autoriteta

Validacijska pravila trebaju pojačavati dokumentirana očekivanja, a ne ih zamjenjivati.

To znači:

- specifikacija definira pravilo
- dokumentacija objašnjava pravilo
- validacija provjerava pravilo gdje je to praktično
- CI dosljedno pokreće validaciju

Tako projekt ne počinje provoditi pravila o kojima se zapravo nikada nije odlučilo.

## Koristan model zrelosti

### Faza 1: ručni kontrolni popis

Počnite tako da pravilo izričito imenujete.

Primjeri:

- sav novi korisniku vidljiv tekst mora biti lokalizabilan
- dokumentacija mora razdvajati trenutno stanje od budućih planova
- novi javni članci moraju citirati specifikacije i dokumentaciju, a ne izvorne datoteke

U ovoj fazi pravilo je stvarno, ali ga još uvijek provode ljudi.

### Faza 2: lagana lokalna validacija

Dodajte malu skriptu ili strukturiranu provjeru koju suradnici mogu pokrenuti lokalno.

Primjeri:

- otkrivanje ključeva lokalizacije koji nedostaju
- provjere prisutnosti obaveznih datoteka
- validacija generiranja metapodataka
- provjere razrješavanja poveznica

Ta faza smanjuje izbježive pogreške prije nego što se CI uopće pokrene.

### Faza 3: vidljivost u CI-ju

Pokrenite provjeru u CI-ju, čak i ako u početku nije blokirajuća.

To timu daje vidljivost u to koliko često pravilo pada i treba li samu provjeru doraditi.

### Faza 4: blokirajuća CI vrata

Kad je pravilo stabilno i dobro shvaćeno, učinite ga obaveznim.

U toj točki projekt prelazi iz neformalnog očekivanja u provediv standard.

## Što prvo automatizirati

Dobri rani kandidati obično su:

- strukturna dosljednost
- obavezne datoteke
- potpunost lokalizacije
- ispravnost formatiranja ili sintakse
- pokvarene interne poveznice
- zabranjeni urednički navodi

Za višejezično objavljivanje tretirajte korisniku vidljiv sadržaj na pomiješanim jezicima kao jedna od prvih CI kontrola visoke vrijednosti. Stranica s lokaliziranim naslovom, ali engleskim sažetkom ili engleskim oznakama nije djelomično uspješna. Nepotpuna je.

Ove su provjere obično jeftine, objektivne i vrlo vrijedne.

## Što ne treba prerano forsirati

Neke su provjere vrijedne, ali im možda treba vremena prije nego što postanu stroga vrata.

Primjeri:

- provjera pravopisa na mnogim jezicima
- provjere snimki zaslona ili vizualnih regresija
- provjere pristupačnosti dok je podešavanje još u tijeku
- stilska ili jezična pravila koja još nisu stabilna

Ovo može početi kao savjetodavni signal prije nego što postane obavezno.

## Primjeri iz Let Books

Repozitorij već dokumentira nekoliko obrazaca validacije, uključujući:

- osnovno testiranje lokalizacije
- validaciju JSON sintakse
- provjere obaveznih datoteka
- generiranje SEO metapodataka
- opcionalni spellcheck i linting
- automatizaciju objave

Dokumentacija i stilski vodiči također definiraju urednička pravila koja s vremenom mogu postati ciljevi validacije, kao što je korištenje specifikacija i dokumentacije kao kanonskih dokaza za javne članke.

Zato je Let Books dobar primjer postupnog uvođenja pravila umjesto procesa sve-odjednom.

## Praktičan tijek pretvaranja pravila

Koristite ovaj obrazac kada dodajete novo validacijsko pravilo:

1. prepoznajte ponavljajuću poteškoću u pregledima
2. jasno zapišite pravilo u dokumentaciji ili smjernicama
3. dodajte lokalnu skriptu ili provjeru ako je to praktično
4. pokrenite je u CI-ju kao vidljivu povratnu informaciju
5. učinite je blokirajućom tek kada postane stabilna

To stvara manje trenja nego uvođenje strogih vrata prije nego što tim razumije pravilo.

## Pitanja prije dodavanja vrata

1. Je li pravilo jasno dokumentirano?
2. Je li provjera dovoljno pouzdana da joj se može vjerovati?
3. Hoće li suradnici razumjeti kako ispraviti neuspjehe?
4. Opravdava li vrijednost provjere trenje koje uvodi?
5. Treba li početi samo kao upozorenje prije nego što postane obavezna?

## Projektima s podrškom AI-ja to treba još više

AI povećava količinu promjena i brzinu promjene. To znači više prilika za nedosljednost.

Zbog toga je brza povratna informacija još vrednija. Praktično pitanje često nije može li AI proizvesti savršen prvi pokušaj. Korisnije pitanje jest može li okruženje pouzdano prepoznati sljedeću poteškoću koju treba riješiti.

Validacija i CI nisu tu da uspore timove. Tu su da spriječe da brzina izbriše važne granice.

U radu vođenom specifikacijom cilj nije maksimalna automatizacija. Cilj je pouzdano učvršćivanje pravila koja su najvažnija.

## Trajna pouka

Najjači validacijski sustavi obično se ne pojavljuju potpuno oblikovani. Oni rastu tako da ponavljanu ljudsku prosudbu pretvaraju u dokumentirane, pregledljive i provedive provjere.

Taj postupni put često je najrealniji način da projekt postane stroži, a da ne postane krhak.

## Kontrolni popis za ispravke od izvora prema gore

Kada validacijsko pravilo padne:

1. najprije pregledajte izvorni Markdown
2. zatim pregledajte lokalizirane metapodatke
3. pregledajte ulaze za generiranje i registre
4. ponovno generirajte artefakte
5. generirani HTML pregledajte tek nakon provjera na razini izvora

Nemojte krpati generirani izlaz ako je izvorna lokalizacija nepotpuna.

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/hr/spec-driven-development.md`
- `../blog/hr/documentation-is-part-of-the-product.md`
