#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const failOnWarn = process.argv.includes('--fail-on-warn');

const warnings = [];

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr',
]);

function rel(filePath) {
  return path.relative(ROOT, filePath);
}

function isFile(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function listFiles(dir, extension) {
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
      if (entry.name.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files.sort();
}

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function warn(filePath, index, message) {
  const line = getLineNumber(fileContentCache.get(filePath), index);
  warnings.push({ filePath, line, message });
  console.warn(`::warning file=${rel(filePath)},line=${line}::${message}`);
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

function walk(node, visit) {
  for (const child of node.children) {
    visit(child);
    walk(child, visit);
  }
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

function firstAncestor(node, predicate) {
  let current = node.parent;
  while (current) {
    if (predicate(current)) {
      return current;
    }
    current = current.parent;
  }
  return null;
}

function descendantLinks(node) {
  return findAll(node, (child) => child.tag === 'a' && child.attrs.has('href'));
}

function textSlice(content, node) {
  return content.slice(node.start, node.end);
}

function stripQueryAndHash(value) {
  return value.split('#')[0].split('?')[0];
}

function isExternalUrl(href) {
  return /^(https?:|mailto:|tel:|data:|javascript:|sms:)/i.test(href) || href.startsWith('//');
}

function resolveRepoPath(baseDir, href) {
  const cleanHref = stripQueryAndHash(href.trim());
  if (!cleanHref || cleanHref === '#' || cleanHref.startsWith('#')) {
    return null;
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
  if (!candidate) {
    return false;
  }
  if (isFile(candidate)) {
    return true;
  }
  if (!path.extname(candidate) && isFile(`${candidate}.html`)) {
    return true;
  }
  return false;
}

function componentLinksByHref(node) {
  const links = new Map();
  for (const link of descendantLinks(node)) {
    const href = link.attrs.get('href');
    if (!href) continue;
    const entries = links.get(href) || [];
    entries.push(link);
    links.set(href, entries);
  }
  return links;
}

const fileContentCache = new Map();

function validateHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  fileContentCache.set(filePath, content);
  const root = parseHtml(content);

  const relatedContentNodes = findAll(
    root,
    (node) => hasClass(node, 'related-content') || hasClass(node, 'related-articles'),
  );
  if (relatedContentNodes.length > 1) {
    warn(
      filePath,
      relatedContentNodes[1].start,
      'Duplicate related-content sections detected. Possible duplicate renderer active.',
    );
  }

  const legacyRelatedNodes = findAll(root, (node) => hasClass(node, 'related-articles'));
  const modernRelatedNodes = findAll(root, (node) => hasClass(node, 'related-content'));
  if (legacyRelatedNodes.length > 0 && modernRelatedNodes.length > 0) {
    warn(
      filePath,
      legacyRelatedNodes[0].start,
      'Legacy and modern related navigation rendered together.',
    );
  }

  const langSwitches = findAll(root, (node) => hasClass(node, 'lang-switch'));
  if (langSwitches.length > 1) {
    warn(filePath, langSwitches[1].start, 'Page contains duplicate header language selectors.');
  }

  const languageAlternatives = findAll(root, (node) => hasClass(node, 'language-alternatives'));
  if (languageAlternatives.length > 1) {
    warn(
      filePath,
      languageAlternatives[1].start,
      'Page contains duplicate post-article language navigation blocks.',
    );
  }

  const h1Nodes = findAll(root, (node) => node.tag === 'h1');
  if (h1Nodes.length > 1) {
    warn(filePath, h1Nodes[1].start, 'Page contains more than one H1.');
  }

  const breadcrumbNodes = findAll(root, (node) => hasClass(node, 'breadcrumbs'));
  if (breadcrumbNodes.length > 1) {
    warn(filePath, breadcrumbNodes[1].start, 'Page contains more than one breadcrumb container.');
  }

  const contentHeaders = findAll(root, (node) => hasClass(node, 'content-page-header'));
  if (contentHeaders.length > 1) {
    warn(filePath, contentHeaders[1].start, 'Page contains more than one content-page-header block.');
  }

  const majorBlocks = [
    ['related-content', 'related-content'],
    ['recent-content-section', 'recent-content'],
    ['related-topic-nav', 'topic-browser'],
    ['post-article-nav', 'article navigation'],
  ];

  for (const [className, label] of majorBlocks) {
    const nodes = findAll(root, (node) => hasClass(node, className));
    for (const node of nodes) {
      if (node.parent?.tag === 'body' || hasClass(node.parent || root, 'page-shell')) {
        warn(
          filePath,
          node.start,
          `${label} block appears outside the expected content container.`,
        );
        continue;
      }

      if (className === 'post-article-nav' && !hasAncestor(node, (item) => hasClass(item, 'docs-article'))) {
        warn(filePath, node.start, 'Article navigation block is outside the article container.');
      }

      if (className === 'related-content' && !hasAncestor(node, (item) => hasClass(item, 'docs-article') || hasClass(item, 'section'))) {
        warn(filePath, node.start, 'Related-content block is outside the expected centered content container.');
      }
    }
  }

  for (const selector of [...langSwitches, ...languageAlternatives]) {
    const links = descendantLinks(selector).filter((link) => Boolean(link.attrs.get('href')));
    if (links.length === 0) {
      warn(filePath, selector.start, 'Language selector exists but contains no destinations.');
      continue;
    }

    for (const link of links) {
      const href = link.attrs.get('href');
      const target = resolveRepoPath(path.dirname(filePath), href);
      if (target && !targetExists(target)) {
        warn(filePath, link.start, `Language selector points to missing page: ${href}`);
      }
    }
  }

  const markdownLinkRegex = /<a[^>]+href="([^"]+\.(?:md|markdown))(?:[#?][^"]*)?"/gi;
  let markdownLinkMatch;
  while ((markdownLinkMatch = markdownLinkRegex.exec(content)) !== null) {
    warn(filePath, markdownLinkMatch.index, `Generated page links to Markdown source: ${markdownLinkMatch[1]}`);
  }

  const sectionNodeSet = new Set([
    ...modernRelatedNodes.filter((node) => !hasClass(node, 'related-content--index')),
    ...findAll(root, (node) => hasClass(node, 'recent-content-section')),
  ]);
  const sectionNodes = [...sectionNodeSet];
  for (const node of sectionNodes) {
    if (descendantLinks(node).length === 0) {
      warn(filePath, node.start, 'Content section has a heading or container but no links.');
    }

    const hrefGroups = componentLinksByHref(node);
    for (const [href, links] of hrefGroups.entries()) {
      if (links.length > 1) {
        warn(filePath, links[1].start, `Duplicate card or link found in the same component: ${href}`);
      }
    }
  }

  const topicMenus = findAll(root, (node) => hasClass(node, 'topic-menu'));
  for (const node of topicMenus) {
    const links = descendantLinks(node);
    if (links.length === 0) {
      warn(filePath, node.start, 'Topic menu contains no entries.');
      continue;
    }

    for (const link of links) {
      const href = link.attrs.get('href');
      const target = resolveRepoPath(path.dirname(filePath), href);
      if (target && !targetExists(target)) {
        warn(filePath, link.start, `Topic menu references a missing page: ${href}`);
      }
    }
  }

  const topicNavNodes = findAll(root, (node) => hasClass(node, 'related-topic-nav'));
  for (const node of topicNavNodes) {
    const container = firstAncestor(
      node,
      (item) => hasClass(item, 'related-content') || hasClass(item, 'related-articles'),
    );
    if (!container) {
      warn(filePath, node.start, 'Topic navigation appears outside a related-content container.');
    }
  }

  const relatedHeadingMatches = [
    ...content.matchAll(/>\s*Related Articles\s*</g),
    ...content.matchAll(/>\s*Related Learning Material\s*</g),
    ...content.matchAll(/>\s*Related Wiki Entries\s*</g),
  ];
  if (relatedHeadingMatches.length > 1 && relatedContentNodes.length > 1) {
    warn(
      filePath,
      relatedHeadingMatches[1].index,
      'Page contains multiple related-content containers. Possible duplicate renderer active.',
    );
  }
}

function main() {
  console.log('Generated site structural validation\n');

  const htmlFiles = listFiles(DOCS_DIR, '.html');
  for (const filePath of htmlFiles) {
    validateHtmlFile(filePath);
  }

  console.log(`Checked ${htmlFiles.length} generated HTML files.`);
  console.log(`Warnings: ${warnings.length}`);
  console.log('');

  if (warnings.length > 0 && failOnWarn) {
    console.error(`Failing because --fail-on-warn was provided (${warnings.length} warning(s)).`);
    process.exit(1);
  }

  console.log('Generated site structural validation completed.');
}

main();
