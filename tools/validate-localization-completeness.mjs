#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const LOCALES = ['en', 'sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];
const CONTENT_ROOTS = new Set(['blog', 'learning', 'wiki']);
const args = process.argv.slice(2);
const reportFile = readArg('--report-file');
const jsonReportFile = readArg('--json-report-file');

const errors = [];
const fileContentCache = new Map();

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr',
]);

const EXACT_ALLOWLIST = new Set([
  'let books',
  'github',
  'blog',
  'wiki',
  'ai',
  'ci/cd',
  'isbn',
  'ocr',
  'qr',
]);

const CATEGORY_LABELS = {
  title: 'title',
  metaDescription: 'meta description',
  ogDescription: 'Open Graph description',
  twitterDescription: 'Twitter description',
  pageSummary: 'page summary',
  heroLead: 'hero lead',
  heroEyebrow: 'hero eyebrow',
  navLink: 'navigation fragment',
  breadcrumb: 'breadcrumb',
  contentTag: 'tag',
  topicPill: 'topic pill',
  topicMenuTitle: 'related/topic menu entry',
  topicMenuMeta: 'related/topic menu label',
  recentCardTitle: 'article card title',
  recentCardSummary: 'article card summary',
  sectionHeader: 'section header',
  sectionDescription: 'section description',
  bodyText: 'article body text',
  calloutText: 'callout text',
  figcaption: 'caption',
  altText: 'alt text',
  diagramLabel: 'diagram label',
};

main();

function main() {
  const htmlFiles = listFiles(DOCS_DIR, '.html');
  let checkedPages = 0;

  for (const filePath of htmlFiles) {
    const context = deriveContext(filePath);
    if (!context) {
      continue;
    }

    if (!fs.existsSync(context.englishPath)) {
      continue;
    }

    checkedPages += 1;
    validatePage(context);
  }

  const report = renderMarkdownReport(checkedPages);
  const jsonReport = JSON.stringify({ checkedPages, errors }, null, 2);

  if (reportFile) {
    fs.writeFileSync(path.resolve(ROOT, reportFile), report);
  }

  if (jsonReportFile) {
    fs.writeFileSync(path.resolve(ROOT, jsonReportFile), jsonReport);
  }

  console.log('Localization completeness validation\n');
  console.log(`Checked localized generated pages: ${checkedPages}`);
  console.log(`Errors: ${errors.length}`);
  console.log('');

  for (const error of errors.slice(0, 50)) {
    console.error(`FAIL: ${error.path}:${error.line} ${error.reason}`);
  }

  if (errors.length > 50) {
    console.error(`...and ${errors.length - 50} more localization completeness errors.`);
  }

  if (errors.length > 0) {
    process.exit(1);
  }

  console.log('Localization completeness checks passed.');
}

function readArg(name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  return args[index + 1] ?? null;
}

function deriveContext(filePath) {
  const relative = path.relative(DOCS_DIR, filePath);
  const segments = relative.split(path.sep);

  if (LOCALES.includes(segments[0]) && segments[0] !== 'en') {
    return {
      filePath,
      englishPath: path.join(DOCS_DIR, 'en', ...segments.slice(1)),
      locale: segments[0],
    };
  }

  if (
    CONTENT_ROOTS.has(segments[0])
    && LOCALES.includes(segments[1])
    && segments[1] !== 'en'
  ) {
    return {
      filePath,
      englishPath: path.join(DOCS_DIR, segments[0], 'en', ...segments.slice(2)),
      locale: segments[1],
    };
  }

  return null;
}

function validatePage(context) {
  const localizedContent = readCachedFile(context.filePath);
  const englishContent = readCachedFile(context.englishPath);
  const localizedRoot = parseHtml(localizedContent);
  const englishRoot = parseHtml(englishContent);

  const localizedEntries = collectComparableEntries(context.filePath, localizedContent, localizedRoot);
  const englishEntries = collectComparableEntries(context.englishPath, englishContent, englishRoot);

  for (const [category, localizedItems] of localizedEntries.entries()) {
    if (category === 'svgImage') {
      continue;
    }
    const englishItems = englishEntries.get(category) || [];
    const limit = Math.min(localizedItems.length, englishItems.length);
    for (let index = 0; index < limit; index += 1) {
      const localizedItem = localizedItems[index];
      const englishItem = englishItems[index];
      if (!shouldCompare(localizedItem.text, englishItem.text)) {
        continue;
      }
      if (isExplicitlyExempt(localizedItem.node)) {
        continue;
      }
      addError(
        context.filePath,
        localizedItem.start,
        `${labelFor(category)} is still in source language: "${truncate(localizedItem.text)}"`,
      );
    }
  }

  validateLocalizedSvgText(context.filePath, localizedEntries.get('svgImage') || [], englishEntries.get('svgImage') || []);
}

