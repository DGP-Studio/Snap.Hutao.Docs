---
comment: false
externalLinkIcon: false
index: false
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
sidebar: false
navbar: false
footer: false
copyright: false
editLink: false
breadcrumbExclude: true
breadcrumb: false
lastUpdated: false
contributors: false
backToTop: false
pageInfo: false
---

# 🎉 Successfully Updated to Version 1.13.7

[简体中文](/zh/statements/latest.html) | **English**

- **[🔨Fix]** Fixed an issue where closing the game process during game startup under certain conditions could cause the program to crash
- **[🔨Fix]** Fixed an issue where selecting the data directory to the root of a disk partition and then opening the settings page could cause the program to crash
- **[🔨Fix]** Fixed an issue where failing to download wallpaper when the wallpaper source is not local could cause the program to crash
- **[🔨Fix]** Fixed an issue where failing to fetch game announcements could cause the program to crash
- **[🔨Fix]** Fixed an issue where closing the web window before WebView2 finished loading could cause the program to crash
- **[🔨Fix]** Fixed an issue where wallpaper switching with local wallpaper sources could cause the program to crash
- **[🔨Fix]** Fixed an issue where closing the main window while a notification is about to show or hide could cause the program to crash
- **[🔨Fix]** Fixed an issue where switching/deleting users while loading the My Characters page could cause data synchronization issues
- **[🔨Fix]** Fixed an issue where using auto-click/auto-press under system permission pages could cause the program to crash, now it will automatically stop the corresponding operation
- **[🔨Fix]** Fixed an issue where refreshing/backward operations before WebView2 finished loading could cause the program to crash
- **[🔨Fix]** Fixed an issue where managing game functions on the game launch page with certain non-fixed SSD devices could cause the program to crash, now it defaults to HDD for subsequent operations
- **[🔨Fix]** Fixed an issue where attempting to reopen the task area icon menu upon program exit could cause the program to crash
- **[✨Optimization]** Added WebView2 load failure prompts to the web window
- **[✨Optimization]** The compact web window can now be resized to any size
- **[✨Optimization]** Game launch now checks for already running game processes and attempts to take over
