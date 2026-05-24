/**
 * gare.js — Modulo dati condiviso tra index.html e gare.html
 *
 * ══════════════════════════════════════════════════════════
 *  DOPO OGNI GARA: aggiungi il nome del file JSON qui sotto
 *  in cima alla lista (ordine cronologico inverso).
 * ══════════════════════════════════════════════════════════
 */

const GARE_FILES = [
  '2026-03-europei-heraklion',
  '2025-11-bangkok-mondiali',
  '2025-08-world-games-chengdu',
  '2025-10-beveren-europei',
  '2025-10-coppa-italia',
  '2025-04-paris-grandprix',
  // ← AGGIUNGI QUI i nuovi file (solo il nome, senza .json)
];

const GARE_BASE_PATH = '_data/gare/';
const IMG_BASE_PATH  = 'assets/gare/';

const CAT_LABEL = {
  mondiali:    'Mondiali',
  europei:     'Europei',
  worldgames:  'World Games',
  grandprix:   'Grand Prix',
  coppaitalia: 'Coppa Italia',
  nazionale:   'Campionato Italiano',
  open:        'Open Internazionale',
  stage:       'Stage',
};

const MESI = [
  'Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'
];

function fmtData(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return MESI[d.getMonth()] + ' ' + d.getFullYear();
}

function mdToHtml(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,     '<em>$1</em>')
    .split(/\n\n+/)
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
}

async function loadAllGare() {
  const results = await Promise.allSettled(
    GARE_FILES.map(slug =>
      fetch(`${GARE_BASE_PATH}${slug}.json`)
        .then(r => r.ok ? r.json().then(d => ({ ...d, _slug: slug })) : null)
    )
  );
  return results
    .map(r => r.status === 'fulfilled' ? r.value : null)
    .filter(Boolean)
    .sort((a, b) => new Date(b.data) - new Date(a.data));
}

function coverSrc(slug) {
  return `${IMG_BASE_PATH}${slug}/cover.jpg`;
}
