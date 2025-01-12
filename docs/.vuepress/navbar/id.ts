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
    link: "/id/quick-start",
  },
  {
    text: "Support us",
    icon: "iconfont icon-like",
    link: "/id/support-us",
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
        text: "Uptime Kuma",
        icon: "/images/202312/uptime-kuma.svg",
        link: "https://status.snapgenshin.cn/status",
      },
    ],
  },
]);
