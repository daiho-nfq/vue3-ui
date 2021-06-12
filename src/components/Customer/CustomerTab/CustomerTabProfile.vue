<template>
    <form class="space-y-10">
        <customer-tab-profile-info />
        <customer-tab-profile-bank-accounts />
        <app-action-button class="ml-auto block" v-text="'Save'" />
    </form>
</template>

<script>
import CustomerTabProfileBankAccounts from "./CustomerTabProfileBankAccounts.vue";
import CustomerTabProfileInfo from "./CustomerTabProfileInfo.vue";

export default {
    components: { CustomerTabProfileInfo, CustomerTabProfileBankAccounts },
    name: "CustomerTabProfile",
};
</script>
