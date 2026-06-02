---
title: "Livelli di validazione"
summary: "Come più fasi di validazione riducono classi diverse di errore nei contenuti, nell'output generato, nell'implementazione e nei workflow di rilascio."
topic_category: spec-driven-development
topics:
  - validation
  - product-quality
  - ci-cd
related:
  learning:
    - how-to-add-validation-rules-and-ci-gates-in-stages
  wiki:
    - validation-layers
    - localization-ci-cd
---

# Livelli di validazione

I livelli di validazione sono controlli separati che esaminano un sistema da angolazioni diverse. Un livello può verificare la sintassi, un altro la struttura, un altro ancora la qualità della localizzazione e un altro l'output renderizzato. Nessun singolo validatore può catturare in modo affidabile ogni problema significativo.

L'approccio stratificato conta perché i fallimenti emergono in fasi diverse. Un documento sorgente può essere ben formato ma semanticamente debole. Una pagina HTML generata può essere strutturalmente valida ma mostrare comunque testo UI non tradotto. Una demo può sembrare corretta sullo schermo ma stampare male. Ognuno di questi problemi richiede un tipo diverso di controllo.

Per questo le pipeline mature di documentazione e software raramente si affidano a un unico passaggio di linting. Combinano validazione del formato, controlli dei link, controlli di parità, controlli di accessibilità, verifica della build e revisione specifica dell'output. La guida di learning su [aggiungere regole di validazione e gate CI per fasi](/docs/learning/it/how-to-add-validation-rules-and-ci-gates-in-stages.html) descrive come i team possano adottare questo approccio gradualmente invece di provare ad automatizzare tutto in una volta.

In Let Books, i livelli di validazione esistono già attraverso revisione della localizzazione, controlli dell'HTML generato, confronti tra lingue e verifica della struttura del sito. Trattare l'output di stampa come una funzionalità supportata estende la stessa logica. Se la documentazione deve funzionare come PDF o carta, il comportamento di stampa ha bisogno di un proprio stadio di validazione invece di essere trattato come una preoccupazione cosmetica facoltativa.

La pagina wiki sui [Livelli di validazione](/docs/wiki/it/validation-layers.html) copre la vista di riferimento. Questa pagina tema sottolinea il principio generale: ogni nuovo canale di consegna o tipo di documentazione dovrebbe ereditare i livelli esistenti che già proteggono la qualità altrove.
