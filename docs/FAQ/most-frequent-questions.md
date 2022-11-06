---
headerDepth: 2
---

# 快速解答

## Windows 10 下程序乱码
当用户在 Windows 10 下使用胡桃且发现有乱码情况时，可以下载 `Segoe Fluent Icons`字体，并在安装时选择`为系统所有用户安装`，即可解决问题
- 你可以从 [微软官方](https://aka.ms/SegoeFluentIcons)下载到该字体文件

## Windows 10 下无法拖动窗口
在胡桃工具箱 1.1.7 或更高版本中，当你使用 Windows 10 系统时，窗口无法拖动或双击最大化。此为已知问题。
- 此问题参考https://github.com/microsoft/WindowsAppSDK/issues/2976
- 此问题已在Snap.Hutao_1.1.21.0版本得到初步解决
  - Windows 10 系统需要至少更新至`19041版本`

## 当用户具有多个祈愿记录存档时，可能出现无法点选切换至其他UID对应存档的情况

- 该问题是微软的UI判定问题，详情请见：
  - https://github.com/microsoft/microsoft-ui-xaml/issues/7756

- 发生此种情况时，可使用键盘选定其他存档（待验证）

## 其他问题的通用排查方式
当您在使用时遇到本文档全部未提及的问题时，可参考以下内容自行排查：
若下列全部内容未能解决您的问题，请移步[该页面](https://hut.ao/statements/bug-report.html)

- 按一般逻辑，许多功能均需要管理员权限，故建议用管理员模式打开本程序
- 关闭电脑中的杀毒软件（部分杀软会在旁加载、获取Cookie、操作注册表等过程中，视其为威胁，静默干预）（可能包含Windows Defender）
- [**可选**]导出祈愿记录保存，在电脑中打开`%userprofile%/documents/hutao`目录，将此目录清空，重新[安装](https://hut.ao/quick-start.html#%E4%B8%8B%E8%BD%BD%E8%83%A1%E6%A1%83%E5%B7%A5%E5%85%B7%E7%AE%B1)后，检查功能是否恢复
