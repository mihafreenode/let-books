---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: sl
language_variants:
  - ../en/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../hr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../bs/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../mk/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../sq/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../de/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../it/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../fr/when-the-demo-is-evidence-and-when-it-is-not.md
  - ../es/when-the-demo-is-evidence-and-when-it-is-not.md
title: Kdaj je demo dokaz in kdaj ni
summary: Kako uporabljati deme in prototipe kot koristne dokaze implementacije, ne da bi ti tiho postali produktna specifikacija.
topics:
  - demo-alignment
  - spec-driven-development
  - product-review
  - documentation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/style-guide/publishing/README.md
  - docs/style-guide/writing/README.md
  - docs/Development.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/sl/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Kdaj je demo dokaz in kdaj ni

Demo je močan zato, ker abstraktne ideje spremeni v nekaj, na kar se ljudje lahko odzovejo. Delovni tok, ki se v zapisku zdi smiseln, lahko na telefonu ali v skladišču takoj pokaže resnično trenje.

To je dobra stran dema. Nevarna stran pa je, da ljudje, ko prototip enkrat obstaja, pogosto začnejo njegovo vedenje obravnavati kot produktno resnico.

## Zakaj prototipi postanejo naključna avtoriteta

Vidne stvari so prepričljive. Delujoč zaslon pogosto dobi več neformalne avtoritete kot zapisano pravilo, tudi če je bil zgrajen samo kot eksperiment.

Demo lahko prikazuje:

- hiter način preizkusa poteka
- začasen kompromis
- poenostavljeno lokalno implementacijo
- nedokončano interpretacijo nameravanega izdelka

Nič od tega še ne pomeni, da mora demo redefinirati izdelek.

## Kdaj je demo dober dokaz

Demo je koristen, ko pomaga odgovoriti na vprašanja, kot so:

- ali je potek uporaben
- ali mobilni zaslon podpira resnično nalogo
- ali je tok skeniranja razumljiv
- kako se uporabniki odzovejo na zaporedje korakov

Takrat je demo dokaz o uporabnosti, izvedljivosti in komunikaciji.

## Kdaj demo ni avtoriteta

Demo ne bi smel tiho preglasiti produktne specifikacije. Ni pravi glavni odgovor na vprašanja, kot so:

- ali je ta tok uradno v obsegu
- ali je to začasen bližnjica ali produktna zaveza
- ali to vedenje razveljavlja obstoječe pravilo
- ali naj javna dokumentacija to opiše kot ciljni sistem

Na taka vprašanja mora odgovoriti izrecna odločitev in posodobitev dokumentacije.

## Pravilo Let Books je dober model

Repozitorij že določa zdravo pravilo: javno pisanje naj uporablja specifikacije in dokumentacijo kot kanoničen dokaz, demo ali aplikacijsko vedenje pa se lahko omenja kot stanje implementacije.

To preprečuje, da bi prototip po naključju postal način upravljanja izdelka.

## Zakaj je to še pomembnejše z AI

AI okrepi tisto, kar je trenutno najbolj konkretno. Če je najbolj konkreten artefakt demo, bodo pomočniki in ljudje njegovo vedenje hitro kopirali, ne da bi vprašali, ali se ujema s produktnimi mejami.

Zato ekipe potrebujejo viden red avtoritete:

1. produktna specifikacija
2. implementacijska navodila
3. dokumentacija trenutnega stanja
4. demo ali prototip
5. testi in validacija

## Trajna lekcija

Demo je dragocen, ker naredi produktne ideje preizkusljive. Nevaren pa postane, ko tiho postane politika. Zdrav model je preprost: naj demo informira izdelek, naj pa specifikacije in dokumentacija zapišejo končno odločitev.

## Drugi jeziki

- [English](../en/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
