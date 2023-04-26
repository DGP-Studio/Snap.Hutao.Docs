import{_ as n,Y as a,Z as c,$ as e,a0 as o,a1 as l,a3 as i,F as r}from"./framework-8be3ab77.js";const d={},s=i('<h1 id="使用第三方工具获取有-stoken-的-cookie" tabindex="-1"><a class="header-anchor" href="#使用第三方工具获取有-stoken-的-cookie" aria-hidden="true">#</a> 使用第三方工具获取有 Stoken 的 cookie</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>以下步骤中涉及的软件、开源项目等资源均来源于互联网，与 DGP-Studio 无关</li><li>本说明文档仅提供有关的解决思路，仅供学习使用，具体操作与操作后果与本项目无关</li></ul></div><h2 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h2><p>Android 用户可以使用开源项目 GetToken 来获取包含 Stoken 字段的 cookie</p>',4),h={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"GetToken 开源项目",-1),p={href:"https://github.com/HolographicHat/GetToken",target:"_blank",rel:"noopener noreferrer"},u=i('<ul><li>GetToken 项目的发布会包含两个 apk 文件，两者最终效果相同。根据你的设备情况选择适合你的版本即可 <ul><li><code>app-release.apk</code> 为一个 LSPosed 插件允许用户在官方米游社中使用 GetToken 功能</li><li>名称以<code>lspatched</code>结尾的 apk 文件是一个已包含 GetToken 功能的修改版米游社程序 <ul><li>你需要卸载官方版米游社以安装该版本的米游社</li></ul></li></ul></li><li>启用插件或安装修改版米游社后打开米游社，在底栏点击&quot;我的&quot;，然后登录您的通行证</li><li>在右上角点击形如🔑形状的按钮</li><li>点击勾选 <code>Stoken</code> 选项</li><li>点击<code>复制登录信息</code></li><li>将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑</li><li>在<code>胡桃工具箱</code>中的账号登录位置，点击<code>手动输入</code></li><li>将之前获取到的 cookie 输入，此时即可完成登录</li></ul><h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h2><p>iOS 用户可以在 App Store 下载抓包软件 Stream 来获取包含 Stoken 字段的 cookie</p>',3),_={href:"https://apps.apple.com/cn/app/stream/id1312141691",target:"_blank",rel:"noopener noreferrer"},m=i("<li>对域名 <code>api-takumi.mihoyo.com</code> 进行抓包分析</li><li>找到并复制带有 <code>Stoken</code> 的数据 <ul><li>形如<code>stuid=****;stoken=v2****;mid=****;</code></li></ul></li><li>将复制到的 Stoken 发送到已经安装了胡桃工具箱的电脑</li><li>在<code>胡桃工具箱</code>中的账号登录位置，点击<code>手动输入</code></li><li>将之前获取到的 cookie 输入，此时即可完成登录</li>",5);function S(f,T){const t=r("ExternalLinkIcon");return a(),c("div",null,[s,e("div",h,[k,e("ul",null,[e("li",null,[o("GitHub："),e("a",p,[o("HolographicHat/GetToken"),l(t)])])])]),u,e("ul",null,[e("li",null,[o("从 App Store 下载 "),e("a",_,[o("Stream"),l(t)])]),m])])}const G=n(d,[["render",S],["__file","get-stoken-cookie-from-the-third-party.html.vue"]]);export{G as default};
