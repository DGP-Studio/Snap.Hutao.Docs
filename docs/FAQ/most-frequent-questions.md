---
headerDepth: 2
---

# 快速解答

## Windows 10 下程序乱码
当用户在 Windows 10 下使用胡桃且发现有乱码情况时，可以下载 `Segoe Fluent Icons`字体，并为系统所有用户安装，即可解决问题
- 你可以从 [微软官方](https://aka.ms/SegoeFluentIcons) 下载到该字体文件

## 1.1.7 版本更新安装失败
当你在安装胡桃工具箱1.1.7或更高版本时出现了`应用安装程序无法安装应用包相关项。请向开发人员索要Microsoft.WindowsAppRuntime.1.2-preview2应用包。`
这样的错误（如下图所示）
![Microsoft.WindowsAppRuntime.1.2-preview2 缺失](/images/202210/1.1.7-Update-Error.png)

你可以通过以下两种方法中的任意一种解决问题
1. 在解压的全部文件中，进入`/Dependencies/x64`目录，运行并安装`Microsoft.WindowsAppRuntime.1.2-preview2.msix`
2. 参考快速开始文档，使用 PowerShell 运行 `Install.ps1` 安装文件

![Microsoft.WindowsAppRuntime.1.2-preview2 Installed](/images/202210/1.1.7-Update-Error-Fix.png)
