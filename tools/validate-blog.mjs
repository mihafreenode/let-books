#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ARTICLES_JSON = path.join(ROOT, 'docs/blog/articles.json');
const BLOG_DIR = path.join(ROOT, 'docs/blog');
const SITE_URL = 'https://letbooks.org';

const errors = [];
const warnings = [];
let articlesChecked = 0;
let languageVariantsChecked = 0;
let languageLinksValid = 0;
let hreflangEntriesValid = 0;
let brokenLinks = 0;
let missingTranslations = 0;
let linksChecked = 0;
let diagramRefsChecked = 0;
let localizedDiagramsFound = 0;
let englishLeaks = 0;
let missingDraftDiagrams = 0;

function fail(msg) {
  errors.push(msg);
  console.error(`  FAIL: ${msg}`);
}

function warn(msg) {
  warnings.push(msg);
  console.warn(`  WARN: ${msg}`);
}

function resolvePath(baseDir, href) {
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
    return null;
  }
  if (href === '#' || href.startsWith('#') || href === '') {
    return null;
  }
  const resolved = path.resolve(baseDir, href);
  if (!resolved.startsWith(ROOT)) {
    return null;
  }
  return resolved;
}

function existsOnDisk(filePath) {
  if (!filePath) return false;
  try {
    const stat = fs.statSync(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
}

function resolveDir(dirPath) {
  if (!dirPath) return false;
  try {
    const stat = fs.statSync(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

function loadArticles() {
  const raw = fs.readFileSync(ARTICLES_JSON, 'utf8');
  const data = JSON.parse(raw);
  if (!data.articles || !Array.isArray(data.articles)) {
    fail('articles.json: missing or invalid "articles" array');
    process.exit(1);
  }
  return data;
}

function checkArticleStructure(data) {
  for (const article of data.articles) {
    if (!article.id || typeof article.id !== 'string') {
      fail(`Article missing string "id"`);
    }
    if (!article.canonical_language) {
      fail(`Article "${article.id}" missing "canonical_language"`);
    }
    if (!article.languages || !Array.isArray(article.languages)) {
      fail(`Article "${article.id}" missing "languages" array`);
      continue;
    }
    if (!article.languages.includes(article.canonical_language)) {
      fail(`Article "${article.id}": canonical_language "${article.canonical_language}" not in languages array`);
    }
    const seen = new Set();
    for (const lang of article.languages) {
      if (seen.has(lang)) {
        fail(`Article "${article.id}" has duplicate language "${lang}"`);
      }
      seen.add(lang);
    }
  }
}

function checkArticleExists(article) {
  for (const lang of article.languages) {
    const htmlPath = path.join(BLOG_DIR, lang, `${article.id}.html`);
    const mdPath = path.join(BLOG_DIR, lang, `${article.id}.md`);
    const htmlExists = existsOnDisk(htmlPath);
    const mdExists = existsOnDisk(mdPath);

    if (!htmlExists) {
      const isCanonical = lang === article.canonical_language;
      const msg = `Article "${article.id}" missing HTML for "${lang}" (expected docs/blog/${lang}/${article.id}.html)`;
      if (isCanonical) {
        fail(msg);
      } else if (mdExists) {
        warn(`${msg} — source .md exists but no .html`);
      } else {
        warn(msg);
      }
      missingTranslations++;
      continue;
    }

    languageVariantsChecked++;
    validateArticleHtml(htmlPath, article, lang);

    if (!mdExists) {
      warn(`Article "${article.id}" missing source .md for "${lang}"`);
    }
  }
}

function validateArticleHtml(filePath, article, lang) {
  const content = fs.readFileSync(filePath, 'utf8');
  const dir = path.dirname(filePath);

  const localeMatch = content.match(/data-locale="([^"]+)"/);
  if (localeMatch) {
    const actual = localeMatch[1];
    if (actual !== lang) {
      fail(`${rel(filePath)}: data-locale is "${actual}", expected "${lang}"`);
    }
  }

  const pageTypeMatch = content.match(/data-page-type="([^"]+)"/);
  if (pageTypeMatch) {
    if (pageTypeMatch[1] !== 'article') {
      warn(`${rel(filePath)}: data-page-type is "${pageTypeMatch[1]}", expected "article"`);
    }
  }

  if (lang === article.canonical_language) {
    const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)">/);
    if (canonicalMatch) {
      const expected = `${SITE_URL}/docs/blog/${lang}/${article.id}.html`;
      if (canonicalMatch[1] !== expected) {
        fail(`${rel(filePath)}: canonical href is "${canonicalMatch[1]}", expected "${expected}"`);
      }
    }
  }

  const hreflangMap = new Map();
  const hreflangRegex = /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)">/g;
  let hflMatch;
  while ((hflMatch = hreflangRegex.exec(content)) !== null) {
    hreflangMap.set(hflMatch[1], hflMatch[2]);
  }

  const xDefault = hreflangMap.get('x-default');
  if (!xDefault) {
    warn(`${rel(filePath)}: missing x-default hreflang`);
  } else {
    const expectedDefault = `${SITE_URL}/docs/blog/${article.canonical_language}/${article.id}.html`;
    if (xDefault !== expectedDefault) {
      fail(`${rel(filePath)}: x-default hreflang points to "${xDefault}", expected "${expectedDefault}"`);
    }
  }

  for (const alang of article.languages) {
    const expectedUrl = `${SITE_URL}/docs/blog/${alang}/${article.id}.html`;
    const actualUrl = hreflangMap.get(alang);
    if (!actualUrl) {
      fail(`${rel(filePath)}: missing hreflang for "${alang}"`);
    } else if (actualUrl !== expectedUrl) {
      fail(`${rel(filePath)}: hreflang for "${alang}" is "${actualUrl}", expected "${expectedUrl}"`);
    } else {
      hreflangEntriesValid++;
    }
  }

  for (const [hflang] of hreflangMap) {
    if (hflang === 'x-default') continue;
    if (!article.languages.includes(hflang)) {
      warn(`${rel(filePath)}: hreflang for "${hflang}" declared but not in articles.json languages`);
    }
  }

  const langSwitchHrefs = new Set();
  const langLinkRegex = /<a[^>]+class="lang-link[^"]*"[^>]*href="([^"]+)"/g;
  let llMatch;
  while ((llMatch = langLinkRegex.exec(content)) !== null) {
    langSwitchHrefs.add(llMatch[1]);
  }

  const currentLangMatch = content.match(/<a[^>]+class="lang-link[^"]*is-current[^"]*"[^>]*href="([^"]+)"/);
  if (currentLangMatch) {
    const expectedHref = `${article.id}.html`;
    if (currentLangMatch[1] !== expectedHref) {
      fail(`${rel(filePath)}: current language link href is "${currentLangMatch[1]}", expected "${expectedHref}"`);
    }
  } else {
    warn(`${rel(filePath)}: no current language link with is-current class found`);
  }

  for (const href of langSwitchHrefs) {
    const resolved = resolvePath(dir, href);
    if (resolved && !existsOnDisk(resolved) && !resolveDir(resolved)) {
      fail(`${rel(filePath)}: language link "${href}" resolves to missing path`);
      brokenLinks++;
    }
  }

  const allHrefs = new Set();
  const hrefRegex = /<a[^>]+href="([^"]+)"/g;
  let aMatch;
  while ((aMatch = hrefRegex.exec(content)) !== null) {
    allHrefs.add(aMatch[1]);
  }

  const imgSrcRegex = /<img[^>]+src="([^"]+)"/g;
  let imgMatch;
  while ((imgMatch = imgSrcRegex.exec(content)) !== null) {
    allHrefs.add(imgMatch[1]);
  }

  const linkHrefRegex = /<link[^>]+href="([^"]+)"/g;
  let linkMatch;
  while ((linkMatch = linkHrefRegex.exec(content)) !== null) {
    const href = linkMatch[1];
    if (href.endsWith('.css') || href.endsWith('.ico') || href.endsWith('.png') || href.endsWith('.svg')) {
      allHrefs.add(href);
    }
  }

  const scriptSrcRegex = /<script[^>]+src="([^"]+)"/g;
  let scriptMatch;
  while ((scriptMatch = scriptSrcRegex.exec(content)) !== null) {
    allHrefs.add(scriptMatch[1]);
  }

  for (const href of allHrefs) {
    linksChecked++;
    languageLinksValid++;

    if (href.startsWith('http://') || href.startsWith('https://')) {
      const siteUrlCheck = `${SITE_URL}/docs/blog/`;
      if (href.startsWith(siteUrlCheck)) {
        const relativePath = href.slice(SITE_URL.length);
        const resolved = path.join(ROOT, relativePath);
        if (!existsOnDisk(resolved)) {
          fail(`${rel(filePath)}: absolute blog link "${href}" points to non-existent file`);
          brokenLinks++;
        }
      }
      continue;
    }
    if (href.startsWith('mailto:') || href.startsWith('#')) {
      continue;
    }

    const resolved = resolvePath(dir, href);
    if (!resolved) {
      continue;
    }

    if (!existsOnDisk(resolved) && !resolveDir(resolved)) {
      fail(`${rel(filePath)}: broken link "${href}" resolves to missing path`);
      brokenLinks++;
    }
  }
}

