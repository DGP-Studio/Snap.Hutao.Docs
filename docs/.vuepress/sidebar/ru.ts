import { sidebar } from "vuepress-theme-hope";

export const ruSidebar = sidebar({
  "/ru/": [
    "",
    "project",
    "i18n",
    "quick-start",
    {
      icon: "iconfont icon-read",
      text: "Features",
      prefix: "features/",
      children: "structure",
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
    },
  ],
});
