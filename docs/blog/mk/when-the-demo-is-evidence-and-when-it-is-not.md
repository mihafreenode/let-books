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
title: Кога демото е доказ, а кога не е
summary: Како да се користат демоа и прототипи како корисни докази за имплементација, без тивко да станат продуктна спецификација.
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
  - ../../sources/mk/when-the-demo-is-evidence-and-when-it-is-not.md
status: draft
---

# Кога демото е доказ, а кога не е

Демото е моќно затоа што апстрактните идеи ги претвора во нешто на кое луѓето можат да реагираат. Текот на работа што во белешка изгледа разумно може на телефон или во складиште веднаш да покаже вистинско триење.

Тоа е добрата страна на демото. Опасната страна е што кога прототипот еднаш постои, луѓето често почнуваат неговото однесување да го третираат како продуктна вистина.

## Зошто прототипите стануваат случаен авторитет

Видливите работи се убедливи. Екран што работи често добива повеќе неформален авторитет од запишано правило, дури и кога настанал само како експеримент.

Демото може да прикажува:

- брз начин за тестирање тек
- привремен компромис
- поедноставена локална имплементација
- недовршена интерпретација на наменетиот производ

Ништо од тоа само по себе не значи дека демото треба да го редефинира производот.

## Кога демото е добар доказ

Демото е корисно кога помага да се одговори на прашања како:

- дали текот е употреблив
- дали мобилниот распоред ја поддржува вистинската задача
- дали текот на скенирање е разбирлив
- како корисниците реагираат на редоследот на чекори

Тогаш демото е доказ за употребливост, изводливост и комуникација.

## Кога демото не е авторитет

Демото не треба тивко да ја надвладее продуктната спецификација. Тоа не е главниот одговор на прашања како:

- дали овој тек е официјално во обемот
- дали тоа е привремена кратенка или продуктна обврска
- дали тоа однесување поништува постоечко правило
- дали јавната документација треба да го опише како целен систем

На такви прашања мора да одговори изречна одлука и ажурирање на документацијата.

## Правилото на Let Books е добар модел

Складиштето веќе поставува здраво правило: јавното пишување треба да користи спецификации и документација како канонски доказ, а демо или однесувањето на апликацијата може да се спомене како статус на имплементација.

Тоа спречува прототипот случајно да стане начин на управување со производот.

## Зошто ова е уште поважно со AI

AI го засилува она што моментално е најконкретно. Ако најконкретниот артефакт е демо, помошниците и луѓето брзо ќе го копираат неговото однесување без прашање дали тоа одговара на продуктните граници.

Затоа тимовите треба да имаат видлив ред на авторитет:

1. продуктна спецификација
2. имплементациски насоки
3. документација за тековна состојба
4. демо или прототип
5. тестови и валидација

## Трајна лекција

Демото е вредно затоа што ги прави продуктните идеи проверливи. Станува опасно кога тивко станува политика. Здравиот модел е едноставен: нека демото го информира производот, но спецификациите и документацијата нека ја запишат конечната одлука.

## Други јазици

- [English](../en/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Slovenščina](../sl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Hrvatski](../hr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Bosanski](../bs/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Srpski (latinica)](../sr-Latn/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Српски (ћирилица)](../sr-Cyrl/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Shqip](../sq/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Deutsch](../de/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Italiano](../it/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Français](../fr/when-the-demo-is-evidence-and-when-it-is-not.md)
- [Español](../es/when-the-demo-is-evidence-and-when-it-is-not.md)
