---
article_id: ai-as-an-oracle
canonical_language: en
language_variants:
  - ../en/ai-as-an-oracle.md
  - ../sl/ai-as-an-oracle.md
  - ../hr/ai-as-an-oracle.md
  - ../bs/ai-as-an-oracle.md
  - ../sr-Latn/ai-as-an-oracle.md
  - ../sr-Cyrl/ai-as-an-oracle.md
  - ../mk/ai-as-an-oracle.md
  - ../sq/ai-as-an-oracle.md
  - ../de/ai-as-an-oracle.md
  - ../it/ai-as-an-oracle.md
  - ../fr/ai-as-an-oracle.md
  - ../es/ai-as-an-oracle.md
title: AI kao proročište: zašto je kultura provjere važnija od promptanja
summary: Koristan inženjerski model za AI nije kolega ni zamjena, nego proročište: može biti vrlo korisno, ali njegovi odgovori moraju se provjeravati.
topics:
  - ai-assisted-workflows
  - verification
  - documentation
  - spec-driven-development
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - docs/wiki/ai-assisted-knowledge-work.md
  - docs/wiki/spec-driven-development.md
  - docs/wiki/documentation-traceability.md
  - docs/wiki/validation-layers.md
  - docs/wiki/localization-governance.md
  - docs/wiki/let-books-localization-case-study.md
sources:
  - ../../sources/bs/ai-as-an-oracle.md
status: draft
---

# AI kao proročište: zašto je kultura provjere važnija od promptanja

O AI-ju se često govori kao o alatu, pomoćniku, kolegi ili zamjeni. Te metafore nisu nužno beskorisne, ali inženjere često vode prema pogrešnoj navici. Usmjeravaju ih na delegiranje, brzinu odgovora i osjećaj produktivnosti, umjesto na provjeru ispravnosti rezultata.

Korisniji inženjerski mentalni model je proročište.

Poenta te analogije nije mistika. Poenta je operativna disciplina.

## Šta je proročište

U teorijskoj računarskoj nauci proročište je hipotetička crna kutija koja može odgovoriti na određenu klasu pitanja bez otkrivanja načina na koji je došla do odgovora.

U kriptografiji se taj izraz koristi praktičnije, za usluge nalik proročištu kao što su orakli za šifriranje ili dešifriranje. Pozivalac može poslati ulaz i posmatrati izlaz, dok unutrašnji mehanizam ostaje skriven.

LLM nije doslovno formalno proročište ni u jednom od ta dva smisla. Nije dio dokaznog modela niti jasno omeđen kriptografski primitiv.

Ali iz inženjerske perspektive u praksi često djeluje kao proročište:

- postavite pitanje
- dobijete uvjerljiv odgovor
- unutrašnjost sistema uglavnom je neprozirna
- odgovor može biti koristan, a da pritom nije pouzdan

Ta posljednja tačka najvažnija je od svih.

## Zašto je analogija s proročištem bolja

Model proročišta usmjerava pažnju na prava inženjerska pitanja.

Model je neproziran. Čak i kada nešto znamo o podacima za treniranje, dohvaćanju konteksta, alatima ili širem dizajnu sistema, obično nemamo pouzdano objašnjenje zašto se pojavio baš određeni odgovor.

Odgovori mogu biti vrijedni, ali nisu zajamčeno tačni. Mogu biti nepotpuni, pretjerano samouvjereni, osjetljivi na kontekst ili suptilno pogrešni, a takve se greške često otkrivaju tek kasnije.

To znači da izlaze treba tretirati kao hipoteze, a ne kao činjenice.

To također znači da provjera nije nešto što dolazi tek na kraju. Provjera je dio samog radnog procesa.

Tu je stvarni kulturni pomak. Problem nije u tome što inženjeri trebaju bolju tehniku pisanja promptova. Problem je u tome što mnogim timovima još uvijek nedostaje snažna kultura provjere u radu uz AI.

## Kultura provjere, a ne kultura promptanja

Promptanje jeste važno, ali nije srž problema.

