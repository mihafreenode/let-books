---
title: "Markdown u razvoju proizvoda"
summary: >-
  Markdovn je praktičan format za čuvanje namere proizvoda, dokumentacije, vodiča i dokaza u formi koja se može pregledati, prenosiva, diffable i koja se lako povezuje sa tokovima rada validacije.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown u razvoju proizvoda

## Rezime

Markdown je praktičan format za čuvanje namere proizvoda, dokumentacije, vodiča i dokaza u obliku koji se može pregledati, prenositi, diffable i lako povezati sa tokovima rada validacije.

## Zašto je Markdown bitan

Markdown se često tretira kao pogodnost pisanja. U radu vođenom specifikacijama, to je korisnije od toga.

Daje timovima lak način da zadrže znanje o proizvodu blizu spremišta bez skrivanja unutar vlasničkih alata ili dokumenata koje je teško pregledati.

To je važno za:

- specifikacije
- uputstvo za implementaciju
- dokumentacija o trenutnom stanju
- tutorijali i viki stranice
- izvorne mape i beleške o dokazima

## U čemu je Markdown dobar

Markdown dobro funkcioniše kada sadržaj treba da bude:

- čitljivo u sirovom obliku
- kontrolisano verzijom
- lako pregledati u razlikama
- može se povezati preko dokumenata
- prenosiv u različitim okruženjima
- kasnije se može konvertovati u druge izdavačke formate

Ovo ga čini posebno korisnim za sisteme proizvoda i dokumentacije kojima je potrebna sledljivost.

## Ono što Markdown ne radi sam po sebi

Markdown je koristan, ali sam po sebi ne sprovodi ispravnost.

Ne može samo po sebi da garantuje:

- da je sadržaj aktuelan
- da su potraživanja dobro dobijena
- da implementacija odgovara dokumentaciji
- da terminologija ostaje dosledna
- da su validacija ili CI pravila zapravo pokrenuta

Zato Markdown treba da bude deo šireg sistema, a ne da se meša sa celim sistemom.

## Markdown u toku rada vođenom specifikacijama

U toku rada vođenom specifikacijama, Markdown je najvredniji kada se nalazi unutar lanca autoriteta.

na primer:

1. specifikacije definišu pravila proizvoda
2. uputstvo za implementaciju definiše taktička pravila
3. Dokumenti o trenutnom stanju objašnjavaju šta sada postoji
4. izvorne mape prate značajne javne tvrdnje
5. validacija i CI pojačavaju stabilna očekivanja

Markdown je medij koji pomaže da ti slojevi ostanu vidljivi i pregledani.

## Zašto je ovo važno u radu uz pomoć veštačke inteligencije

Sistemi veštačke inteligencije imaju koristi od jasnog, pristupačnog konteksta.

Markdown pomaže jer je:

- lako pregledati
- lako citirati
- lako se razlikuje
- lako držati u blizini spremišta implementacije

To ga čini jakim formatom za memoriju proizvoda.

Ali AI takođe čini jedno ograničenje očiglednijim: ako je Markdown nejasan, zastareo ili kontradiktoran, pomoćnik može da generiše brzo odstupanje od njega. Dakle, vrednost ne dolazi samo iz formata, već i iz održavanja sadržaja.

## Markdown kao uputstvo za agenta

Neki Markdown dokumenti mogu izgledati kao tutorijali okrenuti ljudima, ali takođe funkcionišu kao operativne smernice za AI agente.

Ovo je posebno korisno kada dokument čini više od objašnjenja teme i umesto toga obuhvata:

- željeni redosled toka posla
- izbor alata
- ograničenja životne sredine
- putevi eskalacije
- anti-obrasci koje treba izbegavati

U tim slučajevima, Markdown postaje više od objašnjenja. Postaje izdržljiv interfejs između znanja o spremištu i ponašanja agenta.

## Let Books primeri za vođenje agenta

### Tok posla za otklanjanje grešaka za Android

`docs/android-debugging.md` je snažan primer.

Čitljiv je kao ljudski vodič, ali takođe daje agentu konkretna operativna uputstva kao što su:

- dajte prednost fizičkim Android uređajima u odnosu na emulaciju radne površine za rad sa kamerom i bar kodom
- dajte prednost Playwright CDP prilogu nad ponovljenim pokretanjem pretraživača
- razlikovati ubrizgavanje CDP u toku izvršavanja od tokova posla zakrpe u stvarnom izvoru
- prvo uspostavite infrastrukturu za ponovno učitavanje kada korisnik zatraži testiranje uživo putem telefona

Takva vrsta Markdown ne opisuje samo domen. Aktivno vodi tok posla i izbor alata.

### Oprema i priprema okoline

`docs/style-guide/publishing/ubuntu-tooling.md` je još jedan dobar primer.

Čita se kao dokumentacija za podešavanje saradnika, ali takođe govori agentu koji alati se očekuju da postoje ili bi trebalo da budu preferirani za klase posla kao što su:

- Playwright za verifikaciju korisničkog interfejsa i snimke ekrana
- Hunspell za proveru pravopisa
- ImageMagick i OCR alati za vizuelne i lažne tokove rada
- Alati u vezi sa ADB za otklanjanje grešaka na Android-u

Ova vrsta Markdown pomaže agentu da razmišlja o očekivanom lancu alata umesto da nagađa na osnovu generičkih podrazumevanih vrednosti.

## Praktična implikacija

Kada pišete Markdown za spremište koje mogu koristiti AI agenti, pomaže da se piše imajući na umu dva čitaoca:

- ljudski saradnik kome je potrebno objašnjenje
- agent kome su potrebna eksplicitna ograničenja toka posla i alata

Najbolji dokumenti rade i jedno i drugo.

Oni ostaju čitljivi tutorijali ili vodiči za ljude, a istovremeno su dovoljno specifični da usmeravaju ponašanje agenta na ponovljive načine.

## Let Books kontekst

Repozitorijum Let Books već koristi Markdown za nekoliko slojeva memorije proizvoda, uključujući:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- README-ovi i vodiči u oblasti dokumenata
- izvorne mape prema `docs/sources/`

Ovo je dobar primer da se Markdown koristi ne samo za prozu, već i za koordinaciju na nivou spremišta, strukturu javnog pisanja i praćenje dokaza.

## Praktično pravilo

Korisno pravilo je jednostavno:

Koristite Markdown da biste namjeru proizvoda učinili vidljivom, preglednom i povezivom. Nemojte pretpostavljati da sam Markdown održava tu nameru istinitom.

Istina i dalje zavisi od:

- jasan autoritet
- aktivno održavanje
- disciplina pregleda
- validacija tamo gde je to praktično

## Povezane stranice

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../blog/sr-Latn/spec-driven-development-for-ai-projects.md`