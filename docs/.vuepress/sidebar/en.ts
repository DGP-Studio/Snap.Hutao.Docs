import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "workingDirectory",
      text: "Project",
      link: "project.md"
    },
    {
      icon: "network",
      text: "Localization",
      link: "i18n.md"
    },
    {
      icon: "play",
      text: "Quick Start",
      link: "quick-start.md"
    },
    {
      icon: "read",
      text: "Features",
      prefix: "features/",
      children: "structure"
    },
    {
      icon: "advance",
      text: "Advanced",
      prefix: "advanced/",
      children: "structure"
    },
    {
      icon: "article",
      text: "Statements",
      prefix: "statements/",
      children: "structure"
    }
  ],
});
