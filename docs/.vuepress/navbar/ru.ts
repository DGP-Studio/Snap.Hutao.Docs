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
    text: "Поддержите нас",
    icon: "iconfont icon-like",
    link: "/ru/support-us",
  },
  {
    text: "Присоединиться к сообществу",
    icon: "iconfont icon-community",
    link: "/ru/community",
  },
  {
    text: "Доска проекта",
    icon: "iconfont icon-update",
    ariaLabel: "ducalis-changelog-widget",
    link: `javascript:void(0);`,
  },
  {
    text: "Помощь и поддержка",
    icon: "iconfont icon-define",
    prefix: "/ru/",
    children: [
      {
        text: "Журнал обновлений",
        icon: "iconfont icon-update",
        link: "statements/update-log",
      },
      {
        text: "Доступность услуг",
        children: [
          {
            text: "Uptime Kuma",
            icon: "/images/202312/uptime-kuma.svg",
            link: "https://status.snapgenshin.cn/status",
          },
        ],
      },
      {
        text: "Вопросы и отзывы",
        children: [
          {
            text: "Часто задаваемые вопросы",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ.html",
          },
          {
            text: "Сообщить о проблеме",
            icon: "iconfont icon-debug",
            link: "statements/bug-report.html",
          },
        ],
      },
    ],
  },
]);
