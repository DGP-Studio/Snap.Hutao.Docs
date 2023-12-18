---
pageClass: link-box
externalLinkIcon: false
category: [功能, 教程]
redirectFrom: /quick-start.html
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

1. LTSC 和 LTSB 版本系统由于不包含微软商店，不在支持列表中
2. Windows 10 Build 19041 亦可以安装， 但部分功能会因内核问题无法使用，故该版本下的胡桃工具箱问题将不会被处理
3. Windows Insider 预览版本的问题不会被处理

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> 下载胡桃工具箱

### 全新安装

**无论使用何种安装方式，应用包来源和注册授权都由微软商店管理**

::: tabs
@tab 使用微软商店安装
<ms-store-badge
productid="9PH4NXJ2JN52"
theme="auto">
</ms-store-badge>

微软商店链接：[Snap Hutao](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)

在 Windows 10 和 Windows 11 下你可以直接点击上面的按钮来下载胡桃工具箱

@tab 使用 winget 安装

- 启动 PowerShell
- 执行命令 `winget install "Snap Hutao"`
- 根据提示允许安装
  - 如果安装失败或显示缺少依赖包，或卡在安装框架阶段，请参考[手动安装依赖项](advanced/dependency.md)一文

@tab 使用 MSIX 安装包安装

- 访问胡桃工具箱[最新发布页面](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/)
- 下载 MSIX 应用包
- 直接运行 MSIX 应用包以执行安装
  - 如果安装失败或显示缺少依赖包，或卡在安装框架阶段，请参考[手动安装依赖项](advanced/dependency.md)一文

:::

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> 从侧载版升级至商店版

如果你之前安装了 Snap Hutao 侧载版（1.4.10及更旧的版本）则需要先卸载旧版本再进行全新安装

- 按照文档提供的[卸载方法](advanced/uninstall.html)卸载侧载版应用
  - 只要不手动删除数据目录，你的数据不会受到影响
- 按照上述方法全新安装商店版应用

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

**无论你使用何种方式安装了应用，你都可以选择任意的方式去更新它，不必选择和安装时一样的方法，因为微软商店是应用包唯一来源**
::: tabs
@tab 使用微软商店更新

- 启动微软商店
- 点击左下角的库，查看到你目前已安装的全部应用
- 点击界面右上角的获取更新，你的应用将会被更新

若点击获取更新后胡桃仍然没有获取到更新，则可以进入`Snap Hutao`的[商店详情页面](<(https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)>)，等待信息加载完成来获取更新

@tab 使用 winget 更新

- 启动 PowerShell
- 执行命令 `winget upgrade "Snap Hutao"`
- 根据提示允许安装

@tab 使用 MSIX 安装包更新

- 访问胡桃工具箱[最新发布页面](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/)
- 下载 MSIX 应用包
- 直接运行 MSIX 应用包以执行安装

:::

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安装可选组件

通过可选组件，胡桃工具箱可以通过系统级的环境来更方便地实现一些功能，它们不是强制要求的组件，但可以带来更好的体验

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 运行时

WebView2 运行时由微软提供，其允许胡桃在程序内低开销地启用一个内置的浏览器。通过该组件，胡桃允许用户通过 WebView2 内置浏览器登录米游社账号。

在[微软官网](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)的底部，你可以找到`常青独立安装程序`，选择`x64`下载并根据提示安装即可

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 添加第一个米游社账号

在进入胡桃工具箱主界面后，点击左下角文档按钮和设置按钮中间的账号面板。在弹出的米游社账号面板中，根据你的账号类型选择对应的登录按钮。

如果你的原神账号是米哈游的国服账号，需要在`米游社`类别内登录；如果你的原神账号是 HoYoverse 的国际服账号，需要在 `HoYoLAB` 类别内登录。

无论是国服账号还是国际服账号，你都有`网页登录`和`Cookie登录`两种登录方式

::: tabs

@tab 网页登录

**网页登录需要使用 Microsoft WebView2 运行时组件**

1. 点击账号面板中的`网页登录`按钮，胡桃将会通过 WebView2 打开米游社登录界面
2. 在该界面中登录你的米游社账号，登录成功后你将进入米游社通行证界面并看到登录账号的信息
3. 点击程序主界面右上角的`我已登录`按钮，胡桃工具箱会将当前账号添加进本地客户端，并在账号面板中显示出来

@tab Cookie 登录

如果你能希望使用自己提取的米哈游通行证 Cookie 登录到胡桃工具箱，可以在登录面板中点击 `手动输入`，并在弹出的窗口中输入包含 SToken 的 Cookie。
若你填入了一个有效的 Cookie，在点击`确认`后你将成功登录你的米游社账号并在账号面板中显示出来。

:::

---

_**至此，你已经初步设置好了你的胡桃工具箱。你现在可以自由探索这个应用，你也可以在这个这个网站中找到胡桃的全部帮助文档。**_
