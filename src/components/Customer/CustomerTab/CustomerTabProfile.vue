<template>
    <form class="grid grid-cols-6 gap-4">
        <customer-tab-profile-info />
        <customer-tab-profile-bank-accounts />
    </form>
</template>

<script>
import CustomerTabProfileBankAccounts from "./CustomerTabProfileBankAccounts.vue";
import CustomerTabProfileInfo from "./CustomerTabProfileInfo.vue";

export default {
    components: { CustomerTabProfileInfo, CustomerTabProfileBankAccounts },
    name: "CustomerTabProfile",
    setup() {
        return {};
    },
};
</script>
