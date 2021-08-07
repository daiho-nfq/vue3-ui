<template>
    <div v-if="business" class="space-y-4">
        <app-h1 class="border-l-4 border-red-500 pl-2 font-medium col-span-6" v-text="'Business'" />
        <customer-business-form :business="business" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isValueEmpty, getValueByPath } from "@/helpers/utils";
import { getter_customer_business } from "@/store/getters";
import CustomerBusinessForm from "@/components/Customer/CustomerForm/CustomerBusinessForm.vue";
export default {
    name: "CustomerTabBusiness",
    components: {
        CustomerBusinessForm,
    },
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
