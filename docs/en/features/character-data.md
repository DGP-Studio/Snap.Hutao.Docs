---
headerDepth: 0
category: [Feature, Tutorial]
order: 6
comment: false
---

# My Characters

::: info

This features required sign in to MiHoYo BBS account, please refer to [MiHoYo BBS Account Switch](mhy-account-switch.md)
document for sign in tutorial

:::

My characters is a character statistics feature that allows Snap Hutao to read character's statistics on the account,
including level, constellation, weapon, talent and artifact set; we also provide artifacts rating and CRTI rating for
each character.

![My Character Screenshot](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01JOlGqw1g6dyB7NkLu_!!1797064093.png_.webp)

## Sync Character Data

### Sync from Enka API

::: info Synchronous Feature

- Enka API sync data from characters displayed in the in-game character showcase

  - Data includes Artifacts detail data, weapon detail data, talent data
  - Character costume
  - This sync method only support 8 characters at a time

:::

- In the game, put **characters that you need detailed data** into the showcase
  - The character showcase allows up to 8 characters at the same time
- You need to wait for data sync to complete after editing the showcase configuration
  - You may need up to 5 minutes after enable the showcase or re-config the showcase
- Enter `My Characters` page in the Snap Hutao, Click `Sync Character Data` button on the top-right
- Select `Sync from Enka API`

### Sync from MiHoYo BBS - My Characters

::: info Synchronous Feature

- Data in this sync method comes from My Characters feature in MiHoYo official BSS

  - This method does not contain any artifacts data
  - This method can sync all characters data at a time

:::

- Enter `My Characters` page in the Snap Hutao, Click `Sync Character Data` button on the top-right
- Select `Sync from MiHoYo BBS My Characters`

### Sync from MiHoYo BBS - Development Plan

::: info Synchronous Feature

- Data in this method comes from `Enhancement Progression Calculator` feature in MiHoYo official BBS tool set

  - This sync method contains talent level data
  - This sync method can sync all characters data at a time

:::

- Enter `My Characters` page in the Snap Hutao, Click `Sync Character Data` button on the top-right
- Select `Sync from MiHoYo BBS Developement Plan`

## Add Selected Character to Development Plan

- Enter `My Characters` page in the Snap Hutao, click on character you need to add to development plan
- Click on `Development Plan` and enter target level
  - **Synchronized data of the character** will be pre-filled into current level, and you can change the target level

![rolescal](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Ju0wyK1g6du2L9Kw0_!!1797064093.png)

- After adding successfully, you can find added development plan in the `Dev Plan` page in Snap Hutao

![image](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01DgRS5n1g6du0Do41z_!!1797064093.png)

- For tutorial of Dev Plan feature, please refer to [Dev Plan](develop-plan.md) document

## Export as Image

- In `My Characters` page, you can select a character and then click `Export as Image` button to create image with your
  character's data, this will help you to share your character's data
- The exported image is stored in your clipboard, and you can paste it wherever you need
- A sample exported image is shown below

![sample-output-image](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01ah7JlQ1g6du4WrI0A_!!1797064093.png)
