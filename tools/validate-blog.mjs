#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const BLOG_DIR = path.join(DOCS_DIR, 'blog');
const ARTICLES_JSON = path.join(BLOG_DIR, 'articles.json');
const DOCS_CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));
const SITE_URL = 'https://letbooks.org';

const errors = [];
const warnings = [];

const fileTypeCache = new Map();
const targetExistsCache = new Map();
const fileContentCache = new Map();

let docsFilesChecked = 0;
let htmlFilesChecked = 0;
let markdownFilesChecked = 0;
let relativeRefsChecked = 0;
let brokenLinks = 0;

let articlesChecked = 0;
let languageVariantsChecked = 0;
let hreflangEntriesValid = 0;
let missingTranslations = 0;

let diagramRefsChecked = 0;
let localizedDiagramsFound = 0;
let englishLeaks = 0;
let missingDraftDiagrams = 0;

let editorialFilesChecked = 0;
let forbiddenEditorialSourceRefs = 0;

const SOURCES_DIR = path.join(DOCS_DIR, 'sources');
const ALLOWED_EDITORIAL_EVIDENCE_ROOT_FILES = new Set([
  'AGENTS.md',
  'AGENTS-Implementation.md',
  'README.md',
  'CONTRIBUTING.md',
  'SECURITY.md',
  'CODE_OF_CONDUCT.md',
]);
const FORBIDDEN_EDITORIAL_SOURCE_PATTERNS = [
  {
    label: 'static-demo source reference',
    regex: /\bstatic-demo\/[^\s<>()`'"|]+\.(?:js|cjs|mjs|ts|tsx|jsx|css|html|json)\b/g,
  },
  {
    label: 'application source reference',
    regex: /\bsrc\/[^\s<>()`'"|]+\.(?:cs|razor|cshtml|js|cjs|mjs|ts|tsx|jsx|css|json)\b/g,
  },
  {
    label: 'test source reference',
    regex: /\btests\/[^\s<>()`'"|]+\.(?:cs|js|cjs|mjs|ts|tsx|jsx|json)\b/g,
  },
];

function fail(message) {
  errors.push(message);
  console.error(`  FAIL: ${message}`);
}

function warn(message) {
  warnings.push(message);
  console.warn(`  WARN: ${message}`);
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function isFile(filePath) {
  const cached = fileTypeCache.get(filePath);
  if (cached !== undefined) {
    return cached === 'file';
  }

  try {
    const stats = fs.statSync(filePath);
    const result = stats.isFile() ? 'file' : stats.isDirectory() ? 'dir' : 'other';
    fileTypeCache.set(filePath, result);
    return result === 'file';
  } catch {
    fileTypeCache.set(filePath, 'missing');
    return false;
  }
}

function isDirectory(filePath) {
  const cached = fileTypeCache.get(filePath);
  if (cached !== undefined) {
    return cached === 'dir';
  }

  try {
    const stats = fs.statSync(filePath);
    const result = stats.isFile() ? 'file' : stats.isDirectory() ? 'dir' : 'other';
    fileTypeCache.set(filePath, result);
    return result === 'dir';
  } catch {
    fileTypeCache.set(filePath, 'missing');
    return false;
  }
}

function readCachedFile(filePath) {
  if (fileContentCache.has(filePath)) {
    return fileContentCache.get(filePath);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  fileContentCache.set(filePath, content);
  return content;
}

function stripQueryAndHash(value) {
  return value.split('#')[0].split('?')[0];
}

function normalizeMarkdownTarget(rawTarget) {
  const trimmed = rawTarget.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('<') && trimmed.endsWith('>')) {
    return trimmed.slice(1, -1);
  }

  const titleMatch = trimmed.match(/^([^\s]+)\s+".*"$/);
  if (titleMatch) {
    return titleMatch[1];
  }

  const singleQuoteTitleMatch = trimmed.match(/^([^\s]+)\s+'.*'$/);
  if (singleQuoteTitleMatch) {
    return singleQuoteTitleMatch[1];
  }

  return trimmed;
}

function isExternalUrl(href) {
  return /^(https?:|mailto:|tel:|data:|javascript:|sms:)/i.test(href) || href.startsWith('//');
}

function resolveSiteAbsoluteUrl(href) {
  if (!href.startsWith(SITE_URL)) {
    return null;
  }

  const url = new URL(href);
  const pathname = url.pathname;
  const candidate = path.join(ROOT, pathname.replace(/^\//, ''));
  if (!candidate.startsWith(ROOT)) {
    return null;
  }
  return candidate;
}

function resolveRepoPath(baseDir, href) {
  if (!href) return null;

  const cleanHref = stripQueryAndHash(href.trim());
  if (!cleanHref || cleanHref === '#' || cleanHref.startsWith('#')) {
    return null;
  }

  if (href.startsWith(SITE_URL)) {
    return resolveSiteAbsoluteUrl(href);
  }

  if (isExternalUrl(cleanHref)) {
    return null;
  }

  if (cleanHref.startsWith('/')) {
    const candidate = path.join(ROOT, cleanHref.replace(/^\//, ''));
    return candidate.startsWith(ROOT) ? candidate : null;
  }

  const candidate = path.resolve(baseDir, cleanHref);
  return candidate.startsWith(ROOT) ? candidate : null;
}

function targetExists(candidate) {
  if (targetExistsCache.has(candidate)) {
    return targetExistsCache.get(candidate);
  }

  let exists = false;
  if (!candidate) return false;
  if (isFile(candidate) || isDirectory(candidate)) {
    exists = true;
  }

  if (!exists && !path.extname(candidate) && isFile(`${candidate}.html`)) {
    exists = true;
  }

  if (!exists && isDirectory(candidate) && isFile(path.join(candidate, 'index.html'))) {
    exists = true;
  }

  targetExistsCache.set(candidate, exists);
  return exists;
}

function listFiles(dir, extensions) {
  const files = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (extensions.has(path.extname(entry.name))) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files.sort();
}

function extractHtmlRefs(content) {
  const refs = [];
  const patterns = [
    { type: 'a[href]', regex: /<a[^>]+href="([^"]+)"/g },
    { type: 'img[src]', regex: /<img[^>]+src="([^"]+)"/g },
    { type: 'script[src]', regex: /<script[^>]+src="([^"]+)"/g },
    { type: 'link[href]', regex: /<link[^>]+href="([^"]+)"/g },
    { type: 'source[srcset]', regex: /<source[^>]+srcset="([^"]+)"/g },
  ];

  for (const { type, regex } of patterns) {
    let match;
    while ((match = regex.exec(content)) !== null) {
      const raw = match[1].trim();
      if (!raw) continue;
      if (type === 'source[srcset]') {
        const first = raw.split(',')[0]?.trim().split(/\s+/)[0];
        if (first) refs.push({ type, href: first });
      } else {
        refs.push({ type, href: raw });
      }
    }
  }

  return refs;
}

function extractMarkdownRefs(content) {
  const refs = [];
  const regex = /!?\[[^\]]*\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const href = normalizeMarkdownTarget(match[1]);
    if (href) {
      refs.push({ type: 'markdown', href });
    }
  }
  return refs;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const result = {};
  const lines = match[1].split('\n');
  let currentKey = null;
  let currentArray = null;

  for (const line of lines) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      if (currentArray !== null) {
        result[currentKey] = currentArray;
        currentArray = null;
      }

      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      if (value === '') {
        currentArray = [];
      } else {
        result[currentKey] = value;
      }
      continue;
    }

    if (currentArray !== null) {
      const itemMatch = line.match(/^\s*-\s+(.+)$/);
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

function validateResolvedRef(filePath, href, sourceType) {
  const resolved = resolveRepoPath(path.dirname(filePath), href);
  if (!resolved) {
    return;
  }

  relativeRefsChecked++;

  if (!targetExists(resolved)) {
    fail(`${rel(filePath)}: ${sourceType} reference "${href}" resolves to missing path`);
    brokenLinks++;
  }
}

function validateMarkdownFrontmatterPaths(filePath, content) {
  const frontmatter = parseFrontmatter(content);
  if (!frontmatter) return frontmatter;

  const pathFields = ['evidence', 'sources', 'diagrams'];
  for (const field of pathFields) {
    const value = frontmatter[field];
    if (!value) continue;

    const refs = Array.isArray(value) ? value : [value];
    for (const href of refs) {
      validateFrontmatterRef(filePath, href, field);
    }
  }

  return frontmatter;
}

function validateFrontmatterRef(filePath, href, field) {
  const baseDir = path.dirname(filePath);
  const cleanHref = href.trim();
  const candidates = [];

  if (cleanHref.startsWith('./') || cleanHref.startsWith('../') || cleanHref.startsWith('/')) {
    const resolved = resolveRepoPath(baseDir, cleanHref);
    if (resolved) {
      candidates.push(resolved);
    }
  } else {
    const rootRelativePrefixes = ['docs/', 'static-demo/', 'AGENTS', '.github/', 'tools/', 'tests/', 'favicon/', 'public/'];
    const docsRelativePrefixes = ['assets/', 'blog/', 'diagrams/', 'learning/', 'sources/', 'style-guide/', 'topics/', 'wiki/'];

    if (rootRelativePrefixes.some((prefix) => cleanHref.startsWith(prefix))) {
      candidates.push(path.join(ROOT, cleanHref));
    }

    if (docsRelativePrefixes.some((prefix) => cleanHref.startsWith(prefix))) {
      candidates.push(path.join(DOCS_DIR, cleanHref));
    }

    candidates.push(path.resolve(baseDir, cleanHref));
  }

  relativeRefsChecked++;

  const validCandidate = candidates.find((candidate) => candidate.startsWith(ROOT) && targetExists(candidate));
  if (!validCandidate) {
    fail(`${rel(filePath)}: frontmatter ${field} reference "${href}" resolves to missing path`);
    brokenLinks++;
  }
}

function validateHtmlFile(filePath) {
  const content = readCachedFile(filePath);
  if (isEditorialHtmlFile(filePath)) {
    validateEditorialSourcePolicy(filePath, content);
  }
  for (const ref of extractHtmlRefs(content)) {
    validateResolvedRef(filePath, ref.href, ref.type);
  }
}

function validateMarkdownFile(filePath) {
  const content = readCachedFile(filePath);
  const frontmatter = validateMarkdownFrontmatterPaths(filePath, content);
  if (isEditorialMarkdownFile(filePath)) {
    validateEditorialSourcePolicy(filePath, content);
    validateEditorialFrontmatterPolicy(filePath, frontmatter);
  }
  for (const ref of extractMarkdownRefs(content)) {
    validateResolvedRef(filePath, ref.href, ref.type);
  }
}

function isEditorialMarkdownFile(filePath) {
  return filePath.startsWith(`${BLOG_DIR}${path.sep}`) || filePath.startsWith(`${SOURCES_DIR}${path.sep}`);
}

function isEditorialHtmlFile(filePath) {
  return filePath.startsWith(`${BLOG_DIR}${path.sep}`);
}

function isAllowedEditorialEvidencePath(resolvedPath) {
  if (!resolvedPath) {
    return false;
  }

  if (resolvedPath === DOCS_DIR || resolvedPath.startsWith(`${DOCS_DIR}${path.sep}`)) {
    return true;
  }

  const repoRelative = rel(resolvedPath);
  return ALLOWED_EDITORIAL_EVIDENCE_ROOT_FILES.has(repoRelative);
}

function validateEditorialFrontmatterPolicy(filePath, frontmatter) {
  if (!frontmatter) {
    return;
  }

  const evidenceRefs = Array.isArray(frontmatter.evidence) ? frontmatter.evidence : [];
  for (const href of evidenceRefs) {
    const resolved = resolveFrontmatterEvidencePath(filePath, href);
    if (!resolved) {
      continue;
    }

    if (!isAllowedEditorialEvidencePath(resolved)) {
      fail(`${rel(filePath)}: frontmatter evidence reference "${href}" must point to specs or docs, not app/source files`);
      forbiddenEditorialSourceRefs++;
    }
  }
}

function resolveFrontmatterEvidencePath(filePath, href) {
  const baseDir = path.dirname(filePath);
  const cleanHref = href.trim();

  if (!cleanHref) {
    return null;
  }

  if (cleanHref.startsWith('./') || cleanHref.startsWith('../') || cleanHref.startsWith('/')) {
    return resolveRepoPath(baseDir, cleanHref);
  }

  const rootRelativePrefixes = ['docs/', 'static-demo/', 'AGENTS', '.github/', 'tools/', 'tests/', 'favicon/', 'public/'];
  const docsRelativePrefixes = ['assets/', 'blog/', 'diagrams/', 'learning/', 'sources/', 'style-guide/', 'topics/', 'wiki/'];

  if (rootRelativePrefixes.some((prefix) => cleanHref.startsWith(prefix))) {
    return path.join(ROOT, cleanHref);
  }

  if (docsRelativePrefixes.some((prefix) => cleanHref.startsWith(prefix))) {
    return path.join(DOCS_DIR, cleanHref);
  }

  return path.resolve(baseDir, cleanHref);
}

function validateEditorialSourcePolicy(filePath, content) {
  editorialFilesChecked++;

  for (const { label, regex } of FORBIDDEN_EDITORIAL_SOURCE_PATTERNS) {
    const matches = new Set(content.match(regex) || []);
    for (const match of matches) {
      fail(`${rel(filePath)}: contains forbidden ${label} "${match}"; blog/source content must cite specs and docs only`);
      forbiddenEditorialSourceRefs++;
    }
  }
}

function loadArticles() {
  if (!isFile(ARTICLES_JSON)) {
    fail(`articles.json not found at ${rel(ARTICLES_JSON)}`);
    process.exit(1);
  }

  const raw = readCachedFile(ARTICLES_JSON);
  const data = JSON.parse(raw);

  if (!Array.isArray(data.articles)) {
    fail('articles.json: missing or invalid "articles" array');
    process.exit(1);
  }

  return data;
}

function checkArticleStructure(data) {
  for (const article of data.articles) {
    if (!article.id || typeof article.id !== 'string') {
      fail('articles.json: article missing string "id"');
    }

    if (!article.canonical_language || typeof article.canonical_language !== 'string') {
      fail(`articles.json: article "${article.id}" missing "canonical_language"`);
    }

    if (!Array.isArray(article.languages) || article.languages.length === 0) {
      fail(`articles.json: article "${article.id}" missing non-empty "languages" array`);
      continue;
    }

    if (!article.languages.includes(article.canonical_language)) {
      fail(`articles.json: article "${article.id}" canonical_language is not present in languages[]`);
    }

    const seen = new Set();
    for (const lang of article.languages) {
      if (seen.has(lang)) {
        fail(`articles.json: article "${article.id}" has duplicate language "${lang}"`);
      }
      seen.add(lang);
    }
  }
}

function validateArticleHtml(filePath, article, lang) {
  const content = readCachedFile(filePath);

  const localeMatch = content.match(/data-locale="([^"]+)"/);
  if (localeMatch && localeMatch[1] !== lang) {
    fail(`${rel(filePath)}: data-locale is "${localeMatch[1]}", expected "${lang}"`);
  }

  const pageTypeMatch = content.match(/data-page-type="([^"]+)"/);
  if (pageTypeMatch && pageTypeMatch[1] !== 'article') {
    warn(`${rel(filePath)}: data-page-type is "${pageTypeMatch[1]}", expected "article"`);
  }

  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)">/);
  if (canonicalMatch) {
    const expected = `${SITE_URL}/docs/blog/${lang}/${article.id}.html`;
    if (canonicalMatch[1] !== expected) {
      fail(`${rel(filePath)}: canonical href is "${canonicalMatch[1]}", expected "${expected}"`);
    }
  }

  const hreflangMap = new Map();
  const hreflangRegex = /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)">/g;
  let match;
  while ((match = hreflangRegex.exec(content)) !== null) {
    hreflangMap.set(match[1], match[2]);
  }

  const expectedDefault = `${SITE_URL}/docs/blog/${article.canonical_language}/${article.id}.html`;
  if (hreflangMap.get('x-default') !== expectedDefault) {
    fail(`${rel(filePath)}: x-default hreflang must point to "${expectedDefault}"`);
  }

  for (const articleLang of article.languages) {
    const expected = `${SITE_URL}/docs/blog/${articleLang}/${article.id}.html`;
    if (hreflangMap.get(articleLang) !== expected) {
      fail(`${rel(filePath)}: hreflang for "${articleLang}" must point to "${expected}"`);
    } else {
      hreflangEntriesValid++;
    }
  }
}

function validateLocalizedDiagrams(article, lang, mdPath, frontmatter) {
  const diagrams = Array.isArray(frontmatter.diagrams) ? frontmatter.diagrams : [];
  const status = frontmatter.status || 'published';

  for (const diagramHref of diagrams) {
    diagramRefsChecked++;
    const resolvedSvg = resolveRepoPath(path.dirname(mdPath), diagramHref);
    if (!resolvedSvg || !isFile(resolvedSvg)) {
      const message = `${rel(mdPath)}: diagram SVG not found at "${diagramHref}"`;
      if (status === 'draft') {
        warn(`${message} (draft article)`);
        missingDraftDiagrams++;
      } else {
        fail(message);
      }
      continue;
    }

    localizedDiagramsFound++;

    const sourcePath = resolvedSvg.replace(/\.svg$/, '.mmd');
    if (!isFile(sourcePath)) {
      const message = `${rel(mdPath)}: diagram source not found at "${rel(sourcePath)}"`;
      if (status === 'draft') {
        warn(`${message} (draft article)`);
      } else {
        fail(message);
      }
    }

    if (lang !== article.canonical_language && rel(resolvedSvg).includes('/en/')) {
      fail(`${rel(mdPath)}: non-English page ("${lang}") references English diagram "${rel(resolvedSvg)}"`);
      englishLeaks++;
    }
  }
}

function checkArticleVariant(article, lang) {
  const htmlPath = path.join(BLOG_DIR, lang, `${article.id}.html`);
  const mdPath = path.join(BLOG_DIR, lang, `${article.id}.md`);
  const htmlExists = isFile(htmlPath);
  const mdExists = isFile(mdPath);

  if (!htmlExists) {
    const message = `Article "${article.id}" missing HTML for "${lang}" (expected docs/blog/${lang}/${article.id}.html)`;
    if (lang === article.canonical_language) {
      fail(message);
    } else {
      warn(message);
      missingTranslations++;
    }
    return;
  }

  languageVariantsChecked++;
  validateArticleHtml(htmlPath, article, lang);

  if (!mdExists) {
    warn(`Article "${article.id}" missing source .md for "${lang}"`);
    return;
  }

  const mdContent = readCachedFile(mdPath);
  const frontmatter = parseFrontmatter(mdContent);
  if (frontmatter) {
    if (frontmatter.article_id && frontmatter.article_id !== article.id) {
      fail(`${rel(mdPath)}: article_id is "${frontmatter.article_id}", expected "${article.id}"`);
    }
    if (frontmatter.canonical_language && frontmatter.canonical_language !== article.canonical_language) {
      fail(`${rel(mdPath)}: canonical_language is "${frontmatter.canonical_language}", expected canonical source "${article.canonical_language}"`);
    }
    validateLocalizedDiagrams(article, lang, mdPath, frontmatter);
  }
}

function checkArticles(data) {
  checkArticleStructure(data);

  for (const article of data.articles) {
    articlesChecked++;
    for (const lang of article.languages) {
      checkArticleVariant(article, lang);
    }
  }
}

function checkRequiredReadmes() {
  const required = [
    'docs/README.md',
    'docs/blog/README.md',
    'docs/learning/README.md',
    'docs/wiki/README.md',
    'docs/topics/README.md',
    'docs/style-guide/README.md',
  ];

  for (const item of required) {
    if (!isFile(path.join(ROOT, item))) {
      warn(`Missing README: ${item}`);
    }
  }
}

function checkNoObsoleteBlogPaths(htmlFiles) {
  let scanned = 0;
  for (const filePath of htmlFiles) {
    const content = readCachedFile(filePath);
    if (content.includes('href="/blog/')) {
      fail(`${rel(filePath)}: contains obsolete absolute path "/blog/" (should be "/docs/blog/")`);
    }
    scanned++;
  }
  return scanned;
}

function validateDocsTree() {
  const htmlFiles = listFiles(DOCS_DIR, new Set(['.html']));
  const markdownFiles = listFiles(DOCS_DIR, new Set(['.md']));

  docsFilesChecked = htmlFiles.length + markdownFiles.length;
  htmlFilesChecked = htmlFiles.length;
  markdownFilesChecked = markdownFiles.length;

  for (const filePath of htmlFiles) {
    validateHtmlFile(filePath);
  }

  for (const filePath of markdownFiles) {
    validateMarkdownFile(filePath);
  }

  return { obsoletePathScanCount: checkNoObsoleteBlogPaths(htmlFiles) };
}

function main() {
  console.log('Docs link validation\n');

  const articleData = loadArticles();
  const { obsoletePathScanCount } = validateDocsTree();
  checkRequiredReadmes();
  checkArticles(articleData);

  const ok = String.fromCodePoint(0x2713);
  const warnIcon = String.fromCodePoint(0x26A0);

  console.log(`${ok} Docs files checked: ${docsFilesChecked}`);
  console.log(`${ok} HTML files checked: ${htmlFilesChecked}`);
  console.log(`${ok} Markdown files checked: ${markdownFilesChecked}`);
  console.log(`${ok} Relative references checked: ${relativeRefsChecked}`);
  console.log(`${ok} HTML files scanned for obsolete /blog/ paths: ${obsoletePathScanCount}`);
  console.log(`${ok} Articles checked: ${articlesChecked}`);
  console.log(`${ok} Article language variants checked: ${languageVariantsChecked}`);
  console.log(`${ok} hreflang entries valid: ${hreflangEntriesValid}`);
  console.log(`${ok} Diagram references checked: ${diagramRefsChecked}`);
  console.log(`${ok} Localized diagrams found: ${localizedDiagramsFound}`);
  console.log(`${ok} English diagram leaks on localized pages: ${englishLeaks}`);
  console.log(`${ok} Editorial files checked: ${editorialFilesChecked}`);
  console.log(`${ok} Forbidden editorial source refs: ${forbiddenEditorialSourceRefs}`);
  console.log(`${ok} Broken links: ${brokenLinks}`);

  if (missingTranslations > 0) {
    console.log(`${warnIcon} Missing translations: ${missingTranslations}`);
  }
  if (missingDraftDiagrams > 0) {
    console.log(`${warnIcon} Missing draft diagrams: ${missingDraftDiagrams}`);
  }
  if (warnings.length > 0) {
    console.log(`${warnIcon} Warnings: ${warnings.length}`);
  }

  console.log('');

  if (errors.length > 0) {
    console.error(`Failed with ${errors.length} error(s)`);
    process.exit(1);
  }

  console.log('All docs validation checks passed.');
}

main();
