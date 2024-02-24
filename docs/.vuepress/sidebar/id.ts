import { sidebar } from "vuepress-theme-hope";

export const idSidebar = sidebar({
  "/id/": [
    "",
    "project",
    "i18n",
    "quick-start",
    "support-us",
    {
      icon: "iconfont icon-read",
      text: "Fitur",
      prefix: "features/",
      children: "structure",
    },
    {
      icon: "iconfont icon-advance",
      text: "Lanjutan",
      prefix: "advanced/",
      children: "structure",
    },
    {
      icon: "iconfont icon-github",
      text: "Pengembangan Sumber Terbuka",
      prefix: "development/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Statement",
      prefix: "statements/",
      children: "structure",
    },
    {
      icon: "iconfont icon-article",
      text: "Dev Logs",
      prefix: "blog/",
      children: "structure",
    },
  ],
});
