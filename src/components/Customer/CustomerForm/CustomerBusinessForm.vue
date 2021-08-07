<template>
    <customer-form :form-data="formData" :is-disable-submit="isDisableSubmit">
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Company Name'" />
            <form-input v-model="company" :placeholder="'Company Name'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Company Email'" />
            <form-input v-model="email" :placeholder="'Company Email'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Company Address'" />
            <form-input v-model="address" :placeholder="'Company Address'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Company Tax Identification Number'" />
            <form-input v-model="taxIdentificationNumber" :placeholder="'Company Tax Identification Number'" />
        </form-group>
    </customer-form>
</template>

<script>
import { isValueEmpty } from "@/helpers/utils";
import CustomerForm from "@/components/Customer/CustomerForm.vue";
export default {
    name: "CustomerBusinessForm",
    components: {
        CustomerForm,
    },
    props: {
        business: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            company: this.business.company,
            email: this.business.email,
            address: this.business.address,
            taxIdentificationNumber: this.business.tax_identification_number,
        };
    },
    computed: {
        isDisableSubmit() {
            return (
                isValueEmpty(this.company) || isValueEmpty(this.address) || isValueEmpty(this.taxIdentificationNumber)
            );
        },
        formData() {
            return {
                company: this.company,
                email: this.email,
                address: this.address,
                taxIdentificationNumber: this.taxIdentificationNumber,
            };
        },
    },
};
</script>
