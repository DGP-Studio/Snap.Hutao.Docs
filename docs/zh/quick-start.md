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
| 可选组件               | WebView2 Runtime                                                 |

**不支持的系统版本**：

1. **LTSC 和 LTSB 版本系统由于不包含足够新版本的 MSIX Core，故不支持安装**
2. **不支持企业版和精简版系统，所有来自非微软官方完整版系统的问题均不会积极处理**
3. Windows 10 Build 19041 亦可以安装， 但部分功能会因内核问题无法使用，故该版本下的胡桃工具箱问题将不会被处理
4. Windows Insider 预览版本的问题不会被处理

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> 下载胡桃工具箱

### 全新安装

使用 **MSIX 安装包** 或 **Snap.Hutao.Deployment 安装器** 即可安装 Snap Hutao，你可以从以下源获取到安装包

::: tabs

@tab 使用 Snap.Hutao.Deployment 安装

Snap.Hutao.Deployment 是开发组自制的一键安装器，**将同时安装所有需要的组件**。适合广泛的普通用户和使用 MSIX 应用包安装失败的用户。

<div class="vp-card-container">

<VPCard
title="胡桃自动判断"
desc="自动判断最佳线路下载"
logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment 亦是一个开源的项目"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao.Deployment/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

<VPCard
title="Onedrive 镜像"
desc="由开发团队维护的镜像下载源"
logo="/images/202401/Microsoft_Office_OneDrive.svg"
link="https://d.hut.ao/d/tools/Snap.Hutao.Deployment.exe"
background="rgba(88, 164, 255, 0.15)"
/>

<VPCard
title="极狐 GitLab"
desc="Snap Hutao Deployment 代码库官方中国镜像"
logo="/images/202312/jihulab.svg"
link="https://jihulab.com/DGP-Studio/Snap.Hutao.Deployment/-/releases"
background="rgba(244, 125, 63, 0.15)"
/>

</div>

@tab 使用 MSIX 安装包安装

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">注意</p>
    <p>我们建议使用 Snap.Hutao.Deployment 来安装胡桃，任何使用 MSIX 安装包安装时出现的问题均不会被积极处理。</p>
  </div>

<VPCard
    title="胡桃自动判断"
    desc="自动判断最佳线路下载"
    logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
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
<VPCard
    title="极狐 GitLab"
    desc="Snap Hutao 主代码库的官方中国镜像"
    logo="/images/202312/jihulab.svg"
    link="https://jihulab.com/DGP-Studio/Snap.Hutao/-/releases"
    background="rgba(244, 125, 63, 0.15)"
  />

</div>

:::

---

如果你有兴趣通过你的力量让 Snap Hutao 项目变得更好，欢迎 [加入我们](development/join.md)！

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> 从微软商店版升级至最新版

> 对于这项改变，你可以阅读 [1.9.0 版本重大改变详解](blog/version-1-9-0-breaking-changes.md) 来获得详细信息

如果你已经安装了 Snap Hutao 微软商店版（版本号介于1.4.11和1.8.5之间）则需要先卸载旧版本再进行全新安装

- 按照文档提供的 [卸载方法](advanced/uninstall.html) 卸载旧版应用
  - 只要不手动删除数据目录，你的数据不会受到影响
- 按照上述方法全新安装新版应用

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

如没有特殊声明，你可以通过运行 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 或安装最新版 MSIX 安装包来升级程序。

1.9.0版本起，Snap Hutao 将内置升级提示功能以提醒你获取更新包。如果你更新失败，可尝试使用 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 覆盖安装来解决问题。

- 只要不手动删除数据目录，你的数据不会受到影响

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安装可选组件

通过可选组件，胡桃工具箱可以通过系统级的环境来更方便地实现一些功能，它们不是强制要求的组件，但可以带来更好的体验

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 运行时

WebView2 运行时由微软提供，其允许胡桃在程序内低开销地启用一个内置的浏览器。通过该组件，胡桃允许用户通过 WebView2 内置浏览器登录米游社账号。

在 [微软官网](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/) 的底部，你可以找到 `常青独立安装程序`，选择 `x64` 下载并根据提示安装即可

### <img src="/images/202409/Microsoft-logo.svg" width="20" height="20"> Segoe Fluent Icons 字体

该字体由微软提供，可以为胡桃提供更好的图标显示效果，缺少该字体可能导致胡桃的部分图标显示效果不佳。

