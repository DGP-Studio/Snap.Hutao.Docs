---
headerDepth: 2
category: [Feature, Tutorial]
tag: [MiYouShe, HoYoLAB, Multi account, check-in]
order: 14
comment: false
description: The Multi-account Panel feature in Snap Hutao allows users to log in to multiple MiHoYo BBS accounts and switch between them freely, enabling the use of various functions within the tool with different accounts.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/features/mhy-account-switch.html
---

# MiHoYo BBS Account Switching

::: tip
Snap Hutao supports accounts from the mainland China version of the MiHoYo forum, **MiYouShe**, and the international version, **HoYoLAB**. HoYoLAB blocks network connections from mainland China by default, and Snap Hutao cannot bypass this restriction on its own.

- The account switching described in this document refers to **MiYouShe / HoYoLAB accounts** used for obtaining game data, not **in-game Genshin Impact accounts**.
- Before using this feature, you need to log in to your account using the official MiYouShe app to initialize your MiYouShe functions.
  - If the account name logged into Snap Hutao is in the format "user_123456789", it may not have been initialized.

:::

![Multi-Account Management Example](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ZhnkRl1g6e0tz18y9_!!1797064093.png.png_.webp)

You can find the account menu in the lower-left corner of the main program interface, above the settings button, to manage the MiYouShe accounts you've logged into Snap Hutao. In the pop-up panel, you can add MiYouShe or HoYoLAB accounts. The login methods are similar:

:::: tabs

@tab MiYouShe Phone Verification Code Login

::: warning
Please ensure that the MiYouShe account is bound to a domestic server account.
:::

1. Click the "Phone Verification Code" button, enter your phone number, and send the verification code.
2. Enter the verification code and confirm. Wait a moment for the account to be added.

@tab MiYouShe Scan QR Code Login

::: warning
Please ensure that the MiYouShe account is bound to a domestic server account.
:::

1. Click the "Scan QR Code" button and wait for the QR code to load.
2. Use the MiYouShe app to scan the QR code and confirm the login.
3. Wait a moment, and Snap Hutao will add the account.

@tab HoYoLAB Password Login

::: warning
Please ensure that the HoYoLAB account is bound to an international server account.
:::

1. Click the "Password Login" button, enter your account password, and confirm.
2. Wait a moment, and the account will be added.

@tab HoYoLAB Social Media Account Login

This method relies on the WebView2 runtime component.

::: warning
HoYoLAB blocks network connections from mainland China by default.
:::

1. Click the "Third-Party Login" button and log in via WebView2.
2. Wait a moment, and the account will be added.

@tab Cookies Login

::: warning
Please keep your Cookie information safe to avoid account risks.
:::

Login by manually entering the SToken Cookie.

1. Click the target app icon and select "Manual Input."
2. Enter a valid Cookie and confirm. Wait a moment, and the account will be added.
   ::::

- After completing this, you can switch between logged-in MiYouShe accounts in the account management panel.
  - After adding a new MiYouShe account, you need to manually click on the newly logged-in account in the account switching function in the lower-left corner of the main interface to set it as the active account.
  - You can copy the corresponding account's Cookie or remove the account from Snap Hutao in the account management menu.
  - When the program is not running in administrator mode, you can drag and drop to sort the accounts.
  - After selecting a logged-in account, you can:
    - Click the "Refresh Cookie" button to update the currently stored Cookie.
    - Click the "Check-In" button to perform the MiHoYo forum check-in. For MiYouShe accounts, you need to resolve the risk control status first to successfully perform the check-in.

::: info Security Tips

- `SToken` is a security-sensitive Cookie field, and you **should not** store Cookies containing the `SToken` field on any cloud or other devices where data security cannot be guaranteed.
- The Cookie obtained from Snap Hutao contains this field. Please carefully consider whether to provide the `SToken` field to the receiving party.
- **When you log in to MiYouShe via password or Cookie in Snap Hutao, your data is only processed by the MiYouShe server and the local Snap Hutao, and does not pass through any third-party services, including the Snap Hutao server.**

:::

## Common Issues

### Why does the MiYouShe account login status often expire, and added accounts disappear?

- We maintain the login status by storing the account's MiYouShe Cookie.
- However, when a user **logs out of the account** in a browser or on another device, the Cookie maintaining the login status will **expire**.
- This will cause the MiYouShe account in Snap Hutao to be automatically removed after startup.
- This situation may also occur due to network connection issues preventing the validation of the Cookie. Therefore, please prioritize restarting Snap Hutao if this happens.
- Since October 2022, MiYouShe has greatly increased the probability of an account being flagged as at risk. When an [account is at risk](../advanced/exceptions.md#状态1034-验证失败), the Cookie may also not be recognized as valid.
- Since version 1.4.15, you can refresh the login status by refreshing the Cookie in the account panel.
