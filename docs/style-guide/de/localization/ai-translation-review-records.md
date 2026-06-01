# Prüfprotokolle für KI-Übersetzungen

## Zusammenfassung

Dieses Handbuch erklärt, wie menschliche Prüfer Korrekturen an KI-generierten Übersetzungen dokumentieren sollen, damit Beispiele in Governance, Training, QA und Evaluation wiederverwendet werden können.

## Warum das wichtig ist

Selbst wenn die allgemeine Bedeutung erhalten bleibt, können KI-generierte Übersetzungen eine Prüfung durch Muttersprachler erfordern, um feine Probleme in Grammatik, Modalität, Terminologie und domänenspezifischem Register zu korrigieren. Solche Probleme sind allein mit automatisierten Qualitätsmetriken oft schwer zu erkennen.

## Erforderliches Format für Prüfprotokolle

Jedes geprüfte Beispiel sollte erfassen:

- original text
- corrected text
- error category
- root-cause hypothesis
- reviewer rationale

Verwenden Sie diese Vorlage:

```md
* Issue:
  Original:
  Corrected:
  Error Category:
  Root-Cause Hypothesis:
  Reviewer Rationale:
```

## Empfohlene Fehlertaxonomie

Verwenden Sie bei Bedarf eine oder mehrere dieser Kategorien:

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

## Hinweise zur Ursachenhypothese

Prüfernotizen müssen keine Sicherheit beanspruchen. Eine kurze Hypothese reicht aus, wenn sie künftigen Prüfern und der Modellevaluierung hilft.

Häufige Hypothesen sind:

- literal translation from source-language syntax
- incorrect grammar generation
- missing domain context
- terminology misuse
- weak register control
- overconfident but unnatural paraphrasing
- ambiguity in the source sentence

## Slowenische Fallstudie

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

## Wiederverwendbare Erkenntnisse über Sprachen hinweg

- Eine Übersetzung kann die grobe Bedeutung bewahren und dennoch die Qualitätsanforderungen von Muttersprachlern verfehlen.
- Modale Konstruktionen sind eine häufige Schwäche von KI, weil direkte grammatische Äquivalenz zwischen Sprachen oft nicht besteht.
- Richtlinien- und Produktspezifikationssprache benötigt oft domänenspezifische Formulierungen statt allgemeinsprachlicher Synonyme.
- Automatisierte Prüfungen können fehlende Strings und defekte Platzhalter erfassen, verfehlen aber oft Register, Modalität und feines Terminologie-Driften.
- Die Begründung des Prüfers sollte kurz, aber explizit sein, damit Beispiele künftige Prüfer schulen und Prompts oder Evaluationssätze verbessern können.

## Empfehlungseintrag

Fügen Sie solche Beispiele in diese Ressourcen ein:

- Schulungsmaterialien für Lokalisierungsprüfer
  Benefit: helps reviewers practice spotting subtle but high-impact issues that automated QA may miss.
- Datensätze zur Evaluation von KI-Übersetzungen
  Benefit: creates realistic benchmark cases for modality, register, and terminology errors that are common in production text.
- Stilhandbuch-Beispiele
  Benefit: gives translators and reviewers concrete before-and-after examples of acceptable domain phrasing.
- Dokumentation mensch-in-der-Schleife-Workflows
  Benefit: shows why review records should capture not only the fix, but also the reasoning and likely failure mode.
- Artikel und Best-Practice-Leitfäden zur Lokalisierung im großen Maßstab
  Benefit: strengthens the argument that human review remains essential even when AI preserves the general meaning.

## Vorgeschlagene Scorecard-Nutzung

Prüfbeispiele wie dieses können interne Scorecards unterstützen, indem sie Folgendes nachverfolgen:

- severity
- error category frequency
- locale-specific patterns
- AI draft usability rate
- review effort required per content type
