---
title: "Lingue regionali"
summary: "Perché il supporto delle lingue regionali richiede più di ampie etichette di mercato e spesso dipende da scrittura, istruzione e contesto istituzionale."
topic_category: localization-at-scale
topics:
  - smaller-languages
  - language-rights
  - localization
related:
  blog:
    - preserving-smaller-languages-in-the-digital-age
  wiki:
    - language-support-matrix
    - unicode-and-script-correctness
---

# Lingue regionali

Le lingue regionali vengono spesso trattate come casi limite nella pianificazione del software, ma in pratica rappresentano utenti, istituzioni e comunità di conoscenza reali. Supportarle bene di solito richiede più che aggiungere un generico contenitore di “altre lingue”.

La sfida non riguarda solo il volume di traduzione. Include anche supporto alla scrittura, correttezza Unicode, tipografia, terminologia, norme educative e la differenza tra famiglie linguistiche che sono vicine ma non intercambiabili. Una regione può contenere diversi sistemi di scrittura, diversi standard e diverse aspettative sul linguaggio rivolto al pubblico.

Questo conta nella documentazione perché accuratezza concettuale e fiducia degli utenti sono fortemente legate alla scelta linguistica. Un progetto che rivendica rilevanza regionale ma collassa lingue o scritture distinte in un unico strato di comodità spesso apparirà incompleto anche se la tecnologia sottostante funziona.

Let Books è un buon esempio perché il suo contesto previsto include lo sloveno e diverse comunità linguistiche dell'ex Jugoslavia e dei Balcani, comprese scritture latine e cirilliche. La specifica del progetto tratta queste distinzioni come aspetti di prima classe e non cosmetici. Il materiale di riferimento di supporto su [Correttezza Unicode e delle scritture](/docs/wiki/it/unicode-and-script-correctness.html) e sulla [Matrice di supporto linguistico](/docs/wiki/it/language-support-matrix.html) mostra perché questa decisione influisce sia sull'implementazione sia sulla pubblicazione.

Il supporto delle lingue regionali non è quindi una funzione di branding. Fa parte del modo in cui il sistema rispetta le comunità che dichiara di servire.
