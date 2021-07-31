<template>
    <app-p4 class="truncate font-semibold text-gray-700" v-text="label" />
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
