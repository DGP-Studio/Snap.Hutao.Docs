---
headerDepth: 2
category: [Announcement, Project, Features]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao is an open-source program project on GitHub, and we highly appreciate collaborations from the community to keep this project dynamic.
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01mpzxPR1g6e22IjFMh_!!1797064093.png
---

# Project Description

::: center
![banner](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01eHCaOA1g6e2ZLa3PA_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

Snap Hutao is an open-source Genshin Impact toolkit under the MIT license, specifically designed for the modern Windows platform to enhance the gaming experience for desktop players. By integrating official resources with new features developed by the team, it offers a comprehensive and practical set of tools without relying on any mobile devices. Furthermore, it strictly adheres to non-destructive principles, ensuring the tool's safety by not modifying the game client.

The Snap Hutao project is packaged using the MSIX format. MSIX is a native Windows application packaging format that provides streamlined software installation, updates, and uninstallation. With its sandboxing technology, MSIX-packaged applications operate in isolated environments, preventing direct modifications to system resources and significantly improving system security and stability. Additionally, the MSIX format ensures no residual files or registry entries remain after uninstallation, maintaining system cleanliness. These advantages make MSIX a powerful tool for both developers and users for managing software, providing a smooth, secure, and clean software experience.

## Genshin Impact Desktop Issues Solved by Snap Hutao

|           Feature            | Mobile                                | Desktop                             | Snap Hutao Solution                                                                        |
| :--------------------------: | ------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------ |
|    **Unlock Frame Rate**     | iOS/iPadOS officially supports 120FPS | Limited to 60FPS                    | [Advanced Launcher - Injection Module](features/game-launcher.md#game-frame-rate-settings) |
|   **Game Account Switch**    | Logged-in accounts are saved          | Accounts are not saved after logout | [Advanced Launcher - Account Switching](features/game-launcher.md#account-saving)          |
|     **Server Switching**     | N/A                                   | N/A                                 | [Advanced Launcher - Server Switching](features/game-launcher.md)                          |
|   **Wish History Export**    | N/A                                   | N/A                                 | [Wish History Export](features/wish-export.md)                                             |
|      **Daily Check-in**      | MiYouShe client                       | Web check-in only for global users  | [Account Panel - Check-in](features/mhy-account-switch.md)                                 |
|     **Real-time Notes**      | MiYouShe client                       | N/A                                 | [Real-time Notes](features/real-time-notes.md)                                             |
| **Expedition Notifications** | Via mobile game push notifications    | N/A                                 | [Real-time Notes Push Notifications](features/real-time-notes.md)                          |
| **Spiral Abyss Data Query**  | MiYouShe client                       | Web query only for global users     | [Spiral Abyss](features/hutao-API.md)                                                      |
|       **Develop Plan**       | MiYouShe client                       | Web usage only for global users     | [Development Plan](features/develop-plan.md#development-plan)                              |
|      **Discord Status**      | N/A                                   | Available in global client          | [Advanced Launcher - Discord Activity](features/game-launcher.md#advanced-launcher)        |

## Project Resources

- [GitHub Repository](https://github.com/DGP-Studio/Snap.Hutao)
- [Crowdin Localization](https://translate.hut.ao/)
- [Snap Hutao User Community](community.md)

## Full Feature List

- [In-Game Announcements and Event Countdown](features/dashboard.md)
- [MiHoYo BBS Multi-Account Login Support](features/mhy-account-switch.md)
  - Support logging into MiYouShe and HoYoLAB via web login and Cookie input.
  - Support for check-in rewards
- [Advanced Launcher](features/game-launcher.md)
  - Server Switching
  - Game Account Switching
  - Custom Game Frame Rate
  - Game Patch Download
  - Custom Game Launch Parameters
- [Wish History Management](features/wish-export.md)
  - One-click data update from game data
  - Import/Export UIGF wish data files
  - Wish Event Timer
  - Wish Event History Query
  - Global Wish Data Statistics
- [Achievement Management](features/achievements.md)
  - Refresh data from game data
  - Import/Export UIAF data files
- [Real-Time Notes](features/real-time-notes.md)
  - Support for multi-account real-time notes
  - Customizable refresh interval
  - Native Windows notification push
- [My Characters](features/character-data.md)
  - Support data synchronization from multiple sources
  - Export character data to clipboard
- [Spiral Abyss/Imaginarium Theater](features/hutao-API.md)
  - Details of each phase's monsters and Abyssal Moon Blessing
  - Sync detailed battle data of the current Spiral Abyss
  - Snap Hutao Abyss Database
    - Character Usage Rate
    - Character Appearance Rate
    - Team Appearance Statistics
    - Character Ownership Rate
- [Development Plan](features/develop-plan.md)
  - Support creating character and weapon development plans from real-time data and WIKI data
  - Support multiple plan archives
- WIKI Data
  - [Character Data](features/character-wiki.md)
  - [Weapon Data](features/weapon-wiki.md)
  - [Monster Data](features/monster-wiki.md)
- [Snap Hutao Account System](features/hutao-settings.md#snap-hutao-account)
  - Wish data backup
  - Wish statistics prediction
