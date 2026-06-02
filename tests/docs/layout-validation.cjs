const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = process.cwd();
const baseUrl = process.env.DOCS_BASE_URL || 'http://127.0.0.1:4173';
const artifactDir = path.join(ROOT, 'docs', '.layout-artifacts');

const pages = [
  { label: 'blog-article-sl', url: '/docs/blog/sl/why-every-language-matters.html', kind: 'article' },
  { label: 'wiki-article-en', url: '/docs/wiki/en/validation-layers.html', kind: 'article' },
  { label: 'learning-article-en', url: '/docs/learning/en/how-to-add-validation-rules-and-ci-gates-in-stages.html', kind: 'article' },
  { label: 'docs-index-en', url: '/docs/en/index.html', kind: 'index' },
];

const viewports = [
  { label: 'mobile', width: 390, height: 844 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'desktop', width: 1366, height: 768 },
  { label: 'wide', width: 1920, height: 1080 },
];

const ARTICLE_FORBIDDEN_SELECTORS = [
  '.hero',
  '.brand-hero',
  '.site-intro',
  '.landing-logo',
  '.landing-hero-panel',
  '.hero-visual',
];

function fileSafe(value) {
  return value.replace(/[^a-z0-9_-]+/gi, '-').toLowerCase();
}

function snippet(value, max = 220) {
  if (!value) return '';
  const collapsed = value.replace(/\s+/g, ' ').trim();
  return collapsed.length > max ? `${collapsed.slice(0, max)}...` : collapsed;
}

