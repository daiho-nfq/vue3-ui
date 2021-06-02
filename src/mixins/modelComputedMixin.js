const modelComputedMixin = {
    props: ["modelValue"],
    computed: {
        computedValue: {
            get() {
                return this.modelValue;
            },
            set(modelValue) {
                this.$emit("input", modelValue);
            },
        },
    },
};

export default modelComputedMixin;
