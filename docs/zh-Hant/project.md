---
headerDepth: 2
category: [公告, 專案, 功能]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao 是一個開源於 GitHub 的程式專案，我們廣泛接受來自社群的合作以讓這個項目獲得更多的活力。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# 專案說明

::: center
![banner](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01vWmKzl1g6e2VIEODU_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

胡桃工具箱是一款以 MIT 協定開源的原神工具箱，專為現代化 Windows 平台設計，旨在改善桌面端玩家的遊戲體驗。透過將現有的官方資源與開發團隊設計的全新功能結合，它提供了一套完整且實用的工具集，且無需依賴任何行動裝置。它不對遊戲客戶端進行任何破壞性修改以確保工具箱的安全性。

Snap Hutao 專案使用 MSIX 格式的安裝包打包。 MSIX 是一種 Windows 原生的應用程式套件格式，它使得軟體的安裝、更新和解除安裝過程更加簡潔。其中，它的一個突出特性就是利用沙盒技術。這意味著以 MSIX 打包的應用程式在隔離的環境中運行，防止它們進行系統範圍的更改。這種隔離增強了安全性，因為它限制了應用程式對系統資源和使用者資料的存取。此外，當解除安裝 MSIX 打包的應用程式時，它不會留下任何殘餘檔案或登錄條目，保持了系統的整潔和穩定。這是對傳統安裝方法的重大改進，因為傳統方法在解除安裝應用程式時常常會留下「數位垃圾」。這些特性的結合使 MSIX 成為開發者和終端使用者的強大工具，提供了無縫、安全、清潔的軟體管理體驗。

## 胡桃能解決的原神桌面端缺陷

|         功能         | 行動端                    | 桌面端                   | 胡桃的方案                                                            |
| :------------------: | ------------------------- | ------------------------ | --------------------------------------------------------------------- |
|    **遊戲高幀率**    | IOS/iPadOS 官方支援120FPS | 最高僅 60FPS             | [進階啟動器 - 幀率解鎖](features/game-launcher.md#解鎖幀率上限)       |
|   **遊戲帳號切換**   | 已登入的帳號會被記錄      | 登出後帳號不會被記錄     | [進階啟動器 - 帳號切換](features/game-launcher.md#帳號儲存)           |
|     **每日簽到**     | 米遊社/ HoYoLAB 客戶端    | 僅國際服用戶可在網頁簽到 | [帳號面板 - 簽到](features/mhy-account-switch.md)                     |
|     **即時便箋**     | 米遊社/ HoYoLAB 客戶端    | 無                       | [即時便箋](features/real-time-notes.md)                               |
| **派遣完成通知推播** | 透過行動端遊戲推播通知   | 無                       | [即時便箋推播訊息](features/real-time-notes.md)                       |
|   **深淵資料查詢**   | 米遊社/ HoYoLAB 客戶端    | 僅國際服用戶可在網頁查詢 | [深境螺旋](features/hutao-API.md)                                     |
|     **養成計劃**     | 米遊社/ HoYoLAB 客戶端    | 僅國際服用戶可在網頁使用 | [養成計劃](features/develop-plan.md#养成计划)                         |
|   **Discord 狀態**   | 無                         | 國際服飾客戶端可用         | [進階啟動器 - Discord Activity](features/game-launcher.md#進階啟動器) |

## 專案資源

- [GitHub 程式碼庫](https://github.com/DGP-Studio/Snap.Hutao)
- [Crowdin 在地化翻譯](https://translate.hut.ao/)
- [Snap Hutao 用戶社群](community.md)

## 完整功能一覽

- [遊戲內公告及倒數計時](features/dashboard.md)
- [米哈遊論壇多帳號登入支持](features/mhy-account-switch.md)
  - 支援以網頁登入和輸入 Cookie 的方式登入米遊社和 HoYoLAB
  - 支援簽到獎勵
- [進階啟動器](features/game-launcher.md)
  - 伺服器切換
  - 遊戲帳號切換
  - 自訂幀率上限
  - 遊戲補丁包下載
- [祈禱記錄管理](features/wish-export.md)
  - 從遊戲資料更新資料	
  - 匯入/匯出 UIGF 資料文件
  - 全域祈願資料統計
- [成就管理](features/achievements.md)
  - 從遊戲資料更新資料
  - 匯入/匯出 UIAF 資料文件
- [即時便箋](features/real-time-notes.md)
  - 支援多帳號即時便箋
  - 自訂更新間隔
  - Windows 原生通知推播
- [我的角色](features/character-data.md)
  - 支援多重資料來源同步資料
  - 聖遺物評分和雙爆評分
  - 匯出我的角色資料截圖
- [深境螺旋](features/hutao-API.md)
  - 每期怪物和淵月祝福詳情
  - 同步深境螺旋詳情戰鬥資料
  - 胡桃深淵資料庫
    - 角色使用率
    - 角色出場率
    - 隊伍出場統計
    - 角色持有率
- [養成計劃](features/develop-plan.md)
  - 支援從即時資料和 WIKI 資料創建角色和武器養成計劃
  - 支援多計劃存檔
- WIKI 資料	
  - [角色資料](features/character-wiki.md)
  - [武器資料](features/weapon-wiki.md)
  - [怪物資料](features/monster-wiki.md)
- [胡桃雲端帳號系統](features/hutao-settings.md#胡桃帳號)
  - 祈願資料備份
  - 祈願統計預測
