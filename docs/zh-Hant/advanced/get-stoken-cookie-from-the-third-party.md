---
category: [FAQ, 第三方工具]
icon: iconfont icon-read
order: 7
comment: false
description: 一些第三方工具可以幫助您獲取到包含 Stoken 欄位值的米遊社 cookie 並將其用於胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# 使用第三方工具獲取有 Stoken 的 cookie

::: warning
- 以下步驟中涉及的軟體、開源專案等資源均來源於網際網路，與 DGP-Studio 無關
- 本說明文檔僅提供有關的解決思路，僅供學習使用，具體操作與操作後果與本專案無關
:::

## Android

Android 用戶可以使用開源專案 GetToken 來獲取包含 Stoken 欄位的 cookie

::: tip GetToken 開源專案
- GitHub：[HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)
:::

- GetToken 專案 的發佈會包含兩個 apk 檔，兩者最終效果相同。根據您的設備情況選擇適合您的版本即可。
  - `app-release.apk` 是一個 LSPosed 外掛程式，其允許用戶在官方米遊社中使用 GetToken 功能
    - 需要 Root 許可權
  - `miyoushe-361-lspatched.apk` 是一個已包含 GetToken 功能的修改版米遊社程式
    - 注意，您需要先卸載官方版米遊社以安裝該版本的米遊社
    - 本方法無須 Root
- 啟用外掛程式或安裝修改版米遊社後打開米遊社，在底欄點擊“我的”，然後登入
- 在右上角點擊形如 🔑 形狀的按鈕
- 勾選 `Stoken` 選項
- 點擊“複製登入資訊”以獲取 `Cookie`
- 將複製到的 Stoken 發送到已經安裝了胡桃工具箱的電腦
- 在“胡桃”中點擊“帳號登入-手動輸入”
- 輸入之前獲取的 `Cookie` 即可完成登入

## iOS

iOS 使用者可以在 App Store 下載抓包軟體 `Stream` 來獲取包含 Stoken 欄位的 Cookie

- 從 App Store 下載 [Stream](https://apps.apple.com/cn/app/stream/id1312141691)
- 對功能變數名稱 `api-takumi.mihoyo.com` 進行抓包分析
- 找到並複製帶有 `Stoken` 的資料
  - 形如 `stuid=****;stoken=v2****;mid=****;`
- 將複製到的 Stoken 發送到已經安裝了胡桃工具箱的電腦
- 在“胡桃”中帳號登入的位置，點擊“手動輸入”
- 輸入之前獲取的 `Cookie` 即可完成登入
