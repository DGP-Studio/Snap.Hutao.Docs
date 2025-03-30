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

# 🎉 Successfully Updated to Version 1.14.2

[简体中文](/zh/statements/latest.html) | **English**

## 1.14.2

- **[🔨Fix]** Fixed an issue where the overlay window will resume visible when hidden by hotkey and switch between windows

## 1.14.1 

- **[🎉New]** Added a custom shortcut key to control the display and hiding of the overlay window

## 1.14.0

- **[🎉New]** Added a shortcut key to toggle window display/hide for compact web window [#2382](https://github.com/DGP-Studio/Snap.Hutao/issues/2382)
- **[🎉New]** Added a sign-in card on the homepage [#1322](https://github.com/DGP-Studio/Snap.Hutao/issues/1322)
- **[🎉New]** Added a semi-transparent overlay window in the game [#2506](https://github.com/DGP-Studio/Snap.Hutao/issues/2506)
  - The overlay window will replace the original hotkey prompt in the title bar
  - The overlay window will replace the original injection options in the game launch page
- **[🎉New]** Added an injection option to remove the elemental burst camera close-up
- **[🎉New]** Added an injection option to remove battle damage numbers
- **[🎉New]** Added an injection option to apply touch input [#2535](https://github.com/DGP-Studio/Snap.Hutao/issues/2535)
- **[🎉New]** Added platform type parameter in the game launch page [#2521](https://github.com/DGP-Studio/Snap.Hutao/issues/2521)
- **[🎉New]** Added sorting options in the My Characters page [#2512](https://github.com/DGP-Studio/Snap.Hutao/issues/2512)
- **[🎉New]** Added display of character and weapon promotion levels in the My Characters page
- **[🎉New]** Added filters in the Development Plan
- **[✨Optimization]** Introduced a new updater [#2456](https://github.com/DGP-Studio/Snap.Hutao/issues/2456)
- **[✨Optimization]** Resource download progress in the guide page will now inherit existing progress
- **[✨Optimization]** Correct prompts when no available game characters after community login
- **[✨Optimization]** Simplified the logic of the injection feature [#2531](https://github.com/DGP-Studio/Snap.Hutao/issues/2531)
- **[✨Optimization]** The My Characters page will now automatically scroll to the top after switching characters [#1731](https://github.com/DGP-Studio/Snap.Hutao/issues/1731)
- **[✨Optimization]** Character development will now recognize if the character has ascended [#2403](https://github.com/DGP-Studio/Snap.Hutao/issues/2403)
- **[✨Optimization]** Added validation before changing the data directory
- **[✨Optimization]** Added relevant prompt texts in some settings
- **[✨Optimization]** Optimized the lag issues on some pages
- **[✨Optimization]** Fixed many memory leak issues
- **[✨Optimization]** Optimized the display text of hotkey prompts
- **[🔨Fix]** Fixed an issue where the main window closing could cause a crash during real-time note auto-refresh
- **[🔨Fix]** Fixed an issue where the tray popup would not reappear after pressing Alt + F4 [#2532](https://github.com/DGP-Studio/Snap.Hutao/issues/2532)
- **[🔨Fix]** Fixed an issue where clicking to change email/password/logout on Snap Hutao Passport page might not respond
- **[🔨Fix]** Fixed an error prompt when the game directory is not set
- **[🔨Fix]** Fixed a crash issue when attempting to take over the game process [#2540](https://github.com/DGP-Studio/Snap.Hutao/issues/2540)
- **[🔨Fix]** Fixed a freeze issue when updating the game on the channel server [#2327](https://github.com/DGP-Studio/Snap.Hutao/issues/2327)
- **[🔨Fix]** Fixed an issue where the wish timer incorrectly included some permanent characters
- **[🔨Fix]** Fixed an issue where removing an achievement archive in the Achievement Management page would not automatically switch to the next archive [#2519](https://github.com/DGP-Studio/Snap.Hutao/issues/2519)
- **[🔨Fix]** Fixed an issue where some achievement versions were displayed incorrectly in the Achievement Management page
- **[🔨Fix]** Fixed an issue where Embedded Yae could not be used normally in version 5.5
- **[🔨Fix]** Fixed an issue where some monsters were displayed incorrectly in the Spiral Abyss
- **[🔨Fix]** Fixed an issue where resin estimation data in the Development Plan could be incorrect
- **[🔨Fix]** Fixed a crash issue when drawing UI under certain scaling conditions
- **[🔨Fix]** Fixed an issue where WebView2 could not load properly in some cases
- **[🔨Fix]** Fixed a freeze issue when closing the window before WebView2 finished loading [#2544](https://github.com/DGP-Studio/Snap.Hutao/issues/2544)
- **[🔨Fix]** Fixed an issue where some devices could not set the language correctly
- **[🔨Fix]** Fixed an issue where some images could not be displayed correctly
