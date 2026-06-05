---
title: "Osiguranje kvaliteta prijevoda"
summary: >-
  QA prijevoda kombinuje automatizovanu validaciju, provjeru pravopisa, pregled terminologije, provjere pristupačnosti i ljudsku procjenu.
topics:
  - translation-quality
  - qa
  - localization
---
# Osiguranje kvaliteta prijevoda

## Sažetak

QA prijevoda kombinuje automatizovanu validaciju, provjeru pravopisa, pregled terminologije, provjere pristupačnosti i ljudsku procjenu.

## Uobičajene provjere

- nedostajući prijevodi
- curenje engleskog jezika
- potpunost lokalizacije okrenute čitaocu
- strukturni paritet prema svježe generisanom izlazu
- čitljivost na maternjem jeziku i prirodan izraz
- nepodudaranja rezervisanih mjesta
- pokvareni linkovi
- odstupanje od glosara
- pokrivenost tekstom pristupačnosti
- paritet snimaka ekrana i dijagrama

## Zahtjev za svježe generisani izlaz

Prije pregleda strukturnog pariteta, semantičkog pregleda ili ručnog poređenja članaka:

1. ponovo generišite web-mjesto iz trenutnog stanja repozitorija
2. pokrenite validatore nad trenutnim generisanim izlazom
3. pregledajte generisane HTML artefakte
4. tek tada obavite ručnu procjenu pariteta

Ovo pravilo postoji zato što izvorni Markdown i generisani izlaz mogu privremeno odstupati tokom razvoja, a QA nalazi treba da se zasnivaju na trenutnim artefaktima, a ne na zastarjelim generisanim datotekama.

## Pregled strukturnog pariteta

Pregled strukturnog pariteta treba tražiti gubitak vrijednosti za čitaoca čak i kada lokalizovani članak i dalje u širokim crtama čuva značenje.

Tipični signali uključuju:

- nedostajuće glavne odjeljke
- urušenu hijerarhiju naslova
- nedostajuće primjere
- sažete praktične smjernice
- smanjenu raspravu o upravljanju
- skraćene smjernice za pregled ili validaciju

Upozorenja validatora strukturnog pariteta su podsticaji za pregled, a ne automatski dokaz lošeg prijevoda. Treba ih tumačiti zajedno sa generisanim HTML-om i, po potrebi, sa izlazom renderovanim u pregledniku.

## Pregled izraza na maternjem jeziku

QA prijevoda treba da traži i tekst koji je tehnički tačan, ali nije ono što bi izvorni govornik prirodno izabrao.

To uključuje:

- direktnu englesku rečeničnu strukturu
- direktan prevod engleskih idioma
- formulacije koje zvuče prevedeno umjesto autorski napisano
- terminologiju koja i dalje otkriva izvorni jezik

Primjeri takvog obrasca uključuju izraze ekvivalentne sljedećem:

- kandidatni sadržaj
- strategija validacije
- artefakt toka rada
- kurirani alati
- kurirane vještine

To nisu uvijek prevodilačke greške. Često su to slučajevi u kojima bi izvorni govornik instinktivno preoblikovao rečenicu.

## Test preferencije izvornog govornika

Za važne prozne odjeljke recenzenti treba da se zapitaju:

> Kada bi kompetentan izvorni govornik ovu ideju pisao od nule, da li bi je vjerovatno ovako napisao?

Ako ne, recenzenti treba da:

- sačuvaju značenje
- sačuvaju semantički paritet
- sačuvaju strukturni paritet
- poboljšaju formulaciju

Ovaj test je posebno koristan za:

- uvode
- sažetke
- obrazovna objašnjenja
- praktične smjernice
- rasprave o upravljanju
- zaključke

## Pregled prirodnog izražavanja

Tretirajte tehnički tačnu, ali neprirodnu formulaciju kao problem kvaliteta.

Recenzenti treba da daju prednost formulacijama koje zvuče prirodno napisano na ciljnom jeziku, čak i kada je izvorni prevod razumljiv.

Cilj nije samo tačan prevod. Cilj je dokument koji djeluje kao da je izvorno napisan za izvorne čitaoce.

