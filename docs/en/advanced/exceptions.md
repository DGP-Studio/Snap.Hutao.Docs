---
headerDepth: 2
icon: debug
category: [FAQ]
order: 2
---

# Common Program Exceptions

该文档包含由**用户端错误**造成的问题
This document covers solutions of **foreseeable client error**

## RuntimeEnvironmentException

- Exception: `RuntimeEnvironmentException`
  - Hint: `Unable to set registry key without enabling long path`
- Issue source: Windows long path limit is set to be limited at 256 characters by default
- Solution: Download [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip), unzip it and run `.reg` file
  as administrator

## Return Code: -10001

- This error comes directly from MiHoYo BBS, hints include
  - `Return Code: -10001`
  - `Return Code: -100`
- Issue source
  1. Cookie expired
  2. Network error
  3. System time is not accurate
- Solution
  1. 在帐号面板中，点击`刷新 Cookie`
  2. 删除帐号后重新添加米游社帐号
  3. 在系统设置中启用自动同步时间并立刻同步时间

## HttpRequestException 元数据校验文件下载失败

### 403 (Forbidden)

解决方案：更新胡桃工具箱至[最新版本](https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52)

### 502 (Bad Gateway)

> 相关 Issue: [https://github.com/DGP-Studio/Snap.Hutao/issues/100](https://github.com/DGP-Studio/Snap.Hutao/issues/100)

当胡桃工具箱无法从远程服务器获取到必要资源时（通常是配置文件和图片缓存），会在用户界面抛出如下图所示的 `HttpRequestException` 错误。

![HttpRequestException](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg)

当你遇到该情况，且已经确定本地网络没有互联网连接问题时，请检查是否启用了系统代理程序。如果是，请关闭。胡桃工具箱的远程服务器在全世界范围内都有类似的体验效果， 你无需为了胡桃工具箱的网络连接而使用代理网络。

如果系统代理是你的网络必须选项，请关闭系统代理而使用 TUN 模式代理；或者也可以通过 [Windows 8 AppContainer Loopback Utility](https://www.telerik.com/fiddler/add-ons) 解除 [Windows APP Container Loopback 的限制](https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback) 。
