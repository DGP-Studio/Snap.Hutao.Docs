---
headerDepth: 0
category: [Feature, Tutorial]
tag: [wish export, gacha, wish]
order: 5
comment: false
---

# Wish History

Gacha is one of the core gameplay in Genshin Impact. Whether it's for commemorative and show-off purposes,
or for serious planning for a gacha strategy, it's very important to perform statical analysis on historical gacha record.
However, Genshin Impact only provides players with six months of gacha records, which is not user-friendly ~~(although they
still keep tracking how many Timmie's pigeons you've killed for the whole year)~~

Therefore, we need to use the gacha records from these six months to retrieve the data and transfer the record to our
local device. This is the purpose of wish history export feature in Snap Hutao.

Regarding the technical principles of exporting Genshin Impact gacha records,
you can refer to our article on [Gacha System and Export Principles](../advanced/Gacha-system-and-export-principal.html)

![wish export](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01X360be1g6e0wf4UNv_!!1797064093.png_.webp)

**As shown in the above figure, through the wish history feature in Snap Hutao, you can clearly obtain the following information:
total number of wishes, current pity count, quantity and percentage of obtained items with different rarity, number of
times a 5-star rarity item was not obtained and the current pity status.**

**Additionally, user with Hutao Cloud can view prediction data calculated by Hutao Cloud server**

::: note Delay in Gacha Data Export

Snap Hutao retrieves gacha records from the MiHoYo servers, which means that recently made wishes may not be immediately
available. When you see the latest batch of gacha records in the game's own history, then you can then obtain the corresponding
statistics from Snap Hutao.

:::

## Fetch Wish History

### SToken Refresh <Badge text="Recommend" type="tip" />

::: info Hint

- This method requires user to sign in to MiHoYo BBS account in Snap Hutao, refer to
  [MiHoYo BBS Account Switch](mhy-account-switch.md) to get to know how to sign in to your MiHoYo BBS account
- **SToken Cookie refresh method does not support oversea server (HoYoLAB)**

:::

- Make sure the account you want to refresh wish history has been signed in to Snap Hutao
- Switch to `Wish History` feature page in Snap Hutao
- Click on `Refresh` button and select `SToken Refresh`
- Wait for refresh task to complete

### Refresh with Web Cache <Badge text="Oversea Server Supported" type="tip" />

- Switch to `Wish History` feature page in Snap Hutao
- Start the game, go to in-game wish history page
- Go back to Snap Hutao, clock on `Refresh` button and select `Refresh with Web Cache`
- Wait for refresh task to complete

::: tip
If errors keep occur:

- Go to settings page in Snap Hutao
- Execute operation `Delete game embeeded browser web cache`

:::

### Input URL Manually <Badge text="Oversea Server Supported" type="tip" />

- If you get your personal wish history URL, you can select `Manual Input` and submit your wish history URL
- Be aware that the URL is time-sensitive

### Full Refresh

By default, Snap Hutao will stop importing gacha records once it matches a Wish ID that already exists locally.
However, if you wish to obtain all the historical records from the Genshin Impact servers
(even if they are already present in your local wish history), you can check the "Full Refresh" option.

Not selecting `Full Refresh` will **not** cause you to lose your wishing data,
and selecting `Full Refresh` will **not** cause your local records to mistakenly record the same wishing data twice.

### Import UIGF Wish History Data from Other Applications <Badge text="UIGF" type="info" />

Snap Hutao supports importing wish history data file that in `UIGF data format`[^UIGF-Org]

If you need to import such type of data, you can:

- Start Snap Hutao, switch to `Wish History` feature page
- Select `Import`
- Select your UIGF Json data file
- Check the imported file information and confirm to import

## Export Wish History Data <Badge text="UIGF" type="info" />

Snap Hutao support exporting wish history data to a Json file written in UIGF data format

If you need to export the wish history data, you can:

- Start Snap Hutao, switch to `Wish History` feature page
- Switch to the archive you want to export, and select `Export`
  - In the pop-up window, confirm your export path
- Confirm and export data

## Wish History Cloud Sync <Badge text="Beta" type="info" />

> Wish history cloud sync is designed on Snap Hutao Account.
> You need to [register an account in the settings](hutao-settings.md#snap-hutao-account) to use this feature

With this feature, you can upload your wish history to Hutao Cloud, to avoid risk of losing data, and make it easier to
transfer data between devices.

### Upload

- In wish export page, select the archive you need to sync data
- Click `Snap Hutao Cloud` button on the top right
- Click `Upload Current Wish Archive`, and then your data will be backup to the cloud

### Download

- In wish export page, Click `Snap Hutao Cloud` button on the top right
- Click download button on the right side of UID which data needs to be downloaded

### Delete

- In wish export page, Click `Snap Hutao Cloud` button on the top right
- Click delete button on the right side of UID which data needs to be deleted

[^UIGF-Org]: Unified Standardized GenshinData Format is provided by [UIGF-Org](https://uigf.org/)
