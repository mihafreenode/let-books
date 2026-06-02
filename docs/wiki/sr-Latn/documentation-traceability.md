---
title: "Sljedivost dokumentacije"
summary: >-
  Sljedivost dokumentacije je praksa da se važne tvrdnje, opisi toka posla i očekivanja kvaliteta mogu pratiti do stabilnih dokaza repozitorija i eksplicitnih odluka.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sljedivost dokumentacije

## Rezime

Sljedivost dokumentacije je praksa da se važne tvrdnje, opisi toka posla i očekivanja kvaliteta mogu pratiti do stabilnih dokaza repozitorija i eksplicitnih odluka.

## Zašto je važno

Bez sledljivosti, dokumentaciji postaje teško verovati.

Čitaoci ne mogu reći:

- da li je izjava aktuelna
- da li je neko ponašanje namerno
- da li tvrdnja potiče iz specifikacije proizvoda ili nesreće u primeni
- da li javni članak odražava odobreni smer proizvoda

Sledljivost je posebno važna u radu uz pomoć veštačke inteligencije jer generisani sadržaj može zvučati pouzdano čak i kada nije zasnovan na pravom izvoru.

## Kako izgleda sledljivost

Dobra sledljivost dokumentacije obično uključuje:

- poznati lanac autoriteta
- stabilne reference na relevantne dokumente ili specifikacije
- jasno razdvajanje sadašnjeg stanja i budućih planova
- eksplicitna razlika između kanonske dokumentacije i statusa implementacije
- izvorne mape ili beleške o dokazima za značajne javne članke

Takođe je sve korisnije kada je dokumentacija dovoljno specifična da vodi rad uz pomoć veštačke inteligencije, a ne samo ljudsko tumačenje.

## Jednostavan model autoriteta

Koristan model je:

1. specifikacija proizvoda
2. uputstvo za implementaciju
3. aktuelno stanje dokumentacije
4. demo ili implementacijsko ponašanje
5. testovi i rezultati validacije

Ovo pomaže timovima da odluče koji artefakt treba da odgovori na koje pitanje.

## Javno pisanje i sledljivost

Javni članci, eseji i obrazovni materijal ne bi trebalo da se oslanjaju na bilo koji izvorni fajl koji se nalazi u blizini.

Umesto toga, trebalo bi da preferiraju stabilnu dokumentaciju i reference specifikacije i koriste izvorne mape kada su tvrdnje značajne.

To čini javno pisanje s vremenom održivijim i manje krhkim.

## Sljedivost za agente kao i za ljude

Sljedivost nije samo pomoć osobi da shvati odakle je došao zahtjev. Takođe pomaže AI agentu da odredi koji artefakti spremišta treba da vode akciju.

Kada dokumentacija jasno navodi redosled toka posla, preferencije alata, ograničenja okruženja i granice ovlašćenja, ona postaje upotrebljiva kao operativni kontekst za agente, kao i kontekst objašnjenja za ljude.

Ovo je važno jer agenti često postupaju po najkonkretnijim uputstvima u blizini. Prativi Markdown pomaže da ispravna instrukcija bude vidljiva.

## Let Books kontekst

Repozitorijum Let Books već podržava sledljivost kroz:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- izvorne mape prema `docs/sources/`

Takođe sadrži Markdown vodiče koji funkcionišu kao operativni kontekst koji se može pratiti za rad agenta, kao što su:

- `docs/android-debugging.md` za izbor toka posla za mobilno otklanjanje grešaka i korišćenje alata
- `docs/style-guide/publishing/ubuntu-tooling.md` za očekivane mogućnosti alata i verifikacije

Ova struktura pomaže projektu da tretira dokumentaciju kao sistem zasnovan na dokazima, a ne kao labav skup beleški.

## Povezane stranice

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/sr-Latn/how-to-keep-spec-docs-demo-and-code-aligned.md`