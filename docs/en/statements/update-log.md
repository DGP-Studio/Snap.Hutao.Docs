---
category:
  - Announcement
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
---

# Update Logs

## 1.9.7 <Badge text="latest" type="tip" />

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
