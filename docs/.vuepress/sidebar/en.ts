import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    "project",
    "i18n",
    "quick-start",
    {
      icon: "read",
      text: "Features",
      prefix: "features/",
      children: "structure",
    },
    {
      icon: "advance",
      text: "Advanced",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "article",
      text: "Statements",
      prefix: "statements/",
      children: "structure",
    },
  ],
});