function checkReadmeCoverage() {
  const requiredReadmes = [
    'docs/blog/README.md',
    'docs/learning/README.md',
    'docs/wiki/README.md',
    'docs/style-guide/README.md',
  ];

  for (const readme of requiredReadmes) {
    const fullPath = path.join(ROOT, readme);
    if (!existsOnDisk(fullPath)) {
      warn(`Missing README: ${readme}`);
    }
  }
}

function checkNavigationConsistency() {
  const navLinkRegex = /<a[^>]+class="nav-link[^"]*"[^>]*href="([^"]+)"[^>]*>/g;

  const checkNavLinksResolve = (filePath) => {
    if (!existsOnDisk(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    const relPath = rel(filePath);
    const navHrefs = [];
    let match;
    while ((match = navLinkRegex.exec(content)) !== null) {
      navHrefs.push(match[1]);
    }
    for (const href of navHrefs) {
      const dir = path.dirname(filePath);
      if (href.startsWith('http://') || href.startsWith('https://')) continue;
      if (href === '.' || href === './' || href.startsWith('#')) continue;
      const resolved = resolvePath(dir, href);
      if (resolved && !existsOnDisk(resolved) && !resolveDir(resolved)) {
        fail(`${relPath}: nav link "${href}" resolves to missing path`);
        brokenLinks++;
      }
    }
  };

  const blogPath = (lang) => path.join(BLOG_DIR, lang, 'isbn-not-a-database.html');
  const docsPagePath = (lang) => path.join(ROOT, 'docs', lang, 'index.html');

  const subPages = {
    en: ['individuals', 'institutions', 'administrators'],
    sl: ['posamezniki', 'institucije', 'skrbniki'],
    hr: ['individuals', 'institutions', 'administrators'],
    bs: ['individuals', 'institutions', 'administrators'],
    'sr-Latn': ['individuals', 'institutions', 'administrators'],
    'sr-Cyrl': ['individuals', 'institutions', 'administrators'],
    mk: ['individuals', 'institutions', 'administrators'],
    sq: ['individuals', 'institutions', 'administrators'],
    de: ['individuals', 'institutions', 'administrators'],
    it: ['individuals', 'institutions', 'administrators'],
    fr: ['individuals', 'institutions', 'administrators'],
    es: ['individuals', 'institutions', 'administrators'],
  };

  for (const lang of Object.keys(subPages)) {
    checkNavLinksResolve(docsPagePath(lang));
    checkNavLinksResolve(blogPath(lang));
    for (const page of subPages[lang]) {
      checkNavLinksResolve(path.join(ROOT, 'docs', lang, `${page}.html`));
    }
  }
}

function checkBlogCardLinks() {
  const hubPath = path.join(ROOT, 'docs/index.html');
  if (!existsOnDisk(hubPath)) {
    warn('docs/index.html not found, skipping blog card link validation');
    return;
  }
  const content = fs.readFileSync(hubPath, 'utf8');
  const dir = path.dirname(hubPath);
  const blogLinkRegex = /<a[^>]+class="blog-article-link[^"]*"[^>]*href="([^"]+)"/g;
  let match;
  let cardCount = 0;
  let validCards = 0;
  while ((match = blogLinkRegex.exec(content)) !== null) {
    cardCount++;
    const href = match[1];
    const resolved = resolvePath(dir, href);
    if (resolved && existsOnDisk(resolved)) {
      validCards++;
    } else {
      fail(`${rel(hubPath)}: blog card link "${href}" resolves to missing path`);
      brokenLinks++;
    }
  }
  console.log(`  Blog card links checked: ${cardCount}`);
  console.log(`  Valid card links: ${validCards}`);
  if (cardCount > 0 && validCards < cardCount) {
    fail(`${cardCount - validCards} blog card link(s) are broken`);
  }
}

function checkNoObsoleteBlogPaths() {
  const htmlFiles = [];
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fp = path.join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        scanDir(fp);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        htmlFiles.push(fp);
      }
    }
  }
  scanDir(path.join(ROOT, 'docs'));

  let filesChecked = 0;
  let obsoletePaths = 0;
  for (const fp of htmlFiles) {
    const content = fs.readFileSync(fp, 'utf8');
    const relPath = rel(fp);
    const regex = /href="\/blog\//g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      fail(`${relPath}: contains obsolete absolute path "/blog/" (should be "/docs/blog/")`);
      obsoletePaths++;
    }
    filesChecked++;
  }
  console.log(`  HTML files scanned for obsolete paths: ${filesChecked}`);
  if (obsoletePaths > 0) {
    fail(`Found ${obsoletePaths} obsolete absolute path(s) to /blog/`);
  }
}

