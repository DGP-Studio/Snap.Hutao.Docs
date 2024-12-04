import { navbar } from "vuepress-theme-hope";

export const zhTWNavbar = navbar([
  "/zh-TW/",
  {
    text: "檔案",
    icon: "iconfont icon-article",
    link: "/zh-TW/menu",
  },
  {
    text: "下載",
    icon: "iconfont icon-install",
    link: "/zh-TW/quick-start",
  },
  {
    text: "支持我們",
    icon: "iconfont icon-like",
    link: "/zh-TW/support-us",
  },
  {
    text: "加入社區",
    icon: "iconfont icon-community",
    link: "/zh-TW/community",
  },
  {
    text: "項目看板",
    icon: "iconfont icon-update",
    ariaLabel: "ducalis-changelog-widget",
    link: `javascript:void(0);`,
  },
  {
    text: "幫助與支持",
    icon: "iconfont icon-define",
    prefix: "/zh-TW/",
    children: [
      {
        text: "更新日誌",
        icon: "iconfont icon-update",
        link: "statements/update-log",
      },
      {
        text: "服務可用性",
        children: [
          {
            text: "Uptime Kuma",
            icon: "/images/202312/uptime-kuma.svg",
            link: "https://status.snapgenshin.cn/status",
          },
        ],
      },
      {
        text: "問題與迴響",
        children: [
          {
            text: "常見問題",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ.html",
          },
          {
            text: "迴響問題",
            icon: "iconfont icon-debug",
            link: "statements/bug-report.html",
          },
        ],
      },
    ],
  },
]);
