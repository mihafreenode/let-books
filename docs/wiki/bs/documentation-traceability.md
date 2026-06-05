---
title: "Sljedivost dokumentacije"
summary: >-
  Sljedivost dokumentacije znači da se važne tvrdnje, opisi toka rada i očekivanja kvaliteta mogu pouzdano povezati sa stabilnim dokazima u repozitoriju i jasno donesenim odlukama.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sljedivost dokumentacije

## Sažetak

Sljedivost dokumentacije znači da se važne tvrdnje, opisi toka rada i očekivanja kvaliteta mogu pouzdano povezati sa stabilnim dokazima u repozitoriju i jasno donesenim odlukama.

## Zašto je važno

Bez sljedivosti, dokumentaciji postaje teško vjerovati.

Čitaoci ne mogu reći:

- da li je izjava aktuelna
- da li je neko ponašanje namerno
- da li tvrdnja dolazi iz specifikacije proizvoda ili nesreće pri implementaciji
- da li javni članak odražava odobreni smjer proizvoda

Sljedivost je posebno važna u radu uz pomoć umjetne inteligencije jer generirani sadržaj može zvučati pouzdano čak i kada nije utemeljen na pravom izvoru.

## Kako izgleda sljedivost

Dobra sljedivost dokumentacije obično uključuje:

- jasno određen lanac autoriteta
- stabilne reference na relevantne dokumente ili specifikacije
- jasno razdvajanje trenutnog stanja i budućih planova
- eksplicitna razlika između kanonske dokumentacije i statusa implementacije
- izvorne mape ili bilješke o dokazima za značajne javne članke

Takođe postaje sve korisnije kada je dokumentacija dovoljno precizna da usmjerava rad uz pomoć vještačke inteligencije, a ne samo ljudsko tumačenje.

## Jednostavan model autoriteta

Koristan model je:

1. specifikacija proizvoda
2. uputstvo za implementaciju
3. dokumentacija o trenutnom stanju
4. demo ili implementacijsko ponašanje
5. testovi i rezultati validacije

Ovo pomaže timovima da odluče koji artefakt treba odgovoriti na koje pitanje.

## Javno pisanje i sljedivost

Javni članci, eseji i obrazovni materijal ne bi se trebali oslanjati na bilo koji izvorni fajl koji se nalazi u blizini.

Umjesto toga, oni bi trebali preferirati stabilnu dokumentaciju i reference specifikacije i koristiti izvorne mape kada su zahtjevi značajni.

To čini javno pisanje s vremenom lakše održavanim i manje krhkim.

## Sljedivost za agente kao i za ljude

Sljedivost ne služi samo tome da čovjeku pojasni odakle neka tvrdnja dolazi. Ona takođe pomaže AI agentu da odredi koji artefakti spremišta treba da usmjeravaju narednu radnju.

Kada dokumentacija jasno navodi redosled toka posla, preferencije alata, ograničenja okruženja i granice ovlašćenja, ona postaje upotrebljiva kao operativni kontekst za agente, kao i kontekst objašnjenja za ljude.

Ovo je važno jer agenti često djeluju prema najkonkretnijim uputama koje su im pri ruci. Sledljiv Markdown pomaže da prava uputa bude jasno vidljiva.

## Let Books kontekst

Repozitorijum Let Books već podržava sledljivost kroz:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- izvorne mape prema `docs/sources/`

Takođe sadrži Markdown vodiče koji funkcionišu kao sledljivi operativni kontekst za rad agenta, kao što su:

- `docs/android-debugging.md` za izbor toka rada za otklanjanje grešaka na mobilnom uređaju i korištenje alata
- `docs/style-guide/publishing/ubuntu-tooling.md` za očekivane mogućnosti alata i verifikacije

Ova struktura pomaže projektu da tretira dokumentaciju kao sistem zasnovan na dokazima, a ne kao labav set bilješki.

## Povezane stranice

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/bs/how-to-keep-spec-docs-demo-and-code-aligned.md`
