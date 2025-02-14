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

Loopback 网络是一种虚拟网络接口，通常用于在同一台计算机上的进程之间进行通信。它使用特殊的 IP 地址 `127.0.0.1`（IPv4）或 `::1`（IPv6），这些地址指向本地主机。当应用程序尝试通过 Loopback 接口进行通信时，数据包不会离开主机，而是在操作系统内部进行处理。

目前 Appx 容器应用已经在 Windows 系统中得到广泛应用，除了 Microsoft Store 中的 Appx 应用外，Windows 系统中的一些关键系统组件，包括 Windows 设置、Microsoft Store、Windows Updates 等，也都是容器应用。

Windows 默认**禁用了所有 Windows Appx 容器应用（包括 Snap Hutao）的 Loopback 网络**。这一设计旨在限制应用的网络访问范围，使其只能获取运行所需的资源。

### 理解 Loopback 网络

您可以将『Loopback 网络』理解为一个将应用装入其中的“盒子”。这个“盒子”隔离了应用的网络环境与本机电脑环境，仅通过一个小孔允许应用与外部网络交互。

当外界网络环境变化（例如启用网络代理或游戏加速器等）时，小孔可能被堵塞，导致盒子内的应用无法与外部网络通信。

## 可能引发的问题

- 启用代理后，Snap Hutao 无法访问网络。
- 某些网络相关功能（如祈愿记录导出、实时便笺刷新等）失效。

## 解决方案

### 1. 在 Snap Hutao 内进行设置（推荐）

::: info Snap Hutao 已能检测网络代理环境
当 Snap Hutao 检测到网络代理且 Loopback 限制未解除时，Snap Hutao 会在程序启动时自动弹出解除 Loopback 限制的提示窗口。在管理员模式下直接点击确定即可解除 Loopback 限制。除此以外，你也可以跟随下方的步骤随时解除 Loopback 限制。
:::

1. 以**管理员**身份打开 Snap Hutao。
2. 点击左侧菜单中的“反馈中心”。
3. 在右侧栏中找到并点击“解除 Loopback 限制”。
4. 点击弹出窗口中的“确认”按钮。

此操作将解除 Loopback 限制，使 Snap Hutao 能够正常使用代理网络。

### 2. 在网络代理软件中进行设置

1. 启用 **TUN 模式**（如果您的网络代理软件提供此选项）。
2. 联系您的网络代理服务商，咨询有关解决 Windows Appx 容器应用网络代理问题的技术支持，获取针对性的解决方案。

通过上述方法，您可以有效解决因 Loopback 限制导致的网络代理失效问题，使 Snap Hutao 在各种网络环境下正常运行。
