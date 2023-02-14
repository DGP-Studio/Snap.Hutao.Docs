---
headerDepth: 2
category: [FAQ]
---
# 常见的程序异常
该文档包含由**用户端错误**造成的问题

## RuntimeEnvironmentException
- 异常：`RuntimeEnvironmentException`
  - 提示：`未开启长路径功能，无法设置注册表键值`
- 问题来源：没有解除 Windows 目录长度限制
- 解决方案：下载 [EnableLongPaths.zip](https://d.hut.ao/d/tools/EnableLongPaths.zip) 后解压，以管理员身份运行解压后的 `.reg` 文件

## Return Code: -10001
- 该异常实际上来源于米游社的返回信息，包括：
  - `Return Code: -10001`
  - `Return Code: -100`
- 问题来源：Cookie 过期或网络异常
- 解决方案：
  - 在帐号面板中，点击`刷新 Cookie`

## HttpRequestException
> 相关 Issue: [https://github.com/DGP-Studio/Snap.Hutao/issues/100](https://github.com/DGP-Studio/Snap.Hutao/issues/100)

当胡桃工具箱无法从远程服务器获取到必要资源时（通常是配置文件和图片缓存），会在用户界面抛出如下图所示的 `HttpRequestException` 错误。

![HttpRequestException](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg)

当你遇到该情况，且已经确定本地网络没有互联网连接问题时，请检查是否启用了系统代理程序。如果是，请关闭。胡桃工具箱的远程服务器在全世界范围内都有类似的体验效果，
你无需为了胡桃工具箱的网络连接而使用代理网络。

如果系统代理是你的网络必须选项，请关闭系统代理而使用 TUN 模式代理；或者也可以通过 [Windows 8 AppContainer Loopback Utility](https://www.telerik.com/fiddler/add-ons)
解除 [Windows APP Container Loopback 的限制](https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback) 。