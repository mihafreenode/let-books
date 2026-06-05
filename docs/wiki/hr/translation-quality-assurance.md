---
title: "Osiguranje kvalitete prijevoda"
summary: >-
  QA prijevoda kombinira automatiziranu validaciju, provjeru pravopisa, terminološki pregled, provjere pristupačnosti i ljudsku prosudbu.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvalitete prijevoda

## Sažetak

QA prijevoda kombinira automatiziranu validaciju, provjeru pravopisa, terminološki pregled, provjere pristupačnosti i ljudsku prosudbu.

## Uobičajene provjere

- nedostajući prijevodi
- curenje engleskog jezika
- cjelovitost lokalizacije okrenute čitatelju
- strukturni paritet prema svježe generiranom izlazu
- čitljivost na materinskom jeziku i prirodan izraz
- nepodudaranja rezerviranih mjesta
- pokvarene poveznice
- odstupanje od glosara
- pokrivenost tekstom pristupačnosti
- paritet snimaka zaslona i dijagrama

## Zahtjev za svježe generirani izlaz

Prije pregleda strukturnog pariteta, semantičkog pregleda ili ručne usporedbe članaka:

1. ponovno generirajte web-mjesto iz trenutačnog stanja repozitorija
2. pokrenite validatore nad trenutačnim generiranim izlazom
3. pregledajte generirane HTML artefakte
4. tek tada provedite ručnu procjenu pariteta

Ovo pravilo postoji zato što izvorni Markdown i generirani izlaz mogu privremeno odstupati tijekom razvoja, a QA nalazi trebaju se temeljiti na trenutačnim artefaktima, a ne na zastarjelim generiranim datotekama.

## Pregled strukturnog pariteta

Pregled strukturnog pariteta treba tražiti gubitak vrijednosti za čitatelja čak i kada lokalizirani članak još uvijek općenito čuva značenje.

Tipični signali uključuju:

- nedostajuće glavne odjeljke
- urušenu hijerarhiju naslova
- nedostajuće primjere
- sažete praktične upute
- smanjenu raspravu o upravljanju
- skraćene upute za pregled ili validaciju

Upozorenja validatora strukturnog pariteta poticaji su za pregled, a ne automatski dokaz lošeg prijevoda. Treba ih tumačiti zajedno s generiranim HTML-om i, po potrebi, s izlazom renderiranim u pregledniku.

## Pregled izraza na materinskom jeziku

QA prijevoda treba tražiti i tekst koji je tehnički točan, ali nije ono što bi izvorni govornik prirodno odabrao.

To uključuje:

- izravnu englesku rečeničnu strukturu
- izravan prijevod engleskih idioma
- formulacije koje zvuče prevedeno umjesto autorski napisano
- terminologiju koja i dalje otkriva izvorni jezik

Primjeri takvog obrasca uključuju izraze ekvivalentne sljedećem:

- kandidatni sadržaj
- strategija validacije
- artefakt tijeka rada
- kurirani alati
- kurirane vještine

To nisu uvijek prevoditeljske pogreške. Često su to slučajevi u kojima bi izvorni govornik instinktivno preoblikovao rečenicu.

## Test preferencije izvornog govornika

Za važne prozne odjeljke recenzenti bi se trebali zapitati:

> Kada bi kompetentan izvorni govornik ovu ideju pisao od nule, bi li je vjerojatno ovako napisao?

Ako ne, recenzenti bi trebali:

- sačuvati značenje
- sačuvati semantički paritet
- sačuvati strukturni paritet
- poboljšati formulaciju

Ovaj je test posebno koristan za:

- uvode
- sažetke
- obrazovna objašnjenja
- praktične upute
- rasprave o upravljanju
- zaključke

## Pregled prirodnog izražavanja

Tretirajte tehnički točnu, ali neprirodnu formulaciju kao problem kvalitete.

Recenzenti bi trebali dati prednost formulacijama koje zvuče prirodno napisano na ciljnom jeziku, čak i kada je izvorni prijevod razumljiv.

Cilj nije samo točan prijevod. Cilj je dokument koji djeluje kao da je izvorno napisan za izvorne čitatelje.

Poboljšanja prirodnog jezika ne smiju oslabiti:

