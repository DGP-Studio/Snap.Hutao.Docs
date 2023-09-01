---
headerDepth: 0
category: [Feature, Tutorial]
tag: [MiYouShe, HoYoLAB, Multi account, check-in]
order: 13
comment: false
---

# MiHoYo BBS Account Switch

::: tip

There are two types of MiHoYo BBS, MiYouShe and HoYoLAB.
MiYouShe refers to Mainland China version, HoYoLAB refers to global version, both of them are accepted by Snap Hutao

- The document in page is talking about **MiHoYo BBS account**, not Genshin Impact's **in-game account**
- Before starting using Snap Hutao, you must initial your MiHoYo BBS account by login to your account in official mobile application
  - If your account name shows like `user_123456789`, then it means the account is not initial yet

:::

![MiHoYo BBS Accounts](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01OqYy931g6dyGYLC2E_!!1797064093.png_.webp)

At the left bottom corner, you can find the account menu above the `Settings` button. In the pop-up account menu,
you can find the entry to login in to your MiYouShe and HoYoLAB account:

- Click on `Web Login`
  - In the pop-up build-in browser, login with your account
  - Click `I'm logged in` button on the top right, after you have logged into your account
  - Then your account will be added to Snap Hutao, the browser will close automatically
- Alternatively, you can enter your MiHoYo BBS cookie list by click on `Input Manually` button
  - If you do so, the cookies must contains `SToken` field
  - You can refer to [使用第三方工具获取有 SToken 的 cookie](../advanced/get-SToken-cookie-from-the-third-party.html) document for methods to capture cookie with `SToken`
- After added your MiHoYo BBS account, you need to switch to account you want in the account menu, to activate it
  - You can always switch your MiHoYo BBS account in the account menu, and you are also allowed to copy account's cookie or remove account there
  - After select an account in the panel, you can also
    - Click `Refresh Cookie` to update local cookie
    - Click `Claim Check-In Reward` to get daily check-in reward. For MiYouShe account, you need to bypass Geetest verification first.

::: info Security Tips

- `SToken` is a security sensitive cookie field, you **should NEVER** store it in cloud-based software or device that you cannot guarantee the safety (such as public computers).
- You can copy accounts' cookie with `SToken` from Snap Hutao, but you should carefully consider if the receiver is trustworthy to have `SToken` cookie
- **When you are signing in to your MiHoYo BBS account in Snap Hutao, the data are only been processed by MiHoYo's official server and local Snap Hutao program,
  no third-party server (including any server from Snap Hutao) will involve in this process.**

:::
