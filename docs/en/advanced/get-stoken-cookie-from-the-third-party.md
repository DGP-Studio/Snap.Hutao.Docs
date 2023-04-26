---
category:
  - FAQ
  - 第三方工具
icon: read
order: 6
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

- GetToken 项目的发布会包含两个 apk 文件，两者最终效果相同。根据你的设备情况选择适合你的版本即可
  - `app-release.apk` 为一个 LSPosed 插件允许用户在官方米游社中使用 GetToken 功能
  - 名称以`lspatched`结尾的 apk 文件是一个已包含 GetToken 功能的修改版米游社程序
    - 你需要卸载官方版米游社以安装该版本的米游社
- 启用插件或安装修改版米游社后打开米游社，在底栏点击"我的"，然后登录您的通行证
- 在右上角点击形如 🔑 形状的按钮
- 点击勾选 `Stoken` 选项
- 点击`复制登录信息`
- 将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑
- 在`胡桃工具箱`中的账号登录位置，点击`手动输入`
- 将之前获取到的 cookie 输入，此时即可完成登录

## iOS

iOS 用户可以在 App Store 下载抓包软件 Stream 来获取包含 Stoken 字段的 cookie

- 从 App Store 下载 [Stream](https://apps.apple.com/cn/app/stream/id1312141691)
- 对域名 `api-takumi.mihoyo.com` 进行抓包分析
- 找到并复制带有 `Stoken` 的数据
  - 形如`stuid=****;stoken=v2****;mid=****;`
- 将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑
- 在`胡桃工具箱`中的账号登录位置，点击`手动输入`
- 将之前获取到的 cookie 输入，此时即可完成登录
