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
summary: Zašto razvoj uz pomoć AI-ja treba jače specifikacije, jasniju dokumentaciju i izričita pravila provjere umjesto labavijeg procesa.
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
  - ../../sources/hr/spec-driven-development-for-ai-projects.md
status: draft
---

# Razvoj vođen specifikacijom za AI projekte

AI znatno olakšava brzo stvaranje koda. Jednako tako olakšava i brzo stvaranje pogrešnog koda. Zato je razvoj vođen specifikacijom u projektima uz pomoć AI-ja važniji, a ne manje važan.

Kad tim razvija bez jasne specifikacije, proizvod s vremenom odluta od svoje svrhe. Kad u tome pomaže AI, to se može dogoditi u jednom poslijepodnevu. Kod se može kompajlirati, sučelje može izgledati uredno, a testovi mogu prolaziti. Proizvod i dalje može biti pogrešan.

## Zašto AI mijenja profil rizika

AI ubrzava tempo interpretacije. Jedan upit može proizvesti arhitekturu, tekst, validaciju, imenovanje i korisnički tok. To je korisno, ali opasno kada izvor istine nije dovoljno jasan.

U praksi AI često optimizira ono što je u tom trenutku najvidljivije:

- posljednji upit
- najbližu datoteku
- najlakši implementacijski put
- najgeneričniji poznati obrazac

Ništa od toga samo po sebi ne znači ispravnu proizvodnu odluku.

## Što radi dobra specifikacija

Dobra specifikacija obavlja barem četiri zadatka:

- definira svrhu
- postavlja granice
- određuje standard pregleda
- služi kao memorija tima

To je u projektu Let Books vrlo jasno. `AGENTS.md` više puta naglašava da ručni tijek mora raditi i bez plaćenih AI usluga te da fizički primjerci knjiga nisu isto što i bibliografski zapisi. To nisu tehničke sitnice nego proizvodne granice.

## Zašto dokumentacija ne smije čekati

Ako je dokumentacija zastarjela ili nejasna, različiti ljudi i različiti alati iz istog repozitorija zaključit će da postoje različiti proizvodi. Jedan će slijediti demo, drugi stari README, treći najbližu datoteku.

Zato dokumentacija nije samo naknadno objašnjenje. Ona je dio operativnog sustava projekta. U ovom repozitoriju `README.md` opisuje trenutačno stanje, `AGENTS.md` proizvodnu namjeru, `AGENTS-Implementation.md` taktička pravila, a `docs/` pravila objave i evidencije.

## Uloga demoa

Demo je koristan jer pokazuje što postoji i otkriva probleme u korisničkom toku. Ali ne bi smio tiho postati proizvodna specifikacija.

Pravila repozitorija već razlikuju kanonične specifikacije i dokumentaciju od statusa implementacije. Ako demo otkrije bolji tijek, treba ažurirati specifikaciju i dokumentaciju, a ne dopustiti da demo sam po sebi pobijedi.

## Markdown, testovi i CI čine lanac

U razvoju vođenom specifikacijom ove razine ne stoje svaka za sebe.

- Markdown pohranjuje namjeru u pregledljivom obliku.
- Dokumentacija objašnjava kako je treba tumačiti.
- Testovi provjeravaju izvršiva očekivanja.
- Pravila validacije hvataju strukturno odstupanje.
- CI redovito provodi pravila.

Zajedno stvaraju proizvodnu memoriju koja preživljava brzinu razvoja.

## Što to znači za timove koji koriste AI

Timovi koji dobro koriste AI ne uklanjaju proces. Oni proces pomiču bliže izvoru generiranja.

To obično znači:

- da prije implementacije pišu jasnije proizvodne specifikacije
- da održavaju izričite implementacijske smjernice
- da ažuriraju dokumentaciju kada se ponašanje proizvoda promijeni
- da demo uspoređuju sa specifikacijama umjesto da pretpostavljaju podudarnost
- da postupno dodaju pravila validacije kako usklađenost ne bi ovisila samo o ljudskom pamćenju

Ovo nije protiv AI-ja. Ovako AI postaje pouzdan.

## Trajna lekcija

AI može brzo proizvesti kod, sadržaj i sučelja. Sam po sebi ne može jamčiti da svi ti izlazi još uvijek opisuju isti proizvod.

Razvoj vođen specifikacijom način je da tim spriječi da se brzina pretvori u odstupanje.

U projektima uz pomoć AI-ja specifikacija nije papirologija nakon činjenice. Ona je granica, memorija i standard pregleda koji brzo isporučivanje čine vjerodostojnim.

## Drugi jezici

- [English](../en/spec-driven-development-for-ai-projects.md)
- [Slovenščina](../sl/spec-driven-development-for-ai-projects.md)
- [Bosanski](../bs/spec-driven-development-for-ai-projects.md)
- [Srpski (latinica)](../sr-Latn/spec-driven-development-for-ai-projects.md)
- [Српски (ћирилица)](../sr-Cyrl/spec-driven-development-for-ai-projects.md)
- [Македонски](../mk/spec-driven-development-for-ai-projects.md)
- [Shqip](../sq/spec-driven-development-for-ai-projects.md)
- [Deutsch](../de/spec-driven-development-for-ai-projects.md)
- [Italiano](../it/spec-driven-development-for-ai-projects.md)
- [Français](../fr/spec-driven-development-for-ai-projects.md)
- [Español](../es/spec-driven-development-for-ai-projects.md)
