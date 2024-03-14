---
headerDepth: 2
category: [announcement, project, features]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao is an open-source program project, and we widely accept collaborations from the community to keep the project dynamic.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Project

::: center
![banner](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ogJFxz1g6e0yCZjs0_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

Snap Hutao is an open-source Genshin Impact toolkit under MIT license, designed for modern Windows platform to improve
the gaming experience for desktop players. By combining existing official resources with new features designed by the
development team, it provides a complete and useful set of tools without the need to rely on mobile devices. Snap Hutao
does not take any destructive modification to the game client to ensure the security of the toolkit.

Snap Hutao is using MSIX format package. MSIX is a native Windows application package format that streamlines the installation, update, and removal process of software. One of its standout features is its use of sandbox technology. This means that applications packaged in MSIX run in isolated environments, preventing them from making system-wide changes. This isolation enhances security as it limits the application's access to system resources and user data. Furthermore, when an MSIX-packaged application is uninstalled, it leaves no residual files or registry entries, maintaining the cleanliness and stability of the system. This is a significant improvement over traditional installation methods that often leave behind "digital debris" when applications are removed. The combination of these features makes MSIX a powerful tool for both developers and end-users, providing a seamless, secure, and clean software management experience.

## Genshin Impact's Desktop Issues Snap Hutao Solved

|           Feature            | Mobile                                 | Desktop                                         | Snap Hutao Solution                                                      |
| :--------------------------: | -------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
|   **High Framerate Limit**   | iOS/iPadOS supports 120FPS by official | Only up to 60FPS                                | [Advanced Game Launcher - Framerate unlocker](features/game-launcher.md) |
|   **Game Account Switch**    | All signed in account will be kept     | Will not be recorded after sign out             | [Advanced Game Launcher - Account switch](features/game-launcher.md)     |
|      **Daily Checkin**       | MiHoYo BBS client                      | Web check-in only available for oversea servers | [Account Panel - check-in](features/mhy-account-switch.md)               |
|      **Realtime Notes**      | MiHoYo BBS client                      | N/A                                             | [Realtime Notes](features/real-time-notes.md)                            |
| **Expedition Notifications** | Pushed by game client                  | N/A                                             | [Realtime Notes Notification](features/real-time-notes.md)               |
| **Spiral Abyss data lookup** | MiHoYo BBS client                      | Web lookup only available for oversea servers   | [Spiral Abyuss](features/hutao-API.md)                                   |
|       **Develop Plan**       | MiHoYo BBS client                      | Only available for oversea servers              | [Develop Plan](features/develop-plan.md)                                 |
|     **Discord Activity**     | N/A                                    | Only available for oversea servers              | [Advanced Game Launcher - Discord Activity](features/game-launcher.md)   |

## Project Resource

- [GitHub code repository](https://github.com/DGP-Studio/Snap.Hutao)
- [Crowdin localization translation](https://translate.hut.ao/)
- [Snap Hutao Community](community.md)

## Full Feature Overview

- [In-game announcement & event countdown](features/dashboard.md)
- [MiHoYo BBS multi account login](features/mhy-account-switch.md)
  - Support using web login or Cookie input to sign in to MiYouShe and HoYoLAB
  - Support daily checkin
- [Advanced game launcher](features/game-launcher.md)
  - Game server convert er
  - Game account switcher
  - Customized frame rate limit
  - Game patch download
- [Wish history management](features/wish-export.md)
  - Refresh data from game
  - Import and export UIGF format data file
  - Global wish statistics
- [Achievement management](features/achievements.md)
  - Export achievement data from game
  - Import and export UIAF format data file
- [Real-time Note](features/real-time-notes.md)
  - Support multi account real-time note
  - Customized refresh cycle
  - Windows native style notification push
- [My Characters](features/character-data.md)
  - Support multiple source synchronization
  - Artifact rating & CRIT rating
  - Export my character data as image to clipboard
- [Spiral Abyss](features/hutao-API.md)
  - Details of monster and blessing for each schedule
  - Sync detailed battle data for current schedule and store data in local device forever
  - Hutao Database (Spiral Abyss Database)
    - Character usage rate
    - Character appearance rate
    - Team lineup count
    - Character constellation
- [Development Plan](features/develop-plan.md)
  - Support to initial dev plan from my characters' data and WIKI data
  - Support multiple archives
- WIKI data
  - [Character WIKI](features/character-wiki.md)
  - [Weapon WIKI](features/weapon-wiki.md)
  - [Monster WIKI](features/monster-wiki.md)
- [Snap Hutao Account](features/hutao-settings.md#snap-hutao-account)
  - Wish data backup
  - Wish stat-based prediction
