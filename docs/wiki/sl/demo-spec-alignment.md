---
title: "Usklajenost med demom in specifikacijo"
summary: >-
  Usklajenost med demom in specifikacijo je praksa ohranjanja skladnosti med vedenjem prototipa ali dema ter dokumentiranim produktnim namenom, pri čemer se specifikacija izrecno posodobi, kadar demo razkrije boljši potek dela.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
---
# Usklajenost med demom in specifikacijo

## Povzetek

Usklajenost med demom in specifikacijo je praksa ohranjanja skladnosti med vedenjem prototipa ali dema ter dokumentiranim produktnim namenom, pri čemer se specifikacija eksplicitno posodobi, kadar demo razkrije boljši potek dela.

## Zakaj je pomembna

Demo je uporaben, ker naredi poteke dela konkretne. Tveganje pa nastane, ko ljudje vidno vedenje začnejo obravnavati kot odobreno produktno resnico, čeprav dokumentacija ni bila posodobljena.

## Priporočen vrstni red avtoritete

1. produktna specifikacija
2. implementacijska navodila
3. dokumentacija trenutnega stanja
4. demo ali vedenje implementacije
5. validacija in testi

To ne pomeni, da demo ni pomemben. Pomeni, da ga je treba razlagati znotraj dokumentiranega sistema odločitev.

## Zdrava raba dema

Demo uporabljajte za:

- razkrivanje težav v poteku dela
- prepoznavanje težav z uporabnostjo
- preverjanje predpostavk z uporabniki
- razlago deležnikom

Demo naj ne postane tiha zamenjava za produktne odločitve.

## Kdaj naj demo vodi

Če demo pokaže očitno boljši potek dela, naj ekipa:

1. spremembo namerno pregleda
2. posodobi ustrezno specifikacijo in dokumentacijo
3. prilagodi validacijo ali pričakovanja pregleda

Povedano drugače: demo lahko navdihne naslednjo odločitev, vendar mora biti posodobljena odločitev še vedno dokumentirana.

## Kontekst Let Books

V repozitoriju Let Books so kanonični dokumentacijski viri že ločeni od statusa implementacije. To je uporabna varovalka, ker preprečuje, da bi prototipi postali nenamerna uredniška avtoriteta.

## Sorodne strani

- `spec-driven-development.md`
- `../learning/how-to-keep-spec-docs-demo-and-code-aligned.md`
- `../blog/sl/spec-driven-development-in-let-books.md`
