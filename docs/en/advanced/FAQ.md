---
headerDepth: 2
icon: iconfont icon-ask
category:
  - FAQ
order: 1
---

# FAQ

> Please use **search bar on the top right** or **browser built-in search `(ctrl+F)`** to search keyword such as error code to improve your searching efficiency

If the following answers can not solve your issue, feel free to [report bug to us](../statements/bug-report.md)!

## Installation FAQ

### Stuck at `Installing Required Framework` when Using MSIX Package to Install

- When user's OS missing required dependency framework, Windows will download and install it automatically.
  However, if the user disabled Windows Update or have a bad network, the system is unable to process this installation.
  - Make sure Windows Update is enabled
  - You can also download and install the [dependency](dependency.md) manually

### Mojibake in Snap Hutao Icons

- If you are using Windows 10 and see some button are not display properly
  - You can download `Segoe Fluent Icons` font
  - You need to install it for all users
- You can find this font from [Microsoft](https://aka.ms/SegoeFluentIcons)

### Snap Hutao Throws Failed to add Scheduled Task Error

Open Windows Task Scheduler, find and delete `SnapHutaoDailyNoteRefreshTask` task

### My Computer Cannot Open MSIX Format Installer

Your computer is missing the App Installer, an important component of the Windows system.

If Microsoft Store is installed on your system, you can restore this component by reinstalling it from the [App Installer Store Page](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US).

If you don’t have Windows Store, please use the latest full version of Microsoft’s official consumer version [Windows 10](https://www.microsoft.com/zh-cn/software-download/windows10) or [Windows 11](https://www.microsoft.com/zh-cn/software-download/windows11) mirror. Using the Windows 10 Upgrade Assistant and Windows 11 Installation Assistant provided by Microsoft can help you simply upgrade to the latest full version of Windows while retaining your data.

### Got `This app package’s publisher certificate could not be verified` Error when Install with MSIX Package

This issue is commonly seen in Home Edition of Windows. If you are not using a Home Edition, your Windows Update module may be disabled or cracked, this cause worldwide CA certificates cannot be updated from Microsoft servers.

Snap Hutao's code signing certificate comes from [GlobalSign Code Signing Root R45](https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates), you can manually download [this CA certificate](https://secure.globalsign.com/cacert/codesigningrootr45.crt) from GlobalSign official website.

### Got `Policy check failed` Error when Install with MSIX Package

If you are using Windows Home Edition, please try to enable developer mode in your system settings and try the installation again.

### Got Error Prompt or Error Code when Install with MSIX Package

| Error                                | Reason                                                   |
| ------------------------------------ | -------------------------------------------------------- |
| `0x80040154` Error Code              | Broken Windows account permission                        |
| `The app did not start` Error Prompt | Cracked App Installer or broken App Installer permission |
| `0x80073CF0` Error Code              | Broken folder permission                                 |
| `0x80070005` Error Code              | Broken Windows account permission                        |
| `0x80070570` Error Code              | Broken Windows account permission                        |
| `0x8007065E` Error Code              | Broken Windows account permission                        |

If you got any of error showing above, please use the following steps to solve the issue:

1. Manually download and install [Snap Hutao Dependency](dependency.md)
2. Right click on Windows Start button, and select `PowerShell (Admin)`
3. In the PowerShell windows, copy and paste the following command and run it (Right-click is paste feature in PowerShell)
   ```PowerShell :no-line-numbers
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```
4. If PowerShell does not outcome any error message, then it means installation is successful. Please find `Snap Hutao` in your Start Menu and enjoy it.

### Can I Add Missing System Components to Install Snap Hutao

Probably not if you are asking this, because you are not familiar with your system.

You don't know how many components are missing. When you install the one that tell you in the error message, you will see next missing component in the next error message, endless.

### Got "Cannot open this application" Error when Open Snap Hutao

![unable to run](https://img.alicdn.com/imgextra/i3/388777087/O1CN01WqkqOl22DtpuPYZB6_!!388777087.png)

If you got this error when you open Snap Hutao, please use PowerShell (Admin) to execute the following command.

```PowerShell :no-line-numbers
net stop appxsvc; Invoke-WebRequest -Uri https://aka.ms/windowsappsdk/1.4/latest/windowsappruntimeinstall-x64.exe -OutFile $env:temp/windowsappruntimeinstall-x64.exe; Invoke-Expression "$env:temp/windowsappruntimeinstall-x64.exe --repair"
```

### Starting FAQ

### How to Create Desktop Shortcut (with No Admin Privilege)

::: tip Community Power

Thanks to [CzHUV](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12) for the solution.

:::

- Use `Win+R` to start run, in the window input `shell:AppsFolder` ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png)
- In the new pop-up window, find Snap Hutao
- Right lick on it, and click `Create shortcut`
- Confirm the operation and you will get the desktop shortcut

### How to Create Desktop Shortcut (With Admin Privilege)

Click `Create Desktop Shortcut` in the settings page.

You can move this shortcut to any place you need.

### How to run Snap Hutao when Windows starts

**This is a workaround solution**

- Create a bat file, content refers to [this Issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184), it allows bat to run Snap Hutao with Administrator privilege
- Create a Scheduled Task, run the bat when Windows startup, or drag it to Windows start folder

### Unable to Run Snap Hutao as Administrator

> This issue only occurs in Windows 10 older than 22H2 version

- When user's OS version older than `Windows Build 19045` (aka Windows 10 22H2), Snap Hutao is unable to start when
  running as Administrator
  - This issue comes from Windows kernel, and it's hard to locate, so we suggest you to update your OS to the latest version

## Feature FAQ

### Use Snap Hutao to quick start the game

- Config the game launcher in the settings
- Pin Snap Hutao on taskbar
- Right click on Snap Hutao and you will see the quick launcher

  ![quick-start](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png)

- Select `Lauch Game`, you will be asked which account to start the game

### MiHoYo BBS Account often Lose Login Status

Snap Hutao use saved MiHoYo BBS cookies to maintain login status. If you **log out** your account in your browser or
other device, cookie will become invalid, and Snap Hutao will also be forced to log out, account will be automatically
removed.

This problem may also be caused by network error, you should check this first; If it's not caused by network issue,
you can use `Refresh Cookie` in the account panel; You can also remove your account manually and add it back again.

Since October 2022, MiYouShe (Chinese BBS) rapidly increased bot detection and may set users' account as under-risk status,
this may cause Snap Hutao failed to check validation of the cookie

### Game Account Lose Login Status in the Launcher

- There are two factors associated with game account login status: network and device ID
- This issue usually caused by:
  - Change of public IP address
  - Change of network adapter or network adapter MAC address
  - Failed saving operation, no real login status been saved (Snap Hutao cannot detect if the status is real valid)
    - Make sure to enter the game after sign in
    - Make sure the game process is gone after closing the game
    - Detect the account again to save your login status

### How to Recover `config.ini` Configuration File

In some particular conditions (such as wrong game folder permission), `config.ini` may lose after server conversion.
This will cause user not able to get into advanced launcher page and launch the game.

After identify the server version on your device, you can manually create and fill the configuration file with the right
content. The following are common configurations.

::: tabs#game_config_samples

@tab CN Server Official

```
[General]
channel=1
cps=mihoyo
game_version=4.1.0
sub_channel=1
plugin_7_version=1.0.0
```

@tab Global Server Official

```
[General]
channel=1
cps=mihoyo
game_version=4.1.0
sub_channel=0
plugin_7_version=1.0.0
```

:::

### Why does setting up automatic refresh of real-time notes prompt "Failed to modify Scheduled Task"

The automatic refresh of real-time notes relies on task scheduling. In order to avoid possible permission issues, Snap Hutao will force scheduled tasks to be set in non-administrator mode.

If you turned on automatic refresh in the old version, you can solve the problem by manually deleting the old task schedule in Task Scheduler.

If you did not turn on automatic refresh in the old version, then this problem is caused by the Windows user account you are currently using having insufficient permissions. If your current user account is an administrator account, you can only solve this problem by reinstalling the system.

## Network FAQ

### Use Snap Hutao with Network Proxy

> Snap Hutao has a well-designed cloud network structure, you should be able to get good network service wherever you are located

Loopback network are disabled for all Windows Appx container application (including Snap Hutao), so some modern network proxy software will cause container applications to lose Internet access, and lead to application errors.

If you need network proxy to use Snap Hutao, you have two ways to fix it:

1. Enable `TUN Mode` in your network proxy software
2. Use [Windows 8 AppContainer Loopback Utility](https://www.telerik.com/fiddler/add-ons) to unlock Windows App Container Loopback limit
   - If network security is not a concern for you, you can use the following PowerShell command to unlock all container loopback limit in your computer
   ```PowerShell :no-line-numbers
   FOR /F "tokens=11 delims=\" %p IN ('REG QUERY "HKCU\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mappings"') DO CheckNetIsolation.exe LoopbackExempt -a -p=%p
   ```

## Uninstallation FAQ

### How to Fully Backup/Recover Client Data

::: warning Data Security Warning
`Userdata.db` contains all client data, including MiHoYO BBS Cookie, please save the data file properly and do NOT share it
with anyone.
:::

Copy `Userdata.db` from Snap Hutao data folder (`%userprofile%/Documents/Hutao` by default) to your backup location, this
file contains entire data of the client.
