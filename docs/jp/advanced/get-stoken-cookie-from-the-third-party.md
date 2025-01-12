---
categories: [FAQ, 第三方ツール]
icon: iconfont icon-read
order: 7
comment: false
description: いくつかのサードパーティツールを使用すると、Stokenフィールドの値を含むmiHoYoのクッキーを取得し、それをSnap Hutaoで使用できます。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# サードパーティツールを使用してStoken付きのクッキーを取得する

::: important
この翻訳は Google Gemini モデルによって作成されたものであり、PR による修正を歓迎します。
:::

::: warning

- 以下の手順で言及されているソフトウェア、オープンソースプロジェクトなどのリソースはすべてインターネットから提供されており、DGP-Studioとは関係ありません。
- この説明書は、関連する解決策のアイデアを提供するものであり、学習目的でのみ使用されます。具体的な操作および操作の結果は、本プロジェクトとは関係ありません。
  :::

## Android

Androidユーザーは、オープンソースプロジェクトのGetTokenを使用して、Stokenフィールドを含むクッキーを取得できます。

::: tip GetToken オープンソースプロジェクト

- GitHub：[HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)

:::

- GetTokenプロジェクトのリリースには、2つのapkファイルが含まれており、どちらも最終的な効果は同じです。デバイスの状況に応じて、適切なバージョンを選択してください。
  - `app-release.apk`はLSPosedプラグインであり、ユーザーは公式のmiHoYo BBSでGetToken機能を使用できます。
    - Root権限が必要です。
  - `miyoushe-361-lspatched.apk`はGetToken機能が組み込まれたmiHoYo BBSの改造版プログラムです。
    - 注意：このバージョンのmiHoYo BBSをインストールするには、公式版のmiHoYo BBSをアンインストールする必要があります。
    - この方法ではRootは必要ありません。
- プラグインを有効にするか、改造版miHoYo BBSをインストールした後、miHoYo BBSを開き、下部のバーにある「マイ」をクリックしてログインします。
- 右上隅にある🔑のような形状のボタンをクリックします。
- `Stoken`オプションをチェックします。
- 「ログイン情報をコピー」をクリックして`Cookie`を取得します。
- コピーしたStokenを、Snap Hutaoがインストールされているコンピュータに送信します。
- 「胡桃（Snap Hutao）」で「アカウントログイン-手動入力」をクリックします。
- 先ほど取得した`Cookie`を入力してログインを完了します。

## iOS

iOSユーザーは、App Storeからパケットキャプチャソフト「Stream」をダウンロードして、Stokenフィールドを含むCookieを取得できます。

- App Storeから[Stream](https://apps.apple.com/cn/app/stream/id1312141691)をダウンロードします。
- ドメイン`api-takumi.mihoyo.com`のパケットキャプチャ分析を実行します。
- `Stoken`を含むデータを見つけてコピーします。
  - 例：`stuid=****;stoken=v2****;mid=****;`
- コピーしたStokenを、Snap Hutaoがインストールされているコンピュータに送信します。
- 「胡桃（Snap Hutao）」のアカウントログイン画面で、「手動入力」をクリックします。
- 先ほど取得した`Cookie`を入力してログインを完了します。

## macOS

macOSユーザーは、[TeyvatGuide](https://github.com/BTMuli/TeyvatGuide)アプリケーションを使用して、Stokenフィールドを含むCookieを取得できます。

- [Github Release](https://github.com/BTMuli/TeyvatGuide/releases/latest)から、TeyvatGuideのmacOS版パッケージをダウンロードします。
- [TeyvatGuideドキュメント](https://github.com/BTMuli/TeyvatGuide/blob/master/docs/macos-gatekeeper/README.md)を参照してインストールします。
- 設定ページでSMS認証コードを使用してアカウントにログインします。
- ユーザーバッジでクッキーコピーボタンを選択してクッキーをコピーします。
- Snap Hutaoのアカウントログイン画面で、「手動入力」をクリックします。
- 直接貼り付けるとログインが完了します。
