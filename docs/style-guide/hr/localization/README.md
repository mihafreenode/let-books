# Lokalizacija

## Sažetak

`docs/style-guide/localization/` definira kako višejezični sadržaj znanja treba biti preveden i povezan.

## Svrha

Održavati prijevode sljedivima, pravopisno ispravnima, strukturno usklađenima s kanonskim engleskim izvorima i pregledljivima kao dugoročni sustav lokalizacije, a ne kao jednokratni prevoditeljski zadatak.

## Struktura

- pravila za lokalizacije
- pravila za ID-jeve članaka
- pravila za povezivanje među jezicima
- pravila za usklađivanje terminologije
- pravila za evidenciju AI pregleda
- benchmark primjeri za prijevod s LLM-om

## Temeljna načela

- Engleski je kanonski autorski jezik platforme znanja osim ako dokument izričito ne navede drukčije pravilo.
- Prijevodi su isporuke prve klase, ali nasljeđuju kanonski autoritet izvora iz engleskog izvornika.
- Lokalizacija je šira od prevođenja. Uključuje tekst pristupačnosti, dijagrame, snimke zaslona, natpise, navigaciju, metapodatke i upravljanje.
- Srpski latinica i srpski ćirilica odvojene su lokalizacije.
- Makedonski, albanski i slovenski moraju očuvati ispravan izvorni pravopis i Unicode znakove.
- Prijevod koji generira AI dopušten je samo kao faza nacrta. Ne zamjenjuje pregled.

## Zahtjevi za višejezične članke

Svaki blog članak objavljen u ovom repozitoriju mora slijediti ova pravila:

### 1. Najprije kanonski engleski

Svi blog članci moraju prvo biti napisani na engleskom. Prijevodi se izvode iz kanonske engleske verzije. Engleski članak je mjerodavan izvor za reference na dokaze i specifikacije.

Za blog frontmatter, `canonical_language` treba ostati `en` i u prevedenoj datoteci. Polje opisuje autoritet izvora, a ne lokalizaciju prevedene datoteke.

### 2. Obvezni frontmatter

Svaki članak (kanonski i prijevod) mora u YAML frontmatteru imati polje `language_variants` s popisom svih 12 jezičnih varijanti s relativnim putanjama:

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

Podržane lokalizacije: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Podnožje Other Languages

Svaki prevedeni članak mora na kraju sadržavati podnožni odjeljak "Other Languages" koji navodi sve druge dostupne prijevode s izvornim nazivom jezika.

I kanonski engleski članci moraju sadržavati taj odjeljak radi usklađenosti.

### 4. Lokalizirani source-map stubovi

Svaki vodeći engleski blog članak mora imati odgovarajući source map pod `docs/sources/en/`. Svaka neengleska lokalizacija mora imati kratki source-map stub pod `docs/sources/<locale>/` koji upućuje natrag na kanonski engleski source map.

Source-map stubovi nisu puni prijevodi. To su kratke datoteke s pokazivačem na engleski izvornik i jezično prikladnim kontekstom.

### 5. LinkedIn derivacijski paketi

Svaki vodeći engleski blog članak mora imati LinkedIn derivacijski paket pod `docs/blog/en/linkedin/<article-id>.md` koji sadrži:

- objavu za širu publiku
- objavu za institucije/knjižnice
- objavu za studente/učenike
- okvir niti

To su samo derivati za društvene mreže. Ne zahtijevaju prijevod.

### 6. HTML verzije članaka

Svaki blog članak mora imati HTML verziju uz Markdown izvor. HTML verzija slijedi istu strukturu kao postojeća HTML dokumentacijska stranica (`docs/<locale>/index.html`) i povezana je iz odgovarajućeg dokumentacijskog indeksa za taj jezik.

HTML verzije generiraju se iz Markdown izvora standardnim konverzijskim tijekom rada (temeljenim na pandocu) i moraju ostati usklađene sa sadržajem u Markdownu.

### 7. Zahtjevi za HTML objavu

- `docs/<locale>/index.html` svakog jezika mora navoditi blog članke dostupne na tom jeziku s izravnim poveznicama na HTML stranice članaka.
- HTML stranica članka koristi isti obrazac zaglavlja, podnožja, stilova i prebacivanja jezika kao postojeće dokumentacijske stranice.
- `<head>` mora uključivati ispravne `hreflang` zamjenske poveznice za svih 12 lokalizacija.
- Atribut `data-page-type` na `<body>` mora biti postavljen na `"article"`.

## Pravila za source map

- Source mapovi žive u `docs/sources/<locale>/`.
- Engleski source mapovi su potpune mape dokaza koje prate tvrdnje do dokumentacije u repozitoriju.
- Neengleski source-map stubovi kratke su datoteke koje referenciraju engleski izvornik.
- Source mapovi stvaraju se samo za vodeće članke, ne za svaku manju objavu.

## Model zrelosti prijevoda

Koristite ove razine kada raspravljate ili pratite kvalitetu prijevoda.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Kad je praktično, pratite zrelost po lokalizaciji i po kategoriji sadržaja.

## Očekivanja za lokalizaciju u većem opsegu

- Lokalizirajte javno usmjeren sadržaj znanja, ne samo UI stringove.
- Lokalizirajte metapodatke pristupačnosti kao što su alt tekst, natpisi, ARIA oznake i jezični metapodaci.
- Dajte prednost dijagramima generiranima iz strukturiranih izvora kako bi se prevedene varijante mogle ponovno proizvesti.
- Dokumentirajte terminološke odluke, očekivanja pregledavatelja i putove za rješavanje sporova.
- Validaciju i CI držite blizu tijeka objave kako bi se regresije lokalizacije tretirale kao pitanja kvalitete proizvoda.
- Sačuvajte reprezentativne AI primjere pregleda kako bi suptilne ispravke izvornih govornika mogle informirati obuku, upravljanje i evaluaciju.

## Evidencija praktičnih ažuriranja dokumentacije

Slovenski primjer AI pregleda prvo treba ažurirati ove dokumente:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Sažetak zapisa promjena za PR-ove ili pregled upravljanja:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Pravila za LinkedIn pakete

- LinkedIn paketi žive u `docs/blog/en/linkedin/`.
- Samo vodeći engleski članci zahtijevaju LinkedIn pakete.
- LinkedIn paketi su Markdown, ne HTML.
- `docs/blog/README.md` mora navoditi mapu LinkedIn paketa.

## Povezane teme

- Terminologija
- Objavljivanje
- Višejezični sustavi
- Program sadržaja vođen specifikacijama

## Povezani članci

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Povezani vodiči za učenje

- `../../learning/README.md`

## Povezane wiki stranice

- `../../wiki/README.md`

## Daljnje čitanje

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
