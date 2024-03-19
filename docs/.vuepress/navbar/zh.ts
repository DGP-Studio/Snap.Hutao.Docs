import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档",
    icon: "iconfont icon-article",
    link: "/zh/menu",
  },
  {
    text: "下载",
    icon: "iconfont icon-install",
    link: "/zh/quick-start",
  },
  {
    text: "支持我们",
    icon: "iconfont icon-like",
    link: "/zh/support-us",
  },
  {
    text: "加入社区",
    icon: "iconfont icon-community",
    link: "/zh/community",
  },
  {
    text: "帮助与支持",
    icon: "iconfont icon-define",
    prefix: "/zh/",
    children: [
      {
        text: "更新日志",
        icon: "iconfont icon-update",
        link: "statements/update-log",
      },
      {
        text: "服务可用性",
        children: [
          {
            text: "Uptime Kuma",
            icon: "/images/202312/uptime-kuma.svg",
            link: "https://status.snapgenshin.cn/status",
          },
        ],
      },
      {
        text: "问题与反馈",
        children: [
          {
            text: "常见问题",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ.html",
          },
          {
            text: "反馈问题",
            icon: "iconfont icon-debug",
            link: "statements/bug-report.html",
          },
        ],
      },
    ],
  },
]);
