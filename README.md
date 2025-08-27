# Privacy-Check CLI (Proof of Concept)

[![Node.js](https://img.shields.io/badge/node->=18-brightgreen)](https://nodejs.org/)

**Privacy-Check CLI** è un proof-of-concept per analizzare siti web in modalità headless, raccogliendo informazioni su richieste, risposte e cookie. L'obiettivo è mostrare **come si può sviluppare un analizzatore di privacy/consenso** in Node.js usando Playwright, senza rivelare tutte le funzionalità avanzate.

---

## Caratteristiche della versione PoC

- Analizza un singolo sito o un batch di siti
- Genera file JSON con:
  - Tutte le richieste HTTP/HTTPS fatte dal browser
  - Tutte le risposte HTTP/HTTPS ricevute
  - Cookie settati
- Headless browser (senza apertura visiva)
- Output minimale, pronto per essere esteso

> ⚠️ Questa versione è solo un proof-of-concept. Non effettua ancora controlli completi su GDPR, banner cookie o sicurezza avanzata.

---

## Installazione

1. Clona il repository:

```bash
git clone https://github.com/tuo-username/privacy-check.git
cd privacy-check
```
Installa le dipendenze:

```bash
npm install
```

Per usare la CLI localmente (sviluppo), puoi eseguire:


```bash
npm link
```

Questo creerà un comando globale privacy-check sul tuo terminale.

In alternativa, puoi sempre lanciare la CLI direttamente con Node:


```bash
node bin/privacy-check.js https://esempio.com
```

Uso
Analisi di un singolo sito:

```bash
privacy-check https://esempio.com
```
Analisi batch di più siti:

```bash
Copia codice
privacy-check https://sito1.com https://sito2.com https://sito3.com
```

I file JSON generati si troveranno in:

results/<hostname>/<titolo-pagina>/

Scopo del progetto
L'idea principale è mostrare il percorso tecnico di sviluppo di un analizzatore privacy. Serve a sviluppatori, aziende e avvocati per capire:

Come l’analizzatore visita il sito

Come cattura richieste, risposte e cookie

Come strutturare i dati per un report

Questa PoC non include tutte le funzionalità avanzate di analisi dei banner cookie, sicurezza o PII: serve solo per dimostrare la tecnica.

Licenza
MIT License – puoi usare il codice come esempio, ma non garantiamo funzionalità complete né supporto legale per analisi privacy.

Note sulla sicurezza e copia
Alcune funzionalità avanzate non sono incluse per proteggere l’idea.

Chiunque può contribuire o ispirarsi al progetto, ma la versione completa con report dettagliati rimane privata fino al rilascio futuro.