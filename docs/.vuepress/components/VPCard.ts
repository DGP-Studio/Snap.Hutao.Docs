/**
 * @description vuepress-theme-hope 的 VPCard 组件自定义修改
 * @see https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/components/src/client/components/VPCard.ts
 */

import type { CSSProperties, FunctionalComponent } from "vue";
import { h } from "vue";
import { RouteLink, withBase } from "vuepress/client";

import "../styles/vp-card.scss";

// TODO: 未找到 isLinkExternal 实现
function isLinkExternal(link: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(link);
}

export interface CardProps {
  /**
   * Card title
   *
   * 卡片标题
   *
   */
  title: string;

  /**
   * Card description
   *
   * 卡片描述
   */
  desc?: string;

  /**
   * Card icon
   *
   * 卡片图标
   */
  logo?: string;

  /**
   * Card link
   *
   * 卡片链接
   */
  link?: string;

  /**
   * Card background
   *
   * 卡片背景
   */
  background?: string;

  /**
   * Card font color
   *
   * 卡片字体颜色
   */
  color?: string;
}

const VPCard: FunctionalComponent<CardProps> = ({
  title,
  desc = "",
  logo,
  background,
  color,
  link,
}) => {
  const children = [
    logo
      ? h("img", {
          class: "vp-card-logo",
          src: withBase(logo),
          loading: "lazy",
          "no-view": "",
        })
      : null,
    h("div", { class: "vp-card-content" }, [
      h("div", { class: "vp-card-title", innerHTML: title }),
      h("hr"),
      h("div", { class: "vp-card-desc", innerHTML: desc }),
    ]),
  ];

  const style: CSSProperties = {};

  if (background) style.background = background;
  if (color) style.color = color;

  // TODO: 具体事件名称&传参有待确定
  const rybbitTrack: Record<string, string> = {
    "data-rybbit-event": "vpcard-click",
  };
  if (title) rybbitTrack["data-rybbit-prop-title"] = title;
  if (link) rybbitTrack["data-rybbit-prop-link"] = link;
  if (logo) rybbitTrack["data-rybbit-prop-logo"] = logo;
  rybbitTrack["data-rybbit-prop-path"] = window.location.pathname;

  return link
    ? isLinkExternal(link)
      ? h(
          "a",
          {
            class: "vp-card",
            href: link,
            target: "_blank",
            style,
            ...rybbitTrack,
          },
          children,
        )
      : h(
          RouteLink,
          { to: link, class: "vp-card", style, ...rybbitTrack },
          () => children,
        )
    : h("div", { class: "vp-card", style, ...rybbitTrack }, children);
};

VPCard.displayName = "VPCard";

export default VPCard;
