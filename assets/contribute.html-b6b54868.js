import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as a,a as e,b as o,d as t,e as c}from"./app-4efc3550.js";const d={},u=e("h1",{id:"贡献你的代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#贡献你的代码","aria-hidden":"true"},"#"),o(" 贡献你的代码")],-1),h=e("p",null,"胡桃工具箱使用 C# 和 .NET 框架开发桌面客户端和服务端。如果你愿意贡献你的代码，请阅读以下指导文档。",-1),_={href:"https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E4%BF%AE%E5%A4%8D+",target:"_blank",rel:"noopener noreferrer"},p={id:"设置-snap-hutao-项目",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#设置-snap-hutao-项目","aria-hidden":"true"},"#",-1),b={href:"https://visualstudio.microsoft.com/downloads/",target:"_blank",rel:"noopener noreferrer"},m=c("<li>启动 Visual Studio Installer 以完成 Visual Studio 的安装流程 <ul><li>你需要安装 <code>.NET desktop development</code>、 <code>Desktop development with C++</code> 和 <code>Universal Windows Platform development</code> 组件</li></ul></li><li>安装 Visual Studio 商店中由 Microsoft 提供的 <code>Single-project MSIX Packaging Tools for VS 2022</code> 插件</li><li>使用 Git clone <code>https://github.com/DGP-Studio/Snap.Hutao.git</code> 到你的本地设备</li><li>将分支切换为 <code>develop</code></li><li>使用你的 Visual Studio 打开项目 solution，接下来你就可以开始编辑代码了</li>",5),g={id:"开启-debug",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#开启-debug","aria-hidden":"true"},"#",-1),k={href:"https://www.microsoft.com/store/productid/9P7KNL5RWT25",target:"_blank",rel:"noopener noreferrer"},w={href:"https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"Sysinternals Suite",-1),H=e("li",null,[o("从开始菜单或解压后的文件中找到 "),e("code",null,"DebugView"),o(" 并启动")],-1),P=e("li",null,"启动 Snap Hutao 主程序",-1),V=e("li",null,"观察 DebugView 的输出",-1),x={id:"发起-pull-request",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#发起-pull-request","aria-hidden":"true"},"#",-1),E=e("li",null,[o("所有不是从项目其它分支发起的 Pull Request 都只被允许合并进 "),e("code",null,"develop"),o(" 分支")],-1),I={href:"https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"main",-1),A={id:"测试打包程序",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#测试打包程序","aria-hidden":"true"},"#",-1),G=e("code",null,"develop",-1),N=e("code",null,"main",-1),z=e("code",null,"Snap Hutao Alpha",-1),B=e("code",null,"pre-release",-1),y={href:"https://github.com/DGP-Studio/Snap.Hutao/releases",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/DGP-Studio/Snap.Hutao/releases/download/2023.10.3.1/Snap.Hutao.CI.cer",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"*如果在最新的发布中没有包含程序安装包附件，则意味着它仍然处于上传过程中。",-1);function L(M,W){const n=i("ExternalLinkIcon"),s=i("HopeIcon");return r(),a("div",null,[u,h,e("p",null,[o("你可以在 GitHub 上查看所有当前仍然"),e("a",_,[o("未解决的问题"),t(n)])]),e("h2",p,[f,o(),t(s,{icon:"iconfont icon-visual-studio",size:"1.5rem",color:"rgb(193,142,241)"}),o(" 设置 Snap.Hutao 项目")]),e("ol",null,[e("li",null,[o("下载并安装 "),e("a",b,[o("Visual Studio 2022 Community"),t(n)])]),m]),e("h2",g,[S,o(),t(s,{icon:"iconfont icon-debug",size:"1.5rem",color:"rgb(73,156,84)"}),o(" 开启 Debug")]),e("ol",null,[e("li",null,[o("从"),e("a",k,[o("微软商店"),t(n)]),o("或"),e("a",w,[o("微软官网"),t(n)]),o("下载并安装 "),v]),H,P,V]),e("h2",x,[D,o(),t(s,{icon:"iconfont icon-pull-request",size:"1.5rem",color:"rgb(130,80,223)"}),o(" 发起 Pull Request")]),e("ul",null,[E,e("li",null,[o("如果你提交的代码与已有的 issue 相关，请使用请使用"),e("a",I,[o("关键词"),t(n)]),o(" 将你的 PR 与相关的 issue 关联起来。这样当你的 PR 最终被合并进 "),q,o(" 主分支时，这些 issue 将被自动关闭。")])]),e("h2",A,[C,o(),t(s,{icon:"iconfont icon-build-package",size:"1.5rem",color:"rgb(254,189,105)"}),o(" 测试打包程序")]),e("p",null,[o("一旦你的代码被合并进 "),G,o(" 和 "),N,o(" 分支，一个 Azure Pipeline CI 流水线脚本将运行起来以构建所在分支的最新代码，并以 "),z,o(" 命名。 当该测试包打包完成后，它将被以 "),B,o(" 的形式发布在 "),e("a",y,[o("GitHub 发布页面"),t(n)]),o("上。")]),e("p",null,[o("你需要安装 "),e("a",R,[o("Snap.Hutao.CI.cer"),t(n)]),o(" 证书到你的本地设备上以允许你安装测试版安装包。")]),T])}const K=l(d,[["render",L],["__file","contribute.html.vue"]]);export{K as default};