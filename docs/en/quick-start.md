---
pageClass: link-box
externalLinkIcon: false
category:
  - Feature
  - Tutorial
comment: false
icon: iconfont icon-launch
order: 5
---

# Quick Start

Follow this document's instruction, you can set up your Snap Hutao quickly.

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

You can use MSIX package to install Snap Hutao, you can find pakcage from the following source.

<div class="vp-card-container">
  <VPCard
    title="Join the Community"
    desc="We will manually upload package in the community after each update"
    logo="/images/202312/community.svg"
    link="community.html"
    background="rgba(242, 255, 28, 0.25)"
  />
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
  <VPCard
    title="Jihu GitLab"
    desc="Official China mirror of Snap Hutao repository"
    logo="/images/202312/jihulab.svg"
    link="https://jihulab.com/DGP-Studio/Snap.Hutao/-/releases"
    background="rgba(244, 125, 63, 0.15)"
  />
  <VPCard
    title="Snap.Hutao.Deployment"
    desc="Installer designed by DGP-Studio, will install missing required framework. Good for users failed MSIX installation"
    logo="/images/202312/DGP-v3.webp"
    link="https://api.snapgenshin.com/patch/hutao-deployment/download"
    background="rgba(88, 164, 255, 0.15)"
  />
</div>

- If you face any of the following errro during the installation, please refer to [Install Dependency Manually](advanced/dependency.md) to solve it，this happens when your Windows cannot download necessary framework
  1. `App Installer failed to iunstall package dependencies. Ask the developer for package`
  2. Stuck at `Installing framework`

---

If you are interested in making the Snap Hutao project better through your own efforts, consider [join us](development/join.md)!

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Upgrade to the Latest Version from MS Store Versions

If you installed a Microsoft Store version of Snap Hutao (version 1.4.11 to 1.8.4), you need to uninstall it before the new installation

> For details of this change, please refer to [Explanation of Breaking Changes in Version 1.9.0](blog/version-1-9-0-breaking-changes.md)

- Uninstall the old version with our [uninstallation instruction document](advanced/uninstall.html)
  - Your data will not lose as long as you don't delete data directory manually
- Follow the method above to install the new version application

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Update Snap Hutao

If no special instruction is given, you can download and install latest MSIX package to update your Snap Hutao.

Starting from 1.9.0 version, Snap Hutao has embedded update module to notify the updates.

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> Install Optional Components

With optional components, Snap Hutao can implement some functions more conveniently through the system-level environment.
They are not mandatory components, but they can bring a better experience.

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 Runtime

WebView2 Runtime is provided by Microsoft, which enables a built-in browser at a low resource cost inside the program.
As an optional component, WebView2 is not a mandatory component, but it will make some Snap Hutao's features easier.

At the bottom of the [Microsoft official page](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/),
you can find`Evergreen Standalone Installer`, choose`x64`download and install as prompted

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> Add First MiHoYo BBS Account

After entering Snap Hutao, click `Account Panel` in the left-bottom corner between `Settings` and `Document`. In the
pop-up panel, click the login button right corresponding to your account.

If you are using a China server account, you need login within `MiYouShe` category; If you are using an oversea account
(aka. HoYoLAB/HoYoverse account), you need login within `HoYoLAB` category.

Whatever account type you have, you have both `Web Login` and `Cookie Login` method.

::: tabs

@tab Web Login

**Web Login requires Microsoft WebView2 Runtime component**

1. Click `Web Login` button in the account panel, Snap Hutao will turn on MiHoYo BBS login page with WebView2
2. Login to your account in the web page. After successfully login to your account, you will be able to see your account information
3. Click `I'm Logged in` button on the right-top, Snap Hutao will add this account to the client, and will display it in the account panel

@tab Cookie Login

If you wish to sign in to your account with MiHoYo Passport cookie that extracted by youself, you can click `Input Manually`
button in the account panel, and input your cookie with `SToken` field. If the entered cookie is valid, your account will
be displayed in the account panel once your click the `Confirm` button.

:::

---

_**Now, you have finished your initial set up of Snap Hutao. You are now free to explore this application, you can also
find all documents in this website.**_
