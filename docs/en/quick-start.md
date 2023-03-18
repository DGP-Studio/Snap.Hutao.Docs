---
pageClass: link-box
externalLinkIcon: false
category:
  - Feature
  - Tutorial
---

# Quick Start

::: tip
If you download and use **Snap Hutao**，you are agree to our[ terms of service](/statements/tos.md)
:::    
@include(star-request.md)

## Video Tutorial
For most people, follow the instruction on this page is more effiency.

However, if you are not familiar with the operation mentioned below, you can come back the follow the video tutorial. ::: details Snap Hutao Tutorial - Microsoft Store Installation
<BiliBili bvid="BV13A411k7B4" />
:::

## Minimum System Requirements
| Requirement             | Attribute                              |
| ----------------------- | -------------------------------------- |
| **Minimum Required OS** | Windows 10 Build 19045 (22H2) [^first] |
| **Recommended OS**      | Windows 11 Build 22621 (22H2)          |
| Optional Components     | WebView2 Runtime                       |


## Download Snap Hutao
**Whatever installation method you used, package source and registration are always handled by Microsoft Store.**

::: tabs
@tab Microsoft Store
<ms-store-badge
productid="9PH4NXJ2JN52"
theme="auto">
</ms-store-badge>

Microsoft Store Link：[Snap Hutao](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)

On Windows 10 and Windows 11 you can click the button above to download Snap Hutao


@tab winget
- Launch PowerShell
- Execute command `winget install "Snap Hutao"`
- Follow the prompt to allow the installation

@tab GitHub
- Visit the [latest release page](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/) of Snap Hutao
- Download MSIX Package
- Run the MSIX package directly to perform installation

:::
### Upgrade to MS Store Version from Sideload Versions
- Uninstall the sideload version with our [uninstallation instruction document](/advanced/uninstall.html)
  - You data will not lose as long as you don't delete data directory manually
- Follow the method above to install the Microsoft Store version application

## Update Snap Hutao
**You can use any of the update methods, whatever method you used when you installed Snap Hutao. They don't need to be consistent, as Microsoft Store is the only source of packages.** ::: tabs  
@tab Microsoft
- Launch Microsoft Store
- Click on Library in the bottom left to see all apps you have installed
- Click `Get updates` on the top right and your application will be updated

If you still don't receive the update, you may enter the Snap Hutao [detail page]((https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)) in Microsoft Store, to allow the store to fetch the latest metadata.

@tab winget
- Launch PowerShell
- Execute command `winget upgrade "Snap Hutao"`
- Follow the prompt to allow the upgrade

@tab GitHub
- Visit the [latest release page](https://github.com/DGP-Studio/Snap.Hutao/releases/latest/) of Snap Hutao
- Download MSIX Package
- Run the MSIX package directly to perform upgrade

:::

## Installing WebView2 Runtime

WebView2 Runtime is provided by Microsoft, which enables a built-in browser at a low resource cost inside the program.As an optional component, WebView2 is not a mandatory component, but it will make some Snap Hutao's features easier.

At the bottom of the[Microsoft official page](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/), you can find`Evergreen Standalone Installer`, choose`x64`download and install as prompted

[^first]: As LTSC and LTSB Windows versions do not contain Microsoft Store and some other necessary dependencies, they are not supported.Windows 10 Build 19041 is allowed to install Snap Hutao, but some features have known issues caused by Windows Os Kernal, those issues won't be fixed.