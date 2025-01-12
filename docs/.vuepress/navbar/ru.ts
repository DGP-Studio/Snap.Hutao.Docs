import { navbar } from "vuepress-theme-hope";

export const ruNavbar = navbar([
  "/ru/",
  {
    text: "Документация",
    icon: "iconfont icon-article",
    link: "/ru/menu",
  },
  {
    text: "Скачать",
    icon: "iconfont icon-install",
    link: "/ru/quick-start",
  },
  {
    text: "Support us",
    icon: "iconfont icon-like",
    link: "/ru/support-us",
  },
  {
    text: "Сообщество",
    icon: "iconfont icon-community",
    link: "/ru/community",
  },
  {
    text: "Доступность сервиса",
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
