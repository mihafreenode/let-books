#!/usr/bin/env python3

from __future__ import annotations

import argparse
import html
import re
import subprocess
from collections import defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
LOCALES = ["en", "sl", "hr", "bs", "sr-Latn", "sr-Cyrl", "mk", "sq", "de", "it", "fr", "es"]
CONTENT_TYPES = ["blog", "learning", "wiki"]
SITE_BASE = "https://letbooks.org/docs"

LANGUAGE_NAMES = {
    "en": "English",
    "sl": "Slovenščina",
    "hr": "Hrvatski",
    "bs": "Bosanski",
    "sr-Latn": "Srpski (latinica)",
    "sr-Cyrl": "Српски (ћирилица)",
    "mk": "Македонски",
    "sq": "Shqip",
    "de": "Deutsch",
    "it": "Italiano",
    "fr": "Français",
    "es": "Español",
}

LANGUAGE_SWITCH_LABELS = {
    "en": "EN",
    "sl": "SL",
    "hr": "HR",
    "bs": "BS",
    "sr-Latn": "SR",
    "sr-Cyrl": "СР",
    "mk": "МК",
    "sq": "SQ",
    "de": "DE",
    "it": "IT",
    "fr": "FR",
    "es": "ES",
}

CONTENT_LABELS = {
    "en": {"blog": "Blog", "learning": "Learning", "wiki": "Wiki", "docs": "Docs"},
    "sl": {"blog": "Blog", "learning": "Učni vodniki", "wiki": "Wiki", "docs": "Dokumentacija"},
    "hr": {"blog": "Blog", "learning": "Materijali za učenje", "wiki": "Wiki", "docs": "Dokumentacija"},
    "bs": {"blog": "Blog", "learning": "Materijali za učenje", "wiki": "Wiki", "docs": "Dokumentacija"},
    "sr-Latn": {"blog": "Blog", "learning": "Materijali za učenje", "wiki": "Wiki", "docs": "Dokumentacija"},
    "sr-Cyrl": {"blog": "Блог", "learning": "Материјали за учење", "wiki": "Вики", "docs": "Документација"},
    "mk": {"blog": "Блог", "learning": "Материјали за учење", "wiki": "Вики", "docs": "Документација"},
    "sq": {"blog": "Blog", "learning": "Materiale mësimore", "wiki": "Wiki", "docs": "Dokumentim"},
    "de": {"blog": "Blog", "learning": "Lernmaterial", "wiki": "Wiki", "docs": "Doku"},
    "it": {"blog": "Blog", "learning": "Materiale didattico", "wiki": "Wiki", "docs": "Documentazione"},
    "fr": {"blog": "Blog", "learning": "Ressources d'apprentissage", "wiki": "Wiki", "docs": "Documentation"},
    "es": {"blog": "Blog", "learning": "Material de aprendizaje", "wiki": "Wiki", "docs": "Documentación"},
}

OTHER_LANGUAGE_HEADINGS = {
    "en": "Other languages",
    "sl": "Drugi jeziki",
    "hr": "Drugi jezici",
    "bs": "Drugi jezici",
    "sr-Latn": "Drugi jezici",
    "sr-Cyrl": "Други језици",
    "mk": "Други јазици",
    "sq": "Gjuhë të tjera",
    "de": "Andere Sprachen",
    "it": "Altre lingue",
    "fr": "Autres langues",
    "es": "Otros idiomas",
}

RELATED_HEADINGS = {
    "en": {"blog": "Related Articles", "learning": "Related Learning Material", "wiki": "Related Wiki Entries"},
    "sl": {"blog": "Sorodni članki", "learning": "Sorodno učno gradivo", "wiki": "Sorodni wiki vnosi"},
    "hr": {"blog": "Povezani članci", "learning": "Povezani materijali za učenje", "wiki": "Povezani wiki unosi"},
    "bs": {"blog": "Povezani članci", "learning": "Povezani materijali za učenje", "wiki": "Povezani wiki unosi"},
    "sr-Latn": {"blog": "Povezani članci", "learning": "Povezani materijali za učenje", "wiki": "Povezani wiki unosi"},
    "sr-Cyrl": {"blog": "Повезани чланци", "learning": "Повезани материјали за учење", "wiki": "Повезани вики уноси"},
    "mk": {"blog": "Поврзани статии", "learning": "Поврзани материјали за учење", "wiki": "Поврзани вики записи"},
    "sq": {"blog": "Artikuj të ngjashëm", "learning": "Materiale të ngjashme mësimore", "wiki": "Hyrje të ngjashme wiki"},
    "de": {"blog": "Verwandte Artikel", "learning": "Verwandte Lernmaterialien", "wiki": "Verwandte Wiki-Einträge"},
    "it": {"blog": "Articoli correlati", "learning": "Materiali didattici correlati", "wiki": "Voci wiki correlate"},
    "fr": {"blog": "Articles apparentés", "learning": "Ressources d'apprentissage liées", "wiki": "Entrées wiki liées"},
    "es": {"blog": "Artículos relacionados", "learning": "Material didáctico relacionado", "wiki": "Entradas wiki relacionadas"},
}

BROWSE_BY_TOPIC_HEADINGS = {
    "en": "Browse by topic",
    "sl": "Brskaj po temah",
    "hr": "Pregledaj po temama",
    "bs": "Pregledaj po temama",
    "sr-Latn": "Pregledaj po temama",
    "sr-Cyrl": "Прегледај по темама",
    "mk": "Прелистај по теми",
    "sq": "Shfleto sipas temës",
    "de": "Nach Themen durchsuchen",
    "it": "Sfoglia per argomento",
    "fr": "Parcourir par sujet",
    "es": "Explorar por tema",
}

RECENT_HEADINGS = {
    "en": {"blog": "Recent Articles", "learning": "Recent Learning Material", "wiki": "Recent Wiki Entries", "overview": "Latest from Let Books"},
    "sl": {"blog": "Najnovejši članki", "learning": "Najnovejše učno gradivo", "wiki": "Najnovejši wiki vnosi", "overview": "Najnovejše vsebine"},
    "hr": {"blog": "Nedavni članci", "learning": "Nedavni materijali za učenje", "wiki": "Nedavni wiki unosi", "overview": "Najnoviji sadržaj"},
    "bs": {"blog": "Nedavni članci", "learning": "Nedavni materijali za učenje", "wiki": "Nedavni wiki unosi", "overview": "Najnoviji sadržaji"},
    "sr-Latn": {"blog": "Nedavni članci", "learning": "Nedavni materijali za učenje", "wiki": "Nedavni viki unosi", "overview": "Najnoviji sadržaji"},
    "sr-Cyrl": {"blog": "Недавни чланци", "learning": "Недавни материјали за учење", "wiki": "Недавни вики уноси", "overview": "Најновији садржаји"},
    "mk": {"blog": "Неодамнешни статии", "learning": "Неодамнешни материјали за учење", "wiki": "Неодамнешни вики записи", "overview": "Најнови содржини"},
    "sq": {"blog": "Artikujt e fundit", "learning": "Materialet e fundit mësimore", "wiki": "Hyrjet e fundit wiki", "overview": "Përmbajtja më e re"},
    "de": {"blog": "Neueste Artikel", "learning": "Neueste Lernmaterialien", "wiki": "Neueste Wiki-Einträge", "overview": "Neues von Let Books"},
    "it": {"blog": "Articoli recenti", "learning": "Materiali didattici recenti", "wiki": "Voci wiki recenti", "overview": "Novità da Let Books"},
    "fr": {"blog": "Articles récents", "learning": "Ressources d'apprentissage récentes", "wiki": "Entrées wiki récentes", "overview": "Nouveautés Let Books"},
    "es": {"blog": "Artículos recientes", "learning": "Material de aprendizaje reciente", "wiki": "Entradas wiki recientes", "overview": "Último de Let Books"},
}

