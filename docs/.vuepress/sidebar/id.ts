import { sidebar } from "vuepress-theme-hope";

export const idSidebar = sidebar({
  "/id/": [
    "",
    "project",
    "i18n",
    "quick-start",
    "support-us",
    {
      icon: "iconfont icon-read",
      text: "Fitur",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "Alat Bantu Game",
          children: [
            "dashboard",
            "game-launcher",
            "wish-export",
            "achievements",
            "real-time-notes",
            "character-data",
            "hutao-API",
            "develop-plan",
            "mhy-account-switch",
          ],
        },
        {
          icon: "iconfont icon-study",
          text: "WIKI Game",
          children: ["character-wiki", "weapon-wiki", "monster-wiki"],
        },
        {
          icon: "iconfont icon-set",
          text: "Fitur Snap Hutao",
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
      text: "Lanjutan",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "Pengembangan Open Source",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Pernyataan",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Catatan Pengembangan",
      prefix: "blog/",
      children: "structure",
    },
  ],
});