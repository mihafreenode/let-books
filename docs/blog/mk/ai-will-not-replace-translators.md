---
article_id: ai-will-not-replace-translators
canonical_language: en
language_variants:
  - ../en/ai-will-not-replace-translators.md
  - ../sl/ai-will-not-replace-translators.md
  - ../hr/ai-will-not-replace-translators.md
  - ../bs/ai-will-not-replace-translators.md
  - ../sr-Latn/ai-will-not-replace-translators.md
  - ../sr-Cyrl/ai-will-not-replace-translators.md
  - ../mk/ai-will-not-replace-translators.md
  - ../sq/ai-will-not-replace-translators.md
  - ../de/ai-will-not-replace-translators.md
  - ../it/ai-will-not-replace-translators.md
  - ../fr/ai-will-not-replace-translators.md
  - ../es/ai-will-not-replace-translators.md
title: AI нема да ги замени преведувачите
summary: Зошто AI ги менува преведувачките работни текови, но не ја отстранува потребата од човечка јазична проценка, културен контекст и преглед.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/mk/ai-will-not-replace-translators.md
status: draft
---

# AI нема да ги замени преведувачите

AI веќе ја промени преведувачката работа. Може брзо да создаде употребливи нацрти, да ја прошири покриеноста и да ја намали цената на првиот чекор на локализација. Тоа е вистински напредок.

Тоа не е исто што и замена на преведувачите.

## Што човечките преведувачи сè уште прават

Човечките рецензенти одлучуваат дали преводот е:

- доволно точен за контекстот
- природен на целниот јазик
- соодветен за чувствително формулирање
- усогласен со проектната терминологија
- пристапен за наменетата публика

Ова не се изборни завршни допири. Ова е дел од квалитетот.

## Каде AI најмногу помага

AI е најсилна кога се користи за:

- создавање нацрти
- предлагање алтернативи
- забрзување на проширувањето на глосари
- намалување на количината непреведен материјал
- откривање веројатни недоследности

## Зошто претераната самоувереност е опасна

Најголемиот ризик кај AI преводот не е само грешката. Тоа е самоувереност без преглед. Машински генерираниот текст може да изгледа течно, а сепак да биде погрешен, културно несоодветен или терминолошки нестабилен.

## Конкретен словенечки пример за преглед

Корисен образец е превод што го зачувува општото значење, но сепак не поминува квалитетен преглед од изворен говорител.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Што се промени:

- неграматичката модалност беше исправена во природен словенечки
- незгодниот редослед на зборови беше нормализиран
- формулацијата на политиката беше преработена од буквална придавка во израз посоодветен за доменот

Токму ваквите примери објаснуваат зошто човечкиот преглед сè уште е важен. Значењето беше блиску, но граматиката, модалноста, терминологијата и регистарот сепак бараа корекција од изворен говорител.

Дури и кога општото значење е зачувано, AI-генерираните преводи може да бараат преглед од изворен говорител за да се поправат суптилни проблеми во граматиката, модалноста, терминологијата и доменскиот регистар. Таквите проблеми често тешко се откриваат само со автоматизирани метрики за квалитет.

## Еден пример за секоја категорија на преглед

Различните категории на наоди при преглед бараат различни видови човечка проценка.

### Модалност и јазик на правилата

Изворен AI нацрт:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Исправка од изворен говорител:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Поука:

- зачуваното значење не е доволно кога граматиката, модалноста и формулацијата на правилата сè уште звучат погрешно за изворните говорители

### Оптимизација на изворниот текст за локализација

Изворен англиски наслов:

`The hidden exclusion of English-only systems`

Подобрен англиски наслов:

`Why English-only systems exclude people`

Поука:

- некои локализациски проблеми е подобро да се решат со подобрување на изворниот текст отколку со принудување секој целен јазик да компензира за збиена англиска формулација

### Лажен пријател во техничката терминологија

Изворна англиска фраза:

`benchmark fixtures`

Неточна словенечка локализација:

`primerjalne napeljave`

Подобрена словенечка локализација:

`referenčni primeri za primerjalno vrednotenje`

Поука:

- техничките термини треба да се преведуваат според доменското значење; во контексти на тестирање и вреднување `fixture` значи повторно употреблив референтен пример или тест-случај, а не физичка инфраструктура

## Трајна поука

Иднината не е преведувач против AI. Практичната иднина е локализација поддржана со AI, со јасни фази на преглед и транспарентни очекувања за квалитет.

## Поврзани страници

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Други јазици

Англискиот е канонски јазик на првото издание на овој напис. Патеките подготвени за превод се резервирани за сите поддржани локализации на проектот Let Books.
