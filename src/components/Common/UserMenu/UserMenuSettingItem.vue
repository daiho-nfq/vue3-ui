<template>
    <MenuItem
        v-for="item in userNavigation"
        :key="item.name"
        v-slot="{ active }"
    >
        <app-link
            :to="item.href"
            :class="[
                active ? 'bg-gray-100' : '',
                'block px-4 py-2 text-sm text-gray-700',
            ]"
        >
            {{ item.name }}
        </app-link>
    </MenuItem>
</template>

<script>
import { MenuItem } from "@headlessui/vue";
import { USER_NAVIGATION } from "@/constants";

const userNavigation = USER_NAVIGATION;
export default {
    name: "UserMenuSettingItem",
    components: {
        MenuItem,
    },
    setup() {
        return {
            userNavigation,
        };
    },
};
</script>
