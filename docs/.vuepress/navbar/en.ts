import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Document", icon: "iconfont icon-article", link: "/en/menu.html" },
  {
    text: "Download",
    icon: "iconfont icon-install",
    link: "/en/quick-start.html",
  },
  {
    text: "Community",
    icon: "iconfont icon-community",
    link: "/en/community",
  },
  {
    text: "Help & Support",
    icon: "iconfont icon-define",
    children: [
      {
        text: "Update Log",
        icon: "iconfont icon-update",
        link: "/en/statements/update-log.html",
      },
      {
        text: "Service Availability",
        children: [
          {
            text: "UptimeRobot",
            icon: "/images/202312/uptimerobot-logo.svg",
            link: "https://status.hut.ao/",
          },
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
            link: "/en/advanced/FAQ.html",
          },
          {
            text: "Report Bug",
            icon: "iconfont icon-debug",
            link: "/en/statements/bug-report.html",
          },
        ],
      },
    ],
  },
]);
