---
layout: default
title: "Previous Talks"
---

<h2>Previous Talks</h2>
<table class="talk-table previous-talks-table">
  <thead>
    <tr><th>Date</th><th>Title</th><th>Speaker</th><th>Affiliation</th><th>Recording</th><th>Slides</th></tr>
  </thead>
  <tbody>
    {% assign past = site.talks | where_exp: 'talk', 'talk.date <= site.time' | sort: 'date' | reverse %}
    {% for talk in past %}
    <tr>
      <td data-label="Date">{{ talk.date | date: '%Y-%m-%d' }}</td>
      <td data-label="Title"><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></td>
      <td data-label="Speaker">{{ talk.speaker }}</td>
      <td data-label="Affiliation">{{ talk.affiliation }}</td>
      <td data-label="Recording">{% if talk.youtube_url %}<a href="{{ talk.youtube_url }}">Video</a>{% else %}N/A{% endif %}</td>
      <td data-label="Slides">{% if talk.slides_url %}<a href="{{ talk.slides_url }}">Slides</a>{% else %}N/A{% endif %}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<div class="previous-talks-cards">
  {% assign past = site.talks | where_exp: 'talk', 'talk.date <= site.time' | sort: 'date' | reverse %}
  {% for talk in past %}
  <div class="talk-card">
    <div class="talk-date">{{ talk.date | date: '%B %d, %Y' }}</div>
    <div class="talk-title"><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></div>
    <div class="talk-speaker">{{ talk.speaker }}</div>
    {% if talk.affiliation %}<div class="talk-affiliation">{{ talk.affiliation }}</div>{% endif %}
    <div class="talk-links">
      {% if talk.youtube_url %}<a href="{{ talk.youtube_url }}">Video</a>{% endif %}
      {% if talk.slides_url %}{% if talk.youtube_url %} | {% endif %}<a href="{{ talk.slides_url }}">Slides</a>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>
