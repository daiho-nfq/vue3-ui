<template>
    <button
        class="py-2 px-4 text-white bg-red-500 hover:bg-red-600 focus:outline-none rounded-md shadow-sm"
        :disabled="disable"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "AppActionButton",
    props: {
        disable: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
