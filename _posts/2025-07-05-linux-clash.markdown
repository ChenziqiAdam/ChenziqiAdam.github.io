---
layout: single
title:  "How to set up Clash on Linux server?"
date:   2025-07-05 15:59:30 +0800
categories:
  - CS
  - RA
  - Skills
tags:
  - Alibaba Cloud
  - Clash
  - proxychain4
---

### 如何在国内Linux服务器科学上网
> **Note**: This blog is for **Chinese users** to set up **Clash** on Linux servers **in China**.

在**国内**使用服务器时，常常需要连接到外网下载文件或者调用API，由于国内**网络限制**导致往往只能从先下载到本地再上传到服务器。本文通过**proxychain4**和**clash**实现直接在服务器上切换代理。

#### 0. 准备

##### 0.1 服务器有网络连接

- 测试服务器的**网络连接**。在命令行输入：

```shell
curl baidu.com
```

- 如果出现以下输出，则证明服务器有网络连接。

```shell
<html>
<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">
</html>
```

##### 0.2 拥有科学上网服务

- 需要购买科学上网的订阅服务。


#### 1. 配置Clash

##### 1.1 安装Clash

- 由于GitHub上的Clash仓库已经被删除，所以建议从自己本地将Clash上传到服务器你的文件夹下。
> 可以参考[Windows中文版Clash仓库](https://github.com/Z-Siqi/Clash-for-Windows_Chinese)。

##### 1.2 设置配置文件

- 将科学上网的配置文件保存为config.yaml，并保存到Clash文件夹下。以Mac系统下的Clash为例，选择“配置”—“打开配置文件夹”，将配置文件复制上传到服务器，并命名为config.yaml。
- 完成上述文件后，Clash文件夹下是如下结构：

```
Clash
├── clash
├── config.yaml
```

- 接下来需要配置config.yaml文件（主要是设置端口，防止占用），前几行的配置如下：

```yaml
mixed-port: 7892
allow-lan: true
bind-address: '*'
mode: rule
log-level: info
external-controller: '127.0.0.1:9091'
```

##### 1.3 启动

```
./clash -d .
```

> 注：如果没有报错，那么Clash配置成功。如果报错端口错误，那么需要回上一步重新设置端口。


#### 2. 配置Proxychains4

- ProxyChains是Linux系统上网络流量的代理工具。
- 如果你是**sudo**权限的用户，那么可以简单使用命令：`sudo apt-get install proxychains` 安装Proxychains4。
- 如果不是，则按照以下方法可以手动安装。

##### 2.1 安装

- 将 ProxyChains4 代码clone到本地：

```bash
git clone https://github.com/rofl0r/proxychains-ng.git
```

- 由于是非Root用户，可以安装配置到 `~/.local/` 下。注意`username`是自己的账户名。

```shell
cd proxychains-ng
./configure --prefix=/home/username/.local --sysconfdir=/home/username/.config/etc
make
make install && make install-config
```

- 编译成功后，可执行文件proxychains4将被安装在`/home/username/.local/bin`文件下；配置文件将在`/home/wangshu/.config/etc/proxychains.conf`.

##### 2.2 配置环境变量

- 将安装的`~/.local/bin`加入到自己的用户PATH里：

```bash
export PATH="/home/username/.local/bin:$PATH"
```

##### 2.3 配置proxychains.conf文件

```bash
vim /home/username/.config/etc/proxychains.conf
```

- 修改位于该文件末尾的[ProxyList]选项，将端口号设置为上一步设置的`7892`：

```txt
[ProxyList]

socks4	127.0.0.1 7892
socks5	127.0.0.1 7892
http	127.0.0.1 7892
```

#### 3. 测试

- 在任何命令前添加`proxychains4 `，即可使用对该条命令使用代理。

```bash
proxychains4 curl google.com
```

- 如果成功看到返回HTML，则说明成功。

祝各位配置顺利！