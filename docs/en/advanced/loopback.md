---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 3
description: Introduction of Loopback network and solutions
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/loopback.html&has_description=False
---

# Loopback Network

## What is Loopback Network?

"Appx Container Applications" are a type of application heavily promoted by Microsoft, offering numerous advantages. Microsoft has implemented various measures to ensure these applications run efficiently, securely, and user-friendly, with the "Loopback Network" being one of these measures.

To achieve the goal of allowing applications to "access only the essential resources they need to run," Windows by default **disables the Loopback Network** for all Windows Appx container applications, including Snap Hutao.


You can image the "Loopback Network" as a box where applications are installed in, isolating its network environment from the host computer's environment. The box has a small hole to connect with the outside world, ensuring the application can access the internet. However, when the external network environment changes (e.g., using a network proxy or game accelerator), the hole may become blocked, preventing the application inside the box from interacting with the external network.

## Issues Loopback Network Might Caused

Snap Hutao cannot access the network after enabling a proxy.

## Solutions

- **Configure within Snap Hutao** (Recommended)
  1. Open "Snap Hutao."
  2. Click on "Feedback Center" in the left-hand menu.
  3. In the right-hand panel, click on "Config Loopback Exemption"
  4. Click the "Confirm" button to complete the process.
- Configure in your network proxy software
  1. Enable TUN mode if your network proxy software if supports.
  2. Contact your network proxy service provider for technical support to resolve network proxy issues for Windows Appx container applications.
