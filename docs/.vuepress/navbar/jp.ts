import { navbar } from "vuepress-theme-hope";

export const jpNavbar = navbar([
  "/jp/",
  {
    text: "ドキュメント",
    icon: "iconfont icon-article",
    link: "/jp/menu",
  },
  {
    text: "ダウンロード",
    icon: "iconfont icon-install",
    link: "/jp/quick-start",
  },
  {
    text: "サポートする",
    icon: "iconfont icon-like",
    link: "/jp/support-us",
  },
  {
    text: "コミュニティに参加",
    icon: "iconfont icon-community",
    link: "/jp/community",
  },
  {
    text: "プロジェクトボード",
    icon: "iconfont icon-update",
    ariaLabel: "ducalis-changelog-widget",
    link: `javascript:void(0);`,
  },
  {
    text: "ヘルプとサポート",
    icon: "iconfont icon-define",
    prefix: "/jp/",
    children: [
      {
        text: "更新ログ",
        icon: "iconfont icon-update",
        link: "statements/update-log",
      },
      {
        text: "サービスの利用状況",
        children: [
          {
            text: "Uptime Kuma",
            icon: "/images/202312/uptime-kuma.svg",
            link: "https://status.snapgenshin.cn/status",
          },
        ],
      },
      {
        text: "問題とフィードバック",
        children: [
          {
            text: "よくある質問",
            icon: "iconfont icon-ask",
            link: "advanced/FAQ.html",
          },
          {
            text: "問題を報告",
            icon: "iconfont icon-debug",
            link: "statements/bug-report.html",
          },
        ],
      },
    ],
  },
]);
