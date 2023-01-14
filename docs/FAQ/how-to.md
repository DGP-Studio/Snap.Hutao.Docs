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

## 如何实现自动化管理员模式

请使用如下的 PowerShell 脚本启动胡桃
```PowerShell
Start-Process shell:AppsFolder\7f0db578-026f-4e0b-a75b-d5d06bb0a74d_7jfyf5536hdrr!App -verb runas
```

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