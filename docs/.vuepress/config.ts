import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { defineUserConfig } from "vuepress";
// https://ecosystem.vuejs.press/zh/plugins/redirect.html
import { redirectPlugin } from "vuepress-plugin-redirect";
import { addCustomElement, addViteConfig } from "vuepress-shared/node";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

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
    redirectPlugin({
      defaultLocale: "/en/",
      autoLocale: true,
      switchLocale: "modal",
      localeConfig: {
        "/en/": ["en-US", "en-UK", "en"],
        "/zh/": ["zh-CN", "zh-TW", "zh"],
        "/ru/": [
          "ru-RU",
          "ru-KZ",
          "ru-BY",
          "ru-UA",
          "ru-MD",
          "ru-LV",
          "tt-RU",
          "ru",
        ],
        "/id/": ["id-ID", "id"],
      },
    }),
  ],

  theme,

  shouldPrefetch: false,

  extendsBundlerOptions: (config, app) => {
    addViteConfig(config, app, {
      build: {
        chunkSizeWarningLimit: 1500,
      },
    });
    addCustomElement(config, app, "ms-store-badge");
  },
});
