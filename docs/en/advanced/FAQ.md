---
headerDepth: 2
icon: ask
category:
  - FAQ
order: 1
---

# FAQ

## How to create desktop shortcut

::: tip Community Power

Thanks to [solution provided by CzHUV](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)。

:::

- Use `Win+R` to start run, in the window input `shell:AppsFolder` ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png)
- In the new pop-up window, find Snap Hutao
- Right lick on it, and click `Create shortcut`
- Confirm the operation and you will get the desktop shortcut

## How to create desktop shortcut with Administrator privilege

::: tip Community Power

Thanks to [solution provided by Parsifa1](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/17)。

:::  
Fundamental principle: Use the following PowerShell scrip can run Snap Hutao with Administrator privilege

```PowerShell ts:no-line-numbers
Start-Process shell:AppsFolder\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
```

- Save Snap Hutao logo to your device
  - You can find it [here](https://github.com/DGP-Studio/Snap.Hutao/raw/main/src/Snap.Hutao/Snap.Hutao/Assets/Logo.ico)
  - It is expected to see a blank image in the browser
- In your desktop, select `New` -> `Shortcut`
- In the field of `Type the location of the item`, input: 

```PowerShell ts:no-line-numbers
powershell -Command "Start-Process shell:AppsFolder\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
```

- Name the shortcut as `Snap Hutao`
- Confirm the creation, and you will get this shortcut with PowerShell logo
- Right-click on this shortcut, select `Properties`
  - Change value of `Run` to `Minimized`
  - Select `Change Icon`, and select the icon you just downloaded
- Now, you get a shortcut of Snap Hutao with Administrator privilege
  - You can also pin it to task bar or start menu

## How to run Snap Hutao when Windows starts

**This is a workaround solution**

- Create a bat file, content refers to [this Issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184), it allows bat to run Snap Hutao with Administrator privilege
- Create a Scheduled Task, run the bat when Windows startup, or drag it to Windows start folder

## Use Snap Hutao to quick start the game

- Config the game launcher in the settings
- Pin Snap Hutao on taskbar
- Right click on Snap Hutao and you will see the quick launcher

  ![quick-start](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png)

- Select `Lauch Game`, you will be asked which account to start the game

## Use Snap Hutao with Network Proxy

Refer to [HttpRequestException Error (502)](exceptions.html#_502-bad-gateway) document

## 为什么在设置中点击修改游戏路径无效

特定系统版本的用户，由于微软对文件选择对话框的 COM 实现的差异，会存在点击按钮后无响应的问题。

相关的 [Github Issue](https://github.com/microsoft/WindowsAppSDK/issues/2931)

## 为什么程序会出现乱码现象

- 当用户在 Windows 10 下使用胡桃且发现有乱码情况时：
  - 可以下载 `Segoe Fluent Icons`字体
  - 安装时选择`为系统所有用户安装`，即可解决问题
- 您可以从 [微软官方](https://aka.ms/SegoeFluentIcons)下载到该字体文件

## 为什么解锁帧率后使用心海时出现掉帧

原神的 BUG，和我们没关系

## 为什么会弹出需要使用新应用以打开的对话框

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg)

如在卸载胡桃工具箱后出现如上图所示的`需要使用新应用以打开此 hutao 链接`，说明没有按文档要求在卸载前清除实时便笺定时任务。 请根据文档在设置中清除定时任务后再卸载胡桃工具箱。

- 如果你在系统定时任务中找不到胡桃的定时任务，但问题仍然出现，请参考[这份文档](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18)来解决

## 为什么米游社帐号登录状态经常失效，添加的帐号消失

- 我们通过储存帐号的米游社 Cookie 来维持登录状态。
- 但是当用户在浏览器或其它设备上**注销帐号**后， 维持登录状态的 Cookie 将**失效**。
- 这会导致胡桃工具箱上的米游社帐号在启动后被自动移除。
- 此情况也可能因为网络连接问题导致无法检查 Cookie 有效性，故出现此情况后请优先重启胡桃工具箱。
- 自 2022 年 10 月起，米游社极大地提高了账号被判定为有风险的概率，[账号有风险](mihoyo-risk-tip.md)时亦会令 Cookie 无法被识别为有效状态
- 自 1.4.15 版本起，你可以通过在帐号面板中刷新 Cookie 来刷新登录状态

## 为什么游戏登录状态会失效，导致切换帐号功能无效

- 保存游戏登录状态的要素有两个：网络环境和设备 ID
- 导致该问题的常见原因是：
  - 网络环境频繁变换，如公网 IP 更换
  - 操作失误，导致实际上根本没有保存登录状态（空的登录状态无法避免被胡桃识别）
    - 确认你的帐号已登录后，进入游戏
    - 关闭游戏后，确定游戏进程已关闭
    - 再次进行帐号检测，来添加登录状态

## 为什么程序会提示注册计划任务失败

使用管理员模式使用一次实时便笺后，胡桃的任务计划会被以管理员权限创建。当再次以非管理员模式启动胡桃时，程序在修改计划任务时会缺少权限。 继续使用管理员模式即可解决该问题。

## 为什么在开启代理后胡桃工具箱会没有网络连接

参考 [HttpRequestException 错误](exceptions.html#httprequestexception) 文档

## 为什么商店版本和侧载版本不会相互覆盖升级

- 商店版本和侧载版本有不同的软件 ID，所以会被系统识别为不同的程序
- 商店版的更新只会覆盖商店版应用；侧载版更新包只会更新侧载版应用
- 在你的系统中，商店版的胡桃工具箱名称为 `Snap Hutao`，侧载版的名称为 `胡桃`
