---
headerDepth: 2
---

# 快速解答

## 如何实现自动化管理员模式

请使用如下的 PowerShell 脚本启动胡桃
``` ps
Start-Process shell:AppsFolder\7f0db578-026f-4e0b-a75b-d5d06bb0a74d_7jfyf5536hdrr!App -verb runas
```

## 能否让胡桃工具箱开机自动启动

- 请参考如下思路
  - 可以自行创建一个批处理文件，内容参考[此issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184)中，令胡桃以管理员模式直接运行的命令。
  - 设置一个**计划任务程序**令上述批处理文件开机自启，或将上述批处理文件加入**启动项**中
- 或有其他令胡桃工具箱可开机自启的思路，可自行探索  

## 软件内的图像资源无法加载

耐心等待（通常需要半个小时，甚至更久）

## 在设置中点击修改游戏路径无效

特定系统版本的用户，由于微软对文件选择对话框的COM实现的差异，会存在点击按钮后无响应的问题。

相关的 [Github Issue](https://github.com/microsoft/WindowsAppSDK/issues/2931)
         
## Win10系统下出现乱码现象

- 当用户在 Windows 10 下使用胡桃且发现有乱码情况时：
  - 可以下载 `Segoe Fluent Icons`字体
  - 安装时选择`为系统所有用户安装`，即可解决问题
- 您可以从 [微软官方](https://aka.ms/SegoeFluentIcons)下载到该字体文件  
          
## 解锁帧率后使用心海时出现掉帧
原神的BUG，和我们没关系
          
## 弹出需要使用新应用以打开的对话框
  
- 部分用户在**更新**或**卸载**胡桃后，频繁自动弹出`需要使用新应用以打开此Hutao链接`的对话框
- 请 **使用管理员模式** 打开任意终端
- 输入如下代码并运行，以删除残留的计划任务
```
 schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
```