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
        <div class="fixed inset-0 z-250 overflow-y-auto">
            <div class="px-4 text-center">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="close" />
                <div
                    class="h-full inline-block px-6 py-4 my-8 overflow-hidden transform bg-white shadow-xl rounded-2xl"
                >
                    <div>
                        <slot name="header" />
                        <slot name="content" />
                        <slot name="footer" />
                    </div>
                    <app-close-button
                        @click="close"
                        class="absolute text-black text-2xl top-0 right-0 mt-2 mr-2 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    </TransitionRoot>
</template>

<script>
import { TransitionRoot } from "@headlessui/vue";

export default {
    name: "AppPopup",
    components: { TransitionRoot },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>
