# Programm zur Lokalisierung im großen Maßstab

## Zusammenfassung

Dieses Handbuch definiert die Lokalisierung im großen Maßstab bei Let Books als langfristiges Betriebsmodell für mehrsprachige Veröffentlichung, Review, Validierung, Pflege und kontinuierliches Lernen.

Seine zentrale These ist einfach:

> Lokalisierung im großen Maßstab ist nicht in erster Linie ein Übersetzungsproblem.
>
> Sie ist ein Problem des Entwurfs von Feedback-Systemen und ein Problem eines mehrsprachigen Wissenssystems.

Das Ziel ist nicht nur, Wörter zu übersetzen.

Das Ziel ist, Menschen dabei zu helfen zu lernen, teilzunehmen, beizutragen, zu lehren, Wissen zu bewahren und auf Informationen in der Sprache zuzugreifen, die sie am besten verstehen, während dieses mehrsprachige System zugleich über die Zeit hinweg wartbar bleibt.

## Programmebenen

- `docs/blog/` erklärt, warum Lokalisierung in der Praxis wichtig ist.
- `docs/wiki/` definiert dauerhafte Regeln, Modelle und Governance.
- `docs/learning/` übersetzt das Thema in operative Arbeitsabläufe.
- `docs/style-guide/` definiert Regeln für Mitwirkende, Terminologie, Review und Veröffentlichung.
- `docs/sources/` hält zentrale Aussagen nachvollziehbar.
- `docs/localization-audit-report.md` verfolgt Schulden, Fehlerklassen und den Status ihrer Schließung.

## Teil 1 - Warum Lokalisierung wichtig ist

Lokalisierung ist wichtig, weil sprachliche Zugänglichkeit Teil echten Zugangs ist.

Wenn ein Leser den Inhalt nicht ohne Mühe verstehen kann, dann existiert Zugang nur in einem engen technischen Sinn.

Für Let Books ist mehrsprachige Veröffentlichung aus praktischen Gründen wichtig:

- Bildungszugänglichkeit
- kulturelle Teilhabe
- Wissensgleichheit
- digitale Inklusion
- Technologie im öffentlichen Interesse
- mehrsprachige Governance
- Bewahrung kleinerer Sprachen
- Unterstützung offizieller und regionaler Sprachen
- europäische Mehrsprachigkeit in der Praxis
- das Prinzip „United in Diversity“, angewandt auf funktionierende Software und Wissenssysteme

Dies ist kein Argument für symbolische Übersetzung.

Es ist ein Argument für nutzbare mehrsprachige Teilhabe.

Leser begegnen nicht nur Titeln und Menüs. Sie begegnen Erklärungen, Hinweisen, Diagrammen, Review-Workflows, Beispielen, Barrierefreiheitstexten, Metadaten und didaktischer Einordnung. Wenn all dies englisch bleibt, privilegiert das System weiterhin englischsprachige Leser, selbst wenn lokalisierte Hüllen existieren.

## Teil 2 - Lokalisierung ist ein System, kein Projekt

Viele Lokalisierungsinitiativen werden so gemanagt, als wären sie endliche Projekte:

```text
Übersetzen
Veröffentlichen
Abschließen
```

Dieses Modell bricht schnell zusammen.

Inhalte ändern sich.

Terminologie entwickelt sich weiter.

Sprachen entwickeln sich weiter.

Mitwirkende wechseln.

KI-Systeme verbessern sich.

Muttersprachler entdecken nach der Veröffentlichung neue Probleme.

Lokalisierung im großen Maßstab behandelt Lokalisierung daher als Betriebssystem:

```text
Erstellen
Übersetzen
Validieren
Verbessern
Pflegen
Aktualisieren
Drift Verhindern
Wiederholen
```

Das schwierige Problem besteht nicht darin, einmal Übersetzungen zu erstellen.

Das schwierige Problem besteht darin, ein mehrsprachiges Wissenssystem über die Zeit zu betreiben, ohne Abdeckung, Parität, Qualität, Aktualität oder das Vertrauen der Reviewer zu verlieren.

## Teil 3 - KI funktioniert am besten in Feedback-Schleifen

KI ist in der Lokalisierung nützlich, aber ihr Nutzen hängt von der Qualität des umgebenden Feedback-Systems ab.

Kent Beck hat die technische Version dieses Prinzips klar zusammengefasst:

> "Optimism is an occupational hazard of programming; feedback is the treatment."

Norbert Wiener beschrieb die systemische Version:

> "Feedback is a method of controlling a system by reinserting into it the results of its past performance."

Auch für mehrsprachige Veröffentlichung ist dies das richtige Modell.

KI funktioniert am besten, wenn ihr Output sofort Feedback ausgesetzt wird, etwa durch:

- CI-Prüfungen
- strukturelle Validatoren
- Rechtschreibprüfungen
- Terminologieprüfungen
- Prüfungen auf semantische Parität
- Barrierefreiheitsprüfungen
- Browser- und Rendering-Prüfungen
- Linkvalidierung
- Review durch Muttersprachler

Schnelles Feedback schlägt den perfekten ersten Versuch.

Das Ziel ist nicht, von Menschen oder KI perfekte Entwürfe zu verlangen.

Das Ziel ist, die Schleife zu verkürzen zwischen:

- dem Erstellen von Inhalten
- dem Entdecken von Defekten
- dem Beheben von Defekten
- dem Verhindern ihres Wiederauftretens

## Teil 3A - Bidirektionales Review

Englisch bleibt aus Gründen der Veröffentlichung und Synchronisierung die kanonische Ausgangssprache.

Nützliche Einsichten können jedoch in jeder Sprache entstehen.

Beispiele:

