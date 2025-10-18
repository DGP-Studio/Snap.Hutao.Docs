---
category: [公告]
icon: iconfont icon-update
order: 1
comment: false
externalLinkIcon: false
description: Snap Hutao 通过持续地更新修复已知问题并发布全新功能，以保证用户获得最好的使用体验，我们将始终发布更新日志以追踪程序的变化。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
---

# 更新日志

## 1.16.2 <Badge text="最新版" type="tip" />

- **【🎉新增】** 启动游戏注入选项新增须臾树脂领取奖励开关 [#3147](https://github.com/DGP-Studio/Snap.Hutao/issues/3147)
- **【✨优化】** 幻想真境剧诗支持识别月谕模式及其圣牌挑战 [#3165](https://github.com/DGP-Studio/Snap.Hutao/issues/3165)
- **【✨优化】** 启动游戏检测账号功能新增账号信息提示，账号过期提示
- **【✨优化】** 养成计算支持计算角色等级上限突破
- **【✨优化】** 重制了主窗口的标题栏样式 [#3167](https://github.com/DGP-Studio/Snap.Hutao/issues/3167)
- **【🔨修复】** 修复了前瞻直播兑换码尚未准备好时会显示空的兑换码条目的问题

## 1.16.1

- **【🔨修复】** 修复了本月未进行签到，在切换到主页面时可能会导致崩溃的问题
- **【🔨修复】** 修复了启动游戏页面注入设置页签中开关列表无法滚动的问题
- **【🔨修复】** 修复了养成计划养成物品页签在物品较多时加载缓慢甚至崩溃的问题 [#3137](https://github.com/DGP-Studio/Snap.Hutao/issues/3137)

## 1.16.0

- **【🎉新增】** 主页的实时便笺卡片树脂图标增加了鼠标悬停提示 [#2699](https://github.com/DGP-Studio/Snap.Hutao/issues/2699)
- **【✨优化】** 重构了启动游戏模块
  - **【🎉新增】** 启动游戏新增奖励领取消耗物品控制，允许选择是否消耗原粹树脂，浓缩树脂，脆弱树脂，原石领取奖励
  - **【🎉新增】** 启动游戏新增仅转换服务器功能，无须实际启动游戏也能进行游戏客户端文件替换 [#2177](https://github.com/DGP-Studio/Snap.Hutao/issues/2177)
  - **【✨优化】** 注入选项新增了多个提示 [#2961](https://github.com/DGP-Studio/Snap.Hutao/issues/2961)
  - **【✨优化】** 若启用了 米游社/HoYoLAB 登录，主页启动游戏卡片在启动游戏后将会显示当前游戏内的角色 [#2969](https://github.com/DGP-Studio/Snap.Hutao/issues/2969)
  - **【✨优化】** 注入选项新增了连接到游戏的提示，用于确定改动的设置是否会生效 [#3006](https://github.com/DGP-Studio/Snap.Hutao/issues/3006)
  - **【✨优化】** 游戏已启动后尝试使用 Embedded Yae 导入数据将会提示 [#3071](https://github.com/DGP-Studio/Snap.Hutao/issues/3071)
  - **【✨优化】** 在用户面板中切换账号后，若启用了 米游社/HoYoLAB 登录且与当前选择的服务器不匹配将会阻止启动 [#3109](https://github.com/DGP-Studio/Snap.Hutao/issues/3109)
- **【✨优化】** 紧凑网页窗口启动后播放的视频将不再默认静音
- **【✨优化】** 修改了判定管理员权限的方式，现在不会认为管理员组用户的非提升启动为提升启动
- **【✨优化】** 移除了我的角色页面的刷新时间按钮 [#2984](https://github.com/DGP-Studio/Snap.Hutao/issues/2984)
- **【🔨修复】** 修复了主页的实时便笺卡片圆点显示异常的问题 [#2964](https://github.com/DGP-Studio/Snap.Hutao/issues/2964)
- **【🔨修复】** 修复了我的角色页面导出数据到剪贴版时缺少加成属性值的问题 [#2966](https://github.com/DGP-Studio/Snap.Hutao/issues/2966)
- **【🔨修复】** 修复了实时便笺有时无法正确刷新魔神任务进度的问题 [#2975](https://github.com/DGP-Studio/Snap.Hutao/issues/2975)

## 1.15.17

- **【🎉新增】** 幽境危战增加对国际服 (HoYoLAB) 的支持，感谢 [@DSakura207](https://github.com/DSakura207) 的实现 [#3093](https://github.com/DGP-Studio/Snap.Hutao/issues/3093)
- **【✨优化】** 补全本地化翻译

## 1.15.16

- **【🎉新增】** 主页日历卡片新增挪德卡莱地区天赋/武器材料 [#3090](https://github.com/DGP-Studio/Snap.Hutao/issues/3090)
- **【✨优化】** 移除了养成计划树脂预估中的浓缩树脂预估 [#3091](https://github.com/DGP-Studio/Snap.Hutao/issues/3091)
- **【🔨修复】** 修复了多个启动游戏相关的假死问题 [#3099](https://github.com/DGP-Studio/Snap.Hutao/issues/3099)

## 1.15.15

- **【✨优化】** 角色资料页面支持查看 91-100 级的角色基础属性值
- **【✨优化】** 成就页面搜索成就现在会忽略标题与描述中的标点符号 [#3059](https://github.com/DGP-Studio/Snap.Hutao/issues/3059)
- **【🔨修复】** 修复了在非管理员模式下启动会异常获取注入配置的问题
- **【🔨修复】** 修复了祈愿记录历史页面的排版错误
- **【🔨修复】** 修复了祈愿记录计时页面的没有排除 梦见月瑞希 的问题
- **【🔨修复】** 修复了启动游戏后无法跟随启动 Starward/ BetterGI 的问题 [#3041](https://github.com/DGP-Studio/Snap.Hutao/issues/3041)
- **【🔨修复】** 修复了实时便笺无法刷新的问题 [#3065](https://github.com/DGP-Studio/Snap.Hutao/issues/3065)

## 1.15.14

- **【✨优化】** 角色资料页面中五位使用神之心的角色现在会强制显示神之心为其元素力来源
- **【🔨修复】** 修复了设置页面中祈愿记录无法导入/导出的问题 [#3014](https://github.com/DGP-Studio/Snap.Hutao/issues/3014)
- **【🔨修复】** 修复了设置页面中语言选项在重进页面后未选中的问题 [#3016](https://github.com/DGP-Studio/Snap.Hutao/issues/3016)
- **【🔨修复】** 修复了启动游戏页面注入功能视野热开关无效的问题 [#3017](https://github.com/DGP-Studio/Snap.Hutao/issues/3017)
- **【🔨修复】** 修复了启动游戏页面进程板块选择显示器功能不能正确显示的问题 [#3017](https://github.com/DGP-Studio/Snap.Hutao/issues/3017)
- **【🔨修复】** 修复了启动游戏页面快捷调整分辨率无法正常显示待选项的问题 [#3034](https://github.com/DGP-Studio/Snap.Hutao/issues/3034)

## 1.15.13

- **【🎉新增】** 启动游戏新增超级神秘功能
- **【🎉新增】** 成就页面成就条目右键新增前往米游社/HoYoLAB 搜索菜单项[#2957](https://github.com/DGP-Studio/Snap.Hutao/issues/2989)
- **【✨优化】** 我的角色页面现在会记忆排序规则[#2953](https://github.com/DGP-Studio/Snap.Hutao/issues/2953)
- **【✨优化】** 启动游戏结束进程按钮在非管理员模式下禁用[#2968](https://github.com/DGP-Studio/Snap.Hutao/issues/2968)
- **【✨优化】** 修改了初始引导窗口中的下一步按钮的颜色
- **【🔨修复】** 修复了连点/连按功能在重启后会无视保存的状态默认启用的问题 [#2941](https://github.com/DGP-Studio/Snap.Hutao/issues/2941)
- **【🔨修复】** 修复了使用 Embedded Yae 导入成就/物品数据时游戏可能无法正常退出导致无法导入数据的问题 [#2998](https://github.com/DGP-Studio/Snap.Hutao/issues/2998)
- **【🔨修复】** 修复了 6.0 前瞻兑换码不能正常显示的问题

## 1.15.12

- **【🔨修复】** 修复了启动游戏转换服务器功能无法正常使用的问题 [#2941](https://github.com/DGP-Studio/Snap.Hutao/issues/2941)

## 1.15.11

- **【🎉新增】** 支持 UIGF 4.1
- **【🎉新增】** 养成计划现在可以添加角色资料中尚未上线的角色
- **【🎉新增】** 角色资料页面新增游迹显示及神之眼显示 [#2875](https://github.com/DGP-Studio/Snap.Hutao/issues/2875)
- **【✨优化】** 优化了养成计划材料计算的性能
- **【✨优化】** 优化了部分功能的性能
- **【🔨修复】** 修复了部分情况下无法正确识别游戏区域的问题
- **【🔨修复】** 修复了 Embedded Yae 在 5.8 版本无法正常使用的问题 [#2916](https://github.com/DGP-Studio/Snap.Hutao/issues/2916)
- **【🔨修复】** 修复了查看部分新角色资料时会导致崩溃的问题
- **【🔨修复】** 修复了部分页面中管理员提示错误显示的问题 [#2920](https://github.com/DGP-Studio/Snap.Hutao/issues/2920)

## 1.15.10

- **【🔨修复】** 修复了 5.8 使用注入功能后启动游戏，会导致游戏崩溃的问题 [#2885](https://github.com/DGP-Studio/Snap.Hutao/issues/2885)

## 1.15.9

- **【🔨修复】** 修复了 Hoyolab 用户登录时触发验证码会导致崩溃的问题 [#2880](https://github.com/DGP-Studio/Snap.Hutao/issues/2880)
- **【🔨修复】** 修复了使用注入功能后启动游戏，程序与游戏可能会崩溃的问题 [#2881](https://github.com/DGP-Studio/Snap.Hutao/issues/2881)

## 1.15.8

- **【🎉新增】** 角色资料/武器资料养成计算 计算功能支持尚未正式发布的角色
- **【✨优化】** 优化了启动游戏页面游戏管理功能下载时的连接稳定性
- **【🔨修复】** 修复了幽境危战页面本期统计（赋光之人）无法正常显示的问题 [#2845](https://github.com/DGP-Studio/Snap.Hutao/issues/2845)
- **【🔨修复】** 修复了 Hoyolab 用户无法正常登录的问题 [#2849](https://github.com/DGP-Studio/Snap.Hutao/issues/2845)
- **【🔨修复】** 修复了启动游戏页面游戏管理功能无法正确更新预下载的问题
- **【🔨修复】** 其他已知的问题

## 1.15.7

- **【🔨修复】** 修复了当前用户为国际服用户时打开主窗口会导致崩溃的问题 [#2844](https://github.com/DGP-Studio/Snap.Hutao/issues/2844)
- **【🔨修复】** 修复了部分情况下会导致意外的崩溃的问题

## 1.15.6

- **【🔨修复】** 修复了设备名为非英文时无法正常使用的问题

## 1.15.5

- **【🎉新增】** 主页启动游戏卡片新增米游社/HoYoLAB账号登陆模式下的用户提示
- **【🎉新增】** 主页新增前瞻兑换码查看功能
- **【🎉新增】** 启动游戏界面新增结束进程按钮，当游戏进程有残留时可以便捷操作
- **【🎉新增】** 启动游戏界面部分注入功能新增教程提示
- **【🎉新增】** 养成计划页面树脂预估新增脆弱树脂消耗预估
- **【🎉新增】** 新增幽境危战页面, 可以查看与保存相关挑战记录
- **【🎉新增】** 设置界面新增检查更新功能
- **【🎉新增】** 我的角色页面网格视图新增好感度显示 [#1283](https://github.com/DGP-Studio/Snap.Hutao/issues/1283)
- **【🎉新增】** 我的角色页面养成计算新增自定义范围批量计算 [#2831](https://github.com/DGP-Studio/Snap.Hutao/issues/2831)
- **【🎉新增】** 成就页面现在允许右键复制成就 ID [#2832](https://github.com/DGP-Studio/Snap.Hutao/issues/2832)
- **【✨优化】** UI 界面焕新
- **【✨优化】** 胡桃通行证现在会使用更安全的 V2 API
- **【🔨修复】** 修复了设置页面中当背景为在线背景时，点击版权信息无法正常跳转到浏览器的问题

## 1.15.4

- **【🔨修复】** 修复了幻想真境剧诗页面存在不完整的数据时会导致崩溃的问题 [#2822](https://github.com/DGP-Studio/Snap.Hutao/issues/2822)

## 1.15.3

- **【🔨修复】** 修复了养成计划页面筛选框会提供错误的提示的问题

## 1.15.2

- **【🔨修复】** 修复了切换到幻想真境剧诗页面仍会导致崩溃的问题 [#2816](https://github.com/DGP-Studio/Snap.Hutao/issues/2816)
- **【🔨修复】** 修复了以管理员模式重启不会退出当前进程的问题
- **【🔨修复】** 其他已知的问题

## 1.15.1

- **【🔨修复】** 修复了切换到幻想真境剧诗页面会导致崩溃的问题 [#2799](https://github.com/DGP-Studio/Snap.Hutao/issues/2799)
- **【🔨修复】** 修复了悬浮窗中的热键启用提示不会正确更新的问题 [#2809](https://github.com/DGP-Studio/Snap.Hutao/issues/2809)
- **【🔨修复】** 修复了在祈愿/成就/养成页面关闭程序再次启动后会取消选中的存档/计划的问题 [#2813](https://github.com/DGP-Studio/Snap.Hutao/issues/2813)
- **【🔨修复】** 其他已知的问题

## 1.15.0

- **【🎉新增】** 为主页的卡片跳转到对应页面使用了新的导航动画
- **【🎉新增】** 启动游戏页面新增 Ldiff 预下载/更新游戏 支持
- **【✨优化】** 支持了 米游社/HoYoLAB 动态头像
- **【🔨修复】** 修复了热键注册失败时没有提示的问题
- **【🔨修复】** 修复了通知区域图标创建失败时没有提示的问题
- **【🔨修复】** 修复了特殊情况下胡桃进程不会正常退出导致无法再次启动的问题
- **【🔨修复】** 修复了使用注入解锁到过高帧率后会导致游戏闪退或弹窗提示 10612-4001 的问题，请勿使用注入功能以在部分挑战中获取不正当的优势，我们保留禁用此功能的权利 [#2794](https://github.com/DGP-Studio/Snap.Hutao/issues/2794)
- **【🔨修复】** 修复了重启资源管理器后不会重新创建通知区域图标的问题 [#2737](https://github.com/DGP-Studio/Snap.Hutao/issues/2737)
- **【🔨修复】** 修复了使用 Embedded Yae 导入成就会导致崩溃的问题 [#2754](https://github.com/DGP-Studio/Snap.Hutao/issues/2754)
- **【🔨修复】** 修复了首次进入主页或启动游戏页面或更新游戏时会错误的提示Bilibili渠道服不支持账号功能通知的问题 [#2754](https://github.com/DGP-Studio/Snap.Hutao/issues/2754)
- **【🔨修复】** 修复了查看部分角色的部分天赋或技能时会导致死循环的问题 [#2789](https://github.com/DGP-Studio/Snap.Hutao/issues/2789)
- **【🔨修复】** 其他已知的问题