async function failWithDump(page, pageConfig, viewport, message, details) {
  const screenshotPath = path.join(artifactDir, `${fileSafe(pageConfig.label)}-${viewport.label}-failure.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const payload = {
    message,
    url: `${baseUrl}${pageConfig.url}`,
    viewport,
    screenshotPath,
    ...details,
  };

  console.error(JSON.stringify(payload, null, 2));
  throw new Error(message);
}

function elementInfo(node, label) {
  if (!node) return null;
  const rect = node.getBoundingClientRect();
  return {
    label,
    selector: label,
    text: snippet(node.textContent || ''),
    boundingBox: {
      x: rect.x,
      y: rect.y + window.scrollY,
      width: rect.width,
      height: rect.height,
      bottom: rect.bottom + window.scrollY,
      right: rect.right,
    },
    outerHTML: snippet(node.outerHTML || ''),
  };
}

(async () => {
  fs.mkdirSync(artifactDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });

    for (const pageConfig of pages) {
      const page = await context.newPage();
      await page.goto(`${baseUrl}${pageConfig.url}`, { waitUntil: 'networkidle' });

      const checks = await page.evaluate(({ kind, forbiddenSelectors }) => {
        const snippet = (value, max = 220) => {
          if (!value) return '';
          const collapsed = value.replace(/\s+/g, ' ').trim();
          return collapsed.length > max ? `${collapsed.slice(0, max)}...` : collapsed;
        };

        const elementInfo = (node, label) => {
          if (!node) return null;
          const rect = node.getBoundingClientRect();
          return {
            label,
            selector: label,
            text: snippet(node.textContent || ''),
            boundingBox: {
              x: rect.x,
              y: rect.y + window.scrollY,
              width: rect.width,
              height: rect.height,
              bottom: rect.bottom + window.scrollY,
              right: rect.right,
            },
            outerHTML: snippet(node.outerHTML || ''),
          };
        };

        const visible = (node) => {
          if (!node) return false;
          const style = window.getComputedStyle(node);
          return style.display !== 'none' && style.visibility !== 'hidden' && node.getClientRects().length > 0;
        };

        const toInfo = (node, label) => elementInfo(node, label);
        const visibleNodes = (selector) => Array.from(document.querySelectorAll(selector)).filter(visible);
        const firstVisible = (selector) => visibleNodes(selector)[0] || null;

        const shell = document.querySelector('.page-shell');
        const shellChildren = Array.from(shell?.children || []).filter(visible);
        const siteHeader = firstVisible('.site-header');
        const main = firstVisible('main');
        const siteFooter = firstVisible('.site-footer');
        const article = firstVisible('article.docs-article, article.blog-article');
        const articleHeader = article?.querySelector('.content-page-header') || null;
        const breadcrumbs = article?.querySelector('.breadcrumbs') || null;
        const title = article?.querySelector('h1') || document.querySelector('main h1') || null;
        const metadata = article?.querySelector('.content-page-meta') || null;
        const relatedContent = article?.querySelector('.related-content') || article?.querySelector('.post-article-nav') || null;

        const headerBox = toInfo(siteHeader, '.site-header');
        const articleBox = toInfo(article || main, 'article/main');
        const footerBox = toInfo(siteFooter, '.site-footer');

        const articleBodyChildren = article
          ? Array.from(article.children).filter((node) => visible(node) && !node.classList.contains('content-page-header') && !node.classList.contains('post-article-nav'))
          : [];
        const articleBodyStart = articleBodyChildren[0] || null;
        const articleBodyEnd = articleBodyChildren[articleBodyChildren.length - 1] || null;

        const visibleAfterFooter = siteFooter
          ? shellChildren
              .filter((node) => node !== siteFooter)
              .filter((node) => {
                const rect = node.getBoundingClientRect();
                const footerRect = siteFooter.getBoundingClientRect();
                return rect.top + window.scrollY >= footerRect.bottom + window.scrollY - 1 && rect.height > 1;
              })
              .map((node) => toInfo(node, node.className || node.tagName.toLowerCase()))
          : [];

        const languageSelectors = Array.from(document.querySelectorAll('.site-header .lang-switch, .site-header .nav-language-menu'));
        const navBlocks = Array.from(document.querySelectorAll('.site-header .header-nav'));
        const headersInsideArticle = article ? Array.from(article.querySelectorAll('.site-header, header.site-header, .header-nav')).filter(visible) : [];
        const footersInsideArticle = article ? Array.from(article.querySelectorAll('.site-footer, footer.site-footer')).filter(visible) : [];

        const logoCandidates = Array.from(document.querySelectorAll('img, svg')).filter((node) => {
          if (!visible(node)) return false;
          const alt = (node.getAttribute('alt') || '').toLowerCase();
          const src = (node.getAttribute('src') || '').toLowerCase();
          const cls = String(node.className?.baseVal || node.className || '').toLowerCase();
          return alt.includes('let books') || src.includes('logo-mark') || cls.includes('brand-mark') || cls.includes('logo');
        });

        const oversizedLogosOutsideHeader = logoCandidates
          .filter((node) => !siteHeader?.contains(node))
          .map((node) => {
            const rect = node.getBoundingClientRect();
            return {
              ...toInfo(node, String(node.className?.baseVal || node.className || node.tagName.toLowerCase())),
              metrics: {
                width: rect.width,
                height: rect.height,
                area: rect.width * rect.height,
              },
            };
          })
          .filter((info) => info.metrics.width > 160 || info.metrics.height > 120 || info.metrics.area > 20000);

        const forbiddenBrandingBlocks = kind === 'article'
          ? forbiddenSelectors.flatMap((selector) => visibleNodes(selector).map((node) => toInfo(node, selector)))
          : [];

        const forbiddenSourceNodes = kind === 'article'
          ? forbiddenSelectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)).map((node) => toInfo(node, `${selector} (source)`)))
          : [];
        const hasArticleAndHeroSource = kind === 'article' && forbiddenSourceNodes.length > 0;

        const footerRect = siteFooter?.getBoundingClientRect() || null;
        const headerRect = siteHeader?.getBoundingClientRect() || null;
        const articleRect = (article || main)?.getBoundingClientRect() || null;
        const bodyHeight = document.body.scrollHeight;

        return {
          counts: {
            headers: visibleNodes('.site-header').length,
            mains: visibleNodes('main').length,
            footers: visibleNodes('.site-footer').length,
            navBlocks: navBlocks.length,
            languageSelectors: languageSelectors.length,
            footerCopyrights: visibleNodes('.footer-note').length,
            footerDisclaimers: visibleNodes('.footer-microcopy').length,
            footerLanguageLists: visibleNodes('.site-footer .language-list').length,
          },
          geometry: {
            header: headerBox,
            article: articleBox,
            footer: footerBox,
            bodyScrollHeight: bodyHeight,
            headerTop: headerRect ? headerRect.top + window.scrollY : null,
            articleTop: articleRect ? articleRect.top + window.scrollY : null,
            articleBottom: articleRect ? articleRect.bottom + window.scrollY : null,
            footerTop: footerRect ? footerRect.top + window.scrollY : null,
            footerBottom: footerRect ? footerRect.bottom + window.scrollY : null,
          },
          structure: {
            breadcrumbs: toInfo(breadcrumbs, '.breadcrumbs'),
            title: toInfo(title, 'h1'),
            metadata: toInfo(metadata, '.content-page-meta'),
            bodyStart: toInfo(articleBodyStart, 'article-body-start'),
            bodyEnd: toInfo(articleBodyEnd, 'article-body-end'),
            relatedContent: toInfo(relatedContent, '.related-content/.post-article-nav'),
            headersInsideArticle: headersInsideArticle.map((node) => toInfo(node, node.className || node.tagName.toLowerCase())),
            footersInsideArticle: footersInsideArticle.map((node) => toInfo(node, node.className || node.tagName.toLowerCase())),
            visibleAfterFooter,
            oversizedLogosOutsideHeader,
            forbiddenBrandingBlocks,
            forbiddenSourceNodes,
            hasArticleAndHeroSource,
          },
        };
      }, { kind: pageConfig.kind, forbiddenSelectors: ARTICLE_FORBIDDEN_SELECTORS });

      const screenshotPath = path.join(artifactDir, `${fileSafe(pageConfig.label)}-${viewport.label}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });

      const fail = async (message, extra = {}) => failWithDump(page, pageConfig, viewport, message, {
        screenshotPath,
        counts: checks.counts,
        geometry: checks.geometry,
        ...extra,
      });

      if (checks.counts.headers !== 1) await fail(`Expected exactly one visible .site-header, found ${checks.counts.headers}`);
      if (checks.counts.mains !== 1) await fail(`Expected exactly one visible main, found ${checks.counts.mains}`);
      if (checks.counts.footers !== 1) await fail(`Expected exactly one visible .site-footer, found ${checks.counts.footers}`);
      if (checks.counts.navBlocks !== 1) await fail(`Expected exactly one navigation block, found ${checks.counts.navBlocks}`);
      if (checks.counts.languageSelectors !== 1) await fail(`Expected exactly one language selector, found ${checks.counts.languageSelectors}`);
      if (checks.counts.footerCopyrights > 1) await fail(`Copyright block appears more than once (${checks.counts.footerCopyrights})`);
      if (checks.counts.footerDisclaimers > 1) await fail(`Disclaimer block appears more than once (${checks.counts.footerDisclaimers})`);

      const geometry = checks.geometry;
      if (!(geometry.headerTop < geometry.articleTop && geometry.articleTop < geometry.articleBottom && geometry.articleBottom <= geometry.footerTop + 2)) {
        await fail('Header, article, and footer geometry is out of order', { structure: checks.structure });
      }
      if (!(geometry.footerBottom <= geometry.bodyScrollHeight + 4)) {
        await fail('Footer extends beyond document body height tolerance', { structure: checks.structure });
      }
      if (checks.structure.visibleAfterFooter.length > 0) {
        await fail('Visible content appears after the site footer', { offender: checks.structure.visibleAfterFooter[0], offenders: checks.structure.visibleAfterFooter });
      }

      if (pageConfig.kind === 'article') {
        if (checks.structure.headersInsideArticle.length > 0) {
          await fail('Header content rendered inside article content', { offender: checks.structure.headersInsideArticle[0] });
        }
        if (checks.structure.footersInsideArticle.length > 0) {
          await fail('Footer content rendered inside article content', { offender: checks.structure.footersInsideArticle[0] });
        }
        if (checks.structure.forbiddenBrandingBlocks.length > 0) {
          await fail('Article page renders forbidden hero/branding blocks', { offender: checks.structure.forbiddenBrandingBlocks[0], offenders: checks.structure.forbiddenBrandingBlocks });
        }
        if (checks.structure.oversizedLogosOutsideHeader.length > 0) {
          await fail('Article page renders oversized logo-like element outside the site header', { offender: checks.structure.oversizedLogosOutsideHeader[0], offenders: checks.structure.oversizedLogosOutsideHeader });
        }
        if (checks.structure.hasArticleAndHeroSource) {
          await fail('Generated article HTML source still includes both article layout and landing/hero branding markers', { offender: checks.structure.forbiddenSourceNodes[0], offenders: checks.structure.forbiddenSourceNodes });
        }

        const s = checks.structure;
        const ordered =
          s.breadcrumbs?.boundingBox?.y <= s.title?.boundingBox?.y
          && s.title?.boundingBox?.y <= s.metadata?.boundingBox?.y
          && s.metadata?.boundingBox?.y <= s.bodyStart?.boundingBox?.y
          && s.bodyEnd?.boundingBox?.bottom <= s.relatedContent?.boundingBox?.y
          && s.relatedContent?.boundingBox?.bottom <= geometry.footerTop;
        if (!ordered) {
          await fail('Article content structure order is invalid', { structure: checks.structure });
        }
      }

      await page.close();
    }

    await context.close();
  }

  await browser.close();
  console.log(`Layout validation passed for ${pages.length} pages across ${viewports.length} viewports.`);
})().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
