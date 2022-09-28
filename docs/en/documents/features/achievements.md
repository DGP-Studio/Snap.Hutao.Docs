---
headerDepth: 0
---

# 成就管理 <Badge type="tip" text="UIAF" vertical="top" />

![](https://image.snapgenshin.com/imgs/2022/05/02/21047ff544f318fa.png)

Snap Genshin 提供成就管理功能，用户可以通过它浏览并管理所有的成就状态

## 成就阶段拆分

::: tip 友情提示
成就阶段拆分数据来源于玩家的数据贡献，我们需要有玩家不断地维护这一类数据。如果你是一个热衷于收集原神成就的玩家并且愿意贡献新的数据，可以在 [Masterain98/Genshin-Impact-Decomposed-Achievements](https://github.com/Masterain98/Genshin-Impact-Decomposed-Achievements) 中创建新的 Issue 或 PR 以分享你的数据。
:::

Snap Genshin 对日常委托中包含的隐藏成就进行了阶段性的划分，用户可以通过勾选已完成的阶段性目标来记录相关成就的完成进度

![](https://image.snapgenshin.com/imgs/2022/05/02/b6a6cf470d79668e.png)

以日常委托`岩游记`中隐藏的`帝君故事`成就为例。为获取该成就，你需要在璃月每日委托任务岩游记中分别提供不同物品以获取到不同的岩王帝君的故事。玩家在获取到`["开拓之神","历史之神","炉灶之神","财神"]`全部四个故事后方可解锁该成就。使用 Snap Genshin 的成就管理功能，你将可以记录已完成的剧情故事。

## 成就导入

Snap Genshin 使用[统一可交换成就标准](https://www.snapgenshin.com/development/UIAF.html)数据标准来储存用户的成就数据。该标准允许用户从其它成就管理程序或成就导出工具中通过 [Url 协议](https://www.snapgenshin.com/development/ThirdPartyAccess.html#url-%E5%8D%8F%E8%AE%AE)和剪贴板将数据导入到 Snap Genshin 中。