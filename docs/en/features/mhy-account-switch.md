---
headerDepth: 0
category: [Feature, Tutorial]
order: 10
---

# MiHoYo BBS Account Switch

::: tip
There are two types of MiHoYo BBS, MiYouShe and HoYoLab.
MiYouShe refers to Mainland China version, HoYoLab refers to global version, both of them are accepted by Snap Hutao
- The document in page is talking about **MiHoYo BBS account**, not Genshin Impact's **in-game account**
- Before starting using Snap Hutao, you must initial your MiHoYo BBS account by login to your account in official mobile application
  - If your account name shows like `user_123456789`, then it means the account is not initial yet
:::

![多帐号管理样图](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01tRs9NH1g6du1XgyDZ_!!1797064093.png)

- At the left bottom corner, you can find the account menu above the `Settings` button. In the pop-up account menu, 
you can find the entry to login in to your MiYouShe and HoYoLab account:
- Click on `Web Login`
  - In the pop-up build-in browser, login with your account
  - Click `I'm logged in` button on the top right, after you have logged into your account
  - Then your account will be added to Snap Hutao, the browser will close automatically

- Alternatively, you can enter your MiHoYo BBS cookie list by click on `Input Manually` button
  - If you do so, the cookies must contains `Stoken` field
  - You can refer to [使用第三方工具获取有 Stoken 的 cookie](../advanced/get-stoken-cookie-from-the-third-party.md) document for methods to capture cookie with `Stoken`

- After added your MiHoYo BBS account, you need to switch to account you want in the account menu, to activate it
- You can always switch your MiHoYo BBS account in the account menu, and you are also allowed to copy account's cookie or remove account there

::: info Security Tips
- `Stoken` is a security sensitive cookie field, you **should NEVER** store it in cloud-based software or device that you cannot guarantee the safety (such as public computers).
- You can copy accounts' cookie with `Stoken` from Snap Hutao, but you should carefully consider if the receiver is trustworthy to have `Stoken` cookie
- **When you are signing in to your MiHoYo BBS account in Snap Hutao, the data are only been processed by MiHoYo's official server and local Snap Hutao program, 
no third-party server (including any server from Snap Hutao) will involve in this process.**
:::
