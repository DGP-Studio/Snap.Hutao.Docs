---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Real-time Notes, Expeditions, Resin]
order: 7
comment: false
description: The Real-time Notes feature in Snap Hutao synchronizes dynamic information from Genshin Impact to your local computer by periodically refreshing your MiYouShe data. It allows you to set conditions for message reminders and push notifications based on your preferences.
---

# Real-time Notes

::: info Prerequisites
This feature requires you to log in to your MiYouShe / HoYoLAB account in Snap Hutao. See the [MiHoYo Multi-Account Switching](mhy-account-switch.md) document for login instructions.
:::

![live-data-tracking](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp)

## Adding Real-time Notes

1. Click the "Add Real-time Notes" button.
2. In the "Add Real-time Notes" pop-up window, find the game character UID you want to add and click the plus button to its right.
3. The added game character will be displayed on the "Real-time Notes" page.
   - Real-time Notes will automatically refresh data at fixed intervals.
   - Click "Notification Settings" in the upper-right corner of the window to set the refresh interval.
4. To get the latest data immediately, click the "Refresh Now" button.
5. If a `-1034` error occurs when refreshing data, it means that miHoYo's anti-bot risk control mechanism has been triggered. This can be resolved by configuring invisible verification in the Snap Hutao settings.

## Verifying User and Character

If you are using a MiYouShe account, the anti-bot mechanism may trigger a verification code, preventing Real-time Notes data from refreshing.
The following steps can solve this issue:

1. Click the "Verify Current User and Character" button in the upper-left corner of the Real-time Notes page.
2. Snap Hutao will display a verification window. Complete the verification to refresh the data for the affected account.

## Global Notification Settings

Clicking "Notification Settings" in the upper-right corner of the window allows you to configure the global behavior of the Real-time Notes feature, including:

- **Enable/Disable Automatic Data Refresh**.
- **Set the Automatic Data Refresh Interval**.
- **Do Not Disturb Mode**:
  - When enabled, notifications will only appear in the system notification center.
- **High Priority Notifications**:
  - Prevents notifications from being automatically moved to the action center, but may interfere with daily use.
- **Custom Data Forwarding Webhook**:
  - Snap Hutao allows users to forward Real-time Notes data to third-party programs to reduce direct requests to the miHoYo API.
  - Enter the third-party program's `HTTP API` interface address in the "Real-time Notes Webhook URL" field. Snap Hutao will forward the raw data to this interface using a `POST` request.

## Account-Specific Settings

1. Hover your mouse over the Real-time Notes window of the character whose settings you want to modify.
2. Click the settings button in the upper-right corner of the window to access the following settings options:
   - **Original Resin Reminder Threshold** (range: 0–200)
   - **Realm Currency Reminder Threshold** (range: 0–2400)
   - **Enable Parametric Transformer Reminder** (on/off)
   - **Enable Daily Commission Cap Reminder** (on/off)
   - **Enable Expedition Completion Reminder** (on/off)
3. After modifying the settings, click the "Save" button to save the current settings.

## Deleting a Character

1. Hover your mouse over the Real-time Notes window of the character you want to delete.
2. Click the remove button in the upper-right corner of the window to delete the Real-time Notes for that character.

## Frequently Asked Questions

### Why does setting automatic refresh for Real-time Notes display "Failed to modify Scheduled Task"?

- Automatic refresh of Real-time Notes relies on the Windows Task Scheduler.
- To avoid permission issues, Snap Hutao sets task schedules in non-administrator mode.

**Solutions:**

1.  If you have enabled automatic refresh in an older version, you can manually delete the old task schedule in Task Scheduler. The task schedule name is `SnapHutaoDailyNoteRefreshTask`.
2.  If you have not enabled task schedules before, the current Windows user account may not have sufficient permissions. Try using an administrator account.
3.  If the problem persists, you may need to reinstall the system.
