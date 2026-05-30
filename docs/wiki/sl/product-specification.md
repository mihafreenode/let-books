---
title: "Produktna Specifikacija"
topics:
  - product-specification
  - spec-writing
  - spec-driven-development
---
# Produktna Specifikacija

## Povzetek

Produktna specifikacija določa, čemu je izdelek namenjen, kaj mora narediti, katere meje mora spoštovati in kateri izidi štejejo kot uspeh.

## Vloga

Produktna specifikacija je najvišji praktični opis želenega vedenja izdelka.

Odgovarjati mora na vprašanja, kot so:

- zakaj izdelek obstaja
- komu je namenjen
- kateri poteki dela so prvovrstni
- kaj mora delovati tudi ob odpovedih
- kaj je izrecno izven obsega
- katera merila sprejema določajo smiseln demo ali izdajo

## Kaj sodi v produktno specifikacijo

Tipična vsebina vključuje:

- namen izdelka
- temeljno filozofijo
- domenski model
- definicije potekov dela
- pričakovanja glede zasebnosti in varnosti
- necilje
- smernice zaporedja implementacije, kadar vplivajo na obseg ali vrstni red dostave
- merila sprejema

Specifikacija naj se osredotoča na produktno resnico, ne na vsako lokalno implementacijsko podrobnost.

## Kaj tja običajno ne sodi

To običajno spada drugam, razen če neposredno vpliva na produktne zaveze:

- začasne repozitorijske konvencije
- lokalna nastavitev orodij
- ozke odločitve vizualnega poliranja
- enkratna navodila za odpravljanje napak
- uredniški ali objavni mehanizmi, ki ne spreminjajo produktnega modela

## Kontekst Let Books

V Let Books je `AGENTS.md` osrednja produktna specifikacija.

Opredeljuje:

- namen projekta
- domenski in potekovni model
- smer večnajemniške zasnove in lokalizacije
- načela ročnega poteka dela in neobveznosti AI
- merila sprejema za prvi demo
