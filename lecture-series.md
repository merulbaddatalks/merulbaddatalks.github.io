---
layout: default
title: "Lecture Series"
permalink: /lecture-series/
---

<h2>Lecture Series</h2>
<table class="talk-table lecture-series-table">
  <thead>
    <tr><th>Date</th><th>Title</th><th>Speaker</th></tr>
  </thead>
  <tbody>
    {% assign lectures = site.lectures | sort: 'date' | reverse %}
    {% for lecture in lectures %}
    <tr>
      <td data-label="Date">{{ lecture.date | date: '%Y-%m-%d' }}</td>
      <td data-label="Title"><a href="{{ lecture.url | relative_url }}">{{ lecture.title }}</a></td>
      <td data-label="Speaker">{{ lecture.speaker }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<div class="lecture-series-cards">
  {% assign lectures = site.lectures | sort: 'date' | reverse %}
  {% for lecture in lectures %}
  <div class="talk-card">
    <div class="talk-date">{{ lecture.date | date: '%B %d, %Y' }}</div>
    <div class="talk-title"><a href="{{ lecture.url | relative_url }}">{{ lecture.title }}</a></div>
    <div class="talk-speaker">{{ lecture.speaker }}</div>
  </div>
  {% endfor %}
</div>
