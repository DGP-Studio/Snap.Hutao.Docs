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
    // 创建自定义func用于触发点击事件
    [
      "script",
      {},
      `!function() {
      const addDcls = () => {
        // 查找 aria-label 为“ducalis-changelog-widget”的元素
        const widget = document.querySelector('[aria-label="ducalis-changelog-widget"]');
        // 如果找到了元素，且元素没有 ducalis-changelog-widget 的 class，则添加该 class
        if (widget && !widget.classList.contains('ducalis-changelog-widget')) {
          widget.classList.add('ducalis-changelog-widget');
        }
      }
      // 监听路由变化
      const observer = new MutationObserver(addDcls);
      observer.observe(document.querySelector('body'), { childList: true, subtree: true });
      // 页面加载完成后执行一次
      addDcls();
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
