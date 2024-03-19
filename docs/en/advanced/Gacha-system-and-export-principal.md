---
headerDepth: 2
category:
  - FAQ
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao utilizes various methods to obtain users' login information and combines it with the Genshin Impact API to retrieve gacha records.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# Gacha System and Export Principle

Snap Hutao's Gacha system underwent an overhaul compared to Snap Genshin, experiencing a complete architectural redesign.

This article will explain the Genshin's wish logging mechanism and the technical principles behind the Gacha export feature in the Hutao Toolbox.

## Obtaining Wishes

Acquiring wish records requires querying miHoYo's API.

Regarding this API, there are a few key points to note:

- Through miHoYo's server API, you can only access wish records from the past 6 months.
  - This is also the source of wish records in the original Genshin client.
- The API has rate limits; too many requests too quickly can lead to subsequent failures, making it impossible to retrieve data.

To request this API, we need four crucial parameters.

- Currently, several methods can obtain these parameters:
  - Traversing Unity's log files to find URLs for wish records opened by the user
  - Proxying local traffic to filter wish record URLs
  - Looking through the CefBrowser's browser cache to find wish record URLs
  - For Cookies containing Stoken, calling the genAuthKey API to obtain parameters
  - Advanced users manually inputting relevant URLs

Upon requesting the API, you receive fragmented wish records. Concatenating them provides a complete wish record list.

## Wish Storage

After obtaining the complete wish record list, you can easily serialize it into a local database. When necessary, deserialization from the database presents it to the user.

Subsequent requests to the server only need to compare new data requests against the database's existing data.

This way, users can permanently store their account's complete wish records.

## UIGF Format

> Unified Interchangeable GachaLog Format

UIGF is a unified wish record data exchange standard, advocated, launched, and **persistently maintained** by us in collaboration with other wish record applications.

Standardized data formats enable users to transfer wish records between different tools for Genshin, each leveraging its distinctive functionalities.

### Importing Wishes

When utilizing the UIGF data format, you can import data previously stored in other applications.

Hutao, during import handling, compares the earliest index (ID) existing in local storage and only imports older data.

(This is because newer data of higher precision is always available from miHoYo's servers.)

### Exporting Wishes

~~Not yet implemented; under design~~ Already implemented
