---
headerDepth: 2
category: [お知らせ]
icon: iconfont icon-debug
order: 2
comment: false
description: Walnut Toolbox は GitHub で公開されているオープンソース プログラムであり、私たちは GitHub の Issue 機能を利用してフィードバックを収集しています。問題の報告は GitHub Issues から送信できます。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/statements/bug-report.html
---

# バグ報告の提出

Snap Hutao をご利用中に再現可能、または自力で解決できない問題を発見した場合は、問題フィードバックを送信して開発者にお知らせください。

![suggestion](https://img.alicdn.com/imgextra/i3/1797064093/O1CN01jXBMbe1g6du15k9kx_!!1797064093.jpg_.webp)

## Issue を提出する前に

新しい Issue を作成する前に、必ず次のチェックリストを完了してください。

- [ ] Snap Hutao の最新バージョンのクライアントを使用していることを確認する。
- [ ] 検索機能を使って問題を探し、[既知の問題](../advanced/known-issue.md) ドキュメントを確認する。
- [ ] プロジェクトの Issue ページで同一または類似の問題が既に報告されていないか検索する。

上記を確認しても解決しない場合は、GitHub で新しい Issue を作成してください。

## Issue を提出する方法

### Issue 提出前の準備

Issue を提出する際は、次の情報を提供してください。

1. **デバイス情報**
    - [ ] デバイス ID。
    - [ ] OS のバージョン。

2. **問題の説明**
    - [ ] 問題を詳細に説明し、開発者が再現できるようにする。
        - 問題はどのように発生したか？
        - プログラムまたは OS はどのようなエラーメッセージを表示したか？
        - 問題を切り分けるために試した操作とその結果は？

3. **クラッシュに関する情報**
    - 問題がプログラムのクラッシュに関係する場合は、Windows のイベント ビューアーで Snap Hutao に関連する `.NET エラー` を確認し、その詳細を Issue に添付してください。

### Issue の送信方法

- [GitHub の Issue 作成ページ](https://github.com/DGP-Studio/Snap.Hutao/issues/new/choose) にアクセスする。
- テンプレートに従って内容を記入し、送信する。

良い Issue の書き方がわからない場合は、[質の高い Issue 例](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20label%3A%E4%BC%98%E8%B4%A8%E9%97%AE%E9%A2%98) を参照してください。

## リモートデバッグ

開発者が自身の環境で問題を再現できない場合、リモートデバッグで原因を特定する必要があります。リモートデバッグに同意いただける場合、指定の管理者が QQ でフレンド追加し、リモートサポートグループに招待してやり取りを行います。

**リモートデバッグに使用する PC は以下の条件を満たす必要があります：**

- 空きディスク容量が 15GB 以上あること。
- デバッグ操作をサポートできる十分なネットワーク帯域。

### デバッグ前の準備

1. [貢献ガイド - Snap Hutao プロジェクトのセットアップ](../development/contribute.md#设置-snaphutao-项目) の手順 `1～3` を実行する。
2. [NetEase UU](https://uuyc.163.com/) リモートツールをダウンロードしてインストールする。

リモートデバッグは問題をより迅速に解決するための手助けになります。ご協力ありがとうございます！
