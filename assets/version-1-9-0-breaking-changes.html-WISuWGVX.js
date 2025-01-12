import{_ as i}from"./1-8-5-installer-BiBVFR-v.js";import{_ as s,c as r,f as n,a,e as t,b as l,d,r as p,o as c}from"./app-B417jO5j.js";const u={};function h(g,e){const o=p("RouteLink");return c(),r("div",null,[e[3]||(e[3]=n('<h1 id="explanation-of-breaking-changes-in-version-1-9-0" tabindex="-1"><a class="header-anchor" href="#explanation-of-breaking-changes-in-version-1-9-0"><span>Explanation of Breaking Changes in Version 1.9.0</span></a></h1><p>This document is applicable to users upgrading from Snap Hutao versions <strong>1.4.11 to 1.8.4</strong> to version 1.9.0 and higher.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>Snap Hutao is a Windows sandbox application in MSIX format, providing the convenience of installation and the security of AppX applications. Mandatory code signing in installation packages is a crucial factor in ensuring security. If the installation package is modified, Windows App Installer will raise an error due to the signature being compromised, preventing user installation. We can see this practice everywhere in today&#39;s mobile operating systems. On the Windows platform, due to strict identity verification procedure, the prices of code signing certificates have remained high.</p><p>Before version 1.4.11, Snap Hutao used a self-signed certificate. In this mode, users had to manually install DGP-Studio&#39;s certificate to allow the installation of applications signed by DGP-Studio&#39;s certificate on their computers. Starting from version 1.4.11, Snap Hutao was listed on the Microsoft Store, and Microsoft provided a GUID <code>35C8E923-85DF-49A7-9172-B39DC6312C52</code> for Hutao&#39;s developer account. This GUID was used as the publisher name of Snap Hutao, providing a special free signature (only used for Microsoft Store apps). If you are accustomed to updating the Snap Hutao with MSIX packages, you should always see this GUID in the publisher column.</p><p>Listing on the Microsoft Store eliminated the need for Snap Hutao users to manually install the signing certificate and supported the distribution of Snap Hutao installation packages, reducing a significant amount of costs for the development team. However, the cumbersome approval process often disrupted the development plans of the Snap Hutao. Therefore, over the past six months, the development team has been seeking a solution. SignPath is a company based in Vienna, Austria, that provides code signing integration software. In early December 2023, the Snap Hutao development team successfully obtained sponsorship from the SignPath Foundation, allowing us to use their code signing certificates for Snap Hutao free of charge. This greatly assisted the Snap Hutao project by not only allowing the Snap Hutao to get rid of constraints of the Microsoft Store but also avoiding the high annual certificate fees.</p><p><strong>Due to the migration to a new certificate causing package name conflicts, Snap Hutao provides the following detailed explanation to assist all users in updating to version 1.9.0 and future versions.</strong></p><h2 id="upgrade-to-version-1-9-0" tabindex="-1"><a class="header-anchor" href="#upgrade-to-version-1-9-0"><span>Upgrade to Version 1.9.0</span></a></h2><h3 id="version-release" tabindex="-1"><a class="header-anchor" href="#version-release"><span>Version Release</span></a></h3><p>Snap Hutao version 1.9.0 is scheduled to be released on the weekend before Christmas 2023. We will publish the download links for the installation package through GitHub, Jihu GitLab, this official website, and the community.</p>',10)),a("blockquote",null,[a("p",null,[e[1]||(e[1]=t("1.9.0 version has been released, please download from ")),l(o,{to:"/en/quick-start.html"},{default:d(()=>e[0]||(e[0]=[t("Quick Start")])),_:1}),e[2]||(e[2]=t(" page."))])]),e[4]||(e[4]=n('<h3 id="uninstall-old-versions" tabindex="-1"><a class="header-anchor" href="#uninstall-old-versions"><span>Uninstall Old Versions</span></a></h3><p>Directly installing this package will cause problems depending on your system version due to package name and signature conflicts.</p><table><thead><tr><th style="text-align:center;">System Version</th><th style="text-align:center;">Expected Issues</th></tr></thead><tbody><tr><td style="text-align:center;">Windows 10</td><td style="text-align:center;">Unable to install; signature and package name conflicts</td></tr><tr><td style="text-align:center;">Windows 11</td><td style="text-align:center;">Installation successful;<br>Coexistence with old versions of Snap Hutao with the same name causes program runtime errors</td></tr></tbody></table><p>Due to the above issue, you need to uninstall the old version of Snap Hutao first and then install the 1.9.0 version package.</p><blockquote><p><strong>How to uninstall Snap Hutao</strong>: Find Snap Hutao in the Start menu, right-click, and select uninstall; another quick method is to find it in Windows App Settings and choose uninstall.</p></blockquote><p><strong>Your important data (including logged-in miHoYo accounts, wish records, achievement data, Spiral Abyss records, My Character cache data, and development plans) will not be lost, they are still stored in your local Hutao data directory on your computer.</strong> However, the following data will be reset:</p><ol><li>Snap Hutao runtime count</li><li>Data folder path <strong>(if you previously modified the data directory, remember your data directory path)</strong></li><li>Hutao account (Hutao Passport) login status</li><li>Closed Hutao announcement flags</li><li>Development plan preset level information</li><li>Dashboard card status on the homepage</li><li>Auto-click function status</li></ol><h3 id="install-the-new-version" tabindex="-1"><a class="header-anchor" href="#install-the-new-version"><span>Install the New Version</span></a></h3><p><img src="'+i+'" alt="1.8.5 Version Installer" loading="lazy"></p><p>Run the 1.9.0 version installer you have already downloaded. In the installation interface, you should see the publisher as <code>SignPath Foundation</code>. Click install to install the all-new version of Snap Hutao!</p><p><strong>If you modified the data directory location in the old version, you need to select the data directory path again in the settings after starting to restore the data. If you have never set a data directory, your data will be loaded directly without additional setup.</strong></p><h2 id="future-plans" tabindex="-1"><a class="header-anchor" href="#future-plans"><span>Future Plans</span></a></h2><blockquote><p>Microsoft Store, future releases, software security...</p></blockquote><p>In the Microsoft Store, the application publisher name must be a GUID assigned by Microsoft, not a &quot;custom&quot; name like <code>SignPath Foundation</code>. We anticipate that we will not continue to release updates in the Microsoft Store in the future unless we have a better way to handle coexistence issues between different signature packages. Although Snap Hutao will no longer go through Microsoft&#39;s certification, under SignPath&#39;s restrictions, Snap Hutao will only be able to compile and build release packages directly from the GitHub code repository. This means that the code in the user&#39;s installation package is 100% sourced from our GitHub code repository, and anyone has the authority to review and participate in development.</p><p>Starting from version 1.9.0 of the client, we will integrate a software update module to adapt to the new release method. We will minimize the operations required for user updates as much as possible. As this feature is brand new, we are still in the deployment process. Please continue to pay attention to our in-app announcements and community for information!</p>',15))])}const v=s(u,[["render",h],["__file","version-1-9-0-breaking-changes.html.vue"]]),y=JSON.parse('{"path":"/en/blog/version-1-9-0-breaking-changes.html","title":"Explanation of Breaking Changes in Version 1.9.0","lang":"en-US","frontmatter":{"category":["Dev Logs"],"order":1,"comment":false,"description":"Explanation of Breaking Changes in Version 1.9.0 This document is applicable to users upgrading from Snap Hutao versions 1.4.11 to 1.8.4 to version 1.9.0 and higher. Introductio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/blog/version-1-9-0-breaking-changes.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/blog/version-1-9-0-breaking-changes.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/blog/version-1-9-0-breaking-changes.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://hut.ao/jp/blog/version-1-9-0-breaking-changes.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/blog/version-1-9-0-breaking-changes.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Explanation of Breaking Changes in Version 1.9.0"}],["meta",{"property":"og:description","content":"Explanation of Breaking Changes in Version 1.9.0 This document is applicable to users upgrading from Snap Hutao versions 1.4.11 to 1.8.4 to version 1.9.0 and higher. Introductio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hut.ao/images/202312/1-8-5-installer.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2023-12-23T08:40:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-23T08:40:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Explanation of Breaking Changes in Version 1.9.0\\",\\"image\\":[\\"https://hut.ao/images/202312/1-8-5-installer.png\\"],\\"dateModified\\":\\"2023-12-23T08:40:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Upgrade to Version 1.9.0","slug":"upgrade-to-version-1-9-0","link":"#upgrade-to-version-1-9-0","children":[{"level":3,"title":"Version Release","slug":"version-release","link":"#version-release","children":[]},{"level":3,"title":"Uninstall Old Versions","slug":"uninstall-old-versions","link":"#uninstall-old-versions","children":[]},{"level":3,"title":"Install the New Version","slug":"install-the-new-version","link":"#install-the-new-version","children":[]}]},{"level":2,"title":"Future Plans","slug":"future-plans","link":"#future-plans","children":[]}],"git":{"createdTime":1702974384000,"updatedTime":1703320855000,"contributors":[{"name":"Masterain","username":"Masterain","email":"i@irain.in","commits":2,"url":"https://github.com/Masterain"}]},"readingTime":{"minutes":3.13,"words":938},"filePathRelative":"en/blog/version-1-9-0-breaking-changes.md","localizedDate":"December 19, 2023","autoDesc":true}');export{v as comp,y as data};
