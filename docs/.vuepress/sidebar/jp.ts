import { sidebar } from "vuepress-theme-hope";

export const jpSidebar = sidebar({
  "/jp/": [
    "",
    "project",
    "i18n",
    "quick-start",
    "support-us",
    {
      icon: "iconfont icon-read",
      text: "機能ガイド",
      prefix: "features/",
      children: [
        {
          icon: "iconfont icon-module",
          text: "ゲームツール",
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
          text: "ゲーム WIKI",
          children: ["character-wiki", "weapon-wiki", "monster-wiki"],
        },
        {
          icon: "iconfont icon-set",
          text: "ソフトウェア機能",
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
      text: "高度な設定",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "オープンソース開発",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "声明とお知らせ",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "開発ログ",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
