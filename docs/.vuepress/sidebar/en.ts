import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "workingDirectory",
      text: "Project",
      link: "project",
    },
    {
      icon: "network",
      text: "Localization",
      link: "i18n",
    },
    {
      icon: "play",
      text: "Quick Start",
      link: "quick-start",
    },
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
