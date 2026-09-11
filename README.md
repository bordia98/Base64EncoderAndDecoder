# Base64 Encoder & Decoder

[![Live site](https://img.shields.io/badge/Live%20site-Base64%20Converter-4f46e5?style=flat-square)](https://bordia98.github.io/Base64EncoderAndDecoder/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e?style=flat-square)](LICENSE)

A small, fast Base64 encoder and decoder that runs entirely in the browser. It converts UTF-8 text—including emoji and international characters—without accounts, uploads, analytics, or stored input.

**Live site:** [bordia98.github.io/Base64EncoderAndDecoder](https://bordia98.github.io/Base64EncoderAndDecoder/)

## What it does

- Encodes plain UTF-8 text as standard Base64
- Decodes standard and URL-safe Base64 into readable text
- Handles emojis, accents, and non-Latin scripts correctly
- Includes accessible keyboard navigation and a `Cmd/Ctrl + Enter` conversion shortcut
- Offers responsive light and dark themes; light is the default
- Uses only static HTML, CSS, and JavaScript—no build step and no dependencies

## Privacy and security

All conversion happens in browser memory. This site does **not** use a backend, cookies, local storage, analytics, telemetry, or network requests.

Base64 is encoding, not encryption. Do not treat a Base64 value as protected or use it to share secrets such as passwords, API keys, or access tokens.

## Use locally

Clone the project, then open `index.html` in any modern browser. Nothing needs to be installed.

```bash
git clone https://github.com/bordia98/Base64EncoderAndDecoder.git
cd Base64EncoderAndDecoder
open index.html
```

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**, select `main`, and select the `/ (root)` folder.
4. Save. The site will publish at [https://bordia98.github.io/Base64EncoderAndDecoder/](https://bordia98.github.io/Base64EncoderAndDecoder/).

## Search engine readiness

The production page includes a unique title and description, a self-referencing canonical URL, `robots.txt`, XML sitemap, Open Graph/Twitter sharing metadata, and `WebApplication` structured data. It is verified for Google Search Console with a meta tag.

After a production change, submit or resubmit [sitemap.xml](https://bordia98.github.io/Base64EncoderAndDecoder/sitemap.xml) in Google Search Console and use URL Inspection to request indexing when appropriate. Search appearance and timing are ultimately determined by search engines.

## Project structure

```text
index.html    Page content, metadata, and structured data
styles.css    Responsive light and dark theme
script.js     In-browser conversion logic
robots.txt    Crawler directives and sitemap reference
sitemap.xml   Canonical page URL for crawlers
```

## Contributing

Suggestions and focused pull requests are welcome. Please keep the project dependency-free, static-host friendly, accessible, and privacy-first. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
