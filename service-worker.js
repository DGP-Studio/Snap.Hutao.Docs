if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const t=e=>a(e,c),f={module:{uri:c},exports:d,require:t};s[c]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1-8-5-installer-BiBVFR-v.js",revision:"cc13e2b00164710d0ed707ea46e4a8ef"},{url:"assets/404.html-BWT7Ntl2.js",revision:"57215d6ee9074ceb419a8b0cc3d16a76"},{url:"assets/achievements.html-Bg2qEcs3.js",revision:"02e84b18b341cd47a0324b43fc4b8f08"},{url:"assets/achievements.html-Bn-X6P0L.js",revision:"5eee3fc00806079dfde0177e65f609ee"},{url:"assets/achievements.html-N-fw1i1x.js",revision:"beb612b190e6d82d977d931c6e82526f"},{url:"assets/achievements.html-STj8rRM9.js",revision:"4cd194a48fb52776b3a1073699d700f0"},{url:"assets/app-BvT6gn7X.js",revision:"72dbb57407a7050ba1d8991d4f2286fd"},{url:"assets/archive.html-B_UF-hXi.js",revision:"d92a94b924af80327a4bb32432d6c977"},{url:"assets/bug-report.html-BD0uej_L.js",revision:"164433ab49d9e0580c63b909ee00f866"},{url:"assets/bug-report.html-CO2T2gdh.js",revision:"3e5b71df9504f2780189b67156ba7b32"},{url:"assets/bug-report.html-CUPxDLtL.js",revision:"8871a3e0f38c6839f28797ec13886764"},{url:"assets/bug-report.html-CwVqJ_X6.js",revision:"428cde33fe7a8bf063ed5e559bbb5717"},{url:"assets/character-data.html-BufLvYCZ.js",revision:"05d07fd0b7fb5aa253eea7649f3b7c4a"},{url:"assets/character-data.html-BxRJEy9n.js",revision:"0f404589c309fefde9f34064442760c1"},{url:"assets/character-data.html-DSE3R-yq.js",revision:"3d47eb3c3e464dd4031a8b7d7eeef325"},{url:"assets/character-data.html-usPNTAbH.js",revision:"f4ee01f906624558f86157d3186d3f71"},{url:"assets/character-wiki.html-BZV93wJB.js",revision:"aec74d28291e9d45c7f7d6f2b7348e3d"},{url:"assets/character-wiki.html-D9M6dmGB.js",revision:"820227cf031e3446e1ee018f1b1de4fe"},{url:"assets/character-wiki.html-DHY8I5F5.js",revision:"d3ff16a4ebd21076837bb0f9ff2f100a"},{url:"assets/character-wiki.html-U8U_yqbG.js",revision:"d9c0bd96e8d4bfceb486cae3d1b93511"},{url:"assets/community.html-ASdavEC4.js",revision:"e12d20fc4773f06480adce21c8af0a71"},{url:"assets/community.html-BYHLT0Gd.js",revision:"9e15c03afb67b9912039e794e4f2c4d2"},{url:"assets/community.html-CasAPLJc.js",revision:"81c1889d6108df9a9ef3db71b1bf559a"},{url:"assets/community.html-CFLwDKj_.js",revision:"dd1f941cf19706428b12db94a429dda4"},{url:"assets/contribute.html-BgrTutRa.js",revision:"e8e59c4e5854bf9d23dd3c11b5fbce33"},{url:"assets/contribute.html-BoLnmfxP.js",revision:"93e5f50439cf2bf341788d9f884bd0c0"},{url:"assets/contribute.html-D6sURUai.js",revision:"79adb714677de57de0fd23a7eb5e59ea"},{url:"assets/contribute.html-DZFJLPX_.js",revision:"59f37dcd1ca2fbac779ec8399db243d5"},{url:"assets/dashboard.html-BJZu5KwJ.js",revision:"cd0b917f560ff21157df36c7ac93d6ab"},{url:"assets/dashboard.html-C2jai4ga.js",revision:"01c7bb728ccceab671cc2922f3ef0a4e"},{url:"assets/dashboard.html-DBzRFOJz.js",revision:"c499c4b714cefba4a8c9840bf2b72469"},{url:"assets/dashboard.html-uq7h3t61.js",revision:"eeed1a14d2221f9f945b2ca7503a80c0"},{url:"assets/dependency.html-BIFA_0UT.js",revision:"88ccfb2b23c0ac83f28790138ee2461f"},{url:"assets/dependency.html-BUSEFHB8.js",revision:"85d778bed2b49c384161af60ee159c28"},{url:"assets/develop-plan.html-B6GR6ipo.js",revision:"69d193387ca30b92d2319472cfd846f5"},{url:"assets/develop-plan.html-BCd9S7pn.js",revision:"296af0d64a8ae691ddeaae3affc7bc05"},{url:"assets/develop-plan.html-CemyoYr4.js",revision:"ed36d399f94b5fb3a35db5a885b5439a"},{url:"assets/develop-plan.html-Dfp-jf7b.js",revision:"20987ed600fb7130277df5c00a595e82"},{url:"assets/digitalocean-horizontal-CWne6he4.js",revision:"6ceec52d3ddbf7537fac3f5b1edd41ae"},{url:"assets/exceptions.html-5HLHsFtf.js",revision:"f3959c1c62169c61562a7b0fd81f321d"},{url:"assets/exceptions.html-BkhFHzqg.js",revision:"7e5216eb3a45d97ecbda25bc68122a9c"},{url:"assets/exceptions.html-BTuxBvjZ.js",revision:"3ee3d9eab92d4505d2830ebcb83fdf16"},{url:"assets/exceptions.html-Cd1A_sQs.js",revision:"dcbc2a5fda69530c060376040cf10c53"},{url:"assets/FAQ.html-B08r5BXu.js",revision:"e94ac8764fa33f67ed382b646824a773"},{url:"assets/FAQ.html-CTYRxgi_.js",revision:"56746f5792e43ac2880f0249b1682ff6"},{url:"assets/FAQ.html-DeaVMfLq.js",revision:"9392ae08f6a4ce27a0786a2cc9f26cc8"},{url:"assets/FAQ.html-VJWU4l2r.js",revision:"f2e74c9aa4b9d0adde2e303e859b5f37"},{url:"assets/feedback-center.html-_agU1rVJ.js",revision:"2511686d2b2d0923800f287428c22fe2"},{url:"assets/feedback-center.html-RlqhxMXw.js",revision:"389915e32e95de084771efe952314572"},{url:"assets/Gacha-system-and-export-principal.html-55JKCr6b.js",revision:"0cacef263c658a38cbff3f7d659c08ce"},{url:"assets/Gacha-system-and-export-principal.html-CivsApIq.js",revision:"2e62f85c0ee4d4b9190ae07537809d87"},{url:"assets/Gacha-system-and-export-principal.html-D4uaPnLo.js",revision:"746de7f4e4fadfa99bc23357a0a10170"},{url:"assets/Gacha-system-and-export-principal.html-Dnt-2tc3.js",revision:"ba98f221fd2c2195ebdc320062b20976"},{url:"assets/game-launcher.html-C_ILWTt1.js",revision:"09c7b453785d3d0e56547783e0cdc8f6"},{url:"assets/game-launcher.html-C9S4jJkm.js",revision:"3096bfc6d01c3078d8e42142a4e512f2"},{url:"assets/game-launcher.html-De515aZJ.js",revision:"6c00d5dbf1ffa01104123ccc4ef1bdb3"},{url:"assets/game-launcher.html-Q0G2pJrX.js",revision:"6ba47934e885c6b174041cdca57a8edd"},{url:"assets/get-stoken-cookie-from-the-third-party.html-BmJDX6sx.js",revision:"5a69d1225229bf3cdf88a2ad56835dd3"},{url:"assets/get-stoken-cookie-from-the-third-party.html-D1yH6yTR.js",revision:"256585e5c0c24181718ed3c8761251af"},{url:"assets/get-stoken-cookie-from-the-third-party.html-DXxYpGHd.js",revision:"787978eb9ca14f593807b8e64be2c431"},{url:"assets/get-stoken-cookie-from-the-third-party.html-IOl2IoRR.js",revision:"409902b4296ab1fd8fad73dbe5ea9cad"},{url:"assets/giscus-BZxmVUME.js",revision:"1b050c6cfcaa1d2cf1aae34338c9f637"},{url:"assets/gitlab-logo-DbxlVhvV.js",revision:"8b8d75f5d0302ef1656d1c66c4d79c78"},{url:"assets/hutao-API.html-Bbk7MRsL.js",revision:"5d210e5a275c62cdc7e6b12b90d0def7"},{url:"assets/hutao-API.html-Bc_xVwUY.js",revision:"7bacca12825febc7037799d326d2974b"},{url:"assets/hutao-API.html-Bcc_hGyE.js",revision:"450a556dea139a85d915229d7d923f18"},{url:"assets/hutao-API.html-DjXZpyJZ.js",revision:"9184b99397a23707ce797395aefb30fc"},{url:"assets/hutao-passport.html-CNw7LG8Y.js",revision:"24cab0198c04d7c74bf36fb41abfc37c"},{url:"assets/hutao-passport.html-DySzrgj8.js",revision:"bc5da7993e5d5d1f83825d4812d20066"},{url:"assets/hutao-settings.html-B-y96WM8.js",revision:"cb506bb7c6463e4507dd8901436d34cc"},{url:"assets/hutao-settings.html-COwFJgOm.js",revision:"2720a7cd284d3491cfa3adfe8f376743"},{url:"assets/hutao-settings.html-Dc6fE7gQ.js",revision:"6f0ba657c6077354764df9774a0c2c33"},{url:"assets/hutao-settings.html-YVcH2ids.js",revision:"15bc656165769aecebbfb55e8a0ef549"},{url:"assets/i18n.html-BbQDlrLe.js",revision:"004a4536f8f3b36cceef9a001c172c1d"},{url:"assets/i18n.html-ByOvW2OH.js",revision:"28447300712a14c0651163d2a712c084"},{url:"assets/i18n.html-CFvCfDg9.js",revision:"7585d20756cbe744f7c53f55f085c2ab"},{url:"assets/i18n.html-DNbxGiTZ.js",revision:"22decda06f5092efabd77235d3cca5f2"},{url:"assets/index-DCs6OeCW.js",revision:"b990dd0241ea9ef16614b01d0c6ad736"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-7kUmoXRI.js",revision:"0e032f52925a0ec9c2217535a0cb7896"},{url:"assets/index.html-7wq-L9uI.js",revision:"49f5daa11d4bd3880a3056c292104fcd"},{url:"assets/index.html-B_UGxeLl.js",revision:"6bae7a1bab2c8ff7991535ef21b00ddf"},{url:"assets/index.html-B4LJttkl.js",revision:"0573c01033b8b93e5a94ad05e03ddab6"},{url:"assets/index.html-B6WMTnxG.js",revision:"9ca0f64afb82e0169d886cad16884d9b"},{url:"assets/index.html-BeKj74NA.js",revision:"d2e6f3b78e9a6918bfc9e06a7cde1c05"},{url:"assets/index.html-BhRZxw3P.js",revision:"2a8f516f3e29ca7bd441b64ada81d04a"},{url:"assets/index.html-BlR_Kq2w.js",revision:"c1b4a55c83132ffa4531759857deb2f0"},{url:"assets/index.html-Bncb0eEl.js",revision:"42d4a2e3383699e9d4c9023f8f9668ff"},{url:"assets/index.html-Bs1QU7E-.js",revision:"197385be8af8ce2fc5f5c4759a0d3dd1"},{url:"assets/index.html-CBgxRl5i.js",revision:"75c874c756f587b8b746927b5f198933"},{url:"assets/index.html-CfWh_fYP.js",revision:"5406ba39cf3ddaea7ff2bbf03694d494"},{url:"assets/index.html-CGri3Hwg.js",revision:"c161b0c685b6c4129bc10c8b3830e44d"},{url:"assets/index.html-CrH7bG01.js",revision:"38bb2930dd25431c2b2863ef2081fda3"},{url:"assets/index.html-CsBjKYp_.js",revision:"1c3d15e5648538d80adc30f88f45545c"},{url:"assets/index.html-CSGLhtBL.js",revision:"e65a64f03b5a38f2596f49f979794449"},{url:"assets/index.html-D-P9oc94.js",revision:"6e3b33c018212e79382f9013111ef190"},{url:"assets/index.html-DaIVwc_U.js",revision:"b9421fab5523190020abe9a2d89e8bbd"},{url:"assets/index.html-DBF4_T8z.js",revision:"e66d3bdabf6c8b73cd43ee101aa092d8"},{url:"assets/index.html-DrFUKnQz.js",revision:"820af3eef9171c5943e12c6c81573d9b"},{url:"assets/index.html-DuIQOIzs.js",revision:"1ff3884b9bf04fc18d3c81ccf1287d81"},{url:"assets/index.html-qjkmlVBa.js",revision:"b3012e4387896d6232eb49795fc42a9c"},{url:"assets/index.html-xjsO9KLd.js",revision:"58455ad6b5224c48b1ff1fe2258b1c5f"},{url:"assets/index.html-za9lOSJe.js",revision:"fb7ba0fefc49f7b07aef4891e31a95a8"},{url:"assets/jetbrains-RzWQj_l9.js",revision:"f1b62c45d4477d4bdc1626be6bb44dce"},{url:"assets/join.html-BWo9Kp46.js",revision:"7543c29b9a9701807d37d9864b0d2b96"},{url:"assets/join.html-GxHxrADN.js",revision:"5d091df299b3eb9abfe3e50c21e508ed"},{url:"assets/join.html-V_kdBI5o.js",revision:"805e4a5eb2604e1e01411953b3d2739e"},{url:"assets/known-issue.html-C0S-M_b2.js",revision:"df5499fe111b886e8e8b09c6a5f7d2d4"},{url:"assets/known-issue.html-Dmqj9yy6.js",revision:"87430c6fd193d4a1b9eb7b843bf1a2f2"},{url:"assets/known-issue.html-EdI_gyAS.js",revision:"5181579d96590bfb509de843f5075e2a"},{url:"assets/known-issue.html-YGvOB1cO.js",revision:"8661942d068b9eea954b5bd00348eb46"},{url:"assets/latest.html-DAbwCbEB.js",revision:"ad05443b42e81a0f40091da0095c82a4"},{url:"assets/latest.html-DmFRZXJY.js",revision:"8a32795bdf0b39acb0ec38d23074fb94"},{url:"assets/menu.html-BkuOfDN6.js",revision:"563644004537c1328e99a24892da3641"},{url:"assets/menu.html-CEqrJF5t.js",revision:"1fba654e716a9413a19097607eed5d92"},{url:"assets/menu.html-CGnbn0-i.js",revision:"93b47ab85bb358b3bafd4ce166b810a5"},{url:"assets/menu.html-gerOU6AM.js",revision:"9456df9df964074de74d47c03adae31e"},{url:"assets/mhy-account-switch.html-Cuppkb0e.js",revision:"d8fa4f9cc05728cf4793fbe2ff105104"},{url:"assets/mhy-account-switch.html-DpdnSck8.js",revision:"684c534b853be5879333f65bc9c34163"},{url:"assets/mhy-account-switch.html-DyTXLtBj.js",revision:"2a4f6b64b090967dbb133a1d89533fd8"},{url:"assets/mhy-account-switch.html-hS_oHiQ3.js",revision:"5a6fc6b5432288358693e5957634ff08"},{url:"assets/monster-wiki.html-BOF5Ngoa.js",revision:"c94edb314b3c29d8e1acdf8061ea0b6f"},{url:"assets/monster-wiki.html-Dh5Ksr_S.js",revision:"996fdb9070badac7750340ede8ca2271"},{url:"assets/monster-wiki.html-DqjTfEnb.js",revision:"dd4d9f662e2d8f2a5092d12fb1eec1d6"},{url:"assets/monster-wiki.html-XcIn4H1e.js",revision:"10c71904bb828826a48b182189b3e748"},{url:"assets/MSEdge-Bvt55oa-.js",revision:"664a8be7f006b82a3d2eac682334d154"},{url:"assets/photoswipe.esm-GXRgw7eJ.js",revision:"9252721b01cd263ae52f9296614a7ddb"},{url:"assets/platform.html-8jfWlFa2.js",revision:"ba13c2c2b7288d020a117b4a850b9072"},{url:"assets/platform.html-Bl4GTv9Q.js",revision:"5a6c58c600e085021c45b9fad1861901"},{url:"assets/platform.html-Catr5qiw.js",revision:"7b7c05a1c1fcb12bffa09a907eaca423"},{url:"assets/platform.html-CVwqkM00.js",revision:"cd85875a4b04f660f8033c5d5ab913f2"},{url:"assets/privacy-notice.html-DDLxlAxq.js",revision:"40b9c9d6e5f60040162ee3521e0a6d38"},{url:"assets/privacy-notice.html-DzxalIVP.js",revision:"9a6483ba12efab4a0ef218143bd03767"},{url:"assets/privacy-notice.html-yINOzuDl.js",revision:"e2a17e57f6ae194675f8a1f615499678"},{url:"assets/privacy-notice.html-zLGjmuCw.js",revision:"2c71b79c44d360540af595ee44d661a3"},{url:"assets/project.html-CJW7uTa5.js",revision:"52ff73f0de29fabeee3a48b49c0b285d"},{url:"assets/project.html-D86lnstP.js",revision:"5dd5444095024d9478ad88978d75acff"},{url:"assets/project.html-DC7LGmPO.js",revision:"6c0523bb1a8fac9cfec61bf9201ab27e"},{url:"assets/project.html-DprT1iYA.js",revision:"eae9f0221ff89757533c5ad9d429a308"},{url:"assets/quick-start.html-CGx5I058.js",revision:"228ec4a9c7087d00fb72f2d471d1e970"},{url:"assets/quick-start.html-Clymxz8h.js",revision:"ccdedc16a707bdd6ddd51940fdd15d83"},{url:"assets/quick-start.html-D0MtFAUv.js",revision:"7a34c158d915081045c11be8b833b986"},{url:"assets/quick-start.html-DDU3YfUb.js",revision:"8d024060f8d27b5022edab815b57a702"},{url:"assets/real-time-notes.html-BdrtATJt.js",revision:"87152e5d869aca88f95d28619dc32732"},{url:"assets/real-time-notes.html-CtcCdNdn.js",revision:"db871e70af6c7b1230138d35d168b34d"},{url:"assets/real-time-notes.html-Cve-Bysj.js",revision:"3a94e56890c10ba7398c0b287ec1a66a"},{url:"assets/real-time-notes.html-D505mE5S.js",revision:"981fa64dda69b6c60921579abea83070"},{url:"assets/setup.html-BRxIiUei.js",revision:"4cf5701bb75ff6303ec5bdeb0e40d7d0"},{url:"assets/setup.html-CCO-ul__.js",revision:"e54d2c8e031010d4cd296fa1b2c1301b"},{url:"assets/setup.html-DkstdJrx.js",revision:"8a8150c5a22aef72b0a2ac626e345e31"},{url:"assets/setup.html-P2P3SCvA.js",revision:"f9ad29d04d646cfb3f2d7ac73aaa418f"},{url:"assets/setupDevtools-7MC2TMWH-FgWanlzR.js",revision:"065bd2994fcb84e42cb5482a5826a149"},{url:"assets/side-load.html-C4E-dvdu.js",revision:"e8585ac1ffa4fc514227f9504e3f8768"},{url:"assets/side-load.html-DuxiXAYB.js",revision:"a5240c6be036f120960849ec63eedaa1"},{url:"assets/star-request.html-D_a3mjHl.js",revision:"f5477c356452a247e892426365ac0a82"},{url:"assets/star-request.html-D5tqZZB1.js",revision:"2300193c76e4795c55aa7f9cf8ecd0d4"},{url:"assets/star-request.html-Dch5nQCm.js",revision:"ffd631cd0f594ab309bf37673dde4874"},{url:"assets/star-request.html-WcbuwzPw.js",revision:"15720cf1698e717c71170f432c5c664f"},{url:"assets/style-BVMimi9V.css",revision:"af70a108ea255e9bff6ab2e66d761fcd"},{url:"assets/support-us.html-C4vfitW3.js",revision:"642a35836a3c86af31739eb4fd737f77"},{url:"assets/support-us.html-Douc4jmn.js",revision:"85e57c5c8a6aa424acb14e2a8f3bb931"},{url:"assets/support-us.html-J3wlsVps.js",revision:"00117d1e4bc2c01470154d58a3ef8290"},{url:"assets/support-us.html-rDHiogj9.js",revision:"4a77f0deb57edfa62f94c4b0b8504f0a"},{url:"assets/symposium1.html-B7gRxwmR.js",revision:"eeb3c4f1bf8674070368c8e495d35e41"},{url:"assets/symposium2.html-DV2jKQ1W.js",revision:"57997e3eb1d35aefbacd8e36fb4c9362"},{url:"assets/tos.html-CeBUtHX0.js",revision:"3a7043bb91c3eb62a73e958b54cffc20"},{url:"assets/tos.html-OgyCh-nI.js",revision:"21c9c995df68d47475bf386a491fa87d"},{url:"assets/tos.html-pU4qeLB-.js",revision:"80ddd2d3a77b47b15c8e3b171291bb5c"},{url:"assets/tos.html-Q9YXEhxK.js",revision:"70f6fde8df08acf261028b7648f71f70"},{url:"assets/uninstall.html-Br1XDtDw.js",revision:"99e573abeeed219e597541b75909a44d"},{url:"assets/uninstall.html-CJxcsKEe.js",revision:"bf74c1d9b02ac7936109ce031f9486e9"},{url:"assets/uninstall.html-CZ4lKdoj.js",revision:"4e629a29aeb37c6daefbe09fbe954cba"},{url:"assets/uninstall.html-emQ-Oq3H.js",revision:"a328e70b42f37bbbecd3bfe6907764bd"},{url:"assets/update-log.html-01V3DkPM.js",revision:"5fdf1737176db5b881a75559d83bee37"},{url:"assets/update-log.html-8ayXhmU1.js",revision:"e2449dad1370e2b8dff8474e6436f299"},{url:"assets/update-log.html-CbhYicQU.js",revision:"b28c56a9eb83044b8f0b9a7193fd4679"},{url:"assets/update-log.html-DMzdLnI_.js",revision:"e2d8c85fb079e5f5bb7c808ce423854a"},{url:"assets/version-1-9-0-breaking-changes.html-BwYYhU9J.js",revision:"1d4611fa8faf1b596957e66c2f37087d"},{url:"assets/version-1-9-0-breaking-changes.html-CaFOOkyU.js",revision:"001ad17c2107647d4ad01c10db444786"},{url:"assets/version-1-9-0-breaking-changes.html-CCbmw4Pd.js",revision:"ee32b0ced6163fe03dbcf5617fe0cf4a"},{url:"assets/version-1-9-0-breaking-changes.html-vccr73b0.js",revision:"2aa7fc478888aea05e790803ad89aacd"},{url:"assets/weapon-wiki.html-BAaeLQmt.js",revision:"fa5696ffb58400dc20bba3db5e021952"},{url:"assets/weapon-wiki.html-CjfmWtl0.js",revision:"1da07e29493f5e2c7f1de0ac804d866d"},{url:"assets/weapon-wiki.html-Dct039ed.js",revision:"668b0ad37d9126b5cad33cf8bfdbee23"},{url:"assets/weapon-wiki.html-mKUe621j.js",revision:"33f8957d77a6999c42375dad11590e0c"},{url:"assets/wish-export.html-BMiigYz3.js",revision:"b7ea1489591220e5b9adbb750fcd1500"},{url:"assets/wish-export.html-CEwd1BM4.js",revision:"12e5380402a65cda6bfd084186f3b2b1"},{url:"assets/wish-export.html-OCjQ8Qkz.js",revision:"37a115271f72b2633d36bc138d679c2b"},{url:"assets/wish-export.html-TiwdBozh.js",revision:"022f54a23986cc2e844e9be7ad8df380"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"images/202312/1Password-logo.svg",revision:"70b83e6026ab134a2f7836d315201592"},{url:"images/202312/C_sharp.svg",revision:"bdaccca278378c33d51a37613e6acd09"},{url:"images/202312/community.svg",revision:"a6416747c570bdf5443e2d03094adf2b"},{url:"images/202312/digitalocean-horizontal.svg",revision:"cc43a74e8c264d19bfd6575d9fd4e67d"},{url:"images/202312/discord.svg",revision:"1e0d18bad882e0adf80fd212bf879243"},{url:"images/202312/documents.svg",revision:"6cdb5625f4c6bd4c0abb725dd0a3332b"},{url:"images/202312/github-mark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"images/202312/gitlab-logo.svg",revision:"d06c9d4a634d4f0345fe4e35add3f933"},{url:"images/202312/jihulab.svg",revision:"16fdc7c7a02de0bf63a48c0e498d30fb"},{url:"images/202312/tencent.svg",revision:"b18acecbd9c07541fd34d6f07645c6ed"},{url:"images/202312/uptime-kuma.svg",revision:"e4ed8e71ba8f67c89b305aab8f641790"},{url:"images/202312/uptimerobot-logo.svg",revision:"77e3e93be900d9d9b4d9ad69ce69662b"},{url:"images/202312/video-editing.svg",revision:"be4022972dace1067ae8218338311658"},{url:"images/202312/Vue.js.svg",revision:"9a45fc7689867939804c469bfcd17784"},{url:"images/202401/javascript.svg",revision:"891a71b9a98f1d58491e1b06c4d356a2"},{url:"images/202401/Microsoft_Office_OneDrive.svg",revision:"51d2a9bb48ab28ba3a2aadbaa7a69f52"},{url:"images/202402/ux-design.svg",revision:"540420913952ca6b97c2e6d3e0d1d4c8"},{url:"images/202409/Microsoft-logo.svg",revision:"490b9c67b69597ce119d75ec333273ae"},{url:"svg/afd-official.svg",revision:"bec79d5731d1c28c509746469eaafd0c"},{url:"svg/afdian.svg",revision:"22e22e64ee9da786e70d0ead0dc1ef26"},{url:"svg/crowdin-core-logo-cDark.svg",revision:"d4869cc6cb3e3a21d73ecea205dd951c"},{url:"svg/crowdin-light.svg",revision:"74707ad6ef73e20c671c197b31d72189"},{url:"svg/ducalis.svg",revision:"8ecc71258d180a1a014cc0730caef494"},{url:"svg/jetbrains.svg",revision:"2d77be0dd63858a25d034b11773b95ac"},{url:"svg/paypal.svg",revision:"1c4f7c36fe6bbed4976169bf2e4dab8a"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"404.html",revision:"3985a9ac04111922f791a2edf174104b"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202308/Calculator_Icon.png",revision:"7fb5a148e1ae7f98c4848f3601a158fb"},{url:"images/202308/Character_WIKI_Icon.png",revision:"efb6186847a600de2a4a429052d1c77b"},{url:"images/202308/Game_Launcher_Icon.png",revision:"3d1f2ce60f927919a4120b9e2206dca1"},{url:"images/202308/head-back.png",revision:"627872a2d3a6e0a9175362a2bce9df75"},{url:"images/202308/highlights-head.png",revision:"95af9689fe9b2659f4e1e8c6ad365d87"},{url:"images/202308/hoyolab-miyoushe-Icon.png",revision:"e06a266f679fb74b6259579846410d8c"},{url:"images/202308/My_Character_Icon.png",revision:"394b9ce7a3f8d92109dac083c1e916c8"},{url:"images/202308/UI_BtnIcon_Gacha.png",revision:"912a76ce2d4579c72ada39c79237279d"},{url:"images/202308/UI_ChapterIcon_Hutao.png",revision:"86791e433554edf6652ee9dfd0d4ef69"},{url:"images/202308/Weapon_WIKI_Icon.png",revision:"3f20fdf346dafbd370054f04ec00b8cf"},{url:"images/202309/head-back2.png",revision:"68cab275f36686f7032e495c58cc47df"},{url:"images/202309/security.png",revision:"1853661345ceb924817aae9ebdd7ec1f"},{url:"images/202312/1-8-5-installer.png",revision:"aa697cf352e40598be53ffd543378a4f"},{url:"images/202312/DGP-v3.webp",revision:"b84981827cc8f401ddc5590049e09d8d"},{url:"images/202312/genshin-pizza-helper-logo.webp",revision:"ef87a086cb120946887220bb9d325cd7"},{url:"images/202312/miao-plugin-logo.webp",revision:"376109bfb0be20f6e6552a2faa6de961"},{url:"images/202312/MSEdge.webp",revision:"36c15ad3c07c5d30788df358be4de586"},{url:"images/202312/signpath-logo.png",revision:"b60b1d15de8d94117e1e1bd504951589"},{url:"images/202312/ysin-logo.png",revision:"8bf3e90190298fe08c6bf8001e29c6da"},{url:"images/202402/aifadian-qr.png",revision:"5808dc46c9eb723584137c75355e3cfc"},{url:"images/202402/github-sponsor.png",revision:"36e36d7440093bc067861599f1597d61"},{url:"images/202402/paypal-qr.png",revision:"e2ca9effe9b5862fa5508d941b17375a"},{url:"images/202403/en-default-social.webp",revision:"79e869a5b39c24a57963a1048495e4cd"},{url:"images/202403/zh-default-social.webp",revision:"5fdbfa1de3ffa7af198a4c9929eb188a"},{url:"images/202404/wish_import_zh-cn.webp",revision:"635c813900b584f25f2eca59db5a9573"},{url:"images/202409/navicat.png",revision:"da2e6b3cd228afb814f94a5fbc112e95"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
