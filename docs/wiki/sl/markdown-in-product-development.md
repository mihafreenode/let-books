---
title: "Markdown v razvoju izdelkov"
summary: >-
  Markdown je praktičen format za shranjevanje namena izdelka, dokumentacije, vodnikov in dokazov v obliki, ki jo je mogoče pregledati, jo je mogoče prenašati, jo je mogoče razlikovati in jo je enostavno povezati s poteki dela validacije.
topics:
  - documentation
  - product-quality
  - spec-driven-development
---
# Markdown v razvoju izdelkov

## Povzetek

Markdown je praktičen format za shranjevanje namena izdelka, dokumentacije, vodnikov in dokazov v obliki, ki jo je mogoče pregledati, jo je mogoče prenašati in jo je mogoče enostavno povezati z delovnimi tokovi validacije.

## Zakaj je Markdown pomemben

Markdown se pogosto obravnava kot udobje pri pisanju. Pri delu, ki temelji na specifikacijah, je bolj uporaben kot to.

Ekipam daje lahek način za ohranjanje znanja o izdelkih blizu skladišča, ne da bi ga skrili v lastniška orodja ali dokumente, ki jih je težko pregledati.

To je pomembno za:

- specifikacije
- navodila za izvedbo
- dokumentacijo o trenutnem stanju
- vadnice in wiki strani
- izvorne karte in dokazne opombe

## V čem je dober Markdown

Markdown dobro deluje, ko mora biti vsebina:

- berljivo v surovi obliki
- nadzorovana različica
- enostaven pregled v razl
- povezljivost med dokumenti
- prenosljiv v različnih okoljih
- pretvorljiv v druge založniške formate pozneje

Zaradi tega je še posebej uporaben za izdelke in dokumentacijske sisteme, ki potrebujejo sledljivost.

## Česa Markdown ne naredi sam

Markdown je koristen, vendar sam po sebi ne uveljavlja pravilnosti.

Samo po sebi ne more zagotoviti:

- da je vsebina aktualna
- da so trditve dobro podprte
- da se izvedba ujema z dokumentacijo
- da terminologija ostane dosledna
- da se pravila validacije ali CI dejansko izvajajo

Zato bi moral biti Markdown del širšega sistema, ne pa zamenjevati s celotnim sistemom.

## Markdown v delovnem toku, ki temelji na specifikacijah

V poteku dela, ki ga vodijo specifikacije, je Markdown najbolj dragocen, ko je v verigi pooblastil.

Na primer:

1. specifikacije določajo pravila izdelka
2. navodila za izvajanje določajo taktična pravila
3. dokumenti o trenutnem stanju pojasnjujejo, kaj obstaja zdaj
4. zemljevidi virov izsledijo znatne javne trditve
5. validacija in KI krepita stabilna pričakovanja

Markdown je medij, ki pomaga tem slojem, da ostanejo vidni in pregledni.

## Zakaj je to pomembno pri delu s pomočjo umetne inteligence

Sistemi umetne inteligence imajo koristi od jasnega in dostopnega konteksta.

Markdown pomaga, ker je:

- enostaven za pregled
- enostavno citirati
- enostavno razl
- enostavno shranjevanje v bližini skladišča implementacije

Zaradi tega je močan format za pomnilnik izdelka.

Toda AI naredi tudi eno omejitev bolj očitno: če je Markdown nejasen, zastarel ali protisloven, lahko pomočnik iz tega ustvari hiter odmik. Vrednost torej ne izhaja le iz formata, ampak tudi iz ohranjanja vsebine.

## Markdown kot vodilo agenta

Nekateri dokumenti Markdown so morda videti kot vadnice, namenjene ljudem, vendar delujejo tudi kot operativni vodnik za agente AI.

To je še posebej uporabno, ko dokument naredi več kot samo razlago teme in namesto tega zajema:

- želeni vrstni red poteka dela
- izbira orodja
- okoljske omejitve
- poti stopnjevanja
- anti-vzorci, ki se jim je treba izogibati

V teh primerih Markdown postane več kot samo razlaga. Postane trajen vmesnik med znanjem repozitorija in vedenjem agenta.

## Let Books primeri za usmerjanje agentov

### Potek dela za odpravljanje napak v sistemu Android

`docs/android-debugging.md` je močan primer.

Bere se kot človeški vodnik, vendar agentu daje tudi konkretne operativne smernice, kot so:

- dajte prednost fizičnim napravam Android kot emulaciji namizja za delo s kamero in črtno kodo
- raje priložite Playwright CDP kot ponavljajoče se zagone brskalnika
- razlikovanje vbrizgavanja CDP med izvajanjem od dejanskih delovnih tokov popravkov vira
- najprej vzpostavite infrastrukturo vročega ponovnega nalaganja, ko uporabnik zahteva telefonsko testiranje v živo

Ta vrsta Markdown ne opisuje le domene. Aktivno vodi potek dela in izbiro orodij.

### Priprava orodja in okolja

`docs/style-guide/publishing/ubuntu-tooling.md` je še en dober primer.

Bere se kot dokumentacija za nastavitev sodelavca, vendar posredniku tudi pove, katera orodja naj bi obstajala ali naj bi bila prednostna za vrste dela, kot so:

- Playwright za preverjanje uporabniškega vmesnika in posnetke zaslona
- Hunspell za preverjanje črkovanja
- Orodja ImageMagick in OCR za potek dela vizualnih in lažnih sredstev
- Orodja, povezana z ADB, za odpravljanje napak v sistemu Android

Ta vrsta Markdown agentu pomaga razpravljati o pričakovani orodni verigi, namesto da bi ugibal iz splošnih privzetih vrednosti.

## Praktične posledice

Ko pišete Markdown za repozitorij, ki ga lahko uporabljajo agenti AI, pomaga pisati z mislijo na dva bralca:

- človeški sodelavec, ki potrebuje razlago
- agent, ki potrebuje eksplicitne omejitve delovnega toka in orodja

Najboljši dokumenti omogočajo oboje.

Ostajajo berljive vadnice ali vodniki za ljudi, hkrati pa so dovolj specifični, da usmerjajo vedenje agentov na ponovljive načine.

## Let Books kontekst

Repozitorij Let Books že uporablja Markdown za več plasti pomnilnika izdelkov, vključno z:

- `AGENTS.md`
- `AGENTS-Implementation.md`
- `README.md`
- README-ji in vodniki področja dokumentov
- izvorne karte pod `docs/sources/`

To je dober primer uporabe Markdown ne le za prozo, ampak za koordinacijo na ravni skladišča, strukturo javnega pisanja in sledenje dokazom.

## Praktično pravilo

Uporabno pravilo je preprosto:

Uporabite Markdown, da naredite namen izdelka viden, pregledljiv in povezljiv. Ne domnevajte, da le Markdown ohranja ta namen resničen.

Resnica je še vedno odvisna od:

- jasna avtoriteta
- aktivno vzdrževanje
- pregled discipline
- validacija, kjer je praktično

## Sorodne strani

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../blog/sl/spec-driven-development-for-ai-projects.md`