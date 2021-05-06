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
import NavSideBarItem from "./NavSideBarItem.vue";

export default {
    name: "NarrowSideBar",
    components: { NavSideBarItem },
    setup() {
        return {};
    },
};
</script>