function labelFor(category) {
  return CATEGORY_LABELS[category] || category;
}

function addError(filePath, start, reason) {
  errors.push({
    path: rel(filePath),
    line: getLineNumber(readCachedFile(filePath), start),
    reason,
  });
}

function shouldCompare(localizedText, englishText) {
  if (!localizedText || !englishText) {
    return false;
  }

  const localized = normalizeText(localizedText);
  const english = normalizeText(englishText);
  if (!localized || !english || localized !== english) {
    return false;
  }

  if (EXACT_ALLOWLIST.has(localized.toLowerCase())) {
    return false;
  }

  if (localized.length < 4) {
    return false;
  }

  if (/^[A-Z0-9/&+.-]{2,8}$/.test(localized)) {
    return false;
  }

  return /[A-Za-z]/.test(localized);
}

function isExplicitlyExempt(node) {
  let current = node;
  while (current) {
    const lang = current.attrs?.get('lang');
    if (lang === 'en') {
      return true;
    }
    const classNames = [...(current.classes || [])].join(' ').toLowerCase();
    if (/(quote|citation|cite|untranslated|source-language)/.test(classNames)) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

function collectComparableEntries(filePath, content, root) {
  const entries = new Map();

  push(entries, 'title', extractTitle(content), 0, null);
  push(entries, 'metaDescription', extractMeta(content, 'description'), 0, null);
  push(entries, 'ogDescription', extractPropertyMeta(content, 'og:description'), 0, null);
  push(entries, 'twitterDescription', extractMeta(content, 'twitter:description'), 0, null);

  const pageSummary = findAll(root, (node) => hasClass(node, 'content-page-summary'));
  for (const node of pageSummary) {
    push(entries, 'pageSummary', nodeText(content, node), node.start, node);
  }

  const heroLead = findAll(root, (node) => hasClass(node, 'lead') && hasAncestor(node, (item) => hasClass(item, 'hero')));
  for (const node of heroLead) {
    push(entries, 'heroLead', nodeText(content, node), node.start, node);
  }

  const heroEyebrows = findAll(root, (node) => hasClass(node, 'eyebrow'));
  for (const node of heroEyebrows) {
    push(entries, 'heroEyebrow', nodeText(content, node), node.start, node);
  }

  const navLinks = findAll(root, (node) => hasClass(node, 'nav-link'));
  for (const node of navLinks) {
    push(entries, 'navLink', nodeText(content, node), node.start, node);
  }

  const breadcrumbs = findAll(
    root,
    (node) => node.tag === 'a' && hasAncestor(node, (item) => hasClass(item, 'breadcrumbs')),
  );
  for (const node of breadcrumbs) {
    push(entries, 'breadcrumb', nodeText(content, node), node.start, node);
  }

  const breadcrumbCurrent = findAll(
    root,
    (node) => node.attrs.get('aria-current') === 'page',
  );
  for (const node of breadcrumbCurrent) {
    push(entries, 'breadcrumb', nodeText(content, node), node.start, node);
  }

  const contentTags = findAll(root, (node) => hasClass(node, 'content-tag'));
  for (const node of contentTags) {
    push(entries, 'contentTag', nodeText(content, node), node.start, node);
  }

  const topicPills = findAll(root, (node) => hasClass(node, 'topic-pill-button'));
  for (const node of topicPills) {
    push(entries, 'topicPill', nodeText(content, node), node.start, node);
  }

  const topicMenuLinks = findAll(
    root,
    (node) => node.tag === 'a' && hasAncestor(node, (item) => hasClass(item, 'topic-menu')),
  );
  for (const node of topicMenuLinks) {
    const titleSpan = findDirectChild(node, (child) => child.tag === 'span' && !hasClass(child, 'topic-menu__meta'));
    const metaSpan = findDirectChild(node, (child) => hasClass(child, 'topic-menu__meta'));
    push(entries, 'topicMenuTitle', nodeText(content, titleSpan || node), node.start, node);
    if (metaSpan) {
      push(entries, 'topicMenuMeta', nodeText(content, metaSpan), metaSpan.start, metaSpan);
    }
  }

  const recentCards = findAll(root, (node) => hasClass(node, 'recent-content-card'));
  for (const node of recentCards) {
    const titleNode = findFirst(node, (child) => child.tag === 'h3');
    const summaryNode = findFirst(node, (child) => child.tag === 'p');
    if (titleNode) {
      push(entries, 'recentCardTitle', nodeText(content, titleNode), titleNode.start, titleNode);
    }
    if (summaryNode) {
      push(entries, 'recentCardSummary', nodeText(content, summaryNode), summaryNode.start, summaryNode);
    }
  }

  const sectionHeaders = findAll(root, (node) => hasClass(node, 'section-header'));
  for (const node of sectionHeaders) {
    const titleNode = findFirst(node, (child) => child.tag === 'h2');
    const descNode = findFirst(node, (child) => child.tag === 'p');
    if (titleNode) {
      push(entries, 'sectionHeader', nodeText(content, titleNode), titleNode.start, titleNode);
    }
    if (descNode) {
      push(entries, 'sectionDescription', nodeText(content, descNode), descNode.start, descNode);
    }
  }

  const docsArticles = findAll(root, (node) => hasClass(node, 'docs-article'));
  for (const article of docsArticles) {
    walk(article, (node) => {
      if (node === article) {
        return;
      }
      if (hasAncestor(node, (item) => hasClass(item, 'content-page-header') || hasClass(item, 'post-article-nav'))) {
        return;
      }
      if (hasAncestor(node, (item) => ['code', 'pre', 'script', 'style'].includes(item.tag))) {
        return;
      }
      if (['p', 'li', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].includes(node.tag)) {
        const category = hasAncestor(node, (item) => /callout|notice|warning|tip|alert/.test([...item.classes].join(' ')))
          ? 'calloutText'
          : 'bodyText';
        push(entries, category, nodeText(content, node), node.start, node);
      }
      if (node.tag === 'figcaption') {
        push(entries, 'figcaption', nodeText(content, node), node.start, node);
      }
    });
  }

  const images = findAll(root, (node) => node.tag === 'img');
  for (const node of images) {
    const alt = node.attrs.get('alt') || '';
    if (alt) {
      push(entries, 'altText', alt, node.start, node);
    }
    const src = node.attrs.get('src') || '';
    if (src.toLowerCase().endsWith('.svg')) {
      push(entries, 'svgImage', src, node.start, node);
    }
  }

  return entries;
}

function validateLocalizedSvgText(filePath, localizedSvgs, englishSvgs) {
  const limit = Math.min(localizedSvgs.length, englishSvgs.length);
  for (let index = 0; index < limit; index += 1) {
    const localizedSvg = localizedSvgs[index];
    const englishSvg = englishSvgs[index];
    const localizedPath = resolveRepoPath(path.dirname(filePath), localizedSvg.text);
    const englishPath = resolveRepoPath(path.dirname(filePath), englishSvg.text);
    if (!localizedPath || !englishPath || !fs.existsSync(localizedPath) || !fs.existsSync(englishPath)) {
      continue;
    }

    const localizedTexts = extractSvgTexts(readCachedFile(localizedPath));
    const englishTexts = extractSvgTexts(readCachedFile(englishPath));
    const textLimit = Math.min(localizedTexts.length, englishTexts.length);
    for (let textIndex = 0; textIndex < textLimit; textIndex += 1) {
      if (!shouldCompare(localizedTexts[textIndex], englishTexts[textIndex])) {
        continue;
      }
      addError(
        filePath,
        localizedSvg.start,
        `diagram label is still in source language: "${truncate(localizedTexts[textIndex])}"`,
      );
    }
  }
}

function extractSvgTexts(content) {
  return [...content.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)]
    .map((match) => normalizeText(decodeEntities(stripTags(match[1]))))
    .filter(Boolean);
}

function extractTitle(content) {
  const match = content.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s*\|\s*LetBooks\s*$/i, '').trim() : '';
}

