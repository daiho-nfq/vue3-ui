<template>
    <div class="space-y-4">
        <app-h1 class="border-l-4 border-red-500 pl-2 font-medium" v-text="'Bank Accounts'" />
        <ul v-if="bankAccounts" class="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <customer-tab-profile-bank-accounts-item :bank-accounts="bankAccounts" />
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_customer_bank_accounts } from "@/store/getters";
import CustomerTabProfileBankAccountsItem from "@/components/Customer/CustomerTab/CustomerTabBankAccounts/CustomerTabBankAccountsItem.vue";

export default {
    name: "CustomerTabBankAccounts",
    components: {
        CustomerTabProfileBankAccountsItem,
    },
    computed: {
        ...mapGetters("customer", {
            bankAccounts: getter_customer_bank_accounts,
        }),
    },
};
</script>
