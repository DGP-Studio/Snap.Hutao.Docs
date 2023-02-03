import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文档", icon: "article", link: "/features/"},
  {
    text: "下载",
    icon: "install",
    link: "https://d.hut.ao",
  },
  {
    text: "加入社区讨论",
    icon: "community",
    link: "/community.md"
  },
]);
