import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "play",
      text: "快速开始",
      link: "quick-start.md"
    },
    {
      icon: "read",
      text: "功能指南",
      prefix: "/features/README.md",
      children: "structure"
    },
    {
      icon: "ask",
      text: "常见问题",
      prefix: "/FAQ/README.md",
      children: ["most-frequent-questions.md", "Gacha-system-and-export-principal.md"]
      //children: "structure"
    },
    {
      icon: "article",
      text: "声明和公告",
      prefix: "/statements/README.md",
      children: "structure"
    }
  ],
});
