---
headerDepth: 2
category: [Feature, Tutorial]
tag: [unlock framerate, server switch, switch account]
order: 4
comment: false
description: Snap Hutao's advanced launcher offers features such as custom launch parameters, server switching, and frame rate unlocking, significantly enhancing the user's gaming experience.
---

# Advanced Game Launcher

![Game Launcher](https://img.alicdn.com/imgextra/i4/1797064093/O1CN014YLRnj1g6e0zQaBl6_!!1797064093.png_.webp)

Snap Hutao's advanced launcher provides a more flexible game launch experience through various settings options.

::: caution
Using **any unofficial software** may **potentially** result in **damage to your virtual property**. Continuing to use the related functions of this software will be deemed as you acknowledging and agreeing to our [Terms of Service](/statements/tos.md).
:::

## Initial Settings

- Click "Launch Game" on the left sidebar to enter the advanced launcher feature.
  - The first time you use it, you will be redirected to the settings page to set the game path.
  - **Please select the game's main program path (`YuanShen.exe`), not the launcher path (`launcher.exe`).**
    - Example path: `D:\miHoYo Launcher\games\Genshin Impact Game\YuanShen.exe`
  - After successfully detecting the game path, click "Confirm."
  - If the game is not installed, click the "Install Game" button and follow the prompts to set the installation directory. Snap Hutao will automatically download and install the game.
- After configuration, click the "Launch Game" button in the upper right corner to launch the game.

## Server Switching

::: tip Permission Notice
Using this feature requires running Snap Hutao with administrator privileges.
Snap Hutao will create a folder named `ServerCache` in the data directory to store the files needed for switching servers and will automatically check for updates.
:::

1. Go to the "Launch Game" page.
2. Select the target server in the "Server" section.

**Available servers include:**

| Option          | Server                                                                     |
| --------------- | -------------------------------------------------------------------------- |
| CN Default      | Mainland China server                                                      |
| CN Official     | Mainland China server, no practical difference from the previous option    |
| CN NoTapTap     | Mainland China server that disables TapTap login                           |
| Global Default  | HoYoverse global servers                                                   |
| Global Official | HoYoverse global servers, no practical difference from the previous option |
| Global Epic     | HoYoverse global servers using the Epic payment gateway                    |
| Global Google   | HoYoverse global servers using the Google Pay payment gateway              |

Click the "Launch" button in the upper right corner. Snap Hutao will download the relevant files from the official server, apply them, and then launch the game.

## Account Saving

::: tip
This feature records the login status of Genshin Impact accounts.
:::

1. Go to the "Launch Game" page.
2. Click "Detect Account." Snap Hutao will save the current game's login status.
3. Enter a name in the "Name Account" window that appears and click "Confirm."
4. Log out of the current account and log in to a new account. Repeat the above steps to save multiple accounts.
5. Use the account switching feature to select a saved account.
6. **The login statuses of different servers do not affect each other:**
   - For example, if account A is logged in on the CN server and account B is logged in on the global server, A will only be visible on the CN server, and B will only be visible on the global server.

## Login with MiYouShe / HoYoLAB

::: warning
You must enable the "Launch Parameters" feature first.
:::

When enabled, Snap Hutao will use the logged-in MiYouShe / HoYoLAB account to directly log in to the bound Genshin Impact account.

## Windows Platform HDR Support

Genshin Impact's built-in HDR feature needs to be enabled through registry key values. Snap Hutao can enable this feature to enhance the visual experience.

## Launch Parameters

In the "Launch Parameters" feature, users can set the following advanced options:

- **Exclusive Fullscreen**: `-window-mode exclusive`
  - The game process runs in exclusive fullscreen mode.
- **Fullscreen**: `-screen-fullscreen`
  - The game launches in fullscreen mode.
- **Borderless**: `-popupwindow`
  - The game launches in borderless window mode.
- **Touchscreen Mode**: `-platform_type CLOUD_THIRD_PARTY_MOBILE`
  - Enables touchscreen operation mode (keyboard and mouse input will be disabled).
- **Resolution Settings**:
  - `-screen-width`: Sets the screen width (e.g., 1920).
  - `-screen-height`: Sets the screen height (e.g., 1080).
- **Monitor Selection**: `-monitor`
  - Specifies the target monitor to run the game on.
  - If you are unsure of the monitor number, you can click "Identify Monitor" for a hint.

## Resource Download

Snap Hutao's "Resource Download" tab provides real-time links to game installation packages and incremental packages for the mainland China server. Users can directly jump to the browser to download them.

- Users need to place the downloaded files in the same directory as the game program and complete the update using the official launcher.

## Injection Features

::: caution
Improper use of injection features may cause damage to your device or game data. By enabling this, you agree to assume the relevant risks yourself.
:::

### Frame Rate Limit Unlock

Using the [UnlockerIsland project](https://github.com/DGP-Studio/UnlockerIsland), the frame rate limit of Genshin Impact can be unlocked.

- **How to Use:**
  1. Run Snap Hutao with administrator privileges.
  2. In the "Injection" module, set the target frame rate.
  3. Click the "Launch Game" button.

#### Factors that may cause **frame rate limit unlock failure**

1. Snap Hutao is not kept running in the background.
2. The **Vertical Sync** option is not disabled in the game.
3. There is a "Maximum Frame Rate" setting in the graphics card driver.
4. There are similar "Power Saving Mode" options not disabled in the graphics card driver software.
5. Insufficient graphics card performance.
6. MSVCRT library is not installed.

### Field of View Adjustment

Adjusts the camera field of view and fog visibility to provide a better visual experience.

### Team Configuration Progress Bar Settings

Adjusts the display status of the team configuration progress bar. Only takes effect when switching teams under **normal conditions**.

## Inter-Process Linking

### Duration Statistics

Requires the installation and configuration of [Starward](https://github.com/Scighost/Starward). When enabled, Snap Hutao will call the Starward interface to record game duration.

### Better GI Linking

Requires the installation and configuration of [Better Genshin Impact](https://bgi.huiyadan.com/). When enabled, Snap Hutao will call its interface to enable automated features based on computer vision technology (OCR).

### Discord Activity

Requires the installation and configuration of [Discord](https://discord.com/). When enabled, Snap Hutao will generate real-time game status on your Discord profile card.

## Frequently Asked Questions

### How to Quickly Launch the Game Through Snap Hutao

- Correctly configure the advanced launcher feature in the main program.
- When the Snap Hutao main window is not closed, you can directly click "Homepage - Launch Game" to quickly launch.
- Click the Snap Hutao icon in the lower right corner of the taskbar (usually automatically hidden by the system) and select "Launch Game."

![quick-start](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png_.webp)

### Why Does the Game Login Status Expire, Causing the Account Switching Feature to Fail?

- Key factors in saving game login status include:
  - **Network Environment**: Frequent changes in the public IP address may cause the login status to expire.
  - **Device ID**: Replacing the network card or MAC address may cause the login status to expire.
- Common causes and solutions:
  1. Ensure that the account is logged in correctly and then enter the game.
  2. Close the game and confirm that the game process is completely terminated.
  3. Detect the account again to ensure the login status is recorded correctly.

### Error Code `31-4302` Appears When Starting the Game

If you encounter error code `31-4302`, you can solve this problem by enabling the "Launch Game - Injection - Let Me In" option.

### How to Recover the Game Program After a Failed Server Switch

::: info Function Principle Explanation
Snap Hutao only downloads the files required for server switching from the official Genshin Impact server, ensuring file safety and reliability. If frequent network problems cause the conversion to fail, the network connection to the target server may be poor. It is recommended to check your network connection or contact your network service provider.
:::

During server switching, if an unexpected exit or network problem causes the switch to fail, the game client may be damaged. Snap Hutao will prompt `Game path is incorrect, go to settings to change the game path`. At this point, the game's main program file may be lost. You can manually recover it by following these steps:

#### Manually Recover the Game Main Program

1. **Locate the Backup Files**:
    - Snap Hutao stores the backed-up game files before the switch in the `%userprofile%/Documents/Hutao/ServerCache` directory.
    - The backup files include: `GenshinImpact.exe` and `GenshinImpact_Data` (for the global server), or `YuanShen.exe` and `YuanShen_Data` (for the CN server).
2. **Check the Game Directory**:
    - The global server directory should contain `GenshinImpact.exe` and `GenshinImpact_Data`.
    - The CN server directory should contain `YuanShen.exe` and `YuanShen_Data`.
3. **Manually Recover the Files**:
    - Copy the files from the backup directory to the game's main program directory, overwriting the existing files.
    - If you need to switch server versions, rename the relevant files: for example, rename `YuanShen_Data` to `GenshinImpact_Data`.
4. **Launch the Game**:
    - Re-enter the "Launch Game" interface in Snap Hutao and launch the game.
    - If the error message disappears, you can continue to select the target server and complete the switch.

### How to Restore the `config.ini` Configuration File

In some cases (such as permission errors or failed server switches), the `config.ini` file may be lost, causing the game to fail to launch. You can manually create it and fill in the following content:

::: info
Modify the `game_version` parameter according to the actual game version.
:::

#### Example Configuration File Content

::: tabs#game_config_samples
@tab CN Server Official

```ini
[General]
channel=1
cps=mihoyo
game_version=5.3.0
sub_channel=1
sdk_version=
game_biz=hk4e_cn
uapc={"hk4e_cn":{"uapc":""},"hyp":{"uapc":""}}
```

@tab Global Server Official

```ini
[General]
channel=1
cps=mihoyo
game_version=5.3.0
sub_channel=0
sdk_version=
game_biz=hk4e_global
uapc={"hk4e_global":{"uapc":""},"hyp":{"uapc":""}}
```

:::

Save the configuration file to the `/Genshin Impact Game/` subdirectory of the game installation directory to restore normal launching.
