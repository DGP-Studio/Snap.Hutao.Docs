---
category: [开发日志]
order: 1
comment: false
---

# 1.9.0 版本重大改变详解

本文内容适用于Snap Hutao **1.4.11~1.8.4 版本**升级至 1.9.0 及更高版本

## 前言

Snap Hutao 是一个使用 MSIX 格式的 Windows 沙盒应用，它带来了安装的便利性和 AppX 应用的安全性。对安装包强制性的代码签名是保证安全性的重要因素之一：在安装包被篡改时，Windows App Installer 会因为签名被破坏而弹出错误，进而禁止用户安装，这在主流移动端操作系统中已经被普及。在 Windows 平台下，由于严格的身份审查制度，代码签名证书价格一直保持在很高的价格上。

Snap Hutao 在1.4.11版本前，使用了自签名证书的方法。在这种模式下，用户需要手动 安装 DGP-Studio 的证书，才能让操作系统允许 DGP-Studio 证书签名的应用安装于计算机上。自1.4.11版本起，Snap Hutao 上架微软商店，微软为胡桃的开发者账号提供了一个 GUID `35C8E923-85DF-49A7-9172-B39DC6312C52`并以此为用户名为胡桃工具箱提供了免费的签名。如果你习惯使用 msix 安装包更新胡桃工具箱，那么你应总是能在发布者一栏中看到这个 GUID。

在微软商店发布使得胡桃工具箱的用户不再需要手动安装签名证书，还为胡桃工具箱安装包的分发提供了支持，为开发团队降低了大量的成本。但是，繁琐冗长的审核流程经常打乱胡桃工具箱的开发计划，因此开发团队在过去的半年中一直在寻找解决方案。SignPath 是一家位于奥地利维也纳的提供代码签名集成软件的公司。在2023年12月初，Snap Hutao 的开发团队成功地获取到了 SignPath 基金会的支持，被允许免费使用其提供的代码签名证书为胡桃工具箱签名。这极大地帮助了 Snap Hutao 项目：不仅允许胡桃工具箱脱离微软商店的束缚，还避免了每年高昂的证书费用。

**由于迁移至新证书会带来包名冲突问题，Snap Hutao 提供以下详细解释帮助所有用户更新至 1.9.0 及未来的版本。**

## 升级至 1.9.0 版本

### 版本发布

Snap Hutao 1.9.0 版本将会于2023年圣诞节前的周末发布，我们会通过 GitHub，极狐GitLab，官方网站和社区发布安装包的下载地址。

### 卸载旧版本

由于包名和签名冲突，直接安装该安装包会根据你的系统版本出现问题。

|  系统版本  |                           预计的问题                            |
| :--------: | :-------------------------------------------------------------: |
| Windows 10 |                    无法安装；签名和包名冲突                     |
| Windows 11 | 安装成功；<br/>与旧版本的 Snap Hutao 同名共存并造成程序运行错误 |

由于上述的问题，你需要首先卸载旧版本 Snap Hutao，随后再安装 1.9.0 版本安装包

> **卸载 Snap Hutao 的方法**：在开始菜单找到 Snap Hutao，右键点击卸载即可；在 Windows 应用设置中找到后选择卸载亦是快捷的方法。

**你的重要数据（包括已登录的米游社账号、祈愿记录、成就数据、深境螺旋挑战记录、我的角色缓存数据、养成计划）不会丢失，它们仍然储存于你的本地计算机胡桃数据目录中。** 但以下数据将被重置：

1. Snap Hutao 运行次数计数
2. 数据文件夹路径 **（如果你之前修改了数据目录，请记住你的数据目录路径）**
3. 胡桃账号登录状态
4. 已关闭的胡桃公告标记
5. 养成计划预设等级信息
6. 主页仪表盘卡片的状态
7. 自动连点功能的状态

### 安装新版本

![1.8.5版本安装文件](/images/202312/1-8-5-installer.png)

运行你已经下载好的 1.9.0 版本安装包，在安装界面你应能看到发布者为 `SignPath Foundation`，点击安装你就可以安装全新版本的 Snap Hutao 了！

**如果你在旧版本修改了数据目录位置，需要在启动后重新在设置中选择数据目录路径以恢复数据。若从未设置过数据目录，你的数据将会直接加载，不需要进行额外设置。**

## 未来的计划

> 微软商店、未来的发布、软件的安全性...

微软商店中上架的应用发布者名称必须为微软赋予的 GUID，而不能是 `SignPath Foundation` 这样的“自定义”的名称。我们预计未来不会在微软商店中继续发布更新的版本，除非我们有更好的方法处理不同签名包之间的共存问题。虽然 Snap Hutao 不再经过微软的认证，但是在 SignPath 的限制下，Snap Hutao 将只能从 GitHub 代码库直接编译和构建发布包，这意味着用户的安装包中的代码是 100% 来源于我们的 GitHub 代码库，任何人都有权限审阅代码并参与开发。

自1.9.0版本起的客户端，我们将内置软件更新模块以适应新的发布方式，我们会尽可能减少用户更新时所需要的操作。由于该功能是全新的功能，我们仍在部署过程中，请继续关注我们的程序内公告和社区以获取信息！