- eine muttersprachliche Review identifiziert ungeschickte Formulierungen im Ausgangstext
- ein Übersetzer entdeckt Mehrdeutigkeit
- ein Reviewer findet fehlenden Kontext
- ein lokalisierter Artikel gewinnt ein besseres Beispiel
- Terminologie verbessert sich in einer nicht englischen Sprache
- kulturelles Review deckt ein Barrierefreiheitsproblem auf

Diese Erkenntnisse können Änderungen am kanonischen Ausgangstext selbst rechtfertigen.

### Prinzip des bidirektionalen Reviews

Lokalisierung sollte nicht als Einbahnprozess behandelt werden:

```text
Englisch
↓
Übersetzungen
```

Sondern:

```text
Englisch
↕
Übersetzungen
```

Englisch bleibt kanonisch.

Wissen kann in beide Richtungen fließen.

### Sprachübergreifendes Review-Ereignis

Jede wesentliche inhaltliche Änderung sollte ein Review der betroffenen Sprachen auslösen.

Wenn sich Englisch ändert, prüfe:

- alle lokalisierten Versionen
- semantische Parität
- Metadaten
- Zusammenfassungen
- Diagramme und Screenshots, sofern relevant

Wenn sich eine lokalisierte Version ändert, prüfe:

- ob die Erkenntnis den kanonischen Ausgangstext verbessert
- ob andere Sprachen davon profitieren sollten
- ob Terminologiehinweise geändert werden sollten
- ob Review-Hinweise geändert werden sollten
- ob Validatoren geändert werden sollten

### Verbesserung des Ausgangstexts durch Lokalisierung

Die Lokalisierungsprüfung kann Folgendes aufdecken:

- Mehrdeutigkeit
- unnötige Komplexität
- übersetzungsfeindliche Formulierung
- versteckte Annahmen
- kulturell spezifische Formulierung
- unzugängliche Terminologie

Wenn das passiert, kann es besser sein, den Ausgangstext zu verbessern, als in jeder Übersetzung separat zu kompensieren.

```text
Problem im Slowenischen entdeckt
↓
Grundursache im Englischen gefunden
↓
Englisch verbessert
↓
Alle Sprachen profitieren
```

### Review-Prompt für KI-Agenten

Wenn du eine Sprachversion änderst, frage:

```text
Deckt diese Änderung ein Problem in der Ausgangssprache auf?
Verbessert diese Änderung Versionen in anderen Sprachen?
Sollten Terminologiehinweise geändert werden?
Sollten Review-Hinweise geändert werden?
Sollten Validatoren geändert werden?
```

Die Antwort kann sein:

```text
Keine Maßnahme erforderlich
```

oder:

```text
Sprachübergreifende Review-Aufgabe eröffnen
```

### Kernprinzip

Kanonische Quelle bedeutet nicht kanonische Weisheit.

Englisch kann die Synchronisationsquelle sein.

Wissen, Verbesserungen, Review-Erkenntnisse und Qualitätseinsichten können aus jeder unterstützten Sprache stammen.

Ein mehrsprachiges Projekt sollte zulassen, dass in einer Sprache entdeckte Verbesserungen allen Sprachen zugutekommen.

## Teil 4 - Qualitätsmodell für Lokalisierung

Die Lokalisierungsqualität sollte über vier Dimensionen verfolgt werden.

### Abdeckung

Abdeckung fragt, ob der Leser überhaupt Zugang zu den Inhalten in seiner Sprache hat.

Beispiele:

- Existiert der Artikel auf Slowenisch?
- Existiert der Lernleitfaden auf Mazedonisch?
- Existiert die Richtlinienseite auf Serbisch in kyrillischer Schrift?

Abdeckung ist auf Veröffentlichungsebene binär.

Entweder existiert der Inhalt für diese Zielgruppe oder er existiert nicht.

### Vollständigkeit

Vollständigkeit fragt, ob alle für den Leser sichtbaren Teile dieser Seite lokalisiert sind.

Beispiele:

- lokalisierter Titel, aber englische Zusammenfassung
- lokalisierter Fließtext, aber englische Tags
- lokalisierter Artikel, aber unübersetzte Diagrammbeschriftungen
- lokalisierte Seitenhülle, aber englische Karten zu verwandten Inhalten

Abdeckung ohne Vollständigkeit erzeugt gemischtsprachige Veröffentlichung.

### Qualität

Qualität fragt, ob sich der lokalisierte Text natürlich, präzise und angemessen für sein Publikum liest.

Beispiele:

- technisch korrekt, aber übersetzungsartig formuliert
- Bedeutung bewahrt, aber unnatürliche Rhetorik
- Richtlinientext, der korrekt ist, aber keine Veröffentlichungsqualität hat
- didaktische Erklärung, die richtig ist, aus der man aber schwer lernen kann

Qualität ist der Bereich, in dem muttersprachliches Review den größten einzigartigen Wert liefert.

### Aktualität

Aktualität fragt, ob die lokalisierte Version noch die aktuelle Quelle widerspiegelt.

Beispiele:

- neue Warnung im Englischen hinzugefügt, aber in Übersetzungen fehlend
- Schlussfolgerung in der Quelle geändert, aber übersetzte Seiten verwenden noch die alte Einordnung
- aktualisiertes Diagramm oder Screenshot noch nicht lokalisiert

Aktualität ist das operative Gesicht von Lokalisierungsdrift.

## Teil 5 - Lokalisierungsvollständigkeit

### Regel für leserseitige Lokalisierung

Eine Seite ist nicht schon deshalb vollständig, weil irgendeines der folgenden Elemente lokalisiert ist:

- URL
- Titel
- Navigation
- Seitenhülle
- Artikelteaser

