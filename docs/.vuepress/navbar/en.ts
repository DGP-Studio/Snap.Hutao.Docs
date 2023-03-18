import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: "Document", icon: "article", link: "/en/features/"},
  {
    text: "Download",
    icon: "install",
    link: "https://apps.microsoft.com/store/detail/snap-hutao/9PH4NXJ2JN52",
  },
  {
    text: "Community",
    icon: "community",
    link: "/en/community.md"
  },
]);
