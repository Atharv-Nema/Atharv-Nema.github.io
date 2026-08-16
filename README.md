# Atharv-Nema.github.io

Personal site and blog — [atharv-nema.github.io](https://atharv-nema.github.io/)

Built with [Astro](https://astro.build). Static HTML, no framework, no CSS
library. Maths is rendered at build time with KaTeX.

## Running it locally

Needs Node 22 (pinned in `.nvmrc`):

```bash
nvm use
npm install
npm run dev      # http://localhost:4321
```

| Command           | Does                                       |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Local dev server with hot reload           |
| `npm run build`   | Production build into `dist/`              |
| `npm run preview` | Serve `dist/` locally, exactly as deployed |

Run `npm run build` before pushing anything significant — it catches broken
frontmatter and bad links that the dev server will happily tolerate.

## Writing a post

Add a `.md` or `.mdx` file to `src/content/blog/`. The filename becomes the URL,
so `monte-carlo.mdx` is served at `/blog/monte-carlo`. Nothing to register — the
index picks it up. Frontmatter is validated against `src/content.config.ts`:

```yaml
---
title: 'Post title'
description: 'Shown on the blog index and in link previews.'
pubDate: 2026-08-16
tags: ['optional']
draft: false # true keeps it off the live site
---
```

Use `.md` for prose, code and maths; use `.mdx` when a post needs interactive
components. `/blog/writing-posts` is a live reference for everything supported.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. Progress is under the repo's **Actions** tab.
