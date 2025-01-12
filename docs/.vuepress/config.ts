import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  clientConfigFile: path.resolve(__dirname, "./client.ts"),

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Noto+Sans+SC:wght@500&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "script",
      {
        type: "module",
        src: "https://get.microsoft.com/badge/ms-store-badge.bundled.js",
      },
    ],
    [
      "script",
      {},
      `
      !function(b,c,f,d,a,e){b.dclsPxl||(((d=b.dclsPxl=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)}).push=d).queue=[],(a=c.createElement("script")).async=!0,a.src=f,(e=c.getElementsByTagName("script")[0]).parentNode.insertBefore(a,e))}(window,document,"https://ducalis.io/js/widget.js");
        dclsPxl("initWidget", { 
        appId: "a64fd9c44c5b0c957fa36f76d39d47a80e5d5869", 
        boardId: "abcf6f090ecb20af83d067f0498ef7c5"
      });
      `,
    ],
    [
      "script",
      {},
      `!function() {
        var target = document.querySelector('[aria-label="ducalis-changelog-widget"]');
        var callback = () => {
          target = document.querySelector('[aria-label="ducalis-changelog-widget"]');
          if(!target) return;
          if(!target.classList.contains('ducalis-changelog-widget')) {
            target.classList.add('ducalis-changelog-widget');
          }
        };
        var observer = new MutationObserver(callback);
        callback();
        // 检测定时器
        var timer = setInterval(callback, 1000);
        if(target) { clearInterval(timer); }
        observer.observe(target, { childList: true });
    }();`,
    ],
  ],

  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "胡桃工具箱",
      description: "多功能的原神工具箱",
    },
    "/en/": {
      lang: "en-US",
      title: "Snap Hutao",
      description: "Super utilitarian Genshin Impact Toolkit",
    },
    "/id/": {
      lang: "id-ID",
      title: "Snap Hutao",
      description: "Alat Bantu Genshin Impact yang Sangat Utilitarian",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Snap Hutao",
      description: "Суперполезный набор инструментов для Genshin Impact",
    },
    "/jp/": {
      lang: "ja-JP",
      title: "スナップ胡桃",
      description: "超実用的な原神インパクトツールキット",
    },
  },

  plugins: [
    googleAnalyticsPlugin({
      id: "G-F3LFJCE3RM",
    }),
  ],

  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500,
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "ms-store-badge",
        },
      },
    },
  }),
  theme,

  shouldPrefetch: false,
});
