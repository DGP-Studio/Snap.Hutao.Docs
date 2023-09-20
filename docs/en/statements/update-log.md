---
category:
  - Announcement
icon: update
order: 1
---

# Update Logs

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
