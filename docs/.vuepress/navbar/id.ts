import { navbar } from "vuepress-theme-hope";

export const idNavbar = navbar([
  "/id/",
  {
    text: "Document",
    icon: "iconfont icon-article",
    link: "/id/menu",
  },
  {
    text: "Unduh",
    icon: "iconfont icon-install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
  },
  {
    text: "Komunitas",
    icon: "iconfont icon-community",
    link: "/id/community",
  },
  {
    text: "Servis Tersedia",
    icon: "iconfont icon-define",
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
]);
