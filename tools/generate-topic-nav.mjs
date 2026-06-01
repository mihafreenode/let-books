#!/usr/bin/env node
/**
 * generate-topic-nav.mjs
 *
 * 1. Adds "Related articles" sections to blog article HTML pages,
 *    cross-referencing other articles that share topics.
 * 2. Updates blog index pages to group articles by topic.
 *
 * Reads topics from Markdown frontmatter across blog/learning/wiki.
 * Topic display labels are localized per locale.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const BLOG_DIR = path.join(DOCS_DIR, 'blog');

const LOCALES = ['en', 'sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];

const RELATED_ARTICLES_HEADINGS = {
  en: 'Related Articles',
  sl: 'Sorodni članki',
  hr: 'Povezani članci',
  bs: 'Povezani članci',
  'sr-Latn': 'Povezani članci',
  'sr-Cyrl': 'Повезани чланци',
  mk: 'Поврзани статии',
  sq: 'Artikuj të lidhur',
  de: 'Verwandte Artikel',
  it: 'Articoli correlati',
  fr: 'Articles connexes',
  es: 'Artículos relacionados',
};

const BROWSE_BY_TOPIC_HEADINGS = {
  en: 'Browse by Topic',
  sl: 'Brskaj po temah',
  hr: 'Pretraži po temama',
  bs: 'Pretraži po temama',
  'sr-Latn': 'Pretraži po temama',
  'sr-Cyrl': 'Претражи по темама',
  mk: 'Пребарувај по теми',
  sq: 'Shfletoni sipas temës',
  de: 'Nach Themen durchsuchen',
  it: 'Sfoglia per argomento',
  fr: 'Parcourir par sujet',
  es: 'Explorar por tema',
};

const ARTICLE_IDS = [
  'ai-will-not-replace-translators',
  'economics-of-localization',
  'future-of-continuous-localization',
  'isbn-not-a-database',
  'localization-at-scale',
  'multilingual-accessibility',
  'preserving-smaller-languages-in-the-digital-age',
  'spec-driven-development-in-let-books',
  'spec-driven-development-for-ai-projects',
  'the-cost-of-english-only-software',
  'translation-and-learning',
  'united-in-diversity-and-open-source',
  'why-every-language-matters',
  'documentation-is-part-of-the-product',
  'when-the-demo-is-evidence-and-when-it-is-not',
];

// ─── Topic display labels per locale ───────────────────────

const TOPIC_LABELS = {
  'isbn-metadata':            { en: 'ISBN & Metadata', sl: 'ISBN in metapodatki', hr: 'ISBN i metapodaci', bs: 'ISBN i metapodaci', 'sr-Latn': 'ISBN i metapodaci', 'sr-Cyrl': 'ISBN и метаподаци', mk: 'ISBN и метаподатоци', sq: 'ISBN dhe metatëdhëna', de: 'ISBN und Metadaten', it: 'ISBN e metadati', fr: 'ISBN et métadonnées', es: 'ISBN y metadatos' },
  'library-systems':           { en: 'Library Systems', sl: 'Knjižnični sistemi', hr: 'Knjižnični sustavi', bs: 'Bibliotečki sistemi', 'sr-Latn': 'Bibliotečki sistemi', 'sr-Cyrl': 'Библиотечки системи', mk: 'Библиотечки системи', sq: 'Sisteme bibliotekare', de: 'Bibliothekssysteme', it: 'Sistemi bibliotecari', fr: 'Systèmes de bibliothèque', es: 'Sistemas bibliotecarios' },
  'book-donation':             { en: 'Book Donation', sl: 'Darovanje knjig', hr: 'Donacija knjiga', bs: 'Donacija knjiga', 'sr-Latn': 'Donacija knjiga', 'sr-Cyrl': 'Донација књига', mk: 'Донација на книги', sq: 'Dhurim librash', de: 'Buchspende', it: 'Donazione libri', fr: 'Don de livres', es: 'Donación de libros' },
  'spec-driven-development':   { en: 'Spec-Driven Development', sl: 'Razvoj na podlagi specifikacij', hr: 'Razvoj vođen specifikacijom', bs: 'Razvoj vođen specifikacijom', 'sr-Latn': 'Razvoj vođen specifikacijom', 'sr-Cyrl': 'Развој вођен спецификацијом', mk: 'Развој воден од спецификации', sq: 'Zhvillim i drejtuar nga specifikimet', de: 'Spezifikationsgesteuerte Entwicklung', it: 'Sviluppo guidato da specifiche', fr: 'Développement piloté par les spécifications', es: 'Desarrollo guiado por especificaciones' },
  'let-books':                 { en: 'Let Books', sl: 'Let Books', hr: 'Let Books', bs: 'Let Books', 'sr-Latn': 'Let Books', 'sr-Cyrl': 'Let Books', mk: 'Let Books', sq: 'Let Books', de: 'Let Books', it: 'Let Books', fr: 'Let Books', es: 'Let Books' },
  'documentation':             { en: 'Documentation', sl: 'Dokumentacija', hr: 'Dokumentacija', bs: 'Dokumentacija', 'sr-Latn': 'Dokumentacija', 'sr-Cyrl': 'Документација', mk: 'Документација', sq: 'Dokumentacion', de: 'Dokumentation', it: 'Documentazione', fr: 'Documentation', es: 'Documentación' },
  'demo-alignment':            { en: 'Demo Alignment', sl: 'Usklajevanje demota', hr: 'Usklađivanje demoa', bs: 'Usklađivanje demoa', 'sr-Latn': 'Usklađivanje demoa', 'sr-Cyrl': 'Усклађивање демоа', mk: 'Усогласување на демо', sq: 'Përafrim demostrimi', de: 'Demo-Ausrichtung', it: 'Allineamento demo', fr: 'Alignement de la démo', es: 'Alineación de demo' },
  'ai-assisted-delivery':      { en: 'AI-Assisted Delivery', sl: 'Dostava s pomočjo AI', hr: 'Dostava uz pomoć AI', bs: 'Dostava uz pomoć AI', 'sr-Latn': 'Dostava uz pomoć AI', 'sr-Cyrl': 'Достава уз помоћ AI', mk: 'Достава со помош на AI', sq: 'Shpërndarje e ndihmuar nga AI', de: 'KI-gestützte Bereitstellung', it: 'Consegna assistita da IA', fr: 'Livraison assistée par IA', es: 'Entrega asistida por IA' },
  'product-quality':           { en: 'Product Quality', sl: 'Kakovost izdelka', hr: 'Kvaliteta proizvoda', bs: 'Kvaliteta proizvoda', 'sr-Latn': 'Kvalitet proizvoda', 'sr-Cyrl': 'Квалитет производа', mk: 'Квалитет на производ', sq: 'Cilësi e produktit', de: 'Produktqualität', it: 'Qualità del prodotto', fr: 'Qualité du produit', es: 'Calidad del producto' },
  'validation':                { en: 'Validation', sl: 'Validacija', hr: 'Validacija', bs: 'Validacija', 'sr-Latn': 'Validacija', 'sr-Cyrl': 'Валидација', mk: 'Валидација', sq: 'Validim', de: 'Validierung', it: 'Validazione', fr: 'Validation', es: 'Validación' },
  'product-review':            { en: 'Product Review', sl: 'Pregled izdelka', hr: 'Pregled proizvoda', bs: 'Pregled proizvoda', 'sr-Latn': 'Pregled proizvoda', 'sr-Cyrl': 'Преглед производа', mk: 'Преглед на производ', sq: 'Shqyrtim produkti', de: 'Produktüberprüfung', it: 'Revisione del prodotto', fr: 'Révision du produit', es: 'Revisión del producto' },
  'spec-writing':              { en: 'Spec Writing', sl: 'Pisanje specifikacij', hr: 'Pisanje specifikacija', bs: 'Pisanje specifikacija', 'sr-Latn': 'Pisanje specifikacija', 'sr-Cyrl': 'Писање спецификација', mk: 'Пишување спецификации', sq: 'Shkrim specifikimesh', de: 'Spezifikationen schreiben', it: 'Scrittura di specifiche', fr: 'Rédaction de spécifications', es: 'Redacción de especificaciones' },
  'implementation-planning':   { en: 'Implementation Planning', sl: 'Načrtovanje izvedbe', hr: 'Planiranje implementacije', bs: 'Planiranje implementacije', 'sr-Latn': 'Planiranje implementacije', 'sr-Cyrl': 'Планирање имплементације', mk: 'Планирање на имплементација', sq: 'Planifikim i zbatimit', de: 'Implementierungsplanung', it: 'Pianificazione dell\'implementazione', fr: 'Planification de la mise en œuvre', es: 'Planificación de la implementación' },
  'project-management':        { en: 'Project Management', sl: 'Vodenje projektov', hr: 'Upravljanje projektima', bs: 'Upravljanje projektima', 'sr-Latn': 'Upravljanje projektima', 'sr-Cyrl': 'Управљање пројектима', mk: 'Управување со проекти', sq: 'Menaxhim projektesh', de: 'Projektmanagement', it: 'Gestione progetti', fr: 'Gestion de projet', es: 'Gestión de proyectos' },
  'ci-cd':                     { en: 'CI/CD', sl: 'CI/CD', hr: 'CI/CD', bs: 'CI/CD', 'sr-Latn': 'CI/CD', 'sr-Cyrl': 'CI/CD', mk: 'CI/CD', sq: 'CI/CD', de: 'CI/CD', it: 'CI/CD', fr: 'CI/CD', es: 'CI/CD' },
  'product-specification':     { en: 'Product Specification', sl: 'Specifikacija izdelka', hr: 'Specifikacija proizvoda', bs: 'Specifikacija proizvoda', 'sr-Latn': 'Specifikacija proizvoda', 'sr-Cyrl': 'Спецификација производа', mk: 'Спецификација на производ', sq: 'Specifikim i produktit', de: 'Produktspezifikation', it: 'Specifica del prodotto', fr: 'Spécification du produit', es: 'Especificación del producto' },
  'accessibility':             { en: 'Accessibility', sl: 'Dostopnost', hr: 'Pristupačnost', bs: 'Pristupačnost', 'sr-Latn': 'Pristupačnost', 'sr-Cyrl': 'Приступачност', mk: 'Пристапност', sq: 'Aksesueshmëri', de: 'Barrierefreiheit', it: 'Accessibilità', fr: 'Accessibilité', es: 'Accesibilidad' },
  'ai-assisted-translation':   { en: 'AI-Assisted Translation', sl: 'Prevajanje s pomočjo AI', hr: 'Prevođenje uz pomoć AI-ja', bs: 'Prevođenje uz pomoć AI-ja', 'sr-Latn': 'Prevođenje uz pomoć AI-ja', 'sr-Cyrl': 'Превођење уз помоћ AI-ja', mk: 'Преведување со помош на AI', sq: 'Përkthim i ndihmuar nga AI', de: 'KI-gestützte Übersetzung', it: 'Traduzione assistita da IA', fr: 'Traduction assistée par IA', es: 'Traducción asistida por IA' },
  'automation':                { en: 'Automation', sl: 'Avtomatizacija', hr: 'Automatizacija', bs: 'Automatizacija', 'sr-Latn': 'Automatizacija', 'sr-Cyrl': 'Аутоматизација', mk: 'Автоматизација', sq: 'Automatizim', de: 'Automatisierung', it: 'Automazione', fr: 'Automatisation', es: 'Automatización' },
  'continuous-localization':   { en: 'Continuous Localization', sl: 'Neprekinjena lokalizacija', hr: 'Kontinuirana lokalizacija', bs: 'Kontinuirana lokalizacija', 'sr-Latn': 'Kontinuirana lokalizacija', 'sr-Cyrl': 'Континуирана локализација', mk: 'Континуирана локализација', sq: 'Lokalizim i vazhdueshëm', de: 'Kontinuierliche Lokalisierung', it: 'Localizzazione continua', fr: 'Localisation continue', es: 'Localización continua' },
  'cultural-inclusion':        { en: 'Cultural Inclusion', sl: 'Kulturna vključenost', hr: 'Kulturna uključenost', bs: 'Kulturna uključenost', 'sr-Latn': 'Kulturna uključenost', 'sr-Cyrl': 'Културна укљученост', mk: 'Културна вклученост', sq: 'Përfshirje kulturore', de: 'Kulturelle Inklusion', it: 'Inclusione culturale', fr: 'Inclusion culturelle', es: 'Inclusión cultural' },
  'digital-inclusion':         { en: 'Digital Inclusion', sl: 'Digitalna vključenost', hr: 'Digitalna uključenost', bs: 'Digitalna uključenost', 'sr-Latn': 'Digitalna uključenost', 'sr-Cyrl': 'Дигитална укљученост', mk: 'Дигитална вклученост', sq: 'Përfshirje digjitale', de: 'Digitale Inklusion', it: 'Inclusione digitale', fr: 'Inclusion numérique', es: 'Inclusión digital' },
  'diagrams':                  { en: 'Diagrams' },
  'education':                 { en: 'Education' },
  'engineering-systems':       { en: 'Engineering Systems', sl: 'Inženirski sistemi', hr: 'Inženjerski sustavi', bs: 'Inženjerski sistemi', 'sr-Latn': 'Inženjerski sistemi', 'sr-Cyrl': 'Инжењерски системи', mk: 'Инженерски системи', sq: 'Sisteme inxhinierike', de: 'Engineering-Systeme', it: 'Sistemi di ingegneria', fr: "Systèmes d'ingénierie", es: 'Sistemas de ingeniería' },
  'governance':                { en: 'Governance', sl: 'Upravljanje', hr: 'Upravljanje', bs: 'Upravljanje', 'sr-Latn': 'Upravljanje', 'sr-Cyrl': 'Управљање', mk: 'Управување', sq: 'Qeverisje', de: 'Governance', it: 'Governance', fr: 'Gouvernance', es: 'Gobernanza' },
  'hybrid-review-models':      { en: 'Hybrid Review Models' },
  'knowledge-preservation':    { en: 'Knowledge Preservation' },
  'language-rights':           { en: 'Language Rights', sl: 'Jezikovne pravice', hr: 'Jezična prava', bs: 'Jezička prava', 'sr-Latn': 'Jezička prava', 'sr-Cyrl': 'Језичка права', mk: 'Јазични права', sq: 'Të drejta gjuhësore', de: 'Sprachrechte', it: 'Diritti linguistici', fr: 'Droits linguistiques', es: 'Derechos lingüísticos' },
  'localization':              { en: 'Localization', sl: 'Lokalizacija', hr: 'Lokalizacija', bs: 'Lokalizacija', 'sr-Latn': 'Lokalizacija', 'sr-Cyrl': 'Локализација', mk: 'Локализација', sq: 'Lokalizim', de: 'Lokalisierung', it: 'Localizzazione', fr: 'Localisation', es: 'Localización' },
  'localized-alt-text':        { en: 'Localized Alt Text' },
  'mother-tongue-learning':    { en: 'Mother-Tongue Learning' },
  'multilingual-governance':   { en: 'Multilingual Governance' },
  'open-standards':            { en: 'Open Standards' },
  'plain-language':            { en: 'Plain Language' },
  'public-interest-technology': { en: 'Public-Interest Technology' },
  'public-sector-software':    { en: 'Public-Sector Software' },
  'qa':                        { en: 'QA' },
  'reading-comprehension':     { en: 'Reading Comprehension' },
  'screen-readers':            { en: 'Screen Readers' },
  'smaller-languages':         { en: 'Smaller Languages', sl: 'Manjši jeziki', hr: 'Manji jezici', bs: 'Manji jezici', 'sr-Latn': 'Manji jezici', 'sr-Cyrl': 'Мањи језици', mk: 'Помали јазици', sq: 'Gjuhë më të vogla', de: 'Kleinere Sprachen', it: 'Lingue più piccole', fr: 'Langues plus petites', es: 'Lenguas más pequeñas' },
  'sustainability':            { en: 'Sustainability' },
  'terminology':               { en: 'Terminology' },
  'translation-quality':       { en: 'Translation Quality', sl: 'Kakovost prevajanja', hr: 'Kvaliteta prevođenja', bs: 'Kvalitet prevođenja', 'sr-Latn': 'Kvalitet prevođenja', 'sr-Cyrl': 'Квалитет превођења', mk: 'Квалитет на превод', sq: 'Cilësia e përkthimit', de: 'Übersetzungsqualität', it: 'Qualità della traduzione', fr: 'Qualité de la traduction', es: 'Calidad de la traducción' },
  'unicode':                   { en: 'Unicode' },
};

function getTopicLabel(topic, locale) {
  return TOPIC_LABELS[topic]?.[locale] || TOPIC_LABELS[topic]?.en || topic;
}

// ─── File helpers ──────────────────────────────────────────

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function isDirectory(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function readFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) return {};
  const yaml = m[1];
  const fm = {};
  const topicsMatch = yaml.match(/^topics:\s*\n((?:^  - .+\n?)+)/m);
  if (topicsMatch) {
    fm.topics = topicsMatch[1]
      .split('\n')
      .filter((l) => l.trim())
      .map((l) => l.replace(/^\s*-\s*/, '').trim());
  }
  const titleMatch = yaml.match(/^title:\s+"(.+?)"/m);
  if (titleMatch) fm.title = titleMatch[1];
  return fm;
}

