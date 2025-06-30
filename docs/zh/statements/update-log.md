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

## 1.15.0 <Badge text="最新版" type="tip" />

- **【🎉新增】** 为主页的卡片跳转到对应页面使用了新的导航动画
- **【🎉新增】** 启动游戏页面新增 Ldiff 预下载/安装/更新游戏 支持
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

## 1.14.9

- **【🎉新增】** 角色资料页面现在会正确显示部分角色的技能/天赋中的超链接信息
- **【✨优化】** 引导窗口现在能显示应用内通知
- **【🎉新增】** 主页卡片现在可以在设置页面中拖动进行排序
- **【🔨修复】** 修复了多个会导致程序崩溃的问题

## 1.14.8

- **【🔨修复】** 修复了多个会导致程序崩溃的问题

## 1.14.7

- **【🎉新增】** 启动游戏页面注入功能新增重定向合成功能，在游戏内点击物品详情中的 可合成数量 按钮后会打开 合成页面 而不是 地图追踪
- **【✨优化】** 移除了 启动游戏页面中的资源下载 页签 [#2681](https://github.com/DGP-Studio/Snap.Hutao/issues/2681)
- **【✨优化】** 调整了主窗口导航栏的宽度 [#2681](https://github.com/DGP-Studio/Snap.Hutao/issues/2681)
- **【✨优化】** 将部分底层从 C# 迁移到了 C++ 以提供更好的性能表现与内存占用
- **【🔨修复】** 修复了在主页签到卡片未加载完成时切换页面会导致崩溃的问题 [#2694](https://github.com/DGP-Studio/Snap.Hutao/issues/2694)
- **【🔨修复】** 修复了能够导入格式不正确的 UIGF 文件的问题 [#2704](https://github.com/DGP-Studio/Snap.Hutao/issues/2704)

## 1.14.6

- **【🎉新增】** 通知图标新增双击操作直接打开主窗口
- **【✨优化】** 移除了 ScatteredFiles 转换服务器模式 [#2682](https://github.com/DGP-Studio/Snap.Hutao/issues/2682)
- **【🔨修复】** 修复了自动连点/连按在使用热键停止后无法再次开始的问题 [#2673](https://github.com/DGP-Studio/Snap.Hutao/issues/2673)
- **【🔨修复】** 修复了无法正常使用 Embedded Yae 的问题 [#2678](https://github.com/DGP-Studio/Snap.Hutao/issues/2678)
- **【🔨修复】** 修复了元数据更新后首次启动可能不会正确初始化的问题

## 1.14.5

- **【🔨修复】** 修复了实时便笺页面启动游戏跳转后不会自动切换米游社账号的问题 [#2623](https://github.com/DGP-Studio/Snap.Hutao/issues/2623)
- **【🔨修复】** 修复了游戏启动后尝试使用 Embedded Yae 导入成就不会结束游戏进程的问题 [#2630](https://github.com/DGP-Studio/Snap.Hutao/issues/2630)
- **【🔨修复】** 修复了我的角色页面养成计算全部角色与武器时不会判断角色是否突破的问题 [#2658](https://github.com/DGP-Studio/Snap.Hutao/issues/2658)
- **【🔨修复】** 修复了删除祈愿记录存档后不会尝试重新选择首个存档的问题 [#2659](https://github.com/DGP-Studio/Snap.Hutao/issues/2659)
- **【🔨修复】** 修复了尝试预下载会导致崩溃的问题 [#2660](https://github.com/DGP-Studio/Snap.Hutao/issues/2660)
- **【🔨修复】** 修复了特定情况下下载图片文件失败后可能导致崩溃的问题
- **【✨优化】** 优化了启动时体验
  - 启动时迁移数据库失败会弹窗提示
  - 关闭或重启时会等待启动初始化完成

## 1.14.4

- **【🎉新增】** 养成计划树脂预估现在会计算可合成的材料
- **【🎉新增】** 快捷键新增仅在游戏启动后生效选项 [#2606](https://github.com/DGP-Studio/Snap.Hutao/issues/2606)
- **【✨优化】** 游戏文件管理开始操作前会提示所需空间及可用空间
- **【🔨修复】** 修复了部分情况下 UI 可能会异常卡死的问题 [#2617](https://github.com/DGP-Studio/Snap.Hutao/issues/2617)
- **【🔨修复】** 修复了部分情况下关闭窗口时可能会导致崩溃的问题
- **【🔨修复】** 修复了通知区域图标始终创建的问题 [#2590](https://github.com/DGP-Studio/Snap.Hutao/issues/2590)
- **【🔨修复】** 修复了部分系统下更新器无法正常启动的问题 [#2597](https://github.com/DGP-Studio/Snap.Hutao/issues/2597)
- **【🔨修复】** 修复了部分情况下退出游戏会导致崩溃的问题
- **【🔨修复】** 修复了启动游戏页面注入选项中帧率设置错误与视野开关绑定的问题 [#2596](https://github.com/DGP-Studio/Snap.Hutao/issues/2596)
- **【🔨修复】** 修复了深境螺旋页面在上传数据时跳转登录会跳转到错误页面的问题 [#2607](https://github.com/DGP-Studio/Snap.Hutao/issues/2607)

## 1.14.3 <Badge text="hotfix" type="warning" />

- **【✨优化】** 悬浮窗添加独立开关，回调注入开关面板 [#2582](https://github.com/DGP-Studio/Snap.Hutao/issues/2582)
- **【🔨修复】** 修复了应用重定向失效的问题 [#2576](https://github.com/DGP-Studio/Snap.Hutao/issues/2576)
- **【🔨修复】** 修复了紧凑网页窗口非首次启动会引发崩溃的问题 [#2586](https://github.com/DGP-Studio/Snap.Hutao/issues/2586)
- **【🔨修复】** 修复了部分设备无法绑定热键的问题 [#2570](https://github.com/DGP-Studio/Snap.Hutao/issues/2570) [#2585](https://github.com/DGP-Studio/Snap.Hutao/issues/2585)

## 1.14.2 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了悬浮窗窗口在使用快捷键隐藏后会因为切换窗口重新显示的问题

## 1.14.1 <Badge text="hotfix" type="warning" />

- **【🎉新增】** 启动游戏页面新增设置自定义快捷键控制悬浮窗显示隐藏 [#2562](https://github.com/DGP-Studio/Snap.Hutao/issues/2562)

## 1.14.0

- **【🎉新增】** 紧凑网页窗口新增切换窗口显示 / 隐藏快捷键 [#2382](https://github.com/DGP-Studio/Snap.Hutao/issues/2382)
- **【🎉新增】** 主页新增签到卡片 [#1322](https://github.com/DGP-Studio/Snap.Hutao/issues/1322)
- **【🎉新增】** 新增游戏内半透明悬浮窗 [#2506](https://github.com/DGP-Studio/Snap.Hutao/issues/2506)
  - 悬浮窗将替代标题栏中原有的热键提示
  - 悬浮窗将替代原有启动游戏页面内注入相关选项
- **【🎉新增】** 注入新增移除元素爆发镜头特写
- **【🎉新增】** 注入新增移除战斗伤害跳字
- **【🎉新增】** 注入新增使用触摸输入 [#2535](https://github.com/DGP-Studio/Snap.Hutao/issues/2535)
- **【🎉新增】** 启动游戏页面启动参数新增平台类型 [#2521](https://github.com/DGP-Studio/Snap.Hutao/issues/2521)
- **【🎉新增】** 我的角色页面新增排序 [#2512](https://github.com/DGP-Studio/Snap.Hutao/issues/2512)
- **【🎉新增】** 我的角色页面新增显示角色及其武器的突破等级
- **【🎉新增】** 养成计划新增筛选
- **【✨优化】** 引入了全新的更新器 [#2456](https://github.com/DGP-Studio/Snap.Hutao/issues/2456)
- **【✨优化】** 引导页面下载资源现在会继承已有的下载进度
- **【✨优化】** 社区登录后如果没有可用的游戏角色现在会正确提示
- **【✨优化】** 简化了注入功能的相关逻辑 [#2531](https://github.com/DGP-Studio/Snap.Hutao/issues/2531)
- **【✨优化】** 我的角色页面现在会在切换角色后详情自动回顶 [#1731](https://github.com/DGP-Studio/Snap.Hutao/issues/1731)
- **【✨优化】** 角色养成现在会识别是否已突破 [#2403](https://github.com/DGP-Studio/Snap.Hutao/issues/2403)
- **【✨优化】** 现在更改数据目录前会进行是否可用的校验
- **【✨优化】** 部分设置新增了相关提示文本
- **【✨优化】** 优化了部分页面的卡顿问题
- **【✨优化】** 优化了大量的内存泄露问题
- **【✨优化】** 优化了热键提示的显示文本
- **【🔨修复】** 修复了主窗口关闭后实时便笺自动刷新可能会导致崩溃的问题
- **【🔨修复】** 修复了托盘弹窗按下 Alt + F4 后不会再重新弹出的问题 [#2532](https://github.com/DGP-Studio/Snap.Hutao/issues/2532)
- **【🔨修复】** 修复了胡桃通行证页面点击修改邮箱 / 修改密码 / 注销账号可能无响应的问题
- **【🔨修复】** 修复了游戏目录未设置时可能会弹出错误提示的问题
- **【🔨修复】** 修复了尝试接管游戏进程时可能会导致游戏崩溃的问题 [#2540](https://github.com/DGP-Studio/Snap.Hutao/issues/2540)
- **【🔨修复】** 修复了渠道服更新游戏时可能会卡死的问题 [#2327](https://github.com/DGP-Studio/Snap.Hutao/issues/2327)
- **【🔨修复】** 修复了卡池计时错误计入部分常驻角色的问题
- **【🔨修复】** 修复了成就管理页面在包含多个成就存档时移除一个成就存档不会自动切换至下一个成就存档的问题 [#2519](https://github.com/DGP-Studio/Snap.Hutao/issues/2519)
- **【🔨修复】** 修复了成就管理页面部分成就版本显示异常的问题
- **【🔨修复】** 修复了 Embedded Yae 无法在 5.5 版本正常使用的问题
- **【🔨修复】** 修复了深境螺旋中部分怪物显示错误的问题
- **【🔨修复】** 修复了养成计划树脂预估数据可能错误的问题
- **【🔨修复】** 修复了部分缩放下 UI 绘制可能会引发崩溃的问题
- **【🔨修复】** 修复了部分情况下 WebView2 无法正常加载的问题
- **【🔨修复】** 修复了 WebView2 加载完成前关闭窗口会导致卡死的问题 [#2544](https://github.com/DGP-Studio/Snap.Hutao/issues/2544)
- **【🔨修复】** 修复了部分设备无法正确设置语言的问题
- **【🔨修复】** 修复了部分图片无法正常显示的问题

## 1.13.7

- **【🔨修复】** 修复了特定情况下启动游戏时关闭游戏进程可能导致程序崩溃的问题
- **【🔨修复】** 修复了将数据目录选定到磁盘分区根目录后打开设置页面可能导致程序崩溃的问题
- **【🔨修复】** 修复了当壁纸源为非本地壁纸时，下载壁纸失败后可能会导致程序崩溃的问题
- **【🔨修复】** 修复了当获取游戏公告失败后可能会导致程序崩溃的问题
- **【🔨修复】** 修复了 WebView2 未加载完成时关闭网页窗口可能会导致程序崩溃的问题
- **【🔨修复】** 修复了当壁纸源为本地壁纸时，定时切换壁纸时可能会导致程序崩溃的问题
- **【🔨修复】** 修复了在提示信息即将显示或消除时关闭主窗口可能会导致程序崩溃的问题
- **【🔨修复】** 修复了在加载 我的角色 页面信息时切换/删除用户可能导致数据不同步的问题
- **【🔨修复】** 修复了自动连点/自动连按在系统权限页面下使用会导致崩溃的问题，现在会自动停止对应的操作
- **【🔨修复】** 修复了 WebView2 未加载完成时，刷新/后退操作可能会导致程序崩溃的问题
- **【🔨修复】** 修复了启动游戏页面管理游戏功能在选择某些非固定式 SSD 设备时会导致崩溃的问题，现在会默认为 HDD 进行后续操作
- **【🔨修复】** 修复了程序退出时尝试再次打开任务区域图标菜单会导致崩溃的问题
- **【✨优化】** 为网页窗口增加了 WebView2 加载失败提示
- **【✨优化】** 紧凑网页窗口现在可以调整为任意大小
- **【✨优化】** 启动游戏现在会检查已启动的游戏进程并尝试接管

## 1.13.6

- **【🎉新增】** 养成计划新增时区设置
  - 时区将在创建计划时设置
  - 创建计划后时区将无法修改
  - 现有养成计划将默认设置为胡桃设置中日历服务器对应时区
- **【🔨修复】** 修复了由其他应用启动导入成就不会显示导入弹窗的问题
- **【🔨修复】** 修复了实时便笺后台自动刷新时崩溃的问题 [#2491](https://github.com/SnapHutao/Snap.Hutao/issues/2491)
- **【✨优化】** 调整了遥测的方式，现在使用 Sentry 来更好的收集与处理异常信息
- **【✨优化】** 首次登录用户面板后，现在会优先选中米游社内配置的默认角色 [#2391](https://github.com/SnapHutao/Snap.Hutao/issues/2391)
- **【✨优化】** 修改了紧凑网页窗口的半透明逻辑
  - 现在窗口会在具有焦点时呈现不透明效果
  - 失去焦点时呈现半透明效果

## 1.13.5

- **【🎉新增】** 角色资料页面角色攻略增加哔哩哔哩 Wiki （仅简中） [#2435](https://github.com/DGP-Studio/Snap.Hutao/issues/2435)
- **【🎉新增】** 角色资料页面现在可查看角色皮肤立绘
- **【🔨修复】** 修复了部分国际服功能失效的问题
- **【🔨修复】** 修复了从托盘菜单退出胡桃时可能会崩溃的问题
- **【🔨修复】** 修复了日历卡片时区未生效的问题 [#2467](https://github.com/DGP-Studio/Snap.Hutao/issues/2467)
- **【🔨修复】** 修复了游戏配置文件缺失时可能会恢复为错误区服的问题
- **【🔨修复】** 修复了游戏文件管理不支持 USB 固态移动硬盘的问题 [#2469](https://github.com/DGP-Studio/Snap.Hutao/issues/2469)
- **【🔨修复】** 修复了养成计划页面树脂预估 UI 显示错位的问题 [#2443](https://github.com/DGP-Studio/Snap.Hutao/issues/2443)
- **【✨优化】** 优化了部分缩放下的 UI 排版

## 1.13.4 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 再次修复了启动游戏页面使用游戏管理功能会导致崩溃的问题 [#2457](https://github.com/DGP-Studio/Snap.Hutao/issues/2457)
- **【🔨修复】** 修复了成就管理无法通过 Embedded Yae 同步的问题 [#2458](https://github.com/DGP-Studio/Snap.Hutao/issues/2458)
- **【🔨修复】** 修复了养成计划无法通过 Embedded Yae 同步背包物品的问题 [#2461](https://github.com/DGP-Studio/Snap.Hutao/issues/2461)

## 1.13.3 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了启动游戏页面使用游戏管理功能会导致崩溃的问题

## 1.13.2

- **【🔨修复】** 修复了祈愿记录页面无法通过网页缓存刷新祈愿记录的问题 [#2413](https://github.com/DGP-Studio/Snap.Hutao/issues/2413)
- **【🔨修复】** 修复了主页启用卡片数量不满一行时无法正常显示的问题 [#2416](https://github.com/DGP-Studio/Snap.Hutao/issues/2416)
- **【🔨修复】** 修复了5.2后的高命角色无法正常添加到养成计划的问题 [#2422](https://github.com/DGP-Studio/Snap.Hutao/issues/2422)
- **【🔨修复】** 修复了因目标文件夹不存在时无法更改数据文件夹的问题 [#2425](https://github.com/DGP-Studio/Snap.Hutao/issues/2425)
- **【🔨修复】** 修复了部分用户因文件加密无法更改数据文件夹的问题 [#2433](https://github.com/DGP-Studio/Snap.Hutao/issues/2433)
- **【🔨修复】** 修复了在对话框弹出时仍能打开任务栏图标菜单的问题 [#2434](https://github.com/DGP-Studio/Snap.Hutao/issues/2434)
- **【✨优化】** 现在需要管理员权限才能解除 Loopback
- **【✨优化】** 优化了 Embedded Yae 的数据导入体验
  * 更改了相关功能的UI，需要管理员权限才能使用
  * 现在需要在启动游戏页面打开注入功能开关才能使用相关功能
  * 现在会使用启动游戏页面中配置的账号登录

## 1.13.1

- **【🎉新增】** 新增德语/西班牙语/意大利语/泰语/土耳其语
- **【🎉新增】** 成就和背包物品现在可以通过 Embedded Yae 从游戏中获取
- **【🎉新增】** 养成计划新增清空背包物品 [#2332](https://github.com/DGP-Studio/Snap.Hutao/issues/2332)
- **【🎉新增】** 角色资料页面新增角色攻略 [#1526](https://github.com/DGP-Studio/Snap.Hutao/issues/1526)
- **【🔨修复】** 修复了可能同时启动两个胡桃实例的问题 [#2368](https://github.com/DGP-Studio/Snap.Hutao/issues/2368)
- **【🔨修复】** 修复了部分设备无法正确获取 Loopback 状态的问题
- **【🔨修复】** 修复了用户服务未初始化完成时启动游戏可能无法正常使用米游社账号登录的问题
- **【🔨修复】** 修复了无法通过网页缓存获取祈愿记录的问题 [#2363](https://github.com/DGP-Studio/Snap.Hutao/issues/2363)
- **【🔨修复】** 修复了实时便笺通知 UID 可能显示 Unknown 的问题
- **【🔨修复】** 修复了深境螺旋不显示上下半效果的问题
- **【🔨修复】** 修复了养成计划树脂预估可能导致崩溃的问题
- **【🔨修复】** 修复了养成计划树脂预估数据可能溢出的问题 [#2361](https://github.com/DGP-Studio/Snap.Hutao/issues/2361)
- **【✨优化】** 引导页面现在会显示本地化来源
- **【✨优化】** 优化了胡桃通行证相关对话框的操作逻辑
- **【✨优化】** 实时便笺现在会在胡桃启动后自动刷新
- **【✨优化】** 数据文件夹现在会默认存放在容器内，会随卸载而删除
- **【✨优化】** 修改数据文件夹现在会自动复制数据到新目录 [#1835](https://github.com/DGP-Studio/Snap.Hutao/issues/1835)

## 1.13.0

- **【🎉新增】** 更换了程序图标 - 宿雪桃红
- **【🎉新增】** 新增日历服务器时区设置，可以调整主页日历卡片使用的时区
- **【🎉新增】** 标题栏新增元数据加载指示器
- **【🎉新增】** 新增胡桃通行证页面，同时移除了设置页面中的胡桃通行证部分
  * 新增重置邮箱功能
  * 新增刷新用户信息功能
  * 集成兑换码兑换功能
- **【🎉新增】** 引导界面新增了静态图片文件下载提示
- **【🎉新增】** 用户面板米游社扫码登录功能回归
- **【✨优化】** 胡桃通行证的修改密码/注销账号现在会默认为当前登录账号
- **【✨优化】** 胡桃通行证的祈愿记录云服务与 CDN 云服务在未获得时长时不再显示为 1970 年
- **【✨优化】** 在网络请求异常时显示 DNS 信息
- **【✨优化】** 调整了胡桃通知的显示方式，现在无法手动关闭严重（红色）/重要（黄色）类型的通知
- **【✨优化】** 紧凑网页窗口新增加载指示器/刷新按钮
- **【✨优化】** 优化了频繁改变窗口尺寸可能会导致应用内容闪烁的问题
- **【✨优化】** 启动游戏功能现在会正确的提示空路径
- **【✨优化】** 启动游戏功能现在会正确的禁用选择游戏路径按钮
- **【✨优化】** 现在在使用不支持的自定义背景图片时会产生更好的崩溃弹窗 [#2335](https://github.com/DGP-Studio/Snap.Hutao/issues/2335)
- **【✨优化】** 启动游戏功能游戏文件管理弹出的新窗口现在会保持与主窗口相同的主题风格
- **【✨优化】** 启动游戏功能游戏文件管理现在支持中断后恢复安装
- **【✨优化】** 启动游戏功能游戏文件管理现在会额外计算 1 GB 的安装缓存
- **【✨优化】** 启动游戏功能游戏文件管理现在会在安装时动态清理不需要的文件
- **【✨优化】** 启动游戏功能游戏文件管理现在会正确跳过已完成更新的文件
- **【✨优化】** 引导界面现在在选择语言后不再自动前往下一步
- **【✨优化】** 应用内错误提示现在可以复制文本了
- **【✨优化】** 调整了我的角色页面圣遗物主词条的显示效果，以便与副词条进行区分
- **【✨优化】** 我的角色界面在搜索无结果后会显示默认提示了
- **【✨优化】** 调整了祈愿记录页面中胡桃云功能的 UI
- **【✨优化】** 现在自动查找游戏路径时会判断可执行文件是否存在
- **【✨优化】** 养成计划页面材料统计页签树脂预估功能现在会记忆选择的世界等级
- **【✨优化】** 养成计划页面养成物品现在会分行展示天赋等级
- **【🔨修复】** 修复了部分设备在未使用快捷连点功能时也能通过某些按键触发的问题 [#2296](https://github.com/DGP-Studio/Snap.Hutao/issues/2296)
- **【🔨修复】** 修复了缩放比较高的设备在窗口较小时会崩溃的问题 [#2349](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **【🔨修复】** 修复了部分设备删除养成物品可能会导致崩溃的问题 [#2290](https://github.com/DGP-Studio/Snap.Hutao/issues/2290)
- **【🔨修复】** 修复了已经处于成就页面时由其他应用启动导入成就不会显示导入弹窗的问题 [#2306](https://github.com/DGP-Studio/Snap.Hutao/issues/2306)
- **【🔨修复】** 修复了特定情况下会尝试打开多个对话框的问题 [#2307](https://github.com/DGP-Studio/Snap.Hutao/issues/2307)
- **【🔨修复】** 修复了预下载可用时无法更改游戏路径的问题 [#2317](https://github.com/DGP-Studio/Snap.Hutao/issues/2317)
- **【🔨修复】** 修复了部分设备无法正确枚举容器应用从而导致崩溃的问题 [#2339](https://github.com/DGP-Studio/Snap.Hutao/issues/2339)
- **【🔨修复】** 修复了我的角色页面中达达利亚的天赋对普通攻击技能等级加成不显示的问题
- **【🔨修复】** 修复了在我的角色页面添加到养成计划时，弹出的提示数量不正确的问题
- **【🔨修复】** 修复了幻想真境剧诗页面上场率统计没有垂直居中的问题
- **【🔨修复】** 修复了 Cookie 失效后直接重新登录后仍然会显示网络异常的问题
- **【🔨修复】** 修复了连点功能启用时关闭连点功能开关没有停止连点的问题
- **【🔨修复】** 修复了我的角色页面网格视图下角色名片背景没有垂直居中的问题
- **【🔨修复】** 修复了我的角色/角色资料/武器资料中搜索框的待选提示中部分图标显示不完整的问题
- **【🔨修复】** 修复了特定情况下窗口尺寸可能初始化为不正确的大小的问题
- **【🔨修复】** 修复了祈愿记录页面计时页签中卡池尚未开始也会被计入的问题
- **【🔨修复】** 修复了实时便笺不会正确发送通知的问题
- **【🔨修复】** 修复了部分缩放率下实时便笺的角色探索部分可能会布局异常的问题
- **【🔨修复】** 修复了注销胡桃通行证失败时仍然会退出登录的问题

## 1.12.8

- **【🎉新增】** 新增键盘 F 键连按功能，可以在设置页面启用并配置快捷键
- **【🔨修复】** 修复了启动游戏界面加载时无任何游戏路径可能会导致崩溃的问题

## 1.12.7

- **【🔨修复】** 修复了未设置游戏路径时进入启动游戏页面会崩溃的问题

## 1.12.6

- **【🎉新增】** 启动游戏现在会自动检测游戏路径
- **【✨优化】** 移除队伍配置进度条 功能仅在允许切换队伍的情况下生效
- **【🔨修复】** 修复了未登录胡桃通行证时无法正常检查更新的问题
- **【🔨修复】** 修复了主页日历卡片背景色可能错误的问题
- **【🔨修复】** 修复了在下载游戏时修改限速可能导致的内存泄漏
- **【🔨修复】** 修复了在下载游戏时取消可能会导致程序崩溃的问题
- **【🔨修复】** 修复了祈愿记录未设置游戏路径时使用网页缓存获取抽卡记录时读取 Unity 日志崩溃的问题 [#2272](https://github.com/DGP-Studio/Snap.Hutao/issues/2272)

## 1.12.5

- **【🎉新增】** 启动游戏中现在可以自定义快速切换分辨率
- **【🎉新增】** 祈愿记录卡池计时新增卡池历史记录
- **【🎉新增】** 养成计划新增树脂预估 [#323](https://github.com/DGP-Studio/Snap.Hutao/issues/323) [#1540](https://github.com/DGP-Studio/Snap.Hutao/issues/1540)
- **【🔨修复】** 修复了切换主题时可能不会触发背景变换的问题
- **【🔨修复】** 修复了部分情况下部分元素的颜色主题显示错误的问题
- **【🔨修复】** 修复了可能通过元数据初始化注入的漏洞 [#2240](https://github.com/DGP-Studio/Snap.Hutao/issues/2240)
- **【🔨修复】** 修复了部分情况下无法读取本地游戏版本的问题 [#2251](https://github.com/DGP-Studio/Snap.Hutao/issues/2251)
- **【🔨修复】** 修复了部分情况下国际服无法刷新祈愿记录的问题 [#2252](https://github.com/DGP-Studio/Snap.Hutao/issues/2252)
- **【🔨修复】** 修复了养成计划覆盖保存后可能会出现无材料的角色或武器的问题
- **【🔨修复】** 修复了紧凑网页窗口透明度设置不生效的问题 [#2258](https://github.com/DGP-Studio/Snap.Hutao/issues/2258)
- **【🔨修复】** 修复了部分系统下从托盘菜单退出胡桃时可能存在的缓冲区溢出的问题
- **【✨优化】** 启动游戏页面尝试保存同名账号时现在将会替换而不是新建
- **【✨优化】** 养成计划现在会尝试获取更为准确的背包材料数量
- **【✨优化】** 优化了胡桃的体积

## 1.12.4

- **【🔨修复】** 修复了启动游戏设置分辨率后无法保存的问题 [#2229](https://github.com/DGP-Studio/Snap.Hutao/issues/2229)
- **【🔨修复】** 修复了成就完成时间显示错误的问题 [#2184](https://github.com/DGP-Studio/Snap.Hutao/issues/2184)
- **【🔨修复】** 修复了养成计划背包无法刷新的问题 [#2212](https://github.com/DGP-Studio/Snap.Hutao/issues/2212)
- **【🔨修复】** 修复了紧凑网页窗口视频快进/快退快捷键无效的问题
- **【🔨修复】** 修复了部分系统下选择文件窗口会引发崩溃的问题
- **【🔨修复】** 修复了更新胡桃时选择下载源不生效的问题
- **【✨优化】** 现在会在启动时检查代理和 Loopback 状态，并在无法正常联网时引导用户解除 Loopback 限制
- **【✨优化】** 紧凑网页窗口现在会记忆上次关闭时的页面

## 1.12.3 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了托盘图标不同步导致的程序崩溃 [#2198](https://github.com/DGP-Studio/Snap.Hutao/issues/2198)
- **【🔨修复】** 修复了托盘图标初始化失败导致元数据未初始化，从而导致程序不可用的问题 [#2202](https://github.com/DGP-Studio/Snap.Hutao/issues/2202)

## 1.12.2

- **【🎉新增】** 新增了紧凑网页窗口视频快进/快退的快捷键
- **【🔨修复】** 修复了养成计划选中状态异常导致无法启动胡桃的问题 [#2174](https://github.com/DGP-Studio/Snap.Hutao/issues/2174)
- **【🔨修复】** 修复了托盘菜单以管理员身份重启后托盘图标可能无法被正确创建的问题
- **【🔨修复】** 修复了游戏版本更新前公告时间显示错误的问题 [#2175](https://github.com/DGP-Studio/Snap.Hutao/issues/2175)
- **【🔨修复】** 修复了启动游戏重新选择游戏路径可能会崩溃的问题
- **【🔨修复】** 修复了游戏文件管理在修复游戏时可能会卡住的问题
- **【🔨修复】** 修复了窗口过小时，无法使用鼠标切换成就档案的问题 [#2181](https://github.com/DGP-Studio/Snap.Hutao/issues/2181)
- **【🔨修复】** 修复了未登录胡桃通行证上传深渊记录时，跳转登录崩溃的问题 [#2169](https://github.com/DGP-Studio/Snap.Hutao/issues/2169)
- **【🔨修复】** 修复了国际服无法正常刷新幻想真境剧诗的问题 [#2170](https://github.com/DGP-Studio/Snap.Hutao/issues/2170)
- **【🔨修复】** 修复了武器在添加至养成计划时可能会崩溃的问题 [#2168](https://github.com/DGP-Studio/Snap.Hutao/issues/2168)
- **【✨优化】** 优化了游戏文件管理预下载提示图标的显示效果
- **【✨优化】** 实时便笺页面为每个游戏角色添加了启动游戏按钮，会跳转至启动游戏页面并自动将 米游社 / HoYoLAB 用户切换至便笺对应的用户 [#1318](https://github.com/DGP-Studio/Snap.Hutao/issues/1318)
- **【✨优化】** 优化了角色与武器图标的加载速度

## 1.12.1 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了数据库迁移失败导致无法启动的问题 [#2159](https://github.com/DGP-Studio/Snap.Hutao/issues/2159)

## 1.12.0

- **【🎉新增】** 升级到 .NET 9
- **【🎉新增】** 通知图标右键菜单新增启动紧凑网页窗口的命令
  - 紧凑网页窗口为一个置于顶层、无交互时可呈现半透明的网页窗口
  - 可在设置页面设置网页中视频播放/暂停的快捷键
  - 使用紧凑网页窗口需以管理员身份启动
- **【🎉新增】** 新增幻想真境剧诗页面 [#1671](https://github.com/DGP-Studio/Snap.Hutao/issues/1671)
- **【🔨修复】** 修复了使用 SophonChunk 模式切换游戏服务器时可能会崩溃的问题
- **【🔨修复】** 修复了启动游戏注入选项部分特定情况下逻辑错误的问题
- **【🔨修复】** 修复了启动游戏注入失败强制结束游戏后，注入选项部分开关不可交互的问题
- **【🔨修复】** 修复了国际服无法通过网页缓存刷新抽卡记录的问题 [#2141](https://github.com/DGP-Studio/Snap.Hutao/issues/2141)
- **【🔨修复】** 修复了深境螺旋页面在非中文的情况下攻击波次详情可能无法完全展开的问题 [#2152](https://github.com/DGP-Studio/Snap.Hutao/issues/2152)
- **【🔨修复】** 修复了特殊情况下自动连点热键初始化失败导致崩溃的问题
- **【✨优化】** 从实时便笺通知启动游戏时，会自动将 米游社 / HoYoLAB 用户切换至便笺对应的用户

## 1.11.9 <Badge text="hotfix" type="warning" />

- **【🎉新增】** 祈愿记录新增卡池计时 [#1341](https://github.com/DGP-Studio/Snap.Hutao/issues/1341)
- **【🔨修复】** 修复了启动游戏注入选项与实际情况不匹配的问题 [#2134](https://github.com/DGP-Studio/Snap.Hutao/issues/2134)
- **【🔨修复】** 修复了启用调整视野时在队伍和部分角色元素爆发画面可能出现卡顿的问题 [#2137](https://github.com/DGP-Studio/Snap.Hutao/issues/2137)
- **【🔨修复】** 修复了 WebView 无法正常弹出时可能会崩溃的问题

## 1.11.8 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了国际服注入功能失效的问题 [#2121](https://github.com/DGP-Studio/Snap.Hutao/issues/2121)
- **【🔨修复】** 修复了通过网页缓存刷新抽卡记录失效的问题 [#2124](https://github.com/DGP-Studio/Snap.Hutao/issues/2124)
- **【✨优化】** 优化了启动游戏注入选项开关间的逻辑 [#2122](https://github.com/DGP-Studio/Snap.Hutao/issues/2122)

## 1.11.7

- **【🎉新增】** / **【✨优化】** 调整了启动游戏界面的 UI
  - **【🎉新增】** 移除队伍配置界面进度条 功能
  - **【🎉新增】** 让我进去！米奇妙妙功能（是的没错）
- **【🎉新增】** 启动游戏切换服务器新增分块模式
- **【🎉新增】** 角色资料添加角色名片 [#1424](https://github.com/DGP-Studio/Snap.Hutao/issues/1424)
- **【🔨修复】** 修复了每日首次启动胡桃可能会崩溃的问题 [#2101](https://github.com/DGP-Studio/Snap.Hutao/issues/2101)
- **【🔨修复】** 修复了错误报告窗口可能不会正确显示的问题
- **【🔨修复】** 修复了主页公告持续时间错误的问题
- **【🔨修复】** 修复了游戏文件管理在部分类型磁盘下可能会崩溃的问题 [#2077](https://github.com/DGP-Studio/Snap.Hutao/issues/2077)
- **【🔨修复】** 修复了通过网页缓存刷新抽卡记录可能会崩溃的问题 [#2083](https://github.com/DGP-Studio/Snap.Hutao/issues/2083)
- **【🔨修复】** 修复了窗口尺寸在跨显示器重启后大小可能不正确的问题
- **【✨优化】** 日历卡片现在会高亮当前养成计划中今日可刷的材料 [#2045](https://github.com/DGP-Studio/Snap.Hutao/issues/2045)
- **【✨优化】** 我的角色和角色资料现在不会显示 1 星 ~ 3 星的筛选项 [#2110](https://github.com/DGP-Studio/Snap.Hutao/issues/2110)
- **【✨优化】** 添加米游社/HoYoLAB账号现在会在未添加完成时显示对话框阻止用户操作

## 1.11.6 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了需要验证的功能在完成验证后会崩溃的问题 [#2074](https://github.com/DGP-Studio/Snap.Hutao/issues/2074)
- **【🔨修复】** 修复了需要下载资源的功能可能会卡死的问题

## 1.11.5

- **【🎉新增】** 启动游戏新增 米游社 / HoYoLAB 账户登录
- **【🎉新增】** 我的角色页面新增了筛选 [#1786](https://github.com/DGP-Studio/Snap.Hutao/issues/1786)
- **【🎉新增】** 在设置中新增了网页活动分享图片保存方式的选项 [#1804](https://github.com/DGP-Studio/Snap.Hutao/issues/1804)
- **【🎉新增】** 国际服新增了账密登录和三方登录 [#1966](https://github.com/DGP-Studio/Snap.Hutao/issues/1966)
- **【🔨修复】** 修复了在刷新背景图片时可能会崩溃的问题
- **【🔨修复】** 修复了多显示器缩放的显示问题
- **【🔨修复】** 修复了错误报告窗口可能不会正确显示的问题
- **【🔨修复】** 修复了部分语言下实时便笺设置显示不完整的问题 [#2040](https://github.com/DGP-Studio/Snap.Hutao/issues/2040)
- **【🔨修复】** 修复了更新养成计划时部分清单不会被正常处理的问题 [#2022](https://github.com/DGP-Studio/Snap.Hutao/issues/2022)
- **【🔨修复】** 修复了养成计划同步背包物品可能无响应的问题 [#2044](https://github.com/DGP-Studio/Snap.Hutao/issues/2044)
- **【🔨修复】** 修复了养成计划同步背包物品数量可能不正确的问题 [#2061](https://github.com/DGP-Studio/Snap.Hutao/issues/2061)
- **【🔨修复】** 修复了米游社手机号登录时，不点击获取直接输入验证码会崩溃的问题 [#2058](https://github.com/DGP-Studio/Snap.Hutao/issues/2058)
- **【✨优化】** 优化了更新游戏按钮的启用逻辑
- **【✨优化】** 怪物等级上限提高到了 110 级 [#1988](https://github.com/DGP-Studio/Snap.Hutao/issues/1988)
- **【✨优化】** 现在遇到验证码会自动弹出验证窗口 [#1616](https://github.com/DGP-Studio/Snap.Hutao/issues/1616)

## 1.11.4

- **【🎉新增】** 现在在程序崩溃时会弹出错误报告窗口
- **【🔨修复】** 修复了安装/更新胡桃后首次启动可能会崩溃的问题
- **【🔨修复】** 修复了会同时设置多个 Discord 状态的问题 [#2024](https://github.com/DGP-Studio/Snap.Hutao/issues/2024)
- **【🔨修复】** 修复了游戏公告第一行可能不会响应点击的问题
- **【🔨修复】** 修复了国际服公告无法获取的问题 [#2030](https://github.com/DGP-Studio/Snap.Hutao/issues/2030)
- **【🔨修复】** 修复了 5.1 版本更新后解锁帧率可能无法生效的问题
- **【🔨修复】** 修复了更新游戏无法正常完成的问题
- **【🔨修复】** 修复了更新游戏窗口中安装进度可能超过 100% 的问题
- **【🔨修复】** 修复了游戏资源预下载可能会卡住的问题 [#2029](https://github.com/DGP-Studio/Snap.Hutao/issues/2029)
- **【🔨修复】** 修复了游戏资源预下载完成时已完成标记可能不会显示的问题
- **【🔨修复】** 修复了养成计算页面材料统计可能无响应的问题 [#2014](https://github.com/DGP-Studio/Snap.Hutao/issues/2014)
- **【🔨修复】** 修复了米游社手机验证码登录可能失败的问题
- **【✨优化】** 在养成计算页面材料统计中新增了未集齐优先
- **【✨优化】** 在养成计算页面材料统计中现在会显示今日可获取材料

## 1.11.3

- **【🎉新增】** 在主页新增了日历卡片 [#1923](https://github.com/DGP-Studio/Snap.Hutao/issues/1923)
- **【🎉新增】** 在我的角色页面新增了圣遗物属性推荐
- **【🔨修复】** 修复了深境螺旋页面部分怪物无法正确显示的问题
- **【🔨修复】** 修复了角色/武器资料页面可能会卡死的问题 [#1999](https://github.com/DGP-Studio/Snap.Hutao/issues/1999)
- **【🔨修复】** 修复了切换游戏服务器会崩溃的问题
- **【✨优化】** 禁止了游戏文件操作未完成时直接关闭操作窗口的行为 [#2002](https://github.com/DGP-Studio/Snap.Hutao/issues/2002)
- **【✨优化】** 在祈愿记录页面添加了导入/导出的按钮，使用户更易找到设置页面的导入导出按钮

## 1.11.2

- **【🎉新增】** 成就管理页面新增筛选仅委托成就功能 [#897](https://github.com/DGP-Studio/Snap.Hutao/issues/897)
- **【🎉新增】** 在设置页面中新增了启动游戏下载游戏功能限速功能
- **【🎉新增】** 设置界面祈愿记录导入导出新增 UIGF 版本升级网页工具链接
- **【🔨修复】** 修复了部分设备复制应用包内文件提示无法加密指定的文件的问题
  - 该问题曾导致
    - 无法正常创建桌面快捷方式
    - 无法正常解锁游戏帧率
- **【🔨修复】** 修复了启动游戏页面下载游戏时CPU占用异常的问题 [#1964](https://github.com/DGP-Studio/Snap.Hutao/issues/1964)
- **【🔨修复】** 修复了更新游戏不生效的问题
- **【🔨修复】** 修复了我的角色页面中切换到没有圣遗物的角色会导致程序崩溃的问题 [#1954](https://github.com/DGP-Studio/Snap.Hutao/issues/1954)
- **【🔨修复】** 修复了实时便笺请求失败 代码 -1 的问题
- **【🔨修复】** 修复了部分设备成就管理页面无法正常切换存档的问题 [#1987](https://github.com/DGP-Studio/Snap.Hutao/issues/1987)
- **【✨优化】** 成就管理页面中成就的标题与提示现在能够选中并复制了 [#1726](https://github.com/DGP-Studio/Snap.Hutao/issues/1726)
- **【✨优化】** 成就管理搜索成就现在会同时筛选成就分类 [#1907](https://github.com/DGP-Studio/Snap.Hutao/issues/1907)
- **【✨优化】** 调整了国服公告的接口链接 [Scighost/Starward#1089](https://github.com/Scighost/Starward/issues/1089)

## 1.11.1

- **【🎉新增】** 通知图标右键菜单新增执行调试脚本的命令
- **【🎉新增】** 通知图标右键菜单新增以管理员模式重启的命令 [#1825](https://github.com/DGP-Studio/Snap.Hutao/issues/1825)
- **【🔨修复】** 更新后首次启动的更新日志窗口现在会正确识别胡桃的语言选项 [#1900](https://github.com/DGP-Studio/Snap.Hutao/issues/1900)
- **【🔨修复】** 修复了启动游戏中下载与修复游戏功能无法正常使用的问题
- **【🔨修复】** 修复了背景选项中启动器背景无法正常工作的问题 [#1908](https://github.com/DGP-Studio/Snap.Hutao/issues/1908)
- **【🔨修复】** 修复了导入 UIGF v4.0 文件时不会选择正确的部分进行导入的问题 [#1941](https://github.com/DGP-Studio/Snap.Hutao/issues/1941)
- **【🔨修复】** 修复了导入 UIGF v4.0 文件对话框排版不正确的问题
- **【🔨修复】** 修复了成就管理在选择了成就分类的情况下勾选或取消勾选成就会导致成就分类取消选中的问题 [#1946](https://github.com/DGP-Studio/Snap.Hutao/issues/1946)
- **【✨优化】** 现在用户面板鼠标悬浮于HoYoLAB用户时会隐藏HoYoLAB字样 [#1824](https://github.com/DGP-Studio/Snap.Hutao/issues/1824)
- **【✨优化】** 养成计划现在能够正确识别纳塔的天赋与武器突破材料了
- **【✨优化】** 调整了解锁帧率的视野范围
- **【✨优化】** 优化了切换服务器时的多线程下载逻辑
- **【✨优化】** 优化了启动游戏中下载与修复游戏功能的弹出窗口UI

## 1.11.0

- **【🎉新增】** 实时便笺页面新增长效历练点显示 [#1841](https://github.com/DGP-Studio/Snap.Hutao/issues/1841)
- **【🎉新增】** 【BETA】启动游戏新增游戏下载/修复/预下载/更新的功能
- **【🔨修复】** 修复了无法通过扫码登录米游社的问题，移除了扫码登录入口，新增手机验证码登录方式 [#1819](https://github.com/DGP-Studio/Snap.Hutao/issues/1819)
- **【🔨修复】** 修复了我的角色页面列表与网格视图中角色技能等级因命座加成导致显示不一致的问题 [#1838](https://github.com/DGP-Studio/Snap.Hutao/issues/1838)
- **【🔨修复】** 修复了在主页公告未完成加载时切换到其他页面会导致崩溃的问题 [#1845](https://github.com/DGP-Studio/Snap.Hutao/issues/1845)
- **【🔨修复】** 修复了转换游戏服务器时读取本地包版本信息失败会导致崩溃的问题 [#1851](https://github.com/DGP-Studio/Snap.Hutao/issues/1851)
- **【🔨修复】** 修复了国际服获取祈愿记录显示 验证密钥过期 的问题 [#1873](https://github.com/DGP-Studio/Snap.Hutao/issues/1873)
- **【🔨修复】** 修复了在未登录米游社或 HoYoLAB 的情况下导航到我的角色/深境螺旋页面后无法继续操作的问题 [#1877](https://github.com/DGP-Studio/Snap.Hutao/issues/1877)
- **【🔨修复】** 修复了部分设备刷新实时便笺会导致崩溃的问题 [#1893](https://github.com/DGP-Studio/Snap.Hutao/issues/1893)
- **【🔨修复】** 修复了主页公告不显示，主页公告详情在暗黑模式下部分文本颜色不正确的问题
- **【🔨修复】** 修复了应用内背景无法正确定时切换的问题
- **【✨优化】** 调整了应用内通知的显示位置 [#1832](https://github.com/DGP-Studio/Snap.Hutao/issues/1832)
- **【✨优化】** 优化了网络请求错误的应用内提示信息
- **【✨优化】** 优化了下载更新时体验，现在可以选择镜像进行下载
- **【✨优化】** 优化了解锁帧率相关功能，移除了经典模式，注入模式新增视野修改/移除迷雾/兼容模式

## 1.10.7

- **【🎉新增】** 我的角色页面新增导出当前角色文本信息到剪贴板的功能 [#1497](https://github.com/DGP-Studio/Snap.Hutao/issues/1497)
- **【🎉新增】** 设置界面新增 UIGF 4 导入导出支持，祈愿记录移除了 UIGF 2 与 UIGF 3 导入导出支持
- **【🔨修复】** 修复了祈愿记录页面删除存档时不会刷新视图的问题
- **【🔨修复】** 修复了实时便笺自动刷新默认启用的问题
- **【🔨修复】** 修复了当网页视图宽度过窄时，标题不会正常显示的问题
- **【🔨修复】** 修复了HoYoLAB账号无法在养成计划中添加角色和武器的问题 [#1810](https://github.com/DGP-Studio/Snap.Hutao/issues/1810)
- **【🔨修复】** 修复了解锁帧率失败的问题 [#1820](https://github.com/DGP-Studio/Snap.Hutao/issues/1820)
- **【✨优化】** 优化了主窗口的导航交互，现在页面未加载完成时无法导航到其他页面，现在会在更新后首次启动时展示更新日志窗口
- **【✨优化】** 优化了应用内通知的展示方式
- **【✨优化】** 优化了添加到养成计划的流程，现在能够选择保存模式了
- **【✨优化】** 优化了 HTTP 请求的信息提示 [#1720](https://github.com/DGP-Studio/Snap.Hutao/issues/1720)

## 1.10.6

- **【🔨修复】** 修复了因游戏路径变化导致无法启动胡桃的问题 [#1792](https://github.com/DGP-Studio/Snap.Hutao/issues/1792)
- **【🔨修复】** 修复了祈愿记录刷新后页面内容未更新的问题 [#1791](https://github.com/DGP-Studio/Snap.Hutao/issues/1791)
- **【🔨修复】** 修复了祈愿记录刷新后若与当前UID不同会导致崩溃的问题 [#1794](https://github.com/DGP-Studio/Snap.Hutao/issues/1794)
- **【🔨修复】** 修复了在缩放率不为 100% 的显示器上网页窗口大小不正确的问题 [#1795](https://github.com/DGP-Studio/Snap.Hutao/issues/1795)
- **【🔨修复】** 修复了启动游戏界面绑定实时便笺UID会导致崩溃的问题
- **【✨优化】** 调整了实时便笺中探索派遣的时间显示格式 [#1796](https://github.com/DGP-Studio/Snap.Hutao/issues/1796)

## 1.10.5

- 新增注入解锁模式，经典模式无效时可以尝试此模式
- 网页现在会显示在单独的窗口中
- 修复了国际服转国服时可能会导致游戏数据异常的问题 [#1750](https://github.com/DGP-Studio/Snap.Hutao/issues/1750)
- 修复了部分录屏软件可能采集到错误窗口的问题 [#1771](https://github.com/DGP-Studio/Snap.Hutao/issues/1771)
- 修复了特定条件下添加 HoYoLAB 账号会导致程序崩溃的问题 [#1774](https://github.com/DGP-Studio/Snap.Hutao/issues/1774)
- 修复了部分控件在深色模式下显示有误的问题 [#1633](https://github.com/DGP-Studio/Snap.Hutao/issues/1633)
- 修复了通过 Url 协议导入成就时无法正常显示界面的问题 [#1763](https://github.com/DGP-Studio/Snap.Hutao/issues/1763)
- 修复了部分情况下无法正常显示技能图标的问题 [#1784](https://github.com/DGP-Studio/Snap.Hutao/issues/1784)
- 修复了部分活动公告时间错误的问题
- 修复了多个元素对齐问题
- 优化了部分页面的显示效果
- 重构了底层代码
- 其他的QA问题

## 1.10.4

- **【🎉新增】** 深境螺旋-本期统计/角色资料/武器资料中的胡桃数据库部分新增上期数据对比
- **【🎉新增】** 养成计划添加了获取背包材料的功能 [#1651](https://github.com/DGP-Studio/Snap.Hutao/issues/1651)
- **【🎉新增】** 为所有图片添加了右键复制支持
- **【🎉新增】** 用户面板新增显示游戏角色头像功能
- **【🔨修复】** 修复了解锁帧率后因文件占用导致无法转换游戏服务器的问题 [#1703](https://github.com/DGP-Studio/Snap.Hutao/issues/1703)
- **【🔨修复】** 修复了在胡桃未启动的情况下从其他程序使用 URL 协议导入成就会导致卡死的问题 [#1704](https://github.com/DGP-Studio/Snap.Hutao/issues/1704)
- **【🔨修复】** 修复了实时便笺的实际刷新时间错误的放大了 60 倍的问题 [#1710](https://github.com/DGP-Studio/Snap.Hutao/issues/1710)
- **【🔨修复】** 增加实时便笺设置中树脂提醒阈值的最大值至 200 [#1711](https://github.com/DGP-Studio/Snap.Hutao/issues/1711)
- **【🔨修复】** 背景图片-启动器背景现在使用无字版本 [#1688](https://github.com/DGP-Studio/Snap.Hutao/issues/1688)
- **【🔨修复】** 更改了从 Windows 通知中心激活的逻辑，修复了管理员模式下通知无法正常重定向的问题
- **【🔨修复】** 修复了部分场景下养成计划页面所有材料或所有背包物品会错误渲染的问题
- **【✨优化】** 优化了部分控件的显示效果
- **【✨优化】** 更改了窗口的激活/关闭逻辑，现在不再隐藏已经打开的窗口而是直接关闭
- **【✨优化】** 调整了启动游戏-游戏资源的包列表展示 UI
- **【✨优化】** 武器资料页面使用游戏内排序
- **【✨优化】** 优化了部分文本的标点符号及表述
- **【✨优化】** 其他的性能改进与 QA 测试问题修复

## 1.10.3

- **【🎉新增】** 现在通知区域图标支持左键单击呼出菜单了 [#1656](https://github.com/DGP-Studio/Snap.Hutao/issues/1656)
- **【🔨修复】** 修复了游戏启动器中帧率解锁功能在游戏 4.7 版本下失效的问题 [#1675](https://github.com/DGP-Studio/Snap.Hutao/issues/1675)
- **【🔨修复】** 修复了 Windows 10 系统下关闭主窗口不会正确弹出托盘图标通知的问题
- **【🔨修复】** 修复了 Windows 10 系统下有时无法正确获取托盘图标位置导致崩溃的问题
- **【🔨修复】** 修复了将窗口调整到小于初始尺寸的大小时不会被记忆的问题 [#1657](https://github.com/DGP-Studio/Snap.Hutao/issues/1657)
- **【🔨修复】** 修复了部分场景下应用重定向失败的问题
- **【🔨修复】** 修复了部分场景下启动游戏窗口数据过期的问题
- **【🔨修复】** 修复了养成计划所有材料在周日高亮的问题
- **【🔨修复】** 修复了引导窗口可以最大化的问题
- **【🔨修复】** 修复了当游戏截图文件夹不存在时无法打开的问题
- **【🔨修复】** 修复了开发版与正式版使用同一个通知标识符导致重复激活的问题 <Badge text="开发者功能" type="tip" />
- **【✨优化】** 暂时禁用了用户面板中的米游社网页登录入口
- **【✨优化】** 移除了任务栏以及开始菜单中胡桃图标的右键菜单的快捷任务列表
- **【✨优化】** 优化了应用内通知的样式 [#1650](https://github.com/DGP-Studio/Snap.Hutao/issues/1650)
- **【✨优化】** 优化了我的角色中角色数值面板的样式
- **【✨优化】** 优化了实时便笺中实时便笺设置的样式
- **【✨优化】** 优化了主页中游戏公告的图片在深色模式下的亮度表现
- **【✨优化】** 优化了祈愿记录中全球祈愿统计中的卡池图片在深色模式下的亮度表现
- **【✨优化】** 优化了部分文本的显示效果
- **【✨优化】** 优化了部分页面的加载速度
- **【✨优化】** 其他的性能改进
- **【🌏本地化】** 新增越南语

## 1.10.2

- **【🎉新增】** 为静态资源下载引入了重试机制
- **【🎉新增】** 实时便笺新增魔神任务进度查看 [#1203](https://github.com/DGP-Studio/Snap.Hutao/issues/1203)
- **【🎉新增】** 养成计划在周日时将会高亮所有相关材料 [#1607](https://github.com/DGP-Studio/Snap.Hutao/issues/1607)
- **【🎉新增】** 新增在系统通知区域显示图标的选项 （后台托盘）
  - 设置页面新增通知区域图标开关
  - 开启通知区域图标后应用行为将会发生变化
  - **【✨优化】** 在关闭所有窗口后将不会退出，只有在图标的右键菜单中点击退出才会结束进程
  - **【✨优化】** 在关闭窗口时如果图标处于折叠区域中会触发提示
  - **【✨优化/重大变动】** 实时便笺定时刷新现在不再支持无后台运行时触发 （Windows 定时任务刷新方式将被删除）
  - **【✨优化】** 实时便笺的刷新开关/刷新时间设置不再要求管理员模式
- **【🔨修复】** 修复了角色资料/武器资料/怪物资料/成就管理界面在默认视图不是列表时，切换到列表界面时图片可能不会加载的问题
- **【🔨修复】** 修复了由于检查系统代理设置导致的偶发性无法正常退出程序的问题
- **【🔨修复】** 修复了背包物品在切换养成计划时不会跟随切换的问题 [#1609](https://github.com/DGP-Studio/Snap.Hutao/issues/1609)
- **【🔨修复】** 修复了修改单个成就的完成状态时会错误的取消选择成就分类的问题 [#1631](https://github.com/DGP-Studio/Snap.Hutao/issues/1631)
- **【🔨修复】** 修复了快捷键设置在靠近标题栏时打开辅助按钮面板会被标题栏遮挡的问题 [#1632](https://github.com/DGP-Studio/Snap.Hutao/issues/1632)
- **【🔨修复】** 修复了部分新公告的时间范围未正确匹配的问题 [#1613](https://github.com/DGP-Studio/Snap.Hutao/issues/1613)
- **【🔨修复】** 修复了祈愿记录页面统计页签会将0抽的卡池比例显示为NaN的问题 [#1588](https://github.com/DGP-Studio/Snap.Hutao/issues/1588)
- **【✨优化】** 移除了任务栏图标的右键菜单中的任务列表
- **【✨优化】** 新增养成计划删除的二次确认对话框 [#1608](https://github.com/DGP-Studio/Snap.Hutao/issues/1608)
- **【✨优化】** 新增对 HoYoLAB 2001 错误代码的提示 [#1542](https://github.com/DGP-Studio/Snap.Hutao/issues/1542)
- **【✨优化】** 在引导界面的画质选择页签新增了画质对比 [#1595](https://github.com/DGP-Studio/Snap.Hutao/issues/1595)
- **【✨优化】** 在非管理员模式下禁用了自动连点快捷键设置
- **【✨优化】** 其他的性能改进
- **【🌏本地化】** 新增法语

## 1.10.1 <Badge text="hotfix" type="warning" />

- **【🔨修复】** 修复了无法切换游戏服务器的问题

## 1.10.0

- **【🎉新增】** 增加图片画质选项，用户现在可以选择占用储存空间明显更小且接近无损的图片质量 [#1430](https://github.com/DGP-Studio/Snap.Hutao/issues/1430)
- **【🎉新增】** 调整了检查更新的流程，现在会提示用户是否下载更新，在更新提示中增加了更新日志的快捷入口 [#1550](https://github.com/DGP-Studio/Snap.Hutao/issues/1550)
- **【🎉新增】** 在祈愿记录的角色和武器标签页中，显示从未抽到过的物品 [#1355](https://github.com/DGP-Studio/Snap.Hutao/issues/1355)
- **【🎉新增】** 增加了全新的默认以管理员模式启动程序的方法 [#1558](https://github.com/DGP-Studio/Snap.Hutao/issues/1558)
- **【🎉新增】** 成就记录页面新增只显示未完成的成就分类的选项 [#896](https://github.com/DGP-Studio/Snap.Hutao/issues/896)
- **【🔨修复】** 修复了在 Windows 10 下窗口最大化时无法显示隐藏的任务栏的问题 [#1571](https://github.com/DGP-Studio/Snap.Hutao/issues/1571)
- **【🔨修复】** 修复了设置页面顶部卡片边距不正确的问题
- **【🔨修复】** 修复了热插拔显示器后无法正常启动游戏或程序闪退的问题
- **【🔨修复】** 修复了祈愿记录页面全球祈愿统计在当前无集录祈愿时无法正常查看的问题
- **【🔨修复】** 修复了在查找缓存图片时指向错误路径的问题，该问题曾导致需要重复下载图片资源
- **【🔨修复】** 修复了公告在版本尚未更新时开始与结束时间不正确的问题
- **【🔨修复】** 修复了在 Discord 检查更新时启动胡桃可能会导致闪退的问题
- **【✨优化】** 优化了密码输入框中点击显示按钮前后浮窗的显示效果 [#1485](https://github.com/DGP-Studio/Snap.Hutao/issues/1485)
- **【✨优化】** 软件更新流程仅在用户确认后开始，不再默认开始 [#1297](https://github.com/DGP-Studio/Snap.Hutao/issues/1297)
- **【✨优化】** 用户在未登录胡桃云时，上传深渊记录前将会弹窗提示以避免用户错失领取奖励的机会 [#1245](https://github.com/DGP-Studio/Snap.Hutao/issues/1245)
- **【✨优化】** 优化了启动游戏功能，在无法找到游戏配置文件时将会尝试自动生成配置文件，同时提供了手动生成功能
- **【✨优化】** 更新 Windows App SDK 到 1.5.2
- **【✨优化】** 优化了程序整体的内存占用
- **【✨优化】** 现在重置图片资源时会清空缓存文件夹
- **【✨优化】** 优化了创建以管理员模式启动的快捷方式功能，现在即使固定到任务栏也可以正常使用
- **【✨优化】** 优化了胡桃通行证的登录弹窗，现在查看密码明文时不会导致对话框宽度反复变化
- **【✨优化】** 其他大量底层重构

## 1.9.9

- 新增 ➕
  - 祈愿记录页面全球统计页签新增集录祈愿栏目
- 修复 🔨
  - 修复了联动启动 Better Genshin Impact 时的错误 [#1467](https://github.com/DGP-Studio/Snap.Hutao/issues/1467)
  - 修复了高级启动器-资源下载中完整包包名显示错误的问题 [#1476](https://github.com/DGP-Studio/Snap.Hutao/issues/1476)
  - 修复了高级启动器在解锁帧率时游戏仍然会启动的问题 [#1495](https://github.com/DGP-Studio/Snap.Hutao/issues/1495)
  - 更换了设置页中过时的链接 [#1503](https://github.com/DGP-Studio/Snap.Hutao/issues/1503)
  - 修复了在添加账号时闪退；修复了偶发的无法正确清空选中的用户与角色的问题；优化了登录后的界面显示 [#1504](https://github.com/DGP-Studio/Snap.Hutao/issues/1504)
  - 修复了在祈愿记录界面关闭窗口会导致程序崩溃的问题
  - 修复了当程序主题与系统主题不同时，对话框会显示系统主题的问题
- 优化 ✨
  - 优化了 WIKI 关键词搜索界面 [#1475](https://github.com/DGP-Studio/Snap.Hutao/pull/1475)
  - 优化了 WIKI 功能搜索结果为空时的界面 [#1479](https://github.com/DGP-Studio/Snap.Hutao/pull/1479)
  - 优化了养成计划中已收集完成物品的显示 [#1513](https://github.com/DGP-Studio/Snap.Hutao/pull/1513)
  - 优化了养成计划界面瀑布流排版的流畅度与稳定性
  - 优化了养成计划页面背包材料与材料统计页签的默认排序，现在对于数量足够的物品会显示完成标记 [#1510](https://github.com/DGP-Studio/Snap.Hutao/pull/1510)
  - 优化了祈愿记录页面统计页签底部滚动条的对齐
  - 优化了祈愿记录页面全球统计页签的物品显示逻辑
  - 优化了成就记录页面网格视图的流畅度与稳定性
  - 在网页登录账号界面增加了安全性提示

## 1.9.8

- 新增 ➕
  - 新增对集录祈愿卡池的支持 [#1470](https://github.com/DGP-Studio/Snap.Hutao/issues/1470)
  - 增加对 UIGF v3.0 祈愿数据格式的支持
  - 新增程序内切换应用深浅色主题的设置选项 [#1434](https://github.com/DGP-Studio/Snap.Hutao/issues/1434)
- 修复 🔨
  - 修复了在特定的 Windows 显示设置下，主页卡片的显示问题 [#1429](https://github.com/DGP-Studio/Snap.Hutao/issues/1429)
  - 修复了因网络问题，国际服和官服之间有概率转换失败的情况 [#1433](https://github.com/DGP-Studio/Snap.Hutao/issues/1433)
  - 修复了启动游戏下载页签预下载的下载链接与名称不正确的问题
- 优化 ✨
  - 大幅增强了 WIKI 搜索筛选功能，现在用户在输入时会获得提示 [#1120](https://github.com/DGP-Studio/Snap.Hutao/issues/1120)
  - 修正了部分游戏启动器中与进程间相关功能的用词 [#1432](https://github.com/DGP-Studio/Snap.Hutao/issues/1432)
  - 重新设计了祈愿记录页面中常驻祈愿数据展示的 UI [#1460](https://github.com/DGP-Studio/Snap.Hutao/issues/1460)
  - 优化了在祈愿卡池数据为空时，祈愿记录时间范围的文本 [#1443](https://github.com/DGP-Studio/Snap.Hutao/issues/1443)
  - 主窗体重新启用了背景材料显示
  - 切换背景选项后立即刷新背景，无需重启生效
  - 优化了深境螺旋本期统计中队伍上场页签的 UI

## 1.9.7

- 新增 ➕
  - 在高级启动器中新增与 [Better Genshin Impact](https://bgi.huiyadan.com/) 程序的联动启动功能，用户现在可以在通过 Snap Hutao 启动游戏的同时，自动启动 BGI [#1388](https://github.com/DGP-Studio/Snap.Hutao/issues/1388)
  - 新增了多个客户端背景图的来源选项，包括：
    - 无背景图片（默认选项）
    - 本地随机图片
    - Bing 每日图片
    - 胡桃每日图片
    - 原神官方启动器背景图
- 修复 🔨
  - 修复了当 Discord 以管理员权限运行时，用普通权限启动胡桃时，胡桃会闪退的问题 [#1400](https://github.com/DGP-Studio/Snap.Hutao/issues/1400)
  - 修复了管理员模式下拖动排序导致客户端闪退的问题 [#1379](https://github.com/DGP-Studio/Snap.Hutao/issues/1379)
  - 修复了首页游戏公告下滑至底部会使公告消失的问题 [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
  - 再次修复了角色资料部分文本显示异常的问题 [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - 修复了反馈中心中搜索结果未进行 HTML 解码的问题 [#1391](https://github.com/DGP-Studio/Snap.Hutao/issues/1391)
- 优化 ✨
  - 高级启动器中的快捷分辨率设置新增两个分辨率快捷选项 [#1375](https://github.com/DGP-Studio/Snap.Hutao/issues/1375)
  - 记忆用户的每个账号下选中的角色 [#1233](https://github.com/DGP-Studio/Snap.Hutao/issues/1233)

## 1.9.6

- 新增➕
  - 新增自定义应用内背景功能，用户可以在设置内打开背景目录并设置想要展示的图片 [#357](https://github.com/DGP-Studio/Snap.Hutao/issues/357)
  - 新增设置页面的响应式布局，现在页面布局会随着窗口大小动态调整，[@Scighost](https://github.com/Scighost) 实现了这个功能 [#1337](https://github.com/DGP-Studio/Snap.Hutao/issues/1337)
  - 在反馈中心中新增了容器 loopback 状态显示和解除限制的功能
  - 在反馈中心中新增了显示当前网络代理状态的功能
- 修复🔨
  - 修复了深境螺旋数据上传时提示 `653366069` 错误的问题 [#1351](https://github.com/DGP-Studio/Snap.Hutao/issues/1351)
  - 修复了我的角色从原神战绩与从养成计算同步时提示 `653366069` 错误的问题
  - 适配了亚服新 UID 规则
  - 修复了游戏公告中部分文本字体过小的问题 [#1347](https://github.com/DGP-Studio/Snap.Hutao/issues/1347)
  - 修复了二维码扫码登录失败的问题，使用绝区零登录入口处理扫码登录 [#1345](https://github.com/DGP-Studio/Snap.Hutao/issues/1345)
  - 替换了角色资料中角色语音/角色故事的部分不可读文本为正常文本 [#1316](https://github.com/DGP-Studio/Snap.Hutao/issues/1316)
  - 修复了参量质变仪未获得时在主页实时便笺卡片中的错误显示问题 [#1331](https://github.com/DGP-Studio/Snap.Hutao/issues/1331)
  - 修复了在某些情况下首页公告下滑至底部导致崩溃的问题 [#1365](https://github.com/DGP-Studio/Snap.Hutao/issues/1365)
- 优化 ✨
  - 用户面板中的米游社/HoYoLAB 账号允许被拖动排序以允许用户获得更自然的操作体验 [#1334](https://github.com/DGP-Studio/Snap.Hutao/issues/1334)
  - 启动游戏中保存的游戏账号允许被拖动排序以允许用户获得更自然的操作体验
  - 优化了祈愿统计页面中功能的标题文本（将`统计`重命名为`全球祈愿统计`）[#1344](https://github.com/DGP-Studio/Snap.Hutao/issues/1344)
  - 优化了启动游戏中资源下载页面的文本（将`客户端`重命名为`完整包`） [#1279](https://github.com/DGP-Studio/Snap.Hutao/issues/1279)
  - 优化了引导界面下载图片资源的错误提示 [#1333](https://github.com/DGP-Studio/Snap.Hutao/issues/1333)
  - 更新了原神 4.4 版本深渊的波次文本提示
  - 新增了实时便笺通知设置权限不足的错误提示文本
  - 限制了下载更新时的线程数
  - 启动游戏快捷分辨率添加了两个新的分辨率
  - 允许使用命名管道进行应用激活 <Badge text="开发者功能" type="tip" />
  - 内置了 Windows App SDK
  - 优化了 Win32/COM API 调用
  - 重做了大部分 UI 以适应含有图片背景的客户端
- 本地化 🌏
  - 客户端新增葡萄牙语翻译，感谢 [@t0piy](https://github.com/t0piy) 提供的翻译

## 1.9.5

- 新增 ➕
  - 启动游戏页面新增标识显示器功能 [#1261](https://github.com/DGP-Studio/Snap.Hutao/issues/1261)
  - 全新的反馈中心已上线 [#1039](https://github.com/DGP-Studio/Snap.Hutao/issues/1039)
- 修复 🔨
  - 修复了游戏路径在 `Program Files` 路径下时会导致游戏启动器弹出切换服务器失败的错误 [#1262](https://github.com/DGP-Studio/Snap.Hutao/issues/1262)
  - 修复了静态资源下载页面下载的静态资源包无法正常全部完成的问题 [#1242](https://github.com/DGP-Studio/Snap.Hutao/issues/1242)
- 优化 ✨
  - 支持在程序运行时更改代理设置
  - 主页启动游戏卡片增加启动状态提示
  - 设置页面删除转换游戏客户端缓存后重新计算文件夹大小
  - 优化了是否需要进行游戏客户端转换的逻辑
  - 完善了英语翻译

## 1.9.4 <Badge text="hotfix" type="warning" />

- 修复 🔨
  - 修复了 Bilibili 服务器用户进入主界面会崩溃的问题

## 1.9.3

- 修复 🔨
  - 修复了新安装用户初次进入主界面会崩溃的问题

## 1.9.2

- 新增 ➕
  - 游戏启动器中新增开启 Windows 原生 HDR 选项
  - 游戏启动器中新增切换功能对国际服账号的支持
  - 设置页中新增删除转服功能缓存的选项
  - 设置页中新增以管理员模式重启程序的选项
  - 新增 WebView 分享图片到剪贴板的功能
- 修复 🔨
  - 修复了特定的米游社页面在 Webview 中无法被正常操作的问题
  - 在应用标题栏中增加显眼的管理员模式标识以展示 Snap Hutao 当前是否以管理员模式运行
  - 修复了转换服务器造成游戏路径异常的问题
  - 更正了深境螺旋页面的文档链接
- 优化 ✨
  - 实时便笺数据转发 Webhook 中增加了账号识别字段
  - 设置中所有的危险选项现在都有二次确认
  - 从使用 Powershell 设置游戏账号更改为直接设置注册表以避免`未开启长路径功能`错误
  - 优化了自动连点快捷键设置的 UI
  - 转换服务器优化了对 Program Files 等特殊路径的检查
  - 优化了 WebView 在部分页面下的滚动表现
  - 优化了设置 Discord Activity 的性能

## 1.9.1 <Badge text="hotfix" type="warning" />

- 修复 🔨
  - 修复了在用户系统文字缩放比例不为100%时，进入游戏启动器页面时会导致程序崩溃的问题
  - 修复了一个由实时便笺功能导致程序在启动时崩溃的问题
  - 修复了实时便笺有概率与用户信息同时加载导致死锁的问题
- 优化 ✨
  - 在游戏启动器添加/选择游戏路径页面增强了用户提示

## 1.9.0

::: important 重大改变
Snap Hutao 在近期获得了 SignPath 基金会的赞助的代码签名证书。自1.9.0版本起，我们将使用全新的证书为 Snap Hutao 安装包签名。

拥有新签名的程序将与旧版本不兼容，用户在从1.8.4及更旧版本更新至1.9.0及更新版本时，需要首先卸载旧版本再全新安装新版本客户端。由于胡桃数据目录的设计，用户不会丢失任何重要数据。

你可以阅读 [1.9.0 版本重大改变详解](../blog/version-1-9-0-breaking-changes.md) 一文来更深入地了解这次版本更新中签名变化对 Snap Hutao 项目的改变。
:::

- 新增 ➕
  - 游戏启动器现在支持了多个游戏路径 [#525](https://github.com/DGP-Studio/Snap.Hutao/issues/526)
  - 在用户面板中增加了米游社的扫码登录方法 [#870](https://github.com/DGP-Studio/Snap.Hutao/issues/870)
  - 客户端新增了自动检测网络状态，并将结果显示在设置页面中 [#1116](https://github.com/DGP-Studio/Snap.Hutao/pull/1161)
  - 在游戏启动器中新增了以触屏模式启动原神的选项 [#1173](https://github.com/DGP-Studio/Snap.Hutao/issues/1173)
  - 在设置中增加了修改游戏公告源的选项，现在用户可以选择国际服公告并根据客户端语言显示对应语言的公告 [#1112](https://github.com/DGP-Studio/Snap.Hutao/issues/1112)
    - 仅当 Crowdin 翻译库中有对应语言的正则表达式时才可以正确显示公告（目前已确认支持简体中文、繁体中文和英语）
  - 在设置中新增了启用控制台的选项，用户现在可以通过启用该选项在排查问题时获得更多的错误提示
  - 添加了全新的软件更新处理逻辑
- 修复 🔨
  - 修复了米游社接口获取角色信息产生`5003`错误的问题 [#1060](https://github.com/DGP-Studio/Snap.Hutao/issues/1060)
  - 修复了游戏启动器中帧率解锁功能在游戏4.3版本下失效的问题 [#1190](https://github.com/DGP-Studio/Snap.Hutao/issues/1190)
  - 修复了特定情况下米游社公告倒计时数据错误的问题
  - 修复了错误的 PowerShell 语句
- 优化 ✨
  - 优化了养成计算中的错误提示语句，使得错误提示更加明确 [#1163](https://github.com/DGP-Studio/Snap.Hutao/issues/1163)
  - 优化了养成计算的界面，现在将会显示每项具体目标 [#1016](https://github.com/DGP-Studio/Snap.Hutao/issues/1016)
  - 优化了主界面中胡桃账号信息的显示，不再显示用户邮箱 [#1160](https://github.com/DGP-Studio/Snap.Hutao/issues/1160)
  - 更新了胡桃 API 的错误提示
  - 优化了设置页界面，用户现在可以在设置中查看 Snap Hutao 产生的数据和缓存目录大小
  - 移除了微软商店相关按钮
- 本地化 🌏
  - 客户端增加了印尼语选项，感谢 [@NatsumeAoii](https://github.com/NatsumeAoii)提供的翻译 [#1188](https://github.com/DGP-Studio/Snap.Hutao/issues/1188)
  - 客户端增加了俄语翻译，感谢 [@QweRezOn](https://github.com/QweRezOn) 提供的翻译
  - 完善了客户端本地化字串符覆盖 [#1198](https://github.com/DGP-Studio/Snap.Hutao/issues/1198)
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
  - HoYoLAB 不支持 Facebook 登录的问题
  - HoYoLAB 签到问题
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
  - HoYoLAB 帐号的登录问题
- 优化
  - 重新设计了静态文件获取的流程

## 1.6.0

- 新增
  - 胡桃帐号的注册和登录的基本功能
  - HoYoLAB 帐号的登录并增加其在以下功能的支持
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
