---
category: [開源, 開發]
tag: ["開發", "GitHub"]
icon: iconfont icon-code
order: 3
description: 胡桃工具箱使用 C# 和 .NET 框架開發桌面用戶端和服務端。我們廣泛地接受來自開源社群的回饋，如果您願意貢獻您的程式碼，請閱讀本頁的指導文件。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html
---

# 貢獻您的程式碼

胡桃工具箱使用 `C#` 和 `.NET` 框架開發桌面用戶端和服務端。我們廣泛地接受來自開源社群的回饋，如果您願意貢獻您的程式碼，請閱讀本頁的指導文件。

您可以在 GitHub 上查看所有目前仍然[未解決的問題](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90)。

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> 設定 Snap.Hutao 專案

1. 下載並安裝 [Visual Studio](https://visualstudio.microsoft.com/downloads/)
 - 您需要安裝 `.NET desktop development`、`Desktop development with C++` 和 `Windows application development` 元件
 - 它們的中文名稱分別是 `.NET 桌面開發`、`使用 C++ 的桌面開發` 和 `Windows 應用程式開發`
2. 安裝 Visual Studio 商店中由 Microsoft 提供的 `Single-project MSIX Packaging Tools for VS 2022` 插件
3. 使用 Git clone `https://github.com/DGP-Studio/Snap.Hutao.git` 到您的本地設備
4. 將分支切換為 `develop`
5. 使用您的 Visual Studio 開啟專案 Solution，接下來您就可以開始編輯程式碼了

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> 開啟 Debug

1. 從[Microsoft商店](https://www.microsoft.com/store/productid/9P7KNL5RWT25) 或[Microsoft官網](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals- suite) 下載並安裝`Sysinternals Suite`
2. 從開始功能表或解壓縮後的檔案中找到 `DebugView` 並啟動
3. 啟動 Snap Hutao 主程序
4. 觀察 `DebugView` 的輸出

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> 发起 Pull Request

- 所有不是從專案其它分支發起的 Pull Request 都只被允許合併進 `develop` 分支
- 如果您提交的程式碼與現有的 issue 相關，請使用[關鍵字](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)將您的 PR 與相關的 issue 連結起來。這樣當您的 PR 最終被合併進 `main` 主分支時，這些 issue 將會自動關閉。

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> 測試打包程式

::: warning

如果您希望試試最新的 Alpha 版本，請先安裝 **[DGP_Studio_CA.crt](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt)** 到 **受信任的根憑證授權單位** 以安裝測試版安裝包

:::

一旦您進行了 `push` 操作，一個 GitHub Actions 腳本將自動執行以建立所在分支的最新解決方案。如果分支名稱是 `main`、`develop` 或 `feat` 類別分支，腳本也會自動上傳其建置的 `Snap Hutao Alpha` 壓縮包以供測試；其他分支僅驗證可建構性而不提供上傳。

您可以在 [Alpha 流水線](https://github.com/DGP-Studio/Snap.Hutao/actions/workflows/alpha.yml) 中找到全部的編譯記錄。
