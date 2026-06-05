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
title: AI kao proročište: zašto je kultura provere važnija od promptovanja
summary: Koristan inženjerski model za AI nije kolega ni zamena, već proročište: može biti veoma korisno, ali njegove odgovore treba proveravati.
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
  - ../../sources/sr-Latn/ai-as-an-oracle.md
status: draft
---

# AI kao proročište: zašto je kultura provere važnija od promptovanja

O AI-ju se često govori kao o alatu, pomoćniku, kolegi ili zameni. Te metafore nisu nužno beskorisne, ali inženjere često vode ka pogrešnoj navici. Usmeravaju ih na delegiranje, brzinu odgovora i osećaj produktivnosti, umesto na proveru ispravnosti rezultata.

Korisniji inženjerski mentalni model jeste proročište.

Poenta te analogije nije mistika. Poenta je operativna disciplina.

## Šta je proročište

U teorijskoj računskoj nauci proročište je hipotetička crna kutija koja može da odgovori na određenu klasu pitanja bez otkrivanja načina na koji je došla do odgovora.

U kriptografiji se taj izraz koristi praktičnije, za usluge nalik proročištu kao što su orakli za šifrovanje ili dešifrovanje. Pozivalac može da pošalje ulaz i posmatra izlaz, dok unutrašnji mehanizam ostaje skriven.

LLM nije doslovno formalno proročište ni u jednom od ta dva smisla. Nije deo dokaznog modela niti jasno omeđen kriptografski primitiv.

Ali iz inženjerske perspektive u praksi često deluje kao proročište:

- postavite pitanje
- dobijete uverljiv odgovor
- unutrašnjost sistema uglavnom je neprozirna
- odgovor može biti koristan, a da pritom nije pouzdan

Ta poslednja tačka najvažnija je od svih.

## Zašto je analogija sa proročištem bolja

Model proročišta usmerava pažnju na prava inženjerska pitanja.

Model je neproziran. Čak i kada nešto znamo o podacima za treniranje, dohvaćanju konteksta, alatima ili širem dizajnu sistema, obično nemamo pouzdano objašnjenje zašto se pojavio baš određeni odgovor.

Odgovori mogu biti vredni, ali nisu zagarantovano tačni. Mogu biti nepotpuni, preterano samouvereni, osetljivi na kontekst ili suptilno pogrešni, a takve greške često otkrivamo tek kasnije.

To znači da izlaze treba tretirati kao hipoteze, a ne kao činjenice.

To takođe znači da provera nije nešto što dolazi tek na kraju. Provera je deo samog radnog procesa.

Tu je stvarni kulturni pomak. Problem nije u tome što inženjerima treba bolja tehnika pisanja promptova. Problem je u tome što mnogim timovima i dalje nedostaje snažna kultura provere u radu uz AI.

## Kultura provere, a ne kultura promptovanja

Promptovanje jeste važno, ali nije suština problema.

Usko i dobro omeđeno pitanje korisno je zato što olakšava proveru.

Preširok prompt opasan je zato što podstiče preterano poverenje u odgovor.

Ako tim interakciju sa AI-jem posmatra prvenstveno kao veštinu promptovanja, obično će optimizovati za:

- tečne odgovore
- brzinu
- samouveren ton
- utisak potpunosti

Ako pak tim rad sa AI-jem posmatra kao korišćenje proročišta, obično će optimizovati za:

- jasna pitanja
- ograničen opseg
- izričite pretpostavke
- nezavisne provere
- zabeleženo obrazloženje odluka
- ponovljivu validaciju

Taj drugi spisak mnogo je bliži stvarnoj inženjerskoj disciplini.

## Kako to izgleda u inženjerskoj praksi

### Razvoj vođen specifikacijom

Razvoj vođen specifikacijom već sam po sebi polazi od toga da brz izlaz nije isto što i ispravan izlaz. Pisane specifikacije određuju svrhu, granice, tokove rada i kriterijume prihvatanja pre nego što se generisani izlaz prihvati kao valjana promena.

To je disciplina proročišta. Odgovor mora da se proveri prema unapred određenom standardu.

### AI-potpomognut rad sa znanjem

Rad sa znanjem uz pomoć AI-ja postaje pouzdaniji kada oko modela postoje trajni artefakti, izričit pregled i sledljivi standardi. Konverzacijski izlaz sam po sebi nije stabilan izvor istine.

### Upravljanje dokumentacijom

Dobre inženjerske ekipe odvajaju specifikaciju proizvoda, implementacione smernice, javnu dokumentaciju, mape izvora i generisane artefakte. Ta odvojenost je važna jer sprečava da jedan uverljiv odgovor tiho postane prihvaćena istina.

### Validatori i testovi

