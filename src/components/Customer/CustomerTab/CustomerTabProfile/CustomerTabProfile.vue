<template>
    <div class="space-y-4">
        <div class="col-span-6 flex items-center justify-between">
            <app-h1 class="border-l-4 border-red-500 pl-2 font-medium" v-text="'Personal Info'" />
            <app-badge class="rounded bg-gray-100 text-gray-800" v-text="customer.recent_purchase" />
        </div>
        <customer-profile-form :customer="customer" />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_customer } from "@/store/getters";
import { isValueEmpty, getValueByPath } from "@/helpers/utils";
import CustomerProfileForm from "@/components/Customer/CustomerForm/CustomerProfileForm.vue";

export default {
    name: "CustomerTabProfile",
    components: {
        CustomerProfileForm,
    },
    computed: {
        ...mapGetters("customer", {
            customer: getter_customer,
        }),
    },
    created() {
        this.$_mapCustomerProfile();
    },
    methods: {
        $_mapCustomerProfile() {
            if (isValueEmpty(this.customer)) {
                return;
            }

            this.fullName = getValueByPath(this.customer, ["full_name"], null);
            this.email = getValueByPath(this.customer, ["email"], null);
            this.phoneNumber = getValueByPath(this.customer, ["phone_number"], null);
            this.address = getValueByPath(this.customer, ["address"], null);
            this.city = getValueByPath(this.customer, ["city"], null);
            this.commonNote = getValueByPath(this.customer, ["note", "common"], null);
            this.otherNote = getValueByPath(this.customer, ["note", "other"], null);
        },
    },
};
</script>
