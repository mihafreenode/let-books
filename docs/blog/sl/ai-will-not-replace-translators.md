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
title: AI ne bo nadomestila prevajalcev
summary: Zakaj AI spreminja prevajalske poteke dela, vendar ne odpravlja potrebe po človeški jezikovni presoji, kulturnem kontekstu in pregledu.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/sl/ai-will-not-replace-translators.md
status: draft
---

# AI ne bo nadomestila prevajalcev

AI je že spremenila prevajalsko delo. Hitro lahko pripravi uporabne osnutke, razširi pokritost in zniža stroške prvega prehoda lokalizacije. To je resničen napredek.

To pa ni isto kot nadomestitev prevajalcev.

## Kaj človeški prevajalci še vedno počnejo

Človeški pregledovalci presodijo, ali je prevod:

- dovolj natančen za dani kontekst
- naraven v ciljnem jeziku
- primeren za občutljivo besedilo
- skladen s projektno terminologijo
- dostopen za predvideno občinstvo

To niso neobvezni zaključni popravki. To je del kakovosti.

## Kje AI najbolj pomaga

AI je najmočnejša, kadar se uporablja za:

- pripravo osnutkov
- predlaganje alternativ
- pospeševanje širjenja glosarjev
- zmanjševanje količine neprevedenega gradiva
- odkrivanje verjetnih nedoslednosti

## Zakaj je pretirana samozavest nevarna

Največje tveganje pri AI-prevajanju ni samo napaka. To je samozavest brez pregleda. Strojno ustvarjeno besedilo je lahko videti tekoče, pa je še vedno napačno, kulturno neustrezno ali terminološko nestabilno.

## Konkreten slovenski primer pregleda

Uporaben vzorec je prevod, ki ohrani splošni pomen, vendar še vedno ne prestane pregleda naravnega govorca.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Kaj se je spremenilo:

- negramatična modalnost je bila popravljena v naravno slovenščino
- neroden besedni red je bil normaliziran
- besedilo politike je bilo preoblikovano iz dobesednega pridevnika v domeni primernejšo formulacijo

To je natanko tak primer, ki pokaže, zakaj je človeški pregled še vedno pomemben. Pomen je bil blizu, vendar so slovnica, modalnost, terminologija in register še vedno zahtevali popravek naravnega govorca.

Tudi kadar je splošni pomen ohranjen, lahko AI-ustvarjeni prevodi zahtevajo pregled naravnega govorca za popravljanje subtilnih težav v slovnici, modalnosti, terminologiji in za domeno značilnem registru. Takšne težave je pogosto težko zaznati samo z avtomatiziranimi merili kakovosti.

## En primer za vsako vrsto pregleda

Različne vrste ugotovitev pri pregledu zahtevajo različne vrste človeške presoje.

### Modalnost in jezik pravilnikov

Izvorni AI-osnutek:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Popravek naravnega govorca:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Nauk:

- ohranjen pomen ni dovolj, kadar slovnica, modalnost in jezik pravilnikov naravnim govorcem še vedno zvenijo napačno

### Izboljšanje izvornega besedila za lokalizacijo

Izvorni angleški naslov:

`The hidden exclusion of English-only systems`

Izboljšani angleški naslov:

`Why English-only systems exclude people`

Nauk:

- nekatere težave pri lokalizaciji je bolje rešiti z izboljšanjem izvornega besedila, namesto da vsak ciljni jezik kompenzira preveč zgoščeno angleško formulacijo

### Tehnični termin in lažni prijatelj

Izvorna angleška besedna zveza:

`benchmark fixtures`

Napačna slovenska lokalizacija:

`primerjalne napeljave`

Izboljšana slovenska lokalizacija:

`referenčni primeri za primerjalno vrednotenje`

Nauk:

- tehnične izraze je treba prevajati po strokovnem pomenu; v kontekstih testiranja in vrednotenja `fixture` pomeni ponovno uporaben referenčni primer ali testni primer, ne fizične infrastrukture

## Trajna ugotovitev

Prihodnost ni prevajalec proti AI. Praktična prihodnost je lokalizacija, podprta z AI, z jasnimi fazami pregleda in preglednimi pričakovanji glede kakovosti.

## Sorodne strani

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Drugi jeziki

Angleščina je kanonični jezik prve objave za ta članek. Poti za prevode so rezervirane za vse podprte lokalizacije projekta Let Books.
