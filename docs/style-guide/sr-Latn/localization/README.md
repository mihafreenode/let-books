# Lokalizacija

## Sažetak

`docs/style-guide/localization/` definiše kako višejezični sadržaj znanja treba da bude preveden i povezan.

## Svrha

Održavati prevode sledljivim, pravopisno ispravnim, strukturno usklađenim sa kanonskim engleskim izvorima i pregledljivim kao dugoročni sistem lokalizacije, a ne kao jednokratan prevodilački zadatak.

## Struktura

- pravila za lokalizacije
- pravila za ID-jeve članaka
- pravila za povezivanje među jezicima
- pravila za usklađivanje terminologije
- pravila za evidenciju AI pregleda
- benchmark primeri za prevođenje pomoću LLM-a

## Osnovni principi

- Engleski je kanonski autorski jezik platforme znanja osim ako dokument izričito ne navede drugačiju politiku.
- Prevodi su isporuke prve klase, ali nasleđuju kanonski autoritet izvora iz engleskog originala.
- Lokalizacija je šira od prevođenja. Uključuje tekst pristupačnosti, dijagrame, snimke ekrana, natpise, navigaciju, metapodatke i upravljanje.
- Srpski latinica i srpski ćirilica su zasebne lokalizacije.
- Makedonski, albanski i slovenački moraju da očuvaju pravilnu izvornu ortografiju i Unicode znakove.
- Prevod koji generiše AI dozvoljen je samo kao faza nacrta. Ne zamenjuje pregled.

## Zahtevi za višejezične članke

Svaki blog članak objavljen u ovom repozitorijumu mora da prati ova pravila:

### 1. Prvo kanonski engleski

Svi blog članci moraju prvo da budu napisani na engleskom. Prevodi se izvode iz kanonske engleske verzije. Engleski članak je autoritativni izvor za reference na dokaze i specifikacije.

Za blog frontmatter, `canonical_language` treba da ostane `en` i u prevedenoj datoteci. Polje opisuje autoritet izvora, a ne lokalizaciju prevedene datoteke.

### 2. Obavezni frontmatter

Svaki članak (kanonski i prevod) mora u YAML frontmatteru da uključi polje `language_variants` koje navodi svih 12 jezičkih varijanti sa relativnim putanjama:

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

Svaki prevedeni članak mora na kraju da uključi footer odeljak "Other Languages" koji navodi sve druge dostupne prevode sa izvornim nazivom jezika.

I kanonski engleski članci moraju da uključe ovaj odeljak radi pariteta.

### 4. Lokalizovani source-map stubovi

Svaki vodeći engleski blog članak mora da ima odgovarajući source map pod `docs/sources/en/`. Svaka neengleska lokalizacija mora da ima kratki source-map stub pod `docs/sources/<locale>/` koji upućuje nazad na kanonski engleski source map.

Source-map stubovi nisu puni prevodi. To su kratke datoteke sa pokazivačem na engleski original i jezički prikladnim kontekstom.

### 5. LinkedIn derivativni paketi

Svaki vodeći engleski blog članak mora da ima LinkedIn derivativni paket pod `docs/blog/en/linkedin/<article-id>.md` koji sadrži:

- objavu za širu publiku
- objavu za institucije/biblioteke
- objavu za studente/učenike
- okvir niti

To su samo derivati za društvene mreže. Ne zahtevaju prevođenje.

### 6. HTML verzije članaka

Svaki blog članak mora da ima HTML verziju uz Markdown izvor. HTML verzija prati istu strukturu kao postojeća HTML dokumentaciona stranica (`docs/<locale>/index.html`) i povezana je iz odgovarajućeg dokumentacionog indeksa za taj jezik.

HTML verzije se generišu iz Markdown izvora standardnim konverzionim tokom rada (zasnovanim na pandocu) i moraju da ostanu usklađene sa sadržajem u Markdownu.

### 7. Zahtevi za HTML objavljivanje

- `docs/<locale>/index.html` svakog jezika mora da navodi blog članke dostupne na tom jeziku sa direktnim linkovima ka HTML stranicama članaka.
- HTML stranica članka koristi isti obrazac zaglavlja, podnožja, stilova i prebacivanja jezika kao postojeće dokumentacione stranice.
- `<head>` mora da uključi ispravne `hreflang` alternativne linkove za svih 12 lokalizacija.
- Atribut `data-page-type` na `<body>` mora da bude postavljen na `"article"`.

## Pravila za source map

- Source mapovi žive u `docs/sources/<locale>/`.
- Engleski source mapovi su pune mape dokaza koje povezuju tvrdnje sa dokumentacijom u repozitorijumu.
- Neengleski source-map stubovi su kratke datoteke koje referenciraju engleski original.
- Source mapovi se kreiraju samo za vodeće članke, ne za svaku manju objavu.

## Model zrelosti prevoda

Koristite ove nivoe kada govorite o kvalitetu prevoda ili ga pratite.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Gde je praktično, pratite zrelost po lokalizaciji i po kategoriji sadržaja.

## Očekivanja za lokalizaciju u većem obimu

- Lokalizujte javno usmeren sadržaj znanja, ne samo UI stringove.
- Lokalizujte metapodatke pristupačnosti kao što su alt tekst, natpisi, ARIA oznake i jezički metapodaci.
- Dajte prednost dijagramima generisanim iz strukturiranih izvora kako bi prevedene varijante mogle ponovo da se proizvedu.
- Dokumentujte terminološke odluke, očekivanja recenzenata i putanje za rešavanje sporova.
- Držite validaciju i CI blizu tokova objavljivanja kako bi regresije lokalizacije bile tretirane kao pitanja kvaliteta proizvoda.
- Sačuvajte reprezentativne AI primere pregleda kako bi suptilne ispravke izvornih govornika mogle da informišu obuku, upravljanje i evaluaciju.

## Evidencija praktičnih ažuriranja dokumentacije

Slovenački primer AI pregleda prvo treba da ažurira ove dokumente:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Sažetak zapisa promena za PR-ove ili pregled upravljanja:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Pravila za LinkedIn pakete

- LinkedIn paketi žive u `docs/blog/en/linkedin/`.
- Samo vodeći engleski članci zahtevaju LinkedIn pakete.
- LinkedIn paketi su Markdown, ne HTML.
- `docs/blog/README.md` mora da navodi fasciklu LinkedIn paketa.

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

## Dodatno čitanje

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
