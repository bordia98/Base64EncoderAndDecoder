# Base64 Text Converter

A lightweight, privacy-first Base64 encoder and decoder. It runs entirely in the browser: no accounts, analytics, uploads, or stored input.

## Features

- Encode text to Base64 and decode Base64 to UTF-8 text
- Unicode-safe (including emoji and non-Latin scripts)
- Supports standard and URL-safe Base64 when decoding
- Responsive light and dark themes; light is the default
- Keyboard shortcut: `Cmd/Ctrl + Enter` to convert
- Static files only—ideal for GitHub Pages

## Run locally

Open `index.html` in a modern browser. No build step or dependencies are needed.

## Publish with GitHub Pages

1. Push this repository to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Set the source to **Deploy from a branch**, select `main` (or your publishing branch), and choose `/ (root)`.
4. Save. GitHub will publish the site at `https://bordia98.github.io/Base64EncoderAndDecoder/`.
5. The canonical URL, structured data, GitHub link, robots directive, and sitemap are already set for this repository.

## SEO notes

The page includes a descriptive title, meta description, canonical URL placeholder, robots directives, structured data, and a sitemap. After deployment, submit the final sitemap URL in Google Search Console to help discovery.

## Privacy

Conversion happens in-memory through browser APIs. This project intentionally does not use cookies, local storage, server requests, analytics, or telemetry.

## License

MIT. See [LICENSE](LICENSE).