RECENT_DESCRIPTIONS = {
    "en": {"overview": "Explore a few concrete entry points across blog articles, learning material, and wiki pages.", "homepage": "Recent writing and reference material from across the Let Books knowledge base."},
    "sl": {"overview": "Iz bloga, učnega gradiva in wiki strani izberite nekaj konkretnih vstopnih točk.", "homepage": "Nedavna besedila in referenčne strani iz širše baze znanja Let Books."},
    "hr": {"overview": "Odaberite nekoliko konkretnih ulaznih točaka iz bloga, materijala za učenje i wiki stranica.", "homepage": "Nedavni tekstovi i referentni materijali iz baze znanja Let Books."},
    "bs": {"overview": "Odaberite nekoliko konkretnih ulaznih tačaka iz bloga, materijala za učenje i wiki stranica.", "homepage": "Nedavni tekstovi i referentni materijali iz baze znanja Let Books."},
    "sr-Latn": {"overview": "Izaberite nekoliko konkretnih ulaznih tačaka iz bloga, materijala za učenje i viki stranica.", "homepage": "Nedavni tekstovi i referentni materijali iz baze znanja Let Books."},
    "sr-Cyrl": {"overview": "Изаберите неколико конкретних улазних тачака из блога, материјала за учење и вики страница.", "homepage": "Недавни текстови и референтни материјали из базе знања Let Books."},
    "mk": {"overview": "Изберете неколку конкретни почетни точки од блогот, материјалите за учење и вики страниците.", "homepage": "Неодамнешни текстови и референтни материјали од базата на знаење Let Books."},
    "sq": {"overview": "Zgjidhni disa pika konkrete hyrëse nga blogu, materialet mësimore dhe faqet wiki.", "homepage": "Shkrime dhe materiale referuese të fundit nga baza e dijes Let Books."},
    "de": {"overview": "Ein paar konkrete Einstiege aus Blog, Lernmaterial und Wiki helfen beim schnellen Einstieg.", "homepage": "Aktuelle Texte und Referenzmaterialien aus der Let Books Wissensbasis."},
    "it": {"overview": "Scegli alcuni punti di ingresso concreti tra blog, materiale didattico e pagine wiki.", "homepage": "Testi recenti e materiali di riferimento dalla base di conoscenza Let Books."},
    "fr": {"overview": "Choisissez quelques points d'entrée concrets parmi le blog, les ressources d'apprentissage et le wiki.", "homepage": "Textes récents et contenus de référence issus de la base de connaissances Let Books."},
    "es": {"overview": "Elige algunos puntos de entrada concretos del blog, el material de aprendizaje y las páginas wiki.", "homepage": "Textos recientes y material de referencia de la base de conocimiento de Let Books."},
}

CONTENT_TYPE_SWITCHER_LABELS = {
    "en": "Content type",
    "sl": "Vrsta vsebine",
    "hr": "Vrsta sadržaja",
    "bs": "Vrsta sadržaja",
    "sr-Latn": "Vrsta sadržaja",
    "sr-Cyrl": "Врста садржаја",
    "mk": "Вид на содржина",
    "sq": "Lloji i përmbajtjes",
    "de": "Inhaltstyp",
    "it": "Tipo di contenuto",
    "fr": "Type de contenu",
    "es": "Tipo de contenido",
}

TOPICS_LABELS = {
    "en": "Topics:",
    "sl": "Teme:",
    "hr": "Teme:",
    "bs": "Teme:",
    "sr-Latn": "Teme:",
    "sr-Cyrl": "Теме:",
    "mk": "Теми:",
    "sq": "Tema:",
    "de": "Themen:",
    "it": "Temi:",
    "fr": "Sujets :",
    "es": "Temas:",
}

