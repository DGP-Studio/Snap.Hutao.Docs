---
pageClass: link-box
externalLinkIcon: false
category: [機能, チュートリアル]
comment: false
icon: iconfont icon-launch
order: 5
description: このクイックスタートドキュメントに従うことで、Snap Hutaoを素早く利用可能な状態に設定できます。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# クイックスタート

::: important
この翻訳はGoogle Geminiモデルによって作成されたものであり、PRによる修正を歓迎します。
:::

このクイックスタートドキュメントに従うことで、Snap Hutaoを素早く利用可能な状態に設定できます。

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> 最低システム要件

| 要件                               | 仕様                                                             |
| ---------------------------------- | ---------------------------------------------------------------- |
| **最低実行可能システムバージョン** | Windows 10 Build 19045 (22H2)<br/> Windows 11 Build 22621 (22H2) |
| **推奨システムバージョン**         | Windows 11 Build 22621 (22H2) 以降                               |
| **必須コンポーネント**             | Windows Update、App Installer                                    |
| オプションコンポーネント           | WebView2 Runtime、**MSVC ランタイム**                            |

**サポートされていないシステムバージョン**：

1. **LTSC および LTSB バージョン**は、十分な新しいバージョンの MSIX Core を含んでいないため、直接インストールをサポートしていません。手動で処理する必要があります。
2. **エンタープライズ版および軽量版システムはサポートされていません。Microsoft 公式のフルバージョンシステム以外に起因する問題は、積極的に処理されません**。
3. Windows 10 Build 19041 もインストールできますが、カーネルの問題により一部の機能が使用できなくなるため、このバージョンでの Snap Hutao の問題は処理されません。
4. Windows Insider プレビュー版の問題は処理されません。

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Snap Hutao のダウンロード

### 新規インストール

**MSIX インストールパッケージ**または **Snap.Hutao.Deployment インストーラー**を使用して、Snap Hutaoをインストールできます。以下のソースからインストールパッケージを入手できます。

::: tabs

@tab Snap.Hutao.Deployment インストーラーを使用

Snap.Hutao.Deployment は開発チームが独自に作成したワンクリックインストーラーで、**必要なすべてのコンポーネントを同時にインストールします**。ほとんどの一般ユーザーや、MSIX アプリパッケージのインストールに失敗したユーザーに適しています。

<div class="vp-card-container">

<VPCard
title="胡桃自動判断"
desc="最適な回線を自動的に判断してダウンロード"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao-deployment/download"
background="rgba(253, 233, 233, 0.45)"
/>

<VPCard
title="GitHub"
desc="Snap Hutao Deployment もオープンソースプロジェクトです"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao.Deployment/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

@tab MSIX インストールパッケージを使用

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">注意</p>
    <p>Snap Hutao のインストールには Snap.Hutao.Deployment を使用することをお勧めします。MSIX インストールパッケージを使用してインストールした際に発生する問題は、積極的に処理されません。</p>
  </div>

<VPCard
title="胡桃自動判断"
desc="最適な回線を自動的に判断してダウンロード"
logo="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp"
link="https://api.snapgenshin.com/patch/hutao/download"
background="rgba(253, 233, 233, 0.45)"
/>
<VPCard
title="GitHub"
desc="Snap Hutao のすべてのバージョンは、メインコードリポジトリに公開されます"
logo="/images/202312/github-mark.svg"
link="https://github.com/DGP-Studio/Snap.Hutao/releases/latest"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

:::

---

もしあなたの力で Snap Hutao プロジェクトをより良くすることに興味がある場合は、ぜひ[ご参加ください](development/join.md)！

### <HopeIcon icon="iconfont icon-refresh" size="1.5rem" color="rgb(127, 186, 0)" /> Microsoft Store 版から最新版へのアップグレード

> 詳しくは[1.9.0 バージョンの重大な変更点](blog/version-1-9-0-breaking-changes.md)をご覧ください。

