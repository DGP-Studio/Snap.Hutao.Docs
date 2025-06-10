import { navbar } from "vuepress-theme-hope";

export const idNavbar = navbar([
  "/id/",
  {
    text: "Dokumen",
    icon: "iconfont icon-article",
    link: "/id/menu",
  },
  {
    text: "Unduh",
    icon: "iconfont icon-install",
    link: "/id/quick-start",
  },
  {
    text: "Dukung Kami",
    icon: "iconfont icon-like",
    link: "/id/support-us",
  },
  {
    text: "Komunitas",
    icon: "iconfont icon-community",
    link: "/id/community",
  },
  {
    text: "Proyek",
    icon: "iconfont icon-update",
    ariaLabel: "ducalis-changelog-widget",
    link: `javascript:void(0);`,
  },
  {
    text: "Bantuan & Dukungan",
    icon: "iconfont icon-define",
    prefix: "/id/",
    children: [
      {
        text: "Log Pembaruan",
        icon: "iconfont icon-update",
        link: "statements/update-log",
      },
      {
        text: "Ketersediaan Layanan",
        children: [
          {
            text: "Uptime Kuma",
            icon: "/images/202312/uptime-kuma.svg",
            link: "https://status.snapgenshin.cn/status",
          },
        ],
      },
      {
        text: "Pertanyaan & Umpan Balik",
        children: [
          {
            text: "FAQ",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ",
          },
          {
            text: "Lapor Bug",
            icon: "iconfont icon-debug",
            link: "statements/bug-report",
          },
        ],
      },
    ],
  },
]);