---
pageClass: link-box
externalLinkIcon: false
category: [功能, 教學]
comment: false
icon: iconfont icon-launch
order: 5
description: 遵循這篇快速開始文件，您將可以快速地將 Snap Hutao 胡桃工具箱設定為可用狀態。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# 快速開始

遵循這篇快速開始文件，您將可以快速地將 Snap Hutao 胡桃工具箱設定為可用狀態。

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> 最低系統需求

| 需求                   | 規格                                                             |
| ---------------------- | ---------------------------------------------------------------- |
| **最低可執行系統版本** | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **推薦系統版本**       | Windows 11 Build 22621 (22H2) 或更高版本                         |
| **必要組件**           | Windows Update, App Installer                                    |
| 可選組件               | WebView2 Runtime                                                 |

**不支援的系統版本**：

1. **LTSC 和 LTSB 版本系統由於不包含足夠新版本的 MSIX Core，因此不支援安裝**
2. **不支援企業版和精簡版系統，所有來自非微軟官方完整版系統的問題都不會積極處理**
3. Windows 10 Build 19041 亦可安裝， 但部分功能會因內核問題無法使用，故該版本下的胡桃工具箱問題將不會被處理
4. Windows Insider 預覽版本的問題不會被處理

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> 下載胡桃工具箱

### 全新安装

使用 **MSIX 安裝套件** 或 **Snap.Hutao.Deployment 安裝器** 即可安裝 Snap Hutao，您可以從下列來源取得到安裝套件

::: tabs

@tab 使用 Snap.Hutao.Deployment 安裝

Snap.Hutao.Deployment 是開發組自製的一鍵安裝器，**將同時安裝所有需要的組件**。適合廣泛的普通用戶和使用 MSIX 應用程式套件安裝失敗的用戶。

<div class="vp-card-container">

<VPCard
title="胡桃自動判斷"
desc="自動判斷最佳線路下載"
logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment 亦是一個開源的項目"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao.Deployment/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

<VPCard
title="Onedrive 鏡像"
desc="由開發團隊維護的鏡像下載來源"
logo="/images/202401/Microsoft_Office_OneDrive.svg"
link="https://d.hut.ao/d/tools/Snap.Hutao.Deployment.exe"
background="rgba(88, 164, 255, 0.15)"
/>

<VPCard
title="極狐 GitLab"
desc="Snap Hutao Deployment 程式碼庫官方中國鏡像"
logo="/images/202312/jihulab.svg"
link="https://jihulab.com/DGP-Studio/Snap.Hutao.Deployment/-/releases"
background="rgba(244, 125, 63, 0.15)"
/>

</div>

@tab 使用 MSIX 安裝套件安裝

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">注意</p>
    <p>我們建議使用 Snap.Hutao.Deployment 來安裝胡桃，任何使用 MSIX 安裝套件安裝時出現的問題都不會被積極處理。</p>
  </div>

<VPCard
    title="胡桃自動判斷"
    desc="自動判斷最佳線路下載"
    logo="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01oaGvKE1g6dut0pICS_!!1797064093.png_.webp"
    link="https://api.snapgenshin.com/patch/hutao/download"
    background="rgba(253, 233, 233, 0.45)"
  />
<VPCard
    title="GitHub"
    desc="Snap Hutao 所有版本都會發佈於主程式碼庫中"
    logo="/images/202312/github-mark.svg"
    link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
    background="rgba(155, 233, 168, 0.15)"
  />
<VPCard
    title="極狐 GitLab"
    desc="Snap Hutao 主程式庫的官方中國鏡像"
    logo="/images/202312/jihulab.svg"
    link="https://jihulab.com/DGP-Studio/Snap.Hutao/-/releases"
    background="rgba(244, 125, 63, 0.15)"
  />

</div>

:::

---

如果您有興趣透過的力量讓 Snap Hutao 專案變得更好，歡迎[加入我們](development/join.md)！

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> 從 Microsoft Store 版升級至最新版本

> 對於這項改變，您可以閱讀 [1.9.0 版本重大改變詳情](blog/version-1-9-0-breaking-changes.md) 來取得詳細資訊

如果您已經安裝了 Snap Hutao 的 Microsoft Store版（版本號碼介於1.4.11和1.8.5之間）則需要先解除安裝舊版再進行全新安裝