function extractMeta(content, name) {
  const regex = new RegExp(`<meta\\s+name="${escapeRegExp(name)}"\\s+content="([^"]*)">`, 'i');
  return content.match(regex)?.[1] || '';
}

function extractPropertyMeta(content, property) {
  const regex = new RegExp(`<meta\\s+property="${escapeRegExp(property)}"\\s+content="([^"]*)">`, 'i');
  return content.match(regex)?.[1] || '';
}

function push(map, category, text, start, node) {
  const normalized = normalizeText(text);
  if (!normalized) {
    return;
  }
  const list = map.get(category) || [];
  list.push({ text: normalized, start, node });
  map.set(category, list);
}

function normalizeText(value) {
  return decodeEntities(String(value || ''))
    .replace(/\s+/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim();
}

function decodeEntities(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, ' ');
}

function parseHtml(content) {
  const root = createNode('root', new Map(), null, 0, 0);
  const stack = [root];
  const tagRegex = /<\/?([a-zA-Z][\w:-]*)([^>]*)>/g;
  let match;

  while ((match = tagRegex.exec(content)) !== null) {
    const full = match[0];
    const tag = match[1].toLowerCase();
    const rawAttrs = match[2] || '';
    const isClosing = full.startsWith('</');
    const isSelfClosing = VOID_TAGS.has(tag) || rawAttrs.trim().endsWith('/');
    const start = match.index;
    const openEnd = start + full.length;

    if (isClosing) {
      for (let i = stack.length - 1; i > 0; i -= 1) {
        if (stack[i].tag === tag) {
          stack[i].end = openEnd;
          stack.length = i;
          break;
        }
      }
      continue;
    }

    const node = createNode(tag, parseAttributes(rawAttrs), stack.at(-1), start, openEnd);
    stack.at(-1).children.push(node);
    if (!isSelfClosing) {
      stack.push(node);
    }
  }

  return root;
}

