<template>
    <div v-if="bankAccounts" class="space-y-4">
        <app-h1 class="col-span-6" v-text="'Bank Accounts'" />
        <ul class="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <customer-tab-profile-bank-accounts-item :bank-accounts="bankAccounts" />
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getter_customer_bank_accounts } from "@/store/getters";
import CustomerTabProfileBankAccountsItem from "@/components/Customer/CustomerTab/CustomerTabProfileBankAccountsItem.vue";

export default {
    name: "CustomerTabProfileBankAccounts",
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
