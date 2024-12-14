---
layout: single
title:  "Ten Tips for Cursor"
date:   2024-12-14 13:53:15 +0800
categories:
  - CS
  - Skills
tags:
  - Cursor
---
### Ten Tips for Coding Better with Cursor
[Cursor](https://www.cursor.com/) is the most helpful tool for **project development**. It is more than a simple IDE, but a software engineer. Check [my blog website](https://adamchen.tech) I created with Cursor. So here are ten tips I find helpful for coding better with Cursor.

#### 1. Always Start with a new folder.
Cursor is good at starting from scratch. This way it can access all files and has its own systematic development. If you want it to continue some existing development, it is very likely that it cannot access some files and create duplicate codes.

#### 2. Provide a Crystal and Clear `GUIDE.md`
List all your demands in a **`GUIDE.md`**. Clearly state what software you want it to build, what technique you want it to use, and how you want it to develop. Cursor can get confused if your instructions are ambiguious. Then things may get out of track. 

Below is my example:
```markdown
# Adam Chen's Blog System

## 1. Functional Requirements

1. **Markdown Rendering**: Supports code highlighting and LaTeX mathematical formulas.

2. **Tag System**: Articles are displayed by tag classification.

3. **Search System**: Supports full-text search by keywords.

4. **Markdown Blog Storage**: Write blogs by uploading Markdown files and store metadata in the database.

5. **Likes and Comments**: Anonymous users can like and comment.

6. **Knowledge Graph Page**: Displays dynamic visual graphs of knowledge associations.

7. **Portfolio Page**: Used to showcase personal projects or achievements.

8. **About Me Page**: Introduces personal information and contact details.

9. **Theme Style**: Fresh and simple, with orange as the main color.

---

## 2. Technology Stack

### Backend

- **Framework**: Flask (lightweight, suitable for small blogs).

- Markdown Rendering: `flask-markdown`, `markdown-it-py`.

- Database: SQLite (development) / PostgreSQL (production).

- Search: SQLite full-text search (FTS) or simple LIKE queries.

### Frontend

- **UI Framework**: HTML + JavaScript + CSS.

- **Markdown Rendering**: `marked.js`, code highlighting using `highlight.js`, LaTeX rendering using KaTeX.

- **Knowledge Graph**: `d3.js`, `vis.js`.

### Deployment

- Deploy Flask application using `gunicorn`.

- Use `nginx` as a reverse proxy.
```

#### 3. Maintain a `README.md`
Ask Cursor to maintain a **`README.md`** when developing. In this way, Cursor can keep in mind what it is building and check how far it has gone.

#### 4. Maintain a `PROGRESS.md`
This also aims to remind Cursor what has been done and what to do next. Remember to ask Cursor keep updating when developing.

#### 5. Customize the Rules
The above two points can be achieved by customizing `Rules for AI` (`Settings` -> `General` -> `Rules for AI`).

Below are my rules:
```markdown
1. Create a `README.md` and a `PROGRESS.md` at the beginning. Check the two files and keep updating them everytime. 
2. Double check your code, such as whether the frontend and the backend are consistent or whether all related codes are modified.
```

#### 6. Take Advantage of the `Pro Trial`
Due to that Cursor begain to track the machine code, it is hard to delete and sign up again. Value your `Pro Trial`.

#### 7. Utilize `git commit` and `Checkout`
**Do Version Control!** Cursor is not perfect, and it may create bugs. So it is suggested to backup previous good versions. (Otherwise you are going to regret.)

#### 8. Finish in One Go
Otherwise, Cursor may forget your chat history and you cannot `Checkout` to previous version. 

#### 9. Keep Your Project Simple
Cursor can be regarded as a junior software engineer. It can handle around **1000 lines** codes. If your project is too huge or too complicated, Cursor may not perform well.

#### 10. Always Test
Everytime Cursor finishes one part, test it! You can do this by your own, or ask Cursor itself to write a test script. But, always test it! After all, Cursor can make mistakes. It is better to discover bugs before your projects go wild.

Now, try out Cursor yourself!