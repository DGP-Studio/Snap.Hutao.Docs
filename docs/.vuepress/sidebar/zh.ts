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
          prefix: "/features/",
          children: "structure"
      },
      {
          icon: "ask",
          text: "常见问题",
          prefix: "/FAQ/",
          //children: ["most-frequent-questions.md", "Gacha-system-and-export-principal.md"]
          children: "structure"
      },
      {
          icon: "article",
          text: "声明和公告",
          prefix: "/statements/",
          children: "structure"
      }
  ],
});
