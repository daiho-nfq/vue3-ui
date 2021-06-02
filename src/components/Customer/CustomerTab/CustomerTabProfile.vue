<template>
    <form class="grid grid-cols-6 gap-4">
        <customer-tab-profile-info />
        <customer-tab-profile-bank-accounts />
    </form>
</template>

<script>
import CustomerTabProfileBankAccounts from "./CustomerTabProfileBankAccounts.vue";
import CustomerTabProfileInfo from "./CustomerTabProfileInfo.vue";
import { mapActions } from "vuex";
import { action_fetCustomerData } from "@/store/actions";

export default {
    components: { CustomerTabProfileInfo, CustomerTabProfileBankAccounts },
    name: "CustomerTabProfile",
    created() {
        this.$_getCustomerProfileData();
    },
    methods: {
        $_getCustomerProfileData() {
            const customerCode = this.$route.params.code;
            this.fetchCustomerData(customerCode);
        },
        ...mapActions("customer", {
            fetchCustomerData: action_fetCustomerData,
        }),
    },
};
</script>
