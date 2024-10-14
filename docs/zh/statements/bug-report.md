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

在你使用 Snap Hutao 时如果发现了可复现或不可自行修复的问题，可以通过提交问题反馈来告知开发者。

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

在发起新的 Issue 之前，请先执行以下清单：

- [ ] 当前使用的是最新版本客户端
- [ ] 使用搜索功能搜索你的问题并检查 [已知问题](../advanced/known-issue.md) 文档
- [ ] 搜索项目 Issue，检查是否已有相同或类似的问题

若执行上述步骤后没有得到问题解决方案，你可以在 GitHub 上发起一个新的 Issue

如果你不清楚怎样是一个好的 Issue，请阅读 Snap Hutao 过去的一些[优质问题](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98+is%3Aclosed)

- 通过 GitHub 提交问题
  - [github.com/DGP-Studio/Snap.Hutao/issues/new/choose](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose)
- 在 Issue 中，你应包含以下内容：
  - [ ] 你的设备 ID
  - [ ] 你的操作系统版本
  - [ ] 详细描述你的问题，开发人员应能根据你的描述复现问题
    - [ ] 问题是如何触发的
    - [ ] 程序或操作系统有怎样的错误提示
    - [ ] 你执行了怎样的操作排查问题，有什么结果
  - [ ] 如果你的问题涉及到程序崩溃，你需要在 Windows 事件查看器中寻找和 Snap Hutao 相关的 `.NET 错误` 并将其中的内容附加在 Issue 中

## 远程调试

在一些问题无法被定位时（即开发者无法在自己的设备中复现问题时），开发者可能会向社区成员询问发起远程调试，在有问题的设备上 debug 以寻找问题解决方案。在这种情况下，若你同意，一个指定的管理员将通过 QQ 加你为好友并拉你进入远程协助群以方便交流。

**参与远程调试的计算机需要至少 15GB 的可用硬盘空间以及充足的网络流量。**

在开始调试之前，你需要执行 [贡献代码-设置 Snap Hutao 项目](../development/contribute.md#设置-snaphutao-项目) 中的第 `1～3` 步，并下载安装 [ToDesk](https://www.todesk.com/download.html) 远程工具。
