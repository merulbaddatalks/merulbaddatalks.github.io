---
layout: default
title: "Posters"
permalink: /posters/
---

<h2 class="page-title">Posters</h2>
<p>Click a poster to open its event page.</p>

{% assign poster_talks = site.talks | where_exp: 'talk', 'talk.poster_image' | sort: 'date' | reverse %}
{% assign poster_lectures = site.lectures | where_exp: 'lecture', 'lecture.poster_image' | sort: 'date' | reverse %}

<section class="poster-section">
  <h3>Talk Posters</h3>
  <div class="posters-grid">
    {% for talk in poster_talks %}
    <article class="poster-card">
      <a href="{{ talk.url | relative_url }}" aria-label="Open event page for {{ talk.title | xml_escape }}">
        <img src="{{ talk.poster_image | relative_url }}" alt="Poster for {{ talk.title | xml_escape }}">
        <div class="poster-card-content">
          <h4 class="poster-card-title">{{ talk.title }}</h4>
          <p class="poster-card-speaker">{{ talk.speaker }}</p>
          <p class="poster-card-date">{{ talk.date | date: '%B %d, %Y' }}</p>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
</section>

{% if poster_lectures != empty %}
<section class="poster-section">
  <h3>Lecture Posters</h3>
  <div class="posters-grid">
    {% for lecture in poster_lectures %}
    <article class="poster-card">
      <a href="{{ lecture.url | relative_url }}" aria-label="Open event page for {{ lecture.title | xml_escape }}">
        <img src="{{ lecture.poster_image | relative_url }}" alt="Poster for {{ lecture.title | xml_escape }}">
        <div class="poster-card-content">
          <h4 class="poster-card-title">{{ lecture.title }}</h4>
          <p class="poster-card-speaker">{{ lecture.speaker }}</p>
          <p class="poster-card-date">{{ lecture.date | date: '%B %d, %Y' }}</p>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
</section>
{% endif %}
