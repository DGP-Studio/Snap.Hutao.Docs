---
headerDepth: 3
icon: iconfont icon-ask
category: [FAQ]
order: 1
comment: false
description: このページでは、ユーザーのネットワークやプログラムのライフサイクルに関する一般的な問題とその解決策について説明します。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/faq.html&has_description=False
---

# その他のよくある質問

::: important
この翻訳は Google Gemini モデルによって作成されたものであり、PRによる修正を歓迎します。
:::

## Snap Hutaoのデスクトップショートカットを作成する方法（管理者権限なし）

::: tip コミュニティの力
[CzHUV氏による解決策](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/12) に感謝します。
:::

1. `Win+R` を使用して「ファイル名を指定して実行」ウィンドウを開き、入力ボックスに `shell:AppsFolder` と入力します。
   ![Run](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Jj8c6i1g6du728e5A_!!1797064093.png_.webp)
2. Windows がアプリケーションディレクトリを開くので、「Snap Hutao」を見つけます。
3. Snap Hutaoアイコンを右クリックし、「ショートカットの作成」を選択します。
4. システムの指示に従って操作すると、デスクトップにショートカットが作成されます。

## Snap Hutaoのデスクトップショートカットを作成する方法（管理者権限あり）

- Snap Hutaoのプログラム設定ページに移動し、「ショートカットを作成」ボタンをクリックすると、管理者権限を持つショートカットがデスクトップに作成されます。

## Snap Hutaoを起動時に自動起動させる方法

### 方法1：バッチファイルを使用する

1. [このIssue](https://github.com/DGP-Studio/Snap.Hutao/issues/184) で提供されているコマンドを参考に、Snap Hutaoを管理者モードで直接実行するバッチファイルを作成します。
2. 次の方法でバッチファイルの自動起動を設定します。

- スケジュールされたタスクを作成し、システムの起動時にバッチファイルが実行されるようにします。
- バッチファイルをシステムのスタートアップ項目に追加します。

### 方法2：ツールを使用する

- `SkipUAC`のようなプログラムを使用して、Snap Hutaoを管理者権限でサイレント起動させます。

::: warning 注意事項
上記の方法は、システム構成やその他の問題により機能しない場合があります。Snap Hutaoは、起動時の自動起動機能を直接サポートしていません。関連する操作を試す場合は、自己責任で行ってください。
:::

## 管理者モードでSnap Hutaoを起動できない

> **問題範囲**: Windows 10 バージョン 22H2 より前のバージョンのみ

- ユーザーのシステムバージョンが `Windows Build 19045`（つまり、Windows 10 22H2バージョン）よりも低い場合、管理者モードでSnap Hutaoを起動できない可能性があります。
- **解決策**: このような互換性の問題を避けるために、システムをWindows 10の最新バージョンにアップグレードすることをお勧めします。

## ネットワークプロキシを使用してSnap Hutaoを使用する方法

> Snap Hutaoは、世界中のユーザーが質の高いサービスを享受できるように、優れたクラウドネットワーク構造を提供しています。

1. システムまたはソフトウェアのプロキシサービスを設定します。
2. `Loopback ネットワーク` を有効にすることをお勧めします。詳細なチュートリアルは[こちら](loopback.md) を参照してください。

# 通知アイコンの作成に失敗しました

PowerShell を開いて、以下のコマンドを実行して問題を修正してください

```PowerShell 
irm hut.ao/install.ps1 | iex
```

