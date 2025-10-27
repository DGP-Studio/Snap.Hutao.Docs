---
category:
  - Announcement
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao strives to provide users with the best user experience by continuously updating and fixing known issues and releasing new features. We will always publish update logs to track the changes made to the program.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# Update Logs

## 1.16.5 <Badge text="latest" type="tip" />

- **[🎉New]** Added a touch input detection toggle in the Settings page. When enabled, it detects touch input and forces the touch input option in game launch - injection to be enabled/disabled [#3186](https://github.com/DGP-Studio/Snap.Hutao/issues/3186)
- **[🎉New]** Merged October's new internationalization translation content
- **[✨Optimization]** Real-time Notes now show the absolute time when resources are fully recovered, instead of the remaining time until full [#3216](https://github.com/DGP-Studio/Snap.Hutao/issues/3216)
- **[🔨Fix]** Fixed a crash that could occur when entering the Thousand-Star Encounter challenge after launching the game with injection enabled [#3194](https://github.com/DGP-Studio/Snap.Hutao/issues/3194)
- **[🔨Fix]** Fixed an issue where importing via Embedded Yae in Achievement Manager and Development Plan would fail or throw errors [#3196](https://github.com/DGP-Studio/Snap.Hutao/issues/3196)
- **[🔨Fix]** Fixed a crash on the My Characters page that could occur after refreshing the character list [#3199](https://github.com/DGP-Studio/Snap.Hutao/issues/3199)
- **[🔨Fix]** Fixed a crash on the Spiral Abyss page that could occur after refreshing the character list [#3205](https://github.com/DGP-Studio/Snap.Hutao/issues/3205)
- **[🔨Fix]** Fixed an issue where installing the game would display an error prompt

## 1.16.4

- **[🎉New]** Refreshed the language settings page in the initial guide window
- **[🔨Fix]** Fixed an issue where a download failure prompt could appear after metadata files finished downloading
- **[🔨Fix]** Fixed an issue where enabling injection options could prevent launching the game

## 1.16.3

- **[🔨Fix]** Fixed a crash that could occur when bulk-adding characters to the Development Plan from the My Characters page [#3172](https://github.com/DGP-Studio/Snap.Hutao/issues/3172)
- **[🔨Fix]** Fixed an issue where changing the background image type on the Settings page would not refresh immediately
- **[🔨Fix]** [Internal] Fixed an issue where user feedback on crashes was not associated with the corresponding Sentry event

## 1.16.2

- **[🎉New]** Added a toggle in the game launch injection options to claim Moment Resin rewards [#3147](https://github.com/DGP-Studio/Snap.Hutao/issues/3147)
- **[✨Optimization]** Imaginarium Theater now supports recognizing Moonlit Mode and its Sigil challenges [#3165](https://github.com/DGP-Studio/Snap.Hutao/issues/3165)
- **[✨Optimization]** Game launch account detection now shows account information and provides account expiration prompts
- **[✨Optimization]** Development Plan now supports calculating character level cap ascensions
- **[✨Optimization]** Restyled the main window title bar [#3167](https://github.com/DGP-Studio/Snap.Hutao/issues/3167)
- **[🔨Fix]** Fixed an issue where preview live stream redemption codes could show empty code entries when not yet ready

## 1.16.1

- **[🔨Fix]** Fixed a crash issue that could occur when switching to the homepage without checking in for the current month
- **[🔨Fix]** Fixed an issue where the toggle list in the injection settings tab on the game launch page could not be scrolled
- **[🔨Fix]** Fixed an issue where the Cultivation Plan item tab could load slowly or even crash when there were many items [#3137](https://github.com/DGP-Studio/Snap.Hutao/issues/3137)

## 1.16.0

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

## 1.15.17

- **[🎉New]** Added support for Stygian Onslaught on the oversea server (HoYoLAB). Thanks to [@DSakura207](https://github.com/DSakura207) for the implementation [#3093](https://github.com/DGP-Studio/Snap.Hutao/issues/3093)
- **[✨Optimization]** Fulfill the missing client translations

## 1.15.16

- **[🎉New]** Added Nod-Karai region talent/weapon materials to the homepage calendar card [#3090](https://github.com/DGP-Studio/Snap.Hutao/issues/3090)
- **[✨Optimization]** Removed condensed resin estimation from Dev Plan resin estimation [#3091](https://github.com/DGP-Studio/Snap.Hutao/issues/3091)
- **[🔨Fix]** Fixed multiple game launch related unresponsive issues [#3099](https://github.com/DGP-Studio/Snap.Hutao/issues/3099)

## 1.15.15

- **[✨Optimization]** Character profile page now supports viewing base stats for characters at levels 91-100
- **[✨Optimization]** Achievement page search now ignores punctuation in titles and descriptions [#3059](https://github.com/DGP-Studio/Snap.Hutao/issues/3059)
- **[🔨Fix]** Fixed an issue where injection configuration was incorrectly obtained when launching in non-administrator mode
- **[🔨Fix]** Fixed layout errors on the wish record history page
- **[🔨Fix]** Fixed an issue where the wish record countdown page did not exclude "Mengjian Yue Rui Xi"
- **[🔨Fix]** Fixed an issue where Starward/BetterGI would not launch together after starting the game [#3041](https://github.com/DGP-Studio/Snap.Hutao/issues/3041)
- **[🔨Fix]** Fixed an issue where Real-time Notes could not be refreshed [#3041](https://github.com/DGP-Studio/Snap.Hutao/issues/3065)

## 1.15.14

- **[✨Optimization]** The character profile page now forcibly displays the Gnosis as the elemental power source for the five characters who use Gnosis.
- **[🔨Fix]** Fixed an issue where wish records could not be imported/exported in the settings page. [#3014](https://github.com/DGP-Studio/Snap.Hutao/issues/3014)
- **[🔨Fix]** Fixed an issue where the language option in the settings page was not selected after re-entering the page. [#3016](https://github.com/DGP-Studio/Snap.Hutao/issues/3016)
- **[🔨Fix]** Fixed an issue where the field of view toggle in the injection feature on the game launch page was not working. [#3017](https://github.com/DGP-Studio/Snap.Hutao/issues/3017)
- **[🔨Fix]** Fixed an issue where the monitor selection feature in the process section of the game launch page was not displaying correctly. [#3017](https://github.com/DGP-Studio/Snap.Hutao/issues/3017)
- **[🔨Fix]** Fixed an issue where the quick resolution adjustment options on the game launch page were not displaying correctly. [#3034](https://github.com/DGP-Studio/Snap.Hutao/issues/3034)

## 1.15.13

- **[🎉New]** Added a super secret feature to the game launcher
- **[🎉New]** Added a right-click menu item on the achievement page to search achievements on MiYouShe/HoYoLAB [#2957](https://github.com/DGP-Studio/Snap.Hutao/issues/2989)
- **[✨Optimization]** The My Characters page now remembers the sorting order [#2953](https://github.com/DGP-Studio/Snap.Hutao/issues/2953)
- **[✨Optimization]** The "End Process" button in the game launcher is now disabled in non-administrator mode [#2968](https://github.com/DGP-Studio/Snap.Hutao/issues/2968)
- **[✨Optimization]** Changed the color of the "Next" button in the initial guide window
- **[🔨Fix]** Fixed an issue where the auto-click/auto-press feature would ignore the saved state and be enabled by default after restarting [#2941](https://github.com/DGP-Studio/Snap.Hutao/issues/2941)
- **[🔨Fix]** Fixed an issue where the game might not exit properly when importing achievement/item data using Embedded Yae, causing data import to fail [#2998](https://github.com/DGP-Studio/Snap.Hutao/issues/2998)
- **[🔨Fix]** Fixed an issue where the 6.0 preview redemption code could not be displayed correctly

## 1.15.12

- **[🔨Fix]** Fixed an issue where the server switch function could not be used properly when launching the game [#2941](https://github.com/DGP-Studio/Snap.Hutao/issues/2941)

## 1.15.11

- **[🎉New]** Support for UIGF 4.1
- **[🎉New]** Development plan now allows adding unreleased characters from character WIKI
- **[🎉New]** Character WIKI page now displays Trace Effects and Visions [#2875](https://github.com/DGP-Studio/Snap.Hutao/issues/2875)
- **[✨Optimization]** Improved performance of material calculation in development plan
- **[✨Optimization]** Optimized performance of some features
- **[🔨Fix]** Fixed issue where game region could not be correctly identified in some cases
- **[🔨Fix]** Fixed Embedded Yae not working properly in version 5.8 [#2916](https://github.com/DGP-Studio/Snap.Hutao/issues/2916)
- **[🔨Fix]** Fixed crash when viewing some new character profiles
- **[🔨Fix]** Fixed incorrect admin prompt display on some pages [#2920](https://github.com/DGP-Studio/Snap.Hutao/issues/2920)

## 1.15.10

- **[🔨Fix]** Fixed a crash issue when launching the game after using the injection feature in version 5.8 [#2885](https://github.com/DGP-Studio/Snap.Hutao/issues/2885)

## 1.15.9

- **[🔨Fix]** Fixed a crash issue when Hoyolab users triggered CAPTCHA during login [#2880](https://github.com/DGP-Studio/Snap.Hutao/issues/2880)
- **[🔨Fix]** Fixed a crash issue that could occur when launching the game after using the injection feature [#2881](https://github.com/DGP-Studio/Snap.Hutao/issues/2881)

## 1.15.8

- **[🎉New]** Character/Weapon cultivation calculation now supports unreleased characters
- **[✨Optimization]** Improved connection stability when downloading game resources in the game management feature on the game launch page
- **[🔨Fix]** Fixed an issue where the Imaginarium Theater statistics (Lightbearer) could not be displayed correctly [#2845](https://github.com/DGP-Studio/Snap.Hutao/issues/2845)
- **[🔨Fix]** Fixed an issue where Hoyolab users could not log in properly [#2849](https://github.com/DGP-Studio/Snap.Hutao/issues/2845)
- **[🔨Fix]** Fixed an issue where the game management feature on the game launch page could not correctly update pre-downloads
- **[🔨Fix]** Other known issues fixed

## 1.15.7

- **[🔨Fix]** Fixed a crash issue when opening the main window as an international server user [#2844](https://github.com/DGP-Studio/Snap.Hutao/issues/2844)
- **[🔨Fix]** Fixed unexpected crashes in some cases

## 1.15.6

- **[🔨Fix]** Fixed an issue where the program could not be used normally when the device name was not in English

## 1.15.5

- **[🎉New]** Added user prompts for MiYouShe/HoYoLAB account login mode in the homepage game launch card
- **[🎉New]** Added preview redemption code viewing feature to the homepage
- **[🎉New]** Added "End Process" button to the game launch page for convenient handling of leftover game processes
- **[🎉New]** Added tutorial hints for some injection features on the game launch page
- **[🎉New]** Added fragile resin consumption estimation to resin estimation in the Dev Plan page
- **[🎉New]** Added Imaginarium Theater page to view and save related challenge records
- **[🎉New]** Added "Check for Updates" feature to the settings page
- **[🎉New]** Added friendship level display to grid view on My Characters page [#1283](https://github.com/DGP-Studio/Snap.Hutao/issues/1283)
- **[🎉New]** Added custom range batch calculation to cultivation calculation on My Characters page [#2831](https://github.com/DGP-Studio/Snap.Hutao/issues/2831)
- **[🎉New]** Achievement page now allows right-click to copy achievement ID [#2832](https://github.com/DGP-Studio/Snap.Hutao/issues/2832)
- **[✨Optimization]** Refreshed UI design
- **[✨Optimization]** Hutao Passport now uses a more secure V2 API
- **[🔨Fix]** Fixed an issue where clicking copyright info in the settings page would not open the browser when using online backgrounds

## 1.15.4

- **[🔨Fix]** Fixed a crash issue on the Imaginarium Theater page when incomplete data was present. [#2822](https://github.com/DGP-Studio/Snap.Hutao/issues/2822)

## 1.15.3

- **[🔨Fix]** Fixed an issue where the filter box on the Dev Plan page would provide incorrect prompts.

## 1.15.2

- **[🔨Fix]** Fixed the issue where switching to the Imaginarium Theater page could still cause a crash. [#2816](https://github.com/DGP-Studio/Snap.Hutao/issues/2816)
- **[🔨Fix]** Fixed the issue where restarting in administrator mode would not exit the current process.
- **[🔨Fix]** Other known issues fixed.

## 1.15.1

- **[🔨Fix]** Fixed a crash issue when switching to the Imaginarium Theater page. [#2799](https://github.com/DGP-Studio/Snap.Hutao/issues/2799)
- **[🔨Fix]** Fixed the issue where the hotkey enable prompt in the overlay window would not update correctly. [#2809](https://github.com/DGP-Studio/Snap.Hutao/issues/2809)
- **[🔨Fix]** Fixed the issue where archives/plans would be deselected after closing and reopening the program on the Wish/Achievement/Dev Plan pages. [#2813](https://github.com/DGP-Studio/Snap.Hutao/issues/2813)
- **[🔨Fix]** Other known issues fixed.

## 1.15.0

- **[🎉New]** Added new navigation animations for homepage cards when jumping to corresponding pages.
- **[🎉New]** Added support for Ldiff pre-download/update on the game launch page.
- **[✨Optimization]** Supported dynamic avatars for MiYouShe/HoYoLAB.
- **[🔨Fix]** Fixed the issue where there was no prompt when hotkey registration failed.
- **[🔨Fix]** Fixed the issue where there was no prompt when the notification area icon failed to be created.
- **[🔨Fix]** Fixed an issue where the Snap Hutao process would not exit properly in special cases, preventing it from being launched again.
- **[🔨Fix]** Fixed an issue where unlocking to excessively high frame rates via injection could cause the game to crash or display error 10612-4001. Please do not use the injection feature to gain unfair advantages in certain challenges; we reserve the right to disable this feature. [#2794](https://github.com/DGP-Studio/Snap.Hutao/issues/2794)
- **[🔨Fix]** Fixed the issue where the notification area icon would not be recreated after restarting Explorer. [#2737](https://github.com/DGP-Studio/Snap.Hutao/issues/2737)
- **[🔨Fix]** Fixed a crash issue when importing achievements using Embedded Yae. [#2754](https://github.com/DGP-Studio/Snap.Hutao/issues/2754)
- **[🔨Fix]** Fixed an issue where an incorrect notification about Bilibili channel server not supporting account features would appear when first entering the homepage, game launch page, or updating the game. [#2754](https://github.com/DGP-Studio/Snap.Hutao/issues/2754)
- **[🔨Fix]** Fixed an issue where viewing certain talents or skills of some characters could cause an infinite loop. [#2789](https://github.com/DGP-Studio/Snap.Hutao/issues/2789)
- **[🔨Fix]** Other known issues fixed.

---
## 1.14.9 and Older Versions

**For patch notes older than 1.15.0, please check [`Update Logs Older than Version 1.15.0`](update-log-pre-1.15.0-archive.md)**
