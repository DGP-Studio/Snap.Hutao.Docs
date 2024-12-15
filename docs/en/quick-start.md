---
pageClass: link-box
externalLinkIcon: false
category:
  - Feature
  - Tutorial
comment: false
icon: iconfont icon-launch
order: 5
description: Follow the quick start instruction on this page, you can set up your Snap Hutao quickly.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Quick Start

Follow the quick start instruction on this page, you can set up your Snap Hutao quickly.

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> Minimum System Requirements

| Requirement             | Attribute                                                        |
| ----------------------- | ---------------------------------------------------------------- |
| **Minimum Required OS** | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **Recommended OS**      | Windows 11 Build 22621 (22H2) or later versions                  |
| Required Components     | Windows Update, App Installer                                    |
| Optional Components     | WebView2 Runtime                                                 |

**Unsupported OS Versions**：

1. LTSC and LTSB versions are using legacy version of MSIX Core, so they are not supported
2. Windows 10 Build 19041 supports installation, but some feature may have unexpected errors due to Windows kernel issues,
   so Snap Hutao cannot solve them
3. Issues happens in Windows Insider preview versions will not be solved

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Download Snap Hutao

### New Installation

You can use **MSIX package** or **Snap.Hutao.Deployment installer** to install Snap Hutao, you can find pakcage from the following source.

::: tabs

@tab Use Snap.Hutao.Deployment Installer

Snap.Hutao.Deployment is a quick installer, **it installs required supporting framework**. It's suitable for all users and those who failed installation with MSIX package.

<div class="vp-card-container">

<VPCard
title="Hutao Auto Download"
desc="Automatically determine the best source for downloading"
logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment is also a open-source project on GitHub"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

@tab Use MSIX Package

<div class="vp-card-container">

<VPCard
    title="Hutao Auto Download"
    desc="Automatically determine the best source for downloading"
    logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
    link="https://api.snapgenshin.com/patch/hutao/download"
    background="rgba(253, 233, 233, 0.45)"
  />
<VPCard
    title="GitHub"
    desc="We always release package first in Snap Hutao repository"
    logo="/images/202312/github-mark.svg"
    link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
    background="rgba(155, 233, 168, 0.15)"
  />

</div>

:::

---

If you are interested in making the Snap Hutao project better through your own efforts, consider [join us](development/join.md)!

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Upgrade to the Latest Version from MS Store Versions

<details>
<summary>Click to Expand</summary>

If you installed a Microsoft Store version of Snap Hutao (version 1.4.11 to 1.8.4), you need to uninstall it before the new installation

> For details of this change, please refer to [Explanation of Breaking Changes in Version 1.9.0](blog/version-1-9-0-breaking-changes.md)

- Uninstall the old version with our [uninstallation instruction document](advanced/uninstall.md)
  - Your data will not lose as long as you don't delete data directory manually
- Follow the method above to install the new version application
</details>

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Update Snap Hutao

If no special instruction is given, You can upgrade the program by running [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) or installing the latest MSIX installation package.

Starting from 1.9.0 version, Snap Hutao has embedded update module to notify the updates. You may try [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) if you failed the update.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Install Optional Components

With optional components, Snap Hutao can implement some functions more conveniently through the system-level environment.
They are not mandatory components, but they can bring a better experience.

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 Runtime

WebView2 Runtime is provided by Microsoft, which enables a built-in browser at a low resource cost inside the program.
As an optional component, WebView2 is not a mandatory component, but it will make some Snap Hutao's features easier.

At the bottom of the [Microsoft official page](https://developer.microsoft.com/en-us/microsoft-edge/webview2/),
you can find `Evergreen Standalone Installer`, choose `x64` to download and install as prompted

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Add First MiHoYo BBS Account

After entering Snap Hutao, click `Account Panel` in the left-bottom corner between `Settings` and `Document`. In the pop-up panel, click the login button right corresponding to your account.

If you are using a China server account, you need login within `MiYouShe` category; If you are using an oversea account (aka. HoYoLAB/HoYoverse account), you need login within `HoYoLAB` category.

Whatever account type you have, you have multiple ways to login. <font color="red">You must use MiHoYo/HoYoverse official app to login and set up your community username in MiHoYo BBS to initialize your account, regardless way you sign in Snap Hutao,otherwise Snap Hutao cannot get your account information.</font>

::: tabs

@tab MiYouShe SMS OTP Login

**<font color="red">Make sure your MiYouShe account has bound with Genshin Impact CN server account</font>**

1. Click `MiYouShe SMS OTP Login` in the account panel, enter your phone number and click `Send`
2. Enter the OTP code you received, and click `Confirm` to login
3. **Wait for a moment**, Snap Hutao will automatically add your account

@tab HoYoLAB Password Login

**<font color="red">Make sure your HoYoLAB account has bound with Genshin Impact global server account</font>** HoYoLAB blocks requests from mainland China, Snap Hutao cannot bypass this rule.

1. Click `HoYoLAB Password Login` in the account panel, enter your HoYoLAB account and password, and click `Login`
2. **Wait for a moment**, Snap Hutao will automatically add your account

@tab HoYoLAB Social Login

If you have bound your HoYoLAB account with social media account, you can use this login method to login at Snap Hutao.

This login method requires [Microsoft Edge WebView2 Runtime](https://go.microsoft.com/fwlink/?linkid=2124701) to be installed, make sure you have installed it. HoYoLAB blocks requests from mainland China, Snap Hutao cannot bypass this rule.

---

1. Click `HoYoLAB Social Login` in the account panel, Snap Hutao will use WebView2 window to open the login page
2. Login with your social media account
3. **Wait for a moment**, Snap Hutao will automatically add your account

@tab Cookie Login

If you wish to sign in to your account with MiHoYo Passport cookie that extracted by youself, you can click `Input Manually`
button in the account panel, and input your cookie with `SToken` field. If the entered cookie is valid, your account will
be displayed in the account panel once your click the `Confirm` button.

:::

---

_**Now, you have finished your initial set up of Snap Hutao. You are now free to explore this application, you can also
find all documents in this website.**_

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> Installation FAQ

### Mojibake in Snap Hutao Icons

- If you are using Windows 10 and see some button are not display properly
  - You can download `Segoe Fluent Icons` font
  - You need to install it for all users
- You can find this font from [Microsoft](https://aka.ms/SegoeFluentIcons)

### Can I Add Missing System Components to Install Snap Hutao

Probably not if you are asking this, because you are not familiar with your system.

You don't know how many components are missing. When you install the one that tell you in the error message, you will see next missing component in the next error message, endless.

::: warning
The following FAQs only apply to MSIX installations, please try to use [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) first to resolve your installation issues
:::

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

1. Right click on Windows Start button, and select `PowerShell (Admin)`
2. In the PowerShell windows, copy and paste the following command and run it (Right-click is paste feature in PowerShell)
   ```PowerShell :no-line-numbers
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```
3. If PowerShell does not outcome any error message, then it means installation is successful. Please find `Snap Hutao` in your Start Menu and enjoy it.
