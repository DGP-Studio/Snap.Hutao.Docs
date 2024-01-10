import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "project",
    "i18n",
    "quick-start",
    {
      icon: "iconfont icon-read",
      text: "功能指南",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "工具箱功能",
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
          text: "数据 WIKI",
          children: [
            "character-wiki.md",
            "weapon-wiki.md",
            "monster-wiki.md"
          ]
        },
        {
          icon: "iconfont icon-setting",
          text: "软件功能",
          children: [
            "feedback-center.md",
            "hutao-passport.md",
            "hutao-settings.md"
          ]
        },
      ]
    },
    {
      icon: "iconfont icon-advance",
      text: "高级",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "开源开发",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "声明和公告",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "开发日志",
      prefix: "blog/",
      children: "structure",
    }
  ],
});
