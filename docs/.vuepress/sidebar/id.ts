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
      text: "Panduan Fitur",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "Alat Permainan",
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
          text: "WIKI Permainan",
          children: ["character-wiki", "weapon-wiki", "monster-wiki"],
        },
        {
          icon: "iconfont icon-set",
          text: "Fitur Perangkat Lunak",
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
      text: "Pengembangan Sumber Terbuka",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Pernyataan dan Pengumuman",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Log Pengembangan",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
