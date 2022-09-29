import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
      "",
      {
          icon: "play",
          text: "快速开始",
          link: "quick-start.md"
      },
      {
          icon: "read",
          text: "功能指南",
          prefix: "documents/features/",
          children: "structure"
      },
      {
          icon: "ask",
          text: "常见问题",
          prefix: "documents/FAQ/",
          children: ["most-frequent-questions.md", "Gacha-system-and-export-principal.md"]
          //children: "structure"
      },
      {
          icon: "article",
          text: "声明和公告",
          prefix: "documents/statements/",
          children: "structure"
      }
  ],
});
