# Google Books Proxy Pattern

The recommended architecture for metadata enrichment is:

Frontend
-> application-owned API or proxy
-> external providers

This keeps provider secrets out of the frontend and creates one place for caching, rate limiting, normalization, and provider switching.

The ISBN metadata API is the first implementation of this pattern.

Future services should follow the same general architecture when secrets, caching, rate limiting, or response normalization are involved.

This pattern is reusable for:

- metadata enrichment
- AI services
- OCR services
- translation services
- recommendation systems
- semantic search
- embeddings and vector services
- moderation and classification APIs
- analytics enrichment
- regional library integrations

## Why Use an Application-Owned Proxy

- hide provider secrets
- centralize caching
- centralize rate limiting
- abstract providers behind one contract
- support provider switching later
- normalize responses into one DTO
- build a shared enrichment pipeline
- support future extensibility without frontend rewrites

## Google Books Proxy Checklist

1. Create a Google Books API key.
2. Restrict the key to the Books API.
3. Store the key in environment variables or secret storage.
4. Expose an application endpoint such as `/isbn/{isbn}`.
5. Validate ISBN input before calling the provider.
6. Apply conservative abuse protection and per-client rate limiting.
7. Cache successful and no-result responses.
8. Normalize provider responses into one application DTO.
9. Never expose provider secrets to the frontend.
10. Never commit secrets.

When rate limits are exceeded, return HTTP `429` and `Retry-After`.

Do not document or hardcode exact rate-limit thresholds in public docs.

## Caching Guidance

Caching should be treated as a first-class architectural concern.

Recommended key format:

`metadata:{provider}:{version}:isbn:{normalizedIsbn}`

Examples:

- `metadata:google-books:v1:isbn:9780500276969`
- `metadata:open-library:v1:isbn:9780500276969`
- `metadata:merged:v1:isbn:9780500276969`
- `metadata:negative:v1:isbn:9789610000000`

Before generating the key:

- remove spaces
- remove hyphens
- uppercase `X`
- validate ISBN
- preferably canonicalize to ISBN-10 or ISBN-13 consistently

Expiry guidance:

- successful metadata: 7 to 30 days
- no-result metadata: 1 hour to 1 day
- provider failures such as `5xx`, timeouts, network failure, or quota issues: do not cache long
- manual metadata: should override provider metadata and may have a very long lifetime

Recommended invalidation patterns:

- version-based invalidation
- targeted invalidation by ISBN
- explicit retry or refresh metadata action
- manual override precedence
- future soft refresh

Useful headers:

- `X-Cache: HIT` or `MISS`
- `Cache-Control`
- `Retry-After`
- `no-store` for transient failures

Recommended cache layers:

1. edge or provider cache
2. frontend local cache
3. future shared app cache or database cache
4. manual metadata cache

## Local Development Proxy Options

Local development can use any of these:

- remote metadata API
- local lightweight proxy
- Vite proxy
- ASP.NET proxy
- Node or Express proxy
- local Python proxy

Cloud infrastructure is not required for local development.

## Node/Express Example

Install:

```bash
npm install express cors dotenv
```

Example `server.js`:

```js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    const allowed = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
    callback(allowed ? null : new Error("CORS blocked"), allowed);
  }
}));

function normalizeIsbn(value = "") {
  return String(value).replace(/[^0-9Xx]/g, "").toUpperCase();
}

function isIsbnShape(value) {
  return /^\d{13}$/.test(value) || /^\d{9}[\dX]$/.test(value);
}

app.get("/isbn/:isbn", async (req, res) => {
  const isbn = normalizeIsbn(req.params.isbn);
  if (!isIsbnShape(isbn)) {
    return res.status(400).json({ found: false, isbn, error: "invalid_isbn" });
  }

  if (!API_KEY) {
    return res.status(500).json({ found: false, isbn, error: "missing_api_key" });
  }

  const url = new URL("https://www.googleapis.com/books/v1/volumes");
  url.searchParams.set("q", `isbn:${isbn}`);
  url.searchParams.set("key", API_KEY);

  const response = await fetch(url);
  if (!response.ok) {
    return res.status(response.status === 429 ? 429 : 502).json({ found: false, isbn });
  }

  const payload = await response.json();
  const item = payload.items?.[0]?.volumeInfo;
  if (!item) {
    return res.json({ found: false, isbn, provider: "google-books", fetchedAt: new Date().toISOString() });
  }

  const identifiers = item.industryIdentifiers || [];
  const isbn10 = identifiers.find((x) => x.type === "ISBN_10")?.identifier || null;
  const isbn13 = identifiers.find((x) => x.type === "ISBN_13")?.identifier || isbn;

  return res.json({
    found: true,
    provider: "google-books",
    providerId: payload.items?.[0]?.id || null,
    isbn,
    isbn10,
    isbn13,
    title: item.title || null,
    subtitle: item.subtitle || null,
    authors: item.authors || [],
    publisher: item.publisher || null,
    publishedDate: item.publishedDate || null,
    publishedYear: Number((item.publishedDate || "").match(/(18|19|20)\d{2}/)?.[0]) || null,
    description: item.description || null,
    pageCount: item.pageCount || null,
    language: item.language || null,
    categories: item.categories || [],
    thumbnailUrl: item.imageLinks?.thumbnail || null,
    smallThumbnailUrl: item.imageLinks?.smallThumbnail || null,
    infoUrl: item.infoLink || null,
    fetchedAt: new Date().toISOString(),
    rawAvailable: false
  });
});

app.listen(PORT, () => {
  console.log(`Metadata proxy listening on http://localhost:${PORT}`);
});
```

## Python/FastAPI Example

Install:

```bash
pip install fastapi uvicorn httpx python-dotenv
```

Example `main.py`:

```python
import os
import re
from datetime import datetime, timezone

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()
api_key = os.getenv("GOOGLE_BOOKS_API_KEY")

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"https?://(localhost|127\.0\.0\.1)(:\d+)?",
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)


def normalize_isbn(value: str) -> str:
    return re.sub(r"[^0-9Xx]", "", value or "").upper()


def valid_shape(value: str) -> bool:
    return bool(re.fullmatch(r"\d{13}|\d{9}[\dX]", value))


@app.get("/isbn/{isbn}")
async def lookup_isbn(isbn: str):
    normalized = normalize_isbn(isbn)
    if not valid_shape(normalized):
        raise HTTPException(status_code=400, detail="invalid_isbn")

    if not api_key:
        raise HTTPException(status_code=500, detail="missing_api_key")

    async with httpx.AsyncClient(timeout=10.0) as client:
        response = await client.get(
            "https://www.googleapis.com/books/v1/volumes",
            params={"q": f"isbn:{normalized}", "key": api_key},
        )

    if response.status_code == 429:
        raise HTTPException(status_code=429, detail="rate_limited")
    if response.status_code >= 400:
        raise HTTPException(status_code=502, detail="provider_error")

    payload = response.json()
    item = ((payload.get("items") or [None])[0] or {}).get("volumeInfo")
    fetched_at = datetime.now(timezone.utc).isoformat()

    if not item:
        return {
            "found": False,
            "isbn": normalized,
            "provider": "google-books",
            "fetchedAt": fetched_at,
        }

    identifiers = item.get("industryIdentifiers") or []
    isbn10 = next((x.get("identifier") for x in identifiers if x.get("type") == "ISBN_10"), None)
    isbn13 = next((x.get("identifier") for x in identifiers if x.get("type") == "ISBN_13"), normalized)
    year_match = re.search(r"(18|19|20)\d{2}", item.get("publishedDate") or "")

    return {
        "found": True,
        "provider": "google-books",
        "providerId": ((payload.get("items") or [None])[0] or {}).get("id"),
        "isbn": normalized,
        "isbn10": isbn10,
        "isbn13": isbn13,
        "title": item.get("title"),
        "subtitle": item.get("subtitle"),
        "authors": item.get("authors") or [],
        "publisher": item.get("publisher"),
        "publishedDate": item.get("publishedDate"),
        "publishedYear": int(year_match.group(0)) if year_match else None,
        "description": item.get("description"),
        "pageCount": item.get("pageCount"),
        "language": item.get("language"),
        "categories": item.get("categories") or [],
        "thumbnailUrl": ((item.get("imageLinks") or {}).get("thumbnail")),
        "smallThumbnailUrl": ((item.get("imageLinks") or {}).get("smallThumbnail")),
        "infoUrl": item.get("infoLink"),
        "fetchedAt": fetched_at,
        "rawAvailable": False,
    }
```

Run locally:

```bash
uvicorn main:app --reload --port 3001
```

## Environment Files

Example environment values:

```env
GOOGLE_BOOKS_API_KEY=your_google_books_api_key_here
METADATA_API_BASE_URL=https://api.letbooks.org
```

- never commit real secrets
- frontend must never contain provider API keys
- local proxies are for development only