function checkKnowledgePlatformLinks() {
  const readmePairs = [
    {
      name: 'docs/blog/README.md',
      expectedLinks: ['../learning/README.md', '../wiki/README.md'],
    },
    {
      name: 'docs/learning/README.md',
      expectedLinks: ['../blog/README.md', '../wiki/README.md'],
    },
    {
      name: 'docs/wiki/README.md',
      expectedLinks: ['../blog/README.md', '../learning/README.md'],
    },
  ];

  for (const pair of readmePairs) {
    const fullPath = path.join(ROOT, pair.name);
    if (!existsOnDisk(fullPath)) {
      continue;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    for (const expected of pair.expectedLinks) {
      if (!content.includes(expected)) {
        warn(`${pair.name}: expected cross-link to "${expected}" not found`);
      }
    }
  }
}

function rel(absPath) {
  return path.relative(ROOT, absPath);
}

// --- Diagram Validation ---

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const yaml = match[1];
  const result = {};
  const lines = yaml.split('\n');
  let currentKey = null;
  let currentArray = null;
  for (const line of lines) {
    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (keyMatch) {
      if (currentArray !== null) {
        result[currentKey] = currentArray;
        currentArray = null;
      }
      currentKey = keyMatch[1];
      const val = keyMatch[2].trim();
      if (val === '' || val === '[') {
        currentArray = [];
      } else {
        result[currentKey] = val;
      }
    } else if (currentArray !== null) {
      const itemMatch = line.match(/^\s*-\s+(.+)/);
      if (itemMatch) {
        currentArray.push(itemMatch[1].trim());
      }
    }
  }
  if (currentArray !== null) {
    result[currentKey] = currentArray;
  }
  return result;
}

