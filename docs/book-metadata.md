# Book Metadata Lookup

Let Books uses a lightweight metadata lookup flow that works in the current alpha demo and sets up a reusable pattern for the future full application.

## Lookup Order

1. Normalize and validate the ISBN.
2. Query Open Library first.
3. If Open Library does not return useful metadata, query `https://api.letbooks.org/isbn/{isbn}`.
4. If metadata is still not found, continue with manual entry.

Manual entry must always remain available. Lookup failures must never block the cataloging flow.

## ISBN Normalization

Before lookup and before cache key creation:

- remove spaces
- remove hyphens
- uppercase `X`
- validate checksum
- prefer canonical ISBN-13 when available

Recommended cache key format:

`metadata:{provider}:{version}:isbn:{normalizedIsbn}`

Examples:

- `metadata:google-books:v1:isbn:9780500276969`
- `metadata:open-library:v1:isbn:9780500276969`
- `metadata:merged:v1:isbn:9780500276969`
- `metadata:negative:v1:isbn:9789610000000`

Increment the cache version when the normalized DTO shape changes.

## API Response Format

Expected successful response:

```json
{
  "found": true,
  "provider": "google-books",
  "providerId": "qbcgPwAACAAJ",
  "isbn": "9780500276969",
  "isbn10": "050027696X",
  "isbn13": "9780500276969",
  "title": "Escher",
  "subtitle": "The Complete Graphic Work",
  "authors": [
    "Maurits Cornelis Escher",
    "J. L. Locher",
    "F. H. Bool"
  ],
  "publisher": null,
  "publishedDate": "1992",
  "publishedYear": 1992,
  "description": "...",
  "pageCount": 349,
  "language": "en",
  "categories": ["Art, Modern"],
  "thumbnailUrl": "https://...",
  "smallThumbnailUrl": "https://...",
  "infoUrl": "https://...",
  "fetchedAt": "2026-05-27T18:36:38.988Z",
  "rawAvailable": false
}
```

Expected not-found response:

```json
{
  "found": false,
  "isbn": "9780500276969",
  "provider": "google-books",
  "fetchedAt": "2026-05-27T18:36:38.988Z"
}
```

## Error Handling

Frontend behavior should be pragmatic:

- `400`: invalid ISBN, show validation error
- `429`: show retry message
- `502`, `503`, `504`: treat as provider unavailable and continue to manual entry
- network failure: continue to manual entry

Do not block the user when enrichment fails.

Useful response headers for proxy implementations:

- `X-Cache: HIT` or `MISS`
- `Cache-Control`
- `Retry-After` for `429`
- `no-store` for transient failures

## Provider and Source Tracking

Track the effective metadata source on the book record:

- `Open Library`
- `Let Books metadata API`
- `Manual entry`

Provider metadata should also preserve machine-readable fields where available, such as provider code, provider item id, and fetch timestamp.

Manual metadata must override provider metadata and must not be overwritten automatically.

## Local Frontend Cache Behavior

Caching is a first-class concern because:

- metadata rarely changes
- repeated scans are common
- caching reduces provider quota usage
- caching improves mobile performance
- caching reduces latency
- caching helps during provider outages

Recommended alpha behavior:

- successful metadata: cache for 7 to 30 days
- no-result metadata: cache for 1 hour to 1 day
- provider failures such as timeout, `5xx`, quota errors, and network failures: do not cache long

Recommended cache layers:

1. edge or provider cache
2. frontend local cache
3. future shared app cache or database cache
4. manual metadata cache

Useful invalidation patterns:

- version-based invalidation
- targeted invalidation by ISBN
- explicit retry or refresh metadata action
- manual override precedence
- future soft-refresh on read

## Retry Behavior

Users should be able to retry lookup manually.

During development it is also useful to expose a `Clear metadata cache` action so cached not-found responses do not slow down testing.

## Manual Entry Fallback

Manual entry is the final fallback and must remain available in all of these cases:

- ISBN invalid
- provider returned no useful metadata
- rate limit hit
- provider unavailable
- network failure

The user should still be able to save the book with manual data immediately.

## Thumbnail Handling

- use `thumbnailUrl` when available
- display directly in `<img>`
- use a placeholder cover when missing
- do not process remote thumbnails through canvas
- do not require image CORS handling for normal display
- do not proxy or store binary images locally for now

## Local Development Configuration

Suggested frontend configuration:

`VITE_METADATA_API_BASE_URL=https://api.letbooks.org`

For the current alpha static frontend, the same idea can be provided via a local config value, meta tag, or query override.

Local development may point to:

- the remote metadata API
- a local lightweight proxy
- a Vite proxy target
- an ASP.NET proxy
- a Node or Express proxy
- a local Python proxy

Local development must not require cloud infrastructure.

## Security Rules

- frontend must only communicate with the Let Books metadata API when provider secrets are involved
- do not expose provider API keys in frontend code
- do not commit real secrets
- local proxies are for development only
