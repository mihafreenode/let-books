---
article_id: spec-driven-development-for-ai-projects
canonical_language: en
language_variants:
  - ../en/spec-driven-development-for-ai-projects.md
  - ../sl/spec-driven-development-for-ai-projects.md
  - ../hr/spec-driven-development-for-ai-projects.md
  - ../bs/spec-driven-development-for-ai-projects.md
  - ../sr-Latn/spec-driven-development-for-ai-projects.md
  - ../sr-Cyrl/spec-driven-development-for-ai-projects.md
  - ../mk/spec-driven-development-for-ai-projects.md
  - ../sq/spec-driven-development-for-ai-projects.md
  - ../de/spec-driven-development-for-ai-projects.md
  - ../it/spec-driven-development-for-ai-projects.md
  - ../fr/spec-driven-development-for-ai-projects.md
  - ../es/spec-driven-development-for-ai-projects.md
title: Razvoj vođen specifikacijom za AI projekte
summary: Zašto razvoj uz pomoć AI-ja traži jače specifikacije, jasniju dokumentaciju i izričita pravila provjere umjesto labavijeg procesa.
topics:
  - spec-driven-development
  - ai-assisted-delivery
  - documentation
  - validation
evidence:
  - AGENTS.md
  - AGENTS-Implementation.md
  - README.md
  - docs/Development.md
  - docs/Deployment.md
  - docs/spec-driven-content-program.md
sources:
  - ../../sources/bs/spec-driven-development-for-ai-projects.md
status: draft
---

# Razvoj vođen specifikacijom za AI projekte

AI znatno olakšava brzo stvaranje koda. Isto tako znatno olakšava i brzo stvaranje pogrešnog koda. Zato je razvoj vođen specifikacijom u projektima uz pomoć AI-ja važniji, a ne manje važan.

Kada tim razvija bez jasne specifikacije, proizvod s vremenom odluta od svoje svrhe. Kada u tome pomaže AI, to se može desiti u jednom poslijepodnevu. Kod se može kompajlirati, interfejs može izgledati uredno, a testovi mogu prolaziti. Proizvod ipak može biti pogrešan.

## Zašto AI mijenja profil rizika

AI ubrzava tempo interpretacije. Jedan upit može proizvesti arhitekturu, tekst, validaciju, imenovanje i korisnički tok. To je korisno, ali opasno kada izvor istine nije dovoljno jasan.

U praksi AI često optimizira ono što je u tom trenutku najvidljivije:

- posljednji upit
- najbližu datoteku
- najlakši implementacijski put
- najgeneričniji poznati obrazac

Ništa od toga samo po sebi ne znači ispravnu proizvodnu odluku.

To su korisne prečice za generiranje. Ali nisu zamjena za produktnu procjenu.

## Šta radi dobra specifikacija

Dobra specifikacija obavlja barem četiri zadatka:

- definira svrhu
- postavlja granice
- određuje standard pregleda
- služi kao memorija tima

Prvo, definira svrhu. Tim može procijeniti podržava li neka funkcionalnost stvarni proizvod ili samo dodaje izlaz.

Drugo, definira granice. Pojašnjava šta je u opsegu, šta je izvan opsega, šta je opcionalno i šta mora raditi čak i kada opcionalni sistemi zakažu.

Treće, definira standard pregleda. Umjesto da se pita samo radi li promjena tehnički, recenzenti mogu pitati odgovara li ona namjeravanom toku rada i produktnim obavezama.

Četvrto, djeluje kao memorija. AI sistemi sami po sebi ne drže stabilnu institucionalnu memoriju. Specifikacija u repozitoriju to čini.

To je u projektu Let Books vrlo jasno. `AGENTS.md` više puta naglašava da ručni tok mora raditi i bez plaćenih AI usluga te da fizički primjerci knjiga nisu isto što i bibliografski zapisi. To nisu tehničke sitnice nego proizvodne granice.

To nisu implementacijski detalji. To su produktne granice. Ako AI pomoćnik generira tok koji blokira ručni unos ili spaja podatke o fizičkom primjerku sa metapodacima izdanja, problem nije stil. Problem je produktno odstupanje.

