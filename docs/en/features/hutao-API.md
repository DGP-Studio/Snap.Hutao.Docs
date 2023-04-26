---
headerDepth: 0
category: [Feature, Tutorial]
order: 6
---

# Hutao Database / Abyss Record

Snap Hutao offers two major statistic features associated with Spiral Abyss challenge

- `Abyss Stats` on the sidebar is a feature designed to help players who are not familiar with Genshin Impact's
  battle system to build teams, pass the Abyss and obtain rewards by collecting and displaying challenge stats data from
  the Spiral Abyss from a large number of players.
- `Abyss Record` on the sidebar is a statistical feature that helps individuals review their gaming experience and
  personal data collection by saving their challenge data from each period of the Spiral Abyss.
  - Many players contribute to the Hutao Database's `Abyss Stats` dataset by uploading their personal `Abyss Records`

::: tabs

@tab Character Usage
![character-usage-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01VNtgaU1g6du5Mh1Oo_!!1797064093.png)
@tab Character Appearance
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01AKGIZn1g6du8k0Rhb_!!1797064093.png)
@tab Teams Appearance
![hutaoapi](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01ZRakBS1g6duBCh0c1_!!1797064093.png)
@tab Character Constellation
![character-held-rate](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01EUjFsJ1g6du8k0NYy_!!1797064093.png)
@tab Personal Statistics
![personal-record-stat](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01xMLXhn1g6du6lPUDD_!!1797064093.png)
@tab Personal Stats Details
![personal-record-details](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01xtWJfr1g6dtvjZLWZ_!!1797064093.png)

:::

## View Abyss Stats

::: warning Data Scope Limitation
All calculated data are based on the player data **uploaded to the Hutao Database** and cannot represent the average
data of **all** Genshin Impact players. The data is for reference only.
:::

::: info Stats Data Refresh Cycle

1. Abyss Stats (character usage, character appearance, teams appearance) wil be automatically reset on 1st and 16th day
   of each month on the gaming server timezone of your account
   - You can view real-time total uploaded data by clicking `Details` button in the `Abyss Stats` page
2. If user does not upload its record for 30 days, its character constellation data will be reset in the database

:::

- Enter Abyss Records page by clicking `Abyss Stats` on the sidebar menu
- Click `Character Usage` tab to view character usage rate statistics
  - Character Usage Rate = Character Appearance in this Floor [^first] / Number of Player who Own this Character
- Click `Character Appearance` tab to view character appearance rate statistics
  - Character Appearance Rate = Character Appearance in this Floor [^first-2] / Total Number of Abyss Record of this Floor
- Click `Teams` tab to view teams appearance time statistics
  - Team appearance is the appearance time rank of different characters team combination
- Click `Character Constellation` tab to view character constellation statistics [^second]
  - Character Constellation [^third] = Number of Player who Own this Character / Total Number of Player

## Upload Abyss Data

### Use Snap Hutao Client

- Enter Abyss Records page by clicking `Abyss Records` on the sidebar menu
- Click `Refresh Data` button to make suer Snap Hutao is storing your latest Spiral Abyss record
- Click `Upload Data` to upload your Spiral Abyss records
  - This may take a few seconds, you will see the following success message after your data is submitted
    ![upload-hutaoapi](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Zt7yQp1g6duBDALeX_!!1797064093.png)

### Use Browser

::: info
This method does not support HoYoLab
:::

- Open our [JavaScript file](/upload-abyss-data.js), copy the entire content
- Create new bookmark in your browser
  - Fill with a suitable name
  - in the `URL` field, fill with script you just copied
    ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png)
- Visit MiYouShe, wait the page to be fully loaded, and then click the bookmark
- Wait for a moment, and you will see data upload request window
- After confirm it, the browser will upload your abyss record, do not turn off your browser
- You will receive a notification when your data is submitted

[^first]: When same character appearances in the same floor but different level, appearance time only count for 1
[^first-2]: When same character appearances in the same floor but different level, appearance time only count for 1
[^second]: Character constellation data is a separate data set from Spiral Abyss records database
[^third]:
    Once owned this character, it's counted into database even it's not appearing in Spiral Abyss; Once upload your
    Abyss stats, all collected characters will be included
