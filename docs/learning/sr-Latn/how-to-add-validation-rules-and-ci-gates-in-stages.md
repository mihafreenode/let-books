---
title: "Kako postepeno dodavati validaciona pravila i CI kapije"
summary: >-
  Ovaj vodič objašnjava kako postepeno dodavati validaciona pravila i CI provere kako bi projekat mogao da poboljša doslednost i smanji odstupanje bez pokušaja da automatizuje sve odjednom.
topics:
  - validation
  - ci-cd
  - spec-driven-development
---
# Kako postepeno dodavati validaciona pravila i CI kapije

## Sažetak

Ovaj vodič objašnjava kako postepeno dodavati validaciona pravila i CI provere kako bi projekat mogao da poboljša doslednost i smanji odstupanje bez pokušaja da automatizuje sve odjednom.

## Zašto je postepeno uvođenje važno

Timovi često znaju da im je potrebna jača validacija, ali naprave jednu od dve greške.

Ili predugo ostavljaju provere kvaliteta neformalnim, ili pokušaju da odjednom uvedu veliki krut CI sistem i time izazovu frustraciju.

Postepen pristup funkcioniše bolje.

On omogućava projektu da ponavljana očekivanja iz pregleda vremenom pretvori u ponovljive provere.

## Počnite od ponavljanih grešaka

Najbolja validaciona pravila obično počinju kao ponavljani nalazi u ljudskim pregledima.

Pitajte:

- koje greške se stalno ponavljaju
- koja pravila je lako zaboraviti
- koja struktura mora ostati dosledna kroz ceo repozitorijum
- koje provere kvaliteta bi štedele vreme osobama koje pregledaju

Ako se isti problem pojavi više puta, to je dobar kandidat za automatizaciju.

## Validacija treba da prati lanac autoriteta

Validaciona pravila treba da pojačaju dokumentovana očekivanja, a ne da ih zamene.

To znači:

- specifikacija definiše pravilo
- dokumentacija objašnjava pravilo
- validacija proverava pravilo gde je to praktično
- CI dosledno pokreće validaciju

To sprečava projekat da sprovodi pravila o kojima zapravo nikada nije doneta odluka.

## Koristan model zrelosti

### Faza 1: ručna kontrolna lista za pregled

Počnite tako što ćete pravilo izričito imenovati.

Primeri:

- sav novi tekst vidljiv korisniku mora biti lokalizabilan
- dokumentacija mora da razdvaja trenutno stanje od budućih planova
- novi javni članci moraju da navode specifikacije i dokumentaciju, a ne izvorne fajlove

U ovoj fazi pravilo je stvarno, ali ga i dalje sprovode ljudi.

### Faza 2: lagana lokalna validacija

Dodajte malu skriptu ili strukturisanu proveru koju saradnici mogu da pokrenu lokalno.

Primeri:

- otkrivanje nedostajućih ključeva lokalizacije
- provere prisustva obaveznih fajlova
- validacija generisanja metapodataka
- provere razrešavanja linkova

Ova faza smanjuje izbegljive greške pre nego što se CI uopšte pokrene.

### Faza 3: vidljivost u CI-u

Pokrenite proveru u CI-u, čak i ako u početku nije blokirajuća.

To timu daje uvid u to koliko često pravilo pada i da li samu proveru treba doraditi.

### Faza 4: blokirajuća CI kapija

Kada je pravilo stabilno i razumljivo, učinite ga obaveznim.

U tom trenutku projekat prelazi sa neformalnog očekivanja na sprovodiv standard.

## Šta prvo automatizovati

Dobri rani kandidati su obično:

- strukturna doslednost
- obavezni fajlovi
- potpunost lokalizacije
- ispravnost formatiranja ili sintakse
- pokvareni interni linkovi
- zabranjeni urednički navodi

Za višejezično objavljivanje tretirajte korisnički vidljiv sadržaj na pomešanim jezicima kao jednu od prvih CI kapija visoke vrednosti. Stranica sa lokalizovanim naslovom, ali engleskim sažetkom ili engleskim oznakama nije delimično uspešna. Nepotpuna je.