- semantički paritet
- strukturni paritet
- obrazovnu pokrivenost
- primjere
- praktične upute
- smjernice upravljanja

## Validator lokalizacije okrenut čitatelju

Jedna klasa validatora trebala bi izričito srušiti CI kada stranica izgleda lokalizirano, ali i dalje izlaže sadržaj okrenut čitatelju na izvornom jeziku.

Primjeri koji bi trebali pasti:

- lokalizirani naslov s engleskim sažetkom
- lokalizirani članak s engleskim oznakama
- lokalizirani članak s engleskim naslovima ili popisima
- lokalizirani članak s engleskim istaknutim okvirima ili natpisima
- lokalizirani članak s engleskim oznakama dijagrama ili alternativnim tekstom
- kartice `related-content` na miješanim jezicima

Ovo je uvjet pada, a ne samo upozorenje, jer čitatelji takve stranice doživljavaju kao vidljivo nedovršene.

## Revizija klasa pogrešaka

QA prijevoda treba održavati eksplicitne klase pogrešaka sa sljedećim poljima:

- opis
- broj pojavljivanja
- glavni uzrok
- pokrivenost validatorom
- rizik ponavljanja
- plan zatvaranja

Obvezne kategorije uključuju:

- neprevedene sažetke
- neprevedena tijela teksta
- objavu nacrta rezerviranih mjesta
- neprevedene metapodatke
- objavu na miješanim jezicima
- buduće otkrivene klase

Klasa je zatvorena tek kada broj pojavljivanja dosegne nulu i kada CI spriječi njezin povratak bez pada.

## Dokazi ljudskog pregleda

QA prijevoda također treba čuvati kratke zapise ljudskog pregleda za reprezentativne korekcije uz pomoć AI-ja.

Minimalna polja:

- izvorni tekst
- ispravljeni tekst
- kategorija pogreške
- hipoteza glavnog uzroka
- obrazloženje recenzenta

Nalaze pregleda izvornih govornika treba čuvati kao rastući korpus, a ne kao izolirane jednokratne bilješke. Ponavljajući nalazi trebali bi se vraćati u dizajn validatora, smjernice za suradnike i buduće upute za AI agente.

Prije konačne potvrde prijevoda uz pomoć AI-ja recenzenti bi trebali:

- pročitati relevantne unose iz strukturiranog korpusa nalaza za taj jezik ili temu
- provjeriti ponavljajuće obrasce nedostataka iz ljudskih pregleda
- potvrditi da trenutačni nacrt prije potvrde ne uvodi ponovno poznate probleme

Svaki prijavljeni nedostatak izvornog govornika također treba procijeniti s obzirom na:

- ispravak sadržaja
- ažuriranje smjernica za pregled
- ažuriranje terminoloških smjernica
- poboljšanje prompta
- priliku za validator
- priliku za regresijski test

To je važno jer čak i kada je opće značenje sačuvano, prijevodi generirani AI-jem mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalnosti, terminologiji i registru specifičnom za domenu. Takve je probleme često teško otkriti samo automatiziranim mjerama kvalitete.

Konkretno prijavljene pogreške nisu samo savjetodavne. Svaka bi trebala završiti ispravljena, sistematizirana, namjerno neriješena s obrazloženjem ili i dalje izričito praćena u korpusu nalaza.

## Uobičajena taksonomija pogrešaka prijevoda umjetne inteligencije

- gramatika
- modalnost
- terminologija
- registar
- tečnost
- doslovan prijevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacija
- pismo ili pravopis
- formulacija domenske politike
- formulacija pristupačnosti

## Lagano referentno bodovanje

Za ponovljivu evaluaciju AI-prijevoda koristite laganu rubriku od 0 do 3 umjesto oslanjanja samo na procjenu prolaza/pada.

Preporučene dimenzije:

- točnost značenja
- gramatika i tečnost
- terminologija i usklađenost s domenom
- registar i stil
- napor pregleda

Preporučene oznake za objavu:

- blokator
- velika revizija
- manja revizija
- spremno uz potvrdu pregleda

To stvara podatke prikladne za kartice rezultata bez potrebe za teškim okvirom za mjerenje lokalizacije.

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/hr/how-to-run-localization-qa-in-ci.md`
