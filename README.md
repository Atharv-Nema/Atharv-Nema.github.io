# Atharv-Nema.github.io

Personal site and blog — [atharv-nema.github.io](https://atharv-nema.github.io/)

Built with [Astro](https://astro.build). Static HTML, no framework, no CSS
library. Maths is rendered at build time with KaTeX.

## Running it locally

This project needs Node 22 (the version is pinned in `.nvmrc`):

```bash
nvm use          # reads .nvmrc
npm install      # first time only
npm run dev      # http://localhost:4321
```

The dev server hot-reloads: save a file and the browser updates instantly.

| Command           | Does                                        |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Local dev server with hot reload            |
| `npm run build`   | Production build into `dist/`               |
| `npm run preview` | Serve `dist/` locally, exactly as deployed  |

Run `npm run build` before pushing anything significant — it catches broken
frontmatter and bad links that the dev server will happily tolerate.

## Where things live

```
src/
  pages/            One file = one URL
    index.astro       /
    contact.astro     /contact
    blog/
      index.astro     /blog          (post listing)
      [...id].astro   /blog/<slug>   (template for every post)
  content/blog/     The posts themselves — .md and .mdx
  layouts/          Page shells; BaseLayout has the nav, footer and head
  components/       Reusable pieces for posts (Aside, SineWave)
  styles/global.css All site-wide styling; colours are variables at the top
  lib/urls.ts       Link helper (see "Deployment" below)
content.config.ts   Frontmatter schema every post is validated against
```

## Writing a post

Add a file to `src/content/blog/`. The filename becomes the URL, so
`monte-carlo.mdx` is served at `/blog/monte-carlo`. Nothing to register — the
index picks it up.

```yaml
---
title: 'Post title'
description: 'Shown on the blog index and in link previews.'
pubDate: 2026-08-16
tags: ['optional']
draft: false # true keeps it off the live site
---
```

Use `.md` for prose, code and maths; use `.mdx` when you want interactive
components. `src/content/blog/writing-posts.mdx` is a live reference for
everything supported — read it rendered at `/blog/writing-posts` and in source
side by side.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Progress is under the repo's **Actions** tab.

One-time GitHub setup: **Settings → Pages → Source: GitHub Actions**.

The repo is named `Atharv-Nema.github.io`, which GitHub recognises as a user
site and serves from the domain root — so there is no path prefix to worry
about, and a custom domain would drop in cleanly later.

Internal links still go through the `href()` helper in `src/lib/urls.ts`. It is
close to a no-op today; it exists so that hosting the site under a subpath later
is a one-line config change rather than a hunt through every file.
