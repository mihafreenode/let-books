# Let Books Local Demo

Let Books Local Demo is a real installable Progressive Web App (PWA) prototype for testing the future Let Books workflow without any backend.

## What It Is

This demo is designed to:

- test mobile usability while walking around a house or storage room
- test QR box workflows
- test ISBN scanning
- test photo capture for books
- test Excel export for libraries
- test whole-database ZIP transfer between devices
- demonstrate the concept to libraries, IZUM, and other partners

## What It Is Not

This is not a backend system yet.

It does not include:

- login
- backend APIs
- cloud sync
- Azure services
- OCR
- real COBISS integration
- payments or social features

## Local-Only Rules

- all data stays in the browser on the current device
- boxes, books, photos, lookup cache, and settings are stored locally in IndexedDB
- no server upload happens
- no automatic sync exists between devices

## Transfer Between Devices

There are two different transfer workflows:

1. QR workflow
- good for operational scanning
- good for opening/importing boxes
- not intended to transfer the full database

2. ZIP archive workflow
- use `Export Database ZIP` on one device
- use `Import Database ZIP` on another device
- this is the main workflow for moving the whole local demo between phone and desktop

ZIP archives contain:

- JSON data files
- local image files
- app manifest metadata for the archive

## Photo Support

Each book can store multiple local images, including:

- cover
- back
- inside front
- inside back
- spine
- condition
- other

Camera capture is the primary path.
File upload/gallery selection is also supported.

## Offline Support

Works offline:

- app shell
- local boxes and books
- local photos
- QR generation
- QR scanning
- ZIP export/import
- Excel export

Needs internet:

- Open Library lookup
- Google Books fallback lookup
- any remote metadata or cover URLs not already cached locally

## Install and Test

Serve the `static-demo/` folder with a static file server.

Example from repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/static-demo/
```

## Phone Testing Notes

Camera scanning usually requires:

- `localhost`, or
- HTTPS

If you test on a phone over the local network, camera permissions may fail on plain HTTP depending on the browser.

Practical options:

1. test on desktop first
2. use a localhost-capable mobile workflow if available
3. deploy the static demo to GitHub Pages or Azure Static Web Apps for HTTPS phone testing

## Language Support

The demo currently includes:

- English
- Slovenian
- Croatian
- Bosnian
- Serbian Latin
- Serbian Cyrillic
- Macedonian
- Albanian
- German
- Italian
- French
- Spanish

It defaults to browser language when supported and remembers the user's manual selection.

## Reset Demo Data

The app includes a `Reset Demo Data` action that restores the seeded local demo dataset.

## Visual Attribution

- Dashboard archival hero image courtesy of The New York Public Library Digital Collections (Public Domain)
