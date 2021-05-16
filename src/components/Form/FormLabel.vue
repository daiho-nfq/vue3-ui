<template>
    <app-p2 class="truncate font-medium text-gray-700" v-text="label" />
</template>

<script>
export default {
    name: "FormLabel",
    props: {
        label: {
            type: String,
            required: true,
        },
    },
};
</script>
