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
title: AI neće zamijeniti prevoditelje
summary: Zašto AI mijenja prevoditeljske tijekove rada, ali ne uklanja potrebu za ljudskom jezičnom prosudbom, kulturnim kontekstom i pregledom.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/hr/ai-will-not-replace-translators.md
status: draft
---

# AI neće zamijeniti prevoditelje

AI je već promijenio prevoditeljski rad. Može brzo proizvesti upotrebljive nacrte, proširiti pokrivenost i sniziti trošak prve faze lokalizacije. To je stvaran napredak.

To nije isto što i zamijeniti prevoditelje.

## Što ljudski prevoditelji i dalje rade

Ljudski recenzenti odlučuju je li prijevod:

- dovoljno točan za kontekst
- prirodan na ciljnom jeziku
- primjeren za osjetljiv način izražavanja
- usklađen s projektnom terminologijom
- pristupačan predviđenoj publici

To nisu neobavezni završni dodiri. To je dio kvalitete.

## Gdje AI najviše pomaže

AI je najjači kada se koristi za:

- izradu nacrta
- predlaganje alternativa
- ubrzavanje širenja glosara
- smanjenje količine neprevedenog materijala
- otkrivanje vjerojatnih nedosljednosti

## Zašto je pretjerano samopouzdanje opasno

Najveći rizik AI prevođenja nije samo pogreška. To je samopouzdanje bez pregleda. Strojno generirani tekst može djelovati tečno, a ipak biti pogrešan, kulturno neprikladan ili terminološki nestabilan.

## Konkretan slovenski primjer pregleda

Koristan obrazac je prijevod koji čuva opće značenje, ali i dalje ne prolazi provjeru izvornog govornika.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Što se promijenilo:

- negramatična modalnost ispravljena je u prirodan slovenski
- nespretan red riječi je normaliziran
- formulacija pravila preoblikovana je iz doslovnog pridjeva u izraz prikladniji domeni

Upravo ovakvi primjeri objašnjavaju zašto je ljudski pregled i dalje važan. Značenje je bilo blizu, ali su gramatika, modalnost, terminologija i registar ipak zahtijevali korekciju izvornog govornika.

Čak i kada je opće značenje očuvano, AI-generirani prijevodi mogu zahtijevati pregled izvornog govornika kako bi se ispravile suptilne poteškoće u gramatici, modalnosti, terminologiji i registru specifičnom za domenu. Takve je poteškoće često teško otkriti samo automatiziranim metrikama kvalitete.

## Jedan primjer za svaku kategoriju pregleda

Različite kategorije nalaza u pregledu zahtijevaju različite vrste ljudske prosudbe.

### Modalnost i jezik pravilnika

Izvorni AI nacrt:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Ispravak izvornog govornika:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Pouka:

- očuvano značenje nije dovoljno kada gramatika, modalnost i formulacija pravilnika izvornim govornicima i dalje zvuče pogrešno

### Optimizacija izvornog teksta za lokalizaciju

Izvorni engleski naslov:

`The hidden exclusion of English-only systems`

Poboljšani engleski naslov:

`Why English-only systems exclude people`

Pouka:

- neke lokalizacijske probleme bolje je riješiti poboljšanjem izvornog teksta nego prisiljavanjem svakog ciljnog jezika da kompenzira zbijenu englesku formulaciju

### Lažni prijatelj u tehničkoj terminologiji

Izvorna engleska fraza:

`benchmark fixtures`

Neispravna slovenska lokalizacija:

`primerjalne napeljave`

Poboljšana slovenska lokalizacija:

`referenčni primeri za primerjalno vrednotenje`

Pouka:

- tehničke termine treba prevoditi prema domenskom značenju; u kontekstima testiranja i vrednovanja `fixture` znači ponovno upotrebljiv referentni primjer ili testni slučaj, a ne fizičku infrastrukturu

## Trajna pouka

Budućnost nije prevoditelj protiv AI-ja. Praktična budućnost je lokalizacija potpomognuta AI-jem s jasnim fazama pregleda i transparentnim očekivanjima kvalitete.

## Povezane stranice

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Drugi jezici

Engleski je kanonski jezik prvog izdanja ovog članka. Putanje spremne za prijevod rezervirane su za sve podržane lokalizacije projekta Let Books.
