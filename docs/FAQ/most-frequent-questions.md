---
headerDepth: 2
---

# 快速解答
          
## 米游社账号登录状态频繁异常  
  
- 自2022年10月起，**米哈游/米游社**正逐步增加其触发**风险控制**的存在场景，并正在逐步改变部分接口

- 上述情况将直接影响到`Cookie以及Stoken的有效性校验`，**可能引起**`包括但不限于`如下问题：
  - 米游社账号的登录状态经常失效
  - 使用时弹出[账号风险提示](https://hut.ao/FAQ/mihoyo-risk-tip.html)
  - Stoken的保存状态失效，以及祈愿记录使用Stoken刷新失效
- 若您出现上述问题，请您知悉该情况并非`胡桃工具箱`的开发问题  
  
- **众多社区开发者**正努力解决目前的问题，我们将尽最大努力，提高用户的使用体验  
          
## 账号频繁掉登录或切换无效  
  
- 请注意，此问题中所指的功能，仅限`启动游戏`选项中所包含的**切换账号**功能，并非`米游社多账号登录`     
- 在`启动游戏`选项中，保存的游戏**账号**是对应账号在游戏内的一个**登陆状态**，该操作需要对`注册表`进行操作
  - 若您的网络环境发生了改变，此**登陆状态**通常会失效
  - 若您没有使用`管理员模式`启动`胡桃工具箱`，那么胡桃极有可能没有前述操作的权限     
    - 上述情况同样可导致：在`启动游戏`功能中切换其他游戏**账号**的操作没有实际效果  
          
## 管理员模式选项无法启动胡桃     
  
   暂未发现此种情况的产生原因，您可以尝试：
- 请勿直接在"WindowsApps"文件夹中启动`Snap.Hutao.exe`或启动其发送到其他位置的`快捷方式`
- 重新启动电脑
- 查看`任务管理器`中是否有`胡桃`进程残留，将其关闭
- [**可选**]导出祈愿记录保存，在电脑中打开`%userprofile%/documents/hutao`目录，将此目录清空，重新[安装](https://hut.ao/quick-start.html)后，检查功能是否恢复
- [**可选**][卸载胡桃](https://hut.ao/quick-start.html#%E5%8D%B8%E8%BD%BD%E8%83%A1%E6%A1%83%E5%B7%A5%E5%85%B7%E7%AE%B1)，并**按卸载有关文档**删除相关任务计划后，重新安装[最新版本](https://go.hut.ao/down)  
            
## 能否默认以管理员模式启动胡桃  
  
- 首先请参考：https://github.com/DGP-Studio/Snap.Hutao/issues/184
- 若无法访问Github，此处进行简要概括
  - 由于msix包的限制，胡桃作为Windows App，不能默认管理员启动
  - 但可以通过命令行做到，可执行如下Poweshell脚本，令胡桃以管理员模式启动：
    - Start-Process shell:AppsFolder\7f0db578-026f-4e0b-a75b-d5d06bb0a74d_7jfyf5536hdrr!App -verb runas
- 综上所述，请自行参考[上述issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184)  
  
## 能否让胡桃工具箱开机自动启动    
  
- 请参考如下思路
  - 可以自行创建一个批处理文件，内容参考[此issue](https://github.com/DGP-Studio/Snap.Hutao/issues/184)中，令胡桃以管理员模式直接运行的命令。
  - 设置一个**计划任务程序**令上述批处理文件开机自启，或将上述批处理文件加入**启动项**中
- 或有其他令胡桃工具箱可开机自启的思路，可自行探索  
          
## Windows 10 下无法拖动窗口  
  
在胡桃工具箱 1.1.7 或更高版本中，当你使用 Windows 10 系统时，窗口无法拖动或双击最大化。此为已知问题。
- 关于此问题的出现原因，请参考：[WindowsAppSDK/issues/2976](https://github.com/microsoft/WindowsAppSDK/issues/2976)
- 此问题已在`胡桃 1.1.21.0 版本`得到初步解决
- Windows 10 系统需要至少更新至`19041`版本
::: tip
如果该问题影响到你的使用，可以尝试通过缩放窗口大小（尤其是水平方向/横向长度）来**暂时**解决该问题  
   
如果你有更多关于此问题的信息愿意提交，可以在[Snap.Hutao/issues/193](https://github.com/DGP-Studio/Snap.Hutao/issues/193)中继续回复
:::  
          
## 如何**强行**改变安装**胡桃**的位置  
  
- `胡桃`是安装在系统的**应用**文件夹中的，即默认为"WindowsApps"文件夹
  - 此位置不是在安装程序时能够被修改的   
     
- 该位置只能通过改变Windows应用安装位置来改变
  - 具体方法请参考：
    - [Windows10 系统如何更改应用安装位置](https://jingyan.baidu.com/article/676629976a26a715d51b84ec.html)
    - [Windows11 系统如何更改应用安装位置](https://jingyan.baidu.com/article/915fc414b8ddb010384b2006.html)
- 修改完毕后，重启计算机，即可令本次改动生效  
   
## 软件内的图像资源无法加载   
  
- 部分用户由于网络问题(参考[此情况](https://hut.ao/FAQ/HttpRequestException.html))导致"胡桃工具箱"内的**图像等资源**始终无法加载，或**伴随错误提示**
  - 此种情况可通过**检查并重置网络设置、反复在软件内切换至其他功能页面、反复重新启动"胡桃工具箱"、或重新启动操作系统**来尝试重新下载元数据  
     
- 考虑到部分用户的网络环境特殊(特殊地区、校园网等)，现提供了完全下载完成的元数据文件以供直接放入缓存文件夹：
  - 打开"胡桃工具箱"的设置
  - 找到`打开 缓存 文件夹`的选项，点击`打开`按钮
  - 在[此链接](https://cloud.06dn.com/api/v3/file/source/186145/ImageCache.zip?sign=2EsW8KKLE59ku223zGbP4q-e0YujENsM2csSZrKTS-s%3D%3A0)下载元数据文件，将解压后的`ImageCache`文件夹，直接覆盖上一步打开的`缓存文件夹`中的`ImageCache`文件夹
  - 将之前打开的"胡桃工具箱"、"缓存文件夹"等全部关闭，重新打开"胡桃工具箱"即可  
  
## 胡桃的内存占用量有问题   
           
- 由于内存回收机制，当用户达到一个较高的内存占用率后，内存才会被开始回收
  - 若您发现胡桃工具箱的内存占用量无论操作系统的总占用率是多少，始终维持在较高水平，则建议升级操作系统至最新的`22H2`版本  
             
## 退出后仍有胡桃相关进程残留  
             
- 问题案例：[Snap.Hutao/issues/286](https://github.com/DGP-Studio/Snap.Hutao/issues/286)
- 胡桃的进程`snap.hutao.exe`在退出胡桃工具箱后，每隔约十分钟会自动重新被唤起
- 此种情况是胡桃工具箱的`Bug`，请等待后续更新解决
  
## 无法切换至其他祈愿记录存档  
  
- 部分用户会在拥有多个祈愿记录存档时，出现无法点选切换至其他祈愿记录存档的情况
- 该问题是微软的UI判定问题，详情请见：
  - https://github.com/microsoft/microsoft-ui-xaml/issues/7756
- 发生此种情况时，可使用`键盘`操作，以选定其他UID对应的祈愿记录存档

## 在设置中点击修改游戏路径无效   
  
- 部分用户会在设置中点击`设置路径`按钮时**无反应**  
  
- 解决方式：
  - 关闭"胡桃工具箱"
  - **不使用**管理员模式启动"胡桃工具箱"
  - 若仍未解决问题，可[卸载](https://hut.ao/quick-start.html#%E5%8D%B8%E8%BD%BD%E8%83%A1%E6%A1%83%E5%B7%A5%E5%85%B7%E7%AE%B1)后重新[安装最新版本](https://cloud.06dn.com/s/Ke6JhO)再试
  - 若上述步骤均未解决问题，则此情况可能为[微软的UI判定问题](https://github.com/microsoft/microsoft-ui-xaml/issues/7756)  
         
## Win10系统下出现乱码现象  
  
- 当用户在 Windows 10 下使用胡桃且发现有乱码情况时：
  - 可以下载 `Segoe Fluent Icons`字体
  - 安装时选择`为系统所有用户安装`，即可解决问题
- 您可以从 [微软官方](https://aka.ms/SegoeFluentIcons)下载到该字体文件  
          
## 弹出需要使用新应用的对话框  
  
- 部分用户在**更新**或**卸载**胡桃后，频繁自动弹出`需要使用新应用以打开此Hutao链接`的对话框
- 请**使用管理员模式**[打开"终端"](https://www.baidu.com/s?wd=%E5%A6%82%E4%BD%95%E4%BB%A5%E7%AE%A1%E7%90%86%E5%91%98%E6%A8%A1%E5%BC%8F%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF)
- 输入如下代码并运行，以删除残留的计划任务
```
 schtasks /delete /tn SnapHutaoDailyNoteRefreshTask
```  
          
## 点击复制Cookie按钮时出现错误  
  
- 部分用户点击复制按钮时出现**如图所示**的错误
![image](https://user-images.githubusercontent.com/96916320/203735041-02ff9c3b-6ebc-4018-99ca-0393393e0646.png)
- 这是由于此时**有其他进程打开了剪贴板**，如果胡桃的权限等级**不高于**该应用，则会出现此种情况
- 若您无法确认是何应用正在调用剪贴板，可以关闭胡桃，用**管理员模式**启动  
          
## 胡桃什么时候可以上架微软商店  
  
- 胡桃的多个核心功能，包括但不限于[高级启动器](https://hut.ao/features/game-launcher.html#%E8%B4%A6%E5%8F%B7%E4%BF%9D%E5%AD%98)中的多个功能均**不满足**微软商店对于上架应用的规则
  - 例如："胡桃工具箱"在切换**游戏内**账号时，将对**未虚拟化的注册表**进行操作，以达到切换游戏账号的目的
- 若"胡桃工具箱"在完善后上架微软商店，则将对不满足上架规则的功能**进行删减**
- 综上所述，建议您保持使用**并不繁琐**的自行安装的方式，以获得**完整**的使用体验
          
## 以全部方法进行安装均出现错误  
  
- 当您使用了[快速安装方式](https://hut.ao/quick-start.html#%E5%BF%AB%E9%80%9F%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F)和[通用安装方式](https://hut.ao/quick-start.html#%E9%80%9A%E7%94%A8%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F)均出现异常错误时，可参考如下几种情况
  - 首先，您应该先按[通用安装方式](https://hut.ao/quick-start.html#%E9%80%9A%E7%94%A8%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F)中的步骤进行，并确保开启了开发者模式中的Powershell有关选项
  - 您可能需要先[卸载](https://hut.ao/quick-start.html#%E5%8D%B8%E8%BD%BD%E8%83%A1%E6%A1%83%E5%B7%A5%E5%85%B7%E7%AE%B1)当前已安装的`胡桃工具箱`
  - 与Microsoft.WindowsAppRuntime有关的错误：[参考此issue](https://github.com/DGP-Studio/Snap.Hutao/issues/201)  
          
## 胡桃为什么不能最小化到托盘  
  
- 胡桃作为[WinUI3框架](https://learn.microsoft.com/zh-cn/windows/apps/winui/winui3/)的Windows应用，截至目前的开发进程，无法做到这一点
- 若您有解决方案，请在[项目](https://github.com/DGP-Studio/Snap.Hutao/pulls)中发起`pull requests`  
    
## 其他问题的通用排查方式  
  
当您在使用时遇到本文档**全部未提及**的问题时，可参考以下内容自行排查：  
          
- 尝试使用`管理员模式`重新（或多次）打开胡桃工具箱(此过程可以配合重启系统进行)   
          
- 将已经安装的`胡桃工具箱`卸载，重新发起安装，注意[此问题](https://hut.ao/FAQ/most-frequent-questions.html#%E5%BC%B9%E5%87%BA%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E6%96%B0%E5%BA%94%E7%94%A8%E7%9A%84%E5%AF%B9%E8%AF%9D%E6%A1%86)，卸载前注意备份/导出原有的关键数据  
          
- [**可选**]按标准步骤安装失败的用户，可参考此[issue](https://github.com/DGP-Studio/Snap.Hutao/issues/201)  
          
- 用`管理员模式`打开`胡桃工具箱`后，存在用户出现`胡桃的相关进程`被打开，但只显示于`任务管理器`的情况，此时可检查任务管理器中有无`胡桃`进程残留，若有，将其关闭  
          
- 暂时关闭电脑中的杀毒软件（部分杀软会在旁加载、获取Cookie、操作注册表等过程中，视其为威胁，静默干预）（可能包含Windows Defender）    
          
- [**可选**]导出祈愿记录保存，在电脑中打开`%userprofile%/documents/hutao`目录，将此目录清空，重新[安装](https://hut.ao/quick-start.html)后，检查功能是否恢复       
          
      
::: tip
- [LTSC 和 LTSB 版本的操作系统](https://hut.ao/quick-start.html#footnote1)不在我们的支持范围内，请自行解决或[使用普通版本的系统](https://hut.ao/quick-start.html#%E6%9C%80%E4%BD%8E%E7%B3%BB%E7%BB%9F%E8%A6%81%E6%B1%82)   

- 若上述方法 均无法解决你的问题，请[创建工单](https://hut.ao/statements/bug-report.html)，开发者将尽力协助
:::
          
          



