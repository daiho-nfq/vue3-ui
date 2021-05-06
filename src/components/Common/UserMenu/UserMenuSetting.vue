<template>
    <Menu as="div" class="relative flex-shrink-0">
        <div>
            <MenuButton
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <span class="sr-only">Open user menu</span>
                <UserCircleIcon class="h-8 w-8" aria-hidden="true" />
            </MenuButton>
        </div>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <user-menu-setting-item />
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { UserCircleIcon } from "@heroicons/vue/outline";
import UserMenuSettingItem from "./UserMenuSettingItem.vue";

export default {
    name: "UserMenuSetting",
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        UserCircleIcon,
        UserMenuSettingItem,
    },
};
</script>
