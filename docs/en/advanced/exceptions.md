---
headerDepth: 2
icon: iconfont icon-warn
category: [FAQ]
order: 2
comment: false
description: Snap Hutao utilizes specific error codes to indicate particular errors. If you encounter a program error during usage and have an error code, you can try searching for it on this page.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False
---

# Common Program Exceptions

This document covers solutions of **foreseeable client error**

## Return Code: 2002

- This error comes directly from MiHoYo BBS: `Ruturn Code: 2002`
- Issue source:
  - MiHoYo BBS account is not initialed yet
- Solution：
  - MiYouShe account: Use official MiYouShe mobile app, login to your account, set the community username to initial account
  - HoYoLAB account: Use official HoYoLAB mobile app or the web application, login to your account, set the community username to initial account

## Return Code: -10001

- This error comes directly from MiHoYo BBS, prompts include
  - `Return Code: -10001`
  - `Return Code: -100`
- Issue source
  1. Cookie expired
  2. Network error
  3. System time is not accurate
- Solution
  1. In the account panel, execute `Refresh Cookies`
  2. Remove your account and add it again
  3. Sync your system time

## Return Code: 1034 Verification Failed

- If Snap Hutao returns `1034` status code and hints verification failed (usually during the operation of Realtime Notes),
  it means the operation is blocked by MiHoYo BBS anti-bot system
- Solution:
  - Enter `Realtime Notes`
  - Click on `Verify Current User and Role` button
  - Follow the instruction in MiHoYo BBS to verify
  - After finishing the verification process, click `Complete` to close the verification window
  - Now, the account should back to normal; If not, process the step above again

::: tip

If the risk prompt is too frequent, or the verification cannot be triggered at all, it means that the risk of your
account is too high, please change the password, so that the simultaneous login status of multiple devices will be reset

:::

::: warning

- You hardly cannot pass imperceptible verification when your account is **login at other remote Genshin tools** or
  **login at multiple devices**. This is a security designing of MiHoYo BBS, and cannot bypass
- If you are using **multiple MiHoYo BBS account in your device**, **frequent usage with MiHoYo BBS API** will
  result in your IP address being banned for a period of time (usually no more than 24 hours). This is a security
  designing of MiHoYo BBS, and cannot bypass

:::

## HttpRequestException Metadata Download Failed

### ConnectionError

Failed to connect to Snap Hutao server, please check your connection

If you are using a network proxy, please check if you have [unlocked Windows container Loopback limit](FAQ.md)

### 403 (Forbidden) / 404 (Not Found)

Solution: Update your Snap Hutao to [the latest version](../quick-start.md)

### 502 (Bad Gateway)

Failed to connect to Snap Hutao server, please check your connection

## `653366069` Request Exception

- Failed to connect to MiYouShe or HoYoLAB server
  - if the error occurs not frequently, you may ignore it
  - if the error constantly occurs, please check your local network

If you are using a network proxy, please check if you have [unlocked Windows container Loopback limit](FAQ.md)

## Error Downloading PIC Resources

The failure to download a small portion of static image resources will not significantly degrade the experience of Snap Hutao. The client will automatically re-download any missing image resources as needed.

### `Received an unexpected EOF or 0 bytes from the transport stream.` / Response stream does not contain valid content type

This issue may be triggered by many factors such as hitting download limits or network fluctuations. You can close the client and wait for a moment, then, try downloading again, or attempt to switch your network connection.

## Error Finding Required Modules

When user launching game with unlock frame-rate feature on, the game may be failed to be launched with the following error shows up:

1. Error finding required modules: could not read any module, the protection driver may have been loaded
2. Error finding required modules: timeout

This issue only occurs when Genshin Impact's anti-cheat module starts earlier than frame-rate-unlocker module.
When these errors happen, Snap Hutao will exit game process, and you can re-launch the game.

## Application installation failed. Error message: An internal error occurred 0x80073D05

The primary reason for encountering the error code `0x80073D05` during installation is that some local files were not deleted during a previous uninstallation.

- You need to open `%appdata%/../Local/Packages`.
- Locate and delete the folder named `60568DGPStudio.SnapHutao_wbnnev551gwxy` (if you are facing privilege issues, consider using `NSudo_LG` to resolve the issue. For detailed usage, please search on Google).

## Error 0x8007007E or "The specified file/module cannot be found"

This issue is caused by missing MSVC runtime libraries. Please install the latest version of the **MSVC Runtime Library**.

Download links: [MSVC Runtime Library (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe) | [MSVC Runtime Library (x86)](https://aka.ms/vs/17/release/vc_redist.x86.exe)
