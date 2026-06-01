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
title: Када је демо доказ, а када није
summary: Како користити демо и прототипе као корисне доказе имплементације, а да они тихо не постану производна спецификација.
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
  - ../../sources/sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Када је демо доказ, а када није

Демо је снажан зато што апстрактне идеје претвара у нешто на шта људи могу да реагују. Ток рада који се у белешци чини разумним може на телефону или у складишту одмах показати стварно трење.

То је добра страна дема. Опасна је та што људи, када прототип једном постоји, његово понашање често почну да третирају као производну истину.

## Зашто прототипи постају случајни ауторитет

Видљиве ствари су убедљиве. Екран који ради често добије више неформалног ауторитета од записаног правила, чак и када је настао само као експеримент.

Демо може приказивати:

- брз начин тестирања тока
- привремени компромис
- поједностављену локалну имплементацију
- недовршену интерпретацију намераваног производа

Ништа од тога само по себи не значи да демо треба да редефинише производ.

## Када је демо добар доказ

Демо је користан када помаже да се одговори на питања као што су:

- да ли је ток употребљив
- да ли мобилни распоред подржава стварни задатак
- да ли је ток скенирања разумљив
- како корисници реагују на редослед корака

Тада је демо доказ о употребљивости, изводљивости и комуникацији.

## Када демо није ауторитет

Демо не би смео тихо да надјача производну спецификацију. Није главни одговор на питања попут:

- да ли је овај ток званично у обиму
- да ли је то привремена пречица или производна обавеза
- поништава ли то понашање постојеће правило
- да ли јавна документација то треба да опише као циљни систем

На таква питања мора одговорити изричита одлука и ажурирање документације.

## Правило Let Books је добар модел

Репозиторијум већ дефинише здраво правило: јавно писање треба да користи спецификације и документацију као каноничан доказ, а демо или понашање апликације може да се помиње као статус имплементације.

То спречава да прототип случајно постане начин управљања производом.

## Зашто је то још важније са AI-јем

AI појачава оно што је тренутно најконкретније. Ако је најконкретнији артефакт демо, помоћници и људи брзо ће копирати његово понашање без питања да ли оно одговара производним границама.

Зато тимови требају видљив ред ауторитета:

1. производна спецификација
2. имплементациона упутства
3. документација тренутног стања
4. демо или прототип
5. тестови и валидација

## Трајна лекција

Демо је вредан јер чини производне идеје проверљивим. Опасан постаје када тихо постане политика. Здрав модел је једноставан: нека демо информише производ, али нека спецификације и документација забележе коначну одлуку.

## Други језици

- [English](../en/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Македонски](../mk/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
