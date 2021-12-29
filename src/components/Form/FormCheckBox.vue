<template>
    <label>
        <input v-model="computedValue" type="checkbox" :value="inputValue" class="hidden" :disabled="false" />
        <span class="flex text-gray-900 font-normal items-center space-x-2">
            <span
                class="flex-center w-4 h-4 text-white border border-gray-500 bg-white"
                :class="[isChecked && 'bg-green-500']"
            />
            <app-p5 class="flex-grow flex-1">
                <slot></slot>
            </app-p5>
        </span>
    </label>
</template>

<script>
import modelComputedMixin from "@/mixins/modelComputedMixin";
import { CheckIcon } from "@heroicons/vue/solid";
import { isBoolean } from "@/helpers/utils";

export default {
    name: "FormCheckBox",
    mixins: [modelComputedMixin],
    components: { CheckIcon },
    props: {
        modelValue: {
            type: [String, Number, Array, Boolean],
            required: true,
        },
        inputValue: {
            type: [String, Number, Boolean],
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isChecked() {
            if (isBoolean(this.modelValue)) {
                return this.modelValue;
            }

            const isExisitedValue = Array.isArray(this.modelValue) && this.modelValue.indexOf(this.inputValue) > -1;

            return this.modelValue === this.inputValue || isExisitedValue;
        },
    },
};
</script>
