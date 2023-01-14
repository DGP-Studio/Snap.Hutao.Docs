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

  logo: "https://img.alicdn.com/imgextra/i1/1797064093/O1CN01TOz2Cm1g6du5e8Hml_!!1797064093.png",

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
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "做最好的原神工具",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },


  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      provider: "Waline",
      serverURL: "https://comments.snapgenshin.com",
      emoji: [
          '//unpkg.com/@waline/emojis@1.1.0/weibo',
          '//unpkg.com/@waline/emojis@1.1.0/bilibili',
          '//unpkg.com/@waline/emojis@1.1.0/bmoji',
          '//unpkg.com/@waline/emojis@1.1.0/qq',
          '//unpkg.com/@waline/emojis@1.1.0/tieba'
      ],
      dark: "auto",
      requiredMeta: ['mail'],
      login: 'enable',
      reaction: true
    },

    // Operational Plugins
    feed: {
      rss: true,
    },
    seo: true,
    sitemap: true,

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imgSize: true,
      include: true,
      katex: true,
      imgLazyload: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    components: {
      components: [
          "Catalog"
      ]
    },
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      themeColor: '#f26d6d',
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
        ]
      },
    },
  },
});
