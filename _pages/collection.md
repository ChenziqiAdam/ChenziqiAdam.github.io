---
layout: page
permalink: /collection/
title: collection
description: Books, writers, musicians, films, series, anime, and games I keep coming back to.
nav: true
nav_order: 4
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
      <div class="collection-headline">
        <div class="collection-title">{{ item.title }}</div>
        <div class="collection-subtitle">{{ item.subtitle }}</div>
        {% assign full = item.rating | floor %}
        {% assign has_half = item.rating | minus: full %}
        <div class="collection-rating" title="{{ item.rating }} / 5">
          {% for i in (1..5) %}{% if i <= full %}<span class="star full">&#9733;</span>{% elsif has_half > 0 and i == full | plus: 1 %}<span class="star half">&#9733;</span>{% else %}<span class="star empty">&#9733;</span>{% endif %}{% endfor %}
        </div>
      </div>
    </div>
    {% if item.quote %}
    <blockquote class="collection-quote">{{ item.quote }}</blockquote>
    {% endif %}
  </figure>
  {% endfor %}
</div>

{% endfor %}
