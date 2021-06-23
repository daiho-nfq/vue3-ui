import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/plugins/i18n";

import "@/assets/style/index.css";

import registerGlobalComponents from "@/components";

const app = createApp(App);

registerGlobalComponents(app);

app.use(i18n);

app.use(store);

app.use(router);

app.mount("#app");
