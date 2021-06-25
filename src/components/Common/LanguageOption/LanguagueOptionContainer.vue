<template>
    <div
        v-for="(language, id) in $options.languagues"
        :key="`selection-lang-${id}`"
        class="flex items-center items-center py-3 px-4 hover:bg-gray-200 cursor-pointer"
        @click="selectLanguage(language.code)"
    >
        <component :is="language.icon" class="mr-2 w-8 h-8" />

        <app-p4 class="flex-1" :class="getActiveClasses(language.code)" v-text="$t(language.name)" />

        <component v-if="isActive(language.code)" :is="$options.checkCircleIcon" class="w-6 h-6 text-red-500" />
    </div>
</template>

<script>
import { LANGUAGES, APP_ICON } from "@/constants";
import { mapGetters, mapActions } from "vuex";
import { getter_getLanguage } from "@/store/getters";
import { action_switchLangue } from "@/store/actions";
import { isTwoValueEqual } from "@/helpers/utils";

export default {
    name: "LanguagueOptionContainer",
    checkCircleIcon: APP_ICON.CheckCircleIcon,
    languagues: LANGUAGES,
    computed: {
        ...mapGetters("language", {
            currentLanguage: getter_getLanguage,
        }),
    },
    methods: {
        ...mapActions("language", {
            switchLanguage: action_switchLangue,
        }),
        isActive(language) {
            return isTwoValueEqual(this.currentLanguage, language);
        },
        getActiveClasses(language) {
            const isActive = this.isActive(language);
            return {
                "font-semibold text-red-700": isActive,
            };
        },
        selectLanguage(language) {
            location.reload();
            this.switchLanguage(language);
        },
    },
};
</script>
