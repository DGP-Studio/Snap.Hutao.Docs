---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 3
description: Loopback网络介绍及网络代理失效的解决方案
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/loopback.html&has_description=False
---

# Loopback 网络

## 什么是 Loopback 网络

『Appx 容器应用』是微软推广的一种应用类型，具有诸多优点。为确保其运行效率高、安全稳定且用户友好，微软对这些应用采取了一系列限制措施，其中之一便是『Loopback 网络』。

Windows 默认**禁用了所有 Windows Appx 容器应用（包括 Snap Hutao）的 Loopback 网络**。这一设计旨在限制应用的网络访问范围，使其只能获取运行所需的资源。

### 理解 Loopback 网络

您可以将『Loopback 网络』理解为一个将应用装入其中的“盒子”。这个“盒子”隔离了应用的网络环境与本机电脑环境，但通过一个小孔允许应用与外部网络交互。

当外界网络环境变化（例如启用网络代理或游戏加速器等）时，小孔可能被堵塞，导致盒子内的应用无法与外部网络通信。

## 可能引发的问题

- 启用代理后，Snap Hutao 无法访问网络。
- 某些网络相关功能（如祈愿记录导出、实时便笺刷新等）失效。

## 解决方案

### 1. 在 Snap Hutao 内进行设置（推荐）

1. 打开 Snap Hutao。
2. 点击左侧菜单中的“反馈中心”。
3. 在右侧栏中找到并点击“解除 Loopback 限制”。
4. 点击弹出窗口中的“确认”按钮。

此操作将解除 Loopback 限制，使 Snap Hutao 能够正常使用代理网络。

### 2. 在网络代理软件中进行设置

1. 启用 **TUN 模式**（如果您的网络代理软件提供此选项）。
2. 联系您的网络代理服务商，咨询有关解决 Windows Appx 容器应用网络代理问题的技术支持，获取针对性的解决方案。

通过上述方法，您可以有效解决因 Loopback 限制导致的网络代理失效问题，使 Snap Hutao 在各种网络环境下正常运行。
