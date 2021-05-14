<template>
<<<<<<< HEAD
    <slot />
=======
    <div>
        <slot />
    </div>
>>>>>>> 556a759a98d2c3fa7a40f405ede7ffe88362bfd5
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
