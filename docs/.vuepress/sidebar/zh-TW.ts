import { sidebar } from "vuepress-theme-hope";

export const zhTWSidebar = sidebar({
  "/zh-TW/": [
    "",
    "project",
    "i18n",
    "quick-start",
    "support-us",
    {
      icon: "iconfont icon-read",
      text: "功能指南",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "遊戲工具",
          children: [
            "dashboard",
            "game-launcher",
            "wish-export",
            "achievements",
            "real-time-notes",
            "character-data",
            "hutao-API",
            "develop-plan",
            "mhy-account-switch"
          ],
        },
        {
          icon: "iconfont icon-study",
          text: "遊戲 WIKI",
          children: ["character-wiki", "weapon-wiki", "monster-wiki"],
        },
        {
          icon: "iconfont icon-setting",
          text: "軟體功能",
          children: ["setup", "feedback-center", "hutao-passport", "hutao-settings"],
        },
      ],
    },
    {
      icon: "iconfont icon-advance",
      text: "高級",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "開源開發",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "聲明和公告",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "開發日誌",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
