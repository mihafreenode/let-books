#!/usr/bin/env node
/**
 * generate-index-pages.mjs
 *
 * Generates index.html pages for blog, learning, and wiki sections
 * per locale. Also updates doc index page header nav to point to
 * blog index.html instead of a single article.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const BLOG_DIR = path.join(DOCS_DIR, 'blog');
const LEARNING_DIR = path.join(DOCS_DIR, 'learning');
const WIKI_DIR = path.join(DOCS_DIR, 'wiki');
const SITE_URL = 'https://letbooks.org';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const LOCALES = ['en', 'sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];

const LOCALE_SHORT_LABELS = {
  en: 'EN', sl: 'SL', hr: 'HR', bs: 'BS',
  'sr-Latn': 'SR-Latn', 'sr-Cyrl': 'SR-Cyrl',
  mk: 'MK', sq: 'SQ', de: 'DE', it: 'IT', fr: 'FR', es: 'ES',
};

const LOCALE_LABELS = {
  en: 'English', sl: 'Slovenščina', hr: 'Hrvatski', bs: 'Bosanski',
  'sr-Latn': 'Srpski latinica', 'sr-Cyrl': 'Српски ћирилица',
  mk: 'Македонски', sq: 'Shqip', de: 'Deutsch', it: 'Italiano',
  fr: 'Français', es: 'Español',
};

const NAV_LABELS = {
  en: { docs: 'Docs', blog: 'Blog', learning: 'Learning', wiki: 'Wiki' },
  sl: { docs: 'Dokumentacija', blog: 'Blog', learning: 'Učni vodniki', wiki: 'Wiki' },
  hr: { docs: 'Dokumentacija', blog: 'Blog', learning: 'Vodiči za učenje', wiki: 'Wiki' },
  bs: { docs: 'Dokumentacija', blog: 'Blog', learning: 'Vodiči za učenje', wiki: 'Wiki' },
  'sr-Latn': { docs: 'Dokumentacija', blog: 'Blog', learning: 'Vodiči za učenje', wiki: 'Wiki' },
  'sr-Cyrl': { docs: 'Документација', blog: 'Блог', learning: 'Водичи за учење', wiki: 'Вики' },
  mk: { docs: 'Документација', blog: 'Блог', learning: 'Водичи за учење', wiki: 'Вики' },
  sq: { docs: 'Dokumentim', blog: 'Blogu', learning: 'Udhëzues mësimor', wiki: 'Wiki' },
  de: { docs: 'Doku', blog: 'Blog', learning: 'Lernleitfäden', wiki: 'Wiki' },
  it: { docs: 'Documentazione', blog: 'Blog', learning: 'Guide didattiche', wiki: 'Wiki' },
  fr: { docs: 'Documentation', blog: 'Blog', learning: "Guides d'apprentissage", wiki: 'Wiki' },
  es: { docs: 'Documentación', blog: 'Blog', learning: 'Guías de aprendizaje', wiki: 'Wiki' },
};

const FOOTER_DESC = {
  en: 'A practical platform for cataloging, offering, and retrieving educational books.',
  sl: 'Praktična platforma za katalogizacijo, ponujanje in iskanje izobraževalnih knjig.',
  hr: 'Praktična platforma za katalogizaciju, nuđenje i pronalaženje obrazovnih knjiga.',
  bs: 'Praktična platforma za katalogizaciju, nuđenje i pronalaženje obrazovnih knjiga.',
  'sr-Latn': 'Praktična platforma za katalogizaciju, nuđenje i pronalaženje obrazovnih knjiga.',
  'sr-Cyrl': 'Практична платформа за каталогизацију, нуђење и проналажење образовних књига.',
  mk: 'Практична платформа за каталогизација, нудење и пронаоѓање образовни книги.',
  sq: 'Një platformë praktike për katalogim, ofrim dhe gjetje librash edukativë.',
  de: 'Eine praktische Plattform zum Katalogisieren, Anbieten und Auffinden von Bildungsbüchern.',
  it: 'Una piattaforma pratica per catalogare, offrire e recuperare libri educativi.',
  fr: 'Une plateforme pratique pour cataloguer, offrir et retrouver des livres éducatifs.',
  es: 'Una plataforma práctica para catalogar, ofrecer y recuperar libros educativos.',
};

const FOOTER_MICROCOPY = {
  en: 'Early alpha prototype. Documentation and UI text are AI-assisted. Institutions and integrations mentioned in examples are conceptual only and do not imply partnership or endorsement.',
  sl: 'Zgodnji alfa prototip. Dokumentacija in besedilo uporabniškega vmesnika sta podprta z AI. Ustanove in integracije, omenjene v primerih, so zgolj konceptualne in ne pomenijo partnerstva ali podpore.',
  hr: 'Rani alfa prototip. Dokumentacija i tekst korisničkog sučelja potpomognuti su umjetnom inteligencijom. Ustanove i integracije spomenute u primjerima konceptualne su i ne znače partnerstvo ili podršku.',
  bs: 'Rani alfa prototip. Dokumentacija i tekst korisničkog interfejsa potpomognuti su umjetnom inteligencijom. Ustanove i integracije spomenute u primjerima konceptualne su i ne znače partnerstvo ili podršku.',
  'sr-Latn': 'Rani alfa prototip. Dokumentacija i tekst korisničkog interfejsa potpomognuti su veštačkom inteligencijom. Ustanove i integracije pomenute u primerima konceptualne su i ne znače partnerstvo ili podršku.',
  'sr-Cyrl': 'Рани алфа прототип. Документација и текст корисничког интерфејса потпомогнути су вештачком интелигенцијом. Установе и интеграције поменуте у примерима концептуалне су и не значе партнерство или подршку.',
  mk: 'Ран алфа прототип. Документацијата и текстот на корисничкиот интерфејс се AI-потпомогнати. Установите и интеграциите спомнати во примерите се концептуални и не значат партнерство или поддршка.',
  sq: 'Prototip i hershëm alfa. Dokumentacioni dhe teksti i ndërfaqes janë të ndihmuara nga AI. Institucionet dhe integrimet e përmendura në shembuj janë konceptuale dhe nuk nënkuptojnë partneritet ose mbështetje.',
  de: 'Früher Alpha-Prototyp. Dokumentation und UI-Texte sind KI-gestützt. In Beispielen erwähnte Institutionen und Integrationen sind konzeptionell und bedeuten keine Partnerschaft oder Unterstützung.',
  it: 'Prototipo alpha iniziale. Documentazione e testi dell\'interfaccia sono assistiti dall\'IA. Istituzioni e integrazioni citate negli esempi sono concettuali e non implicano partnership o sostegno.',
  fr: 'Prototype alpha précoce. La documentation et les textes d\'interface sont assistés par IA. Les institutions et intégrations mentionnées dans les exemples sont conceptuelles et n\'impliquent ni partenariat ni soutien.',
  es: 'Prototipo alfa temprano. La documentación y los textos de interfaz están asistidos por IA. Las instituciones e integraciones mencionadas en los ejemplos son conceptuales y no implican asociación ni respaldo.',
};

const FOOTER_LINK_LABELS = {
  en: { overview: 'Overview', projectHome: 'Project home', demo: 'Demo', allLanguages: 'All languages' },
  sl: { overview: 'Pregled', projectHome: 'Domača stran', demo: 'Demo', allLanguages: 'Vsi jeziki' },
  hr: { overview: 'Pregled', projectHome: 'Početna stranica', demo: 'Demo', allLanguages: 'Svi jezici' },
  bs: { overview: 'Pregled', projectHome: 'Početna stranica', demo: 'Demo', allLanguages: 'Svi jezici' },
  'sr-Latn': { overview: 'Pregled', projectHome: 'Početna stranica', demo: 'Demo', allLanguages: 'Svi jezici' },
  'sr-Cyrl': { overview: 'Преглед', projectHome: 'Почетна страница', demo: 'Демо', allLanguages: 'Сви језици' },
  mk: { overview: 'Преглед', projectHome: 'Почетна страница', demo: 'Демо', allLanguages: 'Сите јазици' },
  sq: { overview: 'Përmbledhje', projectHome: 'Faqja kryesore', demo: 'Demo', allLanguages: 'Të gjitha gjuhët' },
  de: { overview: 'Übersicht', projectHome: 'Startseite', demo: 'Demo', allLanguages: 'Alle Sprachen' },
  it: { overview: 'Panoramica', projectHome: 'Home page', demo: 'Demo', allLanguages: 'Tutte le lingue' },
  fr: { overview: 'Aperçu', projectHome: 'Page d\'accueil', demo: 'Démo', allLanguages: 'Toutes les langues' },
  es: { overview: 'Vista general', projectHome: 'Página de inicio', demo: 'Demo', allLanguages: 'Todos los idiomas' },
};

const FAVICON_TAGS = [
  '<link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml">',
  '<link rel="icon" href="/favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)">',
  '<link rel="icon" href="/favicon/favicon.ico" sizes="any">',
  '<link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32">',
  '<link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16">',
  '<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180">',
  '<link rel="manifest" href="/favicon/site.webmanifest">',
].join('\n    ');

function buildHreflangTags(section) {
  return LOCALES.map((l) => {
    const href = `${SITE_URL}/docs/${section}/${l}/index.html`;
    return `    <link rel="alternate" hreflang="${l}" href="${href}">`;
  }).join('\n');
}

function buildHead({ title, description, canonical, stylesheetHref, scriptSrc, hreflangTags }) {
  const escaped = description.replace(/"/g, '&quot;');
  const defaultScriptSrc = stylesheetHref.replace('/css/', '/js/').replace('style.css', 'docs-lang.js');
  const resolvedScriptSrc = scriptSrc || defaultScriptSrc;
  const head = [
    '  <head>',
    '    <meta charset="utf-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1">',
    `    <title>${title}</title>`,
    `    <meta name="description" content="${escaped}">`,
    '    <meta name="robots" content="index, follow, max-image-preview:large">',
    '    <meta name="application-name" content="LetBooks">',
    `    <link rel="canonical" href="${canonical}">`,
    `    ${FAVICON_TAGS}`,
    '    <meta name="theme-color" content="#0f5b45">',
    `    <meta property="og:title" content="${title}">`,
    `    <meta property="og:description" content="${escaped}">`,
    `    <meta property="og:image" content="${OG_IMAGE}">`,
    '    <meta property="og:image:alt" content="LetBooks social preview image">',
    `    <meta property="og:url" content="${canonical}">`,
    '    <meta property="og:type" content="website">',
    '    <meta property="og:site_name" content="LetBooks">',
    '    <meta name="twitter:card" content="summary_large_image">',
    `    <meta name="twitter:title" content="${title}">`,
    `    <meta name="twitter:description" content="${escaped}">`,
    `    <meta name="twitter:image" content="${OG_IMAGE}">`,
    '    <meta name="twitter:image:alt" content="LetBooks social preview image">',
    `    <link rel="stylesheet" href="${stylesheetHref}">`,
    `    <script src="${resolvedScriptSrc}" defer></script>`,
  ];
  if (hreflangTags) {
    head.push(hreflangTags);
  }
  head.push('  </head>');
  return head.join('\n');
}

function buildHeadWithCanonical(title, description, canonical, section) {
  const pathname = canonical.replace(SITE_URL, '');
  const segments = pathname.split('/').filter(Boolean);
  const fileDirDepth = Math.max(0, segments.length - 1);
  const targetDepth = 1;
  const upLevels = Math.max(0, fileDirDepth - targetDepth);
  const relPrefix = upLevels > 0 ? '../'.repeat(upLevels) : '';
  const stylesheetHref = `${relPrefix}assets/css/style.css`;
  const scriptSrc = `${relPrefix}assets/js/docs-lang.js`;
  const hreflangTags = section ? buildHreflangTags(section) : '';
  return buildHead({ title, description, canonical, stylesheetHref, scriptSrc, hreflangTags });
}

function isDirectory(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function extractTitleFromHtml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/<title>([^<]+?)\s*(?:\|?\s*LetBooks?)?\s*<\/title>/i);
  if (m) return m[1].trim();
  const h1 = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (h1) return h1[1].trim();
  return path.basename(filePath, '.html');
}

function extractTitleFromMd(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const body = content.replace(/^---[\s\S]*?---\n*/, '');
  const h1 = body.match(/^#\s+(.+)/m);
  if (h1) return h1[1].trim();
  return path.basename(filePath, '.md');
}