Snap Hutao Microsoft Store 版（バージョン 1.4.11 から 1.8.5 の間）をインストール済みの場合は、古いバージョンをアンインストールしてから新規インストールを行う必要があります。

- ドキュメントに記載されている[アンインストール方法](advanced/uninstall.html)に従って、古いバージョンのアプリケーションをアンインストールします。
  - データを手動で削除しない限り、データは影響を受けません。
- 上記の方法に従って、新しいバージョンのアプリケーションを新規インストールします。

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Snap Hutao のアップデート

特記事項がない限り、[Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) を実行するか、最新版の MSIX インストールパッケージをインストールすることで、アップデートを完了できます。

1.9.0 バージョン以降、Snap Hutao にはアップデートパッケージを取得するための組み込みアップデート通知機能があります。アップデートに失敗した場合は、[Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) を使用して上書きインストールを試してみてください。

- データを手動で削除しない限り、データは影響を受けません。

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> オプションコンポーネントのインストール

オプションコンポーネントを使用することで、Snap Hutao はより効率的に一部の機能を実現できます。これらは必須コンポーネントではありませんが、ユーザーエクスペリエンスを大幅に向上させることができます。

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 ランタイム

WebView2 ランタイムは Microsoft が提供しており、Snap Hutao に低負荷のブラウザコンポーネントを埋め込むことができます。このコンポーネントは、miHoYo アカウントの WebView2 ログイン機能を実装するために使用されます。

[Microsoft 公式サイト](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)の下部にある `常緑独立インストーラー`で、`x64` を選択してダウンロードおよびインストールできます。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Segoe Fluent Icons フォント

このフォントは Microsoft が提供しており、Snap Hutao のアイコン表示効果を最適化できます。このフォントがないと、一部のアイコンが正しく表示されない場合があります。

