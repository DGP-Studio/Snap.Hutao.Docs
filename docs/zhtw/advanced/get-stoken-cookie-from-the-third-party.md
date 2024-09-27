---
category: [FAQ, 第三方工具]
icon: iconfont icon-read
order: 7
comment: false
description: 一些第三方工具可以帮助你获取到包含 Stoken 字段值的米游社 cookie 并将其用于胡桃工具箱。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# 使用第三方工具获取有 Stoken 的 cookie

::: warning

- 以下步骤中涉及的软件、开源项目等资源均来源于互联网，与 DGP-Studio 无关
- 本说明文档仅提供有关的解决思路，仅供学习使用，具体操作与操作后果与本项目无关

:::

## Android

Android 用户可以使用开源项目 GetToken 来获取包含 Stoken 字段的 cookie

::: tip GetToken 开源项目

- GitHub：[HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)
  :::

- GetToken 项目的发布会包含两个 apk 文件，两者最终效果相同。根据你的设备情况选择适合你的版本即可。
  - `app-release.apk` 是一个 LSPosed 插件，其允许用户在官方米游社中使用 GetToken 功能
    - 需要 Root 权限
  - `miyoushe-361-lspatched.apk` 是一个已包含 GetToken 功能的修改版米游社程序
    - 注意，你需要先卸载官方版米游社以安装该版本的米游社
    - 本方法无须 Root
- 启用插件或安装修改版米游社后打开米游社，在底栏点击“我的”，然后登录
- 在右上角点击形如 🔑 形状的按钮
- 勾选 `Stoken` 选项
- 点击“复制登录信息”以获取 `Cookie`
- 将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑
- 在“胡桃”中点击“账号登录-手动输入”
- 输入之前获取的 `Cookie` 即可完成登录

## iOS

iOS 用户可以在 App Store 下载抓包软件 `Stream` 来获取包含 Stoken 字段的 Cookie

- 从 App Store 下载 [Stream](https://apps.apple.com/cn/app/stream/id1312141691)
- 对域名 `api-takumi.mihoyo.com` 进行抓包分析
- 找到并复制带有 `Stoken` 的数据
  - 形如 `stuid=****;stoken=v2****;mid=****;`
- 将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑
- 在“胡桃”中账号登录的位置，点击“手动输入”
- 输入之前获取的 `Cookie` 即可完成登录
