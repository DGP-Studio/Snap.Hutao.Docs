import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://hut.ao",

  author: {
    name: "DGP-Studio",
    url: "https://github.com/DGP-Studio",
  },

  iconAssets: "iconfont",

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
      provider: "Waline",
      serverURL: "https://comments.snapgenshin.com",
      emoji: [
        "//unpkg.com/@waline/emojis@1.1.0/weibo",
        "//unpkg.com/@waline/emojis@1.1.0/bilibili",
        "//unpkg.com/@waline/emojis@1.1.0/bmoji",
        "//unpkg.com/@waline/emojis@1.1.0/qq",
        "//unpkg.com/@waline/emojis@1.1.0/tieba",
      ],
      requiredMeta: ["mail"],
      reaction: false,
    },

    components: {
      components: ["Badge", "BiliBili"],
    },

    feed: {
      rss: true,
    },

    sitemap: {
      changefreq: "weekly",
    },

    mdEnhance: {
      gfm: true,
      imgLazyload: true,
      include: true,
      tabs: true,
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
