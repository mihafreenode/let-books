#!/usr/bin/env node
/**
 * Purpose:
 * - Audit rendered localized Mermaid/SVG diagrams for page overflow and node-internal label
 *   clipping that simpler source-level checks cannot see.
 *
 * Why:
 * - Successful Mermaid rendering and valid SVG bounds do not guarantee readable published output.
 *   Labels can still be clipped inside node boxes or hidden by foreignObject boundaries.
 *
 * Detects:
 * - page-level horizontal overflow on generated article pages
 * - image overflow beyond the viewport
 * - localized SVG label containers whose scrollWidth/scrollHeight exceed the visible box
 *
 * Notes:
 * - This is a rendered-output audit, not a source parser.
 * - It is intentionally browser-based because node-internal clipping is a visual/runtime issue.
 * - Human review is still required for final acceptance of translated diagrams.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import childProcess from 'node:child_process';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs');
const BLOG_DIR = path.join(DOCS_DIR, 'blog');
const OUTPUT_DIR = path.join(ROOT, 'output', 'playwright');
const SERVER_HOST = '127.0.0.1';
const PREFERRED_PORT = 4173;
const SCREENSHOT_DIR = path.join(OUTPUT_DIR, 'localized-diagram-audit');

// Warning-only heuristics for visual publication quality. These are intentionally informational:
// they help reviewers spot diagrams that are technically valid but may still feel crowded, overly
// wide, or overly text-heavy in published documentation.
const MAX_ASPECT_RATIO = 3.2;
const MIN_ARTICLE_RENDER_WIDTH = 220;
const MAX_NODE_LABEL_TOTAL_CHARS = 42;
const MAX_NODE_LABEL_LINE_CHARS = 24;
const MAX_NODE_COUNT_WITHIN_DIAGRAM = 14;
const MAX_TEXT_LINES_PER_LABEL = 3;
const EXCESSIVE_WIDTH_GROWTH_RATIO = 1.35;

function loadPlaywright() {
  try {
    return import('playwright');
  } catch {
    const playwrightRoot = path.join(childProcess.execSync('npm root -g').toString().trim(), 'playwright');
    return import(playwrightRoot);
  }
}

function listFiles(dir, predicate) {
  const out = [];
  function walk(current) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (predicate(full)) {
        out.push(full);
      }
    }
  }
  walk(dir);
  return out.sort();
}

function articlePagesWithLocalizedDiagrams() {
  const pages = [];
  // We audit generated article pages rather than raw markdown so the checks reflect what readers
  // actually consume in the published site.
  const localeDirs = fs.readdirSync(BLOG_DIR).filter((name) => fs.statSync(path.join(BLOG_DIR, name)).isDirectory());
  for (const locale of localeDirs) {
    const dir = path.join(BLOG_DIR, locale);
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.html')) continue;
      const full = path.join(dir, file);
      const html = fs.readFileSync(full, 'utf8');
      if (html.includes('/diagrams/blog/')) {
        pages.push({ locale, file, full });
      }
    }
  }
  return pages;
}

function localizedSvgFiles() {
  return listFiles(path.join(DOCS_DIR, 'diagrams', 'blog'), (full) => full.endsWith('.svg') && !full.includes(`${path.sep}en${path.sep}`));
}

function ensureOutputDir() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

function slugify(value) {
  return value.replace(/[^a-zA-Z0-9-_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}

function createServer() {
  const mimeTypes = new Map([
    ['.html', 'text/html; charset=utf-8'],
    ['.css', 'text/css; charset=utf-8'],
    ['.js', 'application/javascript; charset=utf-8'],
    ['.json', 'application/json; charset=utf-8'],
    ['.svg', 'image/svg+xml'],
    ['.png', 'image/png'],
    ['.jpg', 'image/jpeg'],
    ['.jpeg', 'image/jpeg'],
    ['.webmanifest', 'application/manifest+json'],
    ['.woff2', 'font/woff2'],
  ]);

  return http.createServer((req, res) => {
    const url = new URL(req.url, `http://${SERVER_HOST}:${PREFERRED_PORT}`);
    const relativePath = decodeURIComponent(url.pathname.replace(/^\//, '')) || 'index.html';
    const fullPath = path.join(ROOT, relativePath);
    if (!fullPath.startsWith(ROOT) || !fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes.get(ext) || 'application/octet-stream' });
    fs.createReadStream(fullPath).pipe(res);
  });
}

function repoUrl(baseUrl, fullPath) {
  return `${baseUrl}/${path.relative(ROOT, fullPath).replace(/\\/g, '/')}`;
}

async function startServer(server) {
  // Prefer a stable local port for easier manual debugging, but fall back to an ephemeral port
  // when another process is already using it.
  return new Promise((resolve, reject) => {
    const onError = (error) => {
      if (error.code === 'EADDRINUSE') {
        server.off('error', onError);
        server.listen(0, SERVER_HOST);
        return;
      }
      reject(error);
    };

    server.on('error', onError);
    server.listen(PREFERRED_PORT, SERVER_HOST, () => {
      server.off('error', onError);
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : PREFERRED_PORT;
      resolve(`http://${SERVER_HOST}:${port}`);
    });
    server.on('listening', () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : PREFERRED_PORT;
      resolve(`http://${SERVER_HOST}:${port}`);
    });
  });
}

async function auditArticlePages(browser, baseUrl) {
  const pages = articlePagesWithLocalizedDiagrams();
  const viewports = {
    desktop: { width: 1440, height: 1200 },
    tablet: { width: 900, height: 1200 },
    mobile: { width: 390, height: 844 },
  };
  const results = [];

  for (const pageInfo of pages) {
    for (const [name, viewport] of Object.entries(viewports)) {
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
      const page = await context.newPage();
      await page.goto(repoUrl(baseUrl, pageInfo.full), { waitUntil: 'networkidle' });
      // Page-level overflow catches diagrams that break article layout even when the SVG itself is
      // technically valid.
      const metrics = await page.evaluate(() => ({
        pageOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        images: Array.from(document.querySelectorAll('img'))
          .filter((img) => (img.getAttribute('src') || '').includes('/diagrams/blog/'))
          .map((img) => {
            const rect = img.getBoundingClientRect();
            return {
              src: img.getAttribute('src'),
              width: rect.width,
              height: rect.height,
              naturalWidth: img.naturalWidth,
              naturalHeight: img.naturalHeight,
              rightOverflow: rect.right > window.innerWidth + 1,
              leftOverflow: rect.left < -1,
            };
          }),
      }));
      const shotPath = path.join(SCREENSHOT_DIR, `${slugify(pageInfo.locale)}-${slugify(pageInfo.file.replace('.html', ''))}-${name}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      results.push({ page: `${pageInfo.locale}/${pageInfo.file}`, viewport: name, ...metrics });
      await context.close();
    }
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, 'localized-diagram-page-audit.json'), JSON.stringify(results, null, 2));
  return results;
}

async function auditPrintPages(browser, baseUrl) {
  const pages = articlePagesWithLocalizedDiagrams();
  const results = [];
  const context = await browser.newContext({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  const page = await context.newPage();

  for (const pageInfo of pages) {
    await page.emulateMedia({ media: 'print' });
    await page.goto(repoUrl(baseUrl, pageInfo.full), { waitUntil: 'networkidle' });
    // Print layout matters because large diagrams can be acceptable on screen while still
    // becoming unreadable or overflowing in print/PDF output.
    const metrics = await page.evaluate(() => ({
      pageOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      images: Array.from(document.querySelectorAll('img'))
        .filter((img) => (img.getAttribute('src') || '').includes('/diagrams/blog/'))
        .map((img) => {
          const rect = img.getBoundingClientRect();
          return {
            src: img.getAttribute('src'),
            width: rect.width,
            height: rect.height,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            rightOverflow: rect.right > window.innerWidth + 1,
          };
        }),
    }));
    const shotPath = path.join(SCREENSHOT_DIR, `${slugify(pageInfo.locale)}-${slugify(pageInfo.file.replace('.html', ''))}-print.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    results.push({ page: `${pageInfo.locale}/${pageInfo.file}`, ...metrics });
  }

  await context.close();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'localized-diagram-print-audit.json'), JSON.stringify(results, null, 2));
  return results;
}

async function auditSvgNodeClipping(browser, baseUrl) {
  const svgs = localizedSvgFiles();
  const context = await browser.newContext({ viewport: { width: 1800, height: 1200 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const results = [];

  for (const fullPath of svgs) {
    await page.goto(repoUrl(baseUrl, fullPath), { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => {
      const svg = document.querySelector('svg');
      if (!svg) {
        return { error: 'No svg root found', overflowIssues: [], boundIssues: [] };
      }

      const viewBox = (svg.getAttribute('viewBox') || '0 0 0 0').split(/\s+/).map(Number);
      const [vx, vy, vw, vh] = viewBox;
      const svgRect = svg.getBoundingClientRect();
      const nodeLabels = [];

      const overflowIssues = [];
      // foreignObject-backed labels can clip inside the node even when the overall SVG viewBox is
      // fine. scrollWidth/clientWidth is a practical proxy for that hidden overflow.
      const labelBoxes = Array.from(svg.querySelectorAll('foreignObject, .nodeLabel'));
      for (const box of labelBoxes) {
        const target = box.querySelector('div') || box;
        const text = (target.textContent || '').trim().replace(/\s+/g, ' ');
        const scrollWidth = target.scrollWidth || 0;
        const clientWidth = target.clientWidth || box.clientWidth || 0;
        const scrollHeight = target.scrollHeight || 0;
        const clientHeight = target.clientHeight || box.clientHeight || 0;
        const lines = text.split(/\s{2,}|\n/).filter(Boolean);
        nodeLabels.push({
          text,
          totalChars: text.length,
          longestWordishLine: text.split(' ').reduce((max, part) => Math.max(max, part.length), 0),
          lineCount: target.querySelectorAll('br').length + 1 || lines.length || 1,
          clientWidth,
          clientHeight,
          scrollWidth,
          scrollHeight,
        });
        if ((clientWidth && scrollWidth > clientWidth + 1) || (clientHeight && scrollHeight > clientHeight + 1)) {
          overflowIssues.push({ text, scrollWidth, clientWidth, scrollHeight, clientHeight });
        }
      }

      const boundIssues = [];
      // Keep the older viewBox check as a second signal. It cannot detect all node clipping, but
      // it still catches labels rendered outside the overall SVG surface.
      const candidates = Array.from(svg.querySelectorAll('text, foreignObject'));
      for (const el of candidates) {
        const r = el.getBoundingClientRect();
        const x1 = ((r.left - svgRect.left) / svgRect.width) * vw + vx;
        const x2 = ((r.right - svgRect.left) / svgRect.width) * vw + vx;
        const y1 = ((r.top - svgRect.top) / svgRect.height) * vh + vy;
        const y2 = ((r.bottom - svgRect.top) / svgRect.height) * vh + vy;
        if (x1 < vx - 1 || x2 > vx + vw + 1 || y1 < vy - 1 || y2 > vy + vh + 1) {
          boundIssues.push({ text: (el.textContent || '').trim().replace(/\s+/g, ' '), x1, x2, y1, y2 });
        }
      }

      return {
        overflowIssues,
        boundIssues,
        metrics: {
          viewBoxWidth: vw,
          viewBoxHeight: vh,
          aspectRatio: vh ? vw / vh : 0,
          nodeCount: labelBoxes.length,
          labels: nodeLabels,
        },
      };
    });

    results.push({ file: path.relative(ROOT, fullPath), ...result });
  }

  await context.close();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'localized-svg-bounds-audit.json'), JSON.stringify(results, null, 2));
  return results;
}

function buildQualityWarnings(pageAudit, printAudit, svgAudit) {
  const warnings = [];
  const pageWarningMap = new Map();

  function addPageWarning(kind, page, imageSrc, viewport, detail) {
    const key = `${kind}|${page}|${imageSrc}|${detail}`;
    const existing = pageWarningMap.get(key);
    if (existing) {
      existing.viewports.add(viewport);
      return;
    }
    pageWarningMap.set(key, { kind, page, imageSrc, detail, viewports: new Set([viewport]) });
  }

  // Page-level heuristics focus on the published reading experience. A diagram can be technically
  // valid and still become too small or too wide once the article layout scales it.
  for (const item of pageAudit) {
    for (const image of item.images) {
      const aspectRatio = image.height ? image.width / image.height : 0;
      const shrinkRatio = image.naturalWidth ? image.width / image.naturalWidth : 1;
      if (aspectRatio > MAX_ASPECT_RATIO) {
        addPageWarning('Wide rendered diagram', item.page, image.src, item.viewport, `ratio ${aspectRatio.toFixed(2)}`);
      }
      if (image.width < MIN_ARTICLE_RENDER_WIDTH) {
        addPageWarning('Small rendered diagram', item.page, image.src, item.viewport, `${image.width.toFixed(0)}px wide`);
      }
      if (shrinkRatio < 0.5) {
        addPageWarning('Aggressive scaling', item.page, image.src, item.viewport, `rendered at ${(shrinkRatio * 100).toFixed(0)}% of natural width`);
      }
    }
  }

  const printMap = new Map(printAudit.map((item) => [item.page, item]));
  // Print/PDF output is a separate publication surface. Large width jumps between screen and print
  // often indicate diagrams that will feel awkward once exported or printed.
  for (const item of pageAudit) {
    if (item.viewport !== 'desktop') continue;
    const printItem = printMap.get(item.page);
    if (!printItem) continue;
    item.images.forEach((image, index) => {
      const printImage = printItem.images[index];
      if (!printImage) return;
      if (image.width > 0 && printImage.width / image.width > EXCESSIVE_WIDTH_GROWTH_RATIO) {
        warnings.push(`Print scaling candidate: ${item.page} -> ${image.src} (print width growth ${(printImage.width / image.width).toFixed(2)}x)`);
      }
    });
  }

  for (const entry of pageWarningMap.values()) {
    const viewports = [...entry.viewports].sort().join(', ');
    warnings.push(`${entry.kind}: ${entry.page} [${viewports}] -> ${entry.imageSrc} (${entry.detail})`);
  }

  // SVG-level heuristics focus on structural density. These warnings do not prove that a diagram is
  // broken, but they help reviewers find diagrams that may need simplification or restructuring.
  for (const item of svgAudit) {
    const metrics = item.metrics || {};
    if (metrics.aspectRatio > MAX_ASPECT_RATIO) {
      warnings.push(`Wide SVG candidate: ${item.file} (aspect ratio ${metrics.aspectRatio.toFixed(2)})`);
    }
    if (metrics.nodeCount > MAX_NODE_COUNT_WITHIN_DIAGRAM) {
      warnings.push(`Dense diagram candidate: ${item.file} (${metrics.nodeCount} labeled nodes)`);
    }
    const labels = metrics.labels || [];
    const avgChars = labels.length ? labels.reduce((sum, label) => sum + label.totalChars, 0) / labels.length : 0;
    for (const label of labels) {
      if (label.totalChars > MAX_NODE_LABEL_TOTAL_CHARS) {
        warnings.push(`Long label candidate: ${item.file} -> "${label.text}" (${label.totalChars} chars)`);
      }
      if (label.longestWordishLine > MAX_NODE_LABEL_LINE_CHARS) {
        warnings.push(`Long unbroken label line: ${item.file} -> "${label.text}" (${label.longestWordishLine} chars)`);
      }
      if (label.lineCount > MAX_TEXT_LINES_PER_LABEL) {
        warnings.push(`Multi-line density candidate: ${item.file} -> "${label.text}" (${label.lineCount} lines)`);
      }
      if (avgChars && label.totalChars > avgChars * 1.75 && label.totalChars >= 20) {
        warnings.push(`Label imbalance candidate: ${item.file} -> "${label.text}" versus diagram average ${avgChars.toFixed(1)} chars`);
      }
    }
  }

  return [...new Set(warnings)].sort();
}

function summarizeIssues(pageAudit, printAudit, svgAudit) {
  const issues = [];

  for (const item of pageAudit) {
    if (item.pageOverflow || item.images.some((img) => img.rightOverflow || img.leftOverflow)) {
      issues.push(`Page overflow: ${item.page} [${item.viewport}]`);
    }
  }

  for (const item of printAudit) {
    if (item.pageOverflow || item.images.some((img) => img.rightOverflow)) {
      issues.push(`Print overflow: ${item.page}`);
    }
  }

  for (const item of svgAudit) {
    if ((item.overflowIssues || []).length > 0) {
      issues.push(`Node clipping: ${item.file}`);
    }
    if ((item.boundIssues || []).length > 0) {
      issues.push(`SVG bounds issue: ${item.file}`);
    }
  }

  return issues;
}

async function main() {
  ensureOutputDir();
  const server = createServer();
  const baseUrl = await startServer(server);
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch({ headless: true });

  try {
    const pageAudit = await auditArticlePages(browser, baseUrl);
    const printAudit = await auditPrintPages(browser, baseUrl);
    const svgAudit = await auditSvgNodeClipping(browser, baseUrl);
    const issues = summarizeIssues(pageAudit, printAudit, svgAudit);
    const warnings = buildQualityWarnings(pageAudit, printAudit, svgAudit);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'localized-diagram-quality-warnings.json'), JSON.stringify(warnings, null, 2));

    if (issues.length) {
      console.error('Localized diagram audit found issues:\n');
      for (const issue of issues) {
        console.error(`- ${issue}`);
      }
      process.exit(1);
    }

    console.log('Localized diagram rendered audit passed.');
    console.log(`- page checks: ${pageAudit.length}`);
    console.log(`- print checks: ${printAudit.length}`);
    console.log(`- localized SVGs checked: ${svgAudit.length}`);
    console.log(`- publication-quality warnings: ${warnings.length}`);
    if (warnings.length) {
      console.log('Review candidates:');
      for (const warning of warnings.slice(0, 20)) {
        console.log(`  WARN: ${warning}`);
      }
      if (warnings.length > 20) {
        console.log(`  ... ${warnings.length - 20} more warnings saved to output/playwright/localized-diagram-quality-warnings.json`);
      }
    }
    console.log('Manual review is still required for final translation and diagram quality.');
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
