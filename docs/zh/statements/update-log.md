---
category: [公告]
icon: iconfont icon-update
order: 1
redirectFrom: /statements/update-log.html
comment: false
---

# 更新日志

## 1.9.0 <Badge text="即将发布" type="tip" />

::: important 重大改变

Snap Hutao 在近期获得了 SignPath 基金会的赞助的代码签名证书。自1.9.0版本起，我们将使用全新的证书为 Snap Hutao 安装包签名。

拥有新签名的程序将与旧版本不兼容，用户在从1.8.4及更旧版本更新至1.9.0及更新版本时，需要首先卸载旧版本再全新安装新版本客户端。由于胡桃数据目录的设计，用户不会丢失任何重要数据。

你可以阅读[1.9.0 版本重大改变详解](../blog/version-1-9-0-breaking-changes.md)一文来更深入地了解这次版本更新中签名变化对 Snap Hutao 项目的改变。

:::

- 新增 ➕
  - 游戏启动器现在支持了多个游戏路径 [#525](https://github.com/DGP-Studio/Snap.Hutao/issues/526)
  - 在用户面板中增加了米游社的扫码登录方法 [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
  - 客户端新增了自动检测网络状态，并将结果显示在设置页面中 [#1116](https://github.com/DGP-Studio/Snap.Hutao/pull/1161)
  - 在游戏启动器中新增了以触屏模式启动原神的选项 [#1173](https://github.com/DGP-Studio/Snap.Hutao/issues/1173)
  - 在设置中新增了启用控制台的选项，用户现在可以通过启用该选项在排查问题时获得更多的错误提示
  - 添加了全新的软件更新处理逻辑
- 修复 🔨
  - 修复了米游社接口获取角色信息产生`5003`错误的问题 [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - 修复了特定情况下米游社公告倒计时数据错误的问题
  - 修复了错误的 PowerShell 语句
- 优化 ✨
  - 优化了养成计算中的错误提示语句，使得错误提示更加明确 [#1163](https://github.com/DGP-Studio/Snap.Hutao/issues/1163)
  - 优化了养成计算的界面，现在将会显示每项具体目标 [#1016](https://github.com/DGP-Studio/Snap.Hutao/issues/1016)
  - 优化了主界面中胡桃账号信息的显示，不再显示用户邮箱 [#1160](https://github.com/DGP-Studio/Snap.Hutao/issues/1160)
  - 更新了胡桃 API 的错误提示
  - 优化了设置页界面，用户现在可以在设置中查看 Snap Hutao 产生的数据和缓存目录大小
- 本地化 🌏
  - 客户端增加了印尼语选项，感谢 [@NatsumeAoii](https://github.com/NatsumeAoii)提供的翻译 [#1188](https://github.com/DGP-Studio/Snap.Hutao/issues/1188)
  - 更新了现有语言的翻译

## 1.8.5 <Badge text="测试版" type="info" />

- 测试了签名替换带来的变化

## 1.8.4 <Badge text="最新版" type="tip" />

- 修复
  - 修复了每日签到提示活动已到期的问题
  - 修复了无法选择 `pwsh.exe` 作为 PowerShell 主机的问题 [#1145](https://github.com/DGP-Studio/Snap.Hutao/issues/1145) [#1153](https://github.com/DGP-Studio/Snap.Hutao/issues/1153)
  - 修复了特定情况下由第三方程序拉起的胡桃会出现文本语言不正确的问题 [#1147](https://github.com/DGP-Studio/Snap.Hutao/issues/1147)
  - 修复了创建的桌面快捷方式无法找到 PowerShell 的问题 [#1151](https://github.com/DGP-Studio/Snap.Hutao/issues/1151) [#1154](https://github.com/DGP-Studio/Snap.Hutao/issues/1154)
- 优化
  - 更新了胡桃云服务的相关文本
  - 优化了游戏启动与结束时的 Discord Activity 追踪表现
  - 调整了角色/武器资料/我的角色页面，现在缩放窗口时内容将不再高频闪烁
  - 优化了启动游戏页面切换服务器时的性能，现在会使用多线程分片下载资源文件
  - 优化了启动游戏页面切换服务器时的逻辑，现在会提前检查对应目录是否拥有需要的文件权限

## 1.8.3 <Badge text="hotfix" type="warning" />

- 修复
  - 修复了当 Discord 客户端未启动时，胡桃会闪退的问题 [#1134](https://github.com/DGP-Studio/Snap.Hutao/issues/1134)
  - 修复了祈愿记录时间不正确的问题 [#1138](https://github.com/DGP-Studio/Snap.Hutao/issues/1138)
- 优化
  - 在安装包中包含了 .NET 环境

## 1.8.1

- 新增
  - *启动游戏*新增 Discord Activity 同步功能，开启后在游玩时会自动同步状态 [#1082](https://github.com/DGP-Studio/Snap.Hutao/issues/1082)
- 修复
  - 修复了从*祈愿记录*页面*胡桃云面板*导航至*深渊记录*页面不会同步导航栏选项的问题 [#1116](https://github.com/DGP-Studio/Snap.Hutao/issues/1116)
  - 修复了*自动连点*功能无法绑定 Alt 键的问题 [#1119](https://github.com/DGP-Studio/Snap.Hutao/issues/1119)
  - 修复了*养成计划*切换计划后部分物品无法刷新的问题 [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - 修复了*成就管理*只能导入名称为空的 json 文件的问题 [#1124](https://github.com/DGP-Studio/Snap.Hutao/issues/1124)
  - 修复了*启动游戏*页面*资源下载*页签 中完整包链接无效的问题，现在替换为了分段文件的链接 [#1126](https://github.com/DGP-Studio/Snap.Hutao/issues/1126)
  - 修复了*实时便笺*通知提示的内容不正确，通知会反复弹出，以及通知会忽略用户设置的静默提示的问题 [#1123](https://github.com/DGP-Studio/Snap.Hutao/issues/1123)
- 优化
  - 为 设备指纹/CookieToken 引入了超时刷新机制，现在不需要经常在*用户面板*中点击刷新了 [#1121](https://github.com/DGP-Studio/Snap.Hutao/issues/1121)
  - 重做了*角色资料*页面的 UI
  - 在未登录米游社/HoYoLAB的情况下左下角会显示相应文本 [#1127](https://github.com/DGP-Studio/Snap.Hutao/issues/1127)

## 1.8.0

- **升级了 .NET 版本到 8** [#1103](https://github.com/DGP-Studio/Snap.Hutao/issues/1103)
- 修复
  - 修复了*胡桃通行证*注册/注销/重置密码提示未翻译的问题 [#1087](https://github.com/DGP-Studio/Snap.Hutao/issues/1087) by @Tangweirui2021
  - 修复了*养成计划*页面首排物品在切换计划后无法正确刷新的问题 [#1099](https://github.com/DGP-Studio/Snap.Hutao/issues/1099)
  - 修复了*启动游戏*页面 无边框与独占全屏无法同时设置的问题 [#1106](https://github.com/DGP-Studio/Snap.Hutao/issues/1106)
  - 替换了文件选择器的实现，解决了无法在管理员模式下使用文件选择器的问题 [#1096](https://github.com/DGP-Studio/Snap.Hutao/issues/1096)
  - 修复了启动时初始化用户信息可能导致程序假死的问题
  - 修复了部分页面在切换后会产生不必要的异常的问题
  - 修复了部分异常无法正常捕获的问题
- 优化
  - 为元数据初始化添加了更详细的失败信息

## 1.7.18 <Badge text="测试版" type="info" />

- 测试了 .NET 8 在 WindowsApp 应用中的安装流程

## 1.7.17

- 修复
  - 修复了养成计划养成物品列表首个物品在切换计划后不会刷新的问题 [#1079](https://github.com/DGP-Studio/Snap.Hutao/issues/1079)
  - 修复了无法获取国际服祈愿记录 URL 的问题 [#1081](https://github.com/DGP-Studio/Snap.Hutao/issues/1081)
  - 修复了特定条件下错误日志无法正常获取并上传的问题
  - 修复了导出祈愿记录中时间不正确的问题
  - 修复了米游社网页弹窗数据异常的问题
  - 修复了祈愿记录页面历史/角色/武器页签中物品数量遮罩的圆角半径不正确的问题
  - 修复了非 UTC+08 时区下首页中公告的时间可能不正确的问题
- 优化
  - 更改了米游社网页弹窗的 UI, 支持后退与刷新并能查看网页标题
  - 自动连点功能支持禁用功能和自定义按键 [#961](https://github.com/DGP-Studio/Snap.Hutao/issues/961)
  - 祈愿记录 UIGF 导入/导出支持 UIGF v2.4 格式
    - 增加了对祈愿记录服务器时区的时间判断 [#830](https://github.com/DGP-Studio/Snap.Hutao/issues/830)

## 1.7.16

- 新增

  - 启动游戏页面为启动参数增加了总开关 [#1065](https://github.com/DGP-Studio/Snap.Hutao/issues/1065)
  - 启动游戏页面新增快速选择分辨率的下拉框 [#1062](https://github.com/DGP-Studio/Snap.Hutao/issues/1062)
  - 增加对 [Starward](https://github.com/Scighost/Starward) 客户端的支持，以允许用户实现游戏时长统计 [#1071](https://github.com/DGP-Studio/Snap.Hutao/issues/1071)
  - 游戏启动器资源下载中增加资源链接复制按钮 [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
  - 列表/网格视图切换状态全局记忆 [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)

- 修复
  - 修复了米游社小工具页面无法正常跳转的问题
  - 修复了我的角色功能中无法正常显示角色等级技能的问题 [#1069](https://github.com/DGP-Studio/Snap.Hutao/issues/1069)
  - 修复了获取用户米游社数据时返回`5003`错误的问题 [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - 修复了养成计划物品内物品列表无法滚动的问题 [#1068](https://github.com/DGP-Studio/Snap.Hutao/issues/1068)
  - 修复了特定条件下设置页面无法滚动的问题 [#1072](https://github.com/DGP-Studio/Snap.Hutao/issues/1072)
- 优化
  - 启动游戏页面资源下载中导航按钮更改为链接复制按钮 [#1074](https://github.com/DGP-Studio/Snap.Hutao/issues/1074)
  - 优化了胡桃软件更新公告的显示逻辑，不再显示低版本的更新通知 [#1015](https://github.com/DGP-Studio/Snap.Hutao/issues/1015)
  - 用户的按钮选项在全客户端范围内将会被自动记忆 [#778](https://github.com/DGP-Studio/Snap.Hutao/issues/778)
  - 增强了客户端稳定性

## 1.7.15

- 新增
  - 新增从胡桃云恢复抽卡记录至本地新存档的选项 [#886](https://github.com/DGP-Studio/Snap.Hutao/issues/886)
- 修复
  - 修复了游戏启动项能填入非法数值的问题，为部分启动参数增加了开关 [#1061](https://github.com/DGP-Studio/Snap.Hutao/issues/1052)
  - 修复了无法在客户端中注册胡桃云账号的问题 [#1059](https://github.com/DGP-Studio/Snap.Hutao/issues/1059)
  - 修复了设置实时便笺 Webhook Url 后可能导致通知功能不正常的问题
- 优化
  - 优化了客户端中胡桃云账号修改密码和注销账号的操作逻辑

## 1.7.14 <Badge text="hotfix" type="warning" />

- 修复了部分功能在打开对话框时会崩溃的问题 [#1052](https://github.com/DGP-Studio/Snap.Hutao/issues/1052) [#1054](https://github.com/DGP-Studio/Snap.Hutao/issues/1054)

## 1.7.13

- 新增
  - 增加实时便笺数据转发 Webhook 选项 [#431](https://github.com/DGP-Studio/Snap.Hutao/issues/431)
  - 在祈愿记录页面显示祈愿记录范围时间 [#899](https://github.com/DGP-Studio/Snap.Hutao/issues/899)
  - 为实时便笺页面引入了历练点详情视图，可以查看当前历练点获取情况 [#1021](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
- 修复
  - 修复了通过快速启动窗口启动游戏会抛出`参数错误`的问题 [#925](https://github.com/DGP-Studio/Snap.Hutao/issues/925)
  - 修复了高级启动器界面闪退的问题 [#1035](https://github.com/DGP-Studio/Snap.Hutao/issues/1035)
  - 修复了内嵌网页在米游社页面中无法返回的问题 [#1023](https://github.com/DGP-Studio/Snap.Hutao/issues/1023)
  - 修复了从 B 服转换服务器中出现的问题 [#1041](https://github.com/DGP-Studio/Snap.Hutao/issues/1041)
  - 修复了无法正确检测游戏是否正在运行的问题
  - 修复了切换胡桃通行证后祈愿记录中的胡桃云集成无法正确反应的问题 [#903](https://github.com/DGP-Studio/Snap.Hutao/issues/903)
- 优化
  - 为胡桃云服务的提示文本增加了国际化支持
  - 重新设计了胡桃通行证页面的 UI，现在集成在设置页面中 [#911](https://github.com/DGP-Studio/Snap.Hutao/issues/1021)
  - 重新设计了启动游戏页面的 UI
  - 用户现在可以在高级启动器中选择游戏启动参数

## 1.7.11 <Badge text="hotfix" type="warning" />

- 修复了游戏启动器中窗口设置的错误 (hotfix)

## 1.7.10

- 修复
  - 修复了 HoYoverse 无法正常登录的问题 [#1011](https://github.com/DGP-Studio/Snap.Hutao/issues/1011) [#1012](https://github.com/DGP-Studio/Snap.Hutao/issues/1012)
  - 修复了 HoYoLAB 账号无法正常签到的问题 [#1013](https://github.com/DGP-Studio/Snap.Hutao/issues/1013)
  - 修复了导入 UIGF v2.2 文件时语言不正确会导致提示`无效的物品`的问题 [#1001](https://github.com/DGP-Studio/Snap.Hutao/issues/1001)
  - 修复了提供无效的无感验证 Url 后在请求相应接口时会导致程序崩溃的问题
  - 修复了部分无效的通道状态下进入启动游戏页面会导致程序崩溃的问题
  - 修复了 WebView2 Runtime 版本过低时查看内嵌网页并切换账号会导致程序崩溃的问题
  - 修复了深境螺旋页面当部分记录无有效值时会导致程序崩溃的问题
  - 修复了内嵌网页可能导致内存溢出的一个问题
- 优化
  - 现在启动游戏页面中检测账号后若已经存在对应账号会自动选择

## 1.7.9

- 修复
  - 修复了退出程序后显示器分辨率更改后无法以正确窗口尺寸启动的问题
  - 修复了米哈游通行证页面无法正确登录的问题 [#1005](https://github.com/DGP-Studio/Snap.Hutao/issues/1005)
  - 修复了 HoYoverse 登录页面不正确的问题 [#1007](https://github.com/DGP-Studio/Snap.Hutao/issues/1007)
  - 修复了 1.7.7 版本无法正确上传崩溃日志的问题
  - 修复了深境螺旋页面本期页签上场队伍页签列表中的上场次数过长可能无法正常显示的问题 [#1008](https://github.com/DGP-Studio/Snap.Hutao/issues/1008)

## 1.7.7

- 在以下位置增加了卡片阴影以优化视觉效果
  - 仪表板与活动公告
  - 高级启动器资源下载页签
  - 祈愿记录总览页签
  - 祈愿记录历史页签详情
  - 祈愿记录统计页签
  - 实时便笺卡片
  - 我的角色列表视图详情
  - 角色 WIKI 立绘框
  - 武器 WIKI 立绘框
- 修复
  - 修复了网格视图下顶部边距不正确的问题
  - 修复了多个导致崩溃的问题
  - 修复了无法正常转换官服/Bilibili 服务器的问题
- 优化
  - 调整了验证当前用户与角色按钮的位置
    - 现在你可以在账号面板中直接找到它
  - 获取深渊记录/上传数据引入验证重试机制
    - 未使用无感验证的用户可以在角色面板中打开我的角色网页视图手动验证后重试

## 1.7.6

- 新增
  - 新增了管理员模式下的 F8 鼠标连点功能
    - 在即将到来的原神 4.1 和 4.2 版本，该功能可以帮助跳过你不喜欢的剧情部分
- 修复
  - 修复了在使用实时便笺验证功能后从实时便笺页面切换到其他页面后切换账号有概率导致崩溃的问题 [#947](https://github.com/DGP-Studio/Snap.Hutao/issues/947)
  - 修复了在启动游戏后重新打开程序无法正确匹配当前游戏内账号的问题 [#865](https://github.com/DGP-Studio/Snap.Hutao/issues/865)
  - 修复了成就页面成就统计文本过长时会被裁切的问题 [#956](https://github.com/DGP-Studio/Snap.Hutao/issues/956)
  - 修复了 4.1 版本元数据导致深境螺旋页面崩溃的问题
- 优化
  - 调整了部分用户界面的细节呈现
  - 调整了特定情况下的游戏公告文本的颜色
  - 调整了下载离散资源图片文件失败时的逻辑

## 1.7.5

- 新增
  - 成就记录页面新增成就对应版本号数据
  - 深渊记录界面新增怪物波次数据 （数据来源 [@妮可少女](https://space.bilibili.com/3537104994831140)）
  - 在设置页面新增微软商店评价的按钮 [#876](https://github.com/DGP-Studio/Snap.Hutao/issues/876)
  - 在用户按钮上方增加了新的文档按钮，用户点击将跳转到当前界面对应的功能文档 [#875](https://github.com/DGP-Studio/Snap.Hutao/issues/875)
- 修复
  - 修复了主页启动游戏卡片帐号空白的情况 [#924](https://github.com/DGP-Studio/Snap.Hutao/issues/924)
  - 修复了成就记录无法保存手动取消勾选记录的问题 [#880](https://github.com/DGP-Studio/Snap.Hutao/issues/880)
  - 修复了实时便笺界面切换帐号后无法切换待验证帐号的问题
  - 修复了深渊记录有时无法正确刷新详细数据的问题
- 优化
  - 优化部分错误语句，增加了解决提示 [#930](https://github.com/DGP-Studio/Snap.Hutao/issues/930)
  - 首页的胡桃推送通知现在允许用户复制 [#929](https://github.com/DGP-Studio/Snap.Hutao/issues/929)
  - **深渊统计页面迁移合并至深渊记录页面下**
  - 调整了多处时间显示的格式

## 1.7.4

- 新增
  - 设置页面新增了切换 PowerShell 实例的选项
  - 设置页面新增了创建桌面快捷方式的选项 [#912](https://github.com/DGP-Studio/Snap.Hutao/issues/912)
  - 设置页面新增了调整主页卡片是否呈现的选项
  - 我的角色页面新增批量添加到养成计划的功能
- 修复
  - 修复了主页中部分公告的活动开始时间不正确的问题 [#887](https://github.com/DGP-Studio/Snap.Hutao/issues/887)
  - 修复了我的角色页面中点击未使用角色橱窗同步数据的武器时会导致崩溃的问题 [#904](https://github.com/DGP-Studio/Snap.Hutao/issues/904)
  - 修复了我的角色页面中武器数值显示不正确的问题 [#907](https://github.com/DGP-Studio/Snap.Hutao/issues/907)
  - 修复了无法从 Bilibili 服务器转换到部分服务器的问题 [#893](https://github.com/DGP-Studio/Snap.Hutao/issues/893)
  - 修复了祈愿记录页面中当记录存在新手祈愿时会导致崩溃的问题 [#917](https://github.com/DGP-Studio/Snap.Hutao/issues/917)
  - 修复了养成计划在未进入养成计划页面前没有提前选中的问题，该问题曾导致至少需要进入一次养成计划页面才能添加养成计划
  - 修复了领取签到奖励触发验证时有即使接口报告成功也无法验证成功的问题
- 优化
  - 调整了怪物资料中怪物的展示顺序
  - 优化了祈愿统计的加载速度
  - 优化了数据库访问的 UI 线程占用
  - 优化了养成计划页面中部分视图的滚动体验，现在可能需要更长的时间才能加载视图

## 1.7.3

- 修复了 HoYoverse 网页登录失效的问题
- 升级了 Windows App SDK 版本，修复了标题栏顶部无法缩放窗口的问题
- 调整了 UIGF v2.2 导入失败的提示，现在能根据 Id 更快地定位问题
- 修复了用户面板领取签到奖励失败但仍然显示成功的问题
- 修复了任务栏中的启动游戏项会同时启动游戏窗口和主窗口的问题

## 1.7.2

- 祈愿记录
  - 修复了全量刷新无法正确生效的问题
  - 修复了无错误的 UIGF 文件无法正确导入的问题
  - 修复了胡桃云记录无法正确获取的问题
  - 调整了胡桃云窗口的 UI，使其显示对应 UID 存档中的抽数
- 我的角色
  - 调整了界面 UI 使其变得更加紧凑
- 调整了主页通知的 UI， 使其向右侧边缘对齐

## 1.7.0

- 增加了引导页面，在首次启动胡桃时将引导用户使用胡桃
  - 引导用户选择语言
  - 引导用户确认条款
  - 引导用户安装 Segoe Fluent Icons 字体和 WebView2 运行时
  - 引导用户下载静态资源
- 胡桃主界面
  - 调整了导航栏的图标样式
  - 修复了调整窗口大小时，可能导致意外崩溃的问题
- 用户面板
  - 调整了用户面板的样式
  - 增加了为当前用户领取签到奖励的按钮
  - 修复了部分情况下启动时无法正确选中当前用户与角色的问题
- 主页仪表盘
  - 新增胡桃软件公告
  - 实时便笺卡片增加了刷新时间提示
  - 修复了实时便笺卡片有时无法正确加载并导致假死/崩溃的问题
  - 部分活动公告的开始/结束时间修正
  - 修复了部分公告在查看详情时无法正确显示某些段落的问题
- 启动游戏（高级启动器）
  - 命令栏新增游戏状态指示文本
  - 修复了无法转换服务器的问题
  - 调整了转换服务器的逻辑，允许在下载资源失败后重试
  - 调整了解锁帧率的逻辑，在解锁失败后会自动结束游戏进程
  - 移除了多客户端功能
  - 修复了资源下载中客户端本体文件无名称且无法跳转下载的问题
- 祈愿记录
  - 调整了总览页面的卡片样式，物品变得更大，同时折叠了多项文本
  - 修复了在未登录或无胡桃云服务时长时进入祈愿记录页面报错的问题
  - 修复了总览页面卡片列表视图中物品抽数进度条进度与颜色显示不正确的问题
  - 修复了胡桃云无时长上传奖励文本错误的问题
  - 修复了能够导入包含不正确物品的 UIGF 格式数据的问题
  - 修复了无法正确定位到游戏缓存目录的问题
  - 优化了当物品数量较多时页面加载缓慢的问题
- 成就记录
  - 修复了在列表/网格视图选择成就分类后切换到相反视图时选中的项可能不会正确显示的问题
  - 优化了页面的加载速度
- 实时便笺
  - 调整了验证当前用户与角色按钮的样式
  - 调整了通知设置视图的样式
  - 增加了关闭实时便笺自动刷新的入口（仅非管理员模式下可切换，已在管理员模式下进入过实时便笺页面的用户可能无法正确切换此选项）
  - 调整了实时便笺的样式
  - 调整了未解锁洞天与未拥有参量质变仪时的文本提示
  - 实时便笺卡片增加了刷新时间提示
- 我的角色
  - 调整了列表视图下左侧角色列表的宽度
  - 命令栏增加了刷新时间显示切换按钮
  - 增加了角色的各个刷新方法的刷新时间
  - 角色详情中圣遗物增加了词条强化次数显示
- 养成计划
  - 修复了从养成计划页面切换至其他页面后可能会导致选中状态保存异常的问题
- 角色资料
  - 修复了在列表/网格视图选择角色后切换到相反视图时选中的项可能不会正确显示的问题
- 武器资料
  - 修复了在列表/网格视图选择武器后切换到相反视图时选中的项可能不会正确显示的问题
  - 增加了武器养成材料速查章节
- 怪物资料
  - 修复了在列表/网格视图选择怪物后切换到相反视图时选中的项可能不会正确显示的问题
- 设置
  - 修复了无法删除游戏缓存目录的问题
  - 增加了极验验证接口配置功能，通过正确配置此选项以对米游社请求进行无感验证
- 优化了程序的帧率表现
- 优化了多线程调度的内存占用
- 优化了物品图标的加载速度
- 调整了数据库读写的方式，以优化内存占用与响应速度
- 调整了 `-100` 与 `-10001` 返回代码的文本提示，以帮助用户更好地理解其含义
- 其他的小型更改

## 1.6.6

- 新增
  - 祈愿记录页面胡桃云服务新增服务到期时间与开发者提示
  - 祈愿记录页面新增统计页签，可以查看来自胡桃云的祈愿数据统计
- 修复
  - 修复了祈愿记录页面缓存刷新失效的问题
  - 修复了中文繁体无法正确加载元数据的问题

## 1.6.5

- 新增
  - 日语选项；社区用户可以现在可以在 [translate.hut.ao](https://translate.hut.ao/) 中贡献日语翻译
- 修复
  - 修复无法添加武器养成计划的问题 [Issue #745](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
  - 部分用户在特定情况下解锁帧数上限失效的问题 [Issue #747](https://github.com/DGP-Studio/Snap.Hutao/issues/747)
- 优化
  - 完善仪表盘
  - 使用 Metadata v2
  - 优化养成计划中材料统计的排序 [Issue #749](https://github.com/DGP-Studio/Snap.Hutao/issues/749)

## 1.6.4

- 新增
  - 以 [UIGF v2.3](https://uigf.org/zh/standards/UIGF.html) 数据格式导出祈愿记录
- 修复
  - 解锁帧数上限失效的问题 [Issue #733](https://github.com/DGP-Studio/Snap.Hutao/issues/733)
- 优化
  - 在非管理员模式下运行程序时，对管理员模式有要求的功能会有文字提示
  - HoYoLAB 的支持
  - 国际化支持

## 1.6.3

- 新增
  - 首页仪表盘，包含胡桃云帐号、游戏启动器、祈愿记录、成就统计和实时便笺
  - 启用新的信息栏功能将自动隐藏应用内通知
  - 隐藏国服 TapTap 帐号登录的服务器版本
- 修复
  - 上传深境螺旋数据后无法获得胡桃云奖励的问题
  - HoYoLab 不支持 Facebook 登录的问题
  - HoYoLab 签到问题
  - 获取抽卡记录过程中值为空时会产生的问题
- 优化
  - **项目重构，软件性能提高 20%**
  - 增加支持 WIKI 功能中的本地化翻译
  - 增加支持国际服支付渠道切换
    - 包括 HoYoverse 默认，Epic 和 Google Pay
  - 开启帧率解锁后，可以在游戏启动时修改帧率上限并立即生效

## 1.6.2

- 全新功能
  - 基于胡桃帐号系统的**祈愿记录云同步**
    - 当前在爱发电打赏用户和测试用户会获得对应时间的云同步权限，已注册用户在上传深渊记录后会获赠 5 天云同步有效期
    - 该功能会在接下来的数个 1.6 版本中持续优化
- 修复
  - 渠道服帐号的实时便笺无法获取数据的问题
  - HoYoLab 帐号的登录问题
- 优化
  - 重新设计了静态文件获取的流程

## 1.6.0

- 新增
  - 胡桃帐号的注册和登录的基本功能
  - HoYoLab 帐号的登录并增加其在以下功能的支持
    - 网页登录和 SToken Cookie 登录
    - 深境螺旋记录
    - 每日签到
    - 我的角色
    - 实时便笺
- 优化
  - 帧数解锁功能性能
  - 多客户端功能
  - 帧数解锁和游戏多开功能现在需要用户在设置中手动解锁高级功能
  - 设置页面布局
  - Windows 10 磁贴图标

## 1.5.4

- 新增
  - 游戏启动器
    - 游戏资源下载
    - 原神游戏进程多开
    - 允许用户在多显示器情况下选择指定显示器启动游戏
  - 使用了全新的图标（更可爱的胡桃）
- 修复
  - 游戏客户端转换中卡死并无限写入的问题
- 优化
  - 默认的语言选择方式
  - 允许直接复制设备 ID
  - 设置页面美化

## 1.5.1

- 优化
  - 将`JumpList`菜单更换为`JumpTask`，即使用户关闭最近文件功能也可以使用快速启动菜单了
  - 增加优先度高于系统设置的语言设置选项
  - 增加贡献翻译入口
  - 增加重置图片资源的设置选项
- 添加
  - 怪物 WIKI
  - 韩语翻译
  - 国际化元数据

## 1.4.15

- 新增
  - 重置图片资源的入口
  - 刷新 Cookie 方法
- 修复
  - 修复了[#2 服务器切换导致 31-4302 报错](/advanced/known-issue.html#_2-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%87%E6%8D%A2%E5%AF%BC%E8%87%B431-4302%E6%8A%A5%E9%94%99)
  - 修复了部分情况下程序内清除定时任务计划失败的情况
- 优化
  - 优化了养成计划界面 [#486](https://github.com/DGP-Studio/Snap.Hutao/issues/486)
  - 完善英语和繁体中文翻译
  - 在触发 Windows 长路径限制时增加提示
  - 优化了定时任务的唤醒方式

## 1.4.14

- 修复了养成计划无法添加的问题
- 支持英语界面
- 其他的问题修复

## 1.4.11

- 商店初版
