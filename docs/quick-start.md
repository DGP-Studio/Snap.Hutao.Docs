---
pageClass: link-box
externalLinkIcon: false
category: [功能,教程]
---
# 快速开始
   
::: tip
若您已下载或使用**胡桃工具箱**，即表示你已阅读并完全同意[用户使用协议与法律声明](/statements/tos.md)
:::
@include(star-request.md)

## 视频指南
遵循本页文档进行操作可以高效地实现开箱即用的胡桃工具箱。但如果你对下方文档中包含的操作不熟悉，也可以回到这里来跟着视频指南操作。
<BiliBili bvid="BV1Rs4y1x7ws" />
   
## 最低系统要求
|要求|规格|
|-|-|
|**最低可运行系统版本**|Windows 10.0.18362.0 [^first]|
|**推荐系统版本**|Windows 10.0.22621.0|
|可选组件|WebView2 Runtime|


## 下载胡桃工具箱

当前最新版本为：![stable-version](https://img.shields.io/github/v/release/DGP-Studio/Snap.Hutao?label=Snap.Hutao.Stable&style=flat-square)

胡桃工具箱目前处于公开测试阶段。你可以
- [从 GitHub 下载 ](https://github.com/DGP-Studio/Snap.Hutao/releases/)
- [从网盘下载](https://d.hut.ao/)

您下载的包含安装程序的压缩文件名称将与`Snap.Hutao_*_x64.zip`相似

## 安装胡桃工具箱  
  
### 通用安装方式
- 在系统设置中打开`开发者设置`界面，勾选 `开发人员模式` 和 `允许 PowerShell 脚本` （自行百度）
- 解压已下载的压缩包，找到`Install.ps1`文件，右键选择`使用PowerShell运行`，按照提示允许PowerShell执行操作即可
- 安装完毕，`胡桃`将出现在您的`开始菜单`中

### 小白级安装方式
- 解压已下载的安装包
- 运行 `Snap.Hutao.Installer.exe`
  - 该程序将执行上述通用安装方式的命令
- 安装完毕，`胡桃`将出现在您的`开始菜单`中

## 升级胡桃工具箱  
   
- 解压你下载的最新版本压缩包
- 重复 `安装胡桃工具箱` 的步骤
- 若您安装失败或出现异常情况，可参考如下步骤
   - 先卸载已经安装的`胡桃工具箱`
   - 重复 `安装胡桃工具箱` 的步骤

## 卸载胡桃工具箱

- 清除有关的任务计划
   - 打开胡桃，选择 **设置** 页签
   - 找到 **删除所有计划任务** 一栏中，点击右侧的 **执行** 按钮
- 卸载软件
   - 打开`开始菜单`
   - 找到或搜索到`胡桃`
   - 右键点击`胡桃`，并选择`卸载`
- 清除数据文件夹（如需完全卸载）
   - 打开并删除该文件夹 `%userprofile%/Documents/Hutao`

[^first]: LTSC 和 LTSB 版本系统不在支持列表中，但它们可以在修改系统模块后使用胡桃工具箱。请联系你的 IT 管理员以获取支持。