function validateLocalizedDiagrams(data) {
  const diagramDir = path.join(ROOT, 'docs/diagrams/blog');
  console.log('  Checking diagram localization...\n');

  for (const article of data.articles) {
    for (const lang of article.languages) {
      const mdPath = path.join(BLOG_DIR, lang, `${article.id}.md`);
      if (!existsOnDisk(mdPath)) {
        continue;
      }
      const content = fs.readFileSync(mdPath, 'utf8');
      const frontmatter = parseFrontmatter(content);
      if (!frontmatter || !frontmatter.diagrams) {
        continue;
      }

      const isCanonical = lang === article.canonical_language;
      const status = frontmatter.status || 'published';

      for (const diagramPath of frontmatter.diagrams) {
        diagramRefsChecked++;

        // Resolve the diagram reference relative to the MD file
        const resolvedSvg = resolvePath(path.dirname(mdPath), diagramPath);
        if (!resolvedSvg) {
          fail(`${rel(mdPath)}: could not resolve diagram "${diagramPath}"`);
          continue;
        }

        // Check rendered SVG exists
        if (existsOnDisk(resolvedSvg)) {
          localizedDiagramsFound++;
        } else {
          const msg = `${rel(mdPath)}: diagram SVG not found at "${diagramPath}"`;
          if (status === 'draft') {
            warn(`${msg} (draft article)`);
            missingDraftDiagrams++;
          } else {
            fail(msg);
          }
          continue;
        }

        // Check source file exists
        const svgPath = resolvedSvg;
        const sourcePath = svgPath.replace(/\.svg$/, '.mmd');
        if (!existsOnDisk(sourcePath)) {
          const msg = `${rel(mdPath)}: diagram source not found at "${rel(sourcePath)}" (svg exists at "${diagramPath}")`;
          if (status === 'draft') {
            warn(`${msg} (draft article)`);
          } else {
            fail(msg);
          }
        }

        // Check for English diagram leaks on non-English pages
        if (!isCanonical) {
          const diagramRel = rel(resolvedSvg);
          if (diagramRel.includes('/en/')) {
            fail(`${rel(mdPath)}: non-English page ("${lang}") references English diagram "${diagramRel}"`);
            englishLeaks++;
          }
        }
      }
    }
  }
}

