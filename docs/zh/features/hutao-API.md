---
headerDepth: 0
category: [功能, 教程]
tag: [深境螺旋, 深渊, 深渊数据库]
order: 8
redirectFrom: /features/hutao-API.html
comment: false
---

# 胡桃数据库/深渊统计

胡桃工具箱提供两个主要的深境螺旋挑战统计的功能

- 侧栏中的`深渊统计`是一个旨在通过统计并展示广大玩家深境螺旋挑战数据，来帮助对原神对战系统不熟悉玩家组建队伍、通关深渊、获取奖励的功能
- 侧栏中的`深渊记录`是一个通过保存玩家每一期深境螺旋挑战数据来帮助个人玩家回顾游戏经历及个人数据收集的统计功能
  - 众多的玩家通过上传个人的`深渊记录`来形成胡桃数据库的`深渊统计`数据集

::: tabs

@tab 角色使用率
![character-usage-rate](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01QnrxoH1g6dyBQazad_!!1797064093.png_.webp)
@tab 角色出场率
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01SZxOoc1g6dyBJC3g3_!!1797064093.png_.webp)
@tab 队伍出场次数
![hutaoapi](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01oERCCj1g6dyHvhPXj_!!1797064093.png_.webp)
@tab 角色持有率
![character-held-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN0112Fro61g6dyGCiFxq_!!1797064093.png_.webp)
@tab 个人数据统计
![personal-record-stat](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01wrgGYm1g6dyH6BpIL_!!1797064093.png_.webp)
@tab 个人数据详情
![personal-record-details](https://img.alicdn.com/imgextra/i1/1797064093/O1CN012Rt60l1g6dyGCgiHv_!!1797064093.png_.webp)

:::

## 查看深渊数据

::: warning 数据范围局限性
所有计算数据都基于**已上传至胡桃数据库中的玩家数据**，无法代表全部原神玩家的平均数据，数据仅做参考用途
:::

::: info 数据刷新周期

1. 深境螺旋统计数据（角色使用率、角色出场率、队伍出场）在帐号所属游戏服务器时区每月 1 日和 16 日的 4 点自动清理。
   - 点击界面右上角的信息按钮你可以查看当前实时已上传的总数据
2. 同时，若用户在 30 天内没有重新上传记录以更新数据，则其的角色持有数据将被清理

:::

- 在主界面点击左侧菜单栏进入`深渊统计`页面
- 点击`角色使用`以查看角色使用率数据
  - 角色使用率 = 角色在当前层数出场次数[^first] / 持有该角色的玩家在该层数的总记录数
- 点击`角色出场`以查看角色出场率数据
  - 角色出场率 = 角色在当前层数出场次数[^first-2] / 当前层数总记录数
- 点击`角色持有`以查看角色持有率数据[^second]
  - 角色持有率[^third] = 所有拥有该角色的玩家数量 / 全部玩家数量
- 点击`队伍出场`以查看队伍组合出场次数数据
  - 各种角色组队情况下出场次数的排名

## 上传深境螺旋数据

### 使用胡桃客户端

- 在主界面点击左侧菜单栏进入`深渊记录`功能页面
- 点击右上角的`刷新数据`以确保胡桃工具箱客户端已经获取到最新的个人深境螺旋数据
- 点击右上角的`上传数据`以上传你的深境螺旋数据
  - 这可能需要花费数秒，上传成功后你将会看到如下图的成功提示
    ![upload-hutaoapi](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01yniArT1g6dyJIJHqK_!!1797064093.png_.webp)

### 使用浏览器

::: info
该方法不适用于 HoYoLAB
:::

- 打开我们的 [JavaScript 脚本](/upload-abyss-data.js)，复制全部内容
- 在浏览器中创建一个新的书签

  - 在名称中填写一个合适的名称
  - 在 URL 中粘贴你刚刚复制的全部代码

  ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)

- 访问米游社，在页面加载完成后点击你刚刚创建的书签
- 稍等片刻，你应该能看到请求上传的确认窗口
- 在确认后，浏览器将上传你的深渊数据，请勿关闭米游社页面
- 在上传完成后，浏览器会有确认完成的提示窗口

## 数据共享

Snap Hutao 与其它开发者共同维护着胡桃数据库，你可以在多个应用中查看深渊统计数据并上传你的深渊数据。目前，Snap Hutao 正在与以下应用共享深渊数据：

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

[^first]: 在当前层中不同间内多次出现的同一个角色仅记 1 次出场次数
[^first-2]: 在当前层中不同间内多次出现的同一个角色仅记 1 次出场次数
[^second]: 角色持有数据与深境螺旋记录独立
[^third]: 只要拥有该角色，即使没有在深境螺旋中登场，也会被计入拥有的状态；只要上传过深境螺旋记录，即会被计入全部玩家的数据中。