Usko i dobro omeđeno pitanje korisno je zato što olakšava provjeru.

Preširok prompt opasan je zato što potiče pretjerano povjerenje u odgovor.

Ako tim interakciju s AI-jem posmatra prvenstveno kao vještinu promptanja, obično će optimizirati za:

- tečne odgovore
- brzinu
- samouvjeren ton
- dojam potpunosti

Ako pak tim rad s AI-jem posmatra kao korištenje proročišta, obično će optimizirati za:

- jasna pitanja
- ograničen opseg
- izričite pretpostavke
- nezavisne provjere
- zabilježeno obrazloženje odluka
- ponovljivu validaciju

Taj drugi spisak mnogo je bliži stvarnoj inženjerskoj disciplini.

## Kako to izgleda u inženjerskoj praksi

### Razvoj vođen specifikacijom

Razvoj vođen specifikacijom već sam po sebi polazi od toga da brz izlaz nije isto što i ispravan izlaz. Pisane specifikacije određuju svrhu, granice, tokove rada i kriterije prihvatanja prije nego što se generisani izlaz prihvati kao valjana promjena.

To je disciplina proročišta. Odgovor se mora provjeriti prema unaprijed određenom standardu.

### AI-potpomognut rad sa znanjem

Rad sa znanjem uz pomoć AI-ja postaje pouzdaniji kada oko modela postoje trajni artefakti, izričit pregled i sljedivi standardi. Konverzacijski izlaz sam po sebi nije stabilan izvor istine.

### Upravljanje dokumentacijom

Dobre inženjerske ekipe odvajaju specifikaciju proizvoda, implementacijske smjernice, javnu dokumentaciju, mape izvora i generisane artefakte. Ta je odvojenost važna jer sprečava da jedan uvjerljiv odgovor tiho postane prihvaćena istina.

### Validatori i testovi

Timovi uvode validatore zato što su pamćenje i samouvjerenost slabe kontrole. Provjere poveznica, strukturne provjere, provjere pariteta, generisanje metapodataka, testovi i validatori objave pretvaraju provjeru u infrastrukturu.

### Očuvanje konteksta i obrazloženja

Koristan odgovor proročišta sam po sebi još nije dovoljan. Ako rad treba preživjeti vrijeme i promjene u timu, vidljive moraju ostati pretpostavke, dokazi, bilješke pregleda i razlozi za prihvatanje ili odbacivanje odgovora.

### Lokalizacija i semantički paritet

Lokalizacija je dobar primjer zašto je provjera važna. Prijevod može zvučati tečno, a da ipak podbaci u modalnosti, terminologiji, ispravnosti Unicode zapisa, tekstu za pristupačnost ili semantičkom paritetu s izvornikom. U takvom procesu AI-izlaz nije objavna istina. To je nacrt koji treba pregledati.

## Konkretni primjeri

Model proročišta postaje jasniji kada pitanja postanu konkretna.

### Kada tražite od AI-ja da objasni kod

LLM može brzo i smisleno objasniti funkciju, tok podataka ili bug.

Šta treba provjeriti:

- odgovara li objašnjenje stvarnom putu kroz kod
- jesu li izostavljeni rubni slučajevi
- je li odgovor pomiješao trenutno ponašanje s namjeravanim ponašanjem
- zanemaruje li objašnjenje okolne specifikacije, testove ili komentare

Koristan način provjere:

- pročitajte navedeni kod
- uporedite odgovor s postojećim testovima
- provjerite odgovara li objašnjenje dokumentovanom toku rada

### Kada tražite od AI-ja da napiše validator

LLM može proizvesti validator koji izgleda uredno i uvjerljivo.

Šta treba provjeriti:

- provjerava li validator stvarno pravilo ili samo pojednostavljeni približak
- stvara li pravilo lažan osjećaj sigurnosti
- jesu li propušteni važni slučajevi greške
- opisuje li validator dokumentovano pravilo ispravno

Koristan način provjere:

