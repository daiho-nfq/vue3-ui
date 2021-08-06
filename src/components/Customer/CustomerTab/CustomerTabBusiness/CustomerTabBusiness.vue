<template>
    <div v-if="business" class="grid grid-cols-6 gap-4">
        <app-h1 class="border-l-4 border-red-500 pl-2 font-medium col-span-6" v-text="'Business'" />
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
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isValueEmpty, getValueByPath } from "@/helpers/utils";
import { getter_customer_business } from "@/store/getters";
export default {
    name: "CustomerTabBusiness",
    data() {
        return {
            company: "",
            email: "",
            address: "",
            taxIdentificationNumber: "",
        };
    },
    created() {
        this.$_mapCustomerBusiness();
    },
    computed: {
        ...mapGetters("customer", {
            business: getter_customer_business,
        }),
    },
    methods: {
        $_mapCustomerBusiness() {
            if (isValueEmpty(this.business)) {
                return;
            }

            this.company = getValueByPath(this.business, ["company"], null);
            this.email = getValueByPath(this.business, ["email"], null);
            this.address = getValueByPath(this.business, ["address"], null);
            this.taxIdentificationNumber = getValueByPath(this.business, ["tax_identification_number"], null);
        },
    },
};
</script>
