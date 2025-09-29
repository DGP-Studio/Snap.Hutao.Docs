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

# 🎉 已成功更新至 1.16.0 版本

**简体中文** | [English](/en/statements/latest.html)

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
