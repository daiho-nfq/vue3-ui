<template>
    <nav class="h-full flex flex-col">
        <div class="space-y-1">
            <app-link
                v-for="item in sidebarNavigation"
                :key="item.name"
                :to="item.href"
                :class="[
                    item.current
                        ? 'bg-gray-300 font-bold'
                        : 'hover:bg-gray-300 hover:font-bold',
                    'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
            >
                <component :is="item.icon" class="mr-3 h-6 w-6" />
                <app-p3>{{ item.name }}</app-p3>
            </app-link>
        </div>
    </nav>
</template>

<script>
import AppLink from "../../UI/AppLink.vue";
import AppP3 from "../../UI/AppP3.vue";
import { SIDE_BAR_NAVIGATION } from "../../../constants";

const sidebarNavigation = SIDE_BAR_NAVIGATION;
export default {
    name: "MobileMenuItem",
    components: { AppLink, AppP3 },
    setup() {
        return {
            sidebarNavigation,
        };
    },
};
</script>
