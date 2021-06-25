<template>
    <div class="hidden shadow-2xl md:block">
        <div class="py-6 h-full flex flex-col justify-between items-center">
            <div>
                <div class="flex-shrink-0 flex items-center">
                    <app-logo />
                </div>
                <nav-side-bar-item />
            </div>
            <div class="border-t-2 w-full">
                <languague-option-container />
            </div>
        </div>
    </div>
</template>

<script>
import NavSideBarItem from "./NavSideBarItem.vue";
import LanguagueOptionContainer from "@/components/Common/LanguageOption/LanguagueOptionContainer.vue";
export default {
    name: "NarrowSideBar",
    components: { NavSideBarItem, LanguagueOptionContainer },
};
</script>
