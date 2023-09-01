import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    "project",
    "i18n",
    "quick-start",
    {
      icon: "read",
      text: "功能指南",
      prefix: "features/",
      children: "structure",
    },
    {
      icon: "advance",
      text: "高级",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "article",
      text: "声明和公告",
      prefix: "statements/",
      children: "structure",
    },
  ],
});