## Zašto dokumentacija ne smije čekati

Ako je dokumentacija zastarjela ili nejasna, različiti ljudi i različiti alati iz istog repozitorija zaključit će da postoje različiti proizvodi. Jedan će slijediti demo, drugi stari README, treći najbližu datoteku.

Bez ažurne dokumentacije:

- upiti postaju nedosljedni
- pregled postaje subjektivan
- demoi počinju slučajno redefinirati proizvod
- budući saradnici nasljeđuju ponašanje ne znajući je li bilo namjerno

Zato dokumentacija nije samo naknadno objašnjenje. Ona je dio operativnog sistema projekta. U ovom repozitoriju `README.md` opisuje trenutno stanje, `AGENTS.md` proizvodnu namjeru, `AGENTS-Implementation.md` taktička pravila, a `docs/` pravila objave i evidencije.

## Uloga demoa

Demo je koristan jer pokazuje šta postoji i otkriva probleme u korisničkom toku. Ali ne bi smio tiho postati proizvodna specifikacija.

Pravila repozitorija već razlikuju kanonične specifikacije i dokumentaciju od statusa implementacije. Ako demo otkrije bolji tok, treba ažurirati specifikaciju i dokumentaciju, a ne dopustiti da demo sam po sebi pobijedi.

Ako demo otkrije bolji tok rada, odgovor nije pustiti da demo tiho pobijedi. Odgovor je ažurirati specifikaciju, dokumentaciju i standard pregleda kako bi taj bolji tok postao namjeran.

## Markdown, testovi i CI čine lanac

U razvoju vođenom specifikacijom ove razine ne stoje svaka za sebe.

- Markdown pohranjuje namjeru u pregledljivom obliku.
- Dokumentacija objašnjava kako je treba tumačiti.
- Testovi provjeravaju izvršiva očekivanja.
- Pravila validacije hvataju strukturno odstupanje.
- CI redovno provodi pravila.

Zajedno stvaraju proizvodnu memoriju koja preživljava brzinu razvoja.

Svaki je sloj sam po sebi nepotpun. Zajedno stvaraju produktnu memoriju koja preživljava brzinu, iteraciju i promjene tima.

## Šta to znači za timove koji koriste AI

Timovi koji dobro koriste AI ne uklanjaju proces. Oni proces pomjeraju bliže izvoru generisanja.

To obično znači:

- da prije implementacije pišu jasnije produktne specifikacije
- da održavaju izričite implementacijske smjernice
- da ažuriraju dokumentaciju kada se ponašanje proizvoda promijeni
- da demo provjeravaju prema specifikacijama umjesto da pretpostavljaju podudarnost
- da postepeno dodaju pravila validacije kako usklađenost ne bi zavisila samo od ljudskog pamćenja

Ovo nije protiv AI-ja. Ovako AI postaje pouzdan.

## Trajna lekcija

AI može brzo proizvesti kod, sadržaj i interfejse. Sam po sebi ne može garantirati da svi ti izlazi još uvijek opisuju isti proizvod.

Razvoj vođen specifikacijom način je da tim spriječi da se brzina pretvori u odstupanje.

U projektima uz pomoć AI-ja specifikacija nije papirologija nakon činjenice. Ona je granica, memorija i standard pregleda koji brzo isporučivanje čine vjerodostojnim.

## Drugi jezici

- [Slovenščina](../sl/spec-driven-development-for-ai-projects.md)
- [Hrvatski](../hr/spec-driven-development-for-ai-projects.md)
- [Bosanski](../bs/spec-driven-development-for-ai-projects.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-for-ai-projects.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-for-ai-projects.md)
- [Македонски](../mk/spec-driven-development-for-ai-projects.md)
- [Shqip](../sq/spec-driven-development-for-ai-projects.md)
- [Deutsch](../de/spec-driven-development-for-ai-projects.md)
- [Italiano](../it/spec-driven-development-for-ai-projects.md)
- [Français](../fr/spec-driven-development-for-ai-projects.md)
- [Español](../es/spec-driven-development-for-ai-projects.md)
