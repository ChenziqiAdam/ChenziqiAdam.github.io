---
layout: single
title:  "How to create your own site"
date:   2024-07-02 15:35:45 +0800
categories:
  - CS
  - Skills
tags:
  - Jekyll
  - GitHub
  - Minimal Mistakes
  - Git
---
### How to create your own site with GitHub Pages
This blog will show the steps of how to create your own personal site like this.

**Conponets**: GitHub Pages, Jekyll, Minimal Mistakes
### 1. GitHub Pages
Set up your **GitHub Pages**: [the official guide](https://pages.github.com/) cannot be more pellucid.
### 2. Jekyll
Set up **Jekyll**: you can go to Jekyll documents at the button of GitHub Pages website or [here](https://jekyllrb.com/docs/).
1. Follow the steps in **Prerequisites** and run 
```
gem install jekyll bundler
```
2. Make sure you are in your local project folder (where you just cloned your GitHub repository), if not, run `cd your_repository_location`.
3. Run 
```
jekyll new --skip-bundle
```
4. Open the **Gemfile** that Jekyll created
    1. Add "#" to the beginning of the line that starts with `gem "jekyll"` to comment out this line.
    2. Add the `github-pages` gem by editing the line starting with `# gem "github-pages"`. Change this line to: `gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins`
    3. **Replace** `GITHUB-PAGES-VERSION` with the latest supported version of the `github-pages` gem. You can find this version [here](https://pages.github.com/versions/).
5. Run 
```
bundle install
```
> **Troubleshooting**
> - If there is error about "wdm", try comment this line in **Gemfile**: `gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]`
> - Remember to run `bundle install` and `bundle update` everytime after you modify the **Gemfile**.
6. **Build** the site and see it on your local server
```
bundle exec jekyll serve
```

So far Jekyll should be set up, you can custom it in `_config.yml`. More see [the official guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll).
### 3. Minimal Mistakes
Set up **Minimal Mistakes** (a Jekyll theme)
1. Go to [Minimal Mistakes document](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/) and install via **Remote theme method**.
2. So far Minimal Mistakes should be set up, you can custom according to [the official configuration](https://mmistakes.github.io/minimal-mistakes/docs/configuration/).
3. You can also have a look at [Minimal Mistakes Github repository](.https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll). There are samples pages for reference.
>**Note**: everything in \_site/ will be rebuilt after you run `bundle exec jekyll serve`. So remember to store your files outside.

Now it is done!
