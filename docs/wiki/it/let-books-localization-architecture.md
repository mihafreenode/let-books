---
title: "Let Books Architettura di localizzazione"
summary: >-
  Questa pagina riassume il modo in cui Let Books organizza documenti multilingue, stringhe dell'interfaccia utente, generatori, convalida e policy sui contenuti compatibili con script.
topics:
  - let-books
  - localization
  - engineering-systems
---
# Let Books Architettura di localizzazione

## Riepilogo

Questa pagina riassume il modo in cui Let Books organizza documenti multilingue, stringhe dell'interfaccia utente, generatori, convalida e policy sui contenuti compatibili con script.

## Strati attuali

- documenti statici multilingue sotto `docs/`
- stringhe dell'interfaccia utente demo statiche localizzate sotto `static-demo/locales/`
- generatori di articoli, wiki e apprendimento sotto `tools/`
- script e flussi di lavoro di convalida in `tools/` e `.github/workflows/`

## Pagine correlate

- `let-books-localization-case-study.md`
- `let-books-accessibility-and-localization.md`
- `../blog/en/localization-at-scale.md`
