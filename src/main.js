import { createApp } from "vue";
import App from "@/components/App.vue";
import "@/assets/style/index.css";
import router from "@/router";
import store from "@/store";
import "@/components/UI";
import registerGlobalComponents from "@/components";

const app = createApp(App);

registerGlobalComponents(app);

app.use(router, store).mount("#app");
