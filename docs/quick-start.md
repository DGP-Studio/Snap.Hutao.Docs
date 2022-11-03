---
pageClass: link-box
externalLinkIcon: false
---
# 快速开始
## 最低系统要求
|要求|规格|
|-|-|
|**最低可运行系统版本**|Windows 10 1803 (10.0.17763.0)|
|**推荐系统版本**|Windows 11 21H2 - 10.0.22000.0|
|可选组件|WebView2 Runtime|


## 下载胡桃工具箱

胡桃工具箱目前处于测试阶段，不断地将 Snap Genshin 的功能迁移至胡桃工具箱中。你可以在 GitHub 项目发布页面和我们的网盘中下载到最新的测试版程序
- [从 GitHub 下载 ](https://github.com/DGP-Studio/Snap.Hutao/releases/)
- [从网盘下载 ](https://go.hut.ao/down)
  - 您下载的包含安装程序的压缩文件名如`Snap.Hutao_*_x64.zip`字样

## 安装胡桃工具箱

### 快速安装方式
- [解压](https://jingyan.baidu.com/article/09ea3ede57eb3ac0aede390d.html)您从前述的[下载源](https://go.hut.ao/down)下载的压缩包
- 右键点击解压后的文件夹中的`Snap.Hutao.Installer.exe`文件，点击`使用管理员模式运行`
- 安装完毕，`胡桃`将出现在您的`开始菜单`中
  - 此时即可随意删除之前下载和解压的安装文件。
- 若您使用此种安装方式无法成功安装`胡桃`，请您尝试下述的`通用安装方式`
  - 若上述步骤完成后，并未安装成功，建议检查[`杀毒软件`](https://baike.baidu.com/item/%E6%9D%80%E6%AF%92%E8%BD%AF%E4%BB%B6/622418)的启用情况(包含Windows Defender)
  - 目前有案例表明，部分杀毒软件会在上述过程中，静默阻止修改策略或安装应用

### 通用安装方式
- 在系统设置中打开`开发者设置`界面，勾选 `开发人员模式` 和 `允许 PowerShell 脚本`
  - 若您无法理解前述内容，请见 [win10打开开发者模式的方法](https://jingyan.baidu.com/article/49711c6175e009bb441b7cf3.html)、[win11打开开发者模式的方法](https://jingyan.baidu.com/article/0bc808fc2923805ad485b9a4.html)
- [解压](https://jingyan.baidu.com/article/09ea3ede57eb3ac0aede390d.html)您从前述的[下载源](https://go.hut.ao/down)下载的压缩包
  - 找到`Install.ps1`文件
  - 右键选择`使用PowerShell运行`
  - 按照提示允许PowerShell执行操作即可
- 安装完毕，`胡桃`将出现在您的`开始菜单`中
  
## 升级胡桃工具箱
- 解压你下载的最新版本压缩包
- 重复`安装胡桃工具箱`的步骤
