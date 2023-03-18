---
pageClass: link-box
externalLinkIcon: false
category:
  - Feature
  - Tutorial
---

# Quick Start

::: tip
If you download and use **Snap Hutao**，you are agree to our[ terms of service](/statements/tos.md)
:::    
@include(star-request.md)

## Video Tutorial
For most people, follow the instruction on this page is more effiency.

However, if you are not familiar with the operation mentioned below, you can come back the follow the video tutorial. ::: details Snap Hutao Tutorial - Microsoft Store Installation
<BiliBili bvid="BV13A411k7B4" />
:::

## Minimum System Requirements
| Requirement             | Attribute                              |
| ----------------------- | -------------------------------------- |
| **Minimum Required OS** | Windows 10 Build 19045 (22H2) [^first] |
| **Recommended OS**      | Windows 11 Build 22621 (22H2)          |
| Optional Components     | WebView2 Runtime                       |


## 下载胡桃工具箱
**无论使用何种安装方式，应用包来源和注册授权都由微软商店管理**

::: tabs
@tab 使用微软商店下载
<ms-store-badge
productid="9PH4NXJ2JN52"
theme="auto">
</ms-store-badge>

Microsoft Store Link：[Snap Hutao](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)

在 Windows 10 和 Windows 11 下你可以直接点击上面的按钮来下载胡桃工具箱


@tab 使用 winget 下载
- 启动 PowerShell
- 执行命令 `winget install "Snap Hutao"`
- 根据提示允许安装

@tab 从 GitHub 下载
- 访问胡桃工具箱[最新发布页面](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/)
- 下载 MSIX 应用包
- 直接运行 MSIX 应用包以执行安装

:::
### 从侧载版升级至商店版
- 按照文档提供的[卸载方法](/advanced/uninstall.html)卸载侧载版应用
  - 只要不手动删除数据目录，你的数据不会受到影响
- 按照上述方法全新安装商店版应用

## 更新胡桃工具箱
**无论你使用何种方式安装了应用，你都可以选择任意的方式去更新它，不必选择和安装时一样的方法，因为微软商店是应用包唯一来源** ::: tabs  
@tab 使用微软商店更新
- 启动微软商店
- 点击左下角的库，查看到你目前已安装的全部应用
- 点击界面右上角的获取更新，你的应用将会被更新

若点击获取更新后胡桃仍然没有获取到更新，则可以进入`Snap Hutao`的[商店详情页面]((https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52))，等待信息加载完成来获取更新

@tab 使用 winget 更新
- 启动 PowerShell
- 执行命令 `winget upgrade "Snap Hutao"`
- 根据提示允许安装

@tab 从 GitHub 更新
- 访问胡桃工具箱[最新发布页面](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/)
- 下载 MSIX 应用包
- 直接运行 MSIX 应用包以执行安装

:::

## 安装 WebView2 运行时

WebView2 运行时由微软提供，其允许胡桃在程序内低开销地启用一个内置的浏览器。作为可选组件，WebView2 运行时不是强制组件，但安装后你会更容易地使用部分功能。作为可选组件，WebView2 运行时不是强制组件，但安装后你会更容易地使用部分功能。

在[微软官网](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)的底部，你可以找到`常青独立安装程序`，选择`x64`下载并根据提示安装即可

[^first]: LTSC 和 LTSB 版本系统由于不包含微软商店，不在支持列表中。The LTSC and LTSB systems are not in the support list because they do not contain Microsoft Store.Windows 10 Build 19041 亦可以安装，但部分功能会因内核问题无法使用，故该版本下的胡桃工具箱问题将不会被处理