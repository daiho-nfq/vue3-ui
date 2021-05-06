<template>
    <div class="flex-1 mt-6 w-full px-2 space-y-1">
        <app-link
            v-for="item in sidebarNavigation"
            :key="item.name"
            :to="item.href"
            :class="[
                item.current
                    ? 'bg-gray-300 font-bold'
                    : 'hover:bg-gray-300 hover:font-bold',
                'group w-full p-3 rounded-md flex flex-col items-center text-lg font-medium',
            ]"
        >
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            <app-p3 class="mt-2">{{ item.name }}</app-p3>
        </app-link>
    </div>
</template>

<script>
import { SIDE_BAR_NAVIGATION } from "@/constants";

const sidebarNavigation = SIDE_BAR_NAVIGATION;

export default {
    name: "NavSiderBarItem",
    setup() {
        return {
            sidebarNavigation,
        };
    },
};
</script>
