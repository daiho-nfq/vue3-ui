<template>
    <customer-form :form-data="formData" :is-disable-submit="isDisableSubmit">
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Full Name'" />
            <form-input v-model="fullName" :placeholder="'Full Name'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Email'" />
            <form-input v-model="email" :placeholder="'Email'" :type="'email'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'Phone Number'" />
            <form-input v-model="phoneNumber" :placeholder="'Phone number'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-4">
            <form-label :label="'Address'" />
            <form-input v-model="address" :placeholder="'Address'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-2">
            <form-label :label="'City'" />
            <form-input v-model="city" :placeholder="'City'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Common Note'" />
            <form-text-area v-model="commonNote" :placeholder="'Common Note'" />
        </form-group>
        <form-group class="col-span-6 sm:col-span-3">
            <form-label :label="'Other Note'" />
            <form-text-area v-model="otherNote" :placeholder="'Other Note'" />
        </form-group>
    </customer-form>
</template>

<script>
import { isValueEmpty } from "@/helpers/utils";
import CustomerForm from "@/components/Customer/CustomerForm.vue";

export default {
    name: "CustomerProfileForm",
    components: {
        CustomerForm,
    },
    props: {
        customer: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            fullName: this.customer.full_name,
            email: this.customer?.email,
            phoneNumber: this.customer.phone_number,
            address: this.customer.address,
            city: this.customer.city,
            commonNote: this.customer.note?.common,
            otherNote: this.customer.note?.other,
        };
    },
    computed: {
        isDisableSubmit() {
            return (
                isValueEmpty(this.fullName) ||
                isValueEmpty(this.phoneNumber) ||
                isValueEmpty(this.address) ||
                isValueEmpty(this.city)
            );
        },
        formData() {
            return {
                full_name: this.fullName,
                email: this.email,
                phone_number: this.phoneNumber,
                address: this.address,
                city: this.city,
                note: {
                    common: this.commonNote,
                    other: this.otherNote,
                },
            };
        },
    },
};
</script>
