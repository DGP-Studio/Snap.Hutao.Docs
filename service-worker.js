if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>a(e,c),f={module:{uri:c},exports:d,require:t};s[c]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-84c915bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-ClcdLo_m.js",revision:"cd1473e13a328e923dcd5a39d44bd60f"},{url:"assets/achievements.html-C9yhgmB4.js",revision:"33408ab742064b08552f93041893508d"},{url:"assets/achievements.html-Dlec3_Cg.js",revision:"8fe68f2678b2d462e21bbdc31bc2145e"},{url:"assets/achievements.html-m5CipnDR.js",revision:"6349efa7bf574c528df9edbcc42c741f"},{url:"assets/achievements.html-NyqwQg-z.js",revision:"1b3c1da9b551be9d0488d518edcbe6b4"},{url:"assets/app-CCVgxy6I.js",revision:"9b39748577dedb5d54a109f886079c2a"},{url:"assets/archive.html-COOFFF-2.js",revision:"c2002fd44ed1ff93fbb8827b25ed3734"},{url:"assets/bug-report.html-BaOiTdLb.js",revision:"90528e05ab1fe1bd31a575378d466303"},{url:"assets/bug-report.html-BBNpPFMw.js",revision:"0ea12e9cfa86ebea85e693c4c8b3e954"},{url:"assets/bug-report.html-C8-J-GB-.js",revision:"84b6dd142318b144a2342db3a2503468"},{url:"assets/bug-report.html-Dp3USl6h.js",revision:"703ec3ee3f29abb6e96af6a469e81d9c"},{url:"assets/character-data.html-BDewKvVc.js",revision:"31a87bea1b9d9f04cebec130c846b1c3"},{url:"assets/character-data.html-brwsbMCq.js",revision:"09fd4a73c9b21f8713d40ecbd82ca86d"},{url:"assets/character-data.html-D5B2r08u.js",revision:"5e1b7a089c61f303d0d2e5ec9d232813"},{url:"assets/character-data.html-DKGAGjWP.js",revision:"9292d7bf419cc5c719d01b53b5b9f8e0"},{url:"assets/character-wiki.html-8MO2SLuB.js",revision:"322f91bf05dcd53a5ed7e8e90c7f4835"},{url:"assets/character-wiki.html-BpHOqFZ_.js",revision:"a9f64f351c1da935d04561d0c127a292"},{url:"assets/character-wiki.html-M4ihLFPV.js",revision:"df2fe8d2b5bff4cd9067403a1c9c866b"},{url:"assets/character-wiki.html-OrHlW42G.js",revision:"f99b0569447aca967e482462160cefa3"},{url:"assets/community.html-0UhJ6uEc.js",revision:"953624729ad5f5552d6a6bf751517320"},{url:"assets/community.html-5WJJojDN.js",revision:"e14ea922bd5e2c7fc0c6a58ba8d13931"},{url:"assets/community.html-DhIXT9Tg.js",revision:"d695a6f89f7e077ffa04e8fdf319d4ce"},{url:"assets/community.html-Ft3qa3Dt.js",revision:"fe1892c3a5860717763cff82fe4e1131"},{url:"assets/contribute.html-BEQGqgih.js",revision:"f66e079e3ae8f2d95f9ab9ebe4a43881"},{url:"assets/contribute.html-BgTlhxHr.js",revision:"0fb090fbfddda4d11bdf2b7613e7f950"},{url:"assets/contribute.html-Dgv-Teqw.js",revision:"c74bf64cba89800278a1f2d972f2467e"},{url:"assets/contribute.html-DHJJq7KX.js",revision:"900d555fbc74a9ba204e218b9efc4597"},{url:"assets/dashboard.html-BmnJrEpC.js",revision:"18889e1e0ac01444a893ebef7e7ddfe1"},{url:"assets/dashboard.html-Cos_4zfI.js",revision:"9a73355e058bf64c9b2737d88b9be089"},{url:"assets/dashboard.html-DhySSzhC.js",revision:"17d294f7039f75ff47608f2bfd3ad484"},{url:"assets/dashboard.html-FPfbFHRS.js",revision:"6f7e312629e1cb62fadbf7539a8a973d"},{url:"assets/dependency.html-CTj_Z20U.js",revision:"e58697edfbd68bbcfe3717114041e6f5"},{url:"assets/dependency.html-SR7JNeI4.js",revision:"d4c33f091a5159df84ddc182bd404eb8"},{url:"assets/develop-plan.html-CkltD-sc.js",revision:"f7b3d192a95d85bcea1c199f1c90073b"},{url:"assets/develop-plan.html-CpSm0i93.js",revision:"1591abd719fb83187b82004bdf8431a0"},{url:"assets/develop-plan.html-CXSAtjpr.js",revision:"e27e5dd9f755364ba36b7d2218a04a94"},{url:"assets/develop-plan.html-v0v_cyA8.js",revision:"72e8e614b2de79b13a67452842e942d0"},{url:"assets/exceptions.html-COzocmdM.js",revision:"5d5edea62eba1bc0554a4ba98bc37a5b"},{url:"assets/exceptions.html-CyOmPEHv.js",revision:"fdab20f944da8ef2aa05ebe595cfb984"},{url:"assets/exceptions.html-DxpmDDXl.js",revision:"468042496c798c5dfc34131debe50a93"},{url:"assets/exceptions.html-Td2VAL1K.js",revision:"a7557b7a3f08b35c3c75deef2e08f326"},{url:"assets/FAQ.html-_4YxzZVr.js",revision:"3fdab135d6bba9cecdb5f84fd6376437"},{url:"assets/FAQ.html-Bp033nrB.js",revision:"e55b6c25d66f5228be63bdacacf5ef47"},{url:"assets/FAQ.html-CMWwN3QD.js",revision:"38ca4daa937dae8218c7ad1da42add47"},{url:"assets/FAQ.html-efDgFTtl.js",revision:"c806aaa5fb7e754af91cfa5d2ea57e44"},{url:"assets/feedback-center.html-DR7dG4wJ.js",revision:"7aaf2eca241ed4798ffeebd4fbfeecab"},{url:"assets/feedback-center.html-DUSjzW32.js",revision:"efe73250c67c643a44b39fc18e8f663b"},{url:"assets/Gacha-system-and-export-principal.html-BAUh63SM.js",revision:"12167b1012768aaff103dc43591e273b"},{url:"assets/Gacha-system-and-export-principal.html-CigVu4LJ.js",revision:"3e466cbd1ec47ebd75c09e3119434ea2"},{url:"assets/Gacha-system-and-export-principal.html-Dgmoxmzl.js",revision:"c119d4c37d50bf4fa48b13ba3c9cd927"},{url:"assets/Gacha-system-and-export-principal.html-lZheYdi7.js",revision:"d92a226cc150dfd4626c146d9efe205b"},{url:"assets/game-launcher.html-BadiZpd4.js",revision:"507f102e3725f009b9658b37536c1101"},{url:"assets/game-launcher.html-BT6uZuP9.js",revision:"e197a21112ca5773ed7cbd990ccfdc7a"},{url:"assets/game-launcher.html-D6sYFynm.js",revision:"644db62f2394d8a34421334adbbfdc60"},{url:"assets/game-launcher.html-mDuOBXW1.js",revision:"575c0b7d2fca0ab58cea5fccea95b26d"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BqpcHkny.js",revision:"1e0c579e526fd8c42cb4be1e18f5b872"},{url:"assets/get-stoken-cookie-from-the-third-party.html-CskWXazU.js",revision:"acf454eb702ca66d33eceaa1ed3db390"},{url:"assets/get-stoken-cookie-from-the-third-party.html-DUUZyDkz.js",revision:"ec4835467345e1c6530f2b19ec5bb51d"},{url:"assets/get-stoken-cookie-from-the-third-party.html-hKEpPdYk.js",revision:"c97e7ec06d54c03f8866b962aff32e02"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/hutao-API.html-C-vpBad_.js",revision:"cf4d01325616450dbaa5b12968761099"},{url:"assets/hutao-API.html-CDiUvjey.js",revision:"c7cbd91bd6c1d571e99cb0b58bfa33f4"},{url:"assets/hutao-API.html-Dn-ndR76.js",revision:"f8ad06720b6a36a596e09fb5c372ba90"},{url:"assets/hutao-API.html-DwG9COoh.js",revision:"7fce71dc435e249351e28723e5c5cbc3"},{url:"assets/hutao-passport.html-B5bmfOwz.js",revision:"c458e613f122f68e54cfd90cdbca8935"},{url:"assets/hutao-passport.html-imWJJMuw.js",revision:"e592ec77e529f171cfc1da583a375195"},{url:"assets/hutao-settings.html-DCcEj3iV.js",revision:"bf8840c0af344d8e555f2745261ea294"},{url:"assets/hutao-settings.html-DcFUl0uq.js",revision:"6fe902ebb64ca0e38c5273cb05c958f9"},{url:"assets/hutao-settings.html-DH_i3leO.js",revision:"8aaa2436b7855c132154ed70bb6bf7eb"},{url:"assets/hutao-settings.html-DsMHI-kS.js",revision:"39f96a187f9308e9982f1ceef18b3e73"},{url:"assets/i18n.html-CEJlFwE8.js",revision:"a606ea1697507214aa3be15793a6388a"},{url:"assets/i18n.html-CruMfyPI.js",revision:"0560d9aaea7a8f98f140f49a32571e96"},{url:"assets/i18n.html-DXfmnYdS.js",revision:"eb639cf7d2c4823de38e09a102508dd1"},{url:"assets/i18n.html-FWajEohA.js",revision:"9ac780b0bc22fc785cc19ac67f1150f3"},{url:"assets/index-DjpUunl4.js",revision:"88c96b6a700e769cb4c89ac6729a36dc"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-4KCHbgC0.js",revision:"b6d5e7d1b286a77586224c6ca1af4cfc"},{url:"assets/index.html-79nW91Bu.js",revision:"c515bbb6af318e13482f9ec95684f896"},{url:"assets/index.html-87-jm7uZ.js",revision:"c09af4b4452336607e9cabda438397f4"},{url:"assets/index.html-B7JrMUZT.js",revision:"71f08798bdb1764e618dd454c0c093fd"},{url:"assets/index.html-Bqeoqs0x.js",revision:"4868c3fb04dc1b3ba5badabdbe61f652"},{url:"assets/index.html-BRqwnmLq.js",revision:"c101e3faaf85c6e0b4e0852b7aebd9a1"},{url:"assets/index.html-BUHNwL7C.js",revision:"c4bc8124260b3306e0c0848be2fc9bd8"},{url:"assets/index.html-ByRpW7PB.js",revision:"19f828445fe952ecb5d38ffb5c3f90f0"},{url:"assets/index.html-C1l8Pi_w.js",revision:"3dbb186ecb477499b80679899c033ec4"},{url:"assets/index.html-C3SJw-VC.js",revision:"04d14b73873ff11d3563350c1d38e255"},{url:"assets/index.html-CfFosrWc.js",revision:"3a74ac0bf9435035979382fc95098553"},{url:"assets/index.html-Cftv31gZ.js",revision:"3bbb54d8871d2795507b948efa1298da"},{url:"assets/index.html-CPrqrGXb.js",revision:"c4d4fd8ac23a217898e1e386ab84cea4"},{url:"assets/index.html-D-r-n4KF.js",revision:"bed5f95fdc1d7e0a3b8df5d0f6d0aac1"},{url:"assets/index.html-D0ffVAGH.js",revision:"73900b5e7a95e71e57738bfaf8967bb4"},{url:"assets/index.html-DHmnTM-6.js",revision:"79ecd13f54e14939d2d1e7d0585f84a5"},{url:"assets/index.html-DHUKGG_d.js",revision:"fa5167ddd6373bc5605e295c63ef7736"},{url:"assets/index.html-Dkp0_MRa.js",revision:"8337510fdb3d4eb141e3ad947a0daa64"},{url:"assets/index.html-DSN4lEd5.js",revision:"0e9e66727a86c4d06bf85efe2b5869f7"},{url:"assets/index.html-L8z1mSjx.js",revision:"1ba926b69a4ed9a4a53326cb4bbe8cd8"},{url:"assets/index.html-lVSq2R0E.js",revision:"f6d858921cd42421d7f613f68dac3c1b"},{url:"assets/index.html-qaKGnUp7.js",revision:"5e9e9a78480c69045edd69c17fa275b4"},{url:"assets/index.html-rShLYKbs.js",revision:"e9956a6683361cbaca4c5a0b8db2f8a1"},{url:"assets/index.html-w6UISIqf.js",revision:"0796d88011cd5a52434b246f2e9a28f2"},{url:"assets/join.html-BkGc3o9h.js",revision:"44da160239e2c19bfa3e79842f1b0b48"},{url:"assets/join.html-Du7MJhx4.js",revision:"dfc2912f70ee2211576ebde2c2519d8a"},{url:"assets/join.html-Pe1cANSy.js",revision:"81bf3c3207396ff72a30d099cd7215ec"},{url:"assets/known-issue.html-BXeKzJ7L.js",revision:"0c59c1d9f9a79b2049fc763c8bc5076f"},{url:"assets/known-issue.html-DOfB6iQq.js",revision:"2df8fbecab6a55065c65b02292347fab"},{url:"assets/known-issue.html-DutTacul.js",revision:"cfd0335aae78eb06f56c719747ca3c0f"},{url:"assets/known-issue.html-KKTynBgG.js",revision:"a3f64b35128404cdc03e856a1cb44b33"},{url:"assets/latest.html-BKRiCJkB.js",revision:"c9b0b51e61f5b8f1cdff890ef6b19733"},{url:"assets/latest.html-DvbXVh7r.js",revision:"d09d3eaa7b412a13778097e410d4bf56"},{url:"assets/loopback.html-BW8Vl6iY.js",revision:"7ff3ebd6232d932f0406ac11ff8a0b57"},{url:"assets/menu.html-BGHVfev3.js",revision:"7e1f258f17fd27215572d5cbd08c1b14"},{url:"assets/menu.html-BO3aKoQJ.js",revision:"0f46801865413b3602c29171f19e8ad0"},{url:"assets/menu.html-DkMyer6w.js",revision:"fa5eb8820998b6344193728f0613c301"},{url:"assets/menu.html-lLnII8wV.js",revision:"5fe2ea8ceb538cd155c0bee20f6d7725"},{url:"assets/mhy-account-switch.html-D2ObIDju.js",revision:"29bb926d364067c40706738247c7f751"},{url:"assets/mhy-account-switch.html-DdHI_tmh.js",revision:"f87f0942bfa81beebf60c28073d6eef8"},{url:"assets/mhy-account-switch.html-dRlGIvso.js",revision:"dff5a1ed525b1d753a8dfe65224954e5"},{url:"assets/mhy-account-switch.html-zN-NLbOv.js",revision:"b94e4b6e418e0c951f0a62625ec9b92a"},{url:"assets/monster-wiki.html-B_L9YGkT.js",revision:"33a6c711c5b73029c7c620fb7a960e96"},{url:"assets/monster-wiki.html-BSl5xIsu.js",revision:"e63a49d53911d8320945a0014bdf3a07"},{url:"assets/monster-wiki.html-BW9UpP2V.js",revision:"8d09964e8437725076822149ef978a67"},{url:"assets/monster-wiki.html-CmiAz9XW.js",revision:"96f23f6349d7b632587e832e6e908235"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/platform.html-Bgd9EhXd.js",revision:"1608703cf9613586f11e4d10d89671cd"},{url:"assets/platform.html-BnU-bcC1.js",revision:"015492aba9697090391813cbaf97515d"},{url:"assets/platform.html-CJW49Zxi.js",revision:"e739cf082b1de1a5934d300cf3b09fe2"},{url:"assets/platform.html-D5WMay06.js",revision:"5caec728f65c83fa8cfb13a01c086955"},{url:"assets/privacy-notice.html-B0w8Buf1.js",revision:"dc69d976fdb1509390c997e78689f122"},{url:"assets/privacy-notice.html-CLLf4KJ0.js",revision:"860440c82876025f58a4b0a48e2752f9"},{url:"assets/privacy-notice.html-DsOz2SGH.js",revision:"e53ec6f0578bf6f96da5f45bd18b9ebb"},{url:"assets/privacy-notice.html-KWDiGUYO.js",revision:"26dc5af50956d89b69d24f9b9e66bb46"},{url:"assets/project.html-Cgde5KBJ.js",revision:"ac4d109026f46cfe179e21528cb760cc"},{url:"assets/project.html-CkAtoD41.js",revision:"37ab46da5cf7859149549be791ea9961"},{url:"assets/project.html-DEYvwtti.js",revision:"80d1d4cbdd12791169573d43ea8cdac5"},{url:"assets/project.html-nDC0KgaQ.js",revision:"1ea661ce7a8d7570b1f1b84b958a9c29"},{url:"assets/quick-start.html-C5lcacH7.js",revision:"cd27b75351fcd623b3631015c15c5c6c"},{url:"assets/quick-start.html-CsvP39QT.js",revision:"1d8d91bca4e5500f5bf2f28a14802fcc"},{url:"assets/quick-start.html-D0tdJ94V.js",revision:"4e5d9eef3324c59fd2b2c61d42b8f223"},{url:"assets/quick-start.html-DI-_vV-G.js",revision:"b2832fdbb47e7de03d64bbd848536e71"},{url:"assets/real-time-notes.html-C_n2VR9w.js",revision:"123ca80343d1ff7ad32f2015739c4245"},{url:"assets/real-time-notes.html-DahBUk8r.js",revision:"51a17077679033e39363ff6b685100d5"},{url:"assets/real-time-notes.html-DC8Dvpz9.js",revision:"112c3358261644adc4c5317f339e3d55"},{url:"assets/real-time-notes.html-senLRYNZ.js",revision:"0133969eda99d9709d90dcb6819dcdbf"},{url:"assets/setup.html-B9DAHpMG.js",revision:"c10be23c23289208e926365538e8f7c7"},{url:"assets/setup.html-BJ1j9zAg.js",revision:"c19ca06a647414e62340b368e1b53589"},{url:"assets/setup.html-C6z0DLTB.js",revision:"e1b9aac218d3171a747851dcffd9bc73"},{url:"assets/setup.html-DQaEx7Yd.js",revision:"816e15b9c81c6be58e069c3acc3a581d"},{url:"assets/setupDevtools-7MC2TMWH-3AXOttmD.js",revision:"c71aad73fc8cafec3bdcaa7767f9979e"},{url:"assets/side-load.html-B5ANg8lt.js",revision:"349d835088ef9f08a91510ff67cace8d"},{url:"assets/side-load.html-BT2z9fm3.js",revision:"876712811442e429ef08e2adf122fa2f"},{url:"assets/star-request.html-B0PhnnkN.js",revision:"319bfdc7ebba7d0f5705710182f30a9b"},{url:"assets/star-request.html-CEHk1NCO.js",revision:"69d367a415481afb92d929d2bf4bfe90"},{url:"assets/star-request.html-D5n_OQgi.js",revision:"09823f5fe8af6670de5830ee1bc74d87"},{url:"assets/star-request.html-OHlxOUUC.js",revision:"bd181d25e39749100acba80c18238a4e"},{url:"assets/style-Df5-9Hyv.css",revision:"75586b89cd7875cc63588cdd157ba0cc"},{url:"assets/support-us.html-BtxhMWgS.js",revision:"2c76eeef8c681da175d7ab55637d458b"},{url:"assets/support-us.html-D4nSaAqy.js",revision:"0b11020f899679f6796653cda0111e72"},{url:"assets/support-us.html-Dc2TPlf8.js",revision:"d36872d1afcfa1705e1e9149168aa46e"},{url:"assets/support-us.html-DdTJtwGB.js",revision:"d73c1566d103c656a32eb0aea7fd66d9"},{url:"assets/symposium1.html-B5CFomYW.js",revision:"b8fa58db46eeb2ac02dc4ed5c7488772"},{url:"assets/symposium2.html-Ztow6S5J.js",revision:"bc602651a5b9a726991f27e5bf44ef01"},{url:"assets/tos.html-BPil_sh-.js",revision:"f932ca317003b5f2f864f3622b85f112"},{url:"assets/tos.html-BUA8C9HT.js",revision:"25b2f1fb3125e91971c33264735589f7"},{url:"assets/tos.html-DKz3m6pW.js",revision:"22a9b878ac7a79fe4fb8ef9055528118"},{url:"assets/tos.html-DLj_R3fk.js",revision:"651c34ecb9f154993ffc7b8b48bc75e3"},{url:"assets/uninstall.html-B7NbT5_5.js",revision:"fa9fa442ba7da04c9744c31c9bab3fc3"},{url:"assets/uninstall.html-BGYrWV2C.js",revision:"27f0f880700d2cd74d53a57df46b13a5"},{url:"assets/uninstall.html-CKTmfuwr.js",revision:"da82491761b31e33d054a9c4af9a81a2"},{url:"assets/uninstall.html-DCE3rZ9G.js",revision:"30ef24ce4bfb8964623770cd674dac44"},{url:"assets/update-log.html-BaLbqL6A.js",revision:"2fdc8838b06c4b3a737c1439d0b1d609"},{url:"assets/update-log.html-BF6EzTfT.js",revision:"31dcfbdc437aa136768ba3c2892f422f"},{url:"assets/update-log.html-ddGtgZEQ.js",revision:"5ee99b1da8357bd0bfc24373db883787"},{url:"assets/update-log.html-KJblPz07.js",revision:"236795a6fb028a3682742bd14270892b"},{url:"assets/version-1-9-0-breaking-changes.html-CKs6HlOF.js",revision:"1cbd66bc0bbdc9cfeac1b7cfdb55172b"},{url:"assets/version-1-9-0-breaking-changes.html-CMq9J_YV.js",revision:"3d280d6ee7f982918afc33c5358f6af4"},{url:"assets/version-1-9-0-breaking-changes.html-CPy_P7vc.js",revision:"d2821e096105c470b0d7b0de6e6ac9e7"},{url:"assets/version-1-9-0-breaking-changes.html-D7wKTPeS.js",revision:"9982a443c211437e630e8fb5df40c474"},{url:"assets/weapon-wiki.html-C0YOwgj7.js",revision:"0cb249f07ea40a3eae27af12237e5536"},{url:"assets/weapon-wiki.html-CWbn5f4Y.js",revision:"8c571a44e0ff76caa984e24032d73dac"},{url:"assets/weapon-wiki.html-ejiafuTS.js",revision:"d671e3b049ed74083969fa6bd4f46bee"},{url:"assets/weapon-wiki.html-WkBdw5p-.js",revision:"512dec226e09016b8ce026a456eb90d4"},{url:"assets/wish-export.html-BzqvT6L5.js",revision:"5e1e1c7f8aca8b555baab58044597fb4"},{url:"assets/wish-export.html-C3Eox2tH.js",revision:"4aba9c9d468bf350d84fb0f475b343a2"},{url:"assets/wish-export.html-CaixWcd_.js",revision:"bc85ee4941bc06aa39d9fa37aa8048e4"},{url:"assets/wish-export.html-CZmTJnfc.js",revision:"53761bd66f5d1545ea84d06eccfaec4c"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"images/202409/Microsoft-logo.svg",revision:"4bd10316a77909a97d1f9853280406af"},{url:"svg/1Password.svg",revision:"5708d25efe8505cbc5e96c6d449f5642"},{url:"svg/afdian.svg",revision:"9da2c7d94a0313ac9706232c4b369a65"},{url:"svg/crowdin-core-logo-cDark.svg",revision:"f1f4a4fbdf0119336d8e75dc3c58d05d"},{url:"svg/digitalocean.svg",revision:"6dbae847fcc27d550bfa9f3539edee35"},{url:"svg/ducalis.svg",revision:"bbddb1f37e1206c0c742e22f5b609655"},{url:"svg/jetbrains.svg",revision:"95586e76f74896d783521d805f6c2881"},{url:"svg/navicat.svg",revision:"95ef31a69da150b3beba396d966ddfea"},{url:"svg/netlify.svg",revision:"cbedb0c756eb93467ce9282e89698571"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"svg/signpath.svg",revision:"9f952c652256a50fda86d0daddd03798"},{url:"svg/termius-logo.svg",revision:"4be8e7ad6c86ae83a3bf3b87ccc44c34"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"7473fb2a26fa193e7129ef7b44c8c683"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"635c813900b584f25f2eca59db5a9573"},{url:"images/202409/navicat.png",revision:"da2e6b3cd228afb814f94a5fbc112e95"},{url:"images/202501/character_develop_predict.webp",revision:"f003d4112bb2601a6400aca5df820dae"},{url:"images/202501/character_develop.webp",revision:"a85fec69c195e32034234a73fdf1c2b8"},{url:"images/202501/characters_data.webp",revision:"3f2bfa01eedebe6e9162ce5490af7558"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
