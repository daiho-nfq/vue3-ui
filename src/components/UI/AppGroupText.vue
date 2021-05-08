<template>
    <slot />
</template>

<script>
export default {
    name: "AppGroupText",
    props: {
        mainText: {
            type: String,
            default: null,
        },
        subText: {
            type: String,
            default: null,
        },
    },
};
</script>
