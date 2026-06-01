---
title: "Garanzia di qualità della traduzione"
summary: >-
  La traduzione QA combina convalida automatizzata, controllo ortografico, revisione terminologica, controlli di accessibilità e giudizio umano.
topics:
  - translation-quality
  - qa
  - localization
---
# Garanzia di qualità della traduzione

## Riepilogo

La traduzione QA combina convalida automatizzata, controllo ortografico, revisione terminologica, controlli di accessibilità e giudizio umano.

## Controlli comuni

- traduzioni mancanti
- Perdita di inglese
- Mancate corrispondenze dei segnaposto
- collegamenti interrotti
- deriva del glossario
- copertura testuale sull'accessibilità
- parità di screenshot e diagrammi

## Prove di revisione umana

La traduzione QA dovrebbe anche preservare brevi registrazioni di revisione umana per correzioni rappresentative assistite da AI.

Campi minimi:

- testo originale
- testo corretto
- categoria di errore
- ipotesi della causa principale
- motivazione del revisore

Ciò è importante perché anche quando il significato generale viene preservato, le traduzioni generate da AI possono richiedere la revisione da parte di un madrelingua per correggere sottili problemi di grammatica, modalità, terminologia e registro specifico del dominio. Questi problemi sono spesso difficili da rilevare solo attraverso i parametri di qualità automatizzati.

## Tassonomia comune degli errori di traduzione AI

- grammatica
- modalità
- terminologia
- registrarsi
- scioltezza
- traduzione letterale
- ambiguità
- perdita di contesto
- ordine delle parole
- collocazione
- Scrittura o ortografia
- formulazione della politica del dominio
- formulazione dell'accessibilità

## Lightweight benchmark scoring

For repeatable AI-translation evaluation, use a lightweight 0-3 rubric instead of relying only on pass/fail judgment.

Recommended dimensions:

- meaning accuracy
- grammar and fluency
- terminology and domain fit
- register and style
- review effort

Recommended release labels:

- blocker
- major revision
- minor revision
- ready with review signoff

This creates scorecard-friendly data without requiring a heavyweight localization-measurement framework.

## Pagine correlate

- `localization-ci-cd.md`
- `translation-memory-and-glossaries.md`
- `../style-guide/localization/ai-translation-review-records.md`
- `../style-guide/localization/llm-translation-benchmark-fixtures.md`
- `../learning/how-to-run-localization-qa-in-ci.md`
