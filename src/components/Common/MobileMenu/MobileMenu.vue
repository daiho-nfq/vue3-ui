<template>
    <TransitionRoot as="template" :show="isOpenMobileMenu">
        <Dialog
            as="div"
            static
            class=""
            @click="$emit('closeMobileMenu')"
            :open="isOpenMobileMenu"
        >
            <div class="fixed inset-0 z-40 flex">
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        @click="$emit('closeMobileMenu')"
                        class="fixed inset-0 bg-gray-600 bg-opacity-75"
                    />
                </TransitionChild>
                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full"
                    enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leave-from="translate-x-0"
                    leave-to="-translate-x-full"
                >
                    <div
                        class="relative max-w-xxs w-full bg-white pt-5 pb-4 flex-1 flex flex-col"
                    >
                        <TransitionChild
                            as="template"
                            enter="ease-in-out duration-300"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="ease-in-out duration-300"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                        >
                            <div class="absolute top-1 right-0 -mr-10 p-1">
                                <app-close-button
                                    @click="$emit('closeMobileMenu')"
                                />
                            </div>
                        </TransitionChild>

                        <app-logo />

                        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                            <mobile-menu-item />
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
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

import { MenuAlt2Icon } from "@heroicons/vue/outline";

import { SIDE_BAR_NAVIGATION } from "../../../constants";
import AppLogo from "../../UI/AppLogo.vue";
import AppLink from "../../UI/AppLink.vue";
import AppCloseButton from "../../UI/AppCloseButton.vue";
import MobileMenuItem from "./MobileMenuItem.vue";

const sidebarNavigation = SIDE_BAR_NAVIGATION;

export default {
    name: "MobileMenu",
    components: {
        Dialog,
        DialogOverlay,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        MenuAlt2Icon,
        AppLogo,
        AppLink,
        AppCloseButton,
        MobileMenuItem,
    },
    props: {
        isOpenMobileMenu: Boolean,
    },
    setup() {
        return {
            sidebarNavigation,
        };
    },
};
</script>
