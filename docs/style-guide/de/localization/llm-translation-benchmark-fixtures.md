# Benchmark-Fixtures für LLM-Übersetzungen

## Zusammenfassung

Dieses Handbuch definiert ein kleines strukturiertes Format zum Speichern geprüfter KI-Übersetzungsbeispiele als wiederverwendbare Benchmark-Fixtures.

## Zweck

Benchmark-Fixtures erlauben dem Projekt, echte Prüfbeispiele wiederzuverwenden für:

- Prüfertraining
- Qualitäts-Scorecards
- Artikel zur Lokalisierung im großen Maßstab
- Dokumentation mensch-in-der-Schleife-Workflows
- LLM-Evaluations-Benchmarks

## Empfohlene Fixture-Felder

Jede Fixture sollte enthalten:

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

Jedes Problem sollte enthalten:

- `original_segment`
- `corrected_segment`
- `error_categories`
- `root_cause_hypothesis`
- `reviewer_rationale`

## Wiederverwendbare Taxonomie

Empfohlene Werte für `error_categories`:

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

## Einsatz der Bewertung

Solche Fixtures können die interne Bewertung unterstützen von:

- ob ein KI-Entwurf ohne Änderungen veröffentlichbar ist
- welche Fehlerkategorien je Sprache am häufigsten auftreten
- ob Prompts wiederkehrende Fehlermuster reduzieren
- wie oft eine Muttersprachler-Prüfung Richtlinienformulierungen verändert

## Leichte Bewertungsrubrik

Verwenden Sie für jede Dimension eine einfache Skala von 0-3.

- `0`: unacceptable
- `1`: major problems
- `2`: usable with review edits
- `3`: strong / near-publishable

Empfohlene Dimensionen:

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

## Labels für Veröffentlichungsempfehlungen

Weisen Sie nach der Bewertung genau eine Veröffentlichungsempfehlung zu:

- `blocker`
  Not suitable for publication or user exposure.
- `major_revision`
  Meaning may be close, but substantial rewriting is still needed.
- `minor_revision`
  Usable draft with targeted native-speaker edits.
- `ready_with_review_signoff`
  Suitable once normal reviewer signoff is complete.

## Hinweise zur Schwere von Problemprotokollen

Jedes Problem kann zusätzlich mit einem Schweregrad markiert werden:

- `critical`
  Changes meaning, policy intent, safety, or legal/compliance interpretation.
- `major`
  Strongly reduces native-speaker quality, domain accuracy, or usability.
- `minor`
  Mostly stylistic or local fluency issue.

## So verwenden Sie die Rubrik

1. den KI-Entwurf vor der Bearbeitung bewerten
2. Kategorien und Schweregrade auf Problemebene erfassen
3. den korrigierten Text schreiben
4. eine Veröffentlichungsempfehlung zuweisen
5. bei Bedarf das Vertrauen des Prüfers notieren

Dies ist bewusst leichter als ein vollständiges MQM-Programm. Es ist für praktische wiederholte Evaluation in einem Open-Source-Lokalisierungsworkflow gedacht.

## Ideen zur Scorecard-Aggregation

Über mehrere Fixtures hinweg erfassen:

- average score by dimension
- average score by language
- average score by content type
- most frequent issue categories
- share of drafts rated `minor_revision` or better
- share of drafts blocked by terminology or modality errors

## Empfohlene Fixture-Erweiterung

Jede Fixture sollte enthalten:

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

## Erste Fixture

Die erste Fixture ist das slowenische KI-Prüfbeispiel zu Modalität und Terminologie:

- `../../samples/localization-benchmarks/slovenian-ai-review-modality-terminology.json`

## Verwandte Seiten

- `ai-translation-review-records.md`
- `review-workflow.md`
- `../../wiki/translation-quality-assurance.md`
