import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { redirectPlugin } from "vuepress-plugin-redirect";

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
    "/zh/": {
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
        "/zh/": {
          placeholder: "搜索文档",
          translations:{
            button:{
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          }
        },
        "/en/": {
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
    }),
    redirectPlugin({
      defaultLocale: "/en/",
      defaultBehavior: "defaultLocale",
      autoLocale: true,
      switchLocale: "modal",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
      }
    }),
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
