# Lokalisierung

## Zusammenfassung

`docs/style-guide/localization/` definiert, wie mehrsprachige Wissensinhalte übersetzt und verknüpft werden sollen.

## Zweck

Übersetzungen nachvollziehbar, orthografisch korrekt, strukturell an den kanonischen englischen Quellen ausgerichtet und als langfristiges Lokalisierungssystem überprüfbar zu halten, statt als einmalige Übersetzungsaufgabe.

## Struktur

- Richtlinie für Gebietsschemata
- Richtlinie für Artikel-IDs
- Regeln für sprachübergreifende Verlinkung
- Regeln zur Terminologieabstimmung
- Regeln für KI-Prüfprotokolle
- Benchmark-Fixtures für LLM-Übersetzungen

## Kernprinzipien

- Englisch ist die kanonische Autorensprache der Wissensplattform, sofern ein Dokument nicht ausdrücklich eine andere Richtlinie festlegt.
- Übersetzungen sind Ergebnisse erster Klasse, übernehmen aber die kanonische Quellautorität aus dem englischen Original.
- Lokalisierung ist mehr als Übersetzung. Sie umfasst Barrierefreiheitstexte, Diagramme, Screenshots, Bildunterschriften, Navigation, Metadaten und Governance.
- Serbisch in Lateinschrift und Serbisch in Kyrillisch sind getrennte Gebietsschemata.
- Mazedonisch, Albanisch und Slowenisch müssen korrekte native Orthografie und Unicode-Zeichen bewahren.
- KI-generierte Übersetzungen sind nur als Entwurfsstufe zulässig. Sie ersetzen keine Prüfung.

## Anforderungen an mehrsprachige Artikel

Jeder in diesem Repository veröffentlichte Blogartikel muss diese Regeln einhalten:

### 1. Zuerst kanonisches Englisch

Alle Blogartikel müssen zuerst auf Englisch geschrieben werden. Übersetzungen werden aus der kanonischen englischen Version abgeleitet. Der englische Artikel ist die maßgebliche Quelle für Beleg- und Spezifikationsverweise.

Im Blog-Frontmatter sollte `canonical_language` auch in der übersetzten Datei `en` bleiben. Das Feld beschreibt die Quellautorität, nicht das Gebietsschema der übersetzten Datei.

### 2. Erforderliches Frontmatter

Jeder Artikel (kanonisch und Übersetzung) muss im YAML-Frontmatter ein Feld `language_variants` enthalten, das alle 12 Sprachvarianten mit relativen Pfaden auflistet:

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

