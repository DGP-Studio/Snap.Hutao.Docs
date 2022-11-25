---
pageClass: link-box
externalLinkIcon: false
---
# 快速开始
   
::: tip
- 开始前，请仔细阅读[用户使用协议和法律声明](http://law.cn-emsc.com/)
- 若已下载或使用"胡桃工具箱",即表示你已阅读并完全同意前述用户协议
:::   
   
## 最低系统要求
|要求|规格|
|-|-|
|**最低可运行系统版本**|Windows 10 1803 (10.0.17763.0) [^first]|
|**推荐系统版本**|Windows 11 21H2 - 10.0.22000.0|
|可选组件|WebView2 Runtime|


## 下载胡桃工具箱

胡桃工具箱目前处于测试阶段，不断地将 Snap Genshin 的功能迁移至胡桃工具箱中。你可以在 GitHub 项目发布页面和我们的网盘中下载到最新的测试版程序
- [从 GitHub 下载 ](https://github.com/DGP-Studio/Snap.Hutao/releases/)
- [从网盘下载](https://go.hut.ao/down)
  - 您下载的`包含安装程序的压缩文件`名如`Snap.Hutao_*_x64.zip`字样

## 安装胡桃工具箱

### 快速安装方式
- 解压已下载的`包含安装程序的压缩文件`
- 进入解压后的文件夹，运行`点我安装.exe`文件
- 安装完毕，`胡桃`将出现在您的`开始菜单`中
  - 此时即可随意删除之前下载和解压的安装文件。

- 若您使用此种安装方式无法成功安装`胡桃`，请您尝试下述的`通用安装方式`
  - 上述步骤完成后，若未安装成功，建议检查杀毒软件的启用情况(包含Windows Defender)
  - 目前有案例表明，部分杀毒软件会在上述过程中，静默阻止修改策略或安装应用

### 通用安装方式
- 在系统设置中打开`开发者设置`界面，勾选 `开发人员模式` 和 `允许 PowerShell 脚本`
  - 可参考
    - [Windows 10打开开发者模式的方法](https://jingyan.baidu.com/article/49711c6175e009bb441b7cf3.html)
    - [win11打开开发者模式的方法](https://jingyan.baidu.com/article/0bc808fc2923805ad485b9a4.html)
- 解压已下载的压缩包
  - 找到`Install.ps1`文件
  - 右键选择`使用PowerShell运行`
  - 按照提示允许PowerShell执行操作即可
- 安装完毕，`胡桃`将出现在您的`开始菜单`中
  - 此时即可随意删除之前下载和解压的安装文件。

## 升级胡桃工具箱
- 解压你下载的最新版本压缩包
- 重复`安装胡桃工具箱`的步骤
   - 若您安装失败或出现异常情况，可参考如下步骤
      - 先卸载已经安装的`胡桃工具箱`
      - 可以按[此说明](https://hut.ao/FAQ/most-frequent-questions.html#%E5%BC%B9%E5%87%BA%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E6%96%B0%E5%BA%94%E7%94%A8%E7%9A%84%E5%AF%B9%E8%AF%9D%E6%A1%86)清理任务计划程序
      - 可参考[此条issue](https://github.com/DGP-Studio/Snap.Hutao/issues/201)内容与相关排除故障的方法

[^first]: LTSC 和 LTSB 版本系统不在支持列表中，但它们可以在修改系统模块后使用胡桃工具箱。请联系你的 IT 管理员或微软官方以获取支持。
