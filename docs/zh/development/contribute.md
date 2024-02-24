---
category: [开源, 开发]
tag: ["开发", "GitHub"]
icon: iconfont icon-code
order: 3
---

# 贡献你的代码

胡桃工具箱使用 C# 和 .NET 框架开发桌面客户端和服务端。如果你愿意贡献你的代码，请阅读以下指导文档。

你可以在 GitHub 上查看所有当前仍然[未解决的问题](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90)

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> 设置 Snap.Hutao 项目

1. 下载并安装 [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/)
2. 启动 Visual Studio Installer 以完成 Visual Studio 的安装流程
   - 你需要安装 `.NET desktop development`、`Desktop development with C++` 和 `Universal Windows Platform development` 组件
   - 它们的中文名分别是 `.NET 桌面开发`、`使用 C++ 的桌面开发` 和 `通用 Windows 平台开发`
3. 安装 Visual Studio 商店中由 Microsoft 提供的 `Single-project MSIX Packaging Tools for VS 2022` 插件
4. 使用 Git clone `https://github.com/DGP-Studio/Snap.Hutao.git` 到你的本地设备
5. 将分支切换为 `develop`
6. 使用你的 Visual Studio 打开项目 solution，接下来你就可以开始编辑代码了

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> 开启 Debug

1. 从[微软商店](https://www.microsoft.com/store/productid/9P7KNL5RWT25)或[微软官网](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite)下载并安装 `Sysinternals Suite`
2. 从开始菜单或解压后的文件中找到 `DebugView` 并启动
3. 启动 Snap Hutao 主程序
4. 观察 DebugView 的输出

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> 发起 Pull Request

- 所有不是从项目其它分支发起的 Pull Request 都只被允许合并进 `develop` 分支
- 如果你提交的代码与已有的 issue 相关，请使用[关键词](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)将你的 PR 与相关的 issue 关联起来。这样当你的 PR 最终被合并进 `main` 主分支时，这些 issue 将被自动关闭。

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> 测试打包程序

一旦你的代码被合并进 `develop` 和 `main` 分支，一个 GitHub Actions 脚本将运行起来以构建所在分支的最新代码，并以 `Snap Hutao Alpha` 命名。

你可以在[alpha 流水线](https://github.com/DGP-Studio/Snap.Hutao.Docs/actions)中找到全部的编译记录。

**你需要以 `受信任的根证书颁发机构` 添加[DGP Studio CA 证书](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt)到你的本地设备上以允许操作系统安装测试版安装包。**
