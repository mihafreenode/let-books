---
title: "Validazione della documentazione oltre il linting"
summary: "Perché la qualità della documentazione richiede più livelli di validazione, inclusi localizzazione, accessibilità, output generato e controlli di stampa, e non solo un singolo passaggio di linting."
topics:
  - validation
  - documentation
  - localization
related:
  blog:
    - documentation-is-part-of-the-product
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Validazione della documentazione oltre il linting

Il linting è utile, ma copre solo una parte della qualità della documentazione. Può individuare errori di formattazione, problemi di sintassi o alcune classi di struttura danneggiata. Da solo non può garantire che le pagine generate siano corrette, che le varianti localizzate restino allineate, che la navigazione sia coerente o che l'output di stampa sia leggibile.

Per questo la qualità della documentazione dovrebbe essere trattata come una disciplina ingegneristica con più livelli di validazione. Validatori diversi rispondono a domande diverse.

- La validazione dei link controlla se i riferimenti si risolvono ancora correttamente.
- La validazione della localizzazione controlla se il testo visibile al lettore resta tradotto e coerente.
- La validazione della parità controlla se le sezioni importanti esistono ancora nelle varianti linguistiche.
- I controlli di accessibilità esaminano titoli, etichette e usabilità strutturale.
- La validazione dell'HTML generato controlla se il contenuto sorgente è diventato un output corretto.
- La validazione di stampa controlla se gli output PDF e cartacei supportati restano utilizzabili.

Questo modello a più livelli è ancora più importante nei workflow assistiti dall'IA. I contenuti possono essere abbozzati rapidamente, rigenerati rapidamente e localizzati rapidamente. Questo accelera i cicli di feedback, ma aumenta anche il rischio di pubblicare errori dall'aspetto rifinito se la pipeline verifica solo la formattazione superficiale.

I Topics sono un buon esempio. Quando in LetBooks sono diventati un tipo di documentazione di prima classe, hanno dovuto ereditare navigazione, indicizzazione della ricerca, generazione della sitemap, gestione della localizzazione, validazione del sito generato e controlli di stampa. Un percorso di qualità ridotta avrebbe creato una nuova superficie di contenuto con garanzie più deboli rispetto al resto della piattaforma.

Il principio è semplice: ogni nuovo tipo di documentazione deve ereditare la validazione esistente. Così il modello di qualità resta scalabile. Invece di inventare eccezioni per ogni nuova sezione, la piattaforma estende le stesse aspettative a ogni superficie rivolta al lettore.

La qualità della documentazione va oltre il linting, perché i lettori sperimentano l'intero sistema, non solo i file sorgente.
