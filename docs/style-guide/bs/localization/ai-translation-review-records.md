# Evidencija pregleda AI prijevoda

## Sažetak

Ovaj vodič objašnjava kako ljudski recenzenti treba da dokumentuju ispravke prijevoda koje je generisao AI kako bi se primjeri mogli ponovo koristiti u upravljanju, obuci, QA-u i evaluaciji.

## Zašto je ovo važno

Čak i kada je opšte značenje sačuvano, prijevodi koje generiše AI mogu zahtijevati pregled izvornog govornika radi ispravke suptilnih problema u gramatici, modalnosti, terminologiji i stručnom registru. Takve probleme je često teško otkriti samo automatizovanim metrikama kvaliteta.

## Obavezni format zapisa pregleda

Svaki pregledani primjer treba zabilježiti:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Koristite ovaj predložak:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Preporučena taksonomija grešaka

Po potrebi koristite jednu ili više ovih kategorija:

- grammar
- modality
- terminology
- register
- fluency
- literal translation
- ambiguity
- context loss
- word order
- collocation
- script or orthography
- domain-policy phrasing
- accessibility wording

## Smjernice za hipotezu o uzroku

Bilješke recenzenta ne moraju biti sigurne. Dovoljna je kratka hipoteza ako pomaže budućim recenzentima i radu na evaluaciji modela.

Uobičajene hipoteze uključuju:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Slovenski studij slučaja

### Original AI draft

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Corrected Slovenian

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

### Review record

* Issue:
  Original: `morajo moči`
  Corrected: `morajo imeti možnost, da`
  Error Category: grammar, modality
  Root-Cause Hypothesis: literal translation of "must be able to"
  Reviewer Rationale: the original construction is ungrammatical in Slovenian; the corrected form is the natural modal formulation.

* Issue:
  Original: `po potrebi tudi izklopiti`
  Corrected: `da po potrebi izklopijo`
  Error Category: fluency, word order
  Root-Cause Hypothesis: unnatural source-language word order and weak discourse control
  Reviewer Rationale: the corrected order is clearer and removes unnecessary emphasis.

* Issue:
  Original: `morajo biti izrecne`
  Corrected: `morajo biti izrecno omogočene`
  Error Category: terminology, domain-policy phrasing, register
  Root-Cause Hypothesis: dictionary-equivalent adjective chosen without policy context
  Reviewer Rationale: the requirement is about explicit enablement of paid enrichment, not about the enrichments being "explicit" as a descriptive adjective.

## Ponovo upotrebljive pouke kroz jezike

- Prijevod može sačuvati opšte značenje i svejedno ne zadovoljiti očekivanja kvaliteta izvornog govornika.
- Modalne konstrukcije su česta slabost AI-ja jer direktna gramatička ekvivalencija među jezicima često ne postoji.
- Jezik politika i specifikacija proizvoda često treba domenski specifično formuliranje, a ne opšte jezičke sinonime.
- Automatizovane provjere mogu uhvatiti nedostajuće stringove i pokvarene placeholdere, ali često propuštaju registar, modalnost i suptilno klizanje terminologije.
- Obrazloženje recenzenta treba biti kratko, ali izričito kako bi primjeri mogli služiti za obuku budućih recenzenata i poboljšanje promptova ili evaluacijskih skupova.

## Zapis preporuka

Dodajte ovakve primjere u ove resurse:

- materijale za obuku recenzenata lokalizacije
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- skupove podataka za evaluaciju AI prijevoda
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- primjere u stilskom vodiču
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- dokumentaciju toka rada s čovjekom u petlji
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- članke i vodiče dobre prakse o lokalizaciji u većem obimu
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Predložena upotreba scorecarda

Primjeri pregleda poput ovoga mogu podržati interne scorecarde praćenjem:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
