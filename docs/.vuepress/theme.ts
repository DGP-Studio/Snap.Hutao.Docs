import { hopeTheme } from "vuepress-theme-hope";
import {
  enNavbar,
  zhNavbar,
  ruNavbar,
  idNavbar,
  jpNavbar,
} from "./navbar/index.js";
import {
  enSidebar,
  zhSidebar,
  ruSidebar,
  idSidebar,
  jpSidebar,
} from "./sidebar/index.js";

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

    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Bilibili", "Repo", "Outlook", "Search"],
    },

    locales: {
      "/en/": {
        navbar: enNavbar,
        sidebar: enSidebar,
        footer: "Be the best Genshin Impact tool",
        displayFooter: true,
        metaLocales: {
          editLink: "Edit this page on GitHub",
        },
      },
      "/ru/": {
        navbar: ruNavbar,
        sidebar: ruSidebar,
        footer: "Лучший инструмент для Genshin Impact",
        displayFooter: true,
        metaLocales: {
          editLink: "Редактировать страницу на GitHub",
        },
      },
      "/id/": {
        navbar: idNavbar,
        sidebar: idSidebar,
        footer: "Menjadi alat terbaik untuk Genshin Impact",
        displayFooter: true,
        metaLocales: {
          editLink: "Edit halaman ini di GitHub",
        },
      },
      "/zh/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        footer: "用开源社区力量为原神 PC 端玩家带来最好的游戏体验",
        displayFooter: true,
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
      "/jp/": {
        navbar: jpNavbar,
        sidebar: jpSidebar,
        footer: "原神プレイヤーに最高のツールを提供する",
        displayFooter: true,
        metaLocales: {
          editLink: "GitHubでこのページを編集",
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
            },
          },
          "/ru/": {
            placeholder: "Поиск",
            translations: {
              button: {
                buttonText: "Поиск",
                buttonAriaLabel: "Поиск",
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
            },
          },
          "/id/": {
            placeholder: "Cari dokumentasi",
            translations: {
              button: {
                buttonText: "Cari dokumentasi",
                buttonAriaLabel: "Cari dokumentasi",
              },
            },
          },
          "/jp/": {
            placeholder: "ドキュメントを検索",
            translations: {
              button: {
                buttonText: "ドキュメントを検索",
                buttonAriaLabel: "ドキュメントを検索",
              },
            },
          },
        },
      },

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
          "/ru/": ["ru-RU", "ru"],
          "/id/": ["id-ID", "id"],
          "/jp/": ["ja-JP", "jp"],
        },
      },
    },
  },
  { custom: true },
);
