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
summary: Zašto razvoj uz pomoć AI-ja traži jače specifikacije, jasniju dokumentaciju i izričita pravila provere umesto labavijeg procesa.
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
  - ../../sources/sr-Latn/spec-driven-development-for-ai-projects.md
status: draft
---

# Razvoj vođen specifikacijom za AI projekte

AI znatno olakšava brzo stvaranje koda. Isto tako znatno olakšava i brzo stvaranje pogrešnog koda. Zato je razvoj vođen specifikacijom u projektima uz pomoć AI-ja važniji, a ne manje važan.

Kada tim razvija bez jasne specifikacije, proizvod vremenom odluta od svoje svrhe. Kada u tome pomaže AI, to može da se desi u jednom popodnevu. Kod može da se kompajlira, interfejs može da izgleda uredno, a testovi mogu da prolaze. Proizvod ipak može biti pogrešan.

## Zašto AI menja profil rizika

AI ubrzava tempo interpretacije. Jedan upit može da proizvede arhitekturu, tekst, validaciju, imenovanje i korisnički tok. To je korisno, ali opasno kada izvor istine nije dovoljno jasan.

U praksi AI često optimizuje ono što je u tom trenutku najvidljivije:

- poslednji upit
- najbližu datoteku
- najlakši implementacioni put
- najgeneričniji poznati obrazac

Ništa od toga samo po sebi ne znači ispravnu proizvodnu odluku.

To su korisne prečice za generisanje. Ali nisu zamena za produktnu procenu.

## Šta radi dobra specifikacija

Dobra specifikacija obavlja bar četiri zadatka:

- definiše svrhu
- postavlja granice
- određuje standard pregleda
- služi kao memorija tima

Prvo, definiše svrhu. Tim može proceniti podržava li neka funkcionalnost stvarni proizvod ili samo dodaje izlaz.

Drugo, definiše granice. Pojašnjava šta je u obimu, šta je van obima, šta je opcionalno i šta mora da radi čak i kada opcioni sistemi zakažu.

Treće, definiše standard pregleda. Umesto da se pita samo radi li promena tehnički, recenzenti mogu pitati odgovara li ona nameravanom toku rada i produktnim obavezama.

Četvrto, deluje kao memorija. AI sistemi sami po sebi ne drže stabilnu institucionalnu memoriju. Specifikacija u repozitorijumu to čini.

To je u projektu Let Books vrlo jasno. `AGENTS.md` više puta naglašava da ručni tok mora da radi i bez plaćenih AI usluga i da fizički primerci knjiga nisu isto što i bibliografski zapisi. To nisu tehničke sitnice nego proizvodne granice.

To nisu implementacioni detalji. To su produktne granice. Ako AI pomoćnik generiše tok koji blokira ručni unos ili spaja podatke o fizičkom primerku sa metapodacima izdanja, problem nije stil. Problem je produktno odstupanje.

## Zašto dokumentacija ne sme da čeka

Ako je dokumentacija zastarela ili nejasna, različiti ljudi i različiti alati iz istog repozitorijuma zaključiće da postoje različiti proizvodi. Jedan će pratiti demo, drugi stari README, treći najbližu datoteku.

Bez ažurne dokumentacije:

- upiti postaju nedosledni
- pregled postaje subjektivan
- demoi počinju slučajno da redefinišu proizvod
- budući saradnici nasleđuju ponašanje ne znajući da li je bilo namerno

Zato dokumentacija nije samo naknadno objašnjenje. Ona je deo operativnog sistema projekta. U ovom repozitorijumu `README.md` opisuje trenutno stanje, `AGENTS.md` proizvodnu nameru, `AGENTS-Implementation.md` taktička pravila, a `docs/` pravila objave i evidencije.

## Uloga demoa

Demo je koristan jer pokazuje šta postoji i otkriva probleme u korisničkom toku. Ali ne bi smeo tiho da postane proizvodna specifikacija.

Pravila repozitorijuma već razlikuju kanonične specifikacije i dokumentaciju od statusa implementacije. Ako demo otkrije bolji tok, treba ažurirati specifikaciju i dokumentaciju, a ne pustiti da demo sam po sebi pobedi.

Ako demo otkrije bolji tok rada, odgovor nije pustiti da demo tiho pobedi. Odgovor je ažurirati specifikaciju, dokumentaciju i standard pregleda kako bi taj bolji tok postao nameran.

## Markdown, testovi i CI čine lanac

U razvoju vođenom specifikacijom ovi slojevi ne stoje svaki za sebe.

- Markdown čuva nameru u pregledljivom obliku.
- Dokumentacija objašnjava kako treba da se tumači.
- Testovi proveravaju izvršiva očekivanja.
- Pravila validacije hvataju strukturno odstupanje.
- CI redovno sprovodi pravila.

Zajedno stvaraju proizvodnu memoriju koja preživljava brzinu razvoja.

Svaki je sloj sam po sebi nepotpun. Zajedno stvaraju produktnu memoriju koja preživljava brzinu, iteraciju i promene tima.

## Šta to znači za timove koji koriste AI

Timovi koji dobro koriste AI ne uklanjaju proces. Oni proces pomeraju bliže izvoru generisanja.

To obično znači:

- da pre implementacije pišu jasnije produktne specifikacije
- da održavaju izričite implementacione smernice
- da ažuriraju dokumentaciju kada se ponašanje proizvoda promeni
- da demo proveravaju prema specifikacijama umesto da pretpostavljaju podudarnost
- da postepeno dodaju pravila validacije kako usklađenost ne bi zavisila samo od ljudskog pamćenja

Ovo nije protiv AI-ja. Ovako AI postaje pouzdan.

## Trajna lekcija

AI može brzo da proizvede kod, sadržaj i interfejse. Sam po sebi ne može da garantuje da svi ti izlazi još uvek opisuju isti proizvod.

Razvoj vođen specifikacijom način je da tim spreči da se brzina pretvori u odstupanje.

U projektima uz pomoć AI-ja specifikacija nije papirologija posle činjenice. Ona je granica, memorija i standard pregleda koji brzu isporuku čine pouzdanom.

## Povezano štivo

- `../../wiki/spec-driven-development.md`
- `../../wiki/validation-layers.md`
- `ai-as-an-oracle.md`
- `spec-driven-development-in-let-books.md`

## Drugi jezici

- [English](../en/spec-driven-development-for-ai-projects.md)
- [Slovenščina](../sl/spec-driven-development-for-ai-projects.md)
- [Hrvatski](../hr/spec-driven-development-for-ai-projects.md)
- [Bosanski](../bs/spec-driven-development-for-ai-projects.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-for-ai-projects.md)
- [Македонски](../mk/spec-driven-development-for-ai-projects.md)
- [Shqip](../sq/spec-driven-development-for-ai-projects.md)
- [Deutsch](../de/spec-driven-development-for-ai-projects.md)
- [Italiano](../it/spec-driven-development-for-ai-projects.md)
- [Français](../fr/spec-driven-development-for-ai-projects.md)
- [Español](../es/spec-driven-development-for-ai-projects.md)
