---
article_id: documentation-is-part-of-the-product
canonical_language: en
language_variants:
  - ../en/documentation-is-part-of-the-product.md
  - ../sl/documentation-is-part-of-the-product.md
  - ../hr/documentation-is-part-of-the-product.md
  - ../bs/documentation-is-part-of-the-product.md
  - ../sr-Latn/documentation-is-part-of-the-product.md
  - ../sr-Cyrl/documentation-is-part-of-the-product.md
  - ../mk/documentation-is-part-of-the-product.md
  - ../sq/documentation-is-part-of-the-product.md
  - ../de/documentation-is-part-of-the-product.md
  - ../it/documentation-is-part-of-the-product.md
  - ../fr/documentation-is-part-of-the-product.md
  - ../es/documentation-is-part-of-the-product.md
title: Документација је део производа
summary: Зашто документацију треба третирати као оперативно средство које обликује имплементацију, преглед, увођење и поверење у производ, а не као накнадно сређивање после кодирања.
topics:
  - documentation
  - spec-driven-development
  - product-quality
  - ai-assisted-delivery
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/style-guide/writing/README.md
  - docs/style-guide/publishing/README.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/sr-Cyrl/documentation-is-part-of-the-product.md
status: draft
---

# Документација је део производа

Многи тимови и даље говоре о документацији као да почиње тек после правог посла. Најпре се производ изгради, а затим неко напише шта се догодило. Тај модел је био слаб и пре развоја уз помоћ AI-ја. Са AI-јем постаје стварни ризик.

Када се код, текст, интерфејси и токови рада могу генерисати веома брзо, документација више није само накнадни слој. Постаје део механизма који одржава производ кохерентним.

## Зашто је то сада још важније

AI може да генерише имплементацију из непотпуне намере. То се често представља као практичност. У пракси то значи да свака нејасноћа у пројекту постаје место на којем производ може да одлута.

Ако је документација слаба или застарела, различити људи и различити алати из истог репозиторијума закључиће да постоје различити производи.

## Документација обавља четири производна посла

Документација:

- носи намеру
- поставља очекивања
- смањује трошак усклађивања
- подржава поверење

Говори сарадницима, институцијама, рецензентима и AI помоћницима шта пројекат покушава да постигне и у шта не би смео да се претвори.

## Let Books је већ структуриран тако

У репозиторијуму Let Books:

- `AGENTS.md` дефинише производну намеру и токове рада
- `AGENTS-Implementation.md` дефинише тактичка правила извођења
- `README.md` поштено описује тренутно стање
- `docs/` дефинише правила објаве, писања, локализације и доказа

То значи да документација овде није само објашњење. Она је део начина рада пројекта.

## Застарела документација је производни дуг

Застарела документација води до:

- погрешних имплементационих претпоставки
- понављања већ донетих одлука
- дема који случајно постаје производна истина
- споријег увођења нових сарадника
- тежег прегледа јер стандард није јасан

У AI-подржаним токовима тај се дуг гомила још брже јер помоћници веома добро настављају из оближњих, чак и застарелих претпоставки.

## Документација и имплементација морају чинити ланац

Прави модел није крута шема „најпре документација, затим код“. Прави модел је одржавани ланац:

- спецификације дефинишу намеру
- документи тренутног стања објашњавају шта постоји сада
- демо и имплементација чине ток конкретним
- тестови и валидација проверавају очекивања
- CI одржава одступање видљивим

Ако се промени једна карика, треба прегледати и околне.

## Трајна лекција

Документација није одвојена од квалитета производа. Она обликује имплементацију, преглед, комуникацију, валидацију и дугорочно поверење. У AI-подржаним пројектима документација је део производа јер је део система који спречава производни одмак.

## Други језици

- [English](../en/documentation-is-part-of-the-product.md)
- [Slovenščina](../sl/documentation-is-part-of-the-product.md)
- [Hrvatski](../hr/documentation-is-part-of-the-product.md)
- [Bosanski](../bs/documentation-is-part-of-the-product.md)
- [Srpski (latinica)](../sr-Latn/documentation-is-part-of-the-product.md)
- [Македонски](../mk/documentation-is-part-of-the-product.md)
- [Shqip](../sq/documentation-is-part-of-the-product.md)
- [Deutsch](../de/documentation-is-part-of-the-product.md)
- [Italiano](../it/documentation-is-part-of-the-product.md)
- [Français](../fr/documentation-is-part-of-the-product.md)
- [Español](../es/documentation-is-part-of-the-product.md)
