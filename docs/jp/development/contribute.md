---
category: [オープンソース, 開発]
tag: ["開発", "GitHub"]
icon: iconfont icon-code
order: 3
description: Snap Hutaoは、C#と.NETフレームワークを使用してデスクトップクライアントとサーバーサイドを開発しています。オープンソースコミュニティからのフィードバックを広く受け付けています。コードの貢献にご興味がある場合は、本ページのガイドドキュメントをお読みください。
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html
---

# コードの貢献

::: important
この翻訳は Google Gemini モデルによって作成されたものであり、PRによる修正を歓迎します。
:::

Snap Hutaoは、`C#`と`.NET Framework`を使用してデスクトップクライアントとサーバーサイドを開発しています。オープンソースコミュニティからのフィードバックを広く受け付けています。コードの貢献にご興味がある場合は、本ページのガイドドキュメントをお読みください。

現在のすべての[未解決の問題](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20is%3Aopen%20-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90)はGitHubで確認できます。

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Snap.Hutao プロジェクトの設定

1. [Visual Studio](https://visualstudio.microsoft.com/downloads/)をダウンロードしてインストールします。
   - 次のコンポーネントをインストールする必要があります。
     - `.NET desktop development` (.NET デスクトップ開発)
     - `Desktop development with C++` (C++ を使用したデスクトップ開発)
     - `WinUI application development` (WinUI アプリケーション開発)
2. Visual Studio 拡張機能ストアから、Microsoft が提供する `Single-project MSIX Packaging Tools for VS 2022` 拡張機能をインストールします。
3. Gitを使用してプロジェクトリポジトリをクローンします：`https://github.com/DGP-Studio/Snap.Hutao.git`。
4. ブランチを `develop` に切り替えます。
5. Visual Studio を使用してプロジェクトソリューションを開くと、開発を開始できます。

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> デバッグの開始

1. [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25)（Microsoft Store）からダウンロードしてインストールするか、[Microsoft公式サイト](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite)からダウンロードします。
2. `DebugView` を見つけて起動します (スタートメニューまたは解凍されたファイル内)。
3. Snap Hutao メインプログラムを起動します。
4. `DebugView` の出力するデバッグ情報を確認します。

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> プルリクエストの発行

- プロジェクトの他のブランチから発行されたものではないプルリクエストは、`develop` ブランチへのマージのみが許可されます。
- あなたのコードが既存のissueに関連する場合は、[キーワード](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests)を使用して、あなたのPRを関連するissueに関連付けてください。これにより、PRが `main` ブランチにマージされたときに、関連するissueが自動的に閉じられます。

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> テストパッケージングプログラム

::: warning 注意事項
最新のアルファバージョンを試用したい場合は、まず[**DGP_Studio_CA.crt**](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt)を **信頼されたルート証明機関** にダウンロードしてインストールしてください。
:::

- `push` するたびに、GitHub Actions スクリプトが自動的に実行され、最新のソリューションがビルドされます。
  - `main`、`develop`、および `feat` ブランチの場合、スクリプトはテスト用にビルドされた `Snap Hutao Alpha` 圧縮パッケージを自動的にアップロードします。
  - 他のブランチは、コードのビルド可能性のみを検証し、アップロード機能は提供しません。
- すべてのコンパイル記録は、[Alpha パイプライン](https://github.com/DGP-Studio/Snap.Hutao/actions/workflows/alpha.yml)で確認できます。
