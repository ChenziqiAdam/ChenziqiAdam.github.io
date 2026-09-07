---
layout: page
permalink: /collection/
title: collection
description: Books, writers, musicians, films, series, anime, and games I keep coming back to.
nav: true
nav_order: 5
---

<link rel="stylesheet" href="{{ '/assets/css/collection.css' | relative_url }}">

{% assign groups = "books,artists,digitals" | split: "," %}
{% assign labels = "Books,Artists,Screen & Games" | split: "," %}

{% for group in groups %}
{% assign items = site.data.collection[group] %}
{% assign label = labels[forloop.index0] %}

## {{ label }}

<div class="collection-grid">
  {% for item in items %}
  <figure class="collection-card">
    <img loading="lazy" src="{{ item.image | relative_url }}" alt="{{ item.alt }}">
    <figcaption>
      <div class="collection-title">{{ item.title }}</div>
      <div class="collection-subtitle">{{ item.subtitle }}</div>
      {% if item.quote %}<blockquote class="collection-quote">{{ item.quote }}</blockquote>{% endif %}
      {% assign full = item.rating | floor %}
      {% assign has_half = item.rating | minus: full %}
      <div class="collection-rating" aria-label="Rating {{ item.rating }} out of 5">
        {% for i in (1..5) %}{% if i <= full %}★{% else %}☆{% endif %}{% endfor %}{% if has_half > 0 %} ½{% endif %}
      </div>
    </figcaption>
  </figure>
  {% endfor %}
</div>

{% endfor %}
