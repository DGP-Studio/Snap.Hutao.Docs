---
headerDepth: 2
category: [機能, チュートリアル]
tag: [深境螺旋, 深淵, 深淵データベース]
order: 9
comment: false
description: Snap Hutaoに内蔵されている胡桃データベース機能は、プレイヤーが深境螺旋の挑戦データをアーカイブおよび検索し、包括的な統計分析を提供し、データベースへのデータアップロードをサポートします。
---

# 胡桃データベース / 深淵統計

::: important
この翻訳は Google Gemini モデルによって作成されたものであり、PR による修正を歓迎します。
:::

Snap Hutaoは、主に以下の2つの深境螺旋挑戦統計機能を提供します。

- **分期詳細**：プレイヤーが各期の深境螺旋挑戦データを保存し、個人のデータレビューや統計を容易にします。
- **今期統計**：胡桃データベースにアップロードされたすべてのプレイヤーの深境螺旋データを表示し、プレイヤーにキャラクターとチームの使用に関する参考情報を提供します。
  - 「今期統計」は、プレイヤーが提出した「分期詳細」データに依存します。

::: tabs
@tab 分期詳細
![personal-record-details](https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ykD0CZ1g6e0sAQMn1_!!1797064093.png_.webp)
@tab キャラクター使用率
![character-usage-rate](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01dvdsCG1g6e0xyDPo5_!!1797064093.png_.webp)
@tab キャラクター出場率
![character-held-n-usage-rate](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Pdv5w01g6e0u1ewov_!!1797064093.png_.webp)
@tab チーム出場回数
![hutaoapi](https://img.alicdn.com/imgextra/i2/1797064093/O1CN01k1W4tw1g6e0wOyjdf_!!1797064093.png_.webp)
@tab キャラクター所持率
![character-held-rate](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01bQvukt1g6e0uuU2Fh_!!1797064093.png_.webp)
:::

## 深淵データの表示

::: warning データ範囲の限界
すべての計算は**胡桃データベースにアップロードされたプレイヤーデータ**に基づいており、すべての『原神』プレイヤーの平均データを代表するものではない可能性があり、参考としてのみ利用してください。
:::

::: info データ更新周期

1. 深境螺旋統計データ（キャラクター使用率、キャラクター出場率、チーム出場回数）は、アカウントが所属するサーバーのタイムゾーンで毎月1日と16日の4時に自動的に更新されます。
2. ユーザーが30日以内にデータを再アップロードしなかった場合、そのキャラクターの所持記録はクリアされます。
   :::

- 左側のメニューバーをクリックして「深境螺旋」ページに進み、「今期統計」タブを選択します。
- データの表示：
  - **キャラクター使用率**：
    - 計算式：キャラクター使用率 = キャラクターが現在の層に出場した回数[^first] / そのキャラクターを所持しているプレイヤーのその層での記録の合計数。
  - **キャラクター出場率**：
    - 計算式：キャラクター出場率 = キャラクターが現在の層に出場した回数[^first-2] / 現在の層の記録の合計数。
  - **キャラクター所持率**：
    - 計算式：キャラクター所持率[^third] = そのキャラクターを所持しているプレイヤー数 / 全プレイヤー数。
  - **チーム出場回数**：チーム編成の出場回数ランキングを表示します。

## 深境螺旋データのアップロード

### Snap Hutaoクライアントを使用する

::: important 胡桃クラウド権限報酬
初めてデータの送信に成功すると、報酬として3日間の「胡桃クラウド祈願記録サービス」権限が付与されます（12層をクリアしていなくても）。
:::

1. 左側のメニューバーをクリックして「深境螺旋」ページに進みます。
2. 右上の「データを更新」をクリックして、ツールボックスが最新の個人深境螺旋データを取得していることを確認します。
3. 「データをアップロード」ボタンをクリックしてデータを送信します。

- アップロードには数秒かかる場合があり、完了すると成功メッセージが表示されます。

### ブラウザを使用する

::: info
この方法はHoYoLABには適用されません。
:::

1. [JavaScriptスクリプト](/upload-abyss-data.js)のリンクを開き、コードをコピーします。
2. ブラウザで新しいブックマークを作成します。
   - 適切な名前を入力します。
   - コピーしたコードをブックマークURLに貼り付けます。
     ![add-bookmark](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01p0KOqU1g6dvfDQO6e_!!1797064093.png_.webp)
3. miHoYo BBSを開き、ページの読み込みが完了するのを待ってから、ブックマークをクリックします。
4. アップロードプロンプトを確認して、アップロードを完了します。

## データ共有

Snap Hutaoは、他の開発者と共同で胡桃データベースを維持しています。ユーザーは複数のアプリケーションで深淵統計データを表示およびアップロードできます。現在、提携しているアプリケーションは以下のとおりです。

<div class="vp-card-container">

```component VPCard
title: Miao-Plugin for Yunzai-Bot
desc: QQロボットMiao-Pluginプラグイン
logo: /images/202312/miao-plugin-logo.webp
link: https://github.com/yoimiya-kokomi/miao-plugin/tree/master
```

```component VPCard
title: 原神ピザ助手
desc: MacOS/iOS版の『原神』ツール
logo: /images/202312/genshin-pizza-helper-logo.webp
link: https://apps.apple.com/cn/app/%E6%8A%AB%E8%90%A8%E5%B0%8F%E5%8A%A9%E6%89%8B/id1635319193
```

```component VPCard
title: Ysin
desc: WeChatミニプログラムYsin
logo: /images/202312/ysin-logo.png
link: https://yuanshen.xin/
```

</div>

[^first]: 現在の層の異なる間で複数回登場する同じキャラクターは、出場回数1回としてカウントされます。

[^first-2]: 現在の層の異なる間で複数回登場する同じキャラクターは、出場回数1回としてカウントされます。

[^third]: そのキャラクターを所持していると、深境螺旋に登場しなくても所持状態としてカウントされます。記録をアップロードすると、全プレイヤー統計にカウントされます。
