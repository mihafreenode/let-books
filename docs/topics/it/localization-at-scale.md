---
title: "Localizzazione su larga scala"
summary: "Perché la localizzazione su larga scala è una questione di ingegneria, accessibilità, governance e pubblicazione piuttosto che un passaggio finale di traduzione."
topic_category: localization-at-scale
topics:
  - localization
  - continuous-localization
  - governance
related:
  blog:
    - localization-at-scale
  learning:
    - how-to-build-a-localization-pipeline
  wiki:
    - localization-at-scale
---

# Localizzazione su larga scala

La localizzazione su larga scala è la disciplina di rendere sostenibili i contenuti multilingui quando il numero di pagine, lingue, collaboratori e cicli di rilascio cresce oltre un coordinamento manuale ad hoc. Non riguarda solo la traduzione di stringhe. Riguarda il controllo della deriva tra contenuti sorgente, output generato, decisioni di design, terminologia, validazione e workflow di pubblicazione.

I piccoli progetti a volte possono localizzare in modo informale. Una persona scrive il contenuto, un'altra lo traduce e l'output viene revisionato manualmente. Su scala maggiore, quel modello diventa fragile. I cambiamenti avvengono troppo spesso e la qualità varia troppo, a meno che il processo stesso non sia strutturato.

Per questo la localizzazione su larga scala viene di solito trattata come un problema di sistemi. I team hanno bisogno di convenzioni sorgente, controllo terminologico, workflow di traduzione, controlli di parità, regole di pubblicazione e validazione in CI. Devono anche decidere quali tipi di contenuto richiedono copertura completa e quali possono tollerare un rilascio graduale. La guida di learning sulla [costruzione di una pipeline di localizzazione](/docs/learning/it/how-to-build-a-localization-pipeline.html) spiega il livello pratico del workflow.

In Let Books, la localizzazione su larga scala fa parte dell'identità del progetto perché il prodotto è esplicitamente multilingue sia nelle sue ambizioni di UI sia in quelle della base di conoscenza. Questo influisce non solo sulle future stringhe dell'applicazione, ma anche su documentazione, diagrammi, output di stampa e navigazione tra lingue. La pagina wiki di riferimento [Localizzazione su larga scala](/docs/wiki/it/localization-at-scale.html) descrive i principi durevoli, mentre l'articolo del blog con lo stesso nome fornisce un inquadramento narrativo.

La lezione generale è che il lavoro multilingue diventa più affidabile quando viene trattato come infrastruttura: progettato intenzionalmente, validato in modo continuo e mantenuto come parte del prodotto anziché dopo di esso.
