<template>
    <router-link class="link" :to="to">
        <slot />
    </router-link>
</template>

<script>
export default {
    name: "AppLink",
    props: {
        to: {
            type: [Object, String],
            require: true,
            default: null,
        },
    },
};
</script>
