---
headerDepth: 2
category: [公告, プロジェクト, 機能]
comment: false
icon: iconfont icon-workingDirectory
order: 6
description: Snap Hutao は GitHub でオープンソースのプログラムプロジェクトです。私たちは、このプロジェクトがより活発になるために、コミュニティからの協力を広く受け入れています。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# プロジェクト説明

::: center
![banner](https://img.alicdn.com/imgextra/i1/1797064093/O1CN01vWmKzl1g6e2VIEODU_!!1797064093.png_.webp)
<a href="https://trendshift.io/repositories/2009" target="_blank"><img src="https://trendshift.io/api/badge/repositories/2009" alt="DGP-Studio%2FSnap.Hutao | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
:::

::: important
この翻訳はGoogle Geminiモデルによって作成されたものであり、PRによる修正を歓迎します。
:::

Snap Hutao は、MIT ライセンスに基づいてオープンソース化された「原神」ツールボックスであり、モダンな Windows プラットフォーム向けに設計され、デスクトップ版プレイヤーのゲーム体験を向上させることを目的としています。公式リソースとチームが独自に設計した新機能を組み合わせることで、モバイルデバイスに依存することなく、包括的で実用的なツールセットを提供します。同時に、非破壊原則を厳守し、ゲームクライアントには一切変更を加えないため、ツールボックスの安全な使用を保証します。

Snap Hutao プロジェクトは、MSIX 形式でパッケージ化されています。MSIX は、Windows ネイティブのアプリケーションパッケージ形式であり、ソフトウェアのインストール、更新、アンインストールプロセスを簡素化するなどの特徴があります。サンドボックス技術により、MSIX でパッケージ化されたアプリケーションは隔離された環境で実行され、システムリソースを直接変更することを回避し、システムの安全性と安定性を大幅に向上させます。さらに、MSIX 形式は、アンインストール後に残りのファイルやレジストリエントリを残さないため、システムのクリーンさを保証します。これらの利点により、MSIX は開発者とユーザーがソフトウェアを管理するための強力なツールとなり、スムーズで安全、かつクリーンなソフトウェア体験を提供します。

## Snap Hutao が解決する「原神」デスクトップ版の欠点

|              機能              | モバイル版                         | デスクトップ版                                              | Snap Hutao のソリューション                                                                         |
| :----------------------------: | ---------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  **フレームレート制限の解除**  | iOS/iPadOS 公式サポート 120FPS     | 最高 60FPS                                                  | [高度なランチャー - インジェクションモジュール](features/game-launcher.md#ゲームフレームレート設定) |
| **ゲームアカウントの切り替え** | ログイン済のアカウントは記録される | ログアウト後、アカウントは記録されない                      | [高度なランチャー - アカウント切り替え](features/game-launcher.md#アカウント保存)                   |
|     **サーバーの切り替え**     | なし                               | なし                                                        | [高度なランチャー - サーバー切り替え](features/game-launcher.md)                                    |
|   **祈願記録のエクスポート**   | なし                               | なし                                                        | [祈願記録のエクスポート](features/wish-export.md)                                                   |
|      **毎日のサインイン**      | miHoYo BBS クライアント            | グローバルサーバーのユーザーのみ Web サイトでサインイン可能 | [アカウントパネル - サインイン](features/mhy-account-switch.md)                                     |
|      **リアルタイム付箋**      | miHoYo BBS クライアント            | なし                                                        | [リアルタイム付箋](features/real-time-notes.md)                                                     |
|    **派遣完了通知プッシュ**    | モバイル版ゲームプッシュ通知       | なし                                                        | [リアルタイム付箋プッシュ通知](features/real-time-notes.md)                                         |
|     **深境螺旋データ照会**     | miHoYo BBS クライアント            | グローバルサーバーのユーザーのみ Web サイトで照会可能       | [深境螺旋](features/hutao-API.md)                                                                   |
|          **育成計画**          | miHoYo BBS クライアント            | グローバルサーバーのユーザーのみ Web サイトで使用可能       | [育成計画](features/develop-plan.md#育成計画)                                                       |
|     **Discord ステータス**     | なし                               | グローバルサーバークライアントで利用可能                    | [高度なランチャー - Discord Activity](features/game-launcher.md#高度なランチャー)                   |

## プロジェクトリソース

- [GitHub コードリポジトリ](https://github.com/DGP-Studio/Snap.Hutao)
- [Crowdin ローカライズ翻訳](https://translate.hut.ao/)
- [Snap Hutao ユーザーコミュニティ](community.md)

## 完全な機能一覧

- [ゲーム内のお知らせとカウントダウン](features/dashboard.md)
- [miHoYo フォーラムの複数アカウントログインサポート](features/mhy-account-switch.md)
  - Web ログインおよび Cookie 入力による miHoYo BBS および HoYoLAB へのログインをサポート
  - サインイン報酬をサポート
- [高度なランチャー](features/game-launcher.md)
  - サーバーの切り替え
  - ゲームアカウントの切り替え
  - カスタムゲームフレームレート
  - ゲームパッチのダウンロード
  - カスタムゲーム起動パラメータ
- [祈願記録管理](features/wish-export.md)
  - ゲームデータからワンクリックでデータを更新
  - UIGF 祈願データファイルをインポート/エクスポート
  - 祈願イベントタイマー
  - 祈願イベント履歴の照会
  - グローバル祈願データ統計
- [アチーブメント管理](features/achievements.md)
  - ゲームデータからデータを更新
  - UIAF データファイルをインポート/エクスポート
- [リアルタイム付箋](features/real-time-notes.md)
  - 複数アカウントのリアルタイム付箋をサポート
  - カスタム更新間隔
  - Windows ネイティブ通知プッシュ
- [自分のキャラクター](features/character-data.md)
  - 複数のデータソースからのデータ同期をサポート
  - 自分のキャラクターデータをクリップボードにエクスポート
- [深境螺旋/幻想真境劇詩](features/hutao-API.md)
  - 各期のモンスターと淵月の祝福の詳細
  - 深境螺旋の部門詳細戦闘データを同期
  - Snap Hutao 深淵データベース
    - キャラクター使用率
    - キャラクター登場率
    - チーム登場統計
    - キャラクター所持率
- [育成計画](features/develop-plan.md)
  - リアルタイムデータおよび WIKI データからキャラクターと武器の育成計画を作成することをサポート
  - 複数計画のアーカイブをサポート
- WIKI データ
  - [キャラクター情報](features/character-wiki.md)
  - [武器情報](features/weapon-wiki.md)
  - [モンスター情報](features/monster-wiki.md)
- [Snap Hutao アカウントシステム](features/hutao-settings.md#胡桃アカウント)
  - 祈願データバックアップ
  - 祈願統計予測
