---
pageClass: link-box
externalLinkIcon: false
category: [功能, 教程]
comment: false
icon: iconfont icon-launch
order: 5
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

使用 **MSIX 安装包**或 **Snap.Hutao.Deployment 安装器**即可安装 Snap Hutao，你可以从以下源获取到安装包

::: tabs

@tab 使用 Snap.Hutao.Deployment 安装

Snap.Hutao.Deployment 是开发组自制的一键安装器，**将同时安装所有需要的组件**。适合广泛的普通用户和使用 MSIX 应用包安装失败的用户。

<div class="vp-card-container">

<VPCard
title="加入用户社区"
desc="我们会在用户社区手动分发安装器"
logo="/images/202312/community.svg"
link="community.html"
background="rgba(242, 255, 28, 0.25)"
/>

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
  <VPCard
    title="加入用户社区"
    desc="我们会在用户社区手动分发安装包"
    logo="/images/202312/community.svg"
    link="community.html"
    background="rgba(242, 255, 28, 0.25)"
  />
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

- 在安装过程中，如果出现任意以下错误之一，请参考文章[手动安装依赖项](advanced/dependency.md)解决，该问题来源是Windows无法自动安装所需要的框架环境
  1. `应用程序无法安装应用包相关项，请向开发人员索要包`
  2. 在安装过程中长时间卡在`正在安装框架`
- 更多在安装时遇上的问题，请阅读 [常见问题-安装篇](advanced/FAQ.md) 文档

:::

---

如果你有兴趣通过你的力量让 Snap Hutao 项目变得更好，欢迎[加入我们](development/join.md)！

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> 从微软商店版升级至最新版

> 对于这项改变，你可以阅读 [1.9.0 版本重大改变详解](blog/version-1-9-0-breaking-changes.md) 来获得详细信息

如果你已经安装了 Snap Hutao 微软商店版（版本号介于1.4.11和1.8.5之间）则需要先卸载旧版本再进行全新安装

- 按照文档提供的[卸载方法](advanced/uninstall.html)卸载旧版应用
  - 只要不手动删除数据目录，你的数据不会受到影响
- 按照上述方法全新安装新版应用

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

如没有特殊声明，则你可以通过安装最新版 MSIX 安装包来升级程序。

1.9.0版本起，Snap Hutao 将内置升级提示功能以提醒你获取更新包。如果你更新失败，可尝试使用 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 覆盖安装来解决问题。

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安装可选组件

通过可选组件，胡桃工具箱可以通过系统级的环境来更方便地实现一些功能，它们不是强制要求的组件，但可以带来更好的体验

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 运行时

WebView2 运行时由微软提供，其允许胡桃在程序内低开销地启用一个内置的浏览器。通过该组件，胡桃允许用户通过 WebView2 内置浏览器登录米游社账号。

在[微软官网](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)的底部，你可以找到`常青独立安装程序`，选择`x64`下载并根据提示安装即可

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 添加第一个米游社账号

在进入胡桃工具箱主界面后，点击左下角文档按钮和设置按钮中间的账号面板。在弹出的米游社账号面板中，根据你的账号类型选择对应的登录按钮。

如果你的原神账号是米哈游的国服账号，需要在`米游社`类别内登录；如果你的原神账号是 HoYoverse 的国际服账号，需要在 `HoYoLAB` 类别内登录。

无论是国服账号还是国际服账号，你都有`网页登录`和`Cookie登录`两种登录方式。对于使用米游社手机应用并绑定国服游戏账号的用户，可以选择`扫码登录`。

::: tabs

@tab 网页登录

**网页登录需要使用 Microsoft WebView2 运行时组件**

1. 点击账号面板中的`网页登录`按钮，胡桃将会通过 WebView2 打开米游社登录界面
2. 在该界面中登录你的米游社账号，登录成功后你将进入米游社通行证界面并看到登录账号的信息
3. 点击程序主界面右上角的`我已登录`按钮，胡桃工具箱会将当前账号添加进本地客户端，并在账号面板中显示出来

@tab Cookie 登录

如果你能希望使用自己提取的米哈游通行证 Cookie 登录到胡桃工具箱，可以在登录面板中点击 `手动输入`，并在弹出的窗口中输入包含 SToken 的 Cookie。
若你填入了一个有效的 Cookie，在点击`确认`后你将成功登录你的米游社账号并在账号面板中显示出来。

@tab 扫码登录（仅限国服）

**扫码登录需要使用米游社APP，且在米游社中已经绑定国服账号**

1. 点击账号面板中的`扫码登录`按钮，等待二维码加载完成
2. 打开米游社APP，点击`我的`，点击左上角的扫码图标
3. 扫描胡桃工具箱中的二维码，确认登录，胡桃将自动添加你的账号

:::

---

_**至此，你已经初步设置好了你的胡桃工具箱。你现在可以自由探索这个应用，你也可以在这个这个网站中找到胡桃的全部帮助文档。**_
