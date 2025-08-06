---
layout: default
title: "Lecture Series"
permalink: /lecture-series/
---

<h2 class="page-title">Lecture Series</h2>
<ul class="lecture-series-list">
  {% assign lectures = site.lectures | sort: 'date' %}
  {% for lecture in lectures %}
  <li>{{ lecture.date | date: '%B %d, %Y' }} - <a href="{{ lecture.url | relative_url }}">{{ lecture.title }}</a> ({{ lecture.speaker }})</li>
  {% endfor %}
</ul>