function createNode(tag, attrs, parent, start, openEnd) {
  const classAttr = attrs.get('class') || '';
  return {
    tag,
    attrs,
    classes: new Set(classAttr.split(/\s+/).filter(Boolean)),
    children: [],
    parent,
    start,
    openEnd,
    end: openEnd,
  };
}

function parseAttributes(raw) {
  const attrs = new Map();
  const regex = /([:\w-]+)(?:\s*=\s*"([^"]*)")?/g;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    attrs.set(match[1], match[2] ?? '');
  }
  return attrs;
}

function findAll(node, predicate) {
  const results = [];
  walk(node, (child) => {
    if (predicate(child)) {
      results.push(child);
    }
  });
  return results;
}

function findFirst(node, predicate) {
  for (const child of node.children) {
    if (predicate(child)) {
      return child;
    }
    const nested = findFirst(child, predicate);
    if (nested) {
      return nested;
    }
  }
  return null;
}

function findDirectChild(node, predicate) {
  return node.children.find(predicate) || null;
}

function walk(node, visit) {
  visit(node);
  for (const child of node.children) {
    walk(child, visit);
  }
}

function hasClass(node, className) {
  return node.classes.has(className);
}

function hasAncestor(node, predicate) {
  let current = node.parent;
  while (current) {
    if (predicate(current)) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

function nodeText(content, node) {
  return normalizeText(stripTags(content.slice(node.openEnd, node.end).replace(new RegExp(`</${node.tag}>$`, 'i'), '')));
}

function listFiles(dir, extension) {
  const files = [];

  function walkDir(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
        continue;
      }
      if (entry.name.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }

  walkDir(dir);
  return files.sort();
}

function resolveRepoPath(baseDir, href) {
  const cleanHref = href.split('#')[0].split('?')[0].trim();
  if (!cleanHref || /^(https?:|mailto:|tel:|data:|javascript:|sms:)/i.test(cleanHref) || cleanHref.startsWith('//')) {
    return null;
  }
  if (cleanHref.startsWith('/')) {
    const candidate = path.join(ROOT, cleanHref.replace(/^\//, ''));
    return candidate.startsWith(ROOT) ? candidate : null;
  }
  const candidate = path.resolve(baseDir, cleanHref);
  return candidate.startsWith(ROOT) ? candidate : null;
}

function readCachedFile(filePath) {
  if (fileContentCache.has(filePath)) {
    return fileContentCache.get(filePath);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  fileContentCache.set(filePath, content);
  return content;
}

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function truncate(value, max = 120) {
  return value.length <= max ? value : `${value.slice(0, max - 1)}...`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderMarkdownReport(checkedPages) {
  const lines = [];
  lines.push('# Localization Completeness Report');
  lines.push('');
  lines.push(`- Checked localized generated pages: ${checkedPages}`);
  lines.push(`- Errors: ${errors.length}`);
  lines.push('');

  if (errors.length === 0) {
    lines.push('No localization completeness issues detected.');
    lines.push('');
    return lines.join('\n');
  }

  lines.push('## Errors');
  lines.push('');
  for (const error of errors) {
    lines.push(`- ${error.path}:${error.line} ${error.reason}`);
  }
  lines.push('');
  return lines.join('\n');
}
