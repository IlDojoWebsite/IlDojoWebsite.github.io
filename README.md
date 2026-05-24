# A.S.D. Il Dojo — Guida aggiornamento sito

## Struttura repository

```
/
├── index.html                   ← Homepage
├── gare.html                    ← Pagina eventi
├── gare.js                      ← Lista file gare (aggiorna qui)
├── _data/
│   ├── contatti.json            ← Indirizzo, telefoni, prossimi impegni
│   ├── orari.json               ← Orari allenamenti
│   └── gare/
│       ├── 2026-03-europei-heraklion.json
│       ├── 2025-11-bangkok-mondiali.json
│       └── ...
└── assets/
    ├── img_dojo/                ← Immagini statiche del sito
    └── gare/
        ├── 2026-03-europei-heraklion/
        │   ├── cover.jpg        ← OBBLIGATORIA (copertina card)
        │   ├── foto-01.jpg
        │   ├── foto-02.jpg
        │   └── ...
        └── ...
```

---

## Dopo ogni gara — 3 passi

### 1. Crea la cartella immagini

Crea `assets/gare/AAAA-MM-nomegara/` e mettici dentro:
- `cover.jpg` — foto principale (obbligatoria)
- `foto-01.jpg`, `foto-02.jpg`, … — tutte le altre foto

### 2. Crea il file JSON in `_data/gare/`

Nome file: `AAAA-MM-nomegara.json` (stesso nome della cartella immagini)

```json
{
  "titolo": "Titolo della gara",
  "data": "2026-05-10",
  "luogo": "Città, Nazione",
  "bandiera": "🇮🇹",
  "categoria": "europei",
  "intro": "Breve testo per la card (max 200 caratteri)",
  "corpo": "Testo completo...\n\nSecondo paragrafo.\n\n**Grassetto** e *corsivo* supportati.",
  "risultati": [
    { "medaglia": "🥇", "specialita": "Duo Men Adults", "atleti": "Nome A. & Nome B." },
    { "medaglia": "🥈", "specialita": "Show Women",     "atleti": "Nome C. & Nome D." }
  ],
  "fonti": [
    { "testata": "La Sicilia", "url": "https://..." }
  ],
  "evidenza": false
}
```

**Categorie disponibili:** `mondiali` · `europei` · `worldgames` · `grandprix` · `coppaitalia` · `nazionale` · `open` · `stage`

### 3. Aggiungi il nome file in `gare.js`

Apri `gare.js` e aggiungi il nome (senza `.json`) in cima alla lista:

```javascript
const GARE_FILES = [
  '2026-05-nuova-gara',          // ← aggiunto qui
  '2026-03-europei-heraklion',
  ...
];
```

Fai commit e push. Il sito si aggiorna in pochi secondi.

---

## Aggiornare orari o contatti

Modifica direttamente `_data/orari.json` o `_data/contatti.json` e fai push.

---

## Form contatti (Formspree)

In `index.html` cerca `YOUR_FORM_ID` e sostituisci con il tuo ID da [formspree.io](https://formspree.io).