Unterstützte Gebietsschemata: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`, `es`.

### 3. Footer Other Languages

Jeder übersetzte Artikel muss am Ende einen Footer-Abschnitt "Other Languages" enthalten, der alle anderen verfügbaren Übersetzungen mit dem nativen Sprachnamen auflistet.

Auch kanonische englische Artikel müssen diesen Abschnitt aus Paritätsgründen enthalten.

### 4. Lokalisierte Source-Map-Stubs

Jeder führende englische Blogartikel muss eine entsprechende Source Map unter `docs/sources/en/` haben. Jedes nicht-englische Gebietsschema muss einen Stub unter `docs/sources/<locale>/` haben, der auf die kanonische englische Source Map zurückverweist.

Source-Map-Stubs sind keine vollständigen Übersetzungen. Sie sind kurze Dateien mit einem Verweis auf das englische Original und sprachlich passendem Kontext.

### 5. LinkedIn-Derivatpakete

Jeder führende englische Blogartikel muss ein LinkedIn-Derivatpaket unter `docs/blog/en/linkedin/<article-id>.md` enthalten mit:

- einem Beitrag für breites Publikum
- einem institutionellen/Bibliotheks-Beitrag
- einem Beitrag für Studierende/Lernende
- einer Thread-Gliederung

Dies sind nur Social-Media-Derivate. Sie müssen nicht übersetzt werden.

### 6. HTML-Versionen von Artikeln

Jeder Blogartikel muss eine HTML-Version neben der Markdown-Quelle haben. Die HTML-Version folgt derselben Struktur wie die bestehende HTML-Dokumentationsseite (`docs/<locale>/index.html`) und ist aus dem passenden Dokumentationsindex des Gebietsschemas verlinkt.

HTML-Versionen werden mit der Standard-Konvertierungspipeline (pandoc-basiert) aus der Markdown-Quelle erzeugt und müssen inhaltlich mit Markdown übereinstimmen.

### 7. Anforderungen für die HTML-Veröffentlichung

- `docs/<locale>/index.html` jedes Gebietsschemas muss die in diesem Gebietsschema verfügbaren Blogartikel mit direkten Links zu den HTML-Artikelseiten auflisten.
- Die HTML-Artikelseite verwendet dasselbe Header-, Footer-, Stylesheet- und Sprachumschaltmuster wie die bestehenden Dokumentationsseiten.
- Das `<head>` muss korrekte `hreflang`-Alternativen für alle 12 Gebietsschemata enthalten.
- Das Attribut `data-page-type` auf `<body>` muss auf `"article"` gesetzt sein.

## Source-Map-Richtlinie

- Source Maps liegen in `docs/sources/<locale>/`.
- Englische Source Maps sind vollständige Belegkarten, die Aussagen auf Repository-Dokumentation zurückführen.
- Nicht-englische Source-Map-Stubs sind kurze Dateien, die auf das englische Original verweisen.
- Source Maps werden nur für führende Artikel erstellt, nicht für jeden kleineren Beitrag.

## Reifegradmodell für Übersetzungen

Verwenden Sie diese Stufen, wenn Sie über Übersetzungsqualität sprechen oder sie nachverfolgen.

- Level 0: source language only
- Level 1: machine translated draft
- Level 2: spellchecked
- Level 3: automated QA validated
- Level 4: community reviewed
- Level 5: native-speaker reviewed
- Level 6: professionally reviewed

Den Reifegrad nach Möglichkeit nach Gebietsschema und Inhaltskategorie verfolgen.

## Erwartungen an Lokalisierung im großen Maßstab

- Öffentlich sichtbare Wissensinhalte lokalisieren, nicht nur UI-Strings.
- Barrierefreiheits-Metadaten wie Alt-Text, Bildunterschriften, ARIA-Labels und Sprachmetadaten lokalisieren.
- Strukturierte Diagrammquellen bevorzugen, damit übersetzte Varianten reproduzierbar sind.
- Terminologieentscheidungen, Prüferwartungen und Wege zur Konfliktlösung dokumentieren.
- Validierung und CI eng an Veröffentlichungs-Workflows halten, damit Lokalisierungsregressionen als Produktqualitätsprobleme behandelt werden.
- Repräsentative KI-Prüfbeispiele bewahren, damit feine Korrekturen von Muttersprachlern Training, Governance und Evaluation verbessern können.

## Protokoll umsetzbarer Dokumentationsaktualisierungen

Das slowenische KI-Prüfbeispiel sollte zuerst diese Dokumente aktualisieren:

- `../localization/translation-style-guide.md`
- `../localization/review-workflow.md`
- `../../wiki/ai-assisted-translation-policy.md`
- `../../wiki/translation-quality-assurance.md`
- `../../learning/how-to-review-ai-assisted-translations.md`

Zusammenfassung des Änderungsprotokolls für PRs oder Governance-Review:

- added a standard review-record format for AI-generated translation corrections
- added a reusable taxonomy of common AI translation error categories
- recorded a Slovenian case study showing that meaning-preserving drafts can still fail native-speaker quality standards
- clarified that automated QA alone is insufficient for modality, register, and subtle terminology issues
- documented where reviewed examples should be reused in training, scorecards, and evaluation datasets

## Richtlinie für LinkedIn-Pakete

- LinkedIn-Pakete liegen in `docs/blog/en/linkedin/`.
- Nur führende englische Artikel benötigen LinkedIn-Pakete.
- LinkedIn-Pakete sind Markdown, nicht HTML.
- `docs/blog/README.md` muss den LinkedIn-Paketordner aufführen.

## Verwandte Themen

- Terminologie
- Veröffentlichung
- Mehrsprachige Systeme
- Spezifikationsgesteuertes Inhaltsprogramm

## Verwandte Artikel

- `../../blog/README.md`
- `../../spec-driven-content-program.md`
- `../../blog/article-template.md`

## Verwandte Lernleitfäden

- `../../learning/README.md`

## Verwandte Wiki-Seiten

- `../../wiki/README.md`

## Weiterführende Lektüre

- `../terminology/README.md`
- `ai-translation-review-records.md`
- `llm-translation-benchmark-fixtures.md`
- `../../knowledge-platform-bootstrap.md`
