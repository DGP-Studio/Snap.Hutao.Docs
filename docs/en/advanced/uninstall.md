---
category:
  - FAQ
icon: iconfont icon-delete
order: 9
comment: false
description: Uninstalling Snap Hutao is a simple and fast process. You can follow the instructions on this page to uninstall Snap Hutao.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/uninstall.html&has_description=False
---

# Uninstall Snap Hutao

- Remove the Snap Hutao Application
  - Open `Start Menu`
  - Find or search `Snap Hutao`
  - Right click on it, and select `Unstall`
- Remove data folder (If you want remove it completely)
  - Open `explorer {F42EE2D3-909F-4907-8871-4C22FC0BF756}`
  - Delete `Hutao` folder

## FAQ

### Why system offten popup a message "A new app is needed to open this link"

If you encounter this message after uninstalling Snap Hutao, it indicates that the real-time notes scheduled task was not cleared as required by the documentation before uninstallation.  
Please follow the documentation to clear the scheduled task in the settings before uninstalling Hutao Toolbox.  

- If you cannot find Hutao's scheduled task in the system task scheduler, but the issue persists, please refer to [this document](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) for a solution.

### How to Fully Backup/Recover Client Data

::: warning Data Security Warning
`Userdata.db` contains all client data, including MiHoYO BBS Cookie, please save the data file properly and do NOT share it
with anyone.
:::

Copy `Userdata.db` from Snap Hutao data folder (`%userprofile%/Documents/Hutao` by default) to your backup location, this
file contains entire data of the client.
