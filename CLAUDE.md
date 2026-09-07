## Instructions

Answer short and concise.

Break the task down and implement step by step.

Be serious and professional. This is about research, always consider thoroughly and verify your answer before respond.

## Background

This is my personal website, built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme
(gem-based "thin starter" — layouts and includes come from the `al_folio_core` gem, not this repo) and
hosted on GitHub Pages at chenziqiadam.github.io. It deploys via the GitHub Actions workflow in `.github/workflows/deploy.yml`,
which builds the site and pushes `_site/` to the `gh-pages` branch.

The previous Minimal Mistakes version of the site is preserved on the `old-back-up` branch.

## Local development

```bash
bundle install
npm ci
bundle exec jekyll serve   # http://localhost:4000
```

## Structure

- `_pages/` — top-level pages (about, blog, research, projects, collection, cv). Nav controlled by `nav:` / `nav_order:`.
- `_posts/` — blog posts (`layout: post`).
- `_projects/` — project cards shown on `/projects/`.
- `_data/collection.yml` — data for the custom `/collection/` page (books, artists, dramas/movies/etc.).
- `_layouts/collection.liquid` — layout for the custom collection page.
- `assets/img/` — all images (no more `images` submodule).
- `assets/pdf/` — CV and paper PDFs.