TOPIC_LABELS = {
    "en": {
        "ai-assisted-delivery": "AI Delivery",
        "book-donation": "Book Donation",
        "ci-cd": "CI/CD",
        "demo-alignment": "Demo Alignment",
        "documentation": "Documentation",
        "implementation-planning": "Implementation Planning",
        "isbn-metadata": "ISBN & Metadata",
        "let-books": "Let Books",
        "library-systems": "Library Systems",
        "product-quality": "Product Quality",
        "product-review": "Product Review",
        "product-specification": "Product Specification",
        "project-management": "Project Management",
        "spec-driven-development": "Spec-Driven Development",
        "spec-writing": "Spec Writing",
        "validation": "Validation",
        "related": "Related",
        "accessibility": "Accessibility",
        "ai-assisted-translation": "AI-Assisted Translation",
        "automation": "Automation",
        "continuous-localization": "Continuous Localization",
        "cultural-inclusion": "Cultural Inclusion",
        "digital-inclusion": "Digital Inclusion",
        "diagrams": "Diagrams",
        "education": "Education",
        "engineering-systems": "Engineering Systems",
        "governance": "Governance",
        "hybrid-review-models": "Hybrid Review Models",
        "knowledge-preservation": "Knowledge Preservation",
        "language-rights": "Language Rights",
        "localization": "Localization",
        "localized-alt-text": "Localized Alt Text",
        "mother-tongue-learning": "Mother-Tongue Learning",
        "multilingual-governance": "Multilingual Governance",
        "open-standards": "Open Standards",
        "plain-language": "Plain Language",
        "public-interest-technology": "Public-Interest Technology",
        "public-sector-software": "Public-Sector Software",
        "qa": "QA",
        "reading-comprehension": "Reading Comprehension",
        "screen-readers": "Screen Readers",
        "smaller-languages": "Smaller Languages",
        "sustainability": "Sustainability",
        "terminology": "Terminology",
        "translation-quality": "Translation Quality",
        "unicode": "Unicode",
    },
    "sl": {
        "localization": "Lokalizacija",
        "engineering-systems": "Inženirski sistemi",
        "governance": "Upravljanje",
        "continuous-localization": "Neprekinjena lokalizacija",
        "digital-inclusion": "Digitalna vključenost",
        "language-rights": "Jezikovne pravice",
        "smaller-languages": "Manjši jeziki",
    },
    "hr": {
        "localization": "Lokalizacija",
        "engineering-systems": "Inženjerski sustavi",
        "governance": "Upravljanje",
        "continuous-localization": "Kontinuirana lokalizacija",
        "digital-inclusion": "Digitalna uključenost",
        "language-rights": "Jezična prava",
        "smaller-languages": "Manji jezici",
    },
    "bs": {
        "localization": "Lokalizacija",
        "engineering-systems": "Inženjerski sistemi",
        "governance": "Upravljanje",
        "continuous-localization": "Kontinuirana lokalizacija",
        "digital-inclusion": "Digitalna uključenost",
        "language-rights": "Jezička prava",
        "smaller-languages": "Manji jezici",
    },
    "sr-Latn": {
        "localization": "Lokalizacija",
        "engineering-systems": "Inženjerski sistemi",
        "governance": "Upravljanje",
        "continuous-localization": "Kontinuirana lokalizacija",
        "digital-inclusion": "Digitalna uključenost",
        "language-rights": "Jezička prava",
        "smaller-languages": "Manji jezici",
    },
    "sr-Cyrl": {
        "localization": "Локализација",
        "engineering-systems": "Инжењерски системи",
        "governance": "Управљање",
        "continuous-localization": "Континуирана локализација",
        "digital-inclusion": "Дигитална укљученост",
        "language-rights": "Језичка права",
        "smaller-languages": "Мањи језици",
    },
    "mk": {
        "localization": "Локализација",
        "engineering-systems": "Инженерски системи",
        "governance": "Управување",
        "continuous-localization": "Континуирана локализација",
        "digital-inclusion": "Дигитална вклученост",
        "language-rights": "Јазични права",
        "smaller-languages": "Помали јазици",
    },
    "sq": {
        "localization": "Lokalizim",
        "engineering-systems": "Sisteme inxhinierike",
        "governance": "Qeverisje",
        "continuous-localization": "Lokalizim i vazhdueshëm",
        "digital-inclusion": "Përfshirje digjitale",
        "language-rights": "Të drejta gjuhësore",
        "smaller-languages": "Gjuhë më të vogla",
    },
    "de": {
        "localization": "Lokalisierung",
        "engineering-systems": "Engineering-Systeme",
        "governance": "Governance",
        "continuous-localization": "Kontinuierliche Lokalisierung",
        "digital-inclusion": "Digitale Inklusion",
        "language-rights": "Sprachrechte",
        "smaller-languages": "Kleinere Sprachen",
    },
    "it": {
        "localization": "Localizzazione",
        "engineering-systems": "Sistemi di ingegneria",
        "governance": "Governance",
        "continuous-localization": "Localizzazione continua",
        "digital-inclusion": "Inclusione digitale",
        "language-rights": "Diritti linguistici",
        "smaller-languages": "Lingue più piccole",
    },
    "fr": {
        "localization": "Localisation",
        "engineering-systems": "Systèmes d'ingénierie",
        "governance": "Gouvernance",
        "continuous-localization": "Localisation continue",
        "digital-inclusion": "Inclusion numérique",
        "language-rights": "Droits linguistiques",
        "smaller-languages": "Langues plus petites",
    },
    "es": {
        "localization": "Localización",
        "engineering-systems": "Sistemas de ingeniería",
        "governance": "Gobernanza",
        "continuous-localization": "Localización continua",
        "digital-inclusion": "Inclusión digital",
        "language-rights": "Derechos lingüísticos",
        "smaller-languages": "Lenguas más pequeñas",
    },
    "sl": {
        "ai-assisted-delivery": "AI podprta dostava",
        "book-donation": "Donacija knjig",
        "ci-cd": "CI/CD",
        "demo-alignment": "Usklajenost demota",
        "documentation": "Dokumentacija",
        "implementation-planning": "Načrtovanje izvedbe",
        "isbn-metadata": "ISBN in metapodatki",
        "let-books": "Let Books",
        "library-systems": "Knjižnični sistemi",
        "product-quality": "Kakovost izdelka",
        "product-review": "Pregled izdelka",
        "product-specification": "Produktna specifikacija",
        "project-management": "Vodenje projekta",
        "spec-driven-development": "Razvoj na podlagi specifikacij",
        "spec-writing": "Pisanje specifikacij",
        "translation-quality": "Kakovost prevajanja",
        "validation": "Validacija",
        "related": "Sorodno",
    },
    "hr": {
        "ai-assisted-delivery": "AI isporuka",
        "book-donation": "Donacija knjiga",
        "ci-cd": "CI/CD",
        "demo-alignment": "Usklađenost demoa",
        "documentation": "Dokumentacija",
        "implementation-planning": "Planiranje implementacije",
        "isbn-metadata": "ISBN i metapodaci",
        "let-books": "Let Books",
        "library-systems": "Knjižnični sustavi",
        "product-quality": "Kvaliteta proizvoda",
        "product-review": "Pregled proizvoda",
        "product-specification": "Specifikacija proizvoda",
        "project-management": "Upravljanje projektom",
        "spec-driven-development": "Razvoj vođen specifikacijom",
        "spec-writing": "Pisanje specifikacija",
        "translation-quality": "Kvaliteta prevođenja",
        "validation": "Validacija",
        "related": "Povezano",
    },
    "bs": {
        "ai-assisted-delivery": "AI isporuka",
        "book-donation": "Donacija knjiga",
        "ci-cd": "CI/CD",
        "demo-alignment": "Usklađenost demoa",
        "documentation": "Dokumentacija",
        "implementation-planning": "Planiranje implementacije",
        "isbn-metadata": "ISBN i metapodaci",
        "let-books": "Let Books",
        "library-systems": "Bibliotečki sistemi",
        "product-quality": "Kvalitet proizvoda",
        "product-review": "Pregled proizvoda",
        "product-specification": "Specifikacija proizvoda",
        "project-management": "Upravljanje projektom",
        "spec-driven-development": "Razvoj vođen specifikacijama",
        "spec-writing": "Pisanje specifikacija",
        "translation-quality": "Kvalitet prevođenja",
        "validation": "Validacija",
        "related": "Povezano",
    },
    "sr-Latn": {
        "ai-assisted-delivery": "AI isporuka",
        "book-donation": "Donacija knjiga",
        "ci-cd": "CI/CD",
        "demo-alignment": "Usklađenost demoa",
        "documentation": "Dokumentacija",
        "implementation-planning": "Planiranje implementacije",
        "isbn-metadata": "ISBN i metapodaci",
        "let-books": "Let Books",
        "library-systems": "Bibliotečki sistemi",
        "product-quality": "Kvalitet proizvoda",
        "product-review": "Pregled proizvoda",
        "product-specification": "Specifikacija proizvoda",
        "project-management": "Upravljanje projektom",
        "spec-driven-development": "Razvoj vođen specifikacijama",
        "spec-writing": "Pisanje specifikacija",
        "translation-quality": "Kvalitet prevođenja",
        "validation": "Validacija",
        "related": "Povezano",
    },
    "sr-Cyrl": {
        "ai-assisted-delivery": "AI испорука",
        "book-donation": "Донација књига",
        "ci-cd": "CI/CD",
        "demo-alignment": "Усклађеност демоа",
        "documentation": "Документација",
        "implementation-planning": "Планирање имплементације",
        "isbn-metadata": "ISBN и метаподаци",
        "let-books": "Let Books",
        "library-systems": "Библиотечки системи",
        "product-quality": "Квалитет производа",
        "product-review": "Преглед производа",
        "product-specification": "Спецификација производа",
        "project-management": "Управљање пројектом",
        "spec-driven-development": "Развој вођен спецификацијама",
        "spec-writing": "Писање спецификација",
        "translation-quality": "Квалитет превођења",
        "validation": "Валидација",
        "related": "Повезано",
    },
    "mk": {
        "ai-assisted-delivery": "AI испорака",
        "book-donation": "Донација на книги",
        "ci-cd": "CI/CD",
        "demo-alignment": "Усогласеност на демото",
        "documentation": "Документација",
        "implementation-planning": "Планирање на имплементација",
        "isbn-metadata": "ISBN и метаподатоци",
        "let-books": "Let Books",
        "library-systems": "Библиотечни системи",
        "product-quality": "Квалитет на производот",
        "product-review": "Преглед на производот",
        "product-specification": "Спецификација на производот",
        "project-management": "Управување со проект",
        "spec-driven-development": "Развој воден од спецификации",
        "spec-writing": "Пишување спецификации",
        "translation-quality": "Квалитет на превод",
        "validation": "Валидација",
        "related": "Поврзано",
    },
    "sq": {
        "ai-assisted-delivery": "Dorëzim me AI",
        "book-donation": "Dhurim librash",
        "ci-cd": "CI/CD",
        "demo-alignment": "Përputhja e demove",
        "documentation": "Dokumentim",
        "implementation-planning": "Planifikim i zbatimit",
        "isbn-metadata": "ISBN dhe metadata",
        "let-books": "Let Books",
        "library-systems": "Sisteme bibliotekare",
        "product-quality": "Cilësia e produktit",
        "product-review": "Rishikimi i produktit",
        "product-specification": "Specifikimi i produktit",
        "project-management": "Menaxhim projekti",
        "spec-driven-development": "Zhvillim i drejtuar nga specifikimet",
        "spec-writing": "Shkrim specifikimesh",
        "translation-quality": "Cilësia e përkthimit",
        "validation": "Validim",
        "related": "Të lidhura",
    },
    "de": {
        "ai-assisted-delivery": "KI-gestützte Lieferung",
        "book-donation": "Buchspende",
        "ci-cd": "CI/CD",
        "demo-alignment": "Demo-Abgleich",
        "documentation": "Dokumentation",
        "implementation-planning": "Implementierungsplanung",
        "isbn-metadata": "ISBN und Metadaten",
        "let-books": "Let Books",
        "library-systems": "Bibliothekssysteme",
        "product-quality": "Produktqualität",
        "product-review": "Produktprüfung",
        "product-specification": "Produktspezifikation",
        "project-management": "Projektmanagement",
        "spec-driven-development": "Spezifikationsgetriebene Entwicklung",
        "spec-writing": "Spezifikationen schreiben",
        "translation-quality": "Übersetzungsqualität",
        "validation": "Validierung",
        "related": "Verwandt",
    },
    "it": {
        "ai-assisted-delivery": "Consegna con AI",
        "book-donation": "Donazione di libri",
        "ci-cd": "CI/CD",
        "demo-alignment": "Allineamento del demo",
        "documentation": "Documentazione",
        "implementation-planning": "Pianificazione dell'implementazione",
        "isbn-metadata": "ISBN e metadati",
        "let-books": "Let Books",
        "library-systems": "Sistemi bibliotecari",
        "product-quality": "Qualità del prodotto",
        "product-review": "Revisione del prodotto",
        "product-specification": "Specifica di prodotto",
        "project-management": "Gestione del progetto",
        "spec-driven-development": "Sviluppo guidato dalle specifiche",
        "spec-writing": "Scrittura di specifiche",
        "translation-quality": "Qualità della traduzione",
        "validation": "Validazione",
        "related": "Correlati",
    },
    "fr": {
        "ai-assisted-delivery": "Livraison assistée par IA",
        "book-donation": "Don de livres",
        "ci-cd": "CI/CD",
        "demo-alignment": "Alignement de la démo",
        "documentation": "Documentation",
        "implementation-planning": "Planification de l'implémentation",
        "isbn-metadata": "ISBN et métadonnées",
        "let-books": "Let Books",
        "library-systems": "Systèmes de bibliothèque",
        "product-quality": "Qualité du produit",
        "product-review": "Revue du produit",
        "product-specification": "Spécification produit",
        "project-management": "Gestion de projet",
        "spec-driven-development": "Développement piloté par les spécifications",
        "spec-writing": "Rédaction de spécifications",
        "translation-quality": "Qualité de la traduction",
        "validation": "Validation",
        "related": "Lié",
    },
    "es": {
        "ai-assisted-delivery": "Entrega asistida por IA",
        "book-donation": "Donación de libros",
        "ci-cd": "CI/CD",
        "demo-alignment": "Alineación de la demo",
        "documentation": "Documentación",
        "implementation-planning": "Planificación de la implementación",
        "isbn-metadata": "ISBN y metadatos",
        "let-books": "Let Books",
        "library-systems": "Sistemas bibliotecarios",
        "product-quality": "Calidad del producto",
        "product-review": "Revisión del producto",
        "product-specification": "Especificación del producto",
        "project-management": "Gestión del proyecto",
        "spec-driven-development": "Desarrollo guiado por especificaciones",
        "spec-writing": "Redacción de especificaciones",
        "translation-quality": "Calidad de la traducción",
        "validation": "Validación",
        "related": "Relacionado",
    },
}

