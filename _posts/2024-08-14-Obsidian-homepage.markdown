---
layout: single
title:  "How to DIY Obsidian homepage"
date:   2024-08-14 14:14:15 +0800
categories:
  - Skills
  - Obsidian
tags:
  - Obsidian
---
### How to DIY your Obsidian homepage from scratch?
Obsidian **Homepage** plugin enables to open a specified note as a **homepage** upon launching Obsidian. 
As for me, a good homepage works as a **dashboard** and facilitate my workflow. I searched online for the template I want, but I failed to find the one that suits me. So I wonder, why not **DIY** my own version from scratch? 
Here is my version of Obsidian homepage, you can also see [my GitHub repository](https://github.com/Ghost04718/Obsidian-Homepage).

#### Screenshots
![screenshot](/images/obsidian-homepage-dark.png)
> **Attention**: this blog has not been updated to the newest version of my homepage. But it still works.

#### Key Features
- Daily Sentence
    - Randomly select one note (in a particular way) and display its content (my implementation is one sentence per note with some tags)
> **Note**: you need to mannually store the sentences locally in your vault.
- Daily Note Button
    - Open or create Today's Daily Note via a button
    - Automatically roll over unchecked checkboxes from your last Daily Note
> **Note**: your Language need to be English. Otherwise the command will fail (you can fix this by changeing the button code).
- Shortcuts
    - List the links of all notes whose alias contains "notebook"

#### Prerequisites
- **Knowledge**
    - Buttons
    - Callouts
    - CSS-Classes
    - Dataview
    - YAML
> **Note**: it is fine if you have no idea about these concepts. You can just copy my code into your file, then modify them and see what happens.
- **Plugins**:
    - Banners
    - Buttons
    - Dataview
    - Homepage
    - Iconize
    - Minimal Theme Settings
    - Rollover Daily Todos
    - Style Settings
- **CSS Snippets**
    - You can download the CSS snippets from [my github repository](https://github.com/Ghost04718/Obsidian-Homepage/tree/main/snippets) and drag them into your `vault/.obsidian/snippets` (if the folder does not exist you can create one yourself) .

#### Start From Scratch
##### 1. Create the banner image
{% highlight markdown %}
---
banner: "![[homepage.jpg]]"
banner_x: 
banner_y: "0.1"
banner_lock: "true"
cssclasses:
  - wide-page
---
{% endhighlight %}
> **Note**: if your **YAML** is still there after you switch into **reading mode** in Obsidian, check whether you have the CSS snippets downloaded and activated (in Obsidian **Appearance**). 

##### 2. Create the middle columns
{% highlight markdown %}
> [!multi-column]
>> [!summary] AGENDA
>> - [[Todo List]]
>> - [[2024 Summer]]
>> ```button
>> name Open today's daily note
>> type command
>> action Daily notes: Open today's daily note
>> ```
>> ## Notebooks
>> ```dataview
>> TABLE WITHOUT ID link(file.link, title) as "File", file.ctime AS "Time"
>> WHERE alias = "notebook"
>> ```
>
>> [!tip] 每日一句
>> ```dataviewjs
>> let files = dv.pages("#文学/人生/每日一句");
>> let length = files.length;
>> dv.paragraph("![["+files[Math.floor(Math.random() * length)].file.name+"]]");
>> ```
>
{% endhighlight %}
> **Note**: 
> - **Daily Sentence**: the daily sentence requires you to manually store the sentences **locally in your vault** (and add some particular tags or YAML). My implementation is one sentence per note with specific tags.
> - **Dataview Troubleshooting**:
>   - In **dataview**, `""` works for folders while `#` works for tags. For YAML you should use `WHERE`.
>   - In **dataviewjs**, by contrast, you need to use `""` for tags and `'""'` for folers. (Personally I think it is confusing for beginners, especailly those who have no idea about writing Javascript.)
>   - `![[]]` will give `dataviewjs` the file content, and then `dv.paragraph` will display in the particular position.

##### 3. Create the button column
{% highlight markdown %}
> [!multi-column]
>> [!blank-container]
>> ## Recently Modified 
>> ```dataview
>> TABLE WITHOUT ID link(file.link, title) AS "File", file.mtime AS "Time"
>> FROM -"句读"
>> SORT file.mtime DESC
>> LIMIT 5
>> ```
>
>> [!blank-container]
>>## Recently Created
>> ```dataview
>>  TABLE WITHOUT ID link(file.link, title) as "File", file.ctime AS "Time"
>>  FROM -"句读" 
>>  SORT file.ctime DESC 
>>  LIMIT 5
>> ```
>
{% endhighlight %}

> **Note**: if you get into trouble, remember to check the **prerequisites**. Meanwhile, **Google** is always your helping hand. (Saddly, I don't think ChatGPT can handle such a specialzed problem)

Now it is done!
