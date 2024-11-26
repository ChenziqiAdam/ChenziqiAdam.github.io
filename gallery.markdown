---
title: "My Gallery"
layout: splash
permalink: /gallery/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /images/wlop-Xiaolv-landscae.jpg
excerpt: "Welcome to my gallery. Enjoy my works!"
feature_row1:
  - image_path: /images/wlop-night.jpg
    alt: "Time Guardian"
    title: "Chrome Extension: Time Guardian"
    excerpt: 'Time Guardian is one Chrome Extension that combines Gemini with smart time remind functions.'
    url: "/cs/skills/2024/11/20/Time-Guardian"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /images/wlop-Fengling-reading.jpg
    alt: "Agent"
    title: "Law LLM Agent Design"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "/cs/ra/2024/09/08/how-to-implement-an-agent"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row:
  - image_path: /images/wlop-night.jpg
    alt: "Homepage"
    title: "My homepage"
    excerpt: "See my homepage!"
    url: "/home/"
    btn_class: "btn--primary"
    btn_label: "Homepage"
  - image_path: /images/wlop-Fengling-reading.jpg
    alt: "Posts"
    title: "My posts"
    excerpt: "See my posts!"
    url: "/tags/"
    btn_class: "btn--primary"
    btn_label: "Posts"
  - image_path: /images/wlop-Haiqinyan-reflection.jpg
    alt: "About me"
    title: "About me"
    excerpt: "Learn more about me!"
    url: "/about-me/"
    btn_class: "btn--primary"
    btn_label: "About me" 
---

{% include feature_row id="feature_row1" type="left" %}

{% include feature_row id="feature_row2" type="right" %}

{% include feature_row %}
