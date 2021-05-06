<template>
    <div class="hidden shadow-2xl overflow-y-auto md:block">
        <div class="w-full py-6 flex flex-col items-center">
            <div class="flex-shrink-0 flex items-center">
                <app-logo />
            </div>
            <nav-side-bar-item />
        </div>
    </div>
</template>

<script>
import AppLogo from "../../UI/AppLogo.vue";
import NavSideBarItem from "./NavSideBarItem.vue";

export default {
    name: "NarrowSideBar",
    components: { AppLogo, NavSideBarItem },
    setup() {
        return {};
    },
};
</script>