// ─── Blog labels per locale ───────────────────────────────

const BLOG_INFO = {
  en: { title: 'Blog', desc: 'LetBooks blog articles about spec-driven development, metadata, documentation, and building AI-assisted projects.' },
  sl: { title: 'Blog', desc: 'Blog članki o razvoju na podlagi specifikacij, metapodatkih, dokumentaciji in gradnji projektov z AI.' },
  hr: { title: 'Blog', desc: 'Blog članci o razvoju vođenom specifikacijom, metapodacima, dokumentaciji i izradi projekata uz AI.' },
  bs: { title: 'Blog', desc: 'Blog članci o razvoju vođenom specifikacijom, metapodacima, dokumentaciji i izradi projekata uz AI.' },
  'sr-Latn': { title: 'Blog', desc: 'Blog članci o razvoju vođenom specifikacijom, metapodacima, dokumentaciji i izgradnji projekata uz AI.' },
  'sr-Cyrl': { title: 'Блог', desc: 'Блог чланци о развоју вођеном спецификацијом, метаподацима, документацији и изградњи пројеката уз AI.' },
  mk: { title: 'Блог', desc: 'Блог статии за развој воден од спецификации, метаподатоци, документација и градење проекти со AI.' },
  sq: { title: 'Blogu', desc: 'Artikuj blogu për zhvillim të drejtuar nga specifikimet, meta të dhëna, dokumentacion dhe ndërtim projektesh me AI.' },
  de: { title: 'Blog', desc: 'Blog-Artikel über spezifikationsgesteuerte Entwicklung, Metadaten, Dokumentation und KI-gestützte Projekte.' },
  it: { title: 'Blog', desc: 'Articoli del blog sullo sviluppo guidato da specifiche, metadati, documentazione e progetti assistiti da AI.' },
  fr: { title: 'Blog', desc: 'Articles de blog sur le développement piloté par les spécifications, les métadonnées, la documentation et les projets assistés par IA.' },
  es: { title: 'Blog', desc: 'Artículos del blog sobre desarrollo guiado por especificaciones, metadatos, documentación y proyectos asistidos por IA.' },
};

