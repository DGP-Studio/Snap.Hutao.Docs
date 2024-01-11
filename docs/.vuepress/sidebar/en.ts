import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    "project",
    "i18n",
    "quick-start",
    {
      icon: "iconfont icon-read",
      text: "Features",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "Game Tools",
          children: [
            "dashboard.md",
            "game-launcher.md",
            "wish-export.md",
            "achievements.md",
            "real-time-notes.md",
            "character-data.md",
            "hutao-API.md",
            "develop-plan.md"
          ]
        },
        {
          icon: "iconfont icon-study",
          text: "Game WIKI",
          children: [
            "character-wiki.md",
            "weapon-wiki.md",
            "monster-wiki.md"
          ]
        },
        {
          icon: "iconfont icon-setting",
          text: "Snap Hutao Features",
          children: [
            "feedback-center.md",
            "hutao-passport.md",
            "hutao-settings.md"
          ]
        },
      ],
    },
    {
      icon: "iconfont icon-advance",
      text: "Advanced",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "Open Source Development",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Statements",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Dev Logs",
      prefix: "blog/",
      children: "structure",
    }
  ],
});
