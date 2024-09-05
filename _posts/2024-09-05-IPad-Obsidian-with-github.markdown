---
layout: single
title:  "How to sync Obsidian on iPad with PC"
date:   2024-09-05 18:43:30 +0800
categories:
  - Skills
tags:
  - Obsidian
  - Git
  - Github
---
### How to sync your Obsidian on iPad with PC via GitHub?
This blog requires you to backup your Obsidian vault via **GitHub**. See [my blog](https://ghost04718.github.io/obsidian/2024/07/01/Obsidian-backup-with-git-plugin.html) about how to do it.

Obsidian works will on PC with the **Git** plugin and **GitHub**. However, due to limited ways to sync Obsidian, it is difficult to sync your Obsidian on iPad with that on your PC. This blog is about using **iSH** (an app which is called "Linux shell for iOS) to sync your Obsidian vault with **GitHub**.

1. Download Obsidian and iSH in App Store.
2. Open Obsidian, specify a folder for your Obsidian vaults and create your vault.
3. Open iSH and download Git: run `apk update` and `apk add git`
4. Get the local vault sync with your GitHub repository
    1. change directory to your Obsidian folder
    2. change directory to your vault just created
    3. run `git init`
    4. run `git remote add origin your_github_repo_url`
    5. run `git pull origin main`
5. Now your local vault has synced with your GitHub repo. Don't forget to set the settings and pulgins.

> **Troubleshooting**:
    - Cannot init your local repository
        - run `git config --global --add safe.directory '*'`
    - Cannot authorize with your GitHub password
        - go to your GitHub account -> `Settings` -> `Developer Settings` -> retrive your **Personal access token** -> replace the password with the token

Now it is done!
