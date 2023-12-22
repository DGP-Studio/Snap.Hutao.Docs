import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar, ruNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar, ruSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://hut.ao",

  author: {
    name: "DGP-Studio",
    url: "https://github.com/DGP-Studio",
  },

  iconAssets: [
    "iconfont",
    "https://at.alicdn.com/t/c/font_3861247_yn9taeyq2sc.css",
  ],

  logo: "https://img.alicdn.com/imgextra/i4/1797064093/O1CN01vK3m2w1g6duwt8quS_!!1797064093.png",

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

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "DGP-Studio/Snap.Hutao.Docs.Comments",
      repoId: "R_kgDOKySqhg",
      category: "Announcements",
      categoryId: "DIC_kwDOKySqhs4CbRrr",
      mapping: "pathname",
      inputPosition: "bottom"
    },

    components: {
      components: ["Badge", "BiliBili", "VPCard", "VPBanner"],
      rootComponents: {
        notice: [
          {
            path: "/zh/",
            title: "加入我们",
            content:
              "如果你有<b>软件开发</b>，<b>网页前端</b>，<b>文档管理</b>或<b>视频创作</b>的经验，并希望将其施展于胡桃工具箱项目中，欢迎<a href='http://hut.ao/zh/project.html#%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC'>加入开发团队</a>",
            fullscreen: false,
            showOnce: false,
          },
        ],
      },
    },

    feed: {
      rss: true,
    },

    sitemap: {
      changefreq: "weekly",
    },

    mdEnhance: {
      align: true,
      footnote: true,
      imgLazyload: true,
      include: true,
      tabs: true,
      tasklist: true,
      component: true,
      imgSize: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: false,
      cachePic: true,
      appendBase: true,
      themeColor: "#f26d6d",
      update: "hint",
      apple: {
        icon: "/favicon.ico",
        statusBarColor: "black",
      },
      msTile: {
        image: "/favicon.ico",
        color: "#ffffff",
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
  },
});
