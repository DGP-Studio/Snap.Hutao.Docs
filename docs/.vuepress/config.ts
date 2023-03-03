import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  head:[
    ['script', {async:"", defer:"", "data-website-id":"f586534f-1741-450e-a0f4-3c0189f993c9",
      src:"https://umami.irain.in/umami.js"}, `
       `],
      ['script', {type: "module", src:"https://get.microsoft.com/badge/ms-store-badge.bundled.js"}],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "胡桃工具箱",
      description: "多功能的原神工具箱",
    },
    "/en/": {
      lang: "en-US",
      title: "Snap Hutao",
      description: "Super utilitarian Genshin Impact Tool",
    },
  },

  plugins: [
    docsearchPlugin({
      appId: "28CTGDOOQD",
      apiKey: "72d7a9a0f9f0466218ea19988886dce8",
      indexName: "hutao",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations:{
            button:{
              buttonText: "搜索文档"
            }
          }
        },
        "en": {
          placeholder: "Search documents",
          translations:{
            button:{
              buttonText: "Search documents"
            }
          }
        }
      }
    }),
    googleAnalyticsPlugin({
      id: "G-F3LFJCE3RM"
    })
  ],

  theme,

  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      build:{
        chunkSizeWarningLimit: 1500
      }
    },
    vuePluginOptions: {},
  }),
});
