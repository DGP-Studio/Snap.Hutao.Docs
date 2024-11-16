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

# 🎉 Successfully Updated to Version 1.12.0

[简体中文](/zh/statements/latest.html) | **English**

- **[🎉New]** Upgraded to .NET 9
- **[🎉New]** Added a command to the right-click menu of the notification icon to launch a compact web window
  - The compact web window is a topmost window that can become semi-transparent when not interacted with
  - You can set the shortcut key for playing/pausing videos in the web window on the settings page
  - Using the compact web window requires running as an administrator
- **[🎉New]** Added a new page for Role Combat [#1671](https://github.com/DGP-Studio/Snap.Hutao/issues/1671)
- **[🔨Fix]** Fixed a crash issue when switching game servers using the SophonChunk mode
- **[🔨Fix]** Fixed a logic error in some specific cases with the game launch injection option
- **[🔨Fix]** Fixed an issue where some switches in the injection options were not interactive after a forced game termination due to injection failure
- **[🔨Fix]** Fixed an issue where the international server could not refresh wish records via web cache [#2141](https://github.com/DGP-Studio/Snap.Hutao/issues/2141)
- **[🔨Fix]** Fixed an issue where the attack wave details on the Spiral Abyss page might not fully expand in non-Chinese languages [#2152](https://github.com/DGP-Studio/Snap.Hutao/issues/2152)
- **[🔨Fix]** Fixed a crash issue caused by the failure to initialize the auto-click hotkey in special cases
- **[✨Optimization]** When launching the game from the Real-time Notes notification, the MiYouShe/HoYoLAB user will automatically switch to the corresponding user
