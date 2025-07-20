---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: This page contains some common questions and solutions related to user network and program lifecycle issues.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/faq.html&has_description=False
---

# Other Common Issues

## How to Create a Desktop Shortcut for Snap Hutao (Non-Administrator Mode)

::: tip Community Power
Thanks to [CzHUV for providing the solution](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::

1. Use `Win+R` to open the Run window, and enter `shell:AppsFolder` in the input box.
   ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
2. Windows will open the application directory. Find Snap Hutao.
3. Right-click the Snap Hutao icon and select "Create shortcut".
4. Follow the system prompts to create a desktop shortcut.

## How to Create a Desktop Shortcut for Snap Hutao (Administrator Mode)

- Go to the program settings page of Snap Hutao and click the "Create shortcut" button to generate a shortcut with administrator privileges on the desktop.

## How to Make Snap Hutao Start Automatically on Boot

### Method 1: Using a Batch File

1. Create a batch file. Refer to the command provided in [this Issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184) to make Snap Hutao run directly with administrator privileges.
2. Configure the batch file to start automatically using the following methods:

- Create a scheduled task to execute the batch file when the system starts.
- Add the batch file to the system's startup items.

### Method 2: Using a Tool

- Use a program like `SkipUAC` to make Snap Hutao start silently with administrator privileges.

::: warning Notes
The above methods may fail due to system configurations or other issues. Snap Hutao does not directly support automatic startup on boot; attempting these methods is at your own risk.
:::

## Unable to Start Snap Hutao in Administrator Mode

> **Scope of the issue**: Only applies to Windows 10 versions lower than 22H2.

- When the user's system version is lower than `Windows Build 19045` (i.e., Windows 10 22H2 version), it may not be possible to start Snap Hutao in administrator mode.
- **Solution**: It is recommended to upgrade the system to the latest version of Windows 10 to avoid such compatibility issues.

## How to Use Snap Hutao with a Network Proxy

> Snap Hutao provides a good cloud network structure to ensure users around the world can enjoy high-quality services.

1. Configure system or software proxy services.
2. It is recommended to enable `Loopback Network`. For a detailed tutorial, see [here](loopback.md).

# Notification Icon Creation Failed

Open PowerShell and run the following command to fix the issue

```powershell
irm hut.ao/install.ps1 | iex
```