function readHtmlTitle(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const m = content.match(/<title>([^<]+?)\s*(?:\|?\s*LetBooks?)?\s*<\/title>/i);
  if (m) return m[1].trim();
  const h1 = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (h1) return h1[1].trim();
  return path.basename(filePath, '.html');
}

// ─── Build topic cross-reference ───────────────────────────

function buildArticleData() {
  // For each locale, for each article_id -> { title, topics }
  const data = {};
  for (const locale of LOCALES) {
    data[locale] = {};
    const localeDir = path.join(BLOG_DIR, locale);
    if (!isDirectory(localeDir)) continue;
    for (const articleId of ARTICLE_IDS) {
      const mdFile = path.join(localeDir, `${articleId}.md`);
      const htmlFile = path.join(localeDir, `${articleId}.html`);
      if (!isFile(mdFile) && !isFile(htmlFile)) continue;
      const fm = isFile(mdFile) ? readFrontmatter(mdFile) : {};
      const title = fm.title || (isFile(htmlFile) ? readHtmlTitle(htmlFile) : articleId);
      data[locale][articleId] = {
        title,
        topics: fm.topics || [],
        exists: true,
      };
    }
  }
  return data;
}

function buildTopicIndex(articleData) {
  // topic -> locale -> [{ articleId, title }]
  const index = {};
  for (const locale of LOCALES) {
    for (const articleId of ARTICLE_IDS) {
      const info = articleData[locale]?.[articleId];
      if (!info || !info.exists) continue;
      for (const topic of info.topics) {
        if (!index[topic]) index[topic] = {};
        if (!index[topic][locale]) index[topic][locale] = [];
        index[topic][locale].push({ articleId, title: info.title });
      }
    }
  }
  return index;
}

