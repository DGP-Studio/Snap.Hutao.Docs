---
headerDepth: 2
category: [FAQ]
---

# 如何...

这篇文档将会列出一些最常见的以“如何”开头的问题

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
  powershell -WindowStyle Hidden -Command "Start-Process shell:AppsFolder\60568DGPStudio.SnapHutao_ebfp3nyc27j86!App -verb runas
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