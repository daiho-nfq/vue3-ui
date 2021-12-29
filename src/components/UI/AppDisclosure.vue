<template>
    <div class="w-full">
        <div class="w-full max-w-md mx-auto bg-white rounded-2xl">
            <Disclosure>
                <DisclosureButton
                    class="
                        flex
                        justify-between
                        w-full
                        px-4
                        py-2
                        text-base
                        font-medium
                        text-left text-gray-900
                        rounded-lg
                        hover:bg-green-100
                        focus:outline-none
                        border
                    "
                >
                    <span>{{ title }}</span>
                    <ChevronDownIcon class="w-6 h-6" />
                </DisclosureButton>
                <DisclosurePanel class="px-2 pt-4 pb-2 text-sm text-gray-500">
                    <slot />
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
