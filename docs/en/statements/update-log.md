---
category:
  - Announcement
icon: update
order: 1
---

# Update Logs

## 1.6.4 <Badge text="latest" type="tip" />

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
