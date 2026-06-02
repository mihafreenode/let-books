---
article_id: ai-will-not-replace-translators
canonical_language: en
language_variants:
  - ../en/ai-will-not-replace-translators.md
  - ../sl/ai-will-not-replace-translators.md
  - ../hr/ai-will-not-replace-translators.md
  - ../bs/ai-will-not-replace-translators.md
  - ../sr-Latn/ai-will-not-replace-translators.md
  - ../sr-Cyrl/ai-will-not-replace-translators.md
  - ../mk/ai-will-not-replace-translators.md
  - ../sq/ai-will-not-replace-translators.md
  - ../de/ai-will-not-replace-translators.md
  - ../it/ai-will-not-replace-translators.md
  - ../fr/ai-will-not-replace-translators.md
  - ../es/ai-will-not-replace-translators.md
title: KI wird Übersetzer nicht ersetzen
summary: Warum KI Übersetzungsabläufe verändert, aber den Bedarf an menschlichem Sprachurteil, kulturellem Kontext und Review nicht beseitigt.
topics:
  - ai-assisted-translation
  - governance
  - translation-quality
evidence:
  - AGENTS.md
  - README.md
  - docs/style-guide/localization/README.md
sources:
  - ../../sources/de/ai-will-not-replace-translators.md
status: draft
---

# KI wird Übersetzer nicht ersetzen

KI hat Übersetzungsarbeit bereits verändert. Sie kann schnell brauchbare Entwürfe erzeugen, die Abdeckung erweitern und die Kosten des ersten Lokalisierungsschritts senken. Das ist echter Fortschritt.

Das ist nicht dasselbe wie Übersetzer zu ersetzen.

## Was menschliche Übersetzer weiterhin leisten

Menschliche Reviewer entscheiden, ob eine Übersetzung:

- für den Kontext genau genug ist
- in der Zielsprache natürlich klingt
- für sensible Formulierungen geeignet ist
- mit der Projektterminologie konsistent ist
- für die vorgesehene Zielgruppe zugänglich ist

Das sind keine optionalen letzten Feinarbeiten. Das ist Teil der Qualität.

## Wo KI am meisten hilft

KI ist am stärksten, wenn sie eingesetzt wird, um:

- Entwürfe zu erstellen
- Alternativen vorzuschlagen
- den Ausbau von Glossaren zu beschleunigen
- die Menge unübersetzten Materials zu verringern
- wahrscheinliche Inkonsistenzen sichtbar zu machen

## Warum Übervertrauen gefährlich ist

Das größte Risiko von KI-Übersetzung ist nicht nur der Fehler. Es ist Selbstvertrauen ohne Review. Maschinell erzeugter Text kann flüssig wirken und trotzdem falsch, kulturell unpassend oder terminologisch instabil sein.

## Ein konkretes slowenisches Review-Beispiel

Ein nützliches Muster ist die Übersetzung, die die grobe Bedeutung bewahrt, aber trotzdem die Qualitätsprüfung durch Muttersprachler nicht besteht.

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Was wurde geändert:

- ungrammatische Modalität wurde in natürliches Slowenisch korrigiert
- eine holprige Wortstellung wurde normalisiert
- die Richtlinienformulierung wurde von einem wörtlichen Adjektiv in eine fachlich passendere Formulierung umgeschrieben

Genau solche Beispiele zeigen, warum menschliches Review weiterhin wichtig ist. Die Bedeutung lag nahe, aber Grammatik, Modalität, Terminologie und Register brauchten dennoch die Korrektur durch Muttersprachler.

Selbst wenn die Gesamtbedeutung erhalten bleibt, können KI-generierte Übersetzungen ein Muttersprachler-Review erfordern, um feine Probleme bei Grammatik, Modalität, Terminologie und fachspezifischem Register zu korrigieren. Solche Probleme sind allein mit automatisierten Qualitätsmetriken oft schwer zu erkennen.

## Ein Beispiel pro Review-Kategorie

Verschiedene Kategorien von Review-Befunden verlangen unterschiedliche Arten menschlichen Urteils.

### Modalität und Richtliniensprache

Ursprünglicher KI-Entwurf:

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

Korrektur durch Muttersprachler:

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

Lehre:

- erhaltene Bedeutung reicht nicht aus, wenn Grammatik, Modalität und Richtlinienformulierung für Muttersprachler immer noch falsch klingen

### Optimierung des Ausgangstextes für Lokalisierung

Ursprüngliche englische Überschrift:

`The hidden exclusion of English-only systems`

Verbesserte englische Überschrift:

`Why English-only systems exclude people`

Lehre:

- manche Lokalisierungsprobleme sollten durch Verbesserung des Ausgangstextes gelöst werden, statt jede Zielsprache dafür kompensieren zu lassen, dass die englische Formulierung zu stark verdichtet ist

### Falscher Freund in der Fachterminologie

Ursprüngliche englische Phrase:

`benchmark fixtures`

Falsche slowenische Lokalisierung:

`primerjalne napeljave`

Verbesserte slowenische Lokalisierung:

`referenčni primeri za primerjalno vrednotenje`

Lehre:

- Fachbegriffe müssen nach ihrer Domänenbedeutung übersetzt werden; in Test- und Evaluationskontexten bedeutet `fixture` ein wiederverwendbares Referenzbeispiel oder einen Testfall und nicht physische Infrastruktur

## Dauerhafte Erkenntnis

Die Zukunft ist nicht Übersetzer gegen KI. Die praktische Zukunft ist KI-gestützte Lokalisierung mit klaren Review-Stufen und transparenten Qualitätserwartungen.

## Verwandte Seiten

- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/let-books-localization-case-study.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

## Andere Sprachen

Englisch ist die kanonische Sprache der ersten Veröffentlichung dieses Artikels. Übersetzungsbereite Pfade sind für alle unterstützten Let-Books-Lokalisierungen reserviert.
