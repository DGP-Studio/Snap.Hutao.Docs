import{_ as i,c as s,f as l,a as t,e as n,b as r,d as a,r as d,o as p}from"./app-B417jO5j.js";const h={};function u(c,e){const o=d("RouteLink");return p(),s("div",null,[e[16]||(e[16]=l('<h1 id="よくあるプログラム例外" tabindex="-1"><a class="header-anchor" href="#よくあるプログラム例外"><span>よくあるプログラム例外</span></a></h1><p>以下のドキュメントでは、Snap Hutao の使用中に発生する可能性のある一般的な問題と、それに対する解決策を示します。</p><hr><div class="hint-container important"><p class="hint-container-title">重要</p><p>この翻訳は Google Gemini モデルによって作成されたものであり、PRによる修正を歓迎します。</p></div><h2 id="return-code-2002" tabindex="-1"><a class="header-anchor" href="#return-code-2002"><span><strong>Return Code: 2002</strong></span></a></h2><ul><li><strong>発生源</strong>: MiYouShe から返された情報</li><li><strong>問題の原因</strong>: miHoYo アカウントが初期化されていない</li><li><strong>解決策</strong>: <ul><li>MiYouShe アカウント：MiYouShe 公式モバイルアプリでアカウントにログインし、コミュニティユーザー名を設定して初期化します。</li><li>HoYoLAB アカウント：HoYoLAB 公式モバイルアプリまたはウェブ版でアカウントにログインし、コミュニティユーザー名を設定して初期化します。</li></ul></li></ul><h2 id="return-code-10001" tabindex="-1"><a class="header-anchor" href="#return-code-10001"><span><strong>Return Code: -10001</strong></span></a></h2><ul><li><strong>発生源</strong>: MiYouShe から返された情報（<code>Return Code: -10001</code> および <code>Return Code: -100</code> を含む）</li><li><strong>問題の原因</strong>: <ol><li>Cookie の有効期限切れまたはネットワークの異常</li><li>システム時刻のエラー</li></ol></li><li><strong>解決策</strong>: <ol><li>アカウントパネルで「Cookieを更新」をクリックします。</li><li>アカウントを削除してから再度追加します。</li><li>システム設定で自動時刻同期を有効にして、すぐに同期します。</li></ol></li></ul><h2 id="状態-1034-検証失敗" tabindex="-1"><a class="header-anchor" href="#状態-1034-検証失敗"><span><strong>状態：1034 検証失敗</strong></span></a></h2><ul><li><strong>問題の原因</strong>: リアルタイムノート機能が MiYouShe 検証システムによってブロックされています。</li><li><strong>解決策</strong>: <ol><li>「リアルタイムノート」機能に移動します。</li><li>右上の「現在のユーザーとキャラクターを検証」ボタンをクリックします。</li><li>指示に従って検証を完了します。</li><li>問題が解決しない場合は、上記の手順を繰り返します。</li></ol></li></ul><div class="hint-container warning"><p class="hint-container-title">注意事項</p><ol><li>パスワードを変更すると、デバイスのログイン状態がリセットされます。</li><li>複数のBotまたはデバイスが頻繁に MiYouShe データにアクセスすると、MiYouShe のセキュリティ制限がトリガーされ、一時的に回避できなくなる可能性があります。</li></ol></div><h2 id="httprequestexception-メタデータ検証ファイルのダウンロードに失敗しました" tabindex="-1"><a class="header-anchor" href="#httprequestexception-メタデータ検証ファイルのダウンロードに失敗しました"><span><strong>HttpRequestException メタデータ検証ファイルのダウンロードに失敗しました</strong></span></a></h2><h3 id="connectionerror" tabindex="-1"><a class="header-anchor" href="#connectionerror"><span><strong>ConnectionError</strong></span></a></h3>',13)),t("ul",null,[e[4]||(e[4]=t("li",null,[t("strong",null,"原因"),n(": Snap Hutao サーバーへの接続に失敗しました。")],-1)),t("li",null,[e[1]||(e[1]=t("strong",null,"解決策",-1)),e[2]||(e[2]=n(": ネットワークプロキシを確認するか、")),r(o,{to:"/jp/advanced/loopback.html"},{default:a(()=>e[0]||(e[0]=[n("Windows コンテナ Loopback 制限")])),_:1}),e[3]||(e[3]=n("を解除しているか確認してください。"))])]),e[17]||(e[17]=t("h3",{id:"_403-404-418",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_403-404-418"},[t("span",null,[t("strong",null,"403 / 404 / 418")])])],-1)),t("ul",null,[t("li",null,[e[6]||(e[6]=t("strong",null,"解決策",-1)),e[7]||(e[7]=n(": ")),r(o,{to:"/jp/quick-start.html#%E5%85%A8%E6%96%B0%E5%AE%89%E8%A3%85"},{default:a(()=>e[5]||(e[5]=[n("最新バージョン")])),_:1}),e[8]||(e[8]=n("にアップデートしてください。"))])]),e[18]||(e[18]=l('<h3 id="_502" tabindex="-1"><a class="header-anchor" href="#_502"><span><strong>502</strong></span></a></h3><ul><li><strong>原因</strong>: Snap Hutao サーバーへの接続に失敗しました。</li><li><strong>解決策</strong>: ネットワークを確認するか、開発チームに連絡してください。</li></ul><h2 id="_653366069-リクエスト例外" tabindex="-1"><a class="header-anchor" href="#_653366069-リクエスト例外"><span><strong><code>653366069</code> リクエスト例外</strong></span></a></h2>',3)),t("ul",null,[e[15]||(e[15]=t("li",null,[t("strong",null,"原因"),n(": MiYouShe / HoYoLAB サーバーに接続できません。")],-1)),t("li",null,[e[13]||(e[13]=t("strong",null,"解決策",-1)),e[14]||(e[14]=n(": ")),t("ul",null,[e[11]||(e[11]=t("li",null,"偶発的なエラーは無視してください。",-1)),e[12]||(e[12]=t("li",null,"エラーが続く場合は、ネットワーク接続を確認してください。",-1)),t("li",null,[r(o,{to:"/jp/advanced/loopback.html"},{default:a(()=>e[9]||(e[9]=[n("Windows コンテナ Loopback 制限")])),_:1}),e[10]||(e[10]=n("を解除しているか確認してください。"))])])])]),e[19]||(e[19]=l('<h2 id="リソースのダウンロードに失敗しました" tabindex="-1"><a class="header-anchor" href="#リソースのダウンロードに失敗しました"><span><strong>リソースのダウンロードに失敗しました</strong></span></a></h2><ul><li>一部の静的リソースのダウンロードに失敗しても、使用には大きな影響はありません。クライアントは必要なときに自動的に再試行します。</li></ul><h3 id="received-an-unexpected-eof-or-0-bytes-from-the-transport-stream" tabindex="-1"><a class="header-anchor" href="#received-an-unexpected-eof-or-0-bytes-from-the-transport-stream"><span><strong><code>Received an unexpected EOF or 0 bytes from the transport stream.</code></strong></span></a></h3><ul><li><strong>原因</strong>: ダウンロード量の制限またはネットワークの変動。</li><li><strong>解決策</strong>: Snap Hutao を閉じてから再度試すか、ネットワーク環境を切り替えてください。</li></ul><h2 id="必要なモジュールを検索中に問題が発生しました" tabindex="-1"><a class="header-anchor" href="#必要なモジュールを検索中に問題が発生しました"><span><strong>必要なモジュールを検索中に問題が発生しました</strong></span></a></h2><ul><li><strong>エラーメッセージ</strong>: <ol><li>モジュールを読み取ることができません。保護ドライバのロードの問題である可能性があります。</li><li>モジュールの検索がタイムアウトしました。</li></ol></li><li><strong>解決策</strong>: Snap Hutao はゲームプロセスを閉じます。ユーザーは再度起動を試してください。</li></ul><h2 id="アプリケーションのインストールに失敗しました。エラーメッセージ-内部エラー-0x80073d05" tabindex="-1"><a class="header-anchor" href="#アプリケーションのインストールに失敗しました。エラーメッセージ-内部エラー-0x80073d05"><span><strong>アプリケーションのインストールに失敗しました。エラーメッセージ：内部エラー 0x80073D05</strong></span></a></h2><ul><li><strong>原因</strong>: アンインストール後に残ったファイルがクリーンアップされていません。</li><li><strong>解決策</strong>: <ol><li><code>%appdata%/../Local/Packages</code> を開きます。</li><li><code>60568DGPStudio.SnapHutao_wbnnev551gwxy</code> フォルダを削除します（権限が不足している場合は、<code>NSudo_LG</code> を使用してください）。</li></ol></li></ul><h2 id="_0x8007007e-または-指定されたファイル-モジュールが見つかりませんというメッセージが表示される" tabindex="-1"><a class="header-anchor" href="#_0x8007007e-または-指定されたファイル-モジュールが見つかりませんというメッセージが表示される"><span><strong>0x8007007E または 指定されたファイル/モジュールが見つかりませんというメッセージが表示される</strong></span></a></h2><ul><li><strong>原因</strong>: MSVC ランタイムライブラリが不足しています。</li><li><strong>解決策</strong>: 最新バージョンの <a href="https://aka.ms/vs/17/release/vc_redist.x64.exe" target="_blank" rel="noopener noreferrer">MSVC ランタイムライブラリ（x64）</a> をインストールしてください。</li></ul>',10))])}const m=i(h,[["render",u],["__file","exceptions.html.vue"]]),x=JSON.parse('{"path":"/jp/advanced/exceptions.html","title":"よくあるプログラム例外","lang":"ja-JP","frontmatter":{"headerDepth":2,"icon":"iconfont icon-warn","category":["FAQ"],"order":2,"comment":false,"description":"Snap Hutao は特定のエラーを示すために特定のエラーコードを使用します。使用中にプログラムエラーが発生し、エラーコードが表示された場合は、このページで検索してみてください。","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/exceptions.html&has_description=False","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/exceptions.html"}],["meta",{"property":"og:url","content":"https://hut.ao/jp/advanced/exceptions.html"}],["meta",{"property":"og:site_name","content":"スナップ胡桃"}],["meta",{"property":"og:title","content":"よくあるプログラム例外"}],["meta",{"property":"og:description","content":"Snap Hutao は特定のエラーを示すために特定のエラーコードを使用します。使用中にプログラムエラーが発生し、エラーコードが表示された場合は、このページで検索してみてください。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/exceptions.html&has_description=False"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2025-01-12T04:59:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/exceptions.html&has_description=False"}],["meta",{"name":"twitter:image:alt","content":"よくあるプログラム例外"}],["meta",{"property":"article:modified_time","content":"2025-01-12T04:59:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"よくあるプログラム例外\\",\\"image\\":[\\"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/exceptions.html&has_description=False\\"],\\"dateModified\\":\\"2025-01-12T04:59:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/jp/rss.xml","title":"スナップ胡桃 RSS Feed"}]]},"headers":[{"level":2,"title":"Return Code: 2002","slug":"return-code-2002","link":"#return-code-2002","children":[]},{"level":2,"title":"Return Code: -10001","slug":"return-code-10001","link":"#return-code-10001","children":[]},{"level":2,"title":"状態：1034 検証失敗","slug":"状態-1034-検証失敗","link":"#状態-1034-検証失敗","children":[]},{"level":2,"title":"HttpRequestException メタデータ検証ファイルのダウンロードに失敗しました","slug":"httprequestexception-メタデータ検証ファイルのダウンロードに失敗しました","link":"#httprequestexception-メタデータ検証ファイルのダウンロードに失敗しました","children":[{"level":3,"title":"ConnectionError","slug":"connectionerror","link":"#connectionerror","children":[]},{"level":3,"title":"403 / 404 / 418","slug":"_403-404-418","link":"#_403-404-418","children":[]},{"level":3,"title":"502","slug":"_502","link":"#_502","children":[]}]},{"level":2,"title":"653366069 リクエスト例外","slug":"_653366069-リクエスト例外","link":"#_653366069-リクエスト例外","children":[]},{"level":2,"title":"リソースのダウンロードに失敗しました","slug":"リソースのダウンロードに失敗しました","link":"#リソースのダウンロードに失敗しました","children":[{"level":3,"title":"Received an unexpected EOF or 0 bytes from the transport stream.","slug":"received-an-unexpected-eof-or-0-bytes-from-the-transport-stream","link":"#received-an-unexpected-eof-or-0-bytes-from-the-transport-stream","children":[]}]},{"level":2,"title":"必要なモジュールを検索中に問題が発生しました","slug":"必要なモジュールを検索中に問題が発生しました","link":"#必要なモジュールを検索中に問題が発生しました","children":[]},{"level":2,"title":"アプリケーションのインストールに失敗しました。エラーメッセージ：内部エラー 0x80073D05","slug":"アプリケーションのインストールに失敗しました。エラーメッセージ-内部エラー-0x80073d05","link":"#アプリケーションのインストールに失敗しました。エラーメッセージ-内部エラー-0x80073d05","children":[]},{"level":2,"title":"0x8007007E または 指定されたファイル/モジュールが見つかりませんというメッセージが表示される","slug":"_0x8007007e-または-指定されたファイル-モジュールが見つかりませんというメッセージが表示される","link":"#_0x8007007e-または-指定されたファイル-モジュールが見つかりませんというメッセージが表示される","children":[]}],"git":{"createdTime":1736657961000,"updatedTime":1736657961000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":2,"url":"https://github.com/Masterain"},{"name":"Mikachu2333","username":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":1,"url":"https://github.com/Mikachu2333"}]},"readingTime":{"minutes":1.63,"words":490},"filePathRelative":"jp/advanced/exceptions.md","localizedDate":"2025年1月12日"}');export{m as comp,x as data};
