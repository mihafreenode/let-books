# Lokalizacija

## Sažetak

`docs/style-guide/localization/` definiše kako višejezični sadržaj znanja treba biti preveden i povezan.

## Svrha

Održavati prijevode sljedivim, pravopisno ispravnim, strukturno usklađenim s kanonskim engleskim izvorima i preglednim kao dugoročni sistem lokalizacije, a ne kao jednokratni prevodilački zadatak.

## Struktura

- pravila za lokalizacije
- pravila za ID-jeve članaka
- pravila za povezivanje među jezicima
- pravila za usklađivanje terminologije
- pravila za evidenciju AI pregleda
- benchmark primjeri za prevođenje s LLM-om

## Osnovni principi

- Engleski je kanonski autorski jezik platforme znanja osim ako dokument izričito ne navede drugačije pravilo.
- Prijevodi su isporuke prve klase, ali nasljeđuju kanonski autoritet izvora iz engleskog originala.
- Lokalizacija je šira od prevođenja. Uključuje tekst pristupačnosti, dijagrame, snimke ekrana, natpise, navigaciju, metapodatke i upravljanje.
- Srpski latinica i srpski ćirilica su odvojene lokalizacije.
- Makedonski, albanski i slovenski moraju sačuvati ispravan izvorni pravopis i Unicode znakove.
- Prijevod koji generiše AI dozvoljen je samo kao faza nacrta. Ne zamjenjuje pregled.

## Zahtjevi za višejezične članke

Svaki blog članak objavljen u ovom repozitoriju mora slijediti ova pravila:

### 1. Prvo kanonski engleski

Svi blog članci moraju prvo biti napisani na engleskom. Prijevodi se izvode iz kanonske engleske verzije. Engleski članak je autoritativni izvor za reference na dokaze i specifikacije.

Za blog frontmatter, `canonical_language` treba ostati `en` i u prevedenoj datoteci. Polje opisuje autoritet izvora, a ne lokalizaciju prevedene datoteke.

### 2. Obavezni frontmatter

Svaki članak (kanonski i prijevod) mora u YAML frontmatteru uključiti polje `language_variants` koje navodi svih 12 jezičkih varijanti s relativnim putanjama:

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

### 3. Footer Other Languages

Svaki prevedeni članak mora na kraju uključiti footer odjeljak "Other Languages" koji navodi sve druge dostupne prijevode s izvornim nazivom jezika.

I kanonski engleski članci moraju uključiti ovaj odjeljak radi pariteta.

### 4. Lokalizovani source-map stubovi

Svaki vodeći engleski blog članak mora imati odgovarajući source map pod `docs/sources/en/`. Svaka neengleska lokalizacija mora imati kratki source-map stub pod `docs/sources/<locale>/` koji upućuje nazad na kanonski engleski source map.

Source-map stubovi nisu puni prijevodi. To su kratke datoteke s pokazivačem na engleski original i jezički prikladnim kontekstom.

### 5. LinkedIn derivativni paketi

Svaki vodeći engleski blog članak mora imati LinkedIn derivativni paket pod `docs/blog/en/linkedin/<article-id>.md` koji sadrži:

- objavu za širu publiku
- objavu za institucije/biblioteke
- objavu za studente/učenike
- skicu niti

To su samo derivati za društvene mreže. Ne zahtijevaju prevođenje.

### 6. HTML verzije članaka

Svaki blog članak mora imati HTML verziju uz Markdown izvor. HTML verzija prati istu strukturu kao postojeća HTML dokumentacijska stranica (`docs/<locale>/index.html`) i povezana je iz odgovarajućeg dokumentacijskog indeksa za taj jezik.

HTML verzije se generišu iz Markdown izvora standardnim konverzijskim tokom rada (zasnovanim na pandocu) i moraju ostati usklađene sa sadržajem u Markdownu.

### 7. Zahtjevi za HTML objavu

- `docs/<locale>/index.html` svakog jezika mora navoditi blog članke dostupne na tom jeziku s direktnim linkovima na HTML stranice članaka.
- HTML stranica članka koristi isti obrazac zaglavlja, podnožja, stilova i prebacivanja jezika kao postojeće dokumentacijske stranice.
- `<head>` mora uključivati ispravne `hreflang` alternativne linkove za svih 12 lokalizacija.
- Atribut `data-page-type` na `<body>` mora biti postavljen na `"article"`.

## Pravila za source map

- Source mapovi žive u `docs/sources/<locale>/`.
- Engleski source mapovi su pune mape dokaza koje povezuju tvrdnje s dokumentacijom u repozitoriju.
- Neengleski source-map stubovi su kratke datoteke koje referenciraju engleski original.
- Source mapovi se kreiraju samo za vodeće članke, ne za svaku manju objavu.

## Model zrelosti prijevoda

Koristite ove nivoe kada razgovarate o kvalitetu prijevoda ili je pratite.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Gdje je praktično, pratite zrelost po lokalizaciji i po kategoriji sadržaja.

## Očekivanja za lokalizaciju u većem obimu

- Lokalizujte javno usmjeren sadržaj znanja, ne samo UI stringove.
- Lokalizujte metapodatke pristupačnosti kao što su alt tekst, natpisi, ARIA oznake i jezički metapodaci.
- Dajte prednost dijagramima generisanim iz strukturiranih izvora kako bi se prevedene varijante mogle ponovo proizvesti.
- Dokumentujte terminološke odluke, očekivanja recenzenata i puteve za rješavanje sporova.
- Držite validaciju i CI blizu tokova objave kako bi se regresije lokalizacije tretirale kao pitanja kvaliteta proizvoda.
- Sačuvajte reprezentativne AI primjere pregleda kako bi suptilne ispravke izvornih govornika mogle informisati obuku, upravljanje i evaluaciju.

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
- Višejezični sistemi
- Program sadržaja vođen specifikacijama

## Povezani članci

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Povezani vodiči za učenje

- `../../learning/README.md`

## Povezane wiki stranice

- `../../wiki/README.md`

## Dalje čitanje

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
