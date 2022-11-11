import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
      "",
      {
          icon: "workingDirectory",
          text: "项目介绍",
          link: "project.md"
      },
      {
          icon: "play",
          text: "快速开始",
          link: "quick-start.md"
      },
      {
          icon: "read",
          text: "功能指南",
          prefix: "features/",
          children: [
            "features" ,
            "game-launcher" ,
            "wish-export" ,
            "daily-notes" ,
            "achievements" ,
            "character-data" ,
            "hutao-API" ,
            "character-wiki" ,
          ],
      },
      {
          icon: "ask",
          text: "常见问题",
          prefix: "FAQ/",
          children: [
            "most-frequent-questions" ,
            "mihoyo-risk-tip" ,
            "artifact-rating-rules" ,
            "Gacha-system-and-export-principal" ,
            "HttpRequestException" ,
          ],
      },
      {
          icon: "article",
          text: "声明和公告",
          prefix: "statements/",
          children: [
            "bug-report" ,
            "privacy-statement" ,
          ],
      }
  ],
});