const LEARNING_INFO = {
  en: { title: 'Learning Guides', desc: 'Structured guides for writing specs, planning implementation, and keeping documentation, demos, and code aligned.' },
  sl: { title: 'Učni vodniki', desc: 'Strukturirani vodniki za pisanje specifikacij, načrtovanje izvedbe in usklajevanje dokumentacije, demota in kode.' },
  hr: { title: 'Vodiči za učenje', desc: 'Strukturirani vodiči za pisanje specifikacija, planiranje implementacije i usklađivanje dokumentacije, demoa i koda.' },
  bs: { title: 'Vodiči za učenje', desc: 'Strukturirani vodiči za pisanje specifikacija, planiranje implementacije i usklađivanje dokumentacije, demoa i koda.' },
  'sr-Latn': { title: 'Vodiči za učenje', desc: 'Strukturirani vodiči za pisanje specifikacija, planiranje implementacije i usklađivanje dokumentacije, demoa i koda.' },
  'sr-Cyrl': { title: 'Водичи за учење', desc: 'Структурирани водичи за писање спецификација, планирање имплементације и усклађивање документације, демоа и кода.' },
  mk: { title: 'Водичи за учење', desc: 'Структурирани водичи за пишување спецификации, планирање имплементација и усогласување на документација, демо и код.' },
  sq: { title: 'Udhëzues mësimor', desc: 'Udhëzues të strukturuar për shkrimin e specifikimeve, planifikimin e zbatimit dhe mbajtjen e dokumentacionit, demostrimit dhe kodit të përafruar.' },
  de: { title: 'Lernleitfäden', desc: 'Strukturierte Leitfäden zum Schreiben von Spezifikationen, zur Planung der Implementierung und zur Abstimmung von Dokumentation, Demo und Code.' },
  it: { title: 'Guide didattiche', desc: 'Guide strutturate per scrivere specifiche, pianificare l\'implementazione e allineare documentazione, demo e codice.' },
  fr: { title: 'Guides d\'apprentissage', desc: 'Guides structurés pour rédiger des spécifications, planifier la mise en œuvre et aligner documentation, démonstration et code.' },
  es: { title: 'Guías de aprendizaje', desc: 'Guías estructuradas para redactar especificaciones, planificar la implementación y mantener alineados documentación, demo y código.' },
};

