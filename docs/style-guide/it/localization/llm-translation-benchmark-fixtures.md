# Benchmark fixture per la traduzione con LLM

## Riepilogo

Questa guida definisce un piccolo formato strutturato per archiviare esempi revisionati di traduzione AI come benchmark fixture riutilizzabili.

## Scopo

I benchmark fixture permettono al progetto di riutilizzare esempi reali di revisione per:

- training dei revisori
- scorecard di qualità
- articoli sulla localizzazione su larga scala
- documentazione del workflow human-in-the-loop
- benchmark di valutazione LLM

## Campi consigliati del fixture

Ogni fixture dovrebbe includere:

- `fixture_id`
- `source_language`
- `target_language`
- `content_type`
- `domain`
- `source_text`
- `ai_draft`
- `corrected_text`
- `issues`
- `scoring_rubric`
- `example_scorecard`
- `overall_lesson`
- `recommended_uses`

Ogni issue dovrebbe includere:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Tassonomia riutilizzabile

Valori consigliati per `error_categories`:

- `grammar`
- `modality`
- `terminology`
- `register`
- `fluency`
- `literal_translation`
- `ambiguity`
- `context_loss`
- `word_order`
- `collocation`
- `script_or_orthography`
- `domain_policy_phrasing`
- `accessibility_wording`

## Uso del punteggio

Fixture di questo tipo possono supportare la valutazione interna di:

- se una bozza AI è pubblicabile senza modifiche
- quali categorie di errore compaiono più spesso per lingua
- se i prompt riducono modalità di fallimento ripetute
- quanto spesso la revisione di un madrelingua cambia il linguaggio delle policy

## Rubrica leggera di punteggio

Usa un semplice punteggio 0-3 per ogni dimensione.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Dimensioni consigliate:

- `meaning_accuracy`
  Does the draft preserve the intended meaning?
- `grammar_and_fluency`
  Does it read as correct and natural target-language text?
- `terminology_and_domain_fit`
  Does it use the right terminology and domain phrasing?
- `register_and_style`
  Does the tone fit policy, product, educational, or accessibility context?
- `review_effort`
  How close is the draft to approval from a native-speaker reviewer?

## Etichette di raccomandazione al rilascio

Dopo il punteggio, assegna una raccomandazione di rilascio:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Indicazioni di severità per i record dei problemi

Ogni issue può anche essere etichettata con severità:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## Come usare la rubrica

1. assegnare il punteggio alla bozza AI prima della modifica
2. registrare categorie e severità a livello di issue
3. scrivere il testo corretto
4. assegnare una raccomandazione di rilascio
5. annotare la confidenza del revisore se necessario

Questa rubrica è volutamente più leggera di un programma MQM completo. È pensata per una valutazione pratica ripetuta in un workflow open-source di localizzazione.

## Idee per l'aggregazione delle scorecard

Su più fixture, tracciare:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Estensione suggerita del fixture

Ogni fixture dovrebbe includere:

```json
{
  "scoring_rubric": {
    "scale": "0-3",
    "dimensions": [
      "meaning_accuracy",
      "grammar_and_fluency",
      "terminology_and_domain_fit",
      "register_and_style",
      "review_effort"
    ],
    "release_recommendations": [
      "blocker",
      "major_revision",
      "minor_revision",
      "ready_with_review_signoff"
    ]
  }
}
```

## Primo fixture

Il primo fixture è l'esempio sloveno di revisione AI su modalità e terminologia:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Pagine correlate

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