[このリンク](https://aka.ms/SegoeFluentIcons)をクリックしてフォント圧縮パッケージをダウンロードし、解凍後、フォントを右クリックしてシステムにインストールします。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC ランタイム（MSVCRT）

MSVC ランタイムは、フレームレート機能を有効にするために必要なコンポーネントです。「XXX.dll がありません」または「XXX コンポーネントがありません」というメッセージが表示された場合は、最新版の MSVCRT をインストールしてください。

[このリンク](https://aka.ms/vs/17/release/vc_redist.x64.exe)をクリックして、MSVC ランタイム（x64）インストールファイルをダウンロードし、インストールを完了します。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 初めての miHoYo アカウントの追加

メインインターフェースで、左下のドキュメントボタンと設定ボタンの間にあるアカウントパネルをクリックします。表示された miHoYo アカウントパネルで、アカウントの種類に応じてログイン方法を選択します。

どの方法を使用する場合でも、アカウントが公式アプリを通じて初期化されていることを確認してください。そうしないと、Snap Hutao はアカウント情報を正しく取得できません。

:::: tabs

@tab miHoYo 携帯電話認証コードログイン

::: warning
miHoYo アカウントが中国国内サーバーのアカウントに紐付けられていることを確認してください。
:::

1. 「携帯電話認証コード」ボタンをクリックし、携帯電話番号を入力して認証コードを送信します。
2. 認証コードを入力して確認すると、しばらくするとアカウントが追加されます。

@tab miHoYo QRコードログイン

::: warning
miHoYo アカウントが中国国内サーバーのアカウントに紐付けられていることを確認してください。
:::

1. 「QRコードログイン」ボタンをクリックし、QRコードが読み込まれるのを待ちます。
2. miHoYo アプリでQRコードをスキャンしてログインを承認します。
3. しばらくすると、Snap Hutao がアカウントを追加します。

@tab HoYoLAB パスワードログイン

::: warning
HoYoLAB アカウントがグローバルサーバーのアカウントに紐付けられていることを確認してください。
:::

1. 「パスワードログイン」ボタンをクリックし、アカウントのパスワードを入力して確認します。
2. しばらくすると、アカウントが追加されます。

@tab HoYoLAB SNSアカウントログイン

この方法は WebView2 ランタイムコンポーネントに依存します。

::: warning
HoYoLAB はデフォルトで中国本土からのネットワーク接続をブロックします。
:::

1. 「サードパーティログイン」ボタンをクリックし、WebView2 を使用してログインします。
2. しばらくすると、アカウントが追加されます。

@tab Cookie ログイン

::: warning
Cookie 情報を適切に保管し、アカウントのリスクを回避してください。
:::

手動で SToken を入力して Cookie ログインを送信します。

1. ターゲットアプリのアイコンをクリックし、「手動入力」を選択します。
2. 有効な Cookie を入力して確認すると、しばらくするとアカウントが追加されます。
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> インストールのよくある質問

### プログラム内のアイコンが文字化けして表示されるのはなぜですか

- Windows 10 ユーザーは、`Segoe Fluent Icons` フォントをインストールすることで問題を解決できます。
- インストール時に「すべてのシステムユーザーにインストール」を選択します。

### システムコンポーネントを修復することでインストール問題を解決できますか

エラーメッセージに基づいて不足しているコンポーネントを修復してください。ただし、Snap Hutao 開発チームはサポートを提供しません。

---

::: warning
以下の問題は MSIX インストールにのみ適用されます。まず [Snap.Hutao.Deployment](https://api.snapgenshin.com/patch/hutao-deployment/download) を使用したインストールを試してください。
:::

### コンピューターで MSIX 形式のインストールパッケージを開くことができません

システムに App Installer が不足していないか確認してください。

1. [App Installer](https://apps.microsoft.com/detail/9NBLGGH4NNS1?hl=en-us&gl=US) をインストールします。
2. Microsoft 公式の Windows 10 または 11 イメージを使用してシステムをインストールしたことを確認してください。

### MSIX インストールパッケージに「このアプリパッケージの発行元証明書を検証できません」と表示されます

[GlobalSign Code Signing Root R45](https://secure.globalsign.com/cacert/codesigningrootr45.crt) 証明書を `信頼されたルート証明機関` に手動でインストールします。

### MSIX インストールパッケージにグループポリシーエラーまたは開発者ライセンスが必要と表示されます

1. Windows の設定を開きます。
2. 「システム」-「開発者向け」を開きます。
3. 「開発者モード」のスイッチをオンにします。

---

### MSIX パッケージのインストールに失敗し、エラーメッセージが表示される

| エラーメッセージ                                        | 原因                                   |
| ------------------------------------------------------- | -------------------------------------- |
| `0x80040154` エラーコード                               | Windows ユーザーアカウントの権限エラー |
| `アプリケーションが起動しませんでした` エラーメッセージ | App Installer の権限エラーまたは破損   |
| `0x80073CF0` エラーコード                               | ディレクトリの権限エラー               |
| `0x80070005` エラーコード                               | Windows ユーザーアカウントの権限エラー |
| `0x80070570` エラーコード                               | Windows ユーザーアカウントの権限エラー |
| `0x8007065E` エラーコード                               | Windows ユーザーアカウントの権限エラー |

#### 解決手順

1. スタートメニューを右クリックし、「PowerShell (管理者)」を選択します。
2. 次のコードを実行してインストールを完了します。

   ```PowerShell
   cd $env:USERPROFILE\Downloads; $url="https://api.snapgenshin.com/patch/hutao/download"; $targetFileName="Snap.Hutao.latest.msix"; $targetFilePath=Join-Path -Path $PWD -ChildPath $targetFileName; Invoke-WebRequest -Uri $url -OutFile $targetFilePath; Add-AppxPackage -Path $targetFilePath; Remove-Item -Path $targetFilePath
   ```

3. 赤色のエラーメッセージが表示されなければ、インストールは成功です。
