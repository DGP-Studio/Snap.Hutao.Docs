---
headerDepth: 2
category: [FAQ]
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao uses various methods to obtain users' login information and combines it with the Genshin Impact API to retrieve wish records.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# Gacha System and Export Principles

Snap Hutao's wish system has undergone a complete architectural redesign compared to Snap Genshin.

This article will explain the wish record mechanism of Genshin Impact and the technical principles behind the wish export feature of Snap Hutao.

---

## Obtaining Wishes

Acquiring wish records requires querying miHoYo's API.

Regarding this API, there are the following key points to note:

- Through miHoYo's server API, you can only access wish records from the past year.
  - This is also the source of wish records in the Genshin Impact client.
- The API has request rate limits; too many requests too quickly can lead to subsequent failures, making it impossible to retrieve data.

### Key Parameters for Requesting the API

To request this API, we need the following four key parameters:

1. Banner Type
2. Wish Item
3. Time
4. Wish Record ID

- Currently, known methods for obtaining these parameters include:
  1. Traversing Unity's log files to find URLs for wish records opened by the user.
  2. Proxying local traffic to filter wish record URLs.
  3. Searching the `CefBrowser`'s browser cache to find wish record URLs.
  4. Using a Cookie containing `SToken` to call the `genAuthKey` API and obtain the parameters.
  5. Allowing advanced users to manually input relevant URLs.

### Data Concatenation and Generation of Complete Records

After requesting the API, you can obtain fragmented wish records. Concatenating these records generates a complete wish record list.

---

## Wish Storage

The complete wish record list, once obtained, is serialized and stored in a local database, and deserialized when needed to present it to the user.

- In subsequent requests, Snap Hutao only needs to compare with the data in the database to obtain the newly added data.
- This approach ensures that users can permanently save the complete wish records for their accounts.

---

## UIGF Format

> Uniformed Interchangeable GachaLog Format Standard

`UIGF` is a unified wish record data exchange standard that we, in collaboration with other wish record applications, advocate, launched, and **persistently maintain**.

The standardized data format allows users to freely transfer data between different tools, thereby utilizing the unique functions of each tool.

### Importing Wishes

Using the `UIGF` data format, you can import wish record data stored in other applications.

- When importing data, Snap Hutao compares the earliest index (ID) in local storage and only imports older records.
- New data can always be obtained from miHoYo's servers, and its original data has higher precision.

### Exporting Wishes

Snap Hutao supports saving wish records in the `UIGF` data format as files and outputting them to a user-specified folder.

Users can continue to use their wish records in other tools that support the `UIGF` format through the exported files.
