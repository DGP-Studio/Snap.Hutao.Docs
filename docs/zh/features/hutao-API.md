---
headerDepth: 2
category: [功能, 教程]
tag: [深境螺旋, 深渊, 深渊数据库]
order: 9
comment: false
description: 胡桃工具箱内置的胡桃数据库功能帮助玩家归档并查询深境螺旋挑战数据，提供全面的统计分析并支持玩家上传数据到数据库。
---

# 胡桃数据库 / 深渊统计

胡桃工具箱提供两种主要的深境螺旋挑战统计功能：

- **分期详情**：帮助玩家保存每一期深境螺旋挑战数据，便于个人数据回顾和统计。
- **本期统计**：展示所有上传至胡桃数据库的玩家深境螺旋数据，为玩家提供角色和队伍的使用参考。
  - “本期统计”依赖于玩家提交的“分期详情”数据。

::: tabs
@tab 分期详情
![personal-record-details](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ykD0CZ1g6e0sAQMn1_!!1797064093.png_.webp)
@tab 角色使用率
![character-usage-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01dvdsCG1g6e0xyDPo5_!!1797064093.png_.webp)
@tab 角色出场率
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Pdv5w01g6e0u1ewov_!!1797064093.png_.webp)
@tab 队伍出场次数
![hutaoapi](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01k1W4tw1g6e0wOyjdf_!!1797064093.png_.webp)
@tab 角色持有率
![character-held-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01bQvukt1g6e0uuU2Fh_!!1797064093.png_.webp)
:::

## 查看深渊数据

::: warning 数据范围局限性
所有计算基于**上传至胡桃数据库的玩家数据**，可能无法代表全体原神玩家的平均数据，仅供参考。
:::

::: info 数据刷新周期

1. 深境螺旋统计数据（角色使用率、角色出场率、队伍出场）在帐号所属服务器时区每月 1 日和 16 日的 4 点自动更新。
2. 如果用户在 30 天内未重新上传数据，其角色持有记录将被清理。
   :::

- 点击左侧菜单栏进入“深境螺旋”页面，选择“本期统计”标签。
- 查看数据：
  - **角色使用率**：
    - 公式：角色使用率 = 角色在当前层数的出场次数[^first] / 持有该角色的玩家在该层数的记录总数。
  - **角色出场率**：
    - 公式：角色出场率 = 角色在当前层数的出场次数[^first-2] / 当前层数的记录总数。
  - **角色持有率**：
    - 公式：角色持有率[^third] = 拥有该角色的玩家数量 / 全部玩家数量。
  - **队伍出场次数**：展示队伍组合的出场次数排名。

## 上传深境螺旋数据

### 使用胡桃客户端

::: important 胡桃云权限奖励
首次成功提交数据后，可获得为期 3 天的“胡桃云祈愿记录服务”权限作为奖励（即使未通关第 12 层）。
:::

1. 点击左侧菜单栏进入“深境螺旋”页面。
2. 点击右上角的“刷新数据”以确保工具箱已获取最新的个人深境螺旋数据。
3. 点击“上传数据”按钮提交数据。

- 上传可能需要数秒，完成后会显示成功提示。

### 使用浏览器

::: info
此方法不适用于 HoYoLAB。
:::

1. 打开 [JavaScript 脚本](/upload-abyss-data.js) 链接并复制代码。
2. 在浏览器中创建一个新书签：
   - 填写合适的名称。
   - 将复制的代码粘贴至书签 URL。
     ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)
3. 打开米游社并等待页面加载完成后，点击书签。
4. 确认上传提示，完成上传。

## 数据共享

Snap Hutao 与其它开发者共同维护胡桃数据库。用户可在多个应用中查看深渊统计数据并上传数据。目前合作应用包括：

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin for Yunzai-Bot
desc: QQ机器人 Miao-Plugin 插件
logo: /images/202312/miao-plugin-logo.webp
link: https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: 原神披萨助手
desc: MacOS/iOS下的原神工具
logo: /images/202312/genshin-pizza-helper-logo.webp
link: https://apps.apple.com/cn/app/%E6%8A%AB%E8%90%A8%E5%B0%8F%E5%8A%A9%E6%89%8B/id1635319193
```

```component VPCard
title: Ysin
desc: 微信小程序 Ysin
logo: /images/202312/ysin-logo.png
link: https://yuanshen.xin/
```

</div>

[^first]: 在当前层中不同间内多次出现的同一个角色仅记 1 次出场次数。

[^first-2]: 在当前层中不同间内多次出现的同一个角色仅记 1 次出场次数。

[^third]: 拥有该角色即计入持有状态，即使未在深境螺旋中登场。上传过记录即计入全部玩家统计。
