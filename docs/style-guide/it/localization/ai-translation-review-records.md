# Record di revisione delle traduzioni AI

## Riepilogo

Questa guida spiega come i revisori umani dovrebbero documentare le correzioni alle traduzioni generate da AI affinché gli esempi possano essere riutilizzati in governance, training, QA e valutazione.

## Perché conta

Anche quando il significato complessivo è preservato, le traduzioni generate da AI possono richiedere revisione da parte di madrelingua per correggere problemi sottili di grammatica, modalità, terminologia e registro specifico del dominio. Questi problemi sono spesso difficili da rilevare solo con metriche di qualità automatizzate.

## Formato richiesto del record di revisione

Ogni esempio revisionato dovrebbe registrare:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Usa questo modello:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Tassonomia raccomandata degli errori

Usa una o più di queste categorie quando applicabile:

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

## Indicazioni per l'ipotesi sulla causa radice

Le note del revisore non richiedono certezza. Una breve ipotesi è sufficiente se aiuta revisori futuri e il lavoro di valutazione dei modelli.

Le ipotesi comuni includono:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Caso di studio sloveno

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

## Lezioni riutilizzabili tra lingue

- Una traduzione può preservare il significato generale e comunque non soddisfare le aspettative qualitative dei madrelingua.
- Le costruzioni modali sono una debolezza comune dell'AI perché l'equivalenza grammaticale diretta spesso non regge tra lingue.
- Il linguaggio di policy e specifiche di prodotto richiede spesso formulazioni specifiche di dominio invece di sinonimi generici.
- I controlli automatizzati possono individuare stringhe mancanti e placeholder rotti, ma spesso non colgono registro, modalità e deriva terminologica sottile.
- La motivazione del revisore dovrebbe essere breve ma esplicita così che gli esempi possano formare revisori futuri e migliorare prompt o set di valutazione.

## Registro delle raccomandazioni

Aggiungi esempi come questo a queste risorse:

- materiali di training per revisori di localizzazione
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- dataset di valutazione per traduzioni AI
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- esempi nella guida di stile
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- documentazione del workflow human-in-the-loop
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- articoli e guide di buone pratiche sulla localizzazione su larga scala
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Uso suggerito di scorecard

Esempi di revisione come questo possono supportare scorecard interne tracciando:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
