import{_ as m,c,f as a,b as r,d as n,a as t,e as o,r as s,o as h}from"./app-B417jO5j.js";const d={};function g(B,e){const p=s("Tabs"),u=s("RouteLink");return h(),c("div",null,[e[18]||(e[18]=a('<h1 id="米游社-mihoyo-bbs-複数アカウント切り替え" tabindex="-1"><a class="header-anchor" href="#米游社-mihoyo-bbs-複数アカウント切り替え"><span>米游社（miHoYo BBS）複数アカウント切り替え</span></a></h1><div class="hint-container important"><p class="hint-container-title">重要</p><p>この翻訳はGoogle Geminiモデルによって作成されたものであり、PRによる修正を歓迎します。</p></div><div class="hint-container tip"><p class="hint-container-title">ヒント</p><p>Snap Hutaoは、中国大陸版のmiHoYo BBSである<strong>米游社</strong>と、国際版フォーラムである<strong>HoYoLAB</strong>のアカウントをサポートしています。HoYoLABは、中国大陸からのネットワーク接続をデフォルトでブロックするため、Snap Hutaoソフトウェアは、この制限を回避することができません。</p><ul><li>このドキュメントで説明するアカウントの切り替えは、ゲームデータを取得するための<strong>米游社 / HoYoLABアカウント</strong>であり、<strong>原神ゲーム内のアカウント</strong>ではありません。</li><li>この機能を使用する前に、公式の米游社アプリを使用してアカウントにログインし、米游社機能を初期化する必要があります。 <ul><li>Snap Hutaoにログインしたアカウント名が「user_123456789」のような形式である場合、初期化されていない可能性があります。</li></ul></li></ul></div><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ZhnkRl1g6e0tz18y9_!!1797064093.png.png_.webp" alt="多アカウント管理サンプル" loading="lazy"></p><p>プログラムのメインインターフェースの左下、設定ボタンの上にアカウントメニューがあり、Snap Hutaoにログインした米游社アカウントを管理できます。表示されるパネルでは、米游社またはHoYoLABアカウントを追加できます。ログイン方法は類似しています。</p>',5)),r(p,{id:"38",data:[{id:"米游社（miHoYo BBS）携帯電話認証コードログイン"},{id:"米游社（miHoYo BBS）QRコードログイン"},{id:"HoYoLAB パスワードログイン"},{id:"HoYoLAB ソーシャルメディアアカウントログイン"},{id:"Cookieログイン"}]},{title0:n(({value:i,isActive:l})=>e[0]||(e[0]=[o("米游社（miHoYo BBS）携帯電話認証コードログイン")])),title1:n(({value:i,isActive:l})=>e[1]||(e[1]=[o("米游社（miHoYo BBS）QRコードログイン")])),title2:n(({value:i,isActive:l})=>e[2]||(e[2]=[o("HoYoLAB パスワードログイン")])),title3:n(({value:i,isActive:l})=>e[3]||(e[3]=[o("HoYoLAB ソーシャルメディアアカウントログイン")])),title4:n(({value:i,isActive:l})=>e[4]||(e[4]=[o("Cookieログイン")])),tab0:n(({value:i,isActive:l})=>e[5]||(e[5]=[t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"米游社アカウントが中国大陸版サーバーアカウントにバインドされていることを確認してください。")],-1),t("ol",null,[t("li",null,"「携帯電話認証コード」ボタンをクリックし、携帯電話番号を入力して認証コードを送信します。"),t("li",null,"認証コードを入力して確認すると、しばらくしてアカウントが追加されます。")],-1)])),tab1:n(({value:i,isActive:l})=>e[6]||(e[6]=[t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"米游社アカウントが中国大陸版サーバーアカウントにバインドされていることを確認してください。")],-1),t("ol",null,[t("li",null,"「QRコードログイン」ボタンをクリックし、QRコードの読み込みを待ちます。"),t("li",null,"米游社アプリでQRコードをスキャンし、ログインを確認します。"),t("li",null,"しばらくすると、Snap Hutaoにアカウントが追加されます。")],-1)])),tab2:n(({value:i,isActive:l})=>e[7]||(e[7]=[t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"HoYoLABアカウントが国際版サーバーアカウントにバインドされていることを確認してください。")],-1),t("ol",null,[t("li",null,"「パスワードログイン」ボタンをクリックし、アカウントパスワードを入力して確認します。"),t("li",null,"しばらくすると、アカウントが追加されます。")],-1)])),tab3:n(({value:i,isActive:l})=>e[8]||(e[8]=[t("p",null,"この方法はWebView2ランタイムコンポーネントに依存しています。",-1),t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"HoYoLABは、中国大陸からのネットワーク接続をデフォルトでブロックします。")],-1),t("ol",null,[t("li",null,"「サードパーティログイン」ボタンをクリックし、WebView2を通じてログインします。"),t("li",null,"しばらくすると、アカウントが追加されます。")],-1)])),tab4:n(({value:i,isActive:l})=>e[9]||(e[9]=[t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"Cookie情報を適切に保管し、アカウントのリスクを回避してください。")],-1),t("p",null,"STokenを手動で入力してCookieを送信してログインします。",-1),t("ol",null,[t("li",null,"目的のアプリのアイコンをクリックして「手動入力」を選択します。"),t("li",null,"有効なCookieを入力して確認すると、しばらくしてアカウントが追加されます。")],-1)])),_:1}),e[19]||(e[19]=a('<ul><li>完了すると、アカウント管理パネルでログインした米游社アカウントを切り替えることができます。 <ul><li>新しく米游社アカウントを追加した後、メインインターフェースの左下にあるアカウント切り替え機能で、新しくログインしたアカウントを手動で1回クリックして、使用状態に設定する必要があります。</li><li>アカウント管理メニューで、対応するアカウントのCookieをコピーしたり、Snap Hutaoからそのアカウントを削除したりできます。</li><li>プログラムが管理者モードで実行されていない場合は、アカウントをドラッグして並べ替えることができます。</li><li>ログインアカウントを選択した後、次のことができます。 <ul><li>「Cookieを更新」ボタンをクリックして、現在保存されているCookieを更新します。</li><li>「チェックイン」ボタンをクリックして、miHoYo BBSのチェックインを実行します。米游社アカウントの場合、チェックインを正常に実行するには、まずリスクコントロール状態を解除する必要があります。</li></ul></li></ul></li></ul><div class="hint-container info"><p class="hint-container-title">セキュリティに関する注意</p><ul><li><code>SToken</code>はセキュリティ上機密性の高いCookieフィールドであり、<code>SToken</code>フィールドを含むCookieを、クラウド上やその他のデータセキュリティが保証されていないデバイスに保存すべきではありません。</li><li>Snap HutaoからコピーしたCookieにはこのフィールドが含まれているため、Cookieを受け取る側に<code>SToken</code>フィールドを提供するかどうかを慎重に検討してください。</li><li><strong>Snap HutaoでパスワードまたはCookieを使用して米游社にログインする際、あなたのデータは米游社サーバーとローカルのSnap Hutaoのみで処理され、Snap Hutaoサーバーを含む第三者のサービスを経由することはありません。</strong></li></ul></div><h2 id="よくある質問" tabindex="-1"><a class="header-anchor" href="#よくある質問"><span>よくある質問</span></a></h2><h3 id="米游社アカウントのログイン状態が頻繁に無効になり、追加したアカウントが消えるのはなぜですか" tabindex="-1"><a class="header-anchor" href="#米游社アカウントのログイン状態が頻繁に無効になり、追加したアカウントが消えるのはなぜですか"><span>米游社アカウントのログイン状態が頻繁に無効になり、追加したアカウントが消えるのはなぜですか？</span></a></h3>',4)),t("ul",null,[e[13]||(e[13]=t("li",null,"アカウントの米游社Cookieを保存することでログイン状態を維持しています。",-1)),e[14]||(e[14]=t("li",null,[o("しかし、ユーザーがブラウザやその他のデバイスで"),t("strong",null,"アカウントをログアウト"),o("すると、ログイン状態を維持するCookieが"),t("strong",null,"無効"),o("になります。")],-1)),e[15]||(e[15]=t("li",null,"これにより、Snap Hutao上の米游社アカウントが起動後に自動的に削除されます。",-1)),e[16]||(e[16]=t("li",null,"この状況は、ネットワーク接続の問題によりCookieの有効性を確認できないことが原因である可能性もあるため、この状況が発生した場合は、まずSnap Hutaoを再起動してください。",-1)),t("li",null,[e[11]||(e[11]=o("2022年10月から、米游社はアカウントが危険と判断される確率を大幅に高めており、")),r(u,{to:"/jp/advanced/exceptions.html#%E7%8A%B6%E6%85%8B1034-%E6%A4%9C%E8%A8%BC%E5%A4%B1%E6%95%97"},{default:n(()=>e[10]||(e[10]=[o("アカウントが危険な状態")])),_:1}),e[12]||(e[12]=o("の場合も、Cookieが有効な状態として認識されなくなります。"))]),e[17]||(e[17]=t("li",null,"バージョン1.4.15以降では、アカウントパネルでCookieを更新することにより、ログイン状態を更新できます。",-1))])])}const k=m(d,[["render",g],["__file","mhy-account-switch.html.vue"]]),H=JSON.parse('{"path":"/jp/features/mhy-account-switch.html","title":"米游社（miHoYo BBS）複数アカウント切り替え","lang":"ja-JP","frontmatter":{"headerDepth":2,"category":["機能","チュートリアル"],"tag":["米游社","HoYoLAB","複数アカウント","チェックイン"],"order":14,"comment":false,"description":"米游社（miHoYo BBS）の複数アカウントパネル機能を使用すると、Snap Hutaoに複数の米哈游フォーラムアカウントをログインして自由に切り替えることができ、ツールボックス内で異なるアカウントを使用してさまざまな機能を利用できます。","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/features/mhy-account-switch.html","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/mhy-account-switch.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/mhy-account-switch.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/mhy-account-switch.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/mhy-account-switch.html"}],["meta",{"property":"og:url","content":"https://hut.ao/jp/features/mhy-account-switch.html"}],["meta",{"property":"og:site_name","content":"スナップ胡桃"}],["meta",{"property":"og:title","content":"米游社（miHoYo BBS）複数アカウント切り替え"}],["meta",{"property":"og:description","content":"米游社（miHoYo BBS）の複数アカウントパネル機能を使用すると、Snap Hutaoに複数の米哈游フォーラムアカウントをログインして自由に切り替えることができ、ツールボックス内で異なるアカウントを使用してさまざまな機能を利用できます。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/features/mhy-account-switch.html"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2025-01-12T04:59:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/features/mhy-account-switch.html"}],["meta",{"name":"twitter:image:alt","content":"米游社（miHoYo BBS）複数アカウント切り替え"}],["meta",{"property":"article:tag","content":"米游社"}],["meta",{"property":"article:tag","content":"HoYoLAB"}],["meta",{"property":"article:tag","content":"複数アカウント"}],["meta",{"property":"article:tag","content":"チェックイン"}],["meta",{"property":"article:modified_time","content":"2025-01-12T04:59:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"米游社（miHoYo BBS）複数アカウント切り替え\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01ZhnkRl1g6e0tz18y9_!!1797064093.png.png_.webp\\"],\\"dateModified\\":\\"2025-01-12T04:59:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/jp/rss.xml","title":"スナップ胡桃 RSS Feed"}]]},"headers":[{"level":2,"title":"よくある質問","slug":"よくある質問","link":"#よくある質問","children":[{"level":3,"title":"米游社アカウントのログイン状態が頻繁に無効になり、追加したアカウントが消えるのはなぜですか？","slug":"米游社アカウントのログイン状態が頻繁に無効になり、追加したアカウントが消えるのはなぜですか","link":"#米游社アカウントのログイン状態が頻繁に無効になり、追加したアカウントが消えるのはなぜですか","children":[]}]}],"git":{"createdTime":1736657961000,"updatedTime":1736657961000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":2,"url":"https://github.com/Masterain"},{"name":"Mikachu2333","username":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":1,"url":"https://github.com/Mikachu2333"}]},"readingTime":{"minutes":2.06,"words":617},"filePathRelative":"jp/features/mhy-account-switch.md","localizedDate":"2025年1月12日"}');export{k as comp,H as data};
