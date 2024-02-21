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
          text: "游戏工具",
          children: [
            "dashboard",
            "game-launcher",
            "wish-export",
            "achievements",
            "real-time-notes",
            "character-data",
            "hutao-API",
            "develop-plan",
          ],
        },
        {
          icon: "iconfont icon-study",
          text: "游戏 WIKI",
          children: ["character-wiki", "weapon-wiki", "monster-wiki"],
        },
        {
          icon: "iconfont icon-setting",
          text: "软件功能",
          children: ["feedback-center", "hutao-passport", "hutao-settings"],
        },
      ],
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
    },
  ],
});
