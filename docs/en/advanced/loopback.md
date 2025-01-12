---
headerDepth: 2
icon: iconfont icon-tool
category: [FAQ]
order: 3
description: Introduction to Loopback Network and Solutions for Network Proxy Failures
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/loopback.html&has_description=False
---

# Loopback Network

## What is Loopback Network

"Appx container applications" are a type of application promoted by Microsoft, with many advantages. To ensure they are efficient, secure, stable and user-friendly, Microsoft has taken a series of restrictive measures for these applications. One of these measures is the "Loopback Network".

Windows by default **disables Loopback Network for all Windows Appx container applications (including Snap Hutao)**. This design aims to limit the network access range of applications, allowing them to only access the resources they need to operate.

### Understanding Loopback Network

You can think of the "Loopback Network" as a "box" that an application is placed into. This "box" isolates the application's network environment from the local computer environment, allowing the application to interact with the external network only through a small hole.

When the external network environment changes (such as enabling a network proxy or a game accelerator), the small hole may become blocked, causing the application inside the box to be unable to communicate with the external network.

## Potential Issues

- Snap Hutao cannot access the network after a proxy is enabled.
- Certain network-related functions (such as Wish record export, Real-time Notes refresh, etc.) fail.

## Solutions

### 1. Configure within Snap Hutao (Recommended)

1. Open Snap Hutao.
2. Click "Feedback Center" in the left menu.
3. In the right sidebar, find and click "Unblock Loopback Restriction".
4. Click the "Confirm" button in the pop-up window.

This operation will remove the Loopback restriction, allowing Snap Hutao to use proxy networks normally.

### 2. Configure in the Network Proxy Software

1. Enable **TUN Mode** (if your network proxy software provides this option).
2. Contact your network proxy service provider and ask for technical support on resolving network proxy issues for Windows Appx container applications to get targeted solutions.

By using the methods described above, you can effectively resolve network proxy failures caused by Loopback restrictions and enable Snap Hutao to run normally in various network environments.
