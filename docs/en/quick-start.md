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

1. LTSC and LTSB versions does not include Microsoft Store, so they are not supported
2. Windows 10 Build 19041 supports installation, but some feature may have unexpected errors due to Windows kernel issues,
   so Snap Hutao cannot solve them
3. Issues happens in Windows Insider preview versions will not be solved

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Download Snap Hutao

### New Installation

**Whatever installation method you used, package source and registration are always handled by Microsoft Store.**

::: tabs
@tab Microsoft Store
<ms-store-badge
productid="9PH4NXJ2JN52"
theme="auto">
</ms-store-badge>

Microsoft Store Link：[Snap Hutao](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)

On Windows 10 and Windows 11 you can click the button above to download Snap Hutao.

@tab winget

- Launch PowerShell
- Execute command `winget install "Snap Hutao"`
- Follow the prompt to allow the installation
  - If failed install, receive error of missing dependency or stuck at framework installation stage, please refer to
    [Install Dependency Manually](advanced/dependency.md) document

@tab GitHub

- Visit the [latest release page](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/) of Snap Hutao
- Download MSIX Package
- Run the MSIX package directly to perform installation
  - If failed install, receive error of missing dependency or stuck at framework installation stage, please refer to
    [Install Dependency Manually](advanced/dependency.md) document

:::

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Upgrade to MS Store Version from Side-load Versions

If you installed a side-load version of Snap Hutao (version 1.4.10 and older), you need to uninstall it before the new installation

- Uninstall the side-load version with our [uninstallation instruction document](advanced/uninstall.html)
  - Your data will not lose as long as you don't delete data directory manually
- Follow the method above to install the Microsoft Store version application

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Update Snap Hutao

**You can use any of the update methods, whatever method you used when you installed Snap Hutao. They don't need to be consistent, as Microsoft Store is the only source of packages.**
::: tabs  
@tab Microsoft

- Launch Microsoft Store
- Click on Library in the bottom left to see all apps you have installed
- Click `Get updates` on the top right and your application will be updated

If you still don't receive the update, you may enter the Snap Hutao [detail page](<(https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)>) in Microsoft Store, to allow the store to fetch the latest metadata.

@tab winget

- Launch PowerShell
- Execute command `winget upgrade "Snap Hutao"`
- Follow the prompt to allow the upgrade

@tab GitHub

- Visit the [latest release page](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/) of Snap Hutao
- Download MSIX Package
- Run the MSIX package directly to perform upgrade

:::

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
