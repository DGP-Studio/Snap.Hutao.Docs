---
headerDepth: 2
category: [FAQ]
icon: iconfont icon-read
order: 8
comment: false
description: Snap Hutao 使用多种方式获取用户的登录信息并配合原神 API 获取祈愿记录。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/Gacha-system-and-export-principal.html&has_description=False
---

# 祈愿系统与导出原理

> Gacha System and Principal

胡桃的祈愿系统相较 Snap Genshin 进行了整体架构上的重新设计。

本文将解释原神的祈愿记录机制和胡桃工具箱祈愿导出功能的技术原理。

---

## 祈愿的获取

获取祈愿记录需要请求米哈游的 API。

关于此 API，有以下注意事项：

- 通过米哈游服务器的 API，只能查询到过去一年内的祈愿记录。
  - 这也是原神客户端中祈愿记录的来源。
- API 存在请求速率限制，过快的请求会导致后续的请求失败，从而无法正常获取数据。

### 请求 API 的关键参数

为了请求此 API，我们需要以下四个关键参数：

1. 卡池类型
2. 抽卡物品
3. 时间
4. 抽卡记录 ID

- 当前已知获取这些参数的方法包括：
  1. 遍历 Unity 的日志文件，查找用户打开的祈愿记录 URL。
  2. 代理本机流量，筛选祈愿记录 URL。
  3. 查找 `CefBrowser` 的浏览器缓存，找到祈愿记录 URL。
  4. 使用包含 `SToken` 的 Cookie 调用 `genAuthKey` API，获取参数。
  5. 让高级用户手动输入相关 URL。

### 数据拼接与完整记录生成

在请求 API 后，可以获取到零散的祈愿记录。将这些记录拼接后即可生成一份完整的祈愿记录列表。

---

## 祈愿的存储

完整的祈愿记录列表在获取后会被序列化存储于本地数据库中，并在需要时反序列化以呈现给用户。

- 在后续请求中，胡桃只需与数据库中的数据对比，以获取新增部分的数据。
- 这种方式确保了用户可以长期保存帐号的完整祈愿记录。

---

## UIGF 格式

> 统一可交换祈愿记录标准  
> Uniformed Interchangeable GachaLog Format Standard

`UIGF` 是由我们联合其他祈愿记录应用共同倡导、推出并**长期维护**的一个统一祈愿记录数据交换标准。

标准化的数据格式允许用户在不同工具间自由转移数据，从而使用各工具的特色功能。

### 祈愿的导入

使用 `UIGF` 数据格式，可以导入其他应用中储存的祈愿记录数据。

- 胡桃在导入数据时，会对比本地存储中的最早索引（ID），仅导入更早的记录。
- 新数据始终可以从米哈游服务器获取，其原始数据精度更高。

### 祈愿的导出

胡桃支持将祈愿记录以 `UIGF` 数据格式保存为文件，并输出至用户指定的文件夹。

用户可以通过导出的文件在其他支持 `UIGF` 格式的工具中继续使用祈愿记录。
