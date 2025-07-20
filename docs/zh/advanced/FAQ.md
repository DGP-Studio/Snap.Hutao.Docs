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

## 如何创建胡桃的桌面快捷方式（非管理员模式）

::: tip 社区力量
感谢 [CzHUV 提供的解决方案](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::

1. 使用 `Win+R` 打开运行窗口，在输入框中输入 `shell:AppsFolder`。
   ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
2. Windows 会弹出应用程序目录，找到胡桃工具箱。
3. 右键点击胡桃工具箱图标，选择“创建快捷方式”。
4. 根据系统提示操作，即可在桌面创建快捷方式。

## 如何创建胡桃的桌面快捷方式（管理员模式）

- 进入胡桃工具箱的程序设置页面，点击“创建快捷方式”按钮，即可在桌面生成一个具有管理员权限的快捷方式。

## 如何让胡桃工具箱开机自动启动

### 方法一：通过批处理文件

1. 创建一个批处理文件，参考[此 Issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184) 中提供的命令，使胡桃以管理员模式直接运行。
2. 使用以下方式配置批处理文件的自动启动：

- 创建计划任务程序，使批处理文件在系统启动时执行。
- 将批处理文件添加到系统的启动项。

### 方法二：使用工具

- 使用类似 `SkipUAC` 的程序，使胡桃工具箱以管理员权限静默启动。

::: warning 注意事项
上述方法可能会因系统配置或其他问题失效。Snap Hutao 不直接支持开机自启功能，尝试相关操作需自行承担风险。
:::

## 无法使用管理员模式启动胡桃工具箱

> **问题范围**: 仅限 Windows 10 低于 22H2 的版本

- 当用户系统版本低于 `Windows Build 19045`（即 Windows 10 22H2 版本）时，可能无法通过管理员模式启动胡桃工具箱。
- **解决方案**: 建议将系统升级至 Windows 10 的最新版本，以避免此类兼容性问题。

## 如何通过网络代理使用胡桃工具箱

> Snap Hutao 提供良好的云端网络结构，确保用户在全球各地均能享受优质服务。

1. 配置系统或软件代理服务。
2. 推荐启用 `Loopback 网络`，详细教程可参见 [此处](loopback.md)。


# 添加通知图标创建失败

打开 PowerShell 并执行下方的命令以修复问题

```PowerShell
irm hut.ao/install.ps1 | iex
```
