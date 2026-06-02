---
title: "Kako postepeno dodavati validacijska pravila i CI kapije"
summary: >-
  Ovaj vodič objašnjava kako postepeno dodavati validacijska pravila i CI provjere kako bi projekat mogao poboljšavati dosljednost i smanjivati odstupanje bez pokušaja da sve automatizira odjednom.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Kako postepeno dodavati validacijska pravila i CI kapije

## Sažetak

Ovaj vodič objašnjava kako postepeno dodavati validacijska pravila i CI provjere kako bi projekat mogao poboljšavati dosljednost i smanjivati odstupanje bez pokušaja da sve automatizira odjednom.

## Zašto je postepeno uvođenje važno

Timovi često znaju da im treba snažnija validacija, ali naprave jednu od dvije greške.

Ili predugo ostave provjere kvaliteta neformalnim, ili pokušaju odjednom uvesti velik i krut CI sistem pa izazovu frustraciju.

Postepen pristup radi bolje.

On omogućava projektu da ponavljana očekivanja iz pregleda s vremenom pretvara u ponovljive provjere.

## Počnite od ponavljanih grešaka

Najbolja validacijska pravila obično počinju kao ponavljani nalazi u ljudskim pregledima.

Zapitajte se:

- koje se greške stalno dešavaju
- koja je pravila lako zaboraviti
- koja struktura mora ostati dosljedna kroz cijeli repozitorij
- koje bi provjere kvaliteta uštedjele vrijeme recenzentima

Ako se ista poteškoća pojavi više puta, dobar je kandidat za automatizaciju.

## Validacija treba pratiti lanac autoriteta

Validacijska pravila trebaju pojačavati dokumentovana očekivanja, a ne ih zamjenjivati.

To znači:

- specifikacija definiše pravilo
- dokumentacija objašnjava pravilo
- validacija provjerava pravilo gdje je to praktično
- CI dosljedno pokreće validaciju

Tako projekat ne počinje provoditi pravila o kojima se zapravo nikada nije odlučilo.

## Koristan model zrelosti

### Faza 1: ručna kontrolna lista

Počnite tako što ćete pravilo izričito imenovati.

Primjeri:

- sav novi korisniku vidljiv tekst mora biti lokalizabilan
- dokumentacija mora razdvajati trenutno stanje od budućih planova
- novi javni članci moraju citirati specifikacije i dokumentaciju, a ne izvorne datoteke

U ovoj fazi pravilo je stvarno, ali ga još uvijek provode ljudi.

### Faza 2: lagana lokalna validacija

Dodajte malu skriptu ili strukturiranu provjeru koju saradnici mogu pokrenuti lokalno.

Primjeri:

- otkrivanje nedostajućih ključeva lokalizacije
- provjere prisustva obaveznih datoteka
- validacija generisanja metapodataka
- provjere razrješavanja linkova

Ta faza smanjuje izbjegljive greške prije nego što se CI uopće pokrene.

### Faza 3: vidljivost u CI-ju

Pokrenite provjeru u CI-ju, čak i ako u početku nije blokirajuća.

To timu daje vidljivost u to koliko često pravilo pada i treba li samu provjeru doraditi.

### Faza 4: blokirajuća CI kapija

Kada je pravilo stabilno i dobro shvaćeno, učinite ga obaveznim.

U toj tački projekat prelazi iz neformalnog očekivanja u provediv standard.

## Šta prvo automatizirati

Dobri rani kandidati obično su:

- strukturna dosljednost
- obavezne datoteke
- potpunost lokalizacije
- ispravnost formatiranja ili sintakse
- pokvareni interni linkovi
- zabranjeni urednički navodi

Za višejezično objavljivanje tretirajte korisniku vidljiv sadržaj na pomiješanim jezicima kao jednu od prvih CI kontrola visoke vrijednosti. Stranica s lokalizovanim naslovom, ali engleskim sažetkom ili engleskim oznakama nije djelimično uspješna. Nepotpuna je.

Ove provjere su obično jeftine, objektivne i vrlo vrijedne.

## Šta ne treba prerano forsirati

Neke provjere su vrijedne, ali im možda treba vremena prije nego što postanu stroga kapija.

Primjeri:

- provjera pravopisa na mnogim jezicima
- provjere snimaka ekrana ili vizuelnih regresija
- provjere pristupačnosti dok je podešavanje još u toku
- stilska ili jezička pravila koja još nisu stabilna

Ovo može početi kao savjetodavni signal prije nego što postane obavezno.

## Primjeri iz Let Books

Repozitorij već dokumentuje nekoliko obrazaca validacije, uključujući:

- osnovno testiranje lokalizacije
- validaciju JSON sintakse
- provjere obaveznih datoteka
- generisanje SEO metapodataka
- opcionalni spellcheck i linting
- automatizaciju objave

Dokumentacija i stilski vodiči također definišu urednička pravila koja s vremenom mogu postati ciljevi validacije, kao što je korištenje specifikacija i dokumentacije kao kanonskih dokaza za javne članke.

Zato je Let Books dobar primjer postepenog uvođenja pravila umjesto procesa sve-odjednom.

## Praktičan tok pretvaranja pravila

Koristite ovaj obrazac kada dodajete novo validacijsko pravilo:

1. prepoznajte ponavljajuću poteškoću u pregledima
2. jasno zapišite pravilo u dokumentaciji ili smjernicama
3. dodajte lokalnu skriptu ili provjeru ako je to praktično
4. pokrenite je u CI-ju kao vidljivu povratnu informaciju
5. učinite je blokirajućom tek kada postane stabilna

To stvara manje trenja nego uvođenje stroge kapije prije nego što tim razumije pravilo.

## Pitanja prije dodavanja kapije

1. Je li pravilo jasno dokumentovano?
2. Je li provjera dovoljno pouzdana da joj se može vjerovati?
3. Hoće li saradnici razumjeti kako ispraviti neuspjehe?
4. Opravdava li vrijednost provjere trenje koje uvodi?
5. Treba li početi samo kao upozorenje prije nego što postane obavezna?

## Projektima uz podršku AI-ja to treba još više

AI povećava količinu promjena i brzinu promjene. To znači više prilika za nedosljednost.

Zbog toga je brza povratna informacija još vrijednija. Praktično pitanje često nije može li AI proizvesti savršen prvi pokušaj. Korisnije pitanje je može li okruženje pouzdano prepoznati sljedeću poteškoću koju treba riješiti.

Validacija i CI nisu tu da uspore timove. Tu su da spriječe da brzina izbriše važne granice.

U radu vođenom specifikacijom cilj nije maksimalna automatizacija. Cilj je pouzdano učvršćivanje pravila koja su najvažnija.

## Trajna pouka

Najjači validacijski sistemi obično se ne pojave potpuno oblikovani. Oni rastu tako što ponavljanu ljudsku prosudbu pretvaraju u dokumentovane, pregledljive i provedive provjere.

Taj postepeni put često je najrealniji način da projekat postane stroži, a da ne postane krhak.

## Kontrolna lista za ispravke od izvora prema gore

Kada validacijsko pravilo padne:

1. najprije pregledajte izvorni Markdown
2. zatim pregledajte lokalizovane metapodatke
3. pregledajte ulaze za generisanje i registre
4. ponovo generišite artefakte
5. generisani HTML pregledajte tek nakon provjera na nivou izvora

Nemojte krpiti generisani izlaz ako je izvorna lokalizacija nepotpuna.

## Dodatno čitanje

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/bs/spec-driven-development.md`
- `../blog/bs/documentation-is-part-of-the-product.md`
