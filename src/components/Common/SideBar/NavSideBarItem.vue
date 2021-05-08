<template>
    <div class="flex-1 mt-6 w-full px-2 space-y-1">
        <app-link
            class="group w-full p-3 rounded-md flex flex-col items-center text-lg font-medium hover:bg-gray-300 hover:font-bold"
            v-for="item in sidebarNavigation"
            :key="item.name"
            :to="item.href"
            :class="[isCurrentRoute(item.href.name) && 'bg-gray-300 font-bold']"
        >
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            <app-p3 class="mt-2">{{ item.name }}</app-p3>
        </app-link>
    </div>
</template>

<script>
import { SIDE_BAR_NAVIGATION } from "@/constants";
import { useRoute } from "vue-router";
import { isTwoValueEqual } from "@/helpers/utils";

const sidebarNavigation = SIDE_BAR_NAVIGATION;

export default {
    name: "NavSiderBarItem",
    setup() {
        const route = useRoute();

        function isCurrentRoute(routeName) {
            return isTwoValueEqual(route.name, routeName);
        }

        return {
            sidebarNavigation,
            isCurrentRoute,
        };
    },
};
</script>