Alle für Leser sichtbaren Inhalte müssen lokalisiert sein, bevor eine Seite als vollständig gilt.

Für Leser sichtbare Inhalte umfassen:

- Titel
- Untertitel
- Zusammenfassungen
- Beschreibungen
- Tags und Kategorienamen
- Überschriften
- Artikeltexte
- Listen
- Hinweisblöcke
- Bildunterschriften
- Diagramme
- Alt-Text
- Texte zu verwandten Inhalten
- für Leser sichtbare Metadaten
- lokalisierte Breadcrumbs, sofern Varianten existieren

Zulässige Ausnahmen sind eng begrenzt:

- Zitate
- klar gekennzeichnetes Ausgangssprachenmaterial, das besprochen wird
- Eigennamen
- technische Bezeichner
- ausdrücklich beabsichtigte Nichtübersetzung

### Fehlermuster gemischtsprachiger Veröffentlichung

Eine der wichtigsten Lehren aus dieser Initiative ist, dass gemischtsprachige Veröffentlichung oft oberflächlich erfolgreich wirkt.

Die Seite kann Folgendes haben:

- einen lokalisierten Pfad
- einen lokalisierten Titel
- einen lokalisierten Einleitungsabsatz

und trotzdem für Leser scheitern, weil Zusammenfassungen, Tags, Überschriften oder Abschnitte im Fließtext englisch bleiben.

Deshalb wird Vollständigkeit getrennt von Abdeckung verfolgt.

## Teil 6 - Erkenntnisse aus muttersprachlichen Reviews

Dieser Abschnitt ist ein erstklassiges Deliverable.

Er sollte mit der Zeit wachsen.

Er sollte nicht zu kurzen Schlussfolgerungen verdichtet werden.

Sein Zweck ist es, reale Fälle zu dokumentieren, in denen:

- die Übersetzung technisch korrekt war
- die Übersetzung die beabsichtigte Bedeutung bewahrte
- die Übersetzung automatisierte Validierung bestand
- die Übersetzung die Rechtschreibprüfung bestand
- die Übersetzung Prüfungen auf semantische Parität wahrscheinlich bestanden hätte
- ein Muttersprachler dennoch eine Möglichkeit zur Verbesserung fand

Hier liegt der didaktische Wert.

Es zeigt, was bleibt, nachdem moderne Lokalisierungswerkzeuge ihre Arbeit bereits getan haben.

### Format für Korpuseinträge

Jeder Eintrag sollte Folgendes erfassen:

- Quellartikel
- Sprache
- ursprünglichen englischen Text
- ursprünglichen lokalisierten Text
- verbesserten lokalisierten Text
- ID
- Erklärung
- Kategorie
- Status
- ob ein Validator möglich ist
- zugehörige Dateien
- Datum der Aufnahme
- ob automatisierte QA das Problem wahrscheinlich erkennen würde
- gewonnene Erkenntnisse

Empfohlener maschinenlesbarer Korpuspfad:

- `docs/style-guide/localization/native-speaker-findings-corpus.json`

Der Korpus ist nicht nur ein Archiv.

Er ist eine wiederverwendbare Steuerungsoberfläche für:

- Review-Leitlinien
- Terminologie-Leitlinien
- Verbesserungen an AI-Prompts
- Validatorregeln
- Regressionsabdeckung
- sprachübergreifenden Wissenstransfer

### Kategorieindex

Aktuelle und erwartete Kategorien umfassen:

- Parallelstruktur
- Übertragung englischer Rhetorik
- Konstruktionen mit verstecktem Agens
- anthropomorphe Abstraktionen
- Übersetzungsstil
- didaktische Stilabweichung
- Stilabweichung im öffentlichen Sektor
- unnatürliche Terminologie
- Übertragung von Diskursmustern
- kulturelle Anpassung
- Abweichung von Publikumserwartungen
- Verbesserung der Lesbarkeit
- Verbesserung des Tons
- semantische Bewahrung bei Verlust von Flüssigkeit
- gemischtsprachige Veröffentlichung
- unnötige englische Terminologie
- unlokalisierter Fachjargon
- Optimierung des Ausgangstexts für Lokalisierung
- falscher Freund in technischer Terminologie

### Optimierung des Ausgangstexts für Lokalisierung

Definition:

Ein Ausgangssatz kann technisch korrekt sein und sich dennoch unnötig schwer natürlich in mehrere Sprachen übersetzen lassen.

Leitlinie:

Wenn wiederkehrende Übersetzungsprobleme aus der Formulierung des Ausgangstexts selbst entstehen, verbessere den Ausgangstext, statt in jeder Zielsprache wiederholt zu kompensieren.

Arbeitsprinzip:

> Besserer Ausgangstext erzeugt oft bessere Übersetzungen in jeder Sprache.

### Falscher Freund in technischer Terminologie

Definition:

Ein technischer Begriff wird mit der falschen fachlichen Bedeutungsdomäne übersetzt, obwohl die oberflächliche Wörterbuchbedeutung plausibel erscheint.

Leitlinie:

Übersetze Fachvokabular entsprechend dem aktiven Domänenkontext. In der Softwarelokalisierung sollten Begriffe aus Testing, QA, Benchmarking und Evaluation zuerst in diesen Domänen aufgelöst werden und nicht anhand fachfremder physischer oder alltagssprachlicher Bedeutungen.

### Erkenntnis 1 - Parallelstruktur

