import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "workingDirectory",
      text: "项目介绍",
      link: "project",
    },
    {
      icon: "network",
      text: "国际化支持",
      link: "i18n",
    },
    {
      icon: "play",
      text: "快速开始",
      link: "quick-start",
    },
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
