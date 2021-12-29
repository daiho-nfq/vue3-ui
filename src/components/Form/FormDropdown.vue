<template>
    <select
        v-model="computedValue"
        class="
            truncate
            text-gray-900
            shadow-sm
            px-3
            py-2
            focus:ring-gray-500
            focus:border-gray-300
            w-full
            text-md
            sm:text-xl
            border-gray-300
            rounded-md
            placeholder-gray-400
        "
    >
        <option v-if="placeholder" :value="null" disabled v-text="placeholder" />
        <option
            v-for="optionItem in options"
            :key="getKey(optionItem.value)"
            :value="optionItem.value"
            v-text="optionItem.text ?? optionItem.value"
        />
    </select>
</template>

<script>
import { uuid } from "vue-uuid";
import modelComputedMixin from "@/mixins/modelComputedMixin";
export default {
    name: "FormDropdown",
    mixins: [modelComputedMixin],
    props: {
        options: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: null,
        },
    },
    methods: {
        getKey(value) {
            return `${uuid.v4()}_${value}`;
        },
    },
};
</script>