- Quellartikel: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Sprache: Slowenisch
- Ursprünglicher englischer Text: `what the project is trying to achieve and what it is explicitly not trying to become`
- Ursprünglicher lokalisierter Text: `kaj projekt skuša doseči in česa ne sme postati`
- Verbesserter lokalisierter Text: `kaj projekt skuša doseči in kaj ne sme postati`
- Erklärung: Der ursprüngliche slowenische Satz ist grammatisch korrekt und verständlich. Er bewahrt die beabsichtigte Bedeutung. Er würde Rechtschreib-, Paritäts- und allgemeine QA-Prüfungen wahrscheinlich bestehen. Das Problem ist stilistisch und strukturell. Die Formulierung spiegelt die englische Kontraststruktur zu eng wider und verliert die klarere Parallelform, die ein muttersprachlicher slowenischer Autor normalerweise wählen würde.
- Kategorie: Parallelstruktur; muttersprachliche Flüssigkeit; Übersetzungsstil
- Würde automatisierte QA das wahrscheinlich erkennen?: Nein.
- Gewonnene Erkenntnisse: Bedeutungsbewahrung reicht für veröffentlichungsreife Prosa nicht aus. Parallelstrukturen überleben maschinelle Übersetzung oft in technisch akzeptablen, aber leicht fremd klingenden Formen.

### Erkenntnis 2 - Übertragung englischer Rhetorik

