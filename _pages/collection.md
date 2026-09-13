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
<link rel="stylesheet" href="{{ '/assets/css/travel-map.css' | relative_url }}">

## Places I've Visited

<div class="travel-map-container" id="travel-map"></div>

<script src="https://cdn.jsdelivr.net/npm/d3@7.8.5/dist/d3.min.js" integrity="sha256-1rA678n2xEx7x4cTZ5x4wpUCj6kUMZEZ5cxLSVSFWxw=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
<script>
(function () {
  const visitedPlaces = {{ site.data.travel.places | jsonify }};

  const container = document.getElementById('travel-map');
  const width = container.clientWidth;
  const height = container.clientHeight;

  const svg = d3.select('#travel-map')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`);

  const projection = d3.geoNaturalEarth1()
    .fitSize([width, height], { type: 'Sphere' });

  const path = d3.geoPath().projection(projection);

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(function (data) {
      const countries = topojson.feature(data, data.objects.countries);

      svg.append('g')
        .selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('class', 'travel-map-country')
        .attr('d', path);

      const dots = svg.selectAll('circle')
        .data(visitedPlaces)
        .enter()
        .append('circle')
        .attr('class', 'travel-map-dot')
        .attr('cx', d => projection(d.coords)[0])
        .attr('cy', d => projection(d.coords)[1])
        .attr('r', d => d.size)
        .attr('opacity', 0.8);

      dots.append('title').text(d => d.name);
    })
    .catch(function (error) {
      console.error(error);
      container.innerHTML = `
        <div class="travel-map-fallback">
          <h3>Places I've Visited</h3>
          <ul>${visitedPlaces.map(p => `<li>${p.name}</li>`).join('')}</ul>
        </div>
      `;
    });
})();
</script>

{% assign groups = "books,artists,digitals" | split: "," %}
{% assign labels = "Books,Artists,Screen & Games" | split: "," %}
{% assign subtype_orders = "novel|essay,writer|musician,drama|movie|anime|game" | split: "," %}
{% assign subtype_labels = "Novels|Essays,Writers|Musicians,Dramas|Movies|Anime|Games" | split: "," %}

{% for group in groups %}
{% assign items = site.data.collection[group] %}
{% assign label = labels[forloop.index0] %}
{% assign order = subtype_orders[forloop.index0] | split: "|" %}
{% assign sub_labels = subtype_labels[forloop.index0] | split: "|" %}

## {{ label }}

{% for subtype in order %}
{% assign sub_label = sub_labels[forloop.index0] %}
{% assign subitems = items | where: "type", subtype %}
{% if subitems.size > 0 %}
### {{ sub_label }}

<div class="collection-grid">
  {% for item in subitems %}
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
{% endif %}
{% endfor %}

{% endfor %}
