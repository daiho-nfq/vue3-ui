<template>
    <button
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm"
        :disabled="disable"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        disable: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
