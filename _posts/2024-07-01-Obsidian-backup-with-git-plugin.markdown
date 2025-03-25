---
layout: single
title:  "How to backup Obsidian"
date:   2024-07-01 23:08:10 +0800
categories: 
  - Skills
tags:
  - Obsidian
  - Git
---
### How to backup Obsidian with Git plugin
Since Obsidian files are local, it is important to back them up. The Git plugin is a free and general option compared to the official.

1. Download the **Git plugin** in Obsidian (it is a **third-party** plugin so make sure you turn off the security mode).
2. Download **Git**
3. Create a repository in **GitHub**
4. **Initialize** the local Obsidian vault (all codes run in Git terminal)
```
git init
```
5. Add `origin` to the local Git repository(vault): 
```
git remote add origin https://github.com/your_username/your_repository_name/
```
6. 'Merge' the local Git repository with the remote one: 
```
git pull https://github.com/your_username/your_repository_name/ main --allow-unrelated-histories`
```
> **Note**: the default branch name for GitHub repository is **main**, while the default branch name for local repository is **master**. This may cause errors. You can create a local branch named **main**.
```
git branch -M main
```
7. Then the configuration is done. You can custom the `Vault backup interval` and `Auto pull interval` in Obsidian Git plugin.

More see [Obsidian-Git documentation](https://publish.obsidian.md/git-doc/Start+here) (although I find it quite useless and unclear to beginners).

Now it is done!