const WIKI_INFO = {
  en: { title: 'Wiki', desc: 'Evergreen reference pages covering spec-driven development, documentation traceability, validation layers, and related topics.' },
  sl: { title: 'Wiki', desc: 'Trajnejše referenčne strani o razvoju na podlagi specifikacij, sledljivosti dokumentacije, validacijskih plasteh in sorodnih temah.' },
  hr: { title: 'Wiki', desc: 'Trajne referentne stranice o razvoju vođenom specifikacijom, sljedivosti dokumentacije, slojevima validacije i srodnim temama.' },
  bs: { title: 'Wiki', desc: 'Trajne referentne stranice o razvoju vođenom specifikacijom, sljedivosti dokumentacije, slojevima validacije i srodnim temama.' },
  'sr-Latn': { title: 'Wiki', desc: 'Trajne referentne stranice o razvoju vođenom specifikacijom, sledljivosti dokumentacije, slojevima validacije i srodnim temama.' },
  'sr-Cyrl': { title: 'Вики', desc: 'Трајне референтне странице о развоју вођеном спецификацијом, следљивости документације, слојевима валидације и сродним темама.' },
  mk: { title: 'Вики', desc: 'Трајни референтни страници за развој воден од спецификации, следливост на документација, слоеви на валидација и сродни теми.' },
  sq: { title: 'Wiki', desc: 'Faqe referencë afatgjatë që mbulojnë zhvillimin e drejtuar nga specifikimet, gjurmueshmërinë e dokumentacionit, shtresat e vlefshmërisë dhe tema të ngjashme.' },
  de: { title: 'Wiki', desc: 'Dauerhafte Referenzseiten zu spezifikationsgesteuerter Entwicklung, Dokumentationsrückverfolgbarkeit, Validierungsebenen und verwandten Themen.' },
  it: { title: 'Wiki', desc: 'Pagine di riferimento permanenti sullo sviluppo guidato da specifiche, tracciabilità della documentazione, livelli di validazione e argomenti correlati.' },
  fr: { title: 'Wiki', desc: 'Pages de référence permanentes sur le développement piloté par les spécifications, la traçabilité de la documentation, les couches de validation et les sujets connexes.' },
  es: { title: 'Wiki', desc: 'Páginas de referencia permanentes sobre desarrollo guiado por especificaciones, trazabilidad de documentación, capas de validación y temas relacionados.' },
};

