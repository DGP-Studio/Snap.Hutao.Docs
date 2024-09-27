---
headerDepth: 2
category: [公告, 项目, 功能]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao 是一个开源于 GitHub 的程序项目，我们广泛接受来自社区的合作以让这个项目获得更多的活力。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# 项目说明

::: center
![banner](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01vWmKzl1g6e2VIEODU_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

胡桃工具箱是一款以 MIT 协议开源的原神工具箱，专为现代化 Windows 平台设计，旨在改善桌面端玩家的游戏体验。通过将既有的官方资源与开发团队设计的全新功能相结合，它提供了一套完整且实用的工具集，且无需依赖任何移动设备。它不对游戏客户端进行任何破坏性修改以确保工具箱的安全性。

Snap Hutao 项目使用 MSIX 格式的安装包打包。MSIX 是一种 Windows 原生的应用程序包格式，它使得软件的安装、更新和卸载过程更加简洁。其中，它的一个突出特性就是利用沙盒技术。这意味着以 MSIX 打包的应用程序在隔离的环境中运行，防止它们进行系统范围的更改。这种隔离增强了安全性，因为它限制了应用程序对系统资源和用户数据的访问。此外，当卸载 MSIX 打包的应用程序时，它不会留下任何残余文件或注册表条目，保持了系统的整洁和稳定。这是对传统安装方法的重大改进，因为传统方法在卸载应用程序时常常会留下“数字垃圾”。这些特性的结合使 MSIX 成为开发者和终端用户的强大工具，提供了无缝、安全、清洁的软件管理体验。

## 胡桃能解决的原神桌面端缺陷

|         功能         | 移动端                    | 桌面端                   | 胡桃的方案                                                            |
| :------------------: | ------------------------- | ------------------------ | --------------------------------------------------------------------- |
|    **游戏高帧率**    | IOS/iPadOS 官方支持120FPS | 最高仅 60FPS             | [高级启动器 - 帧率解锁](features/game-launcher.md#解锁帧率上限)       |
|   **游戏账号切换**   | 已登录的账号会被记录      | 注销后账号不会被记录     | [高级启动器 - 账号切换](features/game-launcher.md#账号保存)           |
|     **每日签到**     | 米游社客户端              | 仅国际服用户可在网页签到 | [账号面板 - 签到](features/mhy-account-switch.md)                     |
|     **实时便笺**     | 米游社客户端              | 无                       | [实时便笺](features/real-time-notes.md)                               |
| **派遣完成通知推送** | 通过移动端游戏推送通知    | 无                       | [实时便笺推送消息](features/real-time-notes.md)                       |
|   **深渊数据查询**   | 米游社客户端              | 仅国际服用户可在网页查询 | [深境螺旋](features/hutao-API.md)                                     |
|     **养成计划**     | 米游社客户端              | 仅国际服用户可在网页使用 | [养成计划](features/develop-plan.md#养成计划)                         |
|   **Discord 状态**   | 无                        | 国际服客户端可用         | [高级启动器 - Discord Activity](features/game-launcher.md#高级启动器) |

## 项目资源

- [GitHub 代码库](https://github.com/DGP-Studio/Snap.Hutao)
- [Crowdin 本地化翻译](https://translate.hut.ao/)
- [Snap Hutao 用户社区](community.md)

## 完整功能一览

- [游戏内公告及倒计时](features/dashboard.md)
- [米哈游论坛多账号登录支持](features/mhy-account-switch.md)
  - 支持以网页登录和输入 Cookie 的方式登录米游社和 HoYoLAB
  - 支持签到奖励
- [高级启动器](features/game-launcher.md)
  - 服务器切换
  - 游戏账号切换
  - 自定义帧率上限
  - 游戏补丁包下载
- [祈愿记录管理](features/wish-export.md)
  - 从游戏数据中刷新数据
  - 导入/导出 UIGF 数据文件
  - 全局祈愿数据统计
- [成就管理](features/achievements.md)
  - 从游戏数据中刷新数据
  - 导入/导出 UIAF 数据文件
- [实时便笺](features/real-time-notes.md)
  - 支持多账号实时便笺
  - 自定义刷新间隔
  - Windows 原生通知推送
- [我的角色](features/character-data.md)
  - 支持多数据源同步数据
  - 圣遗物评分和双爆评分
  - 导出我的角色数据截图
- [深境螺旋](features/hutao-API.md)
  - 每期怪物和渊月祝福详情
  - 同步深境螺旋分详情战斗数据
  - 胡桃深渊数据库
    - 角色使用率
    - 角色出场率
    - 队伍出场统计
    - 角色持有率
- [养成计划](features/develop-plan.md)
  - 支持从实时数据和 WIKI 数据创建角色和武器养成计划
  - 支持多计划存档
- WIKI 数据
  - [角色资料](features/character-wiki.md)
  - [武器资料](features/weapon-wiki.md)
  - [怪物资料](features/monster-wiki.md)
- [胡桃云账号系统](features/hutao-settings.md#胡桃帐号)
  - 祈愿数据备份
  - 祈愿统计预测
