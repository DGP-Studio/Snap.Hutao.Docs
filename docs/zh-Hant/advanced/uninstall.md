---
category: [FAQ]
icon: iconfont icon-delete
tag: [解除安裝]
order: 9
comment: false
description: 解除安裝胡桃工具箱是一個簡單快速的過程，您可以根據本頁教程，以最適合您的程度來解除安裝胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/uninstall.html&has_description=False
---

# 解除安裝胡桃工具箱

- 解除安裝 Snap Hutao 應用程式
  - 打開“開始菜單”
  - 搜索 Snap Hutao
  - 右鍵點擊 Snap Hutao，並選擇“解除安裝”
- 清除資料檔案夾（如需完全解除安裝）
  - 打開並刪除該資料夾 `%userprofile%/Documents/Hutao`

## 常見問題

### 為什麼會彈出需要使用新應用以打開的對話方塊

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

如在解除安裝胡桃工具箱後出現如上圖所示的 “需要使用新應用以打開此 hutao 連結”，說明沒有按文檔要求在解除安裝前清除即時便箋定時任務。
請根據文檔在設置中清除定時任務後再解除安裝胡桃工具箱。

- 如果您在系統定時任務中找不到胡桃的定時任務，但問題仍然出現，請參考[這份文檔](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18)來解決

### 如何完整地備份/恢復用戶端資料

::: warning 資料安全提示
`Userdata.db` 包含您的全部用戶端資料，包括安全敏感的米哈遊論壇 Cookie，請妥善儲存該檔，不要將其分享給任何人。
:::

從在胡桃資料目錄（預設路徑為 `%userprofile%/Documents/Hutao`）中以複製的方式將 `Userdata.db` 拷貝至您的備份目錄即可，該檔包含了全部的胡桃用戶端資料。
