---
headerDepth: 2
icon: iconfont icon-ask
category:
  - FAQ
order: 1
description: This page lists common issues and solutions related to user networking and program lifecycle problems.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/faq.html&has_description=False
---

# Other FAQ

### How to Create Desktop Shortcut (with No Admin Privilege)

::: tip Community Power

Thanks to [CzHUV](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12) for the solution.

:::

- Use `Win+R` to start run, in the window input `shell:AppsFolder` ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png)
- In the new pop-up window, find Snap Hutao
- Right lick on it, and click `Create shortcut`
- Confirm the operation and you will get the desktop shortcut

### How to Create Desktop Shortcut (With Admin Privilege)

Click `Create Desktop Shortcut` in the settings page.

### How to run Snap Hutao when Windows starts

::: warning

**This is a workaround solution.** Approaches may fail in practice due to various problems.

:::

- Create a bat file, content refers to [this Issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184), it allows bat to run Snap Hutao with Administrator privilege
- Create a Scheduled Task, run the bat when Windows startup, or drag it to Windows start folder

### Unable to Run Snap Hutao as Administrator

> This issue only occurs in Windows 10 older than 22H2 version

- When user's OS version older than `Windows Build 19045` (aka Windows 10 22H2), Snap Hutao is unable to start when
  running as Administrator
  - This issue comes from Windows kernel, and it's hard to locate, so we suggest you to update your OS to the latest version

### Use Snap Hutao with Network Proxy

> Snap Hutao has a well-designed cloud network structure, you should be able to get good network service wherever you are located

We recommend to config `Loopback Network` inside the process. You can see detailed tutorial [HERE](loopback.md)
