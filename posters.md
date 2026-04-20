---
layout: default
title: "Posters"
permalink: /posters/
---

{% assign talk_posters = site.talks | where_exp: 'talk', 'talk.poster_image' %}
{% assign lecture_posters = site.lectures | where_exp: 'lecture', 'lecture.poster_image' %}
{% assign all_posters = talk_posters | concat: lecture_posters | sort: 'date' | reverse %}

<div class="posters-grid posters-grid-minimal">
  {% for item in all_posters %}
  <article class="poster-card poster-card-minimal">
    <a href="{{ item.url | relative_url }}" aria-label="Open event page for {{ item.title | xml_escape }}">
      <img src="{{ item.poster_image | relative_url }}" alt="Poster for {{ item.title | xml_escape }}">
    </a>
  </article>
  {% endfor %}
</div>