// ─── Insert topic nav into article HTML ────────────────────

function addTopicNavToArticle(filePath, articleId, locale, articleData, topicIndex) {
  const info = articleData[locale]?.[articleId];
  if (!info || !info.topics || info.topics.length === 0) return false;

  const content = fs.readFileSync(filePath, 'utf8');

  // Check if already has topic nav
  if (content.includes('class="topic-nav"')) {
    console.log(`  SKIP ${path.relative(ROOT, filePath)} (already has topic nav)`);
    return false;
  }

  // Collect related articles across all topics
  const related = new Map(); // articleId -> { title, topics: [...] }
  for (const topic of info.topics) {
    const articles = topicIndex[topic]?.[locale] || [];
    for (const a of articles) {
      if (a.articleId === articleId) continue;
      if (!related.has(a.articleId)) {
        related.set(a.articleId, { title: a.title, topics: [] });
      }
      related.get(a.articleId).topics.push(topic);
    }
  }

  if (related.size === 0) {
    console.log(`  SKIP ${path.relative(ROOT, filePath)} (no related articles)`);
    return false;
  }

  // Build HTML for topic nav
  const navSections = [];
  for (const topic of info.topics) {
    const articles = topicIndex[topic]?.[locale] || [];
    const topicArticles = articles.filter((a) => a.articleId !== articleId);
    if (topicArticles.length === 0) continue;
    const label = getTopicLabel(topic, locale);
    const links = topicArticles
      .map((a) => `            <li><a href="${a.articleId}.html">${a.title}</a></li>`)
      .join('\n');
    navSections.push(`          <div class="topic-group">
            <h3 class="topic-label">${label}</h3>
            <ul>
${links}
            </ul>
          </div>`);
  }

  if (navSections.length === 0) {
    console.log(`  SKIP ${path.relative(ROOT, filePath)} (no topic groups with related articles)`);
    return false;
  }

  const relHeading = RELATED_ARTICLES_HEADINGS[locale] || RELATED_ARTICLES_HEADINGS.en;
  const navHtml = `        <section class="topic-nav">
          <h2>${relHeading}</h2>
${navSections.join('\n')}
        </section>
`;

  // Insert before </main>
  const updated = content.replace('</main>', `${navHtml}      </main>`);
  fs.writeFileSync(filePath, updated);
  console.log(`  NAV  ${path.relative(ROOT, filePath)} (${related.size} related articles)`);
  return true;
}

