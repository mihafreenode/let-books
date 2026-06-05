---
title: "Osiguranje kvaliteta prevoda"
summary: >-
  QA prevoda kombinuje automatizovanu validaciju, proveru pravopisa, pregled terminologije, provere pristupačnosti i ljudsku procenu.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvaliteta prevoda

## Rezime

QA prevoda kombinuje automatizovanu validaciju, proveru pravopisa, pregled terminologije, provere pristupačnosti i ljudsku procenu.

## Uobičajene provere

- nedostajući prevodi
- curenje engleskog jezika
- potpunost lokalizacije okrenute čitaocu
- strukturni paritet u odnosu na sveže generisani izlaz
- čitljivost na maternjem jeziku i prirodan izraz
- nepodudaranja rezervisanih mesta
- pokvareni linkovi
- odstupanje od glosara
- pokrivenost tekstom pristupačnosti
- paritet snimaka ekrana i dijagrama

## Zahtev za sveže generisani izlaz

Pre pregleda strukturnog pariteta, semantičkog pregleda ili ručnog poređenja članaka:

1. ponovo generišite sajt iz trenutnog stanja repozitorijuma
2. pokrenite validatore nad trenutnim generisanim izlazom
3. pregledajte generisane HTML artefakte
4. tek tada obavite ručnu procenu pariteta

Ovo pravilo postoji zato što izvorni Markdown i generisani izlaz mogu privremeno da odstupaju tokom razvoja, a QA nalazi treba da se zasnivaju na trenutnim artefaktima, a ne na zastarelim generisanim datotekama.

## Pregled strukturnog pariteta

Pregled strukturnog pariteta treba da traži gubitak vrednosti za čitaoca čak i kada lokalizovani članak i dalje u širokim crtama čuva značenje.

Tipični signali uključuju:

- nedostajuće glavne odeljke
- urušenu hijerarhiju naslova
- nedostajuće primere
- sažete praktične smernice
- smanjenu raspravu o upravljanju
- skraćene smernice za pregled ili validaciju

Upozorenja validatora strukturnog pariteta jesu podsticaji za pregled, a ne automatski dokaz lošeg prevoda. Treba ih tumačiti zajedno sa generisanim HTML-om i, po potrebi, sa izlazom renderovanim u pregledaču.

## Pregled izraza na maternjem jeziku

QA prevoda treba da traži i tekst koji je tehnički tačan, ali nije ono što bi izvorni govornik prirodno izabrao.

To uključuje:

- direktnu englesku rečeničnu strukturu
- direktan prevod engleskih idioma
- formulacije koje zvuče prevedeno umesto autorski napisano
- terminologiju koja i dalje otkriva izvorni jezik

Primeri takvog obrasca uključuju izraze ekvivalentne sledećem:

- kandidatni sadržaj
- strategija validacije
- zapis toka rada
- pažljivo odabrani alati
- pažljivo odabrane veštine

To nisu uvek prevodilačke greške. Često su to slučajevi u kojima bi izvorni govornik instinktivno preoblikovao rečenicu.

## Test preferencije izvornog govornika

Za važne prozne odeljke recenzenti treba da se zapitaju:

> Kada bi kompetentan izvorni govornik ovu ideju pisao od nule, da li bi je verovatno ovako napisao?

Ako ne, recenzenti treba da:

- sačuvaju značenje
- sačuvaju semantički paritet
- sačuvaju strukturni paritet
- poboljšaju formulaciju

Ovaj test je posebno koristan za:

- uvode
- rezimee
- obrazovna objašnjenja
- praktične smernice
- rasprave o upravljanju
- zaključke

## Pregled prirodnog izražavanja

Tretirajte tehnički tačnu, ali neprirodnu formulaciju kao problem kvaliteta.

Recenzenti treba da daju prednost formulacijama koje zvuče prirodno napisano na ciljnom jeziku, čak i kada je izvorni prevod razumljiv.

Cilj nije samo tačan prevod. Cilj je dokument koji deluje kao da je izvorno napisan za izvorne čitaoce.

Poboljšanja prirodnog jezika ne smeju oslabiti:

- semantički paritet
- strukturni paritet
- obrazovnu pokrivenost
- primere
- praktične smernice
- smernice upravljanja

