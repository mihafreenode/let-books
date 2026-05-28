(function () {
  "use strict";

  const APP_VERSION = "0.1.0";
  const DB_NAME = "let-books-local-demo";
  const SPLASH_LANGUAGE_STORAGE_KEY = "let-books-language";
  const SETTINGS_KEYS = {
    language: "language",
    demoSeeded: "demoSeeded",
    demoDataPresent: "demoDataPresent",
    userDeclinedDemoSeed: "userDeclinedDemoSeed",
    moveTargetBoxId: "moveTargetBoxId",
    moveMode: "moveMode"
  };

  const SUPPORTED_LANGUAGES = ["en", "sl", "hr", "bs", "sr-Latn", "sr-Cyrl", "mk", "sq", "de", "it", "fr", "es"];
  const LANGUAGES = {
    en: { label: "English", shortLabel: "EN" },
    sl: { label: "Slovenščina", shortLabel: "SL" },
    hr: { label: "Hrvatski", shortLabel: "HR" },
    bs: { label: "Bosanski", shortLabel: "BS" },
    "sr-Latn": { label: "Srpski (latinica)", shortLabel: "SR-L" },
    "sr-Cyrl": { label: "Српски (ћирилица)", shortLabel: "SR-C" },
    mk: { label: "Македонски", shortLabel: "MK" },
    sq: { label: "Shqip", shortLabel: "SQ" },
    de: { label: "Deutsch", shortLabel: "DE" },
    it: { label: "Italiano", shortLabel: "IT" },
    fr: { label: "Français", shortLabel: "FR" },
    es: { label: "Español", shortLabel: "ES" }
  };

  const PHOTO_TYPES = [
    { key: "cover", labelKey: "photo.cover" },
    { key: "back", labelKey: "photo.back" },
    { key: "inside-front", labelKey: "photo.insideFront" },
    { key: "inside-back", labelKey: "photo.insideBack" },
    { key: "spine", labelKey: "photo.spine" },
    { key: "condition", labelKey: "photo.condition" },
    { key: "other", labelKey: "photo.other" }
  ];

  const STATUSES = ["missing-metadata", "ready", "exported"];
  const LOOKUP_PROVIDERS = ["Open Library", "Let Books metadata API", "Manual"];
  const METADATA_API_DEFAULT_BASE_URL = "https://api.letbooks.org";
  const METADATA_API_QUERY_PARAM = "metadataApiBaseUrl";
  const METADATA_API_META_NAME = "letbooks:metadata-api-base-url";
  const LOOKUP_CACHE_PROVIDER = "metadata";
  const LOOKUP_CACHE_VERSION = "v1";
  const LOOKUP_SUCCESS_TTL_MS = 14 * 24 * 60 * 60 * 1000;
  const LOOKUP_NEGATIVE_TTL_MS = 6 * 60 * 60 * 1000;
  const OFFICIAL_METADATA_APP_ORIGINS = new Set([
    "https://letbooks.org",
    "https://www.letbooks.org",
    "http://localhost:5173",
    "http://localhost:5000"
  ]);
  const PORTABLE_BOX_QR_TYPE = "letbooks-box";
  const PORTABLE_BOOK_QR_TYPE = "letbooks-book";
  const DASHBOARD_HERO_ROTATION_MS = 60000;
  const DASHBOARD_HERO_FADE_MS = 900;
  const HERO_BANNER_FILE = "assets/hero/nypl/hero-banner.json";
  const HERO_MESSAGE_DEFINITIONS = [
    { id: "preserve-share-connect", theme: "dark-green-archival", primaryHref: "#/boxes", secondaryHref: "#/books/new" },
    { id: "every-book-story", theme: "sepia-exploration", primaryHref: "#/boxes", secondaryHref: "#/settings" },
    { id: "explore-learn-share", theme: "bright-parchment", primaryHref: "#/boxes", secondaryHref: "#/export" },
    { id: "wisdom-belongs", theme: "dramatic-wisdom", primaryHref: "#/boxes", secondaryHref: "#/books/new" },
    { id: "libraries-bridges", theme: "dark-green-archival", primaryHref: "#/boxes", secondaryHref: "#/scanner?mode=box" },
    { id: "from-one-book", theme: "sepia-exploration", primaryHref: "#/books/new", secondaryHref: "#/settings" },
    { id: "knowledge-lives", theme: "bright-parchment", primaryHref: "#/scanner?mode=isbn", secondaryHref: "#/boxes" },
    { id: "books-find-homes", theme: "dramatic-wisdom", primaryHref: "#/books/new", secondaryHref: "#/dashboard" },
    { id: "small-library-big-impact", theme: "bright-parchment", primaryHref: "#/settings", secondaryHref: "#/boxes" },
    { id: "archive-future", theme: "dark-green-archival", primaryHref: "#/settings", secondaryHref: "#/dashboard" }
  ];
  const HERO_THEME_PRESETS = {
    "dark-green-archival": {
      colors: {
        headline: "#f4ead7",
        body: "#d7c8b2",
        accent: "#c89b3c",
        overlay: "#071814",
        buttonText: "#102d24",
        secondaryText: "#f4ead7"
      },
      effects: { overlayOpacity: 0.64, vignette: 0.2, grain: 0.05, shadow: 0.32, highlight: 0.26 }
    },
    "bright-parchment": {
      colors: {
        headline: "#173f35",
        body: "#345248",
        accent: "#b88d3b",
        overlay: "#efe7d8",
        buttonText: "#173f35",
        secondaryText: "#173f35"
      },
      effects: { overlayOpacity: 0.56, vignette: 0.14, grain: 0.04, shadow: 0.2, highlight: 0.18 }
    },
    "sepia-exploration": {
      colors: {
        headline: "#234536",
        body: "#59685d",
        accent: "#b59652",
        overlay: "#e8dcc6",
        buttonText: "#1f3d31",
        secondaryText: "#234536"
      },
      effects: { overlayOpacity: 0.58, vignette: 0.16, grain: 0.05, shadow: 0.22, highlight: 0.2 }
    },
    "dramatic-wisdom": {
      colors: {
        headline: "#f2e7d2",
        body: "#d2c1a6",
        accent: "#b68b43",
        overlay: "#081712",
        buttonText: "#102820",
        secondaryText: "#f2e7d2"
      },
      effects: { overlayOpacity: 0.66, vignette: 0.22, grain: 0.05, shadow: 0.34, highlight: 0.24 }
    }
  };

  const I18N = {};

  const LOCALE_FILES = Object.fromEntries(SUPPORTED_LANGUAGES.map((code) => [code, `locales/${code}.json`]));

  const appState = {
    language: "en",
    route: { name: "dashboard", params: {}, query: {} },
    previousRoute: null,
    installPrompt: null,
    scanner: {
      instance: null,
      state: "idle",
      handlingDecode: false,
      torchOn: false,
      torchSupported: false,
      zoomLevel: 1,
      zoomSupported: false,
      facingMode: "environment",
      focusMode: "",
      sessionToken: 0
    },
    photoUrlCache: new Map(),
    transientBoxImport: null,
    dataSummary: { boxes: 0, books: 0, photos: 0 },
    dashboardGuardArmed: false,
    scannerStatus: { active: false, title: "", hint: "" },
    activeToasts: new Map(),
    transientBookDraft: null,
    lastNonScannerHash: "#/dashboard",
    scannerResumeOnVisible: false,
    scannerIdleHintTimer: 0,
    heroBanners: [],
    dashboardHeroTimer: 0,
    dashboardHeroTransitionTimer: 0,
    dashboardHeroDeck: [],
    dashboardHeroIndex: 0,
    dashboardHeroBooks: [],
    dashboardHeroPhotoMap: new Map()
  };

  const db = new Dexie(DB_NAME);
  db.version(1).stores({
    boxes: "id,code,createdAt",
    books: "id,boxId,localCode,isbn10,isbn13,status,updatedAt",
    photos: "id,bookId,type,createdAt,sortOrder",
    lookupCache: "[key+provider],createdAt",
    settings: "key",
    scanSessions: "id,mode,targetBoxId,startedAt"
  });

  const root = document.getElementById("app-root");
  const modalRoot = document.getElementById("modal-root");
  const toastRoot = document.getElementById("toast-root");
  const bootSplash = document.getElementById("boot-splash");
  const bootSplashSubtitle = document.getElementById("boot-splash-subtitle");
  const languageTrigger = document.getElementById("language-trigger");
  const languageMenu = document.getElementById("language-menu");
  const addMenuButton = document.getElementById("add-menu-button");
  const addMenu = document.getElementById("add-menu");
  init().catch((error) => {
    console.error(error);
    root.innerHTML = `<div class="screen"><div class="empty-card"><h2>Let Books</h2><p>${escapeHtml(t("app.startFailed"))}</p><pre>${escapeHtml(String(error))}</pre></div></div>`;
  });

  async function init() {
    const bootStartedAt = performance.now();
    bindGlobalEvents();
    applyBootSplashLanguage(getStoredSplashLanguage() || detectBrowserLanguage());
    await initializeSettingsAndLanguage();
    await applyGlobalUi();
    registerServiceWorker();
    await routeFromHash();
    const minSplashDuration = 840;
    const elapsed = performance.now() - bootStartedAt;
    if (elapsed < minSplashDuration) {
      await delay(minSplashDuration - elapsed);
    }
    document.body.classList.add("app-ready");
    await delay(240);
    document.body.classList.remove("app-booting");
    bootSplash?.remove();
    await ensureInitialDataState();
    await applyGlobalUi();
    await routeFromHash();
  }

  function bindGlobalEvents() {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.addEventListener("hashchange", () => {
      routeFromHash().catch(console.error);
    });
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("online", updateNetworkChip);
    window.addEventListener("offline", updateNetworkChip);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        appState.scannerResumeOnVisible = appState.route.name === "scanner" && appState.route.query.mode !== "manual";
        stopScanner({ preserveStatus: false }).catch(() => {});
        return;
      }

      if (appState.scannerResumeOnVisible && appState.route.name === "scanner" && appState.route.query.mode !== "manual") {
        appState.scannerResumeOnVisible = false;
        window.setTimeout(() => {
          maybeStartScanner(true).catch(console.warn);
        }, 180);
      }
    });
    window.addEventListener("pagehide", () => {
      stopScanner({ preserveStatus: false }).catch(() => {});
      cleanupScannerMediaElements();
    });
    window.addEventListener("beforeunload", () => {
      cleanupScannerMediaElements();
    });
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      appState.installPrompt = event;
    });
    window.addEventListener("appinstalled", () => {
      appState.installPrompt = null;
      showToast(t("toast.installed"));
    });

    languageTrigger.addEventListener("click", () => {
      const expanded = languageTrigger.getAttribute("aria-expanded") === "true";
      languageTrigger.setAttribute("aria-expanded", String(!expanded));
      languageMenu.hidden = expanded;
    });

    addMenuButton.addEventListener("click", () => {
      const expanded = addMenuButton.getAttribute("aria-expanded") === "true";
      addMenuButton.setAttribute("aria-expanded", String(!expanded));
      addMenu.hidden = expanded;
    });

    addMenu.addEventListener("click", () => {
      addMenu.hidden = true;
      addMenuButton.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("click", async (event) => {
      const target = event.target.closest("[data-action]");
      if (!target) {
        if (!event.target.closest(".language-picker")) {
          languageMenu.hidden = true;
          languageTrigger.setAttribute("aria-expanded", "false");
        }
        if (!event.target.closest(".add-menu-wrap")) {
          addMenu.hidden = true;
          addMenuButton.setAttribute("aria-expanded", "false");
        }
        return;
      }

      const action = target.dataset.action;

      if (action === "change-language") {
        const language = target.dataset.language;
        await setLanguage(language);
        return;
      }

      if (action === "install-app") {
        await triggerInstall();
        return;
      }

      if (action === "close-modal") {
        closeModal();
        return;
      }

      await handleAction(action, target, event);
    });

    document.addEventListener("submit", async (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();

      if (form.matches("[data-form='box']")) {
        await submitBoxForm(form);
      } else if (form.matches("[data-form='book']")) {
        await submitBookForm(form);
      } else if (form.matches("[data-form='scanner-manual']")) {
        await submitScannerManual(form);
      }
    });
  }

  async function initializeSettingsAndLanguage() {
    await loadLocaleResources();
    validateLocaleResources();
    await loadHeroBannerAssets();
    const savedLanguage = await getSetting(SETTINGS_KEYS.language);
    appState.language = savedLanguage || detectBrowserLanguage();
    storeSplashLanguage(appState.language);
    applyBootSplashLanguage(appState.language);
    renderLanguageMenu();
    updateNetworkChip();
  }

  function detectBrowserLanguage() {
    const candidates = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
    for (const value of candidates) {
      const lower = value.toLowerCase();
      if (lower.startsWith("sl")) return "sl";
      if (lower.startsWith("hr")) return "hr";
      if (lower.startsWith("bs")) return "bs";
      if (lower.startsWith("sr-cyrl")) return "sr-Cyrl";
      if (lower.startsWith("sr-latn")) return "sr-Latn";
      if (lower.startsWith("sr")) return "sr-Latn";
      if (lower.startsWith("mk")) return "mk";
      if (lower.startsWith("sq")) return "sq";
      if (lower.startsWith("de")) return "de";
      if (lower.startsWith("it")) return "it";
      if (lower.startsWith("fr")) return "fr";
      if (lower.startsWith("es")) return "es";
      if (lower.startsWith("en")) return "en";
    }
    return "en";
  }

  async function setLanguage(language) {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;
    const wasScannerRoute = appState.route.name === "scanner";
    if (wasScannerRoute) {
      await stopScanner({ preserveStatus: false });
    }
    appState.language = language;
    storeSplashLanguage(language);
    await setSetting(SETTINGS_KEYS.language, language);
    languageMenu.hidden = true;
    languageTrigger.setAttribute("aria-expanded", "false");
    await applyGlobalUi();
    await renderRoute();
  }

  function t(key) {
    return I18N[appState.language]?.[key] || I18N.en[key] || key;
  }

  function tf(key, values = {}) {
    return Object.entries(values).reduce((result, [token, value]) => result.replaceAll(`{${token}}`, String(value)), t(key));
  }

  async function loadLocaleResources() {
    const entries = await Promise.all(SUPPORTED_LANGUAGES.map(async (code) => {
      const response = await fetch(LOCALE_FILES[code], { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`Locale file missing: ${code}`);
      }
      const data = await response.json();
      return [code, data];
    }));

    for (const [code, data] of entries) {
      I18N[code] = data;
    }
  }

  async function loadHeroBannerAssets() {
    try {
      const response = await fetch(HERO_BANNER_FILE, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`Hero banner file missing: ${HERO_BANNER_FILE}`);
      }
      const data = await response.json();
      const sourceItems = Array.isArray(data?.["hero-banner"]) ? data["hero-banner"] : [];
      appState.heroBanners = await Promise.all(
        sourceItems
          .filter((item) => item && item.localFile && !item.skipped)
          .map(async (item) => normalizeHeroBannerItem(item))
      );
    } catch (error) {
      console.warn("Hero banner load skipped:", error?.message || error);
      appState.heroBanners = [];
    }
  }

  async function normalizeHeroBannerItem(item) {
    const analysis = await analyzeHeroImage(item.localFile);
    const presetName = item?.theme?.preset || item?.themePreset || "dark-green-archival";
    const preset = HERO_THEME_PRESETS[presetName] || HERO_THEME_PRESETS["dark-green-archival"];
    const overrides = item?.theme?.colors || {};
    const effectOverrides = item?.theme?.effects || {};
    const colors = {
      ...preset.colors,
      ...suggestHeroColorsFromAnalysis(analysis, preset.colors),
      ...overrides
    };
    const effects = {
      ...preset.effects,
      ...effectOverrides
    };
    return {
      ...item,
      analysis,
      theme: {
        mode: item?.theme?.mode || "curated",
        preset: presetName,
        colors,
        effects
      },
      collage: item?.collage || {}
    };
  }

  async function analyzeHeroImage(imagePath) {
    if (!imagePath) {
      return null;
    }

    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        try {
          const sampleCanvas = document.createElement("canvas");
          const targetWidth = 24;
          const targetHeight = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * targetWidth));
          sampleCanvas.width = targetWidth;
          sampleCanvas.height = targetHeight;
          const ctx = sampleCanvas.getContext("2d", { willReadFrequently: true });
          if (!ctx) {
            resolve(null);
            return;
          }
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
          const pixels = ctx.getImageData(0, 0, targetWidth, targetHeight).data;
          let totalR = 0;
          let totalG = 0;
          let totalB = 0;
          let totalLuma = 0;
          let samples = 0;
          for (let index = 0; index < pixels.length; index += 4) {
            const alpha = pixels[index + 3];
            if (alpha < 32) continue;
            const r = pixels[index];
            const g = pixels[index + 1];
            const b = pixels[index + 2];
            totalR += r;
            totalG += g;
            totalB += b;
            totalLuma += (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
            samples += 1;
          }
          if (!samples) {
            resolve(null);
            return;
          }
          resolve({
            average: {
              r: Math.round(totalR / samples),
              g: Math.round(totalG / samples),
              b: Math.round(totalB / samples)
            },
            luminance: totalLuma / samples
          });
        } catch (_error) {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = imagePath;
    });
  }

  function suggestHeroColorsFromAnalysis(analysis, fallbackColors) {
    if (!analysis?.average) {
      return fallbackColors;
    }

    const { r, g, b } = analysis.average;
    const luminance = analysis.luminance || 0;
    const warmMix = mixRgb({ r, g, b }, luminance > 0.54 ? { r: 28, g: 55, b: 47 } : { r: 247, g: 236, b: 216 }, luminance > 0.54 ? 0.72 : 0.78);
    const bodyMix = mixRgb({ r, g, b }, luminance > 0.54 ? { r: 61, g: 83, b: 73 } : { r: 222, g: 205, b: 179 }, luminance > 0.54 ? 0.7 : 0.74);
    const accentMix = mixRgb({ r, g, b }, { r: 193, g: 151, b: 72 }, 0.78);
    const overlayMix = mixRgb({ r, g, b }, luminance > 0.54 ? { r: 239, g: 231, b: 216 } : { r: 8, g: 23, b: 18 }, 0.84);
    return {
      headline: ensureHeroContrast(rgbToHex(warmMix), rgbToHex(overlayMix), fallbackColors.headline),
      body: ensureHeroContrast(rgbToHex(bodyMix), rgbToHex(overlayMix), fallbackColors.body),
      accent: rgbToHex(accentMix),
      overlay: rgbToHex(overlayMix),
      buttonText: fallbackColors.buttonText,
      secondaryText: ensureHeroContrast(fallbackColors.secondaryText, rgbToHex(overlayMix), fallbackColors.secondaryText)
    };
  }

  function mixRgb(base, target, weight) {
    const clampWeight = clampNumber(weight, 0, 1);
    return {
      r: Math.round(base.r * (1 - clampWeight) + target.r * clampWeight),
      g: Math.round(base.g * (1 - clampWeight) + target.g * clampWeight),
      b: Math.round(base.b * (1 - clampWeight) + target.b * clampWeight)
    };
  }

  function clampNumber(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function rgbToHex(color) {
    return `#${[color.r, color.g, color.b].map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
  }

  function parseHexColor(hex) {
    const normalized = String(hex || "").trim().replace(/^#/, "");
    if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
      return null;
    }
    return {
      r: Number.parseInt(normalized.slice(0, 2), 16),
      g: Number.parseInt(normalized.slice(2, 4), 16),
      b: Number.parseInt(normalized.slice(4, 6), 16)
    };
  }

  function relativeLuminance(color) {
    const channels = [color.r, color.g, color.b].map((value) => {
      const normalized = value / 255;
      return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }

  function getContrastRatio(foregroundHex, backgroundHex) {
    const foreground = parseHexColor(foregroundHex);
    const background = parseHexColor(backgroundHex);
    if (!foreground || !background) {
      return 0;
    }
    const light = Math.max(relativeLuminance(foreground), relativeLuminance(background));
    const dark = Math.min(relativeLuminance(foreground), relativeLuminance(background));
    return (light + 0.05) / (dark + 0.05);
  }

  function ensureHeroContrast(candidateHex, backgroundHex, fallbackHex) {
    return getContrastRatio(candidateHex, backgroundHex) >= 4.5 ? candidateHex : fallbackHex;
  }

  function validateLocaleResources() {
    const englishKeys = Object.keys(I18N.en || {});
    if (!englishKeys.length) {
      throw new Error("English locale resource is empty.");
    }

    for (const code of SUPPORTED_LANGUAGES) {
      const locale = I18N[code];
      if (!locale) {
        throw new Error(`Locale not loaded: ${code}`);
      }

      const missing = englishKeys.filter((key) => !(key in locale));
      if (missing.length) {
        throw new Error(`Locale ${code} is missing ${missing.length} keys. First missing key: ${missing[0]}`);
      }
    }
  }

  async function applyGlobalUi() {
    document.documentElement.lang = appState.language;
    document.title = `Let Books - ${t("app.localDemo")}`;
    document.getElementById("brand-subtitle").textContent = t("app.localDemo");
    document.getElementById("demo-disclaimer-title").textContent = t("banner.title");
    document.getElementById("language-label").textContent = LANGUAGES[appState.language].shortLabel || LANGUAGES[appState.language].label;
    document.querySelector(".brand-mark")?.setAttribute("alt", t("app.brandAlt"));
    languageMenu.setAttribute("aria-label", t("app.languageSelection"));
    document.querySelector(".bottom-nav")?.setAttribute("aria-label", t("app.primaryNav"));
    addMenuButton.setAttribute("aria-label", t("common.add"));
    renderLanguageMenu();
    renderAddMenu();
    updateNetworkChip();
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
  }

  function renderLanguageMenu() {
    languageMenu.innerHTML = SUPPORTED_LANGUAGES.map((code) => `
      <button type="button" class="language-option ${code === appState.language ? "is-current" : ""}" data-action="change-language" data-language="${code}">${escapeHtml(LANGUAGES[code].label)}</button>
    `).join("");
  }

  function renderAddMenu() {
    addMenu.innerHTML = `
      <button type="button" class="add-menu-item" data-action="open-box-form" role="menuitem">
        <span class="add-menu-icon">${renderIcon("box", t("app.addBox"))}</span>
        <span>${escapeHtml(t("common.boxShort"))}</span>
      </button>
      <a href="#/books/new" class="add-menu-item" role="menuitem">
        <span class="add-menu-icon">${renderIcon("book", t("app.addBook"))}</span>
        <span>${escapeHtml(t("common.bookShort"))}</span>
      </a>
    `;
  }

  function updateNetworkChip() {
    return;
  }

  function renderIcon(iconName, label = "", className = "") {
    const safeName = escapeHtml(iconName);
    const safeLabel = escapeHtml(label);
    const safeClass = className ? ` ${escapeHtml(className)}` : "";
    const alt = safeLabel ? ` alt="${safeLabel}"` : ' alt=""';
    return `<img src="icons/${safeName}.svg"${alt} class="app-icon${safeClass}" loading="lazy" decoding="async">`;
  }

  function renderMobileSheetHeader(title, subtitle = "", closeHref = "#/dashboard", actions = "", options = {}) {
    const navMarkup = options.showClose === false
      ? `<div class="mobile-sheet-nav-spacer" aria-hidden="true"></div>`
      : options.breadcrumbLabel
        ? `<a href="${closeHref}" class="mobile-sheet-breadcrumb">‹ ${escapeHtml(options.breadcrumbLabel)}</a>`
        : `<a href="${closeHref}" class="mobile-sheet-close" aria-label="${escapeHtml(t("common.back"))}">✕</a>`;
    return `
      <div class="mobile-sheet-header">
        ${navMarkup}
        <div class="mobile-sheet-copy">
          <h1 class="screen-title">${escapeHtml(title)}</h1>
          ${subtitle ? `<p class="supporting-text">${escapeHtml(subtitle)}</p>` : ""}
        </div>
        <div class="mobile-sheet-actions">${actions}</div>
      </div>
    `;
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const { protocol, hostname } = window.location;
    const isLoopbackHost = hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
    const canRegisterSafely = protocol === "http:" ? isLoopbackHost : protocol === "https:" ? isLoopbackHost : false;

    if (!canRegisterSafely) {
      console.info("Skipping service worker registration on this host. Use https://localhost or http://localhost for local PWA install/offline behavior.");
      return;
    }

    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.warn("Service worker registration skipped:", error?.message || error);
    });
  }

  async function triggerInstall() {
    if (!appState.installPrompt) return;
    appState.installPrompt.prompt();
    await appState.installPrompt.userChoice;
    appState.installPrompt = null;
    installButton.hidden = true;
  }

  async function routeFromHash() {
    await stopScanner({ preserveStatus: false });
    appState.previousRoute = appState.route;
    appState.route = getRouteFromLocation();
    if (appState.route.name !== "scanner") {
      appState.lastNonScannerHash = window.location.hash || "#/dashboard";
    }
    await renderRoute();
  }

  function handlePopState() {
    const route = getRouteFromLocation();
    if (route.name === "dashboard") {
      window.setTimeout(() => {
        armDashboardBackGuard();
      }, 0);
    }
  }

  function getRouteFromLocation() {
    if (!window.location.hash) {
      history.replaceState(history.state, "", "#/dashboard");
    }

    const raw = window.location.hash.replace(/^#/, "") || "/dashboard";
    const [pathPart, queryPart] = raw.split("?");
    const segments = pathPart.split("/").filter(Boolean);
    const query = Object.fromEntries(new URLSearchParams(queryPart || ""));

    const route = { name: "dashboard", params: {}, query };
    if (segments[0] === "dashboard") route.name = "dashboard";
    else if (segments[0] === "boxes" && segments[1]) { route.name = "box-detail"; route.params.id = segments[1]; }
    else if (segments[0] === "boxes") route.name = "boxes";
    else if (segments[0] === "scanner") route.name = "scanner";
    else if (segments[0] === "books" && segments[1] === "new") route.name = "book-new";
    else if (segments[0] === "books" && segments[2] === "edit") { route.name = "book-edit"; route.params.id = segments[1]; }
    else if (segments[0] === "books" && segments[1]) { route.name = "book-detail"; route.params.id = segments[1]; }
    else if (segments[0] === "export") route.name = "export";
    else if (segments[0] === "settings") route.name = "settings";

    return route;
  }

  async function renderRoute() {
    teardownDashboardHeroRotation();
    document.body.classList.toggle("scanner-active", appState.route.name === "scanner");
    setCurrentNav(appState.route.name);
    switch (appState.route.name) {
      case "dashboard":
        root.innerHTML = await renderDashboard();
        break;
      case "boxes":
        root.innerHTML = await renderBoxes();
        break;
      case "box-detail":
        root.innerHTML = await renderBoxDetail(appState.route.params.id);
        break;
      case "scanner":
        root.innerHTML = await renderScanner();
        await nextFrame();
        await maybeStartScanner();
        break;
      case "book-new":
        root.innerHTML = await renderBookForm();
        break;
      case "book-edit":
        root.innerHTML = await renderBookForm(appState.route.params.id);
        break;
      case "book-detail":
        root.innerHTML = await renderBookDetail(appState.route.params.id);
        break;
      case "export":
        root.innerHTML = await renderExport();
        break;
      case "settings":
        root.innerHTML = await renderSettings();
        break;
      default:
        root.innerHTML = await renderDashboard();
    }

    root.classList.remove("route-enter");
    void root.offsetWidth;
    root.classList.add("route-enter");
    applyRouteScrollPosition(appState.previousRoute, appState.route);

    if (appState.route.name === "dashboard") {
      armDashboardBackGuard();
      setupDashboardHeroRotation();
    } else {
      appState.dashboardGuardArmed = false;
    }
  }

  function applyRouteScrollPosition(previousRoute, nextRoute) {
    const behavior = getRouteScrollBehavior(previousRoute, nextRoute);
    if (!behavior) {
      return;
    }

    const top = Number.isFinite(behavior.top) ? behavior.top : 0;
    const applyScroll = () => {
      const scrollingElement = document.scrollingElement || document.documentElement || document.body;
      window.scrollTo(0, top);
      if (scrollingElement) {
        scrollingElement.scrollTop = top;
        if (typeof scrollingElement.scrollTo === "function") {
          scrollingElement.scrollTo(0, top);
        }
      }
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;

      if (behavior.focusSelector) {
        const target = document.querySelector(behavior.focusSelector);
        if (target instanceof HTMLElement && typeof target.focus === "function") {
          target.focus({ preventScroll: true });
        }
      }
    };

    applyScroll();
    window.requestAnimationFrame(applyScroll);
    window.setTimeout(applyScroll, 120);
    window.setTimeout(applyScroll, 280);
  }

  function getRouteScrollBehavior(previousRoute, nextRoute) {
    if (!nextRoute) {
      return null;
    }

    const changedScreen = !previousRoute || previousRoute.name !== nextRoute.name || JSON.stringify(previousRoute.params || {}) !== JSON.stringify(nextRoute.params || {}) || JSON.stringify(previousRoute.query || {}) !== JSON.stringify(nextRoute.query || {});
    if (!changedScreen) {
      return null;
    }

    if (nextRoute.name === "scanner") {
      return { top: 0 };
    }

    if (nextRoute.name === "book-new" || nextRoute.name === "book-edit") {
      return { top: 0 };
    }

    if (nextRoute.name === "book-detail") {
      return { top: 0 };
    }

    if (nextRoute.name === "box-detail") {
      return { top: 0 };
    }

    if (nextRoute.name === "dashboard" || nextRoute.name === "boxes" || nextRoute.name === "export" || nextRoute.name === "settings") {
      return { top: 0 };
    }

    return { top: 0 };
  }

  function armDashboardBackGuard() {
    if (appState.route.name !== "dashboard" || appState.dashboardGuardArmed) {
      return;
    }

    appState.dashboardGuardArmed = true;
    history.pushState({ letBooksDashboardGuard: true, armedAt: Date.now() }, "", window.location.href);
  }

  function setCurrentNav(routeName) {
    const mapping = {
      dashboard: "dashboard",
      boxes: "boxes",
      "box-detail": "boxes",
      scanner: "scanner",
      export: "export",
      settings: "settings",
      "book-new": "boxes",
      "book-edit": "boxes",
      "book-detail": "boxes"
    };
    const current = mapping[routeName];
    const links = Array.from(document.querySelectorAll("[data-nav]"));
    links.forEach((link) => {
      link.classList.toggle("is-current", link.dataset.nav === current);
    });
    const currentIndex = Math.max(0, links.findIndex((link) => link.dataset.nav === current));
    document.querySelector(".bottom-nav")?.style.setProperty("--nav-active-index", String(currentIndex));
  }

  async function renderDashboard() {
    const [boxes, books] = await Promise.all([db.boxes.toArray(), db.books.toArray()]);
    const recentBooks = (await db.books.orderBy("updatedAt").reverse().limit(8).toArray());
    const matchedBooks = books.filter((book) => book.source && book.source !== "Manual").length;
    const exportReadyBooks = books.filter((book) => book.status === "ready" || book.status === "exported").length;
    const photoMap = books.length ? await getPrimaryPhotoMap(books.map((book) => book.id)) : new Map();
    const booksByBox = groupBooksByBox(books);
    const featuredBoxes = boxes.slice(0, 3);
    const heroDeck = getDashboardHeroDeck();
    const initialHero = heroDeck[0] || buildFallbackHeroSlide();
    appState.dashboardHeroBooks = recentBooks.slice(0, 6);
    appState.dashboardHeroPhotoMap = photoMap;
    return `
      <section class="screen screen-stack dashboard-screen">
        <div class="dashboard-hero" data-dashboard-hero style="${escapeHtml(buildHeroThemeVariables(initialHero))}">
          <div class="dashboard-hero-backdrop" aria-hidden="true">
            <div class="dashboard-hero-media is-current" data-hero-media-current style="${escapeHtml(buildHeroMediaStyle(initialHero))}"></div>
            <div class="dashboard-hero-media is-next" data-hero-media-next></div>
            <div class="dashboard-hero-wash" data-hero-wash-current style="${escapeHtml(buildHeroWashStyle(initialHero))}"></div>
            <div class="dashboard-hero-wash is-next" data-hero-wash-next></div>
            <div class="dashboard-hero-grain"></div>
          </div>
          <div class="dashboard-hero-copy">
            <div class="hero-copy-layer is-current" data-hero-copy-current>
              ${renderDashboardHeroMessage(initialHero)}
            </div>
            <div class="hero-copy-layer is-next" data-hero-copy-next aria-hidden="true"></div>
          </div>
          <div class="hero-art">
            <div class="hero-art-layer is-current" data-hero-art-current>
              ${await renderDashboardHeroCollage(initialHero, recentBooks.slice(0, 6), photoMap)}
            </div>
            <div class="hero-art-layer is-next" data-hero-art-next aria-hidden="true"></div>
          </div>
        </div>

        <div class="quick-actions quick-actions-visual dashboard-actions-grid">
          ${renderVisualActionTile("scan", t("dashboard.scanBox"), `#/scanner?mode=box`, "ghost-button visual-action dashboard-action-card")}
          ${renderVisualActionTile("scan", t("dashboard.scanIsbn"), `#/scanner?mode=isbn`, "ghost-button visual-action dashboard-action-card")}
          ${renderVisualActionTile("book", t("dashboard.addBook"), "#/books/new", "ghost-button visual-action dashboard-action-card")}
          <button type="button" class="ghost-button visual-action dashboard-action-card" data-action="export-excel">
            <span class="visual-action-icon dashboard-action-icon export-accent">${renderIcon("export", t("dashboard.exportExcel"))}</span>
            <span class="visual-action-label">${escapeHtml(t("dashboard.exportExcel"))}</span>
          </button>
        </div>

        <div class="section-card dashboard-summary-strip">
          <div class="metrics-grid dashboard-metrics-grid">
            ${renderMetricCard(t("dashboard.totalBooks"), books.length, "book")}
            ${renderMetricCard(t("dashboard.totalBoxes"), boxes.length, "box")}
            ${renderMetricCard(t("dashboard.matchedBooks"), matchedBooks, "scan")}
            ${renderMetricCard(t("dashboard.exportReadyBooks"), exportReadyBooks, "export")}
          </div>
        </div>

        <div class="section-card recent-section-card">
          <div class="section-header">
            <div>
              <h2 class="section-heading">${escapeHtml(t("dashboard.recentBooks"))}</h2>
            </div>
            <a href="#/boxes" class="small-button recent-view-all">${escapeHtml(t("dashboard.viewAll"))} <span aria-hidden="true">›</span></a>
          </div>
          ${recentBooks.length ? `<div class="recent-grid recent-grid-covers">${await renderBookCards(recentBooks)}</div>` : `<a href="#/books/new" class="empty-card empty-card-visual empty-card-link"><div class="empty-card-icon">${renderIcon("book", t("dashboard.emptyBooks"))}</div><p>${escapeHtml(t("dashboard.emptyBooks"))}</p></a>`}
        </div>

        <div class="section-card collection-section dashboard-collections-section">
          <div class="section-header">
            <div>
              <h2 class="section-heading">${escapeHtml(t("dashboard.collections"))}</h2>
            </div>
            <a href="#/boxes" class="small-button">${escapeHtml(t("nav.boxes"))}</a>
          </div>
          ${featuredBoxes.length ? `<div class="box-grid">${await Promise.all(featuredBoxes.map((box) => renderBoxCard(box, booksByBox.get(box.id) || [], photoMap))).then((items) => items.join(""))}</div>` : `<button type="button" class="empty-card empty-card-visual empty-card-link" data-action="open-box-form"><div class="empty-card-icon">${renderIcon("box", t("dashboard.emptyCollection"))}</div><p>${escapeHtml(t("dashboard.emptyCollection"))}</p></button>`}
        </div>
      </section>
    `;
  }

  function getDashboardHeroDeck() {
    const messages = getHeroMessagesForLanguage(appState.language);
    const images = appState.heroBanners.length ? shuffleArray(appState.heroBanners) : [];
    if (!messages.length) {
      return [buildFallbackHeroSlide()];
    }

    const shuffledMessages = shuffleArray(messages);
    return shuffledMessages.map((message, index) => {
      const definition = HERO_MESSAGE_DEFINITIONS.find((item) => item.id === message.id) || HERO_MESSAGE_DEFINITIONS[index % HERO_MESSAGE_DEFINITIONS.length];
      const image = images.length ? images[index % images.length] : null;
      const resolvedTheme = resolveHeroSlideTheme(image, message.theme || definition.theme);
      return {
        id: definition.id,
        title: message.title,
        subtitle: message.subtitle,
        ctaPrimary: message.ctaPrimary,
        ctaSecondary: message.ctaSecondary,
        primaryHref: definition.primaryHref,
        secondaryHref: definition.secondaryHref,
        image,
        theme: resolvedTheme
      };
    });
  }

  function getHeroMessagesForLanguage(language) {
    const localeMessages = Array.isArray(I18N[language]?.heroMessages) ? I18N[language].heroMessages : null;
    if (localeMessages?.length) {
      return localeMessages;
    }
    return buildFallbackHeroMessages(language);
  }

  function buildFallbackHeroMessages(language) {
    const localized = (key) => I18N[language]?.[key] || I18N.en[key] || key;
    return [
      { id: "preserve-share-connect", title: localized("dashboard.heroLead"), subtitle: localized("dashboard.heroBody"), ctaPrimary: localized("nav.boxes"), ctaSecondary: localized("dashboard.addBook"), theme: "dark-green-archival" },
      { id: "every-book-story", title: localized("dashboard.subtitle"), subtitle: localized("dashboard.collectionsSubtitle"), ctaPrimary: localized("dashboard.scanBox"), ctaSecondary: localized("settings.title"), theme: "sepia-exploration" },
      { id: "explore-learn-share", title: localized("dashboard.collections"), subtitle: localized("dashboard.recentSubtitle"), ctaPrimary: localized("nav.boxes"), ctaSecondary: localized("dashboard.exportExcel"), theme: "bright-parchment" },
      { id: "wisdom-belongs", title: localized("dashboard.heroCompact"), subtitle: localized("dashboard.subtitle"), ctaPrimary: localized("dashboard.scanIsbn"), ctaSecondary: localized("dashboard.addBook"), theme: "dramatic-wisdom" },
      { id: "libraries-bridges", title: localized("dashboard.collectionsSubtitle"), subtitle: localized("dashboard.heroBody"), ctaPrimary: localized("nav.boxes"), ctaSecondary: localized("dashboard.scanBox"), theme: "dark-green-archival" },
      { id: "from-one-book", title: localized("dashboard.recentBooks"), subtitle: localized("dashboard.recentSubtitle"), ctaPrimary: localized("dashboard.addBook"), ctaSecondary: localized("settings.title"), theme: "sepia-exploration" },
      { id: "knowledge-lives", title: localized("dashboard.exportReadyBooks"), subtitle: localized("dashboard.heroBody"), ctaPrimary: localized("dashboard.scanIsbn"), ctaSecondary: localized("dashboard.viewAll"), theme: "bright-parchment" },
      { id: "books-find-homes", title: localized("dashboard.subtitle"), subtitle: localized("dashboard.collectionsSubtitle"), ctaPrimary: localized("dashboard.addBook"), ctaSecondary: localized("nav.dashboard"), theme: "dramatic-wisdom" },
      { id: "small-library-big-impact", title: localized("dashboard.totalBoxes"), subtitle: localized("dashboard.collectionsSubtitle"), ctaPrimary: localized("settings.title"), ctaSecondary: localized("nav.boxes"), theme: "bright-parchment" },
      { id: "archive-future", title: localized("dashboard.totalBooks"), subtitle: localized("dashboard.heroBody"), ctaPrimary: localized("settings.title"), ctaSecondary: localized("nav.dashboard"), theme: "dark-green-archival" }
    ];
  }

  function buildFallbackHeroSlide() {
    return {
      id: "fallback",
      title: t("dashboard.heroLead"),
      subtitle: t("dashboard.heroBody"),
      ctaPrimary: t("nav.boxes"),
      ctaSecondary: t("dashboard.addBook"),
      primaryHref: "#/boxes",
      secondaryHref: "#/books/new",
      image: appState.heroBanners[0] || null,
      theme: resolveHeroSlideTheme(appState.heroBanners[0] || null, "dark-green-archival")
    };
  }

  function resolveHeroSlideTheme(image, requestedPreset) {
    const presetName = image?.theme?.preset || requestedPreset || "dark-green-archival";
    const preset = HERO_THEME_PRESETS[presetName] || HERO_THEME_PRESETS["dark-green-archival"];
    return {
      mode: image?.theme?.mode || "curated",
      preset: presetName,
      colors: {
        ...preset.colors,
        ...(image?.theme?.colors || {})
      },
      effects: {
        ...preset.effects,
        ...(image?.theme?.effects || {})
      }
    };
  }

  function buildHeroMediaStyle(slide) {
    if (!slide?.image?.localFile) {
      return "background-image:none;";
    }
    return `background-image:url('${slide.image.localFile}');`;
  }

  function buildHeroWashStyle(slide) {
    const overlay = slide?.theme?.colors?.overlay || "#071814";
    const accent = slide?.theme?.colors?.accent || "#c89b3c";
    const effectOpacity = clampNumber(slide?.theme?.effects?.overlayOpacity ?? 0.62, 0, 1);
    const vignette = clampNumber(slide?.theme?.effects?.vignette ?? 0.18, 0, 1);
    const shade = hexToRgba(overlay, effectOpacity);
    const softShade = hexToRgba(overlay, Math.max(0.12, effectOpacity - 0.16));
    const accentWash = hexToRgba(accent, 0.18);
    const vignetteShade = hexToRgba(overlay, Math.min(0.88, vignette + 0.14));
    return `background-image: linear-gradient(90deg, ${shade} 0%, ${shade} 34%, ${softShade} 58%, rgba(0,0,0,0.08) 100%), radial-gradient(circle at 76% 34%, ${accentWash} 0%, rgba(0,0,0,0) 38%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 24%), radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 44%, ${vignetteShade} 100%);`;
  }

  function buildHeroThemeVariables(slide) {
    const colors = slide?.theme?.colors || HERO_THEME_PRESETS["dark-green-archival"].colors;
    const effects = slide?.theme?.effects || HERO_THEME_PRESETS["dark-green-archival"].effects;
    return [
      `--hero-headline:${colors.headline}`,
      `--hero-body:${colors.body}`,
      `--hero-accent:${colors.accent}`,
      `--hero-overlay:${colors.overlay}`,
      `--hero-button-text:${colors.buttonText || colors.headline}`,
      `--hero-secondary-text:${colors.secondaryText || colors.headline}`,
      `--hero-overlay-opacity:${effects.overlayOpacity ?? 0.62}`,
      `--hero-vignette:${effects.vignette ?? 0.18}`,
      `--hero-grain:${effects.grain ?? 0.05}`,
      `--hero-shadow:${effects.shadow ?? 0.28}`,
      `--hero-highlight:${effects.highlight ?? 0.22}`
    ].join(";");
  }

  function hexToRgba(hex, alpha) {
    const color = parseHexColor(hex);
    if (!color) {
      return `rgba(0, 0, 0, ${clampNumber(alpha, 0, 1)})`;
    }
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${clampNumber(alpha, 0, 1)})`;
  }

  function renderDashboardHeroMessage(slide) {
    return `
      <div class="hero-eyebrow">${escapeHtml(t("dashboard.heroCompact"))}</div>
      <h1>${escapeHtml(slide.title)}</h1>
      <p>${escapeHtml(slide.subtitle)}</p>
      <div class="hero-actions-row">
        <a href="${escapeHtml(slide.primaryHref)}" class="action-button hero-action hero-action-primary">${escapeHtml(slide.ctaPrimary)}</a>
        <a href="${escapeHtml(slide.secondaryHref)}" class="ghost-button hero-action hero-action-secondary">${escapeHtml(slide.ctaSecondary)}</a>
      </div>
    `;
  }

  async function renderDashboardHeroCollage(slide, books, photoMap) {
    const collage = slide?.image?.collage || {};
    const kicker = collage?.kicker || t("dashboard.heroCompact");
    const label = collage?.label || slide?.image?.title || t("dashboard.heroCompact");
    const note = collage?.note || slide?.image?.attribution || t("dashboard.heroBody");
    const mapFragment = collage?.mapLabel || t("dashboard.collections");
    const botanical = collage?.botanicalLabel || t("dashboard.recentBooks");
    const stamp = collage?.stamp || t("dashboard.heroCompact");
    const coverCards = await Promise.all(books.slice(0, 2).map(async (book, index) => {
      const photo = photoMap.get(book.id);
      const coverHtml = photo ? await renderPhotoImage(photo, book.title) : renderCoverPlaceholder(book.title, book.authors);
      return `
        <div class="hero-collage-cover hero-collage-cover-${index + 1}">
          ${coverHtml}
          <span class="hero-collage-cover-caption">${escapeHtml(book.title || t("common.bookShort"))}</span>
        </div>`;
    }));

    return `
      <div class="hero-collage" aria-hidden="true">
        <div class="hero-collage-panel hero-collage-photo-frame">
          <div class="hero-collage-photo" style="${escapeHtml(buildHeroMediaStyle(slide))}"></div>
        </div>
        <div class="hero-collage-panel hero-collage-checkout-card">
          <span class="hero-collage-kicker">${escapeHtml(kicker)}</span>
          <strong>${escapeHtml(label)}</strong>
          <span>${escapeHtml(note)}</span>
        </div>
        <div class="hero-collage-panel hero-collage-map-fragment">
          <span class="hero-collage-map-lines"></span>
          <strong>${escapeHtml(mapFragment)}</strong>
        </div>
        <div class="hero-collage-panel hero-collage-botanical">
          <span class="hero-collage-botanical-mark"></span>
          <strong>${escapeHtml(botanical)}</strong>
        </div>
        <div class="hero-collage-stamp">${escapeHtml(stamp)}</div>
        ${coverCards.join("")}
      </div>`;
  }

  function setupDashboardHeroRotation() {
    const hero = root.querySelector("[data-dashboard-hero]");
    if (!hero) {
      return;
    }

    const deck = getDashboardHeroDeck();
    appState.dashboardHeroDeck = deck.length ? deck : [buildFallbackHeroSlide()];
    appState.dashboardHeroIndex = 0;
    const currentMedia = hero.querySelector("[data-hero-media-current]");
    const currentCopy = hero.querySelector("[data-hero-copy-current]");
    const currentArt = hero.querySelector("[data-hero-art-current]");
    applyDashboardHeroSlide(hero, currentMedia, currentCopy, currentArt, appState.dashboardHeroDeck[0]);

    if (appState.dashboardHeroDeck.length < 2) {
      return;
    }

    appState.dashboardHeroTimer = window.setInterval(() => {
      transitionDashboardHero(hero);
    }, DASHBOARD_HERO_ROTATION_MS);
  }

  function applyDashboardHeroSlide(heroNode, mediaNode, copyNode, artNode, slide) {
    if (mediaNode) {
      mediaNode.setAttribute("style", buildHeroMediaStyle(slide));
    }
    if (copyNode) {
      copyNode.innerHTML = renderDashboardHeroMessage(slide);
    }
    if (artNode) {
      renderDashboardHeroCollage(slide, appState.dashboardHeroBooks, appState.dashboardHeroPhotoMap).then((markup) => {
        if (artNode.isConnected) {
          artNode.innerHTML = markup;
        }
      });
    }
    const hero = heroNode || root.querySelector("[data-dashboard-hero]");
    const washCurrent = hero?.querySelector("[data-hero-wash-current]");
    if (washCurrent) {
      washCurrent.setAttribute("style", buildHeroWashStyle(slide));
    }
    if (hero) {
      hero.setAttribute("style", buildHeroThemeVariables(slide));
    }
  }

  function transitionDashboardHero(hero) {
    const deck = appState.dashboardHeroDeck;
    if (!hero || deck.length < 2 || hero.classList.contains("is-hero-transitioning")) {
      return;
    }

    const nextIndex = (appState.dashboardHeroIndex + 1) % deck.length;
    const nextSlide = deck[nextIndex];
    const nextMedia = hero.querySelector("[data-hero-media-next]");
    const nextCopy = hero.querySelector("[data-hero-copy-next]");
    const currentMedia = hero.querySelector("[data-hero-media-current]");
    const currentCopy = hero.querySelector("[data-hero-copy-current]");
    const nextWash = hero.querySelector("[data-hero-wash-next]");
    const currentWash = hero.querySelector("[data-hero-wash-current]");
    const nextArt = hero.querySelector("[data-hero-art-next]");
    const currentArt = hero.querySelector("[data-hero-art-current]");

    applyDashboardHeroSlide(hero, nextMedia, nextCopy, nextArt, nextSlide);
    if (nextWash) {
      nextWash.setAttribute("style", buildHeroWashStyle(nextSlide));
    }
    hero.setAttribute("style", buildHeroThemeVariables(nextSlide));
    hero.classList.add("is-hero-transitioning");

    appState.dashboardHeroTransitionTimer = window.setTimeout(() => {
      applyDashboardHeroSlide(hero, currentMedia, currentCopy, currentArt, nextSlide);
      if (currentWash && nextWash) {
        currentWash.setAttribute("style", buildHeroWashStyle(nextSlide));
      }
      if (nextMedia) {
        nextMedia.removeAttribute("style");
      }
      if (nextWash) {
        nextWash.removeAttribute("style");
      }
      if (nextCopy) {
        nextCopy.innerHTML = "";
      }
      if (nextArt) {
        nextArt.innerHTML = "";
      }
      hero.classList.remove("is-hero-transitioning");
      appState.dashboardHeroIndex = nextIndex;
      appState.dashboardHeroTransitionTimer = 0;
    }, DASHBOARD_HERO_FADE_MS);
  }

  function teardownDashboardHeroRotation() {
    if (appState.dashboardHeroTimer) {
      window.clearInterval(appState.dashboardHeroTimer);
      appState.dashboardHeroTimer = 0;
    }
    if (appState.dashboardHeroTransitionTimer) {
      window.clearTimeout(appState.dashboardHeroTransitionTimer);
      appState.dashboardHeroTransitionTimer = 0;
    }
    appState.dashboardHeroDeck = [];
    appState.dashboardHeroIndex = 0;
    appState.dashboardHeroBooks = [];
    appState.dashboardHeroPhotoMap = new Map();
  }

  function shuffleArray(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  async function renderBoxes() {
    const boxes = await db.boxes.orderBy("createdAt").reverse().toArray();
    const books = await db.books.toArray();
    const photoMap = books.length ? await getPrimaryPhotoMap(books.map((book) => book.id)) : new Map();
    const booksByBox = groupBooksByBox(books);

    return `
      <section class="screen screen-stack">
        <div class="screen-header">
          <div>
            <h1 class="screen-title">${escapeHtml(t("boxes.title"))}</h1>
          </div>
          <button type="button" class="action-button icon-action-button" data-action="open-box-form">
            <span class="button-icon">${renderIcon("box", t("boxes.new"))}</span>
            <span>${escapeHtml(t("boxes.new"))}</span>
          </button>
        </div>

        ${boxes.length ? `<div class="box-grid">${await Promise.all(boxes.map((box) => renderBoxCard(box, booksByBox.get(box.id) || [], photoMap))).then((items) => items.join(""))}</div>` : `<button type="button" class="empty-card empty-card-visual empty-card-link" data-action="open-box-form"><div class="empty-card-icon">${renderIcon("box", t("dashboard.emptyCollection"))}</div><p>${escapeHtml(t("dashboard.emptyCollection"))}</p></button>`}
      </section>
    `;
  }

  async function renderBoxDetail(boxId) {
    const box = await db.boxes.get(boxId);
    if (!box) return renderMissingScreen(t("common.box"));
    const books = await db.books.where("boxId").equals(box.id).toArray();
    const photoMap = books.length ? await getPrimaryPhotoMap(books.map((book) => book.id)) : new Map();
    const filter = appState.route.query.filter || "all";
    const filtered = books.filter((book) => filter === "all" ? true : filter === "missing" ? book.status === "missing-metadata" : filter === "ready" ? book.status === "ready" : book.status === "exported");
    const readyCount = books.filter((book) => book.status === "ready" || book.status === "exported").length;
    const missingCount = books.filter((book) => book.status === "missing-metadata").length;

    return `
      <section class="screen screen-stack box-detail-screen">
        <a href="#/boxes" class="mobile-sheet-breadcrumb box-detail-breadcrumb">‹ ${escapeHtml(t("box.backToBoxes"))}</a>
        <div class="dashboard-hero collection-hero">
          <div class="dashboard-hero-copy">
            <div class="hero-eyebrow">${escapeHtml(box.code)}</div>
            <h1>${escapeHtml(box.name)}</h1>
            ${box.notes ? `<p class="supporting-text">${escapeHtml(box.notes)}</p>` : ""}
            <div class="box-meta box-meta-soft box-detail-tags">
              <span class="meta-pill">${books.length} ${escapeHtml(t("boxes.bookCount"))}</span>
              <span class="meta-pill">${readyCount} ${escapeHtml(t("dashboard.exportReadyBooks"))}</span>
              <span class="meta-pill">${missingCount} ${escapeHtml(t("box.filters.missing"))}</span>
            </div>
          </div>
          <div class="box-detail-hero-side">
            <div class="inline-actions box-detail-primary-actions">
              <button type="button" class="action-button collection-hero-action icon-action-button box-action-square box-action-primary" data-action="show-box-qr" data-box-id="${box.id}">
                <span class="button-icon">${renderIcon("scan", t("boxes.showQr"))}</span>
                <span>${escapeHtml(t("boxes.showQr"))}</span>
              </button>
              <button type="button" class="ghost-button icon-action-button box-action-square box-action-secondary" data-action="open-box-form" data-box-id="${box.id}">
                <span class="button-icon">✎</span>
                <span>${escapeHtml(t("box.editBox"))}</span>
              </button>
            </div>
            <div class="hero-art box-detail-art">
              ${await renderCollectionCollage(books, photoMap, 4)}
            </div>
          </div>
        </div>

        <div class="toolbar box-detail-toolbar">
          <a class="action-button icon-action-button box-action-square box-action-primary" href="#/books/new?boxId=${encodeURIComponent(box.id)}"><span class="button-icon">${renderIcon("book", t("box.addBookHere"))}</span><span>${escapeHtml(t("box.addBookHere"))}</span></a>
          <a class="ghost-button icon-action-button box-action-square box-action-secondary" href="#/scanner?mode=isbn&boxId=${encodeURIComponent(box.id)}"><span class="button-icon">${renderIcon("scan", t("box.scanIsbn"))}</span><span>${escapeHtml(t("box.scanIsbn"))}</span></a>
          <a class="ghost-button icon-action-button box-action-square box-action-neutral" href="#/scanner?mode=move&boxId=${encodeURIComponent(box.id)}"><span class="button-icon">⇄</span><span>${escapeHtml(t("box.moveBooksHere"))}</span></a>
        </div>

        <div class="filters-row">
          ${renderFilterButton("all", filter, t("box.filters.all"), box.id)}
          ${renderFilterButton("missing", filter, t("box.filters.missing"), box.id)}
          ${renderFilterButton("ready", filter, t("box.filters.ready"), box.id)}
          ${renderFilterButton("exported", filter, t("box.filters.exported"), box.id)}
        </div>

        <div class="section-card">
          <div class="section-header">
            <h2 class="section-heading">${escapeHtml(t("box.photoGrid"))}</h2>
            ${box.portableImported ? `<span class="badge badge-ready">${escapeHtml(t("box.importedPortable"))}</span>` : ""}
          </div>
          ${filtered.length ? `<div class="books-grid">${await renderBookCards(filtered)}</div>` : `<div class="empty-card"><p>${escapeHtml(t("box.noBooks"))}</p></div>`}
        </div>
      </section>
    `;
  }

  async function renderBookCards(books) {
    const photoMap = await getPrimaryPhotoMap(books.map((book) => book.id));
    return Promise.all(books.map(async (book) => {
      const photo = photoMap.get(book.id);
      const coverHtml = await renderBookCover(book, photo, book.title);
      return `
        <article class="book-card">
          <div class="book-card-body">
            <a href="#/books/${encodeURIComponent(book.id)}" class="cover-thumb">${coverHtml}</a>
            <div class="book-card-copy">
              <h3>${escapeHtml(book.title || "Untitled")}</h3>
              ${book.authors ? `<p class="muted book-card-author">${escapeHtml(book.authors)}</p>` : ""}
              <div class="meta-pills">
                <span class="badge ${statusBadgeClass(book.status)}">${escapeHtml(t(`status.${book.status}`))}</span>
                ${book.wantedStatus ? `<span class="meta-pill review-pill review-pill-${escapeHtml(book.wantedStatus.toLowerCase())}">${escapeHtml(t(book.wantedStatus === "NotWanted" ? "dashboard.notWanted" : `dashboard.${book.wantedStatus.toLowerCase()}`))}</span>` : ""}
                ${book.publishedYear ? `<span class="meta-pill">${escapeHtml(String(book.publishedYear))}</span>` : ""}
              </div>
              <div class="book-card-footer">
                ${book.language ? `<span class="book-card-meta-item">${escapeHtml(book.language.toUpperCase())}</span>` : ""}
                <span class="book-card-link" aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        </article>
      `;
    })).then((items) => items.join(""));
  }

  async function renderScanner() {
    const mode = appState.route.query.mode || "box";
    const boxId = appState.route.query.boxId || "";
    const moveBox = boxId ? await db.boxes.get(boxId) : null;
    const overlayStyle = buildScannerOverlayStyle(mode);
    return `
      <section class="screen screen-stack scanner-page">
        <div class="scanner-page-topbar">
          <button type="button" class="ghost-button scanner-top-button scanner-top-button-text" data-action="scanner-back" aria-label="${escapeHtml(t("scanner.back"))}">${escapeHtml(t("scanner.back"))}</button>
          <div class="scanner-top-actions">
            <button type="button" class="ghost-button scanner-top-button scanner-top-button-text" data-action="scanner-switch-camera" aria-label="${escapeHtml(t("scanner.switchCamera"))}">${escapeHtml(t("scanner.cameraShort"))}</button>
            <button type="button" class="ghost-button scanner-top-button scanner-top-button-text ${appState.scanner.torchOn ? "is-active" : ""}" data-action="scanner-toggle-torch" data-scanner-control="torch" aria-pressed="${appState.scanner.torchOn ? "true" : "false"}" aria-label="${escapeHtml(t("scanner.torch"))}" ${appState.scanner.torchSupported ? "" : "hidden"}>${escapeHtml(t("scanner.torch"))}</button>
          </div>
        </div>
        <div class="scanner-shell scanner-shell-fullscreen">
          <div class="scanner-card scanner-card-fullscreen">
            <div id="scanner-status-region">${renderScannerStatusMarkup()}</div>
            <div class="scanner-frame scanner-frame-${escapeHtml(mode)} scanner-frame-fullscreen">
              <div id="scanner-view" class="scanner-view scanner-view-fullscreen"><div class="scanner-empty">${escapeHtml(t("scanner.cameraHelp"))}</div></div>
              <div class="scanner-overlay ${mode === "isbn" ? "scanner-overlay-barcode" : "scanner-overlay-square"}" style="${escapeHtml(overlayStyle)}" aria-hidden="true">
                <div class="scanner-guide-line"></div>
              </div>
            </div>
            <div class="scanner-bottom-overlay">
              <div class="scanner-mode-badge">${moveBox ? escapeHtml(moveBox.code) : escapeHtml(getScannerModeShortLabel(mode))}</div>
              <div class="scanner-mini-actions">
                ${mode === "isbn" && boxId ? `<a href="#/books/new?boxId=${encodeURIComponent(boxId)}" class="small-button scanner-mini-button scanner-mini-button-label" data-action="switch-to-form">${escapeHtml(t("scanner.switchToForm"))}</a>` : ""}
                <button type="button" class="small-button scanner-mini-button scanner-mini-button-text" data-action="toggle-scanner-manual" aria-label="${escapeHtml(t("scanner.manualShortcut"))}">${escapeHtml(t("scanner.manualShort"))}</button>
                <button type="button" class="small-button scanner-mini-button scanner-mini-button-text" data-action="scanner-upload-isbn" aria-label="${escapeHtml(t("scanner.upload"))}">${escapeHtml(t("scanner.uploadShort"))}</button>
              </div>
            </div>
            <div class="scanner-support-row">
              <div class="scanner-utility-actions" data-scanner-control="zoom-group" ${appState.scanner.zoomSupported ? "" : "hidden"}>
                <button type="button" class="small-button scanner-mini-button scanner-icon-button" data-action="scanner-zoom-out" data-scanner-control="zoom" aria-label="${escapeHtml(t("scanner.zoomOut"))}" ${appState.scanner.zoomSupported ? "" : "hidden"}>-</button>
                <button type="button" class="small-button scanner-mini-button scanner-icon-button" data-action="scanner-zoom-in" data-scanner-control="zoom" aria-label="${escapeHtml(t("scanner.zoomIn"))}" ${appState.scanner.zoomSupported ? "" : "hidden"}>+</button>
              </div>
              <p class="scanner-focus-hint">${escapeHtml(t("scanner.focusHint"))}</p>
            </div>
          </div>
          <div class="section-card scanner-manual-card ${appState.route.query.manual === "1" ? "" : "hidden"}">
            <form data-form="scanner-manual" class="screen-stack scanner-manual-form">
              <input type="hidden" name="mode" value="${escapeHtml(mode)}">
              <input type="hidden" name="boxId" value="${escapeHtml(boxId)}">
              <div class="field">
                <label>${escapeHtml(getScannerModeShortLabel(mode))}</label>
                <input name="manualValue" placeholder="${escapeHtml(t("scanner.manualPlaceholder"))}" data-manual-input>
              </div>
              <div class="inline-actions">
                <button type="submit" class="action-button">${escapeHtml(t("scanner.submit"))}</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  async function renderBookForm(bookId) {
    const book = bookId ? await db.books.get(bookId) : hydrateNewBookDraft(appState.route.query.boxId || "");
    if (!book) return renderMissingScreen(t("common.book"));
    const boxes = await db.boxes.toArray();
    const photos = book.id ? await db.photos.where("bookId").equals(book.id).toArray() : [];

    return `
      <section class="screen screen-stack mobile-sheet-screen book-sheet-screen">
        ${renderMobileSheetHeader(bookId ? t("book.editTitle") : t("book.newTitle"), "", bookId ? `#/books/${encodeURIComponent(book.id)}` : "#/boxes", `<a href="#/scanner?mode=isbn&boxId=${encodeURIComponent(book.boxId || appState.route.query.boxId || "")}" class="toolbar-button compact-toolbar-button" data-action="switch-to-scan">${escapeHtml(t("book.switchToScan"))}</a>`, { breadcrumbLabel: t("nav.boxesShort") })}

        <form data-form="book" class="screen-stack" data-book-id="${book.id || ""}">
          <input type="hidden" name="bookId" value="${book.id || ""}">
          <input type="hidden" name="metadataProvider" value="${escapeHtml(book.metadataProvider || "manual")}">
          <input type="hidden" name="metadataProviderId" value="${escapeHtml(book.metadataProviderId || "")}">
          <input type="hidden" name="metadataFetchedAt" value="${escapeHtml(book.metadataFetchedAt || "")}">
          <input type="hidden" name="thumbnailUrl" value="${escapeHtml(book.thumbnailUrl || "")}">
          <input type="hidden" name="smallThumbnailUrl" value="${escapeHtml(book.smallThumbnailUrl || "")}">
          <div class="form-grid">
            ${renderField("title", t("book.title"), book.title)}
            ${renderField("authors", t("book.authors"), book.authors)}
            ${renderField("publisher", t("book.publisher"), book.publisher)}
            ${renderField("publishedYear", t("book.year"), book.publishedYear || "", "number")}
            ${renderField("isbn10", t("book.isbn10"), book.isbn10)}
            ${renderField("isbn13", t("book.isbn13"), book.isbn13)}
            ${renderField("language", t("book.language"), book.language)}
            ${renderField("localCode", t("book.localCode"), book.localCode)}
            ${renderSelectField("boxId", t("book.assignBox"), boxes, book.boxId)}
            ${renderSelectField("status", t("common.status"), STATUSES.map((status) => ({ id: status, name: t(`status.${status}`) })), book.status)}
            ${renderField("source", t("book.source"), book.source)}
            ${renderField("sourceUrl", t("book.sourceUrl"), book.sourceUrl, "url")}
            ${renderTextareaField("description", t("book.description"), book.description)}
            ${renderTextareaField("notes", t("common.notes"), book.notes)}
          </div>

          <div class="meta-pills">
            <span class="meta-pill">${escapeHtml(t("book.source"))}: ${escapeHtml(book.source || t("book.sourceManual"))}</span>
            ${book.metadataFetchedAt ? `<span class="meta-pill">${escapeHtml(book.metadataFetchedAt.slice(0, 10))}</span>` : ""}
          </div>

          <div class="inline-actions">
            <button type="button" class="ghost-button" data-action="lookup-book">${escapeHtml(t("book.lookup"))}</button>
            <button type="button" class="ghost-button" data-action="retry-lookup-book">${escapeHtml(t("book.retryLookup"))}</button>
          </div>

          <div class="section-card">
            <div class="section-header">
              <h2 class="section-heading">${escapeHtml(t("book.gallery"))}</h2>
              <span class="muted">${escapeHtml(t("photo.capturePrimary"))} / ${escapeHtml(t("photo.uploadFallback"))}</span>
            </div>
            <div class="photo-slots">
              ${await Promise.all(PHOTO_TYPES.map(async (photoType) => renderPhotoSlot(book.id, photoType, photos))).then((items) => items.join(""))}
            </div>
          </div>

          <div class="inline-actions">
            <button type="submit" class="action-button">${escapeHtml(t("common.save"))}</button>
            <button type="button" class="ghost-button" data-action="save-and-add-next" data-book-id="${book.id || "new"}">${escapeHtml(t("book.saveAddNext"))}</button>
            <a href="${bookId ? `#/books/${encodeURIComponent(book.id)}` : "#/dashboard"}" class="ghost-button">${escapeHtml(t("common.cancel"))}</a>
          </div>
        </form>
      </section>
    `;
  }

  async function renderPhotoSlot(bookId, photoType, photos) {
    const match = photos.filter((photo) => photo.type === photoType.key).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))[0];
    const preview = match ? await renderPhotoImage(match, t(photoType.labelKey)) : `<div class="cover-placeholder"><strong>${escapeHtml(t(photoType.labelKey))}</strong><span>${escapeHtml(t("photo.noImage"))}</span></div>`;
    return `
      <div class="photo-card">
        <div class="photo-card-body">
          <strong>${escapeHtml(t(photoType.labelKey))}</strong>
          <div class="photo-thumb">${preview}</div>
          <div class="photo-slot-actions">
            <button type="button" class="small-button" data-action="capture-photo" data-book-id="${bookId || "new"}" data-photo-type="${photoType.key}">${escapeHtml(t("photo.capturePrimary"))}</button>
            <button type="button" class="small-button" data-action="upload-photo" data-book-id="${bookId || "new"}" data-photo-type="${photoType.key}">${escapeHtml(t("photo.uploadFallback"))}</button>
            ${match ? `<button type="button" class="small-button" data-action="remove-photo" data-photo-id="${match.id}" data-book-id="${bookId || ""}">${escapeHtml(t("common.remove"))}</button>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  async function renderBookDetail(bookId) {
    const book = await db.books.get(bookId);
    if (!book) return renderMissingScreen(t("common.book"));
    const [box, photos] = await Promise.all([
      book.boxId ? db.boxes.get(book.boxId) : null,
      db.photos.where("bookId").equals(book.id).sortBy("sortOrder")
    ]);
    const primary = photos.find((photo) => photo.type === "cover") || photos[0] || null;
    const galleryPhotos = photos.filter((photo) => !primary || photo.id !== primary.id);

    return `
      <section class="screen screen-stack mobile-sheet-screen book-detail-sheet-screen">
        ${renderMobileSheetHeader(book.title || "Untitled", book.authors || "", box ? `#/boxes/${encodeURIComponent(box.id)}` : "#/boxes", `<a href="#/books/${encodeURIComponent(book.id)}/edit" class="toolbar-button compact-toolbar-button">${escapeHtml(t("common.edit"))}</a>`, { breadcrumbLabel: box ? box.code : t("nav.boxesShort") })}
        <div class="meta-pills book-detail-pills">
          <span class="badge ${statusBadgeClass(book.status)}">${escapeHtml(t(`status.${book.status}`))}</span>
          ${book.source ? `<span class="meta-pill">${escapeHtml(book.source)}</span>` : ""}
          ${book.language ? `<span class="meta-pill">${escapeHtml(book.language)}</span>` : ""}
        </div>

        <div class="detail-grid">
          <div class="section-card book-detail-info">
            <div class="screen-stack book-detail-info-stack">
              <div class="book-detail-intro">
                <h2 class="section-heading">${escapeHtml(t("common.book"))}</h2>
                ${book.description ? `<p class="muted">${escapeHtml(book.description)}</p>` : ""}
              </div>
              <div class="book-detail-meta-list">
                <div class="meta-text"><strong>${escapeHtml(t("book.publisher"))}:</strong> ${escapeHtml(book.publisher || "-")}</div>
                <div class="meta-text"><strong>${escapeHtml(t("book.year"))}:</strong> ${escapeHtml(book.publishedYear ? String(book.publishedYear) : "-")}</div>
                <div class="meta-text"><strong>${escapeHtml(t("book.isbn10"))}:</strong> ${escapeHtml(book.isbn10 || "-")}</div>
                <div class="meta-text"><strong>${escapeHtml(t("book.isbn13"))}:</strong> ${escapeHtml(book.isbn13 || "-")}</div>
                <div class="meta-text"><strong>${escapeHtml(t("book.sourceUrl"))}:</strong> ${book.sourceUrl ? `<a href="${escapeHtml(book.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(book.sourceUrl)}</a>` : "-"}</div>
                <div class="meta-text"><strong>${escapeHtml(t("common.box"))}:</strong> ${box ? `<a href="#/boxes/${encodeURIComponent(box.id)}">${escapeHtml(box.code)} - ${escapeHtml(box.name)}</a>` : "-"}</div>
              </div>
              <div class="section-card review-section-card">
                <h2 class="section-heading">${escapeHtml(t("book.libraryReview"))}</h2>
                <div class="meta-pills">
                  <span class="meta-pill review-pill ${book.wantedStatus ? `review-pill-${escapeHtml(book.wantedStatus.toLowerCase())}` : ""}">${escapeHtml(book.wantedStatus ? t(book.wantedStatus === "NotWanted" ? "dashboard.notWanted" : `dashboard.${book.wantedStatus.toLowerCase()}`) : t("common.none"))}</span>
                  ${book.quantityWanted ? `<span class="meta-pill">${escapeHtml(book.quantityWanted)}</span>` : ""}
                </div>
                <div class="meta-text"><strong>${escapeHtml(t("book.libraryComment"))}:</strong> ${escapeHtml(book.libraryComment || "-")}</div>
              </div>
              <div class="inline-actions">
                <a href="#/books/${encodeURIComponent(book.id)}/edit" class="ghost-button">${escapeHtml(t("common.edit"))}</a>
                <button type="button" class="ghost-button" data-action="show-book-qr" data-book-id="${book.id}">${escapeHtml(t("book.printLabel"))}</button>
                <button type="button" class="ghost-button" data-action="move-book" data-book-id="${book.id}">${escapeHtml(t("book.move"))}</button>
              </div>
            </div>
          </div>
          <div class="gallery-card book-detail-gallery ${galleryPhotos.length ? "" : "book-detail-gallery-compact"}">
            <div class="gallery-card-body">
              <div class="cover-thumb">${await renderBookCover(book, primary, book.title)}</div>
              ${galleryPhotos.length ? `<div class="gallery-grid">${await Promise.all(galleryPhotos.map(async (photo) => `<div class="photo-thumb">${await renderPhotoImage(photo, photo.type)}</div>`)).then((items) => items.join(""))}</div>` : ""}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async function renderExport() {
    const [boxes, books, photos] = await Promise.all([db.boxes.toArray(), db.books.toArray(), db.photos.toArray()]);
    return `
      <section class="screen screen-stack mobile-sheet-screen export-sheet-screen">
        ${renderMobileSheetHeader(t("export.title"), "", "#/dashboard", "", { showClose: false })}

        <div class="export-stack export-stack-compact">
          <div class="export-card export-card-panel">
            <div class="export-card-row export-card-row-compact">
              <div class="export-card-head">
                <div class="export-card-icon">${renderIcon("export", t("export.excelTitle"))}</div>
                <div class="export-card-copy">
                  <p class="export-card-label">${escapeHtml(t("export.excelTitle"))}</p>
                </div>
              </div>
              <div class="export-actions export-actions-row export-actions-compact">
                <button type="button" class="ghost-button icon-action-button toolbar-action-button" data-action="export-excel"><span class="button-icon">${renderIcon("export", t("export.excel"))}</span><span>${escapeHtml(t("common.export"))}</span></button>
                <button type="button" class="ghost-button icon-action-button toolbar-action-button" data-action="import-excel"><span class="button-icon">${renderIcon("book", t("export.importExcel"))}</span><span>${escapeHtml(t("common.import"))}</span></button>
              </div>
            </div>
            <div class="export-divider" aria-hidden="true"></div>
            <div class="export-card-row export-card-row-compact">
              <div class="export-card-head">
                <div class="export-card-icon">⇄</div>
                <div class="export-card-copy">
                  <p class="export-card-label">${escapeHtml(t("export.zipTitle"))}</p>
                </div>
              </div>
              <div class="export-actions export-actions-row export-actions-compact">
                <button type="button" class="ghost-button toolbar-action-button" data-action="export-zip">${escapeHtml(t("common.export"))}</button>
                <button type="button" class="ghost-button toolbar-action-button" data-action="import-zip">${escapeHtml(t("common.import"))}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="section-card export-summary-card">
          <h2 class="section-heading">${escapeHtml(t("export.archiveSummary"))}</h2>
          <div class="metrics-grid export-summary-grid">
            ${renderMetricCard(t("dashboard.totalBoxes"), boxes.length)}
            ${renderMetricCard(t("dashboard.totalBooks"), books.length)}
            ${renderMetricCard(t("export.photos"), photos.length)}
            ${renderMetricCard(t("export.version"), APP_VERSION)}
          </div>
        </div>
      </section>
    `;
  }

  async function renderSettings() {
    const demoDataPresent = await hasDemoDataPresent();
    const metadataApiBaseUrl = getConfiguredMetadataApiBaseUrl();
    return `
      <section class="screen screen-stack mobile-sheet-screen settings-sheet-screen">
        ${renderMobileSheetHeader(t("settings.title"), "", "#/dashboard", "", { showClose: false })}

        <div class="settings-grid">
          <div class="section-card screen-stack settings-card">
            <div class="settings-card-icon">${renderIcon("language-globe", t("settings.language"))}</div>
            <h2 class="section-heading">${escapeHtml(t("common.language"))}</h2>
            <p>${escapeHtml(LANGUAGES[appState.language].label)}</p>
            <button type="button" class="ghost-button" data-action="toggle-language-menu">${escapeHtml(t("settings.language"))}</button>
          </div>

          <div class="section-card screen-stack settings-card">
            <div class="settings-card-icon">${renderIcon("app-mark", t("settings.install"))}</div>
            <h2 class="section-heading">${escapeHtml(t("settings.installTitle"))}</h2>
            <div class="inline-actions">
              <button type="button" class="action-button" data-action="install-app">${escapeHtml(t("settings.install"))}</button>
            </div>
          </div>

          <div class="section-card screen-stack settings-card">
            <div class="settings-card-icon">${renderIcon("export", t("settings.exportZip"))}</div>
            <h2 class="section-heading">${escapeHtml(t("settings.transferTitle"))}</h2>
            <div class="inline-actions">
              <button type="button" class="action-button" data-action="export-zip">${escapeHtml(t("settings.exportZip"))}</button>
              <button type="button" class="ghost-button" data-action="import-zip">${escapeHtml(t("settings.importZip"))}</button>
            </div>
          </div>

          <div class="section-card screen-stack settings-card">
            <div class="settings-card-icon">${renderIcon("book", t("settings.demoData"))}</div>
            <h2 class="section-heading">${escapeHtml(t("settings.demoData"))}</h2>
            <p>${escapeHtml(demoDataPresent ? t("settings.demoDataLoaded") : t("settings.noDemoData"))}</p>
            <div class="inline-actions">
              <button type="button" class="ghost-button" data-action="load-demo-data">${escapeHtml(t("settings.loadDemo"))}</button>
              <button type="button" class="danger-button" data-action="reset-demo">${escapeHtml(t("settings.reset"))}</button>
            </div>
          </div>

          <div class="section-card screen-stack settings-card">
            <div class="settings-card-icon">✕</div>
            <h2 class="section-heading">${escapeHtml(t("settings.dangerZone"))}</h2>
            <p>${escapeHtml(tf("settings.metadataApiBaseUrl", { url: metadataApiBaseUrl }))}</p>
            <div class="inline-actions">
              <button type="button" class="ghost-button" data-action="clear-lookup-cache">${escapeHtml(t("settings.clearLookupCache"))}</button>
            </div>
            <button type="button" class="danger-button" data-action="wipe-all-data">${escapeHtml(t("settings.clearAll"))}</button>
          </div>
        </div>
      </section>
    `;
  }

  function renderMetricCard(label, value, iconName = "book") {
    return `<div class="metric-card"><div class="metric-icon">${renderIcon(iconName, label)}</div><div class="metric-value">${escapeHtml(String(value))}</div><div class="metric-label">${escapeHtml(label)}</div></div>`;
  }

  async function renderBoxCard(box, boxBooks, photoMap) {
    const readyCount = boxBooks.filter((book) => book.status === "ready" || book.status === "exported").length;
    return `
      <article class="box-card">
        <a href="#/boxes/${encodeURIComponent(box.id)}" class="collection-collage-link">${await renderCollectionCollage(boxBooks, photoMap, 4)}</a>
        <div class="box-card-body">
          <div class="box-card-topline">
            <div class="box-card-mark" aria-hidden="true">${escapeHtml(box.code.slice(0, 2).toUpperCase())}</div>
            <span class="badge">${boxBooks.length}</span>
          </div>
          <div class="box-card-heading">
            <h3>${escapeHtml(box.code)}</h3>
            <p class="muted">${escapeHtml(box.name)}</p>
          </div>
          <div class="meta-pills">
            <span class="meta-pill">${readyCount} ${escapeHtml(t("dashboard.exportReadyBooks"))}</span>
          </div>
          <div class="card-actions box-card-actions">
            <a href="#/boxes/${encodeURIComponent(box.id)}" class="small-button box-card-action-link">${escapeHtml(t("common.open"))}</a>
            <button type="button" class="small-button box-card-action-link" data-action="show-box-qr" data-box-id="${box.id}">${escapeHtml(t("boxes.showQr"))}</button>
            <button type="button" class="small-button box-card-action-link" data-action="open-box-form" data-box-id="${box.id}">${escapeHtml(t("common.edit"))}</button>
            <button type="button" class="danger-button box-card-action-link box-card-action-delete" data-action="delete-box" data-box-id="${box.id}">${escapeHtml(t("common.delete"))}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderFilterButton(key, current, label, boxId) {
    return `<a class="chip-button box-filter-chip ${current === key ? "is-active" : ""}" href="#/boxes/${encodeURIComponent(boxId)}?filter=${encodeURIComponent(key)}">${escapeHtml(label)}</a>`;
  }

  function renderVisualActionTile(iconName, label, href, className) {
    return `<a href="${href}" class="${className}"><span class="visual-action-icon">${renderIcon(iconName, label)}</span><span class="visual-action-label">${escapeHtml(label)}</span></a>`;
  }

  function groupBooksByBox(books) {
    const map = new Map();
    for (const book of books) {
      if (!book.boxId) continue;
      if (!map.has(book.boxId)) {
        map.set(book.boxId, []);
      }
      map.get(book.boxId).push(book);
    }
    return map;
  }

  async function renderCollectionCollage(books, photoMap, limit = 4) {
    if (!books.length) {
      const activeBoxId = encodeURIComponent(appState.route.params.id || "");
      return `
        <div class="collection-collage is-empty collection-collage-empty-cta">
          <div class="collection-collage-empty">${renderIcon("book", t("box.emptyCta"))}</div>
          <strong>${escapeHtml(t("box.emptyCta"))}</strong>
          <div class="empty-box-actions">
            <a href="#/books/new?boxId=${activeBoxId}" class="action-button icon-action-button box-action-square box-action-primary"><span class="button-icon">${renderIcon("book", t("box.addBookHere"))}</span><span>${escapeHtml(t("box.addBookHere"))}</span></a>
            <a href="#/scanner?mode=isbn&boxId=${activeBoxId}" class="ghost-button icon-action-button box-action-round box-action-secondary"><span class="button-icon">${renderIcon("scan", t("box.scanIsbn"))}</span><span>${escapeHtml(t("box.emptyScanCta"))}</span></a>
          </div>
        </div>`;
    }

    const leadBook = books[0];
    const photo = photoMap.get(leadBook.id);
    const coverHtml = await renderBookCover(leadBook, photo, leadBook.title);
    const stackCount = Math.min(books.length - 1, 2);
    return `
      <div class="collection-collage collection-collage-stack">
        ${stackCount > 1 ? `<div class="collection-collage-shadow collection-collage-shadow-back" aria-hidden="true"></div>` : ""}
        ${stackCount > 0 ? `<div class="collection-collage-shadow collection-collage-shadow-mid" aria-hidden="true"></div>` : ""}
        <div class="collection-collage-item collection-collage-item-lead">${coverHtml}</div>
      </div>`;
  }

  function renderField(name, label, value, type = "text") {
    return `<div class="field"><label for="${name}">${escapeHtml(label)}</label><input id="${name}" name="${name}" type="${escapeHtml(type)}" value="${escapeHtml(value || "")}"></div>`;
  }

  function renderTextareaField(name, label, value) {
    return `<div class="field is-wide"><label for="${name}">${escapeHtml(label)}</label><textarea id="${name}" name="${name}">${escapeHtml(value || "")}</textarea></div>`;
  }

  function renderSelectField(name, label, options, selectedValue) {
    const optionHtml = [`<option value="">${escapeHtml(t("common.none"))}</option>`].concat(options.map((option) => `<option value="${escapeHtml(option.id)}" ${option.id === selectedValue ? "selected" : ""}>${escapeHtml(option.name || option.code || option.id)}</option>`)).join("");
    return `<div class="field"><label for="${name}">${escapeHtml(label)}</label><select id="${name}" name="${name}">${optionHtml}</select></div>`;
  }

  function renderMissingScreen(label) {
    return `<section class="screen"><div class="empty-card"><h2>${escapeHtml(label)}</h2><p>Item not found on this device.</p></div></section>`;
  }

  function renderCoverPlaceholder(title, authors) {
    return `<div class="cover-placeholder"><strong>${escapeHtml(title || "Untitled")}</strong><span>${escapeHtml(authors || "Let Books")}</span></div>`;
  }

  function renderExternalThumbnailImage(url, alt, fallbackMarkup) {
    return `
      <span class="external-thumb-frame">
        <img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.hidden=true;if(this.nextElementSibling){this.nextElementSibling.hidden=false;}">
        <span hidden>${fallbackMarkup}</span>
      </span>
    `;
  }

  function statusBadgeClass(status) {
    if (status === "ready") return "badge-ready";
    if (status === "exported") return "badge-exported";
    return "badge-missing";
  }

  async function renderPhotoImage(photo, alt) {
    const url = getPhotoObjectUrl(photo);
    return `<img src="${url}" alt="${escapeHtml(alt || photo.type)}">`;
  }

  async function renderBookCover(book, photo, alt) {
    if (photo) {
      return renderPhotoImage(photo, alt);
    }

    const thumbnailUrl = getBookThumbnailUrl(book);
    if (thumbnailUrl) {
      return renderExternalThumbnailImage(thumbnailUrl, alt || book.title || "Book cover", renderCoverPlaceholder(book.title, book.authors));
    }

    return renderCoverPlaceholder(book.title, book.authors);
  }

  function getBookThumbnailUrl(book) {
    if (!book) return "";
    return normalizeExternalUrl(book.thumbnailUrl || book.smallThumbnailUrl || "");
  }

  function normalizeExternalUrl(url) {
    const value = String(url || "").trim();
    if (!value) return "";
    return value.replace(/^http:/i, "https:");
  }

  function getPhotoObjectUrl(photo) {
    if (appState.photoUrlCache.has(photo.id)) {
      return appState.photoUrlCache.get(photo.id);
    }
    const url = URL.createObjectURL(photo.blob);
    appState.photoUrlCache.set(photo.id, url);
    return url;
  }

  async function getPrimaryPhotoMap(bookIds) {
    const photos = await db.photos.where("bookId").anyOf(bookIds).toArray();
    const map = new Map();
    for (const bookId of bookIds) {
      const related = photos.filter((photo) => photo.bookId === bookId).sort((a, b) => (a.type === "cover" ? -1 : 1) || (a.sortOrder || 0) - (b.sortOrder || 0));
      if (related[0]) map.set(bookId, related[0]);
    }
    return map;
  }

  function createEmptyBook(boxId = "") {
    return {
      id: makeId("book"),
      boxId,
      localCode: `LB-${Math.floor(Math.random() * 9000 + 1000)}`,
      title: "",
      authors: "",
      publisher: "",
      publishedYear: "",
      isbn10: "",
      isbn13: "",
      language: "",
      description: "",
      source: "Manual",
      sourceUrl: "",
      metadataProvider: "manual",
      metadataProviderId: "",
      metadataFetchedAt: "",
      thumbnailUrl: "",
      smallThumbnailUrl: "",
      status: "missing-metadata",
      wantedStatus: "",
      quantityWanted: "",
      libraryComment: "",
      notes: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  async function handleAction(action, target) {
    switch (action) {
      case "toggle-language-menu":
        languageTrigger.click();
        return;
      case "open-box-form":
        await openBoxForm(target.dataset.boxId || "");
        return;
      case "delete-box":
        await deleteBox(target.dataset.boxId);
        return;
      case "show-box-qr":
        await openBoxQrModal(target.dataset.boxId);
        return;
      case "show-book-qr":
        await openBookQrModal(target.dataset.bookId);
        return;
      case "capture-photo":
        await triggerPhotoInput(target.dataset.bookId, target.dataset.photoType, true);
        return;
      case "upload-photo":
        await triggerPhotoInput(target.dataset.bookId, target.dataset.photoType, false);
        return;
      case "remove-photo":
        await removePhoto(target.dataset.photoId, target.dataset.bookId);
        return;
      case "lookup-book":
        await lookupBookFromCurrentForm();
        return;
      case "retry-lookup-book":
        await lookupBookFromCurrentForm({ forceRefresh: true });
        return;
      case "save-and-add-next":
        await submitBookForm(document.querySelector("form[data-form='book']"), true);
        return;
      case "switch-to-scan":
        persistCurrentBookDraft();
        return;
      case "switch-to-form":
        return;
      case "move-book":
        await openMoveBookModal(target.dataset.bookId);
        return;
      case "start-scanner":
        await maybeStartScanner(true);
        return;
      case "scanner-back":
        await stopScanner();
        navigateBackFromScanner();
        return;
      case "scanner-upload-isbn":
        await uploadScannerImage();
        return;
      case "toggle-scanner-manual":
        toggleScannerManualPanel();
        return;
      case "stop-scanner":
        await stopScanner();
        showToast(t("toast.scannerStopped"));
        return;
      case "scanner-switch-camera":
        await switchScannerCamera();
        return;
      case "scanner-zoom-in":
        await adjustScannerZoom(0.25);
        return;
      case "scanner-zoom-out":
        await adjustScannerZoom(-0.25);
        return;
      case "scanner-toggle-torch":
        await toggleScannerTorch();
        return;
      case "focus-manual-input": {
        const input = document.querySelector("[data-manual-input]");
        if (input) input.focus();
        return;
      }
      case "export-excel":
        await exportExcelWorkbook();
        return;
      case "import-excel":
        await importExcelWorkbook();
        return;
      case "export-zip":
        await exportDatabaseZip();
        return;
      case "import-zip":
        await triggerZipImport();
        return;
      case "load-demo-data":
        await loadDemoDataFromSettings();
        return;
      case "reset-demo":
        await resetDemoData();
        return;
      case "clear-lookup-cache":
        await clearLookupCache();
        return;
      case "wipe-all-data":
        await confirmAndWipeAllData();
        return;
      case "portable-import-box":
        await importPortableBox(appState.transientBoxImport);
        closeModal();
        return;
      case "portable-open-box":
        if (appState.transientBoxImport?.existingId) {
          window.location.hash = `#/boxes/${encodeURIComponent(appState.transientBoxImport.existingId)}`;
        }
        closeModal();
        return;
      default:
        return;
    }
  }

  async function openBoxForm(boxId) {
    const box = boxId ? await db.boxes.get(boxId) : { id: makeId("box"), code: generateBoxCode(), name: "", notes: "", createdAt: new Date().toISOString() };
    openModal(`
      <div class="modal-header">
        <h2 class="modal-title">${escapeHtml(boxId ? t("common.edit") : t("boxes.new"))}</h2>
      </div>
      <form data-form="box" class="screen-stack">
        <input type="hidden" name="boxId" value="${escapeHtml(box.id)}">
        ${renderField("code", t("boxes.code"), box.code)}
        ${renderField("name", t("boxes.name"), box.name)}
        ${renderTextareaField("notes", t("boxes.notes"), box.notes)}
        <div class="modal-actions">
          <button type="submit" class="action-button">${escapeHtml(t("common.save"))}</button>
          <button type="button" class="ghost-button" data-action="close-modal">${escapeHtml(t("common.cancel"))}</button>
        </div>
      </form>
    `);
  }

  async function submitBoxForm(form) {
    const data = new FormData(form);
    const boxId = String(data.get("boxId") || "");
    const code = String(data.get("code") || "").trim();
    const existingWithCode = await db.boxes.where("code").equals(code).first();
    if (existingWithCode && existingWithCode.id !== boxId) {
      const suggestion = await suggestNextBoxCode(code);
      window.alert(tf("boxes.codeConflict", { code: suggestion }));
      const codeInput = form.querySelector("[name='code']");
      if (codeInput instanceof HTMLInputElement) {
        codeInput.value = suggestion;
        codeInput.focus();
        codeInput.select();
      }
      return;
    }
    await db.boxes.put({
      id: boxId,
      code,
      name: String(data.get("name") || "").trim(),
      notes: String(data.get("notes") || "").trim(),
      createdAt: new Date().toISOString()
    });
    closeModal();
    showToast(t("toast.saved"));
    window.location.hash = `#/boxes/${encodeURIComponent(boxId)}`;
  }

  async function deleteBox(boxId) {
    if (!boxId || !window.confirm(t("boxes.deleteConfirm"))) return;
    const books = await db.books.where("boxId").equals(boxId).toArray();
    await db.transaction("rw", db.boxes, db.books, async () => {
      await db.boxes.delete(boxId);
      for (const book of books) {
        book.boxId = "";
        book.updatedAt = new Date().toISOString();
        await db.books.put(book);
      }
    });
    showToast(t("toast.deleted"));
    if (appState.route.name === "box-detail") {
      window.location.hash = "#/boxes";
    } else {
      await renderRoute();
    }
  }

  async function submitBookForm(form, saveAndAddNext = false) {
    if (!form) return;
    const data = new FormData(form);
    const existing = data.get("bookId") ? await db.books.get(String(data.get("bookId"))) : null;
    const book = {
      id: String(data.get("bookId") || makeId("book")),
      createdAt: existing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      localCode: String(data.get("localCode") || "").trim(),
      title: String(data.get("title") || "").trim(),
      authors: String(data.get("authors") || "").trim(),
      publisher: String(data.get("publisher") || "").trim(),
      publishedYear: String(data.get("publishedYear") || "").trim(),
      isbn10: normalizeIsbn(String(data.get("isbn10") || "")),
      isbn13: normalizeIsbn(String(data.get("isbn13") || "")),
      language: String(data.get("language") || "").trim(),
      description: String(data.get("description") || "").trim(),
      source: String(data.get("source") || "Manual").trim() || "Manual",
      sourceUrl: String(data.get("sourceUrl") || "").trim(),
      metadataProvider: String(data.get("metadataProvider") || existing?.metadataProvider || "manual").trim() || "manual",
      metadataProviderId: String(data.get("metadataProviderId") || existing?.metadataProviderId || "").trim(),
      metadataFetchedAt: String(data.get("metadataFetchedAt") || existing?.metadataFetchedAt || "").trim(),
      thumbnailUrl: String(data.get("thumbnailUrl") || existing?.thumbnailUrl || "").trim(),
      smallThumbnailUrl: String(data.get("smallThumbnailUrl") || existing?.smallThumbnailUrl || "").trim(),
      status: String(data.get("status") || "missing-metadata"),
      notes: String(data.get("notes") || "").trim(),
      boxId: String(data.get("boxId") || "")
    };
    await db.books.put(book);
    appState.transientBookDraft = null;
    showToast(t("toast.saved"));
    if (saveAndAddNext) {
      window.location.hash = `#/books/new?boxId=${encodeURIComponent(book.boxId || "")}`;
      return;
    }
    window.location.hash = `#/books/${encodeURIComponent(book.id)}`;
  }

  async function openMoveBookModal(bookId) {
    const [book, boxes] = await Promise.all([db.books.get(bookId), db.boxes.toArray()]);
    if (!book) return;
    openModal(`
      <div class="modal-header"><h2 class="modal-title">${escapeHtml(t("book.move"))}</h2></div>
      <div class="screen-stack">
        <p>${escapeHtml(book.title || book.localCode)}</p>
        <div class="screen-stack">
          ${boxes.map((box) => `<button type="button" class="small-button" data-action="confirm-move-book" data-book-id="${book.id}" data-target-box-id="${box.id}">${escapeHtml(box.code)} - ${escapeHtml(box.name)}</button>`).join("")}
        </div>
        <div class="modal-actions"><button type="button" class="ghost-button" data-action="close-modal">${escapeHtml(t("common.cancel"))}</button></div>
      </div>
    `);
    modalRoot.querySelectorAll("[data-action='confirm-move-book']").forEach((button) => {
      button.addEventListener("click", async () => {
        book.boxId = button.dataset.targetBoxId;
        book.updatedAt = new Date().toISOString();
        await db.books.put(book);
        closeModal();
        showToast(t("toast.bookMoved"));
        await renderRoute();
      });
    });
  }

  async function triggerPhotoInput(bookId, photoType, captureCamera) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    if (captureCamera) input.setAttribute("capture", "environment");
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      const actualBookId = bookId === "new" ? String(document.querySelector("form[data-form='book'] [name='bookId']").value || makeId("book")) : bookId;
      const form = document.querySelector("form[data-form='book']");
      if (form) {
        form.querySelector("[name='bookId']").value = actualBookId;
      }
      if (!(await db.books.get(actualBookId)) && form) {
        const payload = new FormData(form);
        await db.books.put({
          id: actualBookId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          localCode: String(payload.get("localCode") || "").trim(),
          title: String(payload.get("title") || "").trim(),
          authors: String(payload.get("authors") || "").trim(),
          publisher: String(payload.get("publisher") || "").trim(),
          publishedYear: String(payload.get("publishedYear") || "").trim(),
          isbn10: normalizeIsbn(String(payload.get("isbn10") || "")),
          isbn13: normalizeIsbn(String(payload.get("isbn13") || "")),
          language: String(payload.get("language") || "").trim(),
          description: String(payload.get("description") || "").trim(),
          source: String(payload.get("source") || "Manual") || "Manual",
          sourceUrl: String(payload.get("sourceUrl") || ""),
          metadataProvider: String(payload.get("metadataProvider") || "manual") || "manual",
          metadataProviderId: String(payload.get("metadataProviderId") || ""),
          metadataFetchedAt: String(payload.get("metadataFetchedAt") || ""),
          thumbnailUrl: String(payload.get("thumbnailUrl") || ""),
          smallThumbnailUrl: String(payload.get("smallThumbnailUrl") || ""),
          status: String(payload.get("status") || "missing-metadata"),
          notes: String(payload.get("notes") || ""),
          boxId: String(payload.get("boxId") || "")
        });
      }

      const processed = await processImageFile(file);
      const existingPhotos = await db.photos.where({ bookId: actualBookId, type: photoType }).toArray();
      for (const existing of existingPhotos) {
        await db.photos.delete(existing.id);
      }
      await db.photos.put({
        id: makeId("photo"),
        bookId: actualBookId,
        type: photoType,
        blob: processed.blob,
        mimeType: processed.mimeType,
        fileName: `${photoType}.${processed.extension}`,
        width: processed.width,
        height: processed.height,
        createdAt: new Date().toISOString(),
        sortOrder: PHOTO_TYPES.findIndex((item) => item.key === photoType)
      });
      showToast(t("toast.photoAdded"));
      await renderRoute();
    });
    input.click();
  }

  async function removePhoto(photoId) {
    const photo = await db.photos.get(photoId);
    if (!photo) return;
    if (appState.photoUrlCache.has(photo.id)) {
      URL.revokeObjectURL(appState.photoUrlCache.get(photo.id));
      appState.photoUrlCache.delete(photo.id);
    }
    await db.photos.delete(photoId);
    showToast(t("toast.deleted"));
    await renderRoute();
  }

  async function lookupBookFromCurrentForm(options = {}) {
    const form = document.querySelector("form[data-form='book']");
    if (!form) return;
    const isbnInput = form.querySelector("[name='isbn13']").value || form.querySelector("[name='isbn10']").value;
    const isbn = normalizeIsbn(isbnInput);
    if (!isbn) {
      showToast(t("lookup.noIsbn"));
      return;
    }
    if (!navigator.onLine) {
      showToast(t("lookup.onlineOnly"));
      return;
    }
    const result = await lookupMetadataByIsbn(isbn, options);
    if (result.outcome !== "found") {
      showToast(getLookupMessage(result));
      return;
    }
    applyLookupResultToForm(form, result.metadata);
    persistCurrentBookDraft();
    showToast(t("lookup.found"));
    await renderRoute();
    revealBookFormStart();
  }

  async function lookupMetadataByIsbn(isbn, options = {}) {
    const normalizedIsbn = normalizeIsbn(isbn);
    const validation = validateIsbn(normalizedIsbn);
    if (!validation.valid) {
      return { outcome: "invalid", normalizedIsbn };
    }

    const canonicalIsbn = validation.isbn13 || validation.isbn10;
    if (options.forceRefresh) {
      await clearCachedLookupResult(canonicalIsbn);
    }
    const cached = await getCachedLookupResult(canonicalIsbn);
    if (cached) {
      return cached;
    }

    const openLibraryResult = await fetchOpenLibraryMetadata(canonicalIsbn);
    if (openLibraryResult.outcome === "found" && hasUsefulMetadata(openLibraryResult.metadata)) {
      const payload = { outcome: "found", metadata: openLibraryResult.metadata };
      await putCachedLookupResult(canonicalIsbn, payload, LOOKUP_SUCCESS_TTL_MS);
      return payload;
    }

    const letBooksResult = await fetchLetBooksMetadata(canonicalIsbn);
    if (letBooksResult.outcome === "found") {
      const payload = { outcome: "found", metadata: letBooksResult.metadata };
      await putCachedLookupResult(canonicalIsbn, payload, LOOKUP_SUCCESS_TTL_MS);
      return payload;
    }

    if (letBooksResult.outcome === "not_found") {
      const payload = { outcome: "not_found", normalizedIsbn: canonicalIsbn };
      await putCachedLookupResult(canonicalIsbn, payload, LOOKUP_NEGATIVE_TTL_MS);
      return payload;
    }

    if (openLibraryResult.outcome === "not_found") {
      return letBooksResult.outcome === "skipped" ? { outcome: "not_found", normalizedIsbn: canonicalIsbn } : letBooksResult;
    }

    return letBooksResult.outcome === "skipped" ? { outcome: "not_found", normalizedIsbn: canonicalIsbn } : letBooksResult;
  }

  async function fetchOpenLibraryMetadata(isbn) {
    const response = await fetch(`https://openlibrary.org/isbn/${encodeURIComponent(isbn)}.json`).catch(() => null);
    if (!response) return { outcome: "provider_unavailable" };
    if (response.status === 404) return { outcome: "not_found" };
    if (!response.ok) return { outcome: "provider_unavailable" };
    const data = await response.json();
    const authors = Array.isArray(data.authors) ? await Promise.all(data.authors.slice(0, 3).map(async (authorRef) => {
      if (!authorRef?.key) return null;
      const authorResponse = await fetch(`https://openlibrary.org${authorRef.key}.json`).catch(() => null);
      if (!authorResponse || !authorResponse.ok) return null;
      const authorData = await authorResponse.json();
      return authorData.name;
    })).then((names) => names.filter(Boolean).join(", ")) : "";
    const normalized = normalizeMetadataResult({
      provider: "open-library",
      providerLabel: "Open Library",
      isbn,
      isbn10: normalizeIsbn(Array.isArray(data.isbn_10) ? data.isbn_10[0] : ""),
      isbn13: normalizeIsbn(Array.isArray(data.isbn_13) ? data.isbn_13[0] : isbn),
      title: data.title || "",
      subtitle: data.subtitle || "",
      authors: authors ? authors.split(", ") : [],
      publisher: Array.isArray(data.publishers) ? data.publishers.join(", ") : "",
      publishedDate: data.publish_date || "",
      publishedYear: data.publish_date ? extractYear(data.publish_date) : "",
      description: typeof data.description === "string" ? data.description : data.description?.value || "",
      language: data.languages?.[0]?.key?.split("/").pop() || "",
      categories: Array.isArray(data.subjects) ? data.subjects.slice(0, 5) : [],
      thumbnailUrl: `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(isbn)}-M.jpg?default=false`,
      smallThumbnailUrl: `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(isbn)}-S.jpg?default=false`,
      infoUrl: `https://openlibrary.org/isbn/${encodeURIComponent(isbn)}`,
      fetchedAt: new Date().toISOString(),
      rawAvailable: false
    });
    return { outcome: "found", metadata: normalized };
  }

  async function fetchLetBooksMetadata(isbn) {
    const baseUrl = getConfiguredMetadataApiBaseUrl();
    if (!isAllowedMetadataApiBaseUrl(baseUrl)) {
      return { outcome: "skipped" };
    }

    const response = await fetch(`${baseUrl}/isbn/${encodeURIComponent(isbn)}`).catch(() => null);
    if (!response) return { outcome: "provider_unavailable" };
    if (response.status === 400) return { outcome: "invalid", normalizedIsbn: isbn };
    if (response.status === 429) return { outcome: "rate_limited" };
    if ([502, 503, 504].includes(response.status)) return { outcome: "provider_unavailable" };
    if (!response.ok) return { outcome: "provider_unavailable" };

    const data = await response.json();
    if (!data?.found) {
      return { outcome: "not_found", normalizedIsbn: isbn };
    }

    return {
      outcome: "found",
      metadata: normalizeMetadataResult({
        ...data,
        providerLabel: "Let Books metadata API"
      })
    };
  }

  function findIndustryIdentifier(list, type) {
    return (list || []).find((item) => item.type === type)?.identifier || "";
  }

  function normalizeMetadataResult(data) {
    const authorsList = Array.isArray(data.authors) ? data.authors.filter(Boolean).map((author) => String(author).trim()).filter(Boolean) : String(data.authors || "").split(",").map((author) => author.trim()).filter(Boolean);
    const isbn = normalizeIsbn(data.isbn || data.isbn13 || data.isbn10 || "");
    const isbn10 = normalizeIsbn(data.isbn10 || "");
    const isbn13 = normalizeIsbn(data.isbn13 || "");
    return {
      found: true,
      provider: String(data.provider || "unknown").trim() || "unknown",
      providerLabel: String(data.providerLabel || "Let Books metadata API").trim() || "Let Books metadata API",
      providerId: String(data.providerId || "").trim(),
      isbn,
      isbn10,
      isbn13,
      title: String(data.title || "").trim(),
      subtitle: String(data.subtitle || "").trim(),
      authors: authorsList.join(", "),
      authorsList,
      publisher: String(data.publisher || "").trim(),
      publishedDate: String(data.publishedDate || "").trim(),
      publishedYear: String(data.publishedYear || extractYear(data.publishedDate || "")).trim(),
      description: String(data.description || "").trim(),
      pageCount: Number.isFinite(Number(data.pageCount)) ? Number(data.pageCount) : null,
      language: String(data.language || "").trim(),
      categories: Array.isArray(data.categories) ? data.categories.map((item) => String(item).trim()).filter(Boolean) : [],
      thumbnailUrl: normalizeExternalUrl(data.thumbnailUrl || ""),
      smallThumbnailUrl: normalizeExternalUrl(data.smallThumbnailUrl || ""),
      infoUrl: String(data.infoUrl || data.sourceUrl || "").trim(),
      fetchedAt: String(data.fetchedAt || new Date().toISOString()).trim(),
      rawAvailable: Boolean(data.rawAvailable),
      source: String(data.providerLabel || "Let Books metadata API").trim() || "Let Books metadata API",
      sourceUrl: String(data.infoUrl || data.sourceUrl || "").trim()
    };
  }

  function hasUsefulMetadata(metadata) {
    return Boolean(metadata && (metadata.title || metadata.authors || metadata.publisher || metadata.publishedYear || metadata.description));
  }

  function applyLookupResultToForm(form, metadata) {
    if (!(form instanceof HTMLFormElement) || !metadata) return;

    const overwriteFields = collectLookupOverwriteFields(form, metadata);
    const allowOverwrite = !overwriteFields.length || window.confirm(buildLookupOverwriteMessage(overwriteFields));

    setFormValueFromLookup(form, "title", metadata.title || "", allowOverwrite);
    setFormValueFromLookup(form, "authors", metadata.authors || "", allowOverwrite);
    setFormValueFromLookup(form, "publisher", metadata.publisher || "", allowOverwrite);
    setFormValueFromLookup(form, "publishedYear", metadata.publishedYear || "", allowOverwrite);
    setFormValueFromLookup(form, "isbn10", metadata.isbn10 || "", allowOverwrite);
    setFormValueFromLookup(form, "isbn13", metadata.isbn13 || "", allowOverwrite);
    setFormValueFromLookup(form, "language", metadata.language || "", allowOverwrite);
    setFormValueFromLookup(form, "description", metadata.description || "", allowOverwrite);
    setFormValueFromLookup(form, "source", metadata.source || metadata.providerLabel || "Let Books metadata API", allowOverwrite, {
      skipConflictValue: t("book.sourceManual")
    });
    setFormValueFromLookup(form, "sourceUrl", metadata.sourceUrl || metadata.infoUrl || "", allowOverwrite);

    setHiddenFormValue(form, "metadataProvider", metadata.provider || "unknown");
    setHiddenFormValue(form, "metadataProviderId", metadata.providerId || "");
    setHiddenFormValue(form, "metadataFetchedAt", metadata.fetchedAt || new Date().toISOString());
    setHiddenFormValue(form, "thumbnailUrl", metadata.thumbnailUrl || "");
    setHiddenFormValue(form, "smallThumbnailUrl", metadata.smallThumbnailUrl || "");
  }

  function collectLookupOverwriteFields(form, metadata) {
    const fields = [
      ["title", metadata.title || "", t("book.title")],
      ["authors", metadata.authors || "", t("book.authors")],
      ["publisher", metadata.publisher || "", t("book.publisher")],
      ["publishedYear", metadata.publishedYear || "", t("book.year")],
      ["isbn10", metadata.isbn10 || "", t("book.isbn10")],
      ["isbn13", metadata.isbn13 || "", t("book.isbn13")],
      ["language", metadata.language || "", t("book.language")],
      ["description", metadata.description || "", t("book.description")],
      ["source", metadata.source || metadata.providerLabel || "Let Books metadata API", t("book.source"), { skipConflictValue: t("book.sourceManual") }],
      ["sourceUrl", metadata.sourceUrl || metadata.infoUrl || "", t("book.sourceUrl")]
    ];

    return fields
      .filter(([name, nextValue, _label, options]) => formFieldNeedsOverwrite(form, name, nextValue, options))
      .map(([_name, _nextValue, label]) => label);
  }

  function buildLookupOverwriteMessage(labels) {
    const fieldList = labels.map((label) => `- ${label}`).join("\n");
    return tf("lookup.overwriteConfirm", { fields: fieldList });
  }

  function formFieldNeedsOverwrite(form, name, nextValue, options = {}) {
    const field = form.querySelector(`[name='${name}']`);
    if (!field) return false;

    const currentValue = String(field.value || "").trim();
    const incomingValue = String(nextValue || "").trim();
    if (!currentValue || !incomingValue) return false;
    if (options.skipConflictValue && currentValue === options.skipConflictValue) return false;
    return currentValue !== incomingValue;
  }

  function setFormValueFromLookup(form, name, nextValue, allowOverwrite, options = {}) {
    const field = form.querySelector(`[name='${name}']`);
    if (!field) return;

    const currentValue = String(field.value || "").trim();
    const incomingValue = String(nextValue || "").trim();
    if (!incomingValue) return;
    if (!currentValue) {
      field.value = nextValue;
      return;
    }
    if (options.skipConflictValue && currentValue === options.skipConflictValue) {
      field.value = nextValue;
      return;
    }
    if (allowOverwrite && currentValue !== incomingValue) {
      field.value = nextValue;
    }
  }

  function setHiddenFormValue(form, name, value) {
    const field = form.querySelector(`[name='${name}']`);
    if (!field) return;
    field.value = value;
  }

  function revealBookFormStart() {
    const applyScroll = () => {
      const scrollingElement = document.scrollingElement || document.documentElement || document.body;
      window.scrollTo(0, 0);
      if (scrollingElement) {
        scrollingElement.scrollTop = 0;
        if (typeof scrollingElement.scrollTo === "function") {
          scrollingElement.scrollTo(0, 0);
        }
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const titleField = document.querySelector("form[data-form='book'] [name='title']");
      if (titleField instanceof HTMLElement && typeof titleField.focus === "function") {
        titleField.focus({ preventScroll: true });
      }
    };

    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(applyScroll);
      return;
    }

    applyScroll();
  }

  function getLookupMessage(result) {
    if (!result) return t("lookup.notFound");
    if (result.outcome === "invalid") return t("lookup.invalidIsbn");
    if (result.outcome === "rate_limited") return t("lookup.rateLimited");
    if (result.outcome === "provider_unavailable") return t("lookup.providerUnavailable");
    return t("lookup.notFound");
  }

  function buildLookupCacheKey(normalizedIsbn) {
    return `metadata:merged:${LOOKUP_CACHE_VERSION}:isbn:${normalizedIsbn}`;
  }

  async function getCachedLookupResult(normalizedIsbn) {
    const cacheKey = buildLookupCacheKey(normalizedIsbn);
    const cached = await db.lookupCache.where("[key+provider]").equals([cacheKey, LOOKUP_CACHE_PROVIDER]).first();
    if (!cached) return null;
    if (cached.expiresAt && new Date(cached.expiresAt).getTime() <= Date.now()) {
      await db.lookupCache.delete([cacheKey, LOOKUP_CACHE_PROVIDER]).catch(() => {});
      return null;
    }
    return cached.value || null;
  }

  async function putCachedLookupResult(normalizedIsbn, value, ttlMs) {
    const cacheKey = buildLookupCacheKey(normalizedIsbn);
    await db.lookupCache.put({
      key: cacheKey,
      provider: LOOKUP_CACHE_PROVIDER,
      value,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + ttlMs).toISOString()
    });
  }

  async function clearCachedLookupResult(normalizedIsbn) {
    const cacheKey = buildLookupCacheKey(normalizedIsbn);
    await db.lookupCache.delete([cacheKey, LOOKUP_CACHE_PROVIDER]).catch(() => {});
  }

  async function clearLookupCache() {
    await db.lookupCache.clear();
    showToast(t("toast.lookupCacheCleared"));
    await renderRoute();
  }

  function getConfiguredMetadataApiBaseUrl() {
    const fromQuery = new URLSearchParams(window.location.search).get(METADATA_API_QUERY_PARAM) || "";
    const fromWindowConfig = globalThis.LET_BOOKS_CONFIG?.metadataApiBaseUrl || globalThis.LET_BOOKS_METADATA_API_BASE_URL || globalThis.VITE_METADATA_API_BASE_URL || "";
    const fromMeta = document.querySelector(`meta[name='${METADATA_API_META_NAME}']`)?.getAttribute("content") || "";
    const candidate = fromQuery || fromWindowConfig || fromMeta || METADATA_API_DEFAULT_BASE_URL;
    return sanitizeMetadataApiBaseUrl(candidate) || METADATA_API_DEFAULT_BASE_URL;
  }

  function sanitizeMetadataApiBaseUrl(value) {
    try {
      const url = new URL(String(value || "").trim());
      return url.href.replace(/\/$/, "");
    } catch (_) {
      return "";
    }
  }

  function isAllowedMetadataApiBaseUrl(baseUrl) {
    try {
      const url = new URL(baseUrl);
      const apiOrigin = url.origin;
      if (apiOrigin !== METADATA_API_DEFAULT_BASE_URL) {
        return ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
      }
      return OFFICIAL_METADATA_APP_ORIGINS.has(window.location.origin);
    } catch (_) {
      return false;
    }
  }

  async function submitScannerManual(form) {
    const data = new FormData(form);
    await handleScannedValue(String(data.get("manualValue") || "").trim(), String(data.get("mode") || "box"), String(data.get("boxId") || ""));
  }

  async function maybeStartScanner(forceRestart = false) {
    if (!window.Html5Qrcode) return;
    const container = document.getElementById("scanner-view");
    if (!container) return;
    if (appState.route.name !== "scanner") return;
    if (appState.route.query.mode === "manual") return;
    if (appState.scanner.running && !forceRestart) return;
    appState.scanner.sessionToken += 1;
    await stopScanner({ invalidateSession: false });
    const sessionToken = appState.scanner.sessionToken;
    appState.scanner.state = "starting";
    container.innerHTML = "";
    const scannerId = `letbooks-scanner-region-${sessionToken}`;
    container.innerHTML = `<div id="${scannerId}"></div>`;
    const html5QrCode = new Html5Qrcode(scannerId);
    const mode = appState.route.query.mode || "box";
    clearScannerIdleHint();
    clearScannerStatus();
    try {
      await html5QrCode.start(
        buildScannerCameraConfig(),
        buildScannerConfig(mode),
        async (decodedText) => {
          if (appState.scanner.handlingDecode) {
            return;
          }
          clearScannerIdleHint();
          appState.scanner.handlingDecode = true;
          try {
            await handleScannedValue(decodedText, mode, appState.route.query.boxId || "");
          } finally {
            window.setTimeout(() => {
              appState.scanner.handlingDecode = false;
            }, 900);
          }
        }
      );
      if (sessionToken !== appState.scanner.sessionToken || appState.route.name !== "scanner") {
        try {
          await html5QrCode.stop();
        } catch (_) {
          // Ignore stop errors for a stale scanner start.
        }
        try {
          await html5QrCode.clear();
        } catch (_) {
          // Ignore clear errors for a stale scanner start.
        }
        return;
      }
      appState.scanner.instance = html5QrCode;
      appState.scanner.state = "running";
      appState.scanner.running = true;
      appState.scanner.handlingDecode = false;
      appState.scanner.torchOn = false;
      appState.scanner.torchSupported = false;
      appState.scanner.zoomSupported = false;
      appState.scanner.focusMode = "";
      appState.scanner.zoomLevel = 1;
      syncScannerControlAvailability();
      await configureActiveScannerTrack(mode);
      scheduleScannerIdleHint(mode);
    } catch (error) {
      console.warn(error);
      appState.scanner.state = "error";
      clearScannerIdleHint();
      container.innerHTML = `<div class="scanner-empty">${escapeHtml(t("scanner.cameraHelp"))}</div>`;
    }
  }

  async function stopScanner(options = {}) {
    appState.scanner.state = "stopping";
    if (options.invalidateSession !== false) {
      appState.scanner.sessionToken += 1;
    }
    dismissToast("scanner-started");
    if (appState.scanner.instance) {
      try {
        await appState.scanner.instance.stop();
      } catch (_) {
        // Ignore stop errors from stale or partially initialized scanner sessions.
      }
      try {
        await appState.scanner.instance.clear();
      } catch (_) {
        // Ignore clear errors when the scanner view has already been disposed.
      }
    }
    appState.scanner.instance = null;
    appState.scanner.running = false;
    appState.scanner.handlingDecode = false;
    appState.scanner.torchOn = false;
    appState.scanner.torchSupported = false;
    appState.scanner.zoomLevel = 1;
    appState.scanner.zoomSupported = false;
    appState.scanner.focusMode = "";
    appState.scanner.state = "idle";
    clearScannerIdleHint();
    clearScannerStatus();
    cleanupScannerMediaElements();
    syncScannerControlAvailability();
  }

  async function adjustScannerZoom(delta) {
    const track = getActiveScannerVideoTrack();
    if (!track || !canApplyScannerTrackConstraints(track)) return;
    try {
      const capabilities = readScannerTrackCapabilities(track);
      const settings = readScannerTrackSettings(track);
      const zoomRange = getScannerZoomRange(capabilities);
      if (!zoomRange) {
        showToast(t("toast.zoomUnsupported"));
        return;
      }
      const current = Number(settings?.zoom ?? appState.scanner.zoomLevel ?? zoomRange.min);
      const next = clamp(roundToStep(current + delta, zoomRange.step), zoomRange.min, zoomRange.max);
      await track.applyConstraints({ advanced: [{ zoom: next }] });
      appState.scanner.zoomLevel = next;
      showToast(tf("toast.zoomLevel", { value: next.toFixed(2) }));
    } catch (error) {
      console.warn("Scanner zoom failed", error);
    }
  }

  async function toggleScannerTorch() {
    const track = getActiveScannerVideoTrack();
    if (!track || !canApplyScannerTrackConstraints(track)) return;
    try {
      const capabilities = readScannerTrackCapabilities(track);
      if (!capabilities || typeof capabilities.torch === "undefined") {
        showToast(t("toast.torchUnsupported"));
        return;
      }
      const next = !appState.scanner.torchOn;
      await track.applyConstraints({ advanced: [{ torch: next }] });
      appState.scanner.torchOn = next;
      syncScannerControlAvailability();
      showToast(next ? t("toast.torchOn") : t("toast.torchOff"));
    } catch (error) {
      console.warn("Scanner torch failed", error);
    }
  }

  async function configureActiveScannerTrack(mode) {
    const track = getActiveScannerVideoTrack();
    if (!track) {
      debugScannerCapabilities("Active scanner track not available after startup.");
      syncScannerControlAvailability();
      return;
    }

    const capabilities = readScannerTrackCapabilities(track);
    const settings = readScannerTrackSettings(track);
    const canApplyTrackConstraints = canApplyScannerTrackConstraints(track);
    const zoomRange = getScannerZoomRange(capabilities);
    appState.scanner.torchSupported = typeof capabilities?.torch !== "undefined" && canApplyTrackConstraints;
    appState.scanner.zoomSupported = Boolean(zoomRange && canApplyTrackConstraints);
    appState.scanner.zoomLevel = Number(settings?.zoom ?? 1);
    syncScannerControlAvailability();

    if (canApplyTrackConstraints) {
      appState.scanner.focusMode = await applyPreferredFocusMode(track, capabilities, settings);
    } else {
      debugScannerCapabilities("Scanner track constraints are unavailable on this device/browser.");
    }

    if (mode === "isbn" && zoomRange && canApplyTrackConstraints) {
      const safeIdealZoom = clamp(1.5, zoomRange.min, zoomRange.max);
      const currentZoom = Number(settings?.zoom ?? appState.scanner.zoomLevel ?? zoomRange.min);
      if (Number.isFinite(safeIdealZoom) && Math.abs(currentZoom - safeIdealZoom) >= 0.01) {
        try {
          await track.applyConstraints({ advanced: [{ zoom: safeIdealZoom }] });
          appState.scanner.zoomLevel = safeIdealZoom;
        } catch (error) {
          debugScannerCapabilities("Initial scanner zoom preference was not applied.", error);
        }
      }
    }

    appState.scanner.zoomLevel = readCurrentTrackZoomLevel(track);
    syncScannerControlAvailability();
  }

  async function applyPreferredFocusMode(track, capabilities, settings) {
    const supportedModes = Array.isArray(capabilities?.focusMode)
      ? capabilities.focusMode
      : typeof capabilities?.focusMode === "string"
        ? [capabilities.focusMode]
        : [];

    if (!supportedModes.length) {
      debugScannerCapabilities("Scanner focusMode capability is unavailable on this device/browser.");
      return "";
    }

    const focusDistanceRange = getScannerFocusDistanceRange(capabilities);
    const attempts = [
      { mode: "continuous", constraints: { advanced: [{ focusMode: "continuous" }] } },
      { mode: "single-shot", constraints: { advanced: [{ focusMode: "single-shot" }] } }
    ];

    if (focusDistanceRange) {
      const focusDistance = clamp(
        Number(settings?.focusDistance ?? focusDistanceRange.min),
        focusDistanceRange.min,
        focusDistanceRange.max
      );
      attempts.push({
        mode: "manual",
        constraints: { advanced: [{ focusMode: "manual", focusDistance }] }
      });
    }

    for (const attempt of attempts) {
      if (!supportedModes.includes(attempt.mode)) {
        continue;
      }
      try {
        await track.applyConstraints(attempt.constraints);
        return attempt.mode;
      } catch (error) {
        debugScannerCapabilities(`Scanner focus mode '${attempt.mode}' could not be applied.`, error);
      }
    }

    debugScannerCapabilities(`Scanner focus modes were reported but none could be applied: ${supportedModes.join(", ")}`);
    return "";
  }

  function getActiveScannerVideoTrack() {
    const scannerView = document.getElementById("scanner-view");
    const video = scannerView?.querySelector("video");
    const stream = video?.srcObject;
    if (!stream || typeof stream.getVideoTracks !== "function") {
      return null;
    }
    return stream.getVideoTracks().find((track) => track.readyState === "live") || stream.getVideoTracks()[0] || null;
  }

  function readScannerTrackCapabilities(track) {
    try {
      return track?.getCapabilities?.() ?? null;
    } catch (_) {
      return null;
    }
  }

  function readScannerTrackSettings(track) {
    try {
      return track?.getSettings?.() ?? null;
    } catch (_) {
      return null;
    }
  }

  function canApplyScannerTrackConstraints(track) {
    return typeof track?.applyConstraints === "function";
  }

  function readCurrentTrackZoomLevel(track) {
    try {
      const settings = track?.getSettings?.();
      return Number(settings?.zoom ?? appState.scanner.zoomLevel ?? 1);
    } catch (_) {
      return Number(appState.scanner.zoomLevel ?? 1);
    }
  }

  function getScannerZoomRange(capabilities) {
    const zoom = capabilities?.zoom;
    const min = Number(zoom?.min);
    const max = Number(zoom?.max);
    if (!Number.isFinite(min) || !Number.isFinite(max) || max < min) {
      return null;
    }
    const step = Number(zoom?.step);
    return {
      min,
      max,
      step: Number.isFinite(step) && step > 0 ? step : 0.25
    };
  }

  function getScannerFocusDistanceRange(capabilities) {
    const focusDistance = capabilities?.focusDistance;
    const min = Number(focusDistance?.min);
    const max = Number(focusDistance?.max);
    if (!Number.isFinite(min) || !Number.isFinite(max) || max < min) {
      return null;
    }
    return { min, max };
  }

  function syncScannerControlAvailability() {
    document.querySelectorAll('[data-scanner-control="torch"]').forEach((button) => {
      button.hidden = !appState.scanner.torchSupported;
      button.setAttribute("aria-pressed", appState.scanner.torchOn ? "true" : "false");
      button.classList.toggle("is-active", Boolean(appState.scanner.torchOn));
    });
    document.querySelectorAll('[data-scanner-control="zoom"]').forEach((button) => {
      button.hidden = !appState.scanner.zoomSupported;
    });
    document.querySelectorAll('[data-scanner-control="zoom-group"]').forEach((group) => {
      group.hidden = !appState.scanner.zoomSupported;
    });
  }

  function buildScannerCameraConfig() {
    if (appState.scanner.facingMode === "user") {
      return { facingMode: "user" };
    }
    return { facingMode: { ideal: "environment" } };
  }

  function debugScannerCapabilities(message, error) {
    if (!isDevelopmentRuntime()) {
      return;
    }
    if (error) {
      console.debug(`[scanner] ${message}`, error);
      return;
    }
    console.debug(`[scanner] ${message}`);
  }

  function isDevelopmentRuntime() {
    const { hostname, protocol } = window.location;
    return protocol === "file:" || hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
  }

  function buildScannerConfig(mode) {
    const desktopLikeViewport = window.innerWidth >= 900;
    const barcodeFormats = [
      "EAN_13",
      "EAN_8",
      "UPC_A",
      "UPC_E",
      "CODE_128",
      "CODE_39",
      "CODE_93",
      "CODABAR",
      "ITF"
    ];
    const qrFormats = ["QR_CODE"];
    const requestedFormats = mode === "isbn"
      ? barcodeFormats
      : mode === "move"
        ? [...qrFormats, "CODE_128", "EAN_13"]
        : [...qrFormats, ...barcodeFormats];

    const supportedFormats = requestedFormats
      .map((name) => window.Html5QrcodeSupportedFormats?.[name])
      .filter((value) => value !== undefined);

    return {
      fps: mode === "isbn" ? (desktopLikeViewport ? 8 : 10) : 10,
      qrbox: mode === "isbn"
        ? { width: desktopLikeViewport ? 380 : 300, height: desktopLikeViewport ? 180 : 140 }
        : mode === "move"
          ? { width: 260, height: 220 }
          : { width: 240, height: 240 },
      aspectRatio: mode === "isbn" ? 1.7777777778 : 1,
      disableFlip: false,
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true
      },
      formatsToSupport: supportedFormats.length ? supportedFormats : undefined
    };
  }

  function buildScannerOverlayStyle(mode) {
    const { qrbox } = buildScannerConfig(mode);
    const width = Number(qrbox?.width || 240);
    const height = Number(qrbox?.height || 240);
    const lineWidth = mode === "isbn" ? Math.max(140, width - 80) : Math.max(140, width - 60);
    return `--scanner-guide-width:${width}px;--scanner-guide-height:${height}px;--scanner-line-width:${lineWidth}px;`;
  }

  function scheduleScannerIdleHint(mode) {
    clearScannerIdleHint();
    if (mode !== "isbn") {
      return;
    }
    appState.scannerIdleHintTimer = window.setTimeout(() => {
      if (appState.route.name !== "scanner" || appState.route.query.mode !== "isbn" || !appState.scanner.running || appState.scanner.handlingDecode) {
        return;
      }
      setScannerStatus(t("scanner.mode.isbn"), t("scanner.noDetectionHint"));
    }, 4200);
  }

  function clearScannerIdleHint() {
    if (!appState.scannerIdleHintTimer) {
      return;
    }
    window.clearTimeout(appState.scannerIdleHintTimer);
    appState.scannerIdleHintTimer = 0;
  }

  async function handleScannedValue(rawValue, mode, boxId) {
    const value = String(rawValue || "").trim();
    if (!value) return;
    const portableBox = parsePortableBoxPayload(value);
    const localRoute = parseLocalRoutePayload(value);
    const isbn = normalizeIsbn(value);

    if (portableBox) {
      await stopScanner();
      const existing = await db.boxes.where("code").equals(portableBox.box.code).first();
      appState.transientBoxImport = {
        payload: portableBox,
        existingId: existing?.id || ""
      };
      if (existing) {
        openModal(`
          <div class="modal-header"><h2 class="modal-title">${escapeHtml(t("portable.importTitle"))}</h2></div>
          <div class="screen-stack">
            <p>${escapeHtml(t("portable.importBody"))}</p>
            <div class="modal-actions">
              <button type="button" class="action-button" data-action="portable-open-box">${escapeHtml(t("portable.openExisting"))}</button>
              <button type="button" class="ghost-button" data-action="portable-import-box">${escapeHtml(t("portable.importLocal"))}</button>
            </div>
          </div>
        `);
      } else {
        openModal(`
          <div class="modal-header"><h2 class="modal-title">${escapeHtml(t("portable.importTitle"))}</h2></div>
          <div class="screen-stack">
            <p>${escapeHtml(t("portable.importBody"))}</p>
            <div class="modal-actions">
              <button type="button" class="action-button" data-action="portable-import-box">${escapeHtml(t("portable.importLocal"))}</button>
              <button type="button" class="ghost-button" data-action="close-modal">${escapeHtml(t("common.cancel"))}</button>
            </div>
          </div>
        `);
      }
      return;
    }

    if (localRoute?.kind === "box") {
      await stopScanner();
      window.location.hash = `#/boxes/${encodeURIComponent(localRoute.id)}`;
      return;
    }
    if (localRoute?.kind === "book") {
      await stopScanner();
      if (mode === "move" && boxId) {
        const book = await db.books.get(localRoute.id);
        if (book) {
          book.boxId = boxId;
          book.updatedAt = new Date().toISOString();
          await db.books.put(book);
          showToast(t("toast.bookMoved"));
          return;
        }
      }
      window.location.hash = `#/books/${encodeURIComponent(localRoute.id)}`;
      return;
    }

    if ((mode === "isbn" || mode === "move" || mode === "box") && isbn && (isbn.length === 10 || isbn.length === 13)) {
      if (mode === "move") {
        showToast(t("zip.invalid"));
        return;
      }
      console.log(`${t("scanner.detectedIsbn")}:`, isbn);
      await lookupScannedIsbn(isbn, boxId);
      return;
    }

    openModal(`
      <div class="modal-header"><h2 class="modal-title">${escapeHtml(t("scanner.rawPayload"))}</h2></div>
      <div class="screen-stack">
        <pre>${escapeHtml(value)}</pre>
        <div class="modal-actions"><button type="button" class="ghost-button" data-action="close-modal">${escapeHtml(t("common.close"))}</button></div>
      </div>
    `);
  }

  function parsePortableBoxPayload(value) {
    try {
      const payload = JSON.parse(value);
      if (payload?.t === PORTABLE_BOX_QR_TYPE && payload?.c) return payload;
    } catch (_) {}
    return null;
  }

  function parseLocalRoutePayload(value) {
    if (!value.startsWith("letbooks://")) return null;
    const rest = value.replace("letbooks://", "");
    const [kind, id] = rest.split("/");
    if (!kind || !id) return null;
    return { kind, id };
  }

  async function importPortableBox(context) {
    if (!context?.payload?.c) return;
    const existing = await db.boxes.where("code").equals(context.payload.c).first();
    const boxId = existing?.id || context.payload.i || makeId("box");
    await db.boxes.put({
      id: boxId,
      code: context.payload.c,
      name: context.payload.n || context.payload.c,
      notes: "",
      createdAt: existing?.createdAt || new Date().toISOString(),
      portableImported: true
    });
    showToast(t("toast.boxImported"));
    window.location.hash = `#/boxes/${encodeURIComponent(boxId)}`;
  }

  async function openBoxQrModal(boxId) {
    const [box, books] = await Promise.all([db.boxes.get(boxId), db.books.where("boxId").equals(boxId).toArray()]);
    if (!box) return;
    openModal(`
      <div class="modal-header"><h2 class="modal-title">${escapeHtml(t("label.portable"))}</h2></div>
      <div class="label-preview">
        <div id="box-qr-target" class="qr-target"></div>
        <div class="label-meta">
          <strong>${escapeHtml(box.code)}</strong>
          <span>${escapeHtml(box.name)}</span>
          <span>${books.length} ${escapeHtml(t("boxes.bookCount"))}</span>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-button" data-action="close-modal">${escapeHtml(t("common.close"))}</button>
        </div>
      </div>
    `);
    renderQrCode("box-qr-target", buildPortableBoxPayload(box, books));
  }

  async function openBookQrModal(bookId) {
    const book = await db.books.get(bookId);
    if (!book) return;
    openModal(`
      <div class="modal-header"><h2 class="modal-title">${escapeHtml(t("label.bookQr"))}</h2></div>
      <div class="label-preview">
        <div id="book-qr-target" class="qr-target"></div>
        <div class="label-meta">
          <strong>${escapeHtml(book.localCode || book.title)}</strong>
          <span>${escapeHtml(book.title || "")}</span>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-button" data-action="close-modal">${escapeHtml(t("common.close"))}</button>
        </div>
      </div>
    `);
    renderQrCode("book-qr-target", JSON.stringify({ t: PORTABLE_BOOK_QR_TYPE, v: 1, i: book.id, c: book.localCode || "", n: book.title || "" }));
  }

  function buildPortableBoxPayload(box, books) {
    return JSON.stringify({
      t: PORTABLE_BOX_QR_TYPE,
      v: 1,
      i: box.id,
      c: box.code,
      n: box.name || ""
    });
  }

  function getScannerGuideText(mode) {
    if (mode === "isbn") return t("scanner.guideIsbn");
    if (mode === "move") return t("scanner.guideMove");
    return t("scanner.guideQr");
  }

  function getScannerModeShortLabel(mode) {
    if (mode === "isbn") return t("scanner.modeShort.isbn");
    if (mode === "move") return t("scanner.modeShort.move");
    return t("scanner.modeShort.box");
  }

  function renderScannerStatusMarkup() {
    if (!appState.scannerStatus.active) {
      return "";
    }
    return `<div class="scanner-status-card"><span class="scanner-progress-dot" aria-hidden="true"></span><div><strong>${escapeHtml(appState.scannerStatus.title)}</strong>${appState.scannerStatus.hint ? `<p>${escapeHtml(appState.scannerStatus.hint)}</p>` : ""}</div></div>`;
  }

  function setScannerStatus(title, hint = "") {
    appState.scannerStatus = { active: true, title, hint };
    const region = document.getElementById("scanner-status-region");
    if (region) {
      region.innerHTML = renderScannerStatusMarkup();
    }
  }

  function clearScannerStatus() {
    appState.scannerStatus = { active: false, title: "", hint: "" };
    const region = document.getElementById("scanner-status-region");
    if (region) {
      region.innerHTML = "";
    }
  }

  function navigateBackFromScanner() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.hash = "#/dashboard";
  }

  async function uploadScannerImage() {
    const mode = appState.route.query.mode || "box";
    const boxId = appState.route.query.boxId || "";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const tempId = `scanner-upload-${makeId("temp")}`;
        const tempNode = document.createElement("div");
        tempNode.id = tempId;
        tempNode.className = "hidden";
        document.body.appendChild(tempNode);

        const uploader = new Html5Qrcode(tempId);
        const decodedText = await uploader.scanFile(file, true);
        await uploader.clear().catch(() => {});
        tempNode.remove();
        await handleScannedValue(decodedText, mode, boxId);
      } catch (error) {
        console.warn("Scanner image upload failed", error);
        showToast(t("scanner.uploadFailed"));
      }
    });
    input.click();
  }

  function toggleScannerManualPanel() {
    const card = document.querySelector(".scanner-manual-card");
    if (!card) return;
    card.classList.toggle("hidden");
    if (!card.classList.contains("hidden")) {
      const input = card.querySelector("[data-manual-input]");
      if (input) input.focus();
    }
  }

  async function switchScannerCamera() {
    appState.scanner.facingMode = appState.scanner.facingMode === "environment" ? "user" : "environment";
    await maybeStartScanner(true);
  }

  function cleanupScannerMediaElements() {
    const scannerView = document.getElementById("scanner-view");
    if (!scannerView) return;
    scannerView.querySelectorAll("video").forEach((video) => {
      const mediaStream = video.srcObject;
      if (mediaStream && typeof mediaStream.getTracks === "function") {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
      video.pause?.();
      video.srcObject = null;
      video.removeAttribute("src");
    });
  }

  async function lookupScannedIsbn(isbn, boxId) {
    await stopScanner();
    setScannerStatus(t("scanner.lookupProgress"), t("scanner.lookupProgressHint"));

    const book = createEmptyBook(boxId || "");
    const validation = validateIsbn(normalizeIsbn(isbn));
    if (validation.isbn13) {
      book.isbn13 = validation.isbn13;
    }
    if (validation.isbn10) {
      book.isbn10 = validation.isbn10;
    }

    const result = navigator.onLine ? await lookupMetadataByIsbn(isbn) : null;
    if (result?.outcome === "found") {
      const metadata = result.metadata;
      book.title = metadata.title || "";
      book.authors = metadata.authors || "";
      book.publisher = metadata.publisher || "";
      book.publishedYear = metadata.publishedYear || "";
      book.isbn10 = metadata.isbn10 || book.isbn10;
      book.isbn13 = metadata.isbn13 || book.isbn13;
      book.language = metadata.language || "";
      book.description = metadata.description || "";
      book.source = metadata.source || "Manual";
      book.sourceUrl = metadata.sourceUrl || "";
      book.metadataProvider = metadata.provider || "unknown";
      book.metadataProviderId = metadata.providerId || "";
      book.metadataFetchedAt = metadata.fetchedAt || "";
      book.thumbnailUrl = metadata.thumbnailUrl || "";
      book.smallThumbnailUrl = metadata.smallThumbnailUrl || "";
      book.status = "ready";
    }

    await db.books.put(book);

    clearScannerStatus();
    showToast(result?.outcome === "found" ? t("lookup.found") : getLookupMessage(result));
    window.location.hash = `#/books/${encodeURIComponent(book.id)}`;
  }

  function renderQrCode(targetId, text) {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.innerHTML = "";
    // eslint-disable-next-line no-new
    new QRCode(target, {
      text,
      width: 220,
      height: 220,
      colorDark: "#0f5b45",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
  }

  async function exportExcelWorkbook() {
    const [boxes, books] = await Promise.all([db.boxes.toArray(), db.books.toArray()]);
    const boxMap = new Map(boxes.map((box) => [box.id, box]));
    const rows = books.map((book) => ({
      ItemId: book.id,
      BoxCode: boxMap.get(book.boxId)?.code || "",
      BoxName: boxMap.get(book.boxId)?.name || "",
      Title: book.title || "",
      Authors: book.authors || "",
      Publisher: book.publisher || "",
      Year: book.publishedYear || "",
      ISBN10: book.isbn10 || "",
      ISBN13: book.isbn13 || "",
      Language: book.language || "",
      Description: book.description || "",
      Source: book.source || "",
      SourceUrl: book.sourceUrl || "",
      WantedStatus: book.wantedStatus || "",
      QuantityWanted: book.quantityWanted || "",
      LibraryComment: book.libraryComment || ""
    }));
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(rows);
    const instructions = XLSX.utils.aoa_to_sheet([
      [t("export.instructionsTitle")],
      [t("export.instructionsBody")],
      ["Editable columns: WantedStatus, QuantityWanted, LibraryComment"],
      ["Valid WantedStatus values: Wanted, Maybe, NotWanted"]
    ]);
    sheet["!freeze"] = { xSplit: 0, ySplit: 1 };
    sheet["!autofilter"] = { ref: `A1:P${Math.max(rows.length + 1, 2)}` };
    sheet["!cols"] = [
      { wch: 18 }, { wch: 18 }, { wch: 24 }, { wch: 28 }, { wch: 26 }, { wch: 22 }, { wch: 10 }, { wch: 16 }, { wch: 16 }, { wch: 12 }, { wch: 36 }, { wch: 16 }, { wch: 28 }, { wch: 16 }, { wch: 16 }, { wch: 28 }
    ];
    XLSX.utils.book_append_sheet(workbook, sheet, "Books for Review");
    XLSX.utils.book_append_sheet(workbook, instructions, "Instructions for Libraries");
    XLSX.writeFile(workbook, "let-books-library-export.xlsx");
    showToast(t("toast.excelExported"));
  }

  async function importExcelWorkbook() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".xlsx,.xls";
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
        const validStatuses = new Set(["", "Wanted", "Maybe", "NotWanted"]);
        const books = await db.books.toArray();
        const bookMap = new Map(books.map((book) => [book.id, book]));
        const updates = [];

        for (const row of rows) {
          const itemId = String(row.ItemId || "").trim();
          if (!itemId || !bookMap.has(itemId)) continue;

          const wantedStatus = String(row.WantedStatus || "").trim();
          if (!validStatuses.has(wantedStatus)) continue;

          const book = bookMap.get(itemId);
          updates.push({
            ...book,
            wantedStatus,
            quantityWanted: String(row.QuantityWanted || "").trim(),
            libraryComment: String(row.LibraryComment || "").trim(),
            updatedAt: new Date().toISOString()
          });
        }

        if (!updates.length) {
          showToast(t("toast.excelImportInvalid"));
          return;
        }

        await db.books.bulkPut(updates);
        showToast(t("toast.excelImported"));
        await renderRoute();
      } catch (error) {
        console.warn("Excel import failed", error);
        showToast(t("toast.excelImportInvalid"));
      }
    });
    input.click();
  }

  async function exportDatabaseZip() {
    const zip = new JSZip();
    const [boxes, books, photos, settings, lookupCache] = await Promise.all([
      db.boxes.toArray(),
      db.books.toArray(),
      db.photos.toArray(),
      db.settings.toArray(),
      db.lookupCache.toArray()
    ]);

    const manifest = {
      format: "let-books-archive",
      version: 1,
      exportedAt: new Date().toISOString(),
      app: "Let Books",
      appVersion: APP_VERSION,
      language: appState.language,
      counts: {
        boxes: boxes.length,
        books: books.length,
        photos: photos.length
      }
    };

    zip.file("manifest.json", JSON.stringify(manifest, null, 2));
    zip.file("data/boxes.json", JSON.stringify(boxes, null, 2));
    zip.file("data/books.json", JSON.stringify(books, null, 2));
    zip.file("data/settings.json", JSON.stringify(settings, null, 2));
    zip.file("data/lookup-cache.json", JSON.stringify(lookupCache, null, 2));

    const photoEntries = [];
    for (const photo of photos) {
      const extension = extensionFromMimeType(photo.mimeType);
      const filePath = `images/books/${photo.bookId}/${photo.type}.${extension}`;
      zip.file(filePath, photo.blob);
      photoEntries.push({
        id: photo.id,
        bookId: photo.bookId,
        type: photo.type,
        filePath,
        mimeType: photo.mimeType,
        width: photo.width,
        height: photo.height,
        createdAt: photo.createdAt,
        sortOrder: photo.sortOrder,
        fileName: photo.fileName
      });
    }
    zip.file("data/photos.json", JSON.stringify(photoEntries, null, 2));

    const blob = await zip.generateAsync({ type: "blob" });
    downloadBlob(blob, "let-books-export.zip");
    showToast(t("toast.zipExported"));
  }

  async function triggerZipImport() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".zip,application/zip";
    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        await importDatabaseZip(file);
      } catch (error) {
        console.error(error);
        showToast(t("zip.invalid"));
      }
    });
    input.click();
  }

  async function importDatabaseZip(file) {
    const zip = await JSZip.loadAsync(file);
    const manifest = JSON.parse(await zip.file("manifest.json").async("string"));
    if (manifest.format !== "let-books-archive") {
      throw new Error("Invalid archive format");
    }
    const [boxes, books, settings, lookupCache, photoEntries] = await Promise.all([
      JSON.parse(await zip.file("data/boxes.json").async("string")),
      JSON.parse(await zip.file("data/books.json").async("string")),
      JSON.parse(await zip.file("data/settings.json").async("string")),
      JSON.parse(await zip.file("data/lookup-cache.json").async("string")),
      JSON.parse(await zip.file("data/photos.json").async("string"))
    ]);
    const photos = [];
    for (const entry of photoEntries) {
      const zipEntry = zip.file(entry.filePath);
      if (!zipEntry) continue;
      const blob = await zipEntry.async("blob");
      photos.push({ ...entry, blob });
    }
    await db.transaction("rw", db.boxes, db.books, db.photos, db.settings, db.lookupCache, async () => {
      await db.boxes.clear();
      await db.books.clear();
      await db.photos.clear();
      await db.settings.clear();
      await db.lookupCache.clear();
      await db.boxes.bulkPut(boxes);
      await db.books.bulkPut(books);
      await db.photos.bulkPut(photos.map((photo) => ({
        id: photo.id,
        bookId: photo.bookId,
        type: photo.type,
        blob: photo.blob,
        mimeType: photo.mimeType,
        width: photo.width,
        height: photo.height,
        createdAt: photo.createdAt,
        sortOrder: photo.sortOrder,
        fileName: photo.fileName
      })));
      await db.settings.bulkPut(settings);
      await db.lookupCache.bulkPut(lookupCache);
      await db.settings.put({ key: SETTINGS_KEYS.demoDataPresent, value: false });
      await db.settings.put({ key: SETTINGS_KEYS.userDeclinedDemoSeed, value: false });
    });
    for (const url of appState.photoUrlCache.values()) URL.revokeObjectURL(url);
    appState.photoUrlCache.clear();
    appState.language = (await getSetting(SETTINGS_KEYS.language)) || appState.language;
    await applyGlobalUi();
    showToast(t("toast.zipImported"));
    await renderRoute();
  }

  async function resetDemoData() {
    const demoDataPresent = await hasDemoDataPresent();
    if (!demoDataPresent) {
      showToast(t("demo.clearUnavailable"));
      return;
    }
    if (!window.confirm(t("demo.clearPrompt"))) return;
    await wipeAllData({ preserveLanguage: true });
    await setSetting(SETTINGS_KEYS.demoDataPresent, false);
    await setSetting(SETTINGS_KEYS.userDeclinedDemoSeed, false);
    showToast(t("toast.demoReset"));
    await renderRoute();
  }

  async function wipeAllData(options = {}) {
    const preserveLanguage = options.preserveLanguage !== false;
    await db.transaction("rw", db.boxes, db.books, db.photos, db.lookupCache, db.settings, db.scanSessions, async () => {
      await db.boxes.clear();
      await db.books.clear();
      await db.photos.clear();
      await db.lookupCache.clear();
      await db.scanSessions.clear();
      const language = appState.language;
      await db.settings.clear();
      if (preserveLanguage) {
        await db.settings.put({ key: SETTINGS_KEYS.language, value: language });
      }
    });
    for (const url of appState.photoUrlCache.values()) URL.revokeObjectURL(url);
    appState.photoUrlCache.clear();
    appState.dataSummary = { boxes: 0, books: 0, photos: 0 };
  }

  async function ensureInitialDataState() {
    appState.dataSummary = await getDataSummary();
    if (!isDatabaseEmpty(appState.dataSummary)) {
      return;
    }

    const declined = await getSetting(SETTINGS_KEYS.userDeclinedDemoSeed);
    if (declined) {
      return;
    }

    const shouldSeed = window.confirm(`${t("demo.seedPromptTitle")}\n\n${t("demo.seedPromptBody")}`);
    if (!shouldSeed) {
      await setSetting(SETTINGS_KEYS.userDeclinedDemoSeed, true);
      return;
    }

    await seedDemoData();
    showToast(t("toast.demoSeeded"));
  }

  async function seedDemoData() {
    await wipeAllData({ preserveLanguage: true });

    const boxes = [
      { id: makeId("box"), code: "BASEMENT-S2-B14", name: "Mathematics Shelf Box", notes: t("demo.seedBoxNotes"), createdAt: new Date().toISOString() },
      { id: makeId("box"), code: "OFFICE-CAB-03", name: "Computer Science Cabinet", notes: t("demo.seedBoxNotes"), createdAt: new Date().toISOString() },
      { id: makeId("box"), code: "ATTIC-HIST-01", name: "History and Humanities", notes: t("demo.seedBoxNotes"), createdAt: new Date().toISOString() },
      { id: makeId("box"), code: "GARAGE-TECH-02", name: "Engineering Overflow", notes: t("demo.seedBoxNotes"), createdAt: new Date().toISOString() },
      { id: makeId("box"), code: "HALL-LIB-05", name: "Mixed Library Selection", notes: t("demo.seedBoxNotes"), createdAt: new Date().toISOString() }
    ];

    const books = [
      seedBook(boxes[0].id, "Calculus", "Michael Spivak", "ready", "9780914098911", "en", 1967, "Open Library"),
      seedBook(boxes[0].id, "Linear Algebra", "Gilbert Strang", "ready", "9780961408800", "en", 2016, "Let Books metadata API"),
      seedBook(boxes[1].id, "Clean Code", "Robert C. Martin", "ready", "9780132350884", "en", 2008, "Open Library"),
      seedBook(boxes[1].id, "Introduction to Algorithms", "Cormen, Leiserson, Rivest, Stein", "missing-metadata", "9780262033848", "en", 2009),
      seedBook(boxes[2].id, "Krst pri Savici", "France Preseren", "exported", "", "sl", 1836),
      seedBook(boxes[2].id, "Zgodovina Evrope", "Razlicni avtorji", "missing-metadata", "", "sl", 1998),
      seedBook(boxes[3].id, "Organic Chemistry", "T. W. Graham Solomons", "ready", "9781118133576", "en", 2013, "Let Books metadata API"),
      seedBook(boxes[3].id, "Mechanics of Materials", "Beer, Johnston", "ready", "9780073398235", "en", 2011, "Open Library"),
      seedBook(boxes[4].id, "Na Drini cuprija", "Ivo Andric", "exported", "", "sr", 1945),
      seedBook(boxes[4].id, "Stare Tehniske Knjige", "Razni autori", "missing-metadata", "", "hr", 1986),
      seedBook(boxes[4].id, "Математика 1", "Колектив", "ready", "", "mk", 1992),
      seedBook(boxes[0].id, "Discrete Mathematics", "Kenneth Rosen", "ready", "9780073383095", "en", 2011, "Open Library")
    ];

    const photos = [];
    for (const book of books) {
      photos.push(await seedPhoto(book, "cover", `${book.title}\n${book.authors}`, "cover"));
      photos.push(await seedPhoto(book, "back", `${book.publisher}\n${book.publishedYear}`, "back"));
      if (Math.random() > 0.45) {
        photos.push(await seedPhoto(book, "inside-front", `${book.title}\nOwnership Notes`, "inside-front"));
      }
      if (Math.random() > 0.55) {
        photos.push(await seedPhoto(book, "inside-back", `Reference Pages\n${book.localCode}`, "inside-back"));
      }
    }

    await db.transaction("rw", db.boxes, db.books, db.photos, db.settings, async () => {
      await db.boxes.bulkPut(boxes);
      await db.books.bulkPut(books);
      await db.photos.bulkPut(photos);
      await db.settings.put({ key: SETTINGS_KEYS.demoSeeded, value: true });
      await db.settings.put({ key: SETTINGS_KEYS.demoDataPresent, value: true });
      await db.settings.put({ key: SETTINGS_KEYS.userDeclinedDemoSeed, value: false });
      await db.settings.put({ key: SETTINGS_KEYS.language, value: appState.language });
    });
    appState.dataSummary = { boxes: boxes.length, books: books.length, photos: photos.length };
  }

  async function loadDemoDataFromSettings() {
    const summary = await getDataSummary();
    if (!isDatabaseEmpty(summary)) {
      const confirmed = window.confirm(t("zip.importSummary"));
      if (!confirmed) return;
    }
    await seedDemoData();
    showToast(t("toast.demoSeeded"));
    await renderRoute();
  }

  async function confirmAndWipeAllData() {
    const value = window.prompt(t("demo.fullClearPrompt"), "");
    if (value !== "CLEAR") return;
    await wipeAllData({ preserveLanguage: true });
    await setSetting(SETTINGS_KEYS.demoDataPresent, false);
    await setSetting(SETTINGS_KEYS.userDeclinedDemoSeed, false);
    showToast(t("toast.databaseCleared"));
    await renderRoute();
  }

  async function getDataSummary() {
    const [boxes, books, photos] = await Promise.all([
      db.boxes.count(),
      db.books.count(),
      db.photos.count()
    ]);
    return { boxes, books, photos };
  }

  function isDatabaseEmpty(summary) {
    return !summary.boxes && !summary.books && !summary.photos;
  }

  async function hasDemoDataPresent() {
    return Boolean(await getSetting(SETTINGS_KEYS.demoDataPresent));
  }

  function seedBook(boxId, title, authors, status, isbn13, language, year, source = "Manual") {
    const id = makeId("book");
    return {
      id,
      boxId,
      localCode: `LB-${Math.floor(Math.random() * 9000 + 1000)}`,
      title,
      authors,
      publisher: title.includes("Matemat") ? "Universitetska Zalozba" : "Academic Press",
      publishedYear: year,
      isbn10: "",
      isbn13,
      language,
      description: `${title} is part of the seeded sample collection for Let Books.`,
      source,
      sourceUrl: source === "Open Library" ? `https://openlibrary.org/isbn/${isbn13}` : source === "Let Books metadata API" ? `${METADATA_API_DEFAULT_BASE_URL}/isbn/${isbn13}` : "",
      metadataProvider: source === "Open Library" ? "open-library" : source === "Let Books metadata API" ? "google-books" : "manual",
      metadataProviderId: "",
      metadataFetchedAt: source === "Manual" ? "" : new Date().toISOString(),
      thumbnailUrl: "",
      smallThumbnailUrl: "",
      status,
      notes: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  async function seedPhoto(book, type, text, variant) {
    const generated = await createDemoImageBlob(text, variant);
    return {
      id: makeId("photo"),
      bookId: book.id,
      type,
      blob: generated.blob,
      mimeType: generated.mimeType,
      fileName: `${type}.jpg`,
      width: generated.width,
      height: generated.height,
      createdAt: new Date().toISOString(),
      sortOrder: PHOTO_TYPES.findIndex((item) => item.key === type)
    };
  }

  async function createDemoImageBlob(text, variant) {
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 1300;
    const context = canvas.getContext("2d");
    const palettes = {
      cover: ["#0f5b45", "#143d30"],
      back: ["#efe2c4", "#e4d4b3"],
      "inside-front": ["#fbf7ee", "#f5eddc"],
      "inside-back": ["#f9f3e6", "#efe4cb"]
    };
    const [top, bottom] = palettes[variant] || palettes.back;
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, top);
    gradient.addColorStop(1, bottom);
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = variant === "cover" ? "rgba(255,255,255,0.35)" : "rgba(15,91,69,0.15)";
    context.lineWidth = 4;
    context.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    context.fillStyle = variant === "cover" ? "#fffaf0" : "#15352d";
    context.font = "700 68px Georgia";
    wrapCanvasText(context, text.split("\n")[0] || "Let Books", 80, 210, 740, 84);
    context.font = variant === "cover" ? "500 34px Inter" : "500 30px Inter";
    const extraLines = text.split("\n").slice(1);
    wrapCanvasText(context, extraLines.join("\n") || "Local demo image", 80, 520, 740, 52);

    context.fillStyle = variant === "cover" ? "rgba(255,255,255,0.84)" : "rgba(15,91,69,0.7)";
    context.font = "600 28px Inter";
    context.fillText("Let Books", 80, canvas.height - 110);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.88));
    return { blob, mimeType: "image/jpeg", width: canvas.width, height: canvas.height, extension: "jpg" };
  }

  function wrapCanvasText(context, text, x, y, maxWidth, lineHeight) {
    const lines = String(text || "").split("\n");
    let offsetY = y;
    for (const segment of lines) {
      const words = segment.split(" ");
      let line = "";
      for (const word of words) {
        const trial = line ? `${line} ${word}` : word;
        if (context.measureText(trial).width > maxWidth && line) {
          context.fillText(line, x, offsetY);
          line = word;
          offsetY += lineHeight;
        } else {
          line = trial;
        }
      }
      if (line) {
        context.fillText(line, x, offsetY);
        offsetY += lineHeight;
      }
    }
  }

  async function processImageFile(file) {
    const dataUrl = await fileToDataUrl(file);
    const image = await loadImage(dataUrl);
    const canvas = document.createElement("canvas");
    const maxSize = 1600;
    const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
    canvas.width = Math.round(image.width * scale);
    canvas.height = Math.round(image.height * scale);
    const context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.86));
    return { blob, mimeType: "image/jpeg", width: canvas.width, height: canvas.height, extension: "jpg" };
  }

  function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function makeId(prefix) {
    return `${prefix}-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
  }

  function generateBoxCode() {
    return `BOX-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  }

  async function suggestNextBoxCode(code) {
    const trimmed = String(code || "").trim() || generateBoxCode();
    const match = trimmed.match(/^(.*?)(\d+)$/);
    if (!match) {
      let suffix = 2;
      let candidate = `${trimmed}-${suffix}`;
      while (await db.boxes.where("code").equals(candidate).first()) {
        suffix += 1;
        candidate = `${trimmed}-${suffix}`;
      }
      return candidate;
    }

    const prefix = match[1];
    const current = Number(match[2]);
    const width = match[2].length;
    let next = current + 1;
    let candidate = `${prefix}${String(next).padStart(width, "0")}`;
    while (await db.boxes.where("code").equals(candidate).first()) {
      next += 1;
      candidate = `${prefix}${String(next).padStart(width, "0")}`;
    }
    return candidate;
  }

  function hydrateNewBookDraft(boxId) {
    if (appState.transientBookDraft) {
      return { ...createEmptyBook(boxId), ...appState.transientBookDraft, boxId: appState.transientBookDraft.boxId || boxId };
    }
    return createEmptyBook(boxId);
  }

  function persistCurrentBookDraft() {
    const form = document.querySelector("form[data-form='book']");
    if (!(form instanceof HTMLFormElement)) return;
    const data = new FormData(form);
    appState.transientBookDraft = {
      id: String(data.get("bookId") || makeId("book")),
      localCode: String(data.get("localCode") || "").trim(),
      title: String(data.get("title") || "").trim(),
      authors: String(data.get("authors") || "").trim(),
      publisher: String(data.get("publisher") || "").trim(),
      publishedYear: String(data.get("publishedYear") || "").trim(),
      isbn10: normalizeIsbn(String(data.get("isbn10") || "")),
      isbn13: normalizeIsbn(String(data.get("isbn13") || "")),
      language: String(data.get("language") || "").trim(),
      description: String(data.get("description") || "").trim(),
      source: String(data.get("source") || "Manual").trim() || "Manual",
      sourceUrl: String(data.get("sourceUrl") || "").trim(),
      metadataProvider: String(data.get("metadataProvider") || "manual").trim() || "manual",
      metadataProviderId: String(data.get("metadataProviderId") || "").trim(),
      metadataFetchedAt: String(data.get("metadataFetchedAt") || "").trim(),
      thumbnailUrl: String(data.get("thumbnailUrl") || "").trim(),
      smallThumbnailUrl: String(data.get("smallThumbnailUrl") || "").trim(),
      status: String(data.get("status") || "missing-metadata"),
      notes: String(data.get("notes") || "").trim(),
      boxId: String(data.get("boxId") || "")
    };
  }

  function normalizeIsbn(value) {
    return String(value || "").replace(/[^0-9Xx]/g, "").toUpperCase();
  }

  function validateIsbn(value) {
    const normalized = normalizeIsbn(value);
    if (normalized.length === 10 && isValidIsbn10(normalized)) {
      return {
        valid: true,
        normalized,
        isbn10: normalized,
        isbn13: convertIsbn10ToIsbn13(normalized)
      };
    }

    if (normalized.length === 13 && isValidIsbn13(normalized)) {
      return {
        valid: true,
        normalized,
        isbn10: normalized.startsWith("978") ? convertIsbn13ToIsbn10(normalized) : "",
        isbn13: normalized
      };
    }

    return {
      valid: false,
      normalized,
      isbn10: "",
      isbn13: ""
    };
  }

  function isValidIsbn10(value) {
    if (!/^\d{9}[\dX]$/.test(value)) return false;
    const total = value.split("").reduce((sum, char, index) => sum + ((char === "X" ? 10 : Number(char)) * (10 - index)), 0);
    return total % 11 === 0;
  }

  function isValidIsbn13(value) {
    if (!/^\d{13}$/.test(value)) return false;
    const total = value.slice(0, 12).split("").reduce((sum, char, index) => sum + (Number(char) * (index % 2 === 0 ? 1 : 3)), 0);
    const checkDigit = (10 - (total % 10)) % 10;
    return checkDigit === Number(value[12]);
  }

  function convertIsbn10ToIsbn13(value) {
    if (!isValidIsbn10(value)) return "";
    const base = `978${value.slice(0, 9)}`;
    const total = base.split("").reduce((sum, char, index) => sum + (Number(char) * (index % 2 === 0 ? 1 : 3)), 0);
    const checkDigit = (10 - (total % 10)) % 10;
    return `${base}${checkDigit}`;
  }

  function convertIsbn13ToIsbn10(value) {
    if (!isValidIsbn13(value) || !value.startsWith("978")) return "";
    const base = value.slice(3, 12);
    const total = base.split("").reduce((sum, char, index) => sum + (Number(char) * (10 - index)), 0);
    const remainder = 11 - (total % 11);
    const checkDigit = remainder === 10 ? "X" : remainder === 11 ? "0" : String(remainder);
    return `${base}${checkDigit}`;
  }

  function extractYear(value) {
    const match = String(value || "").match(/(18|19|20)\d{2}/);
    return match ? match[0] : "";
  }

  function extensionFromMimeType(mimeType) {
    if (mimeType === "image/png") return "png";
    if (mimeType === "image/webp") return "webp";
    return "jpg";
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function roundToStep(value, step) {
    if (!step) return value;
    return Math.round(value / step) * step;
  }

  function openModal(content) {
    modalRoot.innerHTML = `<div class="modal-backdrop"><div class="modal-card">${content}</div></div>`;
  }

  function closeModal() {
    modalRoot.innerHTML = "";
  }

  function showToast(message, options = {}) {
    const key = options.key || "";
    if (key) {
      dismissToast(key);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRoot.appendChild(toast);
    const timeoutId = setTimeout(() => {
      toast.remove();
      if (key) {
        appState.activeToasts.delete(key);
      }
    }, 2800);

    if (key) {
      appState.activeToasts.set(key, { element: toast, timeoutId });
    }
  }

  function dismissToast(key) {
    const active = appState.activeToasts.get(key);
    if (!active) return;
    clearTimeout(active.timeoutId);
    active.element.remove();
    appState.activeToasts.delete(key);
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function nextFrame() {
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
  }

  function getStoredSplashLanguage() {
    try {
      const value = window.localStorage.getItem(SPLASH_LANGUAGE_STORAGE_KEY);
      return SUPPORTED_LANGUAGES.includes(value) ? value : "";
    } catch (_) {
      return "";
    }
  }

  function storeSplashLanguage(language) {
    try {
      window.localStorage.setItem(SPLASH_LANGUAGE_STORAGE_KEY, language);
    } catch (_) {
      // Ignore storage failures for splash preference.
    }
  }

  function applyBootSplashLanguage(language) {
    if (!bootSplashSubtitle) return;
    const value = I18N[language]?.["app.splashSubtitle"] || I18N.en?.["app.splashSubtitle"] || "";
    if (!value) {
      bootSplashSubtitle.classList.add("is-pending");
      return;
    }
    bootSplashSubtitle.textContent = value;
    bootSplashSubtitle.classList.remove("is-pending");
  }

  async function getSetting(key) {
    return (await db.settings.get(key))?.value;
  }

  async function setSetting(key, value) {
    await db.settings.put({ key, value });
  }

  function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
