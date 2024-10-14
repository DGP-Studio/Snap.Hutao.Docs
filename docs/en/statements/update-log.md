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

## 1.11.4 <Badge text="latest" type="tip" />

- **[🎉New]** Added an error report window that pops up when the program crashes
- **[🔨Fix]** Fixed the issue where the program might crash on the first launch after installing/updating Snap Hutao
- **[🔨Fix]** Fixed the issue where multiple Discord statuses could be set simultaneously [#2024](https://github.com/DGP-Studio/Snap.Hutao/issues/2024)
- **[🔨Fix]** Fixed the issue where the first line of the game announcement might not respond to clicks
- **[🔨Fix]** Fixed the issue where international server announcements could not be retrieved [#2030](https://github.com/DGP-Studio/Snap.Hutao/issues/2030)
- **[🔨Fix]** Fixed the issue where unlocking the frame rate might not take effect after the 5.1 version update
- **[🔨Fix]** Fixed the issue where game updates could not be completed properly
- **[🔨Fix]** Fixed the issue where the installation progress in the game update window might exceed 100%
- **[🔨Fix]** Fixed the issue where the game resource pre-download might get stuck [#2029](https://github.com/DGP-Studio/Snap.Hutao/issues/2029)
- **[🔨Fix]** Fixed the issue where the completion mark might not display when the game resource pre-download is finished
- **[🔨Fix]** Fixed the issue where the material statistics on the cultivation calculation page might not respond [#2014](https://github.com/DGP-Studio/Snap.Hutao/issues/2014)
- **[🔨Fix]** Fixed the issue where MiYouShe phone verification code login might fail
- **[✨Optimization]** Added "Priority for incomplete sets" in the material statistics on the cultivation calculation page
- **[✨Optimization]** Now displays materials that can be obtained today in the material statistics on the cultivation calculation page

## 1.11.3

- **[🎉New]** Added a calendar card on the homepage [#1923](https://github.com/DGP-Studio/Snap.Hutao/issues/1923)
- **[🎉New]** Added artifact attribute recommendations on the My Characters page
- **[🔨Fix]** Fixed the issue where some monsters were not displayed correctly on the Spiral Abyss page
- **[🔨Fix]** Fixed the issue where the character/weapon data page could freeze [#1999](https://github.com/DGP-Studio/Snap.Hutao/issues/1999)
- **[🔨Fix]** Fixed the crash issue when switching game servers
- **[✨Optimization]** Prevented closing the operation window directly when game file operations are not completed [#2002](https://github.com/DGP-Studio/Snap.Hutao/issues/2002)
- **[✨Optimization]** Added import/export buttons on the Wish Records page for easier access to the import/export buttons on the settings page

## 1.11.2

- **[🎉New]** Added the ability to filter only commission achievements in the achievement management page [#897](https://github.com/DGP-Studio/Snap.Hutao/issues/897)
- **[🎉New]** Added download game speed limit feature in the settings page
- **[🎉New]** Added web tool link for upgrading UIGF versions in the wish records import/export section of the settings page
- **[🔨Fix]** Fixed the issue where copying files within the application package on certain devices would prompt that the specified file cannot be encrypted
  - This issue previously caused
    - Inability to create desktop shortcuts
    - Inability to unlock game frame rate
- **[🔨Fix]** Fixed the issue of abnormal CPU usage when downloading games on the launch game page [#1964](https://github.com/DGP-Studio/Snap.Hutao/issues/1964)
- **[🔨Fix]** Fixed the issue where game updates were not taking effect
- **[🔨Fix]** Fixed the issue where switching to a character without artifacts in the My Characters page would cause the program to crash [#1954](https://github.com/DGP-Studio/Snap.Hutao/issues/1954)
- **[🔨Fix]** Fixed the issue of real-time note requests failing with error code -1
- **[🔨Fix]** Fixed the issue where some devices were unable to switch save files in the achievement management page [#1987](https://github.com/DGP-Studio/Snap.Hutao/issues/1987)
- **[✨Optimization]** Achievements titles and tooltips in the achievement management page can now be selected and copied [#1726](https://github.com/DGP-Studio/Snap.Hutao/issues/1726)
- **[✨Optimization]** Searching achievements in the achievement management page now filters by achievement category as well [#1907](https://github.com/DGP-Studio/Snap.Hutao/issues/1907)
- **[✨Optimization]** Adjusted the interface link for the CN server announcements [Scighost/Starward#1089](https://github.com/Scighost/Starward/issues/1089)

## 1.11.1

- **[🎉New]** Added a command to execute debug scripts in the right-click menu of the notification icon
- **[🎉New]** Added a command to restart in administrator mode in the right-click menu of the notification icon [#1825](https://github.com/DGP-Studio/Snap.Hutao/issues/1825)
- **[🔨Fix]** The update log window on the first launch after an update now correctly recognizes Snap Hutao's language [#1900](https://github.com/DGP-Studio/Snap.Hutao/issues/1900)
- **[🔨Fix]** Fixed the issue where the download and repair game functions in the game launcher could not be used properly
- **[🔨Fix]** Fixed the issue where the launcher background option did not work properly [#1908](https://github.com/DGP-Studio/Snap.Hutao/issues/1908)
- **[🔨Fix]** Fixed the issue where importing UIGF v4.0 files did not select the correct parts for import [#1941](https://github.com/DGP-Studio/Snap.Hutao/issues/1941)
- **[🔨Fix]** Fixed the issue where the dialog layout was incorrect when importing UIGF v4.0 files
- **[🔨Fix]** Fixed the issue where checking or unchecking achievements in the achievement management would deselect the achievement category if an achievement category was selected [#1946](https://github.com/DGP-Studio/Snap.Hutao/issues/1946)
- **[✨Optimization]** Now the HoYoLAB text will be hidden when hovering over the HoYoLAB user in the user panel [#1824](https://github.com/DGP-Studio/Snap.Hutao/issues/1824)
- **[✨Optimization]** The cultivation plan can now correctly recognize the talent and weapon breakthrough materials of Natash
- **[✨Optimization]** Adjusted the field of view for unlocking the frame rate
- **[✨Optimization]** Optimized the multi-threaded download logic when switching servers
- **[✨Optimization]** Optimized the UI of the pop-up window for the download and repair game functions in the game launcher

## 1.11.0

- **[🎉New]** Added long-term expedition point display on the Real-time Notes page [#1841](https://github.com/DGP-Studio/Snap.Hutao/issues/1841)
- **[🎉New]** **[BETA]** Added game download/repair/pre-download/update functionality to the game launcher
- **[🔨Fix]** Fixed the issue where can't logging in to MiYouShe via QR code, removed QR code login option, added phone verification code login method [#1819](https://github.com/DGP-Studio/Snap.Hutao/issues/1819)
- **[🔨Fix]** Fixed the issue where character skill levels displayed inconsistently in the My Character page list and grid view due to constellation bonuses [#1838](https://github.com/DGP-Studio/Snap.Hutao/issues/1838)
- **[🔨Fix]** Fixed the issue where switching to another page while the home page announcement was still loading would cause a crash [#1845](https://github.com/DGP-Studio/Snap.Hutao/issues/1845)
- **[🔨Fix]** Fixed the issue where reading local package version information failed when switching game servers would cause a crash [#1851](https://github.com/DGP-Studio/Snap.Hutao/issues/1851)
- **[🔨Fix]** Fixed the issue where obtaining wish records on the international server displayed "AuthKey Expired" [#1873](https://github.com/DGP-Studio/Snap.Hutao/issues/1873)
- **[🔨Fix]** Fixed the issue where navigating to My Character/Spiral Abyss pages without logging in to MiYouShe or HoYoLAB prevented further operations [#1877](https://github.com/DGP-Studio/Snap.Hutao/issues/1877)
- **[🔨Fix]** Fixed the issue where refreshing Real-time Notes on certain devices would cause a crash [#1893](https://github.com/DGP-Studio/Snap.Hutao/issues/1893)
- **[🔨Fix]** Fixed the issue where home page announcements were not displayed correctly and some text colors were rendered incorrect in dark mode
- **[🔨Fix]** Fixed the issue where the application background did not switch correctly
- **[✨Optimization]** Adjusted the display position of in-app notifications [#1832](https://github.com/DGP-Studio/Snap.Hutao/issues/1832)
- **[✨Optimization]** Optimized the in-app error messages for network requests
- **[✨Optimization]** Improved the experience of downloading updates, now you can choose a mirror for downloading
- **[✨Optimization]** Optimized the frame rate unlock feature, removed classic mode, added field of view modification/fog removal/compatibility mode in injection mode

## 1.10.7

- **[🎉New]** Added the feature to export selected character's information in text to the clipboard on the My Character page [#1497](https://github.com/DGP-Studio/Snap.Hutao/issues/1497)
- **[🎉New]** Added UIGF 4 import and export support in the settings page, removed UIGF 2 and UIGF 3 import and export support in Wish Export feature
- **[🔨Fix]** Fixed the issue where the view would not refresh when deleting a save file on the Wish Export page
- **[🔨Fix]** Fixed the issue where Real-time Notes auto-refresh was enabled by default
- **[🔨Fix]** Fixed the issue where the title would not display correctly when the webview width was too narrow
- **[🔨Fix]** Fixed the issue where HoYoLAB accounts could not add characters or weapons in Dev Plan [#1810](https://github.com/DGP-Studio/Snap.Hutao/issues/1810)
- **[🔨Fix]** Fixed the issue of failing to unlock the frame rate [#1820](https://github.com/DGP-Studio/Snap.Hutao/issues/1820)
- **[✨Optimization]** Optimized the navigation interaction of the main window, now navigate to other pages when the page is not fully loaded is disallowed, and the update log window will now be displayed on the first launch after the update
- **[✨Optimization]** Optimized the display of in-app notifications
- **[✨Optimization]** Optimized the process of adding items to the Dev Plan, now you can choose the save mode
- **[✨Optimization]** Optimized the information prompt for HTTP requests [#1720](https://github.com/DGP-Studio/Snap.Hutao/issues/1720)

## 1.10.6

- **[🔨Fix]** Fixed an issue where the application could not start due to user changing the game path manually [#1792](https://github.com/DGP-Studio/Snap.Hutao/issues/1792)
- **[🔨Fix]** Fixed an issue where the content of the page was not updated after refreshing the wish records [#1791](https://github.com/DGP-Studio/Snap.Hutao/issues/1791)
- **[🔨Fix]** Fixed a crash that occurred when the refreshed wish records differed from the current UID [#1794](https://github.com/DGP-Studio/Snap.Hutao/issues/1794)
- **[🔨Fix]** Fixed an issue where the web window size was incorrect on monitors with a scaling rate other than 100% [#1795](https://github.com/DGP-Studio/Snap.Hutao/issues/1795)
- **[🔨Fix]** Fixed a crash that occurred when binding the Real-time Notes UID on the game launcher page
- **[✨Optimization]** Adjusted the time display format for expedition dispatches in the Real-time Notes [#1796](https://github.com/DGP-Studio/Snap.Hutao/issues/1796)

## 1.10.5

- Added injection unlock mode, which can be tried when classic mode is ineffective
- WebView now displays in a separate window
- Fixed an issue where switching from OS server to CN server could cause game data abnormalities [#1750](https://github.com/DGP-Studio/Snap.Hutao/issues/1750)
- Fixed an issue where certain screen recording software could capture the wrong window [#1771](https://github.com/DGP-Studio/Snap.Hutao/issues/1771)
- Fixed an issue where adding a HoYoLAB account under specific conditions could cause the program to crash [#1774](https://github.com/DGP-Studio/Snap.Hutao/issues/1774)
- Fixed an issue where certain controls displayed incorrectly in dark mode [#1633](https://github.com/DGP-Studio/Snap.Hutao/issues/1633)
- Fixed an issue where importing achievements via URL protocol would not display the interface correctly [#1763](https://github.com/DGP-Studio/Snap.Hutao/issues/1763)
- Fixed an issue where skill icons would not display correctly in certain scenarios [#1784](https://github.com/DGP-Studio/Snap.Hutao/issues/1784)
- Fixed an issue where some event announcements had incorrect time
- Fixed alignment issues with multiple elements
- Optimized the display effect of some pages
- Refactored the underlying code
- Other QA issues

## 1.10.4

- **[🎉New]** Added previous data comparison in Spiral Abyss - Current Statistics/Character Data/Weapon Data section of Snap Hutao Database
- **[🎉New]** Added the ability to obtain backpack materials in Dev Plan [#1651](https://github.com/DGP-Studio/Snap.Hutao/issues/1651)
- **[🎉New]** Added right-click copy support to all images
- **[🎉New]** Added the functionality to display game character avatars in the user panel
- **[🔨Fix]** Fixed the issue where unlocking the frame rate would prevent game server conversion due to file occupation [#1703](https://github.com/DGP-Studio/Snap.Hutao/issues/1703)
- **[🔨Fix]** Fixed the issue where importing achievements from other programs using URL protocol would cause freezing when Snap Hutao is not running [#1704](https://github.com/DGP-Studio/Snap.Hutao/issues/1704)
- **[🔨Fix]** Fixed the issue where the actual refresh time of real-time notes was magnified by 60 times [#1710](https://github.com/DGP-Studio/Snap.Hutao/issues/1710)
- **[🔨Fix]** Boost the maximum resin notification threshold to 200 [#1711](https://github.com/DGP-Studio/Snap.Hutao/issues/1711)
- **[🔨Fix]** The background image of the launcher now uses the version without text [#1688](https://github.com/DGP-Studio/Snap.Hutao/issues/1688)
- **[🔨Fix]** Changed the logic of activation from the Windows notification center, fixing the issue where notifications could not be correctly redirected in administrator mode
- **[🔨Fix]** Fixed the issue where all materials or all backpack items would be rendered incorrectly on Dev Plan page in certain scenarios
- **[✨Optimization]** Improved the display effect of some controls
- **[✨Optimization]** Changed the activation/closing logic of windows, now they are directly closed instead of being hidden when already open
- **[✨Optimization]** Adjusted the UI for displaying package lists in the Launch Game - Game Resources section
- **[✨Optimization]** Weapon data page now uses in-game sorting
- **[✨Optimization]** Optimized punctuation and wording of some texts
- **[✨Optimization]** Other performance improvements and QA testing issue fixes

## 1.10.3

- **[🎉New]** The notification area icon now supports show the menu with a left click [#1656](https://github.com/DGP-Studio/Snap.Hutao/issues/1656)
- **[🔨Fix]** Fixed the issue where the frame rate unlock feature in the game launcher failed in version 4.7 of the game [#1675](https://github.com/DGP-Studio/Snap.Hutao/issues/1675)
- **[🔨Fix]** Fixed the issue where closing the main window on Windows 10 system would not correctly pop up the tray icon notification
- **[🔨Fix]** Fixed the issue where the tray icon location could not be correctly obtained on Windows 10 system, causing crashes
- **[🔨Fix]** Fixed the issue where the window would not be remembered when resized to smaller than the initial size [#1657](https://github.com/DGP-Studio/Snap.Hutao/issues/1657)
- **[🔨Fix]** Fixed the issue where application redirection failed in some scenarios
- **[🔨Fix]** Fixed the issue where the launch game window data expired in some scenarios
- **[🔨Fix]** Fixed the issue where all materials in the cultivation plan are highlighted on Sundays
- **[🔨Fix]** Fixed the issue where the guide window can be maximized
- **[🔨Fix]** Fixed the issue where the game screenshot folder cannot be opened when it does not exist
- **[🔨Fix]** Fixed the issue where the dev version and the official version use the same notification identifier, causing repeated activation <Badge text="Developer feature" type="tip" />
- **[✨Optimization]** Temporarily disabled the MiYouShe web login entry in the user panel
- **[✨Optimization]** Removed the jump list of the right-click menu of Snap Hutao icon in the taskbar and the start menu
- **[✨Optimization]** Optimized the style of in-app notifications [#1650](https://github.com/DGP-Studio/Snap.Hutao/issues/1650)
- **[✨Optimization]** Optimized the style of the character property panel in My Characters
- **[✨Optimization]** Optimized the style of real-time notes settings in Real-time Notes
- **[✨Optimization]** Optimized the brightness performance of the game announcement images on the homepage in dark mode
- **[✨Optimization]** Optimized the brightness performance of the pool images in the global wish statistics in the wish records in dark mode
- **[✨Optimization]** Optimized the display effect of some texts
- **[✨Optimization]** Optimized the loading speed of some pages
- **[✨Optimization]** Other performance improvements
- **[🌏Localization]** Added Vietnamese language support

## 1.10.2

- **[🎉New]** Introduced retry mechanism for static resource downloads
- **[🎉New]** Added Real-time Note feature to view Archon Quest progress [#1203](https://github.com/DGP-Studio/Snap.Hutao/issues/1203)
- **[🎉New]** Highlighted all relevant materials on Sunday in the Dev Plan [#1607](https://github.com/DGP-Studio/Snap.Hutao/issues/1607)
- **[🎉New]** Added option to display icon in system notification area (system tray)
  - Added notification area icon switch in settings
  - Application behavior changes when notification area icon is enabled
  - **[✨Optimization]** Application will not exit when all windows are closed; only exits when selected from the right-click menu of the system tray icon
  - **[✨Optimization]** Closing the window triggers a prompt if the icon is in the collapsed area
  - **[✨Optimization/Break Change]** Real-time Note timed refresh no longer triggers when not running in the background (refresh by Windows Scheduled Task is removed)
  - **[✨Optimization]** Real-time Note refresh switch/refresh time settings no longer require administrator mode
- **[🔨Fixed]** Fixed an issue where images might not load when switching to list view if the default view of character data/weapon data/monster data/achievement management interface was not list view
- **[🔨Fix]** Fixed an issue where occasional inability to exit the program normally was caused by checking system proxy settings
- **[🔨Fix]** Fixed an issue where the bag items did not switch accordingly when switching the growth plan [#1609](https://github.com/DGP-Studio/Snap.Hutao/issues/1609)
- **[🔨Fix]** Fixed an issue where modifying the completion status of a single achievement would incorrectly deselect the achievement category [#1631](https://github.com/DGP-Studio/Snap.Hutao/issues/1631)
- **[🔨Fixed]** Fixed an issue where the shortcut key settings would be obscured by the title bar when opening the auxiliary button panel near the title bar [#1632](https://github.com/DGP-Studio/Snap.Hutao/issues/1632)
- **[🔨Fixed]** Fixed an issue where the time range of some new announcements did not match correctly [#1613](https://github.com/DGP-Studio/Snap.Hutao/issues/1613)
- **[🔨Fixed]** Fixed an issue where the statistics tab on the wish record page would show the pool ratio of 0 draws as NaN [#1588](https://github.com/DGP-Studio/Snap.Hutao/issues/1588)
- **[✨Optimization]** Removed the task list from the right-click menu of the taskbar icon
- **[✨Optimization]** Added a second confirmation dialog for deleting a growth plan [#1608](https://github.com/DGP-Studio/Snap.Hutao/issues/1608)
- **[✨Optimization]** Added a prompt for HoYoLAB error code 2001 [#1542](https://github.com/DGP-Studio/Snap.Hutao/issues/1542)
- **[✨Optimization]** Added quality comparison tab to the quality selection page of the guide interface [#1595](https://github.com/DGP-Studio/Snap.Hutao/issues/1595)
- **[✨Optimization]** Disabled auto-click shortcut settings in non-administrator mode
- **[✨Optimization]** Other performance improvements
- **[🌏Localization]** Added French language support

## 1.10.1 <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed the game server conversion issue

## 1.10.0

- **[🎉New]** Added options for image quality, users can now choose a significant smaller size with nearly lossless image quality. [#1430](https://github.com/DGP-Studio/Snap.Hutao/issues/1430)
- **[🎉New]** Added display of not obtained items in the Character and Weapon tabs of the Wish Export. [#1355](https://github.com/DGP-Studio/Snap.Hutao/issues/1355)
- **[🎉New]** Added a new method to start the program in administrator mode by default. [#1558](https://github.com/DGP-Studio/Snap.Hutao/issues/1558)
- **[🎉New]** Added the option to display only unfinished achievement categories on the achievement record page. [#896](https://github.com/DGP-Studio/Snap.Hutao/issues/896)
- **[🔨Fix]** Fixed the issue where the hidden taskbar couldn't be displayed when maximizing the main window in Windows 10. [#1571](https://github.com/DGP-Studio/Snap.Hutao/issues/1571)
- **[🔨Fix]** Fixed the incorrect top card margin on the settings page.
- **[🔨Fix]** Fixed the issue where the game or program would crash when starting after hot-plugging a monitor.
- **[🔨Fix]** Fixed the issue where the Global Wish Statistics on the Wish Export page couldn't be viewed when there was no wish record.
- **[🔨Fix]** Fixed the issue where the cache image lookup pointed to the wrong path, which caused the need for repeated image resource downloads.
- **[🔨Fix]** Fixed the issue where the announcement start and end times were incorrect when the version was not yet updated.
- **[🔨Fix]** Fixed the issue where launching Hutao in Discord's update check could cause a crash.
- **[✨Optimization]** Improved the display effect of the floating window before and after clicking the show button in the password input box. [#1485](https://github.com/DGP-Studio/Snap.Hutao/issues/1485)
- **[✨Optimization]** The software update process now starts only after user confirmation, no longer starting by default. [#1297](https://github.com/DGP-Studio/Snap.Hutao/issues/1297)
- **[✨Optimization]** When users are not logged in to Hutao Cloud, they will be prompted with a pop-up before uploading Abyss records to avoid missing the opportunity to claim rewards. [#1245](https://github.com/DGP-Studio/Snap.Hutao/issues/1245)
- **[✨Optimization]** Optimized the game launch feature, it will now attempt to generate the configuration file automatically when it can't be found, and also provides a manual generation function.
- **[✨Optimization]** Updated Windows App SDK to 1.5.2.
- **[✨Optimization]** Optimized overall memory usage of the program.
- **[✨Optimization]** Now clearing the cache folder when resetting image resources.
- **[✨Optimization]** Optimized the creation of shortcuts to start in administrator mode, now even if pinned to the taskbar, it can be used normally.
- **[✨Optimization]** Optimized the login pop-up for Hutao Passport, now viewing the password in plain text does not cause the dialog width to change repeatedly.
- **[✨Optimization]** Other significant underlying refactoring.

## 1.9.9

- Add ➕
  - Added Chronicled Wish in Global Wish Stats tab under Wish Export page
- Fix 🔨
  - Fixed the interact launch error with Better Genshin Impact [#1467](https://github.com/DGP-Studio/Snap.Hutao/issues/1467)
  - Fixed the full package name error in Advanced Game Launcher - Resource Download page [#1476](https://github.com/DGP-Studio/Snap.Hutao/issues/1476)
  - Fixed the issue that game would be launched when failed to unlock frame rate limit [#1495](https://github.com/DGP-Studio/Snap.Hutao/issues/1495)
  - Updated outdated links in Settings page [#1503](https://github.com/DGP-Studio/Snap.Hutao/issues/1503)
  - Fixed the crash issue when adding accounts; fixed sporadic issue that selected users and characters could not be cleared correctly; optimized the UI display after logging in. [#1504](https://github.com/DGP-Studio/Snap.Hutao/issues/1504)
- Optimization ✨
  - Optimized keyword searching UI in WIKI pages [#1475](https://github.com/DGP-Studio/Snap.Hutao/pull/1475)
  - Optimized UI in WIKI page when search result is empty [#1479](https://github.com/DGP-Studio/Snap.Hutao/pull/1479)
  - Optimized collected item display in Dev Plan [#1513](https://github.com/DGP-Studio/Snap.Hutao/pull/1513)
  - Optimized the smoothness and stability of the waterfall layout in the Dev Plan page
  - Optimized the default sorting of backpack materials and material stats tabs on the Dev Plan page, and now displays completion markers for items with sufficient quantities [#1510](https://github.com/DGP-Studio/Snap.Hutao/pull/1510)
  - Optimized the alignment of the scroll bar at the bottom of the Statistics tab on the Wish Export page
  - Optimized the logic of displaying items in the Global Wish Stats tab on the Wish Export page
  - Optimized the smoothness and stability of the grid view on the Achievement Management page
  - Added security hint in Web Login page

## 1.9.8

- New ➕
  - Added support for Chronicled Wish [#1470](https://github.com/DGP-Studio/Snap.Hutao/issues/1470)
  - Added support for UIGF v3.0 wish data format
  - Added dark/light mode setting option in the settings page [#1434](https://github.com/DGP-Studio/Snap.Hutao/issues/1434)
- Fix 🔨
  - Fixed the card display issue under some particular Windows display settings values [#1429](https://github.com/DGP-Studio/Snap.Hutao/issues/1429)
  - Fixed the issue that network issue may cause client conversion between CN server and oversea server failed [#1433](https://github.com/DGP-Studio/Snap.Hutao/issues/1433)
  - Fixed the wrong OTA package name and link in downloadable resource page in Advanced Game Launcher
- Optimization ✨
  - The WIKI search/filtering feature has been greatly enhanced, users will now get prompts when typing [#1120](https://github.com/DGP-Studio/Snap.Hutao/issues/1120)
  - Optimized the text in some InterProcess features in Advanced Game Launcher [#1432](https://github.com/DGP-Studio/Snap.Hutao/issues/1432)
  - Optimized the display UI of Wanderlust Invocation in Wish Export page [#1460](https://github.com/DGP-Studio/Snap.Hutao/issues/1460)
  - Optimized the time range text when the wish data is empty [#1443](https://github.com/DGP-Studio/Snap.Hutao/issues/1443)
  - Re-enabled the background material in main window
  - Background image will now be refreshed immediately after changing the background image source setting
  - Optimized the Teams UI in Spiral Abyss page

## 1.9.7

- New ➕
  - Added [Better Genshin Impact](https://bgi.huiyadan.com/) joint start up option in the advanced launcher, users now can start Genshin Impact and BGI together in Snap Hutao [#1388](https://github.com/DGP-Studio/Snap.Hutao/issues/1388)
  - Added multiple client background wallpaper sources, including:
    - No wallpaper (default)
    - Random images in local background folder
    - Bing daily wallpaper
    - Hutao daily wallpaper
    - Genshin Impact official launcher background
- Fix 🔨
  - Fixed the issue that when Discord is running with administrator privilege and Snap Hutao is running in normal privilege, Snap Hutao will crash [#1400](https://github.com/DGP-Studio/Snap.Hutao/issues/1400)
  - Fixed the issue that reorder game account in Advanced Launcher with administrator privilege would cause the clint to crash [#1379](https://github.com/DGP-Studio/Snap.Hutao/issues/1379)
  - Fixed the issue that scroll down the in-game announcement in Dashboard would cause the announcement disappear [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
  - Fixed some human unreadable text in character WIKI, again [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - Fixed the issue that searching result in Feedback Center was not HTML decoded [#1391](https://github.com/DGP-Studio/Snap.Hutao/issues/1391)
- Optimization ✨
  - Added two 4K resolution options in Advanced Launcher [#1375](https://github.com/DGP-Studio/Snap.Hutao/issues/1375)
  - Client will now memorize selected character in each account in MiHoYo BBS account panel [#1233](https://github.com/DGP-Studio/Snap.Hutao/issues/1233)

## 1.9.6

- New ➕
  - Added customized background image feature, users now can open background image folder and add images they like [#357](https://github.com/DGP-Studio/Snap.Hutao/issues/357)
  - Added responsive settings page, layout will be updated while window size and shape changes, [@Scighost](https://github.com/Scighost) realized this feature [#1337](https://github.com/DGP-Studio/Snap.Hutao/issues/1337)
  - Added container loopback status and unlocker feature in Feedback Center
  - Added displaying current network proxy status feature in Feedback Center
- Fix 🔨
  - Fixed `653366069` error when submit Spiral Abyss data [#1351](https://github.com/DGP-Studio/Snap.Hutao/issues/1351)
  - Fixed `653366069` error when sync character from MiHoYo BBS Battle Chronicle and Development Plan sources
  - Adapt new Asia server UID rule
  - Fixed the issue that font size in game announcements is too small [#1347](https://github.com/DGP-Studio/Snap.Hutao/issues/1347)
  - Fixed MiYouShe QR code login issue, now ZZZ login page is used to handle QR code login method [#1345](https://github.com/DGP-Studio/Snap.Hutao/issues/1345)
  - Replace unreadable text in character voice/story with normal text in Character WIKI [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - Fixed the display issue in Home Dashboard when Parametric Transformer is not achieved [#1331](https://github.com/DGP-Studio/Snap.Hutao/issues/1331)
  - Fixed the issue that in some cases, swap Home Dashboard to bottom side would cause the client to crash [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
- Optimization ✨
  - User's MiHoYo BBS accounts in Account Panel can be dragged and reordered now, to allow users to have a better operation experience [#1334](https://github.com/DGP-Studio/Snap.Hutao/issues/1334)
  - Game account records in Game Launcher can be dragged and reordered now, to allow users to have a better operation experience
  - Optimized title text in Wish Export (`Statistics` is renamed to `Global Wish Stats`) [#1344](https://github.com/DGP-Studio/Snap.Hutao/issues/1344)
  - Optimized text under Resource Download page in Game Launcher (`Client` is renamed to `Full Package`) [#1279](https://github.com/DGP-Studio/Snap.Hutao/issues/1279)
  - Optimized image download error hint in wizard [#1333](https://github.com/DGP-Studio/Snap.Hutao/issues/1333)
  - Update Spiral Abyss wave information text of Genshin Impact version 4.4
  - Added permission error hint in Realtime Notes notification settings
  - Limit active thread count when downloading client update package
  - Added two new resolutions in Game Resolution Quick Settings
  - Allow developers using NamedPipe to activate the application <Badge text="Developers Feature" type="tip" />
  - Make Windows App SDK embedded
  - Optimized Win32/COM API calls
  - Redesigned client UI to fit background images
- Localization 🌏
  - Portuguese (PT-BR) is now a new client language, thanks to contribution from [@t0piy](https://github.com/t0piy)

## 1.9.5

- New ➕
  - Added monitor identification button in game launcher [#1261](https://github.com/DGP-Studio/Snap.Hutao/issues/1261)
  - Brand new Feedback Center is introduced [#1039](https://github.com/DGP-Studio/Snap.Hutao/issues/1039)
- Fix 🔨
  - Fixed the issue that when the game in under `Program Files` path, `server conversion failed` error would be raised [#1262](https://github.com/DGP-Studio/Snap.Hutao/issues/1262)
  - Fixed the issue that static packages download cannot be completed in the setup wizard [#1242](https://github.com/DGP-Studio/Snap.Hutao/issues/1242)
- Optimization ✨
  - Added support of changing proxy settings during Snap Hutao is running
  - Added game status in Game Launcher Card in the dashboard
  - Added data folder size auto refresh after server conversion cache is deleted
  - Optimized the logic to identify whether server conversion is needed when game launch process is requested
  - Optimized the English translation

## 1.9.4 <Badge text="hotfix" type="warning" />

- Fix 🔨
  - Fixed the crash issue for Bilibili server users when entering the main window

## 1.9.3

- Fix 🔨
  - Fixed the crash issue for new users when entering the main window

## 1.9.2

- New ➕
  - Added Windows native HDR option in Game Launcher
  - Added support of HoYoverse accounts in Game Launcher account switch feature
  - Added option of deleting server conversion cache file in Settings page
  - Added restart as admin option in Settings page
  - Added the function of sharing pictures to the clipboard in WebView
- Fix 🔨
  - Fixed the issue that some MiHoYo BBS pages operations cannot be done in Webview
  - Added conspicuous mark of Admin Mode on windows title to indicate whether if Snap Hutao is running as administrator
  - Fixed game path error after server conversion
  - Fixed the document link on Spiral Abyss page
- Optimization ✨
  - Added account identification field in Real-time Note data forwarding webhook
  - All options in Danger Zone on Settings page now have double confirmations
  - Change to way of game account switch from PowerShell of directly modify regedit to avoid error when Windows Long Path is not enabled
  - Optimized UI of auto-click feature shortcut settings card
  - Added checks for special paths such as Program Files during server conversion
  - Optimized the scrolling performance of WebView on some pages
  - Optimized the performance of Discord Activity

## 1.9.1 <Badge text="hotfix" type="warning" />

- **Fix 🔨**
  - Fixed crash on Game Launcher page when user text zoom is not set as 100%
  - Fixed crash caused by Realtime Notes during the program startup
  - Fixed the issue where Realtime Notes may be loaded simultaneously with user account information, result in reentrancy
- **Optimizations ✨**
  - Enhanced prompt to add or select game path in Game Launcher

## 1.9.0

::: important Breaking Changes

Snap Hutao recently obtained sponsorship from the SignPath Foundation for code signing certificates. Starting from version 1.9.0, we will use a brand-new certificate to sign Snap Hutao installation packages.

Programs with the new signature will be incompatible with old versions. Users updating from versions 1.8.4 and older to 1.9.0 and newer versions need to uninstall the old version first and then perform a fresh installation of the new version of the client. Due to the design of Snap Hutao's data directory, users will not lose any important data.

You can read the article [Explanation of Breaking Changes in Version 1.9.0](../blog/version-1-9-0-breaking-changes.md) for a deeper understanding of how the signature changes in this version update affect the Snap Hutao project.

:::

- **New Features ➕**
  - The game launcher now supports multiple game paths [#525](https://github.com/DGP-Studio/Snap.Hutao/issues/526)
  - Added QR code login method for miHoYo in the user panel [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
  - The client now automatically detects network status and displays the results in the settings page [#1116](https://github.com/DGP-Studio/Snap.Hutao/pull/1161)
  - Added an option in the game launcher to start Genshin Impact in touch mode [#1173](https://github.com/DGP-Studio/Snap.Hutao/issues/1173)
  - Add option to change in-game announcement source in the settings page, now you may select oversea severs as the source and display announcements with same lanague of your Snap Hutao [#1112](https://github.com/DGP-Studio/Snap.Hutao/issues/1112)
    - Only available when there is valid regular expression in Crowdin translation (Simplified Chinese, Traditional Chinese and English are supported now)
  - Added an option in the settings to enable the console. Users can now get more error prompts when troubleshooting by enabling this option.
  - Introduced a completely new logic for software updates.
- **Bug Fixes 🔨**

  - Fixed an issue with miHoYo API returning a `5003` error when fetching character information [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - Fixed the issue that Game Launcher cannot unlock framerate limit in Genshin Impact 4.3 version [#1190](https://github.com/DGP-Studio/Snap.Hutao/issues/1190)
  - Fixed an issue with incorrect countdown data for miHoYo announcements in specific situations.
  - Fixed incorrect PowerShell statements.

- **Optimizations ✨**

  - Improved error prompt statements in development calculations, making error messages more explicit [#1163](https://github.com/DGP-Studio/Snap.Hutao/issues/1163)
  - Optimized the interface of development calculations, now showing specific goals for each item [#1016](https://github.com/DGP-Studio/Snap.Hutao/issues/1016)
  - Optimized the display of Hutao account information on the main interface, no longer displaying user email addresses [#1160](https://github.com/DGP-Studio/Snap.Hutao/issues/1160)
  - Updated error prompts for Hutao API.
  - Optimized the settings page interface; users can now view the size of data and cache directories generated by Snap Hutao in the settings.
  - Removed Microsoft Store buttons

- **Localization 🌏**
  - Added Indonesian language option in the client, thanks to contribution by [@NatsumeAoii](https://github.com/NatsumeAoii) [#1188](https://github.com/DGP-Studio/Snap.Hutao/issues/1188)
  - Added Russian language option in the client, thanks to contribution by [@QweRezOn](https://github.com/QweRezOn)
  - Improved client localization string character coverage [#1198](https://github.com/DGP-Studio/Snap.Hutao/issues/1198)
  - Updated translations for existing languages.

## 1.8.5 <Badge text="Beta Test" type="info" />

- Tested changes caused by certificate change

## 1.8.4 <Badge text="latest" type="tip" />

- Fix
  - Fixed the issue that daily-checkin shows activity end
  - Fixed the issue that `pwsh.exe` cannot be selected as PowerShell host [#1145](https://github.com/DGP-Studio/Snap.Hutao/issues/1145) [#1153](https://github.com/DGP-Studio/Snap.Hutao/issues/1153)
  - Fixed display language error when Snap Hutao being pulled up by third-party software [#1147](https://github.com/DGP-Studio/Snap.Hutao/issues/1147)
  - Fixed PowerShell not found error on desktop shortcut [#1151](https://github.com/DGP-Studio/Snap.Hutao/issues/1151) [#1154](https://github.com/DGP-Studio/Snap.Hutao/issues/1154)
- Optimization
  - Updated Snap Hutao Cloud prompts text
  - Optimized Discord Activity tracking performance at the beginning and the end of game
  - Optimized resize performance on Character WIKI/Weapon WIKI/My Character pages
  - Optimized performance of server conversion, multi-thread downloading on multipart content is now enabled
  - Optimized server conversion logic, Snap Hutao will not check folder writing permission before the task

## 1.8.3 <Badge text="hotfix" type="tip" />

- Fix
  - Fixed the crash issue when Discord client is not running [#1134](https://github.com/DGP-Studio/Snap.Hutao/issues/1134)
  - Fixed wrong wish record time [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- Optimization
  - Includes .NET environment with the package

## 1.8.1

- Add
  - Added Discord Activity synchronization functions in _Game Launcher_, it syncs game status when playing Genshin Impact [#1082](https://github.com/DGP-Studio/Snap.Hutao/issues/1082)
- Fix
  - Fixed the issue where navigating from _Wish Export_ page _Hutao Cloud_ panel to _Spiral Abyss_ page would not synchronize the navigation bar options [#1116](https://github.com/DGP-Studio/Snap.Hutao/issues/1116)
  - Fixed the issue that _Auto Click_ feature cannot bind with `Alt` key [#1119](https://github.com/DGP-Studio/Snap.Hutao/issues/1119)
  - Fixed item refresh issue after switching plans in _Dev Plan_ [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - Fixed issue that only blank name json file can be imported in `Achievement` page [#1124](https://github.com/DGP-Studio/Snap.Hutao/issues/1124)
  - Fixed full package download link under _Resource Download_ page in _Game Launcher_, it is replaced with split files link [#1126](https://github.com/DGP-Studio/Snap.Hutao/issues/1126)
  - Fixed the notification issues from _Realtime Note_, includes wrong content, repeated notifications and unexpectedly bypass client mode [#1123](https://github.com/DGP-Studio/Snap.Hutao/issues/1123)
- Optimization
  - Added overtime refresh rules for Fingerprint/CookieToken, users don't need to click `Refresh Cookie` in _User Panel_ so often [#1121](https://github.com/DGP-Studio/Snap.Hutao/issues/1121)
  - Remake _Character WIKI_ page UI
  - Added hint text when there is no signed in MiHoYo BBS account [#1127](https://github.com/DGP-Studio/Snap.Hutao/issues/1127)

## 1.8.0

- **Upgraded .NET version to 8** [#1103](https://github.com/DGP-Studio/Snap.Hutao/issues/1103)
- Fixes
  - Fixed translation issues with _Hutao Passport_ registration/logoff/reset password prompts [#1087](https://github.com/DGP-Studio/Snap.Hutao/issues/1087) by @Tangweirui2021
  - Fixed an issue with the first-row items on the _Dev Plan_ page not refreshing correctly after switching plans [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - Fixed an issue on the _Game Launcher_ page where borderless and exclusive fullscreen could not be set simultaneously [#1106](https://github.com/DGP-Studio/Snap.Hutao/issues/1106)
  - Replaced the file pickers implementation, resolving the problem of being unable to use the file pickers under administrator privilege [#1096](https://github.com/DGP-Studio/Snap.Hutao/issues/1096)
  - Fixed an issue where initializing user information at startup could lead to program freezing
  - Fixed unnecessary exceptions occurring on certain pages after being switched from
  - Fixed issues with some exceptions not being captured properly
- Optimization
  - Added more detailed failure information for metadata initialization

## 1.7.17

- Fix
  - Fixed the issue that the first item in Dev Plan won't be refresh after switching the plan [#1079](https://github.com/DGP-Studio/Snap.Hutao/issues/1079)
  - Fixed the issue that wish record URL for global server cannot be found [#1081](https://github.com/DGP-Studio/Snap.Hutao/issues/1081)
  - Fixed the issue that error log cannot be captured correctly in some specific situations
  - Fixed wrong wish record time issue
  - Fixed the data exception in MiHoYo BBS web pop-ups
  - Fixed the issue of wrong corner radius settings of mask of history/character/weapon page in Wish History
  - Fixed the wrong announcement time in time zone other than UTC+8
- Optimization
  - Optimized the UI of MiHoYo BBS web pop-ups, supports backward and refresh feature, supports showing the web title
  - Auto click feature now can be switched off and hot key can be changed [#961](https://github.com/DGP-Studio/Snap.Hutao/issues/961)
  - Added support of UIGF v2.4 format import and export
    - Added time zone inference based on account's server [#830](https://github.com/DGP-Studio/Snap.Hutao/issues/830)

## 1.7.16

- Add
  - Add screen resolution quick switch dropdown in Game Launcher [#1062](https://github.com/DGP-Studio/Snap.Hutao/issues/1062)
  - Add support to allow user to cooperate [Starward](https://github.com/Scighost/Starward) with Snap Hutao to collect game play time stats [#1071](https://github.com/DGP-Studio/Snap.Hutao/issues/1071)
  - Add resource download link copy option in Game Launcher [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
- Fix
  - Fixed issue that MiHoYo BBS returns `5003` error when fetching data [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - Fixed issue that page cannot be scrolled in some particular situations [#1068](https://github.com/DGP-Studio/Snap.Hutao/issues/1068) [#1072](https://github.com/DGP-Studio/Snap.Hutao/issues/1072)
  - Fixed issue that characters' skill levels are not shown in My Character [#1069](https://github.com/DGP-Studio/Snap.Hutao/issues/1069)
- Optimization
  - Optimized update log display logic [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
  - User's setting selection on each button will be memorized in global scope [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
  - Improved client stability

## 1.7.15

- Add
  - Added option to recover full wish history record backup from Snap Hutao Cloud service into new archive [#886](https://github.com/DGP-Studio/Snap.Hutao/issues/886)
- Fix
  - Fixed issue that invalid game launching parameter can be parsed; added switch for some launch parameters [#1061](https://github.com/DGP-Studio/Snap.Hutao/issues/1052)
  - Fixed issue that user cannot register Snap Hutao account in the client [#1059](https://github.com/DGP-Studio/Snap.Hutao/issues/1059)
  - Fixed notification issue after Realtime Note Webhook Url is set
- Optimization
  - Optimized Snap Hutao account's change password and delete account logic in the client

## 1.7.14 <Badge text="hotfix" type="tip" />

- Fixed an issue causes the program to crash when opening some specific dialog boxes [#1052](https://github.com/DGP-Studio/Snap.Hutao/issues/1052) [#1054](https://github.com/DGP-Studio/Snap.Hutao/issues/1054)

## 1.7.13

- Add
  - Added option to forward Realtime Note data to specified webhook [#431](https://github.com/DGP-Studio/Snap.Hutao/issues/431)
  - Added date range of wish history records [#899](https://github.com/DGP-Studio/Snap.Hutao/issues/899)
  - Added detail view of Adventure Encounter Points in Realtime Note, support view of current Adventure Encounter Points status [#1021](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
- Fix
  - Fixed `Argument error` when using quick launcher from task bar in some conditions [#925](https://github.com/DGP-Studio/Snap.Hutao/issues/925)
  - Fixed crash issue when using advanced launcher in some conditions [#1035](https://github.com/DGP-Studio/Snap.Hutao/issues/1035)
  - Fixed issue that cannot go back on embedded MiHoYo BBS browser [#1023](https://github.com/DGP-Studio/Snap.Hutao/issues/1023)
  - Fixed issue on converting server from bilibili server to global server [#1041](https://github.com/DGP-Studio/Snap.Hutao/issues/1041)
  - Fixed issue that Snap Hutao cannot identify game client status
  - Fixed issue on Snap Hutao Cloud status on wish export page, after switching Snap Hutao account [#903](https://github.com/DGP-Studio/Snap.Hutao/issues/903)
- Optimization
  - Added localization support on prompts that returned by Snap Hutao Cloud server
  - Redesigned Snap Hutao Passport UI, and now it is embedded in settings page [#911](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
  - Redesigned advanced game launcher page UI
  - User now can view and select launcher parameters in advanced game launcher

## 1.7.11 <Badge text="hotfix" type="tip" />

- Fixed the game launching arguments error (hotfix)

## 1.7.10

- Fix
  - Fixed login issue with HoYoverse account [#1011](https://github.com/DGP-Studio/Snap.Hutao/issues/1011) [#1012](https://github.com/DGP-Studio/Snap.Hutao/issues/1012)
  - Fixed daily check-in issue on HoYoLAB account [#1013](https://github.com/DGP-Studio/Snap.Hutao/issues/1013)
  - Fixed issue that `Invalid item` error show up when language does not match in UIGFv2.2 data file [#1001](https://github.com/DGP-Studio/Snap.Hutao/issues/1001)
  - Fixed crash issue when an invalid CAPTCHA Url is input in the setting
  - Fixed crash issue when an invalid channel setting is given when launching the game
  - Fixed crash when switching account while WebView2 Runtime version is too low to have necessary feature
  - Fixed crash issue when an invalid record is displayed in Spiral Abyss page
  - Fixed a memory overflow issue in embedded pages
- Optimization
  - Current game account now can be automatically identified when reaching the game launcher page

## 1.7.9

- Fix
  - Fixed an issue that prevented the program from launching with the correct window size after the monitor
    resolution was changed after exiting the program
  - Fixed login issue of MiHoYo BBS [#1005](https://github.com/DGP-Studio/Snap.Hutao/issues/1005)
  - Fixed HoYoverse login issue [#1007](https://github.com/DGP-Studio/Snap.Hutao/issues/1007)
  - Fixed crash log upload issue in version 1.7.7
  - Fixed UI display issue on Team Lineup page in Spiral Abyss feature [#1008](https://github.com/DGP-Studio/Snap.Hutao/issues/1008)

## 1.7.7

- Added card shadow in the following elements to optimize visual effect
  - Dashboard and in-game announcements
  - Download resource card in advanced game launcher page
  - Overview card in wish export page
  - Statistics card in wish export page
  - Real-time note card
  - List view in my character page
  - Image card in character WIKI
  - Image card in weapon WIKI
- Fix
  - Fixed top margin error under grid view
  - Fixed grid view crash issues from multiple causes
  - Fixed server conversion issue from CN server to Bilibili server
- Optimize
  - Optimize button position for manual account validation
    - You can now find it directly from account panel
  - Added retry logic for fetching abyss record and record upload
    - User who does not set up CAPTURE verification API can retry after manually validating account from account panel

## ## 1.7.6

- Add
  - Added mouse auto click feature triggered by F8, under Administrator privilege mode
    - In the upcoming Genshin Impact 4.1 and 4.2 version, this feature may help you skip some task conversation you dislike
- Fix
  - Fixed crash issue when switching account after validating cookie on Realtime Notes page [#947](https://github.com/DGP-Studio/Snap.Hutao/issues/947)
  - Fixed failure of matching current in-game account after rebooting Snap Hutao and game client [#865](https://github.com/DGP-Studio/Snap.Hutao/issues/865)
  - Fixed display issue on Achievement page [#956](https://github.com/DGP-Studio/Snap.Hutao/issues/956)
  - Fixed an issue that Genshin Impact 4.1 version metadata will cause program to crash on Spiral Abyss page
- Optimize
  - Optimized some user interface details on some pages
  - Optimized announcement text color in some particular situation
  - Optimized download logic of downloading static images

## 1.7.5 <Badge text="latest" type="tip" />

- Add
  - Added version number for each achievement
  - Added monster waves data in Abyss Data page (data provided by [@妮可少女](https://space.bilibili.com/3537104994831140))
  - Added Microsoft Store rating button on settings page [#876](https://github.com/DGP-Studio/Snap.Hutao/issues/876)
  - Added a document button above user panel, user will be redirected to current page's document when click on it [#875](https://github.com/DGP-Studio/Snap.Hutao/issues/875)
- Fix
  - Fixed game launcher card on dashboard showing empty account issue [#924](https://github.com/DGP-Studio/Snap.Hutao/issues/924)
  - Fixed achievement status cannot be saved when be manually unchecked [#880](https://github.com/DGP-Studio/Snap.Hutao/issues/880)
  - Fixed issue that Realtime Note verification on wrong MiHoYo BBS account
  - Fixed issue that sometime spiral abyss statistics data are missing
- Optimizations
  - Optimized some error messages, added solution hints [#930](https://github.com/DGP-Studio/Snap.Hutao/issues/930)
  - Snap Hutao Announcements content on dashboard now is copyable [#929](https://github.com/DGP-Studio/Snap.Hutao/issues/929)
  - **Abyss Stats page is now merged into Abyss Records page**
  - Optimized time format in multiple places

## 1.7.4 <Badge text="latest" type="tip" />

- Add
  - Added option to change PowerShell entry in settings page
  - Added option to create desktop shortcut in settings page [#912](https://github.com/DGP-Studio/Snap.Hutao/issues/912)
  - Added option to switch display of cards on home dashboard
  - Added batch-add to Dev Plan option on My Character page
- Fix
  - Fixed an issue which event start time is not accurate on Home Dashboard [#887](https://github.com/DGP-Studio/Snap.Hutao/issues/887)
  - Fixed an issue on My Character page that caused crashes when clicking on weapon that is not synchronized by Enka API [#904](https://github.com/DGP-Studio/Snap.Hutao/issues/904)
  - Fixed an issue of weapon value display error on My Character page [#907](https://github.com/DGP-Studio/Snap.Hutao/issues/907)
  - Fixed an issue where Bilibili server cannot be converted to some other servers [#893](https://github.com/DGP-Studio/Snap.Hutao/issues/893)
  - Fixed an issue where fetching Novice Wish history will cause the program to crash [#917](https://github.com/DGP-Studio/Snap.Hutao/issues/917)
  - Fixed an issue where a Dev Plan was not pre-selected before entering the Dev Plan page, which had caused the
    Dev Plan page to need to be entered at least once to add a Dev Plan archive
  - Fixed the issue that failed to claim checkin reward when triggered anti-bot verification, even when anti-bot API returns success result
- Optimize
  - Optimized monsters' display order on Monster WIKI page
  - Optimized launch speed of Wish History page
  - Optimized local database thread on UI display functions
  - Optimized the scrolling experience for some views of Dev Plan, it may now take longer for views to be loaded

## 1.7.3

- Fixed the issue of HoYoverse web login not working
- Upgraded the Windows App SDK version to fix the issue where the top of the title bar could not resize the window
- Adjusted the prompt for UIGF v2.2 file import failures, now allowing for faster issue identification based on IDs
- Fixed the issue where the user panel would display a successful claim of login rewards even if it failed
- Fixed the problem where launching the game from the taskbar would open both the game window and the main program window simultaneously

## 1.7.2

- Wish Export
  - Fixed an issue where full refresh was not working correctly.
  - Fixed an issue where no-error UIGF files were not being imported correctly
  - Fixed an issue where Hutao Cloud records were not being retrieved correctly
  - Adjusted the UI of the Hutao Cloud window to display the number of wishes corresponding to the UID archive
- My Characters
  - Adjusted the UI to make it more compact
- Adjusted the UI of the homepage notifications to align them with the right edge

## 1.7.0

- Add a startup guide to help user familiarize Snap Hutao on start launch
  - Guiding users to select a language
  - Guiding users to confirm terms of service
  - Guiding users to install Segoe Fluent Icons font and WebView2 Runtime
  - Guiding users to download static assets
- Main Interface
  - Adjusted icon styles in the navigation bar
  - Fixed a bug where adjusting window size could lead to unexpected crashes
- User Panel
  - Adjusted styles of the user panel
  - Added a button to allow the current user to claim sign-in rewards
  - Fixed an issue where in some cases, the current user and character could not be selected correctly on startup
- Home Dashboard
  - Added Snap Hutao announcement
  - Real-Time Note now display refresh time for each card
  - Fixed an issue where Real-Time Note card fail to load correctly, leading program to freezing or crashing
  - Corrected start/end times for certain event announcements
  - Fixed an issue where some paragraphs were not displaying correctly when viewing details of certain announcements
- Game Launch (Advanced Launcher)
  - Added game status indicator text to the command bar
  - Fixed an issue where server switch function was not working
  - Adjusted server switch function logic to allow retries after resource download failure
  - Adjusted unlocked frame rate logic; game process will automatically end if unlocking fails
  - Removed multi-client
  - Fixed an issue in resource download page where game client had no names and couldn't be downloaded
- Wish History
  - Adjusted card style on the overview page, making items larger and collapsing multiple text items
  - Fixed an issue where entering the wish history page without logging in or without Snap Hutao Cloud service caused errors
  - Fixed progress bar and color display issues in the card list view on the overview page
  - Fixed incorrect text for Snap Hutao Cloud's upload reward
  - Fixed the issue that UIGF formatted data file with incorrect item ID can be imported
  - Fixed the issue that failed to locate game cache directory
  - Optimized page load speed when there is a large amount of items
- Achievement
  - Fixed a display issue that occurs after selecting achievement categories in list/grid view and switching to the other view type
  - Optimized page load speed
- Real-Time Notes
  - Adjusted the style of the `Verify Current User and Role` button
  - Adjusted the style of the notification settings view
  - Added an option to disable auto-refresh for real-time notes (toggle available only in non-administrator mode; users who have previously accessed the real-time notes page in administrator mode might not be able to toggle this option)
  - Adjusted the style of real-time notes
  - Adjusted text prompts for locked Serenitea Pot and unowned Parametric Transformations
  - Added previous refresh time for each Real-time note cards
- My Characters
  - Adjusted width of character list when using list view
  - Added a button to toggle display of refresh time in command bar
  - Added previous refresh time for each refresh function
  - Added display of times artifacts were enhanced in character details
- Dev Plan
  - Fixed issue failure of saving active archive when switching page from dev plan to others
- Character WIKI
  - Fixed a display issue that occurs after selecting character in list/grid view and switching to the other view type
- Weapon WIKI
  - Fixed a display issue that occurs after selecting weapon in list/grid view and switching to the other view type
  - Added ascension material section for each weapon
- Monster WIKI
  - Fixed a display issue that occurs after selecting monster in list/grid view and switching to the other view type
- Settings
  - Fixed issue that unable to clear game cache directory
  - Added configuration field for Geetest CAPTCHA verification API, correct configuration on this field can handle anti-bot verification from MiYouShe
- Improved program frame rate performance
- Optimized memory usage for multi-thread scheduling
- Optimized loading speed of item image assets
- Adjusted database read/write methods to optimize memory usage and responsiveness
- Adjusted text prompts for return codes `-100` and `-10001` to help users better understand their meanings
- Other minor changes

## 1.6.6

- New
  - Snap Hutao Cloud tab will show expiration time and developer's license on the wish history page now
  - Wish statistics are now available on the wish history page, with data supported by Snap Hutao Cloud
- Fix
  - Fix failure of web cache refresh method for wish history export
  - Fix Traditional Chinese metadata loading error

## 1.6.5

- New
  - Japanese is now a new language option;
    community members can contribute Japanese language on [translate.hut.ao](https://translate.hut.ao/)
- Fix
  - Issue that cannot add weapons to dev plan [Issue #745](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
  - Issue on some users failed to unlock frame rate limit under certain environment
    [Issue #747](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
- Optimize
  - Refine dashboard UI
  - Introducing Metadata v2
  - Sorting order of materials in dev plan [Issue #749](https://github.com/DGP-Studio/Snap.Hutao/issues/749)

## 1.6.4

- New
  - Export wish history data with [UIGF v2.3](https://uigf.org/zh/standards/UIGF.html) data format
- Fix
  - FPS unlocker [Issue #733](https://github.com/DGP-Studio/Snap.Hutao/issues/733)
- Optimize
  - When running program without administrator privilege, features require administrator privilege will have text hints
  - Support of HoYoLAB
  - Localization updates

## 1.6.3

- New
  - Home dashboard, including Hutao Cloud account, game launcher, wish history, achievement stat and real-time notes
  - Enable notification box will now automatically hide in-app notification
  - CN server option without TapTap account
- Fix
  - Issue that user cannot get Hutao Cloud bonus after uploading Abyss record
  - Issue that cannot sign in to HoYoLab with Facebook
  - HoYoLab check-in issue
  - Issue when facing empty value during wish history fetch progress
- Optimize
  - **Project refactoring, brings a 20% performance improvement**
  - Add localization support for WIKI features
  - Add support for all international channels (which affect payment gateway)
    - Supporting HoYoverse official, Google Pay, Epic
  - When Unlock framerate limit is enabled, limit value can be modified during the game, and will take effect immediately

## 1.6.2 <Badge text="latest" type="tip" />

- New Feature
  - **Wish history cloud backup** based on Hutao account system
    - Currently, sponsors on AFDIAN and beta users will receive corresponding cloud membership time; All registered users will receive 5 days membership time after uploading Abyss record.
    - This feature will be optimized constantly in the following 1.6 versions
- Fix
  - Issue that BiliBili server account cannot receive data for Real-time Notes
  - Issue on HoYoLab login
- Optimize
  - Static assets download logic

## 1.6.0

- Add
  - Hutao account system with registration and login available now
  - Support of HoYoLab account login, and add its support to the following features:
    - Web login and Stoken Cookie login
    - Abyss record
    - Daily check-in reward
    - My character
    - Real-time notes
- Optimization
  - Performance of frame rate unlock
  - Multi-client
  - Now users must unlock advanced features in the settings page before actually using them
  - Settings page layout
  - Tiles image on Windows 10

## 1.5.4

- Add
  - Game Launcher
    - Game resource package download
    - Allow multiple Genshin Impact process to run
    - Allow users to select the specified monitor to start the game
  - New icons have been used
- Fix
  - Issue caused unlimited file writing during server switch
- Optimization
  - Optimize default language selection
  - Allow device ID be copied with button
  - Setting page UI optimization

## 1.5.1

- Optimization
  - Replace `JumpList` menus with `JumpTask`,
  - Add option to allow user set language over system default setting
  - Add translation contribution entry
  - Add options to reset the image resource
- Add
  - Monster WIKI
  - Korean translation
  - Internationalized Metadata

## 1.4.15

- New
  - Static image reset method
  - Cookie refresh
- Fix
  - Fix [#2 31-4302 caused by server switch](/advanced/known-issue.html#_2-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%87%E6%8D%A2%E5%AF%BC%E8%87%B431-4302%E6%8A%A5%E9%94%99)
  - Fix the failure of clearing scheduled task in some specific situations
- Optimization
  - Optimize Dev Plan UI [#486](https://github.com/DGP-Studio/Snap.Hutao/issues/486)
  - Optimize English and Traditional Chinese translations
  - Add hints when Windows long path limits are triggered
  - Optimize wake-up for scheduled tasks

## 1.4.14

- Fix issue that new dev plan cannot be added
- Support English UI
- Other minor bug fix

## 1.4.11

- First version on Microsoft Store
