import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "文档", icon: "article", link: "/documents/" },
  {
    text: "下载",
    icon: "install",
    link: "https://go.hut.ao/archive",
  },
]);
