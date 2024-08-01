---
layout: single
title:  "How to crawl with Python Selenium"
date:   2024-08-01 17:02:30 +0800
categories:
  - CS
  - Skills
tags:
  - Selenium
---
### How to crawl internet novel with Python Selenium
It is important for **ML** (machine learning) to prepare qulified data. It is common to crawl on the internet to retrive the target data. This blog is an example for internet novels.

**Conponents**: Selenium, Beautiful Soup
1. Install `selenium` and `bs4`
```
pip install selenium
pip install bs4
```
2. Use `selenium` to run the driver and `bs4` to get the website content
{% highlight python %}
from selenium import webdriver
from bs4 import BeautifulSoup
import re
import sys

# Selenium driver
driver = webdriver.Chrome()
url = your_url
driver.get(url)

# Adjust according to your need
driver.implicitly_wait(10)

# Get the website page content
html_content = driver.page_source
soup = BeautifulSoup(html_content, 'html.parser')
text = soup.get_text(separator="\n")

# Clean the data with regexes
...

# Store the cleaned data in a local file
...
{% endhighlight %}
> **Note**: this just takes Chrome driver as an example. You can download the Chrome driver from [getwebdriver,com](https://getwebdriver.com/chromedriver).

Now it is done!
