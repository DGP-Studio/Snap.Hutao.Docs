import { defineClientConfig } from "vuepress/client";

import Bilibili from "./components/Bilibili.js";
import Douyin from "./components/Douyin.js";
import Sponsor from "./components/Sponsor.vue";
import SponsorList from "./components/SponsorList.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Bilibili", Bilibili);
    app.component("Douyin", Douyin);
    app.component("Sponsor", Sponsor);
    app.component("SponsorList", SponsorList);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
