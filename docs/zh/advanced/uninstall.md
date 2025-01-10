---
category: [FAQ]
icon: iconfont icon-delete
tag: [卸载]
order: 9
comment: false
description: 卸载胡桃工具箱是一个简单快速的过程，你可以根据本页教程，以最适合你的程度来卸载胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/uninstall.html&has_description=False
---

# 卸载胡桃工具箱

- 卸载 Snap Hutao 应用程序
  - 打开“开始菜单”
  - 搜索 Snap Hutao
  - 右键点击 Snap Hutao，并选择“卸载”
- 清除数据文件夹（如需完全卸载）
  - 打开 `explorer {F42EE2D3-909F-4907-8871-4C22FC0BF756}`
  - 删除其中的 `Hutao` 文件夹

## 常见问题

### 为什么会弹出需要使用新应用以打开的对话框

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

如在卸载胡桃工具箱后出现如上图所示的 “需要使用新应用以打开此 hutao 链接”，说明没有按文档要求在卸载前清除实时便笺定时任务。
请根据文档在设置中清除定时任务后再卸载胡桃工具箱。

- 如果你在系统定时任务中找不到胡桃的定时任务，但问题仍然出现，请参考[这份文档](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18)来解决

### 如何完整地备份/恢复客户端数据

::: warning 数据安全提示
`Userdata.db` 包含你的全部客户端数据，包括安全敏感的米哈游论坛 Cookie，请妥善储存该文件，不要将其分享给任何人。
:::

从在胡桃数据目录（默认路径为 `%userprofile%/Documents/Hutao`）中以复制的方式将 `Userdata.db` 拷贝至你的备份目录即可，该文件包含了全部的胡桃客户端数据。
