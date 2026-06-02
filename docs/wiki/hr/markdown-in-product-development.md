---
title: "Markdown u razvoju proizvoda"
summary: >-
  Markdown je praktičan format za pohranjivanje namjere proizvoda, dokumentacije, vodiča i dokaza u obliku koji je pregledljiv, prenosiv, diffable i koji se lako povezuje s tijekovima rada validacije.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown u razvoju proizvoda

## Sažetak

Markdown praktičan je format za pohranjivanje namjere proizvoda, dokumentacije, vodiča i dokaza u obliku koji je pregledan, prenosiv, diffable i koji se lako povezuje s tijekovima rada validacije.

## Zašto su Markdown važni

Markdown često se tretira kao pogodnost pisanja. U radu vođenom specifikacijama, to je korisnije od toga.

Timovima daje jednostavan način da zadrže znanje o proizvodu blizu repozitorija bez skrivanja unutar vlasničkih alata ili dokumenata koje je teško pregledati.

To je bitno za:

- specifikacije
- smjernice za provedbu
- dokumentaciju o trenutnom stanju
- upute i wiki stranice
- karte izvora i bilješke s dokazima

## U čemu je Markdown dobar

Markdown dobro funkcionira kada sadržaj treba:

- čitljiv u sirovom obliku
- kontrolirana verzijama
- jednostavan za pregled u razlikama
- poveziv između dokumenata
- prenosiv u različitim okruženjima
- kasnije se može pretvoriti u druge izdavačke formate

To ga čini posebno korisnim za sustave proizvoda i dokumentacije kojima je potrebna sljedivost.

## Što Markdown ne radi sam po sebi

Markdown je koristan, ali sam po sebi ne nameće ispravnost.

Samo po sebi ne može jamčiti:

- da je sadržaj aktualan
- da su tvrdnje dobrog izvora
- da izvedba odgovara dokumentaciji
- da terminologija ostaje dosljedna
- da se validacija ili CI pravila stvarno izvode

Zato bi Markdown trebao biti dio šireg sustava, a ne miješati ga s cijelim sustavom.

## Markdown u tijeku rada vođenom specifikacijama

U tijeku rada vođenom specifikacijama, Markdown je najvrjedniji kada se nalazi unutar lanca ovlaštenja.

Na primjer:

1. specifikacije definiraju pravila proizvoda
2. provedbene upute definiraju taktička pravila
3. dokumenti o trenutnom stanju objašnjavaju što sada postoji
4. karte izvora prate značajne javne tvrdnje
5. validacija i CI jačaju stabilna očekivanja

Markdown je medij koji pomaže da ti slojevi ostanu vidljivi i pregledni.

## Zašto je ovo važno u radu uz pomoć umjetne inteligencije

AI sustavi imaju koristi od jasnog, pristupačnog konteksta.

Markdown pomaže jer je:

- lako se pregledava
- lako citirati
- lako dif
- jednostavno držati u blizini spremišta implementacije

To ga čini snažnim formatom za memoriju proizvoda.

Ali AI također čini jedno ograničenje očiglednijim: ako je Markdown nejasan, zastario ili kontradiktoran, pomoćnik može generirati brzo odstupanje iz njega. Dakle, vrijednost ne dolazi samo od formata, već i od održavanja sadržaja.

## Markdown kao smjernice agenta

Neki Markdown dokumenti mogu izgledati kao vodiči okrenuti prema ljudima, ali također služe i kao operativni vodič za AI agente.

Ovo je posebno korisno kada dokument čini više od objašnjavanja teme i umjesto toga bilježi:

- preferirani redoslijed tijeka rada
- izbor alata
- ograničenja okoline
- putevi eskalacije
- anti-obrasci koje treba izbjegavati

U tim slučajevima Markdown postaje više od objašnjenja. Postaje trajno sučelje između znanja o repozitoriju i ponašanja agenta.

## Let Books primjeri za vodstvo agenata

### Tijek rada otklanjanja pogrešaka u Androidu

`docs/android-debugging.md` je jak primjer.

Čitljiv je kao ljudski vodič, ali također agentu daje konkretne operativne upute kao što su:

- preferirajte fizičke Android uređaje u odnosu na emulaciju radne površine za rad s kamerom i crtičnim kodom
- radije priložite Playwright CDP u odnosu na ponovljena pokretanja preglednika
- razlikovati runtime CDP ubrizgavanje od stvarnog tijeka rada zakrpe izvora
- prvo uspostavite infrastrukturu vrućeg ponovnog učitavanja kada korisnik zatraži testiranje uživo putem telefona

Ta vrsta Markdown ne opisuje samo domenu. Aktivno vodi tijek rada i odabir alata.

### Priprema alata i okoline

`docs/style-guide/publishing/ubuntu-tooling.md` je još jedan dobar primjer.

Čita se kao dokumentacija za postavljanje suradnika, ali također govori agentu za koje se alate očekuje da postoje ili bi ih trebalo preferirati za klase rada kao što su:

- Playwright za provjeru korisničkog sučelja i snimke zaslona
- Hunspell za provjeru pravopisa
- ImageMagick i OCR alati za vizualne i lažne tijekove rada
- Alati povezani s ADB za otklanjanje pogrešaka u Androidu

Ova vrsta Markdown pomaže agentu da zaključi o očekivanom lancu alata umjesto da nagađa iz generičkih zadanih vrijednosti.

## Praktična implikacija

Kada pišete Markdown za repozitorij koji mogu koristiti AI agenti, pomaže pisati imajući na umu dva čitatelja:

- ljudski suradnik kojem je potrebno objašnjenje
- agent koji treba eksplicitni tijek rada i ograničenja alata

Najbolji dokumenti rade oboje.

Oni ostaju čitljivi tutoriali ili vodiči za ljude, a istovremeno su dovoljno specifični da usmjeravaju ponašanje agenta na ponovljive načine.

## Let Books kontekst

Repozitorij Let Books već koristi Markdown za nekoliko slojeva memorije proizvoda, uključujući:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- README-ovi i vodiči za područje dokumenata
- izvorne karte prema `docs/sources/`

Ovo je dobar primjer da se Markdown koristi ne samo za prozu, već i za koordinaciju na razini repozitorija, strukturu javnog pisanja i praćenje dokaza.

## Praktično pravilo

Korisno pravilo je jednostavno:

Upotrijebite Markdown kako biste namjeru proizvoda učinili vidljivom, preglednom i povezanom. Nemojte pretpostavljati da samo Markdown održava tu namjeru istinitom.

Istina još uvijek ovisi o:

- jasan autoritet
- aktivno održavanje
- pregled discipline
- validacija gdje je praktično

## Povezane stranice

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../blog/hr/spec-driven-development-for-ai-projects.md`