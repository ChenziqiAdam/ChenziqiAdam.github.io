# chenziqiadam.github.io

Personal website of Ziqi (Adam) Chen.

Built with [al-folio](https://github.com/alshedivat/al-folio) (v1.x, gem-based) and
hosted on GitHub Pages. Deployed by the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes `_site/` to the
`gh-pages` branch.

## Local development

```bash
bundle install
npm ci
bundle exec jekyll serve   # http://localhost:4000
```

The previous Minimal Mistakes version of the site is preserved on the `old-back-up` branch.
