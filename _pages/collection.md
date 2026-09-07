---
layout: page
permalink: /collection/
title: collection
description: Books, writers, musicians, films, series, anime, and games I keep coming back to.
nav: true
nav_order: 5
toc:
  sidebar: left
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
    <div class="collection-cover">
      <img loading="lazy" src="{{ item.image | relative_url }}" alt="{{ item.alt }}">
      {% if item.quote %}
      <div class="collection-quote-overlay">
        <p>&ldquo;{{ item.quote }}&rdquo;</p>
      </div>
      {% endif %}
    </div>
    <figcaption>
      <div class="collection-title">{{ item.title }}</div>
      <div class="collection-meta">
        <span class="collection-subtitle">{{ item.subtitle }}</span>
        {% assign full = item.rating | floor %}
        {% assign has_half = item.rating | minus: full %}
        <span class="collection-rating" title="{{ item.rating }} / 5">
          {% for i in (1..5) %}{% if i <= full %}&#9733;{% else %}&#9734;{% endif %}{% endfor %}{% if has_half > 0 %}&#189;{% endif %}
        </span>
      </div>
    </figcaption>
  </figure>
  {% endfor %}
</div>

{% endfor %}
