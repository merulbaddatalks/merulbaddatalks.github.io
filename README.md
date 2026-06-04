# Merul Badda Talks in Maths and Physics

This repository contains the source for the Merul Badda Talks website. The site is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
The design uses a minimal dark theme written in SCSS for a clean, technical look.

## Structure

```
_merulbadda/         Jekyll layouts, includes, and assets
  layouts/
  includes/
  assets/
_talks/              Markdown files for each talk
_lectures/           Markdown files for each lecture series entry
assets/              Shared images, scripts, and compiled CSS
posters/             Poster images used by talks and lecture series
about.md
index.html
lecture-series.md
posters.md
previous-talks.md
upcoming.md
talks.json
_config.yml
```

## Adding a New Talk

1. Create a markdown file in the `_talks/` directory named `YYYY-MM-DD-slug.md`.
2. Use the following front matter template:

```yaml
---
title: "Talk title"
date: YYYY-MM-DD
time: "5:00 PM"
speaker: "Speaker name"
affiliation: "Affiliation"
poster_image: "/posters/slug.jpg"
room: "Room name"
abstract: >
  Full abstract text
speaker_photo: "/assets/images/speakers/NAME.jpg"
---
```

3. Add `rsvp`, `youtube_url`, or `slides_url` only when a real URL is available.
4. Commit the file and any related images to the repository.

## Adding a New Lecture Series Entry

1. Create a markdown file in the `_lectures/` directory named `YYYY-MM-DD-slug.md`.
2. Use the following front matter template:

```yaml
---
title: "Lecture title"
date: YYYY-MM-DD
speaker: "Speaker name"
affiliation: "Affiliation"
mode: "online" # or "offline"
rsvp: "https://example.com/rsvp"
abstract: >
  Full abstract text
notes_url: "https://example.com/notes.pdf"
sessions:
  - number: 1
    title: "Introduction to Samples"
    recording: "https://example.com/recording"
    notes: "https://example.com/notes-1.pdf"
  - number: 2
    title: "Advanced Sample Techniques"
---
```

3. Add optional fields such as `speaker_photo`, `recording_url`, session `recording`, and session `notes` only when real URLs are available.
4. Commit the file and any related assets to the repository.

## Building Locally

Install Ruby and Jekyll, then run:

```bash
bundle install
bundle exec jekyll build --destination _site
bundle exec jekyll serve
```

## Deployment

The workflow in `.github/workflows/ci.yml` builds the site on pushes to `main` and uploads the generated `_site` folder as an artifact. You can adapt it to deploy to GitHub Pages.
