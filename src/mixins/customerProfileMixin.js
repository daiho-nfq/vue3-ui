const customerProfileMixin = {
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

export default customerProfileMixin;
