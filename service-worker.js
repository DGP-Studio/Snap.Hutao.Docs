if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>a(e,r),n={module:{uri:r},exports:d,require:t};s[r]=Promise.all(i.map((e=>n[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-fDv-n1gy.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-4gG-pjDc.js",revision:"603894850918e0d0424fa87be67b1b21"},{url:"assets/404.html-q3EqYBc-.js",revision:"a07431f4a248b58a88d447fc4acd1ab5"},{url:"assets/achievements.html-BGenQ3qD.js",revision:"0ebc5e6c790ea438a20227721d9bb27e"},{url:"assets/achievements.html-EoJGkD1B.js",revision:"75eab6790f6d5e7f011445af2520df05"},{url:"assets/achievements.html-FEeZm1tj.js",revision:"d5a628ef894918db633fec5d88e12257"},{url:"assets/achievements.html-GpJsK2Tr.js",revision:"13a76d7e8cfcf1bd939c185ee15085f9"},{url:"assets/app-iRW-pLH-.js",revision:"00f15b72f146283c0681fbeb41e3417d"},{url:"assets/bug-report.html-aY2x-FN5.js",revision:"cdc39d1ae597168004ffecbec46ca1aa"},{url:"assets/bug-report.html-CDoV5ws1.js",revision:"0b90cc93185ccd747c1d04a2ccf8210e"},{url:"assets/bug-report.html-D88rUO31.js",revision:"88f8d914bc048d4dc2b0792ec7d6b497"},{url:"assets/bug-report.html-GByMLV52.js",revision:"c8e38afdebf323f35c1df118a51f99a4"},{url:"assets/character-data.html-88dznjTZ.js",revision:"26bb97d023b8bf081334042267a35385"},{url:"assets/character-data.html-aFTr7-tU.js",revision:"fc6617d4aacea883c4759b51e7ca5a82"},{url:"assets/character-data.html-F-yceWYK.js",revision:"f3941634724fcc4938079fa9c55a2b01"},{url:"assets/character-data.html-TcBDVHoU.js",revision:"c7f24fe2bf62b6eee38494e0dd240b84"},{url:"assets/character-wiki.html-42i6T7bY.js",revision:"8dfc2f275cfe6ccfc8159cc3ffbdb9bd"},{url:"assets/character-wiki.html-6kUoe_J6.js",revision:"c254c0d48e5fcdac79185e870835dbf0"},{url:"assets/character-wiki.html-qH3smAaz.js",revision:"1443ba66ed1779be324a5676b1add810"},{url:"assets/character-wiki.html-xqhZZ1Ct.js",revision:"1deb33e3d10ddbe0c544674ef13fce81"},{url:"assets/community.html-6Oezc6i1.js",revision:"c48941c57445f24f36d123a5f0077bf9"},{url:"assets/community.html-au0iDdmI.js",revision:"361317b01ad15ec37af7ff149edd4476"},{url:"assets/community.html-hpdQq6kL.js",revision:"580c0fc28455d86d013636b70a93fa66"},{url:"assets/community.html-V4bxY1Qh.js",revision:"044388d4b7b8152ac5df304c080d0cc7"},{url:"assets/contribute.html-fC5H4A5G.js",revision:"204b515728553ce1d712a01e2c249605"},{url:"assets/contribute.html-fy2w3CN3.js",revision:"7cec332328b8e4bc244624e4cd738bb1"},{url:"assets/contribute.html-onOVELht.js",revision:"44729c270c30dd023286c542d1ff8e41"},{url:"assets/contribute.html-QRBrzrly.js",revision:"18599b25749263485f64f72421a43ddf"},{url:"assets/dashboard.html-CsJaTyr9.js",revision:"4f61da7b47cc877825b939ca85ef9c21"},{url:"assets/dashboard.html-DAqEngA2.js",revision:"46f12eac34790254b44be30985367c76"},{url:"assets/dashboard.html-evrqHpOu.js",revision:"b27302fb32b329cb39cfe04ac483c759"},{url:"assets/dashboard.html-WN_gXrkS.js",revision:"196a6ca2646b2292ace1ae77cee8b4d0"},{url:"assets/dependency.html-69RDkzrx.js",revision:"e669ebecaa985c9836b7cbbe1a3b7efa"},{url:"assets/dependency.html-9jlTIvFJ.js",revision:"e8577918470c24e6896599ffc443359e"},{url:"assets/dependency.html-TIUqo6KO.js",revision:"e038039fbb7a4f49d87c10b5ff3b2274"},{url:"assets/dependency.html-W_RBZ6cq.js",revision:"e0ca54767e52943259948c025ecf3d67"},{url:"assets/develop-plan.html-2JvJo3Fv.js",revision:"920dedcdaefc7f9644723ad6e11b91b2"},{url:"assets/develop-plan.html-beNaLXmr.js",revision:"4b8148042dbcb17639ced0706575264a"},{url:"assets/develop-plan.html-HvVcaqs8.js",revision:"0ea5475c971b1fa3c7eac3c95d82c901"},{url:"assets/develop-plan.html-uROCCxVw.js",revision:"9070fb1ed188e5fa1c8efa2619e90818"},{url:"assets/digitalocean-horizontal-0PPkcH8N.js",revision:"eaa4cbd043bf24493eda53d39fbaf796"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/exceptions.html-74TnLfgb.js",revision:"9368be151c00c099aee438ca37267dd6"},{url:"assets/exceptions.html-7V3OyAoi.js",revision:"968828e74ee284108dd0e46d80800d01"},{url:"assets/exceptions.html-i4yo7ffa.js",revision:"fe972e8c932f2355356f8dcac9ffcbeb"},{url:"assets/exceptions.html-WEeWsWXD.js",revision:"bedcd82d5785d559a0fc61856a380ccb"},{url:"assets/FAQ.html-5R-1j01E.js",revision:"dee0c9854d3a79e051cc52f64d85107c"},{url:"assets/FAQ.html-klH1035J.js",revision:"a95c650ddbd61b796ede5fe06540fa9d"},{url:"assets/FAQ.html-XJ25-fVI.js",revision:"8eea83eda5f2cb35b256f02a6bcfb3ad"},{url:"assets/FAQ.html-Xj9cy9x4.js",revision:"85d981c1081e1f75f102f9bbb86676f2"},{url:"assets/Gacha-system-and-export-principal.html-_QlA6oLx.js",revision:"ce641ab3fb44cf7d3c118e52e2e9e4b7"},{url:"assets/Gacha-system-and-export-principal.html-bb9ckhuH.js",revision:"37d0ee5cddd33847dc6173b8cbdeb7a6"},{url:"assets/Gacha-system-and-export-principal.html-FY10vDAg.js",revision:"c294c2c93b1030af939992f5cac028c5"},{url:"assets/Gacha-system-and-export-principal.html-Gg5Ig-ul.js",revision:"37d0ee5cddd33847dc6173b8cbdeb7a6"},{url:"assets/game-launcher.html-EEkI6bcX.js",revision:"9d3805a99677586410e29b91e40f0c9f"},{url:"assets/game-launcher.html-sRMmbXxi.js",revision:"71f1999059b8cd19b382618e3b19e93e"},{url:"assets/game-launcher.html-uweDAArh.js",revision:"12c080905636496b224757904fb3862a"},{url:"assets/game-launcher.html-wMe3Z8aG.js",revision:"d88dede5d7c1e8516de450bc68f44ff1"},{url:"assets/get-stoken-cookie-from-the-third-party.html-016TLeMK.js",revision:"ebefc71d6497533a01e985f70c5cb7f2"},{url:"assets/get-stoken-cookie-from-the-third-party.html-3nVu0sK9.js",revision:"48059663f453f004ae4149f5c79744bb"},{url:"assets/get-stoken-cookie-from-the-third-party.html-le9Yn2AH.js",revision:"dc026647681da97901bf0668ea77dd31"},{url:"assets/get-stoken-cookie-from-the-third-party.html-nj3RNO6G.js",revision:"b1c773e5293b81edc13e3518a8126ec3"},{url:"assets/giscus-08zh9c_o.js",revision:"7a355a6881a3c86839ddda0adf6c24cd"},{url:"assets/hutao-API.html-5AYyzGHC.js",revision:"62e473ac45365d093a8bd9452e67243c"},{url:"assets/hutao-API.html-eLGzqWbk.js",revision:"bc3312351c92dcd9ce513305c853dae9"},{url:"assets/hutao-API.html-SATRbDit.js",revision:"a4422c2abec4190435b4f96fa03f5b3c"},{url:"assets/hutao-API.html-U6Jkgmv5.js",revision:"758919d365aca0c710fab12cd937c3b2"},{url:"assets/hutao-settings.html-7jYmDbJM.js",revision:"5a49038d6e41a095c6a58534b035b254"},{url:"assets/hutao-settings.html-CqUdLRT_.js",revision:"cb5fe502c022604c20df1164c9cb854c"},{url:"assets/hutao-settings.html-dXxyUWYc.js",revision:"0944624b2d945af2c19c14ef0e08d839"},{url:"assets/hutao-settings.html-EovZorV3.js",revision:"c4970a98d492b81966cd88e157b439df"},{url:"assets/i18n.html-_2gLw7kP.js",revision:"baa9fa66b31c0976d12bc702842da205"},{url:"assets/i18n.html-3SnW2h-6.js",revision:"c4b1d2626298dff9d345783c66c1b9a8"},{url:"assets/i18n.html-jfy_7nWp.js",revision:"39d030a946fecb8aef4d453bef626d93"},{url:"assets/i18n.html-vszHHEjE.js",revision:"217e91e5df3addfdd2bb5de88b4ea3f4"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-0zjD8nup.js",revision:"dae3bc54208f520d14dc01657728c9c3"},{url:"assets/index.html-4XN6CQE3.js",revision:"d16656473fcbada18e26d698e5e54812"},{url:"assets/index.html-5eh6BdsE.js",revision:"e621592ca8db2e1f7b19ac0540207569"},{url:"assets/index.html-8R5L0P8n.js",revision:"0154327f01966e8f842d7338dbff256d"},{url:"assets/index.html-eFKAasYZ.js",revision:"663a7aa0a7ed31e4f7592730b456d6cc"},{url:"assets/index.html-egqgo_C0.js",revision:"3c86cfbeb9b9970112d38930c27ea78c"},{url:"assets/index.html-eiW-S-IJ.js",revision:"ba6b856e2f62721ca48ef98e73646f01"},{url:"assets/index.html-fC9ydAX5.js",revision:"ab8e0c40d597d1790fd358dc0a723693"},{url:"assets/index.html-Hc_Fw6XS.js",revision:"7eec85a0ceb781d1c1b2dbeedb27e09d"},{url:"assets/index.html-jpssQeqB.js",revision:"c0aea4de7b8ffe80dc04dd0867a69184"},{url:"assets/index.html-k-nn-t5G.js",revision:"dcd77d6179cb0617a6fc8724ed2af99c"},{url:"assets/index.html-lSsNbtWJ.js",revision:"c8ab57eab23c38f8de4524c447b0dc4f"},{url:"assets/index.html-oRVsEwog.js",revision:"bf3c1c35c8edfea73bfa5e16c1ceb897"},{url:"assets/index.html-PFNmP-SQ.js",revision:"67a8250ee00244cae7e7f2224f5b87f4"},{url:"assets/index.html-Q3FktEOE.js",revision:"a77ba6e2587e6102c09149d664581e02"},{url:"assets/index.html-qS1IrKdH.js",revision:"bef8376f23b11d19522577dcb95f9852"},{url:"assets/index.html-rhq57SJB.js",revision:"fe482c1e4bba74e615a52b15f4909db2"},{url:"assets/index.html-s_06k8a6.js",revision:"b07598a8279673283272637bfe63e2c3"},{url:"assets/index.html-sP6536fq.js",revision:"7ce152f576a76d0b447d3714fd2e9626"},{url:"assets/index.html-tdz2bHus.js",revision:"08903a5b5cb8ccb1cd6a405a609c06f6"},{url:"assets/index.html-u7dhWj6K.js",revision:"8f665d0443744369b1cd04a7ef359754"},{url:"assets/index.html-UuFiAOfM.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-VnxRTW00.js",revision:"3cd30b30c5382384e37ce024c2ac9aa5"},{url:"assets/index.html-wiOOIcB4.js",revision:"0db4be72d0aaad7169cb4161adc617c9"},{url:"assets/index.html-Y3XJotmy.js",revision:"8e6c6fcb231bb32e1edbab3d575b033f"},{url:"assets/index.html-yi834-_B.js",revision:"40c77e215dbd79ccf26bcfcb183c7aa7"},{url:"assets/known-issue.html-AsD45-6w.js",revision:"67ee4533cb4264ff960dead3eae34430"},{url:"assets/known-issue.html-aYziY4kk.js",revision:"1f44acbcb5824f5ca2e57cbdd45cfee0"},{url:"assets/known-issue.html-jaZbVyKU.js",revision:"6da307ff710d3cc01734616dd22215db"},{url:"assets/known-issue.html-xZhbmmtK.js",revision:"2477a2e8cec3fe145c1f586abdab2efe"},{url:"assets/menu.html-gYxTWwFt.js",revision:"4fadc5124afa57f279e16beb5da8f795"},{url:"assets/menu.html-hPxn-whc.js",revision:"1289052c0897a88c8e6a777f0932cc8e"},{url:"assets/menu.html-S44imuXb.js",revision:"b2d035a231c36c4ff6c791a4d255ed0a"},{url:"assets/menu.html-Wsg8Gzx_.js",revision:"62ca76b6c2b49d2f3e581153cd6d246b"},{url:"assets/mhy-account-switch.html-HtZbLmcS.js",revision:"9dfcdd390e1a7f17d853c217e42781ee"},{url:"assets/mhy-account-switch.html-oS1mua50.js",revision:"1cfc09dffa80ba477456c322f5b2a8c2"},{url:"assets/mhy-account-switch.html-U67zBViz.js",revision:"cd64d7c7287848c2efae0443ba2db1f5"},{url:"assets/mhy-account-switch.html-YI7Ehmrv.js",revision:"a7b9508fbf561048c43b568df3ecd41c"},{url:"assets/monster-wiki.html-bDKI5-rV.js",revision:"7970433e2b9746f25307b2fa55a36772"},{url:"assets/monster-wiki.html-Bn7V_8y6.js",revision:"f93efe111b722056b5a26f34e8a0b7ff"},{url:"assets/monster-wiki.html-IU_oI1N6.js",revision:"16f8fda35bffa7a5ba4ba2c2f7c22cb7"},{url:"assets/monster-wiki.html-uh50CNOM.js",revision:"4a76b11fff2f12ae764dc366fd758825"},{url:"assets/MSEdge-7LOvFlfM.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/platform.html-3VeBGyC3.js",revision:"f4a3b4723af281c3c3146be834b362de"},{url:"assets/platform.html-4anebNjC.js",revision:"c0ebc211cf52ac74e965393d31bdc58c"},{url:"assets/platform.html-Hh866Ukk.js",revision:"89a4ccb7922e5cb9670e02ecdd58b44f"},{url:"assets/platform.html-omg3uJ6t.js",revision:"dd398daff8015c7077a039bfe01e6638"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/privacy-notice.html-GX1Wk8K5.js",revision:"ccbb4203331610ce1af193c2dd780239"},{url:"assets/privacy-notice.html-rZuf-4AO.js",revision:"a2760af798972147096754cf017bfad9"},{url:"assets/privacy-notice.html-sLqI36ij.js",revision:"2d69b4145726cc8c0a3d4c0c46710a9c"},{url:"assets/privacy-notice.html-WPwgHA0p.js",revision:"0539488f0c2a53dd37ee2e378404acb0"},{url:"assets/project.html-9-pp1ene.js",revision:"89fcb7d36dfcade362064f5272466efd"},{url:"assets/project.html-rv3NFx8u.js",revision:"c00342820c5bfabd4d9c5cfcfb90f488"},{url:"assets/project.html-VFEpC0fh.js",revision:"8b7bd376d882e29ce9bd60798ba8b388"},{url:"assets/project.html-wniM9j5o.js",revision:"65dea2e16a2399d6c2dca5d3a885c47a"},{url:"assets/quick-start.html-218-9H0l.js",revision:"53293143bdd2f31111e39f6d3e9adf68"},{url:"assets/quick-start.html-B7luNFAp.js",revision:"1ecd9aa35c4b3f79b78d1006ea3195a3"},{url:"assets/quick-start.html-hphoj2yK.js",revision:"550b1fbbcece015a73e9f67b52a3b6b6"},{url:"assets/quick-start.html-XZA88063.js",revision:"618ea59d3d46a43c44747b97d95cebc1"},{url:"assets/real-time-notes.html-g4U88Rnn.js",revision:"75519e366a37edc604af8808fff8512f"},{url:"assets/real-time-notes.html-lf8Wx1kg.js",revision:"8b78216f937b1bcab42706be284aef40"},{url:"assets/real-time-notes.html-Nehwqp3L.js",revision:"e65f142d514ee140637c5b27fef42581"},{url:"assets/real-time-notes.html-VhfuAnPC.js",revision:"77d4e7f00d1949993d1c48235abdfb02"},{url:"assets/setup.html-CgIyKzay.js",revision:"68099d21d31e096a8c34aca119f1ea7d"},{url:"assets/setup.html-CJ5PcdTB.js",revision:"9409c26e91c749ea2f74774f05f3e6cb"},{url:"assets/setup.html-i2Hqark2.js",revision:"29faf34d3d34b295983b32617e7e13d7"},{url:"assets/setup.html-J4NZfre0.js",revision:"6f53b9f1930e2cac3d641fc5ec228489"},{url:"assets/side-load.html-555fTP7L.js",revision:"d3123e3e80faa5a4ba2f51acb5b018b3"},{url:"assets/side-load.html-nUdICzu_.js",revision:"0415aa8e51f3730757e450a47b30d441"},{url:"assets/side-load.html-TmJBx5Co.js",revision:"695b8b0af033864db6118de7967b39e8"},{url:"assets/side-load.html-UBVJFFRf.js",revision:"695b8b0af033864db6118de7967b39e8"},{url:"assets/star-request.html-FZ_t6ynS.js",revision:"5bab9fb7d27b73e501b234e0a86adfb0"},{url:"assets/star-request.html-GM5UBz3w.js",revision:"79801dfbfe99d5202323c4f6f246c0a1"},{url:"assets/star-request.html-UqW8JDHF.js",revision:"27dfdc170327f7658b49d86d88cff1c4"},{url:"assets/star-request.html-YndvCdY8.js",revision:"44c8e17274d414430f33c642a67d2515"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-Y82TrPoN.css",revision:"6d54363781d167962c3d37136131a353"},{url:"assets/symposium1.html-HaoKbAlP.js",revision:"9e38d23bebd819ee8112e2306c0f6999"},{url:"assets/symposium1.html-RhIIlJQY.js",revision:"f0fed3c132151ffa78d4d4c462077188"},{url:"assets/symposium2.html-4dNsn8Ug.js",revision:"31c87e75f810da730165172df504c565"},{url:"assets/symposium2.html-pI_wmYA-.js",revision:"4737a434d776df0d0bee1391970bb013"},{url:"assets/tos.html-GdAFVAWZ.js",revision:"26b7043f711c1b6556a5dea3e1c5e13f"},{url:"assets/tos.html-Npo571VG.js",revision:"668d37e9508582d680a270647bc68159"},{url:"assets/tos.html-wx07uttg.js",revision:"5dafb3e6053d1bb28202256ac10b36a0"},{url:"assets/tos.html-X4eCKDPQ.js",revision:"a5509330b39e17b8587d6bf82fbca7a9"},{url:"assets/uninstall.html-Dsea1afn.js",revision:"190e48a1e6df854d1719752be1a32a68"},{url:"assets/uninstall.html-eRRpPhpC.js",revision:"79bdca9323776fd73ad0d21f21437fa9"},{url:"assets/uninstall.html-H4tUyCnN.js",revision:"a4d27d8eb36ac36ae4c92b4f25674223"},{url:"assets/uninstall.html-T7NdMj4q.js",revision:"0697a5d55a1f1f81fb5e94f005dbfd98"},{url:"assets/update-log.html-Aqsw8FqS.js",revision:"d1fb59bca805852b4af33e626bbd9b00"},{url:"assets/update-log.html-e8dl2uPu.js",revision:"0e0e5c99fbcfabdd8b761a194958e56f"},{url:"assets/update-log.html-EvvweyN3.js",revision:"ff1c495278089acee138618a36b9261f"},{url:"assets/update-log.html-Pl4DAyoF.js",revision:"12dcc81a4111a565d051319fe5e44d4e"},{url:"assets/version-1-9-0-breaking-changes.html-C1MuQy3W.js",revision:"e6c7447e67571084b1ba3718a49b6623"},{url:"assets/version-1-9-0-breaking-changes.html-hTloId5d.js",revision:"2e8d7aebac46ec800d0873f4367ecadc"},{url:"assets/version-1-9-0-breaking-changes.html-MKhUwasx.js",revision:"7fc07c666c6dae7c5c371cd495164b12"},{url:"assets/version-1-9-0-breaking-changes.html-qW-6qVWi.js",revision:"39e357e37ab8b4ec5b05215c5a9775c6"},{url:"assets/weapon-wiki.html-Dwp9GhFA.js",revision:"49f602a411138efd8ce35cfa6c50886c"},{url:"assets/weapon-wiki.html-ey8iMQEv.js",revision:"108fac5ad4e6d04d64669fc073fd3e68"},{url:"assets/weapon-wiki.html-iBsC8SMN.js",revision:"51209628fcde296b064ffbe601d6f9a9"},{url:"assets/weapon-wiki.html-NhaQV8xn.js",revision:"9fcc3412dd2c6e3c6585e894b6fae4d8"},{url:"assets/wish-export.html-9ZY4SquF.js",revision:"01bf2ff67ff72b04229d816a57275e31"},{url:"assets/wish-export.html-F3M0LGWn.js",revision:"8f0b6564f94740140a9ae4b2656d1438"},{url:"assets/wish-export.html-S4lUDaG5.js",revision:"e94740d52a7512ddfd9df61af8db93dd"},{url:"assets/wish-export.html-XyT0PGAh.js",revision:"2d0cac968845f5bc436e697f71a0739c"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"49cc4e244d965983787a97112c3bc60d"},{url:"404.html",revision:"2311f39e957ccd6e77fb554a0ce84316"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
