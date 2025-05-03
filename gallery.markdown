---
title: "My Gallery"
layout: splash
permalink: /gallery/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /images/wlop-Xiaolv-landscape.jpg
excerpt: "Welcome to my gallery. Enjoy my works!"
feature_row1:
  - image_path: /images/time-guardian.png
    alt: "Time Guardian"
    title: "Chrome Extension: Time Guardian"
    excerpt: '**Time Guardian** is one Chrome Extension that combines **Gemini** with smart time remind functions.'
    url: "/cs/skills/ai/2024/11/20/Time-Guardian.html"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /images/agent-demo.png
    alt: "Agent"
    title: "LLM Agent"
    excerpt: 'This is how I design and implement one **LLM Agent** in labor dispute.'
    url: "/cs/ra/ai/2024/09/08/how-to-implement-an-agent.html"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row:
  - image_path: /images/wlop-night.jpg
    alt: "Homepage"
    title: "My homepage"
    excerpt: "See my homepage!"
    url: "/"
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
