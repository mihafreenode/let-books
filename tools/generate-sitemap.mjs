#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 *
 * Generates docs/sitemap.xml (crawler XML sitemap) and
 * docs/docs-sitemap.md (human-readable sitemap).
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const SITE_URL = 'https://letbooks.org';
const TODAY = new Date().toISOString().split('T')[0];

// Priority groups
const PRIORITIES = {
  'root': { priority: '1.0', changefreq: 'weekly' },
  'docs-home': { priority: '0.9', changefreq: 'weekly' },
  'doc-page': { priority: '0.8', changefreq: 'monthly' },
  'blog-index': { priority: '0.7', changefreq: 'weekly' },
  'blog-article': { priority: '0.6', changefreq: 'monthly' },
  'learning-index': { priority: '0.6', changefreq: 'monthly' },
  'wiki-index': { priority: '0.5', changefreq: 'monthly' },
  'static-demo': { priority: '0.7', changefreq: 'monthly' },
};

const LOCALES = ['en', 'sl', 'hr', 'bs', 'sr-Latn', 'sr-Cyrl', 'mk', 'sq', 'de', 'it', 'fr', 'es'];

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function isDirectory(p) {
  try { return fs.statSync(p).isDirectory(); } catch { return false; }
}

function collectPages() {
  const pages = [];

  // Root homepage
  pages.push({ path: '/index.html', group: 'root' });

  // Static demo
  pages.push({ path: '/static-demo/index.html', group: 'static-demo' });

  // Docs language hub
  pages.push({ path: '/docs/index.html', group: 'docs-home' });

  // Doc pages per locale
  const docPages = ['index.html', 'individuals.html', 'institutions.html', 'administrators.html'];
  for (const locale of LOCALES) {
    for (const doc of docPages) {
      const filePath = path.join(DOCS_DIR, locale, doc);
      if (isFile(filePath)) {
        const name = doc.replace(/\.html$/, '');
        const group = name === 'index.html' ? 'docs-home' : 'doc-page';
        pages.push({ path: `/docs/${locale}/${doc}`, group });
      }
    }
  }

  // Blog index pages
  for (const locale of LOCALES) {
    const filePath = path.join(DOCS_DIR, 'blog', locale, 'index.html');
    if (isFile(filePath)) {
      pages.push({ path: `/docs/blog/${locale}/index.html`, group: 'blog-index' });
    }
  }

  // Blog article HTML files
  for (const locale of LOCALES) {
    const dir = path.join(DOCS_DIR, 'blog', locale);
    if (!isDirectory(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.endsWith('.html') || file === 'index.html') continue;
      if (isFile(path.join(dir, file))) {
        pages.push({ path: `/docs/blog/${locale}/${file}`, group: 'blog-article' });
      }
    }
  }

  // Learning index pages
  for (const locale of LOCALES) {
    const filePath = path.join(DOCS_DIR, 'learning', locale, 'index.html');
    if (isFile(filePath)) {
      pages.push({ path: `/docs/learning/${locale}/index.html`, group: 'learning-index' });
    }
  }

  // Wiki index pages
  for (const locale of LOCALES) {
    const filePath = path.join(DOCS_DIR, 'wiki', locale, 'index.html');
    if (isFile(filePath)) {
      pages.push({ path: `/docs/wiki/${locale}/index.html`, group: 'wiki-index' });
    }
  }

  // Sort by path
  pages.sort((a, b) => a.path.localeCompare(b.path));

  return pages;
}

function generateXmlSitemap(pages) {
  const urls = pages.map((p) => {
    const info = PRIORITIES[p.group];
    return `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${info.changefreq}</changefreq>
    <priority>${info.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function generateHumanSitemap(pages) {
  const lines = [];
  lines.push('# LetBooks Sitemap');
  lines.push('');
  lines.push(`Generated: ${TODAY}`);
  lines.push('');
  lines.push('| Path | Type | Priority |');
  lines.push('|------|------|----------|');

  for (const p of pages) {
    const info = PRIORITIES[p.group];
    const label = p.group.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    lines.push(`| [${p.path}](${SITE_URL}${p.path}) | ${label} | ${info.priority} |`);
  }

  return lines.join('\n') + '\n';
}

function main() {
  console.log('Generating sitemaps...\n');

  const pages = collectPages();
  console.log(`  Found ${pages.length} pages\n`);

  // XML sitemap
  const xml = generateXmlSitemap(pages);
  fs.writeFileSync(path.join(DOCS_DIR, 'sitemap.xml'), xml);
  console.log(`  ✓ docs/sitemap.xml (${xml.length} bytes)`);

  // Human-readable sitemap
  const md = generateHumanSitemap(pages);
  fs.writeFileSync(path.join(DOCS_DIR, 'docs-sitemap.md'), md);
  console.log(`  ✓ docs/docs-sitemap.md (${md.length} bytes)`);

  console.log('\nDone.');
}

main();
