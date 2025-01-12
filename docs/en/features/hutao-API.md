---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Sprial Abyss, Hutao Database, Spiral Abyss Statistics]
order: 9
comment: false
description: Snap Hutao's built-in Hutao Database feature helps players archive and query Spiral Abyss challenge data, providing comprehensive statistical analysis and supporting players to upload data to the database.
---

# Hutao Database / Abyss Statistics

Snap Hutao provides two main Spiral Abyss challenge statistics functions:

- **Schedule Details**: Helps players save data for each period of the Spiral Abyss challenge for personal data review and statistics.
- **Current Statistics**: Displays Spiral Abyss data from all players who have uploaded it to the Hutao Database, providing players with a reference for character and team usage.
  - "Current Statistics" relies on the "Schedule Details" data submitted by players.

::: tabs
@tab Schedule Details
![personal-record-details](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ykD0CZ1g6e0sAQMn1_!!1797064093.png_.webp)
@tab Character Usage Rate
![character-usage-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01dvdsCG1g6e0xyDPo5_!!1797064093.png_.webp)
@tab Character Appearance Rate
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Pdv5w01g6e0u1ewov_!!1797064093.png_.webp)
@tab Team Appearance Count
![hutaoapi](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01k1W4tw1g6e0wOyjdf_!!1797064093.png_.webp)
@tab Character Ownership Rate
![character-held-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01bQvukt1g6e0uuU2Fh_!!1797064093.png_.webp)
:::

## Viewing Abyss Data

::: warning Data Scope Limitations
All calculations are based on **player data uploaded to the Hutao Database** and may not represent the average data of all Genshin Impact players. It is for reference only.
:::

::: info Data Refresh Cycle

1.  Spiral Abyss statistics data (character usage rate, character appearance rate, team appearance) are automatically updated at 4 AM on the 1st and 16th of each month in the time zone of the account's server.
2.  If a user does not re-upload data within 30 days, their character ownership records will be cleared.
    :::

- Click "Spiral Abyss" in the left menu bar and select the "Current Statistics" tab.
- View Data:
  - **Character Usage Rate**:
    - Formula: Character Usage Rate = Number of times a character appears in the current floor[^first] / Total number of records of players who own that character on that floor.
  - **Character Appearance Rate**:
    - Formula: Character Appearance Rate = Number of times a character appears in the current floor[^first-2] / Total number of records on the current floor.
  - **Character Ownership Rate**:
    - Formula: Character Ownership Rate[^third] = Number of players who own the character / Total number of players.
  - **Team Appearance Count**: Displays the ranking of team combinations by their number of appearances.

## Uploading Spiral Abyss Data

### Using the Snap Hutao Client

::: important Snap Hutao Cloud Privilege Reward
After successfully submitting data for the first time, you will receive a 3-day "Snap Hutao Cloud Wish Record Backup Service" privilege as a reward (even if you have not cleared Floor 12).
:::

1. Click "Spiral Abyss" in the left menu bar.
2. Click "Refresh Data" in the upper right corner to ensure Snap Hutao has obtained the latest personal Spiral Abyss data.
3. Click the "Upload Data" button to submit the data.

- Uploading may take a few seconds. A success message will be displayed when complete.

### Using a Browser

::: info
This method does not apply to HoYoLAB.
:::

1. Open the [JavaScript script](/upload-abyss-data.js) link and copy the code.
2. Create a new bookmark in your browser:
   - Enter a suitable name.
   - Paste the copied code into the bookmark URL.
     ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)
3. Open MiYouShe and wait for the page to load, then click the bookmark.
4. Confirm the upload prompt to complete the upload.

## Data Sharing

Snap Hutao jointly maintains the Hutao Database with other developers. Users can view Spiral Abyss statistics and upload data in multiple applications. Currently, collaborating applications include:

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin for Yunzai-Bot
desc: QQ Robot Miao-Plugin
logo: /images/202312/miao-plugin-logo.webp
link: https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: Genshin Pizza Helper
desc: Genshin Impact tool for MacOS/iOS
logo: /images/202312/genshin-pizza-helper-logo.webp
link: https://apps.apple.com/cn/app/%E6%8A%AB%E8%90%A8%E5%B0%8F%E5%8A%A9%E6%89%8B/id1635319193
```

```component VPCard
title: Ysin
desc: WeChat mini-program Ysin
logo: /images/202312/ysin-logo.png
link: https://yuanshen.xin/
```

</div>

[^first]: If the same character appears multiple times within different chambers of the current floor, they are only counted once.

[^first-2]: If the same character appears multiple times within different chambers of the current floor, they are only counted once.

[^third]: Having the character counts as ownership, even if they did not appear in the Spiral Abyss. Uploading a record counts the player in the total player statistics.
