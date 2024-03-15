---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
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
    - 可以自行创建一个批处理文件，内容参考[此 issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184)中，令胡桃以管理员模式直接运行的命令。
    - 设置一个**计划任务程序**令上述批处理文件开机自启，或将上述批处理文件加入**启动项**中
    - 使用 `SkipUAC` 等可以使软件以管理员身份静默自启的程序
- 或其他可以使胡桃工具箱开机自启的思路，敬请自行探索

### 无法使用管理员模式启动胡桃工具箱

> 该问题仅存在于 Windows 10 低于 22H2 的版本中

- 当用户系统版本低于 `Windows Build 19045`（即 `Windows 10 22H2` 版本）时，可能无法通过管理员模式启动胡桃工具箱
    - 该问题属于 Windows 内核级别问题，难以判断具体来源，故建议用户升级至 Windows 10 最新版本

### 如何通过网络代理使用胡桃工具箱

> Snap Hutao 有着良好的云端网络结构，在全球各地你都能获得良好的网络服务

所有的 Windows Appx 容器应用（包括 Snap Hutao）都被禁用了 `Loopback 网络`，因此使用一些现代化的网络代理软件时会导致容器化应用无法访问互联网，进而导致程序错误。

如果你需要通过网络代理使用 Snap Hutao，你有两种方法：

1. 在网络代理软件中启用 TUN 模式
2. 在反馈中心中解除 Loopback 限制

### 搜索时拼音字母自动上屏

如果你使用的是 `Rime` 输入法，请参考 [GitHub Rime Issues 714](https://github.com/rime/weasel/issues/714#issuecomment-1999132993) 的解决方案

如果你使用的是其他输入法，请检查拼音与拼音间的分隔字符。如果分隔字符是空格，请将其修改为 `'` 等其他字符。示例：原分隔字符为空格，打字时显示为 `hu tao`，修改分隔字符为 `'` 后显示为 `hu'tao`