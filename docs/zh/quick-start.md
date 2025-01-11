---
pageClass: link-box
externalLinkIcon: false
category: [功能, 教程]
comment: false
icon: iconfont icon-launch
order: 5
description: 遵循这篇快速开始文档，你将可以快速地将 Snap Hutao 胡桃工具箱设置为可用状态。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# 快速开始

遵循这篇快速开始文档，你将可以快速地将胡桃工具箱设置为可用状态。

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> 最低系统要求

| 要求                   | 规格                                                             |
| ---------------------- | ---------------------------------------------------------------- |
| **最低可运行系统版本** | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **推荐系统版本**       | Windows 11 Build 22621 (22H2) 或更高版本                         |
| **必要组件**           | Windows Update, App Installer                                    |
| 可选组件               | WebView2 Runtime, **MSVC 运行库**                                |

**不支持的系统版本**：

1. **LTSC 和 LTSB 版本**由于不包含足够新版本的 MSIX Core，故不支持直接安装，需要手动处理。
2. **不支持企业版和精简版系统，所有来自非微软官方完整版系统的问题均不会积极处理**。
3. Windows 10 Build 19041 亦可以安装，但部分功能会因内核问题无法使用，故该版本下的胡桃工具箱问题将不会被处理。
4. Windows Insider 预览版本的问题将不会被处理。

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> 下载胡桃工具箱

### 全新安装

使用 **MSIX 安装包** 或 **Snap.Hutao.Deployment 安装器** 即可安装 Snap Hutao，你可以从以下源获取到安装包。

::: tabs

@tab 使用 Snap.Hutao.Deployment 安装

Snap.Hutao.Deployment 是开发团队自制的一键安装器，**将同时安装所有必要的组件**。适合大多数普通用户以及使用 MSIX 应用包安装失败的用户。

<div class="vp-card-container">

<VPCard
title="胡桃自动判断"
desc="自动判断最佳线路下载"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment 亦是一个开源项目"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao.Deployment/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

@tab 使用 MSIX 安装包安装

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">注意</p>
    <p>我们建议使用 Snap.Hutao.Deployment 安装胡桃工具箱，任何使用 MSIX 安装包安装时出现的问题均不会被积极处理。</p>
  </div>

<VPCard
title="胡桃自动判断"
desc="自动判断最佳线路下载"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao/download"
background="rgba(253, 233, 233, 0.45)"
/>
<VPCard
title="GitHub"
desc="Snap Hutao 所有版本均会发布于主代码库中"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

---

如果你有兴趣通过你的力量让 Snap Hutao 项目变得更好，欢迎[加入我们](development/join.md)！

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> 从微软商店版升级至最新版

> 你可以阅读[1.9.0 版本重大改变详解](blog/version-1-9-0-breaking-changes.md)了解更多详细信息。

如果你已经安装了 Snap Hutao 微软商店版（版本号介于 1.4.11 和 1.8.5 之间），需要先卸载旧版本再进行全新安装。

- 按照文档提供的[卸载方法](advanced/uninstall.html)卸载旧版应用。
  - 数据不会受到影响，只要不手动删除数据目录。
- 按照上述方法全新安装新版应用。

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

如无特殊声明，你可以通过运行 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 或安装最新版 MSIX 安装包来完成更新。

自 1.9.0 版本起，Snap Hutao 内置升级提示功能以提醒获取更新包。如果更新失败，可尝试使用 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 覆盖安装以解决问题。

- 数据不会受到影响，只要不手动删除数据目录。

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安装可选组件

通过可选组件，胡桃工具箱能够更高效地实现一些功能，尽管它们不是强制要求的组件，但可以显著改善用户体验。

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 运行时

WebView2 运行时由微软提供，允许胡桃工具箱内嵌低开销的浏览器组件。此组件用于实现米游社账号的 WebView2 登录功能。

你可以在[微软官网](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)底部找到 `常青独立安装程序`，选择 `x64` 下载并安装。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Segoe Fluent Icons 字体

此字体由微软提供，可优化胡桃工具箱的图标显示效果。缺少该字体可能导致部分图标显示不佳。

