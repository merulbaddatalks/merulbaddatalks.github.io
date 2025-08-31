---
layout: default
title: "Lecture Series"
permalink: /lecture-series/
---

<h2 class="page-title">Lecture Series</h2>
<ul class="lecture-series-list">
  {% assign lectures = site.lectures | sort: 'date' %}
  {% for lecture in lectures %}
  <li class="lecture-item">
    <span class="lecture-date">{{ lecture.date | date: '%B %d, %Y' }}</span>
    <a class="lecture-title" href="{{ lecture.url | relative_url }}">{{ lecture.title }}</a>
    <span class="lecture-speaker">{{ lecture.speaker }}</span>
  </li>
  {% endfor %}
</ul>
