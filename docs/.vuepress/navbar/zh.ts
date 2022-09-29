import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文档", icon: "article", link: "/features/README.md" },
  {
    text: "下载",
    icon: "install",
    link: "https://go.hut.ao/down",
  },
]);