- 依照文件提供的[解除安裝方法](advanced/uninstall.html)解除安裝舊版應用程式
  - 只要不手動刪除存放資料的資料夾，您的資料就不會受到影響
- 依照上述方法全新安裝新版應用程式

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> 更新胡桃工具箱

如沒有特殊聲明，您可以透過執行 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 或安裝最新版 MSIX 安裝套件來升級程式。

1.9.0版本起，Snap Hutao 將內建升級提示功能以提醒您取得更新包。如果您更新失敗，可嘗試使用 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 覆蓋安裝來解決問題。

- 只要不手動刪除存放資料的資料夾，您的資料就不會受到影響

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> 安裝可選組件

透過可選組件，胡桃工具箱可以透過系統級的環境來更方便地實現一些功能，它們不是強制要求的組件，但可以帶來更好的體驗

### <img src="/images/202312/MSEdge.webp" width="20" height="20"> WebView2 執行階段

WebView2 執行階段由Microsoft提供，其允許胡桃在程式內低開銷地啟用一個內建的瀏覽器。透過此元件，胡桃允許用戶透過 WebView2 內建瀏覽器登入米遊社帳號。

在[Microsoft官網](https://developer.microsoft.com/zh-tw/microsoft-edge/webview2/)的底部，您可以找到 `常青獨立安裝程式`，選擇 `x64` 下載並根據提示安裝即可

### <img src="/images/202409/Microsoft-logo.svg" width="20" height="20"> Segoe Fluent Icons 字體

該字體由Microsoft提供，可為胡桃提供更好的圖示顯示效果，缺少該字體可能導致胡桃的部分圖示顯示效果不佳。

您可以點選[此連結](https://aka.ms/SegoeFluentIcons) 以直接下載字體壓縮包。請在解壓縮後右鍵安裝以將字型安裝到系統。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 新增第一個米遊社/ HoYoLAB 帳號

進入胡桃工具箱主介面後，點擊左下角文件按鈕和設定按鈕中​​間的帳號面板。在彈出的帳號面板中，依照您的帳號類型選擇對應的登入按鈕。

如果您的原神帳號是米哈遊的國服帳號，需要在 `米遊社` 類別內登入；如果您的原神帳號是 HoYoverse 的國際服帳號，需要在 `HoYoLAB` 類別內登入。

無論是國服帳號還是國際服帳號，您都有多種登入方式可供選擇。 對於使用米遊社手機應用程式並綁定國服遊戲帳號的用戶，可以選擇「掃碼登入」。 <font color="red">無論您使用何種方式登錄，請務必確定您已經使用官方應用程式登錄並使用米哈遊論壇並設定社群用戶名以初始化您的帳號，否則Snap Hutao 將無法取得您的帳號資料。 </font>

::: tabs

@tab 手機驗證碼登入（僅國服）

**請提前確認米遊社已綁定國服帳號**

1. 點擊帳號面板中的“手機驗證碼”按鈕，填寫手機號碼並點擊“發送”
2. 填寫收到的驗證碼，核對無誤後點選“確認”
3. 稍等片刻，胡桃將自動新增您的帳號

@tab Cookie 登入

如果您能希望使用自己提取的米哈遊通行證 Cookie 登入到胡桃工具箱，可以在登入面板中點擊“手動輸入”，並在彈出的視窗中輸入包含 SToken 的 `Cookie`。
如果您填入了一個有效的 Cookie，在點擊「確認」後 您將成功登入您的米遊社帳號並在帳號面板中顯示出來。

手動取得含 `SToken` 欄位的 Cookie 的方式可參考[使用第三方工具取得有 SToken 的 Cookie](../advanced/get-stoken-cookie-from-the-third-party.md) 文件。 **請合理保存您的 Cookie，否則可能帳號安全受到威脅！ **

@tab 網頁登入（僅HoYoLAB）

**網頁登入需要使用 Microsoft WebView2 執行階段組件**

1. 點選帳號面板中的「網頁登入」按鈕，胡桃將會透過 WebView2 開啟 HoYoverse 登入介面
2. 在該介面中登入您的帳號，登入成功後點選程式主介面右上角的「我已登入」按鈕
3. 稍等片刻，胡桃工具箱會將目前帳號新增進本機用戶端，並在帳號面板中顯示出來

**請注意：HoYoLAB 預設阻擋來自中國大陸的網路連接，Snap Hutao 軟體無法自行繞過該限制。**

:::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> 安裝常見問題

### 為什麼程式中的圖示會出現亂碼現象

- 當用戶在 Windows 10 下使用胡桃且發現有亂碼情況時：
  - 可以下載 `Segoe Fluent Icons`字體
  - 安裝時選擇`為系統所有使用者安裝`，即可解決問題
- 您可以從 [ Microsoft 官方](https://aka.ms/SegoeFluentIcons)下載到該字型文件

### 能不能透過添加缺少的系統組件來實現胡桃的安裝

> 請不要在`精簡版 / 破解版 / 優化版 / LTSC / LTSB` 版系統安裝胡桃 因為這些系統版本可能缺少許多使胡桃正常執行的必要元件。

如果您會問這個問題，那是因為您對自己的系統不熟悉。

您不知道缺少了多少元件。當您安裝錯誤訊息中提到的元件後，您會在下一個錯誤訊息中看到下一個缺少的元件，無窮無盡。

::: warning
以下問題僅適用於 MSIX 安裝，請先嘗試使用 [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) 來解決您的安裝問題
:::

### 我的電腦無法開啟 MSIX 格式的安裝包

您的電腦缺少了 Windows 系統重要元件 App Installer，您可能是盜版軟體的受害者。

如果您的系統中裝有 Microsoft Store，可以從 [App Installer 商店頁面](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US) 重新安裝來還原這個元件。

如果您沒有Windows Store，請使用 Microsoft 官方的最新完整版消費者[Windows 10](https://www.microsoft.com/zh-tw/software-download/windows10) 或[Windows 11](https://www.microsoft.com/zh-tw/software-download/windows11) 鏡像。使用 Microsoft 官方的提供的 Windows 10 安裝小幫手和 Windows 11 安裝小幫手可以幫助您簡單地在保留資料的情況下升級至最新完整版 Windows。 **請勿使用來源不明的破解版、精簡版系統鏡像。 **

### MSIX 安裝套件提示 `無法驗證此應用程式套件的發布者憑證` 錯誤並無法安裝

此問題常見於 Windows 家用版系統。如果您使用的不是家用版系統，則您的 Windows Update 模組可能被停用或已失效，這導致世界範圍內的 CA 根憑證無法被更新。

Snap Hutao 的軟體憑證來自[GlobalSign Code Signing Root R45](https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates)，您可以手動從 GlobalSign 官網下載 [該憑證](https://secure.globalsign.com/cacert/codesigningrootr45.crt) 並且加入到您的系統中的 `受信任的根憑證授權單位` 類別中。

### MSIX 安裝套件提示群組原則錯誤或需要 Windows 開發者授權錯誤並無法安裝

如果您使用的 Windows 家用版作業系統，請嘗試開啟系統設定中的開發者模式以解決該問題

### 安裝 MSIX 安裝套件時失敗並有錯誤提示

| 錯誤訊息              | 原因                             |
| --------------------- | -------------------------------- |
| `0x80040154` 錯誤代碼 | 錯誤的Windows使用者帳戶權限       |
| `应用未启动` 錯誤提示 | App Installer 權限錯誤或已被破壞 |
| `0x80073CF0` 錯誤代碼 | 錯誤的資料夾權限                   |
| `0x80070005` 錯誤代碼 | 錯誤的Windows使用者帳戶權限        |
| `0x80070570` 錯誤代碼 | 錯誤的Windows使用者帳戶權限       |
| `0x8007065E` 錯誤代碼 | 錯誤的Windows使用者帳戶權限        |

如果您在安裝失敗時收到了上面的錯誤提示，請嘗試下面的步驟來解決問題：

1. 在 Windows 開始功能表按鈕上右鍵，選擇 `PowerShell (管理員)`
2. 在打開的視窗中複製下面的程式碼並 enter 執行（在PowerShell中滑鼠右鍵就是貼上）
   ```PowerShell :no-line-numbers
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```
3. 如果 PowerShell 沒有任何錯誤輸出（通常為紅色），表示安裝成功。請在開始功能表中的全部應用程式清單中尋找 `Snap Hutao` 並啟動