Ove provere su obično jeftine, objektivne i veoma korisne.

## Šta ne treba prerano nametati

Neke provere su vredne, ali im možda treba vreme pre nego što postanu stroge kapije.

Primeri:

- provera pravopisa na mnogo jezika
- provere snimaka ekrana ili vizuelnih regresija
- provere pristupačnosti dok je podešavanje još u toku
- pravila stila ili formulacije koja još nisu stabilna

One mogu početi kao savetodavni signali pre nego što postanu obavezne.

## Primeri iz Let Books

Repozitorijum već dokumentuje nekoliko obrazaca validacije, uključujući:

- osnovno testiranje lokalizacije
- validaciju JSON sintakse
- provere obaveznih fajlova
- generisanje SEO metapodataka
- opcionu proveru pravopisa i linting
- automatizaciju objavljivanja

Dokumentacija i stilski vodiči takođe definišu urednička pravila koja vremenom mogu postati ciljevi validacije, kao što je korišćenje specifikacija i dokumentacije kao kanonskih dokaza za javne članke.

To Let Books čini dobrim primerom postepenog uvođenja umesto procesa sve odjednom.

## Praktičan tok pretvaranja pravila

Koristite ovaj obrazac kada dodajete novo validaciono pravilo:

1. identifikujte ponavljani problem u pregledima
2. jasno zapišite pravilo u dokumentaciji ili smernicama
3. dodajte lokalnu skriptu ili proveru ako je to praktično
4. pokrenite je u CI-u kao vidljivu povratnu informaciju
5. učinite je blokirajućom tek kada postane stabilna

To stvara manje trenja nego uvođenje stroge kapije pre nego što tim razume pravilo.

## Pitanja koja treba postaviti pre dodavanja kapije

1. Da li je pravilo jasno dokumentovano?
2. Da li je provera dovoljno pouzdana da joj se veruje?
3. Da li će saradnici razumeti kako da isprave neuspehe?
4. Da li vrednost provere opravdava trenje?
5. Da li bi trebalo da počne samo kao upozorenje pre nego što postane obavezna?

## Projektima uz pomoć AI ovo je još potrebnije

AI povećava obim promena i brzinu promene. To znači više prilika za nedoslednost.

Takođe čini brzu povratnu informaciju vrednijom. Praktično pitanje često nije da li AI može da proizvede savršen prvi pokušaj. Korisnije pitanje je da li okruženje može pouzdano da prepozna sledeći problem koji treba rešiti.

Validacija i CI nisu tu da uspore timove. Tu su da spreče da brzina izbriše važne granice.

U radu vođenom specifikacijama cilj nije maksimalna automatizacija. Cilj je pouzdano pojačavanje pravila koja su najvažnija.

## Trajna lekcija

Najjači validacioni sistemi obično se ne pojavljuju potpuno formirani. Oni rastu tako što ponavljanu ljudsku procenu pretvaraju u dokumentovane, pregledljive i sprovodive provere.

Taj postepeni put je često najrealniji način da projekat postane stroži, a da ne postane krhak.

## Kontrolna lista za otklanjanje problema iz izvora

Kada validaciono pravilo padne:

1. prvo pregledajte izvorni Markdown
2. zatim pregledajte lokalizovane metapodatke
3. pregledajte ulaze za generisanje i registre
4. ponovo generišite artefakte
5. generisani HTML pregledajte tek nakon provera na nivou izvora

Nemojte popravljati generisani izlaz ako je izvorna lokalizacija nepotpuna.

## Dalje čitanje

- `../spec-driven-content-program.md`
- `how-to-keep-spec-docs-demo-and-code-aligned.md`
- `how-to-review-ai-assisted-work-against-the-spec.md`
- `../wiki/sr-Latn/spec-driven-development.md`
- `../blog/sr-Latn/documentation-is-part-of-the-product.md`