// ─── Collect article titles ───────────────────────────────

function collectBlogArticleTitles() {
  const titles = {};
  for (const locale of LOCALES) {
    titles[locale] = [];
    const localeDir = path.join(BLOG_DIR, locale);
    if (!isDirectory(localeDir)) continue;
    const files = fs.readdirSync(localeDir).sort();
    for (const file of files) {
      if (!file.endsWith('.html') || file === 'index.html') continue;
      const articleId = file.replace(/\.html$/, '');
      const title = extractTitleFromHtml(path.join(localeDir, file));
      titles[locale].push({ id: articleId, title });
    }
  }
  return titles;
}

function collectContentTitles(baseDir) {
  // English content is at the root level (e.g., docs/learning/*.md).
  // Other locales are under docs/learning/<locale>/*.md.
  const titles = {};
  for (const locale of LOCALES) {
    titles[locale] = [];
    const localeDir = path.join(baseDir, locale);
    const dir = locale === 'en' ? baseDir : (isDirectory(localeDir) ? localeDir : baseDir);
    if (!isDirectory(dir)) continue;
    const files = fs.readdirSync(dir).sort();
    for (const file of files) {
      if (!file.endsWith('.md') || file === 'README.md') continue;
      const title = extractTitleFromMd(path.join(dir, file));
      titles[locale].push({ id: file.replace(/\.md$/, ''), title });
    }
  }
  return titles;
}

