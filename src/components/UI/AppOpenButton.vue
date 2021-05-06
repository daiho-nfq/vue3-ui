<template>
    <button
        type="button"
        class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset md:hidden"
    >
        <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
    </button>
</template>

<script>
import { MenuAlt2Icon } from "@heroicons/vue/outline";

export default {
    components: {
        MenuAlt2Icon,
    },
};
</script>
