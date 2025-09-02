---
layout: single
title:  "How to DIY Obsidian homepage"
date:   2024-08-14 14:14:15 +0800
categories:
  - Skills
  - Portfolio
tags:
  - Obsidian
---
### How to DIY your Obsidian homepage from scratch?
Obsidian **Homepage** plugin enables to open a specified note as a **homepage** upon launching Obsidian. 
As for me, a good homepage works as a **dashboard** and facilitate my workflow. 
Here is my version of Obsidian homepage, you can also download the **template vault** from [my GitHub repository](https://github.com/ChenziqiAdam/Obsidian-Homepage) and play around.

#### Screenshots
![screenshot](/images/obsidian-homepage-dark.png)

#### Key Features
- **Countdown**
  - Display and update the countdown automatically
- **Obsidian Heat Map**
  - Similar to GitHub heat map, it displays how many files you create everyday (you can adjust it according to your need)
- **Daily Sentence**
  - Randomly select one note (in a particular way) and display its content (my implementation is one sentence per note with some tags)
- **Daily Note Button**
  - Open or create Today's Daily Note via a button
  - Automatically roll over unchecked checkboxes from your last Daily Note
- **Habit Tracker**
  - Track your habits and display in the calender

#### Prerequisites
- **Plugins**:
    - Banners
    - Buttons
    - Contribution Graph
    - Dataview
    - Homepage
    - Iconize
    - Minimal Theme Settings
    - Rollover Daily Todos
    - Style Settings
    - Tracker
- **CSS Snippets**
    - You can download the CSS snippets from [my github repository](https://github.com/ChenziqiAdam/Obsidian-Homepage/tree/main/snippets) and drag them into your `vault/.obsidian/snippets` (if the folder does not exist you can create one yourself) .

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
> **Note**: if your `Properties` is still there after you switch into **reading mode**, check the setting `Properties in document` in `Editor` and set it to `Hidden`.

##### 2. Create the middle columns
{% highlight markdown %}
> [!multi-column]
{% endhighlight %}
###### 1. First column: Countdown and Obsidian Heat Map
This column contains the display of the file called `Countdown` and **Obsidian heat map**, which shows how many files you create in Obsidian in the past year.
{% highlight markdown %}
>> [!summary|wide-5 min-0] AGENDA
>>```dataviewjs
>>dv.paragraph("![[Countdown]]");
>>```
>>```contributionGraph
>>title: Obsidian Heat Map
>>graphType: default
>>dateRangeValue: 360
>>dateRangeType: LATEST_DAYS
>>startOfWeek: 0
>>showCellRuleIndicators: true
>>titleStyle:
>>  textAlign: left
>>  fontSize: 15px
>>  fontWeight: normal
>>dataSource:
>>  type: PAGE
>>  value: ""
>>  dateField: {}
>>fillTheScreen: false
>>enableMainContainerShadow: false
>>cellStyleRules:
>>  - id: 1724115409974
>>    min: 1
>>    max: "15"
>>    color: "#019131ff"
>>    text: ""
>>  - id: 1724115427584
>>    min: "15"
>>    max: "30"
>>    color: "#18b55dff"
>>    text: ""
>>  - id: 1724115437365
>>    min: "30"
>>    max: "50"
>>    color: "#3be084ff"
>>    text: ""
>>  - id: 1724115462228
>>    min: "50"
>>    max: "1000"
>>    color: "#8afebfff"
>>    text: ""
>>```
{% endhighlight %}
> **Note**: you need to create a file called `Countdown` and write your countdowns in that file. 

###### 2. Second column: Daily note button and file shortcuts
This column contains the button that executes the command `Daily note: Open taday's daily note` and the lists of files with certain properties.
{% highlight markdown %}
>> [!note|wide-3 min-0] Shortcut
>> ### Daily Note
>> ```button
>> name Open today's daily note
>> type command
>> action Daily notes: Open today's daily note
>> ```
>> ### Todo Lists
>> ```dataview
>> TABLE WITHOUT ID link(file.link, title) as "File", file.ctime AS "Time"
>> WHERE alias = "todo list"
>> ```
>> ### Notebooks
>> ```dataview
>> TABLE WITHOUT ID link(file.link, title) as "File", file.ctime AS "Time"
>> WHERE alias = "notebook"
>> ```
{% endhighlight %}
> **Note**: your language should be **English** otherwise the button won't work due to the error `Command not found`.

###### 3. Third column: Daily Sentence
This column contains the **daily sentence**, which displays the content of a random file from a list of files with the same **tag**.
{% highlight markdown %}
>> [!tip|wide-3 min-0] Daily Sentence
>> ```dataviewjs
>> let files = dv.pages("#Daily-Sentence");
>> let length = files.length;
>> dv.paragraph("![["+files[Math.floor(Math.random() * length)].file.name+"]]");
>> ```
{% endhighlight %}
> **Note**: this requires you to store the daily sentences manully in your vault with a **tag** `#Daily-Sentence`.

##### 3. Create the buttom columns: Recent files and Habit Tracker
This three columns contain the display of recent files and **Habit Tracker**.
{% highlight markdown %}
---
>[!multi-column]
>> [!blank-container]
>> ### Recently Modified 
>> ```dataview
>> TABLE WITHOUT ID link(file.link, title) AS "File", file.mtime AS "Time"
>> FROM -"Images"
>> SORT file.mtime DESC
>> LIMIT 10
>> ```
>
>> [!blank-container]
>> ### Recently Created
>> ```dataview
>>  TABLE WITHOUT ID link(file.link, title) as "File", file.ctime AS "Time"
>>  FROM -"Images"
>>  SORT file.ctime DESC 
>>  LIMIT 10
>> ```
>
>> [!blank-container]
>> ``` tracker
>> searchType: task.done
>> searchTarget:  Gym ⏫ 🔁 every day
>> folder: Daily Notes
>> datasetName: Gym
>> month:
>>     color: tomato
>>     headerMonthColor: orange
>>     todayRingColor: orange
>>     selectedRingColor: steelblue
>>     showSelectedValue: true
>> ```
{% endhighlight %}
> **Note**: the **Habit Tracker** actually collects your data from your notes. You need to have your target **task**, i.e. `searchTarget`, in your **daily note**, i.e. files in the `folder`, and click it manually which gives the `searchType: task.done`.

> **Dataview Troubleshooting**:
> - In **dataview**, `""` works for folders while `#` works for tags. For YAML you should use `WHERE`.
> - In **dataviewjs**, by contrast, you need to use `""` for tags and `'""'` for folers. (Personally I think it is confusing for beginners, especailly those who have no idea about writing Javascript.)
> - `![[]]` will give `dataviewjs` the file content, and then `dv.paragraph` will display in the particular position.

Now it is done!