点击[此链接](https://aka.ms/SegoeFluentIcons)下载字体压缩包，解压后右键安装字体到系统。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC 运行库（MSVCRT）

MSVC 运行库是解锁帧率功能的必要组件。如提示“缺少 XXX.dll”或“缺少 XXX 组件”，请安装最新版 MSVCRT。

点击[此链接](https://aka.ms/vs/17/release/vc_redist.x64.exe)下载 MSVC 运行库（x64）安装文件并完成安装。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 添加第一个米游社账号

在主界面点击左下角文档按钮和设置按钮中间的账号面板。在弹出的米游社账号面板中，根据账号类型选择登录方式。

无论使用哪种方式，请确保账号已通过官方应用初始化。否则 Snap Hutao 无法正确获取账号信息。

:::: tabs

@tab 米游社手机验证码登录

::: warning
请确认米游社账号已绑定国服账号。
:::

1. 点击“手机验证码”按钮，填写手机号并发送验证码。
2. 填写验证码后确认，稍等片刻即可添加账号。

@tab 米游社扫码登录

::: warning
请确认米游社账号已绑定国服账号。
:::

1. 点击“扫码登录”按钮，等待二维码加载。
2. 用米游社 App 扫码并确认登录。
3. 稍等片刻，胡桃工具箱将添加账号。

@tab HoYoLAB 密码登录

::: warning
请确认 HoYoLAB 账号已绑定国际服账号。
:::

1. 点击“密码登录”按钮，填写账号密码并确认。
2. 稍等片刻，账号将被添加。

@tab HoYoLAB 社媒账号登录

此方式依赖 WebView2 运行时组件。

::: warning
HoYoLAB 默认阻止中国大陆网络连接。
:::

1. 点击“三方登录”按钮并通过 WebView2 登录。
2. 稍等片刻，账号将被添加。

@tab Cookies 登录

::: warning
请妥善保存 Cookie 信息，避免账号风险。
:::

通过手动输入 SToken 提交 Cookie 登录。

1. 点击目标 App 图标选择“手动输入”。
2. 输入有效 Cookie 并确认，稍等片刻账号将被添加。
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> 安装常见问题

### 为什么程序中的图标会出现乱码现象

- Windows 10 用户可通过安装 `Segoe Fluent Icons` 字体解决问题。
- 在安装时选择“为系统所有用户安装”。

### 能否通过修复系统组件解决安装问题

根据错误提示修复缺失组件，但 Snap Hutao 开发组不会提供支持。

---

::: warning
以下问题仅适用于 MSIX 安装，请优先尝试 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 安装。
:::

### 我的计算机无法打开 MSIX 格式的安装包

检查系统是否缺少 App Installer。

1. 安装 [App Installer](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US)。
2. 确保使用官方 Windows 10 或 11 镜像安装系统。

### MSIX 安装包提示 `无法验证此应用包的发布者证书`

手动安装 [GlobalSign Code Signing Root R45](https://secure.globalsign.com/cacert/codesigningrootr45.crt) 证书到 `可信任的根证书授权机构`。

### MSIX 安装包提示组策略错误或需要开发者许可证

1. 打开Windows 设置
2. 打开“系统-开发者选项”
3. 开启“开发人员模式”的开关

---

### 安装 MSIX 包时失败并出现错误提示

| 错误信息              | 原因                             |
| --------------------- | -------------------------------- |
| `0x80040154` 错误代码 | 错误的 Windows 用户账户权限      |
| `应用未启动` 错误提示 | App Installer 权限错误或已被破坏 |
| `0x80073CF0` 错误代码 | 错误的目录权限                   |
| `0x80070005` 错误代码 | 错误的 Windows 用户账户权限      |
| `0x80070570` 错误代码 | 错误的 Windows 用户账户权限      |
| `0x8007065E` 错误代码 | 错误的 Windows 用户账户权限      |

#### 解决步骤

1. 在开始菜单右键选择 `PowerShell (管理员)`。
2. 执行以下代码完成安装：

   ```PowerShell
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```

3. 无红色错误提示即表示安装成功。
