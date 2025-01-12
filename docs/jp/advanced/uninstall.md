---
category: [FAQ]
icon: iconfont icon-delete
tag: [アンインストール]
order: 9
comment: false
description: Snap Hutaoをアンインストールするのは簡単で迅速なプロセスです。このページのチュートリアルに従って、ご自身に最適な方法でSnap Hutaoをアンインストールできます。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/uninstall.html&has_description=False
---

::: important
このドキュメントはGoogle Geminiモデルによって翻訳されたものであり、PRによる修正を歓迎します。
:::

# Snap Hutao のアンインストール

Snap Hutao のアンインストールは簡単なプロセスです。プログラムとその関連データを完全に削除したい場合は、以下の手順に従ってください。

## Snap Hutao アプリケーションのアンインストール

1. **スタートメニュー**を開きます。
2. `Snap Hutao` を検索します。
3. Snap Hutao を右クリックして **「アンインストール」** を選択します。

## データフォルダーの削除（完全にアンインストールする場合）

1. エクスプローラーを開きます。
2. 以下のパスに移動します：`%userprofile%/Documents/Hutao`。
3. `Hutao` フォルダーを削除します。

## よくある質問

### 「この hutao リンクを開くには新しいアプリが必要です」というダイアログが表示されるのはなぜですか？

![uninstall-error](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01b3j0eY1g6duBXLJXg_!!1797064093.jpg_.webp)

Snap Hutao をアンインストールした後、上の図のように「この hutao リンクを開くには新しいアプリが必要です」というメッセージが表示される場合、これはアンインストール前にリアルタイム Notes のスケジュールタスクがクリアされていないことを示しています。この問題は古いバージョンの Snap Hutao でのみ発生します。

解決策：

1. Snap Hutao を再インストールします。
2. 設定でリアルタイム Notes のスケジュールタスクをクリアします。
3. 再度 Snap Hutao をアンインストールします。

システムのスケジュールタスクに関連タスクが見つからないが、問題が解決しない場合は、[こちらのドキュメント](https://github.com/DGP-Studio/Snap.Hutao.Docs/issues/18) を参照して、さらに解決策をご確認ください。

### クライアントデータを完全にバックアップ/復元する方法は？

::: warning データセキュリティに関する注意
`Userdata.db` ファイルには、セキュリティ上重要な miHoYo BBS の Cookie を含む、すべてのクライアントデータが含まれています。このファイルを適切に保管し、他人と共有しないでください。
:::

#### データのバックアップ

1. Snap Hutao のデータディレクトリに移動します（デフォルトパスは `%userprofile%/Documents/Hutao` です）。
2. フォルダー内の `Userdata.db` ファイルを、選択したバックアップ場所にコピーします。

#### データの復元

1. バックアップした `Userdata.db` ファイルを Snap Hutao のデータディレクトリにコピーし直します。
2. Snap Hutao を起動して、データを復元します。

上記の手順により、Snap Hutao のすべてのデータを安全にバックアップまたは復元できます。