- pripremite pozitivne i negativne testne primjere
- pokrenite validator nad poznatim neuspjesima
- provjerite štiti li zaista onu klasu grešaka koja vas zanima

### Kada tražite od AI-ja da prevede dokumentaciju

LLM može vrlo brzo proizvesti uglađen prijevod.

Šta treba provjeriti:

- semantički paritet s izvornikom
- terminološku dosljednost
- ispravnost pisma i Unicode zapisa
- oznake pristupačnosti i metapodatke
- ostaju li primjeri, povezani linkovi i prateći materijali usklađeni

Koristan način provjere:

- pokrenite validatore lokalizacije i pariteta
- uporedite strukturu odjeljaka izvora i ciljnog jezika
- osigurajte pregled izvornog govornika za važan sadržaj

### Kada tražite od AI-ja da predloži arhitekturu

LLM može predložiti slojevitu arhitekturu, razdvajanje servisa ili integracijski obrazac koji zvuči razumno.

Šta treba provjeriti:

- odgovara li prijedlog stvarnom opsegu proizvoda
- poštuje li zahtjeve od kojih se ne može odstupiti
- uvodi li nepotrebnu složenost
- pretpostavlja li infrastrukturu, budžete ili operativnu zrelost koji ne postoje

Koristan način provjere:

- uporedite prijedlog sa specifikacijom proizvoda
- provjerite ga prema granicama opsega i kriterijima prihvatanja
- zapišite kompromise prije usvajanja

## Kako provjera izgleda u praksi

Provjera ne znači uvijek formalni dokaz. U stvarnom inženjerskom radu najčešće znači kombinaciju više slabijih, ali korisnih provjera.

- uporedite odgovor sa specifikacijom
- pregledajte relevantne datoteke
- pokrenite testove
- pokrenite validatore
- provjerite poveznice i generisane artefakte
- sačuvajte bilješke pregleda i obrazloženja
- postavite uže naknadno pitanje kada je prvi odgovor preširok da bi se čisto provjerio

Zato kultura provjere dugoročno skalira bolje od same vještine promptanja. Ona stvara ponovo upotrebljive kontrolne tačke koje preživljavaju pojedinačne razgovore.

## Praktičan zaključak

- Postavljajte uska pitanja.
- Zabilježite pretpostavke.
- Provjeravajte tvrdnje.
- Koristite testove i validatore.
- Sačuvajte obrazloženje.
- AI-izlaz tretirajte kao dokazni materijal, a ne kao istinu.

## Zaključak

AI nije ni kolega ni pretraživač.

Bliži je proročištu: crnoj kutiji koja može odgovoriti na iznenađujuće teška pitanja, pod uslovom da pitate pažljivo i provjerite odgovore.

Izazov AI-potpomognutog inženjerstva nije naučiti kako koristiti proročište. Izazov je naučiti kako mu ne vjerovati previše.

## Povezano štivo

- `../../wiki/ai-assisted-knowledge-work.md`
- `../../wiki/spec-driven-development.md`
- `../../wiki/validation-layers.md`
- `../../wiki/documentation-traceability.md`
- `../../wiki/localization-governance.md`
- `../../wiki/let-books-localization-case-study.md`
- `ai-workflows-beyond-software.md`
- `spec-driven-development-for-ai-projects.md`
- `documentation-is-part-of-the-product.md`

## Drugi jezici

- [Slovenščina](../sl/ai-as-an-oracle.md)
- [Hrvatski](../hr/ai-as-an-oracle.md)
- [Bosanski](../bs/ai-as-an-oracle.md)
- [Srpski (latinica)](../sr-Latn/ai-as-an-oracle.md)
- [Српски (ћирилица)](../sr-Cyrl/ai-as-an-oracle.md)
- [Македонски](../mk/ai-as-an-oracle.md)
- [Shqip](../sq/ai-as-an-oracle.md)
- [Deutsch](../de/ai-as-an-oracle.md)
- [Italiano](../it/ai-as-an-oracle.md)
- [Français](../fr/ai-as-an-oracle.md)
- [Español](../es/ai-as-an-oracle.md)
