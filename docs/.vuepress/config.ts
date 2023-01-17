import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  head:[
    ['script', {async:"", defer:"", "data-website-id":"f586534f-1741-450e-a0f4-3c0189f993c9",
      src:"https://umami.irain.in/umami.js"}, `
       `],
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
    searchProPlugin({
      indexContent: true,
      customFields:[
        {
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "分类: $content",
            "/en/": "Category：$content",
          },
        },
      ]
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
