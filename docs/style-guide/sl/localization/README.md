# Lokalizacija

## Povzetek

`docs/style-guide/localization/` določa, kako naj bo večjezična vsebina znanja prevedena in medsebojno povezana.

## Namen

Ohranjati prevode sledljive, zapisovno pravilne, strukturno usklajene s kanoničnimi angleškimi viri in pregledljive kot dolgoročen sistem lokalizacije, ne kot enkratno prevajalsko nalogo.

## Struktura

- pravila za podprte jezike
- pravila za ID-je člankov
- pravila za povezovanje med jeziki
- pravila za usklajevanje terminologije
- pravila za evidence pregledov AI-prevodov
- primeri za primerjalno preverjanje prevodov z LLM

## Osnovna načela

- Angleščina je kanonični avtorski jezik platforme znanja, razen če dokument izrecno določa drugačno pravilo.
- Prevodi so prvovrstni rezultati, vendar podedujejo kanonično avtoriteto vira iz angleškega izvirnika.
- Lokalizacija je širša od prevajanja. Vključuje besedilo za dostopnost, diagrame, posnetke zaslona, napise, navigacijo, metapodatke in upravljanje.
- Srbščina v latinici in srbščina v cirilici sta ločeni lokalizaciji.
- Makedonščina, albanščina in slovenščina morajo ohraniti pravilno domačo ortografijo in znake Unicode.
- Prevod, ki ga ustvari AI, je dovoljen samo kot osnutek. Ne nadomešča pregleda.

## Zahteve za večjezične članke

Vsak blog članek, objavljen v tem repozitoriju, mora upoštevati ta pravila:

### 1. Najprej kanonična angleščina

Vsi blog članki morajo biti najprej napisani v angleščini. Prevodi izhajajo iz kanonične angleške različice. Angleški članek je verodostojen vir za sklice na dokaze in specifikacije.

Za frontmatter bloga mora `canonical_language` tudi v prevedeni datoteki ostati `en`. Polje opisuje avtoriteto vira, ne jezika prevedene datoteke.

### 2. Zahtevan frontmatter

Vsak članek (kanonični in prevod) mora v YAML frontmatterju vključevati polje `language_variants`, ki navaja vseh 12 jezikovnih različic z relativnimi potmi:

```yaml
language_variants:
  - ../en/<article-id>.md
  - ../sl/<article-id>.md
  - ../hr/<article-id>.md
  - ../bs/<article-id>.md
  - ../sr-Latn/<article-id>.md
  - ../sr-Cyrl/<article-id>.md
  - ../mk/<article-id>.md
  - ../sq/<article-id>.md
  - ../de/<article-id>.md
  - ../it/<article-id>.md
  - ../fr/<article-id>.md
  - ../es/<article-id>.md
```

Podprte lokalizacije: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Noga z drugimi jeziki

Vsak prevedeni članek mora na koncu vključevati nogo z razdelkom »Other Languages«, ki navaja vse druge razpoložljive prevode z domačim imenom jezika.

Tudi kanonični angleški članki morajo zaradi enakovrednosti vključevati ta razdelek.

### 4. Lokalizirani izvorni kazalci

Vsak osrednji angleški blog članek mora imeti ustrezen izvorni kazalec pod `docs/sources/en/`. Vsaka neangleška lokalizacija mora imeti pod `docs/sources/<locale>/` kratko datoteko, ki kaže nazaj na kanonični angleški izvorni kazalec.

Ti kazalci niso polni prevodi. So kratke datoteke s kazalcem na angleški izvirnik in jezikovno primernim kontekstom.

### 5. Izpeljani paketi za LinkedIn

Vsak osrednji angleški blog članek mora imeti paket izpeljank za LinkedIn pod `docs/blog/en/linkedin/<article-id>.md`, ki vsebuje:

- objavo za široko javnost
- objavo za institucije/knjižnice
- objavo za študente/učeče se
- osnutek niti

To so samo izpeljanke za družbena omrežja. Prevodov ne potrebujejo.

### 6. HTML različice člankov

Vsak blog članek mora imeti ob izvirniku v Markdownu tudi HTML različico. HTML različica sledi isti strukturi kot obstoječa HTML dokumentacijska stran (`docs/<locale>/index.html`) in je povezana iz ustreznega jezikovnega dokumentacijskega indeksa.

HTML različice nastanejo iz vira v Markdownu s standardnim pretvornim postopkom (na osnovi pandoc) in morajo ostati usklajene z vsebino v Markdownu.

### 7. Zahteve za objavo HTML

- `docs/<locale>/index.html` za vsak jezik mora navajati blog članke, ki so na voljo v tem jeziku, z neposrednimi povezavami na HTML strani člankov.
- HTML stran članka uporablja isti vzorec glave, noge, slogovne predloge in preklapljanja jezika kot obstoječe dokumentacijske strani.
- `<head>` mora vključevati ustrezne `hreflang` nadomestne povezave za vseh 12 jezikov.
- Atribut `data-page-type` na `<body>` mora biti nastavljen na `"article"`.

## Pravila za izvorne kazalce

- Izvorni kazalci so v `docs/sources/<locale>/`.
- Angleški izvorni kazalci so polni zemljevidi dokazov, ki trditve povezujejo z dokumentacijo v repozitoriju.
- Neangleški izvorni kazalci so kratke datoteke, ki se sklicujejo na angleški izvirnik.
- Izvorni kazalci nastanejo samo za osrednje članke, ne za vsako manjšo objavo.

## Model zrelosti prevodov

Pri razpravi ali sledenju kakovosti prevodov uporabljajte te ravni.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Kjer je praktično, spremljajte zrelost po jeziku in po kategoriji vsebine.

## Pričakovanja za lokalizacijo v večjem obsegu

- Lokalizirajte javno usmerjeno vsebino znanja, ne samo nizov uporabniškega vmesnika.
- Lokalizirajte metapodatke za dostopnost, kot so nadomestno besedilo, napisi, oznake ARIA in jezikovni metapodatki.
- Dajte prednost diagramom, ustvarjenim iz strukturiranih virov, da je mogoče prevedene različice ponovno ustvariti.
- Dokumentirajte terminološke odločitve, pričakovanja pregledovalcev in poti za reševanje sporov.
- Validacijo in CI ohranite blizu potekov objave, da bodo regresije lokalizacije obravnavane kot vprašanja kakovosti izdelka.
- Ohranite reprezentativne primere pregledov AI, da lahko subtilni popravki rojenih govorcev pomagajo pri učenju, upravljanju in vrednotenju.

## Zapis dejanskih posodobitev dokumentacije

Slovenski primer pregleda AI mora najprej posodobiti te dokumente:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Povzetek zapisnika sprememb za PR-je ali upravljavski pregled:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Pravila za LinkedIn pakete

- LinkedIn paketi so v `docs/blog/en/linkedin/`.
- Samo osrednji angleški članki potrebujejo LinkedIn pakete.
- LinkedIn paketi so v Markdownu, ne v HTML.
- `docs/blog/README.md` mora navajati mapo LinkedIn paketov.

## Povezane teme

- Terminologija
- Objavljanje
- Večjezični sistemi
- Program vsebin, voden s specifikacijami

## Povezani članki

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Povezani učni vodniki

- `../../learning/README.md`

## Povezane wiki strani

- `../../wiki/README.md`

## Nadaljnje branje

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
