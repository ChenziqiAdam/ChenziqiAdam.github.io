---
layout: single
title:  "How to prepare pdf datasets from Wikipedia?"
date:   2025-07-14 16:00:10 +0800
categories:
  - CS
  - RA
  - Skills
tags:
  - Wikipedia
---

### How to prepare pdf datasets from Wikipedia for research purpose?

For researches focusing on LLM Memory, it is critical to set up multi document dataset of high quality. This blog is about how to download Wikipedia pages as pdf for research purpose.

#### 0. Prerequests: Access to Wikipedia

- Run the command to validate Internet connection
```shell
curl https://www.wikipedia.org/
```
- If fail, [another blog](https://ghost04718.github.io/cs/ra/skills/2025/07/05/linux-clash.html) might help you set up **Clash** on your server.

#### 1. Dataset Creation Pipeline

- See [M3DocVQA READMD](https://github.com/bloomberg/m3docrag/tree/main/m3docvqa#m3docvqa-dataset-creation-pipeline) for detailed implementations.

> **Trouble Shooting**
> If the pdf dowoloaded is not complete or is corrupted, try the following:
> - Add header disguise
> - Wait for complete loading: `page.wait_for_load_state("networkidle")`
> - Set up [Clash](https://ghost04718.github.io/cs/ra/skills/2025/07/05/linux-clash.html) for better connection

Now it is done!