## Validator lokalizacije okrenut čitaocu

Jedna klasa validatora treba izričito da obori CI kada stranica izgleda lokalizovano, ali i dalje prikazuje sadržaj okrenut čitaocu na izvornom jeziku.

Primeri koji treba da padnu:

- lokalizovan naslov sa engleskim rezimeom
- lokalizovan članak sa engleskim oznakama
- lokalizovan članak sa engleskim naslovima ili listama
- lokalizovan članak sa engleskim istaknutim okvirima ili natpisima
- lokalizovan članak sa engleskim oznakama dijagrama ili alternativnim tekstom
- kartice `related-content` na mešanim jezicima

Ovo je uslov za pad, a ne samo upozorenje, jer čitaoci takve stranice doživljavaju kao vidljivo nedovršene.

## Revizija klasa defekata

QA prevoda treba da održava eksplicitne klase defekata sa sledećim poljima:

- opis
- broj pojavljivanja
- glavni uzrok
- pokrivenost validatorom
- rizik ponavljanja
- plan zatvaranja

Obavezne kategorije uključuju:

- neprevedene rezimee
- neprevedena tela teksta
- objavljivanje nacrta sa rezervisanim mestima
- neprevedene metapodatke
- objavljivanje na mešovitim jezicima
- buduće otkrivene klase

Klasa je zatvorena tek kada broj pojavljivanja dostigne nulu i kada CI spreči njen povratak bez pada.

## Dokazi o ljudskim pregledima

QA prevoda takođe treba da čuva kratke zapise ljudskog pregleda za reprezentativne korekcije uz pomoć AI-ja.

Minimalna polja:

- izvorni tekst
- ispravljeni tekst
- kategorija greške
- hipoteza glavnog uzroka
- obrazloženje recenzenta

Nalaze pregleda izvornih govornika treba čuvati kao rastući korpus, a ne kao izolovane jednokratne beleške. Ponavljajući nalazi treba da se vraćaju u dizajn validatora, smernice za saradnike i buduća uputstva za AI agente.

Pre konačne potvrde prevoda uz pomoć AI-ja recenzenti treba da:

- pročitaju relevantne unose iz strukturiranog korpusa nalaza za taj jezik ili temu
- provere ponavljajuće obrasce defekata iz ljudskih pregleda
- potvrde da trenutni nacrt pre potvrde ne uvodi ponovo poznate probleme

Svaki prijavljeni defekt izvornog govornika takođe treba proceniti u pogledu:

- ispravke sadržaja
- ažuriranja smernica za pregled
- ažuriranja terminoloških smernica
- poboljšanja prompta
- prilike za validator
- prilike za regresioni test

Ovo je važno jer čak i kada je opšte značenje sačuvano, prevodi generisani AI-jem mogu zahtevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalnosti, terminologiji i registru specifičnom za domen. Takve probleme je često teško otkriti samo automatizovanim merama kvaliteta.

Konkretno prijavljene greške nisu samo savetodavne. Svaka treba da bude ispravljena, sistematizovana, namerno nerešena uz obrazloženje ili i dalje izričito praćena u korpusu nalaza.

## Uobičajena taksonomija grešaka u prevodu AI

- gramatika
- modalnost
- terminologija
- registar
- tečnost
- doslovan prevod
- dvosmislenost
- gubitak konteksta
- red reči
- kolokacija
- pismo ili pravopis
- formulacija domenske politike
- formulacija pristupačnosti

## Lagano benchmark bodovanje

Za ponovljivu evaluaciju AI-prevoda koristite laganu skalu od 0 do 3 umesto oslanjanja samo na procenu prolaza/pada.

Preporučene dimenzije:

- tačnost značenja
- gramatika i tečnost
- terminologija i usklađenost sa domenom
- registar i stil
- napor pregleda

Preporučene oznake za objavu:

- blokator
- velika revizija
- manja revizija
- spremno uz potvrdu pregleda

To stvara podatke prikladne za kartice rezultata bez potrebe za teškim okvirom za merenje lokalizacije.

## Povezane stranice

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../../style-guide/localization/ai-translation-review-records.md`
- `../../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../../learning/sr-Latn/how-to-run-localization-qa-in-ci.md`
