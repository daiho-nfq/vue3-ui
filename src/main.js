import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/style/index.css";
import router from "@/router";
import store from "@/store";
import "@/components/UI";

import registerGlobalComponents from "@/components";

const app = createApp(App);

registerGlobalComponents(app);

app.use(store);

app.use(router);

app.mount("#app");
