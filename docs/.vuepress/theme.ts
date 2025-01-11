import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, ruNavbar, idNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, ruSidebar, idSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://hut.ao",

    author: {
      name: "DGP-Studio",
      url: "https://github.com/DGP-Studio",
    },

    iconAssets: [
      "https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
      "https://at.alicdn.com/t/c/font_3861247_yn9taeyq2sc.css",
    ],

    logo: "https://img.alicdn.com/imgextra/i1/1797064093/O1CN01ybZ68o1g6e7nwgiKI_!!1797064093.png_.webp",

    repo: "DGP-Studio/Snap.Hutao",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    docsRepo: "DGP-Studio/Snap.Hutao.Docs",

    docsDir: "docs",

    locales: {
      "/en/": {
        // navbar
        navbar: enNavbar,

        // sidebar
        sidebar: enSidebar,

        footer: "Be the best Genshin Impact tool",

        displayFooter: true,

        metaLocales: {
          editLink: "Edit this page on GitHub",
        },
      },
      "/ru/": {
        // Панель навигации (navbar)
        navbar: ruNavbar,

        // Боковая панель (sidebar)
        sidebar: ruSidebar,

        // Нижний колонтитул (footer)
        footer: "Лучший инструмент для Genshin Impact",

        // Отображение нижнего колонтитула
        displayFooter: true,

        // Локализованные мета-данные
        metaLocales: {
          editLink: "Редактировать страницу на GitHub",
        },
      },

      "/id/": {
        // navbar
        navbar: idNavbar,

        // sidebar
        sidebar: idSidebar,

        footer: "Menjadi alat terbaik untuk Genshin Impact",

        displayFooter: true,

        metaLocales: {
          editLink: "Edit halaman ini di GitHub",
        },
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: "用开源社区力量为原神 PC 端玩家带来最好的游戏体验",

        displayFooter: true,

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    markdown: {
      linkify: false,
      component: true,
      align: true,
      footnote: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      tabs: true,
      include: true,
    },

    plugins: {
      comment: {
        provider: "Giscus",
        repo: "DGP-Studio/Snap.Hutao.Docs.Comments",
        repoId: "R_kgDOKySqhg",
        category: "Announcements",
        categoryId: "DIC_kwDOKySqhs4CbRrr",
        mapping: "pathname",
        inputPosition: "bottom",
      },

      components: {
        components: ["Badge", "BiliBili", "VPCard", "VPBanner"],
      },

      docsearch: {
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
                  helpText:
                    "Проверте свое подключение к Интернету, а так-же запрашиваемый ресурс",
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
                  reportMissingResultsText:
                    "Как вы думаете, должен ли этот запрос давать какой-то результат :> ?",
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
                  reportMissingResultsText:
                    "Do you think there should be results for this query?",
                  reportMissingResultsLinkText:
                    "Click here to provide feedback",
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
                  helpText:
                    "Anda mungkin perlu memeriksa koneksi internet Anda",
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
                  reportMissingResultsText:
                    "Apakah Anda pikir harus ada hasil untuk kueri ini?",
                  reportMissingResultsLinkText:
                    "Klik di sini untuk memberikan masukan",
                },
              },
            },
          },
        },
      },

      // https://ecosystem.vuejs.press/zh/plugins/feed/
      // https://theme-hope.vuejs.press/zh/config/plugins/feed.html
      feed: {
        rss: true,
      },

      sitemap: {
        changefreq: "weekly",
      },

      pwa: {
        appendBase: true,

        favicon: "/favicon.ico",
        cacheHTML: false,
        cacheImage: true,
        themeColor: "#f26d6d",
        update: "hint",

        apple: {
          icon: "/favicon.ico",
        },

        manifest: {
          icons: [
            {
              src: "/pwa-icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/pwa-icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/pwa-icon/chrome-144.png",
              sizes: "144x144",
              type: "image/png",
            },
            {
              src: "/pwa-icon/chrome-72.png",
              sizes: "72x72",
              type: "image/png",
            },
            {
              src: "/pwa-icon/chrome-96.png",
              sizes: "96x96",
              type: "image/png",
            },
            {
              src: "/pwa-icon/chrome-48.png",
              sizes: "48x48",
              type: "image/png",
            },
          ],
        },
      },

      redirect: {
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
      },
    },
  },
  { custom: true },
);