// ─── Update blog index pages with topic grouping ───────────

function updateBlogIndexWithTopics(locale, articleData, topicIndex) {
  const indexPath = path.join(BLOG_DIR, locale, 'index.html');
  if (!isFile(indexPath)) {
    console.warn(`  WARN: blog index not found: ${indexPath}`);
    return false;
  }

  const content = fs.readFileSync(indexPath, 'utf8');

  // Check if already has topic grouping
  if (content.includes('class="topic-nav"') || content.includes('class="topic-group"')) {
    console.log(`  SKIP blog/${locale}/index.html (already has topic grouping)`);
    return false;
  }

  // Get all articles for this locale
  const articles = ARTICLE_IDS
    .map((id) => articleData[locale]?.[id])
    .filter((a) => a && a.exists);

  if (articles.length === 0) {
    console.warn(`  WARN: No articles for ${locale}`);
    return false;
  }

  // Build topic groups
  const topicGroups = {}; // topic -> [articleId, ...]
  for (const article of articles) {
    for (const topic of article.topics) {
      if (!topicGroups[topic]) topicGroups[topic] = [];
      topicGroups[topic].push({ articleId: ARTICLE_IDS.find((id) => articleData[locale]?.[id] === article), title: article.title });
    }
  }

  // We need to re-map since we used object refs above
  const topicGroups2 = {};
  for (const articleId of ARTICLE_IDS) {
    const a = articleData[locale]?.[articleId];
    if (!a || !a.exists) continue;
    for (const topic of a.topics) {
      if (!topicGroups2[topic]) topicGroups2[topic] = [];
      // Only add if not already present
      if (!topicGroups2[topic].find((x) => x.articleId === articleId)) {
        topicGroups2[topic].push({ articleId, title: a.title });
      }
    }
  }

  // Sort topics by number of articles (most first), then alphabetically by label
  const sortedTopics = Object.keys(topicGroups2).sort((a, b) => {
    const diff = topicGroups2[b].length - topicGroups2[a].length;
    if (diff !== 0) return diff;
    return getTopicLabel(a, locale).localeCompare(getTopicLabel(b, locale));
  });

  // Build topic group HTML
  const groupSections = sortedTopics.map((topic) => {
    const label = getTopicLabel(topic, locale);
    const links = topicGroups2[topic]
      .map((a) => `              <li><a href="${a.articleId}.html">${a.title}</a></li>`)
      .join('\n');
    return `          <div class="topic-group">
            <h3 class="topic-label">${label}</h3>
            <ul>
${links}
            </ul>
          </div>`;
  }).join('\n');

  const browseHeading = BROWSE_BY_TOPIC_HEADINGS[locale] || BROWSE_BY_TOPIC_HEADINGS.en;
  const topicHtml = `        <section class="topic-nav">
          <h2>${browseHeading}</h2>
${groupSections}
        </section>`;

  // Replace the flat <ul> section with topic-grouped version
  // The blog index has: <section class="section"> ... <ul> ... </ul> ... </section>
  // We replace with: section containing topic nav, then a section with the flat list as fallback

  // Find the <ul> inside the section and replace with topic groups
  // Pattern: <ul>\n              <li><a href="...">...</a></li>\n              ...\n          </ul>
  const ulRegex = /<ul>\s*\n((?:\s*<li><a[^>]*>[^<]*<\/a><\/li>\s*\n)+)\s*<\/ul>/;
  const ulMatch = content.match(ulRegex);

  if (!ulMatch) {
    console.warn(`  WARN: blog/${locale}/index.html: could not find article list`);
    return false;
  }

  // Keep the flat list as a fallback below the topic nav
  const fallbackSection = `          <ul>
${ulMatch[1]}          </ul>`;

  const updated = content.replace(
    ulRegex,
    `${topicHtml}\n${fallbackSection}`
  );
  fs.writeFileSync(indexPath, updated);
  console.log(`  TOPIC blog/${locale}/index.html (${sortedTopics.length} topic groups)`);
  return true;
}

