---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Real-time Notes, Expeditions, Resin]
order: 7
comment: false
description: The Real-time Note feature in Snap Hutao synchronizes dynamic information from Genshin Impact to your local computer by periodically refreshing your miHoYo account data. It allows you to set conditions for message reminders and push notifications based on your preferences. This feature helps you stay updated with the latest in-game events, announcements, and other relevant information in real-time.
---

# Real-time Notes

::: info

This features requires you to login in to your MiYouShe or HoYoLAB account in Snap Hutao,
you can check [MiHoYo BBS Account Switch](mhy-account-switch.html) for more information.

:::

![live-data-tracking](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01nh4t1T1g6dyI3Ikcn_!!1797064093.png_.webp)

## Add Role

- Click on `Add Role` button
- In the pop-up menu, find the UID you want to add, and click on the add button to its right
- Now, the game UID character's Real-time Notes should be displayed in the page
  - The Real-time Notes is set to refresh timely. You can click on the `Notification Settings` on the top right to manage it
- If you want to see the data at this moment, you can click `Refresh` button to refresh data immediately
- If a `-1034` error occurs during data refresh, it means that miHoYo's anti-bot risk control has been triggered. You can solve this problem by configuring the invisible verification in the Hutao settings.

## Verify Current User and Role

If you are using a MiYouShe account, then you account is very likely to be marked as robot-usage and leads to an anti-bot
verification. In this status, Real-time Notes data cannot be updated.

You can click on `Verify Current User and Role` button, Snap Hutao will pop up verification window. After finishing the
verification, then your account can be used to refresh data.

## Global Notification Settings

- In the `Notification Settings` on the top right, you can change the global settings of Real-time Notes, including:
  - Enable/Disable auto refresh
  - Refresh rate
  - Do not disturb setting
  - Prioritized notification
    - This prevent Snap Hutao's notification being closed automatically
  - Customized data forwarding Webhook
    - Snap Hutao allows user to forward Realtime Notes data to other applications to reduce account's request to MiHoYo API
    - Input your third party HTTP API endpoint in `Realtime Notes Webhook Url` setting field, and Snap Hutao will forward the raw data through `POST` requests

## Independent Settings for Each Accounts

- Snap Hutao allows different settings on each Real-time Notes account
- Hover the cursor over the form of Real-time Notes account that needs to set
- Click on the setting button on it, and you can modify these settings:
  - Original Resin threshold value
  - Realm Currency threshold value
  - Parametric Transformer notification
  - Daily Commission notification
  - Expeditions notification
  - Display in the main page (feature coming soon)
- Click on `Save` and you can save the settings

## Delete Daily-Notes Account

- Hover the cursor over the form of Real-time Notes account that needs to delete
- Clock on the remove button on it, and you can remove the corresponding account

## FAQ

### Why does setting up automatic refresh of real-time notes prompt "Failed to modify Scheduled Task"

The automatic refresh of real-time notes relies on task scheduling. In order to avoid possible permission issues, Snap Hutao will force scheduled tasks to be set in non-administrator mode.

If you turned on automatic refresh in the old version, you can solve the problem by manually deleting the old task schedule in Task Scheduler. The name of the scheduled task is `SnapHutaoDailyNoteRefreshTask`.

If you did not turn on automatic refresh in the old version, then this problem is caused by the Windows user account you are currently using having insufficient permissions. If your current user account is an administrator account, you can only solve this problem by reinstalling the system.
