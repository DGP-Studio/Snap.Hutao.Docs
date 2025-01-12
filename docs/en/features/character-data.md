---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Character showcase, Character statistics]
order: 8
comment: false
description: The "My Characters" feature in Snap Hutao can retrieve and display detailed data of the characters under a Genshin Impact account, including level, constellations, talents, and artifact attributes, and provide analysis.
---

# My Characters

::: info Prerequisites
This feature requires logging in to a MiYouShe or HoYoLAB account. For specific login instructions, please refer to [MiHoYo BBS Account Switching](mhy-account-switch.md#mihoyo-bbs-account-switch).
:::

The "My Characters" feature can read the detailed data of all characters in the user's current account, including levels, constellations, weapons, talents, and artifacts, helping players optimize character development and management.

![Grid View Example](/images/202501/characters_data.webp)

## Synchronize Character Information

Click the "Synchronize Character Information" button in the upper right corner to update the following data:

- Character level and constellations
- Friendship level
- Weapon level and refinement rank
- Talent levels
- Outfit information
- Artifacts and their detailed attributes

## Add the Currently Selected Character to the Development Plan

1. Ensure that the character data has been synchronized.
2. On the "My Characters" page, select the character you want to add to the Development Plan.
3. Click the "Development Plan - Current Character and Weapon" button in the upper right corner.

- The system will automatically pre-fill the synchronized character level, talent level, and weapon level. Users can freely modify the target level.

![Development Example Image](/images/202501/character_develop.webp)

After adding, you can view the set development goals on the "Development Plan" feature page.

For a detailed feature description, please refer to the [Development Plan](./develop-plan.md#development-plan) document.

## Export Character Details to Clipboard

The "My Characters" page supports exporting character data as text:

- After selecting the target character, click the "Export Text to Clipboard" button in the upper right corner.
- The exported data is stored in the system clipboard and can be directly pasted and shared.
- An example of the text style is as follows:

```text
// =====================
// Kamisato Ayaka [Lv.90, ☆5, C6] [Lv.10, Lv.13 (10 +3), Lv.13 (10 +3)]
// ---------------------
// Mistsplitter Reforged [Lv.90, ☆5, R1]
// [Base ATK: 674] [CRIT DMG: 44.1%]
// ---------------------
// [HP: 12858]
// [ATK: 1016]
// [DEF: 784]
// [Elemental Mastery: 16]
// [CRIT Rate: 40.4%]
// [CRIT DMG: 262.3%]
// [Healing Bonus: 0.0%]
// [Incoming Healing Bonus: 0.0%]
// [Energy Recharge: 105.2%]
// [Cryo DMG Bonus: 61.6%]
// ---------------------
// 🌷 HP: 4780 [☆5 +20 Blizzard Strayer]
// [CRIT Rate: 7.0%][CRIT DMG: 13.2%][ATK: 14.6%][Energy Recharge: 5.2%]
// 🪶 ATK: 311 [☆5 +20 Blizzard Strayer]
// [CRIT DMG: 25.6%][CRIT Rate: 6.6%][HP: 269][HP: 5.3%]
// ⏳ ATK: 46.6% [☆5 +20 Blizzard Strayer]
// [DEF: 21][CRIT DMG: 15.5%][HP: 11.1%][CRIT Rate: 14.4%]
// 🍷 Cryo DMG Bonus: 46.6% [☆5 +20 Gilded Dreams]
// [Elemental Mastery: 16][ATK: 49][ATK: 15.2%][CRIT DMG: 13.2%]
// 👑 CRIT DMG: 62.2% [☆5 +20 Blizzard Strayer]
// [ATK: 15.2%][ATK: 33][CRIT Rate: 7.4%][HP: 299]
// =====================
```