// ─── Main ──────────────────────────────────────────────────

function main() {
  console.log('=== Generating topic navigation ===\n');

  console.log('Building article data and topic index...\n');
  const articleData = buildArticleData();
  const topicIndex = buildTopicIndex(articleData);

  // Check coverage
  for (const locale of LOCALES) {
    const count = ARTICLE_IDS.filter((id) => articleData[locale]?.[id]?.exists).length;
    const topics = new Set();
    for (const id of ARTICLE_IDS) {
      for (const t of articleData[locale]?.[id]?.topics || []) topics.add(t);
    }
    console.log(`  ${locale}: ${count} articles, ${topics.size} unique topics`);
  }
  console.log('');

  // --- Blog article HTML topic nav ---
  console.log('Adding topic nav sections to article HTML files:\n');
  let articleNavCount = 0;
  let articleSkipCount = 0;
  for (const locale of LOCALES) {
    for (const articleId of ARTICLE_IDS) {
      const filePath = path.join(BLOG_DIR, locale, `${articleId}.html`);
      if (!isFile(filePath)) continue;
      const ok = addTopicNavToArticle(filePath, articleId, locale, articleData, topicIndex);
      if (ok) articleNavCount++;
      else articleSkipCount++;
    }
  }
  console.log(`\n  → ${articleNavCount} articles with nav added, ${articleSkipCount} skipped\n`);

  // --- Blog index topic grouping ---
  console.log('Updating blog index pages with topic grouping:\n');
  let indexUpdateCount = 0;
  let indexSkipCount = 0;
  for (const locale of LOCALES) {
    const ok = updateBlogIndexWithTopics(locale, articleData, topicIndex);
    if (ok) indexUpdateCount++;
    else indexSkipCount++;
  }
  console.log(`\n  → ${indexUpdateCount} indexes updated, ${indexSkipCount} skipped\n`);

  console.log('Done.');
}

main();
