<template>
    <input
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
        :class="[isError && 'border-red-300']"
        v-model.trim="computedValue"
        spellcheck="true"
        tabindex="-1"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
    />
    <app-p1 class="text-left ml-1 text-red-600 italic" v-if="isError">
        {{ errorMsg }}
    </app-p1>
</template>

<script>
import modelComputedMixin from "@/mixins/modelComputedMixin";
export default {
    name: "FormInput",
    mixins: [modelComputedMixin],
    props: {
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        errorMsg: {
            type: String,
            default: null,
        },
        isError: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