Timovi uvode validatore zato što su pamćenje i samouverenost slabe kontrole. Provere linkova, strukturne provere, provere pariteta, generisanje metapodataka, testovi i validatori objave pretvaraju proveru u infrastrukturu.

### Očuvanje konteksta i obrazloženja

Koristan odgovor proročišta sam po sebi još nije dovoljan. Ako rad treba da preživi vreme i promene u timu, vidljive moraju ostati pretpostavke, dokazi, beleške pregleda i razlozi za prihvatanje ili odbacivanje odgovora.

### Lokalizacija i semantički paritet

Lokalizacija je dobar primer zašto je provera važna. Prevod može zvučati tečno, a da ipak podbaci u modalnosti, terminologiji, ispravnosti Unicode zapisa, tekstu za pristupačnost ili semantičkom paritetu sa izvornikom. U takvom procesu AI-izlaz nije objavna istina. To je nacrt koji treba pregledati.

## Konkretni primeri

Model proročišta postaje jasniji kada pitanja postanu konkretna.

### Kada tražite od AI-ja da objasni kod

LLM može brzo i smisleno da objasni funkciju, tok podataka ili bag.

Šta treba proveriti:

- odgovara li objašnjenje stvarnom putu kroz kod
- da li su izostavljeni rubni slučajevi
- da li je odgovor pomešao trenutno ponašanje sa nameravanim ponašanjem
- zanemaruje li objašnjenje okolne specifikacije, testove ili komentare

Koristan način provere:

- pročitajte navedeni kod
- uporedite odgovor sa postojećim testovima
- proverite odgovara li objašnjenje dokumentovanom toku rada

### Kada tražite od AI-ja da napiše validator

LLM može da proizvede validator koji izgleda uredno i uverljivo.

Šta treba proveriti:

- proverava li validator stvarno pravilo ili samo pojednostavljeni približak
- stvara li pravilo lažan osećaj sigurnosti
- da li su propušteni važni slučajevi greške
- opisuje li validator dokumentovano pravilo ispravno

Koristan način provere:

- pripremite pozitivne i negativne testne primere
- pokrenite validator nad poznatim neuspesima
- proverite štiti li zaista onu klasu grešaka koja vas zanima

### Kada tražite od AI-ja da prevede dokumentaciju

LLM može vrlo brzo da proizvede uglađen prevod.

Šta treba proveriti:

- semantički paritet sa izvornikom
- terminološku doslednost
- ispravnost pisma i Unicode zapisa
- oznake pristupačnosti i metapodatke
- ostaju li primeri, povezani linkovi i prateći materijali usklađeni

Koristan način provere:

- pokrenite validatore lokalizacije i pariteta
- uporedite strukturu odeljaka izvora i ciljnog jezika
- obezbedite pregled izvornog govornika za važan sadržaj

### Kada tražite od AI-ja da predloži arhitekturu

LLM može da predloži slojevitu arhitekturu, razdvajanje servisa ili integracioni obrazac koji zvuči razumno.

Šta treba proveriti:

- odgovara li predlog stvarnom opsegu proizvoda
- poštuje li zahteve od kojih ne može da se odstupi
- uvodi li nepotrebnu složenost
- pretpostavlja li infrastrukturu, budžete ili operativnu zrelost koji ne postoje

Koristan način provere:

- uporedite predlog sa specifikacijom proizvoda
- proverite ga prema granicama opsega i kriterijumima prihvatanja
- zapišite kompromise pre usvajanja

## Kako provera izgleda u praksi

Provera ne znači uvek formalni dokaz. U stvarnom inženjerskom radu najčešće znači kombinaciju više slabijih, ali korisnih provera.

- uporedite odgovor sa specifikacijom
- pregledajte relevantne datoteke
- pokrenite testove
- pokrenite validatore
- proverite linkove i generisane artefakte
- sačuvajte beleške pregleda i obrazloženja
- postavite uže naknadno pitanje kada je prvi odgovor preširok da bi se čisto proverio

Zato kultura provere dugoročno skalira bolje od same veštine promptovanja. Ona stvara ponovo upotrebljive kontrolne tačke koje nadživljavaju pojedinačne razgovore.

## Praktičan zaključak

- Postavljajte uska pitanja.
- Zabeležite pretpostavke.
- Proveravajte tvrdnje.
- Koristite testove i validatore.
- Sačuvajte obrazloženje.
- AI-izlaz tretirajte kao dokazni materijal, a ne kao istinu.

## Zaključak

AI nije ni kolega ni pretraživač.

Bliži je proročištu: crnoj kutiji koja može da odgovori na iznenađujuće teška pitanja, pod uslovom da pitate pažljivo i proverite odgovore.

Izazov AI-potpomognutog inženjerstva nije naučiti kako koristiti proročište. Izazov je naučiti kako mu ne verovati previše.

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