FOOTER_DESC = {
    "en": "A practical platform for cataloging, offering, and retrieving educational books.",
    "sl": "Praktična platforma za katalogizacijo, ponujanje in iskanje izobraževalnih knjig.",
    "hr": "Praktična platforma za katalogizaciju, nuđenje i pronalaženje obrazovnih knjiga.",
    "bs": "Praktična platforma za katalogizaciju, nuđenje i pronalaženje obrazovnih knjiga.",
    "sr-Latn": "Praktična platforma za katalogizaciju, nuđenje i pronalaženje obrazovnih knjiga.",
    "sr-Cyrl": "Практична платформа за каталогизацију, нуђење и проналажење образовних књига.",
    "mk": "Практична платформа за каталогизација, нудење и пронаоѓање образовни книги.",
    "sq": "Një platformë praktike për katalogim, ofrim dhe gjetje librash edukativë.",
    "de": "Eine praktische Plattform zum Katalogisieren, Anbieten und Auffinden von Bildungsbüchern.",
    "it": "Una piattaforma pratica per catalogare, offrire e recuperare libri educativi.",
    "fr": "Une plateforme pratique pour cataloguer, offrir et retrouver des livres éducatifs.",
    "es": "Una plataforma práctica para catalogar, ofrecer y recuperar libros educativos.",
}

FOOTER_MICROCOPY = {
    "en": "Early alpha prototype. Documentation and UI text are AI-assisted. Institutions and integrations mentioned in examples are conceptual only and do not imply partnership or endorsement.",
    "sl": "Zgodnji alfa prototip. Dokumentacija in besedilo uporabniškega vmesnika sta podprta z AI. Ustanove in integracije, omenjene v primerih, so zgolj konceptualne in ne pomenijo partnerstva ali podpore.",
    "hr": "Rani alfa prototip. Dokumentacija i tekst korisničkog sučelja potpomognuti su umjetnom inteligencijom. Ustanove i integracije spomenute u primjerima konceptualne su i ne znače partnerstvo ili podršku.",
    "bs": "Rani alfa prototip. Dokumentacija i tekst korisničkog interfejsa potpomognuti su umjetnom inteligencijom. Ustanove i integracije spomenute u primjerima konceptualne su i ne znače partnerstvo ili podršku.",
    "sr-Latn": "Rani alfa prototip. Dokumentacija i tekst korisničkog interfejsa potpomognuti su veštačkom inteligencijom. Ustanove i integracije pomenute u primerima konceptualne su i ne znače partnerstvo ili podršku.",
    "sr-Cyrl": "Рани алфа прототип. Документација и текст корисничког интерфејса потпомогнути су вештачком интелигенцијом. Установе и интеграције поменуте у примерима концептуалне су и не значе партнерство или подршку.",
    "mk": "Ран алфа прототип. Документацијата и текстот на корисничкиот интерфејс се AI-потпомогнати. Установите и интеграциите спомнати во примерите се концептуални и не значат партнерство или поддршка.",
    "sq": "Prototip i hershëm alfa. Dokumentacioni dhe teksti i ndërfaqes janë të ndihmuara nga AI. Institucionet dhe integrimet e përmendura në shembuj janë konceptuale dhe nuk nënkuptojnë partneritet ose mbështetje.",
    "de": "Früher Alpha-Prototyp. Dokumentation und UI-Texte sind KI-gestützt. In Beispielen erwähnte Institutionen und Integrationen sind konzeptionell und bedeuten keine Partnerschaft oder Unterstützung.",
    "it": "Prototipo alpha iniziale. Documentazione e testi dell'interfaccia sono assistiti dall'IA. Istituzioni e integrazioni citate negli esempi sono concettuali e non implicano partnership o sostegno.",
    "fr": "Prototype alpha précoce. La documentation et les textes d'interface sont assistés par IA. Les institutions et intégrations mentionnées dans les exemples sont conceptuelles et n'impliquent ni partenariat ni soutien.",
    "es": "Prototipo alfa temprano. La documentación y los textos de interfaz están asistidos por IA. Las instituciones e integraciones mencionadas en los ejemplos son conceptuales y no implican asociación ni respaldo.",
}

FOOTER_LINK_LABELS = {
    "en": {"overview": "Overview", "projectHome": "Project home", "demo": "Demo", "allLanguages": "All languages"},
    "sl": {"overview": "Pregled", "projectHome": "Domača stran", "demo": "Demo", "allLanguages": "Vsi jeziki"},
    "hr": {"overview": "Pregled", "projectHome": "Početna stranica", "demo": "Demo", "allLanguages": "Svi jezici"},
    "bs": {"overview": "Pregled", "projectHome": "Početna stranica", "demo": "Demo", "allLanguages": "Svi jezici"},
    "sr-Latn": {"overview": "Pregled", "projectHome": "Početna stranica", "demo": "Demo", "allLanguages": "Svi jezici"},
    "sr-Cyrl": {"overview": "Преглед", "projectHome": "Почетна страница", "demo": "Демо", "allLanguages": "Сви језици"},
    "mk": {"overview": "Преглед", "projectHome": "Почетна страница", "demo": "Демо", "allLanguages": "Сите јазици"},
    "sq": {"overview": "Përmbledhje", "projectHome": "Faqja kryesore", "demo": "Demo", "allLanguages": "Të gjitha gjuhët"},
    "de": {"overview": "Übersicht", "projectHome": "Startseite", "demo": "Demo", "allLanguages": "Alle Sprachen"},
    "it": {"overview": "Panoramica", "projectHome": "Home page", "demo": "Demo", "allLanguages": "Tutte le lingue"},
    "fr": {"overview": "Aperçu", "projectHome": "Page d'accueil", "demo": "Démo", "allLanguages": "Toutes les langues"},
    "es": {"overview": "Vista general", "projectHome": "Página de inicio", "demo": "Demo", "allLanguages": "Todos los idiomas"},
}

SECTION_STOP_HEADINGS = {
    "blog": {value.lower() for value in OTHER_LANGUAGE_HEADINGS.values()} | {"other languages"},
    "learning": set(),
    "wiki": {"related pages"},
}

TOPIC_FIELDS = ["topics", "tags", "categories", "keywords"]
MAX_RELATED_ITEMS = 4


@dataclass(frozen=True)
class ContentRef:
    content_type: str
    slug: str


@dataclass
class ContentVariant:
    content_type: str
    slug: str
    locale: str
    source_path: Path
    output_path: Path
    title: str
    summary: str
    body_markdown: str
    body_markdown_full: str
    topics: list[str]
    explicit_related: dict[str, list[ContentRef]]
    modified_at: float


@dataclass
class ContentEntry:
    content_type: str
    slug: str
    variants: dict[str, ContentVariant] = field(default_factory=dict)
    explicit_related: dict[str, list[ContentRef]] = field(default_factory=lambda: defaultdict(list))
    topics: set[str] = field(default_factory=set)
    keywords: set[str] = field(default_factory=set)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate localized HTML content pages.")
    parser.add_argument("--type", choices=CONTENT_TYPES)
    parser.add_argument("--locale", choices=LOCALES)
    parser.add_argument("--slug")
    return parser.parse_args()


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def parse_frontmatter(text: str) -> tuple[dict[str, Any], str]:
    if not text.startswith("---\n"):
        return {}, text
    match = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if not match:
        return {}, text
    return parse_simple_yaml(match.group(1)), match.group(2)


