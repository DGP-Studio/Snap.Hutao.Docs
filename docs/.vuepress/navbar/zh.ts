import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "文档", icon: "article", link: "/features/"},
  {
    text: "下载",
    icon: "install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
  },
  {
    text: "加入社区讨论",
    icon: "community",
    link: "/community.md"
  },
]);
