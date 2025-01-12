import{_ as l,c as o,f as h,b as c,d as a,a as e,e as i,r as u,o as d}from"./app-B417jO5j.js";const p={};function g(m,t){const r=u("Tabs");return d(),o("div",null,[t[4]||(t[4]=h('<h1 id="advanced-game-launcher" tabindex="-1"><a class="header-anchor" href="#advanced-game-launcher"><span>Advanced Game Launcher</span></a></h1><p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN014YLRnj1g6e0zQaBl6_!!1797064093.png_.webp" alt="Game Launcher" loading="lazy"></p><p>Snap Hutao&#39;s advanced launcher provides a more flexible game launch experience through various settings options.</p><h2 id="initial-settings" tabindex="-1"><a class="header-anchor" href="#initial-settings"><span>Initial Settings</span></a></h2><ul><li>Click &quot;Launch Game&quot; on the left sidebar to enter the advanced launcher feature. <ul><li>The first time you use it, you will be redirected to the settings page to set the game path.</li><li><strong>Please select the game&#39;s main program path (<code>YuanShen.exe</code>), not the launcher path (<code>launcher.exe</code>).</strong><ul><li>Example path: <code>D:\\miHoYo Launcher\\games\\Genshin Impact Game\\YuanShen.exe</code></li></ul></li><li>After successfully detecting the game path, click &quot;Confirm.&quot;</li><li>If the game is not installed, click the &quot;Install Game&quot; button and follow the prompts to set the installation directory. Snap Hutao will automatically download and install the game.</li></ul></li><li>After configuration, click the &quot;Launch Game&quot; button in the upper right corner to launch the game.</li></ul><h2 id="server-switching" tabindex="-1"><a class="header-anchor" href="#server-switching"><span>Server Switching</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Permission Notice</p><p>Using this feature requires running Snap Hutao with administrator privileges. Snap Hutao will create a folder named <code>ServerCache</code> in the data directory to store the files needed for switching servers and will automatically check for updates.</p></div><ol><li>Go to the &quot;Launch Game&quot; page.</li><li>Select the target server in the &quot;Server&quot; section.</li></ol><p><strong>Available servers include:</strong></p><table><thead><tr><th>Option</th><th>Server</th></tr></thead><tbody><tr><td>CN Default</td><td>Mainland China server</td></tr><tr><td>CN Official</td><td>Mainland China server, no practical difference from the previous option</td></tr><tr><td>CN NoTapTap</td><td>Mainland China server that disables TapTap login</td></tr><tr><td>Global Default</td><td>HoYoverse global servers</td></tr><tr><td>Global Official</td><td>HoYoverse global servers, no practical difference from the previous option</td></tr><tr><td>Global Epic</td><td>HoYoverse global servers using the Epic payment gateway</td></tr><tr><td>Global Google</td><td>HoYoverse global servers using the Google Pay payment gateway</td></tr></tbody></table><p>Click the &quot;Launch&quot; button in the upper right corner. Snap Hutao will download the relevant files from the official server, apply them, and then launch the game.</p><h2 id="account-saving" tabindex="-1"><a class="header-anchor" href="#account-saving"><span>Account Saving</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>This feature records the login status of Genshin Impact accounts.</p></div><ol><li>Go to the &quot;Launch Game&quot; page.</li><li>Click &quot;Detect Account.&quot; Snap Hutao will save the current game&#39;s login status.</li><li>Enter a name in the &quot;Name Account&quot; window that appears and click &quot;Confirm.&quot;</li><li>Log out of the current account and log in to a new account. Repeat the above steps to save multiple accounts.</li><li>Use the account switching feature to select a saved account.</li><li><strong>The login statuses of different servers do not affect each other:</strong><ul><li>For example, if account A is logged in on the CN server and account B is logged in on the global server, A will only be visible on the CN server, and B will only be visible on the global server.</li></ul></li></ol><h2 id="login-with-miyoushe-hoyolab" tabindex="-1"><a class="header-anchor" href="#login-with-miyoushe-hoyolab"><span>Login with MiYouShe / HoYoLAB</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>You must enable the &quot;Launch Parameters&quot; feature first.</p></div><p>When enabled, Snap Hutao will use the logged-in MiYouShe / HoYoLAB account to directly log in to the bound Genshin Impact account.</p><h2 id="windows-platform-hdr-support" tabindex="-1"><a class="header-anchor" href="#windows-platform-hdr-support"><span>Windows Platform HDR Support</span></a></h2><p>Genshin Impact&#39;s built-in HDR feature needs to be enabled through registry key values. Snap Hutao can enable this feature to enhance the visual experience.</p><h2 id="launch-parameters" tabindex="-1"><a class="header-anchor" href="#launch-parameters"><span>Launch Parameters</span></a></h2><p>In the &quot;Launch Parameters&quot; feature, users can set the following advanced options:</p><ul><li><strong>Exclusive Fullscreen</strong>: <code>-window-mode exclusive</code><ul><li>The game process runs in exclusive fullscreen mode.</li></ul></li><li><strong>Fullscreen</strong>: <code>-screen-fullscreen</code><ul><li>The game launches in fullscreen mode.</li></ul></li><li><strong>Borderless</strong>: <code>-popupwindow</code><ul><li>The game launches in borderless window mode.</li></ul></li><li><strong>Touchscreen Mode</strong>: <code>-platform_type CLOUD_THIRD_PARTY_MOBILE</code><ul><li>Enables touchscreen operation mode (keyboard and mouse input will be disabled).</li></ul></li><li><strong>Resolution Settings</strong>: <ul><li><code>-screen-width</code>: Sets the screen width (e.g., 1920).</li><li><code>-screen-height</code>: Sets the screen height (e.g., 1080).</li></ul></li><li><strong>Monitor Selection</strong>: <code>-monitor</code><ul><li>Specifies the target monitor to run the game on.</li><li>If you are unsure of the monitor number, you can click &quot;Identify Monitor&quot; for a hint.</li></ul></li></ul><h2 id="resource-download" tabindex="-1"><a class="header-anchor" href="#resource-download"><span>Resource Download</span></a></h2><p>Snap Hutao&#39;s &quot;Resource Download&quot; tab provides real-time links to game installation packages and incremental packages for the mainland China server. Users can directly jump to the browser to download them.</p><ul><li>Users need to place the downloaded files in the same directory as the game program and complete the update using the official launcher.</li></ul><h2 id="injection-features" tabindex="-1"><a class="header-anchor" href="#injection-features"><span>Injection Features</span></a></h2><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Improper use of injection features may cause damage to your device or game data. By enabling this, you agree to assume the relevant risks yourself.</p></div><h3 id="frame-rate-limit-unlock" tabindex="-1"><a class="header-anchor" href="#frame-rate-limit-unlock"><span>Frame Rate Limit Unlock</span></a></h3><p>Using the <a href="https://github.com/DGP-Studio/UnlockerIsland" target="_blank" rel="noopener noreferrer">UnlockerIsland project</a>, the frame rate limit of Genshin Impact can be unlocked.</p><ul><li><strong>How to Use:</strong><ol><li>Run Snap Hutao with administrator privileges.</li><li>In the &quot;Injection&quot; module, set the target frame rate.</li><li>Click the &quot;Launch Game&quot; button.</li></ol></li></ul><h4 id="factors-that-may-cause-frame-rate-limit-unlock-failure" tabindex="-1"><a class="header-anchor" href="#factors-that-may-cause-frame-rate-limit-unlock-failure"><span>Factors that may cause <strong>frame rate limit unlock failure</strong>:</span></a></h4><ol><li>Snap Hutao is not kept running in the background.</li><li>The <strong>Vertical Sync</strong> option is not disabled in the game.</li><li>There is a &quot;Maximum Frame Rate&quot; setting in the graphics card driver.</li><li>There are similar &quot;Power Saving Mode&quot; options not disabled in the graphics card driver software.</li><li>Insufficient graphics card performance.</li><li>MSVCRT library is not installed.</li></ol><h3 id="field-of-view-adjustment" tabindex="-1"><a class="header-anchor" href="#field-of-view-adjustment"><span>Field of View Adjustment</span></a></h3><p>Adjusts the camera field of view and fog visibility to provide a better visual experience.</p><h3 id="team-configuration-progress-bar-settings" tabindex="-1"><a class="header-anchor" href="#team-configuration-progress-bar-settings"><span>Team Configuration Progress Bar Settings</span></a></h3><p>Adjusts the display status of the team configuration progress bar. Only takes effect when switching teams under <strong>normal conditions</strong>.</p><h2 id="inter-process-linking" tabindex="-1"><a class="header-anchor" href="#inter-process-linking"><span>Inter-Process Linking</span></a></h2><h3 id="duration-statistics" tabindex="-1"><a class="header-anchor" href="#duration-statistics"><span>Duration Statistics</span></a></h3><p>Requires the installation and configuration of <a href="https://github.com/Scighost/Starward" target="_blank" rel="noopener noreferrer">Starward</a>. When enabled, Snap Hutao will call the Starward interface to record game duration.</p><h3 id="better-gi-linking" tabindex="-1"><a class="header-anchor" href="#better-gi-linking"><span>Better GI Linking</span></a></h3><p>Requires the installation and configuration of <a href="https://bgi.huiyadan.com/" target="_blank" rel="noopener noreferrer">Better Genshin Impact</a>. When enabled, Snap Hutao will call its interface to enable automated features based on computer vision technology (OCR).</p><h3 id="discord-activity" tabindex="-1"><a class="header-anchor" href="#discord-activity"><span>Discord Activity</span></a></h3><p>Requires the installation and configuration of <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a>. When enabled, Snap Hutao will generate real-time game status on your Discord profile card.</p><h2 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h2><h3 id="how-to-quickly-launch-the-game-through-snap-hutao" tabindex="-1"><a class="header-anchor" href="#how-to-quickly-launch-the-game-through-snap-hutao"><span>How to Quickly Launch the Game Through Snap Hutao</span></a></h3><ul><li>Correctly configure the advanced launcher feature in the main program.</li><li>When the Snap Hutao main window is not closed, you can directly click &quot;Homepage - Launch Game&quot; to quickly launch.</li><li>Click the Snap Hutao icon in the lower right corner of the taskbar (usually automatically hidden by the system) and select &quot;Launch Game.&quot;</li></ul><p><img src="https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png_.webp" alt="quick-start" loading="lazy"></p><h3 id="why-does-the-game-login-status-expire-causing-the-account-switching-feature-to-fail" tabindex="-1"><a class="header-anchor" href="#why-does-the-game-login-status-expire-causing-the-account-switching-feature-to-fail"><span>Why Does the Game Login Status Expire, Causing the Account Switching Feature to Fail?</span></a></h3><ul><li>Key factors in saving game login status include: <ul><li><strong>Network Environment</strong>: Frequent changes in the public IP address may cause the login status to expire.</li><li><strong>Device ID</strong>: Replacing the network card or MAC address may cause the login status to expire.</li></ul></li><li>Common causes and solutions: <ol><li>Ensure that the account is logged in correctly and then enter the game.</li><li>Close the game and confirm that the game process is completely terminated.</li><li>Detect the account again to ensure the login status is recorded correctly.</li></ol></li></ul><h3 id="error-code-31-4302-appears-when-starting-the-game" tabindex="-1"><a class="header-anchor" href="#error-code-31-4302-appears-when-starting-the-game"><span>Error Code <code>31-4302</code> Appears When Starting the Game</span></a></h3><p>If you encounter error code <code>31-4302</code>, you can solve this problem by enabling the &quot;Launch Game - Injection - Let Me In&quot; option.</p><h3 id="how-to-recover-the-game-program-after-a-failed-server-switch" tabindex="-1"><a class="header-anchor" href="#how-to-recover-the-game-program-after-a-failed-server-switch"><span>How to Recover the Game Program After a Failed Server Switch</span></a></h3><div class="hint-container info"><p class="hint-container-title">Function Principle Explanation</p><p>Snap Hutao only downloads the files required for server switching from the official Genshin Impact server, ensuring file safety and reliability. If frequent network problems cause the conversion to fail, the network connection to the target server may be poor. It is recommended to check your network connection or contact your network service provider.</p></div><p>During server switching, if an unexpected exit or network problem causes the switch to fail, the game client may be damaged. Snap Hutao will prompt <code>Game path is incorrect, go to settings to change the game path</code>. At this point, the game&#39;s main program file may be lost. You can manually recover it by following these steps:</p><h4 id="manually-recover-the-game-main-program" tabindex="-1"><a class="header-anchor" href="#manually-recover-the-game-main-program"><span>Manually Recover the Game Main Program</span></a></h4><ol><li><strong>Locate the Backup Files</strong>: <ul><li>Snap Hutao stores the backed-up game files before the switch in the <code>%userprofile%/Documents/Hutao/ServerCache</code> directory.</li><li>The backup files include: <code>GenshinImpact.exe</code> and <code>GenshinImpact_Data</code> (for the global server), or <code>YuanShen.exe</code> and <code>YuanShen_Data</code> (for the CN server).</li></ul></li><li><strong>Check the Game Directory</strong>: <ul><li>The global server directory should contain <code>GenshinImpact.exe</code> and <code>GenshinImpact_Data</code>.</li><li>The CN server directory should contain <code>YuanShen.exe</code> and <code>YuanShen_Data</code>.</li></ul></li><li><strong>Manually Recover the Files</strong>: <ul><li>Copy the files from the backup directory to the game&#39;s main program directory, overwriting the existing files.</li><li>If you need to switch server versions, rename the relevant files: for example, rename <code>YuanShen_Data</code> to <code>GenshinImpact_Data</code>.</li></ul></li><li><strong>Launch the Game</strong>: <ul><li>Re-enter the &quot;Launch Game&quot; interface in Snap Hutao and launch the game.</li><li>If the error message disappears, you can continue to select the target server and complete the switch.</li></ul></li></ol><h3 id="how-to-restore-the-config-ini-configuration-file" tabindex="-1"><a class="header-anchor" href="#how-to-restore-the-config-ini-configuration-file"><span>How to Restore the <code>config.ini</code> Configuration File</span></a></h3><p>In some cases (such as permission errors or failed server switches), the <code>config.ini</code> file may be lost, causing the game to fail to launch. You can manually create it and fill in the following content:</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>Modify the <code>game_version</code> parameter according to the actual game version.</p></div><h4 id="example-configuration-file-content" tabindex="-1"><a class="header-anchor" href="#example-configuration-file-content"><span>Example Configuration File Content</span></a></h4>',60)),c(r,{id:"596",data:[{id:"CN Server Official"},{id:"Global Server Official"}],"tab-id":"game_config_samples"},{title0:a(({value:n,isActive:s})=>t[0]||(t[0]=[i("CN Server Official")])),title1:a(({value:n,isActive:s})=>t[1]||(t[1]=[i("Global Server Official")])),tab0:a(({value:n,isActive:s})=>t[2]||(t[2]=[e("div",{class:"language-ini line-numbers-mode","data-highlighter":"shiki","data-ext":"ini","data-title":"ini",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"[General]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"channel"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"cps"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"mihoyo")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"game_version"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"5.3.0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"sub_channel"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"sdk_version"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"=")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"game_biz"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"hk4e_cn")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"uapc"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"{"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"hk4e_cn"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":{"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"uapc"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'""'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"},"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"hyp"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":{"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"uapc"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'""'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"}}")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:a(({value:n,isActive:s})=>t[3]||(t[3]=[e("div",{class:"language-ini line-numbers-mode","data-highlighter":"shiki","data-ext":"ini","data-title":"ini",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"[General]")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"channel"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"1")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"cps"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"mihoyo")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"game_version"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"5.3.0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"sub_channel"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"0")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"sdk_version"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"=")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"game_biz"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"hk4e_global")]),i(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#C678DD"}},"uapc"),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"{"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"hk4e_global"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":{"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"uapc"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'""'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"},"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"hyp"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":{"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"uapc"'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},":"),e("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'""'),e("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#98C379"}},"}}")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),t[5]||(t[5]=e("p",null,[i("Save the configuration file to the "),e("code",null,"/Genshin Impact Game/"),i(" subdirectory of the game installation directory to restore normal launching.")],-1))])}const f=l(p,[["render",g],["__file","game-launcher.html.vue"]]),y=JSON.parse(`{"path":"/en/features/game-launcher.html","title":"Advanced Game Launcher","lang":"en-US","frontmatter":{"headerDepth":2,"category":["Feature","Tutorial"],"tag":["unlock framerate","server switch","switch account"],"order":4,"comment":false,"description":"Snap Hutao's advanced launcher offers features such as custom launch parameters, server switching, and frame rate unlocking, significantly enhancing the user's gaming experience.","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://hut.ao/jp/features/game-launcher.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/features/game-launcher.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Advanced Game Launcher"}],["meta",{"property":"og:description","content":"Snap Hutao's advanced launcher offers features such as custom launch parameters, server switching, and frame rate unlocking, significantly enhancing the user's gaming experience."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i4/1797064093/O1CN014YLRnj1g6e0zQaBl6_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2025-01-12T04:59:21.000Z"}],["meta",{"property":"article:tag","content":"unlock framerate"}],["meta",{"property":"article:tag","content":"server switch"}],["meta",{"property":"article:tag","content":"switch account"}],["meta",{"property":"article:modified_time","content":"2025-01-12T04:59:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Advanced Game Launcher\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN014YLRnj1g6e0zQaBl6_!!1797064093.png_.webp\\",\\"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Uu8QzN1g6du6MRp8h_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2025-01-12T04:59:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Initial Settings","slug":"initial-settings","link":"#initial-settings","children":[]},{"level":2,"title":"Server Switching","slug":"server-switching","link":"#server-switching","children":[]},{"level":2,"title":"Account Saving","slug":"account-saving","link":"#account-saving","children":[]},{"level":2,"title":"Login with MiYouShe / HoYoLAB","slug":"login-with-miyoushe-hoyolab","link":"#login-with-miyoushe-hoyolab","children":[]},{"level":2,"title":"Windows Platform HDR Support","slug":"windows-platform-hdr-support","link":"#windows-platform-hdr-support","children":[]},{"level":2,"title":"Launch Parameters","slug":"launch-parameters","link":"#launch-parameters","children":[]},{"level":2,"title":"Resource Download","slug":"resource-download","link":"#resource-download","children":[]},{"level":2,"title":"Injection Features","slug":"injection-features","link":"#injection-features","children":[{"level":3,"title":"Frame Rate Limit Unlock","slug":"frame-rate-limit-unlock","link":"#frame-rate-limit-unlock","children":[]},{"level":3,"title":"Field of View Adjustment","slug":"field-of-view-adjustment","link":"#field-of-view-adjustment","children":[]},{"level":3,"title":"Team Configuration Progress Bar Settings","slug":"team-configuration-progress-bar-settings","link":"#team-configuration-progress-bar-settings","children":[]}]},{"level":2,"title":"Inter-Process Linking","slug":"inter-process-linking","link":"#inter-process-linking","children":[{"level":3,"title":"Duration Statistics","slug":"duration-statistics","link":"#duration-statistics","children":[]},{"level":3,"title":"Better GI Linking","slug":"better-gi-linking","link":"#better-gi-linking","children":[]},{"level":3,"title":"Discord Activity","slug":"discord-activity","link":"#discord-activity","children":[]}]},{"level":2,"title":"Frequently Asked Questions","slug":"frequently-asked-questions","link":"#frequently-asked-questions","children":[{"level":3,"title":"How to Quickly Launch the Game Through Snap Hutao","slug":"how-to-quickly-launch-the-game-through-snap-hutao","link":"#how-to-quickly-launch-the-game-through-snap-hutao","children":[]},{"level":3,"title":"Why Does the Game Login Status Expire, Causing the Account Switching Feature to Fail?","slug":"why-does-the-game-login-status-expire-causing-the-account-switching-feature-to-fail","link":"#why-does-the-game-login-status-expire-causing-the-account-switching-feature-to-fail","children":[]},{"level":3,"title":"Error Code 31-4302 Appears When Starting the Game","slug":"error-code-31-4302-appears-when-starting-the-game","link":"#error-code-31-4302-appears-when-starting-the-game","children":[]},{"level":3,"title":"How to Recover the Game Program After a Failed Server Switch","slug":"how-to-recover-the-game-program-after-a-failed-server-switch","link":"#how-to-recover-the-game-program-after-a-failed-server-switch","children":[]},{"level":3,"title":"How to Restore the config.ini Configuration File","slug":"how-to-restore-the-config-ini-configuration-file","link":"#how-to-restore-the-config-ini-configuration-file","children":[]}]}],"git":{"createdTime":1667704339000,"updatedTime":1736657961000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":27,"url":"https://github.com/Masterain"},{"name":"Mikachu2333","username":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":2,"url":"https://github.com/Mikachu2333"},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"},{"name":"LinkChou","username":"LinkChou","email":"linkchou@yandex.com","commits":1,"url":"https://github.com/LinkChou"},{"name":"qhy040404","username":"qhy040404","email":"qhy040404@163.com","commits":1,"url":"https://github.com/qhy040404"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"},{"name":"KunPeng","username":"KunPeng","email":"96916320+AdminRoc@users.noreply.github.com","commits":13,"url":"https://github.com/KunPeng"},{"name":"KunPeng","username":"KunPeng","email":"wsshanchuan@yeah.net","commits":1,"url":"https://github.com/KunPeng"}]},"readingTime":{"minutes":5.24,"words":1571},"filePathRelative":"en/features/game-launcher.md","localizedDate":"November 6, 2022"}`);export{f as comp,y as data};
