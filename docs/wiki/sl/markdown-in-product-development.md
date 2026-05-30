---
title: "Markdown v razvoju izdelka"
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown v razvoju izdelka

## Povzetek

Markdown je praktičen format za shranjevanje produktnega namena, dokumentacije, navodil in dokazov v obliki, ki jo je mogoče pregledovati, prenašati, primerjati v razlikah in povezovati z validacijskimi poteki.

## Zakaj je Markdown pomemben

Markdown se pogosto obravnava kot priročen format za pisanje. V razvoju na podlagi specifikacij je uporabnejši od tega.

Ekipam omogoča lahek način, da produktno znanje ostane blizu repozitorija, ne da bi bilo skrito v lastniških orodjih ali težko pregledljivih dokumentih.

To je pomembno za:

- specifikacije
- implementacijska navodila
- dokumentacijo trenutnega stanja
- vadnice in wiki strani
- zemljevide virov in opombe o dokazih

## Kaj Markdown dela dobro

Markdown dobro deluje, kadar mora biti vsebina:

- berljiva v surovi obliki
- pod nadzorom različic
- enostavna za pregled v razlikah
- povezljiva med dokumenti
- prenosljiva med okolji

## Kaj Markdown ne naredi sam od sebe

Markdown je uporaben, vendar sam ne zagotavlja pravilnosti.

Sam po sebi ne more zagotoviti:

- da je vsebina aktualna
- da so trditve dobro podprte z viri
- da se implementacija ujema z dokumentacijo
- da pravila validacije ali CI dejansko tečejo

## Kontekst Let Books

Repozitorij Let Books že uporablja Markdown za več plasti produktnega spomina, med drugim:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- področne README-je in vodiče v dokumentaciji
- zemljevide virov v `docs/sources/`
