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

# 🎉 Successfully Updated to Version 1.13.0

[简体中文](/zh/statements/latest.html) | **English**

- **[🎉New]** Changed the program icon - Su Xue Tao Hong
- **[🎉New]** Added calendar server time zone settings, allowing adjustment of the time zone used by the homepage calendar card
- **[🎉New]** Added metadata loading indicator to the title bar
- **[🎉New]** Added Hutao Passport page and removed the Hutao Passport section from the settings page
  * Added email reset function
  * Added refresh user information function
  * Integrated redemption code function
- **[🎉New]** Added static image file download prompt to the guide interface
- **[🎉New]** Reintroduced MiYouShe QR code login function in the user panel
- **[✨Optimization]** Hutao Passport's change password/delete account now defaults to the current logged-in account
- **[✨Optimization]** Hutao Passport's wish record cloud service and CDN cloud service no longer display as 1970 when no time is obtained
- **[✨Optimization]** Display DNS information when network request fails
- **[✨Optimization]** Adjusted Hutao notifications display, now severe (red) / important (yellow) notifications cannot be manually closed
- **[✨Optimization]** Added loading indicator/refresh button to the compact web window
- **[✨Optimization]** Optimized the issue where frequent window resizing might cause content flickering
- **[✨Optimization]** The game launch function now correctly prompts for empty paths
- **[✨Optimization]** The game launch function now correctly disables the select game path button
- **[✨Optimization]** Improved crash popup when using unsupported custom background images [#2335](https://github.com/DGP-Studio/Snap.Hutao/issues/2335)
- **[✨Optimization]** The new window popped up by the game file management in the game launch function now maintains the same theme style as the main window
- **[✨Optimization]** The game file management in the game launch function now supports resuming installation after interruption
- **[✨Optimization]** The game file management in the game launch function now calculates an additional 1 GB of chunk file size
- **[✨Optimization]** The game file management in the game launch function now dynamically cleans up unnecessary files during installation
- **[✨Optimization]** The guide interface no longer automatically proceeds to the next step after selecting a language
- **[✨Optimization]** In-app error prompts can now copy text
- **[✨Optimization]** Adjusted the display effect of the main attributes of artifacts on the My Characters page to distinguish them from sub-attributes
- **[✨Optimization]** The My Characters interface now displays a default prompt after a search yields no results
- **[✨Optimization]** Adjusted the UI of the Hutao Cloud function on the wish record page
- **[✨Optimization]** Now checks if the executable file exists when automatically searching for the game path
- **[✨Optimization]** The resin estimation function on the material statistics tab of the Dev Plan page now remembers the selected world level
- **[✨Optimization]** The Dev Plan page now displays talent levels in separate rows for cultivation items
- **[🔨Fix]** Fixed an issue where some devices could trigger certain keys without using the quick click function
- **[🔨Fix]** Fixed a crash issue on devices with high scaling when the window is small [#2349](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **[🔨Fix]** Fixed a crash issue on some devices when deleting cultivation items [#2290](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **[🔨Fix]** Fixed an issue where importing achievements from other applications would not display the import popup when already on the achievements page [#2306](https://github.com/DGP-Studio/Snap.Hutao/issues/2306)
- **[🔨Fix]** Fixed an issue where multiple dialogs might be opened in specific situations [#2307](https://github.com/DGP-Studio/Snap.Hutao/issues/2307)
- **[🔨Fix]** Fixed an issue where the game path could not be changed after pre-downloading the game [#2317](https://github.com/DGP-Studio/Snap.Hutao/issues/2317)
- **[🔨Fix]** Fixed an issue where some devices could not correctly enumerate container applications, causing crashes [#2339](https://github.com/DGP-Studio/Snap.Hutao/issues/2339)
- **[🔨Fix]** Fixed an issue where Tartaglia's talent bonus to normal attack skill level was not displayed on the My Characters page
- **[🔨Fix]** Fixed an issue where the number of prompts was incorrect when adding to the Dev Plan from the My Characters page
- **[🔨Fix]** Fixed an issue where the usage rate statistics on the Imaginarium Theater page were not vertically centered
- **[🔨Fix]** Fixed an issue where logging in again after Cookie expiration would still display network errors
- **[🔨Fix]** Fixed an issue where the quick click function did not stop clicking after turning off the quick click switch
- **[🔨Fix]** Fixed an issue where the character name card background was not vertically centered in the grid view on the My Characters page
- **[🔨Fix]** Fixed an issue where some icons in the search box suggestions were not fully displayed in My Characters/Character Data/Weapon Data
- **[🔨Fix]** Fixed an issue where the window size might initialize to an incorrect size in specific situations
- **[🔨Fix]** Fixed an issue where pools that had not yet started were included in the timing tab on the wish record page
- **[🔨Fix]** Fixed an issue where real-time notes did not send notifications correctly
- **[🔨Fix]** Fixed a layout issue in the character exploration section of real-time notes at certain scaling rates