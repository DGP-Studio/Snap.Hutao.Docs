---
category: [FAQ]
icon: iconfont icon-delete
tag: [Uninstall]
order: 9
comment: false
description: Uninstalling Snap Hutao is a simple and quick process. You can follow the tutorial on this page to uninstall Snap Hutao to the extent that suits you best.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/uninstall.html&has_description=False
---

# Uninstall Snap Hutao

Uninstalling Snap Hutao is a straightforward process. If you want to completely remove the program and its associated data, please follow these steps:

## Uninstalling the Snap Hutao Application

1. Open the **Start Menu**.
2. Search for `Snap Hutao`.
3. Right-click on Snap Hutao and select **"Uninstall"**.

## Clearing the Data Folder (for Complete Uninstallation)

1. Open File Explorer.
2. Navigate to the following path: `%userprofile%/Documents/Hutao`.
3. Delete the `Hutao` folder.

## Frequently Asked Questions

### Why does the "You'll need a new app to open this" dialog box pop up?

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

If you see a prompt like "You'll need a new app to open this hutao link" after uninstalling Snap Hutao as shown above, it means that the real-time notes scheduled task was not cleared before uninstallation. This issue only occurs in older versions of Snap Hutao.

Solution:

1. Reinstall Snap Hutao.
2. Clear the real-time notes scheduled task in the settings.
3. Uninstall Snap Hutao again.

If you cannot find the relevant task in the system's scheduled tasks but the problem persists, please refer to [this document](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) for further solutions.

### How to Fully Backup/Restore Client Data?

::: warning Data Security Warning
The `Userdata.db` file contains all of your client data, including your sensitive MiHoYo BBS Cookie. Please keep this file safe and do not share it with anyone.
:::

#### Backing Up Data

1. Go to the Snap Hutao data directory (default path is `%userprofile%/Documents/Hutao`).
2. Copy the `Userdata.db` file from the folder to your chosen backup location.

#### Restoring Data

1. Copy the backed-up `Userdata.db` file back into the Snap Hutao data directory.
2. Launch Snap Hutao to restore your data.

By following the above steps, you can safely backup or restore all of your Snap Hutao data.
