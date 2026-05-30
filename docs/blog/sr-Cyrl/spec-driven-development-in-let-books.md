---
article_id: spec-driven-development-in-let-books
canonical_language: sr-Cyrl
language_variants:
  - ../en/spec-driven-development-in-let-books.md
  - ../sl/spec-driven-development-in-let-books.md
  - ../hr/spec-driven-development-in-let-books.md
  - ../bs/spec-driven-development-in-let-books.md
  - ../sr-Latn/spec-driven-development-in-let-books.md
  - ../sr-Cyrl/spec-driven-development-in-let-books.md
  - ../mk/spec-driven-development-in-let-books.md
  - ../sq/spec-driven-development-in-let-books.md
  - ../de/spec-driven-development-in-let-books.md
  - ../it/spec-driven-development-in-let-books.md
  - ../fr/spec-driven-development-in-let-books.md
  - ../es/spec-driven-development-in-let-books.md
title: Развој вођен спецификацијом у Let Books
summary: Како Let Books већ користи спецификацију, имплементациона упутства, документацију, ограничења дема и правила провере као систем развоја вођеног спецификацијом.
topics:
  - spec-driven-development
  - let-books
  - documentation
  - demo-alignment
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/blog/README.md
  - docs/sources/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/sr-Cyrl/spec-driven-development-in-let-books.md
status: draft
---

# Развој вођен спецификацијом у Let Books

Let Books је користан студијски пример развоја вођеног спецификацијом јер репозиторијум већ садржи више слојева производне намере, а не само имплементационе артефакте.

Пројекат још није пуна хостована апликација. Тренутно укључује производну спецификацију, имплементациона упутства, јавну документацију и локални статични демо. Због тога је добар пример како пројекат може остати усклађен и пре него што постоји коначни продукциони стек.

## Слој спецификације

`AGENTS.md` је језгро производне спецификације. Дефинише сврху пројекта, домен, токове рада, границе обима, смер локализације, приватност, необавезност AI-ја и критеријуме прихватања.

Одговара на питања као што су:

- зашто пројекат постоји
- који су токови рада првокласни
- шта мора да ради без AI-ја
- шта су будуће идеје, а не садашње обавезе
- шта се рачуна као успешан први демо

То је разлика између општег описа и праве спецификације. Права спецификација ограничава имплементационе изборе.

## Слој тактичких упутстава

`AGENTS-Implementation.md` додаје други слој. Не замењује производну спецификацију, него објашњава како рад у овом репозиторијуму сада треба да се изводи.

Ту спадају правила о јавном именовању, документацији, статичком сајту, локализацији, провери и доказној политици за јавно писање. То је важно јер нису сва правила производна истина. Нека су тактичка, уредничка или специфична за репозиторијум.

## Слој тренутног стања

`README.md` представља трећи слој: поштен опис тренутног стања.

Он објашњава шта данас постоји, чега још нема, чему служи статични демо и како је јавни сајт објављен. То помаже сарадницима, институцијама и рецензентима да не мешају амбицију са имплементацијом.

## Слој документације

`docs/` додаје четврти слој. `docs/README.md`, `docs/Development.md`, `docs/Deployment.md` и стилски водичи одређују како знање треба да буде организовано, објављено и проверено.

Ту репозиторијум постаје више од збирке датотека. Постаје платформа знања са:

- архитектуром документације
- правилима уредничких доказа
- вишејезичном издавачком структуром
- правилима објаве и провере

## Слој дема

Статични демо је важан, али намерно није једина ауторитет. Правила за блог и изворе већ разликују каноничну документацију од статуса имплементације.

То значи да демо може проверавати токове рада, откривати проблеме употребљивости и помагати у објашњавању спољним актерима, а да притом сам од себе не постане коначна производна истина.

## Слој провере

Let Books већ документује и начин размишљања о провери. `docs/Development.md` и `docs/Deployment.md` описују димне тестове локализације, валидацију структурираних датотека, генерисање метаподатака, обавезне датотеке, правописне провере и аутоматизовану објаву.

То нису само детаљи о алатима. То је доказ да пројекат квалитет третира као поновљив систем.

## Главна лекција

Развој вођен спецификацијом не значи само написати дугачак документ пре кодирања. У пракси значи изградити поуздан ланац између производне намере, тактичких правила, јавне документације, дема, провере и објаве.

Let Books показује да такав ланац може постојати и пре пуне backend апликације. Управо је то једна од најјачих предности развоја вођеног спецификацијом у AI-подржаном раду.

## Други језици

- [English](../en/spec-driven-development-in-let-books.md)
- [Slovenščina](../sl/spec-driven-development-in-let-books.md)
- [Hrvatski](../hr/spec-driven-development-in-let-books.md)
- [Bosanski](../bs/spec-driven-development-in-let-books.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-in-let-books.md)
- [Македонски](../mk/spec-driven-development-in-let-books.md)
- [Shqip](../sq/spec-driven-development-in-let-books.md)
- [Deutsch](../de/spec-driven-development-in-let-books.md)
- [Italiano](../it/spec-driven-development-in-let-books.md)
- [Français](../fr/spec-driven-development-in-let-books.md)
- [Español](../es/spec-driven-development-in-let-books.md)
