---
layout: default
title: "Previous Talks"
---

<h2>Previous Talks</h2>
<ul>
  {% assign past = site.talks | where_exp: 'talk', 'talk.date <= site.time' | sort: 'date' | reverse %}
  {% for talk in past %}
  <li>{{ talk.date | date: '%B %d, %Y' }} - <a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></li>
  {% endfor %}
</ul>
