---
category:
  - FAQ
  - Third-Party Tools
icon: iconfont icon-read
order: 7
comment: false
description: There are some third-party tools that can help you obtain the cookie from the miHoYo community with the Stoken field value and use it for Snap Hutao.
---

# Obtaining Stoken-containing Cookies Using Third-Party Tools

::: warning

- The software, open-source projects, and resources mentioned in the following steps are sourced from the internet and are not affiliated with DGP-Studio.
- This documentation provides solutions for educational purposes only. Specific operations and their consequences are not associated with this project.

:::

## Android

Android users can utilize the open-source project GetToken to acquire cookies containing the Stoken field.

::: tip GetToken Open-Source Project

- GitHub: [HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)

:::

- The GetToken project's release includes two APK files, both ultimately achieving the same outcome. Choose the version suitable for your device:
  - `app-release.apk` is an LSPosed plugin that enables users to use GetToken functionality within the official miHoYo community app.
  - APK files ending with `lspatched` are modified versions of the miHoYo community app with GetToken functionality included.
    - You'll need to uninstall the official miHoYo app to install this version.
- After enabling the plugin or installing the modified miHoYo app, open the miHoYo app, click "Me" at the bottom, and log in to your account.
- Click the key-shaped icon in the top right corner.
- Check the `Stoken` option.
- Click `Copy Login Information`.
- Send the copied Stoken to the computer where the Hutao Toolbox is installed.
- In the Hutao Toolbox's account login section, click `Manual Input`.
- Enter the previously obtained cookie. You should now complete the login process.

## iOS

iOS Users can download the packet capture software Stream from the App Store to obtain cookies containing the Stoken field.

- Download [Stream](https://apps.apple.com/cn/app/stream/id1312141691) from the App Store.
- Perform packet capture analysis on the domain `api-takumi.mihoyo.com`.
- Locate and copy the data containing `Stoken`.
  - It will be in the form of `stuid=****;stoken=v2****;mid=****;`.
- Send the copied Stoken to the computer where the Hutao Toolbox is installed.
- In the Hutao Toolbox's account login section, click `Manual Input`.
- Enter the previously obtained cookie. You should now complete the login process.
