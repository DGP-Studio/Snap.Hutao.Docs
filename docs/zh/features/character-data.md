---
headerDepth: 2
category: [功能, 教程]
tag: [数据统计, 角色橱窗]
order: 8
comment: false
description: 胡桃工具箱的“我的角色”功能可以读取原神账号下所拥有的角色的具体数据并提供分析，包括等级、命之座、天赋和圣遗物评分等数据。
---

# 我的角色

::: info 前置要求
该功能需要你在胡桃工具箱中登录米游社账号，登录方法参见[米游社多账号切换](mhy-account-switch.md#米游社多账号切换)
:::

“我的角色”功能可读取当前账号所拥有角色的具体数据，包括等级、命之座、武器、天赋、圣遗物等；并自动计算圣遗物评分和双爆评分

![属性统计示例图](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01hK2R3O1g6e0qblXd2_!!1797064093.png_.webp)

## 同步角色信息

推荐的使用步骤：

1. 从游戏内角色橱窗同步
2. 从米游社原神战绩同步
3. 从米游社养成计算同步

### 从游戏内角色橱窗同步（借助 Enka API）

::: info 同步特征

- Enka API 同步可获取游戏内角色橱窗中公开展示的角色的信息
  - 该同步方式包括圣遗物具体数据
  - 该同步方法包括角色着装信息
  - 该同步方式一次最多包含 8 个角色

:::

- 在游戏中将角色橱窗设置为公开并添加**需要获取详细资料的角色**进入橱窗展示
  - 角色橱窗中最多可同时展示 8 个角色
- 若您更换了橱窗内的角色或角色内的配置，需等待游戏内的数据同步至服务器
  - 开启功能和更换角色后需要**最多 5 分钟**同步数据
- 进入胡桃工具箱的“我的角色”功能页面，在界面右上角点击“同步角色信息-从游戏内角色橱窗同步”

### 从米游社原神战绩同步

::: info 同步特征

- 米游社“我的角色”同步的数据来源于米游社数据
  - 该同步方式不包含圣遗物信息
  - 该同步方式一次可同步全部角色信息

:::

- 在胡桃工具箱的 “我的角色” 功能页面，在界面右上角点击 “同步角色信息-从米游社原神战绩同步”

### 从米游社养成计算同步

::: info 同步特征

- “米游社养成计算”同步的数据来源于米游社养成计算模块
  - 该同步方式一次可同步全部角色信息

:::

- 在胡桃工具箱的“我的角色”功能页面，在界面右上角点击“同步角色信息-从米游社养成计算同步”

## 各同步方式对比

| **对比**    | **游戏-角色橱窗** | **米游社-原神战绩** | **米游社-养成计算** |
| :-------: | :---------: | :----------: | :----------: |
| **角色数量**  | 8个          | 全部           | 全部           |
| **角色等级**  | √           | √            | √            |
| **角色命座**  | √           | √            | ×            |
| **好感度**   | ×           | √            | ×            |
| **武器等级**  | √           | √            | √            |
| **武器精炼**  | √           | √            | ×            |
| **天赋等级**  | √           | ×            | √            |
| **衣装信息**  | √           | ×            | ×            |
| **圣遗物详情** | √           | ×            | ×            |

<table style="border-collapse: collapse; border: medium; border-spacing: 0px;">
	<tr>
		<td style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b><font color="#ff0000">对比</font></b>
		</td>
		<td style="border-bottom: 1px solid rgb(0, 0, 0); border-top: 1px solid rgb(0, 0, 0); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>游戏-角色橱窗</b>
		</td>
		<td style="border-bottom: 1px solid rgb(0, 0, 0); border-top: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>米游社-原神战绩</b>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); border-top: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>米游社-养成计算</b>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-top: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>角色数量</b>
		</td>
		<td style="border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			8个
		</td>
		<td style="text-align: center; padding-right: 3pt; padding-left: 3pt;">
			全部
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); border-top: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			全部
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>角色等级</b>
		</td>
		<td style="background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>角色命座</b>
		</td>
		<td style="background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>好感度</b>
		</td>
		<td style="background-color: rgb(255, 204, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
		<td style="background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>武器等级</b>
		</td>
		<td style="background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>武器精炼</b>
		</td>
		<td style="background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>天赋等级</b>
		</td>
		<td style="background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(204, 255, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>衣装信息</b>
		</td>
		<td style="background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
	</tr>
	<tr>
		<td style="border-left: 1px solid rgb(0, 0, 0); border-bottom: 1px solid rgb(0, 0, 0); border-right: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<b>圣遗物详情</b>
		</td>
		<td style="border-bottom: 1px solid rgb(0, 0, 0); background-color: rgb(204, 255, 204); border-left: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#006600">√</font>
		</td>
		<td style="border-bottom: 1px solid rgb(0, 0, 0); background-color: rgb(255, 204, 204); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
		<td style="border-right: 1px solid rgb(0, 0, 0); background-color: rgb(255, 204, 204); border-bottom: 1px solid rgb(0, 0, 0); text-align: center; padding-right: 3pt; padding-left: 3pt;">
			<font color="#cc0000">×</font>
		</td>
	</tr>
</table>

## 将当前选定角色加入养成计算

- 点击“我的角色”功能页面，切换至需要加入养成计算的角色
- 点击界面右上方的“养成计算-当前角色与武器”并填入等级信息
  注：**已同步数据的角色**的当前角色等级、天赋等级和武器等级会预填入其中，目标等级可自由更改

![rolescal](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01n3GYLI1g6e0zAVRM7_!!1797064093.png_.webp)

- 添加完毕后，您可在“养成计划”功能中查看“已添加的养成目标”
  - 关于养成计划功能的详细说明，请见[养成计划](./develop-plan.md#养成计划)文档

## 导出图片

- 在“我的角色”页面中，你可以选择一个角色后点击右上角的“导出图片”按钮以将角色数据转化为图片形式，这将有助于你分享你的角色信息
- 导出的图片储存在系统剪贴板中，你可以在合适的地方直接粘贴以获得该图片
- 导出图片样式如下图所示

![sample-output-image](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FDkZtN1g6e0vJuDZV_!!1797064093.png_.webp)
