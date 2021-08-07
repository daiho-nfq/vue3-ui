<template>
    <div class="space-y-8">
        <div class="grid grid-cols-6 gap-4">
            <slot />
        </div>
        <app-action-button class="block ml-auto" v-text="'Save'" :disabled="isDisableButton" @click="submitForm" />
    </div>
</template>

<script>
import { isTwoValueEqual } from "@/helpers/utils";
import customerProfileMixin from "@/mixins/customerProfileMixin";

export default {
    name: "CustomerForm",
    mixins: [customerProfileMixin],
    props: {
        isDisableSubmit: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            originFormData: this.formData,
            isServerError: false,
        };
    },
    computed: {
        haveChanged() {
            return !isTwoValueEqual(this.formData, this.originFormData);
        },
        isDisableButton() {
            return !this.haveChanged || this.isDisableSubmit;
        },
    },
    methods: {
        submitForm() {
            if (!this.isDisableButton) {
                this.submit();
                // this.submit()
                //     .then((res) => {
                //         if (res.status === RESPONSE_STATUS.HTTP_OK || res.status === RESPONSE_STATUS.HTTP_CREATED_OK) {
                //             this.$emit("finish");
                //         } else {
                //             this.isServerError = true;
                //         }
                //     })
                //     .catch(() => {
                //         this.isServerError = true;
                //     });
            }
        },
    },
};
</script>
