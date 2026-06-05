---
title: "Navodila za izvajanje"
summary: >-
  Navodila za implementacijo določajo, kako naj ekipa izvaja delo v trenutnem repozitoriju ali dostavnem okolju, ne da bi s tem nadomestila samo specifikacijo izdelka.
topics:
  - implementation-planning
  - spec-driven-development
  - project-management
---
# Navodila za izvajanje

## Povzetek

Navodila za implementacijo določajo, kako naj ekipa izvaja delo v trenutnem repozitoriju ali dostavnem okolju, ne da bi s tem nadomestila samo specifikacijo izdelka.

## Vloga

Navodila za implementacijo sodijo pod specifikacijo izdelka.

Pomaga odgovoriti na vprašanja, kot so:

- kako naj deluje javno poimenovanje
- kako naj bodo dokumenti strukturirani
- katera pričakovanja glede preverjanja veljajo zdaj
- katera pravila, specifična za repozitorij, morajo upoštevati avtorji prispevkov
- kje naj bodo zapisana taktična pravila, ko se projekt razvija

## Razlika od specifikacije izdelka

Specifikacija izdelka določa, kaj je izdelek in kaj mora doseči.

Navodila za implementacijo določajo, kako naj sodelujoči opravljajo delo v trenutnem kontekstu dostave.

To razlikovanje je uporabno, ker ni vsako pravilo repozitorija resnica o izdelku in ne sme biti vsaka resnica o izdelku zakopana v taktične opombe.

## Pogosti primeri

Navodila za izvajanje pogosto vključujejo:

- pravila poimenovanja in blagovne znamke
- pravila za izvajanje dokumentacije
- omejitve statičnega spletnega mesta ali demo
- pričakovanja preverjanja
- pravila urejanja ali generiranja kode
- dokazne politike za javno pisanje

Takšna pravila so pogosto najbolj uporabna v Markdownu, ker morajo ostati pregledna, enostavna za posodabljanje in blizu preostalega konteksta repozitorija.

## Zakaj je to pomembno pri delu s pomočjo umetne inteligence

Pomočniki AI pogosto sledijo najbližjim konkretnim navodilom. Če so pravila, specifična za repozitorij, implicitna, izhod hitro postane nedosleden.

Navodila za izvajanje naredijo ta pravila vidna, ne da bi specifikacijo izdelka onesnažili s taktičnimi podrobnostmi.

V praksi to pomeni, da lahko datoteka z navodili Markdown opravlja dve nalogi hkrati:

- pojasnite potek dela človeškemu sodelavcu
- usmerjati agenta AI k želenim orodjem, zaporedju in omejitvam

## Let Books kontekst

V Let Books je `AGENTS-Implementation.md` sloj taktičnega vodenja.

Zajema področja, kot so:

- javno poimenovanje
- pravila dokumentiranja
- javna stran in dokumenti so razdeljeni
- metapodatki in SEO pravila za statične strani
- statične demo omejitve
- pravila lokalizacije in dostopnosti
- pravila preverjanja
- politika dokazov o blogih

Zaradi tega je operativni spremljevalec `AGENTS.md`, ne pa njegova zamenjava.

Druge smernice Markdown v repo-ju krepijo isti vzorec. Na primer:

- `docs/android-debugging.md` usmerja izbire delovnega toka odpravljanja napak, kot je CDP pripenjanje v primerjavi z delovnimi tokovi izvornega popravka
- `docs/style-guide/publishing/ubuntu-tooling.md` dokumentira pričakovana orodja za objavljanje, preverjanje, posnetke zaslona, preverjanje črkovanja in odpravljanje napak v napravi

Ti dokumenti so berljivi kot človeški napotki, pomagajo pa tudi agentom pri izbiri boljših dejanj namesto ugibanja iz splošnih privzetih vrednosti.

## Sorodne strani

- `product-specification.md`
- `documentation-traceability.md`
- `validation-layers.md`
- `../../learning/sl/how-to-turn-a-product-spec-into-an-implementation-plan.md`
