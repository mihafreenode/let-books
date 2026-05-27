#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "static-demo", "assets", "hero", "nypl");
const pwcli = "/home/miha/.config/opencode/skills/playwright/scripts/playwright_cli.sh";
const session = "nypl-download";

const items = [
  {
    title: "The new building of the New York Public Library",
    pageUrl: "https://digitalcollections.nypl.org/items/510d47e0-d8c2-a3d9-e040-e00a18064a99",
    localFile: "nypl-new-building-of-the-new-york-public-library.jpg"
  },
  {
    title: "Main Reading Room",
    pageUrl: "https://digitalcollections.nypl.org/items/971b92d0-c5b5-012f-9ec2-58d385a7bc34",
    localFile: "nypl-main-reading-room.jpg"
  },
  {
    title: "Main Reading Room looking South",
    pageUrl: "https://digitalcollections.nypl.org/items/978c1d40-c5b5-012f-615a-58d385a7bc34",
    localFile: "nypl-main-reading-room-looking-south.jpg"
  },
  {
    title: "Stephen A. Schwarzman Building, interior, Rose Main Reading Room",
    pageUrl: "https://digitalcollections.nypl.org/items/6bb87fe0-c6be-012f-43b5-3c075448cc4b",
    localFile: "nypl-rose-main-reading-room-east.jpg"
  },
  {
    title: "Stephen A. Schwarzman Building, interior, Rose Main Reading Room",
    pageUrl: "https://digitalcollections.nypl.org/items/71a2f1e0-c6be-012f-3459-3c075448cc4b",
    localFile: "nypl-rose-main-reading-room-west.jpg"
  },
  {
    title: "International Working Men's Association card of membership",
    pageUrl: "https://digitalcollections.nypl.org/items/a2b8a240-8a29-0132-0619-58d385a7bbd0",
    localFile: "nypl-iwma-membership-card.jpg"
  },
  {
    title: "Christmas cards and Valentines with flowers and poems",
    pageUrl: "https://digitalcollections.nypl.org/items/510d47db-bb29-a3d9-e040-e00a18064a99",
    localFile: "nypl-christmas-cards-and-valentines.jpg"
  },
  {
    title: "Photograph of researchers in southwest Main Reading Room",
    pageUrl: "https://digitalcollections.nypl.org/items/32a92680-04bb-0134-ee19-00505686a51c",
    localFile: "nypl-researchers-main-reading-room.jpg"
  }
];

function runPw(args) {
  const result = spawnSync(pwcli, ["--session", session, ...args], {
    cwd: root,
    encoding: "utf8"
  });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || "playwright command failed").trim());
  }

  return result.stdout.trim();
}

function runCurl(url, targetPath) {
  const result = spawnSync("curl", ["-L", url, "-o", targetPath], {
    cwd: root,
    encoding: "utf8"
  });

  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || `curl failed for ${url}`).trim());
  }
}

function parseImageUrl(tabListOutput) {
  const lines = tabListOutput.split(/\r?\n/).filter(Boolean);
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    const match = lines[index].match(/\((https:\/\/[^)]+default\.jpg[^)]*)\)$/);
    if (match) {
      return { imageUrl: match[1], tabIndex: index };
    }
  }

  throw new Error(`Could not find image tab URL.\n${tabListOutput}`);
}

function getCurrentUrl() {
  return runPw(["--raw", "eval", "location.href"]).trim().replace(/^"|"$/g, "");
}

function isIiifImageUrl(url) {
  return /iiif\.nypl\.org\/iiif\/3\/.+default\.jpg/i.test(url);
}

function hasNoDownloadOptions() {
  const result = runPw(["--raw", "eval", "document.body.innerText.includes('No download options are available.')"]);
  return result.trim() === "true";
}

function closeExtraTabs() {
  const tabList = runPw(["tab-list"]);
  const lines = tabList.split(/\r?\n/).filter(Boolean);
  for (let index = lines.length - 1; index >= 1; index -= 1) {
    runPw(["tab-close", String(index)]);
  }
}

function buildPageInfoExpression() {
  return `({
    title: document.querySelector('h1')?.textContent.trim() || '',
    sourceUrl: location.href,
    imageId: Array.from(document.querySelectorAll('h2')).find((el) => el.textContent.trim() === 'Image ID')?.nextElementSibling?.textContent.trim() || '',
    rights: Array.from(document.querySelectorAll('p')).find((el) => el.previousElementSibling?.textContent?.trim() === 'Rights')?.textContent.trim() || '',
    citation: Array.from(document.querySelectorAll('p')).find((el) => el.previousElementSibling?.textContent?.trim() === 'MLA format')?.textContent.trim() || ''
  })`;
}

function main() {
  fs.mkdirSync(outDir, { recursive: true });

  runPw(["open", "about:blank", "--browser", "chrome", "--headed"]);

  const manifest = { "hero-banner": [] };

  try {
    for (const item of items) {
      runPw(["goto", item.pageUrl]);

      const pageInfo = JSON.parse(runPw(["--raw", "eval", buildPageInfoExpression()]));

      runPw(["eval", "((Array.from(document.querySelectorAll('button.download.btn.imageBtn')).find((el) => el.offsetParent !== null) || Array.from(document.querySelectorAll('button')).find((el) => el.textContent.trim() === 'Download' && el.offsetParent !== null)).click(),'clicked-download')"]);

      let imageUrl = "";
      let skipped = false;

      if (hasNoDownloadOptions()) {
        skipped = true;
      } else {
        runPw(["eval", "(Array.from(document.querySelectorAll('button')).find((el) => /Standard \\(760px\\)/.test(el.textContent)).click(),'clicked-standard')"]);
        const currentUrl = getCurrentUrl();
        let tabIndex = -1;

        if (isIiifImageUrl(currentUrl)) {
          imageUrl = currentUrl;
          runPw(["go-back"]);
        } else {
          const parsed = parseImageUrl(runPw(["tab-list"]));
          imageUrl = parsed.imageUrl;
          tabIndex = parsed.tabIndex;
        }

        const targetPath = path.join(outDir, item.localFile);
        runCurl(imageUrl, targetPath);

        if (tabIndex >= 0) {
          runPw(["tab-close", String(tabIndex)]);
        }
      }

      manifest["hero-banner"].push({
        title: pageInfo.title || item.title,
        url: pageInfo.sourceUrl,
        localFile: `assets/hero/nypl/${item.localFile}`,
        attribution: `From The New York Public Library Digital Collections: ${pageInfo.title || item.title}`,
        messageAttribution: `${pageInfo.title || item.title}. Source: The New York Public Library Digital Collections. ${pageInfo.sourceUrl}`,
        rights: pageInfo.rights,
        citation: pageInfo.citation,
        imageUrl,
        skipped,
        skipReason: skipped ? "Standard size download not available on source page." : ""
      });

      closeExtraTabs();
    }
  } finally {
    runPw(["close"]);
  }

  const bannerManifest = {
    "hero-banner": manifest["hero-banner"]
      .filter((item) => !item.skipped)
      .map((item) => ({
        title: item.title,
        url: item.url,
        localFile: item.localFile
      }))
  };

  fs.writeFileSync(path.join(outDir, "hero-banner.json"), `${JSON.stringify(bannerManifest, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(outDir, "hero-banner-details.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  process.stdout.write(`${JSON.stringify(manifest, null, 2)}\n`);
}

main();
