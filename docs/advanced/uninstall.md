---
category: [FAQ]
icon: delete
order: 8
---
# 卸载胡桃工具箱

- 清除有关的任务计划
    - 1.4.15 版本前，若不执行该步骤，胡桃用于获取实时便笺数据的计划任务将不会被删除，会出现[这个问题](FAQ.md#为什么会弹出需要使用新应用以打开的对话框)
    - **方法1** <Badge text="仅限早于 1.4.15 的版本" type="tip" />：
        - 打开胡桃，选择 **设置** 页签
        - 找到 **删除所有计划任务** 一栏中，点击右侧的 **执行** 按钮 <Badge text="需要管理员模式" type="tip" />
    - **方法2**：
        - 执行下方的脚本
           ``` PowerShell
           schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
           ```
    - **方法3**：
        - 打开 Windows 计划任务程序
        - 找到 `SnapHutaoDailyNoteRefreshTask` 任务并删除
    - **方法4**：
        - 升级至`1.5.1`版本并使用一次实时便笺功能
        - 直接卸载胡桃工具箱
- 卸载软件
    - 打开`开始菜单`
    - 找到或搜索到`胡桃`
    - 右键点击`胡桃`，并选择`卸载`
- 清除数据文件夹（如需完全卸载）
    - 打开并删除该文件夹 `%userprofile%/Documents/Hutao`