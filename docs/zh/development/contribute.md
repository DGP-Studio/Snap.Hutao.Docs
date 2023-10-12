---
category: [open source, development]
tag: ["开发", "GitHub"]
icon: iconfont icon-code
order: 2
---

# 贡献你的代码

胡桃工具箱使用 C# 和 .NET 框架开发桌面客户端和服务端。如果你愿意贡献你的代码，请阅读以下指导文档。

你可以在 GitHub 上查看所有当前仍然[未解决的问题](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E4%BF%AE%E5%A4%8D+)

## 设置 Snap.Hutao 项目

1. 下载并安装 [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/)
2. 启动 Visual Studio Installer 以完成 Visual Studio 的安装流程
   - 你需要安装 `.NET desktop development`、 `Desktop development with C++` 和 `Universal Windows Platform development` 组件
3. 安装 Visual Studio 商店中由 Microsoft 提供的 `Single-project MSIX Packaging Tools for VS 2022` 插件
4. 使用 Git clone `https://github.com/DGP-Studio/Snap.Hutao.git` 到你的本地设备
5. 将分支切换为 `develop`
6. 使用你的 Visual Studio 打开项目 solution，接下来你就可以开始编辑代码了

## 发起 Pull Request

- 所有不是从项目其它分支发起的 Pull Request 都只被允许合并进 `develop` 分支
- 如果你提交的代码与已有的 issue 相关，请使用请使用[关键词](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)
  将你的 PR 与相关的 issue 关联起来。这样当你的 PR 最终被合并进 `main` 主分支时，这些 issue 将被自动关闭。

## 测试打包程序

一旦你的代码被合并进 `develop` 和 `main` 分支，一个 Azure Pipeline CI 流水线脚本将运行起来以构建所在分支的最新代码，并以 `Snap Hutao Alpha` 命名。
当该测试包打包完成后，它将被以 `pre-release` 的形式发布在 [GitHub 发布页面](https://github.com/DGP-Studio/Snap.Hutao/releases)上。

你需要安装 [Snap.Hutao.CI.cer](https://github.com/DGP-Studio/Snap.Hutao/releases/download/2023.10.3.1/Snap.Hutao.CI.cer)
证书到你的本地设备上以允许你安装测试版安装包。

\*如果在最新的发布中没有包含程序安装包附件，则意味着它仍然处于上传过程中。
