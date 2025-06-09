---
layout: default
title: "Upcoming Talks"
---

<h2>Upcoming Talks</h2>
<ul>
  {% assign upcoming = site.talks | where_exp: 'talk', 'talk.date > site.time' | sort: 'date' %}
  {% for talk in upcoming %}
  <li>{{ talk.date | date: '%B %d, %Y' }} - <a href="{{ talk.url }}">{{ talk.title }}</a></li>
  {% endfor %}
</ul>
