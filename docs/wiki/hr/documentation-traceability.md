---
title: "Sljedivost dokumentacije"
summary: >-
  Sljedivost dokumentacije je praksa da se važne tvrdnje, opisi tijeka rada i očekivanja kvalitete mogu pratiti unatrag do stabilnih repozitorija dokaza i izričitih odluka.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sljedivost dokumentacije

## Sažetak

Sljedivost dokumentacije je praksa da se važne tvrdnje, opisi tijeka rada i očekivanja kvalitete mogu pratiti unatrag do stabilnih repozitorija dokaza i izričitih odluka.

## Zašto je to važno

Bez sljedivosti dokumentaciji postaje teško vjerovati.

Čitatelji ne mogu reći:

- je li izjava aktualna
- je li ponašanje namjerno
- proizlazi li zahtjev iz specifikacije proizvoda ili nezgode pri implementaciji
- odražava li javni članak odobreni smjer proizvoda

Sljedivost je posebno važna u radu potpomognutom umjetnom inteligencijom jer generirani sadržaj može zvučati pouzdano čak i kada nije utemeljen na pravom izvoru.

## Kako izgleda sljedivost

Dobra sljedivost dokumentacije obično uključuje:

- poznati lanac autoriteta
- stabilne reference na relevantne dokumente ili specifikacije
- jasno odvajanje trenutnog stanja od budućih planova
- izričita razlika između kanonske dokumentacije i statusa provedbe
- karte izvora ili dokazne bilješke za značajne javne članke

Također je sve korisnije kada je dokumentacija dovoljno specifična da vodi rad uz pomoć umjetne inteligencije, a ne samo ljudsko tumačenje.

## Jednostavan model autoriteta

Koristan model je:

1. specifikacija proizvoda
2. smjernice za provedbu
3. dokumentaciju o trenutnom stanju
4. demo ili implementacijsko ponašanje
5. rezultati ispitivanja i validacije

To pomaže timovima da odluče koji artefakt treba odgovoriti na koje pitanje.

## Javno pisanje i sljedivost

Javni članci, eseji i obrazovni materijali ne bi se trebali oslanjati na bilo koju izvornu datoteku koja se nalazi u blizini.

Umjesto toga, trebali bi preferirati stabilnu dokumentaciju i reference na specifikacije te koristiti karte izvora kada su tvrdnje značajne.

To čini javno pisanje lakšim za održavanje i manje krhkim tijekom vremena.

## Sljedivost za agente kao i za ljude

Sljedivost nije samo pomaganje osobi da shvati odakle potječe zahtjev. Također pomaže AI agentu da odredi koji bi artefakti spremišta trebali voditi akciju.

Kada dokumentacija jasno navodi redoslijed tijeka rada, postavke alata, ograničenja okruženja i granice ovlaštenja, postaje upotrebljiva kao operativni kontekst za agente, kao i kao kontekst za objašnjenje za ljude.

Ovo je važno jer agenti često djeluju prema najkonkretnijim uputama u blizini. Prativi Markdown pomaže da ispravna uputa bude vidljiva.

## Let Books kontekst

Repozitorij Let Books već podržava sljedivost putem:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- izvorne karte prema `docs/sources/`

Također sadrži vodiče Markdown koji funkcioniraju kao sljedivi operativni kontekst za rad agenta, kao što su:

- `docs/android-debugging.md` za odabir tijeka rada za otklanjanje pogrešaka na mobilnom uređaju i korištenje alata
- `docs/style-guide/publishing/ubuntu-tooling.md` za očekivani alat i mogućnosti provjere

Ova struktura pomaže projektu da dokumentaciju tretira kao sustav potkrijepljen dokazima, a ne kao labav skup bilješki.

## Povezane stranice

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/hr/how-to-keep-spec-docs-demo-and-code-aligned.md`