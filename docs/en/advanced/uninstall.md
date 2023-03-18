---
category:
  - FAQ
icon: delete
order: 8
---

# Uninstallation

- Clear Scheduled Task
    - Before version 1.4.15, if you don't execute this step, the scheduled task used to get DailyNote data will not be deleted and will cause [this issue](FAQ.md)
    - **Method 1** <Badge text="仅限早于 1.4.15 的版本" type="tip" />：
        - Open Snap Hutao, go to **Settings** tab
        - Find **Delete all scheduled task** option and click on ** execute** button <Badge text="需要管理员模式" type="tip" />
    - **Method 2**
        - Execute scripts below
           ``` PowerShell
           schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
           ```
    - **Method 3**
        - Open Windows Scheduled Task Manager
        - Find `SnapHutaoDailyNoteRefreshTask` and delete it
    - **Method 4**:
        - Update to version later than `1.5.1` and open DailyNote feature
        - Uninstall Snap Hutao directly
- Uninstall Snap Hutao
    - Open your start menu
    - Find or search ` Snap Hutao`
    - Right click on it and select `Uninstall` option
- Clear data folder (if required to uninstall completely)
    - Find and delete folder `%userprofile%/Documents/Hutao`