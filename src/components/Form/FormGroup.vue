<template>
    <div class="w-full mb-5">
        <form-label v-if="label" v-text="label" />
        <slot />
    </div>
</template>

<script>
import FormLabel from "./FormLabel.vue";
export default {
    name: "FormGroup",
    components: { FormLabel },
    props: {
        label: String,
    },
};
</script>
