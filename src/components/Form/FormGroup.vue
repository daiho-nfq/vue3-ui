<template>
    <div class="w-full mb-5">
        <form-label v-if="label" v-text="label" />
        <slot />
    </div>
</template>

<script>
export default {
    name: "FormGroup",
    props: {
        label: String,
    },
};
</script>
