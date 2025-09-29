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

# 🎉 Successfully Updated to Version 1.16.0

[简体中文](/zh/statements/latest.html) | **English**

- **[🎉New]** Added tooltip on the resin icon in the Real-time Notes card on the homepage [#2699](https://github.com/DGP-Studio/Snap.Hutao/issues/2699)
- **[✨Optimization]** Refactored the game launch module
  - **[🎉New]** Added reward claim consumable control in game launch, allowing selection of whether to consume Original Resin, Condensed Resin, Fragile Resin, or Primogems when claiming rewards
  - **[🎉New]** Added server-only conversion feature in game launch, enabling game client file replacement without actually launching the game [#2177](https://github.com/DGP-Studio/Snap.Hutao/issues/2177)
  - **[✨Optimization]** Added multiple tooltips to injection options [#2961](https://github.com/DGP-Studio/Snap.Hutao/issues/2961)
  - **[✨Optimization]** If MiYouShe/HoYoLAB login is enabled, the homepage game launch card will display the current in-game character after launching the game [#2969](https://github.com/DGP-Studio/Snap.Hutao/issues/2969)
  - **[✨Optimization]** Added a tooltip in injection options to indicate whether the changes will take effect after connecting to the game [#3006](https://github.com/DGP-Studio/Snap.Hutao/issues/3006)
  - **[✨Optimization]** A prompt will appear when attempting to use Embedded Yae to import data after the game has started [#3071](https://github.com/DGP-Studio/Snap.Hutao/issues/3071)
  - **[✨Optimization]** After switching accounts in the user panel, if MiYouShe/HoYoLAB login is enabled and does not match the currently selected server, game launch will be blocked [#3109](https://github.com/DGP-Studio/Snap.Hutao/issues/3109)
- **[✨Optimization]** Videos played in the compact web window will no longer be muted by default after startup
- **[✨Optimization]** Changed the method for determining administrator privileges; now, non-elevated launches by users in the Administrators group will not be considered as elevated
- **[✨Optimization]** Removed the refresh time button from the My Characters page [#2984](https://github.com/DGP-Studio/Snap.Hutao/issues/2984)
- **[🔨Fix]** Fixed an issue where the dot indicator on the Real-time Notes card on the homepage displayed abnormally [#2964](https://github.com/DGP-Studio/Snap.Hutao/issues/2964)
- **[🔨Fix]** Fixed an issue where exporting data to the clipboard from the My Characters page was missing bonus attribute values [#2966](https://github.com/DGP-Studio/Snap.Hutao/issues/2966)
- **[🔨Fix]** Fixed an issue where Real-time Notes sometimes failed to correctly refresh Archon Quest progress [#2975](https://github.com/DGP-Studio/Snap.Hutao/issues/2975)
