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
    text: "Bergabung dengan Komunitas",
    icon: "iconfont icon-community",
    link: "/id/community",
  },
  {
    text: "Papan Proyek",
    icon: "iconfont icon-update",
    ariaLabel: "ducalis-changelog-widget",
    link: `javascript:void(0);`,
  },
  {
    text: "Bantuan dan Dukungan",
    icon: "iconfont icon-define",
    prefix: "/id/",
    children: [
      {
        text: "Catatan Perubahan",
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
        text: "Masalah dan Umpan Balik",
        children: [
          {
            text: "FAQ",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ.html",
          },
          {
            text: "Laporkan Masalah",
            icon: "iconfont icon-debug",
            link: "statements/bug-report.html",
          },
        ],
      },
    ],
  },
]);
