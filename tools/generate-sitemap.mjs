#!/usr/bin/env node
/**
 * Purpose:
 * - Generate crawler and human-readable sitemap artifacts.
 *
 * Why:
 * - Search engines and maintainers both need an auditable view of the published page set.
 *
 * Detects / Enforces:
 * - Enforces that sitemap entries map to known page classes and existing files.
 *
 * Limitations:
 * - Priority and change-frequency values are policy-driven.
 *
 * Related:
 * - tools/README.md
 * - tools/generate-static-seo.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const DOCS_CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools', 'docs-config.json'), 'utf8'));
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
  'learning-article': { priority: '0.6', changefreq: 'monthly' },
  'wiki-index': { priority: '0.5', changefreq: 'monthly' },
  'wiki-article': { priority: '0.5', changefreq: 'monthly' },
  'topics-index': { priority: '0.6', changefreq: 'monthly' },
  'topics-article': { priority: '0.6', changefreq: 'monthly' },
  'static-demo': { priority: '0.7', changefreq: 'monthly' },
};

const LOCALES = DOCS_CONFIG.locales;
const CONTENT_TYPES = DOCS_CONFIG.contentTypes;

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
        // Strip `.html` only to classify the page family. The generated path itself keeps the
        // explicit filename because static hosting and validators both depend on that shape.
        const name = doc.replace(/\.html$/, '');
        const group = name === 'index.html' ? 'docs-home' : 'doc-page';
        pages.push({ path: `/docs/${locale}/${doc}`, group });
      }
    }
  }

  for (const contentType of CONTENT_TYPES) {
    const indexGroup = `${contentType}-index`;
    const articleGroup = `${contentType}-article`;

    for (const locale of LOCALES) {
      const filePath = path.join(DOCS_DIR, contentType, locale, 'index.html');
      if (isFile(filePath)) {
        pages.push({ path: `/docs/${contentType}/${locale}/index.html`, group: indexGroup });
      }
    }

    for (const locale of LOCALES) {
      const dir = path.join(DOCS_DIR, contentType, locale);
      if (!isDirectory(dir)) continue;
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (!file.endsWith('.html') || file === 'index.html') continue;
        if (isFile(path.join(dir, file))) {
          pages.push({ path: `/docs/${contentType}/${locale}/${file}`, group: articleGroup in PRIORITIES ? articleGroup : 'blog-article' });
        }
      }
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
    // Human sitemap labels are derived mechanically from the priority-group keys. This keeps the
    // report auditable without maintaining a second hand-written label map.
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
