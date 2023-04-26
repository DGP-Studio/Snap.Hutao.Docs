import{_ as c,Y as i,Z as l,$ as e,a0 as a,a1 as o,a2 as n,a3 as r,F as s}from"./framework-8be3ab77.js";const d={},h=e("h1",{id:"my-characters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#my-characters","aria-hidden":"true"},"#"),a(" My Characters")],-1),u={class:"hint-container info"},m=e("p",{class:"hint-container-title"},"Info",-1),p=r('<p>My characters is a character statistics feature that allows Snap Hutao to read character&#39;s statistics on the account, including level, constellation, weapon, talent and artifact set; we also provide artifacts rating and CRTI rating for each character.</p><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN016ZFB021g6du6Xvrbv_!!1797064093.png" alt="属性统计示例图" loading="lazy"></p><h2 id="sync-character-data" tabindex="-1"><a class="header-anchor" href="#sync-character-data" aria-hidden="true">#</a> Sync Character Data</h2><h3 id="sync-from-enka-api" tabindex="-1"><a class="header-anchor" href="#sync-from-enka-api" aria-hidden="true">#</a> Sync from Enka API</h3><div class="hint-container info"><p class="hint-container-title">Synchronous Feature</p><ul><li>Enka API sync data from characters displayed in the in-game character showcase <ul><li>Data includes Artifacts detail data, weapon detail data, talent data</li><li>Character costume</li><li>This sync method only support 8 characters at a time</li></ul></li></ul></div><ul><li>In the game, put <strong>characters that you need detailed data</strong> into the showcase <ul><li>The character showcase allows up to 8 characters at the same time</li></ul></li><li>You need to wait for data sync to complete after editing the showcase configuration <ul><li>You may need up to 5 minutes after enable the showcase or re-config the showcase</li></ul></li><li>Enter <code>My Characters</code> page in the Snap Hutao, Click <code>Sync Character Data</code> button on the top-right</li><li>Select <code>Sync from Enka API</code></li></ul><h3 id="sync-from-mihoyo-bbs-my-characters" tabindex="-1"><a class="header-anchor" href="#sync-from-mihoyo-bbs-my-characters" aria-hidden="true">#</a> Sync from MiHoYo BBS - My Characters</h3><div class="hint-container info"><p class="hint-container-title">Synchronous Feature</p><ul><li>Data in this sync method comes from My Characters feature in MiHoYo official BSS <ul><li>This method does not contain any artifacts data</li><li>This method can sync all characters data at a time</li></ul></li></ul></div><ul><li>Enter <code>My Characters</code> page in the Snap Hutao, Click <code>Sync Character Data</code> button on the top-right</li><li>Select <code>Sync from MiHoYo BBS My Characters</code></li></ul><h3 id="sync-from-mihoyo-bbs-development-plan" tabindex="-1"><a class="header-anchor" href="#sync-from-mihoyo-bbs-development-plan" aria-hidden="true">#</a> Sync from MiHoYo BBS - Development Plan</h3><div class="hint-container info"><p class="hint-container-title">Synchronous Feature</p><ul><li>Data in this method comes from <code>Enhancement Progression Calculator</code> feature in MiHoYo official BBS tool set <ul><li>This sync method contains talent level data</li><li>This sync method can sync all characters data at a time</li></ul></li></ul></div><ul><li>Enter <code>My Characters</code> page in the Snap Hutao, Click <code>Sync Character Data</code> button on the top-right</li><li>Select <code>Sync from MiHoYo BBS Developement Plan</code></li></ul><h2 id="add-selected-character-to-development-plan" tabindex="-1"><a class="header-anchor" href="#add-selected-character-to-development-plan" aria-hidden="true">#</a> Add Selected Character to Development Plan</h2><ul><li>Enter <code>My Characters</code> page in the Snap Hutao, click on character you need to add to development plan</li><li>Click on <code>Development Plan</code> and enter target level <ul><li><strong>Synchronized data of the character</strong> will be pre-filled into current level, and you can change the target level</li></ul></li></ul><p><img src="https://img.alicdn.com/imgextra/i2/1797064093/O1CN01Ju0wyK1g6du2L9Kw0_!!1797064093.png" alt="rolescal" loading="lazy"></p><ul><li>After adding successfully, you can find added development plan in the <code>Dev Plan</code> page in Snap Hutao</li></ul><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01DgRS5n1g6du0Do41z_!!1797064093.png" alt="image" loading="lazy"></p>',17),y=e("h2",{id:"export-as-image",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#export-as-image","aria-hidden":"true"},"#"),a(" Export as Image")],-1),f=e("ul",null,[e("li",null,[a("In "),e("code",null,"My Characters"),a(" page, you can select a character and then click "),e("code",null,"Export as Image"),a(" button to create image with your character's data, this will help you to share your character's data")]),e("li",null,"The exported image is stored in your clipboard, and you can paste it wherever you need"),e("li",null,"A sample exported image is shown below")],-1),g=e("p",null,[e("img",{src:"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01ah7JlQ1g6du4WrI0A_!!1797064093.png",alt:"sample-output-image",loading:"lazy"})],-1);function S(_,v){const t=s("RouterLink");return i(),l("div",null,[h,e("div",u,[m,e("p",null,[a("This features required logged in MiHoYo BBS account, please refer to "),o(t,{to:"/en/features/mhy-account-switch.html"},{default:n(()=>[a("MiHoYo BBS Account Switch")]),_:1}),a(" document for sign in tutorial")])]),p,e("ul",null,[e("li",null,[a("For tutorial of Dev Plan feature, please refer to "),o(t,{to:"/en/features/develop-plan.html"},{default:n(()=>[a("Dev Plan")]),_:1}),a(" document")])]),y,f,g])}const b=c(d,[["render",S],["__file","character-data.html.vue"]]);export{b as default};
