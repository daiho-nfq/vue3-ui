<template>
    <button
        type="button"
        class="h-8 w-8 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
    >
        <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
    </button>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";

export default {
    name: "AppCloseButton",
    components: {
        XIcon,
    },
};
</script>
