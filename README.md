# Merul Badda Talks in Maths and Physics

This repository contains the source for the Merul Badda Talks website. The site is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
The design uses a minimal dark theme written in SCSS for a clean, technical look.

## Structure

```
_merulbadda/         Jekyll layouts, includes, and assets
  layouts/
  includes/
  assets/
_posts/              Optional blog posts
/talks/              Markdown files for each talk
about.md
upcoming.md
index.html
contact.md
previous-talks.md
_config.yml
```

## Adding a New Talk

1. Create a markdown file in the `talks/` directory named `YYYY-MM-DD-slug.md`.
2. Use the following front matter template:

```yaml
---
title: "Talk title"
date: YYYY-MM-DD
speaker: "Speaker name"
affiliation: "Affiliation"
abstract: >
  Full abstract text
speaker_photo: "/assets/images/speakers/NAME.jpg"
poster_image: "/assets/images/posters/POSTER.jpg"
youtube_url: "https://www.youtube.com/watch?v=VIDEOID"
---
```

3. Commit the file and images to the repository.

## Building Locally

Install Ruby and Jekyll, then run:

```bash
bundle install
bundle exec jekyll build --destination _site
bundle exec jekyll serve
```

## Deployment

The workflow in `.github/workflows/ci.yml` builds the site on pushes to `main` and uploads the generated `_site` folder as an artifact. You can adapt it to deploy to GitHub Pages.
