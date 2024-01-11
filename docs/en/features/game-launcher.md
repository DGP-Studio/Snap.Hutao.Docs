---
headerDepth: 0
category: [Feature, Tutorial]
tag: [unlock framerate, convert server, switch account]
order: 4
comment: false
---

# Game Launcher

![Game Launcher](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01RuSYDm1g6e0u3wfIy_!!1797064093.png_.webp)

- Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings
- Click on the `Game Launcher` on the sidebar to get into game launcher's page
  - If you are using it at the first time, you will be redirected to Snap Hutao settings page and asked to set your game path
    - When choosing the game path, noticed that you should choose game program instead of launcher program
      - Such as `$\Genshin Impact\Genshin Impact Game\YuanShen.exe` and `$\Genshin Impact\Genshin Impact Game\Genshin Impact.exe`
- You can make launcher configuration options in the game launcher's page, and then click `Launcher` button on the top-right to launch the game. Launcher options is explained in the document below

## Server Switch

::: tip Privilege Notice

1. You need to run Snap Hutao as administrator to use this feature
2. Snap Hutao will create `ServerCache` folder in the data directory to save required sever switch files

:::

Enter Game Launcher page
In the `Server` field, select the server you want

Current available serves options include:
| Option | Server |
|----------------|-----------------------------------------------------------|
| CN Default | Mainland China server |
| CN Official | Mainland China server, no difference with previous row |
| CN NoTapTap | Mainland China server without TapTap account login method |
| BiliBili | Chinese server with BiliBili account system |
| Global Default | HoYoVerse servers |
| Global Epic | HoYoVerse servers with Epic Store payment gateway |
| Global Google | HoYoVerse servers with Google Pay payment gateway |

click `Launch` button on the top-right to launch the game, Snap Hutao will download server required files and then launch the game

## Game Account Switch

::: tip

The **account** mentioned in this feature is Genshin game login account instead of HoYoLAB account

:::

|                   | CN        | Global    | bilibili      |
| ----------------- | --------- | --------- | ------------- |
| Save Login Status | Supported | Supported | Supported     |
| Switch Account    | Supported | Supported | Not Supported |

1. Enter Game Launcher page
2. Click `Detect Account` field in the `Registry` category, Snap Hutao will detect current Genshin Impact's account login status
3. In this pop-up window, enter an archive name for this account and click `Confirm`
4. Go back to the game, sign out and sign in to your another account, then end the game process. Repeat step 2 and 3 to add all your account to Snap Hutao

Each account is saved in a field under the `Detect Account` field, they are selectable

- On the right side, there are three buttons, they are:
  - `Bind current user account`, bind current activated MiHoYo BBS account with this game account, an UID will be display on this archive
  - `Rename`, rename current account archive name
  - `Delete`, delete current account archive

## Genshin Impact HDR in Windows Platform

Genshin Impact currently has an HDR feature built in that can only be enabled by setting registry key values. Although this may mean that the feature is a test feature of the game, you can already experience it in advance!
You can enable the Genshin Impact HDR feature on the Windows platform to enhance the visual experience on monitors that support HDR. In the game launcher, you can enable the Windows HDR option, and Snap Hutao will activate this built-in feature of the game when the game starts.

## Launch Parameters

::: warning

- In some reported cases, using Snap Hutao with `Exclusive Fullscreen` mode will cause the game process no response.

  - Suggest to use `Borderless` or `Fullscreen` mode if you faced same problem
  - The problem is caused by failure of game embedded browser cannot run

:::

- Enter Game Launcher page
- In the `Progress` category, enable `Launch Parameters` and expand it to see more detailed options:
  - `-window-mode exclusive` parameter
    - **Exclusive Full Screen**, i.e., select the game process to run in exclusive full-screen mode
    - **This feature is incompatible with the in-game browser feature, you should only enable this option if you can independently describe the technical principles and effects of exclusive full screen**
  - `-screen-fullscreen` parameter
    - **Full Screen**, i.e., choose whether to set the game interface as full screen after launching the game
  - `-popupwindow` parameter
    - **Borderless**, i.e., choose whether to set the game interface as a borderless window after launching the game
  - `-platform_type CLOUD_THIRD_PARTY_MOBILE` parameter
    - **Touch Screen Mode**, i.e., enable the touch screen operation mode built into Genshin Impact
  - Resolution
    - This feature can quickly set the options to override screen width and height
  - `-screen-width` parameter
    - **Width**, i.e., choose the width of the game interface after launching the game, for example, `1920`
  - `-screen-height` parameter
    - **Height**, i.e., choose the height of the game interface after launching the game, for example, `1080`
  - `-monitor` parameter
    - **Monitor**, allows users with multiple monitors to choose a specific monitor to run the game
    - If you can't determine which monitor each option represents, you can click `Identify Monitor` to get a hint.

## Resource Download

Game launcher in Snap Hutao also offers resource download feature, which lists real time Genshin Impact (CN server)
client package and OTA package. User can click the hyperlink icon on each package's right side to redirect to browser to
download them by user favored download tools.

When you are updating the game client, you can do the following steps:

1. Update official launcher to the latest
2. In `Snap Hutao - Game Launcher - Resource Download`, find needed client OTA package and installed language OTA package
3. Move all package to folder where game client located
4. Start official launcher, click on update button. The launcher should skip the download and directly starts to unzip the OTA packages to update client

## Advanced Features

::: caution

- Be aware: all advanced features are labeled as `Dangeroud Feature`; indicating that enabling them means you choose
  to assume any risk on your own.
- **You need to enable advanced features in Snap Hutao's settings page**

:::

### Unlock Frame Rate Limit

::: caution

- The [Unlocker project](https://github.com/DGP-Studio/Unlocker) only affects the UnityPlayer itself, directly affecting
  the Unity3D engine, and does not have a direct relationship with the game itself. Essentially, it is no different from
  settings like 120 FPS in mobile devices. However, you should still use it with caution and read the [user agreement](../statements/tos.md)
  on your own.

:::

- Run Snap Hutao as administrator
- Make sure `Advanced Feature` is enabled in Snap Hutao settings
- Enter Game Launcher page
- At the bottom of the page, you can find `Unlock Frame Rate Limit` option
  - Trigger the switch to enable or disable this feature
  - In the `Set Frame Rate Limit` field, you can adjust the limit freely
- Click `Start Game` button on the top right

Fact that may cause **failure in unlocking frame rate limit**:

1. Snap Hutao process is not kept in the background
2. `V-Sync` is not set to off in the game
3. `Max Framerate` limit is not changed in your graphic card settings
4. `Power Saving` mode is not disabled in power settings
5. Your graphic card is not powerful enough
