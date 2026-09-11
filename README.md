# Base64 Encoder & Decoder

[![Live site](https://img.shields.io/badge/Live%20site-Base64%20Converter-4f46e5?style=flat-square)](https://bordia98.github.io/Base64EncoderAndDecoder/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e?style=flat-square)](LICENSE)

A fast, private Base64 converter that runs entirely in your browser. Encode UTF-8 text to Base64 or decode standard and URL-safe Base64 back to readable text—no account, installation, upload, or tracking required.

**Try it:** [bordia98.github.io/Base64EncoderAndDecoder](https://bordia98.github.io/Base64EncoderAndDecoder/)

## Features

- Encode plain text as standard Base64.
- Decode standard Base64 and URL-safe Base64 (`-` and `_`).
- Correctly handles UTF-8 text, including emojis, accents, and non-Latin scripts.
- Swap input and output, then copy the converted result.
- Convert with the button or `Cmd/Ctrl + Enter`.
- Responsive light and dark themes with keyboard-accessible controls.
- A dependency-free static site: plain HTML, CSS, and JavaScript.

## How to use it

1. Choose **Encode text** or **Decode Base64**.
2. Paste or type your value in the input panel.
3. Select **Encode to Base64** or **Decode to text**.
4. Copy the result when needed.

For example, encoding `Hello, world! 👋` produces:

```text
SGVsbG8sIHdvcmxkISDwn5GL
```

## Privacy and security

All conversion happens in browser memory. The site has no backend, analytics, cookies, local storage, telemetry, or server-side processing. Your input is not uploaded or retained.

> Base64 is an encoding, not encryption. Anyone can decode it, so never use it to protect passwords, API keys, access tokens, or other secrets.

## Run locally

No dependencies or build step are required. Clone the repository and open `index.html` in a modern browser:

```bash
git clone https://github.com/bordia98/Base64EncoderAndDecoder.git
cd Base64EncoderAndDecoder
open index.html
```

## Project structure

```text
index.html    Page content, metadata, and structured data
styles.css    Responsive light and dark theme
script.js     Unicode-safe in-browser conversion logic
robots.txt    Crawler directives and sitemap reference
sitemap.xml   Canonical URL for search crawlers
```

## Deploying to GitHub Pages

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.

The site will be available at [https://bordia98.github.io/Base64EncoderAndDecoder/](https://bordia98.github.io/Base64EncoderAndDecoder/).

## Contributing

Contributions and focused pull requests are welcome. Please keep the project static, accessible, dependency-free, and privacy-first. See [CONTRIBUTING.md](CONTRIBUTING.md) for development and testing guidance.

## License

This project is available under the [MIT License](LICENSE).
