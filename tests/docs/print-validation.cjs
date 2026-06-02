const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = process.cwd();
const baseUrl = process.env.DOCS_BASE_URL || 'http://127.0.0.1:4173';
const artifactDir = path.join(ROOT, 'docs', '.print-artifacts');

const pages = [
  { label: 'blog-article', url: '/docs/blog/en/documentation-is-part-of-the-product.html' },
  { label: 'wiki-article', url: '/docs/wiki/en/validation-layers.html' },
  { label: 'learning-article', url: '/docs/learning/en/how-to-add-validation-rules-and-ci-gates-in-stages.html' },
  { label: 'topic-article', url: '/docs/topics/en/spec-driven-development.html' },
  { label: 'topic-index', url: '/docs/topics/en/index.html' },
  { label: 'localized-non-english', url: '/docs/blog/sl/documentation-is-part-of-the-product.html' },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

(async () => {
  fs.mkdirSync(artifactDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1200 } });

  for (const pageConfig of pages) {
    const page = await context.newPage();
    await page.goto(`${baseUrl}${pageConfig.url}`, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));

    const checks = await page.evaluate(() => {
      const visible = (selector) => {
        const node = document.querySelector(selector);
        if (!node) return false;
        const style = window.getComputedStyle(node);
        return style.display !== 'none' && style.visibility !== 'hidden';
      };

      const textVisible = (selector) => {
        const node = document.querySelector(selector);
        if (!node) return false;
        return visible(selector) && node.textContent.trim().length > 0;
      };

      const accordionContentVisible = Array.from(document.querySelectorAll('details')).every((details) => details.open);
      const majorOverflow = Array.from(document.querySelectorAll('pre, table, img, svg, article, main')).some((node) => node.scrollWidth - node.clientWidth > 4);

      return {
        hasPrintStylesheet: !!document.querySelector('link[href*="print.css"]'),
        mainVisible: visible('main'),
        titleVisible: textVisible('h1'),
        localizedHeaderVisible: visible('.site-print-header') || textVisible('.site-header .brand-copy'),
        localizedFooterVisible: visible('.site-print-footer') || textVisible('.site-footer .footer-microcopy'),
        navigationHidden: !visible('.site-header .header-nav'),
        languageSelectorHidden: !visible('.lang-switch') && !visible('.nav-language-menu'),
        searchUiHidden: !visible('[type="search"]') && !visible('[data-search-ui]'),
        accordionContentVisible,
        majorOverflow,
      };
    });

    assert(checks.hasPrintStylesheet, `${pageConfig.label}: missing print stylesheet`);
    assert(checks.mainVisible, `${pageConfig.label}: main content not visible in print`);
    assert(checks.titleVisible, `${pageConfig.label}: title not visible in print`);
    assert(checks.localizedHeaderVisible, `${pageConfig.label}: localized header not visible in print`);
    assert(checks.localizedFooterVisible, `${pageConfig.label}: localized footer not visible in print`);
    assert(checks.navigationHidden, `${pageConfig.label}: navigation still visible in print`);
    assert(checks.languageSelectorHidden, `${pageConfig.label}: language selector still visible in print`);
    assert(checks.searchUiHidden, `${pageConfig.label}: search UI still visible in print`);
    assert(checks.accordionContentVisible, `${pageConfig.label}: hidden accordion content in print`);
    assert(!checks.majorOverflow, `${pageConfig.label}: major clipping or overflow detected in print`);

    await page.pdf({
      path: path.join(artifactDir, `${pageConfig.label}.pdf`),
      printBackground: true,
      format: 'A4',
      margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    });

    await page.close();
  }

  await browser.close();
  console.log(`Print validation passed for ${pages.length} representative pages.`);
})().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
