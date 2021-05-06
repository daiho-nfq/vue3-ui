<template>
    <div class="h-screen bg-gray-50 flex overflow-hidden">
        <narrow-side-bar />

        <mobile-menu
            @close-mobile-menu="closeMobileMenu"
            :is-open-mobile-menu="isOpenMobileMenu"
        />

        <div class="flex-1 flex flex-col overflow-hidden">
            <layout-header @open-mobile-menu="openMobileMenu" />
            <div class="flex-1 flex items-stretch overflow-hidden">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import LayoutHeader from "./LayoutHeader.vue";
import NarrowSideBar from "../components/Common/SideBar/NarrowSideBar.vue";
import MobileMenu from "../components/Common/MobileMenu/MobileMenu.vue";
export default {
    components: { LayoutHeader, NarrowSideBar, MobileMenu },
    name: "LayoutMain",
    setup() {
        const isOpenMobileMenu = ref(false);

        function openMobileMenu() {
            isOpenMobileMenu.value = true;
        }

        function closeMobileMenu() {
            isOpenMobileMenu.value = false;
        }

        return {
            isOpenMobileMenu,
            openMobileMenu,
            closeMobileMenu,
        };
    },
};
</script>
