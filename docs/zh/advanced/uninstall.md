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

- 清除有关的任务计划
  - 1.4.15 版本前，若不执行该步骤，胡桃用于获取实时便笺数据的计划任务将不会被删除，会出现[这个问题](#为什么会弹出需要使用新应用以打开的对话框)
  - **方法 1** <Badge text="仅限早于 1.4.15 的版本" type="tip" />：
    - 打开胡桃，选择 **设置** 页签
    - 找到 **删除所有计划任务** 一栏中，点击右侧的 **执行** 按钮 <Badge text="需要管理员模式" type="tip" />
  - **方法 2**：
    - 执行下方的脚本
      ```PowerShell
      schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
      ```
  - **方法 3**：
    - 打开 Windows 计划任务程序
    - 找到 `SnapHutaoDailyNoteRefreshTask` 任务并删除
  - **方法 4**：
    - 升级至 1.5.1 版本并使用一次实时便笺功能
    - 直接卸载胡桃工具箱
- 卸载软件
  - 打开 “开始菜单”
  - 找到或搜索到 “胡桃”
  - 右键点击 “胡桃”，并选择 “卸载”
- 清除数据文件夹（如需完全卸载）
  - 打开并删除该文件夹 `%userprofile%/Documents/Hutao`

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
