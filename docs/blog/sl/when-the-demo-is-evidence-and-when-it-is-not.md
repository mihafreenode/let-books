---
article_id: when-the-demo-is-evidence-and-when-it-is-not
canonical_language: en
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

Demonstracije so močne zato, ker abstraktne ideje spremenijo v nekaj, na kar se ljudje lahko odzovejo. Delovni tok, ki se v načrtovalnem zapisku zdi smiseln, lahko pokaže resnično trenje že v trenutku, ko ga nekdo preizkusi na telefonu, v skladišču ali pod časovnim pritiskom.

To je dobra stran demonstracij.

Nevarna stran pa je, da ljudje, ko prototip enkrat obstaja, pogosto začnejo z njim ravnati kot s produktno resnico, ne glede na to, ali je kdo to odločitev sploh uradno sprejel.

## Zakaj prototipi postanejo naključna avtoriteta

Vidne stvari so prepričljive. Delujoč zaslon pogosto dobi več neformalne avtoritete kot zapisano pravilo, tudi če je bil zgrajen samo kot eksperiment.

To je razumljivo. Ljudje zaupajo temu, kar lahko vidijo.

Toda pri produktnem delu, še posebej pri produktnem delu z AI-podporo, lahko tak instinkt hitro ustvari zmedo.

Demo lahko prikazuje:

- hiter način preizkusa poteka
- začasen kompromis
- poenostavljeno lokalno implementacijo
- nedokončano interpretacijo nameravanega izdelka

Nič od tega še ne pomeni, da mora demo redefinirati izdelek.

## Kdaj je demo dober dokaz

Demo je koristen dokaz, kadar pomaga odgovoriti na vprašanja, kot so:

- ali je potek uporaben
- ali mobilni zaslon podpira resnično nalogo
- ali je tok skeniranja ali vnosa razumljiv
- ali se uporabniki na zaporedje korakov odzivajo pozitivno ali negativno

V takih primerih je demo dokaz o uporabnosti, izvedljivosti, zaporedju korakov in komunikaciji.

Takšna vrsta dokaza je izjemno koristna.

## Kdaj demo ni avtoriteta

Demo ne bi smel tiho preglasiti produktne specifikacije.

Ni prava primarna avtoriteta za vprašanja, kot so:

- ali je ta tok uradno v obsegu
- ali je to začasna bližnjica ali produktna zaveza
- ali to vedenje razveljavlja obstoječe pravilo
- ali naj javna dokumentacija to opiše kot nameravani sistem

Na taka vprašanja mora odgovoriti izrecna odločitev in posodobitev dokumentacije.

## Pravilo Let Books je dober model

Repozitorij že določa zdravo pravilo: javno pisanje naj uporablja specifikacije in dokumentacijo kot kanoničen dokaz, demo ali aplikacijsko vedenje pa se lahko omenja kot stanje implementacije.

To preprečuje, da bi prototip po naključju postal način upravljanja izdelka.

Če statični demo razkrije boljši potek za škatle, boljši mobilni tok ali boljšo interakcijo pri vnosu, je to dragoceno. Toda tak boljši potek postane resnična avtoriteta šele po tem, ko se posodobijo specifikacija in povezana dokumentacija.

## Zakaj je to še pomembnejše z AI

AI okrepi tisto, kar je v trenutnem kontekstu videti najbolj konkretno.

Če je najbolj konkretna stvar v repozitoriju demo, lahko pomočniki in tudi človeški sodelavci začnejo kopirati njegovo vedenje, ne da bi vprašali, ali se to ujema z nameravano mejo produkta.

To je lahko koristno, kadar je demo že usklajen.
Lahko pa tudi hitro razširi začasne predpostavke, kadar ni.

Zato ekipe potrebujejo viden red avtoritete.

## Praktična veriga avtoritete

Za delo, kot je to, je uporaben naslednji vrstni red:

1. produktna specifikacija
2. implementacijska navodila
3. dokumentacija trenutnega stanja
4. vedenje dema ali prototipa
5. testi in validacija

Demo je še vedno pomemben. Pomemben je le znotraj dokumentiranega sistema, namesto da bi ga zamenjal.

## Kaj storiti, ko te demo nauči nekaj novega

Včasih ima prototip prav, specifikacija pa je napačna, nepopolna ali preveč abstraktna.

To ni napaka. Prav zato gradimo deme.

Pravi odziv je:

1. zabeležiti ugotovitev
2. odločiti, ali naj novo vedenje postane namerno
3. posodobiti specifikacijo in dokumentacijo
4. nato usklajenost ohranjati tudi v prihodnje

Napačen odziv je, da dokumentacija ostane nespremenjena in vsi upajo, da si bodo zapomnili, da je demo zdaj dejanski vir resnice.

## Zakaj bi to moralo zanimati institucije in študente

Institucije morajo vedeti, ali ocenjujejo koncept, prototip ali odobren model delovnega toka.

Študenti pa se morajo naučiti, da se prototipi ne utemeljijo sami od sebe. Dobra programska praksa vključuje razumevanje, kdaj implementacijo obravnavati kot dokaz in kdaj kot eksperiment, ki še čaka na odločitev.

## Trajna lekcija

Demonstracije so dragocene, ker naredijo produktne ideje preizkusljive. Nevarne pa postanejo, ko tiho postanejo politika.

Najbolj zdrav model je preprost: naj demonstracije informirajo produkt, specifikacije in dokumentacija pa naj zabeležijo končno odločitev.

## Drugi jeziki

- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [English](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
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
