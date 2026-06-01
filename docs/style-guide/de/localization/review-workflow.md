# Prüfungsworkflow

## Zusammenfassung

Die Lokalisierungsprüfung sollte sich von der Entwurfserstellung hin zu zunehmend verlässlicher menschlicher Prüfung bewegen.

## Empfohlene Stufen

1. Übersetzungsentwurf
2. automatisierte Validierung
3. Terminologieprüfung
4. Prüfung der Barrierefreiheit
5. Prüfung durch Muttersprachler
6. optionale professionelle Prüfung

## Anforderungen an KI-Prüfprotokolle

Wenn ein Prüfer KI-generierten Text korrigiert, sollte die Korrektur in einem wiederverwendbaren Protokoll dokumentiert werden.

Erforderliche Felder:

- Originaltext
- korrigierter Text
- Fehlerkategorie
- Hypothese zur Ursache
- Begründung des Prüfers

So bleibt Prüfungsarbeit für Governance, Training, QA-Kalibrierung und Modellevaluierung wiederverwendbar.

## Prüfbeispiele

Das slowenische Beispiel in `ai-translation-review-records.md` zeigt ein häufiges Muster: Die grobe Bedeutung bleibt erhalten, dennoch ist eine Korrektur durch Muttersprachler für Grammatik, Modalität, Terminologie und Register erforderlich.

## Verwandte Seiten

- `ai-translation-review-records.md`
