---
category:
  - FAQ
icon: iconfont icon-delete
order: 9
---

# Uninstall Snap Hutao

- Clear Real-time Notes Scheduled Task
  - Before version 1.4.15, if not execute this step, scheduled task used to refresh real-time notes may not be deleted,and you may face [this issue](FAQ.md#为什么会弹出需要使用新应用以打开的对话框)
    - **Method 1** <Badge text="For version <= 1.4.15" type="tip" />：
      - Launch Snap Hutao, and go to settings page
      - Find **Delete All Scheduled Task** field, and click on **Execute** Button <Badge text="Requires administrator privileges" type="tip" />
  - **Method 2**：
    - Execute the following PowerShell script
      ```PowerShell
      schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
      ```
  - **Method 3**：
    - Open Windows Scheduled Task Manager
    - Find `SnapHutaoDailyNoteRefreshTask` task and delete it
  - **Method 4**：
    - Upgrade to`1.5.1` version and open Real-time Notes
    - Close software and remove it
- Remove the Software
  - Open `Start Menu`
  - Find or search `Snap Hutao`
  - Right click on it, and select `Unstall`
- Remove data folder (If you want remove it completely)
  - Open and delete `%userprofile%/Documents/Hutao`
