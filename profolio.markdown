---
title: "My Profolio"
layout: splash
permalink: /gallery/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /images/wlop-Xiaolv-landscape.jpg
excerpt: "Welcome to my profolio. Enjoy my works!"
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
    excerpt: 'How I design and implement the framework **LLM Agent** in Hexlaw.'
    url: "/cs/ra/ai/2024/09/08/how-to-implement-an-agent.html"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row:
  - image_path: /images/obsidian-homepage-dark.png
    alt: "Obsidian Homepage"
    title: "Obsidian Homepage"
    excerpt: "How I create and customize my Obsidian homepage"
    url: "/skills/2024/08/14/Obsidian-homepage.html"
    btn_class: "btn--primary"
    btn_label: "Read More"
  - image_path: /images/wlop-night.jpg
    alt: "Chinese Personal Website"
    title: "My Chinese Personal Website"
    excerpt: "Deployed by Vercel"
    url: "https://www.adamchen.tech/"
    btn_class: "btn--primary"
    btn_label: "Read More"
  - image_path: /images/wlop-Haiqinyan-reflection.jpg
    alt: "About me"
    title: "About me"
    excerpt: "My Resume"
    url: "/about-me/"
    btn_class: "btn--primary"
    btn_label: "Read More" 
---

{% include feature_row id="feature_row1" type="left" %}

{% include feature_row id="feature_row2" type="right" %}

{% include feature_row %}