// ─── Build index pages ────────────────────────────────────

function buildNavHtml(locale, section) {
  const nav = NAV_LABELS[locale] || NAV_LABELS.en;
  const langLinks = LOCALES.map((l) => {
    const href = l === locale ? 'index.html' : `../../${section}/${l}/index.html`;
    const cls = l === locale ? 'lang-link is-current' : 'lang-link';
    const label = LOCALE_SHORT_LABELS[l] || l.toUpperCase();
    return `              <a class="${cls}" href="${href}" lang="${l}">${label}</a>`;
  }).join('\n');
  return [
    '          <div class="header-nav">',
    `            <a class="nav-link" href="../../${locale}/index.html">${nav.docs}</a>`,
    `            <a class="nav-link" href="../../blog/${locale}/index.html">${nav.blog}</a>`,
    `            <a class="nav-link" href="../../learning/${locale}/index.html">${nav.learning}</a>`,
    `            <a class="nav-link" href="../../wiki/${locale}/index.html">${nav.wiki}</a>`,
    '            <a class="nav-link" href="https://github.com/mihafreenode/let-books">GitHub</a>',
    '            <div class="lang-switch" aria-label="Language options">',
    langLinks,
    '            </div>',
    '          </div>',
  ].join('\n');
}

function buildFooterHtml(locale, section) {
  const labels = FOOTER_LINK_LABELS[locale] || FOOTER_LINK_LABELS.en;
  const desc = FOOTER_DESC[locale] || FOOTER_DESC.en;
  const microcopy = FOOTER_MICROCOPY[locale] || FOOTER_MICROCOPY.en;
  const langLinks = LOCALES.map((l) => {
    const href = l === locale ? 'index.html' : `../../${section}/${l}/index.html`;
    const label = LOCALE_LABELS[l] || l;
    return `              <a href="${href}" class="footer-language-link" lang="${l}">${label}</a>`;
  }).join('\n');
  return [
    '      <footer class="site-footer">',
    '        <div class="footer-inner">',
    '          <div>',
    '            <h3>Let Books</h3>',
    `            <p>${desc}</p>`,
    `            <p class="footer-microcopy">${microcopy}</p>`,
    '          </div>',
    '          <div>',
    '            <div class="footer-links">',
    `              <a href="../../${locale}/index.html">${labels.overview}</a>`,
    `              <a href="../../index.html">${labels.projectHome}</a>`,
    `              <a href="../../../static-demo/">${labels.demo}</a>`,
    '            </div>',
    '            <div class="language-list" style="margin-top: 1rem;">',
    langLinks,
    '            </div>',
    '            <div class="language-list" data-equivalent-language-list style="margin-top: 0.85rem;"></div>',
    '          </div>',
    '        </div>',
    '      </footer>',
  ].join('\n');
}

