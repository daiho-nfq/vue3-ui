<template>
    <header class="w-full">
        <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <app-open-button @click="$emit('openMobileMenu')" />

            <div class="flex-1 flex justify-between px-4 sm:px-6">
                <div class="flex-1 flex">
                    <app-search-bar />
                </div>

                <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                    <!-- Profile dropdown -->
                    <user-menu-setting />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";

import UserMenuSetting from "@/components/Common/UserMenu/UserMenuSetting.vue";

export default {
    name: "LayoutHeader",
    components: {
        Dialog,
        DialogOverlay,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        UserMenuSetting,
    },
};
</script>
