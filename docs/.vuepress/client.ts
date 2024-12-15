import { defineClientConfig } from "vuepress/client";

import Sponsor from "./components/Sponsor.vue";
import SponsorList from "./components/SponsorList.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Sponsor", Sponsor);
    app.component("SponsorList", SponsorList);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