function buildIndexPage({ locale, pageType, info, items, itemExt, head, linkPrefix, section }) {
  const prefix = linkPrefix || '';
  const itemList = items
    .map((i) => `              <li><a href="${prefix}${i.id}.${itemExt}">${i.title}</a></li>`)
    .join('\n');

  return [
    '<!DOCTYPE html>',
    `<html lang="${locale}">`,
    head,
    `  <body data-page-type="${pageType}" data-locale="${locale}">`,
    '    <div class="page-shell">',
    '      <header class="site-header">',
    '        <div class="header-inner">',
    `          <a class="brand-link" href="../../${locale}/index.html">`,
    '            <img class="brand-mark" src="../../assets/images/logo-mark-symbol.svg" alt="Let Books">',
    '            <span class="brand-copy">',
    '              <strong>Let Books</strong>',
    `              <span>${info.title}</span>`,
    '            </span>',
    '          </a>',
    buildNavHtml(locale, section),
    '        </div>',
    '      </header>',
    '      <main>',
    '        <section class="section">',
    '          <div class="section-header">',
    `            <h1>${info.title}</h1>`,
    `            <p>${info.desc}</p>`,
    '          </div>',
    '          <ul>',
    itemList,
    '          </ul>',
    '        </section>',
    '      </main>',
    buildFooterHtml(locale, section),
    '    </div>',
    '  </body>',
    '</html>',
  ].join('\n');
}

// ─── Generate all index pages ─────────────────────────────

function generateBlogIndexes(blogTitles) {
  let count = 0;
  const section = 'blog';
  for (const locale of LOCALES) {
    const articles = blogTitles[locale];
    if (!articles || articles.length === 0) {
      console.warn(`  WARN: No blog articles for ${locale}, skipping`);
      continue;
    }
    const info = BLOG_INFO[locale] || BLOG_INFO.en;
    const canonical = `${SITE_URL}/docs/blog/${locale}/index.html`;
    const head = buildHeadWithCanonical(`${info.title} | LetBooks`, info.desc, canonical, section);
    const html = buildIndexPage({
      locale,
      pageType: 'blog-index',
      info,
      items: articles,
      itemExt: 'html',
      head,
      section,
    });
    fs.writeFileSync(path.join(BLOG_DIR, locale, 'index.html'), html);
    count++;
  }
  return count;
}