def parse_simple_yaml(raw: str) -> dict[str, Any]:
    try:
        import yaml  # type: ignore

        parsed = yaml.safe_load(raw)
        return parsed if isinstance(parsed, dict) else {}
    except Exception:
        pass

    lines = raw.splitlines()
    data: dict[str, Any] = {}
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        match = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if not match:
            i += 1
            continue
        key, value = match.group(1), match.group(2)
        if value in {">", ">-", "|", "|-"}:
            block: list[str] = []
            i += 1
            while i < len(lines):
                next_line = lines[i]
                if next_line.startswith("  "):
                    block.append(next_line[2:])
                    i += 1
                    continue
                break
            data[key] = "\n".join(block).strip()
            continue
        if value:
            data[key] = strip_quotes(value.strip())
            i += 1
            continue

        nested_list: list[str] = []
        nested_map: dict[str, Any] = {}
        i += 1
        while i < len(lines):
            next_line = lines[i]
            if not next_line.startswith("  "):
                break
            stripped = next_line[2:]
            if stripped.startswith("- "):
                nested_list.append(strip_quotes(stripped[2:].strip()))
                i += 1
                continue
            nested_match = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", stripped)
            if nested_match:
                nested_key, nested_value = nested_match.group(1), nested_match.group(2)
                if nested_value:
                    nested_map[nested_key] = strip_quotes(nested_value.strip())
                    i += 1
                    continue
                nested_items: list[str] = []
                i += 1
                while i < len(lines):
                    deeper = lines[i]
                    if not deeper.startswith("    "):
                        break
                    deeper = deeper[4:]
                    if deeper.startswith("- "):
                        nested_items.append(strip_quotes(deeper[2:].strip()))
                    i += 1
                nested_map[nested_key] = nested_items
                continue
            i += 1
        data[key] = nested_map if nested_map else nested_list
    return data


def strip_quotes(value: str) -> str:
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {'"', "'"}:
        return value[1:-1]
    return value


def discover_variants() -> dict[tuple[str, str], ContentEntry]:
    entries: dict[tuple[str, str], ContentEntry] = {}
    for content_type in CONTENT_TYPES:
        if content_type == "blog":
            for locale in LOCALES:
                for source in (DOCS / "blog" / locale).glob("*.md"):
                    if source.name == "README.md":
                        continue
                    add_variant(entries, content_type, locale, source)
        else:
            for source in (DOCS / content_type).glob("*.md"):
                if source.name == "README.md":
                    continue
                add_variant(entries, content_type, "en", source)
            for locale in LOCALES:
                if locale == "en":
                    continue
                locale_dir = DOCS / content_type / locale
                if not locale_dir.exists():
                    continue
                for source in locale_dir.glob("*.md"):
                    if source.name == "README.md":
                        continue
                    add_variant(entries, content_type, locale, source)
    return entries


def add_variant(entries: dict[tuple[str, str], ContentEntry], content_type: str, locale: str, source: Path) -> None:
    raw = read_text(source)
    frontmatter, body = parse_frontmatter(raw)
    slug = str(frontmatter.get("article_id") or source.stem)
    title = str(frontmatter.get("title") or source.stem.replace("-", " "))
    summary = normalize_whitespace(str(frontmatter.get("summary") or derive_summary(body)))
    body_for_render = strip_generated_sections(body, content_type)
    body_for_render = strip_leading_summary_section(body_for_render, summary, content_type)
    topics = collect_topics(frontmatter)
    explicit_related = collect_explicit_related(frontmatter, body, content_type)
    output_path = DOCS / content_type / locale / f"{slug}.html"
    variant = ContentVariant(
        content_type=content_type,
        slug=slug,
        locale=locale,
        source_path=source,
        output_path=output_path,
        title=title,
        summary=summary,
        body_markdown=body_for_render,
        body_markdown_full=body,
        topics=topics,
        explicit_related=explicit_related,
        modified_at=source.stat().st_mtime,
    )

    key = (content_type, slug)
    entry = entries.setdefault(key, ContentEntry(content_type=content_type, slug=slug))
    entry.variants[locale] = variant
    entry.topics.update(topics)
    entry.keywords.update(build_keywords(title, summary, slug, topics))
    for rel_type, refs in explicit_related.items():
        for ref in refs:
            if ref not in entry.explicit_related[rel_type]:
                entry.explicit_related[rel_type].append(ref)


def collect_topics(frontmatter: dict[str, Any]) -> list[str]:
    values: list[str] = []
    for key in TOPIC_FIELDS:
        raw = frontmatter.get(key)
        if isinstance(raw, str):
            values.append(normalize_topic(raw))
        elif isinstance(raw, list):
            for item in raw:
                if isinstance(item, str):
                    values.append(normalize_topic(item))
    return sorted({value for value in values if value})


def collect_explicit_related(frontmatter: dict[str, Any], body: str, content_type: str) -> dict[str, list[ContentRef]]:
    related: dict[str, list[ContentRef]] = {key: [] for key in CONTENT_TYPES}
    frontmatter_related = frontmatter.get("related")
    if isinstance(frontmatter_related, dict):
        for rel_type in CONTENT_TYPES:
            values = frontmatter_related.get(rel_type)
            if isinstance(values, str):
                values = [values]
            if isinstance(values, list):
                for value in values:
                    if isinstance(value, str):
                        related[rel_type].append(ContentRef(rel_type, value.strip()))

    if content_type == "wiki":
        for ref in parse_related_pages_section(body, content_type):
            if ref not in related[ref.content_type]:
                related[ref.content_type].append(ref)
    return {key: value for key, value in related.items() if value}


def parse_related_pages_section(body: str, content_type: str) -> list[ContentRef]:
    lines = body.splitlines()
    refs: list[ContentRef] = []
    in_section = False
    for line in lines:
        if line.startswith("## "):
            heading = line[3:].strip()
            if heading == "Related Pages":
                in_section = True
                continue
            if in_section:
                break
        if not in_section:
            continue
        stripped = line.strip()
        if not stripped.startswith("-"):
            continue
        raw_ref = stripped[1:].strip().strip("`")
        ref = resolve_ref_path(raw_ref, content_type)
        if ref:
            refs.append(ref)
    return refs


def resolve_ref_path(raw_ref: str, current_type: str) -> ContentRef | None:
    match = re.match(r"^(?:\.\./)?(?P<content_type>blog|learning|wiki)(?:/(?P<locale>[^/]+))?/(?P<slug>[^/]+)\.md$", raw_ref)
    if match:
        return ContentRef(match.group("content_type"), match.group("slug"))
    match = re.match(r"^(?P<slug>[^/]+)\.md$", raw_ref)
    if match:
        return ContentRef(current_type, match.group("slug"))
    return None


def derive_summary(body: str) -> str:
    lines = [line.rstrip() for line in body.splitlines()]
    for index, line in enumerate(lines):
        if line.startswith("## "):
            continue
        if not line.strip() or line.startswith("#"):
            continue
        paragraph = [line.strip()]
        for next_line in lines[index + 1 :]:
            if not next_line.strip():
                break
            if next_line.startswith("#"):
                break
            paragraph.append(next_line.strip())
        return normalize_whitespace(" ".join(paragraph))
    return ""


def strip_generated_sections(body: str, content_type: str) -> str:
    stop_headings = SECTION_STOP_HEADINGS[content_type]
    if not stop_headings:
        return body.strip()
    lines = body.splitlines()
    kept: list[str] = []
    for line in lines:
        if line.startswith("## ") and line[3:].strip().lower() in stop_headings:
            break
        kept.append(line)
    return "\n".join(kept).strip()


def strip_leading_summary_section(body: str, summary: str, content_type: str) -> str:
    if content_type not in {"learning", "wiki"}:
        return body
    lines = body.splitlines()
    if not lines:
        return body
    title_index = next((i for i, line in enumerate(lines) if line.startswith("# ")), None)
    if title_index is None:
        return body
    i = title_index + 1
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i >= len(lines) or not lines[i].startswith("## "):
        return body
    section_start = i
    i += 1
    while i < len(lines) and not lines[i].strip():
        i += 1
    section_body_start = i
    while i < len(lines):
        if lines[i].startswith("## "):
            break
        i += 1
    section_body = "\n".join(lines[section_body_start:i]).strip()
    if not section_body:
        return body
    normalized_body = normalize_whitespace(re.sub(r"[`*_>#-]", " ", section_body))
    normalized_summary = normalize_whitespace(summary)
    if not normalized_summary or normalized_body.startswith(normalized_summary[: max(24, min(len(normalized_summary), 120))]):
        kept = lines[:section_start] + lines[i:]
        return "\n".join(kept).strip()
    return body


