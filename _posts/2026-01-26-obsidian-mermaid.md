---
layout: single
title:  "Mermaid Diagram in Obsidian"
date:   2026-01-26 15:09:15 +0800
categories:
  - CS
  - Skills
tags:
  - Obsidian
---

# How to use Mermaid Diagram in Obsidian

## What is Mermaid

**Mermaid** is a text-based diagram tool. You write simple syntax, and it renders diagrams automatically (Markdown, Obsidian, GitHub, etc.).

## Basic usage

Wrap Mermaid code in a fenced block:

````
```mermaid
graph TD
  A --> B
  B --> C
```
````

### Common diagram types

**Flowchart**

```mermaid
graph LR
  Start --> Process --> End
```

**Sequence diagram**

```mermaid
sequenceDiagram
  Alice->>Bob: Hello
  Bob-->>Alice: Hi
```

**Class diagram**

```mermaid
classDiagram
  Animal <|-- Dog
  Animal : +int age
```

**State diagram**

```mermaid
stateDiagram-v2
  Idle --> Running
```

**Gantt**

```mermaid
gantt
  title Project
  Task1 :done, t1, 2024-01-01, 3d
```

## Customize Diagram Size

I often find that my Mermaid diagram is too long to fit in Obsidian page size. Instead of zooming out, use Obsidian CSS script.

```css
.markdown-preview-view .mermaid svg {
    max-width: 100%;
  }
```

This auto-scale Mermaid diagrams to page width.

Now it's done. Try out Mermaid in your vault!