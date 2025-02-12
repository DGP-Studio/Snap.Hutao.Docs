---
comment: false
externalLinkIcon: false
index: false
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
sidebar: false
navbar: false
footer: false
copyright: false
editLink: false
breadcrumbExclude: true
breadcrumb: false
lastUpdated: false
contributors: false
backToTop: false
pageInfo: false
---

# 🎉 Successfully Updated to Version 1.13.3

[简体中文](/zh/statements/latest.html) | **English**

## 1.13.3

- **[🔨Fix]** Fixed an issue where using the game management function on the game launch page would cause a crash

## 1.13.2

- **[🔨Fix]** Fixed an issue where wish records could not be refreshed via web cache [#2413](https://github.com/DGP-Studio/Snap.Hutao/issues/2413)
- **[🔨Fix]** Fixed an issue where the homepage could not display correctly when the number of enabled cards was less than one row [#2416](https://github.com/DGP-Studio/Snap.Hutao/issues/2416)
- **[🔨Fix]** Fixed an issue where high constellation characters could not be added to the Dev Plan after version 5.2 [#2422](https://github.com/DGP-Studio/Snap.Hutao/issues/2422)
- **[🔨Fix]** Fixed an issue where the data folder could not be changed if the target folder did not exist [#2425](https://github.com/DGP-Studio/Snap.Hutao/issues/2425)
- **[🔨Fix]** Fixed an issue where some users could not change the data folder due to file encryption [#2433](https://github.com/DGP-Studio/Snap.Hutao/issues/2433)
- **[🔨Fix]** Fixed an issue where the taskbar icon menu could still be opened when a dialog box was displayed [#2434](https://github.com/DGP-Studio/Snap.Hutao/issues/2434)
- **[✨Optimization]** Administrator privileges are now required to disable Loopback
- **[✨Optimization]** Optimized the data import experience for Embedded Yae
  * Changed the UI of related features, now requires administrator privileges to use
  * Now requires enabling the injection feature on the game launch page to use related features
  * Now uses the account configured on the game launch page to log in