import Vuex from "vuex";
import { createApp } from "vue";
import createPersistedState from "vuex-persistedstate";
import App from "@/App.vue";

const modules = getAllModuleStores();

const app = createApp(App);

app.use(Vuex);

export default new Vuex.Store({
    modules,
    plugins: [createPersistedState()],
});

function getAllModuleStores() {
    const moduleFiles = import.meta.globEager("./modules/*.js");
    const modules = {};

    // Load store modules dynamically.
    for (const key in moduleFiles) {
        const moduleName = key.replace(/(\.\/|\.js)/g, "").replace("modules/", "");
        const module = { ...moduleFiles[key].default, ...{ namespaced: true } };

        modules[moduleName] = module;
    }

    console.log(modules);
    return modules;
}