def build_keywords(title: str, summary: str, slug: str, topics: list[str]) -> set[str]:
    tokens = set(topics)
    text = f"{title} {summary} {slug.replace('-', ' ')}".lower()
    for token in re.findall(r"[a-z0-9]{3,}|[\u00c0-\u024f\u0400-\u04ff]{3,}", text):
        tokens.add(token)
    return tokens


def normalize_topic(value: str) -> str:
    return value.strip().lower()


def normalize_whitespace(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def render_all(entries: dict[tuple[str, str], ContentEntry], args: argparse.Namespace) -> None:
    for entry in entries.values():
        for locale, variant in sorted(entry.variants.items()):
            if args.type and entry.content_type != args.type:
                continue
            if args.locale and locale != args.locale:
                continue
            if args.slug and entry.slug != args.slug:
                continue
            render_variant(entries, entry, variant)


def render_variant(entries: dict[tuple[str, str], ContentEntry], entry: ContentEntry, variant: ContentVariant) -> None:
    html_body = markdown_to_html(variant.body_markdown)
    html_body = strip_duplicate_summary_html(html_body, variant.summary, entry.content_type)
    header_block = render_content_page_header(entry, variant)
    language_block = render_language_alternatives(entry, variant.locale)
    related_block = render_related_content(entries, entry, variant.locale)
    post_nav = render_post_article_nav(language_block, related_block)
    page_html = build_page_html(entry, variant, header_block, html_body, post_nav)
    variant.output_path.parent.mkdir(parents=True, exist_ok=True)
    variant.output_path.write_text(page_html, encoding="utf-8")


def markdown_to_html(markdown_text: str) -> str:
    process = subprocess.run(
        ["pandoc", "-f", "markdown", "-t", "html", "--wrap=preserve"],
        input=markdown_text,
        text=True,
        capture_output=True,
        check=True,
    )
    html_body = process.stdout
    html_body = re.sub(r"<p>", '<p class="lead">', html_body, count=1)
    html_body = re.sub(r"^<h1 id=.*?</h1>\n?", "", html_body, count=1, flags=re.M | re.S)
    return html_body.rstrip()


def strip_duplicate_summary_html(html_body: str, summary: str, content_type: str) -> str:
    if content_type not in {"learning", "wiki"} or not summary:
        return html_body
    match = re.match(r'^(<h2 id="[^"]+">.*?</h2>\s*<p class="lead">(.*?)</p>\s*)(.*)$', html_body, re.S)
    if not match:
        return html_body
    lead_text = normalize_whitespace(re.sub(r"<.*?>", " ", match.group(2)))
    summary_text = normalize_whitespace(summary)
    if lead_text == summary_text:
        return match.group(3).lstrip()
    return html_body


def render_content_page_header(entry: ContentEntry, variant: ContentVariant) -> str:
    locale = variant.locale
    content_label = CONTENT_LABELS[locale][entry.content_type]
    docs_label = CONTENT_LABELS[locale]["docs"]
    summary_html = f'          <p class="content-page-summary">{html.escape(variant.summary)}</p>\n' if variant.summary else ""
    topics_html = render_content_tags(variant.topics, locale)
    return (
        '          <header class="content-page-header">\n'
        '            <nav class="breadcrumbs" aria-label="Breadcrumb">\n'
        f'              <a href="../../{locale}/index.html">{html.escape(docs_label)}</a>\n'
        '              <span aria-hidden="true">/</span>\n'
        f'              <a href="../../{entry.content_type}/{locale}/index.html">{html.escape(content_label)}</a>\n'
        '              <span aria-hidden="true">/</span>\n'
        f'              <span aria-current="page">{html.escape(variant.title)}</span>\n'
        '            </nav>\n'
        f'            <h1>{html.escape(variant.title)}</h1>\n'
        f'{summary_html}'
        f'{topics_html}'
        '            <hr class="content-header-divider">\n'
        '          </header>'
    )


def render_content_tags(topics: list[str], locale: str) -> str:
    if not topics:
        return ""
    items = "\n".join(
        f'              <span class="content-tag">{html.escape(humanize_topic(topic, locale))}</span>'
        for topic in topics
    )
    return (
        '          <div class="content-tags" aria-label="Topics">\n'
        f'            <span class="content-tags__label">{html.escape(TOPICS_LABELS[locale])}</span>\n'
        f'{items}\n'
        '          </div>\n'
    )


def render_language_alternatives(entry: ContentEntry, current_locale: str) -> str:
    locales = [locale for locale in LOCALES if locale in entry.variants and locale != current_locale]
    if not locales:
        return ""
    items = [
        f'<li><a href="../../{entry.content_type}/{locale}/{entry.slug}.html" lang="{locale}">{html.escape(LANGUAGE_NAMES[locale])}</a></li>'
        for locale in locales
    ]
    return (
        '          <div class="language-alternatives">\n'
        f'            <h2>{html.escape(OTHER_LANGUAGE_HEADINGS[current_locale])}</h2>\n'
        "            <ul>\n"
        + "\n".join(f"              {item}" for item in items)
        + "\n            </ul>\n"
        "          </div>"
    )


def render_related_content(entries: dict[tuple[str, str], ContentEntry], entry: ContentEntry, locale: str) -> str:
    sections: list[str] = []
    related = resolve_related(entries, entry, locale)
    for target_type in CONTENT_TYPES:
        groups = related.get(target_type, {})
        if not groups:
            continue
        sections.append(render_related_section(locale, target_type, groups, open_first=False))
    if not sections:
        return ""
    return (
        '          <section class="related-content">\n'
        + "\n".join(sections)
        + "\n"
        "          </section>"
    )


def resolve_related(entries: dict[tuple[str, str], ContentEntry], entry: ContentEntry, locale: str) -> dict[str, dict[str, list[ContentVariant]]]:
    results: dict[str, list[ContentVariant]] = {key: [] for key in CONTENT_TYPES}
    seen: dict[str, set[tuple[str, str]]] = {key: set() for key in CONTENT_TYPES}

    for target_type, refs in entry.explicit_related.items():
        for ref in refs:
            candidate_entry = entries.get((ref.content_type, ref.slug))
            if not candidate_entry:
                continue
            if candidate_entry.content_type == entry.content_type and candidate_entry.slug == entry.slug:
                continue
            candidate = preferred_variant(candidate_entry, locale)
            if not candidate:
                continue
            add_related_candidate(results, seen, target_type, candidate)

    scored: list[tuple[int, str, str, ContentVariant]] = []
    for candidate_entry in entries.values():
        if candidate_entry.content_type == entry.content_type and candidate_entry.slug == entry.slug:
            continue
        candidate = preferred_variant(candidate_entry, locale)
        if not candidate:
            continue
        score = similarity_score(entry, candidate_entry)
        if score <= 0:
            continue
        scored.append((score, candidate.title.lower(), candidate_entry.slug, candidate))

    for _, _, _, candidate in sorted(scored, key=lambda item: (-item[0], item[1], item[2])):
        add_related_candidate(results, seen, candidate.content_type, candidate)

    grouped: dict[str, dict[str, list[ContentVariant]]] = {}
    for target_type, candidates in results.items():
        if not candidates:
            continue
        topic_map: dict[str, list[ContentVariant]] = defaultdict(list)
        for candidate in candidates[:MAX_RELATED_ITEMS]:
            candidate_entry = entries[(candidate.content_type, candidate.slug)]
            topic = choose_primary_topic(entry, candidate_entry)
            topic_map[topic].append(candidate)
        grouped[target_type] = dict(sorted(topic_map.items(), key=lambda item: topic_sort_key(entry, item[0], locale)))
    return grouped


def add_related_candidate(results: dict[str, list[ContentVariant]], seen: dict[str, set[tuple[str, str]]], target_type: str, candidate: ContentVariant) -> None:
    key = (candidate.content_type, candidate.slug)
    if key in seen[target_type]:
        return
    if len(results[target_type]) >= MAX_RELATED_ITEMS:
        return
    seen[target_type].add(key)
    results[target_type].append(candidate)


def preferred_variant(entry: ContentEntry, locale: str) -> ContentVariant | None:
    return entry.variants.get(locale) or entry.variants.get("en") or next(iter(entry.variants.values()), None)


def similarity_score(entry: ContentEntry, candidate_entry: ContentEntry) -> int:
    shared_topics = entry.topics & candidate_entry.topics
    shared_keywords = entry.keywords & candidate_entry.keywords
    return len(shared_topics) * 100 + len(shared_keywords)


def choose_primary_topic(entry: ContentEntry, candidate_entry: ContentEntry) -> str:
    shared_topics = sorted(entry.topics & candidate_entry.topics)
    if shared_topics:
        return shared_topics[0]
    if candidate_entry.topics:
        return sorted(candidate_entry.topics)[0]
    return "related"


def topic_sort_key(entry: ContentEntry, topic: str, locale: str) -> tuple[int, str]:
    return (0 if topic in entry.topics else 1, humanize_topic(topic, locale).lower())


def render_related_section(locale: str, target_type: str, groups: dict[str, list[ContentVariant]], open_first: bool = False) -> str:
    return (
        '              <section class="related-section">\n'
        f'                <h2>{html.escape(RELATED_HEADINGS[locale][target_type])}</h2>\n'
        f'{render_topic_browser(groups, prefix=f"related-{target_type}", locale=locale, open_first=open_first)}\n'
        "              </section>"
    )


def render_topic_browser(groups: dict[str, list[ContentVariant]], prefix: str, locale: str, open_first: bool = False) -> str:
    parts = ['                <div class="related-topic-nav" data-topic-menu-group>']
    sorted_groups = sorted(groups.items(), key=lambda item: humanize_topic(item[0], locale).lower())
    trigger_parts: list[str] = ['                  <div class="topic-pill-row">']
    panel_parts: list[str] = ['                  <div class="topic-menu-layer">']
    for index, (topic, items) in enumerate(sorted_groups):
        topic_key = f"{prefix}-{slugify(topic)}"
        expanded = "true" if open_first and index == 0 else "false"
        hidden = "" if open_first and index == 0 else " hidden"
        active = " is-active" if open_first and index == 0 else ""
        links = "\n".join(
            f'                      <a href="{relative_cross_link(item)}">{html.escape(item.title)}</a>'
            for item in items
        )
        trigger_parts.append(
            f'                    <button type="button" class="topic-pill topic-pill-button{active}" data-topic-trigger="{topic_key}" data-topic-slug="{html.escape(topic)}" aria-expanded="{expanded}" aria-controls="{topic_key}-menu">{html.escape(humanize_topic(topic, locale))}</button>'
        )
        panel_parts.append(
            f'                    <div class="topic-menu" id="{topic_key}-menu" data-topic-menu="{topic_key}"{hidden}>\n'
            f'{links}\n'
            '                    </div>'
        )
    trigger_parts.append('                  </div>')
    panel_parts.append('                  </div>')
    parts.extend(trigger_parts)
    parts.extend(panel_parts)
    parts.append("                </div>")
    return "\n".join(parts)


def humanize_topic(topic: str, locale: str = "en") -> str:
    labels = TOPIC_LABELS.get(locale, TOPIC_LABELS["en"])
    return labels.get(topic, TOPIC_LABELS["en"].get(topic, topic.replace("-", " ")))


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def relative_cross_link(target: ContentVariant) -> str:
    return f"../../{target.content_type}/{target.locale}/{target.slug}.html"


def render_post_article_nav(language_block: str, related_block: str) -> str:
    pieces = [piece for piece in [language_block, related_block] if piece]
    if not pieces:
        return ""
    return '        <div class="post-article-nav">\n' + "\n".join(pieces) + "\n        </div>"


def build_page_html(entry: ContentEntry, variant: ContentVariant, header_block: str, html_body: str, post_nav: str) -> str:
    canonical_url = f"{SITE_BASE}/{entry.content_type}/{variant.locale}/{entry.slug}.html"
    x_default = f"{SITE_BASE}/{entry.content_type}/en/{entry.slug}.html"
    hreflangs = "\n".join(
        f'    <link rel="alternate" hreflang="{locale}" href="{SITE_BASE}/{entry.content_type}/{locale}/{entry.slug}.html">'
        for locale in LOCALES
        if locale in entry.variants
    )
    lang_switch = "\n".join(render_lang_switch_link(entry, variant.locale, locale) for locale in LOCALES if locale in entry.variants)
    type_label = CONTENT_LABELS[variant.locale][entry.content_type]
    docs_label = CONTENT_LABELS[variant.locale]["docs"]
    post_nav_block = f"\n{post_nav}" if post_nav else ""
    summary = html.escape(variant.summary)
    title = html.escape(variant.title)
    locale = variant.locale
    footer_desc = FOOTER_DESC.get(locale, FOOTER_DESC["en"])
    footer_microcopy = FOOTER_MICROCOPY.get(locale, FOOTER_MICROCOPY["en"])
    footer_labels = FOOTER_LINK_LABELS.get(locale, FOOTER_LINK_LABELS["en"])

    return f'''<!DOCTYPE html>
<html lang="{variant.locale}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title} | LetBooks</title>
    <meta name="description" content="{summary}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="application-name" content="LetBooks">
    <link rel="canonical" href="{canonical_url}">
    <link rel="alternate" hreflang="x-default" href="{x_default}">
{hreflangs}
    <link rel="icon" href="../../../favicon/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="../../../favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)">
    <link rel="icon" href="../../../favicon/favicon.ico" sizes="any">
    <link rel="icon" href="../../../favicon/favicon-32x32.png" type="image/png" sizes="32x32">
    <link rel="icon" href="../../../favicon/favicon-16x16.png" type="image/png" sizes="16x16">
    <link rel="apple-touch-icon" href="../../../favicon/apple-touch-icon.png" sizes="180x180">
    <link rel="manifest" href="../../../favicon/site.webmanifest">
    <meta name="theme-color" content="#0f5b45">
    <meta property="og:title" content="{title} | LetBooks">
    <meta property="og:description" content="{summary}">
    <meta property="og:image" content="https://letbooks.org/og-image.png">
    <meta property="og:image:alt" content="LetBooks social preview image">
    <meta property="og:url" content="{canonical_url}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="LetBooks">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title} | LetBooks">
    <meta name="twitter:description" content="{summary}">
    <meta name="twitter:image" content="https://letbooks.org/og-image.png">
    <meta name="twitter:image:alt" content="LetBooks social preview image">
    <link rel="stylesheet" href="../../assets/css/style.css">
    <script src="../../assets/js/docs-lang.js" defer></script>
  </head>
  <body data-page-type="article" data-content-type="{entry.content_type}" data-locale="{variant.locale}">
    <div class="page-shell">
      <header class="site-header">
        <div class="header-inner">
          <a class="brand-link" href="../../{entry.content_type}/{variant.locale}/index.html">
            <img class="brand-mark" src="../../assets/images/logo-mark-symbol.svg" alt="Let Books">
            <span class="brand-copy">
              <strong>Let Books</strong>
              <span>{type_label}</span>
            </span>
          </a>
          <div class="header-nav">
            <a class="nav-link" href="../../{variant.locale}/index.html">{html.escape(docs_label)}</a>
            <a class="nav-link" href="../../blog/{variant.locale}/index.html">Blog</a>
            <a class="nav-link" href="../../learning/{variant.locale}/index.html">Learning</a>
            <a class="nav-link" href="../../wiki/{variant.locale}/index.html">Wiki</a>
            <a class="nav-link" href="https://github.com/mihafreenode/let-books">GitHub</a>
            <div class="lang-switch" aria-label="Language options">
{lang_switch}
              <a class="lang-link" href="../../index.html">{html.escape(footer_labels["allLanguages"])}</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <article class="section blog-article docs-article">
{header_block}
{html_body}
        </article>{post_nav_block}
      </main>

      <footer class="site-footer">
        <div class="footer-inner">
          <div>
            <h3>Let Books</h3>
            <p>{html.escape(footer_desc)}</p>
            <p class="footer-microcopy">{html.escape(footer_microcopy)}</p>
          </div>
          <div>
            <div class="footer-links">
              <a href="../../{variant.locale}/index.html">{html.escape(footer_labels["overview"])}</a>
              <a href="../../index.html">{html.escape(footer_labels["projectHome"])}</a>
              <a href="../../../static-demo/">{html.escape(footer_labels["demo"])}</a>
            </div>
            <div class="language-list" style="margin-top: 1rem;">
              <a href="../../index.html">{html.escape(footer_labels["allLanguages"])}</a>
            </div>
            <div class="language-list" data-equivalent-language-list style="margin-top: 0.85rem;"></div>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
'''


def render_lang_switch_link(entry: ContentEntry, current_locale: str, locale: str) -> str:
    current = " is-current" if locale == current_locale else ""
    return f'              <a class="lang-link{current}" href="../../{entry.content_type}/{locale}/{entry.slug}.html" lang="{locale}">{LANGUAGE_SWITCH_LABELS[locale]}</a>'


def update_index_pages(entries: dict[tuple[str, str], ContentEntry]) -> None:
    for content_type in CONTENT_TYPES:
        for locale in LOCALES:
            path = DOCS / content_type / locale / "index.html"
            if not path.exists():
                continue
            text = read_text(path)
            updated = rewrite_index_main(text, entries, content_type, locale)
            path.write_text(updated, encoding="utf-8")


def update_overview_pages(entries: dict[tuple[str, str], ContentEntry]) -> None:
    for locale in LOCALES:
        path = DOCS / locale / "index.html"
        if not path.exists():
            continue
        text = read_text(path)
        section = render_recent_cards_section(
            locale,
            RECENT_HEADINGS[locale]["overview"],
            [recent_variants(entries, locale, content_type=content_type, limit=1)[0] for content_type in CONTENT_TYPES if recent_variants(entries, locale, content_type=content_type, limit=1)],
            RECENT_DESCRIPTIONS[locale]["overview"],
            path_prefix="../",
            wrapper_class="section recent-content-section",
        )
        patterns = [
            re.compile(r'<section class="section recent-content-section">.*?</section>', re.S),
            re.compile(r'<section class="recent-content-section">.*?</section>', re.S),
            re.compile(r'<section class="section">\s*<div class="section-header">\s*<h2>.*?</h2>\s*<p>.*?</p>\s*<ul>.*?</ul>\s*</div>\s*</section>', re.S),
        ]
        updated = text
        count = 0
        for pattern in patterns:
            updated, count = pattern.subn(section, updated, count=1)
            if count:
                break
        if count:
            path.write_text(updated, encoding="utf-8")


def update_public_homepage(entries: dict[tuple[str, str], ContentEntry]) -> None:
    path = ROOT / "index.html"
    text = read_text(path)
    cards = [recent_variants(entries, "en", content_type=content_type, limit=1)[0] for content_type in CONTENT_TYPES if recent_variants(entries, "en", content_type=content_type, limit=1)]
    section = render_public_homepage_recent_section(cards)
    pattern = re.compile(r'<section class="section">\s*<div class="section-header">\s*<h2>Latest Article</h2>.*?</section>', re.S)
    updated, count = pattern.subn(section, text, count=1)
    if count:
        path.write_text(updated, encoding="utf-8")


def render_public_homepage_recent_section(cards: list[ContentVariant]) -> str:
    card_html = "\n".join(render_public_recent_card(card) for card in cards)
    return (
        '        <section class="section">\n'
        '          <div class="section-header">\n'
        f'            <h2>{html.escape(RECENT_HEADINGS["en"]["overview"])}</h2>\n'
        f'            <p>{html.escape(RECENT_DESCRIPTIONS["en"]["homepage"])}</p>\n'
        '          </div>\n'
        '          <div class="recent-content-grid recent-content-grid--homepage">\n'
        f'{card_html}\n'
        '          </div>\n'
        '        </section>'
    )


def render_public_recent_card(card: ContentVariant) -> str:
    type_label = CONTENT_LABELS["en"][card.content_type]
    summary_html = f'            <p>{html.escape(card.summary)}</p>\n' if card.summary else ""
    return (
        f'            <a class="recent-content-card" href="docs/{card.content_type}/{card.locale}/{card.slug}.html">\n'
        f'              <span class="recent-content-card__type">{html.escape(type_label)}</span>\n'
        f'              <h3>{html.escape(card.title)}</h3>\n'
        f'{summary_html}'
        '            </a>'
    )


def render_index_browser_section(entries: dict[tuple[str, str], ContentEntry], content_type: str, locale: str) -> str:
    topic_groups: dict[str, list[ContentVariant]] = defaultdict(list)
    for entry in sorted((item for item in entries.values() if item.content_type == content_type), key=lambda item: preferred_variant(item, locale).title.lower() if preferred_variant(item, locale) else item.slug):
        variant = preferred_variant(entry, locale)
        if not variant:
            continue
        for topic in sorted(entry.topics):
            topic_groups[topic].append(variant)
    browser = render_topic_browser(dict(sorted(topic_groups.items(), key=lambda item: humanize_topic(item[0], locale).lower())), prefix=f"index-{content_type}-{locale}", locale=locale, open_first=False)
    return (
        '          <section class="related-content related-content--index">\n'
        f'            <h2 class="related-content__title">{html.escape(BROWSE_BY_TOPIC_HEADINGS[locale])}</h2>\n'
        f'{browser}\n'
        '          </section>'
    )


def render_content_type_switcher(locale: str, current_type: str) -> str:
    links = []
    for content_type in CONTENT_TYPES:
        active = " is-active" if content_type == current_type else ""
        aria = ' aria-current="page"' if content_type == current_type else ""
        links.append(
            f'              <a class="content-type-switcher__link{active}" href="../../{content_type}/{locale}/index.html" data-content-switcher-link data-content-type="{content_type}"{aria}>{html.escape(CONTENT_LABELS[locale][content_type])}</a>'
        )
    return (
        f'          <nav class="content-type-switcher" aria-label="{html.escape(CONTENT_TYPE_SWITCHER_LABELS[locale])}">\n'
        '            <div class="content-type-switcher__group">\n'
        + "\n".join(links)
        + '\n            </div>\n'
        '          </nav>'
    )


def recent_variants(entries: dict[tuple[str, str], ContentEntry], locale: str, content_type: str | None = None, limit: int = 3) -> list[ContentVariant]:
    variants: list[ContentVariant] = []
    for entry in entries.values():
        if content_type and entry.content_type != content_type:
            continue
        variant = preferred_variant(entry, locale)
        if variant:
            variants.append(variant)
    return sorted(variants, key=lambda item: (-item.modified_at, item.title.lower(), item.slug))[:limit]


def render_recent_cards_section(locale: str, heading: str, cards: list[ContentVariant], description: str = "", path_prefix: str = "../../", wrapper_class: str = "recent-content-section") -> str:
    if not cards:
        return ""
    description_html = f'            <p>{html.escape(description)}</p>\n' if description else ""
    card_html = "\n".join(render_recent_card(locale, card, path_prefix) for card in cards)
    return (
        f'          <section class="{wrapper_class}">\n'
        '            <div class="section-header">\n'
        f'              <h2>{html.escape(heading)}</h2>\n'
        f'{description_html}'
        '            </div>\n'
        '            <div class="recent-content-grid">\n'
        f'{card_html}\n'
        '            </div>\n'
        '          </section>'
    )


def render_recent_card(locale: str, card: ContentVariant, path_prefix: str) -> str:
    type_label = CONTENT_LABELS[locale][card.content_type]
    summary_html = f'              <p>{html.escape(card.summary)}</p>\n' if card.summary else ""
    return (
        f'              <a class="recent-content-card" href="{path_prefix}{card.content_type}/{card.locale}/{card.slug}.html">\n'
        f'                <span class="recent-content-card__type">{html.escape(type_label)}</span>\n'
        f'                <h3>{html.escape(card.title)}</h3>\n'
        f'{summary_html}'
        '              </a>'
    )


def rewrite_index_main(text: str, entries: dict[tuple[str, str], ContentEntry], content_type: str, locale: str) -> str:
    header_match = re.search(r'<div class="section-header">\s*<h1>(.*?)</h1>\s*<p>(.*?)</p>\s*</div>', text, re.S)
    if not header_match:
        return text
    heading = header_match.group(1).strip()
    summary = header_match.group(2).strip()
    switcher = render_content_type_switcher(locale, content_type)
    recent = render_recent_cards_section(
        locale,
        RECENT_HEADINGS[locale][content_type],
        recent_variants(entries, locale, content_type=content_type, limit=4),
        path_prefix="../../",
    )
    browser = render_index_browser_section(entries, content_type, locale)
    main = (
        '      <main>\n'
        '        <section class="section">\n'
        '          <div class="section-header">\n'
        f'            <h1>{heading}</h1>\n'
        f'            <p>{summary}</p>\n'
        '          </div>\n'
        f'{switcher}\n'
        f'{recent}\n'
        f'{browser}\n'
        '        </section>\n'
        '      </main>'
    )
    return re.sub(r'<main>.*?</main>', main, text, count=1, flags=re.S)


def main() -> None:
    args = parse_args()
    entries = discover_variants()
    render_all(entries, args)
    if not any([args.type, args.locale, args.slug]):
        update_index_pages(entries)
        update_overview_pages(entries)
        update_public_homepage(entries)


if __name__ == "__main__":
    main()
