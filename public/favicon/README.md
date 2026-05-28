# Favicon package

This directory contains the generated Let Books favicon package based on `https://letbooks.org/docs/assets/images/logo-mark-symbol.svg`.

## HTML tags

For this repository's current static site layout, use `public/favicon/...` from the site root HTML and relative `../public/favicon/...` or `../../public/favicon/...` from nested pages.

```html
<link rel="icon" href="/public/favicon/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/public/favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/public/favicon/favicon.ico" sizes="any">
<link rel="icon" href="/public/favicon/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/public/favicon/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="/public/favicon/apple-touch-icon.png" sizes="180x180">
<link rel="manifest" href="/public/favicon/site.webmanifest">
<meta name="theme-color" content="#0f5b45">
```

## Next.js App Router metadata

```ts
import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/public/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/public/favicon/favicon-dark.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
      { url: '/public/favicon/favicon.ico', sizes: 'any' },
      { url: '/public/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/public/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/public/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/public/favicon/site.webmanifest',
  themeColor: '#0f5b45',
}
```

## Vite setup

Add this to `index.html` in a Vite app so it respects `base` during production builds:

```html
<link rel="icon" href="%BASE_URL%public/favicon/favicon.svg" type="image/svg+xml">
<link rel="icon" href="%BASE_URL%public/favicon/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)">
<link rel="icon" href="%BASE_URL%public/favicon/favicon.ico" sizes="any">
<link rel="icon" href="%BASE_URL%public/favicon/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="%BASE_URL%public/favicon/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="%BASE_URL%public/favicon/apple-touch-icon.png" sizes="180x180">
<link rel="manifest" href="%BASE_URL%public/favicon/site.webmanifest">
<meta name="theme-color" content="#0f5b45">
```

## Dark mode note

`favicon-dark.svg` adds a subtle warm halo behind the symbol so the green mark stays legible in dark browser UI while preserving transparency.