您可以点击 [此链接](https://aka.ms/SegoeFluentIcons) 以直接下载字体压缩包。请在解压后右键安装以将字体安装到系统。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 添加第一个米游社账号

在进入胡桃工具箱主界面后，点击左下角文档按钮和设置按钮中间的账号面板。在弹出的米游社账号面板中，根据你的账号类型选择对应的登录按钮。

如果你的原神账号是米哈游的国服账号，需要在 `米游社` 类别内登录；如果你的原神账号是 HoYoverse 的国际服账号，需要在 `HoYoLAB` 类别内登录。

无论是国服账号还是国际服账号，你都有多种登录方式可供选择。 对于使用米游社手机应用并绑定国服游戏账号的用户，可以选择“扫码登录”。 <font color="red">无论你使用何种方式登录，请务必确定你已经使用官方应用登录并使用过米哈游论坛并设置过社区用户名以初始化你的账号，否则 Snap Hutao 将无法获取你的账号信息。</font>

::: tabs

@tab 手机验证码登陆（仅国服）

**请提前确认在米游社中已经绑定国服账号**

1. 点击账号面板中的“手机验证码”按钮，填写手机号并点击“发送”
2. 填写接收到的验证码，核对无误后点击“确认”
3. 稍等片刻，胡桃将自动添加你的账号

@tab Cookie 登录

如果你能希望使用自己提取的米哈游通行证 Cookie 登录到胡桃工具箱，可以在登录面板中点击“手动输入”，并在弹出的窗口中输入包含 SToken 的 `Cookie`。
若你填入了一个有效的 Cookie，在点击“确认”后你将成功登录你的米游社账号并在账号面板中显示出来。

手动获取含 `SToken` 字段的 Cookie 的方式可参考[使用第三方工具获取有 SToken 的 Cookie](../advanced/get-stoken-cookie-from-the-third-party.md) 文档。**请合理保存你的 Cookie，否则可能账号安全受到威胁！**

@tab 网页登录（仅外服）

**网页登录需要使用 Microsoft WebView2 运行时组件**

1. 点击账号面板中的“网页登录”按钮，胡桃将会通过 WebView2 打开米游社登录界面
2. 在该界面中登录你的账号，登录成功后点击程序主界面右上角的“我已登录”按钮
3. 稍等片刻，胡桃工具箱会将当前账号添加进本地客户端，并在账号面板中显示出来

**请注意：HoYoLAB 默认阻拦来自中国大陆的网络连接，Snap Hutao 软件无法自行绕开该限制。**

:::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> 安装常见问题

### 为什么程序中的图标会出现乱码现象

- 当用户在 Windows 10 下使用胡桃且发现有乱码情况时：
  - 可以下载 `Segoe Fluent Icons`字体
  - 安装时选择`为系统所有用户安装`，即可解决问题
- 您可以从 [微软官方](https://aka.ms/SegoeFluentIcons)下载到该字体文件

### 能不能通过添加缺少的系统组件来实现胡桃的安装

> 这就是使用 `精简版 / 破解版 / 优化版 / LTSC / LTSB` 版本的代价，不是不报，时候未到。没有足够的水平就不要用高级的东西。

::: tip
对于 LTSC（IoT LTSC）官方版，可以尝试通过安装 [XBox](https://www.xbox.com/en-US/xbox-game-pass/pc-game-pass#app) 以解决依赖问题。XBox 提供了比较完善的缺失环境检测与修复功能。

:::

当你问出这个问题的时候，那答案已经是不可以了，因为你完全不了解你的操作系统。

你不知道你手中所谓的精简版系统少了多少必要组件。当你装上了一个组件，解决了当前的问题，你还会遇上下一个问题。

::: warning
以下问题仅适用于 MSIX 安装，请先尝试使用 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 来解决你的安装问题
:::

### 我的计算机无法打开 MSIX 格式的安装包

你的计算机缺少了 Windows 系统重要组件 App Installer，你可能是盗版软件的受害者。

如果你的系统中装有 Microsoft Store，可以从 [App Installer 商店页](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US) 重新安装来恢复该组件。

如果你没有Windows Store，请使用微软官方的最新完整版消费者 [Windows 10](https://www.microsoft.com/zh-cn/software-download/windows10) 或 [Windows 11](https://www.microsoft.com/zh-cn/software-download/windows11) 镜像。使用微软官方的提供的 Windows 10 升级助手和 Windows 11 安装助手可以帮助你简单地在保留数据的情况下升级至最新完整版 Windows。**请勿使用来源不明的破解版、精简版系统镜像。**

### MSIX 安装包提示 `无法验证此应用包的发布者证书` 错误并无法安装

该问题常见于 Windows 家庭版系统。如果你使用的不是家庭版系统，则你的 Windows Update 模块可能被禁用或已失效，这导致世界范围内的 CA 根证书无法被更新。

Snap Hutao 的软件证书来源于 [GlobalSign Code Signing Root R45](https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates)，你可以手动从 GlobalSign 官网下载 [该证书](https://secure.globalsign.com/cacert/codesigningrootr45.crt) 并添加到你的系统中的 `可信任的根证书授权机构` 类别中。

### MSIX 安装包提示组策略错误或需要 Windows 开发者许可证错误并无法安装

如果你使用的 Windows 家庭版操作系统，请尝试打开系统设置中的开发者模式以解决该问题

### 安装 MSIX 安装包时失败并有错误提示

| 错误信息              | 原因                             |
| --------------------- | -------------------------------- |
| `0x80040154` 错误代码 | 错误的Windows用户账户权限        |
| `应用未启动` 错误提示 | App Installer 权限错误或已被破坏 |
| `0x80073CF0` 错误代码 | 错误的目录权限                   |
| `0x80070005` 错误代码 | 错误的Windows用户账户权限        |
| `0x80070570` 错误代码 | 错误的Windows用户账户权限        |
| `0x8007065E` 错误代码 | 错误的Windows用户账户权限        |

如果你在安装失败时收到了上面的错误提示，请尝试下面的步骤来解决问题：

1. 在 Windows 开始菜单按钮上右键，选择 `PowerShell (管理员)`
2. 在打开的窗口中复制下面的代码并回车执行（在PowerShell中鼠标右键就是粘贴）
   ```PowerShell :no-line-numbers
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```
3. 如果 PowerShell 没有任何错误输出（通常为红色），意味着安装成功。请在开始菜单中的全部应用列表中寻找 `Snap Hutao` 并启动
