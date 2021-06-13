<template>
    <form class="space-y-10">
        <customer-tab-profile-info />
        <customer-tab-profile-business />
        <customer-tab-profile-bank-accounts />
        <app-action-button class="ml-auto block" v-text="'Save'" />
    </form>
</template>

<script>
import CustomerTabProfileInfo from "@/components/Customer/CustomerTab/CustomerTabProfile/CustomerTabProfileInfo.vue";
import CustomerTabProfileBusiness from "@/components/Customer/CustomerTab/CustomerTabProfile/CustomerTabProfileBusiness.vue";
import CustomerTabProfileBankAccounts from "@/components/Customer/CustomerTab/CustomerTabProfile/CustomerTabProfileBankAccounts.vue";

export default {
    components: { CustomerTabProfileInfo, CustomerTabProfileBusiness, CustomerTabProfileBankAccounts },
    name: "CustomerTabProfile",
};
</script>
