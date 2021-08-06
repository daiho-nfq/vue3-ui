<template>
    <button
        class="py-2 px-4 text-white font-semibold bg-red-500 hover:bg-red-600 focus:outline-none rounded-md shadow-sm"
        :class="[disabled && 'cursor-not-allowed !bg-gray-400']"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "AppActionButton",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
