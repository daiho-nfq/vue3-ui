const modelComputedMixin = {
    props: ["modelValue"],
    computed: {
        computedValue: {
            get() {
                return this.modelValue;
            },
            set(modelValue) {
                this.$emit("update:modelValue", modelValue);
            },
        },
    },
};

export default modelComputedMixin;
