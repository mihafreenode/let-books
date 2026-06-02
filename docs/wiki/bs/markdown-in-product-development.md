---
title: "Markdown u razvoju proizvoda"
summary: >-
  Markdown je praktičan format za pohranjivanje namjere proizvoda, dokumentacije, vodiča i dokaza u obliku koji je pregledan, prenosiv, diffable i jednostavan za povezivanje s tokovima rada validacije.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown u razvoju proizvoda

## Sažetak

Markdown je praktičan format za pohranjivanje namjere proizvoda, dokumentacije, vodiča i dokaza u obliku koji se može pregledati, prenositi, razmjenjivati i koji se lako povezuje sa tokovima rada validacije.

## Zašto je Markdown bitan

Markdown se često tretira kao pogodnost pisanja. U radu vođenom specifikacijama, korisnije je od toga.

To daje timovima lak način da zadrže znanje o proizvodu blizu spremišta bez skrivanja unutar vlasničkih alata ili dokumenata koje je teško pregledati.

to je bitno za:

- specifikacije
- uputstvo za implementaciju
- dokumentacija o trenutnom stanju
- tutorijale i wiki stranice
- izvorne karte i bilješke o dokazima

## U čemu je Markdown dobar

Markdown dobro funkcioniše kada sadržaj treba da bude:

- čitljivo u sirovom obliku
- kontrolirana verzija
- lako pregledati u razlikama
- može se povezati preko dokumenata
- prenosiv u različitim okruženjima
- kasnije se može konvertovati u druge izdavačke formate

To ga čini posebno korisnim za sisteme proizvoda i dokumentacije kojima je potrebna sljedivost.

## Šta Markdown ne radi sam po sebi

Markdown je koristan, ali sam po sebi ne sprovodi ispravnost.

Sam po sebi ne može garantovati:

- da je sadržaj aktuelan
- da su potraživanja dobro dobijena
- da implementacija odgovara dokumentaciji
- da terminologija ostaje dosljedna
- da su validacija ili CI pravila zapravo pokrenuta

Zato Markdown treba da bude deo šireg sistema, a ne da se meša sa celim sistemom.

## Markdown u toku rada vođenom specifikacijama

U toku rada vođenom specifikacijama, Markdown je najvredniji kada se nalazi unutar lanca autoriteta.

na primjer:

1. specifikacije definiraju pravila proizvoda
2. Uputstvo za implementaciju definiše taktička pravila
3. Dokumenti o trenutnom stanju objašnjavaju šta sada postoji
4. izvorne mape prate značajne javne tvrdnje
5. validacija i CI jačaju stabilna očekivanja

Markdown je medij koji pomaže da ti slojevi ostanu vidljivi i pregledani.

## Zašto je ovo važno u radu uz pomoć umjetne inteligencije

AI sistemi imaju koristi od jasnog, pristupačnog konteksta.

Markdown pomaže jer je:

- lak za pregled
- lako citirati
- lako za razliku
- lako držati u blizini spremišta implementacije

To ga čini jakim formatom za memoriju proizvoda.

Ali AI takođe čini jedno ograničenje očiglednijim: ako je Markdown nejasan, zastareo ili kontradiktoran, pomoćnik može da generiše brzo odstupanje od njega. Dakle, vrijednost ne dolazi samo od formata, već i od održavanja sadržaja.

## Markdown kao uputstvo za agenta

Neki Markdown dokumenti mogu izgledati kao tutorijali okrenuti prema ljudima, ali takođe funkcionišu kao operativne smernice za AI agente.

Ovo je posebno korisno kada dokument čini više od objašnjenja teme i umjesto toga bilježi:

- željeni redosled toka posla
- izbor alata
- ograničenja okoline
- eskalacijski putevi
- anti-obrasci koje treba izbjegavati

U tim slučajevima, Markdown postaje više od objašnjenja. Postaje trajno sučelje između znanja spremišta i ponašanja agenta.

## Let Books primjeri za vođenje agenta

### Tok rada za otklanjanje grešaka u Androidu

`docs/android-debugging.md` je snažan primjer.

Čitljiv je kao ljudski vodič, ali takođe daje agentu konkretna operativna uputstva kao što su:

- dajte prednost fizičkim Android uređajima u odnosu na desktop emulaciju za rad kamere i bar kodova
- radije priložite Playwright CDP u odnosu na ponovljeno pokretanje pretraživača
- razlikovati runtime CDP injekciju od stvarnog izvornog toka posla
- prvo uspostavite infrastrukturu vrućeg ponovnog punjenja kada korisnik zatraži testiranje uživo putem telefona

Takva vrsta Markdown ne opisuje samo domen. Aktivno vodi tok rada i odabir alata.

### Priprema alata i okoline

`docs/style-guide/publishing/ubuntu-tooling.md` je još jedan dobar primjer.

Čita se kao dokumentacija za podešavanje saradnika, ali takođe govori agentu koji alati se očekuju da postoje ili bi trebali biti preferirani za klase rada kao što su:

- Playwright za verifikaciju korisničkog interfejsa i snimke ekrana
- Hunspell za provjeru pravopisa
- ImageMagick i OCR alati za vizuelne i lažne radne tokove
- Alati koji se odnose na ADB za otklanjanje grešaka na Androidu

Ova vrsta Markdown pomaže agentu da razmišlja o očekivanom lancu alata umjesto da nagađa na osnovu generičkih zadanih vrijednosti.

## Praktična implikacija

Kada pišete Markdown za spremište koje mogu koristiti AI agenti, pomaže da se piše imajući na umu dva čitaoca:

- ljudski doprinos kome je potrebno objašnjenje
- agent kojem su potrebna eksplicitna ograničenja toka posla i alata

Najbolji dokumenti rade oboje.

Oni ostaju čitljivi tutorijali ili vodiči za ljude, a istovremeno su dovoljno specifični da usmjeravaju ponašanje agenta na ponovljive načine.

## Let Books kontekst

Let Books spremište već koristi Markdown za nekoliko slojeva memorije proizvoda, uključujući:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- README-ovi i vodiči u oblasti dokumenata
- izvorne mape prema `docs/sources/`

Ovo je dobar primjer da se Markdown koristi ne samo za prozu, već i za koordinaciju na nivou spremišta, strukturu javnog pisanja i praćenje dokaza.

## Praktično pravilo

Korisno pravilo je jednostavno:

Koristite Markdown da namjeru proizvoda učinite vidljivom, preglednom i povezivom. Nemojte pretpostavljati da sam Markdown održava tu namjeru istinitom.

Istina i dalje zavisi od:

- jasan autoritet
- aktivno održavanje
- ocjenjivanje discipline
- validacija gdje je to praktično

## Povezane stranice

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../blog/bs/spec-driven-development-for-ai-projects.md`