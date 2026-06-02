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
title: AI neće zamijeniti prevodioce
summary: Zašto AI mijenja prevodilačke tokove rada, ali ne uklanja potrebu za ljudskom jezičkom procjenom, kulturnim kontekstom i pregledom.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/bs/ai-will-not-replace-translators.md
status: draft
---

# AI neće zamijeniti prevodioce

AI je već promijenio prevodilački rad. Može brzo proizvesti upotrebljive nacrte, proširiti pokrivenost i sniziti trošak prve faze lokalizacije. To je stvaran napredak.

To nije isto što i zamijeniti prevodioce.

## Šta ljudski prevodioci i dalje rade

Ljudski recenzenti odlučuju da li je prevod:

- dovoljno tačan za kontekst
- prirodan na ciljnom jeziku
- prikladan za osjetljivo formulisan sadržaj
- usklađen s projektnom terminologijom
- pristupačan predviđenoj publici

To nisu neobavezni završni dodiri. To je dio kvaliteta.

## Gdje AI najviše pomaže

AI je najjači kada se koristi za:

- izradu nacrta
- predlaganje alternativa
- ubrzavanje širenja glosara
- smanjenje količine neprevedenog materijala
- otkrivanje vjerovatnih nedosljednosti

## Zašto je pretjerano samopouzdanje opasno

Najveći rizik AI prevođenja nije samo greška. To je samopouzdanje bez pregleda. Mašinski generisan tekst može djelovati tečno, a ipak biti pogrešan, kulturno neusklađen ili terminološki nestabilan.

## Konkretan slovenski primjer pregleda

Koristan obrazac je prevod koji čuva opšte značenje, ali i dalje ne prolazi provjeru izvornog govornika.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Šta se promijenilo:

- negramatična modalnost ispravljena je u prirodan slovenski
- nezgrapan red riječi je normalizovan
- formulacija politike preoblikovana je iz doslovnog pridjeva u izraz prikladniji domeni

Upravo ovakvi primjeri objašnjavaju zašto je ljudski pregled i dalje važan. Značenje je bilo blizu, ali su gramatika, modalnost, terminologija i registar ipak zahtijevali korekciju izvornog govornika.

Čak i kada je opšte značenje očuvano, AI-generisani prevodi mogu zahtijevati pregled izvornog govornika kako bi se ispravile suptilne poteškoće u gramatici, modalnosti, terminologiji i registru specifičnom za domenu. Takve je poteškoće često teško otkriti samo automatizovanim metrikama kvaliteta.

## Jedan primjer za svaku kategoriju pregleda

Različite kategorije nalaza u pregledu zahtijevaju različite vrste ljudske procjene.

### Modalnost i jezik pravilnika

Izvorni AI nacrt:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Ispravka izvornog govornika:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Pouka:

- očuvano značenje nije dovoljno kada gramatika, modalnost i formulacija pravilnika izvornim govornicima i dalje zvuče pogrešno

### Optimizacija izvornog teksta za lokalizaciju

Izvorni engleski naslov:

`The hidden exclusion of English-only systems`

Poboljšani engleski naslov:

`Why English-only systems exclude people`

Pouka:

- neke lokalizacijske probleme bolje je riješiti poboljšanjem izvornog teksta nego prisiljavanjem svakog ciljnog jezika da kompenzira zgusnutu englesku formulaciju

### Lažni prijatelj u tehničkoj terminologiji

Izvorna engleska fraza:

`benchmark fixtures`

Netačna slovenska lokalizacija:

`primerjalne napeljave`

Poboljšana slovenska lokalizacija:

`referenčni primeri za primerjalno vrednotenje`

Pouka:

- tehničke termine treba prevoditi prema domenskom značenju; u kontekstima testiranja i vrednovanja `fixture` znači višekratno upotrebljiv referentni primjer ili testni slučaj, a ne fizičku infrastrukturu

## Trajna pouka

Budućnost nije prevodilac protiv AI-ja. Praktična budućnost je lokalizacija potpomognuta AI-jem s jasnim fazama pregleda i transparentnim očekivanjima kvaliteta.

## Povezane stranice

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Drugi jezici

Engleski je kanonski jezik prvog izdanja ovog članka. Putanje spremne za prevođenje rezervisane su za sve podržane lokalizacije projekta Let Books.
