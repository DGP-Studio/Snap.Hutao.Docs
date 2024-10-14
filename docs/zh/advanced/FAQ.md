---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: 本页包含了一些常见的与用户网络和程序生命周期问题相关的问题及解决方案。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/faq.html&has_description=False
---

# 其他常见问题

### 如何创建胡桃的桌面快捷方式（非管理员模式）

::: tip 社区力量
感谢 [CzHUV 提供的解决方案](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::

- `Win+R` 呼出运行窗口，在窗口中输入`shell:AppsFolder`
  ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
- Windows 会弹出应用程序目录，找到胡桃工具箱
- 右键，点击 “创建快捷方式”
- 根据提示操作你就可以获得一个桌面快捷方式了

### 如何创建胡桃的桌面快捷方式 （管理员模式）

你可以在程序设置页面中点击 “创建快捷方式” 来在桌面上添加一个具有管理员权限的快捷方式

### 如何让胡桃工具箱开机自动启动

- 请参考如下思路
  - 可以自行创建一个批处理文件，内容参考 [此 issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184)中，令胡桃以管理员模式直接运行的命令。
  - 设置一个**计划任务程序**令上述批处理文件开机自启，或将上述批处理文件加入**启动项**中
  - 使用 `SkipUAC` 等可以使软件以管理员身份静默自启的程序
- 或其他可以使胡桃工具箱开机自启的思路，敬请自行探索

::: warning

请注意，上述各种办法均可能在实际使用中因种种问题而失效。我们并不支持尝试使胡桃开机自启的行为。

:::

### 无法使用管理员模式启动胡桃工具箱

> 该问题仅存在于 Windows 10 低于 22H2 的版本中

- 当用户系统版本低于 `Windows Build 19045`（即 `Windows 10 22H2` 版本）时，可能无法通过管理员模式启动胡桃工具箱
  - 该问题属于 Windows 内核级别问题，难以判断具体来源，故建议用户升级至 Windows 10 最新版本

### 如何通过网络代理使用胡桃工具箱

> Snap Hutao 有着良好的云端网络结构，在全球各地你都能获得良好的网络服务

所有的 Windows Appx 容器应用[^loopback]（包括 Snap Hutao）都被禁用了 `Loopback 网络`，因此使用一些现代化的网络代理软件或游戏加速器时会导致容器化应用无法访问互联网，进而导致程序错误。

如果你需要通过网络代理使用 Snap Hutao，你可以：

- 在胡桃内进行设置（推荐）
  - 打开胡桃，点击“反馈中心-解除 Loopback 限制”，按指引操作即可
- 在网络代理软件中进行设置
  - 启用 TUN 模式，如果你的网络代理软件有该选项
  - 联系你的网络代理服务商，获取解决 Windows Appx 容器应用网络代理问题的技术支持，以便他们为你提供解决方案

[^loopback]: **什么是“Windows Appx 容器应用”？** 
Windows 使用了一种被称为“AppContainer”的机制，该机制的目的是使应用程序**能够获取、且仅能够获取应用程序运行所需的必要资源**，减少一切非必要的接触其他应用程序与文件的可能。在理想情况下，即便应用程序存在恶意，其也只能作用于“AppContainer”环境，无法对设备的其他文件造成损害。