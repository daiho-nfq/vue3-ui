<template>
    <button>
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
