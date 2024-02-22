import {defineClientConfig} from "vuepress/client";
import Sponsor from "./components/Sponsor.vue";

export default defineClientConfig({
    enhance({app, router, siteData}) {
        app.component("Sponsor", Sponsor);
    },
    setup() {
    },
    layouts: {},
    rootComponents: [],
});
