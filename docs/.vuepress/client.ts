import { defineClientConfig } from "vuepress/client";

import VPCard from "./components/VPCard.js";
import Bilibili from "./components/Bilibili.js";
import Sponsor from "./components/Sponsor.vue";
import SponsorList from "./components/SponsorList.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("VPCard", VPCard);
    app.component("Bilibili", Bilibili);
    app.component("Sponsor", Sponsor);
    app.component("SponsorList", SponsorList);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