- Quellartikel: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Sprache: Slowenisch
- Ursprünglicher englischer Text: `Institutions care because documentation affects governance, procurement confidence, onboarding, continuity, and auditability.`
- Ursprünglicher lokalisierter Text: `Institucije bi morale to zanimati, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Verbesserter lokalisierter Text: `Institucijam je to pomembno, ker dokumentacija vpliva na upravljanje, zaupanje pri nabavi, uvajanje novih ljudi, kontinuiteto in sledljivost.`
- Erklärung: Die ursprüngliche slowenische Version ist verständlich und semantisch abgestimmt, übernimmt aber englische rhetorische Gewohnheiten zu direkt. `Bi morale to zanimati` ist nicht falsch, klingt aber eher wie ein übersetztes Argument als wie natürlich verfasste slowenische Erläuterungsprosa. Die verbesserte Version verwendet eine idiomatischere Konstruktion für institutionelle Prosa.
- Kategorie: Übertragung englischer rhetorischer Muster; Übertragung von Diskursmustern; Stilabweichung im öffentlichen Sektor
- Würde automatisierte QA das wahrscheinlich erkennen?: Nein.
- Gewonnene Erkenntnisse: Muttersprachliche Qualität hängt oft von bevorzugten rhetorischen Mustern ab, nicht nur von lexikalischer Korrektheit. Institutionelles und gemeinwohlorientiertes Schreiben kann andere Satzgewohnheiten erfordern, als englische Originale nahelegen.

### Erkenntnis 3 - Konstruktion mit verstecktem Agens

- Quellartikel: `docs/blog/sl/spec-driven-development-for-ai-projects.md`
- Sprache: Slowenisch
- Ursprünglicher englischer Text: `Why documentation cannot wait until later`
- Ursprünglicher lokalisierter Text: `Zakaj dokumentacija ne sme čakati`
- Verbesserter lokalisierter Text: `Zakaj se z dokumentacijo ne sme čakati`
- Erklärung: Die englische Überschrift impliziert ein verstecktes menschliches Agens: Menschen sollten Dokumentation nicht auf später verschieben. Die wörtliche slowenische Version überträgt die Handlung auf das abstrakte Substantiv selbst, als wäre die Dokumentation der Akteur, der nicht warten darf. Das Ergebnis ist verständlich, rhetorisch aber unpassend. Die verbesserte Version stellt das implizite menschliche Handeln wieder her und hält die Überschrift zugleich kompakt.
- Kategorie: Konstruktion mit verstecktem Agens; anthropomorphe Abstraktion; wörtliche Subjektübertragung
- Würde automatisierte QA das wahrscheinlich erkennen?: Nein.
- Gewonnene Erkenntnisse: Überschriften sind besonders anfällig für Fehler mit verstecktem Agens, weil das Englische verdichtete Abstraktionen toleriert, die sich nicht immer natürlich in andere Sprachen übertragen lassen.

### Erkenntnis 4 - Semantische Bewahrung ohne muttersprachliche Flüssigkeit

- Quellartikel: `docs/blog/sl/ai-will-not-replace-translators.md`
- Sprache: Slowenisch
- Ursprünglicher englischer Text: `Administrators must be able to disable OCR, translation, and condition assessment when needed. Paid enrichments must be explicitly enabled, traceable, and cost-controlled.`
- Ursprünglicher lokalisierter Text: `Skrbniki morajo moči OCR, prevajanje in ocenjevanje stanja po potrebi tudi izklopiti. Plačljive obogatitve morajo biti izrecne, sledljive in stroškovno nadzorovane.`
- Verbesserter lokalisierter Text: `Skrbniki morajo imeti možnost, da po potrebi izklopijo OCR, prevajanje in ocenjevanje stanja. Plačljive obogatitve morajo biti izrecno omogočene, sledljive in stroškovno nadzorovane.`
- Erklärung: Dies ist eines der klarsten Beispiele im Repository dafür, warum muttersprachliches Review auch nach automatisierter QA notwendig bleibt. Der Entwurf bewahrt die grobe Bedeutung. Er kommuniziert die politische Stoßrichtung. Er würde viele nicht muttersprachliche Prüfungen wahrscheinlich bestehen. Dennoch enthält er drei eigenständige muttersprachliche Probleme: ungrammatisches Modalverb in `morajo moči`, ungeschickte Wortstellung in `po potrebi tudi izklopiti` und fachlich unpassende Richtlinienformulierung in `morajo biti izrecne`. Die verbesserte Version ist nicht nur hübscher. Sie verwandelt den Text von einem verständlichen Entwurf in natürliche Richtliniensprache.
- Kategorie: semantische Bewahrung bei Verlust von Flüssigkeit; Modalität; Richtlinienformulierung im Fachkontext; Register; Verbesserung der Lesbarkeit
- Würde automatisierte QA das wahrscheinlich erkennen?: Bestenfalls teilweise. Grammatikwerkzeuge könnten `morajo moči` markieren, aber automatisierte QA würde das Registerproblem und die domänenspezifische Verbesserung von `izrecne` zu `izrecno omogočene` wahrscheinlich übersehen.
- Gewonnene Erkenntnisse: Eine Übersetzung kann die Bedeutung bewahren und dennoch nicht veröffentlichungsfähig sein. Das ist eines der stärksten Argumente dafür, Korrekturen von Muttersprachlern als wiederverwendbare Evidenz zu speichern, statt sie als vergängliche Textredaktion zu behandeln.

### Erkenntnis 5 - Gemischtsprachige Veröffentlichung

- Quellartikel: `docs/blog/sl/the-cost-of-english-only-software.md`
- Sprache: Slowenisch
- Ursprünglicher englischer Text: `English-only defaults look cheap to builders, but they shift comprehension, participation, and maintenance costs onto everyone else.` Rendered English topic labels such as `digital-inclusion`, `education`, and `public-sector-software` also remained visible in publication surfaces.
- Ursprünglicher lokalisierter Text: Die slowenische Seite verwendete den lokalisierten Titel `Cena programske opreme samo v angleščini`, aber englischer Zusammenfassungstext, gerenderte englische Themenlabels und englische Textabschnitte blieben für Leser sichtbar.
- Verbesserter lokalisierter Text: Der veröffentlichte slowenische Artikel verwendet nun die lokalisierte Zusammenfassung `Privzete nastavitve samo v angleščini so za razvijalce lahko videti cenejše, vendar strošek razumevanja, sodelovanja in vzdrževanja prenesejo na vse druge.` Er verwendet außerdem lokalisierten Fließtext und lokalisierte gerenderte Themenlabels ohne englische Platzhalter oder gemischtsprachiges Durchsickern.
- Erklärung: Dies ist ein Beispiel auf Repository-Ebene und nicht nur ein Satzbeispiel, aber es ist wesentlich. Die Seite sah auf den ersten Blick übersetzt aus. Ein lokalisierter Pfad und ein lokalisierter Titel waren vorhanden. Dieser oberflächliche Erfolg hätte eine beiläufige Review leicht bestehen können. Ein Muttersprachler würde die Seite dennoch als sichtbar unvollständig erleben, weil Englisch in leserseitigen Veröffentlichungsoberflächen erhalten blieb. Hier treten auch unlokalisierter Fachjargon und unnötige englische Terminologie oft zuerst zutage: Taxonomielabels, Zusammenfassungen, Metadaten und Hilfstexte dringen durch, bevor die Kernabsätze korrigiert sind.
- Kategorie: gemischtsprachige Veröffentlichung; Lokalisierungsvollständigkeit; unnötige englische Terminologie; unlokalisierter Fachjargon
- Würde automatisierte QA das wahrscheinlich erkennen?: Ja, wenn Vollständigkeitsvalidatoren für Quell-Markdown und generiertes HTML aktiviert sind. Nein, wenn der Workflow nur Dateiexistenz und nicht die leserseitige Ausgabe prüft.
- Gewonnene Erkenntnisse: Abdeckung ohne Vollständigkeit ist ein Produktionsdefekt. Gemischtsprachige Veröffentlichung sollte als blockierender Qualitätsfehler behandelt werden, nicht als kosmetisches Problem.

### Erkenntnis 6 - Passung für Bildungs- und institutionelles Publikum

- Quellartikel: `docs/blog/sl/documentation-is-part-of-the-product.md`
- Sprache: Slowenisch
- Ursprünglicher englischer Text: `Students should care because learning to document intent is part of learning to build reliable systems, not an administrative extra.`
- Ursprünglicher lokalisierter Text: `Študenti bi morali to zanimati, ker je sposobnost dokumentiranja namena del učenja gradnje zanesljivih sistemov, ne pa administrativni dodatek.`
- Verbesserter lokalisierter Text: `Študentom bi to moralo biti pomembno, ker je dokumentiranje namena del učenja gradnje zanesljivih sistemov in ne le administrativni dodatek.`
- Erklärung: Der ursprüngliche lokalisierte Satz ist sinnvoll und verständlich, trägt aber erneut englische rhetorische Gewohnheiten und einen leicht schweren Nominalstil in sich. Die verbesserte Version liest sich für ein Bildungspublikum natürlicher, reduziert unnötige Abstraktion und passt besser zu slowenischer Erläuterungsprosa.
- Kategorie: didaktische Stilabweichung; Abweichung von Publikumserwartungen; Verbesserung des Tons
- Würde automatisierte QA das wahrscheinlich erkennen?: Nein.
- Gewonnene Erkenntnisse: Leserbildung ist Teil der Lokalisierungsqualität. Ein Satz kann korrekt sein und dennoch die natürliche didaktische Stimme verfehlen, die das Zielpublikum erwartet.

### Erkenntnis 7 - Optimierung des Ausgangstexts für Lokalisierung

- Quellartikel: `docs/blog/en/why-every-language-matters.md` und lokalisierte Varianten derselben Artikelfamilie
- Sprache: englischer Ausgangstext mit sprachübergreifender Lokalisierungswirkung; Review-Auslöser im Slowenischen beobachtet
- Ursprünglicher englischer Text: `The hidden exclusion of English-only systems`
- Ursprünglicher lokalisierter Text: Slowenisch: `Skrita izključitev angleško-izključnih sistemov`
- Verbesserter lokalisierter Text: Englisch: `Why English-only systems exclude people` Slowenisch: `Zakaj sistemi, ki so na voljo samo v angleščini, izključujejo ljudi`
- Erklärung: Die ursprüngliche englische Überschrift ist technisch korrekt, verdichtet aber zu viel in ein englischspezifisches nominales Muster. Sie stützt sich auf das abstrakte Substantiv `exclusion` und auf den kompakten Modifikator `English-only systems`. Diese Kombination ist im Englischen effizient, wirkt jedoch in vielen Zielsprachen sperrig. Im Slowenischen entstand daraus die grammatisch mögliche, aber unnatürliche Formulierung `angleško-izključnih sistemov`, die vom Leser zusätzliche Dekodierungsarbeit verlangt. Das ist nicht in erster Linie ein Versagen der Zielsprache. Es ist ein Problem des Ausgangstextdesigns. Eine Umformulierung der englischen Überschrift zu einem expliziteren Satz verbessert die Lesbarkeit im Englischen und erleichtert natürliche Übersetzung in der gesamten Artikelfamilie.
- Kategorie: Optimierung des Ausgangstexts für Lokalisierung; Vermeidung von Übersetzungsstil; quellenfreundliches Schreiben
- Würde automatisierte QA das wahrscheinlich erkennen?: Nein. Strukturelle QA, Rechtschreibprüfung, Prüfungen auf semantische Parität und Vollständigkeitsprüfungen würden wahrscheinlich alle bestehen. Das Problem tritt hervor, wenn Muttersprachler Natürlichkeit und Übersetzbarkeit über Sprachen hinweg beurteilen.
- Gewonnene Erkenntnisse: Manche Lokalisierungsprobleme sollten auf Quelltextebene gelöst werden, nicht separat in jedem Locale. Wenn mehrere Sprachen mit derselben verdichteten englischen Konstruktion kämpfen, sollte die Formulierung im Ausgangstext auf Lokalisierungsfreundlichkeit überprüft werden.

### Erkenntnis 8 - Falscher Freund in technischer Terminologie

- Quellartikel: `docs/wiki/let-books-localization-case-study.md` und `docs/wiki/sl/let-books-localization-case-study.md`
- Sprache: slowenische Review-Erkenntnis, ausgelöst durch englische technische Terminologie
- Ursprünglicher englischer Text: `Benchmark fixture direction` und `Structured review examples should also be stored as reusable benchmark fixtures so future LLM evaluation can measure:`
- Ursprünglicher lokalisierter Text: `Primerjalna smer napeljave` und `Strukturirane primere pregledov je treba shraniti tudi kot primerjalne napeljave za večkratno uporabo, tako da lahko prihodnje vrednotenje LLM meri:`
- Verbesserter lokalisierter Text: `Referenčni primeri za primerjalno vrednotenje` und `Strukturirane primere pregledov je treba shraniti tudi kot ponovno uporabne referenčne primere za primerjalno vrednotenje, da lahko prihodnje vrednotenje LLM meri:`
- Erklärung: Das Problem ist nicht Grammatik. Es ist Domäneninterpretation. In Kontexten von Testing, Benchmarking und Evaluation bedeutet `fixture` gewöhnlich ein wiederverwendbares Referenzbeispiel, einen Testfall oder ein Evaluationsartefakt. Die slowenische Übersetzung interpretierte den Begriff mit einer Bedeutung aus dem Bereich physischer Infrastruktur, die mit Verkabelung oder Installation zu tun hat. Dadurch entstand semantisch irreführender Text, obwohl der Übersetzer möglicherweise einen wörterbuchgültigen Sinn gewählt hatte. Das ist ein klassischer falscher Freund technischer Terminologie: Die falsche Domäne gewann.
- Kategorie: falscher Freund in technischer Terminologie; Domänenterminologie; Vokabular für Testing und Evaluation
- Würde automatisierte QA das wahrscheinlich erkennen?: Nein. Rechtschreibung, Grammatik und grobe semantische Prüfungen können alle bestehen, weil der Satz oberflächlich kohärent bleibt. Das Versagen wird sichtbar, wenn fachkundige menschliche Review prüft, ob der technische Begriff zum richtigen professionellen Kontext gehört.
- Gewonnene Erkenntnisse: Technische Terminologie sollte nach ihrer Domänenbedeutung übersetzt werden, nicht nach der Standardwörterbuchbedeutung. Wiederverwendbare Benchmark-Referenzbeispiele, Benchmark-Testfälle oder Referenzbeispiele für Evaluation sind hier angemessene Interpretationen; infrastrukturbezogene Bedeutungen sind es nicht.

### Arbeitsregel für das Korpus

Immer wenn eine neue Kategorie entdeckt wird:

1. den Inhalt korrigieren
2. einen Korpuseintrag hinzufügen
3. das Problem klassifizieren
4. Hinweise ergänzen oder verfeinern
5. nach Möglichkeit Validatorabdeckung hinzufügen
6. nach Möglichkeit Regressionsabdeckung hinzufügen
7. die neue Erkenntnis aus Workflow- und QA-Dokumenten querverweisen

### Strikte Regel für gemeldete Fehler

Konkrete gemeldete Fehler von Muttersprachlern sind keine optionalen Vorschläge.

Jeder gemeldete Lokalisierungsdefekt muss letztlich:

- behoben werden
- in Leitlinien überführt werden
- wenn praktikabel in einen Validator überführt werden
- mit Begründung als absichtlich ungelöst dokumentiert werden
- oder ausdrücklich im Erkenntniskorpus nachverfolgt werden, bis eines der oben genannten Ergebnisse eintritt

Das Repository sollte gemeldete Lokalisierungsdefekte niemals stillschweigend vergessen.

Muttersprachler sind hier nicht deshalb am wertvollsten, weil sie offensichtliche Fehler beheben.

Sie sind am wertvollsten, weil sie korrekten Inhalt in natürliche, kulturell angemessene Kommunikation mit Veröffentlichungsqualität verwandeln.

## Teil 7 - Kontinuierliches Lernen

Jedes Lokalisierungsproblem sollte das System verbessern.

Bevorzugtes Prinzip:

> Jeder Lokalisierungsdefekt sollte das System verbessern.
>
> Ein entdecktes Problem sollte nicht nur den aktuellen Text korrigieren. Es sollte auch die Wahrscheinlichkeit verringern, dass ähnliche Defekte in künftigen Übersetzungen auftreten.

Die bevorzugte Schleife ist:

```text
Problem finden
↓
Problem beheben
↓
Problem dokumentieren
↓
Problem klassifizieren
↓
Workflow verbessern
↓
Validierung hinzufügen, wo praktikabel
↓
Wiederauftreten verhindern
```

Das ideale Ergebnis ist, dass ein Lokalisierungsproblem behoben wird:

- einmal im Inhalt
- einmal im System

## Teil 8 - Weiterentwicklung der Validatoren

Frage bei jedem wichtigen Problem:

> Kann das automatisch erkannt werden?

### Vollständig automatisierbar

Beispiele:

- fehlende Artikelvariante
- unübersetzte Zusammenfassung
- unübersetzte Metadaten
- gemischtsprachige Seite
- defekter Sprachumschalter
- fehlende generierte Navigation

### Teilweise automatisierbar

Beispiele:

- verdächtige Verkürzung
- wahrscheinliche semantische Drift
- fehlende Zielgruppenerklärung
- fehlende Parität bei verwandten Inhalten
- verdächtige Diagrammabweichung

### Menschliches Review

Beispiele:

- rhetorische Natürlichkeit
- Flüssigkeit
- kulturelle Angemessenheit
- didaktische Wirksamkeit
- muttersprachliches Register
- Eignung für den Stil des öffentlichen Sektors

Die richtige Frage ist nicht, ob Menschen oder Validatoren besser sind.

Die richtige Frage ist, welche Defektklasse zu welcher Feedback-Schicht gehört.

## Wenn Qualität messbar wird

Am Anfang entsteht Vertrauen vor allem durch manuelle Prüfung.

Entwickler lesen Seiten.

Reviewer vergleichen Übersetzungen.

Mitwirkende suchen Probleme einzeln.

Mit zunehmender Reife des Repositorys entsteht Vertrauen zunehmend durch angesammelte Feedback-Mechanismen:

- Dokumentation
- Review-Leitlinien
- Validatoren
- CI-Prüfungen
- Barrierefreiheitsprüfungen
- Prüfungen auf semantische Parität
- Prüfungen auf Lokalisierungsvollständigkeit
- Erkenntnisse aus muttersprachlichen Reviews
- Regressionstests

Ab diesem Punkt ändert sich die Hauptfrage.

Statt zu fragen:

> Haben wir alles manuell geprüft?

beginnt das Projekt zu fragen:

> Welche Feedback-Systeme würden es einem Problem erlauben, unbemerkt zu überleben?

Das ist der Übergang von Inhaltsverifikation zu Systemverifikation.

Ein reifes Lokalisierungssystem ist nicht eines, das niemals Defekte enthält.

Ein reifes Lokalisierungssystem ist eines, in dem bekannte Defektklassen:

- dokumentiert
- erkennbar
- reproduzierbar
- nachverfolgt
- kontinuierlich überwacht
- schwer versehentlich wieder einzuführen

sind.

## Teil 9 - Lokalisierungsschulden

Verfolge `Localization Debt` als den verbleibenden Inhalts-Backlog.

Typische Schulden umfassen:

- unübersetzte Zusammenfassungen
- unübersetzte Metadaten
- unübersetzte Fließtexte
- Platzhalter
- unübersetzte Diagramme
- unübersetzte Tags
- veraltete Links zwischen Sprachvarianten

Schulden messen verbleibende Nachbesserungsarbeit.

Schulden sagen nicht, ob das System lernt.

## Teil 10 - Offene Defektklassen

Verfolge `Open Defect Classes` als die Anzahl von Problemkategorien, die noch nicht vollständig durch Richtlinien, Workflows, Validatoren und CI verhindert werden.

Beispiele:

- unübersetzte Zusammenfassungen
- unübersetzte Fließtexte
- Veröffentlichung mit Platzhaltern
- unübersetzte Metadaten
- gemischtsprachige Veröffentlichung
- künftig entdeckte Klassen

Schulden messen die verbleibende Arbeit.

Defektklassen messen die Systemreife.

## Teil 11 - Erst Klassen beheben, dann Dateien

Optimiere nicht primär rund um:

```text
47 Dateien verbleiben
```

Optimiere rund um:

```text
3 Defektklassen verbleiben
```

Bevorzugter Prozess:

1. die Klasse identifizieren
2. die Grundursache bestimmen
3. die höchstliegende Quelle beheben
4. den Validator aktualisieren
5. den Workflow aktualisieren
6. erst dann den verbleibenden Inhalt korrigieren

Derselbe Fehler, der sich über viele Dateien hinweg wiederholt, ist in der Regel zuerst ein Systemproblem und erst danach ein Dateiproblem.

## Teil 12 - Schließung von Defektklassen

Wenn eine Defektklasse null Vorkommen erreicht:

1. Validatorabdeckung hinzufügen, falls sie fehlt
2. Validierung, wenn praktikabel, blockierend machen
3. Regressionsprüfungen hinzufügen
4. Hinweise für Mitwirkende aktualisieren
5. Hinweise für KI-Agenten aktualisieren
6. die Klasse als geschlossen markieren

Das Ziel ist nicht:

> Heute keine Vorkommen.

Das Ziel ist:

> Das Problem kann morgen nicht stillschweigend zurückkehren.

## Teil 13 - Quellorientierte Nachbesserung

Standardreihenfolge der Untersuchung:

1. Quell-Markdown
2. Lokalisierungs-Quelldateien
3. Metadaten
4. Register
5. Generatoren
6. generierte Artefakte
7. generiertes HTML

Behebe die höchstliegende mögliche Quelle.

Vermeide es, generiertes HTML zu patchen, wenn der Quellinhalt falsch ist.

Das verhindert wiederholte Reparaturarbeit in nachgelagerten Schritten und hält das Repository erklärbar.

## Teil 14 - Workflow für KI-Agenten

Der Standard-Workflow zur Fehlersuche ist:

```text
Problem finden
↓
Quelle der Wahrheit finden
↓
Quelle beheben
↓
Neu generieren
↓
Validieren
↓
Wiederholen
```

Wenn dasselbe Problem wiederholt auftritt:

```text
Defektklasse erstellen
↓
Validator erstellen
↓
Hinweis erstellen
↓
Nachbesserung fortsetzen
```

Das vierte Auftreten desselben Problems sollte in der Regel eine Systemverbesserung auslösen statt einer weiteren isolierten manuellen Korrektur.

## Teil 15 - Lokalisierungsdrift

Lokalisierungsdrift bedeutet, dass lokalisierte Inhalte existieren, aber die Quelle nicht mehr widerspiegeln.

Typische Driftfälle umfassen:

- neue Quellabschnitte
- neue Beispiele
- neue Warnhinweise
- geänderte Schlussfolgerungen
- geänderte Diagramme
- aktualisierte Screenshots
- geänderte Hinweise für Mitwirkende

Aktualität ist die Art, wie Drift messbar wird.

Drift-Management sollte Folgendes nutzen:

- Bewusstsein für Quellrevisionen
- semantischen Vergleich, wo praktikabel
- zunächst warnungsbasierte CI
- blockierende CI bei hoher Zuverlässigkeit
- ausdrückliche Aufmerksamkeit der Reviewer bei größeren Aktualisierungen

## Teil 16 - Reifegradmodell des Repositorys

Das Repository sollte sich durch diese Phasen bewegen:

1. Inhalt übersetzen.
2. Probleme erkennen.
3. Validatoren erstellen.
4. Validierung automatisieren.
5. Wiederauftreten verhindern.
6. Lokalisierungsdrift managen.
7. Zukünftige Mitwirkende und KI-Systeme lehren.

So sammelt sich institutionelles Wissen an.

Frühere Arbeit hört auf, wegwerfbar zu sein, weil spätere Systeme sie erben.

## Teil 17 - Inhalts-Roadmap

Das Programm sollte kohärente mehrsprachige Abdeckung erhalten über:

- Blogartikel, die erklären, warum Lokalisierung wichtig ist
- Wiki-Seiten, die Richtlinien und Referenzregeln definieren
- Lernleitfäden, die Workflows vermitteln
- Styleguides, die Schreiben, Terminologie und Review-Praxis vermitteln
- Audit- und Governance-Dokumente, die Reife und Defekte verfolgen
- Fallstudien, die praktische Evidenz bewahren

Die Roadmap sollte priorisieren:

1. kanonische Vollständigkeit im Englischen
2. vollständige Sprachabdeckung über unterstützte Locales hinweg
3. leserseitige Vollständigkeit in jedem Locale
4. hochwertige Validatorabdeckung
5. Wachstum des muttersprachlichen Korpus
6. Drift-Monitoring für zentrale Inhalte

Alle wichtigen Dokumente sollten sich eng querverlinken, damit Leser vom Prinzip zum Workflow, zur Richtlinie und zur Evidenz gelangen können.

## Teil 18 - Erfolgskriterien

Ein Leser, der zwischen unterstützten Sprachen wechselt, sollte Folgendes antreffen:

- dieselben Kernkonzepte
- dieselben Beispiele
- dieselben Warnhinweise
- denselben didaktischen Wert
- dieselbe praktische Anleitung

Gleichzeitig sollte jede Sprache so wirken, als sei sie natürlich für ihr Publikum geschrieben.

Das höchste Ziel der Lokalisierung im großen Maßstab ist:

**vollständige Sprachabdeckung, Lokalisierungsvollständigkeit, semantische Parität, muttersprachliche Lesbarkeit, kulturelle Angemessenheit, didaktische Wirksamkeit, kontinuierliche Verbesserung, Defektvermeidung, Drift-Management und nachhaltige mehrsprachige Veröffentlichung durch starke Feedback-Schleifen.**

## Operative Kennzahlen

Verfolge diese Zahlen kontinuierlich:

```text
Localization Debt = X
Open Defect Classes = Y
```

Das langfristige Ziel ist:

```text
Localization Debt = 0
Open Defect Classes = 0
```

## Zugehörige Dokumente

- `wiki/localization-at-scale.md`
- `wiki/translation-quality-assurance.md`
- `wiki/localization-ci-cd.md`
- `wiki/localization-governance.md`
- `wiki/localization-maturity-model.md`
- `wiki/let-books-localization-case-study.md`
- `style-guide/localization/README.md`
- `style-guide/localization/ai-translation-review-records.md`
- `learning/how-to-build-a-localization-pipeline.md`
- `learning/how-to-review-ai-assisted-translations.md`
- `learning/how-to-run-localization-qa-in-ci.md`
- `localization-audit-report.md`
