---
layout: single
title:  "How to connect to Alibaba Cloud RDS"
date:   2024-07-01 21:05:55 +0800
categories:
  - CS
  - RA
  - Skills
tags:
  - Alibaba Cloud
---
### How to connect to Alibaba Cloud (Aliyun) RDS (MySQL version) in Python

1. Retrive your host from your RDS console as well as your RDS account and password (**make sure your account have access to your target database**)
2. Install PyMySQL (this applies for **Python3**, not sure about older verions)
```
pip install pymysql
```
3. Example code:
{% highlight python %}
import pymysql.cursors

connection = pymysql.connect(host='your_host',
                             user='your_user',
                             password='your_password',
                             db='your_database',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

cursor = connection.cursor()

cursor.execute(your_sql)

row = cursor.fetchall()
	
if row:
    print(row)

connection.close()
{% endhighlight %}

More see [Alibaba Cloud official website](https://www.alibabacloud.com/en?_p_lc=1)

Now it is done!
