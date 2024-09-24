---
layout: single
title:  "How to design and implement an AI agent"
date:   2024-09-08 15:41:20 +0800
categories:
  - CS
  - Skills
tags:
  - Flask
---
### How to deploy your websites on your remote server?
It is a good idea to use your remote server to host your websites. This blog takes a Flask app as an example.

**Conponents**: Flask, Nginx, Gunicorn
#### 1. Set up  a virtual environment
- Use Anaconda to set up a virtual environment
- Install dependencies
{% highlight bash %}
conda create -n env_name python
conda activate env_name

pip install -r requirements.txt
{% endhighlight %}

#### 2. Set up Nginx and Gunicon
- Create the configuration files and set up accronding to your app.
{% highlight bash %}
code /etc/nginx/conf.d/flaskapp.conf
code /etc/systemd/system/flaskapp.service
{% endhighlight %}

#### 3. Ensure permissions for your app folder
- It is suggested not to run your website as the `root` user. 
{% highlight bash %}
sudo chown -R $USER:$USER /path/to/your/app
sudo chmod -R 755 /path/to/your/app
sudo chmod -R 666 /path/to/your/app
{% endhighlight %}

#### 4. Ensure the firewall and ports
{% highlight bash %}
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload
{% endhighlight %}

#### 5. Restart Nginx and your Flask app
{% highlight bash %}
sudo nginx -t

sudo systemctl restart nginx

sudo systemctl daemon-reload

sudo systemctl enable your_app

sudo systemctl restart your_app
{% endhighlight %}

#### 6. Check running services
{% highlight bash %}
sudo systemctl status your_app
sudo systemctl status nginx
{% endhighlight %}

Now it is done!
