import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "文档", icon: "article", link: "/zh/menu.html" },
  {
    text: "下载",
    icon: "install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
  },
  {
    text: "加入社区讨论",
    icon: "community",
    link: "/zh/community",
  },
  {
    text: "服务可用性",
    icon: "define",
    link: "https://status.hut.ao/"
  }
]);
