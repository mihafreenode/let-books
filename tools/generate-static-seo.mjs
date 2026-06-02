#!/usr/bin/env node
/**
 * Purpose:
 * - Regenerate static SEO and social metadata across homepage, docs pages, and the static
 *   demo from one central policy file.
 *
 * Why:
 * - Metadata drift across many static pages is difficult to review manually and easy to
 *   miss in code review.
 *
 * Detects / Enforces:
 * - Canonical URLs, hreflang alternates, favicon package references, social metadata, and
 *   manifest descriptions.
 *
 * Examples:
 * - Missing hreflang alternates after adding a locale.
 * - Docs page keeping stale canonical metadata after a route rename.
 *
 * Limitations:
 * - Relies on hand-maintained page maps and controlled `<head>` replacement.
 *
 * Related:
 * - tools/README.md
 * - tools/validate-blog.mjs
 * - tools/validate-generated-site-structure.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://letbooks.org';
const ogImageUrl = `${siteUrl}/og-image.png`;

const pageMap = {
  overview: {
    en: 'en/index.html',
    sl: 'sl/index.html',
    hr: 'hr/index.html',
    bs: 'bs/index.html',
    'sr-Latn': 'sr-Latn/index.html',
    'sr-Cyrl': 'sr-Cyrl/index.html',
    mk: 'mk/index.html',
    sq: 'sq/index.html',
    de: 'de/index.html',
    it: 'it/index.html',
    fr: 'fr/index.html',
    es: 'es/index.html',
  },
  individuals: {
    en: 'en/individuals.html',
    sl: 'sl/posamezniki.html',
    hr: 'hr/individuals.html',
    bs: 'bs/individuals.html',
    'sr-Latn': 'sr-Latn/individuals.html',
    'sr-Cyrl': 'sr-Cyrl/individuals.html',
    mk: 'mk/individuals.html',
    sq: 'sq/individuals.html',
    de: 'de/individuals.html',
    it: 'it/individuals.html',
    fr: 'fr/individuals.html',
    es: 'es/individuals.html',
  },
  institutions: {
    en: 'en/institutions.html',
    sl: 'sl/institucije.html',
    hr: 'hr/institutions.html',
    bs: 'bs/institutions.html',
    'sr-Latn': 'sr-Latn/institutions.html',
    'sr-Cyrl': 'sr-Cyrl/institutions.html',
    mk: 'mk/institutions.html',
    sq: 'sq/institutions.html',
    de: 'de/institutions.html',
    it: 'it/institutions.html',
    fr: 'fr/institutions.html',
    es: 'es/institutions.html',
  },
  administrators: {
    en: 'en/administrators.html',
    sl: 'sl/skrbniki.html',
    hr: 'hr/administrators.html',
    bs: 'bs/administrators.html',
    'sr-Latn': 'sr-Latn/administrators.html',
    'sr-Cyrl': 'sr-Cyrl/administrators.html',
    mk: 'mk/administrators.html',
    sq: 'sq/administrators.html',
    de: 'de/administrators.html',
    it: 'it/administrators.html',
    fr: 'fr/administrators.html',
    es: 'es/administrators.html',
  },
};

const pageMetadata = {
  overview: {
    en: {
      title: 'LetBooks Documentation',
      description: 'LetBooks documentation explains how to catalog, review, and retrieve educational books with mobile-first inventory, QR workflows, and library-ready exports.',
    },
    sl: {
      title: 'LetBooks Dokumentacija',
      description: 'Dokumentacija LetBooks pojasnjuje, kako z mobilnim popisom, QR poteki in izvozi za knjižnice popisati, pregledati ter prevzeti izobraževalne knjige.',
    },
    hr: {
      title: 'LetBooks Dokumentacija',
      description: 'Dokumentacija LetBooks objašnjava kako uz mobilni popis, QR tijekove i izvoze za knjižnice katalogizirati, pregledati i preuzeti obrazovne knjige.',
    },
    bs: {
      title: 'LetBooks Dokumentacija',
      description: 'Dokumentacija LetBooks objašnjava kako uz mobilni popis, QR tokove i izvoze za biblioteke katalogizirati, pregledati i preuzeti obrazovne knjige.',
    },
    'sr-Latn': {
      title: 'LetBooks Dokumentacija',
      description: 'Dokumentacija LetBooks objašnjava kako uz mobilni popis, QR tokove i izvoze za biblioteke katalogizovati, pregledati i preuzeti obrazovne knjige.',
    },
    'sr-Cyrl': {
      title: 'LetBooks документација',
      description: 'Документација LetBooks објашњава како уз мобилни попис, QR токове и извозе за библиотеке каталогизовати, прегледати и преузети образовне књиге.',
    },
    mk: {
      title: 'LetBooks документација',
      description: 'Документацијата на LetBooks објаснува како со мобилен попис, QR текови и извоз за библиотеки да се каталогизираат, прегледаат и преземат образовни книги.',
    },
    sq: {
      title: 'Dokumentimi i LetBooks',
      description: 'Dokumentimi i LetBooks shpjegon si të katalogoni, shqyrtoni dhe tërhiqni libra arsimorë me inventar mobil, rrjedha QR dhe eksporte për biblioteka.',
    },
    de: {
      title: 'LetBooks Dokumentation',
      description: 'Die LetBooks Dokumentation zeigt, wie Bildungsbücher mit mobiler Erfassung, QR-Abläufen und Exporten für Bibliotheken katalogisiert, geprüft und abgeholt werden.',
    },
    it: {
      title: 'Documentazione LetBooks',
      description: 'La documentazione di LetBooks spiega come catalogare, rivedere e ritirare libri educativi con inventario mobile, flussi QR ed esportazioni per le biblioteche.',
    },
    fr: {
      title: 'Documentation LetBooks',
      description: 'La documentation LetBooks explique comment cataloguer, examiner et retrouver des livres éducatifs avec un inventaire mobile, des flux QR et des exports pour bibliothèques.',
    },
    es: {
      title: 'Documentación LetBooks',
      description: 'La documentación de LetBooks explica cómo catalogar, revisar y retirar libros educativos con inventario móvil, flujos QR y exportaciones para bibliotecas.',
    },
  },
  individuals: {
    en: {
      title: 'LetBooks for Individuals',
      description: 'Guide for individuals using LetBooks to catalog books by box, capture photos, and prepare clear donation lists for libraries and partner institutions.',
    },
    sl: {
      title: 'LetBooks za posameznike',
      description: 'Vodič za posameznike v LetBooks: popis knjig po škatlah, zajem fotografij in priprava preglednih seznamov za darovanje knjižnicam.',
    },
    hr: {
      title: 'LetBooks za pojedince',
      description: 'Vodič za pojedince u LetBooks: popis knjiga po kutijama, snimanje fotografija i priprema preglednih popisa donacija za knjižnice.',
    },
    bs: {
      title: 'LetBooks za pojedince',
      description: 'Vodič za pojedince u LetBooks: popis knjiga po kutijama, snimanje fotografija i priprema preglednih lista donacija za biblioteke.',
    },
    'sr-Latn': {
      title: 'LetBooks za pojedince',
      description: 'Vodič za pojedince u LetBooks: popis knjiga po kutijama, snimanje fotografija i priprema preglednih lista donacija za biblioteke.',
    },
    'sr-Cyrl': {
      title: 'LetBooks за појединце',
      description: 'Водич за појединце у LetBooks: попис књига по кутијама, снимање фотографија и припрема прегледних листа донација за библиотеке.',
    },
    mk: {
      title: 'LetBooks за поединци',
      description: 'Водич за поединци во LetBooks: попис на книги по кутии, снимање фотографии и подготовка на прегледни листи за донации кон библиотеки.',
    },
    sq: {
      title: 'LetBooks për individë',
      description: 'Udhëzues për individë në LetBooks: katalogim librash sipas kutive, fotografi dhe lista të qarta dhurimi për biblioteka dhe partnerë.',
    },
    de: {
      title: 'LetBooks für Einzelpersonen',
      description: 'Leitfaden für Einzelpersonen in LetBooks: Bücher nach Kisten erfassen, Fotos aufnehmen und übersichtliche Spendenlisten für Bibliotheken vorbereiten.',
    },
    it: {
      title: 'LetBooks per individui',
      description: 'Guida per individui in LetBooks: catalogare libri per scatola, acquisire foto e preparare elenchi di donazione chiari per biblioteche e partner.',
    },
    fr: {
      title: 'LetBooks pour les particuliers',
      description: 'Guide pour les particuliers dans LetBooks : cataloguer les livres par boîte, prendre des photos et préparer des listes de don claires pour les bibliothèques.',
    },
    es: {
      title: 'LetBooks para particulares',
      description: 'Guía para particulares en LetBooks: catalogar libros por cajas, tomar fotos y preparar listas claras de donación para bibliotecas y entidades socias.',
    },
  },
  institutions: {
    en: {
      title: 'LetBooks for Institutions',
      description: 'Guide for libraries and partner institutions using LetBooks to review donated books, record decisions, and coordinate retrieval from real storage locations.',
    },
    sl: {
      title: 'LetBooks za institucije',
      description: 'Vodič za knjižnice in partnerske ustanove v LetBooks za pregled podarjenih knjig, beleženje odločitev in usklajevanje prevzemov.',
    },
    hr: {
      title: 'LetBooks za institucije',
      description: 'Vodič za knjižnice i partnerske institucije u LetBooks za pregled doniranih knjiga, bilježenje odluka i koordinaciju preuzimanja.',
    },
    bs: {
      title: 'LetBooks za institucije',
      description: 'Vodič za biblioteke i partnerske institucije u LetBooks za pregled doniranih knjiga, bilježenje odluka i koordinaciju preuzimanja.',
    },
    'sr-Latn': {
      title: 'LetBooks za institucije',
      description: 'Vodič za biblioteke i partnerske institucije u LetBooks za pregled doniranih knjiga, beleženje odluka i koordinaciju preuzimanja.',
    },
    'sr-Cyrl': {
      title: 'LetBooks за институције',
      description: 'Водич за библиотеке и партнерске институције у LetBooks за преглед донираних књига, бележење одлука и координацију преузимања.',
    },
    mk: {
      title: 'LetBooks за институции',
      description: 'Водич за библиотеки и партнерски институции во LetBooks за преглед на донирани книги, бележење одлуки и координација на преземање.',
    },
    sq: {
      title: 'LetBooks për institucione',
      description: 'Udhëzues për biblioteka dhe institucione partnere në LetBooks për shqyrtimin e librave të dhuruar, regjistrimin e vendimeve dhe koordinimin e tërheqjes.',
    },
    de: {
      title: 'LetBooks für Institutionen',
      description: 'Leitfaden für Bibliotheken und Partnerinstitutionen in LetBooks zur Prüfung gespendeter Bücher, zur Erfassung von Entscheidungen und zur Abholkoordination.',
    },
    it: {
      title: 'LetBooks per istituzioni',
      description: 'Guida per biblioteche e istituzioni partner in LetBooks per esaminare libri donati, registrare decisioni e coordinare il ritiro dalle sedi di deposito.',
    },
    fr: {
      title: 'LetBooks pour les institutions',
      description: 'Guide pour les bibliothèques et institutions partenaires dans LetBooks pour examiner les livres donnés, consigner les décisions et coordonner le retrait.',
    },
    es: {
      title: 'LetBooks para instituciones',
      description: 'Guía para bibliotecas e instituciones asociadas en LetBooks para revisar libros donados, registrar decisiones y coordinar la retirada.',
    },
  },
  administrators: {
    en: {
      title: 'LetBooks for Administrators',
      description: 'Guide for administrators using LetBooks to manage access, privacy, storage locations, and operational donation workflows across shared collections.',
    },
    sl: {
      title: 'LetBooks za skrbnike',
      description: 'Vodič za skrbnike LetBooks za upravljanje dostopa, zasebnosti, lokacij shranjevanja in operativnih potekov darovanja knjig.',
    },
    hr: {
      title: 'LetBooks za administratore',
      description: 'Vodič za administratore LetBooks za upravljanje pristupom, privatnošću, lokacijama pohrane i operativnim tijekovima donacija knjiga.',
    },
    bs: {
      title: 'LetBooks za administratore',
      description: 'Vodič za administratore LetBooks za upravljanje pristupom, privatnošću, lokacijama skladištenja i operativnim tokovima donacija knjiga.',
    },
    'sr-Latn': {
      title: 'LetBooks za administratore',
      description: 'Vodič za administratore LetBooks za upravljanje pristupom, privatnošću, lokacijama skladištenja i operativnim tokovima donacija knjiga.',
    },
    'sr-Cyrl': {
      title: 'LetBooks за администраторе',
      description: 'Водич за администраторе LetBooks за управљање приступом, приватношћу, локацијама складиштења и оперативним токовима донација књига.',
    },
    mk: {
      title: 'LetBooks за администратори',
      description: 'Водич за администратори на LetBooks за управување со пристап, приватност, локации за складирање и оперативни текови за донација на книги.',
    },
    sq: {
      title: 'LetBooks për administratorë',
      description: 'Udhëzues për administratorë në LetBooks për menaxhimin e aksesit, privatësisë, vendndodhjeve të ruajtjes dhe rrjedhave operative të dhurimit.',
    },
    de: {
      title: 'LetBooks für Administratoren',
      description: 'Leitfaden für Administratoren in LetBooks zur Verwaltung von Zugriff, Datenschutz, Lagerorten und operativen Abläufen für Bücherspenden.',
    },
    it: {
      title: 'LetBooks per amministratori',
      description: 'Guida per amministratori in LetBooks per gestire accessi, privacy, sedi di deposito e flussi operativi delle donazioni di libri.',
    },
    fr: {
      title: 'LetBooks pour les administrateurs',
      description: 'Guide pour les administrateurs dans LetBooks pour gérer l\'accès, la confidentialité, les lieux de stockage et les flux opérationnels liés aux dons de livres.',
    },
    es: {
      title: 'LetBooks para administradores',
      description: 'Guía para administradores en LetBooks para gestionar acceso, privacidad, ubicaciones de almacenamiento y flujos operativos de donación de libros.',
    },
  },
  'language-hub': {
    en: {
      title: 'LetBooks Docs | Language Index',
      description: 'Browse LetBooks documentation by language and open localized guides for individuals, institutions, and administrators.',
    },
  },
};

function getPageMeta(pageType, locale) {
  return pageMetadata[pageType]?.[locale] || pageMetadata[pageType]?.en;
}

function getCanonical(pathname) {
  return `${siteUrl}${pathname}`;
}

function buildFaviconTags({ indent = '    ', includeManifest = true } = {}) {
  const tags = [
    '<link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml">',
    '<link rel="icon" href="/favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)">',
    '<link rel="icon" href="/favicon/favicon.ico" sizes="any">',
    '<link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32">',
    '<link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16">',
    '<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180">',
  ];

  if (includeManifest) {
    tags.push('<link rel="manifest" href="/favicon/site.webmanifest">');
  }

  return tags.map((tag) => `${indent}${tag}`).join('\n');
}

function buildAlternateTags(pageType, indent = '    ') {
  const tags = [];

  if (pageType === 'language-hub') {
    // The docs hub is a language chooser rather than a locale-owned article. Each localized
    // docs overview still deserves an alternate entry, but x-default should resolve to the
    // neutral `/docs/` hub instead of a specific language page.
    for (const [locale, localePath] of Object.entries(pageMap.overview)) {
      tags.push(`${indent}<link rel="alternate" hreflang="${locale}" href="${getCanonical(`/docs/${localePath}`)}">`);
    }
    tags.push(`${indent}<link rel="alternate" hreflang="x-default" href="${getCanonical('/docs/')}">`);
    return tags.join('\n');
  }

  for (const [locale, localePath] of Object.entries(pageMap[pageType])) {
    tags.push(`${indent}<link rel="alternate" hreflang="${locale}" href="${getCanonical(`/docs/${localePath}`)}">`);
  }
  tags.push(`${indent}<link rel="alternate" hreflang="x-default" href="${getCanonical('/docs/')}">`);
  return tags.join('\n');
}

function buildHead({ title, description, canonical, alternates, extraHead = '', stylesheetHref, scriptSrc, includeManifest = true }) {
  return `  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>${title}</title>\n    <meta name="description" content="${description}">\n    <meta name="robots" content="index, follow, max-image-preview:large">\n    <meta name="application-name" content="LetBooks">\n    <link rel="canonical" href="${canonical}">\n${alternates ? `${alternates}\n` : ''}${buildFaviconTags({ includeManifest })}\n    <meta name="theme-color" content="#0f5b45">\n    <meta property="og:title" content="${title}">\n    <meta property="og:description" content="${description}">\n    <meta property="og:image" content="${ogImageUrl}">\n    <meta property="og:image:alt" content="LetBooks social preview image">\n    <meta property="og:url" content="${canonical}">\n    <meta property="og:type" content="website">\n    <meta property="og:site_name" content="LetBooks">\n    <meta name="twitter:card" content="summary_large_image">\n    <meta name="twitter:title" content="${title}">\n    <meta name="twitter:description" content="${description}">\n    <meta name="twitter:image" content="${ogImageUrl}">\n    <meta name="twitter:image:alt" content="LetBooks social preview image">\n${extraHead}${stylesheetHref ? `    <link rel="stylesheet" href="${stylesheetHref}">\n` : ''}${scriptSrc ? `    <script src="${scriptSrc}" defer></script>\n` : ''}  </head>`;
}

function replaceHead(filePath, headContent) {
  const current = fs.readFileSync(filePath, 'utf8');
  const headStart = current.search(/<head>/i);
  const headEndMatch = current.match(/<\/head>/i);

  if (headStart === -1 || headEndMatch?.index === undefined) {
    throw new Error(`Failed to find <head> boundaries in ${filePath}`);
  }

  const headEnd = headEndMatch.index + headEndMatch[0].length;
  const beforeHead = current.slice(0, headStart).replace(/[ \t]+$/, '');
  const afterHead = current.slice(headEnd);
  // Replace only the <head> block so page body structure, localized content, and generator
  // output outside metadata remain untouched. This keeps SEO regeneration safe to run after
  // other HTML-producing steps without rewriting entire files.
  const next = `${beforeHead}${headContent}${afterHead}`;
  if (next === current) {
    return; // no change needed
  }
  fs.writeFileSync(filePath, next);
}

function updateHomepage(rootDir) {
  const filePath = path.join(rootDir, 'index.html');
  const title = 'LetBooks | Practical book donation and retrieval';
  const description = 'LetBooks helps people and libraries catalog, offer, review, and retrieve educational books through mobile-first inventory and QR-based workflows.';
  const head = buildHead({
    title,
    description,
    canonical: `${siteUrl}/`,
    alternates: '    <link rel="alternate" hreflang="x-default" href="https://letbooks.org/">',
    stylesheetHref: 'docs/assets/css/style.css',
  });
  replaceHead(filePath, head);
}

function updateDocs(rootDir) {
  const docsDir = path.join(rootDir, 'docs');

  const hubHead = buildHead({
    title: pageMetadata['language-hub'].en.title,
    description: pageMetadata['language-hub'].en.description,
    canonical: `${siteUrl}/docs/`,
    alternates: buildAlternateTags('language-hub'),
    stylesheetHref: 'assets/css/style.css',
    scriptSrc: 'assets/js/docs-lang.js',
  });
  replaceHead(path.join(docsDir, 'index.html'), hubHead);

  for (const [pageType, locales] of Object.entries(pageMap)) {
    for (const [locale, relativePath] of Object.entries(locales)) {
      const meta = getPageMeta(pageType, locale);
      const filePath = path.join(docsDir, relativePath);
      const canonical = getCanonical(`/docs/${relativePath}`);
      const head = buildHead({
        title: meta.title,
        description: meta.description,
        canonical,
        alternates: buildAlternateTags(pageType),
        stylesheetHref: '../assets/css/style.css',
        scriptSrc: '../assets/js/docs-lang.js',
      });
      replaceHead(filePath, head);
    }
  }
}

function updateStaticDemo(rootDir) {
  const filePath = path.join(rootDir, 'static-demo', 'index.html');
  const title = 'LetBooks Static Demo | Local-first mobile book workflow';
  const description = 'Try the LetBooks static demo: a local-first mobile web app for cataloging boxes and books, scanning codes, and exporting donation data.';
  const head = `  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n    <title>${title}</title>\n    <meta name="description" content="${description}">\n    <meta name="robots" content="index, follow, max-image-preview:large">\n    <meta name="application-name" content="LetBooks">\n    <link rel="canonical" href="${siteUrl}/static-demo/">\n${buildFaviconTags({ includeManifest: false })}\n    <meta name="theme-color" content="#0f5b45">\n    <meta property="og:title" content="${title}">\n    <meta property="og:description" content="${description}">\n    <meta property="og:image" content="${ogImageUrl}">\n    <meta property="og:image:alt" content="LetBooks social preview image">\n    <meta property="og:url" content="${siteUrl}/static-demo/">\n    <meta property="og:type" content="website">\n    <meta property="og:site_name" content="LetBooks">\n    <meta name="twitter:card" content="summary_large_image">\n    <meta name="twitter:title" content="${title}">\n    <meta name="twitter:description" content="${description}">\n    <meta name="twitter:image" content="${ogImageUrl}">\n    <meta name="twitter:image:alt" content="LetBooks social preview image">\n    <link rel="manifest" href="manifest.webmanifest">\n    <link rel="stylesheet" href="app.css">\n  </head>`;
  replaceHead(filePath, head);

  const manifestPath = path.join(rootDir, 'static-demo', 'manifest.webmanifest');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  manifest.description = 'LetBooks is a local-first mobile web app for cataloging, boxing, scanning, exporting, and transferring donated educational books.';
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

function updateFaviconManifest(rootDir) {
  const manifestPath = path.join(rootDir, 'favicon', 'site.webmanifest');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  manifest.description = 'LetBooks helps catalog, offer, review, and retrieve educational books with mobile-first inventory, QR workflows, and library-friendly documentation.';
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

function writeManifest(rootDir) {
  const docsDir = path.join(rootDir, 'docs');

  // Core doc pages
  const files = [path.join(rootDir, 'index.html'), path.join(docsDir, 'index.html')];
  for (const [, locales] of Object.entries(pageMap)) {
    for (const [, relativePath] of Object.entries(locales)) {
      files.push(path.join(docsDir, relativePath));
    }
  }

  // Blog index pages per locale
  const locales = Object.keys(pageMap.overview);
  for (const locale of locales) {
    files.push(path.join(docsDir, 'blog', locale, 'index.html'));
  }

  // Learning index pages per locale
  for (const locale of locales) {
    files.push(path.join(docsDir, 'learning', locale, 'index.html'));
  }

  // Wiki index pages per locale
  for (const locale of locales) {
    files.push(path.join(docsDir, 'wiki', locale, 'index.html'));
  }

  // Blog article HTML files
  for (const locale of locales) {
    const blogLocaleDir = path.join(docsDir, 'blog', locale);
    if (!fs.existsSync(blogLocaleDir)) continue;
    const entries = fs.readdirSync(blogLocaleDir);
    for (const entry of entries) {
      if (entry.endsWith('.html') && entry !== 'index.html' && fs.statSync(path.join(blogLocaleDir, entry)).isFile()) {
        files.push(path.join(blogLocaleDir, entry));
      }
    }
  }

  const manifest = { files: files.map((f) => path.relative(rootDir, f).replace(/\\/g, '/')).sort() };
  fs.writeFileSync(path.join(docsDir, '.seo-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

  let ok = true;
  for (const f of files) {
    if (!fs.existsSync(f)) {
      console.error(`Missing: ${path.relative(rootDir, f)}`);
      ok = false;
    }
  }
  if (!ok) {
    console.error('One or more required pages are missing — see above.');
    process.exit(1);
  }
  console.log(`All ${files.length} required pages present`);
}

const rootDir = process.cwd();
updateHomepage(rootDir);
updateDocs(rootDir);
updateStaticDemo(rootDir);
updateFaviconManifest(rootDir);
writeManifest(rootDir);
