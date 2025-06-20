---
layout: default
title: "Upcoming Talks"
permalink: /upcoming/
---

<h2 class="page-title">Upcoming Talks</h2>
<ul class="upcoming-list">
  {% assign upcoming = site.talks | where_exp: 'talk', 'talk.date > site.time' | sort: 'date' %}
  {% for talk in upcoming %}

  <li>{{ talk.date | date: '%B %d, %Y' }} - {{ talk.title }}
  (<a href="{{ talk.url | relative_url }}">view abstract</a>)

  {% if talk.time %}(Time: {{ talk.time }}){% endif %}
  {% if talk.room %}(Room: {{ talk.room }}){% endif %}
  {% if talk.rsvp %}<a href="{{ talk.rsvp }}">RSVP</a>{% endif %}</li>
  {% endfor %}
</ul>
