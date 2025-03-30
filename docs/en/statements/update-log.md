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

## 1.14.2 <Badge text="latest" type="tip" /> <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed an issue where the overlay window will resume visible when hidden by hotkey and switch between windows

## 1.14.1 <Badge text="hotfix" type="warning" />

- **[🎉New]** Added a custom shortcut key setting on the game launch page to control the display and hiding of the overlay window [#2562](https://github.com/DGP-Studio/Snap.Hutao/issues/2562)

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

## 1.13.7

- **[🔨Fix]** Fixed an issue where closing the game process during game startup under certain conditions could cause the program to crash
- **[🔨Fix]** Fixed an issue where selecting the data directory to the root of a disk partition and then opening the settings page could cause the program to crash
- **[🔨Fix]** Fixed an issue where failing to download wallpaper when the wallpaper source is not local could cause the program to crash
- **[🔨Fix]** Fixed an issue where failing to fetch game announcements could cause the program to crash
- **[🔨Fix]** Fixed an issue where closing the web window before WebView2 finished loading could cause the program to crash
- **[🔨Fix]** Fixed an issue where wallpaper switching with local wallpaper sources could cause the program to crash
- **[🔨Fix]** Fixed an issue where closing the main window while a notification is about to show or hide could cause the program to crash
- **[🔨Fix]** Fixed an issue where switching/deleting users while loading the My Characters page could cause data synchronization issues
- **[🔨Fix]** Fixed an issue where using auto-click/auto-press under system permission pages could cause the program to crash, now it will automatically stop the corresponding operation
- **[🔨Fix]** Fixed an issue where refreshing/backward operations before WebView2 finished loading could cause the program to crash
- **[🔨Fix]** Fixed an issue where managing game functions on the game launch page with certain non-fixed SSD devices could cause the program to crash, now it defaults to HDD for subsequent operations
- **[🔨Fix]** Fixed an issue where attempting to reopen the task area icon menu upon program exit could cause the program to crash
- **[✨Optimization]** Added WebView2 load failure prompts to the web window
- **[✨Optimization]** The compact web window can now be resized to any size
- **[✨Optimization]** Game launch now checks for already running game processes and attempts to take over

## 1.13.6

- **[🎉New]** Added time zone settings to the Dev Plan
  - Time zone will be set when creating a plan
  - Time zone cannot be changed after the plan is created
  - Existing Dev Plans will default to the time zone corresponding to the calendar server in Hutao settings
- **[🔨Fix]** Fixed an issue where importing achievements from other applications would not display the import popup
- **[🔨Fix]** Fixed a crash issue when Real-time Notes auto-refreshes in the background [#2491](https://github.com/DGP-Studio/Snap.Hutao/issues/2491)
- **[✨Optimization]** Adjusted telemetry method, now using Sentry for better exception information collection and processing
- **[✨Optimization]** After logging into the user panel for the first time, the default character configured in MiYouShe will now be selected first [#2391](https://github.com/DGP-Studio/Snap.Hutao/issues/2391)
- **[✨Optimization]** Modified the transparency logic of the compact web window
  - The window will now be opaque when focused
  - The window will be semi-transparent when out of focus

## 1.13.5

- **[🎉New]** Added Bilibili Wiki to character guides on the character profile page (Simplified Chinese only) [#2435](https://github.com/DGP-Studio/Snap.Hutao/issues/2435)
- **[🎉New]** Character profile page now displays character skin illustrations
- **[🔨Fix]** Fixed some issues with international server features
- **[🔨Fix]** Fixed a crash issue when exiting Hutao from the tray menu
- **[🔨Fix]** Fixed an issue where the calendar card time zone was not applied [#2467](https://github.com/DGP-Studio/Snap.Hutao/issues/2467)
- **[🔨Fix]** Fixed an issue where the game configuration file might revert to the wrong server if missing
- **[🔨Fix]** Fixed an issue where game file management did not support USB solid-state drives [#2469](https://github.com/DGP-Studio/Snap.Hutao/issues/2469)
- **[🔨Fix]** Fixed a UI misalignment issue in the resin estimation on the Dev Plan page [#2443](https://github.com/DGP-Studio/Snap.Hutao/issues/2443)
- **[✨Optimization]** Optimized UI layout for certain scaling settings

## 1.13.4 <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed an issue where using the game management function on the game launch page would cause a crash again [#2457](https://github.com/DGP-Studio/Snap.Hutao/issues/2457)
- **[🔨Fix]** Fixed an issue where achievements could not be synchronized via Embedded Yae [#2458](https://github.com/DGP-Studio/Snap.Hutao/issues/2458)
- **[🔨Fix]** Fixed an issue where backpack items could not be synchronized via Embedded Yae in the Dev Plan [#2461](https://github.com/DGP-Studio/Snap.Hutao/issues/2461)

## 1.13.3 <Badge text="hotfix" type="warning" />

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

## 1.13.1

- **[🎉New]** Added German/Spanish/Italian/Thai/Turkish languages
- **[🎉New]** Achievements and backpack items can now be obtained from the game via Embedded Yae
- **[🎉New]** Added clear backpack items feature in the Dev Plan [#2332](https://github.com/DGP-Studio/Snap.Hutao/issues/2332)
- **[🎉New]** Added character guides on the character profile page [#1526](https://github.com/DGP-Studio/Snap.Hutao/issues/1526)
- **[🔨Fix]** Fixed an issue where two instances of Hutao might start simultaneously [#2368](https://github.com/DGP-Studio/Snap.Hutao/issues/2368)
- **[🔨Fix]** Fixed an issue where some devices could not correctly obtain the Loopback status
- **[🔨Fix]** Fixed an issue where starting the game before user services were fully initialized might prevent logging in with MiYouShe account
- **[🔨Fix]** Fixed an issue where wish records could not be obtained via web cache [#2363](https://github.com/DGP-Studio/Snap.Hutao/issues/2363)
- **[🔨Fix]** Fixed an issue where the UID in real-time note notifications might display as Unknown
- **[🔨Fix]** Fixed an issue where the Spiral Abyss did not display the upper and lower halves correctly
- **[🔨Fix]** Fixed an issue where resin estimation in the Dev Plan might cause a crash
- **[🔨Fix]** Fixed an issue where resin estimation data in the Dev Plan might overflow [#2361](https://github.com/DGP-Studio/Snap.Hutao/issues/2361)
- **[✨Optimization]** The guide page now displays localization sources
- **[✨Optimization]** Optimized the operation logic of the Hutao Passport related dialogs
- **[✨Optimization]** Real-time notes will now automatically refresh after Hutao starts
- **[✨Optimization]** The data folder will now be stored in the container by default and will be deleted upon uninstallation
- **[✨Optimization]** Modifying the data folder will now automatically copy data to the new directory [#1835](https://github.com/DGP-Studio/Snap.Hutao/issues/1835)

## 1.13.0

- **[🎉New]** Changed the program icon - Su Xue Tao Hong
- **[🎉New]** Added calendar server time zone settings, allowing adjustment of the time zone used by the homepage calendar card
- **[🎉New]** Added metadata loading indicator to the title bar
- **[🎉New]** Added Hutao Passport page and removed the Hutao Passport section from the settings page
  * Added email reset function
  * Added refresh user information function
  * Integrated redemption code function
- **[🎉New]** Added static image file download prompt to the guide interface
- **[🎉New]** Reintroduced MiYouShe QR code login function in the user panel
- **[✨Optimization]** Hutao Passport's change password/delete account now defaults to the current logged-in account
- **[✨Optimization]** Hutao Passport's wish record cloud service and CDN cloud service no longer display as 1970 when no time is obtained
- **[✨Optimization]** Display DNS information when network request fails
- **[✨Optimization]** Adjusted Hutao notifications display, now severe (red) / important (yellow) notifications cannot be manually closed
- **[✨Optimization]** Added loading indicator/refresh button to the compact web window
- **[✨Optimization]** Optimized the issue where frequent window resizing might cause content flickering
- **[✨Optimization]** The game launch function now correctly prompts for empty paths
- **[✨Optimization]** The game launch function now correctly disables the select game path button
- **[✨Optimization]** Improved crash popup when using unsupported custom background images [#2335](https://github.com/DGP-Studio/Snap.Hutao/issues/2335)
- **[✨Optimization]** The new window popped up by the game file management in the game launch function now maintains the same theme style as the main window
- **[✨Optimization]** The game file management in the game launch function now supports resuming installation after interruption
- **[✨Optimization]** The game file management in the game launch function now calculates an additional 1 GB of installation cache
- **[✨Optimization]** The game file management in the game launch function now dynamically cleans up unnecessary files during installation
- **[✨Optimization]** The game file management in the game launch function now correctly skips files that have already been updated
- **[✨Optimization]** The guide interface no longer automatically proceeds to the next step after selecting a language
- **[✨Optimization]** In-app error prompts can now copy text
- **[✨Optimization]** Adjusted the display effect of the main attributes of artifacts on the My Characters page to distinguish them from sub-attributes
- **[✨Optimization]** The My Characters interface now displays a default prompt after a search yields no results
- **[✨Optimization]** Adjusted the UI of the Hutao Cloud function on the wish record page
- **[✨Optimization]** Now checks if the executable file exists when automatically searching for the game path
- **[✨Optimization]** The resin estimation function on the material statistics tab of the Dev Plan page now remembers the selected world level
- **[✨Optimization]** The Dev Plan page now displays talent levels in separate rows for cultivation items
- **[🔨Fix]** Fixed an issue where some devices could trigger certain keys without using the quick click function [#2296](https://github.com/DGP-Studio/Snap.Hutao/issues/2296)
- **[🔨Fix]** Fixed a crash issue on devices with high scaling when the window is small [#2349](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **[🔨Fix]** Fixed a crash issue on some devices when deleting cultivation items [#2290](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **[🔨Fix]** Fixed an issue where importing achievements from other applications would not display the import popup when already on the achievements page [#2306](https://github.com/DGP-Studio/Snap.Hutao/issues/2306)
- **[🔨Fix]** Fixed an issue where multiple dialogs might be opened in specific situations [#2307](https://github.com/DGP-Studio/Snap.Hutao/issues/2307)
- **[🔨Fix]** Fixed an issue where the game path could not be changed while pre-download is available [#2317](https://github.com/DGP-Studio/Snap.Hutao/issues/2317)
- **[🔨Fix]** Fixed an issue where some devices could not correctly enumerate container applications, causing crashes [#2339](https://github.com/DGP-Studio/Snap.Hutao/issues/2339)
- **[🔨Fix]** Fixed an issue where Tartaglia's talent bonus to normal attack skill level was not displayed on the My Characters page
- **[🔨Fix]** Fixed an issue where the number of prompts was incorrect when adding to the Dev Plan from the My Characters page
- **[🔨Fix]** Fixed an issue where the usage rate statistics on the Imaginarium Theater page were not vertically centered
- **[🔨Fix]** Fixed an issue where logging in again after Cookie expiration would still display network errors
- **[🔨Fix]** Fixed an issue where the quick click function did not stop clicking after turning off the quick click switch
- **[🔨Fix]** Fixed an issue where the character name card background was not vertically centered in the grid view on the My Characters page
- **[🔨Fix]** Fixed an issue where some icons in the search box suggestions were not fully displayed in My Characters/Character Data/Weapon Data
- **[🔨Fix]** Fixed an issue where the window size might initialize to an incorrect size in specific situations
- **[🔨Fix]** Fixed an issue where pools that had not yet started were included in the timing tab on the wish record page
- **[🔨Fix]** Fixed an issue where real-time notes did not send notifications correctly
- **[🔨Fix]** Fixed a layout issue in the character exploration section of real-time notes at certain scaling rates
- **[🔨Fix]** Fixed an issue where logging out of Hutao Passport would still log out even if the unregistration failed

## 1.12.8

- **[🎉New]** Added keyboard F key auto-press feature, which can be enabled and configured in the settings page
- **[🔨Fix]** Fixed an issue where the program would crash when entering the game launch page without having any game path

## 1.12.7

- **[🔨Fix]** Fixed an issue where the program would crash when entering the game launch page without setting the game path

## 1.12.6

- **[🎉New]** The game launcher now automatically detects the game path
- **[✨Optimization]** The "Remove team configuration progress bar" feature is now only effective when team switching is allowed
- **[🔨Fix]** Fixed an issue where updates could not be checked without logging into Hutao Passport
- **[🔨Fix]** Fixed an issue where the background color of the homepage calendar card might be incorrect
- **[🔨Fix]** Fixed a potential memory leak when modifying the speed limit during game download
- **[🔨Fix]** Fixed a crash issue that might occur when canceling a game download
- **[🔨Fix]** Fixed a crash issue when reading Unity logs to get wish records using web cache without setting the game path [#2272](https://github.com/DGP-Studio/Snap.Hutao/issues/2272)

## 1.12.5

- **[🎉New]** Added quick resolution switch customization in the game launcher
- **[🎉New]** Added historical pool records to the wish history countdown
- **[🎉New]** Added resin estimation to the cultivation plan [#323](https://github.com/DGP-Studio/Snap.Hutao/issues/323) [#1540](https://github.com/DGP-Studio/Snap.Hutao/issues/1540)
- **[🔨Fix]** Fixed an issue where the background might not change when switching themes
- **[🔨Fix]** Fixed an issue where some elements might display the wrong color theme in certain situations
- **[🔨Fix]** Fixed a potential vulnerability through metadata initialization injection [#2240](https://github.com/DGP-Studio/Snap.Hutao/issues/2240)
- **[🔨Fix]** Fixed an issue where the local game version might not be read in certain situations [#2251](https://github.com/DGP-Studio/Snap.Hutao/issues/2251)
- **[🔨Fix]** Fixed an issue where the international server could not refresh wish records in certain situations [#2252](https://github.com/DGP-Studio/Snap.Hutao/issues/2252)
- **[🔨Fix]** Fixed an issue where characters or weapons might appear without materials after overwriting the cultivation plan
- **[🔨Fix]** Fixed an issue where the transparency settings of the compact web window were not effective [#2258](https://github.com/DGP-Studio/Snap.Hutao/issues/2258)
- **[🔨Fix]** Fixed a buffer overflow issue when exiting Snap Hutao from the tray menu on some systems
- **[✨Optimization]** The game launcher page will now replace the account with the same name instead of creating a new one
- **[✨Optimization]** The cultivation plan will now attempt to obtain more accurate backpack material quantities
- **[✨Optimization]** Optimized the size of Snap Hutao

## 1.12.4

- **[🔨Fix]** Fixed an issue where the resolution settings could not be saved after launching the game [#2229](https://github.com/DGP-Studio/Snap.Hutao/issues/2229)
- **[🔨Fix]** Fixed an issue where the achievement completion time was displayed incorrectly [#2184](https://github.com/DGP-Studio/Snap.Hutao/issues/2184)
- **[🔨Fix]** Fixed an issue where the cultivation plan's backpack could not be refreshed [#2212](https://github.com/DGP-Studio/Snap.Hutao/issues/2212)
- **[🔨Fix]** Fixed an issue where the shortcut keys for fast-forward/rewind in the compact web window were not working
- **[🔨Fix]** Fixed an issue where selecting a file window would cause a crash on some systems
- **[🔨Fix]** Fixed an issue where selecting a download source when updating Snap Hutao was not effective
- **[✨Optimization]** Now checks proxy and loopback status at startup and guides users to remove loopback restrictions if unable to connect to the internet
- **[✨Optimization]** The compact web window now remembers the page from the last close

## 1.12.3 <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed a crash issue caused by the tray icon not syncing [#2198](https://github.com/DGP-Studio/Snap.Hutao/issues/2198)
- **[🔨Fix]** Fixed an issue where the program became unusable due to metadata initialization failure caused by tray icon initialization failure [#2202](https://github.com/DGP-Studio/Snap.Hutao/issues/2202)

## 1.12.2

- **[🎉New]** Added shortcut keys for fast-forward/rewind in the compact web window
- **[🔨Fix]** Fixed an issue where the cultivation plan's abnormal selection state prevented Snap Hutao from starting [#2174](https://github.com/DGP-Studio/Snap.Hutao/issues/2174)
- **[🔨Fix]** Fixed an issue where the tray icon might not be created correctly after restarting as an administrator from the tray menu
- **[🔨Fix]** Fixed an issue where the announcement time was displayed incorrectly before the game version update [#2175](https://github.com/DGP-Studio/Snap.Hutao/issues/2175)
- **[🔨Fix]** Fixed an issue where reselecting the game path when starting the game might cause a crash
- **[🔨Fix]** Fixed an issue where game file management might get stuck when repairing the game
- **[🔨Fix]** Fixed an issue where the achievement profile could not be switched using the mouse when the window was too small [#2181](https://github.com/DGP-Studio/Snap.Hutao/issues/2181)
- **[🔨Fix]** Fixed an issue where uploading Sprial Abyss records without logging into the Hutao Passport caused a crash [#2169](https://github.com/DGP-Studio/Snap.Hutao/issues/2169)
- **[🔨Fix]** Fixed an issue where the international server could not refresh the Imaginarium Theater properly [#2170](https://github.com/DGP-Studio/Snap.Hutao/issues/2170)
- **[🔨Fix]** Fixed an issue where adding weapons to the cultivation plan might cause a crash [#2168](https://github.com/DGP-Studio/Snap.Hutao/issues/2168)
- **[✨Optimization]** Optimized the display effect of the pre-download prompt icon in game file management
- **[✨Optimization]** Added a launch game button for each game character on the Real-time Notes page, which will jump to the game launch page and automatically switch the MiYouShe/HoYoLAB user to the corresponding user of the note [#1318](https://github.com/DGP-Studio/Snap.Hutao/issues/1318)
- **[✨Optimization]** Optimized the loading speed of character and weapon icons

## 1.12.1 <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed the issue where the program could not start due to database migration failure [#2159](https://github.com/DGP-Studio/Snap.Hutao/issues/2159)

## 1.12.0

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

## 1.11.9 <Badge text="hotfix" type="warning" />

- **[🎉New]** Added countdown for wish history pools [#1341](https://github.com/DGP-Studio/Snap.Hutao/issues/1341)
- **[🔨Fix]** Fixed the issue where the game launch injection option did not match the actual situation [#2134](https://github.com/DGP-Studio/Snap.Hutao/issues/2134)
- **[🔨Fix]** Fixed the issue where enabling field of view adjustment could cause stuttering in team and some character elemental burst scenes [#2137](https://github.com/DGP-Studio/Snap.Hutao/issues/2137)
- **[🔨Fix]** Fixed the issue where WebView might crash when it fails to pop up normally

## 1.11.8 <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed the issue where the injection feature for the oversea server was not working [#2121](https://github.com/DGP-Studio/Snap.Hutao/issues/2121)
- **[🔨Fix]** Fixed the issue where refreshing wish records via web cache was not working [#2124](https://github.com/DGP-Studio/Snap.Hutao/issues/2124)
- **[✨Optimization]** Optimized the logic between the game launch injection option switches [#2122](https://github.com/DGP-Studio/Snap.Hutao/issues/2122)

## 1.11.7

- **[🎉New]** / **[✨Optimization]** Adjusted the UI of the game launch interface
  - **[🎉New]** Removed the progress bar from the team configuration interface
  - **[🎉New]** Added "Let me in! Mickey Mouse Clubhouse" feature (yes, really)
- **[🎉New]** Added chunk mode for server switching in the game launcher
- **[🎉New]** Added character name cards to character WIKI [#1424](https://github.com/DGP-Studio/Snap.Hutao/issues/1424)
- **[🔨Fix]** Fixed the issue where Snap Hutao might crash on the first launch of the day [#2101](https://github.com/DGP-Studio/Snap.Hutao/issues/2101)
- **[🔨Fix]** Fixed the issue where the error report window might not display correctly
- **[🔨Fix]** Fixed the issue with incorrect duration of homepage announcements
- **[🔨Fix]** Fixed the issue where game file management might crash on certain types of disks [#2077](https://github.com/DGP-Studio/Snap.Hutao/issues/2077)
- **[🔨Fix]** Fixed the issue where refreshing wish records via web cache might cause a crash [#2083](https://github.com/DGP-Studio/Snap.Hutao/issues/2083)
- **[🔨Fix]** Fixed the issue where window size might be incorrect after restarting across monitors
- **[✨Optimization]** The calendar card now highlights materials that can be farmed today in the current cultivation plan [#2045](https://github.com/DGP-Studio/Snap.Hutao/issues/2045)
- **[✨Optimization]** The "My Characters" and character WIKI no longer show filters for 1-star to 3-star items [#2110](https://github.com/DGP-Studio/Snap.Hutao/issues/2110)
- **[✨Optimization]** Adding MiYouShe/HoYoLAB accounts now displays a dialog to prevent user operations until completion

## 1.11.6 <Badge text="hotfix" type="warning" />

- **[🔨Fix]** Fixed the issue where features requiring verification would crash after verification [#2074](https://github.com/DGP-Studio/Snap.Hutao/issues/2074)
- **[🔨Fix]** Fixed the issue where features requiring resource downloads might freeze

## 1.11.5

- **[🎉New]** Added MiYouShe / HoYoLAB account login in the game launcher
- **[🎉New]** Added filters on the My Characters page [#1786](https://github.com/DGP-Studio/Snap.Hutao/issues/1786)
- **[🎉New]** Added an option to save images from web activities in the settings [#1804](https://github.com/DGP-Studio/Snap.Hutao/issues/1804)
- **[🎉New]** Added account and third-party login for oversea server [#1966](https://github.com/DGP-Studio/Snap.Hutao/issues/1966)
- **[🔨Fix]** Fixed a crash issue when refreshing background images
- **[🔨Fix]** Fixed display issues with multi-monitor scaling
- **[🔨Fix]** Fixed an issue where the error report window might not display correctly
- **[🔨Fix]** Fixed incomplete display of real-time note settings in some languages [#2040](https://github.com/DGP-Studio/Snap.Hutao/issues/2040)
- **[🔨Fix]** Fixed an issue where some lists were not processed correctly when updating the cultivation plan [#2022](https://github.com/DGP-Studio/Snap.Hutao/issues/2022)
- **[🔨Fix]** Fixed an issue where syncing backpack items in the cultivation plan might not respond [#2044](https://github.com/DGP-Studio/Snap.Hutao/issues/2044)
- **[🔨Fix]** Fixed an issue where the number of backpack items might be incorrect when syncing the cultivation plan [#2061](https://github.com/DGP-Studio/Snap.Hutao/issues/2061)
- **[🔨Fix]** Fixed a crash issue when entering the verification code directly without clicking "Get" during MiYouShe phone login [#2058](https://github.com/DGP-Studio/Snap.Hutao/issues/2058)
- **[✨Optimization]** Optimized the enable logic of the game update button
- **[✨Optimization]** Increased the monster level cap to 110 [#1988](https://github.com/DGP-Studio/Snap.Hutao/issues/1988)
- **[✨Optimization]** The verification window will now automatically pop up when encountering a CAPTCHA [#1616](https://github.com/DGP-Studio/Snap.Hutao/issues/1616)

## 1.11.4

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
  - Issue that cannot sign in to HoYoLAB with Facebook
  - HoYoLAB check-in issue
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
  - Issue on HoYoLAB login
- Optimize
  - Static assets download logic

## 1.6.0

- Add
  - Hutao account system with registration and login available now
  - Support of HoYoLAB account login, and add its support to the following features:
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
