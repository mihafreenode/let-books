---
title: "Sledljivost dokumentacije"
summary: >-
  Sledljivost dokumentacije je praksa, s katero so pomembne trditve, opisi delovnih tokov in pričakovanja glede kakovosti sledljivi nazaj do stabilnih repozitorijskih dokazov in izrecnih odločitev.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Sledljivost dokumentacije

## Povzetek

Sledljivost dokumentacije je praksa, s katero so pomembne trditve, opisi delovnih tokov in pričakovanja glede kakovosti sledljivi nazaj do stabilnih repozitorijskih dokazov in izrecnih odločitev.

## Zakaj je pomembno

Brez sledljivosti je dokumentaciji težko zaupati.

Bralci ne morejo povedati:

- ali je izjava aktualna
- ali je vedenje namerno
- ali zahtevek izhaja iz specifikacije izdelka ali nesreče pri izvedbi
- ali javni članek odraža odobreno smer izdelka

Sledljivost je še posebej pomembna pri delu s pomočjo umetne inteligence, saj lahko ustvarjena vsebina zveni zanesljivo, tudi če ni utemeljena na pravem viru.

## Kako izgleda sledljivost

Dobra sledljivost dokumentacije običajno vključuje:

- znana veriga organov
- stabilne reference na ustrezne dokumente ali specifikacije
- jasno ločevanje med trenutnim stanjem in prihodnjimi načrti
- izrecno razlikovanje med kanonično dokumentacijo in statusom izvedbe
- zemljevide virov ali dokazne opombe za pomembne javne članke

Prav tako je vse bolj uporabno, če je dokumentacija dovolj specifična za usmerjanje dela s pomočjo umetne inteligence, ne le človeške interpretacije.

## Preprost model avtoritete

Uporaben model je:

1. specifikacija izdelka
2. navodila za izvajanje
3. dokumentacijo o trenutnem stanju
4. predstavitveno ali implementacijsko vedenje
5. rezultate testov in validacije

To ekipam pomaga pri odločitvi, kateri artefakt naj odgovori na katero vprašanje.

## Javno pisanje in sledljivost

Javni članki, eseji in izobraževalno gradivo se ne smejo zanašati na katero koli izvorno datoteko, ki je v bližini.

Namesto tega bi morali dati prednost stabilni dokumentaciji in referencam na specifikacije ter uporabiti izvorne zemljevide, kadar so trditve bistvene.

Zaradi tega je javno pisanje bolj vzdržljivo in sčasoma manj krhko.

## Sledljivost za agente in ljudi

Pri sledljivosti ne gre le za pomoč osebi pri razumevanju, od kod izvira zahtevek. Prav tako pomaga agentu AI določiti, kateri artefakti skladišča morajo voditi ukrepanje.

Ko dokumentacija jasno navaja vrstni red delovnega toka, nastavitve orodij, omejitve okolja in meje pooblastil, postane uporabna kot operativni kontekst za agente in kot razlagalni kontekst za ljudi.

To je pomembno, ker agenti pogosto delujejo po najbolj konkretnih bližnjih navodilih. Sledljiv Markdown pomaga narediti prava navodila vidna.

## Let Books kontekst

Repozitorij Let Books že podpira sledljivost prek:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- `docs/README.md`
- `docs/blog/README.md`
- `docs/sources/README.md`
- izvorne karte pod `docs/sources/`

Vsebuje tudi navodila Markdown, ki delujejo kot sledljiv operativni kontekst za delo posrednika, kot so:

- `docs/android-debugging.md` za izbiro delovnega toka mobilnega odpravljanja napak in uporabo orodja
- `docs/style-guide/publishing/ubuntu-tooling.md` za pričakovana orodja in zmogljivosti preverjanja

Ta struktura pomaga projektu obravnavati dokumentacijo kot sistem, podprt z dokazi, in ne kot ohlapen niz zapiskov.

## Sorodne strani

- `product-specification.md`
- `implementation-guidance.md`
- `validation-layers.md`
- `../../learning/sl/how-to-keep-spec-docs-demo-and-code-aligned.md`