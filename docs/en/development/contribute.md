---
category: [open source, development]
tag: ["development", "GitHub"]
icon: iconfont icon-code
order: 2
---

# Contribute Your Code

Snap Hutao is using C# and .NET Framework to develop both client and server. If you are willing to contribute your code
to the project, please read the following guidelines.

You can find all [unsolved opened issues](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E4%BF%AE%E5%A4%8D+) on GitHub

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Setup Snap.Hutao Project

1. Download and install [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/)
2. Open Visual Studio Installer to complete Visual Studio installation
   - You need to install `.NET desktop development`, `Desktop development with C++` and `Universal Windows Platform development` components
3. Install `Single-project MSIX Packaging Tools for VS 2022` provided by Microsoft in Visual Studio marketplace
4. Use git to clone the project `https://github.com/DGP-Studio/Snap.Hutao.git` to your local device
5. Switch git branch to `develop`
6. Open project solution with your Visual Studio and then you are ready to go

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Enable Debug

1. Download and install `Sysinternals Suite` from [Microsoft Store](https://www.microsoft.com/store/productid/9P7KNL5RWT25) or [Microsoft website](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite)
2. Locate and run `DebugView` program in the installed app list or unzipped folder
3. Run Snap Hutao client
4. Check DebugView output

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Start Pull Request

- All code-related changes from authors' own branches are only allowed be merged to `develop` branch
- Please use [keywords](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) to link your PR or commits with issues, so issues can be automatically closed once commits are merged into `main` branch.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Test Binary Package

Once the code in updated in `develop` and `main` branches, an Azure Pipeline CI script will build the latest code to `Snap Hutao Alpha` package. Once the package is built, it will be released on [GitHub Release page](https://github.com/DGP-Studio/Snap.Hutao/releases) as a pre-released package.

You need to install [Snap.Hutao.CI.cer](https://github.com/DGP-Studio/Snap.Hutao/releases/download/2023.10.3.1/Snap.Hutao.CI.cer) certificate to your local machine, and then install the msix package in the release.

\*If the latest release does not contain attached file, that means package is still in uploading process.
