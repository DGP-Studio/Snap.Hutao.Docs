import{_ as a,c as n,a as t,b as o,d as r,e as l,f as s,r as c,o as d}from"./app-AhASGCyd.js";const u={},h={class:"hint-container info"};function m(p,e){const i=c("RouteLink");return d(),n("div",null,[e[4]||(e[4]=t("h1",{id:"real-time-notes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#real-time-notes"},[t("span",null,"Real-time Notes")])],-1)),t("div",h,[e[3]||(e[3]=t("p",{class:"hint-container-title"},"Info",-1)),t("p",null,[e[1]||(e[1]=o("This features requires you to login in to your MiYouShe or HoYoLAB account in Snap Hutao, you can check ")),r(i,{to:"/en/features/mhy-account-switch.html"},{default:l(()=>e[0]||(e[0]=[o("MiHoYo BBS Account Switch")])),_:1}),e[2]||(e[2]=o(" for more information."))])]),e[5]||(e[5]=s('<p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01nh4t1T1g6dyI3Ikcn_!!1797064093.png_.webp" alt="live-data-tracking" loading="lazy"></p><h2 id="add-role" tabindex="-1"><a class="header-anchor" href="#add-role"><span>Add Role</span></a></h2><ul><li>Click on <code>Add Role</code> button</li><li>In the pop-up menu, find the UID you want to add, and click on the add button to its right</li><li>Now, the game UID character&#39;s Real-time Notes should be displayed in the page <ul><li>The Real-time Notes is set to refresh timely. You can click on the <code>Notification Settings</code> on the top right to manage it</li></ul></li><li>If you want to see the data at this moment, you can click <code>Refresh</code> button to refresh data immediately</li><li>If a <code>-1034</code> error occurs during data refresh, it means that miHoYo&#39;s anti-bot risk control has been triggered. You can solve this problem by configuring the invisible verification in the Hutao settings.</li></ul><h2 id="verify-current-user-and-role" tabindex="-1"><a class="header-anchor" href="#verify-current-user-and-role"><span>Verify Current User and Role</span></a></h2><p>If you are using a MiYouShe account, then you account is very likely to be marked as robot-usage and leads to an anti-bot verification. In this status, Real-time Notes data cannot be updated.</p><p>You can click on <code>Verify Current User and Role</code> button, Snap Hutao will pop up verification window. After finishing the verification, then your account can be used to refresh data.</p><h2 id="global-notification-settings" tabindex="-1"><a class="header-anchor" href="#global-notification-settings"><span>Global Notification Settings</span></a></h2><ul><li>In the <code>Notification Settings</code> on the top right, you can change the global settings of Real-time Notes, including: <ul><li>Enable/Disable auto refresh</li><li>Refresh rate</li><li>Do not disturb setting</li><li>Prioritized notification <ul><li>This prevent Snap Hutao&#39;s notification being closed automatically</li></ul></li><li>Customized data forwarding Webhook <ul><li>Snap Hutao allows user to forward Realtime Notes data to other applications to reduce account&#39;s request to MiHoYo API</li><li>Input your third party HTTP API endpoint in <code>Realtime Notes Webhook Url</code> setting field, and Snap Hutao will forward the raw data through <code>POST</code> requests</li></ul></li></ul></li></ul><h2 id="independent-settings-for-each-accounts" tabindex="-1"><a class="header-anchor" href="#independent-settings-for-each-accounts"><span>Independent Settings for Each Accounts</span></a></h2><ul><li>Snap Hutao allows different settings on each Real-time Notes account</li><li>Hover the cursor over the form of Real-time Notes account that needs to set</li><li>Click on the setting button on it, and you can modify these settings: <ul><li>Original Resin threshold value</li><li>Realm Currency threshold value</li><li>Parametric Transformer notification</li><li>Daily Commission notification</li><li>Expeditions notification</li><li>Display in the main page (feature coming soon)</li></ul></li><li>Click on <code>Save</code> and you can save the settings</li></ul><h2 id="delete-daily-notes-account" tabindex="-1"><a class="header-anchor" href="#delete-daily-notes-account"><span>Delete Daily-Notes Account</span></a></h2><ul><li>Hover the cursor over the form of Real-time Notes account that needs to delete</li><li>Clock on the remove button on it, and you can remove the corresponding account</li></ul><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h3 id="why-does-setting-up-automatic-refresh-of-real-time-notes-prompt-failed-to-modify-scheduled-task" tabindex="-1"><a class="header-anchor" href="#why-does-setting-up-automatic-refresh-of-real-time-notes-prompt-failed-to-modify-scheduled-task"><span>Why does setting up automatic refresh of real-time notes prompt &quot;Failed to modify Scheduled Task&quot;</span></a></h3><p>The automatic refresh of real-time notes relies on task scheduling. In order to avoid possible permission issues, Snap Hutao will force scheduled tasks to be set in non-administrator mode.</p><p>If you turned on automatic refresh in the old version, you can solve the problem by manually deleting the old task schedule in Task Scheduler. The name of the scheduled task is <code>SnapHutaoDailyNoteRefreshTask</code>.</p><p>If you did not turn on automatic refresh in the old version, then this problem is caused by the Windows user account you are currently using having insufficient permissions. If your current user account is an administrator account, you can only solve this problem by reinstalling the system.</p>',17))])}const g=a(u,[["render",m],["__file","real-time-notes.html.vue"]]),y=JSON.parse('{"path":"/en/features/real-time-notes.html","title":"Real-time Notes","lang":"en-US","frontmatter":{"headerDepth":2,"category":["Feature","Tutorial"],"tag":["Real-time Notes","Expeditions","Resin"],"order":7,"comment":false,"description":"The Real-time Note feature in Snap Hutao synchronizes dynamic information from Genshin Impact to your local computer by periodically refreshing your miHoYo account data. It allows you to set conditions for message reminders and push notifications based on your preferences. This feature helps you stay updated with the latest in-game events, announcements, and other relevant information in real-time.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/real-time-notes.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/features/real-time-notes.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Real-time Notes"}],["meta",{"property":"og:description","content":"The Real-time Note feature in Snap Hutao synchronizes dynamic information from Genshin Impact to your local computer by periodically refreshing your miHoYo account data. It allows you to set conditions for message reminders and push notifications based on your preferences. This feature helps you stay updated with the latest in-game events, announcements, and other relevant information in real-time."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01nh4t1T1g6dyI3Ikcn_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-10-27T10:23:35.000Z"}],["meta",{"property":"article:tag","content":"Real-time Notes"}],["meta",{"property":"article:tag","content":"Expeditions"}],["meta",{"property":"article:tag","content":"Resin"}],["meta",{"property":"article:modified_time","content":"2024-10-27T10:23:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Real-time Notes\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01nh4t1T1g6dyI3Ikcn_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-10-27T10:23:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Add Role","slug":"add-role","link":"#add-role","children":[]},{"level":2,"title":"Verify Current User and Role","slug":"verify-current-user-and-role","link":"#verify-current-user-and-role","children":[]},{"level":2,"title":"Global Notification Settings","slug":"global-notification-settings","link":"#global-notification-settings","children":[]},{"level":2,"title":"Independent Settings for Each Accounts","slug":"independent-settings-for-each-accounts","link":"#independent-settings-for-each-accounts","children":[]},{"level":2,"title":"Delete Daily-Notes Account","slug":"delete-daily-notes-account","link":"#delete-daily-notes-account","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Why does setting up automatic refresh of real-time notes prompt \\"Failed to modify Scheduled Task\\"","slug":"why-does-setting-up-automatic-refresh-of-real-time-notes-prompt-failed-to-modify-scheduled-task","link":"#why-does-setting-up-automatic-refresh-of-real-time-notes-prompt-failed-to-modify-scheduled-task","children":[]}]}],"git":{"createdTime":1668162396000,"updatedTime":1730024615000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":10},{"name":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"qhy040404","email":"qhy040404@163.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"en/features/real-time-notes.md","localizedDate":"November 11, 2022"}');export{g as comp,y as data};