// --- End Diagram Validation ---

function main() {
  console.log('Blog article validation\n');

  if (!fs.existsSync(ARTICLES_JSON)) {
    fail(`articles.json not found at ${rel(ARTICLES_JSON)}`);
    process.exit(1);
  }

  const data = loadArticles();
  checkArticleStructure(data);

  for (const article of data.articles) {
    articlesChecked++;
    checkArticleExists(article);
  }

  checkReadmeCoverage();
  checkKnowledgePlatformLinks();
  checkNavigationConsistency();
  checkBlogCardLinks();
  checkNoObsoleteBlogPaths();
  validateLocalizedDiagrams(data);

  console.log(`\n\  Blog articles checked: ${articlesChecked}`);
  console.log(`  Language variants checked: ${languageVariantsChecked}`);
  console.log(`  Language links checked: ${linksChecked}`);
  console.log(`  Language links valid: ${languageLinksValid}`);
  console.log(`  hreflang entries valid: ${hreflangEntriesValid}`);
  console.log(`  Broken links: ${brokenLinks}`);
  console.log(`  Articles checked: ${articlesChecked}`);
  console.log(`  Diagram references checked: ${diagramRefsChecked}`);
  console.log(`  Localized diagrams found: ${localizedDiagramsFound}`);
  console.log(`  English diagram leaks on localized pages: ${englishLeaks}`);

  if (missingTranslations > 0) {
    console.log(`  ${String.fromCodePoint(0x26A0)} Missing translations: ${missingTranslations}`);
  }
  if (missingDraftDiagrams > 0) {
    console.log(`  ${String.fromCodePoint(0x26A0)} Missing draft diagrams: ${missingDraftDiagrams}`);
  }
  if (warnings.length > 0) {
    console.log(`  ${String.fromCodePoint(0x26A0)} Warnings: ${warnings.length}`);
  }

  console.log('');

  if (errors.length > 0) {
    console.error(`Failed with ${errors.length} error(s)`);
    process.exit(1);
  }

  console.log('All blog validation checks passed.');
}

main();
