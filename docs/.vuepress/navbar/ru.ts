import { navbar } from "vuepress-theme-hope";

export const ruNavbar = navbar([
  "/ru/",
  { text: "Документация", icon: "iconfont icon-article", link: "/ru/menu.html" },
  {
    text: "Скачать",
    icon: "iconfont icon-install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
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
        text: "UptimeRobot",
        icon: "/images/202312/uptimerobot-logo.svg",
        link: "https://status.hut.ao/",
      },
      {
        text: "Uptime Kuma",
        icon: "/images/202312/uptime-kuma.svg",
        link: "https://status.snapgenshin.cn/status",
      }
    ]
  },
]);
