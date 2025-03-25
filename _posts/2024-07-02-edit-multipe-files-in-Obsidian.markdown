---
layout: single
title:  "How to edit multiple files in Obsidian"
date:   2024-07-02 17:51:25 +0800
categories: 
  - Skills
  - CS
tags:
  - Git
  - Obsidian
---
### How to edit multiple files in Obsidian with Git
I have encountered this problem before. I wanted to add a tag to all files in one folder, but I failed to find a good solution or plugin on the internet. However, I solved this myself with **Git**.

The background is that I have a directory, and its name is "George-Martin". In the directory are all his quotes in *Game of Thrones*. So I want to add a tag "\#George-Martin" to all these files.
It is too inefficient and time-consuming to add manually. So I did what a programmer should do: **code**.

- Create a **Shell script** in **Git**: `vim script.sh` (for **vim** users) (if you use **Visual Studio Code**, run `code script.sh`) and code:
{% highlight shell %}
#!/bin/bash

line_to_add="$1"
directory="./Obsidian/$2"
for file in "$directory"/*
do
	if [ -f "$file" ]; then
		echo -e "\n$line_to_add" >> "$file"
	fi
done
{% endhighlight %}

- Run the script in **Git**: `./script.sh #George-Martin George-Martin`
    - `$1` corresponds to `#George-Martin`, which is the line of text you want to add to the file.
    - `$2` corresponds to `George-Martin`, which is the directory name.

Now open your files and you can see the tag there. 
This only takes you one minute, while it may takes you ten minutes to add manually! 
What is better is that this script is reusable.

Now it is done!
