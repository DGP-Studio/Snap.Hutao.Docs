---
headerDepth: 2
icon: ask
category: [FAQ]
order: 1
redirectFrom: /advanced/FAQ.html
---

# 常见问题

## 如何创建胡桃的桌面快捷方式
::: tip 社区力量
感谢 [CzHUV 提供的解决方案](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::
- `Win+R` 呼出运行窗口，在窗口中输入`shell:AppsFolder`
  ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png)
- Windows 会弹出应用程序目录，找到胡桃工具箱
- 右键，点击`创建快捷方式`
- 根据提示操作你就可以获得一个桌面快捷方式了

## 如何添加一个默认以管理员方式运行的快捷方式
::: tip 社区力量
感谢 [Parsifa1 提供的解决方案](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/17)
:::
基本原理：使用下方的 PowerShell 脚本可以以管理员方式运行胡桃
```PowerShell ts:no-line-numbers
Start-Process shell:AppsFolder\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
```
- 保存胡桃工具箱的 Logo 资源
  - 你可以点击[这里](https://github.com/DGP-Studio/Snap.Hutao/raw/main/src/Snap.Hutao/Snap.Hutao/Assets/Logo.ico)下载
- 在桌面点击右键，选择`新建` -> `快捷方式`
- 在`请键入对象的位置`中直接输入:
```PowerShell ts:no-line-numbers
  powershell -Command "Start-Process shell:AppsFolder\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
```
- 将快捷方式命名为你需要的名称，比如`Snap Hutao`
- 确认创建，此时你会在桌面得到一个有 PowerShell 图标的快捷方式
- 右键该快捷方式，点击属性
  - 将`运行方式`修改为`最小化`
  - 点击更改图标，选择`浏览`，并选中刚刚下载的图标
- 这样你就获得了胡桃工具箱的桌面快捷方式，并且运行它将直接以管理员模式运行
  - 你也可以将固定到任务栏或磁贴区

## 如何让胡桃工具箱开机自动启动

- 请参考如下思路
    - 可以自行创建一个批处理文件，内容参考[此issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184)中，令胡桃以管理员模式直接运行的命令。
    - 设置一个**计划任务程序**令上述批处理文件开机自启，或将上述批处理文件加入**启动项**中
- 或有其他令胡桃工具箱可开机自启的思路，可自行探索

## 如何通过胡桃工具箱快速地启动游戏

- 在主程序中正确设置高级启动器功能
- 将胡桃工具箱在系统中固定在快速启动栏中
- 在快速启动栏中右键胡桃应用程序

  ![quick-start](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png)
- 选择`启动游戏`即可

## 如何通过网络代理使用胡桃工具箱

参考 [HttpRequestException 错误](exceptions.html#httprequestexception) 文档

## 为什么在设置中点击修改游戏路径无效

特定系统版本的用户，由于微软对文件选择对话框的COM实现的差异，会存在点击按钮后无响应的问题。

相关的 [Github Issue](https://github.com/microsoft/WindowsAppSDK/issues/2931)

## 为什么程序会出现乱码现象

- 当用户在 Windows 10 下使用胡桃且发现有乱码情况时：
  - 可以下载 `Segoe Fluent Icons`字体
  - 安装时选择`为系统所有用户安装`，即可解决问题
- 您可以从 [微软官方](https://aka.ms/SegoeFluentIcons)下载到该字体文件

## 为什么解锁帧率后使用心海时出现掉帧
原神的BUG，和我们没关系

## 为什么会弹出需要使用新应用以打开的对话框
![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg)

如在卸载胡桃工具箱后出现如上图所示的`需要使用新应用以打开此 hutao 链接`，说明没有按文档要求在卸载前清除实时便笺定时任务。
请根据文档在设置中清除定时任务后再卸载胡桃工具箱。
- 如果你在系统定时任务中找不到胡桃的定时任务，但问题仍然出现，请参考[这份文档](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18)来解决

## 为什么米游社帐号登录状态经常失效，添加的帐号消失

* 我们通过储存帐号的米游社 Cookie 来维持登录状态。
* 但是当用户在浏览器或其它设备上**注销帐号**后， 维持登录状态的 Cookie 将**失效**。
* 这会导致胡桃工具箱上的米游社帐号在启动后被自动移除。
* 此情况也可能因为网络连接问题导致无法检查Cookie有效性，故出现此情况后请优先重启胡桃工具箱。
* 自2022年10月起，米游社极大地提高了账号被判定为有风险的概率，[账号有风险](mihoyo-risk-tip.md)时亦会令Cookie无法被识别为有效状态
* 自 1.4.15 版本起，你可以通过在帐号面板中刷新 Cookie 来刷新登录状态

## 为什么游戏登录状态会失效，导致切换帐号功能无效
- 保存游戏登录状态的要素有两个：网络环境和设备 ID
- 导致该问题的常见原因是：
  - 网络环境频繁变换，如公网 IP 更换
  - 操作失误，导致实际上根本没有保存登录状态（空的登录状态无法避免被胡桃识别）
    - 确认你的帐号已登录后，进入游戏
    - 关闭游戏后，确定游戏进程已关闭
    - 再次进行帐号检测，来添加登录状态

## 为什么程序会提示注册计划任务失败
使用管理员模式使用一次实时便笺后，胡桃的任务计划会被以管理员权限创建。当再次以非管理员模式启动胡桃时，程序在修改计划任务时会缺少权限。
继续使用管理员模式即可解决该问题。

## 为什么在开启代理后胡桃工具箱会没有网络连接

参考 [HttpRequestException 错误](exceptions.html#httprequestexception) 文档

## 为什么商店版本和侧载版本不会相互覆盖升级

- 商店版本和侧载版本有不同的软件 ID，所以会被系统识别为不同的程序
- 商店版的更新只会覆盖商店版应用；侧载版更新包只会更新侧载版应用
- 在你的系统中，商店版的胡桃工具箱名称为 `Snap Hutao`，侧载版的名称为 `胡桃`

## 安装进度卡在“正在安装所需框架”（一个可能的情况为卡在15%）

- 这可能是因为你的系统无法自动安装框架，通常是网络或者windows update组件导致，这类问题请到微软社区提问
- 也可以选择手动安装 [胡桃的相关依赖](https://d.hut.ao/releases/Dependency)尝试解决

