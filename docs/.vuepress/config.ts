import { viteBundler } from "@vuepress/bundler-vite";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { defineUserConfig } from "vuepress";
import { redirectPlugin } from "vuepress-plugin-redirect";

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
    docsearchPlugin({
      appId: "28CTGDOOQD",
      apiKey: "72d7a9a0f9f0466218ea19988886dce8",
      indexName: "hutao",
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
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
          },
        },
        "/ru/": {
          placeholder: "Поиск",
          translations: {
            button: {
              buttonText: "Поиск",
              buttonAriaLabel: "Поиск",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Четкие критерии запроса",
                resetButtonAriaLabel: "Четкие критерии запроса",
                cancelButtonText: "Назад",
                cancelButtonAriaLabel: "Назад",
              },
              startScreen: {
                recentSearchesTitle: "История поиска",
                noRecentSearchesText: "Нету истории поиска",
                saveRecentSearchButtonTitle: "Сохранить в историю поиска",
                removeRecentSearchButtonTitle: "Удалить из истории поиска",
                favoriteSearchesTitle: "Закладки",
                removeFavoriteSearchButtonTitle: "Удалить из закладок",
              },
              errorScreen: {
                titleText: "Не удалось получить результат",
                helpText: "Проверте свое подключение к Интернету, а так-же запрашиваемый ресурс",
              },
              footer: {
                selectText: "Выбрать",
                navigateText: "Переключить",
                closeText: "Закрыть",
                searchByText: "Поиск",
              },
              noResultsScreen: {
                noResultsText: "Не удалось ничего найти по вашему запросу :",
                suggestedQueryText: "Вы можете попробовать запрос",
                reportMissingResultsText: "Как вы думаете, должен ли этот запрос давать какой-то результат :> ?",
                reportMissingResultsLinkText: "Связаться с нами",
              },
            },
          },
        },
        "/en/": {
          placeholder: "Search documentation",
          translations: {
            button: {
              buttonText: "Search documentation",
              buttonAriaLabel: "Search documentation",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Clear search query",
                resetButtonAriaLabel: "Clear search query",
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "Cancel",
              },
              startScreen: {
                recentSearchesTitle: "Search History",
                noRecentSearchesText: "No recent searches",
                saveRecentSearchButtonTitle: "Save to search history",
                removeRecentSearchButtonTitle: "Remove from search history",
                favoriteSearchesTitle: "Favorites",
                removeFavoriteSearchButtonTitle: "Remove from favorites",
              },
              errorScreen: {
                titleText: "Unable to retrieve results",
                helpText: "You may need to check your network connection",
              },
              footer: {
                selectText: "Select",
                navigateText: "Switch",
                closeText: "Close",
                searchByText: "Search provider",
              },
              noResultsScreen: {
                noResultsText: "No relevant results found",
                suggestedQueryText: "You can try searching for",
                reportMissingResultsText: "Do you think there should be results for this query?",
                reportMissingResultsLinkText: "Click here to provide feedback",
              },
            },
          },
        },
        "/id/": {
          placeholder: "Cari dokumentasi",
          translations: {
            button: {
              buttonText: "Cari dokumentasi",
              buttonAriaLabel: "Cari dokumentasi",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "Hapus kueri pencarian",
                resetButtonAriaLabel: "Hapus kueri pencarian",
                cancelButtonText: "Batal",
                cancelButtonAriaLabel: "Batal",
              },
              startScreen: {
                recentSearchesTitle: "Riwayat Pencarian",
                noRecentSearchesText: "Tidak ada pencarian terbaru",
                saveRecentSearchButtonTitle: "Simpan ke riwayat pencarian",
                removeRecentSearchButtonTitle: "Hapus dari riwayat pencarian",
                favoriteSearchesTitle: "Favorit",
                removeFavoriteSearchButtonTitle: "Hapus dari favorit",
              },
              errorScreen: {
                titleText: "Tidak dapat mengambil hasil",
                helpText: "Anda mungkin perlu memeriksa koneksi internet Anda",
              },
              footer: {
                selectText: "Pilih",
                navigateText: "Alih",
                closeText: "Tutup",
                searchByText: "Penyedia pencarian",
              },
              noResultsScreen: {
                noResultsText: "Tidak ditemukan hasil yang relevan",
                suggestedQueryText: "Anda bisa mencoba mencari",
                reportMissingResultsText: "Apakah Anda pikir harus ada hasil untuk kueri ini?",
                reportMissingResultsLinkText: "Klik di sini untuk memberikan masukan",
              },
            },
          },
        },              
      },
    }),
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
        "/ru/": ["ru-RU", "ru-KZ", "ru-BY", "ru-UA", "ru-MD", "ru-LV", "tt-RU", "ru"],
        "/id/": ["id-ID", "id"],
      },
    }),
  ],

  theme,

  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500,
      },
    },
  }),
});
