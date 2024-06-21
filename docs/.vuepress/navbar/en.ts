import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Document",
    icon: "iconfont icon-article",
    link: "/en/menu",
  },
  {
    text: "Download",
    icon: "iconfont icon-install",
    link: "/en/quick-start",
  },
  {
    text: "Support us",
    icon: "iconfont icon-like",
    link: "/en/support-us",
  },
  {
    text: "Community",
    icon: "iconfont icon-community",
    link: "/en/community",
  },
  {
    text: "Kanban",
    icon: "iconfont icon-update",
    ariaLabel: "ducalis-changelog-widget",
    link: `javascript:void(0);`,
  },
  {
    text: "Help & Support",
    icon: "iconfont icon-define",
    prefix: "/en/",
    children: [
      {
        text: "Update Log",
        icon: "iconfont icon-update",
        link: "statements/update-log",
      },
      {
        text: "Service Availability",
        children: [
          {
            text: "Uptime Kuma",
            icon: "/images/202312/uptime-kuma.svg",
            link: "https://status.snapgenshin.cn/status",
          },
        ],
      },
      {
        text: "Question & Feedback",
        children: [
          {
            text: "FAQ",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ",
          },
          {
            text: "Report Bug",
            icon: "iconfont icon-debug",
            link: "statements/bug-report",
          },
        ],
      },
    ],
  },
]);