Poboljšanja prirodnog jezika ne smiju oslabiti:

- semantički paritet
- strukturni paritet
- obrazovnu pokrivenost
- primjere
- praktične smjernice
- smjernice upravljanja

## Validator lokalizacije okrenut čitaocu

Jedna klasa validatora treba izričito oboriti CI kada stranica izgleda lokalizovano, ali i dalje prikazuje sadržaj okrenut čitaocu na izvornom jeziku.

Primjeri koji treba da padnu:

- lokalizovan naslov sa engleskim sažetkom
- lokalizovan članak sa engleskim oznakama
- lokalizovan članak sa engleskim naslovima ili listama
- lokalizovan članak sa engleskim istaknutim okvirima ili natpisima
- lokalizovan članak sa engleskim oznakama dijagrama ili alternativnim tekstom
- kartice `related-content` na miješanim jezicima

Ovo je uslov za pad, a ne samo upozorenje, jer čitaoci takve stranice doživljavaju kao vidljivo nedovršene.

## Revizija klasa defekata

QA prijevoda treba održavati eksplicitne klase defekata sa sljedećim poljima:

- opis
- broj pojavljivanja
- glavni uzrok
- pokrivenost validatorom
- rizik ponavljanja
- plan zatvaranja

Obavezne kategorije uključuju:

- neprevedene sažetke
- neprevedena tijela teksta
- objavu nacrta sa rezervisanim mjestima
- neprevedene metapodatke
- objavu na miješanim jezicima
- buduće otkrivene klase

Klasa je zatvorena tek kada broj pojavljivanja dosegne nulu i kada CI spriječi njen povratak bez pada.

## Ljudski pregled dokaza

QA prijevoda takođe treba da čuva kratke zapise ljudskog pregleda za reprezentativne korekcije uz pomoć AI-ja.

Minimalna polja:

- izvorni tekst
- ispravljeni tekst
- kategorija greške
- hipoteza glavnog uzroka
- obrazloženje recenzenta

Nalaze pregleda izvornih govornika treba čuvati kao rastući korpus, a ne kao izolovane jednokratne bilješke. Ponavljajući nalazi treba da se vraćaju u dizajn validatora, smjernice za saradnike i buduća uputstva za AI agente.

Prije konačne potvrde prijevoda uz pomoć AI-ja recenzenti treba da:

- pročitaju relevantne unose iz strukturiranog korpusa nalaza za taj jezik ili temu
- provjere ponavljajuće obrasce defekata iz ljudskih pregleda
- potvrde da trenutni nacrt prije potvrde ne uvodi ponovo poznate probleme

Svaki prijavljeni defekt izvornog govornika takođe treba procijeniti u pogledu:

- ispravke sadržaja
- ažuriranja smjernica za pregled
- ažuriranja terminoloških smjernica
- poboljšanja prompta
- prilike za validator
- prilike za regresijski test

Ovo je važno jer čak i kada je opšte značenje sačuvano, prijevodi generisani AI-jem mogu zahtijevati pregled izvornog govornika kako bi se ispravili suptilni problemi u gramatici, modalnosti, terminologiji i registru specifičnom za domenu. Takve probleme je često teško otkriti samo automatizovanim mjerama kvaliteta.

Konkretno prijavljene greške nisu samo savjetodavne. Svaka treba završiti ispravljena, sistematizovana, namjerno neriješena uz obrazloženje ili i dalje izričito praćena u korpusu nalaza.

## Uobičajena taksonomija grešaka u AI prijevodu

- gramatika
- modalnost
- terminologija
- registar
- tečnost
- doslovan prevod
- dvosmislenost
- gubitak konteksta
- red riječi
- kolokacija
- pismo ili pravopis
- formulacija domenske politike
- formulacija pristupačnosti

## Lagano benchmark bodovanje

Za ponovljivu evaluaciju AI-prijevoda koristite laganu skalu od 0 do 3 umjesto oslanjanja samo na procjenu prolaza/pada.

Preporučene dimenzije:

- tačnost značenja
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
- `../../learning/bs/how-to-run-localization-qa-in-ci.md`
