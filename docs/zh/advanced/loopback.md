---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 4
description: Loopback网络介绍及网络代理失效的解决方案
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/loopback.html&has_description=False
---

## Loopback 网络是什么

『Appx 容器应用』是微软大力推广的一种应用类型，它具有诸多优点。而微软也使用了种种措施以确保它运行效率高、安全稳定、用户友好，而『Loopback 网络』就是其中的一环。

为使应用达到“能够获取且仅能获取其运行所需的必备资源”的目标，Windows 默认所有的 Windows Appx 容器应用（包括 Snap Hutao）**都被禁用了 Loopback 网络**。


您可以将『Loopback 网络』理解为一个盒子，它把应用装在里面，因此应用的网络环境得以与本机电脑环境隔离；而盒子上有一个小孔和外界相联通，以保证应用可以联网使用。因此，当外界网络环境变化时（比如您使用了网络代理软件或游戏加速器等有类似作用的软件），小孔因环境变化而堵塞，盒子里的软件就无法与外部网络环境交互了。

## 可能造成什么问题

开启代理后胡桃无法访问网络

## 解决方案

- **在胡桃内进行设置**（推荐）
  1. 打开“胡桃”
  2. 点击左侧菜单的“反馈中心”
  3. 在右侧栏中点击“解除 Loopback 限制”
  4. 点击“确认”按钮即可
- 在网络代理软件中进行设置
  1. 启用 TUN 模式，如果你的网络代理软件有该选项
  2. 联系你的网络代理服务商，获取解决 Windows Appx 容器应用网络代理问题的技术支持，以便他们为你提供解决方案
