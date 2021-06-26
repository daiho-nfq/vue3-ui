<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <TransitionRoot
        appear
        :show="true"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <div class="fixed inset-0 z-250 w-full flex items-center justify-center">
            <div class="absolute w-full h-full left-0 top-0 right-0 bottom-0 bg-gray-500 opacity-50" @click="close" />
            <div
                class="
                    w-full
                    h-full
                    bg-gray-250
                    flex flex-col
                    relative
                    h-auto
                    sm:max-h-90
                    sm:border sm:border-gray-400
                    sm:shadow
                    border-0
                    rounded-lg
                "
                :class="sizePopupClass"
            >
                <div class="flex-grow bg-white overflow-auto flex flex-col rounded-lg">
                    <div class="flex-grow overflow-y-auto overflow-x-hidden no-scrollbar !p-0">
                        <slot class="p-0 rounded-lg bg-white shadow w-auto" />
                    </div>
                </div>
                <app-close-button
                    @click="close"
                    class="absolute text-black text-2xl top-0 right-0 mt-2 mr-2 cursor-pointer"
                />
            </div>
        </div>
    </TransitionRoot>
</template>

<script>
import { TransitionRoot } from "@headlessui/vue";
import scrollableBodyMixin from "@/mixins/scrollableBodyMixin";

export default {
    name: "AppPopup",
    mixins: [scrollableBodyMixin],
    components: { TransitionRoot },
    props: {
        size: {
            type: String,
            default: "M",
            validator: function (value) {
                return ["S", "M", "L", "XL"].indexOf(value.toUpperCase()) !== -1;
            },
        },
    },
    computed: {
        sizePopupClass() {
            return this.$style["container" + this.size.toUpperCase()];
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
    mounted() {
        this.onOpeningPopup();
    },
    destroyed() {
        this.onClosingPopup();
    },
};
</script>
<style scoped module>
@screen sm {
    .containerS {
        max-width: 33%;
    }

    .containerM {
        max-width: 50%;
    }

    .containerL {
        max-width: 66%;
    }

    .containerXL {
        max-width: 75%;
    }
}
</style>
