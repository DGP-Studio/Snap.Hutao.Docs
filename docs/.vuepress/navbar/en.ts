import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "下载", icon: "download", link: "https://go.hut.ao/down" },
  {
    text: "文档",
    icon: "documents",
    link: "/features/README.md"
  },
  {
    text: "GitHub",
    icon: "github",
    link: "https://github.com/DGP-Studio/Snap.Hutao",
  },
]);
