---
layout: single
title:  "How to connect to Zilliz Cloud"
date:   2024-07-05 14:57:40 +0800
categories:
  - CS
  - RA
  - Skills
tags:
  - Zilliz
---
### How to connect to Zilliz Cloud in Python?
1. Install **PyMilvus** (Python SDK) (This works for Python after **3.7**). If you want to install a specific version, see the [official document](https://docs.zilliz.com/docs/install-sdks#install-pymilvus-python-sdk).
```
pip install pymilvus
```
2. Retrice your API key from the console
3. Connect to your cluster
{% highlight Python %}
from pymilvus import MilvusClient

CLUSTER_ENDPOINT = "YOUR_CLUSTER_ENDPOINT"
TOKEN = "YOUR_CLUSTER_TOKEN"

client = MilvusClient(
    uri=CLUSTER_ENDPOINT,
    token=TOKEN 
)
{% endhighlight %}

Now it is done!
