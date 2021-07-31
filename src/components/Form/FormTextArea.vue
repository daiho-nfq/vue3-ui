<template>
    <textarea
        rows="3"
        class="
            text-gray-900
            shadow-sm
            px-3
            py-2
            focus:ring-gray-500
            focus:border-gray-300
            block
            w-full
            text-md
            sm:text-xl
            border-gray-300
            rounded-md
            placeholder-gray-400
        "
        v-model.trim="computedValue"
    />
</template>

<script>
import modelComputedMixin from "@/mixins/modelComputedMixin";

export default {
    name: "FormTextArea",
    mixins: [modelComputedMixin],
};
</script>
