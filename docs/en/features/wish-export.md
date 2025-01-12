---
headerDepth: 2
category: [Feature, Tutorial]
tag: [Wish Export, Gacha, Wish]
order: 5
comment: false
description: The Wish Export feature allows players to freely export their current wish data from their game accounts and permanently store and back it up locally, enabling long-term data accumulation for tracking and analyzing wish data.
---

# Wish History

The gacha system is one of the core gameplay elements in Genshin Impact. Whether for commemorative or show-off purposes, or for seriously planning your pulls, analyzing historical gacha data is crucial. However, Genshin Impact only provides one year of wish history, which isn't enough for long-term players (~~though they do track how many of Timmie's pigeons you've eliminated in a year~~).

Therefore, the Wish Export feature of Snap Hutao was created to help players transfer their wish data locally for permanent storage and long-term analysis.

For the technical principles of exporting Genshin Impact wish records, please refer to [**Gacha System and Export Principles**](../advanced/Gacha-system-and-export-principal.html).

![Wish Export](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01otuXYg1g6e0wnNwX2_!!1797064093.png_.webp)

As shown above, Snap Hutao's Wish Export feature helps users clearly track and analyze their gacha data, including:

- Total number of wishes
- Current pity count
- Number and percentage of weapons and characters obtained by different rarities
- Number of wishes per 5-star pull and pity status

Additionally, **Snap Hutao Cloud users can access gacha prediction data calculated by the cloud servers**.

::: note Delay in Genshin Impact Wish Records
Snap Hutao's data source is the miHoYo server. Therefore, recently made wishes may not be immediately available.
When you see the latest records in the in-game wish history, the corresponding statistics can be obtained in Snap Hutao.
:::

## Fetch Wish Data

### SToken Refresh <Badge text="Recommended" type="tip" />

::: info Hint

- A logged-in MiYouShe account is required to use the SToken refresh method. Please refer to the [MiYouShe Account Switching](mhy-account-switch.md) document to log in to your account in Snap Hutao.
- The SToken refresh method does not currently support the Global server (HoYoLAB).
  :::

1. Ensure that the MiYouShe account from which you want to retrieve records is logged in to Snap Hutao.
2. Go to the "Wish History" page in the left-hand menu bar.
3. Click the "Refresh" button in the upper-right corner and select "SToken Refresh."
4. Wait for the process to complete, and then you can view the latest wish records.

### Web Cache Refresh <Badge text="Global Server Supported" type="tip" />

1. Launch Genshin Impact and enter the game, then open the in-game wish history.
2. In Snap Hutao, go to the "Wish History" page in the left menu, click the "Refresh" button in the upper-right corner, and select "Web Cache Refresh."

::: tip If the web cache refresh function malfunctions:

- Click on "Settings-Storage Space" in the bottom-left menu of the program.
- Execute the "Delete In-Game Web Cache" operation.
- Reopen the wish history in the game.
- Try refreshing the wish records again.
  :::

### Manual URL Input <Badge text="Global Server Supported" type="tip" />

1. If you have obtained the wish history URL from another tool, select "Manual URL Input" and follow the prompts.
2. Please note that the URL **has a time limit**, so complete the operation as soon as possible.

### Full Refresh Mode

- By default, Snap Hutao will stop importing after matching existing local records to avoid duplicates.
- If you wish to fully retrieve all historical records from the Genshin Impact server, select "Full Refresh" before starting the refresh process.

::: tip

- **Not selecting full refresh** will not cause wish data loss.
- **Selecting full refresh** will not cause duplicate data imports.
  :::

## Import UIGF Wish Data <Badge text="UIGF" type="info" />

Snap Hutao supports importing wish records in `UIGF data format`[^UIGF-Org]. Follow these steps to import:

1. Export the UIGF data file from another tool.
2. In Snap Hutao, click "Settings-Wish History-Migration-Import."
3. Select the `UIGF Json` data file in the file selector that appears.
4. Confirm the data and complete the import.

::: warning Upgrading Old UIGF Files
If the wish record version is too old, click "Settings-Wish History-Migration-Upgrade Older UIGF Files", complete the upgrade and then import.
:::

## Export UIGF Wish Data <Badge text="UIGF" type="info" />

Snap Hutao supports exporting wish records to a Json file in `UIGF data format`. Follow these steps to export:

1. Go to "Settings" in the left-hand menu bar.
2. Find the "Wish History-Migration" section and click the "Export" button.
3. Select the account whose data you need to export.
4. Choose a file save location in the pop-up window, and click "Export" to complete the operation.

::: tip
You can export wish records for multiple accounts to a single file without performing separate operations for each one.
:::

## Wish Record Cloud Sync

> Cloud sync is based on a Snap Hutao Cloud account. You must [register and log in to a Snap Hutao account](hutao-settings.md#snap-hutao-account) to use it.

- **Upload**: In the "Wish History" interface, select the archive to be synced, click the "Snap Hutao Cloud" button, and then select "Upload Current Archive".
- **Download**: Click the "Snap Hutao Cloud" button and then click the download button on the right side of the archive corresponding to the UID to complete synchronization.
- **Delete**: Click the "Snap Hutao Cloud" button and then click the delete button on the right side of the archive corresponding to the UID to remove data from the cloud.

[^UIGF-Org]: UIGF (Unified Interchangeable Genshin Data Format) is provided by [UIGF-Org](https://uigf.org/).