function generateLearningIndexes(learningTitles) {
  let count = 0;
  const section = 'learning';
  for (const locale of LOCALES) {
    const items = learningTitles[locale];
    if (!items || items.length === 0) {
      console.warn(`  WARN: No learning guides for ${locale}, skipping`);
      continue;
    }
    const info = LEARNING_INFO[locale] || LEARNING_INFO.en;
    const outDir = path.join(LEARNING_DIR, locale);
    if (!isDirectory(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const canonical = `${SITE_URL}/docs/learning/${locale}/index.html`;
    const head = buildHeadWithCanonical(`${info.title} | LetBooks`, info.desc, canonical, section);
    // English learning guides are at docs/learning/*.md (parent level),
    // other locales at docs/learning/<locale>/*.md (same dir as index)
    const linkPrefix = locale === 'en' ? '../' : '';
    const html = buildIndexPage({
      locale,
      pageType: 'learning-index',
      info,
      items,
      itemExt: 'md',
      head,
      linkPrefix,
      section,
    });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    count++;
  }
  return count;
}

function generateWikiIndexes(wikiTitles) {
  let count = 0;
  const section = 'wiki';
  for (const locale of LOCALES) {
    const items = wikiTitles[locale];
    if (!items || items.length === 0) {
      console.warn(`  WARN: No wiki pages for ${locale}, skipping`);
      continue;
    }
    const info = WIKI_INFO[locale] || WIKI_INFO.en;
    const outDir = path.join(WIKI_DIR, locale);
    if (!isDirectory(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const canonical = `${SITE_URL}/docs/wiki/${locale}/index.html`;
    const head = buildHeadWithCanonical(`${info.title} | LetBooks`, info.desc, canonical, section);
    // English wiki pages are at docs/wiki/*.md (parent level)
    const linkPrefix = locale === 'en' ? '../' : '';
    const html = buildIndexPage({
      locale,
      pageType: 'wiki-index',
      info,
      items,
      itemExt: 'md',
      head,
      linkPrefix,
      section,
    });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    count++;
  }
  return count;
}

// ─── Update doc index nav links ───────────────────────────

function updateDocIndexNavLinks() {
  let updated = 0;
  let skipped = 0;
  for (const locale of LOCALES) {
    const indexPath = path.join(DOCS_DIR, locale, 'index.html');
    if (!isFile(indexPath)) {
      console.warn(`  WARN: docs/${locale}/index.html not found`);
      skipped++;
      continue;
    }
    const content = fs.readFileSync(indexPath, 'utf8');

    // Check if already updated (nav points to index.html)
    const alreadyPattern = `href="../blog/${locale}/index.html"`;
    if (content.includes(alreadyPattern)) {
      console.log(`  - docs/${locale}/index.html already updated`);
      updated++;
      continue;
    }

    // Match the nav link regardless of localized link text
    // Pattern: <a class="nav-link" href="../blog/<locale>/isbn-not-a-database.html">...</a>
    const regex = new RegExp(
      `(<a\\s+class="nav-link"\\s+href="../blog/${locale}/)isbn-not-a-database\\.html("[^>]*>.*?</a>)`
    );

    if (regex.test(content)) {
      const updatedContent = content.replace(regex, '$1index.html$2');
      fs.writeFileSync(indexPath, updatedContent);
      console.log(`  ✓ docs/${locale}/index.html nav → blog/index.html`);
      updated++;
    } else {
      console.warn(`  WARN: docs/${locale}/index.html: nav URL pattern not found`);
      skipped++;
    }
  }
  return { updated, skipped };
}

// ─── Main ──────────────────────────────────────────────────

function main() {
  console.log('=== Generating index pages ===\n');

  const blogTitles = collectBlogArticleTitles();
  for (const locale of LOCALES) {
    const a = blogTitles[locale];
    if (a) console.log(`  Blog ${locale}: ${a.length} articles`);
  }
  console.log('');
  const blogCount = generateBlogIndexes(blogTitles);
  console.log(`  → ${blogCount}/${LOCALES.length} blog index pages created\n`);

  const learningTitles = collectContentTitles(LEARNING_DIR);
  for (const locale of LOCALES) {
    const a = learningTitles[locale];
    if (a) console.log(`  Learning ${locale}: ${a.length} guides`);
  }
  console.log('');
  const learningCount = generateLearningIndexes(learningTitles);
  console.log(`  → ${learningCount}/${LOCALES.length} learning index pages created\n`);

  const wikiTitles = collectContentTitles(WIKI_DIR);
  for (const locale of LOCALES) {
    const a = wikiTitles[locale];
    if (a) console.log(`  Wiki ${locale}: ${a.length} pages`);
  }
  console.log('');
  const wikiCount = generateWikiIndexes(wikiTitles);
  console.log(`  → ${wikiCount}/${LOCALES.length} wiki index pages created\n`);

  console.log('=== Updating doc index nav links ===\n');
  const { updated, skipped } = updateDocIndexNavLinks();
  console.log(`\n  → ${updated} nav links updated, ${skipped} skipped\n`);

  console.log('Done.');
}

main();
