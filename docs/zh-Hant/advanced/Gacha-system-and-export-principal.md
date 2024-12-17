---
headerDepth: 2
category: [FAQ]
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao 使用多種方式取得使用者的登錄資訊並配合原神 API 取得祈願記錄。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh-Hant/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# 祈願系統與匯出原理

> Gacha System and Principal

胡桃的祈願系統相較 Snap Genshin 進行了整體架構上的重新設計。

本文將解釋原神的祈願記錄機制和胡桃工具箱祈願匯出功能的技術原理。

## 祈願的取得

取得祈願記錄需要請求米哈遊的 API

關於此 API, 有下列幾個注意點

- 通過米哈遊伺服器的 API，只能查詢到過去一年內的祈願記錄
  - 這也是原神用戶端中祈願記錄的來源
- API 存在請求速率限制，過快的請求會導致後續的請求失敗，無法正常取得資料

為了請求此 API，我們需要四個關鍵參數

- 目前有下列幾種方法可以取得這些參數
  - 遍歷 Unity 的日誌檔，查找使用者打開的祈願記錄 URL
  - 代理本機流量，篩選祈願記錄 URL
  - 查找 CefBrowser 的流覽器緩存，找到祈願記錄 URL
  - 對於包含了 Stoken 的 Cookie，調用 genAuthKey API,取得參數
  - 高級用戶手動輸入相關 URL

在請求 API 後可以取得到零散的祈願記錄，在對其進行拼接後即可獲得一份完整的祈願記錄清單

## 祈願的存儲

獲得完整的祈願記錄清單後即可將其簡單的序列化入本地資料庫內，在需要時可從資料庫中反序列化出來呈現給用戶。

後續的對伺服器的請求只需要對比資料庫中的資料請求新增的部分即可。

這樣，用戶即可長期地保存帳號的完整祈願記錄

## UIGF 格式

> 統一可交換祈願記錄標準
>
> Uniformed Interchangeable GachaLog Format standard

UIGF 是由我們聯合其他祈願記錄應用宣導、推出並**長期維護**的一個統一的祈願記錄資料交換標準

標準化的資料格式將允許使用者將祈願記錄在不同的轉移資料，以使用到不同原神工具中各自的特色功能

### 祈願的匯入

在使用 UIGF 資料格式的前提下，可以匯入曾在其他應用中儲存的資料

胡桃在處理匯入時，會對比本地儲存中存在的最早的索引（ID）並僅匯入較老的數據

（因為始終可以從米哈遊的伺服器取得較新的資料，這種原始資料有更高的精確度）

### 祈願的匯出

胡桃可以將祈願記錄以 UIGF 資料格式保存為檔並輸出到用戶指定的資料夾中
