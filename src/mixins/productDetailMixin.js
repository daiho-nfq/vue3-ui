const productDetailMixin = {
    props: {
        formData: {
            type: Object,
            required: true,
        },
        stateData: {
            type: Object,
            required: false,
        },
    },
    computed: {
        submitPayload() {
            return {
                formData: this.formData,
            };
        },
    },
    methods: {
        submit() {
            console.log(this.submitPayload);
        },
    },
};

export default productDetailMixin;
