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

# 🎉 Successfully Updated to Version 1.14.5

[简体中文](/zh/statements/latest.html) | **English**

- **[🔨Fix]** Fixed an issue where the miHoYo account would not automatically switch after launching the game from the Real-time Notes page. [#2623](https://github.com/DGP-Studio/Snap.Hutao/issues/2623)
- **[🔨Fix]** Fixed an issue where using Embedded Yae to import achievements after launching the game would not terminate the game process. [#2630](https://github.com/DGP-Studio/Snap.Hutao/issues/2630)
- **[🔨Fix]** Fixed an issue where the Dev Plan on the My Characters page would not check if characters were ascended when calculating all characters and weapons. [#2658](https://github.com/DGP-Studio/Snap.Hutao/issues/2658)
- **[🔨Fix]** Fixed an issue where deleting a wish record archive would not attempt to reselect the first archive. [#2659](https://github.com/DGP-Studio/Snap.Hutao/issues/2659)
- **[🔨Fix]** Fixed a crash issue when attempting to pre-download. [#2660](https://github.com/DGP-Studio/Snap.Hutao/issues/2660)
- **[🔨Fix]** Fixed a crash issue that could occur when failing to download image files under specific conditions.
- **[✨Optimization]** Improved the startup experience:
  - A popup will now appear if database migration fails during startup.
  - The application will wait for initialization to complete before closing or restarting.
