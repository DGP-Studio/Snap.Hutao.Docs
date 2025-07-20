---
headerDepth: 2
category: [公告]
icon: iconfont icon-debug
order: 2
comment: false
description: 胡桃工具箱是一个发布于 GitHub 的开源程序，我们亦使用 GitHub 议题功能来收集问题反馈，你可以通过 GitHub Issues 来提交问题报告。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/statements/bug-report.html
---

# 提交 BUG 报告

如果你在使用 Snap Hutao 时发现了可复现或无法自行修复的问题，可以通过提交问题反馈来告知开发者。

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

## 在提交 Issue 之前

在发起新的 Issue 之前，请务必完成以下检查清单：

- [ ] 确认当前使用的是 Snap Hutao 的最新版本客户端。
- [ ] 使用搜索功能查找你的问题，并检查[已知问题](../advanced/known-issue.md)文档。
- [ ] 在项目的 Issue 页面搜索是否已有相同或类似的问题。

若经过上述步骤后仍未找到解决方案，你可以在 GitHub 上发起一个新的 Issue。

## 如何提交 Issue

### 提交问题前的准备

在提交 Issue 时，请确保提供以下信息：

1. **设备信息**

   - [ ] 你的设备 ID。
   - [ ] 你的操作系统版本。

2. **问题描述**

   - [ ] 详细描述你的问题，使开发人员能够根据你的描述复现问题。
     - 问题是如何触发的？
     - 程序或操作系统显示了怎样的错误提示？
     - 你尝试了哪些操作来排查问题，结果如何？

3. **程序崩溃相关**

- 如果你的问题涉及到程序崩溃，请在 Windows 事件查看器中查找与 Snap Hutao 相关的 `.NET 错误`，并将其中的详细内容附加在 Issue 中。

### 提交 Issue 的方法

- 前往 [GitHub 提交页面](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose)。
- 按照模板填写内容并提交。

若不清楚怎样是一个好的 Issue，请参考一些[优质问题](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98)。

## 远程调试

当开发者无法在自己的设备中复现某些问题时，可能需要通过远程调试进行问题定位。若你同意参与远程调试，将会有指定的管理员通过 QQ 添加你为好友，并将你拉入远程协助群以便交流。

**参与远程调试的计算机需满足以下条件：**

- 至少 15GB 的可用硬盘空间。
- 足够的网络流量以支持调试操作。

### 调试前准备

1. 执行[贡献代码-设置 Snap Hutao 项目](../development/contribute.md#设置-snaphutao-项目)中的第 `1～3` 步。
2. 下载并安装 [网易UU](https://uuyc.163.com/) 远程工具。

远程调试将帮助我们更快速地解决问题，感谢你的支持！
