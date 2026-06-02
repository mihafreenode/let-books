---
title: "Wie man KI-gestützte Übersetzungen prüft"
summary: >-
  Dieser Leitfaden erklärt, wie KI-generierte Übersetzungen im Hinblick auf Bedeutung, Terminologie, Barrierefreiheit, Ton und den nötigen menschlichen Review geprüft werden.
topics:
  - ai-assisted-translation
  - translation-quality
  - governance
---
# Wie man KI-gestützte Übersetzungen prüft

## Zusammenfassung

Dieser Leitfaden erklärt, wie KI-generierte Übersetzungen im Hinblick auf Bedeutung, Terminologie, Barrierefreiheit, Ton und den nötigen menschlichen Review geprüft werden.

## Checkliste für den Review

- zuerst die Bedeutung prüfen, erst danach den Stil
- Terminologie mit dem Projektglossar abgleichen
- sensible Formulierungen besonders sorgfältig prüfen
- bestätigen, dass auch Barrierefreiheitstexte lokalisiert wurden
- den Reifegrad des Reviews ehrlich kennzeichnen

## Slowenische Fallstudie

### Ursprünglicher KI-Entwurf

`Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`

### Korrigierte slowenische Fassung

`Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`

## Feedback aus dem menschlichen Review

### Problem 1

- Original: `morajo moči`
- Korrigiert: `morajo imeti možnost, da`
- Kategorien: Grammatik, Modalität
- wahrscheinliche KI-Fehlerursache: wörtliche Übersetzung einer englischen Modal-Konstruktion
- Begründung des Reviewers: Die ursprüngliche Formulierung ist im Slowenischen ungrammatisch; die korrigierte Version verwendet die natürliche Form für Regel- oder Policy-Sprache.

### Problem 2

- Original: `po potrebi tudi izklopiti`
- Korrigiert: `da po potrebi izklopijo`
- Kategorien: Flüssigkeit, Wortstellung
- wahrscheinliche KI-Fehlerursache: unnatürliche Wortstellung aus der Ausgangssprache und schwache Diskurskontrolle
- Begründung des Reviewers: Die korrigierte Reihenfolge ist klarer und entfernt unnötige Hervorhebung.

### Problem 3

- Original: `morajo biti izrecne`
- Korrigiert: `morajo biti izrecno omogočene`
- Kategorien: Terminologie, Register, domänenspezifische Policy-Formulierung
- wahrscheinliche KI-Fehlerursache: lexikalische Wortwahl ohne ausreichend Produkt- oder Policy-Kontext
- Begründung des Reviewers: Die Anforderung betrifft das ausdrückliche Aktivieren kostenpflichtiger Enrichment-Funktionen, nicht die Beschreibung dieser Funktionen als „explizit“.

## Häufige Problemkategorien

- Grammatik
- Modalität
- Terminologie
- Register
- Flüssigkeit
- wörtliche Übersetzung
- Mehrdeutigkeit
- Kontextverlust
- Wortstellung
- Kollokation
- Schrift oder Orthografie
- domänenspezifische Policy-Formulierung
- Formulierungen zur Barrierefreiheit

## Bewertungshinweise

Für wiederholbare Reviews eine einfache Skala von 0 bis 3 verwenden.

- `0`: unbrauchbar
- `1`: große Probleme
- `2`: mit Review-Änderungen verwendbar
- `3`: stark oder fast veröffentlichungsreif

Empfohlene Bewertungsdimensionen:

- Bedeutungsgenauigkeit
- Grammatik und Flüssigkeit
- Terminologie und Domänenpassung
- Register und Stil
- erforderlicher Review-Aufwand

## Hinweise zur Veröffentlichungsfreigabe

- `blocker`: nicht für Veröffentlichung oder Nutzersicht geeignet
- `major_revision`: die Bedeutung kann nahe liegen, aber es ist noch deutliche Überarbeitung nötig
- `minor_revision`: brauchbarer Entwurf mit gezielten Korrekturen durch Muttersprachler
- `ready_with_review_signoff`: geeignet nach normaler Reviewer-Freigabe

## Nicht nur die Korrektur, sondern auch den Grund dokumentieren

Für wiederverwendbare Review-Arbeit festhalten:

- Originaltext
- korrigierter Text
- Fehlerkategorie
- Hypothese zur Ursache
- Begründung des Reviewers

## Wiederverwendbare Lehren aus dem slowenischen Review

Das Muster der slowenischen Fallstudie ist auch in anderen Sprachen breit wiederverwendbar:

- die grammatische Bedeutung kann nahe liegen, obwohl der Satz für Muttersprachler noch nicht veröffentlichbar ist
- modale Konstruktionen sind besonders anfällig für wörtliche Übersetzung
- Terminologie und Policy-Sprache brauchen oft domänenbewusste Umformulierung
- automatisiertes QA hilft, reicht aber für feine Registerprobleme selten aus

## Localization-at-Scale-Hinweis

Selbst wenn die Gesamtbedeutung erhalten bleibt, können KI-generierte Übersetzungen einen Muttersprachler-Review benötigen, um feine Probleme in Grammatik, Modalität, Terminologie und domänenspezifischem Register zu korrigieren. Solche Probleme lassen sich allein mit automatisierten Qualitätsmetriken oft nur schwer erkennen.

## Wo solche Beispiele wiederverwendet werden sollten

- Trainingsmaterial für Localization-Reviewer
- Datensätze zur Bewertung von KI-Übersetzung
- Beispiele im Style Guide
- Human-in-the-loop-Dokumentation
- Localization-at-Scale-Artikel und Best-Practice-Leitfäden

Solche Beispiele helfen Reviewern, ihre Erwartungen zu kalibrieren, und geben Localization-Leads realistisches Referenzmaterial.

## Verwandte Seiten

- `../wiki/ai-assisted-translation-policy.md`
- `../wiki/translation-quality-assurance.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../blog/en/ai-will-not-replace-translators.md`
