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
  { label: 'mobile', width: 360, height: 800 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'desktop', width: 1366, height: 768 },
  { label: 'wide', width: 1920, height: 1080 },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function fileSafe(value) {
  return value.replace(/[^a-z0-9_-]+/gi, '-').toLowerCase();
}

(async () => {
  fs.mkdirSync(artifactDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });

    for (const pageConfig of pages) {
      const page = await context.newPage();
      await page.goto(`${baseUrl}${pageConfig.url}`, { waitUntil: 'networkidle' });

      const checks = await page.evaluate((kind) => {
        const visible = (node) => {
          if (!node) return false;
          const style = window.getComputedStyle(node);
          return style.display !== 'none' && style.visibility !== 'hidden' && node.getClientRects().length > 0;
        };

        const visibleNodes = (selector) => Array.from(document.querySelectorAll(selector)).filter(visible);
        const firstVisible = (selector) => visibleNodes(selector)[0] || null;
        const top = (node) => node ? node.getBoundingClientRect().top + window.scrollY : null;

        const shellChildren = Array.from(document.querySelector('.page-shell')?.children || []).filter((node) => visible(node));
        const siteHeader = firstVisible('.site-header');
        const main = firstVisible('main');
        const siteFooter = firstVisible('.site-footer');
        const article = firstVisible('article.docs-article, article.blog-article');
        const articleHeader = article?.querySelector('.content-page-header') || null;
        const breadcrumbs = article?.querySelector('.breadcrumbs') || null;
        const title = article?.querySelector('h1') || document.querySelector('main h1') || null;
        const metadata = article?.querySelector('.content-page-meta') || null;
        const relatedContent = article?.querySelector('.related-content') || null;
        const bodyChildren = article
          ? Array.from(article.children).filter((node) => visible(node) && !node.classList.contains('content-page-header') && !node.classList.contains('post-article-nav'))
          : [];
        const bodyStart = bodyChildren[0] || null;
        const postArticleNav = article?.querySelector('.post-article-nav') || null;
        const visibleLogoNodes = Array.from(document.querySelectorAll('img, svg')).filter((node) => {
          if (!visible(node)) return false;
          const alt = (node.getAttribute('alt') || '').toLowerCase();
          const src = (node.getAttribute('src') || '').toLowerCase();
          return alt.includes('let books') || src.includes('logo-mark-symbol') || src.includes('logo-mark');
        });

        const headerLogo = firstVisible('.site-header .brand-mark');
        const headerLogoWidth = headerLogo?.getBoundingClientRect().width || 0;
        const articleLogos = visibleLogoNodes.filter((node) => article?.contains(node));
        const oversizedArticleLogo = articleLogos.some((node) => node.getBoundingClientRect().width > headerLogoWidth + 8);
        const articleHeroes = article ? visibleNodes('article .hero, article .hero-visual, article .landing-hero-panel, article .site-print-header, article .site-print-footer') : [];

        const visibleBrandingBlocks = visibleNodes('.site-header, .site-footer, .site-print-header, .site-print-footer, .hero, .hero-visual, .landing-hero-panel');
        const visibleFooterNotes = visibleNodes('.footer-note');
        const visibleFooterMicrocopy = visibleNodes('.footer-microcopy');
        const visibleFooterLanguageLists = visibleNodes('.site-footer .language-list');
        const visibleHeadersInArticle = article ? Array.from(article.querySelectorAll('.site-header, header.site-header, .header-nav')).filter(visible) : [];
        const visibleFootersInArticle = article ? Array.from(article.querySelectorAll('.site-footer, footer.site-footer')).filter(visible) : [];

        const shellOrder = shellChildren.map((node) => {
          if (node.matches('.site-header')) return 'header';
          if (node.matches('main')) return 'main';
          if (node.matches('.site-footer')) return 'footer';
          return node.className || node.tagName.toLowerCase();
        });

        const footerAfterMain = !!(main && siteFooter && top(siteFooter) > top(main));
        const noVisibleContentAfterFooter = shellChildren.every((node, index) => {
          const footerIndex = shellChildren.indexOf(siteFooter);
          if (footerIndex === -1 || index <= footerIndex) return true;
          return node.classList.contains('print-only');
        });

        const structure = kind === 'article'
          ? {
              breadcrumbsBeforeTitle: !!(breadcrumbs && title && top(breadcrumbs) <= top(title)),
              titleBeforeMetadata: !!(title && metadata && top(title) <= top(metadata)),
              metadataBeforeBody: !!(metadata && bodyStart && top(metadata) <= top(bodyStart)),
              bodyBeforeRelated: !!(bodyStart && relatedContent && top(bodyStart) <= top(relatedContent)),
              relatedBeforeFooter: !!(relatedContent && siteFooter && top(relatedContent) <= top(siteFooter)),
              articleBeforeFooter: !!(article && siteFooter && top(article) < top(siteFooter)),
              footerNotInsideMain: !!(main && siteFooter && !main.contains(siteFooter)),
              noHeroBetweenHeaderAndFooter: articleHeroes.length === 0,
              noOversizedArticleLogo: !oversizedArticleLogo,
            }
          : null;

        const articleHeaderBottom = articleHeader ? articleHeader.getBoundingClientRect().bottom + window.scrollY : null;
        const bodyStartTop = bodyStart ? top(bodyStart) : null;
        const postArticleNavTop = postArticleNav ? top(postArticleNav) : null;
        const articleBodyEnd = bodyChildren.length
          ? bodyChildren[bodyChildren.length - 1].getBoundingClientRect().bottom + window.scrollY
          : null;
        const largeUnexpectedGap = kind === 'article' && (
          (articleHeaderBottom !== null && bodyStartTop !== null && bodyStartTop - articleHeaderBottom > 180)
          || (articleBodyEnd !== null && postArticleNavTop !== null && postArticleNavTop - articleBodyEnd > 220)
        );

        return {
          siteHeaderCount: visibleNodes('.site-header').length,
          mainCount: visibleNodes('main').length,
          siteFooterCount: visibleNodes('.site-footer').length,
          navCount: document.querySelectorAll('.site-header .header-nav').length,
          langSwitchCount: document.querySelectorAll('.site-header .lang-switch, .site-header .nav-language-menu').length,
          headersInsideArticleCount: visibleHeadersInArticle.length,
          footersInsideArticleCount: visibleFootersInArticle.length,
          brandingBlockCount: visibleBrandingBlocks.length,
          visibleLogoCount: visibleLogoNodes.length,
          articleLogoCount: articleLogos.length,
          copyrightCount: visibleFooterNotes.length,
          disclaimerCount: visibleFooterMicrocopy.length,
          footerLanguageListCount: visibleFooterLanguageLists.length,
          shellOrder,
          footerAfterMain,
          noVisibleContentAfterFooter,
          largeUnexpectedGap,
          structure,
        };
      }, pageConfig.kind);

      assert(checks.siteHeaderCount === 1, `${pageConfig.label}/${viewport.label}: expected exactly one visible .site-header, found ${checks.siteHeaderCount}`);
      assert(checks.mainCount === 1, `${pageConfig.label}/${viewport.label}: expected exactly one visible main, found ${checks.mainCount}`);
      assert(checks.siteFooterCount === 1, `${pageConfig.label}/${viewport.label}: expected exactly one visible .site-footer, found ${checks.siteFooterCount}`);
      assert(checks.navCount === 1, `${pageConfig.label}/${viewport.label}: expected exactly one visible navigation block, found ${checks.navCount}`);
      assert(checks.langSwitchCount === 1, `${pageConfig.label}/${viewport.label}: expected exactly one language selector, found ${checks.langSwitchCount}`);
      assert(checks.footerAfterMain, `${pageConfig.label}/${viewport.label}: footer is not positioned after main content`);
      assert(checks.noVisibleContentAfterFooter, `${pageConfig.label}/${viewport.label}: visible content appears after the site footer`);
      assert(checks.copyrightCount <= 1, `${pageConfig.label}/${viewport.label}: copyright block appears more than once (${checks.copyrightCount})`);
      assert(checks.disclaimerCount <= 1, `${pageConfig.label}/${viewport.label}: disclaimer block appears more than once (${checks.disclaimerCount})`);

      if (pageConfig.kind === 'article') {
        assert(checks.headersInsideArticleCount === 0, `${pageConfig.label}/${viewport.label}: header content rendered inside article content`);
        assert(checks.footersInsideArticleCount === 0, `${pageConfig.label}/${viewport.label}: footer content rendered inside article content`);
        assert(checks.visibleLogoCount === 1, `${pageConfig.label}/${viewport.label}: expected exactly one visible logo, found ${checks.visibleLogoCount}`);
        assert(checks.articleLogoCount === 0, `${pageConfig.label}/${viewport.label}: article body contains visible branding/logo graphics (${checks.articleLogoCount})`);
        assert(checks.structure?.breadcrumbsBeforeTitle, `${pageConfig.label}/${viewport.label}: breadcrumbs do not appear before the article title`);
        assert(checks.structure?.titleBeforeMetadata, `${pageConfig.label}/${viewport.label}: metadata appears before the article title`);
        assert(checks.structure?.metadataBeforeBody, `${pageConfig.label}/${viewport.label}: article body appears before metadata`);
        assert(checks.structure?.bodyBeforeRelated, `${pageConfig.label}/${viewport.label}: related content appears before article body content`);
        assert(checks.structure?.relatedBeforeFooter, `${pageConfig.label}/${viewport.label}: related content appears after the footer`);
        assert(checks.structure?.articleBeforeFooter, `${pageConfig.label}/${viewport.label}: article content starts after the footer`);
        assert(checks.structure?.footerNotInsideMain, `${pageConfig.label}/${viewport.label}: footer is nested inside main content`);
        assert(checks.structure?.noHeroBetweenHeaderAndFooter, `${pageConfig.label}/${viewport.label}: article contains hero or duplicate print branding blocks`);
        assert(checks.structure?.noOversizedArticleLogo, `${pageConfig.label}/${viewport.label}: article contains an oversized logo relative to the header mark`);
        assert(!checks.largeUnexpectedGap, `${pageConfig.label}/${viewport.label}: large unexpected vertical gap detected in article layout`);
      }

      await page.screenshot({
        path: path.join(artifactDir, `${fileSafe(pageConfig.label)}-${viewport.label}.png`),
        fullPage: true,
      });

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
