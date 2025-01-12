import { sidebar } from "vuepress-theme-hope";

export const ruSidebar = sidebar({
  "/ru/": [
    "",
    "project",
    "i18n",
    "quick-start",
    "support-us",
    {
      icon: "iconfont icon-read",
      text: "Руководство по функциям",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "Игровые инструменты",
          children: [
            "dashboard",
            "game-launcher",
            "wish-export",
            "achievements",
            "real-time-notes",
            "character-data",
            "hutao-API",
            "imaginarium-theater",
            "develop-plan",
            "mhy-account-switch",
          ],
        },
        {
          icon: "iconfont icon-study",
          text: "Игровая WIKI",
          children: ["character-wiki", "weapon-wiki", "monster-wiki"],
        },
        {
          icon: "iconfont icon-set",
          text: "Функции программного обеспечения",
          children: [
            "setup",
            "feedback-center",
            "hutao-passport",
            "hutao-settings",
          ],
        },
      ],
    },
    {
      icon: "iconfont icon-advance",
      text: "Продвинутые",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "Разработка с открытым исходным кодом",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Заявления и объявления",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Журнал разработки",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
