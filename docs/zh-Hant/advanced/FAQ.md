---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: 本頁包含了一些常見的與使用者網路和程式生命週期問題相關的問題及解決方案。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh-Hant/advanced/faq.html&has_description=False
---

# 其他常見問題

### 如何創建胡桃的桌面快捷方式（非管理員模式）

::: tip 社區力量
感謝 [CzHUV 提供的解決方案](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12)
:::

- `Win+R` 開啟執行視窗，在視窗中輸入`shell:AppsFolder`
  ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
- Windows 會彈出應用程式目錄，找到胡桃工具箱
- 右鍵，點擊 “創建快捷方式”
- 根據提示操作您就可以獲得一個桌面快捷方式了

### 如何創建胡桃的桌面快捷方式 （管理員模式）

您可以在程式設定頁面中點擊 “創建快捷方式” 來在桌面上添加一個具有管理員許可權的快捷方式

### 如何讓胡桃工具箱開機自動啟動

- 請參考如下思路
  - 可以自行創建一個批次檔，內容參考[此 issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184) 中，令胡桃以管理員模式直接運行的命令。
  - 在 Windows 工作排程器中設定一個**工作排程**令上述批次檔開機自啟，或將上述批次檔加入**啟動項目**中
  - 使用 `SkipUAC` 等可以使軟體以管理員身份靜默自啟的程式
- 或其他可以使胡桃工具箱開機自啟的思路，敬請自行探索

::: warning
請注意，上述各種辦法均可能在實際使用中因種種問題而失效。我們並不支持嘗試使胡桃開機自啟的行為。
:::

### 無法使用管理員模式啟動胡桃工具箱

> 該問題僅存在於 Windows 10 低於 22H2 的版本中

- 當使用者系統版本低於 `Windows Build 19045`（即 `Windows 10 22H2` 版本）時，可能無法通過管理員模式啟動胡桃工具箱
  - 該問題屬於 Windows 內核級別問題，難以判斷具體來源，故建議用戶升級至 Windows 10 最新版本

### 如何通過網路代理使用胡桃工具箱

> Snap Hutao 有著良好的雲端網路結構，在全球各地您都能獲得良好的網路服務

所有的 Windows Appx 容器應用[^loopback]（包括 Snap Hutao）都被禁用了 `Loopback 網路`，因此使用一些現代化的網路代理軟體或遊戲加速器時會導致容器化應用無法訪問互聯網，進而導致程式錯誤。

如果您需要通過網路代理使用 Snap Hutao，您可以：

- 在胡桃內進行設定（推薦）
  - 打開胡桃，點擊“回饋中心-解除 Loopback 限制”，按指引操作即可
- 在網路代理軟體中進行設定
  - 啟用 TUN 模式，如果您的網路代理軟體有該選項
  - 聯繫您的網路代理服務商，獲取解決 Windows Appx 容器應用網路代理問題的技術支援，以便他們為您提供解決方案

[^loopback]: **什麼是“Windows Appx 容器應用”？** 
Windows 使用了一種被稱為“AppContainer”的機制，該機制的目的是使應用程式**能夠獲取、且僅能夠獲取應用程式運行所需的必要資源**，減少一切非必要的接觸其他應用程式與檔的可能。在理想情況下，即便應用程式存在惡意，其也只能作用於“AppContainer”環境，無法對設備的其他檔造成損害。