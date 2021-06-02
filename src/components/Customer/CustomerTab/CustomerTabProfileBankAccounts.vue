<template>
    <app-h1 class="col-span-6" v-text="'Bank Accounts'" />
    <!-- <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></ul> -->
</template>

<script>
import { mapGetters } from "vuex";
import { getter_customer_bank_accounts } from "@/store/getters";

export default {
    name: "CustomerTabProfileBankAccounts",
    computed: {
        ...mapGetters("customer", {
            bankAccounts: getter_customer_bank_accounts,
        }),
    },
};
</script>
