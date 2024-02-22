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
        src: "https://umami.irain.in/script.js",
        "data-website-id": "1a7be6c3-a024-47e2-9a42-29e66b997a36",
        async: "",
        defer: "",
      },
    ],
    [
      "script",
      {
        type: "module",
        src: "https://get.microsoft.com/badge/ms-store-badge.bundled.js",
      },
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

  shouldPrefetch: false
});
