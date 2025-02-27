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

# 🎉 Successfully Updated to Version 1.13.6

- **[🎉New]** Added time zone settings to the Dev Plan
  - Time zone will be set when creating a plan
  - Time zone cannot be changed after the plan is created
  - Existing Dev Plans will default to the time zone corresponding to the calendar server in Hutao settings
- **[🔨Fix]** Fixed an issue where importing achievements from other applications would not display the import popup
- **[🔨Fix]** Fixed a crash issue when Real-time Notes auto-refreshes in the background [#2491](https://github.com/DGP-Studio/Snap.Hutao/issues/2491)
- **[✨Optimization]** Adjusted telemetry method, now using Sentry for better exception information collection and processing
- **[✨Optimization]** After logging into the user panel for the first time, the default character configured in MiYouShe will now be selected first [#2391](https://github.com/DGP-Studio/Snap.Hutao/issues/2391)
- **[✨Optimization]** Modified the transparency logic of the compact web window
  - The window will now be opaque when focused
  - The window will be semi-transparent when out of focus
